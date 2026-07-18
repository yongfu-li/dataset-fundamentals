/* Synthetic text generator — Chapter 10 §10.5 (classic script, file:// safe). */
(function () {
  "use strict";
  const Lib = window.SynthTextLib;
  if (!Lib) {
    console.error("SynthTextLib missing. Check lib/*.js load order.");
    return;
  }

  let session = null;
  let method = "template";
  let count = 12;
  let seed = 42;
  let noiseIntensity = 0.55;
  let result = null;
  let message = { text: "", kind: "" };

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

  function runGenerate() {
    if (!session) return;
    try {
      result = Lib.generate(session, {
        method: method,
        count: count,
        seed: seed,
        noiseIntensity: noiseIntensity,
      });
      showMessage(
        "Generated " + result.items.length + " lines (" + result.method + ", seed " + result.seed + ").",
        "ok"
      );
    } catch (err) {
      result = null;
      showMessage(err.message || String(err), "error");
    }
  }

  function loadPreset(id) {
    try {
      session = Lib.loadPreset(id);
      method = session.method || "template";
      result = null;
      runGenerate();
      showMessage("Loaded '" + session.title + "'.", "ok");
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
        session = Lib.parseUpload(String(reader.result), file.name);
        method = "noise";
        result = null;
        runGenerate();
        showMessage(
          "Loaded " + session.seedTexts.length + " seed lines from '" + file.name + "'.",
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

  const root = document.getElementById("stx-root");
  if (!root) return;

  function renderIntro() {
    return (
      '<section class="stx-intro">' +
      "<h1>Synthetic text generator</h1>" +
      '<p class="lead">Create synthetic text with templates, noise, or a tiny Markov model—no training and no LLM API. Preview samples, then export texts plus a generation recipe.</p>' +
      '<p class="stx-cross">Book: Chapter 10 §10.5 (LLM synthesis concepts) · pairs with ' +
      '<a href="../text-annotation/index.html">text annotation</a> for labeling exports.</p>' +
      "</section>"
    );
  }

  function renderGuide() {
    return (
      '<details class="stx-panel stx-guide" open>' +
      "<summary>Practical guide</summary>" +
      "<ol>" +
      "<li><strong>Learn</strong> — try <code>review-templates</code>, then <code>seed-reviews</code> with noise or Markov.</li>" +
      "<li><strong>Apply</strong> — upload your own seed CSV/JSON (<code>text</code> column) for noise/Markov.</li>" +
      "<li><strong>See</strong> — highlighted slots show what was filled; uniqueness flags exact duplicates.</li>" +
      "<li><strong>Export</strong> — <code>synthetic-texts.*</code> + <code>generation-recipe.*</code> for the audit trail.</li>" +
      "</ol>" +
      '<p class="stx-hint">Outputs are pedagogical stand-ins for LLM-generated text. Validate fidelity and privacy before any real training mix.</p>' +
      "</details>"
    );
  }

  function renderPresets() {
    const presets = Lib.listPresets();
    const cards = presets
      .map(function (p) {
        const active = session && session.id === p.id ? " is-active" : "";
        return (
          '<button type="button" class="stx-preset' +
          active +
          '" data-preset="' +
          esc(p.id) +
          '">' +
          '<span class="stx-meta">' +
          esc(p.method) +
          "</span>" +
          "<strong>" +
          esc(p.title) +
          "</strong>" +
          "<span>" +
          esc(p.description) +
          "</span>" +
          "</button>"
        );
      })
      .join("");
    return (
      '<section class="stx-panel">' +
      "<h2>1 · Preset or upload</h2>" +
      '<div class="stx-presets">' +
      cards +
      "</div>" +
      '<label class="stx-upload">Upload seed CSV/JSON (for seed-based methods)' +
      '<input type="file" id="stx-file" accept=".csv,.json,text/csv,application/json" />' +
      "</label>" +
      (message.text
        ? '<p class="stx-msg stx-msg-' +
          esc(message.kind) +
          '" role="status">' +
          esc(message.text) +
          "</p>"
        : "") +
      "</section>"
    );
  }

  function renderControls() {
    if (!session) return "";
    const methods = Lib.METHODS || [
      ["template", "Template / slot fill"],
      ["noise", "Noise on seeds"],
      ["markov", "Tiny Markov (bigram)"],
    ];
    const opts = methods
      .map(function (pair) {
        const id = pair.id || pair[0];
        const label = pair.label || pair[1];
        return (
          '<option value="' +
          id +
          '"' +
          (method === id ? " selected" : "") +
          ">" +
          label +
          "</option>"
        );
      })
      .join("");
    const seedInfo =
      (session.seedTexts && session.seedTexts.length
        ? session.seedTexts.length + " seeds"
        : "0 seeds") +
      " · " +
      (session.templates && session.templates.length
        ? session.templates.length + " templates"
        : "0 templates");
    const intensityOn =
      method === "noise" || method === "eda" || method === "char_noise";
    return (
      '<section class="stx-panel">' +
      "<h2>2 · Generation controls</h2>" +
      '<p class="stx-hint">' +
      esc(session.title) +
      " · " +
      esc(seedInfo) +
      "</p>" +
      '<div class="stx-grid">' +
      "<label>Method<select id=\"stx-method\">" +
      opts +
      "</select></label>" +
      '<label>Count<input id="stx-count" type="number" min="1" max="100" value="' +
      esc(count) +
      '" /></label>' +
      '<label>Seed<input id="stx-seed" type="number" value="' +
      esc(seed) +
      '" /></label>' +
      '<label>Intensity<input id="stx-noise" type="range" min="0" max="1" step="0.05" value="' +
      esc(noiseIntensity) +
      '" ' +
      (intensityOn ? "" : "disabled") +
      " /><span id=\"stx-noise-val\">" +
      esc(noiseIntensity) +
      "</span></label>" +
      "</div>" +
      '<button type="button" class="btn" id="stx-run">Generate</button>' +
      '<p class="stx-teach">' +
      esc(session.teachingFocus || "") +
      "</p>" +
      "</section>"
    );
  }

  function renderParts(parts) {
    if (!parts || !parts.length) return "";
    return parts
      .map(function (p) {
        if (p.type === "slot") {
          return (
            '<mark class="stx-slot" title="' +
            esc(p.slot) +
            '">' +
            esc(p.value) +
            "</mark>"
          );
        }
        return esc(p.value);
      })
      .join("");
  }

  function renderPreview() {
    if (!result) return "";
    const s = result.stats;
    const list = result.items
      .map(function (it) {
        return (
          '<li class="stx-item">' +
          '<span class="stx-id">' +
          esc(it.id) +
          "</span>" +
          '<div class="stx-text">' +
          renderParts(it.parts) +
          "</div>" +
          (it.template
            ? '<div class="stx-meta-line">template: <code>' + esc(it.template) + "</code></div>"
            : "") +
          (it.seed
            ? '<div class="stx-meta-line">from seed: <code>' + esc(it.seed) + "</code></div>"
            : "") +
          (it.seedA
            ? '<div class="stx-meta-line">mix A: <code>' +
              esc(it.seedA) +
              "</code> · B: <code>" +
              esc(it.seedB) +
              "</code></div>"
            : "") +
          (it.ops && it.ops.length
            ? '<div class="stx-meta-line">ops: <code>' +
              esc(
                it.ops
                  .map(function (o) {
                    return o.op;
                  })
                  .join(", ")
              ) +
              "</code></div>"
            : "") +
          "</li>"
        );
      })
      .join("");
    return (
      '<section class="stx-panel" data-figure="Synthetic text samples">' +
      "<h2>3 · Preview</h2>" +
      '<div class="stx-stats">' +
      "<span><strong>" +
      s.n +
      "</strong> lines</span>" +
      "<span>Unique <strong>" +
      pct(s.uniqueRate) +
      "</strong></span>" +
      "<span>Exact dupes <strong>" +
      s.duplicateExact +
      "</strong></span>" +
      "<span>Method <code>" +
      esc(result.method) +
      "</code></span>" +
      "</div>" +
      '<ul class="stx-list">' +
      list +
      "</ul>" +
      '<ul class="stx-caveats">' +
      result.caveats
        .map(function (c) {
          return "<li>" + esc(c) + "</li>";
        })
        .join("") +
      "</ul>" +
      "</section>"
    );
  }

  function renderExport() {
    if (!result) return "";
    return (
      '<section class="stx-panel">' +
      "<h2>4 · Export</h2>" +
      '<div class="deck-links">' +
      '<button type="button" class="btn" id="stx-ex-json">Download synthetic-texts.json</button>' +
      '<button type="button" class="btn btn-secondary" id="stx-ex-csv">Download synthetic-texts.csv</button>' +
      '<button type="button" class="btn btn-secondary" id="stx-ex-recipe">Download generation-recipe.json</button>' +
      '<button type="button" class="btn btn-ghost" id="stx-ex-recipe-md">Download generation-recipe.md</button>' +
      '<a class="btn btn-ghost" href="../text-annotation/index.html">Label with text annotation →</a>' +
      "</div>" +
      '<p class="stx-hint">Keep the recipe with the texts so others can reproduce the draw (same seed + method).</p>' +
      "</section>"
    );
  }

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderGuide() +
      renderPresets() +
      renderControls() +
      renderPreview() +
      renderExport();
    bind();
  }

  function syncFromForm() {
    const m = document.getElementById("stx-method");
    if (m) method = m.value;
    const c = document.getElementById("stx-count");
    if (c) count = Math.max(1, Math.min(100, Number(c.value) || 12));
    const s = document.getElementById("stx-seed");
    if (s) seed = Number(s.value) || 0;
    const n = document.getElementById("stx-noise");
    if (n) noiseIntensity = Number(n.value);
  }

  function bind() {
    root.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        loadPreset(btn.getAttribute("data-preset"));
      });
    });
    const file = document.getElementById("stx-file");
    if (file) file.addEventListener("change", onFileUpload);
    const methodEl = document.getElementById("stx-method");
    if (methodEl) {
      methodEl.addEventListener("change", function () {
        syncFromForm();
        renderAll();
      });
    }
    const noiseEl = document.getElementById("stx-noise");
    if (noiseEl) {
      noiseEl.addEventListener("input", function () {
        const val = document.getElementById("stx-noise-val");
        if (val) val.textContent = noiseEl.value;
        noiseIntensity = Number(noiseEl.value);
      });
    }
    const run = document.getElementById("stx-run");
    if (run) {
      run.addEventListener("click", function () {
        syncFromForm();
        runGenerate();
        renderAll();
      });
    }
    const exJson = document.getElementById("stx-ex-json");
    if (exJson) {
      exJson.addEventListener("click", function () {
        Lib.downloadTextsJson(session, result);
      });
    }
    const exCsv = document.getElementById("stx-ex-csv");
    if (exCsv) {
      exCsv.addEventListener("click", function () {
        Lib.downloadTextsCsv(result);
      });
    }
    const exRecipe = document.getElementById("stx-ex-recipe");
    if (exRecipe) {
      exRecipe.addEventListener("click", function () {
        Lib.downloadRecipeJson(Lib.buildRecipe(session, result));
      });
    }
    const exRecipeMd = document.getElementById("stx-ex-recipe-md");
    if (exRecipeMd) {
      exRecipeMd.addEventListener("click", function () {
        Lib.downloadRecipeMd(Lib.buildRecipe(session, result));
      });
    }
  }

  loadPreset("review-templates");
})();
