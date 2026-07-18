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

  /**
   * Prepare a crisp HiDPI (or export-scale) canvas and return logical draw size.
   * Chart code must use returned width/height (not canvas.width) for layout.
   * tools-report.js sets canvas._trExportScale during PNG export.
   *
   * On screen, logical size follows the laid-out CSS width so labels stay
   * readable; backing store is logical × devicePixelRatio.
   */
  Axis.beginChart = function (canvas, fallbackW, fallbackH) {
    if (!canvas) return null;
    const fbW = fallbackW || 560;
    const fbH = fallbackH || 360;
    const aspect = fbH / fbW;
    const exportScale = canvas._trExportScale;

    if (!canvas.getAttribute("data-native-w")) {
      const attrW = Number(canvas.getAttribute("width")) || fbW;
      const attrH = Number(canvas.getAttribute("height")) || fbH;
      if (attrW > 0 && attrW <= 1400) {
        canvas.setAttribute("data-native-w", String(attrW));
        canvas.setAttribute("data-native-h", String(attrH));
      } else {
        canvas.setAttribute("data-native-w", String(fbW));
        canvas.setAttribute("data-native-h", String(fbH));
      }
    }

    let logicalW;
    let logicalH;
    if (exportScale) {
      const nativeW = Number(canvas.getAttribute("data-native-w")) || fbW;
      const nativeH = Number(canvas.getAttribute("data-native-h")) || fbH;
      const laidW = Number(canvas.getAttribute("data-logical-w")) || nativeW;
      const laidH = Number(canvas.getAttribute("data-logical-h")) || nativeH;
      logicalW = Math.max(laidW, nativeW);
      logicalH = Math.max(laidH, nativeH);
    } else {
      const laidOut = Math.round(canvas.clientWidth || 0);
      const parentW = canvas.parentElement
        ? Math.round(canvas.parentElement.clientWidth || 0)
        : 0;
      const cssW = laidOut >= 200 ? laidOut : parentW >= 200 ? parentW : 0;
      if (cssW) {
        logicalW = Math.max(320, Math.min(1200, cssW));
        logicalH = Math.round(logicalW * aspect);
      } else {
        logicalW = Number(canvas.getAttribute("data-native-w")) || fbW;
        logicalH = Number(canvas.getAttribute("data-native-h")) || fbH;
      }
      canvas.setAttribute("data-logical-w", String(logicalW));
      canvas.setAttribute("data-logical-h", String(logicalH));
      canvas.style.height = logicalH + "px";
    }

    const dpr = exportScale
      ? exportScale
      : Math.min(
          Math.max(
            typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
            1
          ),
          3
        );

    const bw = Math.round(logicalW * dpr);
    const bh = Math.round(logicalH * dpr);
    if (canvas.width !== bw || canvas.height !== bh) {
      canvas.width = bw;
      canvas.height = bh;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, logicalW, logicalH);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, logicalW, logicalH);
    ctx.imageSmoothingEnabled = true;
    if ("imageSmoothingQuality" in ctx) ctx.imageSmoothingQuality = "high";

    canvas._lw = logicalW;
    canvas._lh = logicalH;
    return { ctx: ctx, width: logicalW, height: logicalH, dpr: dpr };
  };

  /** Logical chart size after beginChart (falls back to bitmap size). */
  Axis.chartSize = function (canvas) {
    if (!canvas) return { width: 0, height: 0 };
    return {
      width: canvas._lw || Number(canvas.getAttribute("data-logical-w")) || canvas.width,
      height: canvas._lh || Number(canvas.getAttribute("data-logical-h")) || canvas.height,
    };
  };
})(typeof window !== "undefined" ? window : globalThis);
