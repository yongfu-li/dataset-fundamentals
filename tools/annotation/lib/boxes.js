/* Classic script — attaches to window.AnnLib (file:// safe).
 * Box model + geometry helpers for the annotation mini-lab. */
(function (global) {
  "use strict";
  const AnnLib = global.AnnLib || (global.AnnLib = {});

  const HANDLE = 8; // half-size of a resize handle hit target (display px)

  let counter = 0;

  /**
   * Create a normalized box in image-space pixels.
   * @param {{x:number,y:number,w:number,h:number,class?:string|null}} spec
   * @returns {{id:string,class:string|null,x:number,y:number,w:number,h:number}}
   */
  function createBox(spec) {
    counter += 1;
    const b = normalize(spec.x, spec.y, spec.w, spec.h);
    return {
      id: "b" + Date.now().toString(36) + "_" + counter,
      class: spec.class != null ? spec.class : null,
      x: b.x,
      y: b.y,
      w: b.w,
      h: b.h,
    };
  }

  /**
   * Normalize a rectangle so width/height are non-negative.
   * @returns {{x:number,y:number,w:number,h:number}}
   */
  function normalize(x, y, w, h) {
    if (w < 0) {
      x += w;
      w = -w;
    }
    if (h < 0) {
      y += h;
      h = -h;
    }
    return { x: x, y: y, w: w, h: h };
  }

  /**
   * Clamp a box so it stays within the image bounds.
   * @param {{x:number,y:number,w:number,h:number}} box
   * @param {number} width
   * @param {number} height
   */
  function clampBox(box, width, height) {
    box.x = Math.max(0, Math.min(box.x, width));
    box.y = Math.max(0, Math.min(box.y, height));
    box.w = Math.max(0, Math.min(box.w, width - box.x));
    box.h = Math.max(0, Math.min(box.h, height - box.y));
    return box;
  }

  /**
   * Test whether a point is inside a box.
   * @returns {boolean}
   */
  function contains(box, px, py) {
    return px >= box.x && px <= box.x + box.w && py >= box.y && py <= box.y + box.h;
  }

  /**
   * Corner handle positions in image space, keyed by direction.
   * @param {{x:number,y:number,w:number,h:number}} box
   */
  function handles(box) {
    return {
      nw: { x: box.x, y: box.y },
      ne: { x: box.x + box.w, y: box.y },
      sw: { x: box.x, y: box.y + box.h },
      se: { x: box.x + box.w, y: box.y + box.h },
    };
  }

  /**
   * Return the handle direction hit by a point, or null.
   * @param {{x:number,y:number,w:number,h:number}} box
   * @param {number} px image-space x
   * @param {number} py image-space y
   * @param {number} scale display px per image px (handle tolerance scales with it)
   * @returns {string|null}
   */
  function handleAt(box, px, py, scale) {
    const tol = HANDLE / (scale || 1);
    const hs = handles(box);
    for (const dir in hs) {
      if (Math.abs(px - hs[dir].x) <= tol && Math.abs(py - hs[dir].y) <= tol) {
        return dir;
      }
    }
    return null;
  }

  /**
   * Apply a resize drag to a box given the active handle direction.
   * @returns {{x:number,y:number,w:number,h:number}} normalized result
   */
  function resize(box, dir, px, py) {
    let x1 = box.x;
    let y1 = box.y;
    let x2 = box.x + box.w;
    let y2 = box.y + box.h;
    if (dir.indexOf("n") !== -1) y1 = py;
    if (dir.indexOf("s") !== -1) y2 = py;
    if (dir.indexOf("w") !== -1) x1 = px;
    if (dir.indexOf("e") !== -1) x2 = px;
    return normalize(x1, y1, x2 - x1, y2 - y1);
  }

  /**
   * Intersection-over-union of two boxes (used by an optional gold-set audit).
   * @returns {number}
   */
  function iou(a, b) {
    const x1 = Math.max(a.x, b.x);
    const y1 = Math.max(a.y, b.y);
    const x2 = Math.min(a.x + a.w, b.x + b.w);
    const y2 = Math.min(a.y + a.h, b.y + b.h);
    const iw = Math.max(0, x2 - x1);
    const ih = Math.max(0, y2 - y1);
    const inter = iw * ih;
    const union = a.w * a.h + b.w * b.h - inter;
    return union > 0 ? inter / union : 0;
  }

  AnnLib.HANDLE = HANDLE;
  AnnLib.createBox = createBox;
  AnnLib.normalize = normalize;
  AnnLib.clampBox = clampBox;
  AnnLib.contains = contains;
  AnnLib.handles = handles;
  AnnLib.handleAt = handleAt;
  AnnLib.resize = resize;
  AnnLib.iou = iou;
})(typeof window !== "undefined" ? window : globalThis);
