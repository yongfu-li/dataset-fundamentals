/* Scaling / encoding lab — parse + presets (window.ScaleLib). */
(function (global) {
  "use strict";
  const ScaleLib = global.ScaleLib || (global.ScaleLib = {});
  const MAX_ROWS = 5000;
  const MAX_BYTES = 2 * 1024 * 1024;

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
    if (isMissing(v)) return null;
    if (typeof v === "number" && isFinite(v)) return v;
    if (typeof v === "boolean") return v ? 1 : 0;
    const s = String(v).trim().replace(/,/g, "");
    if (s === "") return null;
    const n = Number(s);
    return isFinite(n) ? n : null;
  }

  function collectColumns(rows) {
    const seen = [];
    const set = new Set();
    rows.forEach(function (r) {
      Object.keys(r).forEach(function (k) {
        if (!set.has(k)) {
          set.add(k);
          seen.push(k);
        }
      });
    });
    return seen;
  }

  function inferNumericColumns(rows, columns) {
    return columns.filter(function (col) {
      let nums = 0;
      let seen = 0;
      for (let i = 0; i < rows.length && seen < 40; i += 1) {
        const v = rows[i][col];
        if (isMissing(v)) continue;
        seen += 1;
        if (toNumber(v) != null) nums += 1;
      }
      return seen > 0 && nums / seen >= 0.8;
    });
  }

  function inferCategoricalColumns(rows, columns, numericCols) {
    const numSet = new Set(numericCols || []);
    return columns.filter(function (col) {
      if (numSet.has(col)) return false;
      const vals = new Set();
      rows.forEach(function (r) {
        if (!isMissing(r[col])) vals.add(String(r[col]));
      });
      return vals.size >= 1 && vals.size <= 20;
    });
  }

  function parseCsv(text) {
    const lines = String(text)
      .replace(/^\uFEFF/, "")
      .split(/\r?\n/)
      .filter(function (l) {
        return l.trim() !== "";
      });
    if (lines.length < 2) throw new Error("CSV needs a header and at least one data row.");
    function splitLine(line) {
      const cells = [];
      let cur = "";
      let inQ = false;
      for (let i = 0; i < line.length; i += 1) {
        const ch = line[i];
        if (inQ) {
          if (ch === '"' && line[i + 1] === '"') {
            cur += '"';
            i += 1;
          } else if (ch === '"') {
            inQ = false;
          } else {
            cur += ch;
          }
        } else if (ch === '"') {
          inQ = true;
        } else if (ch === ",") {
          cells.push(cur);
          cur = "";
        } else {
          cur += ch;
        }
      }
      cells.push(cur);
      return cells;
    }
    const headers = splitLine(lines[0]).map(function (h) {
      return h.trim();
    });
    const rows = [];
    for (let i = 1; i < lines.length; i += 1) {
      const cells = splitLine(lines[i]);
      const row = {};
      headers.forEach(function (h, j) {
        row[h] = cells[j] != null ? cells[j] : "";
      });
      rows.push(row);
    }
    if (rows.length > MAX_ROWS) throw new Error("Too many rows (max " + MAX_ROWS + ").");
    return { rows: rows, columns: headers, source: "upload.csv" };
  }

  function parseJson(text) {
    const data = JSON.parse(text);
    let rows;
    if (Array.isArray(data)) rows = data;
    else if (data && Array.isArray(data.rows)) rows = data.rows;
    else throw new Error("JSON must be an array of objects or { rows: [...] }.");
    if (!rows.length) throw new Error("No rows in JSON.");
    if (rows.length > MAX_ROWS) throw new Error("Too many rows (max " + MAX_ROWS + ").");
    return { rows: rows, columns: collectColumns(rows), source: "upload.json" };
  }

  function parseUpload(text, filename) {
    const name = String(filename || "").toLowerCase();
    if (
      name.endsWith(".json") ||
      String(text).trim().charAt(0) === "[" ||
      String(text).trim().charAt(0) === "{"
    ) {
      try {
        return parseJson(text);
      } catch (err) {
        if (name.endsWith(".json")) throw err;
      }
    }
    return parseCsv(text);
  }

  function loadPreset(id) {
    const bag = global.ScalePresets || {};
    const p = bag[id];
    if (!p) throw new Error("Unknown preset '" + id + "'.");
    const clone = JSON.parse(JSON.stringify(p));
    clone.columns = collectColumns(clone.rows);
    return clone;
  }

  function listPresets() {
    const bag = global.ScalePresets || {};
    return Object.keys(bag).map(function (k) {
      return bag[k];
    });
  }

  ScaleLib.MAX_ROWS = MAX_ROWS;
  ScaleLib.MAX_BYTES = MAX_BYTES;
  ScaleLib.isMissing = isMissing;
  ScaleLib.toNumber = toNumber;
  ScaleLib.collectColumns = collectColumns;
  ScaleLib.inferNumericColumns = inferNumericColumns;
  ScaleLib.inferCategoricalColumns = inferCategoricalColumns;
  ScaleLib.parseUpload = parseUpload;
  ScaleLib.loadPreset = loadPreset;
  ScaleLib.listPresets = listPresets;
})(typeof window !== "undefined" ? window : globalThis);
