/* Classic script — attaches to window.SamplingLib (file:// safe). */
(function (global) {
"use strict";
const SamplingLib = global.SamplingLib || (global.SamplingLib = {});

/** @typedef {Record<string, string|null>} ColumnMapping */

const ROLES = [
  { key: "id", label: "ID", required: true },
  { key: "strata", label: "Strata", required: false },
  { key: "cluster", label: "Cluster", required: false },
  { key: "order", label: "Order", required: false },
  { key: "referrer", label: "Referrer", required: false },
  { key: "x", label: "X coordinate", required: false },
  { key: "y", label: "Y coordinate", required: false },
  { key: "weight", label: "Weight", required: false },
];

/**
 * @param {Record<string, unknown>[]} rows
 * @param {ColumnMapping} mapping
 * @returns {{ ok: boolean, errors: string[], warnings: string[] }}
 */
function validateMapping(rows, mapping) {
  const errors = [];
  const warnings = [];

  if (!mapping.id) {
    errors.push("ID column is required.");
    return { ok: false, errors, warnings };
  }

  const ids = rows.map((r) => String(r[mapping.id] ?? "").trim());
  const empty = ids.filter((id) => !id).length;
  if (empty) errors.push(`${empty} row(s) have empty IDs.`);

  const seen = new Set();
  const dupes = new Set();
  ids.forEach((id) => {
    if (!id) return;
    if (seen.has(id)) dupes.add(id);
    seen.add(id);
  });
  if (dupes.size) {
    errors.push(`Duplicate IDs found (${dupes.size} duplicated values).`);
  }

  if (mapping.strata) {
    const strata = new Set(rows.map((r) => String(r[mapping.strata] ?? "")));
    if (strata.size < 2) {
      warnings.push("Strata column has fewer than 2 distinct values.");
    }
  }

  if (mapping.cluster) {
    const clusters = new Set(rows.map((r) => String(r[mapping.cluster] ?? "")));
    if (clusters.size < 2) {
      warnings.push("Cluster column has fewer than 2 distinct values.");
    }
  }

  if (mapping.referrer) {
    const idSet = new Set(ids.filter(Boolean));
    let badRefs = 0;
    rows.forEach((r) => {
      const ref = String(r[mapping.referrer] ?? "").trim();
      if (ref && !idSet.has(ref)) badRefs += 1;
    });
    if (badRefs) {
      warnings.push(
        `${badRefs} referrer value(s) do not match any ID in the dataset.`,
      );
    }
  }

  return { ok: errors.length === 0, errors, warnings };
}

/**
 * @param {string} method
 * @param {ColumnMapping} mapping
 * @returns {{ ok: boolean, errors: string[] }}
 */
function validateMethodColumns(method, mapping) {
  const errors = [];
  if (!mapping.id) errors.push("Map an ID column before sampling.");

  switch (method) {
    case "stratified":
      if (!mapping.strata) errors.push("Stratified sampling requires a Strata column.");
      break;
    case "cluster":
      if (!mapping.cluster) errors.push("Cluster sampling requires a Cluster column.");
      break;
    case "systematic":
    case "convenience":
      if (!mapping.order) errors.push(`${method} sampling requires an Order column.`);
      break;
    case "snowball":
      if (!mapping.referrer) {
        errors.push(
          "Snowball sampling requires a Referrer column linking rows to prior IDs.",
        );
      }
      break;
    default:
      break;
  }
  return { ok: errors.length === 0, errors };
}

/**
 * True when most non-empty values in a column parse as finite numbers.
 * @param {Record<string, unknown>[]} rows
 * @param {string} column
 * @returns {boolean}
 */
function isMostlyNumeric(rows, column) {
  if (!rows.length) return false;
  const n = Math.min(rows.length, 40);
  let ok = 0;
  let seen = 0;
  for (let i = 0; i < n; i += 1) {
    const v = rows[i][column];
    if (v === null || v === undefined || v === "") continue;
    seen += 1;
    const num = typeof v === "number" ? v : Number(String(v).trim());
    if (Number.isFinite(num)) ok += 1;
  }
  return seen > 0 && ok / seen >= 0.8;
}

/**
 * Prefer named coordinate columns; otherwise the first two numeric columns.
 * @param {string[]} columns
 * @param {Record<string, unknown>[]} rows
 * @param {string|null} idCol
 * @returns {[string|null, string|null]}
 */
function suggestXY(columns, rows, idCol) {
  const lower = Object.fromEntries(columns.map((c) => [c.toLowerCase(), c]));
  const namedX = lower.x ?? lower.lon ?? lower.longitude ?? null;
  const namedY = lower.y ?? lower.lat ?? lower.latitude ?? null;
  if (namedX && namedY) return [namedX, namedY];

  const numeric = columns.filter(
    (c) => c !== idCol && c !== namedX && c !== namedY && isMostlyNumeric(rows, c),
  );
  const x = namedX ?? numeric[0] ?? null;
  const y = namedY ?? numeric.find((c) => c !== x) ?? null;
  return [x, y];
}

/**
 * @param {string[]} columns
 * @param {ColumnMapping} [defaults]
 * @param {Record<string, unknown>[]} [rows]
 * @returns {ColumnMapping}
 */
function suggestMapping(columns, defaults = {}, rows = []) {
  const mapping = /** @type {ColumnMapping} */ ({
    id: null,
    strata: null,
    cluster: null,
    order: null,
    referrer: null,
    x: null,
    y: null,
    weight: null,
  });

  const lower = Object.fromEntries(columns.map((c) => [c.toLowerCase(), c]));

  const guess = (patterns) => {
    for (const p of patterns) {
      const hit = columns.find((c) => {
        const lc = c.toLowerCase();
        if (p.length <= 2) {
          return lc === p || lc.endsWith("_" + p) || lc.startsWith(p + "_");
        }
        return lc.includes(p);
      });
      if (hit) return hit;
    }
    return null;
  };

  mapping.id = defaults.id ?? lower.id ?? lower.employee_id ?? guess(["id", "uuid", "key"]) ?? columns[0] ?? null;
  mapping.strata =
    defaults.strata ?? lower.strata ?? lower.department ?? lower.device_type ?? guess(["strata", "stratum", "group", "segment"]);
  mapping.cluster = defaults.cluster ?? lower.cluster ?? lower.clinic_id ?? guess(["cluster", "site", "clinic"]);
  mapping.order = defaults.order ?? lower.order ?? lower.arrival_time ?? lower.rank ?? guess(["order", "time", "date", "index"]);
  mapping.referrer = defaults.referrer ?? lower.referrer ?? lower.referrer_id ?? guess(["referrer", "referred_by"]);
  mapping.weight = defaults.weight ?? lower.weight ?? guess(["weight", "wt"]);

  const [autoX, autoY] = suggestXY(columns, rows, mapping.id);
  mapping.x = defaults.x ?? autoX;
  mapping.y = defaults.y ?? autoY;

  return mapping;
}

/**
 * @param {Record<string, unknown>[]} rows
 * @param {ColumnMapping} mapping
 * @returns {string}
 */
function mappingSummary(rows, mapping) {
  const parts = [];
  ROLES.forEach(({ key, label }) => {
    const col = mapping[key];
    if (col) {
      const distinct = new Set(rows.map((r) => String(r[col] ?? ""))).size;
      parts.push(`${label}: ${col} (${distinct} distinct)`);
    }
  });
  return parts.join(" · ") || "No columns mapped yet.";
}

  SamplingLib.ROLES = ROLES;
  SamplingLib.validateMapping = validateMapping;
  SamplingLib.validateMethodColumns = validateMethodColumns;
  SamplingLib.isMostlyNumeric = isMostlyNumeric;
  SamplingLib.suggestXY = suggestXY;
  SamplingLib.suggestMapping = suggestMapping;
  SamplingLib.mappingSummary = mappingSummary;
})(typeof window !== "undefined" ? window : globalThis);
