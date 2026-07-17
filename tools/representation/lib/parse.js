/* Classic script — CSV/JSON, bundles, population refs, datasheet hints. */
(function (global) {
  "use strict";
  const RepresentationLib = global.RepresentationLib || (global.RepresentationLib = {});

  const MAX_ROWS = 10000;
  const MAX_BYTES = 5 * 1024 * 1024;

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

  function assertSize(text) {
    text = stripBom(text);
    if (text.length > MAX_BYTES) {
      throw new Error("File exceeds " + MAX_BYTES / (1024 * 1024) + " MB limit.");
    }
    return text;
  }

  function parseJsonValue(text) {
    try {
      return JSON.parse(text);
    } catch (err) {
      throw new Error("Invalid JSON.");
    }
  }

  /** Detect upload kind: tabular | bundle | datasheet | population */
  function detectJsonKind(data) {
    if (Array.isArray(data)) return "tabular";
    if (!data || typeof data !== "object") throw new Error("JSON must be an object or array of rows.");
    if (Array.isArray(data.rows)) return "bundle";
    if (data.dataset && (data.sample_data || data.documentation)) return "datasheet";
    if (data.population && typeof data.population === "object" && !Array.isArray(data.population)) return "population";
    if (looksLikePopulationMap(data)) return "population";
    throw new Error(
      "Unrecognized JSON. Use: row array, bundle {rows, population, defaultMapping}, " +
        "population-ref {population: {...}}, or datasheet-metadata.json."
    );
  }

  function looksLikePopulationMap(obj) {
    const keys = Object.keys(obj);
    if (!keys.length || keys.length > 50) return false;
    let numeric = 0;
    keys.forEach(function (k) {
      const v = Number(obj[k]);
      if (Number.isFinite(v) && v >= 0) numeric += 1;
    });
    return numeric === keys.length;
  }

  function normalizePopulationInput(raw) {
    if (!raw || typeof raw !== "object") throw new Error("Population reference must be a JSON object.");
    let map = raw;
    if (Array.isArray(raw)) {
      map = {};
      raw.forEach(function (entry, i) {
        if (!entry || typeof entry !== "object") {
          throw new Error("Population array entry " + (i + 1) + " must be an object.");
        }
        const g = entry.group != null ? String(entry.group) : entry.name != null ? String(entry.name) : null;
        const share = entry.share != null ? Number(entry.share) : entry.weight != null ? Number(entry.weight) : entry.pct != null ? Number(entry.pct) / 100 : null;
        if (!g || !Number.isFinite(share)) {
          throw new Error('Population array entry ' + (i + 1) + ' needs "group" + "share" (0–1 or pct).');
        }
        map[g] = share > 1 ? share / 100 : share;
      });
    } else if (raw.population && typeof raw.population === "object" && !Array.isArray(raw.population)) {
      map = raw.population;
    }
    const out = {};
    let sum = 0;
    Object.keys(map).forEach(function (g) {
      let v = Number(map[g]);
      if (!Number.isFinite(v) || v < 0) throw new Error('Invalid share for group "' + g + '".');
      if (v > 1 && v <= 100) v = v / 100;
      if (v > 1) throw new Error('Share for "' + g + '" must be 0–1 or 0–100.');
      out[String(g).trim()] = v;
      sum += v;
    });
    if (!Object.keys(out).length) throw new Error("Population reference has no groups.");
    if (sum <= 0) throw new Error("Population shares must sum to a positive value.");
    Object.keys(out).forEach(function (g) {
      out[g] = Math.round((out[g] / sum) * 10000) / 10000;
    });
    return out;
  }

  function parsePopulationReference(text, source) {
    text = assertSize(text);
    const data = parseJsonValue(text);
    return {
      population: normalizePopulationInput(data),
      source: source || "population-ref.json",
    };
  }

  function hintsFromDatasheet(data) {
    if (!data || typeof data !== "object") throw new Error("Expected datasheet-metadata.json object.");
    if (!data.dataset && !data.sample_data && !data.documentation) {
      throw new Error("JSON must look like datasheet-metadata.json (dataset + sample_data / documentation).");
    }
    const dict = (data.sample_data && data.sample_data.data_dictionary) || [];
    const names = dict.map(function (col) {
      return col.name;
    }).filter(Boolean);

    const roleHints = {};
    dict.forEach(function (col) {
      const n = String(col.name || "").toLowerCase();
      const d = String(col.description || "").toLowerCase();
      const blob = n + " " + d;
      if (!roleHints.group && /group|gender|race|ethnic|tone|skin|region|demographic|protected|strata/.test(blob)) {
        roleHints.group = col.name;
      }
      if (!roleHints.label && /label|outcome|qualified|match|truth|target|y_true|class/.test(blob)) {
        roleHints.label = col.name;
      }
      if (!roleHints.score && /score|prob|prediction|risk|credit|confidence/.test(blob)) {
        roleHints.score = col.name;
      }
      if (!roleHints.id && /^id$|identifier|applicant|person|record/.test(blob)) {
        roleHints.id = col.name;
      }
    });

    const defaultMapping = suggestMapping(names, roleHints);
    const descParts = [];
    if (data.dataset && data.dataset.name) descParts.push(data.dataset.name);
    if (data.dataset && data.dataset.version) descParts.push("v" + data.dataset.version);

    return {
      kind: "datasheet",
      source: (data.dataset && data.dataset.name) || "datasheet-metadata.json",
      description: descParts.join(" ") || "",
      defaultMapping: defaultMapping,
      columns: names,
      datasetMeta: data.dataset || null,
      rowCount: data.sample_data ? data.sample_data.row_count : null,
    };
  }

  function parseDatasheetMetadata(text, source) {
    text = assertSize(text);
    const data = parseJsonValue(text);
    const hints = hintsFromDatasheet(data);
    hints.source = source || hints.source;
    return hints;
  }

  function validateRows(rows, source) {
    if (!Array.isArray(rows)) throw new Error("rows must be an array.");
    if (rows.length > MAX_ROWS) {
      throw new Error("Dataset has " + rows.length + " rows; maximum is " + MAX_ROWS + ".");
    }
    return rows.map(function (row, i) {
      if (row === null || typeof row !== "object" || Array.isArray(row)) {
        throw new Error("Row " + (i + 1) + " is not an object.");
      }
      return Object.assign({}, row);
    });
  }

  function parseBundle(data, source) {
    const rows = validateRows(data.rows, source);
    const population = data.population ? normalizePopulationInput(data.population) : null;
    return {
      kind: "dataset",
      rows: rows,
      columns: collectColumns(rows),
      source: data.name || source || "bundle.json",
      description: data.description || "",
      defaultMapping: data.defaultMapping || data.mapping || {},
      population: population || {},
      populationEditable: data.populationEditable === true || !population,
    };
  }

  function parseTabularArray(data, source) {
    const rows = validateRows(data, source);
    return {
      kind: "dataset",
      rows: rows,
      columns: collectColumns(rows),
      source: source || "upload.json",
      description: "",
      defaultMapping: {},
      population: {},
      populationEditable: true,
    };
  }

  function parseUpload(text, filename) {
    const lower = (filename || "").toLowerCase();
    if (lower.endsWith(".csv")) return parseCsv(text, filename);
    if (!lower.endsWith(".json")) {
      throw new Error("Unsupported file type. Upload .csv or .json.");
    }
    text = assertSize(text);
    const data = parseJsonValue(text);
    const kind = detectJsonKind(data);
    if (kind === "tabular") return parseTabularArray(data, filename);
    if (kind === "bundle") return parseBundle(data, filename);
    if (kind === "datasheet") {
      const hints = hintsFromDatasheet(data);
      hints.source = filename || hints.source;
      return hints;
    }
    if (kind === "population") {
      return {
        kind: "population",
        population: normalizePopulationInput(data),
        source: filename || "population-ref.json",
      };
    }
    throw new Error("Unsupported JSON shape.");
  }

  function parseCsv(text, source) {
    text = assertSize(text);
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
      kind: "dataset",
      rows: rows,
      columns: headers,
      source: source || "upload.csv",
      description: "",
      defaultMapping: {},
      population: {},
      populationEditable: true,
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
    const bundle = parseBundle(payload, payload.name || id);
    bundle.kind = "dataset";
    return bundle;
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
      group: defaults.group || find(["group", "gender", "race", "ethnicity", "tone", "skin", "region", "protected", "sensitive"]) || columns[0] || null,
      label: defaults.label || find(["label", "y_true", "outcome", "qualified", "match", "truth", "target"]) || null,
      score: defaults.score || find(["score", "prob", "prediction", "risk", "credit"]) || null,
    };
  }

  function mergeMappingHints(base, hints) {
    base = base || {};
    hints = hints || {};
    return {
      id: base.id || hints.id || null,
      group: base.group || hints.group || null,
      label: base.label || hints.label || null,
      score: base.score || hints.score || null,
    };
  }

  function uniformPopulation(groups) {
    const out = {};
    if (!groups || !groups.length) return out;
    const share = 1 / groups.length;
    groups.forEach(function (g) {
      out[g] = Math.round(share * 10000) / 10000;
    });
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
  RepresentationLib.parsePopulationReference = parsePopulationReference;
  RepresentationLib.parseDatasheetMetadata = parseDatasheetMetadata;
  RepresentationLib.normalizePopulationInput = normalizePopulationInput;
  RepresentationLib.hintsFromDatasheet = hintsFromDatasheet;
  RepresentationLib.loadPreset = loadPreset;
  RepresentationLib.collectColumns = collectColumns;
  RepresentationLib.suggestMapping = suggestMapping;
  RepresentationLib.mergeMappingHints = mergeMappingHints;
  RepresentationLib.uniformPopulation = uniformPopulation;
})(typeof window !== "undefined" ? window : globalThis);
