/* Storage & format chooser — seamless scenario → stack (classic script). */
(function () {
  "use strict";
  const Lib = window.StorageFormatLib;
  if (!Lib) {
    console.error("StorageFormatLib missing. Check lib/core.js.");
    return;
  }

  const root = document.getElementById("storage-format-root");
  if (!root) return;

  let scenario = null;
  let pickId = null;
  let lastEval = null;
  let scanOpts = { rows: 1e7, cols: 80, selectCols: 3, rowBytes: 32 };
  let message = { text: "", kind: "" };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function loadScenario(id) {
    scenario = Lib.getScenario(id);
    if (!scenario) return;
    pickId = null;
    lastEval = null;
    if (scenario.scanDefaults) {
      scanOpts = Object.assign({}, scenario.scanDefaults);
    }
    showMessage("Loaded “" + scenario.title + "”. Pick the stack that fits.", "ok");
    renderAll();
  }

  function onPick(stackId) {
    if (!scenario) return;
    pickId = stackId;
    lastEval = Lib.evaluatePick(scenario, stackId);
    showMessage(
      lastEval.correct ? "Strong fit for this workload." : "Not the best fit — read the tip below.",
      lastEval.correct ? "ok" : "warn"
    );
    renderAll();
  }

  function downloadJson() {
    if (!scenario) return;
    const scan = scenario.showScan ? Lib.simulateScan(scanOpts) : null;
    const payload = Lib.exportPayload(scenario, lastEval, scan);
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "storage-format-recommendation.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 500);
  }

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderGuide() +
      renderMessage() +
      renderPicker() +
      (scenario ? renderWorkspace() : "");
    bindEvents();
  }

  function renderIntro() {
    return (
      '<section class="sf-intro">' +
      "<h1>Storage &amp; format chooser</h1>" +
      '<p class="lead">Match a workload to one recommended stack — object vs block <em>and</em> Avro / Parquet / ORC — in a single step ' +
      "(Ch.12 §12.2.3–12.2.4, <code>eg:12.3–12.6</code>, Fig. 12.1).</p>" +
      '<p class="sf-cross">Teaching model only: the scan meter compares toy bytes-read, not a real Spark/Hive benchmark.</p>' +
      "</section>"
    );
  }

  function renderGuide() {
    return (
      '<details class="sf-panel sf-guide">' +
      "<summary>Learn → apply</summary>" +
      "<ol>" +
      "<li><strong>Pick a workload</strong> — warehouse scan, Hive, Kafka ingest, media archive, OLTP, or cold lake.</li>" +
      "<li><strong>Choose one stack</strong> — storage and file format arrive together (no two-step wizard).</li>" +
      "<li><strong>Read the feedback</strong> — why that bundle fits (or does not).</li>" +
      "<li><strong>Optional scan demo</strong> — same projection under row vs columnar layout.</li>" +
      "</ol>" +
      "</details>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return '<div class="sf-message sf-' + message.kind + '">' + esc(message.text) + "</div>";
  }

  function renderPicker() {
    const cards = Lib.SCENARIOS.map(function (s) {
      const active = scenario && scenario.id === s.id ? " is-active" : "";
      return (
        '<button type="button" class="sf-preset' +
        active +
        '" data-scenario="' +
        esc(s.id) +
        '">' +
        "<strong>" +
        esc(s.title) +
        "</strong>" +
        "<span>" +
        esc(s.summary) +
        "</span>" +
        "</button>"
      );
    }).join("");
    return (
      '<section class="sf-panel">' +
      "<h2>1 · Choose a workload</h2>" +
      '<div class="sf-presets">' +
      cards +
      "</div>" +
      "</section>"
    );
  }

  function renderWorkspace() {
    return (
      renderContext() +
      renderChoices() +
      (lastEval ? renderOutcome() : "") +
      (scenario.showScan ? renderScan() : "") +
      renderExport()
    );
  }

  function renderContext() {
    return (
      '<section class="sf-panel">' +
      "<h2>2 · Workload</h2>" +
      "<p>" +
      esc(scenario.detail) +
      "</p>" +
      '<p class="sf-hint">Pick the single stack below that best fits — storage model and format are already bundled.</p>' +
      "</section>"
    );
  }

  function renderChoices() {
    const ids = Lib.choiceIds(scenario);
    const cards = ids
      .map(function (id) {
        const st = Lib.getStack(id);
        if (!st) return "";
        let cls = "sf-stack";
        if (pickId === id) cls += " is-picked";
        if (lastEval && pickId === id) cls += lastEval.correct ? " is-good" : " is-bad";
        return (
          '<button type="button" class="' +
          cls +
          '" data-stack="' +
          esc(id) +
          '">' +
          "<strong>" +
          esc(st.label) +
          "</strong>" +
          "<span>" +
          esc(st.summary) +
          "</span>" +
          '<span class="sf-meta">' +
          esc(st.book) +
          "</span>" +
          "</button>"
        );
      })
      .join("");
    return (
      '<section class="sf-panel">' +
      "<h2>3 · Pick a stack</h2>" +
      '<div class="sf-stacks">' +
      cards +
      "</div>" +
      "</section>"
    );
  }

  function renderOutcome() {
    const e = lastEval;
    const banner = e.correct ? "sf-callout-ok" : "sf-callout-warn";
    const title = e.correct ? "Recommended stack" : "Better choice available";
    return (
      '<section class="sf-panel">' +
      "<h2>4 · Feedback</h2>" +
      '<div class="sf-callout ' +
      banner +
      '">' +
      "<strong>" +
      title +
      ":</strong> " +
      esc(e.recommended.label) +
      "<br>" +
      esc(e.tip) +
      "</div>" +
      "<p>" +
      esc(e.rationale) +
      "</p>" +
      '<p class="sf-hint">Book anchors: ' +
      esc(e.recommended.book) +
      "</p>" +
      "</section>"
    );
  }

  function renderScan() {
    const sim = Lib.simulateScan(scanOpts);
    const maxBytes = Math.max.apply(
      null,
      sim.formats.map(function (f) {
        return f.bytes;
      })
    );
    const bars = sim.formats
      .map(function (f) {
        const pct = maxBytes ? Math.round((f.bytes / maxBytes) * 100) : 0;
        return (
          '<div class="sf-bar-row">' +
          "<div class=\"sf-bar-label\">" +
          esc(f.label) +
          "</div>" +
          '<div class="sf-bar-track"><div class="sf-bar-fill sf-layout-' +
          esc(f.layout) +
          '" style="width:' +
          pct +
          '%"></div></div>' +
          '<div class="sf-bar-val">' +
          esc(Lib.formatBytes(f.bytes)) +
          " · ×" +
          f.relativeLatency.toFixed(2) +
          "</div>" +
          "</div>"
        );
      })
      .join("");
    return (
      '<section class="sf-panel">' +
      "<h2>5 · Same query, different layout</h2>" +
      '<p class="sf-hint">Toy I/O model for a projection of ' +
      sim.selectCols +
      " / " +
      sim.cols +
      " columns. Lower bars ≈ less data touched.</p>" +
      '<div class="sf-scan-controls">' +
      '<label>Rows<input type="number" id="sf-rows" min="1000" step="1000" value="' +
      esc(String(scanOpts.rows)) +
      '"></label>' +
      '<label>Columns<input type="number" id="sf-cols" min="1" max="500" value="' +
      esc(String(scanOpts.cols)) +
      '"></label>' +
      '<label>Selected columns<input type="number" id="sf-sel" min="1" max="500" value="' +
      esc(String(scanOpts.selectCols)) +
      '"></label>' +
      '<button type="button" id="sf-resim" class="sf-primary">Update bars</button>' +
      "</div>" +
      '<div class="sf-bars">' +
      bars +
      "</div>" +
      '<p class="sf-hint">' +
      esc(sim.note) +
      "</p>" +
      "</section>"
    );
  }

  function renderExport() {
    const step = scenario.showScan ? "6" : "5";
    return (
      '<section class="sf-panel">' +
      "<h2>" +
      step +
      " · Export</h2>" +
      '<p class="sf-hint">Download <code>storage-format-recommendation.json</code> with scenario, pick, and optional scan numbers.</p>' +
      '<button type="button" id="sf-export" class="sf-primary">Download recommendation JSON</button>' +
      "</section>"
    );
  }

  function bindEvents() {
    root.querySelectorAll("[data-scenario]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadScenario(btn.getAttribute("data-scenario"));
      });
    });
    root.querySelectorAll("[data-stack]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        onPick(btn.getAttribute("data-stack"));
      });
    });
    const resim = document.getElementById("sf-resim");
    if (resim) {
      resim.addEventListener("click", function () {
        const rows = Number(document.getElementById("sf-rows").value);
        const cols = Number(document.getElementById("sf-cols").value);
        let sel = Number(document.getElementById("sf-sel").value);
        if (sel > cols) sel = cols;
        scanOpts = Object.assign({}, scanOpts, { rows: rows, cols: cols, selectCols: sel });
        renderAll();
      });
    }
    const exp = document.getElementById("sf-export");
    if (exp) exp.addEventListener("click", downloadJson);
  }

  loadScenario("warehouse-scan");
})();
