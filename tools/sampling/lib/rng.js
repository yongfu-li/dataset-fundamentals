/* Classic script — attaches to window.SamplingLib (file:// safe). */
(function (global) {
  "use strict";
  const SamplingLib = global.SamplingLib || (global.SamplingLib = {});

  /**
   * Seeded pseudo-random number generator (mulberry32).
   * @param {number} seed
   */
  function createRng(seed) {
    seed = seed === undefined ? 1 : seed;
    let state = seed >>> 0;
    const next = function () {
      state += 0x6d2b79f5;
      let t = state;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const int = function (max) {
      return Math.floor(next() * max);
    };
    const shuffle = function (arr) {
      const copy = arr.slice();
      for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = int(i + 1);
        const tmp = copy[i];
        copy[i] = copy[j];
        copy[j] = tmp;
      }
      return copy;
    };
    return { next: next, int: int, shuffle: shuffle };
  }

  SamplingLib.createRng = createRng;
})(typeof window !== "undefined" ? window : globalThis);
