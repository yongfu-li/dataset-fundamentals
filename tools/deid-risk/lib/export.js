/* Export helpers (window.DeidLib). */
(function (global) {
  "use strict";
  const DeidLib = global.DeidLib || (global.DeidLib = {});

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

  function round4(n) {
    return Math.round(n * 10000) / 10000;
  }

  DeidLib.buildReport = function (session, analysis, policy, quasiCols) {
    return {
      format: "deid-risk-report",
      version: 1,
      exportedAt: new Date().toISOString(),
      source: session.source || session.name || "session",
      bookAnchors: session.bookAnchors || ["§3.4"],
      method: "k-anonymity",
      quasiIdentifiers: (quasiCols || analysis.quasiColumns || []).slice(),
      generalization: policy || {},
      targetK: analysis.targetK,
      minK: analysis.minK,
      passes: analysis.passes,
      n: analysis.n,
      nClasses: analysis.nClasses,
      failingClasses: analysis.failingClasses,
      failingRows: analysis.failingRows,
      riskShare: round4(analysis.riskShare),
      summary: DeidLib.describeRisk(analysis),
      worstClasses: (analysis.worst || []).map(function (c) {
        return { key: c.key, size: c.size, passes: c.passes };
      }),
    };
  };

  DeidLib.reportToMarkdown = function (report) {
    const lines = [
      "# De-identification risk report (k-anonymity)",
      "",
      "- Source: `" + report.source + "`",
      "- Quasi-identifiers: " + (report.quasiIdentifiers || []).join(", "),
      "- Target k: " + report.targetK,
      "- Minimum class size: " + report.minK,
      "- Passes: " + (report.passes ? "yes" : "no"),
      "- Rows in failing classes: " + report.failingRows + " (" + round4(report.riskShare * 100) + "%)",
      "",
      report.summary,
      "",
      "## Worst equivalence classes",
      "",
    ];
    (report.worstClasses || []).forEach(function (c) {
      lines.push("- `" + c.key + "` — size " + c.size);
    });
    lines.push("");
    return lines.join("\n");
  };

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

  DeidLib.downloadReportJson = function (report) {
    download("deid-risk-report.json", JSON.stringify(report, null, 2), "application/json");
  };

  DeidLib.downloadReportMd = function (report) {
    download("deid-risk-report.md", DeidLib.reportToMarkdown(report), "text/markdown");
  };

  DeidLib.downloadTableCsv = function (rows, columns, filename) {
    download(filename || "deid-table.csv", rowsToCsv(rows, columns), "text/csv");
  };

  DeidLib.download = download;
})(typeof window !== "undefined" ? window : globalThis);
