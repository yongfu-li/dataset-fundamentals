/* Export augmented texts + recipe (window.SynthTextLib). */
(function (global) {
  "use strict";
  const SynthTextLib = global.SynthTextLib || (global.SynthTextLib = {});

  function download(filename, text, mime) {
    const blob = new Blob([text], { type: mime || "text/plain;charset=utf-8" });
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

  function csvEscape(s) {
    const t = String(s == null ? "" : s);
    if (/[",\n\r]/.test(t)) return '"' + t.replace(/"/g, '""') + '"';
    return t;
  }

  SynthTextLib.buildRecipe = function (session, result) {
    return {
      format: "text-augmentation-recipe",
      version: 1,
      exportedAt: new Date().toISOString(),
      tool: "Text augmentation lab",
      source: session.source || session.name || "session",
      bookAnchors: session.bookAnchors || ["§10.5"],
      method: result.method,
      seed: result.seed,
      count: result.count,
      noiseIntensity: result.noiseIntensity,
      stats: result.stats,
      caveats: result.caveats,
      templates: session.templates || [],
      slotKeys: Object.keys(session.slots || {}),
      nSeedTexts: (session.seedTexts || []).length,
    };
  };

  SynthTextLib.recipeToMarkdown = function (recipe) {
    const lines = [
      "# Text augmentation recipe",
      "",
      "- Source: `" + recipe.source + "`",
      "- Method: `" + recipe.method + "`",
      "- Seed: " + recipe.seed,
      "- Count: " + recipe.count,
      recipe.noiseIntensity != null ? "- Noise intensity: " + recipe.noiseIntensity : null,
      "- Unique rate: " + (Math.round(recipe.stats.uniqueRate * 1000) / 10).toFixed(1) + "%",
      "- Exact duplicates: " + recipe.stats.duplicateExact,
      "",
      "## Caveats",
      "",
    ];
    (recipe.caveats || []).forEach(function (c) {
      lines.push("- " + c);
    });
    lines.push("", "Book anchors: " + (recipe.bookAnchors || []).join(", "), "");
    return lines.filter(function (x) {
      return x != null;
    }).join("\n");
  };

  SynthTextLib.downloadTextsJson = function (session, result) {
    const payload = {
      format: "augmented-texts",
      version: 1,
      exportedAt: new Date().toISOString(),
      source: session.source,
      method: result.method,
      seed: result.seed,
      items: result.items.map(function (it) {
        return { id: it.id, text: it.text, method: it.method };
      }),
    };
    download("augmented-texts.json", JSON.stringify(payload, null, 2), "application/json");
  };

  SynthTextLib.downloadTextsCsv = function (result) {
    const lines = ["id,text,method"];
    result.items.forEach(function (it) {
      lines.push([csvEscape(it.id), csvEscape(it.text), csvEscape(it.method)].join(","));
    });
    download("augmented-texts.csv", lines.join("\n") + "\n", "text/csv");
  };

  SynthTextLib.downloadRecipeJson = function (recipe) {
    download("generation-recipe.json", JSON.stringify(recipe, null, 2), "application/json");
  };

  SynthTextLib.downloadRecipeMd = function (recipe) {
    download("generation-recipe.md", SynthTextLib.recipeToMarkdown(recipe), "text/markdown");
  };

  SynthTextLib.download = download;
})(typeof window !== "undefined" ? window : globalThis);
