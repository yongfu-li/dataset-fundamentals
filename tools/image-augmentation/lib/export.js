/* Export helpers + STORE ZIP (window.ImgAugLib). */
(function (global) {
  "use strict";
  const ImgAugLib = global.ImgAugLib || (global.ImgAugLib = {});

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
    }, 500);
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
      parts.push(new Uint8Array(local));
      parts.push(nameBytes);
      parts.push(data);
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
      central.push(new Uint8Array(cen));
      central.push(nameBytes);
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

  ImgAugLib.buildRecipe = function (meta, result) {
    return {
      format: "image-augmentation-recipe",
      version: 1,
      exportedAt: new Date().toISOString(),
      tool: "Image augmentation lab",
      source: meta.source || "session",
      bookAnchors: meta.bookAnchors || ["§10.6", "eg:10.16"],
      method: result.method,
      seed: result.seed,
      count: result.count,
      intensity: result.intensity,
      items: result.items.map(function (it) {
        return { id: it.id, ops: it.ops };
      }),
      caveats: result.caveats,
    };
  };

  ImgAugLib.recipeToMarkdown = function (recipe) {
    const lines = [
      "# Image augmentation recipe",
      "",
      "- Source: `" + recipe.source + "`",
      "- Method: `" + recipe.method + "`",
      "- Seed: " + recipe.seed,
      "- Count: " + recipe.count,
      recipe.intensity != null ? "- Intensity: " + recipe.intensity : null,
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
    return lines.filter(function (x) {
      return x != null;
    }).join("\n");
  };

  ImgAugLib.downloadRecipeJson = function (recipe) {
    downloadText("augmentation-recipe.json", JSON.stringify(recipe, null, 2), "application/json");
  };

  ImgAugLib.downloadRecipeMd = function (recipe) {
    downloadText("augmentation-recipe.md", ImgAugLib.recipeToMarkdown(recipe), "text/markdown");
  };

  ImgAugLib.downloadPng = function (item) {
    downloadBlob(item.id + ".png", new Blob([dataUrlToBytes(item.dataUrl)], { type: "image/png" }));
  };

  ImgAugLib.downloadZip = function (result, meta) {
    const files = [];
    const recipe = ImgAugLib.buildRecipe(meta, result);
    files.push({
      name: "augmentation-recipe.json",
      bytes: new TextEncoder().encode(JSON.stringify(recipe, null, 2)),
    });
    files.push({
      name: "README.txt",
      bytes: new TextEncoder().encode(
        "Image augmentation export\nMethod: " +
          result.method +
          "\nSeed: " +
          result.seed +
          "\nKeep test images unaugmented.\n"
      ),
    });
    result.items.forEach(function (it) {
      files.push({ name: "images/" + it.id + ".png", bytes: dataUrlToBytes(it.dataUrl) });
    });
    const zipBytes = buildStoreZip(files);
    downloadBlob("augmented-images.zip", new Blob([zipBytes], { type: "application/zip" }));
  };

  ImgAugLib.downloadBlob = downloadBlob;
})(typeof window !== "undefined" ? window : globalThis);
