/* Shared tool handoff via sessionStorage (file:// and GitHub Pages safe). */
(function (global) {
  "use strict";
  const KEY = "dsetools:handoff:v1";
  const Handoff = (global.DatasetToolsHandoff = global.DatasetToolsHandoff || {});

  Handoff.KEY = KEY;

  Handoff.write = function (payload) {
    if (!payload || typeof payload !== "object") {
      throw new Error("Handoff payload required.");
    }
    const body = Object.assign(
      {
        format: "tool-handoff",
        version: 1,
        exportedAt: new Date().toISOString(),
      },
      payload
    );
    try {
      sessionStorage.setItem(KEY, JSON.stringify(body));
    } catch (err) {
      throw new Error("Could not store handoff (storage full or blocked).");
    }
  };

  Handoff.read = function (expectedSource) {
    let raw;
    try {
      raw = sessionStorage.getItem(KEY);
    } catch (err) {
      return null;
    }
    if (!raw) return null;
    try {
      const data = JSON.parse(raw);
      if (!data || data.format !== "tool-handoff") return null;
      if (expectedSource && data.source !== expectedSource) return null;
      return data;
    } catch (err) {
      return null;
    }
  };

  Handoff.clear = function () {
    try {
      sessionStorage.removeItem(KEY);
    } catch (err) {
      /* ignore */
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
