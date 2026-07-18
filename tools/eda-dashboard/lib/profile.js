/* Classic script — profiling + summaries + correlation/group-by (window.EdaLib). */
(function (global) {
  "use strict";
  const EdaLib = global.EdaLib || (global.EdaLib = {});

  function isMissing(v) {
    return (
      v === null ||
      v === undefined ||
      (typeof v === "string" && v.trim() === "") ||
      (typeof v === "string" &&
        ["na", "n/a", "null", "none", "-"].indexOf(v.trim().toLowerCase()) !== -1)
    );
  }

  function toNumber(v) {
    if (typeof v === "number") return Number.isFinite(v) ? v : null;
    if (typeof v !== "string") return null;
    const t = v.trim();
    if (t === "") return null;
    const n = Number(t);
    return Number.isFinite(n) ? n : null;
  }

  function isNumericColumn(rows, col) {
    let ok = 0;
    let seen = 0;
    rows.forEach(function (r) {
      const v = r[col];
      if (isMissing(v)) return;
      seen += 1;
      if (toNumber(v) !== null) ok += 1;
    });
    return seen > 0 && ok / seen >= 0.8;
  }

  function round2(n) {
    return Math.round(n * 100) / 100;
  }

  function quantile(sorted, q) {
    if (!sorted.length) return null;
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    }
    return sorted[base];
  }

  function schemaTable(rows, columns) {
    return columns.map(function (col) {
      let missing = 0;
      let nonNull = 0;
      rows.forEach(function (r) {
        if (isMissing(r[col])) missing += 1;
        else nonNull += 1;
      });
      const numeric = isNumericColumn(rows, col);
      return {
        column: col,
        inferredType: numeric ? "numeric" : "categorical",
        nonNull: nonNull,
        missing: missing,
        missingPct: rows.length ? round2((100 * missing) / rows.length) : 0,
      };
    });
  }

  function missingProfile(rows, columns) {
    return schemaTable(rows, columns)
      .filter(function (p) {
        return p.missing > 0;
      })
      .sort(function (a, b) {
        return b.missing - a.missing;
      });
  }

  function columnStats(rows, col) {
    const nums = [];
    rows.forEach(function (r) {
      const n = toNumber(r[col]);
      if (n !== null) nums.push(n);
    });
    if (!nums.length) return null;
    const sorted = nums.slice().sort(function (a, b) {
      return a - b;
    });
    const mean =
      nums.reduce(function (s, n) {
        return s + n;
      }, 0) / nums.length;
    let variance = 0;
    nums.forEach(function (n) {
      variance += (n - mean) * (n - mean);
    });
    variance = nums.length > 1 ? variance / (nums.length - 1) : 0;
    const sd = Math.sqrt(variance);
    const median = quantile(sorted, 0.5);
    return {
      count: nums.length,
      mean: round2(mean),
      median: round2(median),
      sd: round2(sd),
      min: round2(sorted[0]),
      max: round2(sorted[sorted.length - 1]),
      q1: round2(quantile(sorted, 0.25)),
      q3: round2(quantile(sorted, 0.75)),
      skewHint: mean > median * 1.05 ? "right-skew likely" : mean < median * 0.95 ? "left-skew likely" : "roughly symmetric",
    };
  }

  function boxPlotStats(rows, col) {
    const nums = [];
    rows.forEach(function (r) {
      const n = toNumber(r[col]);
      if (n !== null) nums.push(n);
    });
    if (!nums.length) return null;
    const sorted = nums.slice().sort(function (a, b) {
      return a - b;
    });
    const q1 = quantile(sorted, 0.25);
    const median = quantile(sorted, 0.5);
    const q3 = quantile(sorted, 0.75);
    const iqr = q3 - q1;
    const fenceLo = q1 - 1.5 * iqr;
    const fenceHi = q3 + 1.5 * iqr;
    const whiskerLo = sorted.find(function (n) {
      return n >= fenceLo;
    });
    let whiskerHi = sorted[0];
    sorted.forEach(function (n) {
      if (n <= fenceHi) whiskerHi = n;
    });
    const outliers = nums.filter(function (n) {
      return n < fenceLo || n > fenceHi;
    });
    return {
      count: nums.length,
      min: round2(sorted[0]),
      q1: round2(q1),
      median: round2(median),
      q3: round2(q3),
      max: round2(sorted[sorted.length - 1]),
      whiskerLo: round2(whiskerLo != null ? whiskerLo : sorted[0]),
      whiskerHi: round2(whiskerHi),
      fenceLo: round2(fenceLo),
      fenceHi: round2(fenceHi),
      outliers: outliers.map(round2),
    };
  }

  function olsResiduals(ys, xs) {
    const n = Math.min(ys.length, xs.length);
    if (n < 3) return null;
    let sx = 0;
    let sy = 0;
    let sxx = 0;
    let sxy = 0;
    for (let i = 0; i < n; i += 1) {
      sx += xs[i];
      sy += ys[i];
      sxx += xs[i] * xs[i];
      sxy += xs[i] * ys[i];
    }
    const denom = n * sxx - sx * sx;
    if (Math.abs(denom) < 1e-12) return null;
    const b = (n * sxy - sx * sy) / denom;
    const a = (sy - b * sx) / n;
    const out = [];
    for (let i = 0; i < n; i += 1) {
      out.push(ys[i] - (a + b * xs[i]));
    }
    return out;
  }

  function partialPearson(rows, xCol, yCol, zCol) {
    const xs = [];
    const ys = [];
    const zs = [];
    rows.forEach(function (r) {
      const x = toNumber(r[xCol]);
      const y = toNumber(r[yCol]);
      const z = toNumber(r[zCol]);
      if (x !== null && y !== null && z !== null) {
        xs.push(x);
        ys.push(y);
        zs.push(z);
      }
    });
    if (xs.length < 5) return null;
    const rx = olsResiduals(xs, zs);
    const ry = olsResiduals(ys, zs);
    if (!rx || !ry) return null;
    return pearson(rx, ry);
  }

  function histogramBins(rows, col, nBins) {
    nBins = nBins || 10;
    const nums = [];
    rows.forEach(function (r) {
      const n = toNumber(r[col]);
      if (n !== null) nums.push(n);
    });
    if (!nums.length) return null;
    let min = nums[0];
    let max = nums[0];
    nums.forEach(function (n) {
      if (n < min) min = n;
      if (n > max) max = n;
    });
    if (min === max) {
      return { bins: [{ lo: min, hi: max, count: nums.length }], min: min, max: max };
    }
    const width = (max - min) / nBins;
    const bins = [];
    for (let i = 0; i < nBins; i += 1) {
      bins.push({ lo: min + i * width, hi: min + (i + 1) * width, count: 0 });
    }
    nums.forEach(function (n) {
      let idx = Math.floor((n - min) / width);
      if (idx >= nBins) idx = nBins - 1;
      if (idx < 0) idx = 0;
      bins[idx].count += 1;
    });
    return { bins: bins, min: min, max: max };
  }

  function categoryCounts(rows, col, topN) {
    topN = topN || 12;
    const map = new Map();
    rows.forEach(function (r) {
      if (isMissing(r[col])) return;
      const k = String(r[col]);
      map.set(k, (map.get(k) || 0) + 1);
    });
    const arr = Array.from(map.entries())
      .map(function (e) {
        return { label: e[0], count: e[1] };
      })
      .sort(function (a, b) {
        return b.count - a.count;
      });
    return arr.slice(0, topN);
  }

  function duplicateProfile(rows) {
    const seen = new Map();
    let extras = 0;
    rows.forEach(function (r) {
      const key = JSON.stringify(r);
      if (seen.has(key)) extras += 1;
      else seen.set(key, true);
    });
    return extras;
  }

  function inconsistencyProfile(rows, columns) {
    const out = [];
    columns.forEach(function (col) {
      if (isNumericColumn(rows, col)) return;
      const groups = new Map();
      rows.forEach(function (r) {
        const v = r[col];
        if (isMissing(v)) return;
        const raw = String(v);
        const norm = raw.trim().toLowerCase();
        if (!groups.has(norm)) groups.set(norm, new Set());
        groups.get(norm).add(raw);
      });
      const variants = [];
      groups.forEach(function (set, norm) {
        if (set.size > 1) variants.push({ normalized: norm, variants: Array.from(set) });
      });
      if (variants.length) out.push({ column: col, groups: variants });
    });
    return out;
  }

  function outlierProfile(rows, columns) {
    const out = [];
    columns.forEach(function (col) {
      if (!isNumericColumn(rows, col)) return;
      const nums = [];
      rows.forEach(function (r) {
        const n = toNumber(r[col]);
        if (n !== null) nums.push(n);
      });
      if (nums.length < 8) return;
      const sorted = nums.slice().sort(function (a, b) {
        return a - b;
      });
      const q1 = quantile(sorted, 0.25);
      const q3 = quantile(sorted, 0.75);
      const iqr = q3 - q1;
      const lo = q1 - 1.5 * iqr;
      const hi = q3 + 1.5 * iqr;
      const outliers = nums.filter(function (n) {
        return n < lo || n > hi;
      });
      if (outliers.length) {
        out.push({
          column: col,
          count: outliers.length,
          lo: round2(lo),
          hi: round2(hi),
        });
      }
    });
    return out;
  }

  function pearson(xs, ys) {
    const n = Math.min(xs.length, ys.length);
    if (n < 3) return null;
    let sx = 0;
    let sy = 0;
    for (let i = 0; i < n; i += 1) {
      sx += xs[i];
      sy += ys[i];
    }
    const mx = sx / n;
    const my = sy / n;
    let num = 0;
    let dx = 0;
    let dy = 0;
    for (let i = 0; i < n; i += 1) {
      const a = xs[i] - mx;
      const b = ys[i] - my;
      num += a * b;
      dx += a * a;
      dy += b * b;
    }
    if (dx === 0 || dy === 0) return null;
    return round2(num / Math.sqrt(dx * dy));
  }

  function correlationMatrix(rows, columns) {
    const numeric = columns.filter(function (c) {
      return isNumericColumn(rows, c);
    }).slice(0, 8);
    const matrix = numeric.map(function () {
      return numeric.map(function () {
        return null;
      });
    });
    for (let i = 0; i < numeric.length; i += 1) {
      for (let j = i; j < numeric.length; j += 1) {
        if (i === j) {
          matrix[i][j] = 1;
          continue;
        }
        const xs = [];
        const ys = [];
        rows.forEach(function (r) {
          const a = toNumber(r[numeric[i]]);
          const b = toNumber(r[numeric[j]]);
          if (a !== null && b !== null) {
            xs.push(a);
            ys.push(b);
          }
        });
        const r = pearson(xs, ys);
        matrix[i][j] = r;
        matrix[j][i] = r;
      }
    }
    return { columns: numeric, matrix: matrix };
  }

  function scatterPairs(rows, xCol, yCol, limit) {
    limit = limit || 500;
    const pts = [];
    rows.forEach(function (r) {
      if (pts.length >= limit) return;
      const x = toNumber(r[xCol]);
      const y = toNumber(r[yCol]);
      if (x !== null && y !== null) pts.push({ x: x, y: y });
    });
    return pts;
  }

  function groupByAgg(rows, groupCol, valueCol, agg) {
    agg = agg || "mean";
    const buckets = new Map();
    rows.forEach(function (r) {
      if (isMissing(r[groupCol])) return;
      const g = String(r[groupCol]);
      if (!buckets.has(g)) buckets.set(g, []);
      const n = toNumber(r[valueCol]);
      if (n !== null) buckets.get(g).push(n);
      else if (agg === "count") buckets.get(g).push(1);
    });
    const out = [];
    buckets.forEach(function (vals, g) {
      let value = null;
      if (agg === "count") {
        value = vals.length;
      } else if (!vals.length) {
        value = null;
      } else if (agg === "sum") {
        value = round2(
          vals.reduce(function (s, n) {
            return s + n;
          }, 0)
        );
      } else if (agg === "min") {
        value = round2(Math.min.apply(null, vals));
      } else if (agg === "max") {
        value = round2(Math.max.apply(null, vals));
      } else {
        value = round2(
          vals.reduce(function (s, n) {
            return s + n;
          }, 0) / vals.length
        );
      }
      out.push({ group: g, value: value, n: vals.length });
    });
    out.sort(function (a, b) {
      return (b.value || 0) - (a.value || 0);
    });
    return out;
  }

  function filterRows(rows, filters) {
    // filters: [{ column, op: 'eq'|'contains'|'gte'|'lte', value }]
    if (!filters || !filters.length) return rows.slice();
    return rows.filter(function (r) {
      return filters.every(function (f) {
        if (!f.column) return true;
        const raw = r[f.column];
        if (f.op === "eq") {
          if (isMissing(f.value) || f.value === "") return true;
          return String(raw) === String(f.value);
        }
        if (f.op === "contains") {
          if (!f.value) return true;
          return String(raw == null ? "" : raw)
            .toLowerCase()
            .indexOf(String(f.value).toLowerCase()) !== -1;
        }
        const n = toNumber(raw);
        const t = toNumber(f.value);
        if (t === null) return true;
        if (n === null) return false;
        if (f.op === "gte") return n >= t;
        if (f.op === "lte") return n <= t;
        return true;
      });
    });
  }

  function issueSummary(rows, columns) {
    return {
      rowCount: rows.length,
      missing: missingProfile(rows, columns),
      duplicates: duplicateProfile(rows),
      inconsistencies: inconsistencyProfile(rows, columns),
      outliers: outlierProfile(rows, columns),
    };
  }

  EdaLib.isMissing = isMissing;
  EdaLib.toNumber = toNumber;
  EdaLib.isNumericColumn = isNumericColumn;
  EdaLib.schemaTable = schemaTable;
  EdaLib.missingProfile = missingProfile;
  EdaLib.columnStats = columnStats;
  EdaLib.boxPlotStats = boxPlotStats;
  EdaLib.histogramBins = histogramBins;
  EdaLib.categoryCounts = categoryCounts;
  EdaLib.correlationMatrix = correlationMatrix;
  EdaLib.scatterPairs = scatterPairs;
  EdaLib.groupByAgg = groupByAgg;
  EdaLib.filterRows = filterRows;
  EdaLib.issueSummary = issueSummary;
  EdaLib.pearson = pearson;
  EdaLib.partialPearson = partialPearson;
  EdaLib.olsResiduals = olsResiduals;
})(typeof window !== "undefined" ? window : globalThis);
