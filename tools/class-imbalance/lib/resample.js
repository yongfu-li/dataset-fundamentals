/* Train/test holdout + resampling (train only) — window.ImbalanceLib. */
(function (global) {
  "use strict";
  const ImbalanceLib = global.ImbalanceLib || (global.ImbalanceLib = {});

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

  ImbalanceLib.mulberry32 = mulberry32;
  ImbalanceLib.seededShuffle = seededShuffle;

  /** Stratified 70/30 holdout. Test is never resampled. */
  ImbalanceLib.stratifiedHoldout = function (rows, labelCol, positiveLabel, testFrac, seed) {
    const frac = testFrac == null ? 0.3 : Number(testFrac);
    const pos = [];
    const neg = [];
    (rows || []).forEach(function (r, i) {
      const y = ImbalanceLib.toBinary(r[labelCol], positiveLabel);
      if (y === null) return;
      const item = { row: r, y: y, index: i };
      if (y === 1) pos.push(item);
      else neg.push(item);
    });
    function splitGroup(items, salt) {
      const shuffled = seededShuffle(items, (Number(seed) || 0) + salt);
      const nTest = Math.max(1, Math.floor(shuffled.length * frac));
      const nTrain = shuffled.length - nTest;
      return {
        train: shuffled.slice(0, Math.max(1, nTrain)),
        test: shuffled.slice(Math.max(1, nTrain)),
      };
    }
    const p = splitGroup(pos, 11);
    const n = splitGroup(neg, 29);
    const train = seededShuffle(p.train.concat(n.train), (Number(seed) || 0) + 101);
    const test = seededShuffle(p.test.concat(n.test), (Number(seed) || 0) + 202);
    return { train: train, test: test };
  };

  ImbalanceLib.undersample = function (items, seed) {
    const pos = items.filter(function (x) {
      return x.y === 1;
    });
    const neg = items.filter(function (x) {
      return x.y === 0;
    });
    const m = Math.min(pos.length, neg.length);
    if (m === 0) return items.slice();
    const posKeep = seededShuffle(pos, seed).slice(0, m);
    const negKeep = seededShuffle(neg, (Number(seed) || 0) + 7).slice(0, m);
    return seededShuffle(posKeep.concat(negKeep), (Number(seed) || 0) + 13);
  };

  ImbalanceLib.oversample = function (items, seed) {
    const pos = items.filter(function (x) {
      return x.y === 1;
    });
    const neg = items.filter(function (x) {
      return x.y === 0;
    });
    if (!pos.length || !neg.length) return items.slice();
    const majority = neg.length >= pos.length ? neg : pos;
    const minority = neg.length >= pos.length ? pos : neg;
    const rand = mulberry32(seed == null ? 42 : Number(seed) || 0);
    const target = majority.length;
    const boosted = minority.slice();
    while (boosted.length < target) {
      const pick = minority[Math.floor(rand() * minority.length)];
      boosted.push({ row: pick.row, y: pick.y, index: pick.index, synthetic: true });
    }
    return seededShuffle(majority.concat(boosted), (Number(seed) || 0) + 17);
  };

  ImbalanceLib.applyStrategy = function (trainItems, strategy, seed) {
    const s = strategy || "none";
    if (s === "undersample") return { items: ImbalanceLib.undersample(trainItems, seed), weights: null };
    if (s === "oversample") return { items: ImbalanceLib.oversample(trainItems, seed), weights: null };
    if (s === "class_weight") {
      const pos = trainItems.filter(function (x) {
        return x.y === 1;
      }).length;
      const neg = trainItems.filter(function (x) {
        return x.y === 0;
      }).length;
      const n = pos + neg;
      const wPos = pos ? n / (2 * pos) : 1;
      const wNeg = neg ? n / (2 * neg) : 1;
      const weights = trainItems.map(function (x) {
        return x.y === 1 ? wPos : wNeg;
      });
      return { items: trainItems.slice(), weights: weights, weightInfo: { wPos: wPos, wNeg: wNeg } };
    }
    return { items: trainItems.slice(), weights: null };
  };
})(typeof window !== "undefined" ? window : globalThis);
