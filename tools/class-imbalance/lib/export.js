/* Export helpers (window.ImbalanceLib). */
(function (global) {
  "use strict";
  const ImbalanceLib = global.ImbalanceLib || (global.ImbalanceLib = {});

  function download(filename, text, mime) {
    const blob = new Blob([text], { type: mime || "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function round4(n) {
    return Math.round(n * 10000) / 10000;
  }

  function packMetrics(m) {
    return {
      accuracy: round4(m.accuracy),
      precision: round4(m.precision),
      recall: round4(m.recall),
      f1: round4(m.f1),
      confusion: { tp: m.tp, fp: m.fp, tn: m.tn, fn: m.fn },
    };
  }

  ImbalanceLib.buildReport = function (session, result) {
    return {
      format: "class-imbalance-report",
      version: 1,
      exportedAt: new Date().toISOString(),
      source: session.source || session.name || "session",
      bookAnchors: session.bookAnchors || ["§5.2"],
      labelColumn: result.labelColumn,
      featureColumns: result.featureColumns,
      strategy: result.strategy,
      seed: result.seed,
      model: {
        type: "logistic-regression",
        binary: true,
        featureScaling: "z-score",
        threshold: 0.5,
        optimizer: "batch-gradient-descent",
        epochs: 80,
        learningRate: 0.35,
      },
      overall: {
        n: result.overall.n,
        positive: result.overall.positive,
        negative: result.overall.negative,
        positiveRate: round4(result.overall.positiveRate),
        imbalanceRatio: result.overall.imbalanceRatio === Infinity ? null : round4(result.overall.imbalanceRatio),
        majorityClassAccuracy: round4(result.overall.majorityClassAccuracy),
      },
      holdout: result.holdout,
      note: result.note,
      baseline: {
        trainSize: result.baseline.trainSize,
        trainPositive: result.baseline.trainPositive,
        trainNegative: result.baseline.trainNegative,
        metrics: packMetrics(result.baseline.metrics),
      },
      treated: {
        strategy: result.treated.strategy,
        trainSize: result.treated.trainSize,
        trainPositive: result.treated.trainPositive,
        trainNegative: result.treated.trainNegative,
        weightInfo: result.treated.weightInfo,
        metrics: packMetrics(result.treated.metrics),
      },
    };
  };

  ImbalanceLib.reportToMarkdown = function (report) {
    const b = report.baseline.metrics;
    const t = report.treated.metrics;
    const lines = [
      "# Class imbalance report",
      "",
      "- Source: `" + report.source + "`",
      "- Model: binary logistic regression (z-scored features, threshold 0.5, batch gradient descent)",
      "- Strategy: `" + report.strategy + "`",
      "- Positive rate: " + report.overall.positiveRate,
      "- Imbalance ratio (maj/min): " + (report.overall.imbalanceRatio == null ? "∞" : report.overall.imbalanceRatio),
      "- Majority-class accuracy (trap): " + report.overall.majorityClassAccuracy,
      "",
      report.note,
      "",
      "| Metric | Baseline | Strategy |",
      "|--------|----------|----------|",
      "| Accuracy | " + b.accuracy + " | " + t.accuracy + " |",
      "| Precision | " + b.precision + " | " + t.precision + " |",
      "| Recall | " + b.recall + " | " + t.recall + " |",
      "| F1 | " + b.f1 + " | " + t.f1 + " |",
      "",
    ];
    return lines.join("\n");
  };

  ImbalanceLib.downloadReportJson = function (report) {
    download("imbalance-report.json", JSON.stringify(report, null, 2), "application/json");
  };

  ImbalanceLib.downloadReportMd = function (report) {
    download("imbalance-report.md", ImbalanceLib.reportToMarkdown(report), "text/markdown");
  };

  ImbalanceLib.download = download;
})(typeof window !== "undefined" ? window : globalThis);
