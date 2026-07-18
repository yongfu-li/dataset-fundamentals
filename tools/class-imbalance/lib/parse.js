/* Class imbalance explorer — parse + presets (window.ImbalanceLib). */
(function (global) {
  "use strict";
  const ImbalanceLib = global.ImbalanceLib || (global.ImbalanceLib = {});
  const MAX_ROWS = 5000;
  const MAX_BYTES = 2 * 1024 * 1024;

  ImbalanceLib.MAX_ROWS = MAX_ROWS;
  ImbalanceLib.MAX_BYTES = MAX_BYTES;

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

  ImbalanceLib.parseUpload = function (text, filename) {
    const name = String(filename || "").toLowerCase();
    if (name.endsWith(".json")) return parseJson(text);
    return parseCsv(text);
  };

  ImbalanceLib.loadPreset = function (id) {
    const bag = global.ImbalancePresets || {};
    const p = bag[id];
    if (!p) throw new Error("Unknown preset: " + id);
    const rows = (p.rows || []).map(function (r) {
      return Object.assign({}, r);
    });
    return {
      id: p.id,
      name: p.name,
      title: p.title,
      description: p.description,
      bookAnchors: p.bookAnchors || ["§5.2"],
      teachingFocus: p.teachingFocus,
      labelColumn: p.labelColumn || "label",
      featureColumns: (p.featureColumns || []).slice(),
      positiveLabel: p.positiveLabel != null ? String(p.positiveLabel) : "1",
      rows: rows,
      columns: collectColumns(rows),
      source: "preset:" + p.id,
      meta: p.meta || null,
    };
  };

  ImbalanceLib.listPresets = function () {
    const bag = global.ImbalancePresets || {};
    return Object.keys(bag).map(function (k) {
      const p = bag[k];
      return {
        id: p.id,
        title: p.title,
        description: p.description,
        teachingFocus: p.teachingFocus,
        meta: p.meta,
      };
    });
  };

  ImbalanceLib.inferLabelColumn = function (columns) {
    const cols = columns || [];
    const prefer = [/^(label|y|target|class|churn|fraud|outcome)$/i, /label|target|class|churn|fraud/i];
    for (let i = 0; i < prefer.length; i += 1) {
      const hit = cols.find(function (c) {
        return prefer[i].test(c);
      });
      if (hit) return hit;
    }
    return cols.length ? cols[cols.length - 1] : "";
  };

  ImbalanceLib.inferFeatureColumns = function (columns, labelCol) {
    const numericLike = [];
    (columns || []).forEach(function (c) {
      if (c === labelCol) return;
      if (/^id$/i.test(c) || /_id$/i.test(c)) return;
      numericLike.push(c);
    });
    return numericLike.slice(0, 3);
  };

  ImbalanceLib.collectColumns = collectColumns;
})(typeof window !== "undefined" ? window : globalThis);
