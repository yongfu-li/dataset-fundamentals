/* Audio analysis: meters, spectrogram, mel, MFCC (window.MediaAugLib). */
(function (global) {
  "use strict";
  const MediaAugLib = global.MediaAugLib || (global.MediaAugLib = {});

  function hzToMel(hz) {
    return 2595 * Math.log10(1 + hz / 700);
  }
  function melToHz(mel) {
    return 700 * (Math.pow(10, mel / 2595) - 1);
  }

  /** Cooley–Tukey radix-2 FFT; n must be power of 2. Returns {re, im}. */
  function fft(re, im) {
    const n = re.length;
    for (let i = 1, j = 0; i < n; i++) {
      let bit = n >> 1;
      for (; j & bit; bit >>= 1) j ^= bit;
      j ^= bit;
      if (i < j) {
        let tr = re[i];
        re[i] = re[j];
        re[j] = tr;
        let ti = im[i];
        im[i] = im[j];
        im[j] = ti;
      }
    }
    for (let len = 2; len <= n; len <<= 1) {
      const ang = (-2 * Math.PI) / len;
      const wlenRe = Math.cos(ang);
      const wlenIm = Math.sin(ang);
      for (let i = 0; i < n; i += len) {
        let wRe = 1;
        let wIm = 0;
        for (let j = 0; j < len / 2; j++) {
          const uRe = re[i + j];
          const uIm = im[i + j];
          const vRe = re[i + j + len / 2] * wRe - im[i + j + len / 2] * wIm;
          const vIm = re[i + j + len / 2] * wIm + im[i + j + len / 2] * wRe;
          re[i + j] = uRe + vRe;
          im[i + j] = uIm + vIm;
          re[i + j + len / 2] = uRe - vRe;
          im[i + j + len / 2] = uIm - vIm;
          const nRe = wRe * wlenRe - wIm * wlenIm;
          wIm = wRe * wlenIm + wIm * wlenRe;
          wRe = nRe;
        }
      }
    }
  }

  function nextPow2(n) {
    let p = 1;
    while (p < n) p <<= 1;
    return p;
  }

  MediaAugLib.audioMeters = function (samples) {
    let sum = 0;
    let peak = 0;
    for (let i = 0; i < samples.length; i++) {
      const a = Math.abs(samples[i]);
      sum += samples[i] * samples[i];
      if (a > peak) peak = a;
    }
    const rms = samples.length ? Math.sqrt(sum / samples.length) : 0;
    return {
      rms: rms,
      peak: peak,
      durationSec: samples.length / (MediaAugLib.AUDIO_SR || 22050),
      rmsDb: rms > 1e-9 ? 20 * Math.log10(rms) : -120,
      peakDb: peak > 1e-9 ? 20 * Math.log10(peak) : -120,
    };
  };

  /**
   * STFT magnitude spectrogram.
   * @returns {{ matrix: Float32Array[], nFreq: number, nFrames: number, fftSize: number }}
   */
  MediaAugLib.computeSpectrogram = function (samples, opts) {
    opts = opts || {};
    const fftSize = opts.fftSize || 512;
    const hop = opts.hop || Math.floor(fftSize / 4);
    const nFrames = Math.max(1, 1 + Math.floor(Math.max(0, samples.length - fftSize) / hop));
    const nFreq = fftSize / 2;
    const matrix = [];
    const win = new Float32Array(fftSize);
    for (let i = 0; i < fftSize; i++) win[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / (fftSize - 1)));

    for (let f = 0; f < nFrames; f++) {
      const start = f * hop;
      const re = new Float32Array(fftSize);
      const im = new Float32Array(fftSize);
      for (let i = 0; i < fftSize; i++) {
        const s = start + i < samples.length ? samples[start + i] : 0;
        re[i] = s * win[i];
      }
      fft(re, im);
      const col = new Float32Array(nFreq);
      for (let k = 0; k < nFreq; k++) {
        col[k] = Math.sqrt(re[k] * re[k] + im[k] * im[k]) + 1e-12;
      }
      matrix.push(col);
    }
    return { matrix: matrix, nFreq: nFreq, nFrames: nFrames, fftSize: fftSize, hop: hop };
  };

  function melFilterbank(nMels, nFreq, sampleRate, fftSize) {
    const fMin = 0;
    const fMax = sampleRate / 2;
    const melMin = hzToMel(fMin);
    const melMax = hzToMel(fMax);
    const melPoints = new Float32Array(nMels + 2);
    for (let i = 0; i < nMels + 2; i++) {
      melPoints[i] = melToHz(melMin + ((melMax - melMin) * i) / (nMels + 1));
    }
    const bins = new Float32Array(nMels + 2);
    for (let i = 0; i < nMels + 2; i++) {
      bins[i] = Math.floor((fftSize + 1) * melPoints[i] / sampleRate);
    }
    const filters = [];
    for (let m = 0; m < nMels; m++) {
      const filt = new Float32Array(nFreq);
      const left = bins[m];
      const center = bins[m + 1];
      const right = bins[m + 2];
      for (let k = left; k < center; k++) {
        if (k >= 0 && k < nFreq && center !== left) filt[k] = (k - left) / (center - left);
      }
      for (let k = center; k < right; k++) {
        if (k >= 0 && k < nFreq && right !== center) filt[k] = (right - k) / (right - center);
      }
      filters.push(filt);
    }
    return filters;
  }

  function dct(input, nCoeff) {
    const N = input.length;
    const out = new Float32Array(nCoeff);
    for (let k = 0; k < nCoeff; k++) {
      let sum = 0;
      for (let n = 0; n < N; n++) {
        sum += input[n] * Math.cos((Math.PI * k * (n + 0.5)) / N);
      }
      out[k] = sum;
    }
    return out;
  }

  /** Mean mel energies + mean MFCC (teaching-grade, not a full ASR front-end). */
  MediaAugLib.computeMelMfcc = function (samples, opts) {
    opts = opts || {};
    const sampleRate = opts.sampleRate || MediaAugLib.AUDIO_SR || 22050;
    const nMels = opts.nMels || 26;
    const nMfcc = opts.nMfcc || 13;
    const spec = MediaAugLib.computeSpectrogram(samples, { fftSize: opts.fftSize || 512 });
    const filters = melFilterbank(nMels, spec.nFreq, sampleRate, spec.fftSize);
    const melMean = new Float32Array(nMels);
    const mfccAcc = new Float32Array(nMfcc);
    let frames = 0;
    for (let f = 0; f < spec.nFrames; f++) {
      const col = spec.matrix[f];
      const mel = new Float32Array(nMels);
      for (let m = 0; m < nMels; m++) {
        let e = 0;
        const filt = filters[m];
        for (let k = 0; k < spec.nFreq; k++) e += col[k] * filt[k];
        mel[m] = Math.log(e + 1e-12);
        melMean[m] += mel[m];
      }
      const c = dct(mel, nMfcc);
      for (let i = 0; i < nMfcc; i++) mfccAcc[i] += c[i];
      frames++;
    }
    if (frames) {
      for (let m = 0; m < nMels; m++) melMean[m] /= frames;
      for (let i = 0; i < nMfcc; i++) mfccAcc[i] /= frames;
    }
    return { mel: melMean, mfcc: mfccAcc, nMels: nMels, nMfcc: nMfcc };
  };

  function heatColor(t) {
    // dark → teal → yellow (readable teaching palette)
    t = Math.max(0, Math.min(1, t));
    const r = Math.floor(15 + t * 210);
    const g = Math.floor(35 + t * 190);
    const b = Math.floor(55 + (1 - t) * 70);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  function formatHz(hz) {
    if (hz >= 1000) return (hz / 1000).toFixed(hz % 1000 === 0 ? 0 : 1) + "k";
    return String(Math.round(hz));
  }

  function formatNum(v) {
    if (!isFinite(v)) return "—";
    const a = Math.abs(v);
    if (a >= 100) return v.toFixed(0);
    if (a >= 10) return v.toFixed(1);
    if (a >= 1) return v.toFixed(2);
    return v.toFixed(2);
  }

  /**
   * Spectrogram with frequency (Hz) Y-axis and time (s) X-axis.
   * opts: { sampleRate, fftSize, hop, maxDisplayHz }
   */
  MediaAugLib.drawSpectrogram = function (canvas, samples, opts) {
    opts = opts || {};
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const sampleRate = opts.sampleRate || MediaAugLib.AUDIO_SR || 22050;
    const padL = 44;
    const padR = 8;
    const padT = 14;
    const padB = 28;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;

    ctx.fillStyle = "#f7f9f8";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#1c2421";
    ctx.fillRect(padL, padT, plotW, plotH);

    const spec = MediaAugLib.computeSpectrogram(samples, opts);
    const nyquist = sampleRate / 2;
    const maxHz = Math.min(opts.maxDisplayHz || 8000, nyquist);
    const maxBin = Math.max(1, Math.min(spec.nFreq - 1, Math.floor((maxHz / nyquist) * spec.nFreq)));

    // Percentile-ish scale over displayed band (avoids empty-looking plots)
    const vals = [];
    for (let f = 0; f < spec.nFrames; f++) {
      for (let k = 1; k <= maxBin; k++) vals.push(Math.log10(spec.matrix[f][k]));
    }
    vals.sort(function (a, b) {
      return a - b;
    });
    const p10 = vals[Math.floor(vals.length * 0.1)] || -6;
    const p98 = vals[Math.floor(vals.length * 0.98)] || -1;
    const min = p10;
    const max = Math.max(p98, p10 + 0.5);

    const cellW = plotW / Math.max(1, spec.nFrames);
    const cellH = plotH / Math.max(1, maxBin);
    for (let f = 0; f < spec.nFrames; f++) {
      for (let k = 1; k <= maxBin; k++) {
        const v = Math.log10(spec.matrix[f][k]);
        const t = (v - min) / (max - min || 1);
        ctx.fillStyle = heatColor(t);
        ctx.fillRect(padL + f * cellW, padT + plotH - k * cellH, cellW + 0.5, cellH + 0.5);
      }
    }

    // Axes
    ctx.strokeStyle = "#5b6b7c";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padL, padT);
    ctx.lineTo(padL, padT + plotH);
    ctx.lineTo(padL + plotW, padT + plotH);
    ctx.stroke();

    ctx.fillStyle = "#5b6b7c";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    const yTicks = [0, 0.25, 0.5, 0.75, 1];
    yTicks.forEach(function (u) {
      const hz = u * maxHz;
      const y = padT + plotH - u * plotH;
      ctx.strokeStyle = "rgba(91,107,124,0.35)";
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padL + plotW, y);
      ctx.stroke();
      ctx.fillStyle = "#5b6b7c";
      ctx.fillText(formatHz(hz), padL - 4, y);
    });
    ctx.save();
    ctx.translate(11, padT + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText("Frequency (Hz)", 0, 0);
    ctx.restore();

    const dur = samples.length / sampleRate;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    const xTicks = [0, 0.5, 1];
    xTicks.forEach(function (u) {
      if (u > 1) return;
      const t = u * dur;
      const x = padL + u * plotW;
      ctx.fillStyle = "#5b6b7c";
      ctx.fillText(t.toFixed(2) + "s", x, padT + plotH + 4);
    });
    ctx.fillText("Time (s)", padL + plotW / 2, H - 12);
    ctx.textAlign = "left";
    ctx.fillText("0–" + formatHz(maxHz) + " · log magnitude", padL, 3);
  };

  /**
   * Bar chart with labeled axes.
   * opts: { color, zeroBaseline, yLabel, xLabel, xTickEvery, valueFormatter }
   */
  MediaAugLib.drawBarChart = function (canvas, values, opts) {
    opts = opts || {};
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const padL = 44;
    const padR = 8;
    const padT = 14;
    const padB = 28;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;

    ctx.fillStyle = "#f7f9f8";
    ctx.fillRect(0, 0, W, H);

    const n = values.length;
    if (!n) return;

    let min = values[0];
    let max = values[0];
    for (let i = 1; i < n; i++) {
      if (values[i] < min) min = values[i];
      if (values[i] > max) max = values[i];
    }
    if (opts.zeroBaseline) {
      min = Math.min(0, min);
      max = Math.max(0, max);
    }
    // pad range slightly
    const pad = (max - min) * 0.08 || 0.1;
    min -= pad;
    max += pad;
    const span = max - min || 1;

    // grid + axes
    ctx.strokeStyle = "#d5ddd8";
    ctx.fillStyle = "#5b6b7c";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (let g = 0; g <= 4; g++) {
      const u = g / 4;
      const y = padT + plotH - u * plotH;
      const val = min + u * span;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padL + plotW, y);
      ctx.stroke();
      ctx.fillText(formatNum(val), padL - 4, y);
    }

    if (opts.zeroBaseline && min < 0 && max > 0) {
      const zy = padT + plotH - ((0 - min) / span) * plotH;
      ctx.strokeStyle = "#5b6b7c";
      ctx.beginPath();
      ctx.moveTo(padL, zy);
      ctx.lineTo(padL + plotW, zy);
      ctx.stroke();
    }

    const gap = 2;
    const barW = Math.max(1, (plotW - gap * (n + 1)) / n);
    const zeroY = opts.zeroBaseline
      ? padT + plotH - ((0 - min) / span) * plotH
      : padT + plotH;
    ctx.fillStyle = opts.color || "#0f6b5c";
    for (let i = 0; i < n; i++) {
      const yVal = padT + plotH - ((values[i] - min) / span) * plotH;
      const x = padL + gap + i * (barW + gap);
      const top = Math.min(yVal, zeroY);
      const bot = Math.max(yVal, zeroY);
      ctx.fillRect(x, top, barW, Math.max(1, bot - top));
    }

    ctx.strokeStyle = "#5b6b7c";
    ctx.beginPath();
    ctx.moveTo(padL, padT);
    ctx.lineTo(padL, padT + plotH);
    ctx.lineTo(padL + plotW, padT + plotH);
    ctx.stroke();

    ctx.save();
    ctx.translate(11, padT + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#5b6b7c";
    ctx.fillText(opts.yLabel || "Value", 0, 0);
    ctx.restore();

    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    const every = opts.xTickEvery || Math.max(1, Math.ceil(n / 6));
    for (let i = 0; i < n; i += every) {
      const x = padL + gap + i * (barW + gap) + barW / 2;
      ctx.fillText(String(i), x, padT + plotH + 3);
    }
    ctx.fillText(opts.xLabel || "Index", padL + plotW / 2, H - 12);
    ctx.textAlign = "left";
    ctx.fillText(opts.title || "", padL, 3);
  };

  MediaAugLib.drawMeters = function (canvas, meters) {
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = "#f7f9f8";
    ctx.fillRect(0, 0, w, h);
    function bar(y, label, val01, color) {
      ctx.fillStyle = "#5b6b7c";
      ctx.font = "11px sans-serif";
      ctx.fillText(label, 6, y + 11);
      ctx.fillStyle = "#d5ddd8";
      ctx.fillRect(70, y + 2, w - 80, 12);
      ctx.fillStyle = color;
      ctx.fillRect(70, y + 2, Math.max(0, Math.min(1, val01)) * (w - 80), 12);
    }
    const rms01 = Math.max(0, Math.min(1, (meters.rmsDb + 60) / 60));
    const peak01 = Math.max(0, Math.min(1, (meters.peakDb + 60) / 60));
    bar(8, "RMS", rms01, "#0f6b5c");
    bar(32, "Peak", peak01, "#b86a00");
    ctx.fillStyle = "#5b6b7c";
    ctx.fillText(
      meters.rmsDb.toFixed(1) + " dB · peak " + meters.peakDb.toFixed(1) + " dB · " + meters.durationSec.toFixed(2) + " s",
      6,
      h - 6
    );
  };
})(typeof window !== "undefined" ? window : globalThis);
