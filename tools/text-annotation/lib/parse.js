/* Classic script — window.TextAnnLib (file:// safe).
 * CSV/JSON upload + preset loading for text annotation. */
(function (global) {
  "use strict";
  const TextAnnLib = global.TextAnnLib || (global.TextAnnLib = {});

  const MAX_ROWS = 500;
  const MAX_BYTES = 2 * 1024 * 1024;
  const MAX_TEXT_LEN = 2000;

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

  function suggestMapping(columns) {
    const lower = columns.map(function (c) {
      return { raw: c, low: String(c).toLowerCase() };
    });
    function find(preds) {
      for (let i = 0; i < lower.length; i += 1) {
        for (let j = 0; j < preds.length; j += 1) {
          if (preds[j](lower[i].low)) return lower[i].raw;
        }
      }
      return null;
    }
    return {
      id: find([
        function (s) {
          return s === "id" || s === "item_id" || s === "doc_id";
        },
      ]),
      text: find([
        function (s) {
          return s === "text" || s === "sentence" || s === "review" || s === "content" || s === "utterance";
        },
      ]),
    };
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
      throw new Error("File exceeds 2 MB limit.");
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
      throw new Error("File exceeds 2 MB limit.");
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
    if (current.length) lines.push(current);
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
    const bag = global.TextAnnPresets || {};
    const p = bag[id];
    if (!p) throw new Error("Unknown preset '" + id + "'.");
    return JSON.parse(JSON.stringify(p));
  }

  function listPresets() {
    const bag = global.TextAnnPresets || {};
    return Object.keys(bag).map(function (k) {
      return bag[k];
    });
  }

  function rowsToItems(rows, mapping) {
    if (!mapping || !mapping.text) {
      throw new Error("Map a text column before continuing.");
    }
    const items = [];
    rows.forEach(function (row, i) {
      const text = row[mapping.text] != null ? String(row[mapping.text]) : "";
      if (!text.trim()) return;
      if (text.length > MAX_TEXT_LEN) {
        throw new Error(
          "Row " + (i + 1) + " exceeds " + MAX_TEXT_LEN + " characters. Shorten texts for this teaching lab."
        );
      }
      const id =
        mapping.id && row[mapping.id] != null && String(row[mapping.id]).trim()
          ? String(row[mapping.id])
          : "U" + String(i + 1).padStart(3, "0");
      items.push({ id: id, text: text });
    });
    if (items.length < 1) throw new Error("No non-empty text rows found.");
    if (items.length > MAX_ROWS) {
      throw new Error("Too many items; maximum is " + MAX_ROWS + ".");
    }
    return items;
  }

  function emptyTemplate(mode) {
    if (mode === "ner") {
      return [
        { id: "S01", text: "Apple is headquartered in Cupertino." },
        { id: "S02", text: "Microsoft opened an office in Redmond." },
      ];
    }
    return [
      { id: "R01", text: "Great product, fast shipping." },
      { id: "R02", text: "It arrived late and scratched." },
      { id: "R03", text: "Average quality for the price." },
    ];
  }

  TextAnnLib.MAX_ROWS = MAX_ROWS;
  TextAnnLib.MAX_BYTES = MAX_BYTES;
  TextAnnLib.MAX_TEXT_LEN = MAX_TEXT_LEN;
  TextAnnLib.parseUpload = parseUpload;
  TextAnnLib.suggestMapping = suggestMapping;
  TextAnnLib.loadPreset = loadPreset;
  TextAnnLib.listPresets = listPresets;
  TextAnnLib.rowsToItems = rowsToItems;
  TextAnnLib.emptyTemplate = emptyTemplate;
})(typeof window !== "undefined" ? window : globalThis);
