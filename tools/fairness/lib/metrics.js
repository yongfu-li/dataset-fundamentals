/* Classic script — attaches to window.FairnessLib (file:// safe).
 * Fairness metrics from §7.3 / §7.5: demographic parity, disparate impact,
 * equal opportunity, equalized odds, accuracy, threshold sweep, group thresholds. */
(function (global) {
  "use strict";
  const FairnessLib = global.FairnessLib || (global.FairnessLib = {});

  const DI_THRESHOLD = 0.8; // 80% rule

  const METRIC_FORMULAS = {
    accuracy: "Accuracy = (TP + TN) / n — overall correct predictions at the current threshold(s).",
    demographicParityGap:
      "Demographic parity gap = max_a P(Ŷ=1|A=a) − min_a P(Ŷ=1|A=a). Equal selection rates across groups (§7.5).",
    disparateImpact:
      "Disparate-impact ratio = SR_group / SR_reference. 80% rule: ratio < 0.80 flags adverse impact (§7.3).",
    equalOpportunity:
      "Equal opportunity gap = max_a TPR_a − min_a TPR_a, where TPR = P(Ŷ=1|Y=1,A=a) (§7.5.4).",
    equalizedOdds:
      "Equalized odds gap = max(TPR gap, FPR gap). Requires similar TPR and FPR across groups (§7.5.4).",
  };

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

  function thresholdForGroup(group, globalThreshold, groupThresholds) {
    if (groupThresholds && groupThresholds[group] != null && groupThresholds[group] !== "") {
      return Number(groupThresholds[group]);
    }
    return typeof globalThreshold === "number" ? globalThreshold : 0.5;
  }

  /**
   * Normalize rows using mapping; drop rows with missing required fields.
   * @param {Object|null} groupThresholds optional per-group cutoffs (post-processing §7.6)
   */
  function prepareRecords(rows, mapping, threshold, groupThresholds) {
    const records = [];
    let skipped = 0;
    rows.forEach(function (row, i) {
      const group = row[mapping.group];
      const label = toBinary(row[mapping.label]);
      const score = toNumber(row[mapping.score]);
      if (group == null || String(group).trim() === "" || label === null || score === null) {
        skipped += 1;
        return;
      }
      const g = String(group).trim();
      const t = thresholdForGroup(g, threshold, groupThresholds);
      const id = mapping.id && row[mapping.id] != null ? String(row[mapping.id]) : String(i + 1);
      records.push({
        id: id,
        group: g,
        label: label,
        score: score,
        pred: score >= t ? 1 : 0,
        thresholdUsed: t,
      });
    });
    return { records: records, skipped: skipped };
  }

  function groupStats(records) {
    const byGroup = {};
    records.forEach(function (r) {
      if (!byGroup[r.group]) {
        byGroup[r.group] = { n: 0, selected: 0, tp: 0, fp: 0, tn: 0, fn: 0, positives: 0, negatives: 0 };
      }
      const g = byGroup[r.group];
      g.n += 1;
      if (r.pred === 1) g.selected += 1;
      if (r.label === 1) g.positives += 1;
      else g.negatives += 1;
      if (r.pred === 1 && r.label === 1) g.tp += 1;
      else if (r.pred === 1 && r.label === 0) g.fp += 1;
      else if (r.pred === 0 && r.label === 0) g.tn += 1;
      else g.fn += 1;
    });

    return Object.keys(byGroup)
      .sort()
      .map(function (name) {
        const g = byGroup[name];
        const selectionRate = g.n ? g.selected / g.n : 0;
        const tpr = g.positives ? g.tp / g.positives : 0;
        const fpr = g.negatives ? g.fp / g.negatives : 0;
        return {
          group: name,
          n: g.n,
          selected: g.selected,
          selectionRate: round4(selectionRate),
          tpr: round4(tpr),
          fpr: round4(fpr),
          tp: g.tp,
          fp: g.fp,
          tn: g.tn,
          fn: g.fn,
          positives: g.positives,
          negatives: g.negatives,
        };
      });
  }

  function buildReport(records, prepared, threshold, groupThresholds) {
    const groups = groupStats(records);
    let correct = 0;
    records.forEach(function (r) {
      if (r.pred === r.label) correct += 1;
    });
    const accuracy = records.length ? correct / records.length : 0;

    const selectionRates = groups.map(function (g) {
      return g.selectionRate;
    });
    const maxSR = selectionRates.length ? Math.max.apply(null, selectionRates) : 0;
    const minSR = selectionRates.length ? Math.min.apply(null, selectionRates) : 0;
    const dpGap = round4(maxSR - minSR);

    const refGroup = groups.reduce(function (best, g) {
      if (!best || g.selectionRate > best.selectionRate) return g;
      return best;
    }, null);

    const diRatios = groups.map(function (g) {
      const ratio = refGroup && refGroup.selectionRate > 0 ? g.selectionRate / refGroup.selectionRate : 0;
      return {
        group: g.group,
        ratio: round4(ratio),
        fails80: ratio < DI_THRESHOLD,
        isReference: refGroup ? g.group === refGroup.group : false,
      };
    });
    const minDI = diRatios.length
      ? Math.min.apply(
          null,
          diRatios.map(function (d) {
            return d.ratio;
          })
        )
      : 1;
    const diFails = diRatios.some(function (d) {
      return d.fails80;
    });

    const tprs = groups.map(function (g) {
      return g.tpr;
    });
    const fprs = groups.map(function (g) {
      return g.fpr;
    });
    const eoGap = tprs.length ? round4(Math.max.apply(null, tprs) - Math.min.apply(null, tprs)) : 0;
    const fprGap = fprs.length ? round4(Math.max.apply(null, fprs) - Math.min.apply(null, fprs)) : 0;
    const eoddsGap = round4(Math.max(eoGap, fprGap));

    return {
      threshold: threshold,
      groupThresholds: groupThresholds || null,
      perGroupThresholds: !!(groupThresholds && Object.keys(groupThresholds).length),
      n: records.length,
      skipped: prepared.skipped,
      accuracy: round4(accuracy),
      groups: groups,
      demographicParityGap: dpGap,
      disparateImpact: {
        referenceGroup: refGroup ? refGroup.group : null,
        ratios: diRatios,
        minRatio: round4(minDI),
        threshold: DI_THRESHOLD,
        fails80Rule: diFails,
      },
      equalOpportunityGap: eoGap,
      equalizedOddsGap: eoddsGap,
      fprGap: fprGap,
    };
  }

  /**
   * Full fairness report at a given threshold (global or per-group).
   */
  function computeMetrics(rows, mapping, threshold, groupThresholds) {
    const prepared = prepareRecords(rows, mapping, threshold, groupThresholds);
    return buildReport(prepared.records, prepared, threshold, groupThresholds);
  }

  /**
   * Sweep global threshold for accuracy–fairness trade-off curve.
   * @returns {Array<{threshold:number, accuracy:number, dpGap:number, eoGap:number, eoddsGap:number}>}
   */
  function sweepThresholds(rows, mapping, step) {
    const s = step || 0.02;
    const points = [];
    for (let t = 0; t <= 1.0001; t += s) {
      const report = computeMetrics(rows, mapping, round4(t), null);
      points.push({
        threshold: round4(t),
        accuracy: report.accuracy,
        dpGap: report.demographicParityGap,
        eoGap: report.equalOpportunityGap,
        eoddsGap: report.equalizedOddsGap,
      });
    }
    return points;
  }

  /** Score bins per group for distribution overlay chart. */
  function scoreDistributions(rows, mapping, threshold, binCount, groupThresholds) {
    const prepared = prepareRecords(rows, mapping, threshold, groupThresholds || null);
    const bins = binCount || 20;
    const byGroup = {};
    prepared.records.forEach(function (r) {
      if (!byGroup[r.group]) byGroup[r.group] = [];
      byGroup[r.group].push(r.score);
    });
    const allScores = prepared.records.map(function (r) {
      return r.score;
    });
    if (!allScores.length) return { groups: [], min: 0, max: 1, threshold: threshold };
    const min = Math.min.apply(null, allScores);
    const max = Math.max.apply(null, allScores);
    const width = max === min ? 1 : (max - min) / bins;
    const groups = Object.keys(byGroup)
      .sort()
      .map(function (name) {
        const counts = new Array(bins).fill(0);
        byGroup[name].forEach(function (score) {
          let idx = width === 0 ? 0 : Math.floor((score - min) / width);
          if (idx >= bins) idx = bins - 1;
          counts[idx] += 1;
        });
        return {
          group: name,
          counts: counts.map(function (count, i) {
            return { lo: min + i * width, hi: min + (i + 1) * width, count: count };
          }),
        };
      });
    return { groups: groups, min: min, max: max, threshold: threshold, bins: bins, groupThresholds: groupThresholds || null };
  }

  /** Teaching callouts when metrics fail thresholds. */
  function fairnessCallouts(report) {
    const out = [];
    if (!report || !report.n) {
      out.push("No usable rows after mapping. Check that label is 0/1 and score is numeric.");
      return out;
    }
    if (report.skipped) {
      out.push(report.skipped + " row(s) skipped (missing group, non-binary label, or non-numeric score).");
    }
    if (report.perGroupThresholds) {
      out.push(
        "Per-group thresholds are active (post-processing §7.6). Compare with a single global threshold to see mitigation trade-offs."
      );
    }
    if (report.demographicParityGap > 0.1) {
      out.push(
        "Demographic parity gap is " +
          (report.demographicParityGap * 100).toFixed(1) +
          " percentage points — selection rates differ across groups (§7.5)."
      );
    }
    if (report.disparateImpact.fails80Rule) {
      out.push(
        "Disparate-impact check fails the 80% rule (min ratio " +
          report.disparateImpact.minRatio.toFixed(2) +
          " < 0.80). Groups below the dashed line need adverse-impact review (§7.3)."
      );
    }
    if (report.equalOpportunityGap > 0.1) {
      out.push(
        "Equal opportunity gap (TPR) is " +
          (report.equalOpportunityGap * 100).toFixed(1) +
          " pp — qualified applicants are not selected at similar rates (§7.5)."
      );
    }
    if (report.equalizedOddsGap > 0.1) {
      out.push(
        "Equalized odds gap is " +
          (report.equalizedOddsGap * 100).toFixed(1) +
          " pp (max of TPR and FPR gaps). Error rates are uneven across groups (§7.5.4)."
      );
    }
    if (!report.perGroupThresholds && report.demographicParityGap <= 0.1 && !report.disparateImpact.fails80Rule &&
        report.equalOpportunityGap <= 0.1 && report.equalizedOddsGap <= 0.1) {
      out.push("At this threshold, group gaps look small on the selected metrics. Try other thresholds to explore the accuracy–fairness trade-off.");
    }
    return out;
  }

  FairnessLib.DI_THRESHOLD = DI_THRESHOLD;
  FairnessLib.METRIC_FORMULAS = METRIC_FORMULAS;
  FairnessLib.toNumber = toNumber;
  FairnessLib.toBinary = toBinary;
  FairnessLib.prepareRecords = prepareRecords;
  FairnessLib.computeMetrics = computeMetrics;
  FairnessLib.sweepThresholds = sweepThresholds;
  FairnessLib.scoreDistributions = scoreDistributions;
  FairnessLib.fairnessCallouts = fairnessCallouts;
})(typeof window !== "undefined" ? window : globalThis);
