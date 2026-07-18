/* Video frame generation + augmentation (window.MediaAugLib). */
(function (global) {
  "use strict";
  const MediaAugLib = global.MediaAugLib || (global.MediaAugLib = {});

  function mulberry32(a) {
    return MediaAugLib.mulberry32
      ? MediaAugLib.mulberry32(a)
      : function () {
          return Math.random();
        };
  }

  function makeCanvas(w, h) {
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    return c;
  }

  function cloneFrame(src) {
    const c = makeCanvas(src.width, src.height);
    c.getContext("2d").drawImage(src, 0, 0);
    return c;
  }

  /** Bouncing ball animation → N frames. */
  function presetBouncingBall(nFrames) {
    nFrames = nFrames || 12;
    const w = 240;
    const h = 160;
    const frames = [];
    for (let i = 0; i < nFrames; i++) {
      const t = i / (nFrames - 1 || 1);
      const c = makeCanvas(w, h);
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#e8eef2";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#c5cdd4";
      ctx.fillRect(0, h - 24, w, 24);
      const x = 30 + t * (w - 80);
      const y = h - 50 - Math.abs(Math.sin(t * Math.PI * 2)) * 70;
      ctx.fillStyle = "#0f6b5c";
      ctx.beginPath();
      ctx.arc(x, y, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#1c2421";
      ctx.font = "12px sans-serif";
      ctx.fillText("ball", 8, 16);
      frames.push(c);
    }
    return {
      id: "bouncing-ball",
      title: "Bouncing ball",
      description: "Short motion clip as frames—flip / reverse / brightness.",
      frames: frames,
    };
  }

  function presetColorPulse(nFrames) {
    nFrames = nFrames || 10;
    const frames = [];
    for (let i = 0; i < nFrames; i++) {
      const t = i / (nFrames - 1 || 1);
      const c = makeCanvas(240, 160);
      const ctx = c.getContext("2d");
      const g = ctx.createLinearGradient(0, 0, 240, 160);
      g.addColorStop(0, "hsl(" + Math.floor(t * 120 + 140) + ",55%,45%)");
      g.addColorStop(1, "hsl(" + Math.floor(200 - t * 80) + ",50%,55%)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 240, 160);
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.fillRect(50, 50, 140, 60);
      ctx.fillStyle = "#1c2421";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText("pulse " + (i + 1), 70, 88);
      frames.push(c);
    }
    return {
      id: "color-pulse",
      title: "Color pulse",
      description: "Hue shifts over time—good for color jitter & grayscale.",
      frames: frames,
    };
  }

  function presetScrollingBar(nFrames) {
    nFrames = nFrames || 12;
    const frames = [];
    for (let i = 0; i < nFrames; i++) {
      const t = i / (nFrames - 1 || 1);
      const c = makeCanvas(240, 160);
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#f4f1ea";
      ctx.fillRect(0, 0, 240, 160);
      ctx.fillStyle = "#3d5a80";
      ctx.fillRect(20 + t * 160, 60, 50, 40);
      ctx.fillStyle = "#b86a00";
      ctx.fillRect(0, 130, 240, 8);
      ctx.fillStyle = "#1c2421";
      ctx.font = "12px sans-serif";
      ctx.fillText("scroll", 8, 18);
      frames.push(c);
    }
    return {
      id: "scrolling-bar",
      title: "Scrolling bar",
      description: "Moving rectangle—frame drop and reverse are obvious.",
      frames: frames,
    };
  }

  MediaAugLib.makeVideoPresets = function () {
    return [presetBouncingBall(12), presetColorPulse(10), presetScrollingBar(12)];
  };

  MediaAugLib.VIDEO_METHODS = [
    { id: "flip_h", label: "Flip horizontal (all frames)" },
    { id: "grayscale", label: "Grayscale" },
    { id: "brightness", label: "Brightness shift" },
    { id: "noise", label: "Frame noise" },
    { id: "reverse", label: "Reverse frame order" },
    { id: "frame_drop", label: "Drop every other frame" },
    { id: "random_pipeline", label: "Random pipeline (2 ops)" },
  ];

  function mapPixels(canvas, fn) {
    const out = cloneFrame(canvas);
    const ctx = out.getContext("2d");
    const img = ctx.getImageData(0, 0, out.width, out.height);
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) fn(d, i);
    ctx.putImageData(img, 0, 0);
    return out;
  }

  function flipH(canvas) {
    const out = makeCanvas(canvas.width, canvas.height);
    const ctx = out.getContext("2d");
    ctx.translate(out.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(canvas, 0, 0);
    return out;
  }

  function applyVideoOne(method, frames, intensity, rng) {
    if (method === "reverse") return frames.slice().reverse().map(cloneFrame);
    if (method === "frame_drop") {
      const out = [];
      for (let i = 0; i < frames.length; i += 2) out.push(cloneFrame(frames[i]));
      return out.length ? out : [cloneFrame(frames[0])];
    }
    return frames.map(function (f) {
      if (method === "flip_h") return flipH(f);
      if (method === "grayscale") {
        return mapPixels(f, function (d, i) {
          const g = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
          d[i] = d[i + 1] = d[i + 2] = g;
        });
      }
      if (method === "brightness") {
        const b = (rng() * 2 - 1) * intensity * 50;
        return mapPixels(f, function (d, i) {
          for (let k = 0; k < 3; k++) {
            let v = d[i + k] + b;
            d[i + k] = v < 0 ? 0 : v > 255 ? 255 : v;
          }
        });
      }
      if (method === "noise") {
        const amp = intensity * 40;
        return mapPixels(f, function (d, i) {
          const n = (rng() * 2 - 1) * amp;
          for (let k = 0; k < 3; k++) {
            let v = d[i + k] + n;
            d[i + k] = v < 0 ? 0 : v > 255 ? 255 : v;
          }
        });
      }
      return cloneFrame(f);
    });
  }

  MediaAugLib.augmentVideo = function (frames, opts) {
    const method = opts.method || "flip_h";
    const count = Math.max(1, Math.min(6, Number(opts.count) || 3));
    const seedNum = (Number(opts.seed) || 42) >>> 0;
    const intensity = Math.max(0, Math.min(1, Number(opts.intensity) || 0.45));
    const rng = mulberry32(seedNum);
    const pool = ["flip_h", "grayscale", "brightness", "noise", "reverse", "frame_drop"];
    const items = [];

    for (let i = 0; i < count; i++) {
      let fs = frames.map(cloneFrame);
      const ops = [];
      if (method === "random_pipeline") {
        const nOps = 2;
        for (let k = 0; k < nOps; k++) {
          const op = pool[Math.floor(rng() * pool.length)];
          fs = applyVideoOne(op, fs, intensity, rng);
          ops.push(op);
        }
      } else {
        fs = applyVideoOne(method, fs, intensity, rng);
        ops.push(method);
      }
      items.push({
        id: "V" + String(i + 1).padStart(3, "0"),
        frames: fs,
        ops: ops,
        thumbs: fs.map(function (f) {
          return f.toDataURL("image/png");
        }),
      });
    }

    return {
      modality: "video",
      method: method,
      seed: seedNum,
      count: count,
      intensity: intensity,
      items: items,
      caveats: [
        "Video here is a short frame strip—not a production codec pipeline.",
        "Temporal consistency of labels (tracks) is not handled—teaching demo only.",
        "Keep held-out evaluation clips unaugmented.",
      ],
    };
  };
})(typeof window !== "undefined" ? window : globalThis);
