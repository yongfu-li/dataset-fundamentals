/* Image augmentation lab — Chapter 10 (classic script, file:// safe). */
(function () {
  "use strict";
  const Lib = window.ImgAugLib;
  const Presets = window.ImgAugPresets;
  if (!Lib || !Presets) {
    console.error("ImgAugLib / ImgAugPresets missing.");
    return;
  }

  let presetList = [];
  let session = null;
  let method = "random_pipeline";
  let count = 4;
  let seed = 42;
  let intensity = 0.45;
  let result = null;
  let message = { text: "", kind: "" };
  let ready = false;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function runAugment() {
    if (!session || !session.canvas) return;
    try {
      result = Lib.augment(session.canvas, {
        method: method,
        count: count,
        seed: seed,
        intensity: intensity,
      });
      showMessage(
        "Generated " + result.items.length + " variants (" + result.method + ", seed " + result.seed + ").",
        "ok"
      );
    } catch (err) {
      result = null;
      showMessage(err.message || String(err), "error");
    }
  }

  function selectPreset(id) {
    const found = presetList.filter(function (p) {
      return p.id === id;
    })[0];
    if (!found) {
      showMessage("Unknown preset: " + id, "error");
      renderAll();
      return;
    }
    session = found;
    result = null;
    runAugment();
    showMessage("Loaded '" + session.title + "'.", "ok");
    renderAll();
  }

  function onFileUpload(ev) {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showMessage("Image exceeds 5 MB limit.", "error");
      renderAll();
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      const img = new Image();
      img.onload = function () {
        const maxSide = 480;
        let w = img.width;
        let h = img.height;
        const scale = Math.min(1, maxSide / Math.max(w, h));
        w = Math.max(1, Math.round(w * scale));
        h = Math.max(1, Math.round(h * scale));
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        session = {
          id: "upload",
          title: file.name,
          description: "Uploaded image",
          bookAnchors: ["§10.6", "eg:10.16"],
          canvas: canvas,
          dataUrl: canvas.toDataURL("image/png"),
          source: file.name,
        };
        result = null;
        runAugment();
        showMessage("Loaded upload (" + w + "×" + h + ").", "ok");
        renderAll();
      };
      img.onerror = function () {
        showMessage("Could not decode image.", "error");
        renderAll();
      };
      img.src = String(reader.result);
    };
    reader.onerror = function () {
      showMessage("Could not read file.", "error");
      renderAll();
    };
    reader.readAsDataURL(file);
    ev.target.value = "";
  }

  const root = document.getElementById("ima-root");
  if (!root) return;

  function renderIntro() {
    return (
      '<section class="ima-intro">' +
      "<h1>Image augmentation lab</h1>" +
      '<p class="lead">Create new <em>views</em> of the same image with flips, crops, color jitter, and noise—no generative model. Export variants plus a reproducible recipe.</p>' +
      '<p class="ima-cross">Book: Chapter 10 · <code>eg:10.16</code> · pairs with ' +
      '<a href="../image-annotation/index.html">image annotation</a> and ' +
      '<a href="../text-augmentation/index.html">text augmentation</a>.</p>' +
      "</section>"
    );
  }

  function renderGuide() {
    return (
      '<details class="ima-panel ima-guide" open>' +
      "<summary>Practical guide</summary>" +
      "<ol>" +
      "<li><strong>Learn</strong> — try street / product / warehouse scenes, then <code>random pipeline</code>.</li>" +
      "<li><strong>Apply</strong> — upload your own PNG/JPEG (max 480px side).</li>" +
      "<li><strong>See</strong> — original vs augmented grid.</li>" +
      "<li><strong>Export</strong> — ZIP of PNGs + <code>augmentation-recipe.*</code>.</li>" +
      "</ol>" +
      '<p class="ima-hint">Scenes are drawn teaching photos (not camera RAW). Augment training images only—keep the test set clean.</p>' +
      "</details>"
    );
  }

  function renderPresets() {
    if (!ready) {
      return (
        '<section class="ima-panel"><h2>1 · Preset or upload</h2><p class="ima-hint">Loading scenes…</p></section>'
      );
    }
    const cards = presetList
      .map(function (p) {
        const active = session && session.id === p.id ? " is-active" : "";
        return (
          '<button type="button" class="ima-preset' +
          active +
          '" data-preset="' +
          esc(p.id) +
          '">' +
          '<img src="' +
          esc(p.dataUrl) +
          '" alt="" width="140" height="93" />' +
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
      '<section class="ima-panel">' +
      "<h2>1 · Preset or upload</h2>" +
      '<div class="ima-presets">' +
      cards +
      "</div>" +
      '<label class="ima-upload">Upload PNG / JPEG / WebP' +
      '<input type="file" id="ima-file" accept="image/png,image/jpeg,image/webp" />' +
      "</label>" +
      (message.text
        ? '<p class="ima-msg ima-msg-' + esc(message.kind) + '" role="status">' + esc(message.text) + "</p>"
        : "") +
      "</section>"
    );
  }

  function renderControls() {
    if (!session) return "";
    const opts = (Lib.METHODS || [])
      .map(function (m) {
        return (
          '<option value="' +
          esc(m.id) +
          '"' +
          (method === m.id ? " selected" : "") +
          ">" +
          esc(m.label) +
          "</option>"
        );
      })
      .join("");
    const intensityOn = Lib.intensityApplies(method);
    return (
      '<section class="ima-panel">' +
      "<h2>2 · Transforms</h2>" +
      '<div class="ima-orig"><img src="' +
      esc(session.dataUrl) +
      '" alt="Original" /><figcaption>Original · ' +
      esc(session.title) +
      "</figcaption></div>" +
      '<div class="ima-grid">' +
      '<label>Method<select id="ima-method">' +
      opts +
      "</select></label>" +
      '<label>Count<input id="ima-count" type="number" min="1" max="16" value="' +
      esc(count) +
      '" /></label>' +
      '<label>Seed<input id="ima-seed" type="number" value="' +
      esc(seed) +
      '" /></label>' +
      '<label>Intensity<input id="ima-intensity" type="range" min="0" max="1" step="0.05" value="' +
      esc(intensity) +
      '" ' +
      (intensityOn ? "" : "disabled") +
      ' /><span id="ima-int-val">' +
      esc(intensity) +
      "</span></label>" +
      "</div>" +
      '<button type="button" class="btn" id="ima-run">Generate</button>' +
      "</section>"
    );
  }

  function renderPreview() {
    if (!result) return "";
    const cards = result.items
      .map(function (it) {
        return (
          '<figure class="ima-card">' +
          '<img src="' +
          esc(it.dataUrl) +
          '" alt="' +
          esc(it.id) +
          '" />' +
          "<figcaption><strong>" +
          esc(it.id) +
          "</strong> · " +
          esc((it.ops || []).join(" → ")) +
          "</figcaption>" +
          "</figure>"
        );
      })
      .join("");
    return (
      '<section class="ima-panel" data-figure="Augmented variants">' +
      "<h2>3 · Preview</h2>" +
      '<div class="ima-gallery">' +
      cards +
      "</div>" +
      '<ul class="ima-caveats">' +
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
      '<section class="ima-panel">' +
      "<h2>4 · Export</h2>" +
      '<div class="deck-links">' +
      '<button type="button" class="btn" id="ima-zip">Download augmented-images.zip</button>' +
      '<button type="button" class="btn btn-secondary" id="ima-recipe">Download augmentation-recipe.json</button>' +
      '<button type="button" class="btn btn-ghost" id="ima-recipe-md">Download augmentation-recipe.md</button>' +
      "</div>" +
      "</section>"
    );
  }

  function renderAll() {
    root.innerHTML =
      renderIntro() + renderGuide() + renderPresets() + renderControls() + renderPreview() + renderExport();
    bind();
  }

  function syncFromForm() {
    const m = document.getElementById("ima-method");
    if (m) method = m.value;
    const c = document.getElementById("ima-count");
    if (c) count = Math.max(1, Math.min(16, Number(c.value) || 4));
    const s = document.getElementById("ima-seed");
    if (s) seed = Number(s.value) || 0;
    const i = document.getElementById("ima-intensity");
    if (i) intensity = Number(i.value);
  }

  function bind() {
    root.querySelectorAll("[data-preset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectPreset(btn.getAttribute("data-preset"));
      });
    });
    const file = document.getElementById("ima-file");
    if (file) file.addEventListener("change", onFileUpload);
    const methodEl = document.getElementById("ima-method");
    if (methodEl) {
      methodEl.addEventListener("change", function () {
        syncFromForm();
        runAugment();
        renderAll();
      });
    }
    const intEl = document.getElementById("ima-intensity");
    if (intEl) {
      intEl.addEventListener("input", function () {
        const val = document.getElementById("ima-int-val");
        if (val) val.textContent = intEl.value;
        intensity = Number(intEl.value);
      });
    }
    const run = document.getElementById("ima-run");
    if (run) {
      run.addEventListener("click", function () {
        syncFromForm();
        runAugment();
        renderAll();
      });
    }
    const zip = document.getElementById("ima-zip");
    if (zip) {
      zip.addEventListener("click", function () {
        Lib.downloadZip(result, session);
      });
    }
    const recipe = document.getElementById("ima-recipe");
    if (recipe) {
      recipe.addEventListener("click", function () {
        Lib.downloadRecipeJson(Lib.buildRecipe(session, result));
      });
    }
    const recipeMd = document.getElementById("ima-recipe-md");
    if (recipeMd) {
      recipeMd.addEventListener("click", function () {
        Lib.downloadRecipeMd(Lib.buildRecipe(session, result));
      });
    }
  }

  showMessage("Loading realistic scenes…", "ok");
  renderAll();
  Presets.loadAll(function (err, list) {
    if (err || !list || !list.length) {
      showMessage(err ? err.message : "No presets loaded.", "error");
      ready = true;
      renderAll();
      return;
    }
    presetList = list;
    ready = true;
    selectPreset(list[0].id);
  });
})();
