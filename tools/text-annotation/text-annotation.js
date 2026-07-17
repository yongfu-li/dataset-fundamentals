/* Text annotation — document sentiment + NER spans for Chapter 4 §4.2.2.
 * Classic script (file:// safe). Depends on window.TextAnnLib + TextAnnPresets. */
(function () {
  "use strict";
  const Lib = window.TextAnnLib;
  if (!Lib) {
    console.error("TextAnnLib not found. Check lib/*.js loaded before text-annotation.js.");
    return;
  }

  const STORAGE_KEY = "textann:v1";
  const LABEL_COLORS = {
    positive: "#2b8a3e",
    neutral: "#6b7280",
    negative: "#9b2c2c",
    org: "#2563af",
    loc: "#d67928",
    per: "#6b4fbb",
    misc: "#0f6b5c",
  };

  /** @type {null|{mode:string,labels:string[],items:Array,source:string,title:string,bookAnchors:string[],teachingFocus:string}} */
  let session = null;
  /** @type {Record<string, {label?:string, spans?:Array}>} */
  let annotations = {};
  let activeIndex = 0;
  let activeLabel = null;
  let message = { text: "", kind: "" };
  let pendingUpload = null;
  let mapping = { id: null, text: null };
  let uploadMode = "sentiment";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function activeItem() {
    return session && session.items[activeIndex] ? session.items[activeIndex] : null;
  }

  function ensureAnn(id) {
    if (!annotations[id]) {
      annotations[id] = session.mode === "ner" ? { spans: [] } : { label: null };
    }
    return annotations[id];
  }

  function persist() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          session: session
            ? {
                mode: session.mode,
                labels: session.labels,
                items: session.items,
                source: session.source,
                title: session.title,
                bookAnchors: session.bookAnchors,
                teachingFocus: session.teachingFocus,
              }
            : null,
          annotations: annotations,
          activeIndex: activeIndex,
          activeLabel: activeLabel,
        })
      );
    } catch (err) {
      /* quota — ignore */
    }
  }

  function restore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);
      if (!data || !data.session || !data.session.items || !data.session.items.length) return false;
      session = data.session;
      annotations = data.annotations || {};
      activeIndex = Math.min(data.activeIndex || 0, session.items.length - 1);
      activeLabel = data.activeLabel || session.labels[0] || null;
      return true;
    } catch (err) {
      return false;
    }
  }

  function startSession(spec) {
    session = {
      mode: spec.mode,
      labels: (spec.labels || []).slice(),
      items: spec.items.slice(),
      source: spec.source || spec.name || "session",
      title: spec.title || spec.name || "Text annotation",
      bookAnchors: spec.bookAnchors || [],
      teachingFocus: spec.teachingFocus || "",
    };
    annotations = {};
    session.items.forEach(function (item) {
      annotations[item.id] = session.mode === "ner" ? { spans: [] } : { label: null };
    });
    activeIndex = 0;
    activeLabel = session.labels[0] || null;
    pendingUpload = null;
    persist();
  }

  function loadPreset(id) {
    try {
      const p = Lib.loadPreset(id);
      startSession(p);
      showMessage("Loaded '" + p.name + "' — " + (p.teachingFocus || "start labeling."), "ok");
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
        mapping = Lib.suggestMapping(data.columns);
        pendingUpload = data;
        showMessage(
          "Loaded '" +
            file.name +
            "' (" +
            data.rows.length +
            " rows). Choose mode, map columns, then Apply.",
          "ok"
        );
      } catch (err) {
        showMessage(err.message || String(err), "error");
        pendingUpload = null;
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

  function applyUpload() {
    if (!pendingUpload) return;
    try {
      const items = Lib.rowsToItems(pendingUpload.rows, mapping);
      startSession({
        mode: uploadMode,
        labels:
          uploadMode === "ner"
            ? ["ORG", "LOC", "PER", "MISC"]
            : ["positive", "neutral", "negative"],
        items: items,
        source: pendingUpload.source,
        title: "Uploaded texts",
        teachingFocus: "user-upload",
        bookAnchors: ["§4.2.2"],
      });
      showMessage(
        "Ready: " + items.length + " items in " + uploadMode + " mode. Label, then export.",
        "ok"
      );
    } catch (err) {
      showMessage(err.message || String(err), "error");
    }
    renderAll();
  }

  function setSentiment(label) {
    const item = activeItem();
    if (!item) return;
    ensureAnn(item.id).label = label;
    persist();
    showMessage("Labeled " + item.id + " as " + label + ".", "ok");
    renderAll();
  }

  function onAddSpanFromSelection() {
    const item = activeItem();
    if (!item || session.mode !== "ner") return;
    const host = document.getElementById("ta-text-host");
    if (!host) return;
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
      showMessage("Select a contiguous span in the text first.", "warn");
      renderAll();
      return;
    }
    const range = sel.getRangeAt(0);
    if (!host.contains(range.commonAncestorContainer)) {
      showMessage("Selection must be inside the current sentence.", "warn");
      renderAll();
      return;
    }
    const offsets = selectionOffsets(host, range);
    if (!offsets) {
      showMessage("Could not map selection to character offsets.", "warn");
      renderAll();
      return;
    }
    const ann = ensureAnn(item.id);
    const result = Lib.tryAddSpan(ann.spans || [], offsets.start, offsets.end, activeLabel, item.text);
    if (!result.ok) {
      showMessage(result.error, "error");
      renderAll();
      return;
    }
    ann.spans = result.spans;
    sel.removeAllRanges();
    persist();
    showMessage(
      "Added " + activeLabel + ' span "' + item.text.slice(offsets.start, offsets.end) + '".',
      "ok"
    );
    renderAll();
  }

  /** Map a DOM Range inside #ta-text-host to character offsets in plain text. */
  function selectionOffsets(host, range) {
    try {
      const pre = document.createRange();
      pre.selectNodeContents(host);
      pre.setEnd(range.startContainer, range.startOffset);
      const start = pre.toString().length;
      const selected = range.toString();
      return { start: start, end: start + selected.length };
    } catch (err) {
      return null;
    }
  }

  function removeSpan(spanId) {
    const item = activeItem();
    if (!item) return;
    const ann = ensureAnn(item.id);
    ann.spans = Lib.removeSpan(ann.spans || [], spanId);
    persist();
    showMessage("Removed span.", "ok");
    renderAll();
  }

  function go(delta) {
    if (!session) return;
    activeIndex = Math.max(0, Math.min(session.items.length - 1, activeIndex + delta));
    persist();
    renderAll();
  }

  function exportJson() {
    if (!session) return;
    Lib.downloadExport({
      mode: session.mode,
      labels: session.labels,
      items: session.items,
      annotations: annotations,
      source: session.source,
      bookAnchors: session.bookAnchors,
    });
    showMessage("Downloaded text-annotations.json.", "ok");
    renderAll();
  }

  function exportCsv() {
    if (!session) return;
    Lib.downloadCsv({
      mode: session.mode,
      items: session.items,
      annotations: annotations,
    });
    showMessage("Downloaded text-annotations.csv.", "ok");
    renderAll();
  }

  const root = document.getElementById("text-annotation-root");
  if (!root) return;

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderGuide() +
      renderLoader() +
      renderMessage() +
      (pendingUpload ? renderMapping() : "") +
      (session ? renderWorkspace() : "");
    bindEvents();
  }

  function renderIntro() {
    return (
      '<section class="ta-intro">' +
      "<h1>Text annotation</h1>" +
      '<p class="lead">Label short texts with document sentiment or named-entity spans ' +
      "(book §4.2.2, eg:4.2, eg:4.9, eg:4.12). Try a preset first, then upload your own CSV/JSON.</p>" +
      '<p class="ta-cross">For bounding boxes on images, use the ' +
      '<a href="../image-annotation/index.html">image annotation</a> tool. ' +
      'Measure agreement later with the <a href="../iaa/index.html">IAA calculator</a>.</p>' +
      "</section>"
    );
  }

  function renderGuide() {
    return (
      '<details class="ta-panel ta-guide">' +
      "<summary>Learn → apply with your data</summary>" +
      "<ol>" +
      "<li><strong>Learn</strong> — run <code>sentiment-reviews</code> or <code>ner-entities</code>. " +
      "Sentiment assigns one label per review; NER requires selecting character spans.</li>" +
      "<li><strong>Prepare</strong> — export a CSV/JSON with at least a <code>text</code> column " +
      "(optional <code>id</code>). Keep each row under 2,000 characters.</li>" +
      "<li><strong>Apply</strong> — upload, choose mode, map columns, label, then export " +
      "<code>text-annotations.json</code> for review or IAA.</li>" +
      "</ol>" +
      '<p class="ta-hint">Overlapping NER spans are rejected — delete the conflict first. ' +
      "Tokenization (eg:4.9) matters: decide whether punctuation belongs inside the span.</p>" +
      "</details>"
    );
  }

  function renderLoader() {
    const presets = Lib.listPresets();
    let cards = "";
    presets.forEach(function (p) {
      const active = session && session.source === p.name ? " ta-preset-active" : "";
      cards +=
        '<button type="button" class="ta-preset' +
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
      '<section class="ta-panel">' +
      "<h2>1 · Load texts</h2>" +
      '<p class="ta-hint">Teaching presets — start here.</p>' +
      '<div class="ta-presets">' +
      cards +
      "</div>" +
      '<p class="ta-hint">Your data — CSV or JSON array of objects.</p>' +
      '<label class="ta-upload">Upload CSV/JSON (≤ 2 MB)' +
      '<input type="file" id="ta-upload" accept=".csv,.json,text/csv,application/json"></label>' +
      '<p class="ta-actions">' +
      '<button type="button" class="btn btn-secondary" id="ta-template-sent">Download sentiment template</button> ' +
      '<button type="button" class="btn btn-secondary" id="ta-template-ner">Download NER template</button>' +
      "</p>" +
      "</section>"
    );
  }

  function renderMessage() {
    if (!message.text) return "";
    return '<div class="ta-message ta-' + esc(message.kind) + '" role="status">' + esc(message.text) + "</div>";
  }

  function renderMapping() {
    const cols = pendingUpload.columns || [];
    function opts(selected) {
      let html = '<option value="">—</option>';
      cols.forEach(function (c) {
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
    return (
      '<section class="ta-panel">' +
      "<h2>Map columns</h2>" +
      '<div class="ta-map-grid">' +
      "<label>Mode<select id=\"ta-upload-mode\">" +
      '<option value="sentiment"' +
      (uploadMode === "sentiment" ? " selected" : "") +
      ">Sentiment (document)</option>" +
      '<option value="ner"' +
      (uploadMode === "ner" ? " selected" : "") +
      ">NER (spans)</option>" +
      "</select></label>" +
      "<label>ID (optional)<select id=\"ta-map-id\">" +
      opts(mapping.id) +
      "</select></label>" +
      "<label>Text (required)<select id=\"ta-map-text\">" +
      opts(mapping.text) +
      "</select></label>" +
      "</div>" +
      '<button type="button" class="btn" id="ta-apply-upload">Apply upload</button>' +
      "</section>"
    );
  }

  function renderWorkspace() {
    const item = activeItem();
    const labeled = Lib.labeledCount(session.items, session.mode, annotations);
    const flags = Lib.reviewFlags(session.items, session.mode, annotations);
    return (
      renderProgress(labeled) +
      renderNavigator(item) +
      (session.mode === "sentiment" ? renderSentiment(item) : renderNer(item)) +
      renderReview(flags) +
      renderExport()
    );
  }

  function renderProgress(labeled) {
    const n = session.items.length;
    const pct = n ? Math.round((100 * labeled) / n) : 0;
    return (
      '<section class="ta-panel">' +
      "<h2>2 · Session</h2>" +
      "<p><strong>" +
      esc(session.title) +
      "</strong> · " +
      esc(session.mode) +
      " · " +
      labeled +
      " / " +
      n +
      " labeled (" +
      pct +
      "%)</p>" +
      '<div class="ta-progress" role="progressbar" aria-valuenow="' +
      pct +
      '" aria-valuemin="0" aria-valuemax="100">' +
      '<div class="ta-progress-bar" style="width:' +
      pct +
      '%"></div></div>' +
      (session.teachingFocus
        ? '<p class="ta-hint">' + esc(session.teachingFocus) + "</p>"
        : "") +
      "</section>"
    );
  }

  function renderNavigator(item) {
    if (!item) return "";
    let pills = "";
    session.items.forEach(function (it, i) {
      const ann = annotations[it.id];
      let done = false;
      if (session.mode === "sentiment") done = !!(ann && ann.label);
      else done = !!(ann && ann.spans && ann.spans.length);
      pills +=
        '<button type="button" class="ta-item-pill' +
        (i === activeIndex ? " ta-item-active" : "") +
        (done ? " ta-item-done" : "") +
        '" data-item-index="' +
        i +
        '">' +
        esc(it.id) +
        "</button>";
    });
    return (
      '<section class="ta-panel">' +
      "<h2>3 · Item " +
      (activeIndex + 1) +
      " / " +
      session.items.length +
      "</h2>" +
      '<div class="ta-item-list">' +
      pills +
      "</div>" +
      '<div class="ta-nav">' +
      '<button type="button" class="btn btn-secondary" id="ta-prev"' +
      (activeIndex === 0 ? " disabled" : "") +
      ">← Previous</button> " +
      '<button type="button" class="btn btn-secondary" id="ta-next"' +
      (activeIndex >= session.items.length - 1 ? " disabled" : "") +
      ">Next →</button>" +
      "</div>" +
      "</section>"
    );
  }

  function renderSentiment(item) {
    if (!item) return "";
    const ann = ensureAnn(item.id);
    let btns = "";
    session.labels.forEach(function (lab) {
      const on = ann.label === lab ? " ta-label-active" : "";
      btns +=
        '<button type="button" class="ta-label-btn ta-lab-' +
        esc(lab) +
        on +
        '" data-sent-label="' +
        esc(lab) +
        '">' +
        esc(lab) +
        "</button>";
    });
    return (
      '<section class="ta-panel">' +
      "<h2>4 · Assign sentiment</h2>" +
      '<blockquote class="ta-text" id="ta-text-host">' +
      esc(item.text) +
      "</blockquote>" +
      '<div class="ta-labels">' +
      btns +
      "</div>" +
      '<p class="ta-hint">One label per document. Guidelines should define borderline cases (e.g. mixed reviews).</p>' +
      "</section>"
    );
  }

  function renderNer(item) {
    if (!item) return "";
    const ann = ensureAnn(item.id);
    const spans = ann.spans || [];
    let labs = "";
    session.labels.forEach(function (lab) {
      const on = activeLabel === lab ? " ta-label-active" : "";
      labs +=
        '<button type="button" class="ta-label-btn ta-lab-' +
        esc(lab.toLowerCase()) +
        on +
        '" data-ner-label="' +
        esc(lab) +
        '">' +
        esc(lab) +
        "</button>";
    });
    let spanList = "";
    if (!spans.length) {
      spanList = '<p class="ta-hint">No spans yet.</p>';
    } else {
      spanList = "<ul class=\"ta-span-list\">";
      spans.forEach(function (sp) {
        spanList +=
          "<li><code>" +
          esc(sp.label) +
          "</code> [" +
          sp.start +
          ":" +
          sp.end +
          "] “" +
          esc(item.text.slice(sp.start, sp.end)) +
          "” " +
          '<button type="button" class="btn btn-secondary ta-span-del" data-span-id="' +
          esc(sp.id) +
          '">Delete</button></li>';
      });
      spanList += "</ul>";
    }
    return (
      '<section class="ta-panel">' +
      "<h2>4 · Mark entity spans</h2>" +
      '<p class="ta-hint">1) Select an entity label · 2) Drag-select text · 3) Click Add span (or press Enter).</p>' +
      '<div class="ta-labels">' +
      labs +
      "</div>" +
      '<div class="ta-text ta-selectable" id="ta-text-host">' +
      Lib.renderMarkedHtml(item.text, spans, esc) +
      "</div>" +
      (item.hint ? '<p class="ta-hint">Teaching hint: ' + esc(item.hint) + "</p>" : "") +
      '<p class="ta-actions"><button type="button" class="btn" id="ta-add-span">Add span from selection</button></p>' +
      "<h3>Spans on this item</h3>" +
      spanList +
      "</section>"
    );
  }

  function renderReview(flags) {
    let body;
    if (!flags.length) {
      body = '<p class="ta-ok-line">All items have at least one label — ready to export.</p>';
    } else {
      body =
        "<p>" +
        flags.length +
        " item(s) still unlabeled:</p><ul class=\"ta-flag-list\">";
      flags.slice(0, 12).forEach(function (f) {
        body += "<li><button type=\"button\" class=\"ta-flag-link\" data-goto-id=\"" + esc(f.id) + "\">" + esc(f.id) + "</button> — " + esc(f.detail) + "</li>";
      });
      if (flags.length > 12) body += "<li>…and " + (flags.length - 12) + " more</li>";
      body += "</ul>";
    }
    return (
      '<section class="ta-panel">' +
      "<h2>5 · Review gate</h2>" +
      body +
      '<p class="ta-hint">Treat incomplete labels as a scale-up blocker (ties to §4.5 QC and the IAA calculator).</p>' +
      "</section>"
    );
  }

  function renderExport() {
    return (
      '<section class="ta-panel">' +
      "<h2>6 · Export</h2>" +
      "<p>Download labels for guideline review or to pair two raters in the IAA calculator.</p>" +
      '<p class="ta-actions">' +
      '<button type="button" class="btn" id="ta-export-json">Download text-annotations.json</button> ' +
      '<button type="button" class="btn btn-secondary" id="ta-export-csv">Download text-annotations.csv</button>' +
      "</p>" +
      "</section>"
    );
  }

  function bindEvents() {
    root.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    const up = document.getElementById("ta-upload");
    if (up) up.addEventListener("change", onFileUpload);
    const ts = document.getElementById("ta-template-sent");
    if (ts) {
      ts.addEventListener("click", function () {
        Lib.downloadTemplate("sentiment");
      });
    }
    const tn = document.getElementById("ta-template-ner");
    if (tn) {
      tn.addEventListener("click", function () {
        Lib.downloadTemplate("ner");
      });
    }
    const modeEl = document.getElementById("ta-upload-mode");
    if (modeEl) {
      modeEl.addEventListener("change", function () {
        uploadMode = modeEl.value;
      });
    }
    const apply = document.getElementById("ta-apply-upload");
    if (apply) {
      apply.addEventListener("click", function () {
        const idEl = document.getElementById("ta-map-id");
        const textEl = document.getElementById("ta-map-text");
        const modeSel = document.getElementById("ta-upload-mode");
        mapping = {
          id: idEl && idEl.value ? idEl.value : null,
          text: textEl && textEl.value ? textEl.value : null,
        };
        if (modeSel) uploadMode = modeSel.value;
        applyUpload();
      });
    }
    root.querySelectorAll("[data-item-index]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeIndex = Number(btn.getAttribute("data-item-index"));
        persist();
        renderAll();
      });
    });
    const prev = document.getElementById("ta-prev");
    if (prev) prev.addEventListener("click", function () {
      go(-1);
    });
    const next = document.getElementById("ta-next");
    if (next) next.addEventListener("click", function () {
      go(1);
    });
    root.querySelectorAll("[data-sent-label]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setSentiment(btn.getAttribute("data-sent-label"));
      });
    });
    root.querySelectorAll("[data-ner-label]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeLabel = btn.getAttribute("data-ner-label");
        persist();
        renderAll();
      });
    });
    const addSpan = document.getElementById("ta-add-span");
    if (addSpan) addSpan.addEventListener("click", onAddSpanFromSelection);
    root.querySelectorAll("[data-span-id]").forEach(function (btn) {
      if (!btn.classList.contains("ta-span-del")) return;
      btn.addEventListener("click", function () {
        removeSpan(btn.getAttribute("data-span-id"));
      });
    });
    root.querySelectorAll("[data-goto-id]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-goto-id");
        const idx = session.items.findIndex(function (it) {
          return it.id === id;
        });
        if (idx >= 0) {
          activeIndex = idx;
          persist();
          renderAll();
        }
      });
    });
    const ej = document.getElementById("ta-export-json");
    if (ej) ej.addEventListener("click", exportJson);
    const ec = document.getElementById("ta-export-csv");
    if (ec) ec.addEventListener("click", exportCsv);
  }

  function onKey(ev) {
    if (!session) return;
    const tag = (ev.target && ev.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if (ev.key === "Enter" && session.mode === "ner") {
      ev.preventDefault();
      onAddSpanFromSelection();
      return;
    }
    if (ev.key === "ArrowRight" && !ev.metaKey && !ev.ctrlKey) {
      go(1);
    } else if (ev.key === "ArrowLeft" && !ev.metaKey && !ev.ctrlKey) {
      go(-1);
    }
  }

  document.addEventListener("keydown", onKey);

  if (!restore()) {
    if (window.TextAnnPresets && window.TextAnnPresets["sentiment-reviews"]) {
      loadPreset("sentiment-reviews");
      return;
    }
  } else {
    showMessage("Restored previous session from this browser.", "ok");
  }
  renderAll();
})();
