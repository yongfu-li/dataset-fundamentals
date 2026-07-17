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
  let schemaHints = null;
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
    if (!Object.keys(population).length) {
      const counted = Lib.countGroups(dataset.rows, mapping.group);
      population = Lib.uniformPopulation(counted.groups);
    }
  }

  function applySchemaHints() {
    if (!dataset || !schemaHints) return;
    mapping = Lib.suggestMapping(
      dataset.columns,
      Lib.mergeMappingHints(schemaHints.defaultMapping || {}, dataset.defaultMapping || {})
    );
    if (!dataset.description && schemaHints.description) {
      dataset.description = schemaHints.description;
    }
  }

  function applyDataset(data) {
    dataset = data;
    applySchemaHints();
    if (!mapping.group) {
      mapping = Lib.suggestMapping(data.columns, data.defaultMapping || {});
    }
    if (data.population && Object.keys(data.population).length) {
      population = Object.assign({}, data.population);
    } else if (!Object.keys(population).length) {
      population = {};
    }
    populationEditable = data.populationEditable !== false;
    threshold = 0.5;
    recompute();
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
      schemaHints = null;
      applyDataset(data);
      populationEditable = data.populationEditable === true;
      showMessage(
        "Loaded '" + data.source + "' (" + data.rows.length + " rows). Compare population vs dataset shares below.",
        "ok"
      );
    } catch (err) {
      showMessage(err.message || String(err), "error");
    }
    renderAll();
  }

  function readFile(file, cb) {
    if (file.size > Lib.MAX_BYTES) {
      throw new Error("File exceeds " + Lib.MAX_BYTES / (1024 * 1024) + " MB limit.");
    }
    const reader = new FileReader();
    reader.onload = function () {
      cb(String(reader.result));
    };
    reader.onerror = function () {
      showMessage("Could not read file.", "error");
      renderAll();
    };
    reader.readAsText(file);
  }

  function onFileUpload(ev) {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    try {
      readFile(file, function (text) {
        try {
          const parsed = Lib.parseUpload(text, file.name);
          if (parsed.kind === "datasheet") {
            schemaHints = parsed;
            applySchemaHints();
            if (dataset) recompute();
            showMessage(
              "Loaded schema hints from '" +
                file.name +
                "' (group→" +
                (schemaHints.defaultMapping.group || "?") +
                ")." +
                (dataset ? " Mapping updated." : " Upload dataset CSV/JSON/bundle next."),
              dataset ? "ok" : "warn"
            );
          } else if (parsed.kind === "population") {
            population = parsed.population;
            populationEditable = true;
            if (dataset) recompute();
            showMessage(
              "Loaded population reference (" + Object.keys(population).length + " groups) from '" + file.name + "'.",
              "ok"
            );
          } else {
            applyDataset(parsed);
            showMessage(
              "Loaded '" + file.name + "' (" + parsed.rows.length + " rows). " +
                (schemaHints ? "Applied datasheet column hints." : "Set population % or upload population-ref.json."),
              "ok"
            );
          }
        } catch (err) {
          showMessage(err.message || String(err), "error");
        }
        renderAll();
      });
    } catch (err) {
      showMessage(err.message || String(err), "error");
      renderAll();
    }
    ev.target.value = "";
  }

  function onPopulationUpload(ev) {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    readFile(file, function (text) {
      try {
        const parsed = Lib.parsePopulationReference(text, file.name);
        population = parsed.population;
        populationEditable = true;
        if (dataset) recompute();
        showMessage("Population reference loaded from '" + file.name + "'.", "ok");
      } catch (err) {
        showMessage(err.message || String(err), "error");
      }
      renderAll();
    });
    ev.target.value = "";
  }

  function onMetadataUpload(ev) {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    readFile(file, function (text) {
      try {
        schemaHints = Lib.parseDatasheetMetadata(text, file.name);
        applySchemaHints();
        if (dataset) recompute();
        showMessage(
          "Datasheet metadata loaded — suggested columns: group=" +
            (schemaHints.defaultMapping.group || "—") +
            ", label=" +
            (schemaHints.defaultMapping.label || "—") +
            ", score=" +
            (schemaHints.defaultMapping.score || "—") +
            (dataset ? "" : ". Upload dataset next."),
          dataset ? "ok" : "warn"
        );
      } catch (err) {
        showMessage(err.message || String(err), "error");
      }
      renderAll();
    });
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
      '<a href="../fairness/index.html">bias &amp; fairness meter</a>. ' +
      "Bring your own data via CSV, a <strong>bundle JSON</strong> (<code>rows</code> + <code>population</code>), " +
      "optional <code>population-ref.json</code>, or <code>datasheet-metadata.json</code> for column hints.</p>" +
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
      '<div class="rp-upload-grid">' +
      '<label class="rp-upload-label">Dataset (CSV, row JSON, or bundle JSON)<br>' +
      '<span class="rp-upload-hint">Bundle: <code>{name, population, rows, defaultMapping}</code> · ≤ ' +
      Lib.MAX_ROWS +
      " rows, ≤ " +
      Lib.MAX_BYTES / (1024 * 1024) +
      " MB</span>" +
      '<input type="file" id="rp-upload" accept=".csv,.json"></label>' +
      '<label class="rp-upload-label">Population reference (optional)<br>' +
      '<span class="rp-upload-hint"><code>{"Group A": 0.5, ...}</code> or <code>{population:{...}}</code></span>' +
      '<input type="file" id="rp-pop-upload" accept=".json,application/json"></label>' +
      '<label class="rp-upload-label">Schema hints (optional)<br>' +
      '<span class="rp-upload-hint"><code>datasheet-metadata.json</code> from the datasheet builder</span>' +
      '<input type="file" id="rp-meta-upload" accept=".json,application/json"></label>' +
      "</div>" +
      (schemaHints
        ? '<p class="rp-hint rp-hint-active">Schema hints loaded: <strong>' +
          esc(schemaHints.source) +
          "</strong> · suggested group=<code>" +
          esc(schemaHints.defaultMapping.group || "—") +
          "</code></p>"
        : "") +
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
      '<p class="rp-hint">Required: sensitive <em>group</em> column. Optional: <em>label</em> + <em>score</em> unlock per-group accuracy.' +
      (schemaHints ? " Column suggestions from datasheet metadata are pre-selected." : "") +
      "</p>" +
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
    const popUpload = document.getElementById("rp-pop-upload");
    if (popUpload) popUpload.addEventListener("change", onPopulationUpload);
    const metaUpload = document.getElementById("rp-meta-upload");
    if (metaUpload) metaUpload.addEventListener("change", onMetadataUpload);
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
        Lib.downloadJson(
          dataset.source,
          mapping,
          gapReport,
          perfReport,
          dataset.description || "",
          schemaHints
        );
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
