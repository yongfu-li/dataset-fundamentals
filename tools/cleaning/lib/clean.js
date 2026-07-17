/* Classic script — attaches to window.CleaningLib (file:// safe).
 * Cleaning operations engine. Every operation is pure: it takes rows and
 * returns { rows, log } where log describes what changed (Section 5.3). */
(function (global) {
  "use strict";
  const CleaningLib = global.CleaningLib || (global.CleaningLib = {});
  const isMissing = CleaningLib.isMissing;
  const toNumber = CleaningLib.toNumber;

  function cloneRows(rows) {
    return rows.map(function (r) {
      return Object.assign({}, r);
    });
  }

  /* ---------- Missing values (§5.2.1–5.2.2, §5.3.1) ---------- */

  /** Drop rows where the given column is missing. */
  function dropMissingRows(rows, col) {
    const kept = rows.filter(function (r) {
      return !isMissing(r[col]);
    });
    return {
      rows: kept,
      log: "Dropped " + (rows.length - kept.length) + " rows with missing '" + col + "'.",
    };
  }

  /** Impute missing numeric values with mean or median. */
  function imputeNumeric(rows, col, strategy) {
    const nums = [];
    rows.forEach(function (r) {
      const n = toNumber(r[col]);
      if (n !== null) nums.push(n);
    });
    if (!nums.length) return { rows: rows, log: "No numeric values in '" + col + "'; nothing imputed." };
    let fill;
    if (strategy === "median") {
      const sorted = nums.slice().sort(function (a, b) {
        return a - b;
      });
      const mid = Math.floor(sorted.length / 2);
      fill = sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
      fill = nums.reduce(function (s, n) {
        return s + n;
      }, 0) / nums.length;
    }
    fill = Math.round(fill * 100) / 100;
    let filled = 0;
    const out = cloneRows(rows);
    out.forEach(function (r) {
      if (isMissing(r[col])) {
        r[col] = fill;
        filled += 1;
      }
    });
    return {
      rows: out,
      log: "Imputed " + filled + " missing '" + col + "' values with " + strategy + " (" + fill + ").",
    };
  }

  /** Impute missing categorical values with the most frequent value. */
  function imputeMode(rows, col) {
    const counts = new Map();
    rows.forEach(function (r) {
      const v = r[col];
      if (isMissing(v)) return;
      const key = String(v);
      counts.set(key, (counts.get(key) || 0) + 1);
    });
    let mode = null;
    let best = -1;
    counts.forEach(function (n, v) {
      if (n > best) {
        best = n;
        mode = v;
      }
    });
    if (mode === null) return { rows: rows, log: "Column '" + col + "' has no values; nothing imputed." };
    let filled = 0;
    const out = cloneRows(rows);
    out.forEach(function (r) {
      if (isMissing(r[col])) {
        r[col] = mode;
        filled += 1;
      }
    });
    return {
      rows: out,
      log: "Imputed " + filled + " missing '" + col + "' values with mode ('" + mode + "').",
    };
  }

  /** Add a <col>_missing indicator column (flag strategy). */
  function flagMissing(rows, col) {
    const flagCol = col + "_missing";
    let flagged = 0;
    const out = rows.map(function (r) {
      const copy = Object.assign({}, r);
      const miss = isMissing(r[col]);
      copy[flagCol] = miss ? 1 : 0;
      if (miss) flagged += 1;
      return copy;
    });
    return {
      rows: out,
      log: "Added indicator '" + flagCol + "' flagging " + flagged + " missing rows.",
      newColumn: flagCol,
    };
  }

  /* ---------- Duplicates (§5.2.3, §5.3.2) ---------- */

  /** Remove exact duplicate rows, keeping the first occurrence. */
  function dropExactDuplicates(rows) {
    const seen = new Set();
    const kept = [];
    rows.forEach(function (r) {
      const key = JSON.stringify(r);
      if (!seen.has(key)) {
        seen.add(key);
        kept.push(r);
      }
    });
    return {
      rows: kept,
      log: "Removed " + (rows.length - kept.length) + " exact duplicate rows (kept first occurrence).",
    };
  }

  /** Remove rows whose key column repeats, keeping the first occurrence. */
  function dropDuplicatesByKey(rows, col) {
    const seen = new Set();
    const kept = [];
    rows.forEach(function (r) {
      const key = String(r[col] == null ? "" : r[col]).trim();
      if (!key || !seen.has(key)) {
        if (key) seen.add(key);
        kept.push(r);
      }
    });
    return {
      rows: kept,
      log: "Removed " + (rows.length - kept.length) + " rows with duplicate '" + col + "' (kept first).",
    };
  }

  /* ---------- Inconsistent categories (§5.2.4, §5.3.3) ---------- */

  /** Trim whitespace and lowercase all values in a text column. */
  function normalizeText(rows, col, mode) {
    let changed = 0;
    const out = rows.map(function (r) {
      const copy = Object.assign({}, r);
      const v = r[col];
      if (!isMissing(v) && typeof v === "string") {
        let next = v.trim();
        if (mode === "lower") next = next.toLowerCase();
        else if (mode === "title") next = next.toLowerCase().replace(/\b\w/g, function (c) {
          return c.toUpperCase();
        });
        if (next !== v) changed += 1;
        copy[col] = next;
      }
      return copy;
    });
    const label = mode === "lower" ? "trim + lowercase" : mode === "title" ? "trim + Title Case" : "trim";
    return { rows: out, log: "Normalized '" + col + "' (" + label + "); " + changed + " values changed." };
  }

  /** Replace one category value with another (manual merge). */
  function replaceValue(rows, col, from, to) {
    let changed = 0;
    const out = rows.map(function (r) {
      const copy = Object.assign({}, r);
      if (String(r[col]) === from) {
        copy[col] = to;
        changed += 1;
      }
      return copy;
    });
    return { rows: out, log: "Replaced '" + from + "' with '" + to + "' in '" + col + "' (" + changed + " rows)." };
  }

  /* ---------- Outliers (§5.2.5, §5.3.4) ---------- */

  function iqrBounds(rows, col) {
    const nums = [];
    rows.forEach(function (r) {
      const n = toNumber(r[col]);
      if (n !== null) nums.push(n);
    });
    if (nums.length < 4) return null;
    const sorted = nums.slice().sort(function (a, b) {
      return a - b;
    });
    const q = function (p) {
      const pos = (sorted.length - 1) * p;
      const base = Math.floor(pos);
      const rest = pos - base;
      return sorted[base + 1] !== undefined ? sorted[base] + rest * (sorted[base + 1] - sorted[base]) : sorted[base];
    };
    const q1 = q(0.25);
    const q3 = q(0.75);
    const iqr = q3 - q1;
    return { lo: q1 - 1.5 * iqr, hi: q3 + 1.5 * iqr };
  }

  /** Remove rows whose value lies outside the 1.5×IQR fences. */
  function removeOutliers(rows, col) {
    const bounds = iqrBounds(rows, col);
    if (!bounds) return { rows: rows, log: "Not enough numeric data in '" + col + "' for IQR fences." };
    const kept = rows.filter(function (r) {
      const n = toNumber(r[col]);
      return n === null || (n >= bounds.lo && n <= bounds.hi);
    });
    return {
      rows: kept,
      log:
        "Removed " + (rows.length - kept.length) + " outlier rows in '" + col + "' outside [" +
        r2(bounds.lo) + ", " + r2(bounds.hi) + "] (1.5×IQR).",
    };
  }

  /** Cap (winsorize) values to the 1.5×IQR fences instead of removing rows. */
  function capOutliers(rows, col) {
    const bounds = iqrBounds(rows, col);
    if (!bounds) return { rows: rows, log: "Not enough numeric data in '" + col + "' for IQR fences." };
    let changed = 0;
    const out = rows.map(function (r) {
      const copy = Object.assign({}, r);
      const n = toNumber(r[col]);
      if (n !== null) {
        if (n < bounds.lo) {
          copy[col] = r2(bounds.lo);
          changed += 1;
        } else if (n > bounds.hi) {
          copy[col] = r2(bounds.hi);
          changed += 1;
        }
      }
      return copy;
    });
    return {
      rows: out,
      log: "Capped " + changed + " values in '" + col + "' to [" + r2(bounds.lo) + ", " + r2(bounds.hi) + "] (winsorize).",
    };
  }

  function r2(n) {
    return Math.round(n * 100) / 100;
  }

  CleaningLib.ops = {
    dropMissingRows: dropMissingRows,
    imputeNumeric: imputeNumeric,
    imputeMode: imputeMode,
    flagMissing: flagMissing,
    dropExactDuplicates: dropExactDuplicates,
    dropDuplicatesByKey: dropDuplicatesByKey,
    normalizeText: normalizeText,
    replaceValue: replaceValue,
    removeOutliers: removeOutliers,
    capOutliers: capOutliers,
  };
})(typeof window !== "undefined" ? window : globalThis);
