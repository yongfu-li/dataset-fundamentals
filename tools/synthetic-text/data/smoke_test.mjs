/** Smoke tests for SynthTextLib. */
import { readFileSync } from "fs";
import vm from "vm";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function loadLib() {
  const ctx = {
    window: {},
    console,
    document: {
      body: { appendChild: () => {}, removeChild: () => {} },
      createElement: () => ({ click: () => {}, download: "", href: "" }),
    },
    URL: { createObjectURL: () => "blob:test", revokeObjectURL: () => {} },
    Blob: class {
      constructor() {}
    },
  };
  ctx.globalThis = ctx.window;
  vm.createContext(ctx);
  for (const f of [
    "data/presets-bundle.js",
    "lib/parse.js",
    "lib/generate.js",
    "lib/export.js",
  ]) {
    vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
  }
  return ctx.window.SynthTextLib;
}

const Lib = loadLib();
const results = [];

function check(name, ok, detail) {
  results.push({ name, ok, detail: detail || "" });
}

try {
  const ids = Lib.listPresets().map((p) => p.id);
  check("preset count", ids.length >= 7, "n=" + ids.length);
  ["news-headlines", "survey-responses", "incident-logs", "medical-notes"].forEach(function (id) {
    const p = Lib.loadPreset(id);
    const g = Lib.generate(p, { method: "template", count: 4, seed: 5 });
    check(id + " template", g.items.length === 4 && p.seedTexts.length >= 8);
  });
} catch (e) {
  check("new presets", false, e.message);
}

try {
  const p = Lib.loadPreset("review-templates");
  check("review-templates has seeds", p.seedTexts.length >= 1);
  const a = Lib.generate(p, { method: "template", count: 8, seed: 7 });
  const b = Lib.generate(p, { method: "template", count: 8, seed: 7 });
  check("template count", a.items.length === 8);
  check(
    "deterministic seed",
    a.items.map((x) => x.text).join("|") === b.items.map((x) => x.text).join("|")
  );
  check(
    "has slot parts",
    a.items.some((it) => (it.parts || []).some((part) => part.type === "slot"))
  );
  const edaOnTmpl = Lib.generate(p, { method: "eda", count: 4, seed: 9, noiseIntensity: 0.6 });
  check("eda on review-templates", edaOnTmpl.items.length === 4);
} catch (e) {
  check("template/eda", false, e.message);
}

try {
  const empty = { id: "empty", title: "Empty", templates: [], slots: {}, seedTexts: [] };
  const n = Lib.generate(empty, { method: "noise", count: 3, seed: 2, noiseIntensity: 0.5 });
  check("noise on empty uses fallback", n.items.length === 3 && empty.seedTexts.length >= 1);
  const e = Lib.generate({ id: "e2", templates: [], slots: {}, seedTexts: [] }, { method: "eda", count: 2, seed: 3, noiseIntensity: 0.5 });
  check("eda on empty uses fallback", e.items.length === 2);
} catch (err) {
  check("fallback seeds", false, err.message);
}

try {
  const p = Lib.loadPreset("seed-reviews");
  const n = Lib.generate(p, { method: "noise", count: 5, seed: 3, noiseIntensity: 0.8 });
  check("noise count", n.items.length === 5);
  const eda = Lib.generate(p, { method: "eda", count: 5, seed: 4, noiseIntensity: 0.7 });
  check("eda count", eda.items.length === 5);
  const ch = Lib.generate(p, { method: "char_noise", count: 5, seed: 5, noiseIntensity: 0.9 });
  check("char_noise count", ch.items.length === 5);
  const boot = Lib.generate(p, { method: "bootstrap", count: 20, seed: 6 });
  check("bootstrap from seeds", boot.items.every((it) => p.seedTexts.indexOf(it.text) !== -1));
  const mix = Lib.generate(p, { method: "mixup", count: 5, seed: 7 });
  check("mixup count", mix.items.length === 5);
  check(
    "mixup has parts",
    mix.items.some((it) => (it.parts || []).some((part) => part.type === "slot"))
  );
  const m = Lib.generate(p, { method: "markov", count: 5, seed: 11 });
  check("markov count", m.items.length === 5);
  check("markov non-empty", m.items.every((it) => it.text.trim().length > 0));
  const m3 = Lib.generate(p, { method: "markov3", count: 5, seed: 12 });
  check("markov3 count", m3.items.length === 5);
  check("methods list", Array.isArray(Lib.METHODS) && Lib.METHODS.length >= 8);
} catch (e) {
  check("seed methods", false, e.message);
}

try {
  const up = Lib.parseUpload('text\nHello world\nSecond line here\n', "seeds.csv");
  check("csv seeds", up.seedTexts.length === 2);
  const g = Lib.generate(up, { method: "noise", count: 3, seed: 1 });
  const recipe = Lib.buildRecipe(up, g);
  check("recipe format", recipe.format === "synthetic-text-recipe");
  check("recipe md", /Synthetic text generation recipe/.test(Lib.recipeToMarkdown(recipe)));
} catch (e) {
  check("upload", false, e.message);
}

const failed = results.filter((r) => !r.ok);
results.forEach((r) => {
  console.log((r.ok ? "PASS" : "FAIL") + " " + r.name + (r.detail ? " — " + r.detail : ""));
});
if (failed.length) {
  console.error(failed.length + " failed");
  process.exit(1);
}
console.log("All " + results.length + " checks passed.");
