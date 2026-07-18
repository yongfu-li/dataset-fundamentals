/* Class imbalance explorer UI (classic script, file:// safe). */
(function () {
  "use strict";
  const Lib = window.ImbalanceLib;
  if (!Lib) {
    console.error("ImbalanceLib missing. Check lib/*.js load order.");
    return;
  }

  let session = null;
  let message = { text: "", kind: "" };
  let labelColumn = "";
  let featureColumns = [];
  let positiveLabel = "1";
  let strategy = "oversample";
  let seed = 42;
  let result = null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function pct(n) {
    return (Math.round(n * 1000) / 10).toFixed(1) + "%";
  }

  function fmt(n) {
    return (Math.round(n * 1000) / 1000).toFixed(3);
  }

  function applyMappingDefaults() {
    if (!session) return;
    labelColumn = session.labelColumn || Lib.inferLabelColumn(session.columns);
    featureColumns = (session.featureColumns && session.featureColumns.length
      ? session.featureColumns
      : Lib.inferFeatureColumns(session.columns, labelColumn)
    ).slice(0, 3);
    positiveLabel = session.positiveLabel != null ? String(session.positiveLabel) : "1";
  }

  function runAnalysis() {
    if (!session) return;
    try {
      result = Lib.runComparison(session.rows, {
        labelColumn: labelColumn,
        featureColumns: featureColumns,
        positiveLabel: positiveLabel,
        strategy: strategy,
        seed: seed,
      });
      showMessage("Evaluated on held-out test fold (never resampled).", "ok");
    } catch (err) {
      result = null;
      showMessage(err.message || String(err), "error");
    }
  }

  function loadPreset(id) {
    try {
      session = Lib.loadPreset(id);
      applyMappingDefaults();
      result = null;
      runAnalysis();
      showMessage("Loaded '" + session.title + "' (" + session.rows.length + " rows).", "ok");
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
        session = {
          id: "upload",
          name: file.name,
          title: "Uploaded data",
          bookAnchors: ["§5.2"],
          rows: data.rows,
          columns: data.columns,
          source: data.source,
        };
        applyMappingDefaults();
        result = null;
        runAnalysis();
        showMessage("Loaded '" + file.name + "' (" + data.rows.length + " rows).", "ok");
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

  const root = document.getElementById("imb-root");
  if (!root) return;

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderGuide() +
      renderLoader() +
      renderMessage() +
      (session ? renderWorkspace() : "");
    bindEvents();
    drawCharts();
  }

  function renderIntro() {
    return (
      '<section class="imb-intro">' +
      "<h1>Class imbalance explorer</h1>" +
      '<p class="lead">Skewed labels break naive accuracy. Hold out a test fold, try oversample / undersample / class weights ' +
      "on <em>train only</em>, and watch recall and F1 move (Ch.5 §5.2). Metrics come from " +
      "<strong>binary logistic regression</strong>.</p>" +
      '<p class="imb-cross">Separate from the train/val/test splitter: stratification <em>preserves</em> imbalance across folds; ' +
      "this lab asks how to <em>respond</em> to it without cheating on test.</p>" +
      "</section>"
    );
  }

  function renderGuide() {
    return (
      '<details class="imb-panel imb-guide">' +
      "<summary>Learn → apply with your data</summary>" +
      "<ol>" +
      "<li><strong>Learn</strong> — <code>fraud-rare</code> (accuracy trap) → <code>churn-mild</code> → <code>balanced-demo</code>.</li>" +
      "<li><strong>Map</strong> — label + numeric features; positive class value.</li>" +
      "<li><strong>Strategy</strong> — none / oversample / undersample / class weights (train only).</li>" +
      "<li><strong>Compare</strong> — test accuracy vs recall/F1 on the logistic model; export the report.</li>" +
      "</ol>" +
      '<p class="imb-hint">Never resample the test set. A majority-class predictor can look “accurate” while missing every minority case.</p>' +
      '<p class="imb-hint">Model: binary logistic regression · features z-scored · decision threshold 0.5 · batch gradient descent.</p>' +
      "</details>"
    );
  }

  function renderLoader() {
    const presets = Lib.listPresets();
    const cards = presets
      .map(function (p) {
        const active = session && session.id === p.id ? " is-active" : "";
        const rate = p.meta && p.meta.positiveRate != null ? pct(p.meta.positiveRate) : "";
        return (
          '<button type="button" class="imb-preset' +
          active +
          '" data-preset="' +
          esc(p.id) +
          '">' +
          "<strong>" +
          esc(p.title) +
          "</strong>" +
          (rate ? '<span class="imb-meta">pos ' + esc(rate) + "</span>" : "") +
          "<span>" +
          esc(p.description) +
          "</span>" +
          "</button>"
        );
      })
      .join("");
    return (
      '<section class="imb-panel">' +
      "<h2>1 · Load data</h2>" +
      '<div class="imb-presets">' +
      cards +
      "</div>" +
      '<label class="imb-upload">Upload CSV / JSON (max 5,000 rows, 2 MB)' +
      '<input id="imb-upload" type="file" accept=".csv,.json,text/csv,application/json" />' +
      "</label>" +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return '<p class="imb-message imb-' + esc(message.kind || "ok") + '">' + esc(message.text) + "</p>";
  }

  function renderWorkspace() {
    const counts = Lib.classCounts(session.rows, labelColumn, positiveLabel);
    return (
      renderMapping(counts) +
      renderStrategy(counts) +
      (result ? renderResults() : "") +
      renderExport()
    );
  }

  function renderMapping(counts) {
    const colOpts = session.columns
      .map(function (c) {
        return (
          '<option value="' +
          esc(c) +
          '"' +
          (c === labelColumn ? " selected" : "") +
          ">" +
          esc(c) +
          "</option>"
        );
      })
      .join("");
    const featChecks = session.columns
      .filter(function (c) {
        return c !== labelColumn;
      })
      .map(function (c) {
        const on = featureColumns.indexOf(c) !== -1;
        return (
          '<label class="imb-check"><input type="checkbox" data-feat="' +
          esc(c) +
          '"' +
          (on ? " checked" : "") +
          " /> " +
          esc(c) +
          "</label>"
        );
      })
      .join("");
    const ir =
      counts.imbalanceRatio === Infinity ? "∞" : (Math.round(counts.imbalanceRatio * 10) / 10).toFixed(1);
    return (
      '<section class="imb-panel">' +
      "<h2>2 · Label &amp; features</h2>" +
      '<div class="imb-grid">' +
      '<label>Label column<select id="imb-label">' +
      colOpts +
      "</select></label>" +
      '<label>Positive label value<input id="imb-pos" type="text" value="' +
      esc(positiveLabel) +
      '" /></label>' +
      '<label>Seed<input id="imb-seed" type="number" value="' +
      esc(seed) +
      '" /></label>' +
      "</div>" +
      '<div class="imb-feats"><span class="imb-feats-label">Numeric features (up to 3)</span>' +
      featChecks +
      "</div>" +
      '<div class="imb-summary">' +
      "<p><strong>" +
      counts.n +
      "</strong> labeled rows · positive <strong>" +
      counts.positive +
      "</strong> (" +
      pct(counts.positiveRate) +
      ") · IR maj/min <strong>" +
      ir +
      "</strong></p>" +
      "<p>" +
      esc(Lib.describeImbalance(counts)) +
      "</p>" +
      "<p>Majority-class accuracy trap: <strong>" +
      pct(counts.majorityClassAccuracy) +
      "</strong> (predict everything as the majority).</p>" +
      "</div>" +
      '<div class="imb-chart-wrap" data-figure="Class counts">' +
      '<canvas id="imb-class-chart" width="520" height="260"></canvas>' +
      "</div>" +
      "</section>"
    );
  }

  function renderStrategy(counts) {
    const opts = [
      ["none", "None (baseline)"],
      ["oversample", "Oversample minority (train)"],
      ["undersample", "Undersample majority (train)"],
      ["class_weight", "Class weights (train)"],
    ]
      .map(function (pair) {
        return (
          '<option value="' +
          pair[0] +
          '"' +
          (strategy === pair[0] ? " selected" : "") +
          ">" +
          pair[1] +
          "</option>"
        );
      })
      .join("");
    return (
      '<section class="imb-panel">' +
      "<h2>3 · Mitigation strategy</h2>" +
      '<label class="imb-strategy">Strategy<select id="imb-strategy">' +
      opts +
      "</select></label>" +
      '<button type="button" class="btn" id="imb-run">Re-run comparison</button>' +
      '<p class="imb-hint">Resampling and weights apply to the <strong>training</strong> fold only. Test metrics stay honest. ' +
      "Same seed + strategy yields the same numbers (deterministic)—change the seed or strategy to see a difference.</p>" +
      "</section>"
    );
  }

  function metricCell(m) {
    return (
      "<td>" +
      fmt(m.accuracy) +
      "</td><td>" +
      fmt(m.precision) +
      "</td><td>" +
      fmt(m.recall) +
      "</td><td>" +
      fmt(m.f1) +
      "</td>"
    );
  }

  function renderResults() {
    const b = result.baseline;
    const t = result.treated;
    const teach =
      result.overall.positiveRate < 0.1
        ? "On rare positives, baseline accuracy can stay high while recall stays near zero—that is the accuracy trap."
        : "Watch whether recall/F1 rise more than accuracy when you mitigate imbalance.";
    return (
      '<section class="imb-panel">' +
      "<h2>4 · Held-out test comparison</h2>" +
      "<p>Holdout: train " +
      result.holdout.train +
      " / test " +
      result.holdout.test +
      " (test positives " +
      result.holdout.testPositive +
      "). " +
      esc(result.note) +
      "</p>" +
      '<p class="imb-model"><strong>Model:</strong> binary logistic regression · features z-scored · threshold 0.5 · batch gradient descent.</p>' +
      '<div class="imb-train-sizes">' +
      "<p>Train after strategy <code>" +
      esc(t.strategy) +
      "</code>: " +
      t.trainSize +
      " rows (pos " +
      t.trainPositive +
      " / neg " +
      t.trainNegative +
      ")." +
      (t.weightInfo
        ? " Weights w₊=" + fmt(t.weightInfo.wPos) + ", w₋=" + fmt(t.weightInfo.wNeg) + "."
        : "") +
      "</p>" +
      "</div>" +
      '<table class="imb-table"><thead><tr><th>Run</th><th>Accuracy</th><th>Precision</th><th>Recall</th><th>F1</th></tr></thead><tbody>' +
      "<tr><th>Baseline (none)</th>" +
      metricCell(b.metrics) +
      "</tr>" +
      "<tr><th>Strategy (" +
      esc(t.strategy) +
      ")</th>" +
      metricCell(t.metrics) +
      "</tr>" +
      "</tbody></table>" +
      "<p>Confusion (strategy): TP " +
      t.metrics.tp +
      " · FP " +
      t.metrics.fp +
      " · TN " +
      t.metrics.tn +
      " · FN " +
      t.metrics.fn +
      "</p>" +
      '<p class="imb-teach">' +
      esc(teach) +
      "</p>" +
      '<div class="imb-chart-wrap" data-figure="Test metrics">' +
      '<canvas id="imb-metric-chart" width="560" height="280"></canvas>' +
      "</div>" +
      "</section>"
    );
  }

  function renderExport() {
    if (!result) return "";
    return (
      '<section class="imb-panel">' +
      "<h2>5 · Export</h2>" +
      '<div class="deck-links">' +
      '<button type="button" class="btn" id="imb-export-json">Download imbalance-report.json</button>' +
      '<button type="button" class="btn btn-secondary" id="imb-export-md">Download imbalance-report.md</button>' +
      '<a class="btn btn-ghost" href="../train-test-split/index.html">Open train/val/test splitter →</a>' +
      "</div>" +
      '<p class="imb-hint">Use the splitter when the lesson is honest holdout and leakage—not resampling.</p>' +
      "</section>"
    );
  }

  function drawCharts() {
    if (!session) return;
    const classCanvas = document.getElementById("imb-class-chart");
    if (classCanvas) {
      const counts = Lib.classCounts(session.rows, labelColumn, positiveLabel);
      Lib.drawClassBars(classCanvas, counts, { title: "Class counts (full table)" });
    }
    const metricCanvas = document.getElementById("imb-metric-chart");
    if (metricCanvas && result) {
      Lib.drawMetricBars(metricCanvas, result.baseline.metrics, result.treated.metrics, {
        title: "Test metrics: baseline vs strategy",
      });
    }
  }

  function syncFromForm() {
    const labelEl = document.getElementById("imb-label");
    if (labelEl) labelColumn = labelEl.value;
    const posEl = document.getElementById("imb-pos");
    if (posEl) positiveLabel = posEl.value.trim() || "1";
    const seedEl = document.getElementById("imb-seed");
    if (seedEl) seed = Number(seedEl.value) || 0;
    const stratEl = document.getElementById("imb-strategy");
    if (stratEl) strategy = stratEl.value;
    const feats = [];
    root.querySelectorAll("[data-feat]").forEach(function (box) {
      if (box.checked) feats.push(box.getAttribute("data-feat"));
    });
    if (feats.length) featureColumns = feats.slice(0, 3);
  }

  function bindEvents() {
    root.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    const upload = document.getElementById("imb-upload");
    if (upload) upload.addEventListener("change", onFileUpload);

    const labelEl = document.getElementById("imb-label");
    if (labelEl) {
      labelEl.addEventListener("change", function () {
        labelColumn = labelEl.value;
        featureColumns = Lib.inferFeatureColumns(session.columns, labelColumn).slice(0, 3);
        runAnalysis();
        renderAll();
      });
    }
    const posEl = document.getElementById("imb-pos");
    if (posEl) {
      posEl.addEventListener("change", function () {
        positiveLabel = posEl.value.trim() || "1";
        runAnalysis();
        renderAll();
      });
    }
    const seedEl = document.getElementById("imb-seed");
    if (seedEl) {
      seedEl.addEventListener("change", function () {
        seed = Number(seedEl.value) || 0;
        runAnalysis();
        renderAll();
      });
    }
    root.querySelectorAll("[data-feat]").forEach(function (box) {
      box.addEventListener("change", function () {
        const c = box.getAttribute("data-feat");
        if (box.checked) {
          if (featureColumns.indexOf(c) === -1) featureColumns.push(c);
          featureColumns = featureColumns.slice(0, 3);
        } else {
          featureColumns = featureColumns.filter(function (x) {
            return x !== c;
          });
        }
        runAnalysis();
        renderAll();
      });
    });
    const stratEl = document.getElementById("imb-strategy");
    if (stratEl) {
      stratEl.addEventListener("change", function () {
        strategy = stratEl.value;
        runAnalysis();
        renderAll();
      });
    }
    const runBtn = document.getElementById("imb-run");
    if (runBtn) {
      runBtn.addEventListener("click", function () {
        syncFromForm();
        runAnalysis();
        renderAll();
      });
    }
    const exJ = document.getElementById("imb-export-json");
    if (exJ) {
      exJ.addEventListener("click", function () {
        Lib.downloadReportJson(Lib.buildReport(session, result));
      });
    }
    const exM = document.getElementById("imb-export-md");
    if (exM) {
      exM.addEventListener("click", function () {
        Lib.downloadReportMd(Lib.buildReport(session, result));
      });
    }
  }

  if (window.DatasetToolsReport) {
    window.DatasetToolsReport.registerRedraw(function () {
      drawCharts();
    });
  }

  if (window.ImbalancePresets && window.ImbalancePresets["fraud-rare"]) {
    loadPreset("fraud-rare");
  } else {
    renderAll();
  }
})();
