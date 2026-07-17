/* Classic script — attaches to window.IaaLib (file:// safe).
 * Cohen's κ, Fleiss' κ, contingency tables, Landis–Koch-style bands.
 * Book anchors: §4.5.2 Inter-Annotator Agreement; Table 4.4; eg:4.31. */
(function (global) {
  "use strict";
  const IaaLib = global.IaaLib || (global.IaaLib = {});

  const FORMULAS = {
    percentAgreement:
      "Percent agreement = (# items where raters match) / n. Easy to read but inflated by chance.",
    observedAgreement:
      "Po = sum of diagonal cells / n in the contingency table (observed agreement).",
    expectedAgreement:
      "Pe = Σ_c (row_c / n)·(col_c / n). Agreement expected if raters labeled independently with the observed marginals.",
    cohensKappa:
      "Cohen's κ = (Po − Pe) / (1 − Pe). Chance-corrected agreement for two raters on nominal labels (§4.5.2).",
    fleissKappa:
      "Fleiss' κ extends chance-corrected agreement to 3+ raters on the same items (Table 4.4).",
  };

  /** Landis & Koch (1977) style bands — common teaching scale; projects set their own gates. */
  const BANDS = [
    { max: 0.0, label: "poor", detail: "Worse than chance — stop and diagnose guidelines." },
    { max: 0.2, label: "slight", detail: "Barely above chance — revise schema before scaling." },
    { max: 0.4, label: "fair", detail: "Often a pilot stop signal (eg:4.31: κ ≈ 0.35)." },
    { max: 0.6, label: "moderate", detail: "Usable for some tasks; tighten ambiguous classes." },
    { max: 0.8, label: "substantial", detail: "Strong agreement — typically ready to scale." },
    { max: 1.01, label: "almost perfect", detail: "Near-ceiling agreement." },
  ];

  function round4(n) {
    return Math.round(n * 10000) / 10000;
  }

  function interpretKappa(kappa) {
    if (kappa == null || !Number.isFinite(kappa)) {
      return { label: "n/a", detail: "Not defined for this table.", stopScale: true };
    }
    for (let i = 0; i < BANDS.length; i += 1) {
      if (kappa < BANDS[i].max) {
        const band = BANDS[i];
        return {
          label: band.label,
          detail: band.detail,
          stopScale: kappa < 0.4,
        };
      }
    }
    return { label: "almost perfect", detail: BANDS[BANDS.length - 1].detail, stopScale: false };
  }

  function collectCategories(pairs) {
    const set = new Set();
    pairs.forEach(function (p) {
      set.add(p.a);
      set.add(p.b);
    });
    return Array.from(set).sort();
  }

  /**
   * Build contingency counts for two raters.
   * @returns {{ categories: string[], matrix: number[][], n: number, rowSums: number[], colSums: number[] }}
   */
  function contingency(pairs) {
    const categories = collectCategories(pairs);
    const idx = {};
    categories.forEach(function (c, i) {
      idx[c] = i;
    });
    const k = categories.length;
    const matrix = [];
    for (let i = 0; i < k; i += 1) {
      matrix.push(new Array(k).fill(0));
    }
    pairs.forEach(function (p) {
      matrix[idx[p.a]][idx[p.b]] += 1;
    });
    const rowSums = matrix.map(function (row) {
      return row.reduce(function (s, v) {
        return s + v;
      }, 0);
    });
    const colSums = [];
    for (let j = 0; j < k; j += 1) {
      let s = 0;
      for (let i = 0; i < k; i += 1) s += matrix[i][j];
      colSums.push(s);
    }
    return { categories: categories, matrix: matrix, n: pairs.length, rowSums: rowSums, colSums: colSums };
  }

  function cohenFromContingency(c) {
    const n = c.n;
    if (n === 0) {
      return {
        n: 0,
        po: null,
        pe: null,
        kappa: null,
        percentAgreement: null,
        interpretation: interpretKappa(null),
      };
    }
    let diag = 0;
    for (let i = 0; i < c.categories.length; i += 1) diag += c.matrix[i][i];
    const po = diag / n;
    let pe = 0;
    for (let i = 0; i < c.categories.length; i += 1) {
      pe += (c.rowSums[i] / n) * (c.colSums[i] / n);
    }
    let kappa;
    if (Math.abs(1 - pe) < 1e-12) {
      kappa = Math.abs(po - pe) < 1e-12 ? 1 : 0;
    } else {
      kappa = (po - pe) / (1 - pe);
    }
    return {
      n: n,
      po: round4(po),
      pe: round4(pe),
      kappa: round4(kappa),
      percentAgreement: round4(po),
      interpretation: interpretKappa(kappa),
    };
  }

  /**
   * Cohen's κ for two parallel label arrays (same length, already cleaned).
   */
  function cohensKappa(labelsA, labelsB) {
    const pairs = [];
    for (let i = 0; i < labelsA.length; i += 1) {
      pairs.push({ a: String(labelsA[i]), b: String(labelsB[i]) });
    }
    const table = contingency(pairs);
    const metrics = cohenFromContingency(table);
    return { contingency: table, metrics: metrics };
  }

  /**
   * Fleiss' κ for N items × n raters.
   * @param {string[][]} itemRatings — itemRatings[i] = array of labels from each rater
   */
  function fleissKappa(itemRatings) {
    const N = itemRatings.length;
    if (N === 0) {
      return { nItems: 0, nRaters: 0, kappa: null, pBar: null, pe: null, interpretation: interpretKappa(null) };
    }
    const n = itemRatings[0].length;
    if (n < 2) {
      return { nItems: N, nRaters: n, kappa: null, pBar: null, pe: null, interpretation: interpretKappa(null) };
    }
    const catSet = new Set();
    itemRatings.forEach(function (ratings) {
      ratings.forEach(function (lab) {
        catSet.add(String(lab));
      });
    });
    const categories = Array.from(catSet).sort();
    const k = categories.length;
    const catIndex = {};
    categories.forEach(function (c, i) {
      catIndex[c] = i;
    });

    const counts = []; // N × k
    for (let i = 0; i < N; i += 1) {
      const row = new Array(k).fill(0);
      itemRatings[i].forEach(function (lab) {
        row[catIndex[String(lab)]] += 1;
      });
      counts.push(row);
    }

    let pBar = 0;
    for (let i = 0; i < N; i += 1) {
      let sumSq = 0;
      for (let j = 0; j < k; j += 1) sumSq += counts[i][j] * counts[i][j];
      pBar += (sumSq - n) / (n * (n - 1));
    }
    pBar /= N;

    const pj = new Array(k).fill(0);
    for (let j = 0; j < k; j += 1) {
      let s = 0;
      for (let i = 0; i < N; i += 1) s += counts[i][j];
      pj[j] = s / (N * n);
    }
    let pe = 0;
    for (let j = 0; j < k; j += 1) pe += pj[j] * pj[j];

    let kappa;
    if (Math.abs(1 - pe) < 1e-12) {
      kappa = Math.abs(pBar - pe) < 1e-12 ? 1 : 0;
    } else {
      kappa = (pBar - pe) / (1 - pe);
    }
    return {
      nItems: N,
      nRaters: n,
      categories: categories,
      kappa: round4(kappa),
      pBar: round4(pBar),
      pe: round4(pe),
      interpretation: interpretKappa(kappa),
    };
  }

  /**
   * Full report from mapped rows.
   * mapping: { id?, text?, raterA, raterB, raterC? }
   */
  function computeReport(rows, mapping) {
    const pairs = [];
    const fleissItems = [];
    const items = [];
    let skipped = 0;
    const hasC = !!(mapping.raterC && mapping.raterC !== "");

    rows.forEach(function (row, i) {
      const a = row[mapping.raterA];
      const b = row[mapping.raterB];
      if (a == null || String(a).trim() === "" || b == null || String(b).trim() === "") {
        skipped += 1;
        return;
      }
      const la = String(a).trim();
      const lb = String(b).trim();
      let lc = null;
      if (hasC) {
        const c = row[mapping.raterC];
        if (c == null || String(c).trim() === "") {
          skipped += 1;
          return;
        }
        lc = String(c).trim();
      }
      const id = mapping.id && row[mapping.id] != null ? String(row[mapping.id]) : String(i + 1);
      const text = mapping.text && row[mapping.text] != null ? String(row[mapping.text]) : "";
      pairs.push({ a: la, b: lb });
      if (hasC) fleissItems.push([la, lb, lc]);
      items.push({
        id: id,
        text: text,
        a: la,
        b: lb,
        c: lc,
        agree: la === lb,
      });
    });

    const cohen = cohensKappa(
      pairs.map(function (p) {
        return p.a;
      }),
      pairs.map(function (p) {
        return p.b;
      })
    );
    const fleiss = hasC && fleissItems.length ? fleissKappa(fleissItems) : null;
    const disagreements = items.filter(function (it) {
      return !it.agree;
    });

    return {
      skipped: skipped,
      items: items,
      disagreements: disagreements,
      cohen: cohen.metrics,
      contingency: cohen.contingency,
      fleiss: fleiss,
      hasThirdRater: hasC,
    };
  }

  IaaLib.FORMULAS = FORMULAS;
  IaaLib.BANDS = BANDS;
  IaaLib.interpretKappa = interpretKappa;
  IaaLib.contingency = contingency;
  IaaLib.cohensKappa = cohensKappa;
  IaaLib.fleissKappa = fleissKappa;
  IaaLib.computeReport = computeReport;
})(typeof window !== "undefined" ? window : globalThis);
