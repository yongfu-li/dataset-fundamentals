/** Smoke tests for EthicalLib. */
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
  for (const f of ["data/scenarios-bundle.js", "lib/tree.js", "lib/export.js"]) {
    vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
  }
  return ctx.window.EthicalLib;
}

const Lib = loadLib();
const results = [];

function check(name, ok, detail) {
  results.push({ name, ok, detail: detail || "" });
}

try {
  const list = Lib.listScenarios();
  check("12 scenarios", list.length === 12, "n=" + list.length);
} catch (e) {
  check("list", false, e.message);
}

try {
  const s = Lib.loadScenario("marketing-partners");
  let w = Lib.startWalk(s);
  w = Lib.choose(s, w, "purpose-yes");
  check("stop purpose", w.done && w.outcome.verdict === "stop", w.outcome && w.outcome.verdict);
} catch (e) {
  check("marketing stop", false, e.message);
}

try {
  const s = Lib.loadScenario("marketing-partners");
  let w = Lib.startWalk(s);
  w = Lib.choose(s, w, "purpose-no");
  w = Lib.choose(s, w, "consent-yes");
  w = Lib.choose(s, w, "harm-low");
  check("proceed path", w.done && w.outcome.verdict === "proceed", w.outcome && w.outcome.verdict);
  const report = Lib.buildReport(s, w);
  check("report format", report.format === "ethical-decision-trail");
  check("path length 3", report.path.length === 3, "n=" + report.path.length);
} catch (e) {
  check("marketing proceed", false, e.message);
}

try {
  const s = Lib.loadScenario("hiring-score");
  let w = Lib.startWalk(s);
  w = Lib.choose(s, w, "stake-no");
  check("hiring revise", w.outcome.verdict === "revise");
  w = Lib.back(s, w);
  check("back works", !w.done && w.nodeId === s.start);
} catch (e) {
  check("hiring/back", false, e.message);
}

try {
  const s = Lib.loadScenario("justice-risk-score");
  let w = Lib.startWalk(s);
  w = Lib.choose(s, w, "stakes-high");
  w = Lib.choose(s, w, "contest-no");
  check("justice stop", w.outcome.verdict === "stop");
} catch (e) {
  check("justice", false, e.message);
}

try {
  const s = Lib.loadScenario("campus-cameras");
  let w = Lib.startWalk(s);
  w = Lib.choose(s, w, "nec-no");
  check("campus stop", w.outcome.verdict === "stop");
} catch (e) {
  check("campus", false, e.message);
}

try {
  const s = Lib.loadScenario("scraped-social");
  let w = Lib.startWalk(s);
  w = Lib.choose(s, w, "public-no");
  w = Lib.choose(s, w, "minors-yes");
  w = Lib.choose(s, w, "release-min");
  w = Lib.choose(s, w, "workers-yes");
  check("scrape proceed", w.outcome.verdict === "proceed");
} catch (e) {
  check("scrape", false, e.message);
}

try {
  const s = Lib.loadScenario("retention-delete");
  let w = Lib.startWalk(s);
  w = Lib.choose(s, w, "scope-live");
  check("retention revise", w.outcome.verdict === "revise");
} catch (e) {
  check("retention", false, e.message);
}

try {
  const s = Lib.loadScenario("smart-speaker");
  let w = Lib.startWalk(s);
  w = Lib.choose(s, w, "expect-yes");
  check("speaker stop", w.outcome.verdict === "stop");
} catch (e) {
  check("speaker", false, e.message);
}

try {
  const s = Lib.loadScenario("kids-edu-app");
  let w = Lib.startWalk(s);
  w = Lib.choose(s, w, "child-yes");
  w = Lib.choose(s, w, "ads-yes");
  check("kids stop ads", w.outcome.verdict === "stop");
} catch (e) {
  check("kids", false, e.message);
}

try {
  const s = Lib.loadScenario("insurance-telematics");
  let w = Lib.startWalk(s);
  w = Lib.choose(s, w, "vol-no");
  check("insurance stop", w.outcome.verdict === "stop");
} catch (e) {
  check("insurance", false, e.message);
}

try {
  const s = Lib.loadScenario("employee-monitor");
  let w = Lib.startWalk(s);
  w = Lib.choose(s, w, "notice-no");
  check("employee stop", w.outcome.verdict === "stop");
} catch (e) {
  check("employee", false, e.message);
}

try {
  const s = Lib.loadScenario("cross-border");
  let w = Lib.startWalk(s);
  w = Lib.choose(s, w, "basis-cost");
  check("border stop", w.outcome.verdict === "stop");
} catch (e) {
  check("border", false, e.message);
}

const failed = results.filter((r) => !r.ok);
results.forEach((r) => {
  console.log((r.ok ? "PASS" : "FAIL") + "  " + r.name + (r.detail ? " — " + r.detail : ""));
});
console.log("\n" + (results.length - failed.length) + "/" + results.length + " passed");
process.exit(failed.length ? 1 : 0);
