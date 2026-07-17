/* Train/val/test splitter — leakage checks (window.SplitLib). */
(function (global) {
  "use strict";
  const SplitLib = global.SplitLib || (global.SplitLib = {});

  function foldIds(items, idCol) {
    const set = new Set();
    if (!idCol) return set;
    items.forEach(function (it) {
      const v = it.row[idCol];
      if (!SplitLib.isMissing(v)) set.add(String(v));
    });
    return set;
  }

  function intersectSize(a, b) {
    let n = 0;
    a.forEach(function (x) {
      if (b.has(x)) n += 1;
    });
    return n;
  }

  function sampleOverlap(a, b, limit) {
    limit = limit || 8;
    const out = [];
    a.forEach(function (x) {
      if (out.length >= limit) return;
      if (b.has(x)) out.push(x);
    });
    return out;
  }

  function foldTimeRange(items, timeCol) {
    if (!timeCol) return null;
    let min = null;
    let max = null;
    items.forEach(function (it) {
      const t = SplitLib.parseTime(it.row[timeCol]);
      if (t === null) return;
      if (min === null || t < min) min = t;
      if (max === null || t > max) max = t;
    });
    if (min === null) return null;
    return { min: min, max: max };
  }

  function formatTime(t) {
    if (t == null) return "—";
    if (t > 1e11) {
      try {
        return new Date(t).toISOString().slice(0, 10);
      } catch (err) {
        return String(t);
      }
    }
    return String(t);
  }

  function analyzeLeakage(splitResult) {
    const issues = [];
    const idCol = splitResult.idCol;
    const timeCol = splitResult.timeCol;
    const method = splitResult.method;

    const trainIds = foldIds(splitResult.train, idCol);
    const valIds = foldIds(splitResult.val, idCol);
    const testIds = foldIds(splitResult.test, idCol);

    const tv = intersectSize(trainIds, valIds);
    const tt = intersectSize(trainIds, testIds);
    const vt = intersectSize(valIds, testIds);

    if (idCol) {
      if (tv > 0) {
        issues.push({
          severity: "error",
          kind: "id-overlap",
          folds: "train ∩ val",
          count: tv,
          samples: sampleOverlap(trainIds, valIds),
          message:
            "Entity ID leakage: " +
            tv +
            " value(s) of `" +
            idCol +
            "` appear in both train and validation.",
        });
      }
      if (tt > 0) {
        issues.push({
          severity: "error",
          kind: "id-overlap",
          folds: "train ∩ test",
          count: tt,
          samples: sampleOverlap(trainIds, testIds),
          message:
            "Entity ID leakage: " +
            tt +
            " value(s) of `" +
            idCol +
            "` appear in both train and test.",
        });
      }
      if (vt > 0) {
        issues.push({
          severity: "error",
          kind: "id-overlap",
          folds: "val ∩ test",
          count: vt,
          samples: sampleOverlap(valIds, testIds),
          message:
            "Entity ID leakage: " +
            vt +
            " value(s) of `" +
            idCol +
            "` appear in both validation and test.",
        });
      }
      if (tv === 0 && tt === 0 && vt === 0) {
        issues.push({
          severity: "ok",
          kind: "id-overlap",
          message: "No overlapping `" + idCol + "` values across folds.",
        });
      }
    } else {
      issues.push({
        severity: "warn",
        kind: "id-overlap",
        message: "No entity ID column mapped — ID leakage cannot be checked.",
      });
    }

    if (timeCol) {
      const tr = foldTimeRange(splitResult.train, timeCol);
      const vr = foldTimeRange(splitResult.val, timeCol);
      const te = foldTimeRange(splitResult.test, timeCol);
      if (method !== "time" && tr && te && te.min != null && tr.max != null && te.min <= tr.max) {
        issues.push({
          severity: "error",
          kind: "temporal",
          message:
            "Temporal leakage risk: test times overlap or precede the train window (test min " +
            formatTime(te.min) +
            " ≤ train max " +
            formatTime(tr.max) +
            "). Prefer a time-based split.",
          trainRange: tr,
          testRange: te,
        });
      } else if (method === "time" && tr && te && te.min != null && tr.max != null && te.min < tr.max) {
        issues.push({
          severity: "error",
          kind: "temporal",
          message: "Time-based split still has test times before train max — check sort order / missing times.",
        });
      } else if (tr && te) {
        issues.push({
          severity: "ok",
          kind: "temporal",
          message:
            "Train window ends at " +
            formatTime(tr.max) +
            "; test starts at " +
            formatTime(te.min) +
            (vr ? "; val in between." : "."),
          trainRange: tr,
          valRange: vr,
          testRange: te,
        });
      }
      if (splitResult.unknownTimeCount > 0) {
        issues.push({
          severity: "warn",
          kind: "temporal",
          message:
            splitResult.unknownTimeCount +
            " row(s) had unparseable `" +
            timeCol +
            "` and were placed in train.",
        });
      }
    }

    const errors = issues.filter(function (i) {
      return i.severity === "error";
    }).length;
    const warns = issues.filter(function (i) {
      return i.severity === "warn";
    }).length;

    return {
      issues: issues,
      errorCount: errors,
      warnCount: warns,
      idOverlap: { trainVal: tv, trainTest: tt, valTest: vt },
    };
  }

  SplitLib.analyzeLeakage = analyzeLeakage;
  SplitLib.formatTime = formatTime;
})(typeof window !== "undefined" ? window : globalThis);
