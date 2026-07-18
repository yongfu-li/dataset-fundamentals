/* Parse presets + CSV/JSON seed uploads (window.SynthTextLib). */
(function (global) {
  "use strict";
  const SynthTextLib = global.SynthTextLib || (global.SynthTextLib = {});
  const MAX_BYTES = 2 * 1024 * 1024;
  const MAX_ROWS = 500;
  const MAX_CHARS = 2000;

  SynthTextLib.MAX_BYTES = MAX_BYTES;
  SynthTextLib.MAX_ROWS = MAX_ROWS;
  SynthTextLib.MAX_CHARS = MAX_CHARS;

  function stripBom(s) {
    return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
  }

  function splitCsvLine(line) {
    const out = [];
    let cur = "";
    let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (inQ) {
        if (c === '"') {
          if (line[i + 1] === '"') {
            cur += '"';
            i++;
          } else {
            inQ = false;
          }
        } else {
          cur += c;
        }
      } else if (c === '"') {
        inQ = true;
      } else if (c === ",") {
        out.push(cur);
        cur = "";
      } else {
        cur += c;
      }
    }
    out.push(cur);
    return out;
  }

  function parseCsv(text) {
    const lines = stripBom(text).replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n").filter(function (l) {
      return l.trim().length;
    });
    if (!lines.length) throw new Error("CSV is empty.");
    const headers = splitCsvLine(lines[0]).map(function (h) {
      return h.trim();
    });
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
      const cells = splitCsvLine(lines[i]);
      const row = {};
      headers.forEach(function (h, j) {
        row[h] = cells[j] != null ? cells[j] : "";
      });
      rows.push(row);
    }
    return { headers: headers, rows: rows };
  }

  function textsFromRows(rows, textCol) {
    const texts = [];
    for (let i = 0; i < rows.length; i++) {
      const t = String(rows[i][textCol] == null ? "" : rows[i][textCol]).trim();
      if (!t) continue;
      if (t.length > MAX_CHARS) {
        throw new Error("Line exceeds " + MAX_CHARS + " characters (row " + (i + 1) + ").");
      }
      texts.push(t);
      if (texts.length > MAX_ROWS) {
        throw new Error("At most " + MAX_ROWS + " seed lines allowed.");
      }
    }
    if (!texts.length) throw new Error("No non-empty text values found.");
    return texts;
  }

  function inferTextColumn(headers) {
    const lower = headers.map(function (h) {
      return h.toLowerCase();
    });
    const prefer = ["text", "seed", "sentence", "review", "content", "body", "message"];
    for (let i = 0; i < prefer.length; i++) {
      const idx = lower.indexOf(prefer[i]);
      if (idx >= 0) return headers[idx];
    }
    return headers[0] || null;
  }

  SynthTextLib.listPresets = function () {
    const bag = global.SynthTextPresets || {};
    return Object.keys(bag).map(function (id) {
      return bag[id];
    });
  };

  SynthTextLib.loadPreset = function (id) {
    const bag = global.SynthTextPresets || {};
    const p = bag[id];
    if (!p) throw new Error("Unknown preset: " + id);
    return {
      id: p.id,
      name: p.name,
      title: p.title,
      description: p.description,
      method: p.method || "template",
      teachingFocus: p.teachingFocus || "",
      bookAnchors: (p.bookAnchors || []).slice(),
      templates: (p.templates || []).slice(),
      slots: JSON.parse(JSON.stringify(p.slots || {})),
      seedTexts: (p.seedTexts || []).slice(),
      source: "preset:" + p.id,
    };
  };

  SynthTextLib.parseUpload = function (text, filename) {
    const raw = stripBom(String(text || ""));
    const name = (filename || "upload").toLowerCase();
    let seedTexts = [];
    let source = name;

    if (name.endsWith(".json") || raw.trim().charAt(0) === "[" || raw.trim().charAt(0) === "{") {
      let data;
      try {
        data = JSON.parse(raw);
      } catch (err) {
        throw new Error("Invalid JSON: " + (err.message || String(err)));
      }
      if (Array.isArray(data)) {
        if (data.length && typeof data[0] === "string") {
          seedTexts = data.map(String);
        } else {
          const headers = data.length ? Object.keys(data[0]) : [];
          const col = inferTextColumn(headers);
          if (!col) throw new Error("JSON array needs objects with a text field.");
          seedTexts = textsFromRows(data, col);
        }
      } else if (data && typeof data === "object") {
        if (Array.isArray(data.texts)) seedTexts = data.texts.map(String);
        else if (Array.isArray(data.seedTexts)) seedTexts = data.seedTexts.map(String);
        else if (Array.isArray(data.items)) {
          seedTexts = data.items.map(function (it) {
            return String(it.text != null ? it.text : it);
          });
        } else {
          throw new Error("JSON object needs texts, seedTexts, or items[].text.");
        }
      } else {
        throw new Error("Unsupported JSON shape.");
      }
    } else {
      const parsed = parseCsv(raw);
      const col = inferTextColumn(parsed.headers);
      if (!col) throw new Error("CSV needs a header row with a text column.");
      seedTexts = textsFromRows(parsed.rows, col);
    }

    seedTexts = seedTexts
      .map(function (t) {
        return String(t).trim();
      })
      .filter(Boolean);
    if (seedTexts.length > MAX_ROWS) throw new Error("At most " + MAX_ROWS + " seed lines allowed.");
    seedTexts.forEach(function (t, i) {
      if (t.length > MAX_CHARS) {
        throw new Error("Line exceeds " + MAX_CHARS + " characters (item " + (i + 1) + ").");
      }
    });
    if (!seedTexts.length) throw new Error("No seed texts found.");

    return {
      id: "upload",
      name: filename || "upload",
      title: "Uploaded seeds",
      description: "Your seed corpus for noise or Markov generation.",
      method: "noise",
      teachingFocus: "Private seeds can still leak through augmented copies—treat exports carefully.",
      bookAnchors: ["§10.5", "§10.2"],
      templates: [],
      slots: {},
      seedTexts: seedTexts,
      source: source,
    };
  };
})(typeof window !== "undefined" ? window : globalThis);
