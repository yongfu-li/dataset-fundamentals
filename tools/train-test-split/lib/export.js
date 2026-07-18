/* Train/val/test splitter — export (window.SplitLib). */
(function (global) {
  "use strict";
  const SplitLib = global.SplitLib || (global.SplitLib = {});

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

  function foldIds(items, idCol) {
    return items.map(function (it) {
      if (idCol && !SplitLib.isMissing(it.row[idCol])) return String(it.row[idCol]);
      return "row-" + it.index;
    });
  }

  function buildManifest(session, splitResult, leakage) {
    return {
      format: "split-manifest",
      version: 1,
      exportedAt: new Date().toISOString(),
      source: session.source || session.name || "session",
      bookAnchors: session.bookAnchors || ["§1.5"],
      method: splitResult.method,
      seed: splitResult.seed,
      ratios: splitResult.ratios,
      columns: {
        id: splitResult.idCol,
        label: splitResult.labelCol,
        time: splitResult.timeCol,
      },
      counts: {
        total: session.rows.length,
        train: splitResult.train.length,
        val: splitResult.val.length,
        test: splitResult.test.length,
      },
      rowIndices: {
        train: splitResult.train.map(function (it) {
          return it.index;
        }),
        val: splitResult.val.map(function (it) {
          return it.index;
        }),
        test: splitResult.test.map(function (it) {
          return it.index;
        }),
      },
      entityIds: {
        train: foldIds(splitResult.train, splitResult.idCol),
        val: foldIds(splitResult.val, splitResult.idCol),
        test: foldIds(splitResult.test, splitResult.idCol),
      },
      leakage: {
        errorCount: leakage.errorCount,
        warnCount: leakage.warnCount,
        idOverlap: leakage.idOverlap,
        issues: leakage.issues.map(function (i) {
          return {
            severity: i.severity,
            kind: i.kind,
            message: i.message,
            count: i.count,
            samples: i.samples,
          };
        }),
      },
    };
  }

  function buildManifestMd(manifest) {
    const lines = [];
    lines.push("# Split manifest");
    lines.push("");
    lines.push("- **Source:** " + (manifest.source || ""));
    lines.push("- **Exported:** " + manifest.exportedAt);
    lines.push("- **Method:** " + manifest.method + " (seed " + manifest.seed + ")");
    lines.push(
      "- **Counts:** train " +
        manifest.counts.train +
        " · val " +
        manifest.counts.val +
        " · test " +
        manifest.counts.test +
        " (of " +
        manifest.counts.total +
        ")"
    );
    lines.push("");
    lines.push("## Leakage summary");
    lines.push("");
    lines.push("- Errors: " + manifest.leakage.errorCount);
    lines.push("- Warnings: " + manifest.leakage.warnCount);
    manifest.leakage.issues.forEach(function (i) {
      lines.push("- **" + i.severity + "** (" + i.kind + "): " + i.message);
    });
    lines.push("");
    lines.push("_A correct holdout never shares entities or future timestamps with train (Ch.1 §1.5)._");
    lines.push("");
    return lines.join("\n");
  }

  SplitLib.buildManifest = buildManifest;
  SplitLib.buildManifestMd = buildManifestMd;
  SplitLib.downloadManifest = function (session, splitResult, leakage) {
    const m = buildManifest(session, splitResult, leakage);
    download("split-manifest.json", JSON.stringify(m, null, 2), "application/json");
  };
  SplitLib.downloadManifestMd = function (session, splitResult, leakage) {
    const m = buildManifest(session, splitResult, leakage);
    download("split-manifest.md", buildManifestMd(m), "text/markdown");
  };
})(typeof window !== "undefined" ? window : globalThis);
