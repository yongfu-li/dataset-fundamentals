/* Classic script — attaches to window.SamplingLib (file:// safe). */
(function (global) {
"use strict";
const SamplingLib = global.SamplingLib || (global.SamplingLib = {});

/**
 * Client-side export helpers.
 * @typedef {Record<string, unknown>} Row
 */

/**
 * @param {string} filename
 * @param {string} content
 * @param {string} mime
 */
function downloadText(filename, content, mime = "text/plain") {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * @param {Row[]} rows
 * @returns {string}
 */
function rowsToCsv(rows) {
  if (!rows.length) return "";
  const columns = [...new Set(rows.flatMap((r) => Object.keys(r)))];
  const escape = (v) => {
    const s = String(v ?? "");
    if (s.includes(",") || s.includes('"') || s.includes("\n")) {
      return `"${s.replace(/"/g, '""')}"`;
    }
    return s;
  };
  const lines = [columns.join(",")];
  rows.forEach((row) => {
    lines.push(columns.map((c) => escape(row[c])).join(","));
  });
  return lines.join("\n");
}

/**
 * @param {Row[]} rows
 * @param {string} filename
 */
function downloadSampleCsv(rows, filename = "sample.csv") {
  downloadText(filename, rowsToCsv(rows), "text/csv");
}

/**
 * @param {unknown} data
 * @param {string} filename
 */
function downloadJson(data, filename = "sample.json") {
  downloadText(filename, JSON.stringify(data, null, 2), "application/json");
}

/**
 * @param {Row[]} rows
 * @param {Record<string, unknown>} metadata
 */
function downloadBundle(rows, metadata) {
  downloadSampleCsv(rows, "sample.csv");
  downloadJson(rows, "sample.json");
  downloadJson(metadata, "sampling-metadata.json");
}

  SamplingLib.downloadText = downloadText;
  SamplingLib.rowsToCsv = rowsToCsv;
  SamplingLib.downloadSampleCsv = downloadSampleCsv;
  SamplingLib.downloadJson = downloadJson;
  SamplingLib.downloadBundle = downloadBundle;
})(typeof window !== "undefined" ? window : globalThis);
