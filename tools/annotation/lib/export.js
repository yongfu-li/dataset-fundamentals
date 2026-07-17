/* Classic script — attaches to window.AnnLib (file:// safe).
 * Download helpers for the annotation tool, including a STORE-method ZIP
 * so learners can download images + VOC + COCO as one annotated dataset. */
(function (global) {
  "use strict";
  const AnnLib = global.AnnLib || (global.AnnLib = {});

  /**
   * Trigger a client-side text download.
   * @param {string} filename
   * @param {string} content
   * @param {string} [mime]
   */
  function downloadText(filename, content, mime) {
    downloadBlob(filename, new Blob([content], { type: mime || "text/plain" }));
  }

  /**
   * @param {unknown} data
   * @param {string} [filename]
   */
  function downloadJson(data, filename) {
    downloadText(filename || "export.json", JSON.stringify(data, null, 2), "application/json");
  }

  /**
   * @param {string} filename
   * @param {Blob} blob
   */
  function downloadBlob(filename, blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  /**
   * Decode a data URI into bytes.
   * @param {string} dataUri
   * @returns {Uint8Array}
   */
  function dataUriToBytes(dataUri) {
    const comma = dataUri.indexOf(",");
    if (comma < 0) throw new Error("Invalid data URI.");
    const meta = dataUri.slice(0, comma);
    const payload = dataUri.slice(comma + 1);
    if (meta.indexOf(";base64") !== -1) {
      const bin = atob(payload);
      const out = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i += 1) out[i] = bin.charCodeAt(i);
      return out;
    }
    return new TextEncoder().encode(decodeURIComponent(payload));
  }

  /**
   * CRC-32 (ZIP) for a byte array.
   * @param {Uint8Array} bytes
   * @returns {number}
   */
  function crc32(bytes) {
    let c = 0xffffffff;
    for (let i = 0; i < bytes.length; i += 1) {
      c ^= bytes[i];
      for (let k = 0; k < 8; k += 1) {
        c = c & 1 ? (c >>> 1) ^ 0xedb88320 : c >>> 1;
      }
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  /**
   * Build an uncompressed (STORE) ZIP from named entries.
   * @param {{name:string, data:Uint8Array|string}[]} entries
   * @returns {Blob}
   */
  function buildZip(entries) {
    const encoder = new TextEncoder();
    const parts = [];
    const central = [];
    let offset = 0;

    entries.forEach(function (entry) {
      const nameBytes = encoder.encode(entry.name.replace(/\\/g, "/"));
      const data =
        typeof entry.data === "string" ? encoder.encode(entry.data) : entry.data;
      const crc = crc32(data);
      const size = data.length;

      const local = new Uint8Array(30 + nameBytes.length);
      const lv = new DataView(local.buffer);
      lv.setUint32(0, 0x04034b50, true);
      lv.setUint16(4, 20, true);
      lv.setUint16(6, 0, true);
      lv.setUint16(8, 0, true); // STORE
      lv.setUint16(10, 0, true);
      lv.setUint16(12, 0, true);
      lv.setUint32(14, crc, true);
      lv.setUint32(18, size, true);
      lv.setUint32(22, size, true);
      lv.setUint16(26, nameBytes.length, true);
      lv.setUint16(28, 0, true);
      local.set(nameBytes, 30);

      parts.push(local, data);

      const cen = new Uint8Array(46 + nameBytes.length);
      const cv = new DataView(cen.buffer);
      cv.setUint32(0, 0x02014b50, true);
      cv.setUint16(4, 20, true);
      cv.setUint16(6, 20, true);
      cv.setUint16(8, 0, true);
      cv.setUint16(10, 0, true);
      cv.setUint16(12, 0, true);
      cv.setUint16(14, 0, true);
      cv.setUint32(16, crc, true);
      cv.setUint32(20, size, true);
      cv.setUint32(24, size, true);
      cv.setUint16(28, nameBytes.length, true);
      cv.setUint16(30, 0, true);
      cv.setUint16(32, 0, true);
      cv.setUint16(34, 0, true);
      cv.setUint16(36, 0, true);
      cv.setUint32(38, 0, true);
      cv.setUint32(42, offset, true);
      cen.set(nameBytes, 46);
      central.push(cen);

      offset += local.length + data.length;
    });

    const centralSize = central.reduce(function (n, c) {
      return n + c.length;
    }, 0);
    const end = new Uint8Array(22);
    const ev = new DataView(end.buffer);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(4, 0, true);
    ev.setUint16(6, 0, true);
    ev.setUint16(8, entries.length, true);
    ev.setUint16(10, entries.length, true);
    ev.setUint32(12, centralSize, true);
    ev.setUint32(16, offset, true);
    ev.setUint16(20, 0, true);

    return new Blob(parts.concat(central).concat([end]), { type: "application/zip" });
  }

  /**
   * Download a ZIP file.
   * @param {string} filename
   * @param {{name:string, data:Uint8Array|string}[]} entries
   */
  function downloadZip(filename, entries) {
    downloadBlob(filename || "annotated-dataset.zip", buildZip(entries));
  }

  AnnLib.downloadText = downloadText;
  AnnLib.downloadJson = downloadJson;
  AnnLib.downloadBlob = downloadBlob;
  AnnLib.dataUriToBytes = dataUriToBytes;
  AnnLib.buildZip = buildZip;
  AnnLib.downloadZip = downloadZip;
})(typeof window !== "undefined" ? window : globalThis);
