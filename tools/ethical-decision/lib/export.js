/* Export decision trail (window.EthicalLib). */
(function (global) {
  "use strict";
  const EthicalLib = global.EthicalLib || (global.EthicalLib = {});

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

  EthicalLib.buildReport = function (scenario, walk) {
    return {
      format: "ethical-decision-trail",
      version: 1,
      exportedAt: new Date().toISOString(),
      bookAnchors: scenario.bookAnchors || ["§3.9"],
      scenarioId: scenario.id,
      scenarioTitle: scenario.title,
      context: scenario.context,
      path: (walk.path || []).slice(),
      outcome: walk.outcome
        ? {
            verdict: walk.outcome.verdict,
            title: walk.outcome.title,
            rationale: walk.outcome.rationale,
            lenses: walk.outcome.lenses,
            nextSteps: walk.outcome.nextSteps,
          }
        : null,
      complete: !!walk.done,
    };
  };

  EthicalLib.reportToMarkdown = function (report) {
    const lines = [
      "# Ethical decision trail",
      "",
      "- Scenario: **" + report.scenarioTitle + "** (`" + report.scenarioId + "`)",
      "- Complete: " + (report.complete ? "yes" : "no"),
      "",
    ];
    if (report.outcome) {
      lines.push(
        "## Outcome: " + EthicalLib.verdictLabel(report.outcome.verdict),
        "",
        "**" + report.outcome.title + "**",
        "",
        report.outcome.rationale,
        "",
        "Lenses: " + (report.outcome.lenses || []).join(", "),
        "",
        "### Next steps",
        ""
      );
      (report.outcome.nextSteps || []).forEach(function (s) {
        lines.push("- " + s);
      });
      lines.push("");
    }
    lines.push("## Path", "");
    (report.path || []).forEach(function (step, i) {
      lines.push(i + 1 + ". **" + step.prompt + "**");
      lines.push("   → " + step.choiceLabel);
      lines.push("");
    });
    return lines.join("\n");
  };

  EthicalLib.downloadReportJson = function (report) {
    download("ethical-decision-trail.json", JSON.stringify(report, null, 2), "application/json");
  };

  EthicalLib.downloadReportMd = function (report) {
    download("ethical-decision-trail.md", EthicalLib.reportToMarkdown(report), "text/markdown");
  };
})(typeof window !== "undefined" ? window : globalThis);
