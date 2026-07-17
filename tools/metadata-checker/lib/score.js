/* Classic script — score dataset cards against §8.2 checklist. */
(function (global) {
  "use strict";
  const MetadataCheckerLib = global.MetadataCheckerLib || (global.MetadataCheckerLib = {});

  function scoreCard(card) {
    const checks = MetadataCheckerLib.CHECKS;
    const categories = MetadataCheckerLib.CATEGORIES;
    const results = [];
    let earned = 0;
    let total = 0;
    const byCategory = {};

    categories.forEach(function (cat) {
      byCategory[cat.id] = { id: cat.id, title: cat.title, earned: 0, total: 0, items: [] };
    });

    checks.forEach(function (chk) {
      let pass = false;
      try {
        pass = !!chk.test(card);
      } catch (err) {
        pass = false;
      }
      const item = {
        id: chk.id,
        category: chk.category,
        label: chk.label,
        hint: chk.hint,
        weight: chk.weight,
        pass: pass,
      };
      results.push(item);
      total += chk.weight;
      if (pass) earned += chk.weight;
      const bucket = byCategory[chk.category];
      if (bucket) {
        bucket.total += chk.weight;
        if (pass) bucket.earned += chk.weight;
        bucket.items.push(item);
      }
    });

    const pct = total ? Math.round((earned / total) * 1000) / 10 : 0;
    let grade;
    if (pct >= 90) grade = "Release-ready";
    else if (pct >= 75) grade = "Nearly complete";
    else if (pct >= 55) grade = "Needs work";
    else grade = "Draft — not releasable";

    const failures = results.filter(function (r) {
      return !r.pass;
    });

    return {
      score_pct: pct,
      grade: grade,
      earned: earned,
      total: total,
      passed: results.length - failures.length,
      check_count: results.length,
      results: results,
      categories: categories.map(function (cat) {
        const b = byCategory[cat.id];
        return {
          id: cat.id,
          title: cat.title,
          section: cat.section,
          earned: b.earned,
          total: b.total,
          pct: b.total ? Math.round((b.earned / b.total) * 1000) / 10 : 0,
          items: b.items,
        };
      }),
      remediation: failures.map(function (f) {
        return { id: f.id, label: f.label, hint: f.hint };
      }),
    };
  }

  MetadataCheckerLib.scoreCard = scoreCard;
})(typeof window !== "undefined" ? window : globalThis);
