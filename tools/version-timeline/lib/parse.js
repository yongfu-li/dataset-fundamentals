/* Classic script — load presets and user version chains (JSON or CSV snapshots). */
(function (global) {
  "use strict";
  const VersionTimelineLib = global.VersionTimelineLib || (global.VersionTimelineLib = {});

  const MAX_BYTES = 2 * 1024 * 1024;
  const MAX_ROWS_PER_VERSION = 5000;
  const MAX_VERSIONS = 10;

  function stripBom(text) {
    return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
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

  function normalizeVersion(v, index) {
    if (!v || typeof v !== "object") {
      throw new Error("Version " + (index + 1) + " must be an object.");
    }
    const rows = Array.isArray(v.rows) ? v.rows : [];
    if (rows.length > MAX_ROWS_PER_VERSION) {
      throw new Error(
        "Version " + (v.id || index + 1) + " has " + rows.length + " rows; max is " + MAX_ROWS_PER_VERSION + "."
      );
    }
    rows.forEach(function (row, ri) {
      if (!row || typeof row !== "object" || Array.isArray(row)) {
        throw new Error("Version " + (v.id || index + 1) + ", row " + (ri + 1) + " must be an object.");
      }
      if (row.id == null || String(row.id).trim() === "") {
        throw new Error("Every row needs an id field (version " + (v.id || index + 1) + ", row " + (ri + 1) + ").");
      }
    });
    const columns = Array.isArray(v.columns) && v.columns.length ? v.columns.slice() : collectColumns(rows);
    if (columns.indexOf("id") < 0) columns.unshift("id");
    return {
      id: v.id || "v" + (index + 1),
      date: v.date || "",
      message: v.message || "",
      columns: columns,
      rows: rows.map(function (r) {
        return Object.assign({}, r);
      }),
      renames: (v.renames || []).map(function (r) {
        return { from: r.from, to: r.to };
      }),
      schema_notes: v.schema_notes || "",
      callout: v.callout || "",
    };
  }

  function normalizeChain(raw, source) {
    if (!raw || typeof raw !== "object") {
      throw new Error("Expected a JSON object with a versions array.");
    }
    const versionsIn = raw.versions;
    if (!Array.isArray(versionsIn) || versionsIn.length < 2) {
      throw new Error("Need at least two versions in the versions array.");
    }
    if (versionsIn.length > MAX_VERSIONS) {
      throw new Error("At most " + MAX_VERSIONS + " versions per chain.");
    }
    const versions = versionsIn.map(normalizeVersion);
    const isUpload =
      source === "csv-upload" ||
      source === "upload" ||
      (typeof source === "string" && /\.json$/i.test(source));
    return {
      name: raw.name || source || "upload",
      description: raw.description || "Uploaded version chain",
      teachingFocus: raw.teachingFocus || (isUpload ? "user-upload" : ""),
      versions: versions,
      source: source || raw.name || "upload",
    };
  }

  function parseJsonChain(text, source) {
    text = stripBom(text);
    if (text.length > MAX_BYTES) {
      throw new Error("File exceeds " + MAX_BYTES / (1024 * 1024) + " MB limit.");
    }
    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      throw new Error("Invalid JSON.");
    }
    return normalizeChain(data, source);
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

  function parseCsvSnapshot(text, source) {
    text = stripBom(text.trim());
    if (text.length > MAX_BYTES) {
      throw new Error("CSV exceeds " + MAX_BYTES / (1024 * 1024) + " MB limit.");
    }
    const lines = splitCsvLines(text);
    if (lines.length < 2) throw new Error("CSV must have a header row and at least one data row.");
    const headers = parseCsvLine(lines[0]);
    if (!headers.length) throw new Error("CSV header row is empty.");
    if (headers.indexOf("id") < 0) {
      throw new Error('CSV must include an "id" column for row matching across versions.');
    }
    const rows = [];
    for (let i = 1; i < lines.length; i += 1) {
      if (!lines[i].trim()) continue;
      const cells = parseCsvLine(lines[i]);
      const row = {};
      headers.forEach(function (h, j) {
        row[h] = cells[j] !== undefined ? cells[j] : "";
      });
      rows.push(row);
    }
    if (rows.length > MAX_ROWS_PER_VERSION) {
      throw new Error("CSV has " + rows.length + " rows; maximum is " + MAX_ROWS_PER_VERSION + ".");
    }
    return {
      columns: headers,
      rows: rows,
      source: source || "snapshot.csv",
    };
  }

  /**
   * Parse version-chain.json upload.
   */
  function parseUpload(text, filename) {
    const lower = (filename || "").toLowerCase();
    if (!lower.endsWith(".json")) {
      throw new Error("Upload a version-chain.json file, or use CSV snapshots below.");
    }
    return parseJsonChain(text, filename || "upload.json");
  }

  /**
   * Build a version chain from 2+ CSV snapshots (sorted by filename).
   * @param {Array<{name: string, text: string}>} files
   * @param {Object} meta optional { name, description, renamesByVersion: { "v2": [{from,to}] } }
   */
  function parseCsvSnapshots(files, meta) {
    if (!files || files.length < 2) {
      throw new Error("Select at least two CSV files (one snapshot per version).");
    }
    if (files.length > MAX_VERSIONS) {
      throw new Error("At most " + MAX_VERSIONS + " CSV snapshots.");
    }
    const sorted = files.slice().sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    const renamesByVersion = (meta && meta.renamesByVersion) || {};
    const versions = sorted.map(function (f, i) {
      const snap = parseCsvSnapshot(f.text, f.name);
      const base = f.name.replace(/\.csv$/i, "");
      const versionId = base || "v" + (i + 1);
      return {
        id: versionId,
        date: "",
        message: "Snapshot from " + f.name,
        columns: snap.columns,
        rows: snap.rows,
        renames: renamesByVersion[versionId] || [],
        schema_notes: "",
        callout: "",
      };
    });
    return normalizeChain(
      {
        name: (meta && meta.name) || "csv-snapshots",
        description: "Built from " + sorted.length + " CSV snapshot(s).",
        versions: versions,
      },
      "csv-upload"
    );
  }

  function loadPreset(id) {
    const presets = global.VersionTimelinePresets || {};
    const p = presets[id];
    if (!p) throw new Error("Unknown preset '" + id + "'.");
    return normalizeChain(p, id);
  }

  function listPresets() {
    const presets = global.VersionTimelinePresets || {};
    return Object.keys(presets).map(function (id) {
      const p = presets[id];
      return {
        id: id,
        name: p.name || id,
        description: p.description || "",
      };
    });
  }

  function emptyTemplate() {
    return {
      name: "my-dataset",
      description: "Replace with your dataset name and a short note.",
      versions: [
        {
          id: "v1.0.0",
          date: "2024-01-15",
          message: "Initial release",
          columns: ["id", "feature_a", "label"],
          rows: [
            { id: "row-001", feature_a: "alpha", label: "positive" },
            { id: "row-002", feature_a: "beta", label: "negative" },
          ],
          renames: [],
          schema_notes: "Baseline schema.",
        },
        {
          id: "v2.0.0",
          date: "2024-02-01",
          message: "Added rows; corrected labels",
          columns: ["id", "feature_a", "label"],
          rows: [
            { id: "row-001", feature_a: "alpha", label: "positive" },
            { id: "row-002", feature_a: "beta", label: "neutral" },
            { id: "row-003", feature_a: "gamma", label: "positive" },
          ],
          renames: [],
        },
        {
          id: "v3.0.0",
          date: "2024-03-01",
          message: "Renamed label column; added source",
          columns: ["id", "feature_a", "sentiment", "source"],
          rows: [
            { id: "row-001", feature_a: "alpha", sentiment: "positive", source: "web" },
            { id: "row-002", feature_a: "beta", sentiment: "neutral", source: "web" },
            { id: "row-003", feature_a: "gamma", sentiment: "positive", source: "import" },
          ],
          renames: [{ from: "label", to: "sentiment" }],
        },
      ],
    };
  }

  VersionTimelineLib.MAX_BYTES = MAX_BYTES;
  VersionTimelineLib.MAX_ROWS_PER_VERSION = MAX_ROWS_PER_VERSION;
  VersionTimelineLib.MAX_VERSIONS = MAX_VERSIONS;
  VersionTimelineLib.loadPreset = loadPreset;
  VersionTimelineLib.listPresets = listPresets;
  VersionTimelineLib.parseUpload = parseUpload;
  VersionTimelineLib.parseCsvSnapshots = parseCsvSnapshots;
  VersionTimelineLib.normalizeChain = normalizeChain;
  VersionTimelineLib.emptyTemplate = emptyTemplate;
  VersionTimelineLib.clone = clone;
})(typeof window !== "undefined" ? window : globalThis);
