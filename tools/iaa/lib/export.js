/* Classic script — attaches to window.IaaLib (file:// safe).
 * Export agreement-report.json (category κ or entity F1). */
(function (global) {
  "use strict";
  const IaaLib = global.IaaLib || (global.IaaLib = {});

  function download(filename, text, mime) {
    const blob = new Blob([text], { type: mime || "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 500);
  }

  function downloadReport(report, meta) {
    const mode = report.mode || meta.mode || "category";
    const payload = {
      tool: "IAA calculator",
      generated: new Date().toISOString(),
      source: meta.source || "unknown",
      mode: mode,
      match_options: report.matchOptions || meta.matchOptions || null,
      mapping: meta.mapping || {},
      book_anchors: [
        "§4.5.2 Inter-Annotator Agreement",
        "Table 4.4",
        "eg:4.31 Low Kappa Triggers Guideline Revision",
      ],
      cohen: report.cohen,
      fleiss: report.fleiss,
      entity: report.entity || null,
      contingency: report.contingency
        ? {
            categories: report.contingency.categories,
            matrix: report.contingency.matrix,
            n: report.contingency.n,
          }
        : null,
      n_items: report.items.length,
      n_disagreements: report.disagreements.length,
      skipped: report.skipped,
      disagreements: report.disagreements.map(function (d) {
        if (mode === "spans" || mode === "boxes") {
          return {
            id: d.id,
            text: d.text,
            a_count: d.aCount,
            b_count: d.bCount,
            tp: d.tp,
            fp: d.fp,
            fn: d.fn,
            matches: d.matches,
            unmatched_a: d.unmatchedA,
            unmatched_b: d.unmatchedB,
          };
        }
        return {
          id: d.id,
          text: d.text,
          annotator_a: d.a,
          annotator_b: d.b,
          annotator_c: d.c,
        };
      }),
    };
    download("agreement-report.json", JSON.stringify(payload, null, 2), "application/json");
  }

  IaaLib.downloadReport = downloadReport;
})(typeof window !== "undefined" ? window : globalThis);
