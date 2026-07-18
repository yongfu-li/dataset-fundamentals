/* Classic script — attaches to window.CleaningLib (file:// safe).
 * Export helpers: cleaned CSV and the change log. */
(function (global) {
  "use strict";
  const CleaningLib = global.CleaningLib || (global.CleaningLib = {});

  function csvEscape(value) {
    const s = value === null || value === undefined ? "" : String(value);
    if (/[",\n\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
    return s;
  }

  function toCsv(rows, columns) {
    const lines = [columns.map(csvEscape).join(",")];
    rows.forEach(function (r) {
      lines.push(
        columns
          .map(function (c) {
            return csvEscape(r[c]);
          })
          .join(",")
      );
    });
    return lines.join("\r\n");
  }

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

  function downloadCsv(rows, columns, filename) {
    download(filename || "cleaned-data.csv", toCsv(rows, columns), "text/csv;charset=utf-8");
  }

  function downloadChangeLog(entries, meta, filename) {
    const payload = {
      tool: "Cleaning workbench",
      generated: new Date().toISOString(),
      source: meta.source || "unknown",
      rows_before: meta.rowsBefore,
      rows_after: meta.rowsAfter,
      steps: entries,
    };
    download(filename || "cleaning-log.json", JSON.stringify(payload, null, 2), "application/json");
  }

  CleaningLib.toCsv = toCsv;
  CleaningLib.downloadCsv = downloadCsv;
  CleaningLib.downloadChangeLog = downloadChangeLog;
})(typeof window !== "undefined" ? window : globalThis);
