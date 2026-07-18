/* Schema / format translator — export helpers (window.SchemaLib). */
(function (global) {
  "use strict";
  const SchemaLib = global.SchemaLib || (global.SchemaLib = {});

  function download(filename, text, mime) {
    const blob = new Blob([text], { type: mime || "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  SchemaLib.download = download;
})(typeof window !== "undefined" ? window : globalThis);
