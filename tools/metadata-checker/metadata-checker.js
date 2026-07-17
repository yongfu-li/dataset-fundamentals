/* Metadata completeness checker — main UI (classic script, file:// safe).
 * Score dataset cards against §8.2 checklist; import datasheet-metadata.json.
 * Book anchors: §8.2 Key Components; §8.3 Creating Effective Documentation. */
(function () {
  "use strict";
  const Lib = window.MetadataCheckerLib;
  if (!Lib) {
    console.error("MetadataCheckerLib not found. Check lib/*.js loaded before metadata-checker.js.");
    return;
  }

  let card = null;
  let source = "";
  let description = "";
  let report = null;
  let message = { text: "", kind: "" };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function loadData(data) {
    card = data.card;
    source = data.source;
    description = data.description || "";
    report = Lib.scoreCard(card);
  }

  function loadPreset(id) {
    try {
      loadData(Lib.loadPreset(id));
      showMessage(
        "Scored preset '" + source + "': " + report.score_pct + "% (" + report.grade + "). " + report.remediation.length + " item(s) need attention.",
        report.score_pct >= 75 ? "ok" : "warn"
      );
    } catch (err) {
      showMessage(err.message || String(err), "error");
    }
    renderAll();
  }

  function onFileUpload(ev) {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    if (file.size > Lib.MAX_BYTES) {
      showMessage("File exceeds 512 KB limit.", "error");
      renderAll();
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      try {
        loadData(Lib.parseUpload(String(reader.result), file.name));
        showMessage(
          "Scored '" + file.name + "': " + report.score_pct + "% (" + report.grade + ").",
          report.score_pct >= 75 ? "ok" : "warn"
        );
      } catch (err) {
        showMessage(err.message || String(err), "error");
      }
      renderAll();
    };
    reader.readAsText(file);
  }

  const root = document.getElementById("metadata-checker-root");
  if (!root) return;

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderLoader() +
      renderMessage() +
      (report ? renderScore() + renderCategories() + renderRemediation() + renderExport() : "");
    bindEvents();
  }

  function renderIntro() {
    return (
      '<section class="mc-intro">' +
      "<h1>Metadata completeness checker</h1>" +
      "<p>Spot missing provenance fields before release (book §8.2). Load a fictional dataset card or upload " +
      '<code>datasheet-metadata.json</code> from the <a href="../datasheet/index.html">datasheet builder</a>. ' +
      "Get a weighted score, category breakdown, and remediation hints.</p>" +
      "</section>"
    );
  }

  function renderLoader() {
    const presets = window.MetadataCheckerPresets || {};
    let cards = "";
    Object.keys(presets).forEach(function (id) {
      const p = presets[id];
      const active = source === (p.name || id) ? " mc-preset-active" : "";
      cards +=
        '<button type="button" class="mc-preset' + active + '" data-preset="' + esc(id) + '">' +
        "<strong>" + esc(p.name || id) + "</strong>" +
        "<span>" + esc(p.description || "") + "</span></button>";
    });
    return (
      '<section class="mc-panel">' +
      "<h2>1 · Load dataset card</h2>" +
      '<div class="mc-presets">' + cards + "</div>" +
      '<label class="mc-upload-label">Or upload <code>datasheet-metadata.json</code>: ' +
      '<input type="file" id="mc-file" accept=".json,application/json"></label>' +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return '<p class="mc-message mc-' + esc(message.kind) + '">' + esc(message.text) + "</p>";
  }

  function scoreClass(pct) {
    if (pct >= 90) return "mc-score-good";
    if (pct >= 75) return "mc-score-ok";
    if (pct >= 55) return "mc-score-warn";
    return "mc-score-bad";
  }

  function renderScore() {
    const name = (card.dataset && card.dataset.name) || source;
    return (
      '<section class="mc-panel" id="mc-score">' +
      "<h2>2 · Overall score</h2>" +
      '<div class="mc-score-row">' +
      '<div class="mc-score-ring ' + scoreClass(report.score_pct) + '">' +
      '<span class="mc-score-pct">' + report.score_pct + "%</span>" +
      '<span class="mc-score-grade">' + esc(report.grade) + "</span></div>" +
      '<div class="mc-score-meta">' +
      "<p><strong>" + esc(name) + "</strong></p>" +
      "<p>Checks passed: " + report.passed + " / " + report.check_count + " · Weighted " + report.earned + " / " + report.total + "</p>" +
      (description ? "<p class=\"mc-hint\">" + esc(description) + "</p>" : "") +
      "</div></div></section>"
    );
  }

  function renderCategories() {
    let html = '<section class="mc-panel"><h2>3 · Category breakdown</h2><div class="mc-cat-grid">';
    report.categories.forEach(function (cat) {
      html +=
        '<div class="mc-cat-card">' +
        "<h3>" + esc(cat.title) + "</h3>" +
        '<p class="mc-hint">' + esc(cat.section) + "</p>" +
        '<div class="mc-bar-wrap"><div class="mc-bar ' + scoreClass(cat.pct) + '" style="width:' + cat.pct + '%"></div></div>' +
        '<p class="mc-cat-pct">' + cat.pct + "% · " + cat.earned + "/" + cat.total + "</p>" +
        "<ul class=\"mc-check-list\">";
      cat.items.forEach(function (item) {
        html +=
          '<li class="' + (item.pass ? "mc-pass" : "mc-fail") + '">' +
          (item.pass ? "✓" : "✗") + " " + esc(item.label) +
          (!item.pass ? '<span class="mc-item-hint">' + esc(item.hint) + "</span>" : "") +
          "</li>";
      });
      html += "</ul></div>";
    });
    return html + "</div></section>";
  }

  function renderRemediation() {
    if (!report.remediation.length) {
      return (
        '<section class="mc-panel mc-callout-ok">' +
        "<h2>4 · Remediation</h2>" +
        "<p>All checklist items passed — documentation looks release-ready for teaching purposes.</p></section>"
      );
    }
    let list = "";
    report.remediation.forEach(function (r, i) {
      list += "<li><strong>" + esc(r.label) + "</strong> — " + esc(r.hint) + "</li>";
    });
    return (
      '<section class="mc-panel">' +
      "<h2>4 · Remediation</h2>" +
      '<p class="mc-hint">Fix these before publishing (§8.3 validate before release):</p>' +
      "<ol class=\"mc-remediation\">" + list + "</ol></section>"
    );
  }

  function renderExport() {
    return (
      '<section class="mc-panel">' +
      "<h2>5 · Export</h2>" +
      '<div class="mc-op-row">' +
      '<button type="button" id="mc-export-json" class="mc-primary">Download metadata-scorecard.json</button>' +
      '<button type="button" id="mc-export-md" class="mc-secondary">Download metadata-scorecard.md</button>' +
      "</div>" +
      '<p class="mc-hint">Share the scorecard with your team or attach it to a dataset release review.</p>" +
      "</section>"
    );
  }

  function bindEvents() {
    document.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    const file = document.getElementById("mc-file");
    if (file) file.addEventListener("change", onFileUpload);
    const ej = document.getElementById("mc-export-json");
    if (ej) {
      ej.addEventListener("click", function () {
        Lib.downloadJson(source, card, report);
      });
    }
    const em = document.getElementById("mc-export-md");
    if (em) {
      em.addEventListener("click", function () {
        Lib.downloadMarkdown(source, card, report);
      });
    }
  }

  renderAll();
})();
