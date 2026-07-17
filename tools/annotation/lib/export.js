/* Classic script — attaches to window.AnnLib (file:// safe).
 * Download helpers for the annotation mini-lab. */
(function (global) {
  "use strict";
  const AnnLib = global.AnnLib || (global.AnnLib = {});

  /**
   * Trigger a client-side text download.
   * @param {string} filename
   * @param {string} content
   * @param {string} mime
   */
  function downloadText(filename, content, mime) {
    const blob = new Blob([content], { type: mime || "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  /**
   * @param {unknown} data
   * @param {string} filename
   */
  function downloadJson(data, filename) {
    downloadText(filename || "export.json", JSON.stringify(data, null, 2), "application/json");
  }

  AnnLib.downloadText = downloadText;
  AnnLib.downloadJson = downloadJson;
})(typeof window !== "undefined" ? window : globalThis);
