/* IAA calculator — main UI (classic script, file:// safe).
 * Modes: category (Cohen's κ), spans (NER/audio/video intervals), boxes (IoU).
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
  let mode = "category";
  let matchOpts = {
    iouThreshold: 0.5,
    requireLabel: true,
    spanMatch: "iou",
  };
  let message = { text: "", kind: "" };
  let lastReport = null;
  let showOnlyDisagreements = false;
  let modeFilter = "all";

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

  function reportOptions() {
    return {
      mode: mode,
      iouThreshold: matchOpts.iouThreshold,
      requireLabel: matchOpts.requireLabel,
      spanMatch: matchOpts.spanMatch,
    };
  }

  function recompute() {
    if (!dataset || !mappingReady()) {
      lastReport = null;
      return;
    }
    try {
      lastReport = Lib.computeReport(dataset.rows, mapping, reportOptions());
    } catch (err) {
      lastReport = null;
      showMessage(err.message || String(err), "error");
    }
  }

  function applyPresetOptions(data) {
    mode = data.mode || Lib.inferModeFromColumns(data.columns) || "category";
    const d = data.defaultOptions || {};
    matchOpts = {
      iouThreshold: d.iouThreshold != null ? Number(d.iouThreshold) : 0.5,
      requireLabel: d.requireLabel !== false,
      spanMatch: d.spanMatch === "exact" ? "exact" : "iou",
    };
  }

  function loadPreset(id) {
    try {
      const data = Lib.loadPreset(id);
      dataset = data;
      applyPresetOptions(data);
      mapping = Lib.suggestMapping(data.columns, data.defaultMapping || {}, mode);
      recompute();
      showMessage(
        "Loaded '" +
          data.source +
          "' (" +
          data.rows.length +
          " rows · mode " +
          mode +
          "). Read the meters, then inspect disagreements.",
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
        mode = Lib.inferModeFromColumns(data.columns);
        matchOpts = { iouThreshold: 0.5, requireLabel: true, spanMatch: "iou" };
        mapping = Lib.suggestMapping(data.columns, {}, mode);
        recompute();
        showMessage(
          "Loaded '" +
            file.name +
            "' (" +
            data.rows.length +
            " rows). Detected mode: " +
            mode +
            ". Confirm mapping below.",
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

  function checked(id) {
    const el = document.getElementById(id);
    return el ? !!el.checked : false;
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

  function onApplyMatchOpts() {
    const nextMode = val("iaa-mode") || mode;
    const isEntity = nextMode === "spans" || nextMode === "boxes";
    mode = nextMode;
    if (isEntity) {
      matchOpts = {
        iouThreshold: Math.min(1, Math.max(0, Number(val("iaa-iou")) || 0.5)),
        requireLabel: checked("iaa-require-label"),
        spanMatch: val("iaa-span-match") === "exact" ? "exact" : "iou",
      };
    }
    if (dataset) {
      mapping = Lib.suggestMapping(dataset.columns, mapping, mode);
    }
    recompute();
    showMessage("Match options applied (" + mode + ").", "ok");
    renderAll();
  }

  function onFlipLabel(itemId, which, newLabel) {
    if (!dataset || !mappingReady() || mode !== "category") return;
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
    Lib.downloadReport(lastReport, {
      source: dataset.source,
      mapping: mapping,
      mode: mode,
      matchOptions: matchOpts,
    });
  }

  const root = document.getElementById("iaa-root");
  if (!root) return;

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderLoader() +
      renderMessage() +
      (dataset
        ? renderModePanel() +
          renderMapping() +
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
      "<p>One tool for agreement across modalities: <strong>category</strong> labels (Cohen's κ), " +
      "<strong>spans</strong> / time segments (exact or IoU), and <strong>boxes</strong> (IoU). " +
      "Low agreement should block scale-up (book §4.5.2, Table 4.4, <code>eg:4.31</code>). " +
      "Optional third rater enables Fleiss' κ in category mode.</p>" +
      "</section>"
    );
  }

  function renderLoader() {
    const presets = window.IaaPresets || {};
    let cards = "";
    Object.keys(presets).forEach(function (id) {
      const p = presets[id];
      const pMode = p.mode || "category";
      if (modeFilter !== "all" && pMode !== modeFilter) return;
      const active = dataset && dataset.source === id ? " iaa-preset-active" : "";
      cards +=
        '<button type="button" class="iaa-preset' +
        active +
        '" data-preset="' +
        esc(id) +
        '">' +
        '<span class="iaa-badge iaa-badge-' +
        esc(pMode) +
        '">' +
        esc(pMode) +
        (p.modality ? " · " + esc(p.modality) : "") +
        "</span>" +
        "<strong>" +
        esc(id) +
        "</strong>" +
        "<span>" +
        esc(p.description || "") +
        "</span>" +
        "</button>";
    });
    if (!cards) {
      cards = '<p class="iaa-hint">No presets for this filter.</p>';
    }
    return (
      '<section class="iaa-panel">' +
      "<h2>1 · Load annotations</h2>" +
      '<div class="iaa-filter-row">' +
      '<label>Show presets<select id="iaa-mode-filter">' +
      '<option value="all"' +
      (modeFilter === "all" ? " selected" : "") +
      ">All modes</option>" +
      '<option value="category"' +
      (modeFilter === "category" ? " selected" : "") +
      ">Category</option>" +
      '<option value="spans"' +
      (modeFilter === "spans" ? " selected" : "") +
      ">Spans / segments</option>" +
      '<option value="boxes"' +
      (modeFilter === "boxes" ? " selected" : "") +
      ">Boxes</option>" +
      "</select></label>" +
      "</div>" +
      '<div class="iaa-presets">' +
      cards +
      "</div>" +
      '<div class="iaa-upload-row">' +
      '<label class="iaa-upload-label">Or upload CSV / JSON (≤ 2 MB, ≤ 5000 rows). ' +
      "Span/box JSON columns: <code>spans_a</code>/<code>spans_b</code> or <code>boxes_a</code>/<code>boxes_b</code> " +
      "(arrays of objects). " +
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

  function renderModePanel() {
    const isEntity = mode === "spans" || mode === "boxes";
    return (
      '<section class="iaa-panel">' +
      "<h2>2 · Match mode</h2>" +
      '<p class="iaa-hint">Category mode scores label equality with Cohen\'s κ. ' +
      "Span and box modes score entity-level precision / recall / F1 under a match rule.</p>" +
      '<div class="iaa-map-grid">' +
      '<label>Mode<select id="iaa-mode">' +
      '<option value="category"' +
      (mode === "category" ? " selected" : "") +
      ">Category labels (κ)</option>" +
      '<option value="spans"' +
      (mode === "spans" ? " selected" : "") +
      ">Spans / time segments</option>" +
      '<option value="boxes"' +
      (mode === "boxes" ? " selected" : "") +
      ">Bounding boxes</option>" +
      "</select></label>" +
      (isEntity
        ? '<label>IoU threshold τ<input type="number" id="iaa-iou" min="0" max="1" step="0.05" value="' +
          esc(String(matchOpts.iouThreshold)) +
          '"></label>' +
          (mode === "spans"
            ? '<label>Span rule<select id="iaa-span-match">' +
              '<option value="iou"' +
              (matchOpts.spanMatch !== "exact" ? " selected" : "") +
              ">Soft (IoU ≥ τ)</option>" +
              '<option value="exact"' +
              (matchOpts.spanMatch === "exact" ? " selected" : "") +
              ">Exact offsets</option>" +
              "</select></label>"
            : '<input type="hidden" id="iaa-span-match" value="iou">') +
          '<label class="iaa-toggle iaa-toggle-block"><input type="checkbox" id="iaa-require-label"' +
          (matchOpts.requireLabel ? " checked" : "") +
          "> Require same class label to count as a match</label>"
        : '<input type="hidden" id="iaa-iou" value="0.5">' +
          '<input type="hidden" id="iaa-span-match" value="iou">' +
          '<input type="hidden" id="iaa-require-label" value="1">') +
      "</div>" +
      '<div class="iaa-op-row">' +
      '<button type="button" id="iaa-apply-mode" class="iaa-primary">Apply match options</button>' +
      "</div>" +
      "</section>"
    );
  }

  function renderMapping() {
    const cols = dataset.columns;
    const entityHint =
      mode === "boxes"
        ? "Map columns that hold JSON arrays of boxes ({x,y,w,h,label} or x1..y2)."
        : mode === "spans"
          ? "Map columns that hold JSON arrays of spans/segments ({start,end,label})."
          : "Required: rater A and rater B label columns. Optional rater C enables Fleiss' κ.";
    return (
      '<section class="iaa-panel">' +
      "<h2>3 · Map columns</h2>" +
      '<p class="iaa-hint">' +
      entityHint +
      "</p>" +
      '<div class="iaa-map-grid">' +
      '<label>Rater A<select id="iaa-map-a">' +
      optionList(cols, mapping.raterA, false) +
      "</select></label>" +
      '<label>Rater B<select id="iaa-map-b">' +
      optionList(cols, mapping.raterB, false) +
      "</select></label>" +
      (mode === "category"
        ? '<label>Rater C (optional)<select id="iaa-map-c">' +
          optionList(cols, mapping.raterC, true) +
          "</select></label>"
        : '<input type="hidden" id="iaa-map-c" value="">') +
      '<label>ID (optional)<select id="iaa-map-id">' +
      optionList(cols, mapping.id, true) +
      "</select></label>" +
      '<label>Text / scene (optional)<select id="iaa-map-text">' +
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
    if (report.mode === "spans" || report.mode === "boxes") {
      const e = report.entity;
      const stop = e.interpretation && e.interpretation.stopScale;
      const rule =
        report.mode === "boxes"
          ? "IoU ≥ " + report.matchOptions.iouThreshold
          : report.matchOptions.spanMatch === "exact"
            ? "exact offsets"
            : "IoU ≥ " + report.matchOptions.iouThreshold;
      return (
        '<section class="iaa-panel" id="iaa-meters">' +
        "<h2>4 · Entity agreement meters</h2>" +
        '<p class="iaa-hint">Match rule: ' +
        esc(rule) +
        (report.matchOptions.requireLabel ? " · same label required" : " · label optional") +
        " · n docs = " +
        e.nDocuments +
        " · TP/FP/FN = " +
        e.tp +
        "/" +
        e.fp +
        "/" +
        e.fn +
        (report.skipped ? " · skipped " + report.skipped : "") +
        "</p>" +
        '<div class="iaa-meters">' +
        meterCard(
          "Entity F1",
          fmt(e.f1),
          (e.interpretation ? e.interpretation.label : "") + (stop ? " · stop scale-up" : ""),
          stop,
          "entityF1"
        ) +
        meterCard("Precision", fmt(e.precision), "TP / (TP+FP)", false, "entityPrecision") +
        meterCard("Recall", fmt(e.recall), "TP / (TP+FN)", false, "entityRecall") +
        meterCard("Mean IoU", fmt(e.meanIoU), "Over matched pairs", false, "meanIoU") +
        (report.cohen
          ? meterCard(
              "Label κ (matched)",
              fmt(report.cohen.kappa),
              "Cohen κ on matched-pair labels only",
              report.cohen.interpretation && report.cohen.interpretation.stopScale,
              "cohensKappa"
            )
          : "") +
        "</div>" +
        "</section>"
      );
    }

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
      "<h2>4 · Agreement meters</h2>" +
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
      meterCard("% agreement", pct(m.percentAgreement), "Not chance-corrected", false, "percentAgreement") +
      fleissHtml +
      "</div>" +
      "</section>"
    );
  }

  function renderContingency(report) {
    const c = report.contingency;
    if (!c || !c.categories || !c.categories.length) return "";
    let head = '<tr><th scope="col">A \\ B</th>';
    c.categories.forEach(function (cat) {
      head += '<th scope="col">' + esc(cat) + "</th>";
    });
    head += '<th scope="col">Row Σ</th></tr>';
    let body = "";
    c.categories.forEach(function (rowCat, i) {
      body += '<tr><th scope="row">' + esc(rowCat) + "</th>";
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
    const title =
      report.mode === "category"
        ? "Contingency table"
        : "Label contingency (matched entities only)";
    const hint =
      report.mode === "category"
        ? "Rows = rater A, columns = rater B. Diagonal cells are agreements."
        : "Built only from greedy matches — unmatched entities appear in FP/FN, not here.";
    return (
      '<section class="iaa-panel">' +
      "<h2>5 · " +
      title +
      "</h2>" +
      '<p class="iaa-hint">' +
      hint +
      "</p>" +
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
    let html = '<section class="iaa-panel" id="iaa-callouts"><h2>Interpretation</h2>';
    if (report.mode === "spans" || report.mode === "boxes") {
      const e = report.entity;
      const interp = e.interpretation || {};
      if (interp.stopScale) {
        html +=
          '<div class="iaa-callout iaa-callout-stop">' +
          "<strong>Stop scale-up.</strong> Entity F1 = " +
          fmt(e.f1) +
          " is in the <em>" +
          esc(interp.label) +
          "</em> band. " +
          esc(interp.detail) +
          " Try tightening boundary examples, then re-pilot under the same IoU rule.</div>";
      } else {
        html +=
          '<div class="iaa-callout iaa-callout-ok">' +
          "<strong>Band: " +
          esc(interp.label) +
          ".</strong> " +
          esc(interp.detail) +
          " Spot-check unmatched entities before production.</div>";
      }
      html +=
        '<p class="iaa-hint">Exact vs IoU and τ are project policy — report the rule with the score.</p></section>';
      return html;
    }
    const m = report.cohen;
    const interp = m.interpretation || {};
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
      if (it.a != null) set.add(it.a);
      if (it.b != null) set.add(it.b);
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

  function fmtEntity(ent, modeName) {
    if (modeName === "boxes") {
      return (
        esc(ent.label) +
        " @(" +
        Math.round(ent.x) +
        "," +
        Math.round(ent.y) +
        " " +
        Math.round(ent.w) +
        "×" +
        Math.round(ent.h) +
        ")"
      );
    }
    return esc(ent.label) + " [" + ent.start + ", " + ent.end + ")";
  }

  function renderEntityDetail(it, modeName) {
    let bits = [];
    it.matches.forEach(function (m) {
      bits.push("match IoU " + m.score + ": " + m.labelA + (m.labelA !== m.labelB ? "≠" + m.labelB : ""));
    });
    it.unmatchedA.forEach(function (e) {
      bits.push("A only: " + fmtEntity(e, modeName));
    });
    it.unmatchedB.forEach(function (e) {
      bits.push("B only: " + fmtEntity(e, modeName));
    });
    if (!bits.length) return "—";
    return bits.join("; ");
  }

  function renderItems(report) {
    const isEntity = report.mode === "spans" || report.mode === "boxes";
    const rows = showOnlyDisagreements ? report.disagreements : report.items;
    const maxShow = 40;
    const slice = rows.slice(0, maxShow);
    let body = "";
    let head;

    if (isEntity) {
      head =
        "<thead><tr><th>ID</th><th>Text / scene</th><th>A#</th><th>B#</th><th>TP</th><th>Detail</th><th>Status</th></tr></thead>";
      slice.forEach(function (it) {
        body +=
          '<tr class="' +
          (it.agree ? "iaa-agree" : "iaa-disagree") +
          '">' +
          "<td>" +
          esc(it.id) +
          "</td>" +
          '<td class="iaa-text">' +
          esc(it.text || "—") +
          "</td>" +
          "<td>" +
          it.aCount +
          "</td>" +
          "<td>" +
          it.bCount +
          "</td>" +
          "<td>" +
          it.tp +
          "</td>" +
          '<td class="iaa-text">' +
          renderEntityDetail(it, report.mode) +
          "</td>" +
          "<td>" +
          (it.agree ? "agree" : "disagree") +
          "</td>" +
          "</tr>";
      });
    } else {
      const labels = uniqueLabels(report);
      head =
        "<thead><tr><th>ID</th><th>Text</th><th>Rater A</th><th>Rater B</th><th>Status</th></tr></thead>";
      slice.forEach(function (it) {
        body +=
          '<tr class="' +
          (it.agree ? "iaa-agree" : "iaa-disagree") +
          '">' +
          "<td>" +
          esc(it.id) +
          "</td>" +
          '<td class="iaa-text">' +
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
    }

    const step = report.contingency ? "6" : "5";
    return (
      '<section class="iaa-panel">' +
      "<h2>" +
      step +
      " · Items &amp; disagreements</h2>" +
      '<p class="iaa-hint">' +
      (isEntity
        ? "Adjust IoU / exact / require-label above to see matches change. "
        : "Edit a label to see how κ moves. ") +
      report.disagreements.length +
      " of " +
      report.items.length +
      " items disagree.</p>" +
      '<label class="iaa-toggle"><input type="checkbox" id="iaa-only-dis"' +
      (showOnlyDisagreements ? " checked" : "") +
      "> Show disagreements only</label>" +
      '<div class="iaa-table-wrap"><table class="iaa-items" aria-label="Labeled items">' +
      head +
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
    const step = lastReport && lastReport.contingency ? "7" : "6";
    return (
      '<section class="iaa-panel">' +
      "<h2>" +
      step +
      " · Export</h2>" +
      '<p class="iaa-hint">Download <code>agreement-report.json</code> with mode, match options, meters, contingency, and disagreement list.</p>' +
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
    const filter = document.getElementById("iaa-mode-filter");
    if (filter) {
      filter.addEventListener("change", function () {
        modeFilter = filter.value || "all";
        renderAll();
      });
    }
    const upload = document.getElementById("iaa-upload");
    if (upload) upload.addEventListener("change", onFileUpload);
    const applyMode = document.getElementById("iaa-apply-mode");
    if (applyMode) applyMode.addEventListener("click", onApplyMatchOpts);
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

  const presetIds = Object.keys(window.IaaPresets || {});
  if (presetIds.indexOf("ner-org-pilot") >= 0) {
    loadPreset("ner-org-pilot");
  } else if (presetIds.length) {
    loadPreset(presetIds[0]);
  } else {
    renderAll();
  }
})();
