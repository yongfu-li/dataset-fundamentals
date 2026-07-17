/* Scaling / encoding export (window.ScaleLib). */
(function (global) {
  "use strict";
  const ScaleLib = global.ScaleLib || (global.ScaleLib = {});

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

  function csvEscape(v) {
    if (v == null) return "";
    const s = String(v);
    if (/[",\n\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
    return s;
  }

  function rowsToCsv(rows, columns) {
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
    return lines.join("\n") + "\n";
  }

  function buildReport(session, result) {
    const fits = {};
    Object.keys(result.fits || {}).forEach(function (col) {
      const f = result.fits[col];
      fits[col] = {
        method: f.method,
        params: f.params,
        stats: f.stats,
      };
    });
    let encode = null;
    if (result.encode) {
      encode = {
        method: result.encode.method,
        categories: result.encode.categories,
        mapping: result.encode.mapping,
        columns: result.encode.columns,
      };
    }
    return {
      format: "transform-report",
      version: 1,
      exportedAt: new Date().toISOString(),
      source: session.source || session.name || "session",
      bookAnchors: session.bookAnchors || ["§5.4"],
      config: result.config,
      fits: fits,
      encode: encode,
      warnings: result.warnings || [],
      rowCount: result.rows.length,
      columns: result.columns,
    };
  }

  function buildReportMd(report) {
    const lines = [];
    lines.push("# Transform report");
    lines.push("");
    lines.push("- Source: `" + report.source + "`");
    lines.push("- Exported: " + report.exportedAt);
    lines.push("- Scale: `" + (report.config && report.config.scaleMethod) + "`");
    lines.push("- Encode: `" + (report.config && report.config.encodeMethod) + "`");
    lines.push("- Rows: " + report.rowCount);
    lines.push("");
    if (report.fits && Object.keys(report.fits).length) {
      lines.push("## Scale fits");
      Object.keys(report.fits).forEach(function (col) {
        const f = report.fits[col];
        lines.push(
          "- **" +
            col +
            "** — `" +
            f.method +
            "` · params `" +
            JSON.stringify(f.params) +
            "`"
        );
      });
      lines.push("");
    }
    if (report.encode && report.encode.method !== "none") {
      lines.push("## Encoding");
      lines.push("- Method: `" + report.encode.method + "`");
      lines.push("- Mapping: `" + JSON.stringify(report.encode.mapping) + "`");
      lines.push("");
    }
    if (report.warnings && report.warnings.length) {
      lines.push("## Warnings");
      report.warnings.forEach(function (w) {
        lines.push("- " + w);
      });
      lines.push("");
    }
    lines.push("## Columns");
    lines.push(report.columns.join(", "));
    lines.push("");
    return lines.join("\n");
  }

  ScaleLib.download = download;
  ScaleLib.rowsToCsv = rowsToCsv;
  ScaleLib.buildReport = buildReport;
  ScaleLib.buildReportMd = buildReportMd;
})(typeof window !== "undefined" ? window : globalThis);
