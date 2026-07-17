/* Classic script — attaches to window.IaaLib (file:// safe).
 * CSV/JSON parsing and preset loading for the IAA calculator. */
(function (global) {
  "use strict";
  const IaaLib = global.IaaLib || (global.IaaLib = {});

  const MAX_ROWS = 5000;
  const MAX_BYTES = 2 * 1024 * 1024;

  function stripBom(text) {
    return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  }

  function collectColumns(rows) {
    const set = new Set();
    rows.forEach(function (row) {
      Object.keys(row).forEach(function (k) {
        set.add(k);
      });
    });
    return Array.from(set);
  }

  function parseUpload(text, filename) {
    const lower = filename.toLowerCase();
    if (lower.endsWith(".json")) return parseJson(text, filename);
    if (lower.endsWith(".csv")) return parseCsv(text, filename);
    throw new Error("Unsupported file type. Upload .csv or .json only.");
  }

  function parseJson(text, source) {
    text = stripBom(text);
    if (text.length > MAX_BYTES) {
      throw new Error("File exceeds " + MAX_BYTES / (1024 * 1024) + " MB limit.");
    }
    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      throw new Error("Invalid JSON. Expected an array of objects.");
    }
    if (!Array.isArray(data)) throw new Error("JSON must be an array of objects.");
    if (data.length > MAX_ROWS) {
      throw new Error("Dataset has " + data.length + " rows; maximum is " + MAX_ROWS + ".");
    }
    const rows = data.map(function (row, i) {
      if (row === null || typeof row !== "object" || Array.isArray(row)) {
        throw new Error("Row " + (i + 1) + " is not an object.");
      }
      return Object.assign({}, row);
    });
    return { rows: rows, columns: collectColumns(rows), source: source || "upload.json" };
  }

  function parseCsv(text, source) {
    text = stripBom(text);
    if (text.length > MAX_BYTES) {
      throw new Error("File exceeds " + MAX_BYTES / (1024 * 1024) + " MB limit.");
    }
    const lines = splitCsvLines(text.trim());
    if (lines.length < 2) throw new Error("CSV must have a header row and at least one data row.");
    const headers = parseCsvLine(lines[0]);
    if (!headers.length) throw new Error("CSV header row is empty.");
    const rows = [];
    for (let i = 1; i < lines.length; i += 1) {
      if (!lines[i].trim()) continue;
      const cells = parseCsvLine(lines[i]);
      if (cells.length === 1 && cells[0] === "") continue;
      const row = {};
      headers.forEach(function (h, j) {
        row[h] = cells[j] !== undefined ? cells[j] : "";
      });
      rows.push(row);
    }
    if (rows.length > MAX_ROWS) {
      throw new Error("Dataset has " + rows.length + " rows; maximum is " + MAX_ROWS + ".");
    }
    return { rows: rows, columns: headers, source: source || "upload.csv" };
  }

  function splitCsvLines(text) {
    const lines = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < text.length; i += 1) {
      const ch = text[i];
      if (ch === '"') {
        if (inQuotes && text[i + 1] === '"') {
          current += '""';
          i += 1;
        } else {
          inQuotes = !inQuotes;
          current += ch;
        }
      } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
        if (ch === "\r" && text[i + 1] === "\n") i += 1;
        lines.push(current);
        current = "";
      } else {
        current += ch;
      }
    }
    if (current.length || lines.length) lines.push(current);
    return lines;
  }

  function parseCsvLine(line) {
    const cells = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i += 1) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i += 1;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === "," && !inQuotes) {
        cells.push(current);
        current = "";
      } else {
        current += ch;
      }
    }
    cells.push(current);
    return cells;
  }

  function loadPreset(id) {
    const presets = global.IaaPresets || {};
    const p = presets[id];
    if (!p) throw new Error("Unknown preset '" + id + "'.");
    const rows = p.rows.map(function (r) {
      return Object.assign({}, r);
    });
    return {
      rows: rows,
      columns: collectColumns(rows),
      source: id,
      description: p.description || "",
      defaultMapping: p.defaultMapping || {},
      teachingFocus: p.teachingFocus || "",
      expectedKappa: p.expectedKappa,
    };
  }

  function suggestMapping(columns, defaults) {
    const lower = {};
    columns.forEach(function (c) {
      lower[c.toLowerCase()] = c;
    });
    function pick(keys, fallback) {
      if (fallback && columns.indexOf(fallback) >= 0) return fallback;
      for (let i = 0; i < keys.length; i += 1) {
        if (lower[keys[i]]) return lower[keys[i]];
      }
      return null;
    }
    const d = defaults || {};
    return {
      id: pick(["id", "item_id", "span_id", "uid"], d.id),
      text: pick(["text", "span", "sentence", "content", "utterance"], d.text),
      raterA: pick(
        ["annotator_a", "rater_a", "label_a", "annotator1", "rater1", "a"],
        d.raterA
      ),
      raterB: pick(
        ["annotator_b", "rater_b", "label_b", "annotator2", "rater2", "b"],
        d.raterB
      ),
      raterC: pick(
        ["annotator_c", "rater_c", "label_c", "annotator3", "rater3", "c"],
        d.raterC
      ),
    };
  }

  IaaLib.MAX_ROWS = MAX_ROWS;
  IaaLib.MAX_BYTES = MAX_BYTES;
  IaaLib.parseUpload = parseUpload;
  IaaLib.loadPreset = loadPreset;
  IaaLib.suggestMapping = suggestMapping;
})(typeof window !== "undefined" ? window : globalThis);
