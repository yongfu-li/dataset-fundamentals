/* Media augmentation lab — audio + video tabs + analyze panel (Chapter 10). */
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
  let audioSession = audioPresets.filter(function (p) {
    return p.id === "music";
  })[0] || audioPresets[0];
  let videoSession = videoPresets[0];
  let audioMethod = "random_pipeline";
  let videoMethod = "random_pipeline";
  let count = 3;
  let seed = 42;
  let intensity = 0.45;
  let audioResult = null;
  let videoResult = null;
  let analyzeIdx = 0;
  let message = { text: "", kind: "" };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showMessage(text, kind) {
    message = { text: text, kind: kind || "ok" };
    const el = root.querySelector(".med-msg");
    if (el) {
      el.className = "med-msg med-msg-" + message.kind;
      el.textContent = message.text;
      el.hidden = !message.text;
    }
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
      if (analyzeIdx >= audioResult.items.length) analyzeIdx = 0;
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
      if (analyzeIdx >= videoResult.items.length) analyzeIdx = 0;
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
      '<p class="lead">Augment <strong>audio</strong> and short <strong>video</strong> strips, then compare fidelity with spectrogram / MFCC / frame-diff views. No generative models.</p>' +
      '<p class="med-cross">Book: Chapter 10 §10.1 cross-modal fidelity · pairs with ' +
      '<a href="../text-augmentation/index.html">text</a> and ' +
      '<a href="../image-augmentation/index.html">image</a> augmentation.</p>' +
      '<p class="med-hint">Music &amp; voice presets are procedural (melody / formants)—not licensed recordings. Time series / geo / graphs need different operators.</p>' +
      '<p class="med-warn"><strong>Browser note:</strong> WebM clip download / ZIP encoding is supported only in <strong>Chromium-based browsers</strong> (Chrome, Edge, Brave, Opera). Canvas <em>Play clip</em> works more widely; PNG frame export works everywhere.</p>' +
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
      "<li><strong>Audio</strong> — try <em>Music</em> or <em>Synthetic voice</em>; pitch / reverse; inspect spectrogram &amp; MFCC.</li>" +
      "<li><strong>Video</strong> — try street / warehouse / parking; <em>Play clip</em> on each variant; export WebM + PNG ZIP (<strong>WebM: Chromium browsers only</strong>).</li>" +
      "<li><strong>Export</strong> — keep <code>augmentation-recipe.*</code> with the media ZIP.</li>" +
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
      "</div>" +
      '<div class="med-clip-box">' +
      '<canvas id="med-v-play-orig" class="med-clip" width="320" height="200"></canvas>' +
      '<div class="med-clip-actions">' +
      '<button type="button" class="btn btn-secondary" id="med-v-play-orig-btn">Play original clip</button>' +
      '<button type="button" class="btn btn-ghost" id="med-v-stop">Stop</button>' +
      '<button type="button" class="btn btn-ghost" id="med-v-dl-orig">Download original.webm</button>' +
      "</div></div></section>"
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
      '<p class="med-msg med-msg-' +
      esc(message.kind || "ok") +
      '" role="status"' +
      (message.text ? "" : " hidden") +
      ">" +
      esc(message.text) +
      "</p>" +
      "</section>"
    );
  }

  function variantPicker(result) {
    if (!result || !result.items.length) return "";
    const opts = result.items
      .map(function (it, i) {
        return (
          '<option value="' +
          i +
          '"' +
          (i === analyzeIdx ? " selected" : "") +
          ">" +
          esc(it.id) +
          " · " +
          esc(it.ops.join(" → ")) +
          "</option>"
        );
      })
      .join("");
    return (
      '<label class="med-analyze-pick">Compare variant <select id="med-analyze-idx">' +
      opts +
      "</select></label>"
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
      '<ul class="med-caveats">' +
      audioResult.caveats
        .map(function (c) {
          return "<li>" + esc(c) + "</li>";
        })
        .join("") +
      "</ul></section>"
    );
  }

  function renderAudioAnalyze() {
    if (!audioResult || !audioSession) return "";
    return (
      '<section class="med-panel" data-figure="Audio analysis">' +
      "<h2>4 · Compare · analyze</h2>" +
      variantPicker(audioResult) +
      '<div class="med-compare">' +
      '<div><h3>Original</h3>' +
      '<canvas id="med-a-meter-o" width="400" height="64"></canvas>' +
      '<canvas id="med-a-spec-o" class="med-spec" width="400" height="180"></canvas>' +
      '<p class="med-cap">Spectrogram — Y: frequency (Hz), X: time (s)</p>' +
      '<canvas id="med-a-mel-o" width="400" height="140"></canvas>' +
      '<p class="med-cap">Mel energies — Y: log energy, X: mel bin</p>' +
      '<canvas id="med-a-mfcc-o" width="400" height="140"></canvas>' +
      '<p class="med-cap">MFCC (mean) — Y: coefficient value, X: coeff index</p></div>' +
      '<div><h3>Augmented</h3>' +
      '<canvas id="med-a-meter-a" width="400" height="64"></canvas>' +
      '<canvas id="med-a-spec-a" class="med-spec" width="400" height="180"></canvas>' +
      '<p class="med-cap">Spectrogram — Y: frequency (Hz), X: time (s)</p>' +
      '<canvas id="med-a-mel-a" width="400" height="140"></canvas>' +
      '<p class="med-cap">Mel energies — Y: log energy, X: mel bin</p>' +
      '<canvas id="med-a-mfcc-a" width="400" height="140"></canvas>' +
      '<p class="med-cap">MFCC (mean) — Y: coefficient value, X: coeff index</p></div>' +
      "</div>" +
      '<p class="med-hint">Pitch shifts the spectrogram; noise fills the band; reverse flips time. MFCC bars move when the spectrum shape changes.</p>' +
      "</section>"
    );
  }

  function renderVideoPreview() {
    if (!videoResult) return "";
    const blocks = videoResult.items
      .map(function (it, idx) {
        const strip = (it.thumbs || [])
          .map(function (u) {
            return '<img src="' + esc(u) + '" alt="" />';
          })
          .join("");
        return (
          '<div class="med-variant">' +
          "<strong>" +
          esc(it.id) +
          "</strong> · " +
          esc(it.ops.join(" → ")) +
          '<div class="med-clip-box">' +
          '<canvas class="med-clip" data-vplay-canvas="' +
          idx +
          '" width="320" height="200"></canvas>' +
          '<div class="med-clip-actions">' +
          '<button type="button" class="btn btn-secondary" data-vplay="' +
          idx +
          '">Play clip</button>' +
          '<button type="button" class="btn btn-ghost" data-vdl="' +
          idx +
          '">Download .webm</button>' +
          "</div></div>" +
          '<div class="med-strip">' +
          strip +
          "</div></div>"
        );
      })
      .join("");
    return (
      '<section class="med-panel" data-figure="Video clips"><h2>3 · Preview · playable clips</h2>' +
      '<p class="med-hint">Each variant is its own short clip (not one merged video). Play to see the transform; ZIP includes <code>.webm</code> + PNG frames.</p>' +
      '<p class="med-warn"><strong>WebM support:</strong> Download / ZIP WebM encoding is supported only in <strong>Chromium-based browsers</strong> (Chrome, Edge, Brave, Opera). Firefox and Safari may play the canvas preview but will not encode <code>.webm</code>—use PNG frames from the ZIP instead.</p>' +
      blocks +
      '<ul class="med-caveats">' +
      videoResult.caveats
        .map(function (c) {
          return "<li>" + esc(c) + "</li>";
        })
        .join("") +
      "</ul></section>"
    );
  }

  function renderVideoAnalyze() {
    if (!videoResult || !videoSession) return "";
    return (
      '<section class="med-panel" data-figure="Video analysis">' +
      "<h2>4 · Compare · analyze</h2>" +
      variantPicker(videoResult) +
      '<canvas id="med-v-fid" width="560" height="56"></canvas>' +
      '<div class="med-compare">' +
      '<div><h3>Original</h3>' +
      '<canvas id="med-v-thumb-o" width="320" height="160"></canvas>' +
      '<p class="med-cap">Mid frame preview</p>' +
      '<canvas id="med-v-hist-o" width="320" height="150"></canvas>' +
      '<p class="med-cap">Luma histogram — Y: relative count, X: luma bin</p>' +
      '<canvas id="med-v-rgb-o" width="320" height="150"></canvas>' +
      '<p class="med-cap">RGB channel histograms</p>' +
      '<canvas id="med-v-diff-o" class="med-spec" width="320" height="160"></canvas>' +
      '<p class="med-cap">Frame-diff heat — mean |Δ| over time</p>' +
      '<canvas id="med-v-flow-o" class="med-spec" width="320" height="160"></canvas>' +
      '<p class="med-cap">Flow lite — first → mid (arrows = block motion)</p>' +
      '<canvas id="med-v-energy-o" width="320" height="150"></canvas>' +
      '<p class="med-cap">Temporal motion energy per frame pair</p></div>' +
      '<div><h3>Augmented</h3>' +
      '<canvas id="med-v-thumb-a" width="320" height="160"></canvas>' +
      '<p class="med-cap">Mid frame preview</p>' +
      '<canvas id="med-v-hist-a" width="320" height="150"></canvas>' +
      '<p class="med-cap">Luma histogram — Y: relative count, X: luma bin</p>' +
      '<canvas id="med-v-rgb-a" width="320" height="150"></canvas>' +
      '<p class="med-cap">RGB channel histograms</p>' +
      '<canvas id="med-v-diff-a" class="med-spec" width="320" height="160"></canvas>' +
      '<p class="med-cap">Frame-diff heat — mean |Δ| over time</p>' +
      '<canvas id="med-v-flow-a" class="med-spec" width="320" height="160"></canvas>' +
      '<p class="med-cap">Flow lite — first → mid (arrows = block motion)</p>' +
      '<canvas id="med-v-energy-a" width="320" height="150"></canvas>' +
      '<p class="med-cap">Temporal motion energy per frame pair</p></div>' +
      "</div>" +
      '<canvas id="med-v-curves" width="560" height="160"></canvas>' +
      '<p class="med-cap">Per-frame SSIM (green) and scaled PSNR (amber) vs original</p>' +
      '<p class="med-hint">Reverse / drop change frame-diff, flow, and temporal energy; brightness / noise reshape histograms and drop PSNR/SSIM.</p>' +
      "</section>"
    );
  }

  function renderExport() {
    const has = tab === "audio" ? audioResult : videoResult;
    if (!has) return "";
    return (
      '<section class="med-panel"><h2>5 · Export</h2><div class="deck-links">' +
      (tab === "audio"
        ? '<button type="button" class="btn" id="med-zip">Download augmented-audio.zip</button>'
        : '<button type="button" class="btn" id="med-zip">Download augmented-video.zip (WebM + PNG)</button>') +
      '<button type="button" class="btn btn-secondary" id="med-recipe">Download augmentation-recipe.json</button>' +
      '<button type="button" class="btn btn-ghost" id="med-recipe-md">Download augmentation-recipe.md</button>' +
      "</div>" +
      (tab === "video"
        ? '<p class="med-warn">WebM clips in the ZIP require a <strong>Chromium-based browser</strong>. PNG frame strips are included for all browsers.</p>'
        : "") +
      "</section>"
    );
  }

  function paintAudioAnalyze() {
    if (!audioResult || !audioSession) return;
    const orig = audioSession.samples;
    const aug = audioResult.items[analyzeIdx].samples;
    const mo = Lib.audioMeters(orig);
    const ma = Lib.audioMeters(aug);
    const el = function (id) {
      return document.getElementById(id);
    };
    if (el("med-a-meter-o")) Lib.drawMeters(el("med-a-meter-o"), mo);
    if (el("med-a-meter-a")) Lib.drawMeters(el("med-a-meter-a"), ma);
    if (el("med-a-spec-o")) Lib.drawSpectrogram(el("med-a-spec-o"), orig, { sampleRate: Lib.AUDIO_SR });
    if (el("med-a-spec-a")) Lib.drawSpectrogram(el("med-a-spec-a"), aug, { sampleRate: Lib.AUDIO_SR });
    const fo = Lib.computeMelMfcc(orig);
    const fa = Lib.computeMelMfcc(aug);
    if (el("med-a-mel-o"))
      Lib.drawBarChart(el("med-a-mel-o"), fo.mel, {
        color: "#0f6b5c",
        yLabel: "Log energy",
        xLabel: "Mel bin",
        title: "Mel filterbank",
        xTickEvery: 5,
      });
    if (el("med-a-mel-a"))
      Lib.drawBarChart(el("med-a-mel-a"), fa.mel, {
        color: "#0f6b5c",
        yLabel: "Log energy",
        xLabel: "Mel bin",
        title: "Mel filterbank",
        xTickEvery: 5,
      });
    if (el("med-a-mfcc-o"))
      Lib.drawBarChart(el("med-a-mfcc-o"), fo.mfcc, {
        color: "#3d5a80",
        zeroBaseline: true,
        yLabel: "MFCC value",
        xLabel: "Coeff index",
        title: "MFCC (c0…c12)",
        xTickEvery: 2,
      });
    if (el("med-a-mfcc-a"))
      Lib.drawBarChart(el("med-a-mfcc-a"), fa.mfcc, {
        color: "#3d5a80",
        zeroBaseline: true,
        yLabel: "MFCC value",
        xLabel: "Coeff index",
        title: "MFCC (c0…c12)",
        xTickEvery: 2,
      });
  }

  function midFrame(frames) {
    return frames[Math.floor(frames.length / 2)] || frames[0];
  }

  function paintVideoAnalyze() {
    if (!videoResult || !videoSession) return;
    const orig = videoSession.frames;
    const aug = videoResult.items[analyzeIdx].frames;
    const el = function (id) {
      return document.getElementById(id);
    };
    const fid = Lib.videoFidelity(orig, aug);
    if (el("med-v-fid")) Lib.drawFidelityMeter(el("med-v-fid"), fid);
    if (el("med-v-thumb-o")) Lib.drawFrameThumb(el("med-v-thumb-o"), midFrame(orig), "Original mid frame");
    if (el("med-v-thumb-a")) Lib.drawFrameThumb(el("med-v-thumb-a"), midFrame(aug), "Augmented mid frame");
    if (el("med-v-hist-o")) Lib.drawRgbHistogram(el("med-v-hist-o"), midFrame(orig));
    if (el("med-v-hist-a")) Lib.drawRgbHistogram(el("med-v-hist-a"), midFrame(aug));
    if (el("med-v-rgb-o")) Lib.drawRgbChannelHist(el("med-v-rgb-o"), midFrame(orig));
    if (el("med-v-rgb-a")) Lib.drawRgbChannelHist(el("med-v-rgb-a"), midFrame(aug));
    if (el("med-v-diff-o")) Lib.drawFrameDiff(el("med-v-diff-o"), orig);
    if (el("med-v-diff-a")) Lib.drawFrameDiff(el("med-v-diff-a"), aug);
    if (el("med-v-flow-o")) Lib.drawFlowLite(el("med-v-flow-o"), orig[0], midFrame(orig));
    if (el("med-v-flow-a")) Lib.drawFlowLite(el("med-v-flow-a"), aug[0], midFrame(aug));
    if (el("med-v-energy-o")) Lib.drawTemporalEnergy(el("med-v-energy-o"), orig, { label: "Original temporal |Δ|" });
    if (el("med-v-energy-a"))
      Lib.drawTemporalEnergy(el("med-v-energy-a"), aug, { label: "Augmented temporal |Δ|", color: "#b86a00" });
    if (el("med-v-curves")) Lib.drawFidelityCurves(el("med-v-curves"), fid);
  }

  function renderAll() {
    if (Lib.stopClipPlayback) Lib.stopClipPlayback();
    root.innerHTML =
      renderIntro() +
      renderTabs() +
      renderGuide() +
      (tab === "audio" ? renderAudioPresets() : renderVideoPresets()) +
      renderControls() +
      (tab === "audio" ? renderAudioPreview() + renderAudioAnalyze() : renderVideoPreview() + renderVideoAnalyze()) +
      renderExport();
    bind();
    if (tab === "audio" && audioResult) {
      root.querySelectorAll("[data-wave]").forEach(function (cv) {
        const idx = Number(cv.getAttribute("data-wave"));
        Lib.drawWaveform(cv, audioResult.items[idx].samples);
      });
      paintAudioAnalyze();
    }
    if (tab === "video" && videoResult) {
      paintVideoAnalyze();
      // Show first frame of each clip canvas
      root.querySelectorAll("[data-vplay-canvas]").forEach(function (cv) {
        const idx = Number(cv.getAttribute("data-vplay-canvas"));
        const fr = videoResult.items[idx] && videoResult.items[idx].frames;
        if (fr && fr[0]) {
          cv.width = fr[0].width;
          cv.height = fr[0].height;
          cv.getContext("2d").drawImage(fr[0], 0, 0);
        }
      });
      const origCv = document.getElementById("med-v-play-orig");
      if (origCv && videoSession && videoSession.frames[0]) {
        origCv.width = videoSession.frames[0].width;
        origCv.height = videoSession.frames[0].height;
        origCv.getContext("2d").drawImage(videoSession.frames[0], 0, 0);
      }
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
        analyzeIdx = 0;
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
        analyzeIdx = 0;
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
        analyzeIdx = 0;
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
    const analyzeEl = document.getElementById("med-analyze-idx");
    if (analyzeEl) {
      analyzeEl.addEventListener("change", function () {
        analyzeIdx = Number(analyzeEl.value) || 0;
        if (tab === "audio") paintAudioAnalyze();
        else paintVideoAnalyze();
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

    function playOnCanvas(canvas, frames) {
      if (!Lib.playFrameClip) throw new Error("Playback module missing.");
      Lib.playFrameClip(canvas, frames, { fps: 8, loop: true });
    }

    const vPlayOrig = document.getElementById("med-v-play-orig-btn");
    if (vPlayOrig) {
      vPlayOrig.addEventListener("click", function () {
        try {
          const cv = document.getElementById("med-v-play-orig");
          playOnCanvas(cv, videoSession.frames);
          showMessage("Playing original clip (loop). Click Stop to end.", "ok");
        } catch (err) {
          showMessage(err.message || String(err), "error");
          renderAll();
        }
      });
    }
    const vStop = document.getElementById("med-v-stop");
    if (vStop) {
      vStop.addEventListener("click", function () {
        if (Lib.stopClipPlayback) Lib.stopClipPlayback();
        showMessage("Playback stopped.", "ok");
      });
    }
    const vDlOrig = document.getElementById("med-v-dl-orig");
    if (vDlOrig) {
      vDlOrig.addEventListener("click", function () {
        showMessage("Encoding original.webm…", "ok");
        Lib.downloadWebM(videoSession.frames, "original-" + (videoSession.id || "clip") + ".webm", { fps: 8 })
          .then(function () {
            showMessage("Downloaded original WebM clip.", "ok");
            renderAll();
          })
          .catch(function (err) {
            showMessage(err.message || String(err), "error");
            renderAll();
          });
      });
    }
    root.querySelectorAll("[data-vplay]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const idx = Number(btn.getAttribute("data-vplay"));
        try {
          const cv = root.querySelector('[data-vplay-canvas="' + idx + '"]');
          playOnCanvas(cv, videoResult.items[idx].frames);
          showMessage("Playing " + videoResult.items[idx].id + " (loop).", "ok");
        } catch (err) {
          showMessage(err.message || String(err), "error");
          renderAll();
        }
      });
    });
    root.querySelectorAll("[data-vdl]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const idx = Number(btn.getAttribute("data-vdl"));
        const it = videoResult.items[idx];
        showMessage("Encoding " + it.id + ".webm…", "ok");
        Lib.downloadWebM(it.frames, it.id + ".webm", { fps: 8 })
          .then(function () {
            showMessage("Downloaded " + it.id + ".webm", "ok");
            renderAll();
          })
          .catch(function (err) {
            showMessage(err.message || String(err), "error");
            renderAll();
          });
      });
    });

    const zip = document.getElementById("med-zip");
    if (zip) {
      zip.addEventListener("click", function () {
        if (tab === "audio") {
          Lib.downloadAudioZip(audioSession, audioResult);
          return;
        }
        showMessage("Encoding WebM clips for ZIP (may take a few seconds)…", "ok");
        const p = Lib.downloadVideoZip(videoSession, videoResult, {
          includeWebm: true,
          fps: 8,
          onProgress: function (msg) {
            if (msg) showMessage(msg, "ok");
          },
        });
        if (p && p.then) {
          p.then(function () {
            showMessage("Downloaded augmented-video.zip (WebM + PNG frames).", "ok");
            renderAll();
          }).catch(function (err) {
            showMessage(
              "ZIP saved with PNG frames. WebM note: " + (err.message || String(err)),
              "error"
            );
            renderAll();
          });
        }
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
