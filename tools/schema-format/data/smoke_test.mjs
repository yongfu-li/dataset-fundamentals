/** Smoke tests for SchemaLib. */
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
    "lib/schema.js",
    "lib/export.js",
  ]) {
    vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
  }
  return ctx.window.SchemaLib;
}

const Lib = loadLib();
const results = [];

function check(name, ok, detail) {
  results.push({ name, ok, detail: detail || "" });
}

try {
  const p = Lib.loadPreset("flat-customers");
  check("flat rows", p.rows.length === 6);
  const sch = Lib.inferSchema(p.rows);
  check("flat structured", sch.structure === "structured", sch.structure);
  check("flat no nest", !sch.hasNested);
} catch (e) {
  check("flat", false, e.message);
}

try {
  const p = Lib.loadPreset("housing-nested");
  const sch = Lib.inferSchema(p.rows);
  check("housing semi", sch.structure === "semi-structured", sch.structure);
  const paths = sch.fields.map((f) => f.path);
  check("address.city", paths.indexOf("address.city") !== -1, paths.join(","));
  const flat = Lib.flattenRows(p.rows, "dot");
  check("flatten city col", flat.columns.indexOf("address.city") !== -1);
  check("flatten warn", flat.warnings.length >= 1);
} catch (e) {
  check("housing", false, e.message);
}

try {
  const p = Lib.loadPreset("orders-nested");
  const flat = Lib.flattenRows(p.rows, "dot");
  check("orders items stringified", typeof flat.rows[0].items === "string");
  const csv = Lib.rowsToCsv(flat.rows, flat.columns);
  check("csv header", csv.indexOf("order_id") !== -1 && csv.indexOf("items") !== -1);
} catch (e) {
  check("orders", false, e.message);
}

try {
  const parsed = Lib.parseJson(JSON.stringify([{ a: 1, b: { c: 2 } }]));
  check("parse json nest", parsed.rows[0].b.c === 2);
  const sch = Lib.inferSchema(parsed.rows);
  const payload = Lib.schemaToJson(sch);
  check("schema format", payload.format === "inferred-schema");
} catch (e) {
  check("parse/schema", false, e.message);
}

const failed = results.filter((r) => !r.ok);
results.forEach((r) => {
  console.log((r.ok ? "PASS" : "FAIL") + "  " + r.name + (r.detail ? " — " + r.detail : ""));
});
console.log("\n" + (results.length - failed.length) + "/" + results.length + " passed");
process.exit(failed.length ? 1 : 0);
