/* Scaling / encoding charts (window.ScaleLib) — black axes + y-tick values. */
(function (global) {
  "use strict";
  const ScaleLib = global.ScaleLib || (global.ScaleLib = {});
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

  function formatNum(n) {
    if (Axis) return Axis.formatTick(n);
    if (n == null || !isFinite(n)) return "—";
    if (Math.abs(n) >= 1000) return n.toFixed(0);
    if (Math.abs(n) >= 10) return n.toFixed(1);
    return n.toFixed(2);
  }

  function histogram(canvas, values, opts) {
    const o = opts || {};
    clearCanvas(canvas);
    const ctx = canvas.getContext("2d");
    const w = size(canvas).width;
    const h = size(canvas).height;
    const pad = { t: 28, r: 16, b: 36, l: 52 };
    const plot = {
      left: pad.l,
      right: w - pad.r,
      top: pad.t,
      bottom: h - pad.b,
    };
    const xs = (values || []).filter(function (v) {
      return v != null && isFinite(v);
    });
    ctx.fillStyle = Axis ? Axis.LABEL : "#1c2421";
    ctx.font = "600 12px " + (Axis ? Axis.FONT : "sans-serif");
    ctx.fillText(o.title || "Histogram", pad.l, 16);
    if (xs.length < 2) {
      ctx.font = "12px sans-serif";
      ctx.fillText("Not enough numeric values", pad.l, h / 2);
      return;
    }
    let min = xs[0];
    let max = xs[0];
    xs.forEach(function (v) {
      if (v < min) min = v;
      if (v > max) max = v;
    });
    if (min === max) {
      min -= 1;
      max += 1;
    }
    const bins = Math.min(12, Math.max(5, Math.floor(Math.sqrt(xs.length))));
    const width = (max - min) / bins;
    const counts = new Array(bins).fill(0);
    xs.forEach(function (v) {
      let i = Math.floor((v - min) / width);
      if (i >= bins) i = bins - 1;
      if (i < 0) i = 0;
      counts[i] += 1;
    });
    const maxC = Math.max.apply(null, counts) || 1;
    const yScale = Axis
      ? Axis.drawYTicks(ctx, plot, 0, maxC, { fromZero: true, ticks: 4 })
      : { min: 0, max: maxC };
    const scaleMax = yScale.max;
    const plotH = plot.bottom - plot.top;
    const plotW = plot.right - plot.left;
    const barW = plotW / bins;
    counts.forEach(function (c, i) {
      const bh = (c / scaleMax) * plotH;
      const x = plot.left + i * barW + 1;
      const y = plot.bottom - bh;
      ctx.fillStyle = o.color || "#0f6b5c";
      ctx.fillRect(x, y, Math.max(1, barW - 2), bh);
    });
    if (Axis) {
      Axis.drawFrame(ctx, plot);
      Axis.drawXTicks(ctx, plot, min, max, { ticks: 4 });
      Axis.drawYLabel(ctx, plot, "Count");
    } else {
      ctx.strokeStyle = "#1c2421";
      ctx.beginPath();
      ctx.moveTo(plot.left, plot.top);
      ctx.lineTo(plot.left, plot.bottom);
      ctx.lineTo(plot.right, plot.bottom);
      ctx.stroke();
    }
  }

  function scatter(canvas, points, opts) {
    const o = opts || {};
    clearCanvas(canvas);
    const ctx = canvas.getContext("2d");
    const w = size(canvas).width;
    const h = size(canvas).height;
    const pad = { t: 28, r: 16, b: 40, l: 56 };
    const plot = {
      left: pad.l,
      right: w - pad.r,
      top: pad.t,
      bottom: h - pad.b,
    };
    const pts = (points || []).filter(function (p) {
      return p && p.x != null && p.y != null && isFinite(p.x) && isFinite(p.y);
    });
    ctx.fillStyle = Axis ? Axis.LABEL : "#1c2421";
    ctx.font = "600 12px " + (Axis ? Axis.FONT : "sans-serif");
    ctx.fillText(o.title || "Scatter", pad.l, 16);
    if (pts.length < 2) {
      ctx.font = "12px sans-serif";
      ctx.fillText("Need two numeric columns with values", pad.l, h / 2);
      return;
    }
    let xmin = pts[0].x;
    let xmax = pts[0].x;
    let ymin = pts[0].y;
    let ymax = pts[0].y;
    pts.forEach(function (p) {
      if (p.x < xmin) xmin = p.x;
      if (p.x > xmax) xmax = p.x;
      if (p.y < ymin) ymin = p.y;
      if (p.y > ymax) ymax = p.y;
    });
    if (xmin === xmax) {
      xmin -= 1;
      xmax += 1;
    }
    if (ymin === ymax) {
      ymin -= 1;
      ymax += 1;
    }
    const xpad = (xmax - xmin) * 0.05;
    const ypad = (ymax - ymin) * 0.05;
    xmin -= xpad;
    xmax += xpad;
    ymin -= ypad;
    ymax += ypad;

    if (Axis) {
      Axis.drawYTicks(ctx, plot, ymin, ymax, { ticks: 4 });
      Axis.drawXTicks(ctx, plot, xmin, xmax, { ticks: 4 });
    }
    const plotW = plot.right - plot.left;
    const plotH = plot.bottom - plot.top;
    function sx(x) {
      return plot.left + ((x - xmin) / (xmax - xmin)) * plotW;
    }
    function sy(y) {
      return plot.bottom - ((y - ymin) / (ymax - ymin)) * plotH;
    }
    pts.forEach(function (p) {
      ctx.beginPath();
      ctx.fillStyle = o.color || "#b45309";
      ctx.arc(sx(p.x), sy(p.y), 4, 0, Math.PI * 2);
      ctx.fill();
    });
    if (Axis) {
      Axis.drawFrame(ctx, plot);
      Axis.drawYLabel(ctx, plot, o.yLabel || "y");
      Axis.drawXLabel(ctx, plot, h, o.xLabel || "x");
    } else {
      ctx.strokeStyle = "#1c2421";
      ctx.beginPath();
      ctx.moveTo(plot.left, plot.top);
      ctx.lineTo(plot.left, plot.bottom);
      ctx.lineTo(plot.right, plot.bottom);
      ctx.stroke();
    }
  }

  ScaleLib.drawHistogram = histogram;
  ScaleLib.drawScatter = scatter;
  ScaleLib.formatNum = formatNum;
})(typeof window !== "undefined" ? window : globalThis);
