/* Representation bias visualizer — main UI (classic script, file:// safe).
 * Compare population vs dataset group shares; optional per-group accuracy.
 * Book anchors: §7.2.1 sampling bias; §7.3 distribution comparison. */
(function () {
  "use strict";
  const Lib = window.RepresentationLib;
  const Charts = window.RepresentationCharts;
  if (!Lib) {
    console.error("RepresentationLib not found. Check lib/*.js loaded before representation.js.");
    return;
  }

  let dataset = null;
  let mapping = { id: null, group: null, label: null, score: null };
  let population = {};
  let populationEditable = false;
  let threshold = 0.5;
  let gapReport = null;
  let perfReport = null;
  let message = { text: "", kind: "" };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function val(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
  }

  function mappingReady() {
    return mapping.group;
  }

  function syncPopulationFromDataset() {
    if (!dataset || !mapping.group) return;
    const counted = Lib.countGroups(dataset.rows, mapping.group);
    if (populationEditable || !Object.keys(population).length) {
      population = Lib.uniformPopulation(counted.groups);
    }
  }

  function readPopulationFromForm() {
    if (!gapReport || !populationEditable) return;
    const next = {};
    gapReport.groups.forEach(function (g) {
      const el = document.getElementById("rp-pop-" + g.replace(/\s+/g, "-"));
      if (!el) return;
      const pct = Number(el.value);
      next[g] = Number.isFinite(pct) ? pct / 100 : 0;
    });
    population = next;
  }

  function recompute() {
    if (!dataset || !mappingReady()) {
      gapReport = null;
      perfReport = null;
      return;
    }
    syncPopulationFromDataset();
    gapReport = Lib.computeGaps(population, dataset.rows, mapping.group);
    if (mapping.label && mapping.score) {
      perfReport = Lib.computePerformance(dataset.rows, mapping, threshold);
    } else {
      perfReport = null;
    }
  }

  function loadPreset(id) {
    try {
      const data = Lib.loadPreset(id);
      dataset = data;
      mapping = Lib.suggestMapping(data.columns, data.defaultMapping || {});
      population = Object.assign({}, data.population || {});
      populationEditable = data.populationEditable === true;
      threshold = 0.5;
      recompute();
      showMessage(
        "Loaded '" + data.source + "' (" + data.rows.length + " rows). Compare population vs dataset shares below.",
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
        dataset = data;
        mapping = Lib.suggestMapping(data.columns, {});
        population = {};
        populationEditable = true;
        threshold = 0.5;
        recompute();
        showMessage(
          "Loaded '" + file.name + "' (" + data.rows.length + " rows). Set population reference % and confirm mapping.",
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
      id: val("rp-map-id") || null,
      group: val("rp-map-group") || null,
      label: val("rp-map-label") || null,
      score: val("rp-map-score") || null,
    };
    if (!mapping.group) {
      showMessage("Group column is required.", "error");
      renderAll();
      return;
    }
    recompute();
    showMessage("Mapping applied.", "ok");
    renderAll();
  }

  function onPopulationApply() {
    readPopulationFromForm();
    const sum = Lib.populationSum(population);
    if (Math.abs(sum - 1) > 0.02) {
      showMessage("Population percentages should sum to 100% (currently " + (sum * 100).toFixed(1) + "%).", "warn");
    }
    recompute();
    renderAll();
  }

  function onThresholdInput() {
    threshold = Number(val("rp-threshold"));
    if (!Number.isFinite(threshold)) threshold = 0.5;
    if (mapping.label && mapping.score) {
      perfReport = Lib.computePerformance(dataset.rows, mapping, threshold);
    }
    renderChartsOnly();
  }

  const root = document.getElementById("representation-root");
  if (!root) return;

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderLoader() +
      renderMessage() +
      (dataset ? renderMapping() + renderPopulation() : "") +
      (gapReport ? renderGapTable() + renderCharts() + renderPerformance() + renderExport() : "");
    bindEvents();
    drawCharts();
  }

  function renderChartsOnly() {
    drawCharts();
    const callout = document.getElementById("rp-perf-callout");
    if (callout && perfReport) {
      callout.outerHTML = renderPerfCallout();
    }
  }

  function renderIntro() {
    return (
      '<section class="rp-intro">' +
      "<h1>Representation bias visualizer</h1>" +
      "<p>Who is missing from the training distribution? (book §7.2.1, §7.3). " +
      "Compare a <strong>population reference</strong> to your <strong>dataset</strong> group shares before " +
      "running outcome-fairness metrics in the " +
      '<a href="../fairness/index.html">bias &amp; fairness meter</a>.</p>' +
      "</section>"
    );
  }

  function renderLoader() {
    const presets = window.RepresentationPresets || {};
    let cards = "";
    Object.keys(presets).forEach(function (id) {
      const p = presets[id];
      const active = dataset && dataset.source === (p.name || id) ? " rp-preset-active" : "";
      cards +=
        '<button type="button" class="rp-preset' + active + '" data-preset="' + esc(id) + '">' +
        "<strong>" + esc(id) + "</strong>" +
        "<span>" + esc(p.description || "") + "</span></button>";
    });
    return (
      '<section class="rp-panel">' +
      "<h2>1 · Load data</h2>" +
      '<div class="rp-presets">' + cards + "</div>" +
      '<label class="rp-upload-label">Or upload CSV / JSON (≤ 2 MB, ≤ 5000 rows): ' +
      '<input type="file" id="rp-upload" accept=".csv,.json"></label>' +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return '<div class="rp-message rp-' + esc(message.kind) + '">' + esc(message.text) + "</div>";
  }

  function optionList(columns, selected, includeNone) {
    let html = includeNone ? '<option value="">— none —</option>' : "";
    (columns || []).forEach(function (c) {
      const sel = c === selected ? " selected" : "";
      html += '<option value="' + esc(c) + '"' + sel + ">" + esc(c) + "</option>";
    });
    return html;
  }

  function renderMapping() {
    const cols = dataset.columns;
    return (
      '<section class="rp-panel">' +
      "<h2>2 · Map columns</h2>" +
      '<p class="rp-hint">Required: sensitive <em>group</em> column. Optional: <em>label</em> + <em>score</em> unlock per-group accuracy.</p>' +
      '<div class="rp-map-grid">' +
      '<label>Group<select id="rp-map-group">' + optionList(cols, mapping.group, false) + "</select></label>" +
      '<label>Label (optional)<select id="rp-map-label">' + optionList(cols, mapping.label, true) + "</select></label>" +
      '<label>Score (optional)<select id="rp-map-score">' + optionList(cols, mapping.score, true) + "</select></label>" +
      '<label>ID (optional)<select id="rp-map-id">' + optionList(cols, mapping.id, true) + "</select></label>" +
      "</div>" +
      '<button type="button" id="rp-apply-map" class="rp-primary">Apply mapping</button>' +
      "</section>"
    );
  }

  function renderPopulation() {
    if (!mappingReady()) return "";
    const counted = Lib.countGroups(dataset.rows, mapping.group);
    const groups = counted.groups;
    if (!groups.length) return "";

    let rows = "";
    groups.forEach(function (g) {
      const share = population[g] != null ? population[g] : 1 / groups.length;
      const pct = (share * 100).toFixed(1);
      const id = "rp-pop-" + g.replace(/\s+/g, "-");
      if (populationEditable) {
        rows +=
          "<tr><td>" + esc(g) + '</td><td><input type="number" id="' + esc(id) + '" class="rp-pop-input" min="0" max="100" step="0.1" value="' + pct + '"> %</td></tr>';
      } else {
        rows += "<tr><td>" + esc(g) + "</td><td>" + pct + "%</td></tr>";
      }
    });

    const sumPct = (Lib.populationSum(population) * 100).toFixed(1);
    return (
      '<section class="rp-panel">' +
      "<h2>3 · Population reference</h2>" +
      '<p class="rp-hint">' +
      (populationEditable
        ? "Target population shares (must sum to 100%). Default: uniform across observed groups."
        : "Preset population reference (read-only).") +
      "</p>" +
      '<table class="rp-table"><thead><tr><th>Group</th><th>Population %</th></tr></thead><tbody>' +
      rows +
      "</tbody></table>" +
      '<p class="rp-hint">Sum: <strong id="rp-pop-sum">' + sumPct + '%</strong></p>' +
      (populationEditable
        ? '<button type="button" id="rp-apply-pop" class="rp-secondary">Apply population %</button>'
        : "") +
      "</section>"
    );
  }

  function renderGapTable() {
    let rows = "";
    gapReport.items.forEach(function (it) {
      const ratio = it.representationRatio == null ? "—" : it.representationRatio.toFixed(2);
      const flag = it.flagged ? ' class="rp-flagged"' : "";
      rows +=
        "<tr" + flag + "><td>" + esc(it.group) + "</td><td>" + it.count + "</td>" +
        "<td>" + (it.populationShare * 100).toFixed(1) + "%</td>" +
        "<td>" + (it.datasetShare * 100).toFixed(1) + "%</td>" +
        "<td>" + it.gapPp + "</td><td>" + ratio + "</td>" +
        "<td>" + (it.flagged ? "⚠" : "") + "</td></tr>";
    });
    return (
      '<section class="rp-panel">' +
      "<h2>4 · Gap summary</h2>" +
      '<p class="rp-hint">Max |gap|: <strong>' + gapReport.maxAbsGapPp + " pp</strong> · " +
      "Flag when |gap| ≥ " + gapReport.flagThresholdPp + " pp</p>" +
      '<table class="rp-table"><thead><tr><th>Group</th><th>n</th><th>Pop %</th><th>Data %</th><th>Gap (pp)</th><th>Ratio</th><th></th></tr></thead><tbody>' +
      rows +
      "</tbody></table></section>"
    );
  }

  function renderCharts() {
    return (
      '<section class="rp-panel">' +
      "<h2>5 · Charts</h2>" +
      '<canvas id="rp-chart-pop" width="640" height="280" aria-label="Population vs dataset bar chart"></canvas>' +
      "</section>"
    );
  }

  function renderPerformance() {
    if (!perfReport) return "";
    return (
      '<section class="rp-panel">' +
      "<h2>6 · Optional performance impact</h2>" +
      '<p class="rp-hint">Per-group accuracy at score threshold (teaching aid — not a full simulation).</p>' +
      '<label class="rp-threshold-label">Threshold: <input type="range" id="rp-threshold" min="0" max="1" step="0.01" value="' + threshold + '"> <span id="rp-threshold-val">' + threshold.toFixed(2) + "</span></label>" +
      '<canvas id="rp-chart-acc" width="640" height="220" aria-label="Per-group accuracy bar chart"></canvas>' +
      renderPerfCallout() +
      "</section>"
    );
  }

  function renderPerfCallout() {
    if (!perfReport || !gapReport) return "";
    const under = gapReport.items.filter(function (it) {
      return it.underrepresented;
    });
    if (!under.length) {
      return '<p class="rp-callout" id="rp-perf-callout">No large underrepresentation flags — compare accuracy across groups anyway.</p>';
    }
    let worst = null;
    under.forEach(function (it) {
      const pg = perfReport.groups.find(function (g) {
        return g.group === it.group;
      });
      if (!pg) return;
      if (!worst || pg.accuracy < worst.accuracy) worst = pg;
    });
    if (!worst) return "";
    return (
      '<p class="rp-callout rp-warn" id="rp-perf-callout">' +
      "Underrepresented <strong>" + esc(worst.group) + "</strong> also has lower accuracy (" +
      (worst.accuracy * 100).toFixed(1) + "%) at this threshold — composition gaps can correlate with performance gaps." +
      "</p>"
    );
  }

  function renderExport() {
    return (
      '<section class="rp-panel">' +
      "<h2>7 · Export</h2>" +
      '<div class="rp-op-row">' +
      '<button type="button" id="rp-export-json" class="rp-primary">Download representation-gap.json</button>' +
      '<button type="button" id="rp-export-md" class="rp-secondary">Download representation-gap.md</button>' +
      '<a class="rp-link-btn" href="../fairness/index.html">Open fairness meter →</a>' +
      "</div></section>"
    );
  }

  function drawCharts() {
    if (!Charts || !gapReport) return;
    const popCanvas = document.getElementById("rp-chart-pop");
    if (popCanvas) {
      Charts.drawPopulationVsDataset(popCanvas, gapReport.items, {
        title: "Population vs dataset share by group",
      });
    }
    if (perfReport) {
      const accCanvas = document.getElementById("rp-chart-acc");
      if (accCanvas) {
        Charts.drawAccuracyBars(
          accCanvas,
          perfReport.groups.map(function (g) {
            return { group: g.group, accuracy: g.accuracy };
          }),
          { title: "Per-group accuracy (threshold " + threshold.toFixed(2) + ")" }
        );
      }
    }
  }

  function bindEvents() {
    document.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    const upload = document.getElementById("rp-upload");
    if (upload) upload.addEventListener("change", onFileUpload);
    const applyMap = document.getElementById("rp-apply-map");
    if (applyMap) applyMap.addEventListener("click", onApplyMapping);
    const applyPop = document.getElementById("rp-apply-pop");
    if (applyPop) applyPop.addEventListener("click", onPopulationApply);
    const th = document.getElementById("rp-threshold");
    if (th) {
      th.addEventListener("input", function () {
        const v = Number(th.value);
        threshold = Number.isFinite(v) ? v : 0.5;
        const lab = document.getElementById("rp-threshold-val");
        if (lab) lab.textContent = threshold.toFixed(2);
        onThresholdInput();
      });
    }
    const ej = document.getElementById("rp-export-json");
    if (ej) {
      ej.addEventListener("click", function () {
        Lib.downloadJson(dataset.source, mapping, gapReport, perfReport, dataset.description || "");
      });
    }
    const em = document.getElementById("rp-export-md");
    if (em) {
      em.addEventListener("click", function () {
        Lib.downloadMarkdown(dataset.source, mapping, gapReport, perfReport);
      });
    }
  }

  renderAll();
})();
