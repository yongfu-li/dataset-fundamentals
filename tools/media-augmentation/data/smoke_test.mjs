/** Smoke tests for MediaAugLib (augment + analyze). */
import { readFileSync } from "fs";
import vm from "vm";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function makeCtx() {
  class FakeCtx {
    constructor(c) {
      this.c = c;
      this.fillStyle = "#000";
      this.strokeStyle = "#000";
      this.lineWidth = 1;
      this.font = "12px sans-serif";
      this._data = new Uint8ClampedArray(c.width * c.height * 4);
      for (let i = 0; i < this._data.length; i += 4) {
        this._data[i] = 30;
        this._data[i + 1] = 100;
        this._data[i + 2] = 70;
        this._data[i + 3] = 255;
      }
    }
    fillRect() {}
    fillText() {}
    beginPath() {}
    arc() {}
    fill() {}
    drawImage() {}
    translate() {}
    scale() {}
    createLinearGradient() {
      return { addColorStop() {} };
    }
    createImageData(w, h) {
      return { width: w, height: h, data: new Uint8ClampedArray(w * h * 4) };
    }
    getImageData() {
      return { data: this._data, width: this.c.width, height: this.c.height };
    }
    putImageData(img) {
      this._data = img.data;
    }
    stroke() {}
    moveTo() {}
    lineTo() {}
  }
  function Canvas(w, h) {
    this.width = w || 64;
    this.height = h || 48;
    this._ctx = new FakeCtx(this);
  }
  Canvas.prototype.getContext = function () {
    return this._ctx;
  };
  Canvas.prototype.toDataURL = function () {
    return "data:image/png;base64,AAAA";
  };

  const ctx = {
    window: {},
    console,
    document: {
      createElement: (tag) => (tag === "canvas" ? new Canvas(64, 48) : { click() {}, download: "", href: "" }),
      body: { appendChild() {}, removeChild() {} },
    },
    ImageData: function (w, h) {
      return { width: w, height: h, data: new Uint8ClampedArray(w * h * 4) };
    },
    URL: { createObjectURL: () => "blob:", revokeObjectURL() {} },
    Blob: class {
      constructor() {}
    },
    TextEncoder: class {
      encode(s) {
        return Buffer.from(String(s), "utf8");
      }
    },
    atob: (s) => Buffer.from(s, "base64").toString("binary"),
    DataView,
    ArrayBuffer,
    Float32Array,
    Uint8Array,
    Int16Array: Int16Array,
    Math,
  };
  ctx.globalThis = ctx.window;
  vm.createContext(ctx);
  for (const f of [
    "lib/audio.js",
    "lib/video.js",
    "lib/analyze-audio.js",
    "lib/analyze-video.js",
    "lib/export.js",
  ]) {
    vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
  }
  return ctx.window.MediaAugLib;
}

const Lib = makeCtx();
const results = [];
function check(name, ok, detail) {
  results.push({ name, ok, detail: detail || "" });
}

try {
  const presets = Lib.makeAudioPresets();
  check("audio presets", presets.length >= 6);
  check(
    "music+voice presets",
    presets.some((p) => p.id === "music") && presets.some((p) => p.id === "voice")
  );
  const music = presets.find((p) => p.id === "music");
  check("music length", music.samples.length > 1000);
  const a = Lib.augmentAudio(presets[0].samples, { method: "reverse", count: 2, seed: 1 });
  const b = Lib.augmentAudio(presets[0].samples, { method: "reverse", count: 2, seed: 1 });
  check("audio count", a.items.length === 2);
  check("audio deterministic ops", a.items[0].ops.join() === b.items[0].ops.join());
  const wav = Lib.encodeWav(a.items[0].samples, a.sampleRate);
  check("wav header", wav[0] === 0x52 && wav[1] === 0x49);
  const meters = Lib.audioMeters(music.samples);
  check("rms meters", meters.rms > 0 && meters.peak > 0);
  const spec = Lib.computeSpectrogram(music.samples);
  check("spectrogram", spec.nFrames >= 1 && spec.matrix[0].length === spec.nFreq);
  const feats = Lib.computeMelMfcc(music.samples);
  check("mel+mfcc", feats.mel.length === 26 && feats.mfcc.length === 13);
} catch (e) {
  check("audio", false, e.message);
}

try {
  const vp = Lib.makeVideoPresets();
  check("video presets", vp.length >= 3);
  const v = Lib.augmentVideo(vp[0].frames, { method: "flip_h", count: 2, seed: 2 });
  check("video count", v.items.length === 2 && v.items[0].thumbs.length > 0);
  const rev = Lib.augmentVideo(vp[0].frames, { method: "reverse", count: 1, seed: 4 });
  check("video reverse", rev.items[0].ops[0] === "reverse");
  const fid = Lib.videoFidelity(vp[0].frames, v.items[0].frames);
  check("fidelity", fid.score >= 0 && fid.score <= 1 && fid.nCompared > 0);
  const hist = Lib.frameHistogram(vp[0].frames[0], 32);
  check("histogram", hist.length === 32);
  const recipe = Lib.buildRecipe(vp[0], v);
  check("recipe", recipe.format === "media-augmentation-recipe");
} catch (e) {
  check("video", false, e.message);
}

results.forEach((r) => console.log((r.ok ? "PASS" : "FAIL") + " " + r.name + (r.detail ? " — " + r.detail : "")));
if (results.some((r) => !r.ok)) process.exit(1);
console.log("All " + results.length + " checks passed.");
