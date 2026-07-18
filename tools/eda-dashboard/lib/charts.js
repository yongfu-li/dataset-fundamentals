/* Classic script — canvas charts for EDA (window.EdaCharts). Black axes + y ticks. */
(function (global) {
  "use strict";
  const EdaCharts = global.EdaCharts || (global.EdaCharts = {});
  const Axis = global.DatasetToolsAxis;
  const FONT = "Source Sans 3, Arial, sans-serif";
  const TEXT = "#1c2421";
  const MUTED = "#1c2421";
  const AXIS_C = "#1c2421";
  const GRID = "rgba(28, 36, 33, 0.18)";
  const ACCENT = "#0f6b5c";
  const ACCENT2 = "#b45309";

  function clear(canvas) {
    if (!canvas) return null;
    const Axis = global.DatasetToolsAxis;
    if (Axis && Axis.beginChart) {
      const surface = Axis.beginChart(canvas);
      return surface ? surface.ctx : null;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas._lw = canvas.width;
    canvas._lh = canvas.height;
    return ctx;
  }

  function size(canvas) {
    const Axis = global.DatasetToolsAxis;
    if (Axis && Axis.chartSize) return Axis.chartSize(canvas);
    return { width: canvas._lw || canvas.width, height: canvas._lh || canvas.height };
  }

  function niceMax(value) {
    if (Axis) return Axis.niceMax(value);
    if (value <= 0) return 1;
    const magnitude = 10 ** Math.floor(Math.log10(value));
    const normalized = value / magnitude;
    const nice = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
    return nice * magnitude;
  }

  function fmt(v) {
    return Axis ? Axis.formatTick(v) : String(Math.round(v));
  }

  function drawHistogram(canvas, hist, title) {
    clear(canvas);
    if (!hist || !hist.bins || !hist.bins.length) return;
    const ctx = canvas.getContext("2d");
    const pad = { t: 28, r: 16, b: 40, l: 52 };
    const plot = {
      left: pad.l,
      top: pad.t,
      right: size(canvas).width - pad.r,
      bottom: size(canvas).height - pad.b,
      width: size(canvas).width - pad.l - pad.r,
      height: size(canvas).height - pad.t - pad.b,
    };
    const maxC = Math.max.apply(
      null,
      hist.bins.map(function (b) {
        return b.count;
      })
    );
    const scaleMax = niceMax(maxC);
    ctx.fillStyle = TEXT;
    ctx.font = "600 13px " + FONT;
    ctx.fillText(title || "Histogram", pad.l, 16);

    if (Axis) {
      Axis.drawYTicks(ctx, plot, 0, scaleMax, { fromZero: true, ticks: 4 });
    } else {
      for (let i = 0; i <= 4; i += 1) {
        const value = (scaleMax * i) / 4;
        const y = plot.bottom - (value / scaleMax) * plot.height;
        ctx.fillStyle = MUTED;
        ctx.font = "11px " + FONT;
        ctx.textAlign = "right";
        ctx.fillText(fmt(value), plot.left - 7, y + 3);
      }
      ctx.textAlign = "left";
    }

    hist.bins.forEach(function (b, i) {
      const w = plot.width / hist.bins.length;
      const h = (b.count / scaleMax) * plot.height;
      const x = plot.left + i * w;
      const y = plot.bottom - h;
      ctx.fillStyle = ACCENT;
      ctx.fillRect(x + 1, y, Math.max(1, w - 2), h);
    });

    if (Axis) {
      Axis.drawFrame(ctx, plot);
      Axis.drawXTicks(ctx, plot, hist.min, hist.max, { ticks: 4 });
      Axis.drawYLabel(ctx, plot, "Count");
    } else {
      ctx.strokeStyle = AXIS_C;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(plot.left, plot.top);
      ctx.lineTo(plot.left, plot.bottom);
      ctx.lineTo(plot.right, plot.bottom);
      ctx.stroke();
      ctx.fillStyle = MUTED;
      ctx.font = "11px " + FONT;
      ctx.fillText(String(Math.round(hist.min)), plot.left, plot.bottom + 14);
      ctx.textAlign = "right";
      ctx.fillText(String(Math.round(hist.max)), plot.right, plot.bottom + 14);
      ctx.textAlign = "left";
    }
  }

  function drawBars(canvas, items, title) {
    clear(canvas);
    if (!items || !items.length) return;
    const ctx = canvas.getContext("2d");
    const pad = { t: 28, r: 48, b: 36, l: 90 };
    const plot = {
      left: pad.l,
      top: pad.t,
      right: size(canvas).width - pad.r,
      bottom: size(canvas).height - pad.b,
      width: size(canvas).width - pad.l - pad.r,
      height: size(canvas).height - pad.t - pad.b,
    };
    const maxC = Math.max.apply(
      null,
      items.map(function (it) {
        return it.count != null ? it.count : it.value || 0;
      })
    );
    const scaleMax = niceMax(maxC || 1);
    ctx.fillStyle = TEXT;
    ctx.font = "600 13px " + FONT;
    ctx.fillText(title || "Counts", pad.l, 16);

    for (let tick = 0; tick <= 4; tick += 1) {
      const value = (scaleMax * tick) / 4;
      const x = plot.left + (value / scaleMax) * plot.width;
      ctx.strokeStyle = GRID;
      ctx.beginPath();
      ctx.moveTo(x, plot.top);
      ctx.lineTo(x, plot.bottom);
      ctx.stroke();
      ctx.strokeStyle = AXIS_C;
      ctx.beginPath();
      ctx.moveTo(x, plot.bottom);
      ctx.lineTo(x, plot.bottom + 4);
      ctx.stroke();
      ctx.fillStyle = MUTED;
      ctx.font = "11px " + FONT;
      ctx.textAlign = "center";
      ctx.fillText(fmt(value), x, plot.bottom + 8);
    }

    const rowH = plot.height / items.length;
    items.forEach(function (it, i) {
      const c = it.count != null ? it.count : it.value || 0;
      const y = plot.top + i * rowH + 2;
      const w = (c / scaleMax) * plot.width;
      ctx.fillStyle = ACCENT;
      ctx.fillRect(plot.left, y, Math.max(1, w), Math.max(8, rowH - 6));
      ctx.fillStyle = TEXT;
      ctx.font = "11px " + FONT;
      ctx.textAlign = "right";
      const label = String(it.label != null ? it.label : it.group).slice(0, 12);
      ctx.fillText(label, plot.left - 6, y + Math.min(12, rowH - 4));
      ctx.textAlign = "left";
      ctx.fillStyle = MUTED;
      ctx.fillText(String(c), plot.left + w + 4, y + Math.min(12, rowH - 4));
    });

    ctx.strokeStyle = AXIS_C;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(plot.left, plot.top);
    ctx.lineTo(plot.left, plot.bottom);
    ctx.lineTo(plot.right, plot.bottom);
    ctx.stroke();
  }

  function drawScatter(canvas, pts, xLabel, yLabel) {
    clear(canvas);
    if (!pts || !pts.length) return;
    const ctx = canvas.getContext("2d");
    const pad = { t: 28, r: 16, b: 40, l: 56 };
    const plot = {
      left: pad.l,
      top: pad.t,
      right: size(canvas).width - pad.r,
      bottom: size(canvas).height - pad.b,
      width: size(canvas).width - pad.l - pad.r,
      height: size(canvas).height - pad.t - pad.b,
    };
    let minX = pts[0].x;
    let maxX = pts[0].x;
    let minY = pts[0].y;
    let maxY = pts[0].y;
    pts.forEach(function (p) {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    });
    if (minX === maxX) {
      minX -= 1;
      maxX += 1;
    }
    if (minY === maxY) {
      minY -= 1;
      maxY += 1;
    }
    ctx.fillStyle = TEXT;
    ctx.font = "600 13px " + FONT;
    ctx.fillText((xLabel || "x") + " vs " + (yLabel || "y"), pad.l, 16);

    if (Axis) {
      Axis.drawYTicks(ctx, plot, minY, maxY, { ticks: 4 });
      Axis.drawXTicks(ctx, plot, minX, maxX, { ticks: 4 });
    } else {
      for (let i = 0; i <= 4; i += 1) {
        const yv = minY + ((maxY - minY) * i) / 4;
        const y = plot.bottom - ((yv - minY) / (maxY - minY)) * plot.height;
        ctx.fillStyle = MUTED;
        ctx.font = "11px " + FONT;
        ctx.textAlign = "right";
        ctx.fillText(fmt(yv), plot.left - 7, y + 3);
      }
      ctx.textAlign = "left";
    }

    pts.forEach(function (p) {
      const x = plot.left + ((p.x - minX) / (maxX - minX)) * plot.width;
      const y = plot.bottom - ((p.y - minY) / (maxY - minY)) * plot.height;
      ctx.fillStyle = ACCENT2;
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    });

    if (Axis) {
      Axis.drawFrame(ctx, plot);
      Axis.drawYLabel(ctx, plot, yLabel || "y");
      Axis.drawXLabel(ctx, plot, size(canvas).height, xLabel || "x");
    } else {
      ctx.strokeStyle = AXIS_C;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(plot.left, plot.top, plot.width, plot.height);
    }
  }

  function drawHeatmap(canvas, corr) {
    clear(canvas);
    if (!corr || !corr.columns || !corr.columns.length) return;
    const ctx = canvas.getContext("2d");
    const cols = corr.columns;
    const n = cols.length;
    const pad = { t: 28, r: 16, b: 70, l: 70 };
    const size = Math.min(size(canvas).width - pad.l - pad.r, size(canvas).height - pad.t - pad.b);
    const cell = size / n;
    ctx.fillStyle = TEXT;
    ctx.font = "600 13px " + FONT;
    ctx.fillText("Pearson correlation (numeric cols)", pad.l, 16);
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        const r = corr.matrix[i][j];
        const x = pad.l + j * cell;
        const y = pad.t + i * cell;
        let fill = "#efe8db";
        if (r != null) {
          const t = (r + 1) / 2;
          const g = Math.round(80 + t * 100);
          const b = Math.round(120 + (1 - Math.abs(r)) * 80);
          fill = "rgb(" + Math.round(30 + (1 - t) * 180) + "," + g + "," + b + ")";
        }
        ctx.fillStyle = fill;
        ctx.fillRect(x, y, cell - 1, cell - 1);
        if (r != null) {
          ctx.fillStyle = Math.abs(r) > 0.5 ? "#fff" : TEXT;
          ctx.font = "10px " + FONT;
          ctx.textAlign = "center";
          ctx.fillText(String(r), x + cell / 2, y + cell / 2 + 3);
          ctx.textAlign = "left";
        }
      }
    }
    ctx.strokeStyle = AXIS_C;
    ctx.lineWidth = 1.25;
    ctx.strokeRect(pad.l, pad.t, size, size);
    ctx.fillStyle = MUTED;
    ctx.font = "10px " + FONT;
    cols.forEach(function (c, i) {
      const label = String(c).slice(0, 10);
      ctx.save();
      ctx.translate(pad.l + i * cell + cell / 2, pad.t + size + 8);
      ctx.rotate(-Math.PI / 4);
      ctx.fillText(label, 0, 0);
      ctx.restore();
      ctx.textAlign = "right";
      ctx.fillText(label, pad.l - 4, pad.t + i * cell + cell / 2 + 3);
      ctx.textAlign = "left";
    });
  }

  function drawBoxPlot(canvas, box, title) {
    clear(canvas);
    if (!box) return;
    const ctx = canvas.getContext("2d");
    const pad = { t: 28, r: 24, b: 40, l: 48 };
    const plot = {
      left: pad.l,
      top: pad.t,
      right: size(canvas).width - pad.r,
      bottom: size(canvas).height - pad.b,
      width: size(canvas).width - pad.l - pad.r,
      height: size(canvas).height - pad.t - pad.b,
    };
    let lo = Math.min(box.whiskerLo, box.min);
    let hi = Math.max(box.whiskerHi, box.max);
    if (box.outliers && box.outliers.length) {
      box.outliers.forEach(function (o) {
        if (o < lo) lo = o;
        if (o > hi) hi = o;
      });
    }
    if (lo === hi) {
      lo -= 1;
      hi += 1;
    }
    function xOf(v) {
      return plot.left + ((v - lo) / (hi - lo)) * plot.width;
    }
    ctx.fillStyle = TEXT;
    ctx.font = "600 13px " + FONT;
    ctx.fillText(title || "Box plot (IQR)", pad.l, 16);
    const midY = plot.top + plot.height / 2;
    const boxH = Math.min(56, plot.height * 0.45);
    ctx.strokeStyle = ACCENT;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(xOf(box.whiskerLo), midY);
    ctx.lineTo(xOf(box.q1), midY);
    ctx.moveTo(xOf(box.q3), midY);
    ctx.lineTo(xOf(box.whiskerHi), midY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(xOf(box.whiskerLo), midY - boxH / 3);
    ctx.lineTo(xOf(box.whiskerLo), midY + boxH / 3);
    ctx.moveTo(xOf(box.whiskerHi), midY - boxH / 3);
    ctx.lineTo(xOf(box.whiskerHi), midY + boxH / 3);
    ctx.stroke();
    ctx.fillStyle = "rgba(15, 107, 92, 0.18)";
    ctx.fillRect(xOf(box.q1), midY - boxH / 2, Math.max(2, xOf(box.q3) - xOf(box.q1)), boxH);
    ctx.strokeStyle = ACCENT;
    ctx.strokeRect(xOf(box.q1), midY - boxH / 2, Math.max(2, xOf(box.q3) - xOf(box.q1)), boxH);
    ctx.beginPath();
    ctx.moveTo(xOf(box.median), midY - boxH / 2);
    ctx.lineTo(xOf(box.median), midY + boxH / 2);
    ctx.stroke();
    if (box.outliers && box.outliers.length) {
      ctx.fillStyle = ACCENT2;
      box.outliers.forEach(function (o) {
        ctx.beginPath();
        ctx.arc(xOf(o), midY, 3.5, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    if (Axis) {
      Axis.drawXTicks(ctx, plot, lo, hi, { ticks: 4 });
      Axis.drawFrame(ctx, {
        left: plot.left,
        right: plot.right,
        top: midY - boxH / 2,
        bottom: plot.bottom,
      });
    }
    ctx.fillStyle = MUTED;
    ctx.font = "11px " + FONT;
    ctx.fillText("min " + box.min, plot.left, plot.bottom + 14);
    ctx.textAlign = "center";
    ctx.fillText(
      "Q1 " + box.q1 + " · med " + box.median + " · Q3 " + box.q3,
      (plot.left + plot.right) / 2,
      plot.bottom + 14
    );
    ctx.textAlign = "right";
    ctx.fillText("max " + box.max, plot.right, plot.bottom + 14);
    ctx.textAlign = "left";
  }

  EdaCharts.clear = clear;
  EdaCharts.drawHistogram = drawHistogram;
  EdaCharts.drawBars = drawBars;
  EdaCharts.drawScatter = drawScatter;
  EdaCharts.drawHeatmap = drawHeatmap;
  EdaCharts.drawBoxPlot = drawBoxPlot;
})(typeof window !== "undefined" ? window : globalThis);
