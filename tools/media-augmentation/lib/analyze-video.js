/* Video analysis: histogram, frame-diff, fidelity, flow lite (window.MediaAugLib). */
(function (global) {
  "use strict";
  const MediaAugLib = global.MediaAugLib || (global.MediaAugLib = {});

  function getGray(canvas) {
    const ctx = canvas.getContext("2d");
    const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const d = img.data;
    const g = new Float32Array(canvas.width * canvas.height);
    for (let i = 0, p = 0; i < d.length; i += 4, p++) {
      g[p] = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
    }
    return { gray: g, width: canvas.width, height: canvas.height, rgba: d };
  }

  MediaAugLib.frameHistogram = function (canvas, bins) {
    bins = bins || 32;
    const hist = new Float32Array(bins);
    const { rgba } = getGray(canvas);
    for (let i = 0; i < rgba.length; i += 4) {
      const y = 0.299 * rgba[i] + 0.587 * rgba[i + 1] + 0.114 * rgba[i + 2];
      const b = Math.min(bins - 1, Math.floor((y / 255) * bins));
      hist[b]++;
    }
    let max = 1;
    for (let i = 0; i < bins; i++) if (hist[i] > max) max = hist[i];
    for (let i = 0; i < bins; i++) hist[i] /= max;
    return hist;
  };

  /** Mean absolute error between two equal-size frame lists (resized by index clamp). */
  MediaAugLib.videoFidelity = function (origFrames, augFrames) {
    if (!origFrames.length || !augFrames.length) {
      return { mae: 1, score: 0, nCompared: 0 };
    }
    let sum = 0;
    let n = 0;
    const nF = Math.min(origFrames.length, augFrames.length);
    for (let fi = 0; fi < nF; fi++) {
      const a = getGray(origFrames[fi]);
      const b = getGray(augFrames[fi]);
      if (a.width !== b.width || a.height !== b.height) continue;
      for (let i = 0; i < a.gray.length; i++) {
        sum += Math.abs(a.gray[i] - b.gray[i]);
        n++;
      }
    }
    const mae = n ? sum / n / 255 : 1;
    return {
      mae: mae,
      score: Math.max(0, 1 - mae),
      nCompared: nF,
      note: origFrames.length !== augFrames.length ? "Frame counts differ (e.g. drop)—compared min length." : "",
    };
  };

  /** Pairwise |frame[t]-frame[t-1]| mean map as canvas (downsampled). */
  MediaAugLib.drawFrameDiff = function (canvas, frames) {
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = "#1c2421";
    ctx.fillRect(0, 0, w, h);
    if (!frames || frames.length < 2) {
      ctx.fillStyle = "#f7f9f8";
      ctx.font = "12px sans-serif";
      ctx.fillText("Need ≥2 frames", 8, 20);
      return;
    }
    const a = getGray(frames[0]);
    const b = getGray(frames[Math.min(frames.length - 1, Math.floor(frames.length / 2))]);
    // Also accumulate temporal diffs across sequence into a mean map
    const acc = new Float32Array(a.gray.length);
    let pairs = 0;
    for (let t = 1; t < frames.length; t++) {
      const g0 = getGray(frames[t - 1]);
      const g1 = getGray(frames[t]);
      if (g0.gray.length !== g1.gray.length) continue;
      for (let i = 0; i < g0.gray.length; i++) acc[i] += Math.abs(g1.gray[i] - g0.gray[i]);
      pairs++;
    }
    if (!pairs) return;
    let max = 1e-6;
    for (let i = 0; i < acc.length; i++) {
      acc[i] /= pairs;
      if (acc[i] > max) max = acc[i];
    }
    const fw = a.width;
    const fh = a.height;
    const img = ctx.createImageData ? ctx.createImageData(w, h) : { data: new Uint8ClampedArray(w * h * 4), width: w, height: h };
    const d = img.data;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const sx = Math.min(fw - 1, Math.floor((x / w) * fw));
        const sy = Math.min(fh - 1, Math.floor((y / h) * fh));
        const t = acc[sy * fw + sx] / max;
        const i = (y * w + x) * 4;
        d[i] = Math.floor(20 + t * 220);
        d[i + 1] = Math.floor(30 + t * 160);
        d[i + 2] = Math.floor(40 + (1 - t) * 60);
        d[i + 3] = 255;
      }
    }
    if (ctx.putImageData) ctx.putImageData(img, 0, 0);
  };

  MediaAugLib.drawRgbHistogram = function (canvas, frame) {
    const hist = MediaAugLib.frameHistogram(frame, 32);
    MediaAugLib.drawBarChart(canvas, hist, {
      color: "#3d5a80",
      zeroBaseline: true,
      yLabel: "Relative count",
      xLabel: "Luma bin (0=dark … 31=bright)",
      title: "Luma histogram",
      xTickEvery: 8,
    });
  };

  /**
   * Lite block-matching “optical flow” magnitude between two frames.
   * Teaching demo only—not production OF.
   */
  MediaAugLib.drawFlowLite = function (canvas, frameA, frameB) {
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = "#1c2421";
    ctx.fillRect(0, 0, w, h);
    if (!frameA || !frameB) return;
    const a = getGray(frameA);
    const b = getGray(frameB);
    const block = 8;
    const search = 4;
    const mag = [];
    for (let by = 0; by + block < a.height; by += block) {
      for (let bx = 0; bx + block < a.width; bx += block) {
        let best = Infinity;
        let bestDx = 0;
        let bestDy = 0;
        for (let dy = -search; dy <= search; dy++) {
          for (let dx = -search; dx <= search; dx++) {
            let err = 0;
            for (let y = 0; y < block; y += 2) {
              for (let x = 0; x < block; x += 2) {
                const x0 = bx + x;
                const y0 = by + y;
                const x1 = x0 + dx;
                const y1 = y0 + dy;
                if (x1 < 0 || y1 < 0 || x1 >= a.width || y1 >= a.height) {
                  err += 255;
                  continue;
                }
                err += Math.abs(a.gray[y0 * a.width + x0] - b.gray[y1 * b.width + x1]);
              }
            }
            if (err < best) {
              best = err;
              bestDx = dx;
              bestDy = dy;
            }
          }
        }
        mag.push({
          x: bx + block / 2,
          y: by + block / 2,
          dx: bestDx,
          dy: bestDy,
          m: Math.sqrt(bestDx * bestDx + bestDy * bestDy),
        });
      }
    }
    let maxM = 1e-6;
    mag.forEach(function (p) {
      if (p.m > maxM) maxM = p.m;
    });
    ctx.strokeStyle = "#7ad4c0";
    ctx.lineWidth = 1.5;
    const sx = w / a.width;
    const sy = h / a.height;
    mag.forEach(function (p) {
      if (p.m < 0.5) return;
      const x0 = p.x * sx;
      const y0 = p.y * sy;
      const scale = 3 * (p.m / maxM);
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x0 + p.dx * scale * sx * 2, y0 + p.dy * scale * sy * 2);
      ctx.stroke();
    });
  };

  MediaAugLib.drawFidelityMeter = function (canvas, fidelity) {
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = "#f7f9f8";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#d5ddd8";
    ctx.fillRect(10, h / 2 - 8, w - 20, 16);
    ctx.fillStyle = fidelity.score > 0.7 ? "#1f7a4c" : fidelity.score > 0.4 ? "#b86a00" : "#a33b3b";
    ctx.fillRect(10, h / 2 - 8, Math.max(0, fidelity.score) * (w - 20), 16);
    ctx.fillStyle = "#1c2421";
    ctx.font = "12px sans-serif";
    ctx.fillText(
      "Fidelity ≈ " + (fidelity.score * 100).toFixed(0) + "%  (MAE " + fidelity.mae.toFixed(3) + ")",
      10,
      18
    );
    if (fidelity.note) {
      ctx.fillStyle = "#5b6b7c";
      ctx.fillText(fidelity.note, 10, h - 8);
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
