/* Classic script — export helpers for text annotation (window.TextAnnLib). */
(function (global) {
  "use strict";
  const TextAnnLib = global.TextAnnLib || (global.TextAnnLib = {});

  function buildExport(session) {
    const items = session.items || [];
    const mode = session.mode;
    const annotations = session.annotations || {};
    const outItems = items.map(function (item) {
      const ann = annotations[item.id] || {};
      if (mode === "sentiment") {
        return {
          id: item.id,
          text: item.text,
          label: ann.label || null,
        };
      }
      return {
        id: item.id,
        text: item.text,
        spans: (ann.spans || []).map(function (s) {
          return {
            start: s.start,
            end: s.end,
            label: s.label,
            surface: item.text.slice(s.start, s.end),
          };
        }),
      };
    });
    return {
      format: "text-annotations",
      version: 1,
      mode: mode,
      labels: session.labels || [],
      source: session.source || "session",
      exportedAt: new Date().toISOString(),
      bookAnchors: session.bookAnchors || [],
      counts: {
        items: items.length,
        labeled: TextAnnLib.labeledCount(items, mode, annotations),
      },
      items: outItems,
    };
  }

  function downloadJson(obj, filename) {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "text-annotations.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function downloadCsv(session) {
    const mode = session.mode;
    const items = session.items || [];
    const annotations = session.annotations || {};
    let lines;
    if (mode === "sentiment") {
      lines = ["id,text,label"];
      items.forEach(function (item) {
        const ann = annotations[item.id] || {};
        lines.push(csvRow([item.id, item.text, ann.label || ""]));
      });
    } else {
      lines = ["id,text,start,end,label,surface"];
      items.forEach(function (item) {
        const spans = (annotations[item.id] && annotations[item.id].spans) || [];
        if (!spans.length) {
          lines.push(csvRow([item.id, item.text, "", "", "", ""]));
          return;
        }
        spans.forEach(function (s) {
          lines.push(
            csvRow([item.id, item.text, s.start, s.end, s.label, item.text.slice(s.start, s.end)])
          );
        });
      });
    }
    const blob = new Blob([lines.join("\n") + "\n"], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "text-annotations.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function csvRow(cells) {
    return cells
      .map(function (c) {
        const s = String(c == null ? "" : c);
        if (/[",\n\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
        return s;
      })
      .join(",");
  }

  function downloadTemplate(mode) {
    const presetId = mode === "ner" ? "ner-entities" : "sentiment-reviews";
    let rows;
    try {
      const preset = TextAnnLib.loadPreset(presetId);
      rows = (preset.items || []).map(function (item) {
        const row = { id: item.id, text: item.text };
        if (item.hint) row.hint = item.hint;
        return row;
      });
    } catch (err) {
      rows = TextAnnLib.emptyTemplate(mode || "sentiment");
    }
    const filename =
      mode === "ner" ? "ner-entities-template.json" : "sentiment-reviews-template.json";
    downloadJson(rows, filename);
  }

  TextAnnLib.buildExport = buildExport;
  TextAnnLib.downloadJson = downloadJson;
  TextAnnLib.downloadCsv = downloadCsv;
  TextAnnLib.downloadTemplate = downloadTemplate;
  TextAnnLib.downloadExport = function (session) {
    downloadJson(buildExport(session), "text-annotations.json");
  };
})(typeof window !== "undefined" ? window : globalThis);
