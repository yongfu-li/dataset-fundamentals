/** Smoke tests for ScaleLib (parse, transform, export). */
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
    "lib/transform.js",
    "lib/charts.js",
    "lib/export.js",
  ]) {
    vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
  }
  return ctx.window.ScaleLib;
}

const Lib = loadLib();
const results = [];

function check(name, ok, detail) {
  results.push({ name, ok, detail: detail || "" });
}

try {
  const p = Lib.loadPreset("knn-age-income");
  check("knn rows", p.rows.length === 24);
  const raw = Lib.runPipeline(p.rows, p.columns, {
    scaleMethod: "none",
    encodeMethod: "none",
    xCol: "age",
    yCol: "income",
  });
  const incomeRaw = Lib.columnValues(raw.rows, "income");
  const maxRaw = Math.max(...incomeRaw.filter((v) => v != null));
  check("raw income large", maxRaw > 1000, "max=" + maxRaw);

  const z = Lib.runPipeline(p.rows, p.columns, {
    scaleMethod: "zscore",
    encodeMethod: "none",
    xCol: "age",
    yCol: "income",
  });
  const fit = z.fits.income;
  check("zscore fit", fit && fit.method === "zscore" && fit.params.std > 0);
  const vals = Lib.columnValues(p.rows, "income").map((v) =>
    Lib.applyScaleValue(v, fit)
  );
  const meanZ =
    vals.reduce((a, b) => a + (b || 0), 0) / vals.filter((v) => v != null).length;
  check("zscore ~zero mean", Math.abs(meanZ) < 0.05, "mean=" + meanZ);
} catch (e) {
  check("knn-age-income", false, e.message);
}

try {
  const p = Lib.loadPreset("product-colors");
  const r = Lib.runPipeline(p.rows, p.columns, {
    scaleMethod: "none",
    encodeMethod: "onehot",
    xCol: "price",
    yCol: "units_sold",
    catCol: "color",
  });
  check(
    "onehot columns",
    r.encode && r.encode.columns && r.encode.columns.length === 3,
    "cols=" + (r.encode && r.encode.columns)
  );
  check("color removed", r.columns.indexOf("color") === -1);
} catch (e) {
  check("product-colors", false, e.message);
}

try {
  const p = Lib.loadPreset("apparel-size");
  const r = Lib.runPipeline(p.rows, p.columns, {
    scaleMethod: "none",
    encodeMethod: "label",
    xCol: "price",
    yCol: "item_id",
    catCol: "size",
    labelOrder: ["Small", "Medium", "Large"],
  });
  check("label Small=0", r.encode.mapping.Small === 0);
  check("label Large=2", r.encode.mapping.Large === 2);
} catch (e) {
  check("apparel-size", false, e.message);
}

try {
  const p = Lib.loadPreset("skewed-spend");
  const r = Lib.runPipeline(p.rows, p.columns, {
    scaleMethod: "log1p",
    encodeMethod: "none",
    xCol: "visits",
    yCol: "spend",
  });
  const after = Lib.columnValues(p.rows, "spend").map((v) =>
    Lib.applyScaleValue(v, r.fits.spend)
  );
  const maxLog = Math.max(...after.filter((v) => v != null));
  check("log compresses", maxLog < 10, "maxLog=" + maxLog);
} catch (e) {
  check("skewed-spend", false, e.message);
}

try {
  const p = Lib.loadPreset("product-colors");
  const r = Lib.runPipeline(p.rows, p.columns, {
    scaleMethod: "none",
    encodeMethod: "target",
    xCol: "price",
    yCol: "units_sold",
    catCol: "color",
    targetCol: "units_sold",
  });
  check(
    "target leak warning",
    r.warnings.some((w) => /leak/i.test(w)),
    r.warnings.join("; ")
  );
} catch (e) {
  check("target-encode", false, e.message);
}

try {
  const p = Lib.loadPreset("knn-age-income");
  const r = Lib.runPipeline(p.rows, p.columns, {
    scaleMethod: "minmax",
    encodeMethod: "none",
    xCol: "age",
    yCol: "income",
  });
  const report = Lib.buildReport(p, r);
  check("report format", report.format === "transform-report");
  const csv = Lib.rowsToCsv(r.rows.slice(0, 2), r.columns);
  check("csv header", csv.indexOf("age") !== -1 && csv.indexOf("income") !== -1);
} catch (e) {
  check("export", false, e.message);
}

const failed = results.filter((r) => !r.ok);
results.forEach((r) => {
  console.log((r.ok ? "PASS" : "FAIL") + "  " + r.name + (r.detail ? " — " + r.detail : ""));
});
console.log(
  "\n" + (results.length - failed.length) + "/" + results.length + " passed"
);
process.exit(failed.length ? 1 : 0);
