/* Train/val/test splitter + leakage detector (classic script, file:// safe). */
(function () {
  "use strict";
  const Lib = window.SplitLib;
  if (!Lib) {
    console.error("SplitLib missing. Check lib/*.js load order.");
    return;
  }

  let session = null;
  let message = { text: "", kind: "" };
  let method = "random";
  let trainPct = 70;
  let valPct = 15;
  let testPct = 15;
  let seed = 42;
  let idCol = "";
  let labelCol = "";
  let timeCol = "";
  let splitResult = null;
  let leakage = null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function applyDefaults(defs) {
    if (!defs) return;
    method = defs.method || method;
    trainPct = defs.trainPct != null ? defs.trainPct : trainPct;
    valPct = defs.valPct != null ? defs.valPct : valPct;
    testPct = defs.testPct != null ? defs.testPct : testPct;
    seed = defs.seed != null ? defs.seed : seed;
    idCol = defs.idCol || "";
    labelCol = defs.labelCol || "";
    timeCol = defs.timeCol || "";
  }

  function pickColumnDefaults() {
    if (!session) return;
    const cols = session.columns;
    if (!idCol || cols.indexOf(idCol) === -1) {
      const prefer = cols.find(function (c) {
        const n = c.toLowerCase();
        return n === "customer_id" || n === "id" || n.endsWith("_id") || n === "user_id";
      });
      idCol = prefer || cols[0] || "";
    }
    if (!labelCol || cols.indexOf(labelCol) === -1) {
      const prefer = cols.find(function (c) {
        const n = c.toLowerCase();
        return n === "churned" || n === "label" || n === "fraud" || n === "y" || n === "target";
      });
      labelCol = prefer || "";
    }
    if (!timeCol || cols.indexOf(timeCol) === -1) {
      const prefer = cols.find(function (c) {
        const n = c.toLowerCase();
        return n.indexOf("date") !== -1 || n.indexOf("time") !== -1 || n === "ts";
      });
      timeCol = prefer || "";
    }
  }

  function runSplit() {
    if (!session) {
      splitResult = null;
      leakage = null;
      return;
    }
    try {
      splitResult = Lib.runSplit(session.rows, {
        method: method,
        trainPct: trainPct,
        valPct: valPct,
        testPct: testPct,
        seed: seed,
        idCol: idCol || null,
        labelCol: labelCol || null,
        timeCol: timeCol || null,
      });
      leakage = Lib.analyzeLeakage(splitResult);
    } catch (err) {
      splitResult = null;
      leakage = null;
      showMessage(err.message || String(err), "error");
    }
  }

  function loadPreset(id) {
    try {
      session = Lib.loadPreset(id);
      applyDefaults(session.defaults);
      pickColumnDefaults();
      message = { text: "", kind: "" };
      runSplit();
      showMessage(
        "Loaded '" + session.name + "' (" + session.rows.length + " rows).",
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
        session = {
          id: "upload",
          name: file.name,
          title: "Uploaded data",
          description: "",
          bookAnchors: ["§1.5"],
          teachingFocus: "user-upload",
          defaults: {},
          rows: data.rows,
          columns: data.columns,
          source: data.source,
        };
        idCol = labelCol = timeCol = "";
        pickColumnDefaults();
        runSplit();
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

  const root = document.getElementById("split-root");
  if (!root) return;

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderGuide() +
      renderLoader() +
      renderMessage() +
      (session ? renderWorkspace() : "");
    bindEvents();
  }

  function renderIntro() {
    return (
      '<section class="sp-intro">' +
      "<h1>Train / val / test splitter</h1>" +
      '<p class="lead">Split a table into holdout folds the way modeling pipelines do (Ch.1 §1.5), ' +
      "then check for <strong>entity ID</strong> and <strong>temporal</strong> leakage across folds.</p>" +
      '<p class="sp-cross">After EDA and cleaning, a correct split is the gate before training. ' +
      'See also the <a href="../eda-dashboard/index.html">EDA dashboard</a> and ' +
      '<a href="../cleaning/index.html">cleaning workbench</a>.</p>' +
      "</section>"
    );
  }

  function renderGuide() {
    return (
      '<details class="sp-panel sp-guide">' +
      "<summary>Learn → apply with your data</summary>" +
      "<ol>" +
      "<li><strong>Learn</strong> — <code>churn-holdout</code> (clean) → <code>entity-leak</code> (ID overlap) → " +
      "<code>orders-temporal</code> (switch random → time-based).</li>" +
      "<li><strong>Map columns</strong> — entity ID, label (for stratified), time (for temporal).</li>" +
      "<li><strong>Split</strong> — random, stratified, or time-based; set ratios and seed.</li>" +
      "<li><strong>Apply</strong> — upload CSV/JSON (≤ 5,000 rows, 2 MB); export <code>split-manifest.json</code>.</li>" +
      "</ol>" +
      '<p class="sp-hint">Same entity in train and test = optimistic metrics. Future in train predicting past = temporal leak.</p>' +
      "</details>"
    );
  }

  function renderLoader() {
    const presets = Lib.listPresets();
    let cards = "";
    presets.forEach(function (p) {
      const active = session && session.name === p.name ? " sp-preset-active" : "";
      cards +=
        '<button type="button" class="sp-preset' +
        active +
        '" data-preset="' +
        esc(p.id) +
        '"><strong>' +
        esc(p.title || p.name) +
        "</strong><span>" +
        esc(p.description) +
        "</span></button>";
    });
    return (
      '<section class="sp-panel">' +
      "<h2>1 · Load data</h2>" +
      '<div class="sp-presets">' +
      cards +
      "</div>" +
      '<label class="sp-upload">Upload CSV/JSON (≤ 2 MB, 5,000 rows)' +
      '<input type="file" id="sp-upload" accept=".csv,.json,text/csv,application/json"></label>' +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return (
      '<div class="sp-message sp-' +
      esc(message.kind) +
      '" role="status">' +
      esc(message.text) +
      "</div>"
    );
  }

  function colOptions(selected, allowEmpty) {
    let html = allowEmpty ? '<option value="">— none —</option>' : "";
    session.columns.forEach(function (c) {
      html +=
        '<option value="' +
        esc(c) +
        '"' +
        (selected === c ? " selected" : "") +
        ">" +
        esc(c) +
        "</option>";
    });
    return html;
  }

  function renderWorkspace() {
    return (
      '<section class="sp-panel">' +
      "<h2>2 · Loaded table</h2>" +
      "<p><strong>" +
      esc(session.title || session.name) +
      "</strong> · " +
      session.rows.length +
      " rows · " +
      session.columns.length +
      " columns</p>" +
      (session.teachingFocus
        ? '<p class="sp-hint">' + esc(session.teachingFocus) + "</p>"
        : "") +
      "</section>" +
      renderMapping() +
      renderControls() +
      (splitResult ? renderResults() : "") +
      (splitResult ? renderExport() : "")
    );
  }

  function renderMapping() {
    return (
      '<section class="sp-panel">' +
      "<h2>3 · Column roles</h2>" +
      '<div class="sp-controls">' +
      '<label>Entity ID<select id="sp-id-col">' +
      colOptions(idCol, true) +
      "</select></label>" +
      '<label>Label (stratify)<select id="sp-label-col">' +
      colOptions(labelCol, true) +
      "</select></label>" +
      '<label>Time column<select id="sp-time-col">' +
      colOptions(timeCol, true) +
      "</select></label>" +
      "</div>" +
      '<p class="sp-hint">ID checks entity leakage. Label enables stratified split. Time enables temporal checks / time-based split.</p>' +
      "</section>"
    );
  }

  function renderControls() {
    return (
      '<section class="sp-panel">' +
      "<h2>4 · Split settings</h2>" +
      '<div class="sp-controls">' +
      '<label>Method<select id="sp-method">' +
      '<option value="random"' +
      (method === "random" ? " selected" : "") +
      ">Random</option>" +
      '<option value="stratified"' +
      (method === "stratified" ? " selected" : "") +
      ">Stratified (by label)</option>" +
      '<option value="time"' +
      (method === "time" ? " selected" : "") +
      ">Time-based</option>" +
      "</select></label>" +
      '<label>Train %<input type="number" id="sp-train" min="0" max="100" value="' +
      esc(trainPct) +
      '"></label>' +
      '<label>Val %<input type="number" id="sp-val" min="0" max="100" value="' +
      esc(valPct) +
      '"></label>' +
      '<label>Test %<input type="number" id="sp-test" min="0" max="100" value="' +
      esc(testPct) +
      '"></label>' +
      '<label>Seed<input type="number" id="sp-seed" value="' +
      esc(seed) +
      '"></label>' +
      '<button type="button" class="btn" id="sp-run">Run split</button>' +
      "</div>" +
      "</section>"
    );
  }

  function renderFoldCard(name, items) {
    if (!items.length) {
      return (
        '<div class="sp-fold">' +
        "<h3>" +
        esc(name) +
        " · 0 rows</h3>" +
        '<p class="sp-hint">Empty fold (set val % &gt; 0 if you need validation).</p>' +
        "</div>"
      );
    }
    const counts = Lib.foldLabelCounts(items, labelCol);
    let dist = "";
    if (counts.length) {
      dist =
        "<ul class=\"sp-dist\">" +
        counts
          .slice(0, 6)
          .map(function (c) {
            return "<li><code>" + esc(c.label) + "</code>: " + c.count + "</li>";
          })
          .join("") +
        "</ul>";
    }
    return (
      '<div class="sp-fold">' +
      "<h3>" +
      esc(name) +
      " · " +
      items.length +
      " rows</h3>" +
      (dist || '<p class="sp-hint">No label mapped.</p>') +
      "</div>"
    );
  }

  function renderResults() {
    let issueHtml = "";
    leakage.issues.forEach(function (iss) {
      issueHtml +=
        '<li class="sp-issue sp-sev-' +
        esc(iss.severity) +
        '">' +
        esc(iss.message) +
        (iss.samples && iss.samples.length
          ? " <span class=\"sp-samples\">e.g. " +
            iss.samples.map(esc).join(", ") +
            "</span>"
          : "") +
        "</li>";
    });
    const badge =
      leakage.errorCount > 0
        ? '<span class="sp-badge sp-badge-error">' + leakage.errorCount + " leakage error(s)</span>"
        : leakage.warnCount > 0
          ? '<span class="sp-badge sp-badge-warn">' + leakage.warnCount + " warning(s)</span>"
          : '<span class="sp-badge sp-badge-ok">No leakage errors</span>';

    return (
      '<section class="sp-panel">' +
      "<h2>5 · Fold sizes</h2>" +
      '<div class="sp-folds">' +
      renderFoldCard("Train", splitResult.train) +
      renderFoldCard("Validation", splitResult.val) +
      renderFoldCard("Test", splitResult.test) +
      "</div>" +
      '<p class="sp-hint">Method: ' +
      esc(splitResult.method) +
      " · seed " +
      esc(splitResult.seed) +
      " · ratios " +
      Math.round(splitResult.ratios.train * 100) +
      "/" +
      Math.round(splitResult.ratios.val * 100) +
      "/" +
      Math.round(splitResult.ratios.test * 100) +
      "</p>" +
      "</section>" +
      '<section class="sp-panel">' +
      "<h2>6 · Leakage detector</h2>" +
      badge +
      "<ul class=\"sp-issues\">" +
      issueHtml +
      "</ul>" +
      "</section>"
    );
  }

  function renderExport() {
    return (
      '<section class="sp-panel">' +
      "<h2>7 · Export</h2>" +
      "<p>Download a machine-readable split manifest (row indices + entity IDs + leakage report).</p>" +
      '<p class="sp-actions">' +
      '<button type="button" class="btn" id="sp-export-json">Download split-manifest.json</button> ' +
      '<button type="button" class="btn btn-secondary" id="sp-export-md">Download split-manifest.md</button>' +
      "</p>" +
      "</section>"
    );
  }

  function syncFromDom() {
    const m = document.getElementById("sp-method");
    if (m) method = m.value;
    const t = document.getElementById("sp-train");
    if (t) trainPct = Number(t.value);
    const v = document.getElementById("sp-val");
    if (v) valPct = Number(v.value);
    const s = document.getElementById("sp-test");
    if (s) testPct = Number(s.value);
    const sd = document.getElementById("sp-seed");
    if (sd) seed = Number(sd.value);
    const id = document.getElementById("sp-id-col");
    if (id) idCol = id.value;
    const lb = document.getElementById("sp-label-col");
    if (lb) labelCol = lb.value;
    const tm = document.getElementById("sp-time-col");
    if (tm) timeCol = tm.value;
  }

  function bindEvents() {
    root.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    const up = document.getElementById("sp-upload");
    if (up) up.addEventListener("change", onFileUpload);

    ["sp-id-col", "sp-label-col", "sp-time-col", "sp-method"].forEach(function (id) {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener("change", function () {
        syncFromDom();
        runSplit();
        renderAll();
      });
    });

    const run = document.getElementById("sp-run");
    if (run) {
      run.addEventListener("click", function () {
        syncFromDom();
        message = { text: "", kind: "" };
        runSplit();
        if (splitResult) {
          showMessage(
            "Split complete: train " +
              splitResult.train.length +
              " / val " +
              splitResult.val.length +
              " / test " +
              splitResult.test.length +
              ".",
            leakage && leakage.errorCount ? "warn" : "ok"
          );
        }
        renderAll();
      });
    }

    const ej = document.getElementById("sp-export-json");
    if (ej) {
      ej.addEventListener("click", function () {
        if (!session || !splitResult) return;
        Lib.downloadManifest(session, splitResult, leakage);
        showMessage("Downloaded split-manifest.json.", "ok");
        renderAll();
      });
    }
    const em = document.getElementById("sp-export-md");
    if (em) {
      em.addEventListener("click", function () {
        if (!session || !splitResult) return;
        Lib.downloadManifestMd(session, splitResult, leakage);
        showMessage("Downloaded split-manifest.md.", "ok");
        renderAll();
      });
    }
  }

  function tryHandoffFromUpstream() {
    const Handoff = window.DatasetToolsHandoff;
    let from = null;
    try {
      from = new URLSearchParams(window.location.search).get("from");
    } catch (err) {
      from = null;
    }
    if ((from !== "scaling" && from !== "cleaning" && from !== "eda") || !Handoff) {
      return false;
    }
    const sourceMap = {
      scaling: "scaling-encoding",
      cleaning: "cleaning",
      eda: "eda-dashboard",
    };
    const payload = Handoff.read(sourceMap[from]);
    if (!payload || !payload.table || !payload.table.rows || !payload.table.columns) {
      return false;
    }
    const table = payload.table;
    session = {
      id: from + "-handoff",
      name: table.name || from + "-handoff",
      title: "From " + from,
      description: "",
      bookAnchors: ["§1.5"],
      teachingFocus: "handoff",
      defaults: {},
      rows: table.rows.map(function (r) {
        return Object.assign({}, r);
      }),
      columns: table.columns.slice(),
      source: table.name || from + "-handoff",
    };
    idCol = labelCol = timeCol = "";
    pickColumnDefaults();
    runSplit();
    Handoff.clear();
    try {
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, "", window.location.pathname);
      }
    } catch (err) {
      /* ignore */
    }
    showMessage(
      "Loaded from " + from + " (" + session.rows.length + " rows).",
      "ok"
    );
    return true;
  }

  if (tryHandoffFromUpstream()) {
    renderAll();
  } else if (window.SplitPresets && window.SplitPresets["churn-holdout"]) {
    loadPreset("churn-holdout");
  } else {
    renderAll();
  }
})();
