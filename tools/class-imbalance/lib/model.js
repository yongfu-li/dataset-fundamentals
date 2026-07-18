/* Toy logistic regression + classification metrics (window.ImbalanceLib). */
(function (global) {
  "use strict";
  const ImbalanceLib = global.ImbalanceLib || (global.ImbalanceLib = {});

  function toNumber(v) {
    if (typeof v === "number") return Number.isFinite(v) ? v : null;
    if (typeof v !== "string") return null;
    const t = v.trim();
    if (t === "") return null;
    const n = Number(t);
    return Number.isFinite(n) ? n : null;
  }

  function sigmoid(z) {
    if (z >= 20) return 1;
    if (z <= -20) return 0;
    return 1 / (1 + Math.exp(-z));
  }

  function standardize(matrix) {
    const n = matrix.length;
    const d = n ? matrix[0].length : 0;
    const mean = new Array(d).fill(0);
    const std = new Array(d).fill(0);
    matrix.forEach(function (row) {
      row.forEach(function (v, j) {
        mean[j] += v;
      });
    });
    if (n) {
      for (let j = 0; j < d; j += 1) mean[j] /= n;
    }
    matrix.forEach(function (row) {
      row.forEach(function (v, j) {
        const dlt = v - mean[j];
        std[j] += dlt * dlt;
      });
    });
    for (let j = 0; j < d; j += 1) {
      std[j] = Math.sqrt(std[j] / Math.max(1, n)) || 1;
    }
    const out = matrix.map(function (row) {
      return row.map(function (v, j) {
        return (v - mean[j]) / std[j];
      });
    });
    return { X: out, mean: mean, std: std };
  }

  function applyScale(matrix, mean, std) {
    return matrix.map(function (row) {
      return row.map(function (v, j) {
        return (v - mean[j]) / (std[j] || 1);
      });
    });
  }

  function extractXY(items, featureCols) {
    const X = [];
    const y = [];
    const kept = [];
    items.forEach(function (item) {
      const feats = [];
      let ok = true;
      featureCols.forEach(function (c) {
        const n = toNumber(item.row[c]);
        if (n === null) ok = false;
        else feats.push(n);
      });
      if (!ok || !feats.length) return;
      X.push(feats);
      y.push(item.y);
      kept.push(item);
    });
    return { X: X, y: y, items: kept };
  }

  /**
   * Fit logistic regression with optional per-row weights.
   */
  ImbalanceLib.fitLogistic = function (trainItems, featureCols, weights, opts) {
    const o = opts || {};
    const lr = o.lr == null ? 0.35 : o.lr;
    const epochs = o.epochs == null ? 80 : o.epochs;
    const extracted = extractXY(trainItems, featureCols);
    if (extracted.X.length < 4) throw new Error("Need at least 4 valid training rows with numeric features.");
    const scaled = standardize(extracted.X);
    const X = scaled.X;
    const y = extracted.y;
    const d = X[0].length;
    const w = new Array(d).fill(0);
    let b = 0;
    const rowW =
      weights && weights.length === trainItems.length
        ? extracted.items.map(function (item) {
            const idx = trainItems.indexOf(item);
            return weights[idx] != null ? weights[idx] : 1;
          })
        : X.map(function () {
            return 1;
          });

    for (let ep = 0; ep < epochs; ep += 1) {
      let gb = 0;
      const gw = new Array(d).fill(0);
      let wSum = 0;
      for (let i = 0; i < X.length; i += 1) {
        let z = b;
        for (let j = 0; j < d; j += 1) z += w[j] * X[i][j];
        const p = sigmoid(z);
        const err = p - y[i];
        const wi = rowW[i];
        wSum += wi;
        gb += wi * err;
        for (let j = 0; j < d; j += 1) gw[j] += wi * err * X[i][j];
      }
      b -= (lr * gb) / (wSum || 1);
      for (let j = 0; j < d; j += 1) w[j] -= (lr * gw[j]) / (wSum || 1);
    }
    return {
      weights: w,
      bias: b,
      mean: scaled.mean,
      std: scaled.std,
      featureColumns: featureCols.slice(),
      nTrain: X.length,
    };
  };

  ImbalanceLib.predictProba = function (model, items, featureCols) {
    const extracted = extractXY(items, featureCols || model.featureColumns);
    const X = applyScale(extracted.X, model.mean, model.std);
    const scores = [];
    for (let i = 0; i < X.length; i += 1) {
      let z = model.bias;
      for (let j = 0; j < model.weights.length; j += 1) z += model.weights[j] * X[i][j];
      scores.push({ item: extracted.items[i], proba: sigmoid(z), y: extracted.y[i] });
    }
    return scores;
  };

  ImbalanceLib.metricsAtThreshold = function (scored, threshold) {
    const t = threshold == null ? 0.5 : threshold;
    let tp = 0;
    let fp = 0;
    let tn = 0;
    let fn = 0;
    scored.forEach(function (s) {
      const pred = s.proba >= t ? 1 : 0;
      if (pred === 1 && s.y === 1) tp += 1;
      else if (pred === 1 && s.y === 0) fp += 1;
      else if (pred === 0 && s.y === 0) tn += 1;
      else fn += 1;
    });
    const n = tp + fp + tn + fn;
    const accuracy = n ? (tp + tn) / n : 0;
    const precision = tp + fp ? tp / (tp + fp) : 0;
    const recall = tp + fn ? tp / (tp + fn) : 0;
    const f1 = precision + recall ? (2 * precision * recall) / (precision + recall) : 0;
    return {
      tp: tp,
      fp: fp,
      tn: tn,
      fn: fn,
      n: n,
      accuracy: accuracy,
      precision: precision,
      recall: recall,
      f1: f1,
      threshold: t,
    };
  };

  ImbalanceLib.evaluateStrategy = function (holdout, featureCols, strategy, seed, threshold) {
    const prepared = ImbalanceLib.applyStrategy(holdout.train, strategy, seed);
    const model = ImbalanceLib.fitLogistic(prepared.items, featureCols, prepared.weights);
    const scored = ImbalanceLib.predictProba(model, holdout.test, featureCols);
    const metrics = ImbalanceLib.metricsAtThreshold(scored, threshold);
    let pos = 0;
    let neg = 0;
    prepared.items.forEach(function (x) {
      if (x.y === 1) pos += 1;
      else neg += 1;
    });
    return {
      strategy: strategy,
      model: model,
      metrics: metrics,
      trainSize: prepared.items.length,
      trainPositive: pos,
      trainNegative: neg,
      weightInfo: prepared.weightInfo || null,
      testSize: holdout.test.length,
    };
  };

  ImbalanceLib.runComparison = function (rows, opts) {
    const o = opts || {};
    const labelCol = o.labelColumn;
    const features = o.featureColumns || [];
    const positiveLabel = o.positiveLabel != null ? String(o.positiveLabel) : "1";
    const seed = o.seed == null ? 42 : Number(o.seed);
    const strategy = o.strategy || "none";
    if (!labelCol) throw new Error("Select a label column.");
    if (!features.length) throw new Error("Select at least one numeric feature.");
    const holdout = ImbalanceLib.stratifiedHoldout(rows, labelCol, positiveLabel, 0.3, seed);
    if (holdout.test.length < 2 || holdout.train.length < 4) {
      throw new Error("Not enough rows after holdout — need more labeled data.");
    }
    const baseline = ImbalanceLib.evaluateStrategy(holdout, features, "none", seed, o.threshold);
    const treated =
      strategy === "none"
        ? baseline
        : ImbalanceLib.evaluateStrategy(holdout, features, strategy, seed + 3, o.threshold);
    const overall = ImbalanceLib.classCounts(rows, labelCol, positiveLabel);
    return {
      overall: overall,
      holdout: {
        train: holdout.train.length,
        test: holdout.test.length,
        testPositive: holdout.test.filter(function (x) {
          return x.y === 1;
        }).length,
        testNegative: holdout.test.filter(function (x) {
          return x.y === 0;
        }).length,
      },
      baseline: baseline,
      treated: treated,
      strategy: strategy,
      seed: seed,
      labelColumn: labelCol,
      featureColumns: features.slice(),
      note: "Test fold is never resampled. Metrics are always on the held-out test set.",
    };
  };
})(typeof window !== "undefined" ? window : globalThis);
