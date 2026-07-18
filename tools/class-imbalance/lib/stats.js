/* Class counts + imbalance ratio (window.ImbalanceLib). */
(function (global) {
  "use strict";
  const ImbalanceLib = global.ImbalanceLib || (global.ImbalanceLib = {});

  function toBinary(v, positiveLabel) {
    if (v == null || v === "") return null;
    const pos = positiveLabel != null ? String(positiveLabel) : "1";
    const s = String(v).trim();
    if (s === pos) return 1;
    const low = s.toLowerCase();
    if (pos === "1" && (low === "true" || low === "yes" || low === "positive" || low === "fraud" || low === "churn")) {
      return 1;
    }
    if (low === "0" || low === "false" || low === "no" || low === "negative") return 0;
    if (s !== pos) return 0;
    return 0;
  }

  ImbalanceLib.toBinary = toBinary;

  ImbalanceLib.classCounts = function (rows, labelCol, positiveLabel) {
    let pos = 0;
    let neg = 0;
    let skipped = 0;
    (rows || []).forEach(function (r) {
      const y = toBinary(r[labelCol], positiveLabel);
      if (y === null) {
        skipped += 1;
        return;
      }
      if (y === 1) pos += 1;
      else neg += 1;
    });
    const n = pos + neg;
    const rate = n ? pos / n : 0;
    const majority = Math.max(pos, neg);
    const minority = Math.min(pos, neg);
    const ir = minority > 0 ? majority / minority : Infinity;
    return {
      n: n,
      positive: pos,
      negative: neg,
      positiveRate: rate,
      imbalanceRatio: ir,
      skipped: skipped,
      majorityClassAccuracy: n ? majority / n : 0,
    };
  };

  ImbalanceLib.describeImbalance = function (counts) {
    const rate = counts.positiveRate || 0;
    if (counts.n < 2) return "Need labeled rows.";
    if (rate >= 0.4 && rate <= 0.6) return "Nearly balanced — accuracy and F1 should move together.";
    if (rate < 0.05 || rate > 0.95) return "Extreme imbalance — majority accuracy looks high while minority recall collapses.";
    if (rate < 0.2 || rate > 0.8) return "Clear imbalance — compare recall/F1, not accuracy alone.";
    return "Mild imbalance — resampling still shifts minority recall.";
  };
})(typeof window !== "undefined" ? window : globalThis);
