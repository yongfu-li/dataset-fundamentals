/* Video frame generation + augmentation (window.MediaAugLib). */
(function (global) {
  "use strict";
  const MediaAugLib = global.MediaAugLib || (global.MediaAugLib = {});

  const VW = 320;
  const VH = 200;

  function mulberry32(a) {
    return MediaAugLib.mulberry32
      ? MediaAugLib.mulberry32(a)
      : function () {
          return Math.random();
        };
  }

  function makeCanvas(w, h) {
    const c = document.createElement("canvas");
    c.width = w || VW;
    c.height = h || VH;
    return c;
  }

  function cloneFrame(src) {
    const c = makeCanvas(src.width, src.height);
    c.getContext("2d").drawImage(src, 0, 0);
    return c;
  }

  function roundRect(ctx, x, y, w, h, r) {
    r = Math.min(r || 4, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  /** Street scene: car drives left→right past a crosswalk. */
  function presetStreetTraffic(nFrames) {
    nFrames = nFrames || 14;
    const frames = [];
    for (let i = 0; i < nFrames; i++) {
      const t = i / (nFrames - 1 || 1);
      const c = makeCanvas();
      const ctx = c.getContext("2d");
      // sky
      const sky = ctx.createLinearGradient(0, 0, 0, VH * 0.55);
      sky.addColorStop(0, "#7eb6d9");
      sky.addColorStop(1, "#c5dde8");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, VW, VH * 0.55);
      // buildings
      ctx.fillStyle = "#5a6a78";
      ctx.fillRect(10, 40, 70, 80);
      ctx.fillStyle = "#4a5864";
      ctx.fillRect(90, 25, 55, 95);
      ctx.fillStyle = "#6b7c8a";
      ctx.fillRect(230, 35, 80, 85);
      ctx.fillStyle = "#d4e8f5";
      for (let wx = 18; wx < 70; wx += 16)
        for (let wy = 50; wy < 110; wy += 18) ctx.fillRect(wx, wy, 8, 10);
      // road
      ctx.fillStyle = "#3d4450";
      ctx.fillRect(0, VH * 0.55, VW, VH * 0.45);
      ctx.fillStyle = "#f0e6a8";
      for (let lx = 10; lx < VW; lx += 40) ctx.fillRect(lx, VH * 0.72, 22, 5);
      // crosswalk
      ctx.fillStyle = "#f5f5f5";
      for (let k = 0; k < 6; k++) ctx.fillRect(130, VH * 0.58 + k * 10, 55, 5);
      // pedestrian
      const px = 145 + Math.sin(t * Math.PI) * 8;
      const py = VH * 0.58 + (1 - t) * 18;
      ctx.fillStyle = "#2c3e50";
      ctx.fillRect(px, py, 10, 22);
      ctx.beginPath();
      ctx.arc(px + 5, py - 4, 5, 0, Math.PI * 2);
      ctx.fill();
      // car
      const cx = -60 + t * (VW + 100);
      ctx.fillStyle = "#c0392b";
      roundRect(ctx, cx, VH * 0.62, 70, 28, 6);
      ctx.fill();
      ctx.fillStyle = "#85c1e9";
      ctx.fillRect(cx + 38, VH * 0.64, 22, 12);
      ctx.fillStyle = "#1c2421";
      ctx.beginPath();
      ctx.arc(cx + 16, VH * 0.62 + 28, 7, 0, Math.PI * 2);
      ctx.arc(cx + 54, VH * 0.62 + 28, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(28,36,33,0.75)";
      ctx.font = "11px sans-serif";
      ctx.fillText("street · frame " + (i + 1), 8, 14);
      frames.push(c);
    }
    return {
      id: "street-traffic",
      title: "Street traffic",
      description: "Car + pedestrian — reverse / drop / flip change motion cues.",
      frames: frames,
    };
  }

  /** Warehouse: box moves on a conveyor under a camera view. */
  function presetWarehouseConveyor(nFrames) {
    nFrames = nFrames || 14;
    const frames = [];
    for (let i = 0; i < nFrames; i++) {
      const t = i / (nFrames - 1 || 1);
      const c = makeCanvas();
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#2f3540";
      ctx.fillRect(0, 0, VW, VH);
      // ceiling lights
      ctx.fillStyle = "#f7e7a0";
      for (let L = 40; L < VW; L += 80) {
        ctx.globalAlpha = 0.35;
        ctx.beginPath();
        ctx.ellipse(L, 20, 28, 10, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.fillRect(L - 8, 4, 16, 6);
      }
      // shelves
      ctx.fillStyle = "#6d4c41";
      ctx.fillRect(8, 50, 50, 120);
      ctx.fillRect(VW - 58, 50, 50, 120);
      ctx.fillStyle = "#a1887f";
      for (let s = 0; s < 4; s++) {
        ctx.fillRect(12, 60 + s * 28, 42, 8);
        ctx.fillRect(VW - 54, 60 + s * 28, 42, 8);
      }
      // conveyor
      ctx.fillStyle = "#546e7a";
      ctx.fillRect(70, 130, VW - 140, 40);
      ctx.fillStyle = "#90a4ae";
      for (let b = 0; b < 8; b++) {
        const ox = 75 + ((b * 28 + t * 40) % (VW - 160));
        ctx.fillRect(ox, 138, 18, 24);
      }
      // package
      const bx = 80 + t * (VW - 200);
      ctx.fillStyle = "#d4a373";
      ctx.fillRect(bx, 105, 48, 36);
      ctx.strokeStyle = "#8d6e63";
      ctx.strokeRect(bx, 105, 48, 36);
      ctx.fillStyle = "#fff8e7";
      ctx.fillRect(bx + 8, 112, 32, 12);
      ctx.fillStyle = "#5d4037";
      ctx.font = "9px sans-serif";
      ctx.fillText("SKU", bx + 14, 121);
      ctx.fillStyle = "#cfd8dc";
      ctx.font = "11px sans-serif";
      ctx.fillText("warehouse · frame " + (i + 1), 8, 16);
      frames.push(c);
    }
    return {
      id: "warehouse-conveyor",
      title: "Warehouse conveyor",
      description: "Package on belt — temporal drop/reverse are obvious.",
      frames: frames,
    };
  }

  /** Retail checkout: hand/scanner sweeps over a product. */
  function presetCheckoutScan(nFrames) {
    nFrames = nFrames || 12;
    const frames = [];
    for (let i = 0; i < nFrames; i++) {
      const t = i / (nFrames - 1 || 1);
      const c = makeCanvas();
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#e8eef2";
      ctx.fillRect(0, 0, VW, VH);
      // counter
      ctx.fillStyle = "#cfd8dc";
      ctx.fillRect(0, 120, VW, 80);
      ctx.fillStyle = "#90a4ae";
      ctx.fillRect(0, 118, VW, 6);
      // product
      ctx.fillStyle = "#1565c0";
      roundRect(ctx, 120, 95, 70, 50, 6);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "bold 12px sans-serif";
      ctx.fillText("ITEM", 135, 125);
      // barcode
      ctx.fillStyle = "#1c2421";
      for (let k = 0; k < 18; k++) ctx.fillRect(128 + k * 3, 132, k % 3 === 0 ? 2 : 1, 10);
      // scanner beam
      const sx = 40 + t * 220;
      ctx.fillStyle = "rgba(229,57,53,0.35)";
      ctx.fillRect(sx, 70, 14, 90);
      ctx.fillStyle = "#e53935";
      ctx.fillRect(sx + 4, 60, 6, 12);
      // POS screen
      ctx.fillStyle = "#263238";
      ctx.fillRect(240, 30, 70, 55);
      ctx.fillStyle = "#69f0ae";
      ctx.font = "10px monospace";
      ctx.fillText("$12.50", 250, 55);
      ctx.fillStyle = "#546e7a";
      ctx.font = "11px sans-serif";
      ctx.fillText("checkout · frame " + (i + 1), 8, 16);
      frames.push(c);
    }
    return {
      id: "checkout-scan",
      title: "Checkout scan",
      description: "Scanner sweep — brightness/noise hit barcode readability.",
      frames: frames,
    };
  }

  /** Parking lot: vehicle approaches a camera / gate. */
  function presetParkingApproach(nFrames) {
    nFrames = nFrames || 14;
    const frames = [];
    for (let i = 0; i < nFrames; i++) {
      const t = i / (nFrames - 1 || 1);
      const c = makeCanvas();
      const ctx = c.getContext("2d");
      // asphalt
      ctx.fillStyle = "#455a64";
      ctx.fillRect(0, 0, VW, VH);
      // parking lines
      ctx.strokeStyle = "#eceff1";
      ctx.lineWidth = 2;
      for (let p = 0; p < 4; p++) {
        ctx.strokeRect(20 + p * 75, 40, 55, 110);
      }
      // approaching car (grows / moves toward camera)
      const scale = 0.35 + t * 0.9;
      const cw = 70 * scale;
      const ch = 36 * scale;
      const cx = VW / 2 - cw / 2;
      const cy = 50 + t * 70;
      ctx.fillStyle = "#1565c0";
      roundRect(ctx, cx, cy, cw, ch, 5);
      ctx.fill();
      ctx.fillStyle = "#bbdefb";
      ctx.fillRect(cx + cw * 0.55, cy + 4, cw * 0.3, ch * 0.45);
      // plate
      ctx.fillStyle = "#fffde7";
      ctx.fillRect(cx + cw * 0.25, cy + ch * 0.55, cw * 0.5, ch * 0.28);
      ctx.fillStyle = "#1c2421";
      ctx.font = Math.max(8, Math.floor(9 * scale)) + "px monospace";
      ctx.fillText("ABC123", cx + cw * 0.3, cy + ch * 0.75);
      // gate arm
      ctx.strokeStyle = "#f44336";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(20, 30);
      ctx.lineTo(20 + (1 - t) * 100, 30 + t * 40);
      ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.font = "11px sans-serif";
      ctx.fillText("parking · frame " + (i + 1), 8, 16);
      frames.push(c);
    }
    return {
      id: "parking-approach",
      title: "Parking approach",
      description: "Car toward camera — flow & frame-diff show approach.",
      frames: frames,
    };
  }

  /** Clinic hallway: person walks past door signs (privacy-safe stick figures). */
  function presetClinicHallway(nFrames) {
    nFrames = nFrames || 12;
    const frames = [];
    for (let i = 0; i < nFrames; i++) {
      const t = i / (nFrames - 1 || 1);
      const c = makeCanvas();
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#eceff1";
      ctx.fillRect(0, 0, VW, VH);
      // floor
      ctx.fillStyle = "#b0bec5";
      ctx.fillRect(0, 140, VW, 60);
      ctx.fillStyle = "#90a4ae";
      ctx.fillRect(VW / 2 - 20, 140, 40, 60);
      // walls / doors
      ctx.fillStyle = "#78909c";
      ctx.fillRect(0, 30, 90, 110);
      ctx.fillRect(VW - 90, 30, 90, 110);
      ctx.fillStyle = "#fff";
      ctx.fillRect(20, 50, 50, 70);
      ctx.fillRect(VW - 70, 50, 50, 70);
      ctx.fillStyle = "#37474f";
      ctx.font = "9px sans-serif";
      ctx.fillText("Rm 12", 30, 70);
      ctx.fillText("Rm 14", VW - 60, 70);
      // walking figure
      const fx = 30 + t * (VW - 80);
      const fy = 115;
      ctx.strokeStyle = "#263238";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(fx, fy - 28, 8, 0, Math.PI * 2);
      ctx.moveTo(fx, fy - 20);
      ctx.lineTo(fx, fy);
      ctx.moveTo(fx, fy - 12);
      ctx.lineTo(fx - 10, fy - 2);
      ctx.moveTo(fx, fy - 12);
      ctx.lineTo(fx + 10, fy - 2);
      ctx.moveTo(fx, fy);
      ctx.lineTo(fx - 8 + Math.sin(t * 12) * 4, fy + 18);
      ctx.moveTo(fx, fy);
      ctx.lineTo(fx + 8 - Math.sin(t * 12) * 4, fy + 18);
      ctx.stroke();
      ctx.fillStyle = "#546e7a";
      ctx.font = "11px sans-serif";
      ctx.fillText("clinic · frame " + (i + 1) + " (synthetic)", 8, 16);
      frames.push(c);
    }
    return {
      id: "clinic-hallway",
      title: "Clinic hallway",
      description: "Walker past doors — grayscale / flip for privacy demos.",
      frames: frames,
    };
  }

  /** Keep a simple geometric control clip for clean diagnostics. */
  function presetBouncingBall(nFrames) {
    nFrames = nFrames || 12;
    const frames = [];
    for (let i = 0; i < nFrames; i++) {
      const t = i / (nFrames - 1 || 1);
      const c = makeCanvas();
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#e8eef2";
      ctx.fillRect(0, 0, VW, VH);
      ctx.fillStyle = "#c5cdd4";
      ctx.fillRect(0, VH - 28, VW, 28);
      const x = 40 + t * (VW - 100);
      const y = VH - 60 - Math.abs(Math.sin(t * Math.PI * 2)) * 90;
      ctx.fillStyle = "#0f6b5c";
      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#1c2421";
      ctx.font = "11px sans-serif";
      ctx.fillText("control · bouncing ball", 8, 16);
      frames.push(c);
    }
    return {
      id: "bouncing-ball",
      title: "Control · bouncing ball",
      description: "Clean motion for reading frame-diff / flow without clutter.",
      frames: frames,
    };
  }

  MediaAugLib.makeVideoPresets = function () {
    return [
      presetStreetTraffic(14),
      presetWarehouseConveyor(14),
      presetCheckoutScan(12),
      presetParkingApproach(14),
      presetClinicHallway(12),
      presetBouncingBall(12),
    ];
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
        "Video here is a short procedural frame strip remixed into playable clips—not a production codec / real camera feed.",
        "Each Count produces a separate clip (V001, V002, …), not one merged movie.",
        "WebM encode/download requires a Chromium-based browser (Chrome, Edge, Brave). Canvas Play clip and PNG frame export work more widely.",
        "Scenes are synthetic teaching illustrations (no real faces or license plates from the wild).",
        "Temporal consistency of labels (tracks) is not handled—teaching demo only.",
        "Frame-diff / flow / PSNR / SSIM views are teaching-grade diagnostics.",
        "Keep held-out evaluation clips unaugmented.",
      ],
    };
  };
})(typeof window !== "undefined" ? window : globalThis);
