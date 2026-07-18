/* Classic script — load presets and datasheet-metadata.json uploads. */
(function (global) {
  "use strict";
  const MetadataCheckerLib = global.MetadataCheckerLib || (global.MetadataCheckerLib = {});

  const MAX_BYTES = 512 * 1024;

  function stripBom(text) {
    return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
  }

  function normalizeCard(raw, source) {
    if (!raw || typeof raw !== "object") {
      throw new Error("Expected a JSON object with dataset metadata.");
    }
    const card = Object.assign({}, raw);
    card.dataset = card.dataset || {};
    card.documentation = card.documentation || {};
    card.sample_data = card.sample_data || null;
    card.source = source || card.source || "upload";
    return card;
  }

  function parseUpload(text, filename) {
    text = stripBom(text);
    if (text.length > MAX_BYTES) {
      throw new Error("File exceeds 512 KB limit.");
    }
    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      throw new Error("Invalid JSON.");
    }
    if (!data.dataset && !data.documentation) {
      throw new Error("JSON must look like datasheet-metadata.json (dataset + documentation fields).");
    }
    return {
      card: normalizeCard(data, filename || "upload.json"),
      source: filename || "upload.json",
      description: "Uploaded metadata card",
    };
  }

  function loadPreset(id) {
    const presets = global.MetadataCheckerPresets || {};
    const preset = presets[id];
    if (!preset) throw new Error("Unknown preset: " + id);
    return {
      card: normalizeCard(preset.card, preset.name || id),
      source: preset.name || id,
      description: preset.description || "",
    };
  }

  MetadataCheckerLib.MAX_BYTES = MAX_BYTES;
  MetadataCheckerLib.parseUpload = parseUpload;
  MetadataCheckerLib.loadPreset = loadPreset;
  MetadataCheckerLib.normalizeCard = normalizeCard;
})(typeof window !== "undefined" ? window : globalThis);
