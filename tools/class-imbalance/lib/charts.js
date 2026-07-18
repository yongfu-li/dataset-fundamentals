/* Class imbalance charts (window.ImbalanceLib) — black axes + y ticks. */
(function (global) {
  "use strict";
  const ImbalanceLib = global.ImbalanceLib || (global.ImbalanceLib = {});
  const Axis = global.DatasetToolsAxis;

  function clearCanvas(canvas) {
    const AxisApi = global.DatasetToolsAxis;
    if (AxisApi && AxisApi.beginChart) {
      const surface = AxisApi.beginChart(canvas);
      return surface ? surface.ctx : null;
    }
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas._lw = canvas.width;
    canvas._lh = canvas.height;
    return ctx;
  }

  function size(canvas) {
    const AxisApi = global.DatasetToolsAxis;
    if (AxisApi && AxisApi.chartSize) return AxisApi.chartSize(canvas);
    return { width: canvas._lw || canvas.width, height: canvas._lh || canvas.height };
  }

  ImbalanceLib.drawClassBars = function (canvas, counts, opts) {
    const o = opts || {};
    clearCanvas(canvas);
    const ctx = canvas.getContext("2d");
    const w = size(canvas).width;
    const h = size(canvas).height;
    const pad = { t: 28, r: 16, b: 40, l: 52 };
    const plot = { left: pad.l, right: w - pad.r, top: pad.t, bottom: h - pad.b };
    const labels = ["Negative (0)", "Positive (1)"];
    const values = [counts.negative || 0, counts.positive || 0];
    const maxC = Math.max(values[0], values[1], 1);
    ctx.fillStyle = Axis ? Axis.LABEL : "#1c2421";
    ctx.font = "600 12px " + (Axis ? Axis.FONT : "sans-serif");
    ctx.fillText(o.title || "Class counts", pad.l, 16);
    const yScale = Axis
      ? Axis.drawYTicks(ctx, plot, 0, maxC, { fromZero: true, ticks: 4 })
      : { min: 0, max: maxC };
    const plotH = plot.bottom - plot.top;
    const plotW = plot.right - plot.left;
    const barW = plotW / 2;
    const colors = ["#5b6b7c", "#0f6b5c"];
    values.forEach(function (v, i) {
      const bh = (v / yScale.max) * plotH;
      const x = plot.left + i * barW + barW * 0.18;
      const y = plot.bottom - bh;
      ctx.fillStyle = colors[i];
      ctx.fillRect(x, y, barW * 0.64, bh);
      ctx.fillStyle = Axis ? Axis.LABEL : "#1c2421";
      ctx.font = "11px " + (Axis ? Axis.FONT : "sans-serif");
      ctx.textAlign = "center";
      ctx.fillText(String(v), x + barW * 0.32, y - 4);
      ctx.fillText(labels[i], x + barW * 0.32, plot.bottom + 16);
      ctx.textAlign = "left";
    });
    if (Axis) Axis.drawFrame(ctx, plot);
  };

  ImbalanceLib.drawMetricBars = function (canvas, baseline, treated, opts) {
    const o = opts || {};
    clearCanvas(canvas);
    const ctx = canvas.getContext("2d");
    const w = size(canvas).width;
    const h = size(canvas).height;
    const pad = { t: 28, r: 16, b: 48, l: 52 };
    const plot = { left: pad.l, right: w - pad.r, top: pad.t, bottom: h - pad.b };
    const keys = ["accuracy", "precision", "recall", "f1"];
    const names = ["Accuracy", "Precision", "Recall", "F1"];
    ctx.fillStyle = Axis ? Axis.LABEL : "#1c2421";
    ctx.font = "600 12px " + (Axis ? Axis.FONT : "sans-serif");
    ctx.fillText(o.title || "Test metrics (held-out)", pad.l, 16);
    const yScale = Axis
      ? Axis.drawYTicks(ctx, plot, 0, 1, { fromZero: true, ticks: 5 })
      : { min: 0, max: 1 };
    const plotH = plot.bottom - plot.top;
    const plotW = plot.right - plot.left;
    const groupW = plotW / keys.length;
    keys.forEach(function (k, i) {
      const b = baseline[k] || 0;
      const t = treated[k] || 0;
      const x0 = plot.left + i * groupW;
      const bw = groupW * 0.32;
      ctx.fillStyle = "#5b6b7c";
      ctx.fillRect(x0 + groupW * 0.12, plot.bottom - b * plotH, bw, b * plotH);
      ctx.fillStyle = "#0f6b5c";
      ctx.fillRect(x0 + groupW * 0.48, plot.bottom - t * plotH, bw, t * plotH);
      ctx.fillStyle = Axis ? Axis.LABEL : "#1c2421";
      ctx.font = "11px " + (Axis ? Axis.FONT : "sans-serif");
      ctx.textAlign = "center";
      ctx.fillText(names[i], x0 + groupW * 0.5, plot.bottom + 16);
      ctx.textAlign = "left";
    });
    if (Axis) Axis.drawFrame(ctx, plot);
    ctx.fillStyle = "#5b6b7c";
    ctx.fillRect(plot.left, h - 14, 10, 10);
    ctx.fillStyle = Axis ? Axis.LABEL : "#1c2421";
    ctx.font = "11px sans-serif";
    ctx.fillText("Baseline (none)", plot.left + 14, h - 5);
    ctx.fillStyle = "#0f6b5c";
    ctx.fillRect(plot.left + 130, h - 14, 10, 10);
    ctx.fillStyle = Axis ? Axis.LABEL : "#1c2421";
    ctx.fillText("Strategy", plot.left + 144, h - 5);
  };
})(typeof window !== "undefined" ? window : globalThis);
