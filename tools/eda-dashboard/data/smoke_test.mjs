/** Smoke tests for EdaLib (parse, profile, correlation, export). */
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
    "lib/profile.js",
    "lib/charts.js",
    "lib/export.js",
  ]) {
    vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
  }
  return ctx.window.EdaLib;
}

const Lib = loadLib();
const results = [];

function check(name, ok, detail) {
  results.push({ name, ok, detail: detail || "" });
}

try {
  const p = Lib.loadPreset("household-incomes");
  check("household rows", p.rows.length === 10);
  check("Income numeric", Lib.isNumericColumn(p.rows, "Income"));
  const st = Lib.columnStats(p.rows, "Income");
  check("Income mean > median (skew)", st && st.mean > st.median);
} catch (e) {
  check("household", false, e.message);
}

try {
  const p = Lib.loadPreset("healthcare-missing");
  const miss = Lib.missingProfile(p.rows, p.columns);
  check("healthcare has missing", miss.length >= 1);
} catch (e) {
  check("healthcare", false, e.message);
}

try {
  const p = Lib.loadPreset("retail-browse");
  check("retail rows", p.rows.length >= 20);
  const corr = Lib.correlationMatrix(p.rows, p.columns);
  check("correlation has numeric cols", corr.columns.length >= 2);
  const grouped = Lib.groupByAgg(p.rows, "region", "income", "mean");
  check("groupby regions", grouped.length >= 2);
  const pts = Lib.scatterPairs(p.rows, "income", "spend");
  check("scatter pairs", pts.length >= 10);
} catch (e) {
  check("retail", false, e.message);
}

try {
  const xs = [1, 2, 3, 4, 5];
  const ys = [2, 4, 6, 8, 10];
  check("pearson perfect", Lib.pearson(xs, ys) === 1);
} catch (e) {
  check("pearson", false, e.message);
}

try {
  const p = Lib.loadPreset("confounder-icecream");
  check("confounder rows", p.rows.length >= 30);
  const rawPairs = Lib.scatterPairs(p.rows, "ice_cream_sales", "drownings");
  const rawR = Lib.pearson(
    rawPairs.map((pt) => pt.x),
    rawPairs.map((pt) => pt.y)
  );
  const partial = Lib.partialPearson(
    p.rows,
    "ice_cream_sales",
    "drownings",
    "temperature_c"
  );
  check("confounder raw |r| strong", rawR != null && Math.abs(rawR) > 0.5, "r=" + rawR);
  check(
    "confounder partial |r| weaker",
    partial != null && Math.abs(partial) < Math.abs(rawR) - 0.1,
    "raw=" + rawR + " partial=" + partial
  );
} catch (e) {
  check("confounder", false, e.message);
}

try {
  const p = Lib.loadPreset("household-incomes");
  const box = Lib.boxPlotStats(p.rows, "Income");
  check("boxplot has quartiles", box && box.q1 != null && box.median != null && box.q3 != null);
  const filtered = Lib.filterRows(p.rows, [
    { column: "Income", op: "gte", value: 50000 },
    { column: "Income", op: "lte", value: 200000 },
  ]);
  check("multi-filter AND", filtered.length >= 1 && filtered.length < p.rows.length);
} catch (e) {
  check("boxplot/filter", false, e.message);
}

try {
  const data = Lib.parseUpload(
    JSON.stringify([{ a: 1, b: "x" }, { a: 2, b: "y" }]),
    "t.json"
  );
  check("json upload", data.rows.length === 2);
} catch (e) {
  check("upload", false, e.message);
}

try {
  const p = Lib.loadPreset("household-incomes");
  const summary = Lib.buildSummary({
    source: p.name,
    bookAnchors: p.bookAnchors,
    rows: p.rows,
    columns: p.columns,
    viewRows: p.rows,
  });
  check("summary format", summary.format === "eda-summary");
  const md = Lib.buildFindingsMd(
    {
      source: p.name,
      bookAnchors: p.bookAnchors,
      rows: p.rows,
      columns: p.columns,
      viewRows: p.rows,
    },
    "Income looks right-skewed."
  );
  check("findings md", /Income looks right-skewed/.test(md));
} catch (e) {
  check("export", false, e.message);
}

const failed = results.filter((r) => !r.ok);
results.forEach((r) => console.log(r.ok ? "OK" : "FAIL", r.name, r.detail || ""));
console.log("Results:", results.filter((r) => r.ok).length + "/" + results.length, "passed");
if (failed.length) process.exit(1);
