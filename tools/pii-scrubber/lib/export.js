/* Export helpers (window.PiiLib). */
(function (global) {
  "use strict";
  const PiiLib = global.PiiLib || (global.PiiLib = {});

  function download(filename, text, mime) {
    const blob = new Blob([text], { type: mime || "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function rowsToCsv(rows, columns) {
    function esc(v) {
      if (v == null) return "";
      const s = String(v);
      if (/[",\n\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
      return s;
    }
    const lines = [columns.map(esc).join(",")];
    rows.forEach(function (r) {
      lines.push(
        columns
          .map(function (c) {
            return esc(r[c]);
          })
          .join(",")
      );
    });
    return lines.join("\n") + "\n";
  }

  function buildAudit(session, gate, scrubResult, summary) {
    return {
      format: "pii-scrub-log",
      version: 1,
      exportedAt: new Date().toISOString(),
      source: session.source || session.name || "session",
      bookAnchors: session.bookAnchors || ["§3.4", "§3.5"],
      purpose: gate.purpose,
      consentOk: gate.consentOk,
      retentionDays: gate.retentionDays,
      policy: scrubResult.policy,
      droppedColumns: scrubResult.droppedColumns,
      findingsSummary: summary,
      actions: scrubResult.log,
      rowCount: scrubResult.rows.length,
      columns: scrubResult.columns,
    };
  }

  PiiLib.download = download;
  PiiLib.rowsToCsv = rowsToCsv;
  PiiLib.buildAudit = buildAudit;
})(typeof window !== "undefined" ? window : globalThis);
