/* Classic script — infers schema and composition stats from sample data (§8.2). */
(function (global) {
  "use strict";
  const DatasheetLib = global.DatasheetLib || (global.DatasheetLib = {});

  function isMissing(v) {
    return (
      v === null ||
      v === undefined ||
      (typeof v === "string" && v.trim() === "") ||
      (typeof v === "string" && ["na", "n/a", "null", "none", "-"].indexOf(v.trim().toLowerCase()) !== -1)
    );
  }

  function toNumber(v) {
    if (typeof v === "number") return Number.isFinite(v) ? v : null;
    if (typeof v !== "string") return null;
    const t = v.trim();
    if (t === "") return null;
    const n = Number(t);
    return Number.isFinite(n) ? n : null;
  }

  function inferType(rows, col) {
    let numeric = 0;
    let boolean = 0;
    let dateLike = 0;
    let seen = 0;
    rows.forEach(function (r) {
      const v = r[col];
      if (isMissing(v)) return;
      seen += 1;
      const s = String(v).trim();
      if (s === "true" || s === "false" || s === "0" || s === "1") boolean += 1;
      if (toNumber(v) !== null) numeric += 1;
      if (/^\d{4}-\d{2}-\d{2}/.test(s) || /^\d{1,2}\/\d{1,2}\/\d{2,4}/.test(s)) dateLike += 1;
    });
    if (!seen) return "unknown";
    if (dateLike / seen >= 0.8) return "date";
    if (boolean / seen >= 0.9 && seen > 0) return "boolean";
    if (numeric / seen >= 0.8) return "number";
    return "string";
  }

  function uniqueValues(rows, col, limit) {
    const set = new Set();
    rows.forEach(function (r) {
      const v = r[col];
      if (isMissing(v)) return;
      set.add(String(v));
    });
    const arr = Array.from(set);
    arr.sort();
    return arr.slice(0, limit || 5);
  }

  function columnProfile(rows, col) {
    const missing = rows.filter(function (r) {
      return isMissing(r[col]);
    }).length;
    const type = inferType(rows, col);
    const unique = uniqueValues(rows, col, 100).length;
    const samples = uniqueValues(rows, col, 4);
    const out = {
      name: col,
      inferred_type: type,
      missing_count: missing,
      missing_pct: rows.length ? Math.round((missing / rows.length) * 1000) / 10 : 0,
      unique_count: unique,
      sample_values: samples,
      description: "",
    };
    if (type === "number") {
      const nums = [];
      rows.forEach(function (r) {
        const n = toNumber(r[col]);
        if (n !== null) nums.push(n);
      });
      if (nums.length) {
        nums.sort(function (a, b) {
          return a - b;
        });
        out.min = nums[0];
        out.max = nums[nums.length - 1];
        out.mean = Math.round((nums.reduce(function (s, n) {
          return s + n;
        }, 0) / nums.length) * 100) / 100;
      }
    }
    return out;
  }

  function profileDataset(rows, columns) {
    const columnProfiles = columns.map(function (col) {
      return columnProfile(rows, col);
    });
    const totalMissing = columnProfiles.reduce(function (s, c) {
      return s + c.missing_count;
    }, 0);
    const cells = rows.length * columns.length;
    return {
      row_count: rows.length,
      column_count: columns.length,
      total_cells: cells,
      missing_cells: totalMissing,
      missing_pct: cells ? Math.round((totalMissing / cells) * 1000) / 10 : 0,
      columns: columnProfiles,
      numeric_columns: columnProfiles.filter(function (c) {
        return c.inferred_type === "number";
      }).length,
      categorical_columns: columnProfiles.filter(function (c) {
        return c.inferred_type === "string";
      }).length,
    };
  }

  function suggestCompositionText(profile) {
    if (!profile) return "";
    let text =
      "The dataset contains " +
      profile.row_count +
      " rows and " +
      profile.column_count +
      " columns (" +
      profile.numeric_columns +
      " numeric, " +
      profile.categorical_columns +
      " categorical). ";
    if (profile.missing_pct > 0) {
      text += "Overall missing-cell rate is " + profile.missing_pct + "%. ";
    } else {
      text += "No missing values were detected in the sample. ";
    }
    text += "Columns: " + profile.columns.map(function (c) {
      return c.name + " (" + c.inferred_type + ")";
    }).join(", ") + ".";
    return text;
  }

  DatasheetLib.profileDataset = profileDataset;
  DatasheetLib.suggestCompositionText = suggestCompositionText;
})(typeof window !== "undefined" ? window : globalThis);
