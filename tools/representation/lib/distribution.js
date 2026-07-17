/* Classic script — population vs dataset group shares and gaps. */
(function (global) {
  "use strict";
  const RepresentationLib = global.RepresentationLib || (global.RepresentationLib = {});

  const GAP_FLAG_PP = 10; // flag |gap| >= 10 percentage points

  function round4(n) {
    return Math.round(n * 10000) / 10000;
  }

  function round1(n) {
    return Math.round(n * 10) / 10;
  }

  /**
   * Count group membership from rows using mapping.group.
   * @returns {{ counts: Object<string,number>, total: number, skipped: number, groups: string[] }}
   */
  function countGroups(rows, groupCol) {
    const counts = {};
    let total = 0;
    let skipped = 0;
    (rows || []).forEach(function (row) {
      const raw = row[groupCol];
      if (raw == null || String(raw).trim() === "") {
        skipped += 1;
        return;
      }
      const g = String(raw).trim();
      counts[g] = (counts[g] || 0) + 1;
      total += 1;
    });
    const groups = Object.keys(counts).sort();
    return { counts: counts, total: total, skipped: skipped, groups: groups };
  }

  /**
   * Normalize population object; missing groups get 0; renormalize if sum > 0.
   */
  function normalizePopulation(population, groups) {
    const out = {};
    let sum = 0;
    (groups || []).forEach(function (g) {
      const v = population && population[g] != null ? Number(population[g]) : 0;
      const n = Number.isFinite(v) && v >= 0 ? v : 0;
      out[g] = n;
      sum += n;
    });
    // Include population-only groups not in dataset
    if (population) {
      Object.keys(population).forEach(function (g) {
        if (out[g] == null) {
          const v = Number(population[g]);
          const n = Number.isFinite(v) && v >= 0 ? v : 0;
          out[g] = n;
          sum += n;
        }
      });
    }
    if (sum > 0) {
      Object.keys(out).forEach(function (g) {
        out[g] = round4(out[g] / sum);
      });
    }
    return out;
  }

  /**
   * Compare population shares vs dataset shares.
   * @param {Object} population shares (need not sum to 1; will normalize)
   * @param {Array} rows
   * @param {string} groupCol
   */
  function computeGaps(population, rows, groupCol) {
    const counted = countGroups(rows, groupCol);
    const allGroups = {};
    counted.groups.forEach(function (g) {
      allGroups[g] = true;
    });
    if (population) {
      Object.keys(population).forEach(function (g) {
        allGroups[g] = true;
      });
    }
    const groups = Object.keys(allGroups).sort();
    const popNorm = normalizePopulation(population || {}, groups);

    const items = groups.map(function (g) {
      const n = counted.counts[g] || 0;
      const datasetShare = counted.total ? n / counted.total : 0;
      const popShare = popNorm[g] || 0;
      const gapPp = (datasetShare - popShare) * 100;
      const ratio = popShare > 0 ? datasetShare / popShare : null;
      return {
        group: g,
        count: n,
        populationShare: round4(popShare),
        datasetShare: round4(datasetShare),
        gapPp: round1(gapPp),
        representationRatio: ratio == null ? null : round4(ratio),
        flagged: Math.abs(gapPp) >= GAP_FLAG_PP,
        underrepresented: gapPp <= -GAP_FLAG_PP,
        overrepresented: gapPp >= GAP_FLAG_PP,
      };
    });

    const maxAbsGap = items.reduce(function (m, it) {
      return Math.max(m, Math.abs(it.gapPp));
    }, 0);

    return {
      total: counted.total,
      skipped: counted.skipped,
      groups: groups,
      items: items,
      maxAbsGapPp: round1(maxAbsGap),
      flagThresholdPp: GAP_FLAG_PP,
      population: popNorm,
    };
  }

  function populationSum(population) {
    let sum = 0;
    Object.keys(population || {}).forEach(function (k) {
      const v = Number(population[k]);
      if (Number.isFinite(v)) sum += v;
    });
    return round1(sum * 100) / 100;
  }

  RepresentationLib.GAP_FLAG_PP = GAP_FLAG_PP;
  RepresentationLib.countGroups = countGroups;
  RepresentationLib.normalizePopulation = normalizePopulation;
  RepresentationLib.computeGaps = computeGaps;
  RepresentationLib.populationSum = populationSum;
})(typeof window !== "undefined" ? window : globalThis);
