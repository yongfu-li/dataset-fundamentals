/** Smoke tests for ImgAugLib (Node + canvas mock via pure logic where possible). */
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
        this._data[i] = 40;
        this._data[i + 1] = 120;
        this._data[i + 2] = 80;
        this._data[i + 3] = 255;
      }
    }
    fillRect() {}
    drawImage() {}
    translate() {}
    scale() {}
    rotate() {}
    beginPath() {}
    arc() {}
    moveTo() {}
    lineTo() {}
    closePath() {}
    fill() {}
    strokeRect() {}
    fillText() {}
    createLinearGradient() {
      return { addColorStop() {} };
    }
    getImageData() {
      return { data: this._data, width: this.c.width, height: this.c.height };
    }
    putImageData(img) {
      this._data = img.data;
    }
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
      createElement: function (tag) {
        if (tag === "canvas") return new Canvas(64, 48);
        return { click() {}, download: "", href: "", style: {} };
      },
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
  };
  ctx.globalThis = ctx.window;
  vm.createContext(ctx);
  for (const f of ["data/presets-bundle.js", "lib/transforms.js", "lib/export.js"]) {
    vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
  }
  return ctx;
}

const ctx = makeCtx();
const Lib = ctx.window.ImgAugLib;
const Presets = ctx.window.ImgAugPresets;
const results = [];
function check(name, ok, detail) {
  results.push({ name, ok, detail: detail || "" });
}

try {
  check("methods", Lib.METHODS.length >= 10);
  const p = Presets.load("shapes");
  check("preset canvas", !!p.canvas && p.canvas.width > 0);
  const a = Lib.augment(p.canvas, { method: "flip_h", count: 2, seed: 1 });
  const b = Lib.augment(p.canvas, { method: "flip_h", count: 2, seed: 1 });
  check("flip count", a.items.length === 2);
  check("deterministic", a.items[0].ops.join() === b.items[0].ops.join());
  const pipe = Lib.augment(p.canvas, { method: "random_pipeline", count: 3, seed: 9, intensity: 0.5 });
  check("pipeline ops", pipe.items.every((it) => it.ops.length >= 2));
  const recipe = Lib.buildRecipe(p, pipe);
  check("recipe", recipe.format === "image-augmentation-recipe");
  check("recipe md", /Image augmentation recipe/.test(Lib.recipeToMarkdown(recipe)));
} catch (e) {
  check("core", false, e.message);
}

results.forEach((r) => console.log((r.ok ? "PASS" : "FAIL") + " " + r.name + (r.detail ? " — " + r.detail : "")));
if (results.some((r) => !r.ok)) process.exit(1);
console.log("All " + results.length + " checks passed.");
