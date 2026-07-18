/* Video analysis: histogram, frame-diff, PSNR/SSIM, temporal energy, flow (window.MediaAugLib). */
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

  function formatNum(v) {
    if (!isFinite(v)) return "—";
    const a = Math.abs(v);
    if (a >= 100) return v.toFixed(0);
    if (a >= 10) return v.toFixed(1);
    return v.toFixed(2);
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

  /** Per-channel relative histograms for mid-frame color diagnostics. */
  MediaAugLib.rgbHistograms = function (canvas, bins) {
    bins = bins || 24;
    const r = new Float32Array(bins);
    const g = new Float32Array(bins);
    const b = new Float32Array(bins);
    const { rgba } = getGray(canvas);
    for (let i = 0; i < rgba.length; i += 4) {
      r[Math.min(bins - 1, Math.floor((rgba[i] / 255) * bins))]++;
      g[Math.min(bins - 1, Math.floor((rgba[i + 1] / 255) * bins))]++;
      b[Math.min(bins - 1, Math.floor((rgba[i + 2] / 255) * bins))]++;
    }
    function norm(h) {
      let m = 1;
      for (let i = 0; i < h.length; i++) if (h[i] > m) m = h[i];
      for (let i = 0; i < h.length; i++) h[i] /= m;
      return h;
    }
    return { r: norm(r), g: norm(g), b: norm(b) };
  };

  function ssimLite(grayA, grayB) {
    // Window-free global SSIM-style score on luma (teaching-grade).
    const n = grayA.length;
    if (!n || n !== grayB.length) return 0;
    let meanA = 0;
    let meanB = 0;
    for (let i = 0; i < n; i++) {
      meanA += grayA[i];
      meanB += grayB[i];
    }
    meanA /= n;
    meanB /= n;
    let varA = 0;
    let varB = 0;
    let cov = 0;
    for (let i = 0; i < n; i++) {
      const da = grayA[i] - meanA;
      const db = grayB[i] - meanB;
      varA += da * da;
      varB += db * db;
      cov += da * db;
    }
    varA /= n;
    varB /= n;
    cov /= n;
    const c1 = (0.01 * 255) * (0.01 * 255);
    const c2 = (0.03 * 255) * (0.03 * 255);
    const num = (2 * meanA * meanB + c1) * (2 * cov + c2);
    const den = (meanA * meanA + meanB * meanB + c1) * (varA + varB + c2);
    return den ? Math.max(0, Math.min(1, num / den)) : 0;
  }

  MediaAugLib.videoFidelity = function (origFrames, augFrames) {
    if (!origFrames.length || !augFrames.length) {
      return { mae: 1, score: 0, psnr: 0, ssim: 0, nCompared: 0, perFrame: [] };
    }
    let sumAbs = 0;
    let sumSq = 0;
    let n = 0;
    let ssimAcc = 0;
    const nF = Math.min(origFrames.length, augFrames.length);
    const perFrame = [];
    for (let fi = 0; fi < nF; fi++) {
      const a = getGray(origFrames[fi]);
      const b = getGray(augFrames[fi]);
      if (a.width !== b.width || a.height !== b.height) continue;
      let frameAbs = 0;
      let frameSq = 0;
      for (let i = 0; i < a.gray.length; i++) {
        const d = a.gray[i] - b.gray[i];
        const ad = Math.abs(d);
        frameAbs += ad;
        frameSq += d * d;
        sumAbs += ad;
        sumSq += d * d;
        n++;
      }
      const mse = frameSq / a.gray.length;
      const psnr = mse < 1e-12 ? 99 : Math.min(99, 10 * Math.log10((255 * 255) / mse));
      const ssim = ssimLite(a.gray, b.gray);
      ssimAcc += ssim;
      perFrame.push({
        index: fi,
        mae: frameAbs / a.gray.length / 255,
        psnr: psnr,
        ssim: ssim,
      });
    }
    const mae = n ? sumAbs / n / 255 : 1;
    const mse = n ? sumSq / n : 255 * 255;
    const psnr = mse < 1e-12 ? 99 : Math.min(99, 10 * Math.log10((255 * 255) / mse));
    const ssim = nF ? ssimAcc / nF : 0;
    return {
      mae: mae,
      score: Math.max(0, 1 - mae),
      psnr: psnr,
      ssim: ssim,
      nCompared: nF,
      perFrame: perFrame,
      note:
        origFrames.length !== augFrames.length
          ? "Frame counts differ (e.g. drop)—compared min length."
          : "",
    };
  };

  /** Mean absolute inter-frame difference (temporal motion energy). */
  MediaAugLib.temporalMotionEnergy = function (frames) {
    const out = [];
    if (!frames || frames.length < 2) return out;
    for (let t = 1; t < frames.length; t++) {
      const g0 = getGray(frames[t - 1]);
      const g1 = getGray(frames[t]);
      if (g0.gray.length !== g1.gray.length) {
        out.push(0);
        continue;
      }
      let s = 0;
      for (let i = 0; i < g0.gray.length; i++) s += Math.abs(g1.gray[i] - g0.gray[i]);
      out.push(s / g0.gray.length / 255);
    }
    return out;
  };

  function drawPlotFrame(ctx, W, H, pad) {
    ctx.fillStyle = "#f7f9f8";
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "#5b6b7c";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad.l, pad.t);
    ctx.lineTo(pad.l, H - pad.b);
    ctx.lineTo(W - pad.r, H - pad.b);
    ctx.stroke();
  }

  MediaAugLib.drawFrameDiff = function (canvas, frames) {
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const pad = { l: 40, r: 10, t: 16, b: 26 };
    drawPlotFrame(ctx, W, H, pad);
    const plotW = W - pad.l - pad.r;
    const plotH = H - pad.t - pad.b;
    if (!frames || frames.length < 2) {
      ctx.fillStyle = "#5b6b7c";
      ctx.font = "11px sans-serif";
      ctx.fillText("Need ≥2 frames", pad.l + 8, pad.t + 20);
      return;
    }
    const a = getGray(frames[0]);
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
    const img = ctx.createImageData
      ? ctx.createImageData(plotW, plotH)
      : { data: new Uint8ClampedArray(plotW * plotH * 4), width: plotW, height: plotH };
    const d = img.data;
    for (let y = 0; y < plotH; y++) {
      for (let x = 0; x < plotW; x++) {
        const sx = Math.min(fw - 1, Math.floor((x / plotW) * fw));
        const sy = Math.min(fh - 1, Math.floor((y / plotH) * fh));
        const t = acc[sy * fw + sx] / max;
        const i = (y * plotW + x) * 4;
        d[i] = Math.floor(20 + t * 220);
        d[i + 1] = Math.floor(30 + t * 160);
        d[i + 2] = Math.floor(40 + (1 - t) * 60);
        d[i + 3] = 255;
      }
    }
    if (ctx.putImageData) ctx.putImageData(img, pad.l, pad.t);

    ctx.fillStyle = "#5b6b7c";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText("top", pad.l - 4, pad.t + 6);
    ctx.fillText("bot", pad.l - 4, pad.t + plotH - 6);
    ctx.save();
    ctx.translate(12, pad.t + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText("Image Y (px)", 0, 0);
    ctx.restore();
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("0", pad.l, H - pad.b + 3);
    ctx.fillText("width", pad.l + plotW / 2, H - pad.b + 3);
    ctx.fillText(String(fw), pad.l + plotW, H - pad.b + 3);
    ctx.textAlign = "left";
    ctx.fillText("Mean |Δframe| heat · max " + max.toFixed(1), pad.l, 3);
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

  MediaAugLib.drawRgbChannelHist = function (canvas, frame) {
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const pad = { l: 40, r: 8, t: 16, b: 26 };
    drawPlotFrame(ctx, W, H, pad);
    const plotW = W - pad.l - pad.r;
    const plotH = H - pad.t - pad.b;
    const ch = MediaAugLib.rgbHistograms(frame, 24);
    const series = [
      { data: ch.r, color: "rgba(198,40,40,0.85)" },
      { data: ch.g, color: "rgba(46,125,50,0.75)" },
      { data: ch.b, color: "rgba(21,101,192,0.75)" },
    ];
    const n = 24;
    const gap = 1;
    const groupW = plotW / n;
    series.forEach(function (s, si) {
      ctx.fillStyle = s.color;
      for (let i = 0; i < n; i++) {
        const bh = s.data[i] * (plotH - 4);
        const x = pad.l + i * groupW + si * ((groupW - gap) / 3);
        ctx.fillRect(x, pad.t + plotH - bh, Math.max(1, (groupW - gap) / 3 - 1), Math.max(1, bh));
      }
    });
    ctx.fillStyle = "#5b6b7c";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (let g = 0; g <= 4; g++) {
      const y = pad.t + plotH - (g / 4) * plotH;
      ctx.fillText(formatNum(g / 4), pad.l - 4, y);
    }
    ctx.save();
    ctx.translate(12, pad.t + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText("Relative count", 0, 0);
    ctx.restore();
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("0", pad.l, H - pad.b + 3);
    ctx.fillText("Channel bin →", pad.l + plotW / 2, H - pad.b + 3);
    ctx.fillText("255", pad.l + plotW, H - pad.b + 3);
    ctx.textAlign = "left";
    ctx.fillText("RGB histograms (R/G/B)", pad.l, 3);
  };

  MediaAugLib.drawFlowLite = function (canvas, frameA, frameB) {
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const pad = { l: 40, r: 10, t: 16, b: 26 };
    drawPlotFrame(ctx, W, H, pad);
    const plotW = W - pad.l - pad.r;
    const plotH = H - pad.t - pad.b;
    if (!frameA || !frameB) return;

    // Dim background of frame A
    ctx.globalAlpha = 0.35;
    ctx.drawImage(frameA, pad.l, pad.t, plotW, plotH);
    ctx.globalAlpha = 1;

    const a = getGray(frameA);
    const b = getGray(frameB);
    const block = 10;
    const search = 5;
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
    let meanM = 0;
    mag.forEach(function (p) {
      if (p.m > maxM) maxM = p.m;
      meanM += p.m;
    });
    meanM = mag.length ? meanM / mag.length : 0;

    const sx = plotW / a.width;
    const sy = plotH / a.height;
    ctx.lineWidth = 1.5;
    mag.forEach(function (p) {
      if (p.m < 0.4) return;
      const x0 = pad.l + p.x * sx;
      const y0 = pad.t + p.y * sy;
      const scale = 4 * (p.m / maxM);
      const t = p.m / maxM;
      ctx.strokeStyle = "rgb(" + Math.floor(40 + t * 180) + "," + Math.floor(180 - t * 40) + "," + Math.floor(120) + ")";
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x0 + p.dx * scale * sx * 2.2, y0 + p.dy * scale * sy * 2.2);
      ctx.stroke();
    });

    ctx.fillStyle = "#5b6b7c";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText("0", pad.l - 4, pad.t + 4);
    ctx.fillText(String(a.height), pad.l - 4, pad.t + plotH);
    ctx.save();
    ctx.translate(12, pad.t + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText("Y (px)", 0, 0);
    ctx.restore();
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("0", pad.l, H - pad.b + 3);
    ctx.fillText("X (px)", pad.l + plotW / 2, H - pad.b + 3);
    ctx.fillText(String(a.width), pad.l + plotW, H - pad.b + 3);
    ctx.textAlign = "left";
    ctx.fillText("Flow lite · |v|mean " + meanM.toFixed(2) + " px · max " + maxM.toFixed(1), pad.l, 3);
  };

  MediaAugLib.drawTemporalEnergy = function (canvas, frames, opts) {
    opts = opts || {};
    const energy = MediaAugLib.temporalMotionEnergy(frames);
    const label = opts.label || "Temporal |Δ|";
    if (!energy.length) {
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#f7f9f8";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#5b6b7c";
      ctx.font = "11px sans-serif";
      ctx.fillText("Need ≥2 frames", 12, 24);
      return;
    }
    MediaAugLib.drawBarChart(canvas, energy, {
      color: opts.color || "#0f6b5c",
      zeroBaseline: true,
      yLabel: "Mean |Δ| / 255",
      xLabel: "Frame pair (t−1 → t)",
      title: label,
      xTickEvery: Math.max(1, Math.ceil(energy.length / 6)),
    });
  };

  MediaAugLib.drawFidelityCurves = function (canvas, fidelity) {
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const pad = { l: 44, r: 10, t: 18, b: 28 };
    drawPlotFrame(ctx, W, H, pad);
    const plotW = W - pad.l - pad.r;
    const plotH = H - pad.t - pad.b;
    const pf = fidelity.perFrame || [];
    if (!pf.length) {
      ctx.fillStyle = "#5b6b7c";
      ctx.font = "11px sans-serif";
      ctx.fillText("No per-frame metrics", pad.l + 8, pad.t + 20);
      return;
    }

    function series(getter, color, yMax) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      pf.forEach(function (p, i) {
        const x = pad.l + (i / Math.max(1, pf.length - 1)) * plotW;
        const y = pad.t + plotH - (getter(p) / yMax) * plotH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    }
    // grid
    ctx.strokeStyle = "#d5ddd8";
    ctx.fillStyle = "#5b6b7c";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (let g = 0; g <= 4; g++) {
      const y = pad.t + (g / 4) * plotH;
      ctx.beginPath();
      ctx.moveTo(pad.l, y);
      ctx.lineTo(pad.l + plotW, y);
      ctx.stroke();
      ctx.fillText(formatNum(1 - g / 4), pad.l - 4, y);
    }
    series(function (p) {
      return p.ssim;
    }, "#0f6b5c", 1);
    series(
      function (p) {
        return Math.min(1, p.psnr / 50);
      },
      "#b86a00",
      1
    );

    ctx.save();
    ctx.translate(12, pad.t + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillStyle = "#5b6b7c";
    ctx.fillText("SSIM (0–1) · PSNR/50", 0, 0);
    ctx.restore();
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("frame 0", pad.l, H - pad.b + 3);
    ctx.fillText("Frame index", pad.l + plotW / 2, H - pad.b + 3);
    ctx.fillText(String(pf.length - 1), pad.l + plotW, H - pad.b + 3);
    ctx.textAlign = "left";
    ctx.fillStyle = "#0f6b5c";
    ctx.fillText("SSIM", pad.l, 4);
    ctx.fillStyle = "#b86a00";
    ctx.fillText("PSNR (÷50)", pad.l + 45, 4);
  };

  MediaAugLib.drawFidelityMeter = function (canvas, fidelity) {
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = "#f7f9f8";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#d5ddd8";
    ctx.fillRect(10, 28, w - 20, 14);
    ctx.fillStyle = fidelity.score > 0.7 ? "#1f7a4c" : fidelity.score > 0.4 ? "#b86a00" : "#a33b3b";
    ctx.fillRect(10, 28, Math.max(0, fidelity.score) * (w - 20), 14);
    ctx.fillStyle = "#1c2421";
    ctx.font = "12px sans-serif";
    ctx.fillText(
      "Fidelity ≈ " +
        (fidelity.score * 100).toFixed(0) +
        "%   ·   PSNR " +
        fidelity.psnr.toFixed(1) +
        " dB   ·   SSIM " +
        fidelity.ssim.toFixed(3) +
        "   ·   MAE " +
        fidelity.mae.toFixed(3),
      10,
      18
    );
    if (fidelity.note) {
      ctx.fillStyle = "#5b6b7c";
      ctx.font = "10px sans-serif";
      ctx.fillText(fidelity.note, 10, h - 8);
    }
  };

  MediaAugLib.drawFrameThumb = function (canvas, frame, title) {
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    ctx.fillStyle = "#f7f9f8";
    ctx.fillRect(0, 0, W, H);
    if (!frame) return;
    const pad = 4;
    const top = 16;
    ctx.drawImage(frame, pad, top, W - pad * 2, H - top - pad);
    ctx.fillStyle = "#5b6b7c";
    ctx.font = "10px sans-serif";
    ctx.fillText(title || "Frame", pad, 11);
  };
})(typeof window !== "undefined" ? window : globalThis);
