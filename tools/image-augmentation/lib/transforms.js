/* Image augmentation transforms (window.ImgAugLib). Canvas-only, no ML. */
(function (global) {
  "use strict";
  const ImgAugLib = global.ImgAugLib || (global.ImgAugLib = {});

  function mulberry32(a) {
    return function () {
      let t = (a += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function cloneCanvas(src) {
    const c = document.createElement("canvas");
    c.width = src.width;
    c.height = src.height;
    c.getContext("2d").drawImage(src, 0, 0);
    return c;
  }

  function getImageData(canvas) {
    return canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
  }

  function putImageData(canvas, data) {
    canvas.getContext("2d").putImageData(data, 0, 0);
  }

  function flipH(canvas) {
    const out = document.createElement("canvas");
    out.width = canvas.width;
    out.height = canvas.height;
    const ctx = out.getContext("2d");
    ctx.translate(out.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(canvas, 0, 0);
    return out;
  }

  function flipV(canvas) {
    const out = document.createElement("canvas");
    out.width = canvas.width;
    out.height = canvas.height;
    const ctx = out.getContext("2d");
    ctx.translate(0, out.height);
    ctx.scale(1, -1);
    ctx.drawImage(canvas, 0, 0);
    return out;
  }

  function rotate90(canvas, turns) {
    turns = ((turns % 4) + 4) % 4;
    if (turns === 0) return cloneCanvas(canvas);
    let src = canvas;
    for (let i = 0; i < turns; i++) {
      const out = document.createElement("canvas");
      out.width = src.height;
      out.height = src.width;
      const ctx = out.getContext("2d");
      ctx.translate(out.width / 2, out.height / 2);
      ctx.rotate(Math.PI / 2);
      ctx.drawImage(src, -src.width / 2, -src.height / 2);
      src = out;
    }
    return src;
  }

  function brightnessContrast(canvas, brightness, contrast) {
    const out = cloneCanvas(canvas);
    const data = getImageData(out);
    const d = data.data;
    const b = (brightness || 0) * 255;
    const c = contrast || 0;
    const factor = (259 * (c * 255 + 255)) / (255 * (259 - c * 255));
    for (let i = 0; i < d.length; i += 4) {
      for (let k = 0; k < 3; k++) {
        let v = d[i + k];
        v = factor * (v - 128) + 128 + b;
        d[i + k] = v < 0 ? 0 : v > 255 ? 255 : v;
      }
    }
    putImageData(out, data);
    return out;
  }

  function grayscale(canvas) {
    const out = cloneCanvas(canvas);
    const data = getImageData(out);
    const d = data.data;
    for (let i = 0; i < d.length; i += 4) {
      const g = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
      d[i] = d[i + 1] = d[i + 2] = g;
    }
    putImageData(out, data);
    return out;
  }

  function noise(canvas, intensity, rng) {
    const out = cloneCanvas(canvas);
    const data = getImageData(out);
    const d = data.data;
    const amp = (intensity || 0.3) * 60;
    for (let i = 0; i < d.length; i += 4) {
      const n = (rng() * 2 - 1) * amp;
      for (let k = 0; k < 3; k++) {
        let v = d[i + k] + n;
        d[i + k] = v < 0 ? 0 : v > 255 ? 255 : v;
      }
    }
    putImageData(out, data);
    return out;
  }

  function colorJitter(canvas, intensity, rng) {
    const out = cloneCanvas(canvas);
    const data = getImageData(out);
    const d = data.data;
    const amp = (intensity || 0.3) * 0.35;
    const scales = [1 + (rng() * 2 - 1) * amp, 1 + (rng() * 2 - 1) * amp, 1 + (rng() * 2 - 1) * amp];
    for (let i = 0; i < d.length; i += 4) {
      for (let k = 0; k < 3; k++) {
        let v = d[i + k] * scales[k];
        d[i + k] = v < 0 ? 0 : v > 255 ? 255 : v;
      }
    }
    putImageData(out, data);
    return out;
  }

  function cropZoom(canvas, intensity, rng) {
    const out = document.createElement("canvas");
    out.width = canvas.width;
    out.height = canvas.height;
    const zoom = 1 + (intensity || 0.3) * (0.15 + rng() * 0.35);
    const sw = canvas.width / zoom;
    const sh = canvas.height / zoom;
    const sx = rng() * (canvas.width - sw);
    const sy = rng() * (canvas.height - sh);
    out.getContext("2d").drawImage(canvas, sx, sy, sw, sh, 0, 0, out.width, out.height);
    return out;
  }

  function boxBlur(canvas, radius) {
    radius = Math.max(1, Math.min(4, Math.round(radius || 1)));
    let src = cloneCanvas(canvas);
    for (let pass = 0; pass < radius; pass++) {
      const data = getImageData(src);
      const d = data.data;
      const w = src.width;
      const h = src.height;
      const out = new ImageData(w, h);
      const o = out.data;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          let r = 0,
            g = 0,
            b = 0,
            a = 0,
            n = 0;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              const xx = x + dx;
              const yy = y + dy;
              if (xx < 0 || yy < 0 || xx >= w || yy >= h) continue;
              const i = (yy * w + xx) * 4;
              r += d[i];
              g += d[i + 1];
              b += d[i + 2];
              a += d[i + 3];
              n++;
            }
          }
          const j = (y * w + x) * 4;
          o[j] = r / n;
          o[j + 1] = g / n;
          o[j + 2] = b / n;
          o[j + 3] = a / n;
        }
      }
      putImageData(src, out);
    }
    return src;
  }

  ImgAugLib.METHODS = [
    { id: "flip_h", label: "Flip horizontal" },
    { id: "flip_v", label: "Flip vertical" },
    { id: "rotate90", label: "Rotate 90°" },
    { id: "rotate180", label: "Rotate 180°" },
    { id: "brightness", label: "Brightness / contrast" },
    { id: "grayscale", label: "Grayscale" },
    { id: "noise", label: "Pixel noise" },
    { id: "color_jitter", label: "Color jitter" },
    { id: "crop_zoom", label: "Random crop + zoom" },
    { id: "blur", label: "Box blur" },
    { id: "random_pipeline", label: "Random pipeline (2–3 ops)" },
  ];

  const INTENSITY_METHODS = {
    brightness: true,
    noise: true,
    color_jitter: true,
    crop_zoom: true,
    blur: true,
    random_pipeline: true,
  };

  ImgAugLib.intensityApplies = function (method) {
    return !!INTENSITY_METHODS[method];
  };

  function applyOne(method, canvas, intensity, rng) {
    switch (method) {
      case "flip_h":
        return flipH(canvas);
      case "flip_v":
        return flipV(canvas);
      case "rotate90":
        return rotate90(canvas, 1);
      case "rotate180":
        return rotate90(canvas, 2);
      case "brightness":
        return brightnessContrast(canvas, (rng() * 2 - 1) * intensity * 0.35, (rng() * 2 - 1) * intensity * 0.4);
      case "grayscale":
        return grayscale(canvas);
      case "noise":
        return noise(canvas, intensity, rng);
      case "color_jitter":
        return colorJitter(canvas, intensity, rng);
      case "crop_zoom":
        return cropZoom(canvas, intensity, rng);
      case "blur":
        return boxBlur(canvas, 1 + Math.floor(intensity * 3));
      default:
        throw new Error("Unknown transform: " + method);
    }
  }

  ImgAugLib.applyOne = applyOne;
  ImgAugLib.cloneCanvas = cloneCanvas;
  ImgAugLib.mulberry32 = mulberry32;

  ImgAugLib.augment = function (sourceCanvas, opts) {
    const method = opts.method || "flip_h";
    const count = Math.max(1, Math.min(16, Number(opts.count) || 4));
    const seedNum = (Number(opts.seed) || 42) >>> 0;
    const intensity = Math.max(0, Math.min(1, Number(opts.intensity) || 0.45));
    const rng = mulberry32(seedNum);
    const pipelinePool = ["flip_h", "flip_v", "rotate90", "brightness", "noise", "color_jitter", "crop_zoom", "grayscale"];
    const items = [];

    for (let i = 0; i < count; i++) {
      let canvas = cloneCanvas(sourceCanvas);
      const ops = [];
      if (method === "random_pipeline") {
        const nOps = 2 + Math.floor(rng() * 2);
        for (let k = 0; k < nOps; k++) {
          const op = pipelinePool[Math.floor(rng() * pipelinePool.length)];
          canvas = applyOne(op, canvas, intensity, rng);
          ops.push(op);
        }
      } else {
        canvas = applyOne(method, canvas, intensity, rng);
        ops.push(method);
      }
      items.push({
        id: "A" + String(i + 1).padStart(3, "0"),
        canvas: canvas,
        ops: ops,
        dataUrl: canvas.toDataURL("image/png"),
      });
    }

    return {
      method: method,
      seed: seedNum,
      count: count,
      intensity: ImgAugLib.intensityApplies(method) ? intensity : null,
      items: items,
      caveats: [
        "Geometric / photometric transforms only—no generative model on this site.",
        "Augment training images; keep a clean held-out test set unaugmented.",
        "Labels (boxes/masks) must be transformed with the image in real pipelines.",
      ],
    };
  };
})(typeof window !== "undefined" ? window : globalThis);
