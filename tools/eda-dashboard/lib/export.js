/* Classic script — EDA export helpers (window.EdaLib). */
(function (global) {
  "use strict";
  const EdaLib = global.EdaLib || (global.EdaLib = {});

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

  function buildSummary(session) {
    const rows = session.viewRows || session.rows || [];
    const columns = session.columns || [];
    const schema = EdaLib.schemaTable(rows, columns);
    const numericStats = {};
    columns.forEach(function (c) {
      if (EdaLib.isNumericColumn(rows, c)) {
        numericStats[c] = EdaLib.columnStats(rows, c);
      }
    });
    return {
      format: "eda-summary",
      version: 1,
      source: session.source || "session",
      exportedAt: new Date().toISOString(),
      bookAnchors: session.bookAnchors || [],
      rowCount: rows.length,
      columnCount: columns.length,
      filterActive: !!(session.filters && session.filters.length),
      schema: schema,
      numericStats: numericStats,
      missing: EdaLib.missingProfile(rows, columns),
      correlation: EdaLib.correlationMatrix(rows, columns),
      issues: EdaLib.issueSummary(rows, columns),
    };
  }

  function buildFindingsMd(session, findingsText) {
    const summary = buildSummary(session);
    const lines = [];
    lines.push("# EDA findings");
    lines.push("");
    lines.push("- **Source:** " + (summary.source || ""));
    lines.push("- **Exported:** " + summary.exportedAt);
    lines.push("- **Rows × cols:** " + summary.rowCount + " × " + summary.columnCount);
    if (summary.bookAnchors && summary.bookAnchors.length) {
      lines.push("- **Book anchors:** " + summary.bookAnchors.join(", "));
    }
    lines.push("");
    lines.push("## Learner notes");
    lines.push("");
    lines.push(findingsText && findingsText.trim() ? findingsText.trim() : "_No notes yet._");
    lines.push("");
    lines.push("## Missingness");
    lines.push("");
    if (!summary.missing.length) {
      lines.push("No missing values detected in the current view.");
    } else {
      summary.missing.forEach(function (m) {
        lines.push(
          "- `" + m.column + "`: " + m.missing + " missing (" + m.missingPct + "%)"
        );
      });
    }
    lines.push("");
    lines.push("## Top Pearson correlations");
    lines.push("");
    const corr = summary.correlation;
    const pairs = [];
    if (corr && corr.columns) {
      for (let i = 0; i < corr.columns.length; i += 1) {
        for (let j = i + 1; j < corr.columns.length; j += 1) {
          const r = corr.matrix[i][j];
          if (r != null) {
            pairs.push({ a: corr.columns[i], b: corr.columns[j], r: r });
          }
        }
      }
    }
    pairs.sort(function (a, b) {
      return Math.abs(b.r) - Math.abs(a.r);
    });
    if (!pairs.length) {
      lines.push("Not enough numeric pairs for correlation.");
    } else {
      pairs.slice(0, 5).forEach(function (p) {
        lines.push("- `" + p.a + "` ↔ `" + p.b + "`: r = " + p.r);
      });
    }
    lines.push("");
    lines.push("## Issue checklist (Ch.6 §6.4 → repair in Ch.5)");
    lines.push("");
    const iss = summary.issues;
    lines.push("- Duplicate rows (extras): " + iss.duplicates);
    lines.push("- Inconsistency groups: " + iss.inconsistencies.length);
    lines.push("- Numeric columns with IQR outliers: " + iss.outliers.length);
    lines.push("");
    lines.push(
      "_Correlation is not causation — treat strong r as a hypothesis, not a claim (Ch.6)._"
    );
    lines.push("");
    return lines.join("\n");
  }

  EdaLib.download = download;
  EdaLib.buildSummary = buildSummary;
  EdaLib.buildFindingsMd = buildFindingsMd;
  EdaLib.downloadSummary = function (session) {
    download("eda-summary.json", JSON.stringify(buildSummary(session), null, 2), "application/json");
  };
  EdaLib.downloadFindings = function (session, findingsText) {
    download("eda-findings.md", buildFindingsMd(session, findingsText), "text/markdown");
  };
})(typeof window !== "undefined" ? window : globalThis);
