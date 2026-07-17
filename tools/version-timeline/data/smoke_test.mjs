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
  };
  ctx.globalThis = ctx.window;
  vm.createContext(ctx);
  for (const f of ["data/presets-bundle.js", "lib/parse.js", "lib/diff.js", "lib/export.js"]) {
    vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
  }
  return ctx.window.VersionTimelineLib;
}

const Lib = loadLib();
const results = [];

function check(name, ok, detail) {
  results.push({ name, ok, detail: detail || "" });
}

try {
  const p = Lib.loadPreset("feature-drift-pilot");
  check("preset loads 3 versions", p.versions.length === 3);
  const d12 = Lib.diffVersions(p.versions[0], p.versions[1]);
  const d23 = Lib.diffVersions(p.versions[1], p.versions[2]);
  check("v1->v2: 3 rows added", d12.summary.nAdded === 3);
  check("v1->v2: no schema change", d12.summary.nSchemaChanges === 0);
  check("v2->v3: sentiment renamed", d23.schema.renamed[0]?.from === "sentiment");
  check("v2->v3: source column added", d23.schema.added.includes("source"));
} catch (e) {
  check("preset diffs", false, e.message);
}

try {
  const tpl = Lib.emptyTemplate();
  const chain = Lib.parseUpload(JSON.stringify(tpl), "my-chain.json");
  check("JSON upload: 3 versions", chain.versions.length === 3);
  check("JSON upload: user-upload flag", chain.teachingFocus === "user-upload");
} catch (e) {
  check("JSON upload", false, e.message);
}

try {
  const chain = Lib.parseCsvSnapshots([
    { name: "v1.csv", text: "id,text,label\nR01,a,pos\nR02,b,neg" },
    { name: "v2.csv", text: "id,text,label\nR01,a,pos\nR02,b,neu\nR03,c,pos" },
  ]);
  const d = Lib.diffVersions(chain.versions[0], chain.versions[1]);
  check("CSV upload: user-upload", chain.teachingFocus === "user-upload");
  check("CSV diff: 1 added", d.summary.nAdded === 1);
  check("CSV diff: 1 modified", d.summary.nModified === 1);
} catch (e) {
  check("CSV upload", false, e.message);
}

try {
  Lib.parseUpload(JSON.stringify({ versions: [] }), "bad.json");
  check("rejects empty versions", false);
} catch (e) {
  check("rejects empty versions", /at least two/i.test(e.message), e.message);
}

try {
  // exposed via parseCsvSnapshots internal - test via bad csv in snapshots
  Lib.parseCsvSnapshots([{ name: "a.csv", text: "a,b\n1,2" }, { name: "b.csv", text: "id,x\n1,y" }]);
  check("rejects csv without id", false);
} catch (e) {
  check("rejects csv without id", /id.*column/i.test(e.message), e.message);
}

try {
  const p = Lib.loadPreset("hiring-schema-evolution");
  const m = Lib.buildManifest(p, 2);
  check("manifest: 2 steps", m.steps.length === 2);
  check("manifest: book anchors", m.book_anchors.length >= 2);
} catch (e) {
  check("manifest", false, e.message);
}

for (const f of [
  "version-timeline.js",
  "version-timeline.css",
  "index.html",
  "lib/parse.js",
  "lib/diff.js",
  "lib/export.js",
  "data/presets-bundle.js",
]) {
  try {
    readFileSync(join(root, f));
    check("file exists: " + f, true);
  } catch (e) {
    check("file exists: " + f, false, e.message);
  }
}

try {
  vm.runInContext(readFileSync(join(root, "version-timeline.js"), "utf8"), vm.createContext({ window: { VersionTimelineLib: Lib, VersionTimelinePresets: {} }, document: { getElementById: () => null } }));
  check("version-timeline.js syntax OK", true);
} catch (e) {
  check("version-timeline.js syntax OK", false, e.message);
}

const failed = results.filter((r) => !r.ok);
console.log("Results:", results.filter((r) => r.ok).length + "/" + results.length, "passed");
failed.forEach((r) => console.log("FAIL:", r.name, r.detail));
process.exit(failed.length ? 1 : 0);
