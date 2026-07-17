/* Train/val/test splitter — split algorithms (window.SplitLib). */
(function (global) {
  "use strict";
  const SplitLib = global.SplitLib || (global.SplitLib = {});

  function mulberry32(seed) {
    let t = seed >>> 0;
    return function () {
      t += 0x6d2b79f5;
      let r = Math.imul(t ^ (t >>> 15), 1 | t);
      r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  function seededShuffle(arr, seed) {
    const a = arr.slice();
    const rand = mulberry32(seed == null ? 42 : Number(seed) || 0);
    for (let i = a.length - 1; i > 0; i -= 1) {
      const j = Math.floor(rand() * (i + 1));
      const tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function normalizeRatios(trainPct, valPct, testPct) {
    let t = Math.max(0, Number(trainPct) || 0);
    let v = Math.max(0, Number(valPct) || 0);
    let s = Math.max(0, Number(testPct) || 0);
    const sum = t + v + s;
    if (sum <= 0) return { train: 0.7, val: 0.15, test: 0.15 };
    return { train: t / sum, val: v / sum, test: s / sum };
  }

  function assignByCounts(indexed, nTrain, nVal) {
    const train = [];
    const val = [];
    const test = [];
    indexed.forEach(function (item, i) {
      if (i < nTrain) train.push(item);
      else if (i < nTrain + nVal) val.push(item);
      else test.push(item);
    });
    return { train: train, val: val, test: test };
  }

  function countsFor(n, ratios) {
    let nTrain = Math.floor(n * ratios.train);
    let nVal = Math.floor(n * ratios.val);
    let nTest = n - nTrain - nVal;
    if (n >= 3 && ratios.test > 0 && nTest === 0 && nTrain > 0) {
      nTrain -= 1;
      nTest += 1;
    }
    if (n >= 3 && ratios.val > 0 && nVal === 0 && nTrain > 0) {
      nTrain -= 1;
      nVal += 1;
    }
    return { nTrain: nTrain, nVal: nVal, nTest: nTest };
  }

  function withIndices(rows) {
    return rows.map(function (r, i) {
      return { index: i, row: r };
    });
  }

  function randomSplit(rows, ratios, seed) {
    const indexed = seededShuffle(withIndices(rows), seed);
    const c = countsFor(indexed.length, ratios);
    return assignByCounts(indexed, c.nTrain, c.nVal);
  }

  function stratifiedSplit(rows, labelCol, ratios, seed) {
    if (!labelCol) throw new Error("Stratified split needs a label column.");
    const groups = new Map();
    withIndices(rows).forEach(function (item) {
      const raw = item.row[labelCol];
      const key = SplitLib.isMissing(raw) ? "__missing__" : String(raw);
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
    });
    const train = [];
    const val = [];
    const test = [];
    let salt = 0;
    groups.forEach(function (items) {
      const shuffled = seededShuffle(items, (Number(seed) || 0) + salt);
      salt += 17;
      const c = countsFor(shuffled.length, ratios);
      const part = assignByCounts(shuffled, c.nTrain, c.nVal);
      train.push.apply(train, part.train);
      val.push.apply(val, part.val);
      test.push.apply(test, part.test);
    });
    return {
      train: seededShuffle(train, (Number(seed) || 0) + 101),
      val: seededShuffle(val, (Number(seed) || 0) + 202),
      test: seededShuffle(test, (Number(seed) || 0) + 303),
    };
  }

  function parseTime(v) {
    if (v == null || v === "") return null;
    if (typeof v === "number" && Number.isFinite(v)) return v;
    const s = String(v).trim();
    if (/^\d+(\.\d+)?$/.test(s)) return Number(s);
    const t = Date.parse(s);
    return Number.isFinite(t) ? t : null;
  }

  function timeSplit(rows, timeCol, ratios) {
    if (!timeCol) throw new Error("Time-based split needs a time column.");
    const indexed = withIndices(rows).map(function (item) {
      return {
        index: item.index,
        row: item.row,
        t: parseTime(item.row[timeCol]),
      };
    });
    const known = indexed.filter(function (x) {
      return x.t !== null;
    });
    const unknown = indexed.filter(function (x) {
      return x.t === null;
    });
    if (known.length < 3) {
      throw new Error("Need at least 3 rows with parseable times in '" + timeCol + "'.");
    }
    known.sort(function (a, b) {
      return a.t - b.t;
    });
    const c = countsFor(known.length, ratios);
    const part = assignByCounts(known, c.nTrain, c.nVal);
    // Unparseable times go to train (flagged separately in leakage report)
    part.train = part.train.concat(unknown);
    return {
      train: part.train,
      val: part.val,
      test: part.test,
      unknownTimeCount: unknown.length,
    };
  }

  function runSplit(rows, options) {
    const ratios = normalizeRatios(options.trainPct, options.valPct, options.testPct);
    const method = options.method || "random";
    let result;
    if (method === "stratified") {
      result = stratifiedSplit(rows, options.labelCol, ratios, options.seed);
    } else if (method === "time") {
      result = timeSplit(rows, options.timeCol, ratios);
    } else {
      result = randomSplit(rows, ratios, options.seed);
    }
    return {
      method: method,
      ratios: ratios,
      seed: options.seed,
      labelCol: options.labelCol || null,
      timeCol: options.timeCol || null,
      idCol: options.idCol || null,
      train: result.train,
      val: result.val,
      test: result.test,
      unknownTimeCount: result.unknownTimeCount || 0,
    };
  }

  function foldLabelCounts(items, labelCol) {
    const map = new Map();
    if (!labelCol) return [];
    items.forEach(function (it) {
      const raw = it.row[labelCol];
      const key = SplitLib.isMissing(raw) ? "(missing)" : String(raw);
      map.set(key, (map.get(key) || 0) + 1);
    });
    return Array.from(map.entries())
      .map(function (e) {
        return { label: e[0], count: e[1] };
      })
      .sort(function (a, b) {
        return b.count - a.count;
      });
  }

  SplitLib.mulberry32 = mulberry32;
  SplitLib.seededShuffle = seededShuffle;
  SplitLib.normalizeRatios = normalizeRatios;
  SplitLib.runSplit = runSplit;
  SplitLib.parseTime = parseTime;
  SplitLib.foldLabelCounts = foldLabelCounts;
})(typeof window !== "undefined" ? window : globalThis);
