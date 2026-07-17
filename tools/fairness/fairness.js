/* Bias & fairness meter — main UI (classic script, file:// safe).
 * Slice predictions by group, compute DP / DI / EO / EOdds, adjust threshold.
 * Book anchors: §7.3 Detecting Bias, §7.5 Fairness definitions. */
(function () {
  "use strict";
  const Lib = window.FairnessLib;
  const Charts = window.FairnessCharts;
  if (!Lib) {
    console.error("FairnessLib not found. Check that lib/*.js loaded before fairness.js.");
    return;
  }

  let dataset = null;
  let mapping = { id: null, group: null, label: null, score: null };
  let threshold = 0.5;
  let perGroupMode = false;
  let groupThresholds = {};
  let message = { text: "", kind: "" };
  let lastReport = null;
  let tradeoffSweep = null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function mappingReady() {
    return mapping.group && mapping.label && mapping.score;
  }

  function activeGroupThresholds() {
    return perGroupMode ? groupThresholds : null;
  }

  function syncGroupThresholds(groups) {
    const next = {};
    (groups || []).forEach(function (g) {
      next[g.group] = groupThresholds[g.group] != null ? groupThresholds[g.group] : threshold;
    });
    groupThresholds = next;
  }

  function recompute() {
    if (!dataset || !mappingReady()) {
      lastReport = null;
      tradeoffSweep = null;
      return;
    }
    lastReport = Lib.computeMetrics(dataset.rows, mapping, threshold, activeGroupThresholds());
    syncGroupThresholds(lastReport.groups);
    tradeoffSweep = perGroupMode ? null : Lib.sweepThresholds(dataset.rows, mapping, 0.02);
  }

  function resetThresholdState() {
    threshold = 0.5;
    perGroupMode = false;
    groupThresholds = {};
  }

  function loadPreset(id) {
    try {
      const data = Lib.loadPreset(id);
      dataset = data;
      mapping = Lib.suggestMapping(data.columns, data.defaultMapping || {});
      resetThresholdState();
      recompute();
      showMessage(
        "Loaded '" + data.source + "' (" + data.rows.length + " rows). Adjust the threshold and read the meters.",
        "ok"
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
      showMessage("File exceeds 2 MB limit.", "error");
      renderAll();
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      try {
        const data = Lib.parseUpload(String(reader.result), file.name);
        data.description = "";
        dataset = data;
        mapping = Lib.suggestMapping(data.columns, {});
        resetThresholdState();
        recompute();
        showMessage(
          "Loaded '" + file.name + "' (" + data.rows.length + " rows). Confirm column mapping below.",
          "ok"
        );
      } catch (err) {
        showMessage(err.message || String(err), "error");
      }
      renderAll();
    };
    reader.onerror = function () {
      showMessage("Could not read file.", "error");
      renderAll();
    };
    reader.readAsText(file);
    ev.target.value = "";
  }

  function onApplyMapping() {
    mapping = {
      id: val("ff-map-id") || null,
      group: val("ff-map-group") || null,
      label: val("ff-map-label") || null,
      score: val("ff-map-score") || null,
    };
    if (!mappingReady()) {
      showMessage("Map group, label, and score columns to continue.", "warn");
      lastReport = null;
      tradeoffSweep = null;
      renderAll();
      return;
    }
    recompute();
    showMessage("Mapping applied. Metrics updated.", "ok");
    renderAll();
  }

  function onThresholdInput() {
    const el = document.getElementById("ff-threshold");
    if (!el || perGroupMode) return;
    threshold = Number(el.value);
    const label = document.getElementById("ff-threshold-val");
    if (label) label.textContent = threshold.toFixed(2);
    recompute();
    updateLive();
  }

  function onPerGroupToggle() {
    const el = document.getElementById("ff-per-group");
    perGroupMode = !!(el && el.checked);
    if (perGroupMode && lastReport) syncGroupThresholds(lastReport.groups);
    recompute();
    renderAll();
  }

  function onGroupThresholdInput(ev) {
    const group = ev.target.getAttribute("data-group");
    if (!group) return;
    groupThresholds[group] = Number(ev.target.value);
    const readout = document.querySelector('[data-group-readout="' + group + '"]');
    if (readout) readout.textContent = groupThresholds[group].toFixed(2);
    recompute();
    updateLive();
  }

  function exportReport() {
    if (!lastReport) {
      showMessage("Load data and map columns first.", "warn");
      renderAll();
      return;
    }
    Lib.downloadReport(lastReport, {
      source: dataset.source,
      mapping: mapping,
      tradeoffSweep: tradeoffSweep,
    });
  }

  const root = document.getElementById("fairness-root");
  if (!root) return;

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderLoader() +
      renderMessage() +
      (dataset
        ? renderMapping() +
          renderThreshold() +
          (lastReport
            ? renderMeters(lastReport) +
              renderConfusion(lastReport) +
              renderCallouts(lastReport) +
              renderCharts() +
              renderExport()
            : "")
        : "");
    bindEvents();
    drawCharts();
  }

  function updateLive() {
    const meters = document.getElementById("ff-meters");
    if (meters && lastReport) meters.outerHTML = renderMeters(lastReport);
    const confusion = document.getElementById("ff-confusion");
    if (confusion && lastReport) confusion.outerHTML = renderConfusion(lastReport);
    const callouts = document.getElementById("ff-callouts");
    if (callouts && lastReport) callouts.outerHTML = renderCallouts(lastReport);
    drawCharts();
  }

  function renderIntro() {
    return (
      '<section class="ff-intro">' +
      "<h1>Bias &amp; fairness meter</h1>" +
      "<p>Fairness is a measurable gap across groups, not a vibe (book §7.3, §7.5). " +
      "Load a dataset with a sensitive <em>group</em>, a true <em>label</em>, and a model <em>score</em>. " +
      "Choose a decision threshold, then compare demographic parity, the 80% disparate-impact rule, " +
      "equal opportunity, and equalized odds — and watch the accuracy–fairness trade-off. " +
      'Check group representation first in the <a href="../representation/index.html">representation visualizer</a>.</p>' +
      "</section>"
    );
  }

  function renderLoader() {
    const presets = window.FairnessPresets || {};
    let cards = "";
    Object.keys(presets).forEach(function (id) {
      const p = presets[id];
      const active = dataset && dataset.source === id ? " ff-preset-active" : "";
      cards +=
        '<button type="button" class="ff-preset' + active + '" data-preset="' + esc(id) + '">' +
        "<strong>" + esc(id) + "</strong>" +
        "<span>" + esc(p.description || "") + "</span>" +
        "</button>";
    });
    return (
      '<section class="ff-panel">' +
      "<h2>1 · Load data</h2>" +
      '<div class="ff-presets">' + cards + "</div>" +
      '<div class="ff-upload-row">' +
      '<label class="ff-upload-label">Or upload CSV / JSON (≤ 2 MB, ≤ 5000 rows): ' +
      '<input type="file" id="ff-upload" accept=".csv,.json"></label>' +
      "</div>" +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return '<div class="ff-message ff-' + message.kind + '">' + esc(message.text) + "</div>";
  }

  function optionList(columns, selected, includeNone) {
    let html = includeNone ? '<option value="">— none —</option>' : "";
    columns.forEach(function (c) {
      const sel = c === selected ? " selected" : "";
      html += '<option value="' + esc(c) + '"' + sel + ">" + esc(c) + "</option>";
    });
    return html;
  }

  function renderMapping() {
    const cols = dataset.columns;
    return (
      '<section class="ff-panel">' +
      "<h2>2 · Map columns</h2>" +
      '<p class="ff-hint">Required: sensitive group (A), true label Y ∈ {0,1}, and a score. Predictions are Ŷ = 1{score ≥ threshold}.</p>' +
      '<div class="ff-map-grid">' +
      '<label>Group (A)<select id="ff-map-group">' + optionList(cols, mapping.group, false) + "</select></label>" +
      '<label>Label (Y)<select id="ff-map-label">' + optionList(cols, mapping.label, false) + "</select></label>" +
      '<label>Score<select id="ff-map-score">' + optionList(cols, mapping.score, false) + "</select></label>" +
      '<label>ID (optional)<select id="ff-map-id">' + optionList(cols, mapping.id, true) + "</select></label>" +
      "</div>" +
      '<div class="ff-op-row">' +
      '<button type="button" id="ff-apply-map" class="ff-primary">Apply mapping</button>' +
      "</div>" +
      "</section>"
    );
  }

  function renderThreshold() {
    let perGroupHtml = "";
    if (perGroupMode && lastReport) {
      perGroupHtml = '<div class="ff-group-thresholds" id="ff-group-thresholds">';
      lastReport.groups.forEach(function (g) {
        const gt = groupThresholds[g.group] != null ? groupThresholds[g.group] : threshold;
        perGroupHtml +=
          '<div class="ff-group-threshold-row">' +
          "<label>" + esc(g.group) +
          ' <input type="range" class="ff-group-threshold" data-group="' + esc(g.group) +
          '" min="0" max="1" step="0.01" value="' + gt + '">' +
          ' <span data-group-readout="' + esc(g.group) + '">' + gt.toFixed(2) + "</span></label>" +
          "</div>";
      });
      perGroupHtml += "</div>";
    }

    return (
      '<section class="ff-panel">' +
      "<h2>3 · Decision threshold</h2>" +
      '<p class="ff-hint">Post-processing: raise or lower the cutoff to explore accuracy–fairness trade-offs (§7.5.2, §7.6).</p>' +
      '<label class="ff-toggle"><input type="checkbox" id="ff-per-group"' + (perGroupMode ? " checked" : "") + "> Use per-group thresholds (post-processing mitigation)</label>" +
      (!perGroupMode
        ? '<div class="ff-threshold-row">' +
          '<input type="range" id="ff-threshold" min="0" max="1" step="0.01" value="' +
          threshold +
          '">' +
          '<span class="ff-threshold-readout">t = <strong id="ff-threshold-val">' +
          threshold.toFixed(2) +
          "</strong></span></div>"
        : '<p class="ff-hint">Each group has its own cutoff — a form of threshold optimization (§7.6).</p>') +
      perGroupHtml +
      "</section>"
    );
  }

  function meterCard(title, value, detail, bad, formulaKey) {
    const tip = Lib.METRIC_FORMULAS[formulaKey] || "";
    return (
      '<div class="ff-meter' + (bad ? " ff-meter-bad" : " ff-meter-ok") + '"' +
      (tip ? ' title="' + esc(tip) + '"' : "") +
      ">" +
      "<h3>" + esc(title) + (tip ? ' <span class="ff-tip" aria-hidden="true">ⓘ</span>' : "") + "</h3>" +
      '<div class="ff-meter-value">' + esc(value) + "</div>" +
      '<div class="ff-meter-detail">' + esc(detail) + "</div>" +
      "</div>"
    );
  }

  function pct(x) {
    return (x * 100).toFixed(1) + "%";
  }

  function renderMeters(report) {
    const diBad = report.disparateImpact.fails80Rule;
    const dpBad = report.demographicParityGap > 0.1;
    const eoBad = report.equalOpportunityGap > 0.1;
    const eoddsBad = report.equalizedOddsGap > 0.1;
    const threshLabel = report.perGroupThresholds
      ? "per-group thresholds"
      : "threshold " + report.threshold.toFixed(2);
    return (
      '<section class="ff-panel" id="ff-meters">' +
      "<h2>4 · Fairness meters</h2>" +
      '<p class="ff-hint">n = ' +
      report.n +
      (report.skipped ? " · skipped " + report.skipped : "") +
      " · " +
      threshLabel +
      " · hover ⓘ for formulas</p>" +
      '<div class="ff-meters">' +
      meterCard("Accuracy", pct(report.accuracy), "Overall correct predictions", false, "accuracy") +
      meterCard(
        "Demographic parity gap",
        pct(report.demographicParityGap),
        "Max − min selection rate across groups",
        dpBad,
        "demographicParityGap"
      ) +
      meterCard(
        "Disparate impact (min ratio)",
        report.disparateImpact.minRatio.toFixed(2),
        diBad ? "Fails 80% rule (§7.3)" : "Passes 80% rule (ref: " + (report.disparateImpact.referenceGroup || "—") + ")",
        diBad,
        "disparateImpact"
      ) +
      meterCard(
        "Equal opportunity gap",
        pct(report.equalOpportunityGap),
        "Max − min true positive rate (TPR)",
        eoBad,
        "equalOpportunity"
      ) +
      meterCard(
        "Equalized odds gap",
        pct(report.equalizedOddsGap),
        "Max of TPR gap and FPR gap",
        eoddsBad,
        "equalizedOdds"
      ) +
      "</div>" +
      "</section>"
    );
  }

  function renderConfusion(report) {
    let head = "<tr><th>Group</th><th>TP</th><th>FP</th><th>TN</th><th>FN</th><th>TPR</th><th>FPR</th></tr>";
    let body = "";
    report.groups.forEach(function (g) {
      body +=
        "<tr><td>" + esc(g.group) + "</td>" +
        "<td>" + g.tp + "</td><td>" + g.fp + "</td><td>" + g.tn + "</td><td>" + g.fn + "</td>" +
        "<td>" + pct(g.tpr) + "</td><td>" + pct(g.fpr) + "</td></tr>";
    });
    return (
      '<section class="ff-panel" id="ff-confusion">' +
      "<h2>Per-group confusion matrix</h2>" +
      '<p class="ff-hint">Counts at the current threshold(s). TPR = TP/(TP+FN), FPR = FP/(FP+TN).</p>' +
      '<div class="ff-table-wrap"><table class="ff-confusion">' +
      "<thead>" + head + "</thead><tbody>" + body + "</tbody></table></div>" +
      "</section>"
    );
  }

  function renderCallouts(report) {
    const notes = Lib.fairnessCallouts(report);
    let html = '<section class="ff-panel" id="ff-callouts"><h2>Callouts</h2>';
    notes.forEach(function (n) {
      html += '<p class="ff-callout">' + esc(n) + "</p>";
    });
    return html + "</section>";
  }

  function renderCharts() {
    const tradeoffNote = perGroupMode
      ? '<p class="ff-hint">Trade-off curve uses a single global threshold; switch off per-group mode to explore the full frontier.</p>'
      : "";
    return (
      '<section class="ff-panel">' +
      "<h2>5 · Visualize gaps</h2>" +
      tradeoffNote +
      '<div class="ff-chart-grid">' +
      '<div class="ff-chart-wrap ff-chart-wide"><canvas id="ff-tradeoff-canvas" width="720" height="300" role="img" aria-label="Accuracy fairness trade-off curve"></canvas></div>' +
      '<div class="ff-chart-wrap ff-chart-wide"><canvas id="ff-score-canvas" width="720" height="300" role="img" aria-label="Score distributions by group"></canvas></div>' +
      '<div class="ff-chart-wrap"><canvas id="ff-sel-canvas" width="640" height="300" role="img" aria-label="Selection rates by group"></canvas></div>' +
      '<div class="ff-chart-wrap"><canvas id="ff-di-canvas" width="640" height="300" role="img" aria-label="Disparate impact ratios with 80 percent rule"></canvas></div>' +
      '<div class="ff-chart-wrap ff-chart-wide"><canvas id="ff-err-canvas" width="640" height="300" role="img" aria-label="True and false positive rates by group"></canvas></div>' +
      "</div>" +
      "</section>"
    );
  }

  function drawCharts() {
    if (!Charts || !lastReport || !dataset) return;
    const trade = document.getElementById("ff-tradeoff-canvas");
    const score = document.getElementById("ff-score-canvas");
    const sel = document.getElementById("ff-sel-canvas");
    const di = document.getElementById("ff-di-canvas");
    const err = document.getElementById("ff-err-canvas");

    if (trade && tradeoffSweep && tradeoffSweep.length) {
      Charts.drawTradeoffCurve(trade, tradeoffSweep, threshold);
    } else if (trade) {
      Charts.clear(trade);
    }

    if (score) {
      const dist = Lib.scoreDistributions(
        dataset.rows,
        mapping,
        threshold,
        20,
        perGroupMode ? groupThresholds : null
      );
      Charts.drawScoreDistributions(score, dist);
    }

    if (sel) {
      Charts.drawRateBars(
        sel,
        lastReport.groups.map(function (g) {
          return { group: g.group, value: g.selectionRate };
        }),
        { title: "Selection rate by group", xLabel: "Selection rate (%)", asPercent: true }
      );
    }
    if (di) {
      Charts.drawDisparateImpact(di, lastReport.disparateImpact.ratios, lastReport.disparateImpact.threshold);
    }
    if (err) {
      Charts.drawErrorRates(err, lastReport.groups);
    }
  }

  function renderExport() {
    return (
      '<section class="ff-panel">' +
      "<h2>6 · Export</h2>" +
      '<div class="ff-op-row">' +
      '<button type="button" id="ff-export" class="ff-primary">Download fairness report (JSON)</button>' +
      "</div>" +
      '<p class="ff-hint">The report records threshold(s), per-group rates, gaps, confusion counts, and trade-off sweep.</p>' +
      "</section>"
    );
  }

  function on(id, event, handler) {
    const el = document.getElementById(id);
    if (el) el.addEventListener(event, handler);
  }

  function val(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
  }

  function bindEvents() {
    root.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    on("ff-upload", "change", onFileUpload);
    on("ff-apply-map", "click", onApplyMapping);
    on("ff-threshold", "input", onThresholdInput);
    on("ff-per-group", "change", onPerGroupToggle);
    root.querySelectorAll(".ff-group-threshold").forEach(function (slider) {
      slider.addEventListener("input", onGroupThresholdInput);
    });
    on("ff-export", "click", exportReport);
  }

  if (window.DatasetToolsReport) {
    window.DatasetToolsReport.registerRedraw(function () {
      drawCharts();
    });
  }
  renderAll();
})();
