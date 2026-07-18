/* Frame-clip playback + WebM encode (window.MediaAugLib). */
(function (global) {
  "use strict";
  const MediaAugLib = global.MediaAugLib || (global.MediaAugLib = {});

  let activePlayer = null;

  MediaAugLib.stopClipPlayback = function () {
    if (activePlayer) {
      activePlayer.stop();
      activePlayer = null;
    }
  };

  /**
   * Play a frame strip on a canvas (loops once by default or forever).
   * @returns {{ stop: function }}
   */
  MediaAugLib.playFrameClip = function (canvas, frames, opts) {
    opts = opts || {};
    MediaAugLib.stopClipPlayback();
    if (!canvas || !frames || !frames.length) {
      throw new Error("No frames to play.");
    }
    const fps = opts.fps || 8;
    const loop = opts.loop !== false;
    const onFrame = opts.onFrame || null;
    const onDone = opts.onDone || null;
    const ctx = canvas.getContext("2d");
    const w = frames[0].width;
    const h = frames[0].height;
    canvas.width = w;
    canvas.height = h;

    let i = 0;
    let stopped = false;
    let timer = null;

    function draw() {
      if (stopped) return;
      ctx.drawImage(frames[i], 0, 0);
      if (onFrame) onFrame(i, frames.length);
      i++;
      if (i >= frames.length) {
        if (loop) {
          i = 0;
        } else {
          stopped = true;
          activePlayer = null;
          if (onDone) onDone();
          return;
        }
      }
      timer = setTimeout(draw, 1000 / fps);
    }

    const handle = {
      stop: function () {
        stopped = true;
        if (timer) clearTimeout(timer);
        timer = null;
        if (activePlayer === handle) activePlayer = null;
        if (onDone) onDone();
      },
    };
    activePlayer = handle;
    draw();
    return handle;
  };

  function pickWebmMime() {
    if (typeof MediaRecorder === "undefined") return null;
    const candidates = [
      "video/webm;codecs=vp9",
      "video/webm;codecs=vp8",
      "video/webm",
    ];
    for (let i = 0; i < candidates.length; i++) {
      if (MediaRecorder.isTypeSupported(candidates[i])) return candidates[i];
    }
    return null;
  }

  /**
   * Encode frames → WebM Blob via canvas + MediaRecorder.
   * @returns {Promise<Blob>}
   */
  MediaAugLib.encodeWebM = function (frames, opts) {
    opts = opts || {};
    return new Promise(function (resolve, reject) {
      if (!frames || !frames.length) {
        reject(new Error("No frames to encode."));
        return;
      }
      const mime = pickWebmMime();
      if (!mime) {
        reject(new Error(
          "WebM recording is only supported in Chromium-based browsers (Chrome, Edge, Brave, etc.). Use Play clip for preview, or export PNG frames from the ZIP."
        ));
        return;
      }
      const fps = opts.fps || 8;
      const canvas = document.createElement("canvas");
      canvas.width = frames[0].width;
      canvas.height = frames[0].height;
      const ctx = canvas.getContext("2d");
      let stream;
      try {
        stream = canvas.captureStream(0);
      } catch (e) {
        try {
          stream = canvas.captureStream(fps);
        } catch (e2) {
          reject(e2);
          return;
        }
      }
      const track = stream.getVideoTracks()[0];
      const rec = new MediaRecorder(stream, {
        mimeType: mime,
        videoBitsPerSecond: opts.bitsPerSecond || 1200000,
      });
      const chunks = [];
      rec.ondataavailable = function (ev) {
        if (ev.data && ev.data.size) chunks.push(ev.data);
      };
      rec.onerror = function (ev) {
        reject(ev.error || new Error("MediaRecorder failed."));
      };
      rec.onstop = function () {
        try {
          track.stop();
        } catch (e) {
          /* ignore */
        }
        resolve(new Blob(chunks, { type: "video/webm" }));
      };

      let i = 0;
      function paint() {
        ctx.drawImage(frames[i], 0, 0);
        if (track.requestFrame) {
          try {
            track.requestFrame();
          } catch (e) {
            /* older browsers */
          }
        }
      }

      rec.start(40);
      paint();

      function step() {
        i++;
        if (i >= frames.length) {
          // hold last frame briefly so encoder flushes
          setTimeout(function () {
            try {
              rec.stop();
            } catch (e) {
              reject(e);
            }
          }, 120);
          return;
        }
        paint();
        setTimeout(step, 1000 / fps);
      }
      setTimeout(step, 1000 / fps);
    });
  };

  MediaAugLib.downloadWebM = function (frames, filename, opts) {
    return MediaAugLib.encodeWebM(frames, opts).then(function (blob) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename || "clip.webm";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 800);
      return blob;
    });
  };

  MediaAugLib.blobToUint8Array = function (blob) {
    return blob.arrayBuffer().then(function (buf) {
      return new Uint8Array(buf);
    });
  };
})(typeof window !== "undefined" ? window : globalThis);
