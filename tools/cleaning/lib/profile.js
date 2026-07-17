/* Classic script — attaches to window.CleaningLib (file:// safe).
 * Dataset profiling: detects the Section 5.2 issue families so learners can
 * see problems before choosing fixes. */
(function (global) {
  "use strict";
  const CleaningLib = global.CleaningLib || (global.CleaningLib = {});

  function isMissing(v) {
    return (
      v === null ||
      v === undefined ||
      (typeof v === "string" && v.trim() === "") ||
      (typeof v === "string" && ["na", "n/a", "null", "none", "-"].indexOf(v.trim().toLowerCase()) !== -1)
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

  /** A column is numeric when >=80% of its non-missing values parse as numbers. */
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

  function columnValues(rows, col) {
    return rows.map(function (r) {
      return r[col];
    });
  }

  /** Missing counts per column. */
  function missingProfile(rows, columns) {
    return columns
      .map(function (col) {
        const missing = rows.filter(function (r) {
          return isMissing(r[col]);
        }).length;
        return { column: col, missing: missing, pct: rows.length ? (missing / rows.length) * 100 : 0 };
      })
      .filter(function (p) {
        return p.missing > 0;
      })
      .sort(function (a, b) {
        return b.missing - a.missing;
      });
  }

  /** Exact duplicate rows (all fields equal). Returns count of removable extras. */
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

  /** Duplicated values in a supposed unique-ID column. */
  function idDuplicateProfile(rows, idColumn) {
    if (!idColumn) return 0;
    const seen = new Set();
    let dupes = 0;
    rows.forEach(function (r) {
      const v = String(r[idColumn] == null ? "" : r[idColumn]).trim();
      if (!v) return;
      if (seen.has(v)) dupes += 1;
      else seen.add(v);
    });
    return dupes;
  }

  /**
   * Category variants that normalize (trim + lowercase) to the same value,
   * e.g. "Online", "online ", "ONLINE".
   */
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

  /** IQR outliers per numeric column. */
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
          examples: outliers.slice(0, 4).map(round2),
        });
      }
    });
    return out;
  }

  function quantile(sorted, q) {
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    }
    return sorted[base];
  }

  function round2(n) {
    return Math.round(n * 100) / 100;
  }

  /** Simple numeric summary for before/after comparison. */
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
    const mean = nums.reduce(function (s, n) {
      return s + n;
    }, 0) / nums.length;
    return {
      count: nums.length,
      mean: round2(mean),
      min: round2(sorted[0]),
      median: round2(quantile(sorted, 0.5)),
      max: round2(sorted[sorted.length - 1]),
    };
  }

  /** Full profile across all issue families. */
  function profileDataset(rows, columns, idColumn) {
    return {
      rowCount: rows.length,
      missing: missingProfile(rows, columns),
      duplicates: duplicateProfile(rows),
      idDuplicates: idDuplicateProfile(rows, idColumn),
      inconsistencies: inconsistencyProfile(rows, columns),
      outliers: outlierProfile(rows, columns),
    };
  }

  /** IQR fences for a numeric column (shared by profiling and row highlighting). */
  function iqrBounds(rows, col) {
    if (!isNumericColumn(rows, col)) return null;
    const nums = [];
    rows.forEach(function (r) {
      const n = toNumber(r[col]);
      if (n !== null) nums.push(n);
    });
    if (nums.length < 4) return null;
    const sorted = nums.slice().sort(function (a, b) {
      return a - b;
    });
    const q1 = quantile(sorted, 0.25);
    const q3 = quantile(sorted, 0.75);
    const iqr = q3 - q1;
    return { lo: q1 - 1.5 * iqr, hi: q3 + 1.5 * iqr };
  }

  /**
   * Per-row and per-cell issue map for table highlighting and filters.
   * @returns {{ cellIssues: Object.<string, {type: string, reason: string}>, rowFlags: string[][] }}
   */
  function buildIssueMap(rows, columns, idColumn) {
    const cellIssues = {};
    const rowFlags = rows.map(function () {
      return [];
    });

    function addCell(ri, col, type, reason) {
      cellIssues[ri + ":" + col] = { type: type, reason: reason };
      if (rowFlags[ri].indexOf(type) === -1) rowFlags[ri].push(type);
    }

    function addRow(ri, type) {
      if (rowFlags[ri].indexOf(type) === -1) rowFlags[ri].push(type);
    }

    rows.forEach(function (r, ri) {
      columns.forEach(function (col) {
        if (isMissing(r[col])) {
          addCell(ri, col, "missing", "Missing or empty value (§5.2.1)");
        }
      });
    });

    const exactGroups = new Map();
    rows.forEach(function (r, ri) {
      const key = JSON.stringify(r);
      if (!exactGroups.has(key)) exactGroups.set(key, []);
      exactGroups.get(key).push(ri);
    });
    exactGroups.forEach(function (indices) {
      if (indices.length <= 1) return;
      indices.forEach(function (ri) {
        addRow(ri, "duplicate");
        columns.forEach(function (col) {
          addCell(ri, col, "duplicate", "Exact duplicate row — identical values in every column (§5.2.3)");
        });
      });
    });

    if (idColumn) {
      const seen = new Map();
      rows.forEach(function (r, ri) {
        const v = String(r[idColumn] == null ? "" : r[idColumn]).trim();
        if (!v) return;
        if (seen.has(v)) {
          addRow(ri, "duplicate");
          addCell(
            ri,
            idColumn,
            "duplicate",
            'Repeated ' + idColumn + ' "' + v + '" — near-duplicate (§5.2.3)'
          );
        } else {
          seen.set(v, ri);
        }
      });
    }

    columns.forEach(function (col) {
      if (isNumericColumn(rows, col)) return;
      const normGroups = new Map();
      rows.forEach(function (r) {
        const v = r[col];
        if (isMissing(v)) return;
        const raw = String(v);
        const norm = raw.trim().toLowerCase();
        if (!normGroups.has(norm)) normGroups.set(norm, []);
        normGroups.get(norm).push(raw);
      });
      normGroups.forEach(function (variants, norm) {
        const unique = Array.from(new Set(variants));
        if (unique.length <= 1) return;
        const freq = {};
        variants.forEach(function (v) {
          freq[v] = (freq[v] || 0) + 1;
        });
        let canonical = unique[0];
        unique.forEach(function (v) {
          if (freq[v] > freq[canonical]) canonical = v;
        });
        rows.forEach(function (r, ri) {
          const raw = String(r[col]);
          if (isMissing(r[col])) return;
          if (raw.trim().toLowerCase() === norm && raw !== canonical) {
            addCell(
              ri,
              col,
              "inconsistent",
              'Category variant of "' + canonical + '" — spelling or case differs (§5.2.4)'
            );
            addRow(ri, "inconsistent");
          }
        });
      });
    });

    columns.forEach(function (col) {
      const bounds = iqrBounds(rows, col);
      if (!bounds) return;
      rows.forEach(function (r, ri) {
        const n = toNumber(r[col]);
        if (n === null) return;
        if (n < bounds.lo || n > bounds.hi) {
          addCell(
            ri,
            col,
            "outlier",
            "Outside 1.5×IQR range [" + round2(bounds.lo) + ", " + round2(bounds.hi) + "] (§5.2.5)"
          );
          addRow(ri, "outlier");
        }
      });
    });

    return { cellIssues: cellIssues, rowFlags: rowFlags };
  }

  function rowMatchesFilter(rowFlags, filter) {
    if (filter === "all") return true;
    if (filter === "any") return rowFlags.length > 0;
    if (filter === "duplicate") return rowFlags.indexOf("duplicate") !== -1;
    return rowFlags.indexOf(filter) !== -1;
  }

  /** Histogram bin counts for a numeric column. */
  function histogramBins(rows, col, binCount) {
    const nums = [];
    rows.forEach(function (r) {
      const n = toNumber(r[col]);
      if (n !== null) nums.push(n);
    });
    if (!nums.length) return null;
    const min = Math.min.apply(null, nums);
    const max = Math.max.apply(null, nums);
    const bins = binCount || 12;
    if (min === max) {
      return { min: min, max: max, bins: [{ lo: min, hi: max, count: nums.length }] };
    }
    const width = (max - min) / bins;
    const counts = new Array(bins).fill(0);
    nums.forEach(function (n) {
      let idx = Math.floor((n - min) / width);
      if (idx >= bins) idx = bins - 1;
      counts[idx] += 1;
    });
    return {
      min: min,
      max: max,
      bins: counts.map(function (count, i) {
        return { lo: min + i * width, hi: min + (i + 1) * width, count: count };
      }),
    };
  }

  /** Category frequency table for bar charts (top N + other bucket). */
  function categoryCounts(rows, col, maxLabels) {
    const limit = maxLabels || 12;
    const counts = new Map();
    rows.forEach(function (r) {
      const v = r[col];
      const key = isMissing(v) ? "(missing)" : String(v);
      counts.set(key, (counts.get(key) || 0) + 1);
    });
    const sorted = Array.from(counts.entries()).sort(function (a, b) {
      return b[1] - a[1];
    });
    const top = sorted.slice(0, limit);
    const labels = top.map(function (e) {
      return e[0];
    });
    const values = top.map(function (e) {
      return e[1];
    });
    const other = sorted.slice(limit).reduce(function (s, e) {
      return s + e[1];
    }, 0);
    if (other > 0) {
      labels.push("(other)");
      values.push(other);
    }
    return { labels: labels, counts: values };
  }

  CleaningLib.isMissing = isMissing;
  CleaningLib.toNumber = toNumber;
  CleaningLib.isNumericColumn = isNumericColumn;
  CleaningLib.columnValues = columnValues;
  CleaningLib.columnStats = columnStats;
  CleaningLib.profileDataset = profileDataset;
  CleaningLib.iqrBounds = iqrBounds;
  CleaningLib.buildIssueMap = buildIssueMap;
  CleaningLib.rowMatchesFilter = rowMatchesFilter;
  CleaningLib.histogramBins = histogramBins;
  CleaningLib.categoryCounts = categoryCounts;
})(typeof window !== "undefined" ? window : globalThis);
