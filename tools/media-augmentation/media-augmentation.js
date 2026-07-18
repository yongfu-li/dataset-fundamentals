/* Media augmentation lab — audio + video tabs (Chapter 10). */
(function () {
  "use strict";
  const Lib = window.MediaAugLib;
  if (!Lib) {
    console.error("MediaAugLib missing.");
    return;
  }

  let tab = "audio";
  let audioPresets = Lib.makeAudioPresets();
  let videoPresets = Lib.makeVideoPresets();
  let audioSession = audioPresets[0];
  let videoSession = videoPresets[0];
  let audioMethod = "random_pipeline";
  let videoMethod = "random_pipeline";
  let count = 3;
  let seed = 42;
  let intensity = 0.45;
  let audioResult = null;
  let videoResult = null;
  let message = { text: "", kind: "" };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
  }

  function runAudio() {
    if (!audioSession) return;
    try {
      audioResult = Lib.augmentAudio(audioSession.samples, {
        method: audioMethod,
        count: count,
        seed: seed,
        intensity: intensity,
      });
      showMessage("Audio: " + audioResult.items.length + " variants (" + audioResult.method + ").", "ok");
    } catch (err) {
      audioResult = null;
      showMessage(err.message || String(err), "error");
    }
  }

  function runVideo() {
    if (!videoSession) return;
    try {
      videoResult = Lib.augmentVideo(videoSession.frames, {
        method: videoMethod,
        count: count,
        seed: seed,
        intensity: intensity,
      });
      showMessage("Video: " + videoResult.items.length + " variants (" + videoResult.method + ").", "ok");
    } catch (err) {
      videoResult = null;
      showMessage(err.message || String(err), "error");
    }
  }

  function runCurrent() {
    if (tab === "audio") runAudio();
    else runVideo();
  }

  const root = document.getElementById("media-root");
  if (!root) return;

  function renderIntro() {
    return (
      '<section class="med-intro">' +
      "<h1>Media augmentation lab</h1>" +
      '<p class="lead">Augment <strong>audio</strong> clips and short <strong>video</strong> frame strips in one place—gain, reverse, pitch, frame flip, drop, and more. No generative models.</p>' +
      '<p class="med-cross">Book: Chapter 10 §10.1 cross-modal fidelity · pairs with ' +
      '<a href="../text-augmentation/index.html">text</a> and ' +
      '<a href="../image-augmentation/index.html">image</a> augmentation.</p>' +
      '<p class="med-hint">Time series, geospatial, and graphs need different operators—even when plotted as images. This lab is for audio &amp; video media only.</p>' +
      "</section>"
    );
  }

  function renderTabs() {
    return (
      '<div class="med-tabs" role="tablist">' +
      '<button type="button" class="med-tab' +
      (tab === "audio" ? " is-active" : "") +
      '" data-tab="audio" role="tab">Audio</button>' +
      '<button type="button" class="med-tab' +
      (tab === "video" ? " is-active" : "") +
      '" data-tab="video" role="tab">Video</button>' +
      "</div>"
    );
  }

  function renderGuide() {
    return (
      '<details class="med-panel" open>' +
      "<summary>Practical guide</summary>" +
      "<ol>" +
      "<li><strong>Audio</strong> — pick a tone preset; try reverse, pitch, noise; play &amp; export WAV ZIP.</li>" +
      "<li><strong>Video</strong> — pick a frame-strip preset; try reverse / frame drop / flip; export PNG frames ZIP.</li>" +
      "<li><strong>Export</strong> — always keep <code>augmentation-recipe.*</code> with the media.</li>" +
      "</ol>" +
      "</details>"
    );
  }

  function renderAudioPresets() {
    const cards = audioPresets
      .map(function (p) {
        const active = audioSession && audioSession.id === p.id ? " is-active" : "";
        return (
          '<button type="button" class="med-preset' +
          active +
          '" data-apreset="' +
          esc(p.id) +
          '"><strong>' +
          esc(p.title) +
          "</strong><span>" +
          esc(p.description) +
          "</span></button>"
        );
      })
      .join("");
    return (
      '<section class="med-panel"><h2>1 · Audio preset</h2><div class="med-presets">' +
      cards +
      "</div>" +
      '<button type="button" class="btn btn-secondary" id="med-play-orig">Play original</button></section>'
    );
  }

  function renderVideoPresets() {
    const cards = videoPresets
      .map(function (p) {
        const active = videoSession && videoSession.id === p.id ? " is-active" : "";
        const thumb = p.frames[0] ? p.frames[0].toDataURL("image/png") : "";
        return (
          '<button type="button" class="med-preset' +
          active +
          '" data-vpreset="' +
          esc(p.id) +
          '"><img src="' +
          esc(thumb) +
          '" alt="" /><strong>' +
          esc(p.title) +
          "</strong><span>" +
          esc(p.description) +
          "</span></button>"
        );
      })
      .join("");
    return (
      '<section class="med-panel"><h2>1 · Video preset (frame strip)</h2><div class="med-presets">' +
      cards +
      "</div></section>"
    );
  }

  function renderControls() {
    const methods = tab === "audio" ? Lib.AUDIO_METHODS : Lib.VIDEO_METHODS;
    const cur = tab === "audio" ? audioMethod : videoMethod;
    const opts = methods
      .map(function (m) {
        return (
          '<option value="' +
          esc(m.id) +
          '"' +
          (cur === m.id ? " selected" : "") +
          ">" +
          esc(m.label) +
          "</option>"
        );
      })
      .join("");
    return (
      '<section class="med-panel">' +
      "<h2>2 · Transforms</h2>" +
      '<div class="med-grid">' +
      '<label>Method<select id="med-method">' +
      opts +
      "</select></label>" +
      '<label>Count<input id="med-count" type="number" min="1" max="8" value="' +
      esc(count) +
      '" /></label>' +
      '<label>Seed<input id="med-seed" type="number" value="' +
      esc(seed) +
      '" /></label>' +
      '<label>Intensity<input id="med-intensity" type="range" min="0" max="1" step="0.05" value="' +
      esc(intensity) +
      '" /><span id="med-int-val">' +
      esc(intensity) +
      "</span></label>" +
      "</div>" +
      '<button type="button" class="btn" id="med-run">Generate</button>' +
      (message.text
        ? '<p class="med-msg med-msg-' + esc(message.kind) + '" role="status">' + esc(message.text) + "</p>"
        : "") +
      "</section>"
    );
  }

  function renderAudioPreview() {
    if (!audioResult) return "";
    const blocks = audioResult.items
      .map(function (it, idx) {
        return (
          '<div class="med-variant">' +
          "<strong>" +
          esc(it.id) +
          "</strong> · " +
          esc(it.ops.join(" → ")) +
          '<canvas class="med-wave" data-wave="' +
          idx +
          '" width="420" height="64"></canvas>' +
          '<button type="button" class="btn btn-secondary" data-play="' +
          idx +
          '">Play</button>' +
          "</div>"
        );
      })
      .join("");
    return (
      '<section class="med-panel" data-figure="Audio variants"><h2>3 · Preview</h2>' +
      blocks +
      "<ul class=\"med-caveats\">" +
      audioResult.caveats.map(function (c) {
        return "<li>" + esc(c) + "</li>";
      }).join("") +
      "</ul></section>"
    );
  }

  function renderVideoPreview() {
    if (!videoResult) return "";
    const blocks = videoResult.items
      .map(function (it) {
        const strip = (it.thumbs || [])
          .map(function (u) {
            return '<img src="' + esc(u) + '" alt="" />';
          })
          .join("");
        return (
          '<div class="med-variant"><strong>' +
          esc(it.id) +
          "</strong> · " +
          esc(it.ops.join(" → ")) +
          '<div class="med-strip">' +
          strip +
          "</div></div>"
        );
      })
      .join("");
    return (
      '<section class="med-panel" data-figure="Video frame strips"><h2>3 · Preview</h2>' +
      blocks +
      "<ul class=\"med-caveats\">" +
      videoResult.caveats.map(function (c) {
        return "<li>" + esc(c) + "</li>";
      }).join("") +
      "</ul></section>"
    );
  }

  function renderExport() {
    const has = tab === "audio" ? audioResult : videoResult;
    if (!has) return "";
    return (
      '<section class="med-panel"><h2>4 · Export</h2><div class="deck-links">' +
      (tab === "audio"
        ? '<button type="button" class="btn" id="med-zip">Download augmented-audio.zip</button>'
        : '<button type="button" class="btn" id="med-zip">Download augmented-video-frames.zip</button>') +
      '<button type="button" class="btn btn-secondary" id="med-recipe">Download augmentation-recipe.json</button>' +
      '<button type="button" class="btn btn-ghost" id="med-recipe-md">Download augmentation-recipe.md</button>' +
      "</div></section>"
    );
  }

  function renderAll() {
    root.innerHTML =
      renderIntro() +
      renderTabs() +
      renderGuide() +
      (tab === "audio" ? renderAudioPresets() : renderVideoPresets()) +
      renderControls() +
      (tab === "audio" ? renderAudioPreview() : renderVideoPreview()) +
      renderExport();
    bind();
    if (tab === "audio" && audioResult) {
      root.querySelectorAll("[data-wave]").forEach(function (cv) {
        const idx = Number(cv.getAttribute("data-wave"));
        Lib.drawWaveform(cv, audioResult.items[idx].samples);
      });
    }
  }

  function syncFromForm() {
    const m = document.getElementById("med-method");
    if (m) {
      if (tab === "audio") audioMethod = m.value;
      else videoMethod = m.value;
    }
    const c = document.getElementById("med-count");
    if (c) count = Math.max(1, Math.min(8, Number(c.value) || 3));
    const s = document.getElementById("med-seed");
    if (s) seed = Number(s.value) || 0;
    const i = document.getElementById("med-intensity");
    if (i) intensity = Number(i.value);
  }

  function bind() {
    root.querySelectorAll("[data-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        tab = btn.getAttribute("data-tab");
        runCurrent();
        renderAll();
      });
    });
    root.querySelectorAll("[data-apreset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-apreset");
        audioSession = audioPresets.filter(function (p) {
          return p.id === id;
        })[0];
        runAudio();
        renderAll();
      });
    });
    root.querySelectorAll("[data-vpreset]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-vpreset");
        videoSession = videoPresets.filter(function (p) {
          return p.id === id;
        })[0];
        runVideo();
        renderAll();
      });
    });
    const intEl = document.getElementById("med-intensity");
    if (intEl) {
      intEl.addEventListener("input", function () {
        const val = document.getElementById("med-int-val");
        if (val) val.textContent = intEl.value;
        intensity = Number(intEl.value);
      });
    }
    const methodEl = document.getElementById("med-method");
    if (methodEl) {
      methodEl.addEventListener("change", function () {
        syncFromForm();
        runCurrent();
        renderAll();
      });
    }
    const run = document.getElementById("med-run");
    if (run) {
      run.addEventListener("click", function () {
        syncFromForm();
        runCurrent();
        renderAll();
      });
    }
    const playOrig = document.getElementById("med-play-orig");
    if (playOrig) {
      playOrig.addEventListener("click", function () {
        try {
          Lib.playSamples(audioSession.samples, Lib.AUDIO_SR);
        } catch (err) {
          showMessage(err.message || String(err), "error");
          renderAll();
        }
      });
    }
    root.querySelectorAll("[data-play]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const idx = Number(btn.getAttribute("data-play"));
        try {
          Lib.playSamples(audioResult.items[idx].samples, audioResult.sampleRate);
        } catch (err) {
          showMessage(err.message || String(err), "error");
          renderAll();
        }
      });
    });
    const zip = document.getElementById("med-zip");
    if (zip) {
      zip.addEventListener("click", function () {
        if (tab === "audio") Lib.downloadAudioZip(audioSession, audioResult);
        else Lib.downloadVideoZip(videoSession, videoResult);
      });
    }
    const recipe = document.getElementById("med-recipe");
    if (recipe) {
      recipe.addEventListener("click", function () {
        const meta = tab === "audio" ? audioSession : videoSession;
        const res = tab === "audio" ? audioResult : videoResult;
        Lib.downloadRecipe(meta, res);
      });
    }
    const recipeMd = document.getElementById("med-recipe-md");
    if (recipeMd) {
      recipeMd.addEventListener("click", function () {
        const meta = tab === "audio" ? audioSession : videoSession;
        const res = tab === "audio" ? audioResult : videoResult;
        Lib.downloadRecipeMd(meta, res);
      });
    }
  }

  runAudio();
  runVideo();
  renderAll();
})();
