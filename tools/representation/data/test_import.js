#!/usr/bin/env node
/** Node tests for representation import parsers (run: node data/test_import.js). */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const libDir = path.join(root, "lib");
const fixDir = path.join(__dirname, "fixtures");

function loadLib() {
  const g = { window: {} };
  ["parse.js", "distribution.js", "performance.js"].forEach(function (f) {
    vm.runInNewContext(fs.readFileSync(path.join(libDir, f), "utf8"), g);
  });
  return g.window.RepresentationLib;
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg || "assertion failed");
}

function main() {
  const L = loadLib();
  let passed = 0;

  function ok(name, fn) {
    fn();
    passed += 1;
    console.log("OK", name);
  }

  ok("population-ref.json", function () {
    const text = fs.readFileSync(path.join(fixDir, "population-ref.json"), "utf8");
    const p = L.parsePopulationReference(text);
    assert(Math.abs(p.population["Group A"] - 0.5) < 0.001);
  });

  ok("sample-bundle.json", function () {
    const text = fs.readFileSync(path.join(fixDir, "sample-bundle.json"), "utf8");
    const d = L.parseUpload(text, "sample-bundle.json");
    assert(d.kind === "dataset");
    assert(d.rows.length === 8);
    assert(d.population["Group A"] === 0.5);
    assert(d.defaultMapping.group === "group");
  });

  ok("datasheet-metadata hints", function () {
    const text = fs.readFileSync(path.join(fixDir, "sample-datasheet-metadata.json"), "utf8");
    const h = L.parseDatasheetMetadata(text);
    assert(h.defaultMapping.group === "group");
    assert(h.defaultMapping.label === "label");
    assert(h.defaultMapping.score === "score");
  });

  ok("CSV upload", function () {
    const text = fs.readFileSync(path.join(fixDir, "sample-upload.csv"), "utf8");
    const d = L.parseUpload(text, "sample-upload.csv");
    assert(d.rows.length === 8);
  });

  ok("CSV + population + hints merge", function () {
    const csv = L.parseUpload(fs.readFileSync(path.join(fixDir, "sample-upload.csv"), "utf8"), "sample-upload.csv");
    const pop = L.parsePopulationReference(fs.readFileSync(path.join(fixDir, "population-ref.json"), "utf8"));
    const hints = L.parseDatasheetMetadata(fs.readFileSync(path.join(fixDir, "sample-datasheet-metadata.json"), "utf8"));
    const mapping = L.suggestMapping(csv.columns, L.mergeMappingHints(hints.defaultMapping, csv.defaultMapping));
    const gaps = L.computeGaps(pop.population, csv.rows, mapping.group);
    assert(gaps.items.length === 2);
    assert(gaps.maxAbsGapPp >= 0);
  });

  ok("limits exported", function () {
    assert(L.MAX_ROWS === 10000);
    assert(L.MAX_BYTES === 5 * 1024 * 1024);
  });

  console.log("\n" + passed + " tests passed.");
}

main();
