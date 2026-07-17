/* IAA calculator — main UI (classic script, file:// safe).
 * Two-rater Cohen's κ (+ optional Fleiss), contingency table, disagreement list.
 * Book anchors: §4.5.2, Table 4.4, eg:4.31. */
(function () {
  "use strict";
  const Lib = window.IaaLib;
  if (!Lib) {
    console.error("IaaLib not found. Check that lib/*.js loaded before iaa.js.");
    return;
  }

  let dataset = null;
  let mapping = { id: null, text: null, raterA: null, raterB: null, raterC: null };
  let message = { text: "", kind: "" };
  let lastReport = null;
  let showOnlyDisagreements = false;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function mappingReady() {
    return mapping.raterA && mapping.raterB;
  }

  function recompute() {
    if (!dataset || !mappingReady()) {
      lastReport = null;
      return;
    }
    lastReport = Lib.computeReport(dataset.rows, mapping);
  }

  function loadPreset(id) {
    try {
      const data = Lib.loadPreset(id);
      dataset = data;
      mapping = Lib.suggestMapping(data.columns, data.defaultMapping || {});
      recompute();
      showMessage(
        "Loaded '" +
          data.source +
          "' (" +
          data.rows.length +
          " rows). Read κ, then inspect disagreements.",
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

  function val(id) {
    const el = document.getElementById(id);
    return el ? el.value : "";
  }

  function onApplyMapping() {
    mapping = {
      id: val("iaa-map-id") || null,
      text: val("iaa-map-text") || null,
      raterA: val("iaa-map-a") || null,
      raterB: val("iaa-map-b") || null,
      raterC: val("iaa-map-c") || null,
    };
    if (!mappingReady()) {
      showMessage("Map rater A and rater B columns to continue.", "warn");
      lastReport = null;
      renderAll();
      return;
    }
    recompute();
    showMessage("Mapping applied. Agreement metrics updated.", "ok");
    renderAll();
  }

  function onFlipLabel(itemId, which, newLabel) {
    if (!dataset || !mappingReady()) return;
    const idCol = mapping.id;
    const col = which === "a" ? mapping.raterA : mapping.raterB;
    dataset.rows.forEach(function (row, i) {
      const rid = idCol && row[idCol] != null ? String(row[idCol]) : String(i + 1);
      if (rid === itemId) row[col] = newLabel;
    });
    recompute();
    showMessage("Updated label on item " + itemId + ". κ recalculated.", "ok");
    renderAll();
  }

  function exportReport() {
    if (!lastReport) {
      showMessage("Load data and map columns first.", "warn");
      renderAll();
      return;
    }
    Lib.downloadReport(lastReport, { source: dataset.source, mapping: mapping });
  }

  const root = document.getElementById("iaa-root");
  if (!root) return;

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderLoader() +
      renderMessage() +
      (dataset
        ? renderMapping() +
          (lastReport
            ? renderMeters(lastReport) +
              renderContingency(lastReport) +
              renderCallouts(lastReport) +
              renderItems(lastReport) +
              renderExport()
            : "")
        : "");
    bindEvents();
  }

  function renderIntro() {
    return (
      '<section class="iaa-intro">' +
      "<h1>IAA calculator</h1>" +
      "<p>Inter-annotator agreement is measurable — low Cohen's κ should block scale-up " +
      "(book §4.5.2, Table 4.4, <code>eg:4.31</code>). Load two raters' labels, read κ = (Po − Pe) / (1 − Pe), " +
      "inspect the contingency table and disagreements, then export an agreement report. " +
      "Optional third rater enables Fleiss' κ.</p>" +
      "</section>"
    );
  }

  function renderLoader() {
    const presets = window.IaaPresets || {};
    let cards = "";
    Object.keys(presets).forEach(function (id) {
      const p = presets[id];
      const active = dataset && dataset.source === id ? " iaa-preset-active" : "";
      cards +=
        '<button type="button" class="iaa-preset' +
        active +
        '" data-preset="' +
        esc(id) +
        '">' +
        "<strong>" +
        esc(id) +
        "</strong>" +
        "<span>" +
        esc(p.description || "") +
        "</span>" +
        "</button>";
    });
    return (
      '<section class="iaa-panel">' +
      "<h2>1 · Load label pairs</h2>" +
      '<div class="iaa-presets">' +
      cards +
      "</div>" +
      '<div class="iaa-upload-row">' +
      '<label class="iaa-upload-label">Or upload CSV / JSON (≤ 2 MB, ≤ 5000 rows): ' +
      '<input type="file" id="iaa-upload" accept=".csv,.json"></label>' +
      "</div>" +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return '<div class="iaa-message iaa-' + message.kind + '">' + esc(message.text) + "</div>";
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
      '<section class="iaa-panel">' +
      "<h2>2 · Map columns</h2>" +
      '<p class="iaa-hint">Required: rater A and rater B label columns. Optional text helps you read disagreements; optional rater C enables Fleiss\' κ.</p>' +
      '<div class="iaa-map-grid">' +
      '<label>Rater A<select id="iaa-map-a">' +
      optionList(cols, mapping.raterA, false) +
      "</select></label>" +
      '<label>Rater B<select id="iaa-map-b">' +
      optionList(cols, mapping.raterB, false) +
      "</select></label>" +
      '<label>Rater C (optional)<select id="iaa-map-c">' +
      optionList(cols, mapping.raterC, true) +
      "</select></label>" +
      '<label>ID (optional)<select id="iaa-map-id">' +
      optionList(cols, mapping.id, true) +
      "</select></label>" +
      '<label>Text (optional)<select id="iaa-map-text">' +
      optionList(cols, mapping.text, true) +
      "</select></label>" +
      "</div>" +
      '<div class="iaa-op-row">' +
      '<button type="button" id="iaa-apply-map" class="iaa-primary">Apply mapping</button>' +
      "</div>" +
      "</section>"
    );
  }

  function meterCard(title, value, detail, bad, formulaKey) {
    const tip = Lib.FORMULAS[formulaKey] || "";
    return (
      '<div class="iaa-meter' +
      (bad ? " iaa-meter-bad" : " iaa-meter-ok") +
      '"' +
      (tip ? ' title="' + esc(tip) + '"' : "") +
      ">" +
      "<h3>" +
      esc(title) +
      (tip ? ' <span class="iaa-tip" aria-hidden="true">ⓘ</span>' : "") +
      "</h3>" +
      '<div class="iaa-meter-value">' +
      esc(value) +
      "</div>" +
      '<div class="iaa-meter-detail">' +
      esc(detail) +
      "</div>" +
      "</div>"
    );
  }

  function fmt(x) {
    if (x == null || !Number.isFinite(x)) return "—";
    return x.toFixed(3);
  }

  function pct(x) {
    if (x == null || !Number.isFinite(x)) return "—";
    return (x * 100).toFixed(1) + "%";
  }

  function renderMeters(report) {
    const m = report.cohen;
    const stop = m.interpretation && m.interpretation.stopScale;
    let fleissHtml = "";
    if (report.fleiss && report.fleiss.kappa != null) {
      const f = report.fleiss;
      fleissHtml = meterCard(
        "Fleiss' κ",
        fmt(f.kappa),
        f.nRaters + " raters · " + (f.interpretation ? f.interpretation.label : ""),
        f.interpretation && f.interpretation.stopScale,
        "fleissKappa"
      );
    }
    return (
      '<section class="iaa-panel" id="iaa-meters">' +
      "<h2>3 · Agreement meters</h2>" +
      '<p class="iaa-hint">n = ' +
      m.n +
      (report.skipped ? " · skipped " + report.skipped : "") +
      " · hover ⓘ for formulas</p>" +
      '<div class="iaa-meters">' +
      meterCard(
        "Cohen's κ",
        fmt(m.kappa),
        (m.interpretation ? m.interpretation.label : "") + (stop ? " · stop scale-up" : ""),
        stop,
        "cohensKappa"
      ) +
      meterCard("Po (observed)", fmt(m.po), pct(m.percentAgreement) + " raw agreement", false, "observedAgreement") +
      meterCard("Pe (chance)", fmt(m.pe), "Expected if independent", false, "expectedAgreement") +
      meterCard(
        "% agreement",
        pct(m.percentAgreement),
        "Not chance-corrected",
        false,
        "percentAgreement"
      ) +
      fleissHtml +
      "</div>" +
      "</section>"
    );
  }

  function renderContingency(report) {
    const c = report.contingency;
    if (!c || !c.categories.length) return "";
    let head = "<tr><th scope=\"col\">A \\ B</th>";
    c.categories.forEach(function (cat) {
      head += "<th scope=\"col\">" + esc(cat) + "</th>";
    });
    head += "<th scope=\"col\">Row Σ</th></tr>";
    let body = "";
    c.categories.forEach(function (rowCat, i) {
      body += "<tr><th scope=\"row\">" + esc(rowCat) + "</th>";
      c.categories.forEach(function (colCat, j) {
        const diag = i === j ? ' class="iaa-diag"' : "";
        body += "<td" + diag + ">" + c.matrix[i][j] + "</td>";
      });
      body += "<td>" + c.rowSums[i] + "</td></tr>";
    });
    body += '<tr class="iaa-colsum"><th scope="row">Col Σ</th>';
    c.colSums.forEach(function (s) {
      body += "<td>" + s + "</td>";
    });
    body += "<td>" + c.n + "</td></tr>";
    return (
      '<section class="iaa-panel">' +
      "<h2>4 · Contingency table</h2>" +
      '<p class="iaa-hint">Rows = rater A, columns = rater B. Diagonal cells are agreements.</p>' +
      '<div class="iaa-table-wrap"><table class="iaa-contingency" aria-label="Rater contingency table">' +
      "<thead>" +
      head +
      "</thead><tbody>" +
      body +
      "</tbody></table></div>" +
      "</section>"
    );
  }

  function renderCallouts(report) {
    const m = report.cohen;
    const interp = m.interpretation || {};
    let html = '<section class="iaa-panel" id="iaa-callouts"><h2>Interpretation</h2>';
    if (interp.stopScale) {
      html +=
        '<div class="iaa-callout iaa-callout-stop">' +
        "<strong>Stop scale-up.</strong> κ = " +
        fmt(m.kappa) +
        " is in the <em>" +
        esc(interp.label) +
        "</em> band. " +
        esc(interp.detail) +
        " Revise positive/negative examples, retrain annotators, then re-pilot (eg:4.31).</div>";
    } else {
      html +=
        '<div class="iaa-callout iaa-callout-ok">' +
        "<strong>Band: " +
        esc(interp.label) +
        ".</strong> " +
        esc(interp.detail) +
        " Still spot-check disagreements before full production.</div>";
    }
    html +=
      '<p class="iaa-hint">Bands follow the common Landis–Koch teaching scale; your project may set a higher gate (e.g. κ ≥ 0.6).</p></section>';
    return html;
  }

  function uniqueLabels(report) {
    const set = new Set();
    report.items.forEach(function (it) {
      set.add(it.a);
      set.add(it.b);
    });
    return Array.from(set).sort();
  }

  function labelSelect(itemId, which, current, labels) {
    let html =
      '<select class="iaa-label-edit" data-item="' +
      esc(itemId) +
      '" data-which="' +
      which +
      '" aria-label="Edit rater ' +
      which.toUpperCase() +
      ' label">';
    labels.forEach(function (lab) {
      html +=
        '<option value="' +
        esc(lab) +
        '"' +
        (lab === current ? " selected" : "") +
        ">" +
        esc(lab) +
        "</option>";
    });
    html += "</select>";
    return html;
  }

  function renderItems(report) {
    const labels = uniqueLabels(report);
    const rows = showOnlyDisagreements ? report.disagreements : report.items;
    const maxShow = 40;
    const slice = rows.slice(0, maxShow);
    let body = "";
    slice.forEach(function (it) {
      body +=
        '<tr class="' +
        (it.agree ? "iaa-agree" : "iaa-disagree") +
        '">' +
        "<td>" +
        esc(it.id) +
        "</td>" +
        "<td class=\"iaa-text\">" +
        esc(it.text || "—") +
        "</td>" +
        "<td>" +
        labelSelect(it.id, "a", it.a, labels) +
        "</td>" +
        "<td>" +
        labelSelect(it.id, "b", it.b, labels) +
        "</td>" +
        "<td>" +
        (it.agree ? "agree" : "disagree") +
        "</td>" +
        "</tr>";
    });
    return (
      '<section class="iaa-panel">' +
      "<h2>5 · Items &amp; disagreements</h2>" +
      '<p class="iaa-hint">Edit a label to see how κ moves. ' +
      report.disagreements.length +
      " of " +
      report.items.length +
      " items disagree.</p>" +
      '<label class="iaa-toggle"><input type="checkbox" id="iaa-only-dis"' +
      (showOnlyDisagreements ? " checked" : "") +
      "> Show disagreements only</label>" +
      '<div class="iaa-table-wrap"><table class="iaa-items" aria-label="Labeled items">' +
      "<thead><tr><th>ID</th><th>Text</th><th>Rater A</th><th>Rater B</th><th>Status</th></tr></thead>" +
      "<tbody>" +
      body +
      "</tbody></table></div>" +
      (rows.length > maxShow
        ? '<p class="iaa-hint">Showing first ' + maxShow + " of " + rows.length + " rows.</p>"
        : "") +
      "</section>"
    );
  }

  function renderExport() {
    return (
      '<section class="iaa-panel">' +
      "<h2>6 · Export</h2>" +
      '<p class="iaa-hint">Download <code>agreement-report.json</code> with κ, Po, Pe, contingency, and disagreement list.</p>' +
      '<button type="button" id="iaa-export" class="iaa-primary">Download agreement-report.json</button>' +
      "</section>"
    );
  }

  function bindEvents() {
    root.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    const upload = document.getElementById("iaa-upload");
    if (upload) upload.addEventListener("change", onFileUpload);
    const apply = document.getElementById("iaa-apply-map");
    if (apply) apply.addEventListener("click", onApplyMapping);
    const only = document.getElementById("iaa-only-dis");
    if (only) {
      only.addEventListener("change", function () {
        showOnlyDisagreements = !!only.checked;
        renderAll();
      });
    }
    root.querySelectorAll(".iaa-label-edit").forEach(function (sel) {
      sel.addEventListener("change", function () {
        onFlipLabel(sel.getAttribute("data-item"), sel.getAttribute("data-which"), sel.value);
      });
    });
    const exp = document.getElementById("iaa-export");
    if (exp) exp.addEventListener("click", exportReport);
  }

  // Auto-load first preset so the page is immediately instructive
  const presetIds = Object.keys(window.IaaPresets || {});
  if (presetIds.indexOf("ner-org-pilot") >= 0) {
    loadPreset("ner-org-pilot");
  } else if (presetIds.length) {
    loadPreset(presetIds[0]);
  } else {
    renderAll();
  }
})();
