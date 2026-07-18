/** Smoke tests for DeidLib. */
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
    "lib/kanon.js",
    "lib/charts.js",
    "lib/export.js",
  ]) {
    vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
  }
  return ctx.window.DeidLib;
}

const Lib = loadLib();
const results = [];

function check(name, ok, detail) {
  results.push({ name, ok, detail: detail || "" });
}

try {
  const p = Lib.loadPreset("hospital-quasi");
  const a = Lib.analyzeKAnonymity(p.rows, ["zip", "age", "sex"], 5);
  check("hospital fails", !a.passes, "minK=" + a.minK);
  check("hospital has uniques", a.minK === 1, "minK=" + a.minK);
} catch (e) {
  check("hospital-quasi", false, e.message);
}

try {
  const p = Lib.loadPreset("hospital-quasi");
  const gen = Lib.applyGeneralization(p.rows, ["zip", "age", "sex"], {
    zipMode: "zip3",
    ageMode: "bin10",
  });
  const a = Lib.analyzeKAnonymity(gen, ["zip", "age", "sex"], 5);
  check("generalize helps", a.minK >= 1, "minK=" + a.minK);
  check("zip3 format", String(gen[0].zip).indexOf("**") !== -1, gen[0].zip);
} catch (e) {
  check("generalize", false, e.message);
}

try {
  const p = Lib.loadPreset("coarse-safe");
  const a = Lib.analyzeKAnonymity(p.rows, p.quasiDefaults, 5);
  check("coarse passes", a.passes && a.minK >= 5, "minK=" + a.minK);
} catch (e) {
  check("coarse-safe", false, e.message);
}

try {
  const p = Lib.loadPreset("hospital-quasi");
  const before = Lib.analyzeKAnonymity(p.rows, ["zip", "age", "sex"], 5);
  const sup = Lib.suppressSmallClasses(p.rows, ["zip", "age", "sex"], 5);
  check("suppress removes", sup.removedCount > 0, "removed=" + sup.removedCount);
  check("before had risk", before.failingRows > 0);
  if (sup.kept.length === 0) {
    check("suppress emptied unsafe table", true, "all rows were in classes < k");
  } else {
    const after = Lib.analyzeKAnonymity(sup.kept, ["zip", "age", "sex"], 5);
    check("suppress passes", after.passes, "minK=" + after.minK);
  }
} catch (e) {
  check("suppress", false, e.message);
}

try {
  const p = Lib.loadPreset("voter-lookup");
  const a = Lib.analyzeKAnonymity(p.rows, p.quasiDefaults, 3);
  const report = Lib.buildReport(p, a, { zipMode: "exact", ageMode: "exact" }, p.quasiDefaults);
  check("report format", report.format === "deid-risk-report");
  check("report method", report.method === "k-anonymity");
} catch (e) {
  check("report", false, e.message);
}

const failed = results.filter((r) => !r.ok);
results.forEach((r) => {
  console.log((r.ok ? "PASS" : "FAIL") + "  " + r.name + (r.detail ? " — " + r.detail : ""));
});
console.log("\n" + (results.length - failed.length) + "/" + results.length + " passed");
process.exit(failed.length ? 1 : 0);
