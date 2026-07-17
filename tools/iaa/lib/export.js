/* Classic script — attaches to window.IaaLib (file:// safe).
 * Export agreement-report.json. */
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
    const payload = {
      tool: "IAA calculator",
      generated: new Date().toISOString(),
      source: meta.source || "unknown",
      mapping: meta.mapping || {},
      book_anchors: [
        "§4.5.2 Inter-Annotator Agreement",
        "Table 4.4",
        "eg:4.31 Low Kappa Triggers Guideline Revision",
      ],
      cohen: report.cohen,
      fleiss: report.fleiss,
      contingency: {
        categories: report.contingency.categories,
        matrix: report.contingency.matrix,
        n: report.contingency.n,
      },
      n_items: report.items.length,
      n_disagreements: report.disagreements.length,
      skipped: report.skipped,
      disagreements: report.disagreements.map(function (d) {
        return { id: d.id, text: d.text, annotator_a: d.a, annotator_b: d.b, annotator_c: d.c };
      }),
    };
    download("agreement-report.json", JSON.stringify(payload, null, 2), "application/json");
  }

  IaaLib.downloadReport = downloadReport;
})(typeof window !== "undefined" ? window : globalThis);
