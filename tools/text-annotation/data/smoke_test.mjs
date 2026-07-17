/** Smoke tests for TextAnnLib (parse, spans, export). */
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
  for (const f of ["data/presets-bundle.js", "lib/parse.js", "lib/spans.js", "lib/export.js"]) {
    vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
  }
  return ctx.window.TextAnnLib;
}

const Lib = loadLib();
const results = [];

function check(name, ok, detail) {
  results.push({ name, ok, detail: detail || "" });
}

try {
  const p = Lib.loadPreset("sentiment-reviews");
  check("sentiment preset mode", p.mode === "sentiment");
  check("sentiment has 8 items", p.items.length === 8);
} catch (e) {
  check("sentiment preset", false, e.message);
}

try {
  const p = Lib.loadPreset("ner-entities");
  check("ner preset mode", p.mode === "ner");
  check("ner has ORG label", p.labels.includes("ORG"));
} catch (e) {
  check("ner preset", false, e.message);
}

try {
  const data = Lib.parseUpload(
    JSON.stringify([{ id: "1", text: "Hello world" }, { id: "2", review: "x" }]),
    "t.json"
  );
  check("json upload rows", data.rows.length === 2);
  const map = Lib.suggestMapping(data.columns);
  check("suggests text column", map.text === "text" || map.text === "review");
} catch (e) {
  check("json upload", false, e.message);
}

try {
  const items = Lib.rowsToItems(
    [{ id: "A", text: "Apple is in Cupertino." }],
    { id: "id", text: "text" }
  );
  check("rowsToItems", items.length === 1 && items[0].id === "A");
} catch (e) {
  check("rowsToItems", false, e.message);
}

try {
  let spans = [];
  let r = Lib.tryAddSpan(spans, 0, 5, "ORG", "Apple is in Cupertino.");
  check("add span ok", r.ok && r.spans.length === 1);
  spans = r.spans;
  r = Lib.tryAddSpan(spans, 2, 8, "LOC", "Apple is in Cupertino.");
  check("reject overlap", !r.ok);
  r = Lib.tryAddSpan(spans, 12, 21, "LOC", "Apple is in Cupertino.");
  check("add second span", r.ok && r.spans.length === 2);
} catch (e) {
  check("spans", false, e.message);
}

try {
  const session = {
    mode: "sentiment",
    labels: ["positive", "neutral", "negative"],
    items: [{ id: "R01", text: "Great" }],
    annotations: { R01: { label: "positive" } },
    source: "test",
  };
  const exp = Lib.buildExport(session);
  check("export format", exp.format === "text-annotations");
  check("export labeled count", exp.counts.labeled === 1);
  check("export label", exp.items[0].label === "positive");
} catch (e) {
  check("export", false, e.message);
}

try {
  const sentTpl = Lib.emptyTemplate("sentiment");
  check("sentiment template is full preset", sentTpl.length === 8);
  const nerTpl = Lib.emptyTemplate("ner");
  check("ner template is full preset", nerTpl.length === 6);
} catch (e) {
  check("templates", false, e.message);
}


try {
  const flags = Lib.reviewFlags(
    [{ id: "1", text: "a" }, { id: "2", text: "b" }],
    "sentiment",
    { "1": { label: "positive" } }
  );
  check("review flags missing one", flags.length === 1 && flags[0].id === "2");
} catch (e) {
  check("review", false, e.message);
}

const failed = results.filter((r) => !r.ok);
results.forEach((r) => console.log(r.ok ? "OK" : "FAIL", r.name, r.detail || ""));
console.log("Results:", results.filter((r) => r.ok).length + "/" + results.length, "passed");
if (failed.length) process.exit(1);
