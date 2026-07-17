/** Smoke tests for SplitLib (parse, split, leakage, export). */
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
    "lib/split.js",
    "lib/leakage.js",
    "lib/export.js",
  ]) {
    vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
  }
  return ctx.window.SplitLib;
}

const Lib = loadLib();
const results = [];

function check(name, ok, detail) {
  results.push({ name, ok, detail: detail || "" });
}

try {
  const p = Lib.loadPreset("churn-holdout");
  check("churn rows", p.rows.length === 20);
  const split = Lib.runSplit(p.rows, {
    method: "stratified",
    trainPct: 70,
    valPct: 0,
    testPct: 30,
    seed: 42,
    idCol: "Customer_ID",
    labelCol: "Churned",
  });
  check("churn train+test", split.train.length + split.test.length === 20);
  const leak = Lib.analyzeLeakage(split);
  check("churn no id leak", leak.errorCount === 0, "errors=" + leak.errorCount);
} catch (e) {
  check("churn", false, e.message);
}

try {
  const p = Lib.loadPreset("entity-leak");
  const split = Lib.runSplit(p.rows, {
    method: "random",
    trainPct: 70,
    valPct: 15,
    testPct: 15,
    seed: 7,
    idCol: "customer_id",
    labelCol: "churned",
  });
  const leak = Lib.analyzeLeakage(split);
  check("entity leak detected", leak.errorCount >= 1, "errors=" + leak.errorCount);
} catch (e) {
  check("entity-leak", false, e.message);
}

try {
  const p = Lib.loadPreset("orders-temporal");
  const random = Lib.runSplit(p.rows, {
    method: "random",
    trainPct: 60,
    valPct: 20,
    testPct: 20,
    seed: 42,
    idCol: "customer_id",
    timeCol: "order_date",
    labelCol: "fraud",
  });
  const randomLeak = Lib.analyzeLeakage(random);
  check(
    "random temporal risk",
    randomLeak.issues.some((i) => i.kind === "temporal" && i.severity === "error"),
    "issues=" + randomLeak.issues.map((i) => i.severity + ":" + i.kind).join(",")
  );

  const timed = Lib.runSplit(p.rows, {
    method: "time",
    trainPct: 60,
    valPct: 20,
    testPct: 20,
    seed: 42,
    idCol: "customer_id",
    timeCol: "order_date",
    labelCol: "fraud",
  });
  const timedLeak = Lib.analyzeLeakage(timed);
  const temporalErrors = timedLeak.issues.filter(
    (i) => i.kind === "temporal" && i.severity === "error"
  );
  check("time split temporal ok", temporalErrors.length === 0, "errors=" + temporalErrors.length);
} catch (e) {
  check("temporal", false, e.message);
}

try {
  const data = Lib.parseUpload(
    JSON.stringify([
      { id: 1, y: 0 },
      { id: 2, y: 1 },
    ]),
    "t.json"
  );
  check("json upload", data.rows.length === 2);
} catch (e) {
  check("upload", false, e.message);
}

try {
  const p = Lib.loadPreset("churn-holdout");
  const split = Lib.runSplit(p.rows, {
    method: "random",
    trainPct: 80,
    valPct: 0,
    testPct: 20,
    seed: 1,
    idCol: "Customer_ID",
  });
  const leak = Lib.analyzeLeakage(split);
  const m = Lib.buildManifest(p, split, leak);
  check("manifest format", m.format === "split-manifest");
  const md = Lib.buildManifestMd(m);
  check("manifest md", /Split manifest/.test(md));
} catch (e) {
  check("export", false, e.message);
}

const failed = results.filter((r) => !r.ok);
results.forEach((r) => console.log(r.ok ? "OK" : "FAIL", r.name, r.detail || ""));
console.log(
  "Results:",
  results.filter((r) => r.ok).length + "/" + results.length,
  "passed"
);
if (failed.length) process.exit(1);
