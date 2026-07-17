/* Classic script — canvas charts for EDA (window.EdaCharts). */
(function (global) {
  "use strict";
  const EdaCharts = global.EdaCharts || (global.EdaCharts = {});
  const FONT = "Source Sans 3, Arial, sans-serif";
  const TEXT = "#33413c";
  const MUTED = "#66736d";
  const GRID = "#dfe4e1";
  const ACCENT = "#0f6b5c";
  const ACCENT2 = "#d67928";

  function clear(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function niceMax(value) {
    if (value <= 0) return 1;
    const magnitude = 10 ** Math.floor(Math.log10(value));
    const normalized = value / magnitude;
    const nice = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
    return nice * magnitude;
  }

  function drawHistogram(canvas, hist, title) {
    clear(canvas);
    if (!hist || !hist.bins || !hist.bins.length) return;
    const ctx = canvas.getContext("2d");
    const pad = { t: 28, r: 16, b: 40, l: 48 };
    const plot = {
      left: pad.l,
      top: pad.t,
      right: canvas.width - pad.r,
      bottom: canvas.height - pad.b,
      width: canvas.width - pad.l - pad.r,
      height: canvas.height - pad.t - pad.b,
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
    hist.bins.forEach(function (b, i) {
      const w = plot.width / hist.bins.length;
      const h = (b.count / scaleMax) * plot.height;
      const x = plot.left + i * w;
      const y = plot.bottom - h;
      ctx.fillStyle = ACCENT;
      ctx.fillRect(x + 1, y, Math.max(1, w - 2), h);
    });
    ctx.strokeStyle = GRID;
    ctx.beginPath();
    ctx.moveTo(plot.left, plot.bottom);
    ctx.lineTo(plot.right, plot.bottom);
    ctx.stroke();
    ctx.fillStyle = MUTED;
    ctx.font = "11px " + FONT;
    ctx.fillText(String(Math.round(hist.min)), plot.left, plot.bottom + 14);
    ctx.textAlign = "right";
    ctx.fillText(String(Math.round(hist.max)), plot.right, plot.bottom + 14);
    ctx.textAlign = "left";
  }

  function drawBars(canvas, items, title) {
    clear(canvas);
    if (!items || !items.length) return;
    const ctx = canvas.getContext("2d");
    const pad = { t: 28, r: 16, b: 16, l: 90 };
    const plot = {
      left: pad.l,
      top: pad.t,
      right: canvas.width - pad.r,
      bottom: canvas.height - pad.b,
      width: canvas.width - pad.l - pad.r,
      height: canvas.height - pad.t - pad.b,
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
  }

  function drawScatter(canvas, pts, xLabel, yLabel) {
    clear(canvas);
    if (!pts || !pts.length) return;
    const ctx = canvas.getContext("2d");
    const pad = { t: 28, r: 16, b: 40, l: 48 };
    const plot = {
      left: pad.l,
      top: pad.t,
      right: canvas.width - pad.r,
      bottom: canvas.height - pad.b,
      width: canvas.width - pad.l - pad.r,
      height: canvas.height - pad.t - pad.b,
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
    pts.forEach(function (p) {
      const x = plot.left + ((p.x - minX) / (maxX - minX)) * plot.width;
      const y = plot.bottom - ((p.y - minY) / (maxY - minY)) * plot.height;
      ctx.fillStyle = ACCENT2;
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.strokeStyle = GRID;
    ctx.strokeRect(plot.left, plot.top, plot.width, plot.height);
    ctx.fillStyle = MUTED;
    ctx.font = "11px " + FONT;
    ctx.fillText(String(Math.round(minX)), plot.left, plot.bottom + 14);
    ctx.textAlign = "right";
    ctx.fillText(String(Math.round(maxX)), plot.right, plot.bottom + 14);
    ctx.textAlign = "left";
  }

  function drawHeatmap(canvas, corr) {
    clear(canvas);
    if (!corr || !corr.columns || !corr.columns.length) return;
    const ctx = canvas.getContext("2d");
    const cols = corr.columns;
    const n = cols.length;
    const pad = { t: 28, r: 16, b: 70, l: 70 };
    const size = Math.min(canvas.width - pad.l - pad.r, canvas.height - pad.t - pad.b);
    const cell = size / n;
    ctx.fillStyle = TEXT;
    ctx.font = "600 13px " + FONT;
    ctx.fillText("Pearson correlation (numeric cols)", pad.l, 16);
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        const r = corr.matrix[i][j];
        const x = pad.l + j * cell;
        const y = pad.t + i * cell;
        let fill = "#e5e7eb";
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
      right: canvas.width - pad.r,
      bottom: canvas.height - pad.b,
      width: canvas.width - pad.l - pad.r,
      height: canvas.height - pad.t - pad.b,
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
    ctx.fillStyle = MUTED;
    ctx.font = "11px " + FONT;
    ctx.fillText("min " + box.min, plot.left, plot.bottom + 14);
    ctx.textAlign = "center";
    ctx.fillText("Q1 " + box.q1 + " · med " + box.median + " · Q3 " + box.q3, (plot.left + plot.right) / 2, plot.bottom + 14);
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
