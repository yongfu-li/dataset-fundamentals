/* Shared axis helpers for tool canvases — black axes + labeled ticks.
 * Load before tool chart scripts (build_site via _tool_footer_scripts). */
(function (global) {
  "use strict";
  const Axis = (global.DatasetToolsAxis = global.DatasetToolsAxis || {});

  Axis.AXIS = "#1c2421";
  Axis.LABEL = "#1c2421";
  Axis.GRID = "rgba(28, 36, 33, 0.18)";
  Axis.FONT = "Source Sans 3, Arial, sans-serif";

  Axis.formatTick = function (value) {
    if (value == null || !isFinite(value)) return "—";
    const abs = Math.abs(value);
    if (abs >= 1000) {
      return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
    }
    if (abs >= 100) return value.toFixed(0);
    if (abs >= 10) return String(Number(value.toFixed(1)));
    if (abs >= 1) return String(Number(value.toFixed(2)));
    return String(Number(value.toFixed(3)));
  };

  Axis.niceMax = function (value) {
    if (value <= 0) return 1;
    const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
    const normalized = value / magnitude;
    const nice = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
    return nice * magnitude;
  };

  /** Draw L-shaped axes in black. plot: {left, right, top, bottom} */
  Axis.drawFrame = function (ctx, plot) {
    ctx.save();
    ctx.strokeStyle = Axis.AXIS;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(plot.left, plot.top);
    ctx.lineTo(plot.left, plot.bottom);
    ctx.lineTo(plot.right, plot.bottom);
    ctx.stroke();
    ctx.restore();
  };

  /**
   * Y-axis ticks + numeric labels (and optional light grid).
   * @param {number} min
   * @param {number} max
   * @param {{ ticks?: number, grid?: boolean, fromZero?: boolean }} opts
   */
  Axis.drawYTicks = function (ctx, plot, min, max, opts) {
    const o = opts || {};
    const n = o.ticks != null ? o.ticks : 4;
    let lo = min;
    let hi = max;
    if (o.fromZero) {
      lo = 0;
      hi = Axis.niceMax(max);
    }
    if (lo === hi) {
      lo -= 1;
      hi += 1;
    }
    ctx.save();
    ctx.font = "11px " + Axis.FONT;
    ctx.fillStyle = Axis.LABEL;
    ctx.strokeStyle = Axis.AXIS;
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (let i = 0; i <= n; i += 1) {
      const value = lo + ((hi - lo) * i) / n;
      const y = plot.bottom - ((value - lo) / (hi - lo)) * (plot.bottom - plot.top);
      if (o.grid !== false) {
        ctx.strokeStyle = Axis.GRID;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(plot.left, y);
        ctx.lineTo(plot.right, y);
        ctx.stroke();
      }
      ctx.strokeStyle = Axis.AXIS;
      ctx.lineWidth = 1.25;
      ctx.beginPath();
      ctx.moveTo(plot.left - 4, y);
      ctx.lineTo(plot.left, y);
      ctx.stroke();
      ctx.fillStyle = Axis.LABEL;
      ctx.fillText(Axis.formatTick(value), plot.left - 7, y);
    }
    ctx.restore();
    return { min: lo, max: hi };
  };

  /**
   * X-axis ticks + numeric labels.
   */
  Axis.drawXTicks = function (ctx, plot, min, max, opts) {
    const o = opts || {};
    const n = o.ticks != null ? o.ticks : 4;
    let lo = min;
    let hi = max;
    if (lo === hi) {
      lo -= 1;
      hi += 1;
    }
    ctx.save();
    ctx.font = "11px " + Axis.FONT;
    ctx.fillStyle = Axis.LABEL;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    for (let i = 0; i <= n; i += 1) {
      const value = lo + ((hi - lo) * i) / n;
      const x = plot.left + ((value - lo) / (hi - lo)) * (plot.right - plot.left);
      if (o.grid) {
        ctx.strokeStyle = Axis.GRID;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, plot.top);
        ctx.lineTo(x, plot.bottom);
        ctx.stroke();
      }
      ctx.strokeStyle = Axis.AXIS;
      ctx.lineWidth = 1.25;
      ctx.beginPath();
      ctx.moveTo(x, plot.bottom);
      ctx.lineTo(x, plot.bottom + 4);
      ctx.stroke();
      ctx.fillStyle = Axis.LABEL;
      ctx.fillText(Axis.formatTick(value), x, plot.bottom + 6);
    }
    ctx.restore();
  };

  /** Rotated y-axis title along the left. */
  Axis.drawYLabel = function (ctx, plot, label) {
    if (!label) return;
    ctx.save();
    ctx.fillStyle = Axis.LABEL;
    ctx.font = "600 12px " + Axis.FONT;
    ctx.translate(14, (plot.top + plot.bottom) / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, 0, 0);
    ctx.restore();
  };

  Axis.drawXLabel = function (ctx, plot, canvasHeight, label) {
    if (!label) return;
    ctx.save();
    ctx.fillStyle = Axis.LABEL;
    ctx.font = "600 12px " + Axis.FONT;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.fillText(label, (plot.left + plot.right) / 2, canvasHeight - 8);
    ctx.restore();
  };
})(typeof window !== "undefined" ? window : globalThis);
