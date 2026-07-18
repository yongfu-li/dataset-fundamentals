/* Node smoke test for IAA category + entity match modes.
 * Run from lectures/tools/iaa: node data/smoke_test.mjs
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

[
  "data/presets-bundle.js",
  "lib/parse.js",
  "lib/kappa.js",
  "lib/match.js",
  "lib/export.js",
].forEach((f) => {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx);
});

const L = ctx.window.IaaLib;
const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

// Category: eg:4.31-style κ
{
  const p = L.loadPreset("ner-org-pilot");
  const m = L.suggestMapping(p.columns, p.defaultMapping, "category");
  const r = L.computeReport(p.rows, m, { mode: "category" });
  assert(Math.abs(r.cohen.kappa - 0.35) < 0.02, "expected κ≈0.35, got " + r.cohen.kappa);
  assert(r.cohen.interpretation.stopScale, "low κ should stop scale");
  console.log("ok category κ", r.cohen.kappa);
}

// Spans: IoU soft match
{
  const p = L.loadPreset("ner-spans-pilot");
  const m = L.suggestMapping(p.columns, p.defaultMapping, "spans");
  const soft = L.computeReport(p.rows, m, {
    mode: "spans",
    iouThreshold: 0.5,
    requireLabel: true,
    spanMatch: "iou",
  });
  const exact = L.computeReport(p.rows, m, {
    mode: "spans",
    iouThreshold: 0.5,
    requireLabel: true,
    spanMatch: "exact",
  });
  assert(soft.entity.f1 != null && soft.entity.f1 > 0.5, "soft F1 too low");
  assert(exact.entity.f1 < soft.entity.f1, "exact should be stricter than IoU");
  console.log("ok spans soft F1", soft.entity.f1, "exact", exact.entity.f1);
}

// Boxes
{
  const p = L.loadPreset("vision-boxes-pilot");
  const m = L.suggestMapping(p.columns, p.defaultMapping, "boxes");
  const r05 = L.computeReport(p.rows, m, {
    mode: "boxes",
    iouThreshold: 0.5,
    requireLabel: true,
  });
  const r03 = L.computeReport(p.rows, m, {
    mode: "boxes",
    iouThreshold: 0.3,
    requireLabel: true,
  });
  assert(r05.entity.f1 != null, "box F1 missing");
  assert(r03.entity.f1 >= r05.entity.f1, "lower τ should not decrease F1");
  console.log("ok boxes F1@0.5", r05.entity.f1, "@0.3", r03.entity.f1);
}

// Audio / video reuse span mode
{
  const audio = L.loadPreset("audio-diarization");
  assert(audio.mode === "spans", "audio mode");
  const video = L.loadPreset("video-action-segments");
  assert(video.mode === "spans", "video mode");
  console.log("ok audio/video presets");
}

// Unit: interval + box IoU
assert(Math.abs(L.spanIoU({ start: 0, end: 10 }, { start: 5, end: 15 }) - 5 / 15) < 1e-9, "span IoU");
assert(
  Math.abs(
    L.boxIoU(
      { x1: 0, y1: 0, x2: 10, y2: 10 },
      { x1: 5, y1: 5, x2: 15, y2: 15 }
    ) -
      25 / 175
  ) < 1e-9,
  "box IoU"
);

console.log("all smoke checks passed");
