/* Scaling / encoding lab (classic script, file:// safe). */
(function () {
  "use strict";
  const Lib = window.ScaleLib;
  if (!Lib) {
    console.error("ScaleLib missing. Check lib/*.js load order.");
    return;
  }

  let session = null;
  let message = { text: "", kind: "" };
  let xCol = "";
  let yCol = "";
  let catCol = "";
  let targetCol = "";
  let scaleMethod = "none";
  let encodeMethod = "none";
  let labelOrder = null;
  let histFocus = "y"; // which column's histogram: x or y
  let result = null;

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
    xCol = defs.xCol || xCol;
    yCol = defs.yCol || yCol;
    catCol = defs.catCol || catCol;
    scaleMethod = defs.scaleMethod || scaleMethod;
    encodeMethod = defs.encodeMethod || encodeMethod;
    labelOrder = defs.labelOrder || null;
    targetCol = defs.targetCol || targetCol;
  }

  function pickColumnDefaults() {
    if (!session) return;
    const nums = Lib.inferNumericColumns(session.rows, session.columns);
    const cats = Lib.inferCategoricalColumns(session.rows, session.columns, nums);
    if (!xCol || session.columns.indexOf(xCol) === -1) xCol = nums[0] || session.columns[0] || "";
    if (!yCol || session.columns.indexOf(yCol) === -1) {
      yCol = nums.find(function (c) {
        return c !== xCol;
      }) || nums[1] || nums[0] || "";
    }
    if (!catCol || session.columns.indexOf(catCol) === -1) catCol = cats[0] || "";
    if (!targetCol || session.columns.indexOf(targetCol) === -1) {
      targetCol =
        nums.find(function (c) {
          return c !== xCol && c !== yCol;
        }) || yCol || "";
    }
  }

  function runPipeline() {
    if (!session) {
      result = null;
      return;
    }
    try {
      result = Lib.runPipeline(session.rows, session.columns, {
        scaleMethod: scaleMethod,
        encodeMethod: encodeMethod,
        xCol: xCol,
        yCol: yCol,
        catCol: catCol,
        labelOrder: labelOrder,
        targetCol: targetCol,
      });
    } catch (err) {
      result = null;
      showMessage(err.message || String(err), "error");
    }
  }

  function loadPreset(id) {
    try {
      session = Lib.loadPreset(id);
      scaleMethod = "none";
      encodeMethod = "none";
      labelOrder = null;
      applyDefaults(session.defaults);
      pickColumnDefaults();
      message = { text: "", kind: "" };
      runPipeline();
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
          bookAnchors: ["§5.4"],
          teachingFocus: "user-upload",
          defaults: {},
          rows: data.rows,
          columns: data.columns,
          source: data.source,
        };
        xCol = yCol = catCol = targetCol = "";
        labelOrder = null;
        scaleMethod = "none";
        encodeMethod = "none";
        pickColumnDefaults();
        runPipeline();
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

  function tryHandoffFromCleaning() {
    const Handoff = window.DatasetToolsHandoff;
    let from = null;
    try {
      from = new URLSearchParams(window.location.search).get("from");
    } catch (err) {
      from = null;
    }
    if ((from !== "cleaning" && from !== "eda") || !Handoff) return false;
    const source = from === "cleaning" ? "cleaning" : "eda-dashboard";
    const payload = Handoff.read(source);
    if (!payload || !payload.table || !payload.table.rows || !payload.table.columns) {
      return false;
    }
    const table = payload.table;
    session = {
      id: from + "-handoff",
      name: table.name || from + "-handoff",
      title: "From " + (from === "cleaning" ? "cleaning workbench" : "EDA dashboard"),
      description: "",
      bookAnchors: ["§5.4"],
      teachingFocus: "handoff",
      defaults: {},
      rows: table.rows.map(function (r) {
        return Object.assign({}, r);
      }),
      columns: table.columns.slice(),
      source: table.name || from + "-handoff",
    };
    xCol = yCol = catCol = targetCol = "";
    labelOrder = null;
    scaleMethod = "none";
    encodeMethod = "none";
    pickColumnDefaults();
    runPipeline();
    Handoff.clear();
    try {
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, "", window.location.pathname);
      }
    } catch (err) {
      /* ignore */
    }
    showMessage(
      "Loaded from " +
        (from === "cleaning" ? "cleaning" : "EDA") +
        " (" +
        session.rows.length +
        " rows).",
      "ok"
    );
    return true;
  }

  const root = document.getElementById("scale-root");
  if (!root) return;

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderGuide() +
      renderLoader() +
      renderMessage() +
      (session ? renderWorkspace() : "");
    bindEvents();
    if (session && result) drawCharts();
  }

  function renderIntro() {
    return (
      '<section class="sc-intro">' +
      "<h1>Scaling / encoding lab</h1>" +
      '<p class="lead">Preprocessing changes the <strong>geometry</strong> of features (Ch.5 §5.4). ' +
      "Toggle min–max, z-score, or log; one-hot or label-encode categories; watch histograms and a 2D scatter shift.</p>" +
      '<p class="sc-cross">Upstream: <a href="../cleaning/index.html">cleaning workbench</a>. ' +
      'Downstream: <a href="../train-test-split/index.html">train/test splitter</a> ' +
      "(fit scalers on train only in real pipelines).</p>" +
      "</section>"
    );
  }

  function renderGuide() {
    return (
      '<details class="sc-panel sc-guide">' +
      "<summary>Learn → apply with your data</summary>" +
      "<ol>" +
      "<li><strong>Learn</strong> — <code>knn-age-income</code> (raw → z-score) → " +
      "<code>product-colors</code> (one-hot) → <code>apparel-size</code> (label) → " +
      "<code>skewed-spend</code> (log1p).</li>" +
      "<li><strong>Compare</strong> — leave scale on <em>none</em>, then switch methods; watch scatter axes.</li>" +
      "<li><strong>Encode</strong> — one-hot for nominal; label only when order is real; try target and read the leak warning.</li>" +
      "<li><strong>Apply</strong> — upload CSV/JSON (≤ 5,000 rows, 2 MB); export transformed CSV + report.</li>" +
      "</ol>" +
      '<p class="sc-hint">Income-dominated distance without scaling is the eg:5.46 motif. ' +
      "Target encoding on the full table leaks labels — fit after split.</p>" +
      "</details>"
    );
  }

  function renderLoader() {
    const presets = Lib.listPresets();
    let cards = "";
    presets.forEach(function (p) {
      const active = session && session.name === p.name ? " sc-preset-active" : "";
      cards +=
        '<button type="button" class="sc-preset' +
        active +
        '" data-preset="' +
        esc(p.id) +
        '">' +
        "<strong>" +
        esc(p.title) +
        "</strong>" +
        "<span>" +
        esc(p.description) +
        "</span></button>";
    });
    return (
      '<section class="sc-panel">' +
      "<h2>1 · Load data</h2>" +
      '<div class="sc-presets">' +
      cards +
      "</div>" +
      '<label class="sc-upload">Upload CSV or JSON' +
      '<input type="file" id="sc-upload" accept=".csv,.json,text/csv,application/json">' +
      "</label>" +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return (
      '<div class="sc-message sc-' +
      esc(message.kind || "ok") +
      '" role="status">' +
      esc(message.text) +
      "</div>"
    );
  }

  function optionList(cols, selected) {
    return cols
      .map(function (c) {
        return (
          '<option value="' +
          esc(c) +
          '"' +
          (c === selected ? " selected" : "") +
          ">" +
          esc(c) +
          "</option>"
        );
      })
      .join("");
  }

  function renderWorkspace() {
    const nums = Lib.inferNumericColumns(session.rows, session.columns);
    const cats = Lib.inferCategoricalColumns(session.rows, session.columns, nums);
    const warnings = (result && result.warnings) || [];
    let warnHtml = "";
    if (warnings.length) {
      warnHtml =
        '<ul class="sc-warnings">' +
        warnings
          .map(function (w) {
            return "<li>" + esc(w) + "</li>";
          })
          .join("") +
        "</ul>";
    }

    return (
      '<section class="sc-panel">' +
      "<h2>2 · Choose transforms</h2>" +
      '<div class="sc-controls">' +
      '<label>X (scatter)<select id="sc-x">' +
      optionList(nums.length ? nums : session.columns, xCol) +
      "</select></label>" +
      '<label>Y (scatter)<select id="sc-y">' +
      optionList(nums.length ? nums : session.columns, yCol) +
      "</select></label>" +
      '<label>Categorical<select id="sc-cat">' +
      '<option value="">— none —</option>' +
      optionList(cats.length ? cats : session.columns, catCol) +
      "</select></label>" +
      '<label>Scale (X &amp; Y)<select id="sc-scale">' +
      opt("none", "None (raw)", scaleMethod) +
      opt("minmax", "Min–max [0,1]", scaleMethod) +
      opt("zscore", "Z-score (standardize)", scaleMethod) +
      opt("log1p", "log(1 + x)", scaleMethod) +
      "</select></label>" +
      '<label>Encode<select id="sc-encode">' +
      opt("none", "None", encodeMethod) +
      opt("onehot", "One-hot", encodeMethod) +
      opt("label", "Label (integer)", encodeMethod) +
      opt("target", "Target (mean) — leak demo", encodeMethod) +
      "</select></label>" +
      (encodeMethod === "target"
        ? '<label>Target column<select id="sc-target">' +
          optionList(nums.length ? nums : session.columns, targetCol) +
          "</select></label>"
        : "") +
      '<label>Histogram focus<select id="sc-hist-focus">' +
      opt("x", "X column", histFocus) +
      opt("y", "Y column", histFocus) +
      "</select></label>" +
      "</div>" +
      warnHtml +
      teachingNote() +
      "</section>" +
      '<section class="sc-panel">' +
      "<h2>3 · See geometry change</h2>" +
      '<div class="sc-charts">' +
      '<div><h3>Before (raw)</h3><canvas id="sc-hist-before" width="360" height="200"></canvas></div>' +
      '<div><h3>After (scaled)</h3><canvas id="sc-hist-after" width="360" height="200"></canvas></div>' +
      '<div><h3>Scatter — raw</h3><canvas id="sc-scatter-raw" width="360" height="240"></canvas></div>' +
      '<div><h3>Scatter — transformed</h3><canvas id="sc-scatter-tx" width="360" height="240"></canvas></div>' +
      "</div>" +
      renderStats() +
      "</section>" +
      renderPreview() +
      renderExport()
    );
  }

  function opt(value, label, selected) {
    return (
      '<option value="' +
      value +
      '"' +
      (value === selected ? " selected" : "") +
      ">" +
      label +
      "</option>"
    );
  }

  function teachingNote() {
    const focus = session.teachingFocus || "";
    let text = "";
    if (scaleMethod === "none" && (focus === "scale-geometry" || yCol === "income")) {
      text =
        "Raw age and income live on different scales — nearest-neighbor distance is dominated by income until you standardize or min–max (eg:5.46).";
    } else if (scaleMethod === "zscore" || scaleMethod === "minmax") {
      text =
        "After scaling, axes are comparable. Distance-based models (KNN, k-means) treat features more fairly; trees often need less scaling.";
    } else if (scaleMethod === "log1p") {
      text = "log1p compresses a long right tail so a few huge spends no longer stretch the axis.";
    } else if (encodeMethod === "onehot") {
      text =
        "One-hot creates a binary column per category — no implied order. Prefer this for nominal fields like color (eg:5.47).";
    } else if (encodeMethod === "label") {
      text =
        "Label encoding assigns integers. Safe for true ordinals (Small&lt;Medium&lt;Large). Misleading for unordered labels.";
    } else if (encodeMethod === "target") {
      text =
        "Target encoding replaces a category with the mean outcome — powerful but leak-prone if fit on the full dataset before splitting.";
    }
    if (!text) return "";
    return '<p class="sc-teach" role="note">' + text + "</p>";
  }

  function renderStats() {
    if (!result) return "";
    const parts = [];
    Object.keys(result.fits || {}).forEach(function (col) {
      const f = result.fits[col];
      const s = f.stats || {};
      parts.push(
        "<li><strong>" +
          esc(col) +
          "</strong> · " +
          esc(f.method) +
          " · n=" +
          s.n +
          " · raw min/max " +
          Lib.formatNum(s.min) +
          " / " +
          Lib.formatNum(s.max) +
          (f.method === "zscore"
            ? " · μ=" + Lib.formatNum(f.params.mean) + " σ=" + Lib.formatNum(f.params.std)
            : "") +
          (f.method === "minmax"
            ? " → [0,1]"
            : "") +
          "</li>"
      );
    });
    if (result.encode && result.encode.method !== "none") {
      parts.push(
        "<li><strong>Encode " +
          esc(result.config.catCol) +
          "</strong> · " +
          esc(result.encode.method) +
          " · " +
          esc(JSON.stringify(result.encode.mapping)) +
          "</li>"
      );
    }
    if (!parts.length) return "";
    return '<ul class="sc-stats">' + parts.join("") + "</ul>";
  }

  function renderPreview() {
    if (!result) return "";
    const cols = result.columns.slice(0, 10);
    const rows = result.rows.slice(0, 8);
    let head = cols
      .map(function (c) {
        return "<th>" + esc(c) + "</th>";
      })
      .join("");
    let body = rows
      .map(function (r) {
        return (
          "<tr>" +
          cols
            .map(function (c) {
              const v = r[c];
              const show =
                typeof v === "number" && isFinite(v) ? Lib.formatNum(v) : v == null ? "∅" : String(v);
              return "<td>" + esc(show) + "</td>";
            })
            .join("") +
          "</tr>"
        );
      })
      .join("");
    return (
      '<section class="sc-panel">' +
      "<h2>4 · Transformed preview</h2>" +
      '<div class="sc-table-wrap"><table class="sc-table"><thead><tr>' +
      head +
      "</tr></thead><tbody>" +
      body +
      "</tbody></table></div>" +
      '<p class="sc-hint">Showing first ' +
      rows.length +
      " rows × up to 10 columns (" +
      result.rows.length +
      " × " +
      result.columns.length +
      " total).</p>" +
      "</section>"
    );
  }

  function renderExport() {
    return (
      '<section class="sc-panel">' +
      "<h2>5 · Export</h2>" +
      '<div class="sc-op-row">' +
      '<button type="button" class="btn" id="sc-export-csv">Download transformed CSV</button>' +
      '<button type="button" class="btn btn-secondary" id="sc-export-json">Download transform-report.json</button>' +
      '<button type="button" class="btn btn-secondary" id="sc-export-md">Download transform-report.md</button>' +
      '<button type="button" class="btn btn-secondary" id="sc-send-split">Send to train/test splitter</button>' +
      "</div>" +
      '<p class="sc-hint">Report includes fit parameters (min/max, μ/σ) so you can document the transform. ' +
      "In production, fit on train only — then transform val/test.</p>" +
      "</section>"
    );
  }

  function drawCharts() {
    const focusCol = histFocus === "x" ? xCol : yCol;
    const rawVals = Lib.columnValues(session.rows, focusCol);
    const afterVals =
      result && result.fits[focusCol]
        ? rawVals.map(function (v) {
            return Lib.applyScaleValue(v, result.fits[focusCol]);
          })
        : rawVals;
    const histBefore = document.getElementById("sc-hist-before");
    const histAfter = document.getElementById("sc-hist-after");
    const scatterRaw = document.getElementById("sc-scatter-raw");
    const scatterTx = document.getElementById("sc-scatter-tx");
    if (histBefore) {
      Lib.drawHistogram(histBefore, rawVals, {
        title: focusCol + " (raw)",
        color: "#0f6b5c",
      });
    }
    if (histAfter) {
      Lib.drawHistogram(histAfter, afterVals, {
        title: focusCol + " (" + scaleMethod + ")",
        color: "#b45309",
      });
    }
    const rawPts = session.rows.map(function (r) {
      return { x: Lib.toNumber(r[xCol]), y: Lib.toNumber(r[yCol]) };
    });
    if (scatterRaw) {
      Lib.drawScatter(scatterRaw, rawPts, {
        title: xCol + " vs " + yCol,
        xLabel: xCol,
        yLabel: yCol,
        color: "#0f6b5c",
      });
    }
    // Transformed scatter: use scaled x/y from pipeline before one-hot removes them
    let txPts = [];
    if (result && result.fits) {
      txPts = session.rows.map(function (r) {
        const xv = Lib.toNumber(r[xCol]);
        const yv = Lib.toNumber(r[yCol]);
        return {
          x: result.fits[xCol] ? Lib.applyScaleValue(xv, result.fits[xCol]) : xv,
          y: result.fits[yCol] ? Lib.applyScaleValue(yv, result.fits[yCol]) : yv,
        };
      });
    }
    if (scatterTx) {
      Lib.drawScatter(scatterTx, txPts, {
        title: "After " + scaleMethod,
        xLabel: xCol,
        yLabel: yCol,
        color: "#b45309",
      });
    }
  }

  function bindEvents() {
    root.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    const upload = document.getElementById("sc-upload");
    if (upload) upload.addEventListener("change", onFileUpload);

    function refreshFromControls() {
      const gx = document.getElementById("sc-x");
      const gy = document.getElementById("sc-y");
      const gc = document.getElementById("sc-cat");
      const gs = document.getElementById("sc-scale");
      const ge = document.getElementById("sc-encode");
      const gt = document.getElementById("sc-target");
      const gh = document.getElementById("sc-hist-focus");
      if (gx) xCol = gx.value;
      if (gy) yCol = gy.value;
      if (gc) catCol = gc.value;
      if (gs) scaleMethod = gs.value;
      if (ge) encodeMethod = ge.value;
      if (gt) targetCol = gt.value;
      if (gh) histFocus = gh.value;
      // Keep preset ordinal order only for apparel-size label default
      if (encodeMethod !== "label" || (session && session.id !== "apparel-size")) {
        if (!(session && session.defaults && session.defaults.labelOrder && encodeMethod === "label")) {
          /* keep labelOrder from preset when apparel */
        }
      }
      if (session && session.defaults && session.defaults.labelOrder && encodeMethod === "label") {
        labelOrder = session.defaults.labelOrder;
      } else if (encodeMethod !== "label") {
        labelOrder = null;
      }
      runPipeline();
      renderAll();
    }

    ["sc-x", "sc-y", "sc-cat", "sc-scale", "sc-encode", "sc-target", "sc-hist-focus"].forEach(
      function (id) {
        const el = document.getElementById(id);
        if (el) el.addEventListener("change", refreshFromControls);
      }
    );

    const exportCsv = document.getElementById("sc-export-csv");
    if (exportCsv) {
      exportCsv.addEventListener("click", function () {
        if (!result) return;
        Lib.download(
          "transformed.csv",
          Lib.rowsToCsv(result.rows, result.columns),
          "text/csv"
        );
      });
    }
    const exportJson = document.getElementById("sc-export-json");
    if (exportJson) {
      exportJson.addEventListener("click", function () {
        if (!result || !session) return;
        const report = Lib.buildReport(session, result);
        Lib.download(
          "transform-report.json",
          JSON.stringify(report, null, 2),
          "application/json"
        );
      });
    }
    const exportMd = document.getElementById("sc-export-md");
    if (exportMd) {
      exportMd.addEventListener("click", function () {
        if (!result || !session) return;
        const report = Lib.buildReport(session, result);
        Lib.download("transform-report.md", Lib.buildReportMd(report), "text/markdown");
      });
    }
    const sendSplit = document.getElementById("sc-send-split");
    if (sendSplit) {
      sendSplit.addEventListener("click", function () {
        if (!result || !window.DatasetToolsHandoff) {
          showMessage("Handoff helper missing.", "error");
          renderAll();
          return;
        }
        try {
          window.DatasetToolsHandoff.write({
            source: "scaling-encoding",
            table: {
              name: (session && session.name) || "scaled",
              columns: result.columns,
              rows: result.rows,
            },
            hints: { from: "scaling-encoding" },
          });
          window.location.href = "../train-test-split/index.html?from=scaling";
        } catch (err) {
          showMessage(err.message || String(err), "error");
          renderAll();
        }
      });
    }
  }

  if (!tryHandoffFromCleaning()) {
    /* start empty */
  }
  if (window.DatasetToolsReport) {
    window.DatasetToolsReport.registerRedraw(function () {
      if (session && result) drawCharts();
    });
  }
  renderAll();
})();
