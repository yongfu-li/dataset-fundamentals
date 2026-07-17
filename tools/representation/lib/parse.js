/* Classic script — CSV/JSON + presets for Representation bias visualizer. */
(function (global) {
  "use strict";
  const RepresentationLib = global.RepresentationLib || (global.RepresentationLib = {});

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
    return {
      rows: rows,
      columns: collectColumns(rows),
      source: source || "upload.json",
      population: null,
      populationEditable: true,
      description: "",
      defaultMapping: {},
    };
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
    return {
      rows: rows,
      columns: headers,
      source: source || "upload.csv",
      population: null,
      populationEditable: true,
      description: "",
      defaultMapping: {},
    };
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
    if (current) lines.push(current);
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
        cells.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }
    cells.push(current.trim());
    return cells;
  }

  function loadPreset(id) {
    const bundled = global.RepresentationPresets || {};
    const payload = bundled[id];
    if (!payload) {
      throw new Error("Preset '" + id + "' not found. Ensure presets-bundle.js is loaded.");
    }
    const rows = (payload.rows || []).map(function (r) {
      return Object.assign({}, r);
    });
    return {
      rows: rows,
      columns: collectColumns(rows),
      source: payload.name || id,
      description: payload.description || "",
      defaultMapping: payload.defaultMapping || {},
      population: Object.assign({}, payload.population || {}),
      populationEditable: payload.populationEditable === true,
    };
  }

  function suggestMapping(columns, defaults) {
    defaults = defaults || {};
    const lower = columns.map(function (c) {
      return { raw: c, key: String(c).toLowerCase() };
    });

    function find(patterns) {
      for (let i = 0; i < patterns.length; i += 1) {
        const p = patterns[i];
        for (let j = 0; j < lower.length; j += 1) {
          if (lower[j].key === p || lower[j].key.indexOf(p) !== -1) return lower[j].raw;
        }
      }
      return null;
    }

    return {
      id: defaults.id || find(["id", "applicant", "person"]) || null,
      group: defaults.group || find(["group", "gender", "race", "ethnicity", "tone", "skin", "protected", "sensitive"]) || columns[0] || null,
      label: defaults.label || find(["label", "y_true", "outcome", "qualified", "match", "truth"]) || null,
      score: defaults.score || find(["score", "prob", "prediction", "risk", "credit"]) || null,
    };
  }

  /** Uniform population shares over observed groups (upload default). */
  function uniformPopulation(groups) {
    const out = {};
    if (!groups || !groups.length) return out;
    const share = 1 / groups.length;
    groups.forEach(function (g) {
      out[g] = Math.round(share * 10000) / 10000;
    });
    // Fix rounding so shares sum to 1
    const keys = Object.keys(out);
    let sum = 0;
    keys.forEach(function (k, i) {
      if (i < keys.length - 1) sum += out[k];
      else out[k] = Math.round((1 - sum) * 10000) / 10000;
    });
    return out;
  }

  RepresentationLib.MAX_ROWS = MAX_ROWS;
  RepresentationLib.MAX_BYTES = MAX_BYTES;
  RepresentationLib.parseUpload = parseUpload;
  RepresentationLib.loadPreset = loadPreset;
  RepresentationLib.collectColumns = collectColumns;
  RepresentationLib.suggestMapping = suggestMapping;
  RepresentationLib.uniformPopulation = uniformPopulation;
})(typeof window !== "undefined" ? window : globalThis);
