/* Classic script — attaches to window.IaaLib (file:// safe).
 * Span / box / time-segment matching for entity-level IAA (exact + IoU).
 * Teaching: NER and detection agreement use match rules, not only Cohen's κ. */
(function (global) {
  "use strict";
  const IaaLib = global.IaaLib || (global.IaaLib = {});

  function round4(n) {
    return Math.round(n * 10000) / 10000;
  }

  function asNum(v) {
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  }

  /** Normalize a span / time segment: {start, end, label}. */
  function normalizeSpan(raw) {
    if (!raw || typeof raw !== "object") return null;
    const start = asNum(raw.start != null ? raw.start : raw.begin);
    const end = asNum(raw.end != null ? raw.end : raw.stop);
    if (start == null || end == null || end <= start) return null;
    const label = raw.label != null ? String(raw.label).trim() : raw.type != null ? String(raw.type).trim() : "";
    return { start: start, end: end, label: label || "ENT" };
  }

  /** Normalize a box: {x, y, w, h, label} or {x1,y1,x2,y2,label}. */
  function normalizeBox(raw) {
    if (!raw || typeof raw !== "object") return null;
    let x1;
    let y1;
    let x2;
    let y2;
    if (raw.x1 != null || raw.xmin != null) {
      x1 = asNum(raw.x1 != null ? raw.x1 : raw.xmin);
      y1 = asNum(raw.y1 != null ? raw.y1 : raw.ymin);
      x2 = asNum(raw.x2 != null ? raw.x2 : raw.xmax);
      y2 = asNum(raw.y2 != null ? raw.y2 : raw.ymax);
    } else {
      const x = asNum(raw.x);
      const y = asNum(raw.y);
      const w = asNum(raw.w != null ? raw.w : raw.width);
      const h = asNum(raw.h != null ? raw.h : raw.height);
      if (x == null || y == null || w == null || h == null || w <= 0 || h <= 0) return null;
      x1 = x;
      y1 = y;
      x2 = x + w;
      y2 = y + h;
    }
    if (x1 == null || y1 == null || x2 == null || y2 == null || x2 <= x1 || y2 <= y1) return null;
    const label = raw.label != null ? String(raw.label).trim() : raw.class != null ? String(raw.class).trim() : "";
    return {
      x: x1,
      y: y1,
      w: x2 - x1,
      h: y2 - y1,
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      label: label || "OBJ",
    };
  }

  function parseEntityList(value, kind) {
    if (value == null || value === "") return [];
    let arr = value;
    if (typeof value === "string") {
      const t = value.trim();
      if (!t) return [];
      try {
        arr = JSON.parse(t);
      } catch (err) {
        return [];
      }
    }
    if (!Array.isArray(arr)) return [];
    const out = [];
    arr.forEach(function (item) {
      const n = kind === "boxes" ? normalizeBox(item) : normalizeSpan(item);
      if (n) out.push(n);
    });
    return out;
  }

  function spanIoU(a, b) {
    const interStart = Math.max(a.start, b.start);
    const interEnd = Math.min(a.end, b.end);
    const inter = Math.max(0, interEnd - interStart);
    const union = a.end - a.start + (b.end - b.start) - inter;
    return union > 0 ? inter / union : 0;
  }

  function boxIoU(a, b) {
    const x1 = Math.max(a.x1, b.x1);
    const y1 = Math.max(a.y1, b.y1);
    const x2 = Math.min(a.x2, b.x2);
    const y2 = Math.min(a.y2, b.y2);
    const inter = Math.max(0, x2 - x1) * Math.max(0, y2 - y1);
    const areaA = (a.x2 - a.x1) * (a.y2 - a.y1);
    const areaB = (b.x2 - b.x1) * (b.y2 - b.y1);
    const union = areaA + areaB - inter;
    return union > 0 ? inter / union : 0;
  }

  function scorePair(a, b, mode, spanMatch) {
    if (mode === "boxes") return boxIoU(a, b);
    if (spanMatch === "exact") {
      return a.start === b.start && a.end === b.end ? 1 : 0;
    }
    return spanIoU(a, b);
  }

  /**
   * Greedy bipartite match by score (IoU or exact).
   * @returns {{ matches: Array, unmatchedA: Array, unmatchedB: Array }}
   */
  function matchEntities(listA, listB, opts) {
    const mode = opts.mode || "spans";
    const threshold = opts.iouThreshold != null ? opts.iouThreshold : 0.5;
    const requireLabel = opts.requireLabel !== false;
    const spanMatch = opts.spanMatch || "iou";
    const candidates = [];
    for (let i = 0; i < listA.length; i += 1) {
      for (let j = 0; j < listB.length; j += 1) {
        if (requireLabel && listA[i].label !== listB[j].label) continue;
        const score = scorePair(listA[i], listB[j], mode, spanMatch);
        const pass = spanMatch === "exact" && mode !== "boxes" ? score === 1 : score >= threshold;
        if (pass) {
          candidates.push({ i: i, j: j, score: score, a: listA[i], b: listB[j] });
        }
      }
    }
    candidates.sort(function (x, y) {
      return y.score - x.score;
    });
    const usedA = {};
    const usedB = {};
    const matches = [];
    candidates.forEach(function (c) {
      if (usedA[c.i] || usedB[c.j]) return;
      usedA[c.i] = true;
      usedB[c.j] = true;
      matches.push(c);
    });
    const unmatchedA = [];
    const unmatchedB = [];
    listA.forEach(function (ent, i) {
      if (!usedA[i]) unmatchedA.push(ent);
    });
    listB.forEach(function (ent, j) {
      if (!usedB[j]) unmatchedB.push(ent);
    });
    return { matches: matches, unmatchedA: unmatchedA, unmatchedB: unmatchedB };
  }

  function prfFromCounts(tp, fp, fn) {
    const precision = tp + fp > 0 ? tp / (tp + fp) : null;
    const recall = tp + fn > 0 ? tp / (tp + fn) : null;
    let f1 = null;
    if (precision != null && recall != null && precision + recall > 0) {
      f1 = (2 * precision * recall) / (precision + recall);
    } else if (tp === 0 && fp === 0 && fn === 0) {
      f1 = 1;
      return {
        tp: tp,
        fp: fp,
        fn: fn,
        precision: 1,
        recall: 1,
        f1: 1,
      };
    }
    return {
      tp: tp,
      fp: fp,
      fn: fn,
      precision: precision == null ? null : round4(precision),
      recall: recall == null ? null : round4(recall),
      f1: f1 == null ? null : round4(f1),
    };
  }

  function interpretF1(f1) {
    if (f1 == null || !Number.isFinite(f1)) {
      return { label: "n/a", detail: "No entities to score.", stopScale: true };
    }
    if (f1 < 0.4) {
      return {
        label: "low",
        detail: "Entity-level F1 below ~0.4 — revise span/box guidelines before scaling (same gate idea as eg:4.31).",
        stopScale: true,
      };
    }
    if (f1 < 0.6) {
      return {
        label: "fair",
        detail: "Usable for pilots; tighten boundaries and ambiguous classes.",
        stopScale: true,
      };
    }
    if (f1 < 0.8) {
      return {
        label: "moderate–substantial",
        detail: "Solid match rate under the chosen IoU / exact rule.",
        stopScale: false,
      };
    }
    return {
      label: "high",
      detail: "Strong entity agreement — typically ready to scale under this match rule.",
      stopScale: false,
    };
  }

  /**
   * Entity-level report across documents.
   * mapping: { id?, text?, raterA, raterB } where rater columns hold entity lists.
   * options: { mode: 'spans'|'boxes', iouThreshold, requireLabel, spanMatch }
   */
  function computeEntityReport(rows, mapping, options) {
    const opts = options || {};
    const mode = opts.mode === "boxes" ? "boxes" : "spans";
    const iouThreshold = opts.iouThreshold != null ? Number(opts.iouThreshold) : 0.5;
    const requireLabel = opts.requireLabel !== false;
    const spanMatch = opts.spanMatch === "exact" ? "exact" : "iou";
    const matchOpts = {
      mode: mode,
      iouThreshold: iouThreshold,
      requireLabel: requireLabel,
      spanMatch: spanMatch,
    };

    let tp = 0;
    let fp = 0;
    let fn = 0;
    let skipped = 0;
    let iouSum = 0;
    let iouN = 0;
    const items = [];
    const labelPairs = [];

    rows.forEach(function (row, i) {
      const rawA = row[mapping.raterA];
      const rawB = row[mapping.raterB];
      if (rawA == null && rawB == null) {
        skipped += 1;
        return;
      }
      const listA = parseEntityList(rawA, mode);
      const listB = parseEntityList(rawB, mode);
      const matched = matchEntities(listA, listB, matchOpts);
      tp += matched.matches.length;
      fp += matched.unmatchedB.length;
      fn += matched.unmatchedA.length;
      matched.matches.forEach(function (m) {
        iouSum += m.score;
        iouN += 1;
        labelPairs.push({ a: m.a.label, b: m.b.label });
      });
      const id = mapping.id && row[mapping.id] != null ? String(row[mapping.id]) : String(i + 1);
      const text = mapping.text && row[mapping.text] != null ? String(row[mapping.text]) : "";
      const docAgree =
        matched.unmatchedA.length === 0 &&
        matched.unmatchedB.length === 0 &&
        matched.matches.every(function (m) {
          return m.a.label === m.b.label;
        });
      items.push({
        id: id,
        text: text,
        aCount: listA.length,
        bCount: listB.length,
        matches: matched.matches.map(function (m) {
          return {
            score: round4(m.score),
            labelA: m.a.label,
            labelB: m.b.label,
            a: m.a,
            b: m.b,
          };
        }),
        unmatchedA: matched.unmatchedA,
        unmatchedB: matched.unmatchedB,
        agree: docAgree,
        tp: matched.matches.length,
        fp: matched.unmatchedB.length,
        fn: matched.unmatchedA.length,
      });
    });

    const entity = prfFromCounts(tp, fp, fn);
    const meanIoU = iouN > 0 ? round4(iouSum / iouN) : null;
    const disagreements = items.filter(function (it) {
      return !it.agree;
    });

    let contingency = null;
    let cohen = null;
    if (labelPairs.length && IaaLib.cohensKappa) {
      const ck = IaaLib.cohensKappa(
        labelPairs.map(function (p) {
          return p.a;
        }),
        labelPairs.map(function (p) {
          return p.b;
        })
      );
      contingency = ck.contingency;
      cohen = ck.metrics;
    }

    return {
      mode: mode,
      matchOptions: {
        iouThreshold: iouThreshold,
        requireLabel: requireLabel,
        spanMatch: mode === "boxes" ? "iou" : spanMatch,
      },
      skipped: skipped,
      items: items,
      disagreements: disagreements,
      entity: Object.assign({}, entity, {
        meanIoU: meanIoU,
        nDocuments: items.length,
        interpretation: interpretF1(entity.f1),
      }),
      contingency: contingency,
      cohen: cohen,
      fleiss: null,
      hasThirdRater: false,
    };
  }

  IaaLib.normalizeSpan = normalizeSpan;
  IaaLib.normalizeBox = normalizeBox;
  IaaLib.parseEntityList = parseEntityList;
  IaaLib.spanIoU = spanIoU;
  IaaLib.boxIoU = boxIoU;
  IaaLib.matchEntities = matchEntities;
  IaaLib.computeEntityReport = computeEntityReport;
  IaaLib.interpretF1 = interpretF1;

  IaaLib.FORMULAS = IaaLib.FORMULAS || {};
  IaaLib.FORMULAS.entityPrecision =
    "Precision = TP / (TP + FP). TP = matched entities; FP = rater-B entities with no match under the rule.";
  IaaLib.FORMULAS.entityRecall =
    "Recall = TP / (TP + FN). FN = rater-A entities with no match under the rule.";
  IaaLib.FORMULAS.entityF1 =
    "Entity F1 = harmonic mean of precision and recall under exact or IoU≥τ matching (§4.5.2 entity-level QC).";
  IaaLib.FORMULAS.meanIoU =
    "Mean IoU averages Intersection-over-Union over greedy matches (character spans, time segments, or boxes).";
  IaaLib.FORMULAS.exactSpan =
    "Exact span match requires identical start and end offsets (and usually the same label).";
  IaaLib.FORMULAS.iouSpan =
    "Soft span/box match: IoU = |∩| / |∪|. Count a pair as TP when IoU ≥ τ (default 0.5).";
})(typeof window !== "undefined" ? window : globalThis);
