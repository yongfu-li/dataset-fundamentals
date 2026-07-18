/* Export WAV / frame ZIP / recipe (window.MediaAugLib). */
(function (global) {
  "use strict";
  const MediaAugLib = global.MediaAugLib || (global.MediaAugLib = {});

  function downloadBlob(filename, blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 400);
  }

  function downloadText(filename, text, mime) {
    downloadBlob(filename, new Blob([text], { type: mime || "text/plain;charset=utf-8" }));
  }

  function dataUrlToBytes(dataUrl) {
    const comma = dataUrl.indexOf(",");
    const bin = atob(dataUrl.slice(comma + 1));
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  function crc32(bytes) {
    let c = ~0;
    for (let i = 0; i < bytes.length; i++) {
      c ^= bytes[i];
      for (let k = 0; k < 8; k++) c = c & 1 ? (c >>> 1) ^ 0xedb88320 : c >>> 1;
    }
    return ~c >>> 0;
  }

  function u16(n) {
    return [n & 255, (n >>> 8) & 255];
  }
  function u32(n) {
    return [n & 255, (n >>> 8) & 255, (n >>> 16) & 255, (n >>> 24) & 255];
  }

  function buildStoreZip(files) {
    const parts = [];
    const central = [];
    let offset = 0;
    files.forEach(function (f) {
      const nameBytes = new TextEncoder().encode(f.name);
      const data = f.bytes;
      const crc = crc32(data);
      const local = [].concat(
        [0x50, 0x4b, 0x03, 0x04],
        u16(20),
        u16(0),
        u16(0),
        u16(0),
        u16(0),
        u32(crc),
        u32(data.length),
        u32(data.length),
        u16(nameBytes.length),
        u16(0)
      );
      parts.push(new Uint8Array(local), nameBytes, data);
      const cen = [].concat(
        [0x50, 0x4b, 0x01, 0x02],
        u16(20),
        u16(20),
        u16(0),
        u16(0),
        u16(0),
        u16(0),
        u32(crc),
        u32(data.length),
        u32(data.length),
        u16(nameBytes.length),
        u16(0),
        u16(0),
        u16(0),
        u16(0),
        u32(0),
        u32(offset)
      );
      central.push(new Uint8Array(cen), nameBytes);
      offset += local.length + nameBytes.length + data.length;
    });
    const centralSize = central.reduce(function (s, p) {
      return s + p.length;
    }, 0);
    const end = [].concat(
      [0x50, 0x4b, 0x05, 0x06],
      u16(0),
      u16(0),
      u16(files.length),
      u16(files.length),
      u32(centralSize),
      u32(offset),
      u16(0)
    );
    const all = parts.concat(central).concat([new Uint8Array(end)]);
    let total = 0;
    all.forEach(function (p) {
      total += p.length;
    });
    const out = new Uint8Array(total);
    let o = 0;
    all.forEach(function (p) {
      out.set(p, o);
      o += p.length;
    });
    return out;
  }

  MediaAugLib.buildRecipe = function (meta, result) {
    return {
      format: "media-augmentation-recipe",
      version: 1,
      exportedAt: new Date().toISOString(),
      tool: "Media augmentation lab",
      modality: result.modality,
      source: meta.source || meta.id || "session",
      bookAnchors: ["§10.1", "§10.7"],
      method: result.method,
      seed: result.seed,
      count: result.count,
      intensity: result.intensity,
      items: result.items.map(function (it) {
        return { id: it.id, ops: it.ops, nFrames: it.frames ? it.frames.length : undefined };
      }),
      caveats: result.caveats,
    };
  };

  MediaAugLib.recipeToMarkdown = function (recipe) {
    const lines = [
      "# Media augmentation recipe",
      "",
      "- Modality: `" + recipe.modality + "`",
      "- Source: `" + recipe.source + "`",
      "- Method: `" + recipe.method + "`",
      "- Seed: " + recipe.seed,
      "",
      "## Variants",
      "",
    ];
    (recipe.items || []).forEach(function (it) {
      lines.push("- `" + it.id + "`: " + (it.ops || []).join(" → "));
    });
    lines.push("", "## Caveats", "");
    (recipe.caveats || []).forEach(function (c) {
      lines.push("- " + c);
    });
    return lines.join("\n");
  };

  MediaAugLib.downloadRecipe = function (meta, result) {
    const recipe = MediaAugLib.buildRecipe(meta, result);
    downloadText("augmentation-recipe.json", JSON.stringify(recipe, null, 2), "application/json");
  };

  MediaAugLib.downloadRecipeMd = function (meta, result) {
    downloadText(
      "augmentation-recipe.md",
      MediaAugLib.recipeToMarkdown(MediaAugLib.buildRecipe(meta, result)),
      "text/markdown"
    );
  };

  MediaAugLib.downloadAudioZip = function (meta, result) {
    const files = [];
    const recipe = MediaAugLib.buildRecipe(meta, result);
    files.push({
      name: "augmentation-recipe.json",
      bytes: new TextEncoder().encode(JSON.stringify(recipe, null, 2)),
    });
    result.items.forEach(function (it) {
      files.push({
        name: "audio/" + it.id + ".wav",
        bytes: MediaAugLib.encodeWav(it.samples, result.sampleRate),
      });
    });
    downloadBlob("augmented-audio.zip", new Blob([buildStoreZip(files)], { type: "application/zip" }));
  };

  MediaAugLib.downloadVideoZip = function (meta, result) {
    const files = [];
    const recipe = MediaAugLib.buildRecipe(meta, result);
    files.push({
      name: "augmentation-recipe.json",
      bytes: new TextEncoder().encode(JSON.stringify(recipe, null, 2)),
    });
    files.push({
      name: "README.txt",
      bytes: new TextEncoder().encode(
        "Frame-strip export (not a full video file).\nEach variant has PNG frames in order.\n"
      ),
    });
    result.items.forEach(function (it) {
      (it.thumbs || []).forEach(function (url, fi) {
        files.push({
          name: "video/" + it.id + "/frame-" + String(fi + 1).padStart(3, "0") + ".png",
          bytes: dataUrlToBytes(url),
        });
      });
    });
    downloadBlob("augmented-video-frames.zip", new Blob([buildStoreZip(files)], { type: "application/zip" }));
  };

  MediaAugLib.playSamples = function (samples, sampleRate) {
    sampleRate = sampleRate || MediaAugLib.AUDIO_SR || 22050;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) throw new Error("Web Audio API not available.");
    const ctx = new AC();
    const buf = ctx.createBuffer(1, samples.length, sampleRate);
    const ch = buf.getChannelData(0);
    ch.set(samples instanceof Float32Array ? samples : new Float32Array(samples));
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.start();
    src.onended = function () {
      try {
        ctx.close();
      } catch (e) {
        /* ignore */
      }
    };
  };
})(typeof window !== "undefined" ? window : globalThis);
