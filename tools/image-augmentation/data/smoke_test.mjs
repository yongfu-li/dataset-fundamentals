/** Smoke tests for ImgAugLib + image bundle presence. */
import { readFileSync, existsSync } from "fs";
import vm from "vm";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const results = [];
function check(name, ok, detail) {
  results.push({ name, ok, detail: detail || "" });
}

const bundlePath = join(root, "data/images-bundle.js");
check("images-bundle exists", existsSync(bundlePath));

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
        return { click() {}, download: "", href: "" };
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
  for (const f of ["data/images-bundle.js", "lib/transforms.js", "lib/export.js"]) {
    if (existsSync(join(root, f))) vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
  }
  return ctx;
}

try {
  const ctx = makeCtx();
  const bag = ctx.window.ImgAugImages || {};
  const ids = Object.keys(bag);
  check("scene count", ids.length >= 6, "n=" + ids.length);
  check("street-day", !!bag["street-day"] && /data:image\/png/.test(bag["street-day"].dataUri || ""));
  check("product-desk", !!bag["product-desk"]);
  const Lib = ctx.window.ImgAugLib;
  const canvas = ctx.document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 48;
  const a = Lib.augment(canvas, { method: "flip_h", count: 2, seed: 1 });
  check("augment still works", a.items.length === 2);
} catch (e) {
  check("bundle load", false, e.message);
}

results.forEach((r) => console.log((r.ok ? "PASS" : "FAIL") + " " + r.name + (r.detail ? " — " + r.detail : "")));
if (results.some((r) => !r.ok)) process.exit(1);
console.log("All " + results.length + " checks passed.");
