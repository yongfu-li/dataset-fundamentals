/* Equivalence-class size chart (window.DeidLib). */
(function (global) {
  "use strict";
  const DeidLib = global.DeidLib || (global.DeidLib = {});
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

  DeidLib.drawSizeHistogram = function (canvas, analysis, opts) {
    const o = opts || {};
    clearCanvas(canvas);
    const ctx = canvas.getContext("2d");
    const w = size(canvas).width;
    const h = size(canvas).height;
    const pad = { t: 28, r: 16, b: 40, l: 52 };
    const plot = { left: pad.l, right: w - pad.r, top: pad.t, bottom: h - pad.b };
    ctx.fillStyle = Axis ? Axis.LABEL : "#1c2421";
    ctx.font = "600 12px " + (Axis ? Axis.FONT : "sans-serif");
    ctx.fillText(o.title || "Equivalence class sizes", pad.l, 16);

    const hist = analysis.sizeHistogram || {};
    const sizes = Object.keys(hist)
      .map(Number)
      .sort(function (a, b) {
        return a - b;
      });
    if (!sizes.length) {
      ctx.font = "12px sans-serif";
      ctx.fillText("No classes", pad.l, h / 2);
      return;
    }
    const counts = sizes.map(function (s) {
      return hist[s];
    });
    const maxC = Math.max.apply(null, counts.concat([1]));
    const yScale = Axis
      ? Axis.drawYTicks(ctx, plot, 0, maxC, { fromZero: true, ticks: 4 })
      : { min: 0, max: maxC };
    const plotH = plot.bottom - plot.top;
    const plotW = plot.right - plot.left;
    const barW = plotW / sizes.length;
    const kTarget = analysis.targetK || 5;
    sizes.forEach(function (s, i) {
      const c = hist[s];
      const bh = (c / yScale.max) * plotH;
      const x = plot.left + i * barW + 2;
      const y = plot.bottom - bh;
      ctx.fillStyle = s < kTarget ? "#b42318" : "#0f6b5c";
      ctx.fillRect(x, y, Math.max(1, barW - 4), bh);
      ctx.fillStyle = Axis ? Axis.LABEL : "#1c2421";
      ctx.font = "11px " + (Axis ? Axis.FONT : "sans-serif");
      ctx.textAlign = "center";
      ctx.fillText("k=" + s, x + (barW - 4) / 2, plot.bottom + 14);
      ctx.textAlign = "left";
    });
    if (Axis) Axis.drawFrame(ctx, plot);
  };
})(typeof window !== "undefined" ? window : globalThis);
