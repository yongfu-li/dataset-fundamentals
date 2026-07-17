/* Annotation mini-lab — browser bounding-box labeling for Chapter 4.
 * Classic scripts (no ES modules) so file:// and GitHub Pages both work.
 * Depends on window.AnnLib, window.AnnImages, window.AnnGuidelines.
 */
(function () {
  "use strict";

  const Lib = window.AnnLib;
  const IMAGES = window.AnnImages || {};
  const GUIDE = window.AnnGuidelines || { classes: [], rules: [] };

  const root = document.getElementById("annotation-root");
  if (!Lib || !root) {
    if (root) {
      root.innerHTML =
        '<p class="an-msg err">Annotation libraries failed to load. Ensure lib/*.js and data/*.js are included before annotation.js.</p>';
    }
    return;
  }

  const STORAGE_KEY = "annlab:v1";
  const MIN_AREA = 16; // px^2 below which a box is flagged as accidental

  const classNames = GUIDE.classes.map(function (c) {
    return c.name;
  });
  const classColor = {};
  GUIDE.classes.forEach(function (c) {
    classColor[c.name] = c.color;
  });

  // Ordered image list with a stable file name for exports/imports.
  const imageList = Object.keys(IMAGES).map(function (id) {
    const img = IMAGES[id];
    return {
      id: id,
      name: img.name || id,
      file: id + ".png",
      width: img.width,
      height: img.height,
      dataUri: img.dataUri,
    };
  });

  /** @type {Record<string, HTMLImageElement>} */
  const imgCache = {};
  /** @type {Record<string, Array>} */
  let boxesByImage = {};
  let currentId = imageList.length ? imageList[0].id : null;
  let activeClass = classNames[0] || null;
  let selectedId = null;

  /** @type {{mode:string, dir?:string, box?:object, startX:number, startY:number, orig?:object}} */
  let drag = { mode: "idle", startX: 0, startY: 0 };

  function currentImage() {
    return imageList.find(function (i) {
      return i.id === currentId;
    });
  }

  function currentBoxes() {
    if (!boxesByImage[currentId]) boxesByImage[currentId] = [];
    return boxesByImage[currentId];
  }

  function esc(text) {
    const el = document.createElement("div");
    el.textContent = String(text == null ? "" : text);
    return el.innerHTML;
  }

  // ---------------------------------------------------------------- persistence
  function save() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(boxesByImage));
    } catch (err) {
      /* storage may be unavailable under strict file:// — ignore */
    }
  }

  function load() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) boxesByImage = JSON.parse(raw) || {};
    } catch (err) {
      boxesByImage = {};
    }
  }

  // ---------------------------------------------------------------- rendering
  function render() {
    root.innerHTML = [
      '<section class="an-hero">',
      "<h1>Annotation mini-lab</h1>",
      '<p class="lead">Draw bounding boxes on the sample images, assign a class to each, then export ',
      "PASCAL VOC XML or COCO JSON. Review flags before export mirror the pre-scale check from the book.</p>",
      '<p class="an-book-ref">Chapter 4 · Section 4.4.4 · ',
      '<a href="../../modules/chapter4/example29/index.html">eg:4.29 LabelImg workflow</a></p>',
      "</section>",
      '<div class="an-layout">',
      '<aside class="an-panel an-side">',
      "<h2>1. Image</h2>",
      '<div class="an-images" id="image-list"></div>',
      "<h2>2. Class</h2>",
      '<div class="an-classes" id="class-list"></div>',
      '<details class="an-guide"><summary>Guidelines</summary><div id="guide-body"></div></details>',
      "</aside>",
      '<section class="an-panel an-stage">',
      "<h2>3. Draw</h2>",
      '<p class="an-hint">Drag on the image to draw. Click a box to select; drag inside to move, drag a corner to resize. Press Delete to remove.</p>',
      '<div class="an-canvas-wrap">',
      '<canvas id="an-canvas" width="480" height="320" role="img" aria-label="Annotation canvas"></canvas>',
      "</div>",
      '<div class="an-actions">',
      '<button type="button" class="btn btn-secondary" id="add-box">Add box (keyboard)</button>',
      '<button type="button" class="btn btn-secondary" id="clear-image">Clear this image</button>',
      "</div>",
      "</section>",
      '<section class="an-panel an-review">',
      "<h2>4. Review &amp; export</h2>",
      '<div id="review" class="an-review-body"></div>',
      '<h3>Boxes on this image</h3>',
      '<div id="box-table" class="an-box-table"></div>',
      '<div class="an-actions">',
      '<button type="button" class="btn" id="export-voc">Export VOC (this image)</button>',
      '<button type="button" class="btn" id="export-coco">Export COCO (all)</button>',
      '<label class="an-import"><span class="btn btn-secondary">Import COCO</span>',
      '<input type="file" id="import-coco" accept=".json" hidden></label>',
      "</div>",
      '<div id="an-messages" class="an-messages"></div>',
      "</section>",
      "</div>",
    ].join("");

    renderImageList();
    renderClassList();
    renderGuide();
    bindStage();
    selectImage(currentId);
  }

  function renderImageList() {
    const el = document.getElementById("image-list");
    if (!el) return;
    el.innerHTML = imageList
      .map(function (img) {
        const n = (boxesByImage[img.id] || []).length;
        return (
          '<button type="button" class="an-image-card" data-image="' +
          esc(img.id) +
          '"><strong>' +
          esc(img.name) +
          "</strong><span class=\"an-hint\">" +
          n +
          " box(es)</span></button>"
        );
      })
      .join("");
    el.querySelectorAll("[data-image]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectImage(btn.getAttribute("data-image"));
      });
    });
  }

  function renderClassList() {
    const el = document.getElementById("class-list");
    if (!el) return;
    el.innerHTML = GUIDE.classes
      .map(function (c) {
        return (
          '<button type="button" class="an-class-chip" data-class="' +
          esc(c.name) +
          '" title="' +
          esc(c.rule) +
          '"><span class="an-swatch" style="background:' +
          esc(c.color) +
          '"></span>' +
          esc(c.name) +
          "</button>"
        );
      })
      .join("");
    el.querySelectorAll("[data-class]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeClass = btn.getAttribute("data-class");
        if (selectedId) {
          const box = findBox(selectedId);
          if (box) {
            box.class = activeClass;
            afterChange();
          }
        }
        highlightActiveClass();
      });
    });
    highlightActiveClass();
  }

  function highlightActiveClass() {
    document.querySelectorAll(".an-class-chip").forEach(function (chip) {
      chip.classList.toggle("is-active", chip.getAttribute("data-class") === activeClass);
    });
  }

  function renderGuide() {
    const el = document.getElementById("guide-body");
    if (!el) return;
    const rules = (GUIDE.rules || [])
      .map(function (r) {
        return "<li>" + esc(r) + "</li>";
      })
      .join("");
    const perClass = GUIDE.classes
      .map(function (c) {
        return "<li><strong>" + esc(c.name) + ":</strong> " + esc(c.rule) + "</li>";
      })
      .join("");
    el.innerHTML =
      "<p>" + esc(GUIDE.task || "") + "</p><ul>" + rules + "</ul><ul>" + perClass + "</ul>";
  }

  // ---------------------------------------------------------------- image load
  function selectImage(id) {
    if (!id) return;
    currentId = id;
    selectedId = null;
    document.querySelectorAll(".an-image-card").forEach(function (card) {
      card.classList.toggle("is-active", card.getAttribute("data-image") === id);
    });
    const img = currentImage();
    if (img && !imgCache[id]) {
      const el = new Image();
      el.onload = function () {
        imgCache[id] = el;
        redraw();
      };
      el.src = img.dataUri;
    }
    afterChange();
  }

  // ---------------------------------------------------------------- geometry map
  function canvasEl() {
    return /** @type {HTMLCanvasElement|null} */ (document.getElementById("an-canvas"));
  }

  function toImageCoords(ev) {
    const canvas = canvasEl();
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (ev.clientX - rect.left) * scaleX,
      y: (ev.clientY - rect.top) * scaleY,
      displayScale: rect.width / canvas.width,
    };
  }

  // ---------------------------------------------------------------- interaction
  function bindStage() {
    const canvas = canvasEl();
    if (!canvas) return;
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    document.addEventListener("keydown", onKeyDown);
    document.getElementById("add-box")?.addEventListener("click", onAddBox);
    document.getElementById("clear-image")?.addEventListener("click", onClearImage);
    document.getElementById("export-voc")?.addEventListener("click", onExportVoc);
    document.getElementById("export-coco")?.addEventListener("click", onExportCoco);
    document.getElementById("import-coco")?.addEventListener("change", onImportCoco);
  }

  function onPointerDown(ev) {
    const canvas = canvasEl();
    if (!canvas) return;
    canvas.setPointerCapture(ev.pointerId);
    const p = toImageCoords(ev);
    const boxes = currentBoxes();

    // Resize handle of the selected box takes priority.
    if (selectedId) {
      const sel = findBox(selectedId);
      if (sel) {
        const dir = Lib.handleAt(sel, p.x, p.y, p.displayScale);
        if (dir) {
          drag = { mode: "resize", dir: dir, box: sel, startX: p.x, startY: p.y };
          return;
        }
      }
    }

    // Click inside an existing box (topmost) selects and starts a move.
    for (let i = boxes.length - 1; i >= 0; i -= 1) {
      if (Lib.contains(boxes[i], p.x, p.y)) {
        selectedId = boxes[i].id;
        drag = {
          mode: "move",
          box: boxes[i],
          startX: p.x,
          startY: p.y,
          orig: { x: boxes[i].x, y: boxes[i].y },
        };
        afterChange();
        return;
      }
    }

    // Otherwise start drawing a new box with the active class.
    const box = Lib.createBox({ x: p.x, y: p.y, w: 0, h: 0, class: activeClass });
    boxes.push(box);
    selectedId = box.id;
    drag = { mode: "draw", box: box, startX: p.x, startY: p.y };
    redraw();
  }

  function onPointerMove(ev) {
    if (drag.mode === "idle") {
      updateCursor(ev);
      return;
    }
    const p = toImageCoords(ev);
    const img = currentImage();
    if (drag.mode === "draw") {
      const b = Lib.normalize(drag.startX, drag.startY, p.x - drag.startX, p.y - drag.startY);
      drag.box.x = b.x;
      drag.box.y = b.y;
      drag.box.w = b.w;
      drag.box.h = b.h;
    } else if (drag.mode === "move") {
      drag.box.x = drag.orig.x + (p.x - drag.startX);
      drag.box.y = drag.orig.y + (p.y - drag.startY);
      Lib.clampBox(drag.box, img.width, img.height);
    } else if (drag.mode === "resize") {
      const r = Lib.resize(drag.box, drag.dir, p.x, p.y);
      drag.box.x = r.x;
      drag.box.y = r.y;
      drag.box.w = r.w;
      drag.box.h = r.h;
    }
    redraw();
  }

  function onPointerUp() {
    if (drag.mode === "draw") {
      const img = currentImage();
      Lib.clampBox(drag.box, img.width, img.height);
      // Discard accidental click-without-drag boxes.
      if (drag.box.w * drag.box.h < 4) {
        removeBox(drag.box.id);
      }
    }
    if (drag.mode !== "idle") {
      drag = { mode: "idle", startX: 0, startY: 0 };
      afterChange();
    }
  }

  function updateCursor(ev) {
    const canvas = canvasEl();
    if (!canvas || !selectedId) {
      if (canvas) canvas.style.cursor = "crosshair";
      return;
    }
    const p = toImageCoords(ev);
    const sel = findBox(selectedId);
    const dir = sel ? Lib.handleAt(sel, p.x, p.y, p.displayScale) : null;
    const cursors = { nw: "nwse-resize", se: "nwse-resize", ne: "nesw-resize", sw: "nesw-resize" };
    canvas.style.cursor = dir ? cursors[dir] : sel && Lib.contains(sel, p.x, p.y) ? "move" : "crosshair";
  }

  function onKeyDown(ev) {
    if (ev.key === "Delete" || ev.key === "Backspace") {
      const active = document.activeElement;
      const typing = active && (active.tagName === "INPUT" || active.tagName === "SELECT");
      if (!typing && selectedId) {
        ev.preventDefault();
        removeBox(selectedId);
        selectedId = null;
        afterChange();
      }
    }
  }

  function onAddBox() {
    const img = currentImage();
    if (!img) return;
    const box = Lib.createBox({
      x: img.width / 2 - 40,
      y: img.height / 2 - 30,
      w: 80,
      h: 60,
      class: activeClass,
    });
    currentBoxes().push(box);
    selectedId = box.id;
    afterChange();
  }

  function onClearImage() {
    boxesByImage[currentId] = [];
    selectedId = null;
    afterChange();
  }

  // ---------------------------------------------------------------- box helpers
  function findBox(id) {
    return currentBoxes().find(function (b) {
      return b.id === id;
    });
  }

  function removeBox(id) {
    boxesByImage[currentId] = currentBoxes().filter(function (b) {
      return b.id !== id;
    });
  }

  function afterChange() {
    redraw();
    renderBoxTable();
    renderReview();
    renderImageList();
    save();
  }

  // ---------------------------------------------------------------- canvas draw
  function redraw() {
    const canvas = canvasEl();
    const img = currentImage();
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const bmp = imgCache[img.id];
    if (bmp) {
      ctx.drawImage(bmp, 0, 0, canvas.width, canvas.height);
    } else {
      ctx.fillStyle = "#eef2f4";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    currentBoxes().forEach(function (box) {
      const color = box.class && classColor[box.class] ? classColor[box.class] : "#c0392b";
      const selected = box.id === selectedId;
      ctx.lineWidth = selected ? 3 : 2;
      ctx.strokeStyle = color;
      ctx.strokeRect(box.x, box.y, box.w, box.h);
      ctx.fillStyle = hexToRgba(color, 0.14);
      ctx.fillRect(box.x, box.y, box.w, box.h);

      const label = box.class || "(no class)";
      ctx.font = "12px Source Sans 3, sans-serif";
      const tw = ctx.measureText(label).width + 8;
      ctx.fillStyle = color;
      ctx.fillRect(box.x, Math.max(0, box.y - 16), tw, 16);
      ctx.fillStyle = "#fff";
      ctx.fillText(label, box.x + 4, Math.max(11, box.y - 4));

      if (selected) {
        const hs = Lib.handles(box);
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "#1c2421";
        ctx.lineWidth = 1.5;
        Object.keys(hs).forEach(function (dir) {
          ctx.beginPath();
          ctx.rect(hs[dir].x - 4, hs[dir].y - 4, 8, 8);
          ctx.fill();
          ctx.stroke();
        });
      }
    });
  }

  function hexToRgba(hex, alpha) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!m) return "rgba(192,57,43," + alpha + ")";
    return "rgba(" + parseInt(m[1], 16) + "," + parseInt(m[2], 16) + "," + parseInt(m[3], 16) + "," + alpha + ")";
  }

  // ---------------------------------------------------------------- box table (a11y)
  function renderBoxTable() {
    const el = document.getElementById("box-table");
    if (!el) return;
    const boxes = currentBoxes();
    if (!boxes.length) {
      el.innerHTML = '<p class="an-hint">No boxes yet. Drag on the image or use “Add box”.</p>';
      return;
    }
    const options = classNames
      .map(function (c) {
        return '<option value="' + esc(c) + '">' + esc(c) + "</option>";
      })
      .join("");
    const rows = boxes
      .map(function (b, i) {
        const sel = b.id === selectedId ? " is-selected" : "";
        const classOpts =
          '<option value="">(no class)</option>' +
          options.replace(
            '<option value="' + esc(b.class) + '">',
            '<option value="' + esc(b.class) + '" selected>',
          );
        return (
          '<div class="an-box-row' +
          sel +
          '" data-box="' +
          esc(b.id) +
          '"><span class="an-box-idx">#' +
          (i + 1) +
          '</span><select data-field="class" aria-label="Class for box ' +
          (i + 1) +
          '">' +
          classOpts +
          "</select>" +
          numField(b, "x") +
          numField(b, "y") +
          numField(b, "w") +
          numField(b, "h") +
          '<button type="button" class="an-del" data-del="' +
          esc(b.id) +
          '" aria-label="Delete box ' +
          (i + 1) +
          '">✕</button></div>'
        );
      })
      .join("");
    el.innerHTML =
      '<div class="an-box-head"><span></span><span>class</span><span>x</span><span>y</span><span>w</span><span>h</span><span></span></div>' +
      rows;

    el.querySelectorAll(".an-box-row").forEach(function (rowEl) {
      const id = rowEl.getAttribute("data-box");
      rowEl.addEventListener("click", function (ev) {
        if (ev.target.tagName === "INPUT" || ev.target.tagName === "SELECT" || ev.target.tagName === "BUTTON") return;
        selectedId = id;
        afterChange();
      });
      rowEl.querySelector('[data-field="class"]').addEventListener("change", function (e) {
        const box = findBox(id);
        if (box) box.class = e.target.value || null;
        afterChange();
      });
      ["x", "y", "w", "h"].forEach(function (field) {
        rowEl.querySelector('[data-field="' + field + '"]').addEventListener("change", function (e) {
          const box = findBox(id);
          if (!box) return;
          box[field] = Number(e.target.value) || 0;
          const img = currentImage();
          Lib.clampBox(box, img.width, img.height);
          afterChange();
        });
      });
      rowEl.querySelector("[data-del]").addEventListener("click", function () {
        removeBox(id);
        if (selectedId === id) selectedId = null;
        afterChange();
      });
    });
  }

  function numField(box, field) {
    return (
      '<input type="number" data-field="' +
      field +
      '" value="' +
      Math.round(box[field]) +
      '" aria-label="' +
      field +
      '">'
    );
  }

  // ---------------------------------------------------------------- review gate
  function renderReview() {
    const el = document.getElementById("review");
    if (!el) return;
    const issues = validate(currentBoxes());
    if (!currentBoxes().length) {
      el.innerHTML = '<p class="an-hint">Draw at least one box to see the review checklist.</p>';
      return;
    }
    if (!issues.length) {
      el.innerHTML = '<p class="an-msg ok">✓ No issues found on this image — safe to export.</p>';
      return;
    }
    el.innerHTML =
      '<p class="an-msg warn">' +
      issues.length +
      " issue(s) to fix before scaling:</p><ul class=\"an-issues\">" +
      issues
        .map(function (m) {
          return "<li>" + esc(m) + "</li>";
        })
        .join("") +
      "</ul>";
  }

  /**
   * Detection review gate (mirrors eg:4.30 pre-scale audit).
   * @param {Array} boxes
   * @returns {string[]}
   */
  function validate(boxes) {
    const issues = [];
    boxes.forEach(function (b, i) {
      const tag = "Box #" + (i + 1);
      if (!b.class) {
        issues.push(tag + " has no class assigned.");
      } else if (classNames.indexOf(b.class) === -1) {
        issues.push(tag + ' uses "' + b.class + '", which is not in the guideline class list.');
      }
      if (b.w * b.h < MIN_AREA) {
        issues.push(tag + " is too small (likely an accidental click).");
      }
    });
    return issues;
  }

  // ---------------------------------------------------------------- export/import
  function exportImageObj(img) {
    return { id: img.id, name: img.file, width: img.width, height: img.height };
  }

  function onExportVoc() {
    const img = currentImage();
    if (!img) return;
    const xml = Lib.toVocXml(exportImageObj(img), currentBoxes());
    Lib.downloadText(img.id + ".xml", xml, "application/xml");
    showMessage("Exported VOC XML for " + img.name + ".", "ok");
  }

  function onExportCoco() {
    const exportImages = imageList.map(exportImageObj);
    const coco = Lib.toCoco(exportImages, boxesByImage, classNames);
    Lib.downloadJson(coco, "annotations-coco.json");
    showMessage("Exported COCO JSON for all images.", "ok");
  }

  function onImportCoco(ev) {
    const input = /** @type {HTMLInputElement} */ (ev.target);
    const file = input.files && input.files[0];
    if (!file) return;
    file.text().then(function (text) {
      try {
        const coco = JSON.parse(text);
        const byFile = Lib.fromCoco(coco);
        let restored = 0;
        imageList.forEach(function (img) {
          const boxes = byFile[img.file];
          if (boxes) {
            boxesByImage[img.id] = boxes.map(function (b) {
              return Lib.createBox(b);
            });
            restored += boxes.length;
          }
        });
        selectedId = null;
        afterChange();
        showMessage("Imported " + restored + " box(es) from COCO.", "ok");
      } catch (err) {
        showMessage("Could not parse COCO JSON: " + (err instanceof Error ? err.message : err), "err");
      }
    });
    input.value = "";
  }

  function showMessage(msg, kind) {
    const el = document.getElementById("an-messages");
    if (el) el.innerHTML = '<p class="an-msg ' + kind + '">' + esc(msg) + "</p>";
  }

  // ---------------------------------------------------------------- init
  load();
  render();
})();
