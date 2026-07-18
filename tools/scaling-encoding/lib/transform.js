/* Scaling / encoding transforms (window.ScaleLib). */
(function (global) {
  "use strict";
  const ScaleLib = global.ScaleLib || (global.ScaleLib = {});

  function columnValues(rows, col) {
    return rows.map(function (r) {
      return ScaleLib.toNumber(r[col]);
    });
  }

  function finiteStats(values) {
    const xs = values.filter(function (v) {
      return v != null && isFinite(v);
    });
    if (!xs.length) {
      return { n: 0, min: null, max: null, mean: null, std: null };
    }
    let min = xs[0];
    let max = xs[0];
    let sum = 0;
    xs.forEach(function (v) {
      if (v < min) min = v;
      if (v > max) max = v;
      sum += v;
    });
    const mean = sum / xs.length;
    let varSum = 0;
    xs.forEach(function (v) {
      const d = v - mean;
      varSum += d * d;
    });
    const std = xs.length > 1 ? Math.sqrt(varSum / (xs.length - 1)) : 0;
    return { n: xs.length, min: min, max: max, mean: mean, std: std };
  }

  function fitScale(values, method) {
    const stats = finiteStats(values);
    const m = method || "none";
    if (m === "none") {
      return { method: "none", params: {}, stats: stats };
    }
    if (m === "minmax") {
      const range = (stats.max != null && stats.min != null) ? stats.max - stats.min : 0;
      return {
        method: "minmax",
        params: { min: stats.min, max: stats.max, range: range },
        stats: stats,
      };
    }
    if (m === "zscore") {
      return {
        method: "zscore",
        params: { mean: stats.mean, std: stats.std },
        stats: stats,
      };
    }
    if (m === "log1p") {
      return { method: "log1p", params: {}, stats: stats };
    }
    throw new Error("Unknown scale method '" + m + "'.");
  }

  function applyScaleValue(v, fit) {
    if (v == null || !isFinite(v)) return null;
    const m = fit.method;
    if (m === "none") return v;
    if (m === "minmax") {
      const range = fit.params.range;
      if (!range || range === 0) return 0;
      return (v - fit.params.min) / range;
    }
    if (m === "zscore") {
      const std = fit.params.std;
      if (!std || std === 0) return 0;
      return (v - fit.params.mean) / std;
    }
    if (m === "log1p") {
      if (v < 0) return null;
      return Math.log(1 + v);
    }
    return v;
  }

  function applyScaleColumn(rows, col, fit) {
    return rows.map(function (r) {
      const out = Object.assign({}, r);
      const raw = ScaleLib.toNumber(r[col]);
      out[col] = applyScaleValue(raw, fit);
      return out;
    });
  }

  function uniqueCategories(rows, col) {
    const seen = [];
    const set = new Set();
    rows.forEach(function (r) {
      if (ScaleLib.isMissing(r[col])) return;
      const s = String(r[col]);
      if (!set.has(s)) {
        set.add(s);
        seen.push(s);
      }
    });
    return seen;
  }

  function encodeColumn(rows, col, method, options) {
    const opts = options || {};
    const m = method || "none";
    const cats = uniqueCategories(rows, col);
    if (m === "none") {
      return {
        method: "none",
        categories: cats,
        mapping: null,
        columns: null,
        rows: rows.map(function (r) {
          return Object.assign({}, r);
        }),
        warnings: [],
      };
    }
    if (m === "onehot") {
      if (cats.length > 24) {
        throw new Error("Too many categories for one-hot (max 24).");
      }
      const newCols = cats.map(function (c) {
        return col + "_" + c.replace(/\s+/g, "_");
      });
      const mapping = {};
      cats.forEach(function (c, i) {
        mapping[c] = newCols[i];
      });
      const outRows = rows.map(function (r) {
        const out = Object.assign({}, r);
        delete out[col];
        newCols.forEach(function (nc) {
          out[nc] = 0;
        });
        if (!ScaleLib.isMissing(r[col])) {
          const key = mapping[String(r[col])];
          if (key) out[key] = 1;
        }
        return out;
      });
      return {
        method: "onehot",
        categories: cats,
        mapping: mapping,
        columns: newCols,
        rows: outRows,
        warnings: [],
      };
    }
    if (m === "label") {
      let order = opts.labelOrder && opts.labelOrder.length ? opts.labelOrder.slice() : cats.slice();
      // Ensure all seen categories appear
      cats.forEach(function (c) {
        if (order.indexOf(c) === -1) order.push(c);
      });
      const mapping = {};
      order.forEach(function (c, i) {
        mapping[c] = i;
      });
      const warnings = [];
      if (!opts.labelOrder || !opts.labelOrder.length) {
        warnings.push(
          "Label codes used alphabetical/first-seen order. For nominal categories this invents false ordinality — prefer one-hot (eg:5.47)."
        );
      }
      const outRows = rows.map(function (r) {
        const out = Object.assign({}, r);
        if (ScaleLib.isMissing(r[col])) out[col] = null;
        else out[col] = mapping[String(r[col])];
        return out;
      });
      return {
        method: "label",
        categories: order,
        mapping: mapping,
        columns: [col],
        rows: outRows,
        warnings: warnings,
      };
    }
    if (m === "target") {
      const targetCol = opts.targetCol;
      if (!targetCol) throw new Error("Target encoding needs a numeric target column.");
      const sums = {};
      const counts = {};
      rows.forEach(function (r) {
        if (ScaleLib.isMissing(r[col])) return;
        const t = ScaleLib.toNumber(r[targetCol]);
        if (t == null) return;
        const k = String(r[col]);
        sums[k] = (sums[k] || 0) + t;
        counts[k] = (counts[k] || 0) + 1;
      });
      const mapping = {};
      cats.forEach(function (c) {
        mapping[c] = counts[c] ? sums[c] / counts[c] : 0;
      });
      const outRows = rows.map(function (r) {
        const out = Object.assign({}, r);
        if (ScaleLib.isMissing(r[col])) out[col] = null;
        else out[col] = mapping[String(r[col])];
        return out;
      });
      return {
        method: "target",
        categories: cats,
        mapping: mapping,
        columns: [col],
        rows: outRows,
        warnings: [
          "Target encoding fit on the full table — this leaks label information into features. Fit inside CV folds or after train/test split (eg:5.49).",
        ],
      };
    }
    throw new Error("Unknown encode method '" + m + "'.");
  }

  /**
   * Apply scale to xCol/yCol on a copy, then optional categorical encode.
   * Scale fits are computed on the original (pre-encode) numeric columns.
   */
  function runPipeline(rows, columns, cfg) {
    const config = cfg || {};
    const scaleMethod = config.scaleMethod || "none";
    const encodeMethod = config.encodeMethod || "none";
    const xCol = config.xCol || "";
    const yCol = config.yCol || "";
    const catCol = config.catCol || "";
    const scaleCols = [];
    [xCol, yCol].forEach(function (c) {
      if (c && scaleCols.indexOf(c) === -1) scaleCols.push(c);
    });
    if (config.extraScaleCols) {
      config.extraScaleCols.forEach(function (c) {
        if (c && scaleCols.indexOf(c) === -1) scaleCols.push(c);
      });
    }

    const fits = {};
    let working = rows.map(function (r) {
      return Object.assign({}, r);
    });
    let warnings = [];

    scaleCols.forEach(function (col) {
      if (columns.indexOf(col) === -1) return;
      const fit = fitScale(columnValues(working, col), scaleMethod);
      fits[col] = fit;
      working = applyScaleColumn(working, col, fit);
      if (scaleMethod === "log1p") {
        const neg = columnValues(rows, col).some(function (v) {
          return v != null && v < 0;
        });
        if (neg) {
          warnings.push("log1p skipped negative values in '" + col + "' (set to null).");
        }
      }
    });

    let encodeResult = null;
    let outColumns = columns.slice();
    if (catCol && encodeMethod !== "none" && columns.indexOf(catCol) !== -1) {
      encodeResult = encodeColumn(working, catCol, encodeMethod, {
        labelOrder: config.labelOrder,
        targetCol: config.targetCol,
      });
      working = encodeResult.rows;
      warnings = warnings.concat(encodeResult.warnings || []);
      if (encodeMethod === "onehot") {
        outColumns = columns
          .filter(function (c) {
            return c !== catCol;
          })
          .concat(encodeResult.columns);
      }
    }

    return {
      rows: working,
      columns: outColumns,
      fits: fits,
      encode: encodeResult,
      warnings: warnings,
      config: {
        scaleMethod: scaleMethod,
        encodeMethod: encodeMethod,
        xCol: xCol,
        yCol: yCol,
        catCol: catCol,
      },
    };
  }

  ScaleLib.columnValues = columnValues;
  ScaleLib.finiteStats = finiteStats;
  ScaleLib.fitScale = fitScale;
  ScaleLib.applyScaleValue = applyScaleValue;
  ScaleLib.applyScaleColumn = applyScaleColumn;
  ScaleLib.uniqueCategories = uniqueCategories;
  ScaleLib.encodeColumn = encodeColumn;
  ScaleLib.runPipeline = runPipeline;
})(typeof window !== "undefined" ? window : globalThis);
