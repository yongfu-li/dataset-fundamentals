/** Smoke tests for PiiLib. */
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
    "lib/detect.js",
    "lib/scrub.js",
    "lib/export.js",
  ]) {
    vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
  }
  return ctx.window.PiiLib;
}

const Lib = loadLib();
const results = [];

function check(name, ok, detail) {
  results.push({ name, ok, detail: detail || "" });
}

try {
  const hits = Lib.scanText("Email ada@example.com and call 415-555-0134 please.");
  check(
    "email hit",
    hits.some((h) => h.type === "email" && h.value.indexOf("@") !== -1)
  );
  check(
    "phone hit",
    hits.some((h) => h.type === "phone")
  );
} catch (e) {
  check("scanText", false, e.message);
}

try {
  const p = Lib.loadPreset("customer-table");
  const roles = Lib.inferColumnRoles(p.columns);
  check("role email", roles.email === "email", JSON.stringify(roles));
  check("role phone", roles.phone === "phone");
  const findings = Lib.scanRows(p.rows, p.columns, roles);
  check("findings > 0", findings.length > 0, "n=" + findings.length);
  const scrub = Lib.applyScrub(p.rows, p.columns, findings, {
    policy: "mask",
    dropColumns: ["full_name"],
  });
  check("dropped name", scrub.columns.indexOf("full_name") === -1);
  check("email masked", String(scrub.rows[0].email).indexOf("***") !== -1);
} catch (e) {
  check("customer-table", false, e.message);
}

try {
  const p = Lib.loadPreset("support-tickets");
  const roles = Lib.inferColumnRoles(p.columns);
  const findings = Lib.scanRows(p.rows, p.columns, roles);
  check(
    "tickets email",
    findings.some((f) => f.type === "email"),
    "n=" + findings.length
  );
  const scrub = Lib.applyScrub(p.rows, p.columns, findings, { policy: "tokenize" });
  check("tokenize", scrub.log.some((a) => a.action === "tokenize"));
  const audit = Lib.buildAudit(
    p,
    { purpose: "share-with-vendor", consentOk: true, retentionDays: 90 },
    scrub,
    Lib.summarizeFindings(findings)
  );
  check("audit format", audit.format === "pii-scrub-log");
} catch (e) {
  check("support-tickets", false, e.message);
}

try {
  check("luhn test card", Lib.luhnOk("4111111111111111"));
  check("luhn bad", !Lib.luhnOk("4111111111111112"));
} catch (e) {
  check("luhn", false, e.message);
}

const failed = results.filter((r) => !r.ok);
results.forEach((r) => {
  console.log((r.ok ? "PASS" : "FAIL") + "  " + r.name + (r.detail ? " — " + r.detail : ""));
});
console.log("\n" + (results.length - failed.length) + "/" + results.length + " passed");
process.exit(failed.length ? 1 : 0);
