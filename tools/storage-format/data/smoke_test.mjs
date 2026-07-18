/* Node smoke test — run from lectures/tools/storage-format:
 *   node data/smoke_test.mjs
 */
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const ctx = { window: {}, console };
ctx.globalThis = ctx.window;
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, "lib/core.js"), "utf8"), ctx);

const L = ctx.window.StorageFormatLib;
const assert = (c, m) => {
  if (!c) throw new Error(m);
};

assert(L.SCENARIOS.length >= 6, "scenarios");
const wh = L.getScenario("warehouse-scan");
assert(wh.recommended === "object-parquet", "warehouse → parquet");
const ok = L.evaluatePick(wh, "object-parquet");
assert(ok.correct, "correct pick");
const bad = L.evaluatePick(wh, "block-db");
assert(!bad.correct, "wrong pick");

const sim = L.simulateScan({ rows: 1e6, cols: 100, selectCols: 2, rowBytes: 10 });
const avro = sim.formats.find((f) => f.id === "avro");
const pq = sim.formats.find((f) => f.id === "parquet");
assert(pq.bytes < avro.bytes, "columnar should read fewer bytes on narrow projection");

const stream = L.getScenario("kafka-stream");
assert(L.evaluatePick(stream, "object-avro").correct, "kafka → avro");
const oltp = L.getScenario("oltp-orders");
assert(L.evaluatePick(oltp, "block-db").correct, "oltp → block");

console.log("storage-format smoke ok");
