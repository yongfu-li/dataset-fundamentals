/* De-identification risk checker UI (classic script, file:// safe). */
(function () {
  "use strict";
  const Lib = window.DeidLib;
  if (!Lib) {
    console.error("DeidLib missing. Check lib/*.js load order.");
    return;
  }

  let session = null;
  let message = { text: "", kind: "" };
  let quasiCols = [];
  let targetK = 5;
  let zipMode = "exact";
  let ageMode = "exact";
  let analysis = null;
  let workingRows = null;

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

  function policy() {
    return { zipMode: zipMode, ageMode: ageMode };
  }

  function recompute() {
    if (!session) {
      analysis = null;
      workingRows = null;
      return;
    }
    if (!session.rows || !session.rows.length) {
      analysis = null;
      workingRows = [];
      showMessage(
        "No rows left after suppression. Loosen k, generalize more, or reload a preset.",
        "warn"
      );
      return;
    }
    try {
      workingRows = Lib.applyGeneralization(session.rows, quasiCols, policy());
      analysis = Lib.analyzeKAnonymity(workingRows, quasiCols, targetK);
      showMessage(Lib.describeRisk(analysis), analysis.passes ? "ok" : "warn");
    } catch (err) {
      analysis = null;
      workingRows = null;
      showMessage(err.message || String(err), "error");
    }
  }

  function tryHandoffFromPii() {
    const Handoff = window.DatasetToolsHandoff;
    if (!Handoff || Handoff.queryFrom() !== "pii") return false;
    const payload = Handoff.consume("pii-scrubber");
    if (!payload || !payload.table || !payload.table.rows || !payload.table.columns) {
      return false;
    }
    const table = payload.table;
    session = {
      id: "pii-handoff",
      title: table.name || "From PII scrubber",
      source: "pii-handoff",
      rows: table.rows.map(function (r) {
        return Object.assign({}, r);
      }),
      columns: table.columns.slice(),
      quasiDefaults: Lib.inferQuasiColumns(table.columns),
    };
    quasiCols = session.quasiDefaults.slice();
    zipMode = "exact";
    ageMode = "exact";
    recompute();
    Handoff.stripQuery();
    showMessage(
      "Loaded from PII scrubber (" + session.rows.length + " rows). Choose quasi-identifiers and re-check k.",
      analysis && analysis.passes ? "ok" : "warn"
    );
    if (analysis) showMessage(Lib.describeRisk(analysis), analysis.passes ? "ok" : "warn");
    return true;
  }

  function loadPreset(id) {
    try {
      session = Lib.loadPreset(id);
      quasiCols = (session.quasiDefaults && session.quasiDefaults.length
        ? session.quasiDefaults
        : Lib.inferQuasiColumns(session.columns)
      ).slice();
      zipMode = "exact";
      ageMode = "exact";
      recompute();
      showMessage("Loaded '" + session.title + "' (" + session.rows.length + " rows).", message.kind || "ok");
      if (analysis) showMessage(Lib.describeRisk(analysis), analysis.passes ? "ok" : "warn");
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
          bookAnchors: ["§3.4"],
          rows: data.rows,
          columns: data.columns,
          source: data.source,
          sensitiveColumn: "",
        };
        quasiCols = Lib.inferQuasiColumns(session.columns);
        zipMode = "exact";
        ageMode = "exact";
        recompute();
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

  const root = document.getElementById("deid-root");
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
      '<section class="deid-intro">' +
      "<h1>De-identification risk checker</h1>" +
      '<p class="lead">Removing names is not enough. Quasi-identifiers—ZIP, age, sex, and similar fields—can still ' +
      "re-identify people when combined. This lab measures <strong>k-anonymity</strong> on your table (Ch.3 §3.4).</p>" +
      '<p class="deid-cross">Pairs with the Consent &amp; PII scrubber: scrub direct identifiers first, then check whether ' +
      "the remaining columns still shrink anonymity sets.</p>" +
      "</section>"
    );
  }

  function renderGuide() {
    return (
      '<details class="deid-panel deid-guide">' +
      "<summary>Learn → apply with your data</summary>" +
      "<ol>" +
      "<li><strong>Learn</strong> — <code>hospital-quasi</code> (fails) → try generalization → <code>coarse-safe</code> (passes).</li>" +
      "<li><strong>Mark QIs</strong> — columns an adversary might already know.</li>" +
      "<li><strong>Set k</strong> — minimum acceptable equivalence-class size (often 5).</li>" +
      "<li><strong>Generalize</strong> — ZIP3 / age bins, or suppress small classes; re-check.</li>" +
      "</ol>" +
      '<p class="deid-hint">k-anonymity is necessary but not sufficient (it does not stop attribute disclosure inside a class). ' +
      "This lab focuses on the re-identification size check.</p>" +
      "</details>"
    );
  }

  function renderLoader() {
    const presets = Lib.listPresets();
    const cards = presets
      .map(function (p) {
        const active = session && session.id === p.id ? " is-active" : "";
        return (
          '<button type="button" class="deid-preset' +
          active +
          '" data-preset="' +
          esc(p.id) +
          '">' +
          "<strong>" +
          esc(p.title) +
          "</strong>" +
          '<span class="deid-meta">' +
          p.n +
          " rows</span>" +
          "<span>" +
          esc(p.description) +
          "</span>" +
          "</button>"
        );
      })
      .join("");
    return (
      '<section class="deid-panel">' +
      "<h2>1 · Load data</h2>" +
      '<div class="deid-presets">' +
      cards +
      "</div>" +
      '<label class="deid-upload">Upload CSV / JSON (max 5,000 rows, 2 MB)' +
      '<input id="deid-upload" type="file" accept=".csv,.json,text/csv,application/json" />' +
      "</label>" +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return '<p class="deid-message deid-' + esc(message.kind || "ok") + '">' + esc(message.text) + "</p>";
  }

  function renderWorkspace() {
    return renderControls() + (analysis ? renderResults() : "") + renderExport();
  }

  function renderControls() {
    const checks = session.columns
      .map(function (c) {
        const on = quasiCols.indexOf(c) !== -1;
        return (
          '<label class="deid-check"><input type="checkbox" data-qi="' +
          esc(c) +
          '"' +
          (on ? " checked" : "") +
          " /> " +
          esc(c) +
          "</label>"
        );
      })
      .join("");
    return (
      '<section class="deid-panel">' +
      "<h2>2 · Quasi-identifiers &amp; k</h2>" +
      '<p class="deid-hint">Select columns an outsider might know from public records or context (not the sensitive outcome).</p>' +
      '<div class="deid-feats">' +
      checks +
      "</div>" +
      '<div class="deid-grid">' +
      '<label>Target k<input id="deid-k" type="number" min="2" max="50" value="' +
      esc(targetK) +
      '" /></label>' +
      '<label>ZIP / postal<select id="deid-zip">' +
      '<option value="exact"' +
      (zipMode === "exact" ? " selected" : "") +
      ">Exact</option>" +
      '<option value="zip3"' +
      (zipMode === "zip3" ? " selected" : "") +
      ">Generalize to ZIP3</option>" +
      '<option value="suppress"' +
      (zipMode === "suppress" ? " selected" : "") +
      ">Suppress (*)</option>" +
      "</select></label>" +
      '<label>Age / birth year<select id="deid-age">' +
      '<option value="exact"' +
      (ageMode === "exact" ? " selected" : "") +
      ">Exact</option>" +
      '<option value="bin5"' +
      (ageMode === "bin5" ? " selected" : "") +
      ">5-year bins</option>" +
      '<option value="bin10"' +
      (ageMode === "bin10" ? " selected" : "") +
      ">10-year bins</option>" +
      '<option value="suppress"' +
      (ageMode === "suppress" ? " selected" : "") +
      ">Suppress (*)</option>" +
      "</select></label>" +
      "</div>" +
      '<button type="button" class="btn" id="deid-run">Re-check k-anonymity</button>' +
      '<button type="button" class="btn btn-secondary" id="deid-suppress">Suppress classes &lt; k</button>' +
      "</section>"
    );
  }

  function renderResults() {
    const badge = analysis.passes
      ? '<span class="deid-badge deid-badge-ok">Passes k=' + analysis.targetK + "</span>"
      : '<span class="deid-badge deid-badge-fail">Fails k=' + analysis.targetK + "</span>";
    const worstRows = (analysis.worst || [])
      .map(function (c) {
        return (
          "<tr><td><code>" +
          esc(c.key) +
          "</code></td><td>" +
          c.size +
          "</td><td>" +
          (c.passes ? "ok" : "at risk") +
          "</td></tr>"
        );
      })
      .join("");
    return (
      '<section class="deid-panel">' +
      "<h2>3 · Risk summary</h2>" +
      "<p>" +
      badge +
      " · rows " +
      analysis.n +
      " · classes " +
      analysis.nClasses +
      " · min class size <strong>" +
      analysis.minK +
      "</strong> · rows in failing classes <strong>" +
      analysis.failingRows +
      "</strong> (" +
      pct(analysis.riskShare) +
      ")</p>" +
      '<p class="deid-teach">' +
      esc(Lib.describeRisk(analysis)) +
      "</p>" +
      '<div class="deid-chart-wrap" data-figure="Equivalence class sizes">' +
      '<canvas id="deid-hist" width="560" height="260"></canvas>' +
      "</div>" +
      "<h3>Smallest / failing classes</h3>" +
      '<table class="deid-table"><thead><tr><th>Equivalence key</th><th>Size</th><th>Status</th></tr></thead><tbody>' +
      (worstRows || "<tr><td colspan='3'>All classes meet k.</td></tr>") +
      "</tbody></table>" +
      "</section>"
    );
  }

  function renderExport() {
    if (!analysis) return "";
    return (
      '<section class="deid-panel">' +
      "<h2>4 · Export</h2>" +
      '<div class="deck-links">' +
      '<button type="button" class="btn" id="deid-export-json">Download deid-risk-report.json</button>' +
      '<button type="button" class="btn btn-secondary" id="deid-export-md">Download deid-risk-report.md</button>' +
      '<button type="button" class="btn btn-secondary" id="deid-export-csv">Download generalized table CSV</button>' +
      '<button type="button" class="btn btn-secondary" id="deid-send-cleaning">Send to cleaning →</button>' +
      '<a class="btn btn-ghost" href="../pii-scrubber/index.html">← Consent &amp; PII scrubber</a>' +
      "</div>" +
      "</section>"
    );
  }

  function drawCharts() {
    const canvas = document.getElementById("deid-hist");
    if (canvas && analysis) {
      Lib.drawSizeHistogram(canvas, analysis, { title: "How many classes have each size?" });
    }
  }

  function syncFromForm() {
    const kEl = document.getElementById("deid-k");
    if (kEl) targetK = Math.max(2, Number(kEl.value) || 5);
    const zEl = document.getElementById("deid-zip");
    if (zEl) zipMode = zEl.value;
    const aEl = document.getElementById("deid-age");
    if (aEl) ageMode = aEl.value;
    const feats = [];
    root.querySelectorAll("[data-qi]").forEach(function (box) {
      if (box.checked) feats.push(box.getAttribute("data-qi"));
    });
    quasiCols = feats;
  }

  function bindEvents() {
    root.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    const upload = document.getElementById("deid-upload");
    if (upload) upload.addEventListener("change", onFileUpload);

    root.querySelectorAll("[data-qi]").forEach(function (box) {
      box.addEventListener("change", function () {
        syncFromForm();
        recompute();
        renderAll();
      });
    });
    ["deid-k", "deid-zip", "deid-age"].forEach(function (id) {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("change", function () {
          syncFromForm();
          recompute();
          renderAll();
        });
      }
    });
    const runBtn = document.getElementById("deid-run");
    if (runBtn) {
      runBtn.addEventListener("click", function () {
        syncFromForm();
        recompute();
        renderAll();
      });
    }
    const supBtn = document.getElementById("deid-suppress");
    if (supBtn) {
      supBtn.addEventListener("click", function () {
        syncFromForm();
        if (!session) return;
        try {
          const generalized = Lib.applyGeneralization(session.rows, quasiCols, policy());
          const result = Lib.suppressSmallClasses(generalized, quasiCols, targetK);
          session = Object.assign({}, session, {
            rows: result.kept,
            id: session.id + "-suppressed",
            title: (session.title || "Data") + " (classes < k removed)",
            source: (session.source || "session") + "+suppress",
          });
          session.columns = Lib.collectColumns(session.rows);
          recompute();
          showMessage(
            "Removed " + result.removedCount + " rows in classes smaller than k=" + targetK + ".",
            "ok"
          );
        } catch (err) {
          showMessage(err.message || String(err), "error");
        }
        renderAll();
      });
    }
    const exJ = document.getElementById("deid-export-json");
    if (exJ) {
      exJ.addEventListener("click", function () {
        Lib.downloadReportJson(Lib.buildReport(session, analysis, policy(), quasiCols));
      });
    }
    const exM = document.getElementById("deid-export-md");
    if (exM) {
      exM.addEventListener("click", function () {
        Lib.downloadReportMd(Lib.buildReport(session, analysis, policy(), quasiCols));
      });
    }
    const exC = document.getElementById("deid-export-csv");
    if (exC) {
      exC.addEventListener("click", function () {
        if (!workingRows) return;
        Lib.downloadTableCsv(workingRows, session.columns, "deid-generalized.csv");
      });
    }
    const sendCleaning = document.getElementById("deid-send-cleaning");
    if (sendCleaning) {
      sendCleaning.addEventListener("click", function () {
        if (!session || !workingRows || !window.DatasetToolsHandoff) {
          showMessage(
            !window.DatasetToolsHandoff ? "Handoff helper missing." : "Run analysis first.",
            !window.DatasetToolsHandoff ? "error" : "warn"
          );
          renderAll();
          return;
        }
        try {
          const cols = Lib.collectColumns(workingRows);
          window.DatasetToolsHandoff.writeTable(
            "deid-risk",
            {
              name: (session.title || "deid") + "-generalized",
              columns: cols,
              rows: workingRows,
            },
            {
              from: "deid",
              quasiCols: quasiCols.slice(),
              targetK: targetK,
              passes: analysis ? analysis.passes : null,
            }
          );
          window.location.href = "../cleaning/index.html?from=deid";
        } catch (err) {
          showMessage(err.message || String(err), "error");
          renderAll();
        }
      });
    }
  }

  if (window.DatasetToolsReport) {
    window.DatasetToolsReport.registerRedraw(function () {
      drawCharts();
    });
  }

  if (!tryHandoffFromPii()) {
    if (window.DeidPresets && window.DeidPresets["hospital-quasi"]) {
      loadPreset("hospital-quasi");
    } else {
      renderAll();
    }
  } else {
    renderAll();
  }
})();
