/* Load realistic preset scenes from ImgAugImages (data URIs). */
(function (global) {
  "use strict";

  function loadFromDataUri(dataUri, done, fail) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d").drawImage(img, 0, 0);
      done(canvas, img.width, img.height);
    };
    img.onerror = function () {
      fail(new Error("Could not decode preset image."));
    };
    img.src = dataUri;
  }

  function presetFromMeta(meta, canvas) {
    return {
      id: meta.id,
      title: meta.title,
      description: meta.description,
      bookAnchors: meta.bookAnchors || ["§10.6", "eg:10.16"],
      canvas: canvas,
      dataUrl: canvas.toDataURL("image/png"),
      source: "preset:" + meta.id,
      width: canvas.width,
      height: canvas.height,
    };
  }

  /** Fallback if images-bundle failed to load. */
  function drawFallback(ctx, w, h) {
    ctx.fillStyle = "#dde5ea";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#0f6b5c";
    ctx.fillRect(40, 80, 120, 70);
    ctx.fillStyle = "#1c2421";
    ctx.font = "16px sans-serif";
    ctx.fillText("fallback scene", 40, 40);
  }

  global.ImgAugPresets = {
    listMeta: function () {
      const bag = global.ImgAugImages || {};
      const ids = Object.keys(bag);
      if (!ids.length) {
        return [
          {
            id: "fallback",
            title: "Fallback scene",
            description: "Bundle missing—run data/make_images.py.",
            dataUri: null,
          },
        ];
      }
      return ids.map(function (id) {
        return bag[id];
      });
    },

    /** Async load all presets into canvases; callback(err, presetsArray). */
    loadAll: function (callback) {
      const metas = this.listMeta();
      const out = [];
      let pending = metas.length;
      if (!pending) {
        callback(new Error("No presets"), []);
        return;
      }
      metas.forEach(function (meta, idx) {
        function finish(canvas) {
          out[idx] = presetFromMeta(meta, canvas);
          pending -= 1;
          if (pending === 0) callback(null, out);
        }
        if (meta.dataUri) {
          loadFromDataUri(
            meta.dataUri,
            function (canvas) {
              finish(canvas);
            },
            function () {
              const c = document.createElement("canvas");
              c.width = 320;
              c.height = 220;
              drawFallback(c.getContext("2d"), c.width, c.height);
              finish(c);
            }
          );
        } else {
          const c = document.createElement("canvas");
          c.width = 320;
          c.height = 220;
          drawFallback(c.getContext("2d"), c.width, c.height);
          finish(c);
        }
      });
    },

    load: function (id, callback) {
      const bag = global.ImgAugImages || {};
      const meta = bag[id];
      if (!meta || !meta.dataUri) {
        callback(new Error("Unknown preset: " + id));
        return;
      }
      loadFromDataUri(
        meta.dataUri,
        function (canvas) {
          callback(null, presetFromMeta(meta, canvas));
        },
        function (err) {
          callback(err);
        }
      );
    },
  };
})(typeof window !== "undefined" ? window : globalThis);
