/* Scrub / redact policies (window.PiiLib). */
(function (global) {
  "use strict";
  const PiiLib = global.PiiLib || (global.PiiLib = {});

  function maskValue(type, value) {
    const s = String(value);
    if (type === "email") {
      const at = s.indexOf("@");
      if (at > 0) return s.charAt(0) + "***" + s.slice(at);
      return "***";
    }
    if (type === "phone") {
      const digits = s.replace(/\D/g, "");
      if (digits.length >= 4) return "***-***-" + digits.slice(-4);
      return "***";
    }
    if (type === "ssn" || type === "id") {
      return "***-**-" + s.replace(/\D/g, "").slice(-4);
    }
    if (type === "card" || type === "financial") {
      const digits = s.replace(/\D/g, "");
      return "**** **** **** " + digits.slice(-4);
    }
    if (type === "ip") return "***.***.***." + s.split(".").pop();
    if (type === "name") {
      const parts = s.trim().split(/\s+/);
      return parts
        .map(function (p) {
          return p.charAt(0) + "***";
        })
        .join(" ");
    }
    if (s.length <= 2) return "**";
    return s.charAt(0) + "***" + s.charAt(s.length - 1);
  }

  function tokenValue(type, counter) {
    const prefix = String(type || "PII").toUpperCase();
    return "[" + prefix + "_" + String(counter).padStart(3, "0") + "]";
  }

  /**
   * Apply scrub to rows.
   * @param {object[]} rows
   * @param {string[]} columns
   * @param {object[]} findings
   * @param {{ policy: string, dropColumns: string[], columnRoles: object }} opts
   */
  function applyScrub(rows, columns, findings, opts) {
    const policy = (opts && opts.policy) || "mask";
    const dropColumns = (opts && opts.dropColumns) || [];
    const dropSet = {};
    dropColumns.forEach(function (c) {
      dropSet[c] = true;
    });

    const keepCols = (columns || []).filter(function (c) {
      return !dropSet[c];
    });

    const log = [];
    dropColumns.forEach(function (c) {
      log.push({
        action: "drop-column",
        column: c,
        reason: "minimization",
      });
    });

    // Group findings by row/column for in-cell replacement (longest first)
    const byCell = {};
    (findings || []).forEach(function (f) {
      if (f.column == null || f.rowIndex == null) return;
      if (dropSet[f.column]) return;
      const key = f.rowIndex + "|" + f.column;
      if (!byCell[key]) byCell[key] = [];
      byCell[key].push(f);
    });

    let tokenCounter = 1;
    const outRows = (rows || []).map(function (row, ri) {
      const out = {};
      keepCols.forEach(function (col) {
        let val = row[col];
        const key = ri + "|" + col;
        const hits = byCell[key] || [];
        if (!hits.length) {
          out[col] = val;
          return;
        }
        // Sort by start descending for safe splice on string
        const sorted = hits.slice().sort(function (a, b) {
          return b.start - a.start;
        });
        let text = String(val == null ? "" : val);
        sorted.forEach(function (h) {
          let replacement;
          if (policy === "suppress") {
            replacement = "[REDACTED]";
          } else if (policy === "tokenize") {
            replacement = tokenValue(h.type, tokenCounter);
            tokenCounter += 1;
          } else {
            replacement = maskValue(h.type, h.value);
          }
          if (h.wholeCell) {
            text = replacement;
          } else {
            text = text.slice(0, h.start) + replacement + text.slice(h.end);
          }
          log.push({
            action: policy,
            type: h.type,
            column: col,
            rowIndex: ri,
            original: h.value,
            replacement: replacement,
            source: h.source,
          });
        });
        out[col] = text;
      });
      return out;
    });

    return {
      rows: outRows,
      columns: keepCols,
      log: log,
      policy: policy,
      droppedColumns: dropColumns.slice(),
    };
  }

  PiiLib.maskValue = maskValue;
  PiiLib.tokenValue = tokenValue;
  PiiLib.applyScrub = applyScrub;
})(typeof window !== "undefined" ? window : globalThis);
