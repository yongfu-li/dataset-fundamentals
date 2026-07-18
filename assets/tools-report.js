/* Shared tool report helpers: print-to-PDF + high-res figure PNG export.
 * file:// and GitHub Pages safe (no CDN). */
(function (global) {
  "use strict";

  const Report = (global.DatasetToolsReport = global.DatasetToolsReport || {});
  const SCALE = 3; // export resolution multiplier
  const SKIP_IDS = { "an-canvas": true }; // interactive annotation surface

  let toastEl = null;
  let observeTimer = null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "tr-toast";
      toastEl.setAttribute("role", "status");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 2800);
  }

  function slugify(s) {
    return String(s || "figure")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 60) || "figure";
  }

  function toolSlug() {
    const parts = (location.pathname || "").split("/").filter(Boolean);
    const idx = parts.indexOf("tools");
    if (idx >= 0 && parts[idx + 1]) return parts[idx + 1];
    return "tool";
  }

  function toolTitle() {
    const h1 = document.querySelector("main h1");
    if (h1 && h1.textContent.trim()) return h1.textContent.trim();
    return document.title.replace(/\s*—\s*.*$/, "").trim() || "Tool report";
  }

  function downloadBlob(filename, blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function downloadDataUrl(filename, dataUrl) {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  /** Logical CSS-pixel size for a chart canvas (HiDPI-aware). */
  function logicalSize(canvas) {
    let w = Number(canvas.getAttribute("data-logical-w"));
    let h = Number(canvas.getAttribute("data-logical-h"));
    if (w && h) return { w: w, h: h };
    if (canvas._lw && canvas._lh) return { w: canvas._lw, h: canvas._lh };
    const attrW = Number(canvas.getAttribute("width"));
    const attrH = Number(canvas.getAttribute("height"));
    if (attrW && attrH) return { w: attrW, h: attrH };
    const rect = canvas.getBoundingClientRect();
    if (rect.width >= 40 && rect.height >= 40) {
      return { w: Math.round(rect.width), h: Math.round(rect.height) };
    }
    return { w: canvas.width || 0, h: canvas.height || 0 };
  }

  /** High-res PNG: redraw at export scale when possible, else crisp upscale. */
  function canvasToPngBlob(canvas, scale, done) {
    const s = scale || SCALE;
    const logical = logicalSize(canvas);
    const w = logical.w;
    const h = logical.h;
    if (!w || !h) {
      done(null);
      return;
    }

    // Prefer redraw-at-scale when a hook is registered (true crisp quality).
    const redraw = Report._redrawers.slice();
    if (redraw.length) {
      const backup = {
        cssW: canvas.style.width,
        cssH: canvas.style.height,
        exportScale: canvas._trExportScale,
      };
      const targetId = canvas.id;
      try {
        canvas.setAttribute("data-logical-w", String(w));
        canvas.setAttribute("data-logical-h", String(h));
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        canvas._trExportScale = s;
        canvas.width = Math.round(w * s);
        canvas.height = Math.round(h * s);
        redraw.forEach(function (fn) {
          try {
            fn(targetId);
          } catch (err) {
            /* keep going */
          }
        });
        canvas.toBlob(
          function (blob) {
            if (backup.exportScale == null) delete canvas._trExportScale;
            else canvas._trExportScale = backup.exportScale;
            canvas.style.width = backup.cssW;
            canvas.style.height = backup.cssH;
            redraw.forEach(function (fn) {
              try {
                fn();
              } catch (err) {
                /* ignore */
              }
            });
            done(blob);
          },
          "image/png"
        );
        return;
      } catch (err) {
        if (backup.exportScale == null) delete canvas._trExportScale;
        else canvas._trExportScale = backup.exportScale;
        canvas.style.width = backup.cssW;
        canvas.style.height = backup.cssH;
      }
    }

    // Fallback: high-quality upscale of the current bitmap
    const out = document.createElement("canvas");
    out.width = Math.round(w * s);
    out.height = Math.round(h * s);
    const ctx = out.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, out.width, out.height);
    ctx.drawImage(canvas, 0, 0, out.width, out.height);
    out.toBlob(function (blob) {
      done(blob);
    }, "image/png");
  }

  function figureLabel(canvas) {
    return (
      canvas.getAttribute("aria-label") ||
      canvas.getAttribute("data-figure") ||
      canvas.id ||
      "figure"
    );
  }

  function listCanvases() {
    const main = document.getElementById("main") || document.body;
    return Array.prototype.slice.call(main.querySelectorAll("canvas")).filter(function (c) {
      if (SKIP_IDS[c.id]) return false;
      if (c.width < 40 || c.height < 40) return false;
      if (c.getAttribute("data-tr-skip") === "1") return false;
      return true;
    });
  }

  function ensureFigWrap(canvas) {
    if (canvas.closest(".tr-fig-wrap")) return canvas.closest(".tr-fig-wrap");
    const wrap = document.createElement("div");
    wrap.className = "tr-fig-wrap";
    const parent = canvas.parentNode;
    if (!parent) return null;
    parent.insertBefore(wrap, canvas);
    wrap.appendChild(canvas);
    const actions = document.createElement("div");
    actions.className = "tr-fig-actions";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tr-fig-btn";
    btn.textContent = "Save PNG";
    btn.title = "Download this figure as a high-resolution PNG";
    btn.addEventListener("click", function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      saveOne(canvas);
    });
    actions.appendChild(btn);
    wrap.appendChild(actions);
    return wrap;
  }

  function decorateFigures() {
    listCanvases().forEach(ensureFigWrap);
  }

  function saveOne(canvas) {
    const label = figureLabel(canvas);
    const name = toolSlug() + "-" + slugify(label) + "@" + SCALE + "x.png";
    canvasToPngBlob(canvas, SCALE, function (blob) {
      if (!blob) {
        toast("Could not export figure.");
        return;
      }
      downloadBlob(name, blob);
      toast("Saved " + name);
    });
  }

  function saveAllFigures() {
    const canvases = listCanvases();
    if (!canvases.length) {
      toast("No figures on this page yet.");
      return;
    }
    let i = 0;
    function next() {
      if (i >= canvases.length) {
        toast("Saved " + canvases.length + " figure(s) at " + SCALE + "×.");
        return;
      }
      const canvas = canvases[i];
      const label = figureLabel(canvas);
      const name = toolSlug() + "-" + slugify(label) + "-" + (i + 1) + "@" + SCALE + "x.png";
      i += 1;
      canvasToPngBlob(canvas, SCALE, function (blob) {
        if (blob) downloadBlob(name, blob);
        setTimeout(next, 350);
      });
    }
    next();
  }

  function ensurePrintCover() {
    let cover = document.getElementById("tr-print-cover");
    if (!cover) {
      cover = document.createElement("div");
      cover.id = "tr-print-cover";
      cover.className = "tr-print-cover";
      const main = document.getElementById("main");
      if (main) main.insertBefore(cover, main.firstChild);
    }
    const when = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";
    cover.innerHTML =
      "<h1>" +
      esc(toolTitle()) +
      "</h1>" +
      "<p>Dataset Fundamentals · interactive tool report</p>" +
      "<p>Exported: " +
      esc(when) +
      "</p>" +
      "<p>Source: " +
      esc(location.href || location.pathname) +
      "</p>";
  }

  function printPdfReport() {
    ensurePrintCover();
    decorateFigures();
    toast("Choose “Save as PDF” in the print dialog.");
    setTimeout(function () {
      global.print();
    }, 200);
  }

  function ensureToolbar() {
    if (document.getElementById("tr-toolbar")) return;
    const main = document.getElementById("main");
    if (!main) return;
    const bar = document.createElement("div");
    bar.id = "tr-toolbar";
    bar.className = "tr-toolbar";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Export analysis report");
    bar.innerHTML =
      '<span class="tr-toolbar-label">Export</span>' +
      '<button type="button" class="btn" id="tr-pdf">Save PDF report</button>' +
      '<button type="button" class="btn btn-secondary" id="tr-all-figs">Save all figures (PNG)</button>' +
      '<p class="tr-toolbar-hint">PDF uses your browser print dialog (Save as PDF). Figures export at ' +
      SCALE +
      "× resolution.</p>";
    const eyebrow = main.querySelector(".eyebrow");
    if (eyebrow && eyebrow.nextSibling) {
      main.insertBefore(bar, eyebrow.nextSibling);
    } else {
      main.insertBefore(bar, main.firstChild);
    }
    document.getElementById("tr-pdf").addEventListener("click", printPdfReport);
    document.getElementById("tr-all-figs").addEventListener("click", saveAllFigures);
  }

  function scheduleDecorate() {
    clearTimeout(observeTimer);
    observeTimer = setTimeout(function () {
      decorateFigures();
    }, 120);
  }

  /** Tools can register a redraw callback so PNG export re-renders at higher DPI. */
  Report._redrawers = Report._redrawers || [];
  Report.registerRedraw = function (fn) {
    if (typeof fn === "function" && Report._redrawers.indexOf(fn) === -1) {
      Report._redrawers.push(fn);
    }
  };
  Report.saveFigure = saveOne;
  Report.saveAllFigures = saveAllFigures;
  Report.printPdfReport = printPdfReport;
  Report.decorateFigures = decorateFigures;
  Report.SCALE = SCALE;

  function boot() {
    ensureToolbar();
    decorateFigures();
    const main = document.getElementById("main");
    if (main && global.MutationObserver) {
      const mo = new MutationObserver(scheduleDecorate);
      mo.observe(main, { childList: true, subtree: true });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(typeof window !== "undefined" ? window : globalThis);
