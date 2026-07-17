/* Classic script — attaches to window.AnnLib (file:// safe).
 * PASCAL VOC XML serializer (the format LabelImg exports in eg:4.29). */
(function (global) {
  "use strict";
  const AnnLib = global.AnnLib || (global.AnnLib = {});

  /**
   * Escape XML-special characters in text nodes.
   * @param {unknown} value
   * @returns {string}
   */
  function escXml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /**
   * Serialize one image's boxes as a PASCAL VOC annotation document.
   * Coordinates are rounded integers in image space; VOC uses 1-based inclusive
   * pixel indices, so xmax/ymax add 1 to the far edge.
   *
   * @param {{name:string,width:number,height:number}} image
   * @param {{class:string|null,x:number,y:number,w:number,h:number}[]} boxes
   * @returns {string}
   */
  function toVocXml(image, boxes) {
    const objects = boxes
      .map(function (b) {
        const xmin = Math.round(b.x) + 1;
        const ymin = Math.round(b.y) + 1;
        const xmax = Math.round(b.x + b.w) + 1;
        const ymax = Math.round(b.y + b.h) + 1;
        return [
          "  <object>",
          "    <name>" + escXml(b.class) + "</name>",
          "    <pose>Unspecified</pose>",
          "    <truncated>0</truncated>",
          "    <difficult>0</difficult>",
          "    <bndbox>",
          "      <xmin>" + xmin + "</xmin>",
          "      <ymin>" + ymin + "</ymin>",
          "      <xmax>" + xmax + "</xmax>",
          "      <ymax>" + ymax + "</ymax>",
          "    </bndbox>",
          "  </object>",
        ].join("\n");
      })
      .join("\n");

    return [
      "<annotation>",
      "  <folder>images</folder>",
      "  <filename>" + escXml(image.name) + "</filename>",
      "  <size>",
      "    <width>" + image.width + "</width>",
      "    <height>" + image.height + "</height>",
      "    <depth>3</depth>",
      "  </size>",
      "  <segmented>0</segmented>",
      objects,
      "</annotation>",
      "",
    ]
      .filter(function (line) {
        return line !== "";
      })
      .join("\n") + "\n";
  }

  AnnLib.toVocXml = toVocXml;
})(typeof window !== "undefined" ? window : globalThis);
