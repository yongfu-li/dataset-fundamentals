/* Audio synthesis + augmentation (window.MediaAugLib). No ML. */
(function (global) {
  "use strict";
  const MediaAugLib = global.MediaAugLib || (global.MediaAugLib = {});

  const SR = 22050;

  function mulberry32(a) {
    return function () {
      let t = (a += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function tone(freq, durSec, gain) {
    const n = Math.floor(SR * durSec);
    const out = new Float32Array(n);
    const g = gain == null ? 0.25 : gain;
    for (let i = 0; i < n; i++) {
      const t = i / SR;
      const env = Math.min(1, i / (0.02 * SR)) * Math.min(1, (n - i) / (0.05 * SR));
      out[i] = Math.sin(2 * Math.PI * freq * t) * g * env;
    }
    return out;
  }

  function chirp(f0, f1, durSec) {
    const n = Math.floor(SR * durSec);
    const out = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const t = i / SR;
      const f = f0 + (f1 - f0) * (t / durSec);
      const env = Math.min(1, i / (0.02 * SR)) * Math.min(1, (n - i) / (0.08 * SR));
      out[i] = Math.sin(2 * Math.PI * f * t) * 0.22 * env;
    }
    return out;
  }

  function noiseBurst(durSec, rng) {
    const n = Math.floor(SR * durSec);
    const out = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const env = Math.min(1, i / (0.01 * SR)) * Math.min(1, (n - i) / (0.1 * SR));
      out[i] = (rng() * 2 - 1) * 0.18 * env;
    }
    return out;
  }

  /** Simple dual-tone “speech-like” clip (not real speech). */
  function dualTone(durSec) {
    const n = Math.floor(SR * durSec);
    const out = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const t = i / SR;
      const env = Math.min(1, i / (0.03 * SR)) * Math.min(1, (n - i) / (0.1 * SR));
      const a = Math.sin(2 * Math.PI * 220 * t);
      const b = Math.sin(2 * Math.PI * 440 * t) * 0.5;
      const trem = 0.7 + 0.3 * Math.sin(2 * Math.PI * 3 * t);
      out[i] = (a + b) * 0.15 * env * trem;
    }
    return out;
  }

  function cloneSamples(s) {
    return new Float32Array(s);
  }

  function applyGain(samples, factor) {
    const out = cloneSamples(samples);
    for (let i = 0; i < out.length; i++) out[i] *= factor;
    return out;
  }

  function applyReverse(samples) {
    const out = cloneSamples(samples);
    out.reverse();
    return out;
  }

  function applyNoise(samples, intensity, rng) {
    const out = cloneSamples(samples);
    const amp = intensity * 0.25;
    for (let i = 0; i < out.length; i++) out[i] += (rng() * 2 - 1) * amp;
    return out;
  }

  function applyFade(samples) {
    const out = cloneSamples(samples);
    const fade = Math.floor(out.length * 0.15);
    for (let i = 0; i < fade; i++) {
      out[i] *= i / fade;
      out[out.length - 1 - i] *= i / fade;
    }
    return out;
  }

  /** Pitch via naive resample (changes duration too). */
  function applyPitch(samples, rate) {
    rate = Math.max(0.5, Math.min(2, rate));
    const n = Math.floor(samples.length / rate);
    const out = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const src = i * rate;
      const i0 = Math.floor(src);
      const i1 = Math.min(samples.length - 1, i0 + 1);
      const t = src - i0;
      out[i] = samples[i0] * (1 - t) + samples[i1] * t;
    }
    return out;
  }

  function applyTrim(samples, intensity, rng) {
    const cut = Math.floor(samples.length * 0.1 * intensity * (0.5 + rng()));
    if (cut * 2 >= samples.length) return cloneSamples(samples);
    return samples.slice(cut, samples.length - cut);
  }

  MediaAugLib.AUDIO_SR = SR;
  MediaAugLib.AUDIO_METHODS = [
    { id: "gain", label: "Gain (louder / quieter)" },
    { id: "reverse", label: "Reverse" },
    { id: "noise", label: "Add noise" },
    { id: "pitch", label: "Pitch / resample" },
    { id: "fade", label: "Fade in/out" },
    { id: "trim", label: "Trim edges" },
    { id: "random_pipeline", label: "Random pipeline (2–3 ops)" },
  ];

  MediaAugLib.makeAudioPresets = function (rng) {
    rng = rng || mulberry32(7);
    return [
      {
        id: "beep",
        title: "Beep (440 Hz)",
        description: "Clean tone—easy to hear reverse and pitch.",
        samples: tone(440, 1.0, 0.28),
      },
      {
        id: "chirp",
        title: "Chirp sweep",
        description: "Rising frequency—good for time/pitch demos.",
        samples: chirp(200, 1200, 1.2),
      },
      {
        id: "noise-burst",
        title: "Noise burst",
        description: "Broadband noise—gain and trim show clearly.",
        samples: noiseBurst(0.9, rng),
      },
      {
        id: "dual-tone",
        title: "Dual-tone (speech-like)",
        description: "Toy dual tone—not real speech; privacy-safe preset.",
        samples: dualTone(1.1),
      },
    ];
  };

  function applyAudioOne(method, samples, intensity, rng) {
    switch (method) {
      case "gain":
        return applyGain(samples, 0.4 + intensity * 1.4 * (0.5 + rng()));
      case "reverse":
        return applyReverse(samples);
      case "noise":
        return applyNoise(samples, intensity, rng);
      case "pitch":
        return applyPitch(samples, 0.7 + intensity * 0.9 * rng() + (1 - intensity) * 0.3);
      case "fade":
        return applyFade(samples);
      case "trim":
        return applyTrim(samples, intensity, rng);
      default:
        throw new Error("Unknown audio method: " + method);
    }
  }

  MediaAugLib.augmentAudio = function (samples, opts) {
    const method = opts.method || "noise";
    const count = Math.max(1, Math.min(8, Number(opts.count) || 3));
    const seedNum = (Number(opts.seed) || 42) >>> 0;
    const intensity = Math.max(0, Math.min(1, Number(opts.intensity) || 0.45));
    const rng = mulberry32(seedNum);
    const pool = ["gain", "reverse", "noise", "pitch", "fade", "trim"];
    const items = [];

    for (let i = 0; i < count; i++) {
      let s = cloneSamples(samples);
      const ops = [];
      if (method === "random_pipeline") {
        const nOps = 2 + Math.floor(rng() * 2);
        for (let k = 0; k < nOps; k++) {
          const op = pool[Math.floor(rng() * pool.length)];
          s = applyAudioOne(op, s, intensity, rng);
          ops.push(op);
        }
      } else {
        s = applyAudioOne(method, s, intensity, rng);
        ops.push(method);
      }
      // soft clip
      for (let j = 0; j < s.length; j++) {
        if (s[j] > 1) s[j] = 1;
        if (s[j] < -1) s[j] = -1;
      }
      items.push({ id: "A" + String(i + 1).padStart(3, "0"), samples: s, ops: ops });
    }

    return {
      modality: "audio",
      method: method,
      seed: seedNum,
      count: count,
      intensity: intensity,
      sampleRate: SR,
      items: items,
      caveats: [
        "Rule-based audio transforms only—no TTS or generative audio model.",
        "Presets are synthetic tones, not real speech recordings.",
        "Augment training clips; keep evaluation audio clean.",
      ],
    };
  };

  MediaAugLib.encodeWav = function (samples, sampleRate) {
    sampleRate = sampleRate || SR;
    const n = samples.length;
    const buffer = new ArrayBuffer(44 + n * 2);
    const view = new DataView(buffer);
    function wstr(off, s) {
      for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i));
    }
    wstr(0, "RIFF");
    view.setUint32(4, 36 + n * 2, true);
    wstr(8, "WAVE");
    wstr(12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    wstr(36, "data");
    view.setUint32(40, n * 2, true);
    let off = 44;
    for (let i = 0; i < n; i++) {
      let x = Math.max(-1, Math.min(1, samples[i]));
      view.setInt16(off, x < 0 ? x * 0x8000 : x * 0x7fff, true);
      off += 2;
    }
    return new Uint8Array(buffer);
  };

  MediaAugLib.drawWaveform = function (canvas, samples) {
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = "#f7f9f8";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#0f6b5c";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    const mid = h / 2;
    const step = Math.max(1, Math.floor(samples.length / w));
    for (let x = 0; x < w; x++) {
      const i = Math.min(samples.length - 1, x * step);
      const y = mid - samples[i] * (h * 0.42);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.strokeStyle = "#d5ddd8";
    ctx.beginPath();
    ctx.moveTo(0, mid);
    ctx.lineTo(w, mid);
    ctx.stroke();
  };

  MediaAugLib.mulberry32 = mulberry32;
})(typeof window !== "undefined" ? window : globalThis);
