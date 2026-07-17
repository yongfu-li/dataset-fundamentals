/* Classic script — attaches to window.SamplingLib (file:// safe). */
(function (global) {
"use strict";
const SamplingLib = global.SamplingLib || (global.SamplingLib = {});

/**
 * Distribution stats and bias callouts for sampling playground.
 * @typedef {Record<string, unknown>} Row
 */

/**
 * @param {Row[]} rows
 * @param {string|null} column
 * @returns {Record<string, number>}
 */
function countByColumn(rows, column) {
  if (!column) return {};
  const counts = /** @type {Record<string, number>} */ ({});
  rows.forEach((row) => {
    const key = String(row[column] ?? "(missing)");
    counts[key] = (counts[key] ?? 0) + 1;
  });
  return counts;
}

/**
 * @param {Record<string, number>} counts
 * @param {number} total
 * @returns {Record<string, number>}
 */
function toPercentages(counts, total) {
  const pct = /** @type {Record<string, number>} */ ({});
  Object.entries(counts).forEach(([k, v]) => {
    pct[k] = total ? (v / total) * 100 : 0;
  });
  return pct;
}

/**
 * @param {Row[]} population
 * @param {Row[]} sample
 * @param {string|null} column
 * @returns {{ labels: string[], populationPct: number[], samplePct: number[], maxGap: number }}
 */
function compareDistributions(population, sample, column) {
  if (!column) {
    return { labels: [], populationPct: [], samplePct: [], maxGap: 0 };
  }
  const popCounts = countByColumn(population, column);
  const sampCounts = countByColumn(sample, column);
  const labels = [...new Set([...Object.keys(popCounts), ...Object.keys(sampCounts)])].sort();
  const popPct = toPercentages(popCounts, population.length);
  const sampPct = toPercentages(sampCounts, sample.length);
  let maxGap = 0;
  const populationPct = labels.map((l) => {
    const gap = Math.abs((popPct[l] ?? 0) - (sampPct[l] ?? 0));
    if (gap > maxGap) maxGap = gap;
    return popPct[l] ?? 0;
  });
  const samplePct = labels.map((l) => sampPct[l] ?? 0);
  return { labels, populationPct, samplePct, maxGap };
}

/**
 * @param {string} method
 * @param {{ maxGap?: number }} stats
 * @param {string[]} existingWarnings
 * @returns {string[]}
 */
function biasCallouts(method, stats, existingWarnings = []) {
  const out = [...existingWarnings];
  const gap = stats.maxGap ?? 0;

  switch (method) {
    case "srs":
      if (gap > 15) {
        out.push(
          "Sample shares diverge from the population on this dimension—random variation is expected in small samples.",
        );
      }
      break;
    case "stratified":
      if (gap > 8) {
        out.push(
          "Stratified sampling should track stratum proportions closely; check allocation settings or stratum sizes.",
        );
      }
      break;
    case "cluster":
      out.push(
        "Cluster samples often look homogeneous within clusters; precision is usually lower than individual-level draws.",
      );
      break;
    case "systematic":
      out.push(
        "Systematic sampling is efficient on ordered frames but can mirror hidden periodic structure in the order column.",
      );
      break;
    case "convenience":
      out.push(
        "Convenience samples overweight whoever appears first in the order column—avoid population claims.",
      );
      break;
    case "snowball":
      out.push(
        "Snowball chains concentrate around seeds; referred units tend to resemble their referrers.",
      );
      break;
    default:
      break;
  }
  return [...new Set(out)];
}

/**
 * Numeric summary for display.
 * @param {Row[]} population
 * @param {Row[]} sample
 * @returns {{ populationN: number, sampleN: number, fraction: string }}
 */
function sampleSummary(population, sample) {
  const populationN = population.length;
  const sampleN = sample.length;
  const fraction = populationN
    ? `${((sampleN / populationN) * 100).toFixed(1)}%`
    : "0%";
  return { populationN, sampleN, fraction };
}

  SamplingLib.countByColumn = countByColumn;
  SamplingLib.toPercentages = toPercentages;
  SamplingLib.compareDistributions = compareDistributions;
  SamplingLib.biasCallouts = biasCallouts;
  SamplingLib.sampleSummary = sampleSummary;
})(typeof window !== "undefined" ? window : globalThis);
