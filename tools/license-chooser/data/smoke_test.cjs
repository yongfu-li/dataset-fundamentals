/* Smoke checks for license recommendation rules (node). */
"use strict";
const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "../../..");
const assets = path.join(root, "assets");
const sandbox = {
  console,
  Blob: class {
    constructor(parts) {
      this._t = parts.join("");
    }
  },
  URL: {
    createObjectURL() {
      return "blob:test";
    },
    revokeObjectURL() {},
  },
  setTimeout,
  document: {
    createElement() {
      return { click() {}, style: {} };
    },
    body: { appendChild() {}, removeChild() {} },
  },
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;

function load(file) {
  const code = fs.readFileSync(file, "utf8");
  vm.runInNewContext(code, sandbox, { filename: file });
}

load(path.join(assets, "licenses-bundle.js"));
load(path.join(assets, "licenses.js"));
load(path.join(__dirname, "../lib/recommend.js"));

const Lib = sandbox.LicenseChooserLib;
const Lic = sandbox.ToolsLicenses;

assert.ok(sandbox.ToolsLicenseTexts, "bundle global");
assert.ok(Lic, "ToolsLicenses");
assert.ok(Lib, "LicenseChooserLib");

Lib.SCENARIOS.forEach(function (sc) {
  const r = Lib.recommend(sc.answers);
  assert.strictEqual(r.license_key, sc.expect_key, sc.id + " → " + sc.expect_key);
});

const file = Lic.buildLicenseFile({
  license_key: "cc-by-4.0",
  dataset_name: "Test",
  creators: "Authors",
});
assert.ok(file.has_full_text, "CC BY should have full text");
assert.ok(file.content.indexOf("Creative Commons") !== -1);

const closed = Lic.buildLicenseFile({ license_key: "closed", dataset_name: "X" });
assert.ok(!closed.has_full_text);
assert.ok(closed.content.indexOf("Restricted") !== -1);

console.log("license-chooser smoke ok:", Lib.SCENARIOS.length, "scenarios");
