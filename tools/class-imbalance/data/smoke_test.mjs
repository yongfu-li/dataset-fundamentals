/** Smoke tests for ImbalanceLib. */
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
    "lib/stats.js",
    "lib/resample.js",
    "lib/model.js",
    "lib/charts.js",
    "lib/export.js",
  ]) {
    vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
  }
  return ctx.window.ImbalanceLib;
}

const Lib = loadLib();
const results = [];

function check(name, ok, detail) {
  results.push({ name, ok, detail: detail || "" });
}

try {
  const p = Lib.loadPreset("fraud-rare");
  const c = Lib.classCounts(p.rows, "label", "1");
  check("fraud rare rate", c.positiveRate < 0.05, "rate=" + c.positiveRate);
  check("majority trap high", c.majorityClassAccuracy > 0.9);
} catch (e) {
  check("fraud-rare", false, e.message);
}

try {
  const p = Lib.loadPreset("fraud-rare");
  const cmp = Lib.runComparison(p.rows, {
    labelColumn: "label",
    featureColumns: ["amount", "risk_score"],
    positiveLabel: "1",
    strategy: "oversample",
    seed: 42,
  });
  check("holdout note", /never resampled/i.test(cmp.note));
  check("baseline accuracy high", cmp.baseline.metrics.accuracy > 0.85);
  check(
    "baseline recall limited",
    cmp.baseline.metrics.recall < 0.85,
    "recall=" + cmp.baseline.metrics.recall
  );
  check(
    "oversample helps recall",
    cmp.treated.metrics.recall >= cmp.baseline.metrics.recall - 0.02,
    "baseR=" + cmp.baseline.metrics.recall + " treatR=" + cmp.treated.metrics.recall
  );
  check(
    "train grew or balanced",
    cmp.treated.trainPositive >= cmp.baseline.trainPositive,
    "basePos=" + cmp.baseline.trainPositive + " treatPos=" + cmp.treated.trainPositive
  );
  const report = Lib.buildReport(p, cmp);
  check("report format", report.format === "class-imbalance-report");
  check("report model", report.model && report.model.type === "logistic-regression");
} catch (e) {
  check("comparison", false, e.message);
}

try {
  const items = [
    { y: 1, row: { a: 1 } },
    { y: 1, row: { a: 2 } },
    { y: 0, row: { a: 3 } },
    { y: 0, row: { a: 4 } },
    { y: 0, row: { a: 5 } },
    { y: 0, row: { a: 6 } },
    { y: 0, row: { a: 7 } },
    { y: 0, row: { a: 8 } },
  ];
  const u = Lib.undersample(items, 1);
  const up = u.filter((x) => x.y === 1).length;
  const un = u.filter((x) => x.y === 0).length;
  check("undersample equal", up === un && up === 2, "pos=" + up + " neg=" + un);
  const o = Lib.oversample(items, 2);
  const op = o.filter((x) => x.y === 1).length;
  const on = o.filter((x) => x.y === 0).length;
  check("oversample equal", op === on, "pos=" + op + " neg=" + on);
} catch (e) {
  check("resample", false, e.message);
}

try {
  const p = Lib.loadPreset("balanced-demo");
  const c = Lib.classCounts(p.rows, "label", "1");
  check("balanced-ish", c.positiveRate > 0.35 && c.positiveRate < 0.65, "rate=" + c.positiveRate);
} catch (e) {
  check("balanced", false, e.message);
}

const failed = results.filter((r) => !r.ok);
results.forEach((r) => {
  console.log((r.ok ? "PASS" : "FAIL") + "  " + r.name + (r.detail ? " — " + r.detail : ""));
});
console.log("\n" + (results.length - failed.length) + "/" + results.length + " passed");
process.exit(failed.length ? 1 : 0);
