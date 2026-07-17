/* Classic script — export version-manifest.json and .md. */
(function (global) {
  "use strict";
  const VersionTimelineLib = global.VersionTimelineLib || (global.VersionTimelineLib = {});

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

  function downloadManifest(preset, activeIndex, activeDiff) {
    const base = VersionTimelineLib.buildManifest(preset, activeIndex);
    const payload = Object.assign({}, base, {
      generated: new Date().toISOString(),
      activeDiff: activeDiff || null,
      // Include full row snapshots for the active version only (keep file small)
      activeRows: preset.versions[activeIndex]
        ? preset.versions[activeIndex].rows
        : [],
    });
    download("version-manifest.json", JSON.stringify(payload, null, 2), "application/json");
  }

  function downloadMarkdown(preset, activeIndex, activeDiff) {
    const manifest = VersionTimelineLib.buildManifest(preset, activeIndex);
    const v = preset.versions[activeIndex];
    let md = "# Version timeline manifest\n\n";
    md += "- **Scenario:** " + (preset.name || preset.source) + "\n";
    md += "- **Active version:** " + (v ? v.id : "—") + "\n";
    md += "- **Generated:** " + new Date().toISOString() + "\n\n";
    md += "## Versions\n\n";
    manifest.versions.forEach(function (ver) {
      md += "### " + ver.id + " (" + ver.date + ")\n";
      md += ver.message + "\n\n";
      md += "- Rows: " + ver.nRows + " · Columns: `" + ver.columns.join("`, `") + "`\n\n";
    });
    if (activeDiff) {
      const s = activeDiff.summary;
      md += "## Diff " + activeDiff.from + " → " + activeDiff.to + "\n\n";
      md +=
        "- Rows added: **" +
        s.nAdded +
        "** · removed: **" +
        s.nRemoved +
        "** · modified: **" +
        s.nModified +
        "**\n";
      md += "- Schema changes: **" + s.nSchemaChanges + "**\n";
      if (activeDiff.schema.renamed.length) {
        md +=
          "- Renames: " +
          activeDiff.schema.renamed
            .map(function (r) {
              return "`" + r.from + "` → `" + r.to + "`";
            })
            .join(", ") +
          "\n";
      }
      if (activeDiff.schema.added.length) {
        md += "- Columns added: `" + activeDiff.schema.added.join("`, `") + "`\n";
      }
      if (activeDiff.schema.removed.length) {
        md += "- Columns removed: `" + activeDiff.schema.removed.join("`, `") + "`\n";
      }
      md += "\n";
    }
    md += "## Book anchors\n\n";
    (manifest.book_anchors || []).forEach(function (a) {
      md += "- " + a + "\n";
    });
    download("version-manifest.md", md, "text/markdown;charset=utf-8");
  }

  VersionTimelineLib.downloadManifest = downloadManifest;
  VersionTimelineLib.downloadMarkdown = downloadMarkdown;
})(typeof window !== "undefined" ? window : globalThis);
