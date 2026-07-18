/** Smoke tests for MediaAugLib. */
import { readFileSync } from "fs";
import vm from "vm";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function makeCtx() {
  class FakeCtx {
    constructor(c) {
      this.c = c;
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
  };
  ctx.globalThis = ctx.window;
  vm.createContext(ctx);
  for (const f of ["lib/audio.js", "lib/video.js", "lib/export.js"]) {
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
  check("audio presets", presets.length >= 4);
  const a = Lib.augmentAudio(presets[0].samples, { method: "reverse", count: 2, seed: 1 });
  const b = Lib.augmentAudio(presets[0].samples, { method: "reverse", count: 2, seed: 1 });
  check("audio count", a.items.length === 2);
  check("audio deterministic ops", a.items[0].ops.join() === b.items[0].ops.join());
  const wav = Lib.encodeWav(a.items[0].samples, a.sampleRate);
  check("wav header", wav[0] === 0x52 && wav[1] === 0x49); // RI
  const pipe = Lib.augmentAudio(presets[1].samples, {
    method: "random_pipeline",
    count: 2,
    seed: 3,
    intensity: 0.5,
  });
  check("audio pipeline", pipe.items[0].ops.length >= 2);
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
  const recipe = Lib.buildRecipe(vp[0], v);
  check("recipe", recipe.format === "media-augmentation-recipe");
} catch (e) {
  check("video", false, e.message);
}

results.forEach((r) => console.log((r.ok ? "PASS" : "FAIL") + " " + r.name + (r.detail ? " — " + r.detail : "")));
if (results.some((r) => !r.ok)) process.exit(1);
console.log("All " + results.length + " checks passed.");
