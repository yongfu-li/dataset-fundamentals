/* Classic script — accessible canvas charts for before/after comparisons. */
(function (global) {
  "use strict";
  const CleaningCharts = global.CleaningCharts || (global.CleaningCharts = {});
  const FONT = "Source Sans 3, Arial, sans-serif";
  const TEXT = "#33413c";
  const MUTED = "#66736d";
  const GRID = "#dfe4e1";
  const ORIGINAL = "#aeb4b0";
  const CURRENT = "#0f6b5c";

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
    if (abs >= 1000) return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
    if (abs >= 10) return value.toFixed(0);
    return value.toFixed(1).replace(/\.0$/, "");
  }

  function niceMax(value) {
    if (value <= 0) return 1;
    const magnitude = 10 ** Math.floor(Math.log10(value));
    const normalized = value / magnitude;
    const nice = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
    return nice * magnitude;
  }

  function drawLegend(ctx, x, y, firstLabel, secondLabel) {
    ctx.font = "12px " + FONT;
    ctx.fillStyle = ORIGINAL;
    ctx.fillRect(x, y - 9, 15, 10);
    ctx.fillStyle = TEXT;
    ctx.fillText(firstLabel, x + 21, y);
    const offset = Math.max(105, ctx.measureText(firstLabel).width + 38);
    ctx.fillStyle = CURRENT;
    ctx.fillRect(x + offset, y - 9, 15, 10);
    ctx.fillStyle = TEXT;
    ctx.fillText(secondLabel, x + offset + 21, y);
  }

  function drawVerticalScale(ctx, plot, maxValue, axisLabel) {
    const scaleMax = niceMax(maxValue);
    ctx.font = "11px " + FONT;
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (let i = 0; i <= 4; i += 1) {
      const value = (scaleMax * i) / 4;
      const y = plot.bottom - (value / scaleMax) * plot.height;
      ctx.strokeStyle = GRID;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(plot.left, y);
      ctx.lineTo(plot.right, y);
      ctx.stroke();
      ctx.fillStyle = MUTED;
      ctx.fillText(formatNumber(value), plot.left - 8, y);
    }
    ctx.save();
    ctx.translate(15, plot.top + plot.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillStyle = TEXT;
    ctx.font = "600 12px " + FONT;
    ctx.fillText(axisLabel, 0, 0);
    ctx.restore();
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    return scaleMax;
  }

  /**
   * Draw a grouped histogram with labeled axes and a clear legend.
   * @param {HTMLCanvasElement} canvas
   * @param {{ bins: Array<{lo:number, hi:number, count:number}> }|null} before
   * @param {{ bins: Array<{lo:number, hi:number, count:number}> }|null} after
   * @param {string} column
   */
  function drawHistogramCompare(canvas, before, after, column) {
    clear(canvas);
    if (!canvas || !before || !after || !before.bins.length) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const plot = {
      left: 64,
      right: canvas.width - 20,
      top: 58,
      bottom: canvas.height - 54,
    };
    plot.width = plot.right - plot.left;
    plot.height = plot.bottom - plot.top;
    const maxCount = Math.max(
      1,
      ...before.bins.map(function (bin) {
        return bin.count;
      }),
      ...after.bins.map(function (bin) {
        return bin.count;
      })
    );
    const scaleMax = drawVerticalScale(ctx, plot, maxCount, "Number of records");
    const groupWidth = plot.width / before.bins.length;
    const barWidth = Math.max(2, groupWidth * 0.38);

    before.bins.forEach(function (bin, index) {
      const current = after.bins[index] || { count: 0 };
      const x = plot.left + index * groupWidth + groupWidth * 0.1;
      const beforeHeight = (bin.count / scaleMax) * plot.height;
      const afterHeight = (current.count / scaleMax) * plot.height;
      ctx.fillStyle = ORIGINAL;
      ctx.fillRect(x, plot.bottom - beforeHeight, barWidth, beforeHeight);
      ctx.fillStyle = CURRENT;
      ctx.fillRect(x + barWidth + 2, plot.bottom - afterHeight, barWidth, afterHeight);
    });

    ctx.strokeStyle = TEXT;
    ctx.beginPath();
    ctx.moveTo(plot.left, plot.bottom);
    ctx.lineTo(plot.right, plot.bottom);
    ctx.stroke();
    ctx.font = "11px " + FONT;
    ctx.fillStyle = MUTED;
    ctx.textAlign = "center";
    const first = before.bins[0];
    const last = before.bins[before.bins.length - 1];
    ctx.fillText(formatNumber(first.lo), plot.left, plot.bottom + 17);
    ctx.fillText(formatNumber((first.lo + last.hi) / 2), plot.left + plot.width / 2, plot.bottom + 17);
    ctx.fillText(formatNumber(last.hi), plot.right, plot.bottom + 17);
    ctx.fillStyle = TEXT;
    ctx.font = "600 12px " + FONT;
    ctx.fillText(column + " (value ranges)", plot.left + plot.width / 2, canvas.height - 10);
    ctx.textAlign = "left";
    drawLegend(ctx, plot.left, 25, "Original data", "Current data");
  }

  /**
   * Draw horizontal grouped bars so category names remain readable.
   * @param {HTMLCanvasElement} canvas
   * @param {{ labels: string[], counts: number[] }} before
   * @param {{ labels: string[], counts: number[] }} after
   * @param {string} column
   */
  function drawCategoryCompare(canvas, before, after, column) {
    clear(canvas);
    if (!canvas || !before || !after) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const beforeMap = {};
    const afterMap = {};
    const labels = [];
    before.labels.forEach(function (label, index) {
      beforeMap[label] = before.counts[index];
      if (labels.indexOf(label) === -1) labels.push(label);
    });
    after.labels.forEach(function (label, index) {
      afterMap[label] = after.counts[index];
      if (labels.indexOf(label) === -1) labels.push(label);
    });
    labels.sort(function (a, b) {
      return Math.max(afterMap[b] || 0, beforeMap[b] || 0) -
        Math.max(afterMap[a] || 0, beforeMap[a] || 0);
    });
    const shown = labels.slice(0, 8);
    const plot = {
      left: 135,
      right: canvas.width - 48,
      top: 54,
      bottom: canvas.height - 38,
    };
    plot.width = plot.right - plot.left;
    plot.height = plot.bottom - plot.top;
    const maxCount = Math.max(
      1,
      ...shown.map(function (label) {
        return Math.max(beforeMap[label] || 0, afterMap[label] || 0);
      })
    );
    const scaleMax = niceMax(maxCount);
    const rowHeight = plot.height / Math.max(shown.length, 1);
    const barHeight = Math.min(11, rowHeight * 0.32);

    ctx.font = "11px " + FONT;
    ctx.textBaseline = "middle";
    for (let tick = 0; tick <= 4; tick += 1) {
      const value = (scaleMax * tick) / 4;
      const x = plot.left + (value / scaleMax) * plot.width;
      ctx.strokeStyle = GRID;
      ctx.beginPath();
      ctx.moveTo(x, plot.top);
      ctx.lineTo(x, plot.bottom);
      ctx.stroke();
      ctx.fillStyle = MUTED;
      ctx.textAlign = "center";
      ctx.fillText(formatNumber(value), x, plot.bottom + 14);
    }

    shown.forEach(function (label, index) {
      const y = plot.top + index * rowHeight + rowHeight / 2;
      const originalCount = beforeMap[label] || 0;
      const currentCount = afterMap[label] || 0;
      const originalWidth = (originalCount / scaleMax) * plot.width;
      const currentWidth = (currentCount / scaleMax) * plot.width;
      ctx.fillStyle = ORIGINAL;
      ctx.fillRect(plot.left, y - barHeight - 1, originalWidth, barHeight);
      ctx.fillStyle = CURRENT;
      ctx.fillRect(plot.left, y + 1, currentWidth, barHeight);
      ctx.fillStyle = TEXT;
      ctx.textAlign = "right";
      const display = label.length > 18 ? label.slice(0, 17) + "…" : label;
      ctx.fillText(display, plot.left - 9, y);
      ctx.textAlign = "left";
      ctx.font = "10px " + FONT;
      ctx.fillStyle = MUTED;
      if (originalCount > 0) ctx.fillText(String(originalCount), plot.left + originalWidth + 4, y - 6);
      if (currentCount > 0) ctx.fillText(String(currentCount), plot.left + currentWidth + 4, y + 8);
      ctx.font = "11px " + FONT;
    });

    ctx.fillStyle = TEXT;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.font = "600 12px " + FONT;
    ctx.fillText("Number of records", plot.left + plot.width / 2, canvas.height - 7);
    ctx.save();
    ctx.translate(15, plot.top + plot.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(column + " categories", 0, 0);
    ctx.restore();
    ctx.textAlign = "left";
    drawLegend(ctx, plot.left, 25, "Original data", "Current data");
  }

  CleaningCharts.clear = clear;
  CleaningCharts.drawHistogramCompare = drawHistogramCompare;
  CleaningCharts.drawCategoryCompare = drawCategoryCompare;
})(typeof window !== "undefined" ? window : globalThis);
