/* Version timeline — main UI (classic script, file:// safe).
 * Step through v1→v2→v3; schema and label drift. Book anchors: §8.4, eg:8.2, eg:8.20. */
(function () {
  "use strict";
  const Lib = window.VersionTimelineLib;
  if (!Lib) {
    console.error("VersionTimelineLib not found. Check lib/*.js loaded before version-timeline.js.");
    return;
  }

  let preset = null;
  let activeIndex = 0;
  let message = { text: "", kind: "" };

  const TOOLTIPS = {
    schemaDrift:
      "Schema drift — columns added, removed, or renamed. Downstream code that assumes the old schema may break (eg:8.2).",
    labelDrift:
      "Label drift — same row id, different label value. Training signal changes even when schema looks stable.",
    rowChurn: "Row churn — rows added or removed between versions. Counts and class balance shift.",
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function activeVersion() {
    return preset && preset.versions[activeIndex] ? preset.versions[activeIndex] : null;
  }

  function activeDiff() {
    if (!preset || activeIndex < 1) return null;
    return Lib.diffVersions(preset.versions[activeIndex - 1], preset.versions[activeIndex]);
  }

  function loadPreset(id) {
    try {
      preset = Lib.loadPreset(id);
      activeIndex = 0;
      showMessage("Loaded preset '" + preset.name + "' — step through versions to see what changed.", "ok");
    } catch (err) {
      showMessage(err.message || String(err), "error");
    }
    renderAll();
  }

  function loadChain(chain, label) {
    preset = chain;
    activeIndex = 0;
    showMessage(
      "Loaded " + label + " (" + chain.versions.length + " versions). Step through the timeline or export a manifest.",
      "ok"
    );
    renderAll();
  }

  function onJsonUpload(ev) {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    if (file.size > Lib.MAX_BYTES) {
      showMessage("File exceeds 2 MB limit.", "error");
      renderAll();
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      try {
        loadChain(Lib.parseUpload(String(reader.result), file.name), "'" + file.name + "'");
      } catch (err) {
        showMessage(err.message || String(err), "error");
        renderAll();
      }
    };
    reader.onerror = function () {
      showMessage("Could not read file.", "error");
      renderAll();
    };
    reader.readAsText(file);
    ev.target.value = "";
  }

  function onCsvUpload(ev) {
    const fileList = ev.target.files;
    if (!fileList || !fileList.length) return;
    const arr = Array.prototype.slice.call(fileList);
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].size > Lib.MAX_BYTES) {
        showMessage("File '" + arr[i].name + "' exceeds 2 MB limit.", "error");
        renderAll();
        ev.target.value = "";
        return;
      }
    }
    const files = [];
    let pending = arr.length;
    arr.forEach(function (file) {
      const reader = new FileReader();
      reader.onload = function () {
        files.push({ name: file.name, text: String(reader.result) });
        pending -= 1;
        if (pending === 0) {
          try {
            const chain = Lib.parseCsvSnapshots(files);
            loadChain(chain, chain.versions.length + " CSV snapshots");
          } catch (err) {
            showMessage(err.message || String(err), "error");
            renderAll();
          }
        }
      };
      reader.onerror = function () {
        showMessage("Could not read CSV file.", "error");
        renderAll();
      };
      reader.readAsText(file);
    });
    ev.target.value = "";
  }

  function setVersionIndex(idx) {
    if (!preset) return;
    activeIndex = Math.max(0, Math.min(idx, preset.versions.length - 1));
    renderAll();
  }

  const root = document.getElementById("version-timeline-root");
  if (!root) return;

  function renderAll() {
    const diff = activeDiff();
    root.innerHTML =
      renderIntro() +
      renderPracticalGuide() +
      renderLoader() +
      renderMessage() +
      (preset ? renderTimeline() + renderVersionSummary() + (diff ? renderChangeSummary(diff) + renderSchemaDiff(diff) + renderRowDiff(diff) + renderCallout() : renderBaseline()) + renderExport() : "");
    bindEvents();
  }

  function renderIntro() {
    return (
      '<section class="vt-intro">' +
      "<h1>Version timeline</h1>" +
      "<p>Documentation freezes meaning at a point in time; <strong>version control</strong> tracks how the data itself changes " +
      "(book §8.4, <code>eg:8.2</code>, <code>eg:8.20</code>). Try a bundled scenario first, then load <strong>your own</strong> version chain " +
      "to diff schema and label drift and export a version manifest. Pairs with the " +
      '<a href="../datasheet/index.html">datasheet builder</a> and ' +
      '<a href="../metadata-checker/index.html">metadata checker</a>.</p>' +
      "</section>"
    );
  }

  function renderPracticalGuide() {
    return (
      '<details class="vt-panel vt-guide" open>' +
      "<summary><strong>Learn → apply with your data</strong></summary>" +
      '<ol class="vt-guide-steps">' +
      "<li><strong>Learn</strong> — run <code>feature-drift-pilot</code> and step v1 → v3. Watch row churn, label edits, and the <code>sentiment</code> → <code>label</code> rename.</li>" +
      "<li><strong>Prepare</strong> — export snapshots from Git/DVC/Excel as CSV (one file per release) <em>or</em> download the JSON template below. Every row needs a stable <code>id</code>.</li>" +
      "<li><strong>Document</strong> — use the <a href=\"../datasheet/index.html\">datasheet builder</a> for field meanings; score the card in the <a href=\"../metadata-checker/index.html\">metadata checker</a>.</li>" +
      "<li><strong>Apply</strong> — upload your <code>version-chain.json</code> or 2+ CSV snapshots. Step the timeline and export <code>version-manifest.json</code> for release review.</li>" +
      "</ol>" +
      '<p class="vt-hint">Column renames between versions? List them in each version\'s <code>renames</code> array so the diff shows rename vs remove+add.</p>' +
      "</details>"
    );
  }

  function renderLoader() {
    const presets = window.VersionTimelinePresets || {};
    let cards = "";
    Object.keys(presets).forEach(function (id) {
      const p = presets[id];
      const active = preset && preset.source === id && preset.teachingFocus !== "user-upload" ? " vt-preset-active" : "";
      cards +=
        '<button type="button" class="vt-preset' +
        active +
        '" data-preset="' +
        esc(id) +
        '">' +
        "<strong>" +
        esc(p.name || id) +
        "</strong>" +
        "<span>" +
        esc(p.description || "") +
        "</span></button>";
    });
    return (
      '<section class="vt-panel">' +
      "<h2>1 · Load scenario</h2>" +
      '<p class="vt-hint"><strong>Teaching presets</strong> — start here if this is your first visit.</p>' +
      '<div class="vt-presets">' +
      cards +
      "</div>" +
      '<hr class="vt-divider">' +
      '<p class="vt-hint"><strong>Your data</strong> — after the preset, try your own chain.</p>' +
      '<div class="vt-upload-block">' +
      '<label class="vt-upload-label">Upload <code>version-chain.json</code> (≤ 2 MB): ' +
      '<input type="file" id="vt-json-upload" accept=".json,application/json"></label>' +
      "</div>" +
      '<div class="vt-upload-block">' +
      '<label class="vt-upload-label">Or select 2+ CSV snapshots (one per version, must include <code>id</code> column): ' +
      '<input type="file" id="vt-csv-upload" accept=".csv,text/csv" multiple></label>' +
      "</div>" +
      '<div class="vt-op-row">' +
      '<button type="button" id="vt-template" class="vt-secondary">Download version-chain-template.json</button>' +
      "</div>" +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return '<p class="vt-message vt-' + esc(message.kind) + '">' + esc(message.text) + "</p>";
  }

  function renderTimeline() {
    const versions = preset.versions;
    let steps = "";
    versions.forEach(function (v, i) {
      const active = i === activeIndex ? " vt-step-active" : "";
      steps +=
        '<button type="button" class="vt-step' +
        active +
        '" data-version-index="' +
        i +
        '" aria-pressed="' +
        (i === activeIndex) +
        '">' +
        esc(v.id) +
        "</button>";
    });
    const canPrev = activeIndex > 0;
    const canNext = activeIndex < versions.length - 1;
    return (
      '<section class="vt-panel">' +
      "<h2>2 · Timeline</h2>" +
      '<div class="vt-stepper" role="group" aria-label="Dataset versions">' +
      steps +
      "</div>" +
      '<div class="vt-nav-row">' +
      '<button type="button" id="vt-prev" class="vt-secondary"' +
      (canPrev ? "" : " disabled") +
      ">← Previous</button>" +
      '<button type="button" id="vt-next" class="vt-secondary"' +
      (canNext ? "" : " disabled") +
      ">Next →</button>" +
      "</div></section>"
    );
  }

  function renderVersionSummary() {
    const v = activeVersion();
    if (!v) return "";
    const diffLabel =
      activeIndex > 0
        ? "Changes from " + preset.versions[activeIndex - 1].id + " → " + v.id
        : "Baseline release — no prior version to diff against.";
    return (
      '<section class="vt-panel">' +
      "<h2>3 · Version summary</h2>" +
      '<div class="vt-version-card">' +
      "<p><strong>" +
      esc(v.id) +
      "</strong> · " +
      esc(v.date) +
      "</p>" +
      '<p class="vt-commit-msg">"' +
      esc(v.message) +
      '"</p>' +
      "<p>" +
      (v.rows || []).length +
      " rows · " +
      (v.columns || []).length +
      " columns: <code>" +
      esc((v.columns || []).join("</code>, <code>")) +
      "</code></p>" +
      '<p class="vt-hint">' +
      esc(diffLabel) +
      "</p>" +
      (v.schema_notes ? '<p class="vt-hint">' + esc(v.schema_notes) + "</p>" : "") +
      "</div></section>"
    );
  }

  function renderBaseline() {
    return (
      '<section class="vt-panel vt-callout-ok">' +
      "<h2>4 · Changes</h2>" +
      "<p>v1 is the attributable baseline. Select v2 or v3 to see row churn, label drift, and schema changes.</p></section>"
    );
  }

  function meterCard(title, value, detail, tipKey) {
    const tip = TOOLTIPS[tipKey] || "";
    return (
      '<div class="vt-meter" title="' +
      esc(tip) +
      '">' +
      "<h3>" +
      esc(title) +
      (tip ? ' <span class="vt-tip" aria-hidden="true">ⓘ</span>' : "") +
      "</h3>" +
      '<div class="vt-meter-value">' +
      esc(String(value)) +
      "</div>" +
      '<div class="vt-meter-detail">' +
      esc(detail) +
      "</div></div>"
    );
  }

  function renderChangeSummary(diff) {
    const s = diff.summary;
    return (
      '<section class="vt-panel" id="vt-summary">' +
      "<h2>4 · Change summary</h2>" +
      '<p class="vt-hint">Diff ' +
      esc(diff.from) +
      " → " +
      esc(diff.to) +
      " · hover ⓘ for definitions</p>" +
      '<div class="vt-meters">' +
      meterCard("Rows added", s.nAdded, "New ids in this version", "rowChurn") +
      meterCard("Rows removed", s.nRemoved, "Ids dropped since prior version", "rowChurn") +
      meterCard("Rows modified", s.nModified, "Same id, changed field(s)", "labelDrift") +
      meterCard("Schema changes", s.nSchemaChanges, "Columns added, removed, or renamed", "schemaDrift") +
      "</div></section>"
    );
  }

  function renderSchemaDiff(diff) {
    const sch = diff.schema;
    let prevList = "";
    sch.prevColumns.forEach(function (c) {
      let cls = "";
      sch.renamed.forEach(function (r) {
        if (r.from === c) cls = " vt-col-renamed";
      });
      if (sch.removed.indexOf(c) >= 0) cls = " vt-col-removed";
      prevList += "<li class=\"" + cls + "\">" + esc(c) + "</li>";
    });
    let nextList = "";
    sch.nextColumns.forEach(function (c) {
      let cls = "";
      sch.renamed.forEach(function (r) {
        if (r.to === c) cls = " vt-col-renamed";
      });
      if (sch.added.indexOf(c) >= 0) cls = " vt-col-added";
      nextList += "<li class=\"" + cls + "\">" + esc(c) + "</li>";
    });
    let renameHtml = "";
    if (sch.renamed.length) {
      renameHtml =
        "<p><strong>Renamed:</strong> " +
        sch.renamed
          .map(function (r) {
            return "<code>" + esc(r.from) + "</code> → <code>" + esc(r.to) + "</code>";
          })
          .join(", ") +
        "</p>";
    }
    return (
      '<section class="vt-panel">' +
      "<h2>5 · Schema diff</h2>" +
      renameHtml +
      '<div class="vt-schema-grid">' +
      "<div><h3>" +
      esc(diff.from) +
      '</h3><ul class="vt-col-list">' +
      prevList +
      "</ul></div>" +
      "<div><h3>" +
      esc(diff.to) +
      '</h3><ul class="vt-col-list">' +
      nextList +
      "</ul></div></div></section>"
    );
  }

  function renderRowDiff(diff) {
    const rows = diff.rows;
    const all = []
      .concat(rows.added.map(function (r) {
        return { kind: "added", data: r };
      }))
      .concat(rows.removed.map(function (r) {
        return { kind: "removed", data: r };
      }))
      .concat(rows.modified.map(function (r) {
        return { kind: "modified", data: r };
      }));
    all.sort(function (a, b) {
      return String(a.data.id).localeCompare(String(b.data.id));
    });

    if (!all.length) {
      return (
        '<section class="vt-panel">' +
        "<h2>6 · Row changes</h2>" +
        "<p>No row-level changes detected (schema-only diff).</p></section>"
      );
    }

    let body = "";
    all.forEach(function (entry) {
      const d = entry.data;
      if (entry.kind === "added") {
        body +=
          '<tr class="vt-row-added"><td>' +
          esc(d.id) +
          '</td><td><span class="vt-status">added</span></td><td colspan="2">' +
          esc(JSON.stringify(d.row)) +
          "</td></tr>";
      } else if (entry.kind === "removed") {
        body +=
          '<tr class="vt-row-removed"><td>' +
          esc(d.id) +
          '</td><td><span class="vt-status">removed</span></td><td colspan="2">' +
          esc(JSON.stringify(d.row)) +
          "</td></tr>";
      } else {
        let changes = d.changes
          .map(function (c) {
            return (
              "<code>" +
              esc(c.field) +
              "</code>: " +
              esc(c.from == null ? "—" : String(c.from)) +
              " → " +
              esc(String(c.to))
            );
          })
          .join("; ");
        body +=
          '<tr class="vt-row-modified"><td>' +
          esc(d.id) +
          '</td><td><span class="vt-status">modified</span></td><td>' +
          changes +
          "</td><td class=\"vt-hint\">" +
          esc(d.after.text || d.after.id || "") +
          "</td></tr>";
      }
    });

    return (
      '<section class="vt-panel">' +
      "<h2>6 · Row changes</h2>" +
      '<p class="vt-hint">Status is text-labeled; color is supplementary only.</p>' +
      '<div class="vt-table-wrap"><table class="vt-table" aria-label="Row-level changes">' +
      "<thead><tr><th>ID</th><th>Status</th><th>Field changes</th><th>Context</th></tr></thead>" +
      "<tbody>" +
      body +
      "</tbody></table></div></section>"
    );
  }

  function renderCallout() {
    const v = activeVersion();
    if (!v || !v.callout) return "";
    const cls = activeIndex >= 2 ? "vt-callout-warn" : "vt-callout-ok";
    return (
      '<section class="vt-panel ' +
      cls +
      '">' +
      "<h2>Interpretation</h2>" +
      "<p>" +
      esc(v.callout) +
      "</p></section>"
    );
  }

  function renderExport() {
    return (
      '<section class="vt-panel">' +
      "<h2>7 · Export</h2>" +
      '<div class="vt-op-row">' +
      '<button type="button" id="vt-export-json" class="vt-primary">Download version-manifest.json</button>' +
      '<button type="button" id="vt-export-md" class="vt-secondary">Download version-manifest.md</button>' +
      "</div>" +
      '<p class="vt-hint">Manifest includes version history from v1 through the active step and the current diff. Attach it to a release review alongside <code>datasheet-metadata.json</code>.</p>' +
      "</section>"
    );
  }

  function bindEvents() {
    root.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    root.querySelectorAll("[data-version-index]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setVersionIndex(Number(btn.getAttribute("data-version-index")));
      });
    });
    const prev = document.getElementById("vt-prev");
    if (prev) {
      prev.addEventListener("click", function () {
        setVersionIndex(activeIndex - 1);
      });
    }
    const next = document.getElementById("vt-next");
    if (next) {
      next.addEventListener("click", function () {
        setVersionIndex(activeIndex + 1);
      });
    }
    const ej = document.getElementById("vt-export-json");
    if (ej) {
      ej.addEventListener("click", function () {
        if (!preset) return;
        Lib.downloadManifest(preset, activeIndex, activeDiff());
      });
    }
    const em = document.getElementById("vt-export-md");
    if (em) {
      em.addEventListener("click", function () {
        if (!preset) return;
        Lib.downloadMarkdown(preset, activeIndex, activeDiff());
      });
    }
    const ju = document.getElementById("vt-json-upload");
    if (ju) ju.addEventListener("change", onJsonUpload);
    const cu = document.getElementById("vt-csv-upload");
    if (cu) cu.addEventListener("change", onCsvUpload);
    const tpl = document.getElementById("vt-template");
    if (tpl) {
      tpl.addEventListener("click", function () {
        Lib.downloadTemplate();
      });
    }
  }

  if (window.VersionTimelinePresets && window.VersionTimelinePresets["feature-drift-pilot"]) {
    loadPreset("feature-drift-pilot");
  } else {
    renderAll();
  }
})();
