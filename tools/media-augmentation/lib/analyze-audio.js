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
    // dark → teal → yellow
    t = Math.max(0, Math.min(1, t));
    const r = Math.floor(20 + t * 200);
    const g = Math.floor(40 + t * 180);
    const b = Math.floor(50 + (1 - t) * 80);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  MediaAugLib.drawSpectrogram = function (canvas, samples, opts) {
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = "#1c2421";
    ctx.fillRect(0, 0, w, h);
    const spec = MediaAugLib.computeSpectrogram(samples, opts);
    let max = 1e-12;
    for (let f = 0; f < spec.nFrames; f++) {
      for (let k = 0; k < spec.nFreq; k++) {
        const v = Math.log10(spec.matrix[f][k]);
        if (v > max) max = v;
      }
    }
    const min = max - 4;
    const cellW = w / Math.max(1, spec.nFrames);
    const cellH = h / Math.max(1, spec.nFreq);
    for (let f = 0; f < spec.nFrames; f++) {
      for (let k = 0; k < spec.nFreq; k++) {
        const v = Math.log10(spec.matrix[f][k]);
        const t = (v - min) / (max - min || 1);
        ctx.fillStyle = heatColor(t);
        // low freq at bottom
        ctx.fillRect(f * cellW, h - (k + 1) * cellH, cellW + 0.5, cellH + 0.5);
      }
    }
  };

  MediaAugLib.drawBarChart = function (canvas, values, opts) {
    opts = opts || {};
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = "#f7f9f8";
    ctx.fillRect(0, 0, w, h);
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
    const span = max - min || 1;
    const gap = 2;
    const barW = Math.max(1, (w - gap * (n + 1)) / n);
    ctx.fillStyle = opts.color || "#0f6b5c";
    for (let i = 0; i < n; i++) {
      const t = (values[i] - min) / span;
      const bh = Math.max(1, t * (h - 8));
      ctx.fillRect(gap + i * (barW + gap), h - bh - 4, barW, bh);
    }
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
    // map dB roughly -60..0 → 0..1
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
