/* Classic script — attaches to window.VersionTimelineLib (file:// safe).
 * Load version-chain presets. */
(function (global) {
  "use strict";
  const VersionTimelineLib = global.VersionTimelineLib || (global.VersionTimelineLib = {});

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function loadPreset(id) {
    const presets = global.VersionTimelinePresets || {};
    const p = presets[id];
    if (!p) throw new Error("Unknown preset '" + id + "'.");
    const versions = (p.versions || []).map(function (v) {
      return {
        id: v.id,
        date: v.date || "",
        message: v.message || "",
        columns: (v.columns || []).slice(),
        rows: (v.rows || []).map(function (r) {
          return Object.assign({}, r);
        }),
        renames: (v.renames || []).map(function (r) {
          return { from: r.from, to: r.to };
        }),
        schema_notes: v.schema_notes || "",
        callout: v.callout || "",
      };
    });
    if (versions.length < 2) {
      throw new Error("Preset must have at least two versions.");
    }
    return {
      name: p.name || id,
      description: p.description || "",
      teachingFocus: p.teachingFocus || "",
      versions: versions,
      source: id,
    };
  }

  function listPresets() {
    const presets = global.VersionTimelinePresets || {};
    return Object.keys(presets).map(function (id) {
      const p = presets[id];
      return {
        id: id,
        name: p.name || id,
        description: p.description || "",
      };
    });
  }

  VersionTimelineLib.loadPreset = loadPreset;
  VersionTimelineLib.listPresets = listPresets;
  VersionTimelineLib.clone = clone;
})(typeof window !== "undefined" ? window : globalThis);
