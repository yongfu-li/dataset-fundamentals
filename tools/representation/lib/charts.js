/* Classic script — canvas charts for population vs dataset comparison. */
(function (global) {
  "use strict";
  const RepresentationCharts = global.RepresentationCharts || (global.RepresentationCharts = {});

  const FONT = "Source Sans 3, Arial, sans-serif";
  const TEXT = "#33413c";
  const MUTED = "#66736d";
  const GRID = "#dfe4e1";
  const POP_BAR = "#9aada6";
  const DATA_BAR = "#0f6b5c";
  const WARN = "#b45309";
  const ACC_BAR = "#5c8f86";

  function clear(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function formatPct(value) {
    return (value * 100).toFixed(0) + "%";
  }

  /**
   * Grouped horizontal bars: population (muted) vs dataset (accent) per group.
   * @param {HTMLCanvasElement} canvas
   * @param {Array<{group:string, populationShare:number, datasetShare:number, flagged?:boolean}>} items
   * @param {{ title?: string }} opts
   */
  function drawPopulationVsDataset(canvas, items, opts) {
    clear(canvas);
    if (!canvas || !items || !items.length) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    opts = opts || {};

    const plot = { left: 110, right: canvas.width - 48, top: 48, bottom: canvas.height - 36 };
    plot.width = plot.right - plot.left;
    plot.height = plot.bottom - plot.top;

    // Title
    ctx.fillStyle = TEXT;
    ctx.font = "600 13px " + FONT;
    ctx.textAlign = "left";
    ctx.fillText(opts.title || "Population vs dataset share", plot.left, 22);

    // Legend on separate row
    ctx.font = "11px " + FONT;
    let lx = plot.left;
    const ly = 36;
    ctx.fillStyle = POP_BAR;
    ctx.fillRect(lx, ly - 8, 12, 10);
    ctx.fillStyle = MUTED;
    ctx.fillText("Population", lx + 16, ly);
    lx += 100;
    ctx.fillStyle = DATA_BAR;
    ctx.fillRect(lx, ly - 8, 12, 10);
    ctx.fillStyle = MUTED;
    ctx.fillText("Dataset", lx + 16, ly);

    const maxVal = 1;
    for (let tick = 0; tick <= 4; tick += 1) {
      const value = (maxVal * tick) / 4;
      const x = plot.left + (value / maxVal) * plot.width;
      ctx.strokeStyle = GRID;
      ctx.beginPath();
      ctx.moveTo(x, plot.top);
      ctx.lineTo(x, plot.bottom);
      ctx.stroke();
      ctx.fillStyle = MUTED;
      ctx.font = "10px " + FONT;
      ctx.textAlign = "center";
      ctx.fillText(formatPct(value), x, plot.bottom + 14);
    }

    const rowH = plot.height / items.length;
    const barH = Math.min(12, rowH * 0.28);

    items.forEach(function (it, i) {
      const yMid = plot.top + rowH * i + rowH / 2;
      ctx.fillStyle = it.flagged ? WARN : TEXT;
      ctx.font = "11px " + FONT;
      ctx.textAlign = "right";
      ctx.fillText(String(it.group), plot.left - 8, yMid + 4);

      const popW = Math.max(0, (it.populationShare / maxVal) * plot.width);
      const dataW = Math.max(0, (it.datasetShare / maxVal) * plot.width);

      ctx.fillStyle = POP_BAR;
      ctx.fillRect(plot.left, yMid - barH - 2, popW, barH);
      ctx.fillStyle = DATA_BAR;
      ctx.fillRect(plot.left, yMid + 2, dataW, barH);

      ctx.fillStyle = MUTED;
      ctx.font = "10px " + FONT;
      ctx.textAlign = "left";
      if (popW > 8) ctx.fillText(formatPct(it.populationShare), plot.left + popW + 4, yMid - 2);
      if (dataW > 8) ctx.fillText(formatPct(it.datasetShare), plot.left + dataW + 4, yMid + barH + 2);
    });
  }

  /**
   * Horizontal accuracy bars by group.
   * @param {HTMLCanvasElement} canvas
   * @param {Array<{group:string, accuracy:number}>} items
   * @param {{ title?: string }} opts
   */
  function drawAccuracyBars(canvas, items, opts) {
    clear(canvas);
    if (!canvas || !items || !items.length) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    opts = opts || {};

    const plot = { left: 110, right: canvas.width - 48, top: 36, bottom: canvas.height - 36 };
    plot.width = plot.right - plot.left;
    plot.height = plot.bottom - plot.top;

    ctx.fillStyle = TEXT;
    ctx.font = "600 13px " + FONT;
    ctx.textAlign = "left";
    ctx.fillText(opts.title || "Per-group accuracy", plot.left, 22);

    for (let tick = 0; tick <= 4; tick += 1) {
      const value = tick / 4;
      const x = plot.left + value * plot.width;
      ctx.strokeStyle = GRID;
      ctx.beginPath();
      ctx.moveTo(x, plot.top);
      ctx.lineTo(x, plot.bottom);
      ctx.stroke();
      ctx.fillStyle = MUTED;
      ctx.font = "10px " + FONT;
      ctx.textAlign = "center";
      ctx.fillText(formatPct(value), x, plot.bottom + 14);
    }

    const rowH = plot.height / items.length;
    const barH = Math.min(16, rowH * 0.45);

    items.forEach(function (it, i) {
      const y = plot.top + rowH * i + (rowH - barH) / 2;
      ctx.fillStyle = TEXT;
      ctx.font = "11px " + FONT;
      ctx.textAlign = "right";
      ctx.fillText(String(it.group), plot.left - 8, y + barH - 2);

      const w = Math.max(0, it.accuracy * plot.width);
      ctx.fillStyle = ACC_BAR;
      ctx.fillRect(plot.left, y, w, barH);
      ctx.fillStyle = MUTED;
      ctx.font = "10px " + FONT;
      ctx.textAlign = "left";
      ctx.fillText(formatPct(it.accuracy), plot.left + w + 4, y + barH - 2);
    });
  }

  RepresentationCharts.drawPopulationVsDataset = drawPopulationVsDataset;
  RepresentationCharts.drawAccuracyBars = drawAccuracyBars;
})(typeof window !== "undefined" ? window : globalThis);
