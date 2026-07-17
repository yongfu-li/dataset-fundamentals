/* k-anonymity lite + generalization (window.DeidLib). */
(function (global) {
  "use strict";
  const DeidLib = global.DeidLib || (global.DeidLib = {});

  function cellStr(v) {
    if (v == null || v === "") return "∅";
    return String(v).trim();
  }

  /** Generalize a single value given column role + policy. */
  DeidLib.generalizeValue = function (col, value, policy) {
    const p = policy || {};
    const raw = value == null ? "" : String(value).trim();
    if (raw === "") return "∅";

    const zipMode = p.zipMode || "exact"; // exact | zip3 | suppress
    const ageMode = p.ageMode || "exact"; // exact | bin5 | bin10 | suppress
    const isZip = /zip|postal|postcode/i.test(col);
    const isAge = /^age$/i.test(col) || /age_/i.test(col);
    const isBirthYear = /birth_?year|yob/i.test(col);

    if (isZip) {
      if (zipMode === "suppress") return "*";
      if (zipMode === "zip3") {
        const digits = raw.replace(/\D/g, "");
        if (digits.length >= 3) return digits.slice(0, 3) + "**";
        return raw.slice(0, Math.min(3, raw.length)) + "**";
      }
      return raw;
    }

    if (isAge || isBirthYear) {
      if (ageMode === "suppress") return "*";
      const n = Number(raw);
      if (!Number.isFinite(n)) return raw;
      if (ageMode === "bin5") {
        const lo = Math.floor(n / 5) * 5;
        return lo + "-" + (lo + 4);
      }
      if (ageMode === "bin10") {
        const lo = Math.floor(n / 10) * 10;
        return lo + "-" + (lo + 9);
      }
      return String(n);
    }

    return raw;
  };

  DeidLib.applyGeneralization = function (rows, quasiCols, policy) {
    return (rows || []).map(function (r) {
      const out = Object.assign({}, r);
      (quasiCols || []).forEach(function (c) {
        out[c] = DeidLib.generalizeValue(c, r[c], policy);
      });
      return out;
    });
  };

  /**
   * Build equivalence classes on quasi-identifier columns.
   * @returns {{ classes: Array, minK: number, n: number, failingRows: number, failingClasses: number, targetK: number }}
   */
  DeidLib.analyzeKAnonymity = function (rows, quasiCols, targetK) {
    const kTarget = Math.max(2, Number(targetK) || 5);
    const cols = (quasiCols || []).filter(Boolean);
    if (!cols.length) {
      throw new Error("Select at least one quasi-identifier column.");
    }
    if (!rows || !rows.length) throw new Error("No rows to analyze.");

    const map = new Map();
    rows.forEach(function (r, i) {
      const key = cols
        .map(function (c) {
          return cellStr(r[c]);
        })
        .join(" | ");
      if (!map.has(key)) {
        map.set(key, {
          key: key,
          values: cols.map(function (c) {
            return { col: c, value: cellStr(r[c]) };
          }),
          size: 0,
          indices: [],
        });
      }
      const g = map.get(key);
      g.size += 1;
      g.indices.push(i);
    });

    const classes = Array.from(map.values()).sort(function (a, b) {
      return a.size - b.size;
    });
    let minK = classes.length ? classes[0].size : 0;
    let failingClasses = 0;
    let failingRows = 0;
    classes.forEach(function (c) {
      c.passes = c.size >= kTarget;
      if (!c.passes) {
        failingClasses += 1;
        failingRows += c.size;
      }
    });

    const sizeHist = {};
    classes.forEach(function (c) {
      sizeHist[c.size] = (sizeHist[c.size] || 0) + 1;
    });

    return {
      targetK: kTarget,
      quasiColumns: cols.slice(),
      n: rows.length,
      nClasses: classes.length,
      minK: minK,
      passes: minK >= kTarget,
      failingClasses: failingClasses,
      failingRows: failingRows,
      riskShare: rows.length ? failingRows / rows.length : 0,
      classes: classes,
      sizeHistogram: sizeHist,
      worst: classes.filter(function (c) {
        return !c.passes;
      }).slice(0, 12),
    };
  };

  DeidLib.describeRisk = function (analysis) {
    if (!analysis) return "";
    if (analysis.passes) {
      return (
        "Table meets k=" +
        analysis.targetK +
        " on the selected quasi-identifiers (minimum class size " +
        analysis.minK +
        ")."
      );
    }
    return (
      "k-anonymity fails: minimum class size is " +
      analysis.minK +
      " (need ≥ " +
      analysis.targetK +
      "). " +
      analysis.failingRows +
      " of " +
      analysis.n +
      " rows sit in classes smaller than k."
    );
  };

  /** Drop rows in classes smaller than k (suppression demo). */
  DeidLib.suppressSmallClasses = function (rows, quasiCols, targetK) {
    const analysis = DeidLib.analyzeKAnonymity(rows, quasiCols, targetK);
    const keep = new Set();
    analysis.classes.forEach(function (c) {
      if (c.passes) {
        c.indices.forEach(function (i) {
          keep.add(i);
        });
      }
    });
    const kept = [];
    const removed = [];
    rows.forEach(function (r, i) {
      if (keep.has(i)) kept.push(r);
      else removed.push(r);
    });
    return {
      kept: kept,
      removed: removed,
      removedCount: removed.length,
      analysisBefore: analysis,
    };
  };
})(typeof window !== "undefined" ? window : globalThis);
