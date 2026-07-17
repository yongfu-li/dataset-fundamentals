/* Consent & PII scrubber — parse + presets (window.PiiLib). */
(function (global) {
  "use strict";
  const PiiLib = global.PiiLib || (global.PiiLib = {});
  const MAX_ROWS = 5000;
  const MAX_BYTES = 2 * 1024 * 1024;

  function collectColumns(rows) {
    const seen = [];
    const set = new Set();
    (rows || []).forEach(function (r) {
      Object.keys(r || {}).forEach(function (k) {
        if (!set.has(k)) {
          set.add(k);
          seen.push(k);
        }
      });
    });
    return seen;
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
    return { rows: rows, columns: headers, source: "upload.csv", mode: "table" };
  }

  function parseJson(text) {
    const data = JSON.parse(text);
    let rows;
    if (Array.isArray(data)) rows = data;
    else if (data && Array.isArray(data.rows)) rows = data.rows;
    else throw new Error("JSON must be an array of objects or { rows: [...] }.");
    if (!rows.length) throw new Error("No rows in JSON.");
    if (rows.length > MAX_ROWS) throw new Error("Too many rows (max " + MAX_ROWS + ").");
    return { rows: rows, columns: collectColumns(rows), source: "upload.json", mode: "table" };
  }

  function parseUpload(text, filename) {
    const name = String(filename || "").toLowerCase();
    const trimmed = String(text).trim();
    if (name.endsWith(".txt") && trimmed.indexOf(",") === -1 && trimmed.charAt(0) !== "[" && trimmed.charAt(0) !== "{") {
      const lines = trimmed.split(/\r?\n/).filter(function (l) {
        return l.trim() !== "";
      });
      if (lines.length > MAX_ROWS) throw new Error("Too many lines (max " + MAX_ROWS + ").");
      return {
        rows: lines.map(function (line, i) {
          return { line_id: i + 1, note: line };
        }),
        columns: ["line_id", "note"],
        source: "upload.txt",
        mode: "text",
      };
    }
    if (name.endsWith(".json") || trimmed.charAt(0) === "[" || trimmed.charAt(0) === "{") {
      try {
        return parseJson(text);
      } catch (err) {
        if (name.endsWith(".json")) throw err;
      }
    }
    return parseCsv(text);
  }

  function loadPreset(id) {
    const bag = global.PiiPresets || {};
    const p = bag[id];
    if (!p) throw new Error("Unknown preset '" + id + "'.");
    const clone = JSON.parse(JSON.stringify(p));
    clone.columns = collectColumns(clone.rows);
    return clone;
  }

  function listPresets() {
    const bag = global.PiiPresets || {};
    return Object.keys(bag).map(function (k) {
      return bag[k];
    });
  }

  PiiLib.MAX_ROWS = MAX_ROWS;
  PiiLib.MAX_BYTES = MAX_BYTES;
  PiiLib.collectColumns = collectColumns;
  PiiLib.parseUpload = parseUpload;
  PiiLib.loadPreset = loadPreset;
  PiiLib.listPresets = listPresets;
})(typeof window !== "undefined" ? window : globalThis);
