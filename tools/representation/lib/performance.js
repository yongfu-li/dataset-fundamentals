/* Classic script — optional per-group accuracy at a score threshold. */
(function (global) {
  "use strict";
  const RepresentationLib = global.RepresentationLib || (global.RepresentationLib = {});

  function toNumber(v) {
    if (typeof v === "number") return Number.isFinite(v) ? v : null;
    if (typeof v !== "string") return null;
    const t = v.trim();
    if (t === "") return null;
    const n = Number(t);
    return Number.isFinite(n) ? n : null;
  }

  function toBinary(v) {
    if (typeof v === "boolean") return v ? 1 : 0;
    const n = toNumber(v);
    if (n === null) {
      const s = String(v == null ? "" : v).trim().toLowerCase();
      if (s === "1" || s === "true" || s === "yes" || s === "positive") return 1;
      if (s === "0" || s === "false" || s === "no" || s === "negative") return 0;
      return null;
    }
    if (n === 0 || n === 1) return n;
    return null;
  }

  function round4(n) {
    return Math.round(n * 10000) / 10000;
  }

  /**
   * Per-group accuracy (and TPR) at a fixed threshold.
   * @param {Array} rows
   * @param {{ group: string, label: string, score: string }} mapping
   * @param {number} threshold
   */
  function computePerformance(rows, mapping, threshold) {
    if (!mapping || !mapping.group || !mapping.label || !mapping.score) {
      return null;
    }
    const t = typeof threshold === "number" ? threshold : 0.5;
    const byGroup = {};
    let skipped = 0;
    let overallCorrect = 0;
    let overallN = 0;

    (rows || []).forEach(function (row) {
      const group = row[mapping.group];
      const label = toBinary(row[mapping.label]);
      const score = toNumber(row[mapping.score]);
      if (group == null || String(group).trim() === "" || label === null || score === null) {
        skipped += 1;
        return;
      }
      const g = String(group).trim();
      if (!byGroup[g]) {
        byGroup[g] = { n: 0, correct: 0, tp: 0, positives: 0 };
      }
      const pred = score >= t ? 1 : 0;
      const bucket = byGroup[g];
      bucket.n += 1;
      overallN += 1;
      if (pred === label) {
        bucket.correct += 1;
        overallCorrect += 1;
      }
      if (label === 1) {
        bucket.positives += 1;
        if (pred === 1) bucket.tp += 1;
      }
    });

    const groups = Object.keys(byGroup)
      .sort()
      .map(function (name) {
        const b = byGroup[name];
        return {
          group: name,
          n: b.n,
          accuracy: b.n ? round4(b.correct / b.n) : 0,
          tpr: b.positives ? round4(b.tp / b.positives) : 0,
          positives: b.positives,
        };
      });

    return {
      threshold: t,
      skipped: skipped,
      overallAccuracy: overallN ? round4(overallCorrect / overallN) : 0,
      groups: groups,
    };
  }

  RepresentationLib.computePerformance = computePerformance;
})(typeof window !== "undefined" ? window : globalThis);
