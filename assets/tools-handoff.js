/* Shared tool handoff via sessionStorage (file:// and GitHub Pages safe).
 *
 * Payload shape (v1):
 *   { format, version, exportedAt, source, kind?, table?, metadata?, hints? }
 * kind: "table" | "metadata" | "annotations" (optional; inferred from fields)
 *
 * Prepare chain:  eda-dashboard → cleaning → scaling-encoding → train-test-split
 * Privacy chain:  pii-scrubber → deid-risk → cleaning
 * Document chain: datasheet → metadata-checker
 * Fairness chain: representation → fairness
 */
(function (global) {
  "use strict";
  const KEY = "dsetools:handoff:v1";
  const Handoff = (global.DatasetToolsHandoff = global.DatasetToolsHandoff || {});

  Handoff.KEY = KEY;
  Handoff.VERSION = 1;

  /** Documented source ids and suggested next hops (for pipeline builder later). */
  Handoff.CHAINS = {
    prepare: {
      "eda-dashboard": { next: "cleaning", from: "eda" },
      cleaning: { next: "scaling-encoding", from: "cleaning" },
      "scaling-encoding": { next: "train-test-split", from: "scaling" },
    },
    privacy: {
      "pii-scrubber": [
        { next: "deid-risk", from: "pii" },
        { next: "cleaning", from: "pii" },
      ],
      "deid-risk": { next: "cleaning", from: "deid" },
    },
    document: {
      datasheet: { next: "metadata-checker", from: "datasheet" },
    },
    fairness: {
      representation: { next: "fairness", from: "representation" },
    },
  };

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
    if (!body.kind) {
      if (body.metadata) body.kind = "metadata";
      else if (body.annotations) body.kind = "annotations";
      else if (body.table) body.kind = "table";
    }
    try {
      sessionStorage.setItem(KEY, JSON.stringify(body));
    } catch (err) {
      throw new Error("Could not store handoff (storage full or blocked).");
    }
    return body;
  };

  /** Convenience: write a tabular payload. */
  Handoff.writeTable = function (source, table, hints) {
    if (!table || !table.rows || !table.columns) {
      throw new Error("Handoff table requires rows and columns.");
    }
    return Handoff.write({
      source: source,
      kind: "table",
      table: {
        name: table.name || source,
        columns: table.columns.slice(),
        rows: table.rows,
      },
      hints: hints || {},
    });
  };

  /** Convenience: write a datasheet-metadata.json-shaped payload. */
  Handoff.writeMetadata = function (source, metadata, hints) {
    if (!metadata || typeof metadata !== "object") {
      throw new Error("Handoff metadata required.");
    }
    return Handoff.write({
      source: source,
      kind: "metadata",
      metadata: metadata,
      hints: hints || {},
    });
  };

  /** Read payload; if expectedSource is set, require matching source id. */
  Handoff.read = function (expectedSource) {
    return Handoff.readAny(expectedSource == null ? null : [expectedSource]);
  };

  /**
   * Read payload if source is in the allowed list (or any source if list is empty/null).
   * @param {string|string[]|null} sources
   */
  Handoff.readAny = function (sources) {
    let list = null;
    if (sources != null) {
      list = Array.isArray(sources) ? sources : [sources];
    }
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
      if (list && list.length && list.indexOf(data.source) === -1) return null;
      return data;
    } catch (err) {
      return null;
    }
  };

  /** Read then clear (one-shot consume). */
  Handoff.consume = function (sources) {
    const data = Handoff.readAny(sources);
    if (data) Handoff.clear();
    return data;
  };

  Handoff.clear = function () {
    try {
      sessionStorage.removeItem(KEY);
    } catch (err) {
      /* ignore */
    }
  };

  /** Current ?from= query param, or null. */
  Handoff.queryFrom = function () {
    try {
      return new URLSearchParams(window.location.search).get("from");
    } catch (err) {
      return null;
    }
  };

  /** Drop query string after a successful handoff load. */
  Handoff.stripQuery = function () {
    try {
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, "", window.location.pathname);
      }
    } catch (err) {
      /* ignore */
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
