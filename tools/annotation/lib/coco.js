/* Classic script — attaches to window.AnnLib (file:// safe).
 * COCO detection JSON serializer + importer for resume. */
(function (global) {
  "use strict";
  const AnnLib = global.AnnLib || (global.AnnLib = {});

  /**
   * Build a COCO-format object from per-image annotation state.
   *
   * @param {{id:string,name:string,width:number,height:number}[]} images
   * @param {Record<string, {class:string|null,x:number,y:number,w:number,h:number}[]>} boxesByImage
   * @param {string[]} classNames stable class ordering -> category ids (1-based)
   * @returns {object}
   */
  function toCoco(images, boxesByImage, classNames) {
    const categories = classNames.map(function (name, i) {
      return { id: i + 1, name: name, supercategory: "object" };
    });
    const catId = {};
    categories.forEach(function (c) {
      catId[c.name] = c.id;
    });

    const cocoImages = [];
    const annotations = [];
    let annId = 1;

    images.forEach(function (img, idx) {
      const imageId = idx + 1;
      cocoImages.push({
        id: imageId,
        file_name: img.name,
        width: img.width,
        height: img.height,
      });
      const boxes = boxesByImage[img.id] || [];
      boxes.forEach(function (b) {
        const w = Math.round(b.w);
        const h = Math.round(b.h);
        annotations.push({
          id: annId++,
          image_id: imageId,
          category_id: b.class != null && catId[b.class] ? catId[b.class] : null,
          bbox: [Math.round(b.x), Math.round(b.y), w, h],
          area: w * h,
          iscrowd: 0,
        });
      });
    });

    return {
      info: {
        description: "Annotation tool export",
        source: "lectures/tools/annotation",
      },
      images: cocoImages,
      annotations: annotations,
      categories: categories,
    };
  }

  /**
   * Parse a COCO document back into per-image boxes keyed by image name.
   * Used to resume a session from a previously exported file.
   *
   * @param {object} coco
   * @returns {Record<string, {class:string|null,x:number,y:number,w:number,h:number}[]>}
   *   map of file_name -> boxes (caller resolves file_name to internal image id)
   */
  function fromCoco(coco) {
    const idToName = {};
    (coco.images || []).forEach(function (img) {
      idToName[img.id] = img.file_name;
    });
    const idToClass = {};
    (coco.categories || []).forEach(function (c) {
      idToClass[c.id] = c.name;
    });

    const byName = {};
    (coco.annotations || []).forEach(function (a) {
      const name = idToName[a.image_id];
      if (!name) return;
      const bbox = a.bbox || [0, 0, 0, 0];
      if (!byName[name]) byName[name] = [];
      byName[name].push({
        class: idToClass[a.category_id] || null,
        x: bbox[0],
        y: bbox[1],
        w: bbox[2],
        h: bbox[3],
      });
    });
    return byName;
  }

  AnnLib.toCoco = toCoco;
  AnnLib.fromCoco = fromCoco;
})(typeof window !== "undefined" ? window : globalThis);
