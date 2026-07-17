/* Classic script — attaches to window.SamplingLib (file:// safe). */
(function (global) {
"use strict";
const SamplingLib = global.SamplingLib || (global.SamplingLib = {});

/**
 * Pure sampling functions for the sampling tool.
 * @typedef {Record<string, unknown>} Row
 * @typedef {{ next: () => number, int: (max: number) => number, shuffle: <T>(arr: T[]) => T[] }} Rng
 * @typedef {{ selectedIds: string[], selectedRows: Row[], metadata: Record<string, unknown> }} SampleResult
 */

/**
 * @param {Row[]} population
 * @param {string} idKey
 * @returns {Map<string, Row>}
 */
function indexById(population, idKey) {
  const map = new Map();
  population.forEach((row) => {
    const id = String(row[idKey] ?? "");
    if (id) map.set(id, row);
  });
  return map;
}

/**
 * @param {Row[]} population
 * @param {string} idKey
 * @returns {string[]}
 */
function allIds(population, idKey) {
  return population.map((r) => String(r[idKey] ?? ""));
}

/**
 * @param {Row[]} population
 * @param {string[]} ids
 * @param {string} idKey
 * @returns {Row[]}
 */
function rowsForIds(population, ids, idKey) {
  const idSet = new Set(ids);
  return population.filter((r) => idSet.has(String(r[idKey] ?? "")));
}

/**
 * @param {string} method
 * @param {unknown} seed
 * @param {Record<string, unknown>} params
 * @param {string[]} warnings
 */
function baseMeta(method, seed, params, warnings = []) {
  return { method, seed, params, warnings: [...warnings] };
}

/**
 * Simple random sample without replacement.
 * @param {Row[]} population
 * @param {number} n
 * @param {string} idKey
 * @param {Rng} rng
 * @returns {SampleResult}
 */
function sampleSRS(population, n, idKey, rng) {
  const shuffled = rng.shuffle([...population]);
  const take = Math.min(n, shuffled.length);
  const selectedRows = shuffled.slice(0, take);
  const selectedIds = selectedRows.map((r) => String(r[idKey] ?? ""));
  return {
    selectedIds,
    selectedRows,
    metadata: baseMeta("srs", rng, { n, requested: n, actual: take }),
  };
}

/**
 * Stratified sampling with proportional or equal allocation.
 * @param {Row[]} population
 * @param {number} n
 * @param {string} idKey
 * @param {string} strataKey
 * @param {"proportional"|"equal"} allocation
 * @param {Rng} rng
 * @returns {SampleResult}
 */
function sampleStratified(
  population,
  n,
  idKey,
  strataKey,
  allocation,
  rng,
) {
  const groups = new Map();
  population.forEach((row) => {
    const s = String(row[strataKey] ?? "unknown");
    if (!groups.has(s)) groups.set(s, []);
    groups.get(s).push(row);
  });
  const strataNames = [...groups.keys()];
  const warnings = [];
  const selectedRows = [];

  if (allocation === "equal") {
    const perStratum = Math.max(1, Math.floor(n / strataNames.length));
    strataNames.forEach((name) => {
      const pool = groups.get(name) ?? [];
      const take = Math.min(perStratum, pool.length);
      selectedRows.push(...rng.shuffle(pool).slice(0, take));
    });
  } else {
    const total = population.length;
    let allocated = 0;
    strataNames.forEach((name, idx) => {
      const pool = groups.get(name) ?? [];
      let take =
        idx === strataNames.length - 1
          ? n - allocated
          : Math.round((pool.length / total) * n);
      take = Math.min(Math.max(0, take), pool.length);
      allocated += take;
      selectedRows.push(...rng.shuffle(pool).slice(0, take));
    });
    if (selectedRows.length > n) {
      selectedRows.length = n;
    }
  }

  const unique = dedupeById(selectedRows, idKey);
  if (unique.length < n) {
    warnings.push(
      `Requested ${n} units but strata sizes allow only ${unique.length}.`,
    );
  }
  const selectedIds = unique.map((r) => String(r[idKey] ?? ""));
  return {
    selectedIds,
    selectedRows: unique,
    metadata: baseMeta("stratified", rng, { n, allocation, strataKey }, warnings),
  };
}

/**
 * Cluster sampling: pick k clusters then optional within-cluster subsample.
 * @param {Row[]} population
 * @param {number} kClusters
 * @param {string} idKey
 * @param {string} clusterKey
 * @param {number} withinRate 0–1 fraction per cluster (1 = all in cluster)
 * @param {Rng} rng
 * @returns {SampleResult}
 */
function sampleCluster(
  population,
  kClusters,
  idKey,
  clusterKey,
  withinRate,
  rng,
) {
  const clusters = new Map();
  population.forEach((row) => {
    const c = String(row[clusterKey] ?? "unknown");
    if (!clusters.has(c)) clusters.set(c, []);
    clusters.get(c).push(row);
  });
  const names = [...clusters.keys()];
  const k = Math.min(kClusters, names.length);
  const pickedClusters = rng.shuffle(names).slice(0, k);
  const selectedRows = [];
  pickedClusters.forEach((name) => {
    const pool = clusters.get(name) ?? [];
    const take = Math.max(1, Math.round(pool.length * withinRate));
    selectedRows.push(...rng.shuffle(pool).slice(0, Math.min(take, pool.length)));
  });
  const selectedIds = selectedRows.map((r) => String(r[idKey] ?? ""));
  return {
    selectedIds,
    selectedRows,
    metadata: baseMeta("cluster", rng, {
      kClusters: k,
      clusterKey,
      withinRate,
      pickedClusters,
    }),
  };
}

/**
 * Systematic sampling on an ordered frame.
 * @param {Row[]} population
 * @param {number} n
 * @param {string} idKey
 * @param {string} orderKey
 * @param {Rng} rng
 * @returns {SampleResult}
 */
function sampleSystematic(population, n, idKey, orderKey, rng) {
  const warnings = [];
  const sorted = [...population].sort((a, b) =>
    compareOrder(a[orderKey], b[orderKey]),
  );
  const N = sorted.length;
  const k = Math.max(1, Math.floor(N / n));
  const start = rng.int(k);
  const selectedRows = [];
  for (let i = start; i < N && selectedRows.length < n; i += k) {
    selectedRows.push(sorted[i]);
  }
  if (hasPeriodicPattern(sorted, orderKey)) {
    warnings.push(
      "Order column shows a repeating pattern; systematic sampling may align with it and introduce bias.",
    );
  }
  const selectedIds = selectedRows.map((r) => String(r[idKey] ?? ""));
  return {
    selectedIds,
    selectedRows,
    metadata: baseMeta(
      "systematic",
      rng,
      { n, orderKey, interval: k, start, frameSize: N },
      warnings,
    ),
  };
}

/**
 * Convenience sample: first n units by order column.
 * @param {Row[]} population
 * @param {number} n
 * @param {string} idKey
 * @param {string} orderKey
 * @returns {SampleResult}
 */
function sampleConvenience(population, n, idKey, orderKey) {
  const warnings = [
    "Convenience sampling has weak external validity; findings may not generalize beyond who was easiest to reach.",
  ];
  const sorted = [...population].sort((a, b) =>
    compareOrder(a[orderKey], b[orderKey]),
  );
  const selectedRows = sorted.slice(0, Math.min(n, sorted.length));
  const selectedIds = selectedRows.map((r) => String(r[idKey] ?? ""));
  return {
    selectedIds,
    selectedRows,
    metadata: baseMeta(
      "convenience",
      null,
      { n, orderKey },
      warnings,
    ),
  };
}

/**
 * Snowball sampling via referrer chain.
 * @param {Row[]} population
 * @param {number} seedCount
 * @param {number} maxWaves
 * @param {number} referralsPerWave
 * @param {string} idKey
 * @param {string} referrerKey
 * @param {Rng} rng
 * @returns {SampleResult}
 */
function sampleSnowball(
  population,
  seedCount,
  maxWaves,
  referralsPerWave,
  idKey,
  referrerKey,
  rng,
) {
  const warnings = [
    "Snowball samples grow through social ties; estimates describe the referral network, not the full population.",
  ];
  const byId = indexById(population, idKey);
  const children = new Map();
  population.forEach((row) => {
    const ref = String(row[referrerKey] ?? "").trim();
    const id = String(row[idKey] ?? "");
    if (!ref || !byId.has(ref)) return;
    if (!children.has(ref)) children.set(ref, []);
    children.get(ref).push(id);
  });

  const seeds = rng
    .shuffle(allIds(population, idKey).filter((id) => byId.has(id)))
    .slice(0, seedCount);
  const selected = new Set(seeds);
  let frontier = [...seeds];

  for (let wave = 0; wave < maxWaves && frontier.length; wave += 1) {
    const next = [];
    frontier.forEach((id) => {
      const refs = rng.shuffle(children.get(id) ?? []).slice(0, referralsPerWave);
      refs.forEach((childId) => {
        if (!selected.has(childId)) {
          selected.add(childId);
          next.push(childId);
        }
      });
    });
    frontier = next;
  }

  const selectedIds = [...selected];
  const selectedRows = rowsForIds(population, selectedIds, idKey);
  return {
    selectedIds,
    selectedRows,
    metadata: baseMeta(
      "snowball",
      rng,
      { seedCount, maxWaves, referralsPerWave, referrerKey },
      warnings,
    ),
  };
}

/**
 * Dispatch sampling by method name.
 * @param {string} method
 * @param {Row[]} population
 * @param {Record<string, unknown>} options
 * @param {Rng} rng
 * @returns {SampleResult}
 */
function runSample(method, population, options, rng) {
  const idKey = /** @type {string} */ (options.idKey);
  const n = /** @type {number} */ (options.n ?? 50);

  switch (method) {
    case "srs":
      return sampleSRS(population, n, idKey, rng);
    case "stratified":
      return sampleStratified(
        population,
        n,
        idKey,
        /** @type {string} */ (options.strataKey),
        /** @type {"proportional"|"equal"} */ (options.allocation ?? "proportional"),
        rng,
      );
    case "cluster":
      return sampleCluster(
        population,
        /** @type {number} */ (options.kClusters ?? 5),
        idKey,
        /** @type {string} */ (options.clusterKey),
        /** @type {number} */ (options.withinRate ?? 1),
        rng,
      );
    case "systematic":
      return sampleSystematic(
        population,
        n,
        idKey,
        /** @type {string} */ (options.orderKey),
        rng,
      );
    case "convenience":
      return sampleConvenience(
        population,
        n,
        idKey,
        /** @type {string} */ (options.orderKey),
      );
    case "snowball":
      return sampleSnowball(
        population,
        /** @type {number} */ (options.seedCount ?? 5),
        /** @type {number} */ (options.maxWaves ?? 3),
        /** @type {number} */ (options.referralsPerWave ?? 2),
        idKey,
        /** @type {string} */ (options.referrerKey),
        rng,
      );
    default:
      throw new Error(`Unknown sampling method: ${method}`);
  }
}

/**
 * @param {Row[]} rows
 * @param {string} idKey
 * @returns {Row[]}
 */
function dedupeById(rows, idKey) {
  const seen = new Set();
  const out = [];
  rows.forEach((r) => {
    const id = String(r[idKey] ?? "");
    if (!seen.has(id)) {
      seen.add(id);
      out.push(r);
    }
  });
  return out;
}

/**
 * @param {unknown} a
 * @param {unknown} b
 * @returns {number}
 */
function compareOrder(a, b) {
  const na = Number(a);
  const nb = Number(b);
  if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
  return String(a ?? "").localeCompare(String(b ?? ""));
}

/**
 * @param {Row[]} sorted
 * @param {string} orderKey
 * @returns {boolean}
 */
function hasPeriodicPattern(sorted, orderKey) {
  if (sorted.length < 6) return false;
  const nums = sorted
    .map((r) => Number(r[orderKey]))
    .filter((v) => !Number.isNaN(v));
  if (nums.length < 6) return false;
  const diffs = [];
  for (let i = 1; i < nums.length; i += 1) {
    diffs.push(nums[i] - nums[i - 1]);
  }
  const first = diffs[0];
  if (first === 0) return false;
  let same = 0;
  diffs.forEach((d) => {
    if (Math.abs(d - first) < 1e-6) same += 1;
  });
  return same / diffs.length > 0.8;
}

  SamplingLib.sampleSRS = sampleSRS;
  SamplingLib.sampleStratified = sampleStratified;
  SamplingLib.sampleCluster = sampleCluster;
  SamplingLib.sampleSystematic = sampleSystematic;
  SamplingLib.sampleConvenience = sampleConvenience;
  SamplingLib.sampleSnowball = sampleSnowball;
  SamplingLib.runSample = runSample;
})(typeof window !== "undefined" ? window : globalThis);
