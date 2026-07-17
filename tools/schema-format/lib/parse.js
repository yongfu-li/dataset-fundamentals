/* Schema / format translator — parse + presets (window.SchemaLib). */
(function (global) {
  "use strict";
  const SchemaLib = global.SchemaLib || (global.SchemaLib = {});
  const MAX_ROWS = 5000;
  const MAX_BYTES = 2 * 1024 * 1024;

  function isPlainObject(v) {
    return v != null && typeof v === "object" && !Array.isArray(v);
  }

  function isMissing(v) {
    return v === null || v === undefined || (typeof v === "string" && v.trim() === "");
  }

  function collectColumns(rows) {
    const seen = [];
    const set = new Set();
    rows.forEach(function (r) {
      if (!isPlainObject(r)) return;
      Object.keys(r).forEach(function (k) {
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
        let v = cells[j] != null ? cells[j] : "";
        if (v !== "" && !isNaN(Number(v)) && String(Number(v)) === String(v).trim()) {
          v = Number(v);
        }
        row[h] = v;
      });
      rows.push(row);
    }
    if (rows.length > MAX_ROWS) throw new Error("Too many rows (max " + MAX_ROWS + ").");
    return { rows: rows, columns: headers, source: "upload.csv", kind: "csv" };
  }

  function parseJson(text) {
    const data = JSON.parse(text);
    let rows;
    if (Array.isArray(data)) rows = data;
    else if (data && Array.isArray(data.rows)) rows = data.rows;
    else if (isPlainObject(data)) rows = [data];
    else throw new Error("JSON must be an object, an array of objects, or { rows: [...] }.");
    if (!rows.length) throw new Error("No rows in JSON.");
    if (rows.length > MAX_ROWS) throw new Error("Too many rows (max " + MAX_ROWS + ").");
    return { rows: rows, columns: collectColumns(rows), source: "upload.json", kind: "json" };
  }

  function parseUpload(text, filename) {
    const name = String(filename || "").toLowerCase();
    const trimmed = String(text).trim();
    if (
      name.endsWith(".json") ||
      trimmed.charAt(0) === "[" ||
      trimmed.charAt(0) === "{"
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
    const bag = global.SchemaPresets || {};
    const p = bag[id];
    if (!p) throw new Error("Unknown preset '" + id + "'.");
    const clone = JSON.parse(JSON.stringify(p));
    clone.columns = collectColumns(clone.rows);
    return clone;
  }

  function listPresets() {
    const bag = global.SchemaPresets || {};
    return Object.keys(bag).map(function (k) {
      return bag[k];
    });
  }

  SchemaLib.MAX_ROWS = MAX_ROWS;
  SchemaLib.MAX_BYTES = MAX_BYTES;
  SchemaLib.isPlainObject = isPlainObject;
  SchemaLib.isMissing = isMissing;
  SchemaLib.collectColumns = collectColumns;
  SchemaLib.parseUpload = parseUpload;
  SchemaLib.parseCsv = parseCsv;
  SchemaLib.parseJson = parseJson;
  SchemaLib.loadPreset = loadPreset;
  SchemaLib.listPresets = listPresets;
})(typeof window !== "undefined" ? window : globalThis);
