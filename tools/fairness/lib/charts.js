/* Classic script — labeled canvas charts for the Bias & fairness meter. */
(function (global) {
  "use strict";
  const FairnessCharts = global.FairnessCharts || (global.FairnessCharts = {});
  const FONT = "Source Sans 3, Arial, sans-serif";
  const TEXT = "#33413c";
  const MUTED = "#66736d";
  const GRID = "#dfe4e1";
  const BAR = "#0f6b5c";
  const BAR_ALT = "#5c8f86";
  const WARN = "#b45309";
  const GROUP_COLORS = ["#0f6b5c", "#5c8f86", "#7a9e8e", "#3d5a80", "#6b5b95", "#8b6f47"];

  function groupColor(i) {
    return GROUP_COLORS[i % GROUP_COLORS.length];
  }

  function clear(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function formatNumber(value) {
    const abs = Math.abs(value);
    if (abs >= 100) return value.toFixed(0);
    if (abs >= 10) return value.toFixed(1);
    return value.toFixed(2).replace(/\.?0+$/, "") || "0";
  }

  function niceMax(value) {
    if (value <= 0) return 1;
    const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
    const normalized = value / magnitude;
    const nice = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
    return nice * magnitude;
  }

  /**
   * Horizontal bars: rate (0–1) by group.
   * @param {HTMLCanvasElement} canvas
   * @param {Array<{group:string, value:number}>} items
   * @param {{ title?: string, xLabel?: string, asPercent?: boolean }} opts
   */
  function drawRateBars(canvas, items, opts) {
    clear(canvas);
    if (!canvas || !items || !items.length) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    opts = opts || {};
    const asPercent = opts.asPercent !== false;
    const plot = { left: 120, right: canvas.width - 52, top: 42, bottom: canvas.height - 40 };
    plot.width = plot.right - plot.left;
    plot.height = plot.bottom - plot.top;
    const maxVal = niceMax(
      Math.max(
        0.01,
        ...items.map(function (it) {
          return it.value;
        })
      )
    );
    const rowH = plot.height / items.length;
    const barH = Math.min(16, rowH * 0.45);

    ctx.font = "11px " + FONT;
    for (let tick = 0; tick <= 4; tick += 1) {
      const value = (maxVal * tick) / 4;
      const x = plot.left + (value / maxVal) * plot.width;
      ctx.strokeStyle = GRID;
      ctx.beginPath();
      ctx.moveTo(x, plot.top);
      ctx.lineTo(x, plot.bottom);
      ctx.stroke();
      ctx.fillStyle = MUTED;
      ctx.textAlign = "center";
      ctx.fillText(asPercent ? (value * 100).toFixed(0) + "%" : formatNumber(value), x, plot.bottom + 14);
    }

    items.forEach(function (it, i) {
      const y = plot.top + i * rowH + rowH / 2;
      const w = (it.value / maxVal) * plot.width;
      ctx.fillStyle = BAR;
      ctx.fillRect(plot.left, y - barH / 2, w, barH);
      ctx.fillStyle = TEXT;
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      const label = it.group.length > 16 ? it.group.slice(0, 15) + "…" : it.group;
      ctx.fillText(label, plot.left - 8, y);
      ctx.textAlign = "left";
      ctx.fillStyle = MUTED;
      const display = asPercent ? (it.value * 100).toFixed(1) + "%" : formatNumber(it.value);
      ctx.fillText(display, plot.left + w + 6, y);
    });

    ctx.fillStyle = TEXT;
    ctx.font = "600 12px " + FONT;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.fillText(opts.xLabel || (asPercent ? "Rate (%)" : "Value"), plot.left + plot.width / 2, canvas.height - 8);
    ctx.textAlign = "left";
    ctx.fillText(opts.title || "Rates by group", plot.left, 22);
  }

  /**
   * Disparate-impact ratios with 80% reference line.
   * @param {HTMLCanvasElement} canvas
   * @param {Array<{group:string, ratio:number, fails80:boolean, isReference:boolean}>} ratios
   * @param {number} threshold
   */
  function drawDisparateImpact(canvas, ratios, threshold) {
    clear(canvas);
    if (!canvas || !ratios || !ratios.length) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rule = typeof threshold === "number" ? threshold : 0.8;
    const plot = { left: 120, right: canvas.width - 40, top: 42, bottom: canvas.height - 40 };
    plot.width = plot.right - plot.left;
    plot.height = plot.bottom - plot.top;
    const maxVal = niceMax(
      Math.max(
        1,
        ...ratios.map(function (r) {
          return r.ratio;
        })
      )
    );
    const rowH = plot.height / ratios.length;
    const barH = Math.min(16, rowH * 0.45);

    ctx.font = "11px " + FONT;
    for (let tick = 0; tick <= 4; tick += 1) {
      const value = (maxVal * tick) / 4;
      const x = plot.left + (value / maxVal) * plot.width;
      ctx.strokeStyle = GRID;
      ctx.beginPath();
      ctx.moveTo(x, plot.top);
      ctx.lineTo(x, plot.bottom);
      ctx.stroke();
      ctx.fillStyle = MUTED;
      ctx.textAlign = "center";
      ctx.fillText(formatNumber(value), x, plot.bottom + 14);
    }

    // 80% rule line
    const ruleX = plot.left + (rule / maxVal) * plot.width;
    ctx.strokeStyle = WARN;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(ruleX, plot.top);
    ctx.lineTo(ruleX, plot.bottom);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = WARN;
    ctx.textAlign = "center";
    ctx.font = "10px " + FONT;
    ctx.fillText("80% rule", ruleX, plot.top - 6);

    ratios.forEach(function (r, i) {
      const y = plot.top + i * rowH + rowH / 2;
      const w = (r.ratio / maxVal) * plot.width;
      ctx.fillStyle = r.fails80 ? WARN : BAR;
      ctx.fillRect(plot.left, y - barH / 2, w, barH);
      ctx.fillStyle = TEXT;
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      const label = r.group + (r.isReference ? " (ref)" : "");
      ctx.fillText(label.length > 18 ? label.slice(0, 17) + "…" : label, plot.left - 8, y);
      ctx.textAlign = "left";
      ctx.fillStyle = MUTED;
      ctx.fillText(r.ratio.toFixed(2), plot.left + w + 6, y);
    });

    ctx.fillStyle = TEXT;
    ctx.font = "600 12px " + FONT;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.fillText("Disparate-impact ratio (vs highest-rate group)", plot.left + plot.width / 2, canvas.height - 8);
    ctx.textAlign = "left";
    ctx.fillText("Disparate impact (§7.3)", plot.left, 22);
  }

  /**
   * Grouped horizontal bars for TPR and FPR by group.
   * @param {HTMLCanvasElement} canvas
   * @param {Array<{group:string, tpr:number, fpr:number}>} groups
   */
  function drawErrorRates(canvas, groups) {
    clear(canvas);
    if (!canvas || !groups || !groups.length) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const plot = { left: 120, right: canvas.width - 48, top: 48, bottom: canvas.height - 40 };
    plot.width = plot.right - plot.left;
    plot.height = plot.bottom - plot.top;
    const maxVal = 1;
    const rowH = plot.height / groups.length;
    const barH = Math.min(10, rowH * 0.28);

    ctx.font = "11px " + FONT;
    for (let tick = 0; tick <= 4; tick += 1) {
      const value = (maxVal * tick) / 4;
      const x = plot.left + (value / maxVal) * plot.width;
      ctx.strokeStyle = GRID;
      ctx.beginPath();
      ctx.moveTo(x, plot.top);
      ctx.lineTo(x, plot.bottom);
      ctx.stroke();
      ctx.fillStyle = MUTED;
      ctx.textAlign = "center";
      ctx.fillText((value * 100).toFixed(0) + "%", x, plot.bottom + 14);
    }

    // legend
    ctx.fillStyle = BAR;
    ctx.fillRect(plot.left, 18, 12, 9);
    ctx.fillStyle = TEXT;
    ctx.textAlign = "left";
    ctx.font = "11px " + FONT;
    ctx.fillText("TPR (true positive rate)", plot.left + 18, 26);
    ctx.fillStyle = BAR_ALT;
    ctx.fillRect(plot.left + 170, 18, 12, 9);
    ctx.fillStyle = TEXT;
    ctx.fillText("FPR (false positive rate)", plot.left + 188, 26);

    groups.forEach(function (g, i) {
      const y = plot.top + i * rowH + rowH / 2;
      const tprW = (g.tpr / maxVal) * plot.width;
      const fprW = (g.fpr / maxVal) * plot.width;
      ctx.fillStyle = BAR;
      ctx.fillRect(plot.left, y - barH - 1, tprW, barH);
      ctx.fillStyle = BAR_ALT;
      ctx.fillRect(plot.left, y + 1, fprW, barH);
      ctx.fillStyle = TEXT;
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      const label = g.group.length > 16 ? g.group.slice(0, 15) + "…" : g.group;
      ctx.fillText(label, plot.left - 8, y);
    });

    ctx.fillStyle = TEXT;
    ctx.font = "600 12px " + FONT;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.fillText("Error rates by group", plot.left + plot.width / 2, canvas.height - 8);
    ctx.textAlign = "left";
    ctx.fillText("Equal opportunity / equalized odds (§7.5)", plot.left, 14);
  }

  /**
   * Accuracy vs fairness gaps as threshold sweeps (§7.5.2 trade-off).
   * @param {HTMLCanvasElement} canvas
   * @param {Array<{threshold:number, accuracy:number, dpGap:number, eoGap:number}>} points
   * @param {number} currentThreshold
   */
  function drawTradeoffCurve(canvas, points, currentThreshold) {
    clear(canvas);
    if (!canvas || !points || !points.length) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Room for title (row 1) + legend (row 2) above the plot
    const plot = { left: 56, right: canvas.width - 24, top: 64, bottom: canvas.height - 44 };
    plot.width = plot.right - plot.left;
    plot.height = plot.bottom - plot.top;

    const maxAcc = 1;
    const maxGap = Math.max(
      0.01,
      ...points.map(function (p) {
        return Math.max(p.dpGap, p.eoGap);
      })
    );
    const gapScale = niceMax(maxGap);

    ctx.font = "10px " + FONT;
    for (let tick = 0; tick <= 4; tick += 1) {
      const acc = (maxAcc * tick) / 4;
      const y = plot.bottom - (acc / maxAcc) * plot.height;
      ctx.strokeStyle = GRID;
      ctx.beginPath();
      ctx.moveTo(plot.left, y);
      ctx.lineTo(plot.right, y);
      ctx.stroke();
      ctx.fillStyle = MUTED;
      ctx.textAlign = "right";
      ctx.fillText((acc * 100).toFixed(0) + "%", plot.left - 6, y + 3);
    }

    function xAt(t) {
      return plot.left + t * plot.width;
    }
    function yAcc(a) {
      return plot.bottom - (a / maxAcc) * plot.height;
    }
    function yGap(g) {
      return plot.bottom - (g / gapScale) * plot.height;
    }

    function drawLine(key, color, dash) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.setLineDash(dash || []);
      ctx.beginPath();
      points.forEach(function (p, i) {
        const x = xAt(p.threshold);
        const y = key === "accuracy" ? yAcc(p.accuracy) : yGap(p[key]);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
      ctx.setLineDash([]);
    }

    drawLine("dpGap", WARN, [4, 3]);
    drawLine("eoGap", BAR_ALT, [2, 2]);
    drawLine("accuracy", BAR, []);

    const cx = xAt(currentThreshold);
    ctx.strokeStyle = TEXT;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(cx, plot.top);
    ctx.lineTo(cx, plot.bottom);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = TEXT;
    ctx.font = "600 12px " + FONT;
    ctx.textAlign = "left";
    ctx.fillText("Accuracy–fairness trade-off (§7.5.2)", plot.left, 14);

    ctx.font = "11px " + FONT;
    ctx.fillStyle = BAR;
    ctx.fillRect(plot.left, 32, 12, 3);
    ctx.fillStyle = TEXT;
    ctx.fillText("Accuracy", plot.left + 16, 36);
    ctx.fillStyle = WARN;
    ctx.fillRect(plot.left + 88, 32, 12, 3);
    ctx.fillStyle = TEXT;
    ctx.fillText("DP gap", plot.left + 104, 36);
    ctx.fillStyle = BAR_ALT;
    ctx.fillRect(plot.left + 158, 32, 12, 3);
    ctx.fillStyle = TEXT;
    ctx.fillText("EO gap", plot.left + 174, 36);

    ctx.fillStyle = TEXT;
    ctx.font = "600 12px " + FONT;
    ctx.textAlign = "center";
    ctx.fillText("Decision threshold", plot.left + plot.width / 2, canvas.height - 8);
    ctx.save();
    ctx.translate(14, plot.top + plot.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText("Accuracy / gap", 0, 0);
    ctx.restore();
  }

  /**
   * Overlaid score histograms by group with vertical threshold line.
   * @param {HTMLCanvasElement} canvas
   * @param {{ groups: Array<{group:string, counts:Array<{lo:number,hi:number,count:number}>}>, min:number, max:number, threshold:number }} dist
   */
  function drawScoreDistributions(canvas, dist) {
    clear(canvas);
    if (!canvas || !dist || !dist.groups || !dist.groups.length) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Room for title (row 1) + group legend (row 2) above the plot
    const plot = { left: 48, right: canvas.width - 20, top: 64, bottom: canvas.height - 40 };
    plot.width = plot.right - plot.left;
    plot.height = plot.bottom - plot.top;
    const bins = dist.groups[0].counts.length;
    let maxCount = 1;
    dist.groups.forEach(function (g) {
      g.counts.forEach(function (b) {
        if (b.count > maxCount) maxCount = b.count;
      });
    });
    const scaleMax = niceMax(maxCount);
    const binW = plot.width / bins;

    ctx.font = "10px " + FONT;
    for (let tick = 0; tick <= 4; tick += 1) {
      const value = (scaleMax * tick) / 4;
      const y = plot.bottom - (value / scaleMax) * plot.height;
      ctx.strokeStyle = GRID;
      ctx.beginPath();
      ctx.moveTo(plot.left, y);
      ctx.lineTo(plot.right, y);
      ctx.stroke();
      ctx.fillStyle = MUTED;
      ctx.textAlign = "right";
      ctx.fillText(String(Math.round(value)), plot.left - 6, y + 3);
    }

    dist.groups.forEach(function (g, gi) {
      const color = groupColor(gi);
      g.counts.forEach(function (bin, i) {
        const h = (bin.count / scaleMax) * plot.height;
        const x = plot.left + i * binW + 1;
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.55;
        ctx.fillRect(x, plot.bottom - h, binW - 2, h);
        ctx.globalAlpha = 1;
      });
    });

    const range = dist.max - dist.min || 1;
    function drawThresholdLine(t, label) {
      const tx = plot.left + ((t - dist.min) / range) * plot.width;
      ctx.strokeStyle = TEXT;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.moveTo(tx, plot.top);
      ctx.lineTo(tx, plot.bottom);
      ctx.stroke();
      ctx.setLineDash([]);
      if (label) {
        ctx.fillStyle = TEXT;
        ctx.textAlign = "center";
        ctx.font = "9px " + FONT;
        ctx.fillText(label, tx, plot.top - 4);
      }
    }

    if (dist.groupThresholds && Object.keys(dist.groupThresholds).length) {
      Object.keys(dist.groupThresholds).forEach(function (gname, i) {
        drawThresholdLine(Number(dist.groupThresholds[gname]), gname.slice(0, 8) + "=" + Number(dist.groupThresholds[gname]).toFixed(2));
      });
    } else {
      drawThresholdLine(dist.threshold, "t=" + dist.threshold.toFixed(2));
    }

    ctx.fillStyle = TEXT;
    ctx.font = "600 12px " + FONT;
    ctx.textAlign = "left";
    ctx.fillText("Score distributions by group", plot.left, 14);

    ctx.font = "11px " + FONT;
    let lx = plot.left;
    dist.groups.forEach(function (g, gi) {
      ctx.fillStyle = groupColor(gi);
      ctx.fillRect(lx, 30, 10, 8);
      ctx.fillStyle = TEXT;
      ctx.textAlign = "left";
      ctx.fillText(g.group, lx + 14, 38);
      lx += ctx.measureText(g.group).width + 28;
    });

    ctx.fillStyle = TEXT;
    ctx.font = "600 12px " + FONT;
    ctx.textAlign = "center";
    ctx.fillText("Model score", plot.left + plot.width / 2, canvas.height - 8);
    ctx.save();
    ctx.translate(14, plot.top + plot.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText("Count", 0, 0);
    ctx.restore();
  }

  FairnessCharts.clear = clear;
  FairnessCharts.drawRateBars = drawRateBars;
  FairnessCharts.drawDisparateImpact = drawDisparateImpact;
  FairnessCharts.drawErrorRates = drawErrorRates;
  FairnessCharts.drawTradeoffCurve = drawTradeoffCurve;
  FairnessCharts.drawScoreDistributions = drawScoreDistributions;
})(typeof window !== "undefined" ? window : globalThis);
