/* Classic script — attaches to window.FairnessLib (file:// safe).
 * Export fairness-report.json. */
(function (global) {
  "use strict";
  const FairnessLib = global.FairnessLib || (global.FairnessLib = {});

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
      tool: "Bias & fairness meter",
      generated: new Date().toISOString(),
      source: meta.source || "unknown",
      mapping: meta.mapping || {},
      book_anchors: ["§7.3 Detecting Bias", "§7.5 Fairness in AI Systems"],
      metrics: report,
      tradeoffSweep: meta.tradeoffSweep || null,
    };
    download("fairness-report.json", JSON.stringify(payload, null, 2), "application/json");
  }

  FairnessLib.downloadReport = downloadReport;
})(typeof window !== "undefined" ? window : globalThis);
