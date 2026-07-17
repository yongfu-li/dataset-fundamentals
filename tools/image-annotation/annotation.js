/* Image annotation tool — browser bounding-box labeling for Chapter 4.
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

  const STORAGE_KEY = "anntool:v2";
  const MIN_AREA = 16;
  const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
  const MAX_IMAGES = 30;
  const CLASS_PALETTE = [
    "#2563af",
    "#d67928",
    "#2b8a3e",
    "#9b2c2c",
    "#6b4fbb",
    "#0f6b5c",
    "#b45309",
    "#1d4ed8",
    "#be185d",
    "#365314",
  ];

  /** @type {{name:string,color:string,rule:string,custom:boolean}[]} */
  let classes = (GUIDE.classes || []).map(function (c) {
    return {
      name: c.name,
      color: c.color,
      rule: c.rule || "",
      custom: false,
    };
  });

  /** @type {Record<string, string>} */
  let classColor = {};
  function syncClassColor() {
    classColor = {};
    classes.forEach(function (c) {
      classColor[c.name] = c.color;
    });
  }
  syncClassColor();

  function classNames() {
    return classes.map(function (c) {
      return c.name;
    });
  }

  // Ordered image list with a stable file name for exports/imports.
  /** @type {{id:string,name:string,file:string,width:number,height:number,dataUri:string,uploaded?:boolean}[]} */
  let imageList = Object.keys(IMAGES).map(function (id) {
    const img = IMAGES[id];
    return {
      id: id,
      name: img.name || id,
      file: id + ".png",
      width: img.width,
      height: img.height,
      dataUri: img.dataUri,
      uploaded: false,
    };
  });

  /** @type {Record<string, HTMLImageElement>} */
  const imgCache = {};
  /** @type {Record<string, Array>} */
  let boxesByImage = {};
  let currentId = imageList.length ? imageList[0].id : null;
  let activeClass = classNames()[0] || null;
  let selectedId = null;
  let uploadCounter = 0;

  /** @type {{mode:string, dir?:string, box?:object, startX:number, startY:number, orig?:object, panX?:number, panY?:number, scrollLeft?:number, scrollTop?:number}} */
  let drag = { mode: "idle", startX: 0, startY: 0 };

  /** Display scale: CSS pixels per image pixel. */
  let zoom = 1;
  const ZOOM_MIN = 0.1;
  const ZOOM_MAX = 8;
  const ZOOM_STEP = 1.25;
  const MAX_HISTORY = 50;
  /** @type {Record<string, {past: Array, future: Array}>} */
  const historyByImage = {};
  let spaceHeld = false;

  function currentImage() {
    return imageList.find(function (i) {
      return i.id === currentId;
    });
  }

  function currentBoxes() {
    if (!currentId) return [];
    if (!boxesByImage[currentId]) boxesByImage[currentId] = [];
    return boxesByImage[currentId];
  }

  function esc(text) {
    const el = document.createElement("div");
    el.textContent = String(text == null ? "" : text);
    return el.innerHTML;
  }

  // ---------------------------------------------------------------- undo / redo
  function cloneBoxes(boxes) {
    return JSON.parse(JSON.stringify(boxes || []));
  }

  function ensureHistory(id) {
    if (!historyByImage[id]) historyByImage[id] = { past: [], future: [] };
    return historyByImage[id];
  }

  /** Snapshot current image boxes before a mutating edit. */
  function pushHistory() {
    if (!currentId) return;
    const h = ensureHistory(currentId);
    h.past.push(cloneBoxes(boxesByImage[currentId]));
    if (h.past.length > MAX_HISTORY) h.past.shift();
    h.future = [];
    updateUndoButtons();
  }

  function undo() {
    if (!currentId) return;
    const h = ensureHistory(currentId);
    if (!h.past.length) return;
    h.future.push(cloneBoxes(boxesByImage[currentId]));
    boxesByImage[currentId] = h.past.pop();
    selectedId = null;
    afterChange({ skipHistory: true });
    updateUndoButtons();
  }

  function redo() {
    if (!currentId) return;
    const h = ensureHistory(currentId);
    if (!h.future.length) return;
    h.past.push(cloneBoxes(boxesByImage[currentId]));
    boxesByImage[currentId] = h.future.pop();
    selectedId = null;
    afterChange({ skipHistory: true });
    updateUndoButtons();
  }

  function updateUndoButtons() {
    const h = currentId ? ensureHistory(currentId) : { past: [], future: [] };
    const undoBtn = /** @type {HTMLButtonElement|null} */ (document.getElementById("undo-btn"));
    const redoBtn = /** @type {HTMLButtonElement|null} */ (document.getElementById("redo-btn"));
    if (undoBtn) undoBtn.disabled = !h.past.length;
    if (redoBtn) redoBtn.disabled = !h.future.length;
  }

  // ---------------------------------------------------------------- zoom
  function clampZoom(z) {
    return Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, z));
  }

  function applyZoom() {
    const canvas = canvasEl();
    const img = currentImage();
    if (!canvas || !img) return;
    canvas.style.width = Math.max(1, Math.round(img.width * zoom)) + "px";
    canvas.style.height = Math.max(1, Math.round(img.height * zoom)) + "px";
    updateZoomLabel();
  }

  function updateZoomLabel() {
    const btn = document.getElementById("zoom-label");
    if (btn) btn.textContent = Math.round(zoom * 100) + "%";
  }

  /** Fit the image inside the scroll viewport (never upscale past 100% by default). */
  function fitZoom() {
    const wrap = document.getElementById("an-canvas-wrap");
    const img = currentImage();
    if (!wrap || !img) return;
    const availW = Math.max(80, wrap.clientWidth - 4);
    const availH = Math.max(80, wrap.clientHeight - 4);
    zoom = clampZoom(Math.min(1, availW / img.width, availH / img.height));
    applyZoom();
  }

  function setZoom(next, anchorClientX, anchorClientY) {
    const wrap = document.getElementById("an-canvas-wrap");
    const canvas = canvasEl();
    if (!wrap || !canvas) {
      zoom = clampZoom(next);
      applyZoom();
      return;
    }
    const prev = zoom;
    zoom = clampZoom(next);
    if (zoom === prev) {
      updateZoomLabel();
      return;
    }

    // Keep the image point under the cursor stable while zooming.
    let relX = wrap.scrollLeft + wrap.clientWidth / 2;
    let relY = wrap.scrollTop + wrap.clientHeight / 2;
    if (anchorClientX != null && anchorClientY != null) {
      const rect = wrap.getBoundingClientRect();
      relX = wrap.scrollLeft + (anchorClientX - rect.left);
      relY = wrap.scrollTop + (anchorClientY - rect.top);
    }
    const ratio = zoom / prev;
    applyZoom();
    wrap.scrollLeft = relX * ratio - (anchorClientX != null ? anchorClientX - wrap.getBoundingClientRect().left : wrap.clientWidth / 2);
    wrap.scrollTop = relY * ratio - (anchorClientY != null ? anchorClientY - wrap.getBoundingClientRect().top : wrap.clientHeight / 2);
  }

  function zoomIn(ev) {
    setZoom(zoom * ZOOM_STEP, ev && ev.clientX, ev && ev.clientY);
  }

  function zoomOut(ev) {
    setZoom(zoom / ZOOM_STEP, ev && ev.clientX, ev && ev.clientY);
  }

  function zoomTo100() {
    setZoom(1);
  }

  // ---------------------------------------------------------------- persistence
  function save() {
    try {
      const uploaded = imageList
        .filter(function (i) {
          return i.uploaded;
        })
        .map(function (i) {
          return {
            id: i.id,
            name: i.name,
            file: i.file,
            width: i.width,
            height: i.height,
            dataUri: i.dataUri,
          };
        });
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          boxesByImage: boxesByImage,
          classes: classes,
          uploaded: uploaded,
          currentId: currentId,
          activeClass: activeClass,
        }),
      );
    } catch (err) {
      /* quota or file:// restrictions — ignore */
    }
  }

  function load() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.boxesByImage) boxesByImage = data.boxesByImage;
      if (Array.isArray(data.classes) && data.classes.length) {
        classes = data.classes.map(function (c) {
          return {
            name: String(c.name),
            color: c.color || CLASS_PALETTE[0],
            rule: c.rule || "",
            custom: !!c.custom,
          };
        });
        syncClassColor();
      }
      if (Array.isArray(data.uploaded)) {
        data.uploaded.forEach(function (u) {
          if (imageList.some(function (i) {
            return i.id === u.id;
          }))
            return;
          imageList.push({
            id: u.id,
            name: u.name,
            file: u.file,
            width: u.width,
            height: u.height,
            dataUri: u.dataUri,
            uploaded: true,
          });
        });
      }
      if (data.currentId && imageList.some(function (i) {
        return i.id === data.currentId;
      })) {
        currentId = data.currentId;
      }
      if (data.activeClass && classNames().indexOf(data.activeClass) !== -1) {
        activeClass = data.activeClass;
      } else {
        activeClass = classNames()[0] || null;
      }
    } catch (err) {
      boxesByImage = {};
    }
  }

  // ---------------------------------------------------------------- rendering
  function render() {
    root.innerHTML = [
      '<section class="an-hero">',
      "<h1>Image annotation</h1>",
      '<p class="lead">Draw bounding boxes on sample or uploaded images, manage classes, review labels, ',
      "then download an annotated dataset (images + PASCAL VOC + COCO JSON). ",
      'For sentiment / NER spans, use the <a href="../text-annotation/index.html">text annotation</a> tool.</p>',
      '<p class="an-book-ref">Chapter 4 · Section 4.4.4 · ',
      '<a href="../../modules/chapter4/example29/index.html">eg:4.29 LabelImg workflow</a></p>',
      "</section>",
      '<div class="an-layout">',
      '<aside class="an-panel an-side">',
      "<h2>1. Images</h2>",
      '<div class="an-images" id="image-list"></div>',
      '<label class="an-upload"><span class="btn btn-secondary">Upload images</span>',
      '<input type="file" id="file-input" accept="image/png,image/jpeg,image/webp,.png,.jpg,.jpeg,.webp" multiple hidden></label>',
      '<p class="an-hint">PNG / JPEG / WebP · max 5 MB each · up to ' + MAX_IMAGES + " images</p>",
      "<h2>2. Classes</h2>",
      '<div class="an-classes" id="class-list"></div>',
      '<div class="an-class-add">',
      '<input type="text" id="new-class-name" placeholder="New class name" maxlength="40" aria-label="New class name">',
      '<button type="button" class="btn btn-secondary" id="add-class">Add</button>',
      "</div>",
      '<details class="an-guide"><summary>Guidelines</summary><div id="guide-body"></div></details>',
      "</aside>",
      '<section class="an-panel an-stage">',
      "<h2>3. Draw</h2>",
      '<p class="an-hint">Drag to draw · corner handles to resize · Delete to remove · Ctrl+Z / Ctrl+Y undo/redo · Ctrl+wheel zoom · Space+drag or scroll to pan.</p>',
      '<div class="an-toolbar" id="stage-toolbar">',
      '<button type="button" class="btn btn-secondary" id="undo-btn" title="Ctrl+Z" disabled>Undo</button>',
      '<button type="button" class="btn btn-secondary" id="redo-btn" title="Ctrl+Y" disabled>Redo</button>',
      '<span class="an-toolbar-sep" aria-hidden="true"></span>',
      '<button type="button" class="btn btn-secondary" id="zoom-out" title="Zoom out">−</button>',
      '<button type="button" class="btn btn-secondary" id="zoom-label" title="Reset to 100%">100%</button>',
      '<button type="button" class="btn btn-secondary" id="zoom-in" title="Zoom in">+</button>',
      '<button type="button" class="btn btn-secondary" id="zoom-fit" title="Fit in view">Fit</button>',
      "</div>",
      '<div class="an-canvas-wrap" id="an-canvas-wrap">',
      '<canvas id="an-canvas" width="480" height="320" role="img" aria-label="Annotation canvas"></canvas>',
      "</div>",
      '<div class="an-actions">',
      '<button type="button" class="btn btn-secondary" id="add-box">Add box (keyboard)</button>',
      '<button type="button" class="btn btn-secondary" id="clear-image">Clear this image</button>',
      "</div>",
      "</section>",
      '<section class="an-panel an-review">',
      "<h2>4. Review &amp; download</h2>",
      '<div id="review" class="an-review-body"></div>',
      '<h3>Boxes on this image</h3>',
      '<div id="box-table" class="an-box-table"></div>',
      '<div class="an-actions">',
      '<button type="button" class="btn" id="export-dataset">Download annotated dataset (.zip)</button>',
      '<button type="button" class="btn btn-secondary" id="export-voc">Export VOC (this image)</button>',
      '<button type="button" class="btn btn-secondary" id="export-coco">Export COCO (all)</button>',
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
    if (currentId) {
      selectImage(currentId);
      // Fit after layout so the viewport has a real width.
      requestAnimationFrame(function () {
        fitZoom();
        redraw();
      });
    }
  }

  function renderImageList() {
    const el = document.getElementById("image-list");
    if (!el) return;
    el.innerHTML = imageList
      .map(function (img) {
        const n = (boxesByImage[img.id] || []).length;
        const remove = img.uploaded
          ? '<button type="button" class="an-img-remove" data-remove-image="' +
            esc(img.id) +
            '" aria-label="Remove ' +
            esc(img.name) +
            '">✕</button>'
          : "";
        return (
          '<div class="an-image-row">' +
          '<button type="button" class="an-image-card" data-image="' +
          esc(img.id) +
          '"><strong>' +
          esc(img.name) +
          '</strong><span class="an-hint">' +
          n +
          " box(es)" +
          (img.uploaded ? " · uploaded" : "") +
          "</span></button>" +
          remove +
          "</div>"
        );
      })
      .join("");
    el.querySelectorAll("[data-image]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectImage(btn.getAttribute("data-image"));
      });
    });
    el.querySelectorAll("[data-remove-image]").forEach(function (btn) {
      btn.addEventListener("click", function (ev) {
        ev.stopPropagation();
        removeImage(btn.getAttribute("data-remove-image"));
      });
    });
    document.querySelectorAll(".an-image-card").forEach(function (card) {
      card.classList.toggle("is-active", card.getAttribute("data-image") === currentId);
    });
  }

  function renderClassList() {
    const el = document.getElementById("class-list");
    if (!el) return;
    el.innerHTML = classes
      .map(function (c) {
        return (
          '<div class="an-class-row">' +
          '<button type="button" class="an-class-chip" data-class="' +
          esc(c.name) +
          '" title="' +
          esc(c.rule || c.name) +
          '"><span class="an-swatch" style="background:' +
          esc(c.color) +
          '"></span>' +
          esc(c.name) +
          "</button>" +
          '<button type="button" class="an-class-remove" data-remove-class="' +
          esc(c.name) +
          '" aria-label="Remove class ' +
          esc(c.name) +
          '">✕</button></div>'
        );
      })
      .join("");
    el.querySelectorAll("[data-class]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeClass = btn.getAttribute("data-class");
        if (selectedId) {
          const box = findBox(selectedId);
          if (box) {
            pushHistory();
            box.class = activeClass;
            afterChange({ skipHistory: true });
            return;
          }
        }
        highlightActiveClass();
        save();
      });
    });
    el.querySelectorAll("[data-remove-class]").forEach(function (btn) {
      btn.addEventListener("click", function (ev) {
        ev.stopPropagation();
        removeClass(btn.getAttribute("data-remove-class"));
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
    const perClass = classes
      .map(function (c) {
        const note = c.rule || (c.custom ? "Custom class" : "");
        return "<li><strong>" + esc(c.name) + ":</strong> " + esc(note) + "</li>";
      })
      .join("");
    el.innerHTML =
      "<p>" +
      esc(GUIDE.task || "Bounding-box detection") +
      "</p><ul>" +
      rules +
      "</ul><ul>" +
      perClass +
      "</ul>";
  }

  // ---------------------------------------------------------------- classes
  function nextClassColor() {
    return CLASS_PALETTE[classes.length % CLASS_PALETTE.length];
  }

  function sanitizeClassName(raw) {
    return String(raw || "")
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^A-Za-z0-9_\-]/g, "")
      .slice(0, 40);
  }

  function onAddClass() {
    const input = /** @type {HTMLInputElement|null} */ (document.getElementById("new-class-name"));
    const name = sanitizeClassName(input ? input.value : "");
    if (!name) {
      showMessage("Enter a class name (letters, numbers, _ or -).", "err");
      return;
    }
    if (classNames().indexOf(name) !== -1) {
      showMessage('Class "' + name + '" already exists.', "err");
      return;
    }
    classes.push({
      name: name,
      color: nextClassColor(),
      rule: "Custom class",
      custom: true,
    });
    syncClassColor();
    activeClass = name;
    if (input) input.value = "";
    renderClassList();
    renderGuide();
    renderBoxTable();
    save();
    showMessage('Added class "' + name + '".', "ok");
  }

  function removeClass(name) {
    if (!name) return;
    let used = 0;
    Object.keys(boxesByImage).forEach(function (id) {
      (boxesByImage[id] || []).forEach(function (b) {
        if (b.class === name) used += 1;
      });
    });
    if (used > 0) {
      const ok = window.confirm(
        'Class "' +
          name +
          '" is used on ' +
          used +
          " box(es). Remove it and clear those labels?",
      );
      if (!ok) return;
      if (currentId) pushHistory();
      Object.keys(boxesByImage).forEach(function (id) {
        (boxesByImage[id] || []).forEach(function (b) {
          if (b.class === name) b.class = null;
        });
      });
    }
    classes = classes.filter(function (c) {
      return c.name !== name;
    });
    syncClassColor();
    if (activeClass === name) activeClass = classNames()[0] || null;
    renderClassList();
    renderGuide();
    afterChange({ skipHistory: true });
    showMessage('Removed class "' + name + '".', "ok");
  }

  // ---------------------------------------------------------------- image upload / remove
  function onFileUpload(ev) {
    const input = /** @type {HTMLInputElement} */ (ev.target);
    const files = input.files ? Array.from(input.files) : [];
    if (!files.length) return;
    let remaining = MAX_IMAGES - imageList.length;
    if (remaining <= 0) {
      showMessage("Image limit reached (" + MAX_IMAGES + "). Remove some first.", "err");
      input.value = "";
      return;
    }
    const toLoad = files.slice(0, remaining);
    let loaded = 0;
    let failed = 0;

    toLoad.forEach(function (file) {
      if (!/^image\/(png|jpeg|webp)$/i.test(file.type) && !/\.(png|jpe?g|webp)$/i.test(file.name)) {
        failed += 1;
        return;
      }
      if (file.size > MAX_UPLOAD_BYTES) {
        failed += 1;
        showMessage(file.name + " exceeds 5 MB.", "err");
        return;
      }
      const reader = new FileReader();
      reader.onload = function () {
        const dataUri = String(reader.result || "");
        const el = new Image();
        el.onload = function () {
          uploadCounter += 1;
          const id = "upload-" + Date.now().toString(36) + "-" + uploadCounter;
          const safeName = file.name.replace(/[^\w.\-]+/g, "_");
          imageList.push({
            id: id,
            name: file.name,
            file: safeName || id + ".png",
            width: el.naturalWidth,
            height: el.naturalHeight,
            dataUri: dataUri,
            uploaded: true,
          });
          imgCache[id] = el;
          boxesByImage[id] = [];
          loaded += 1;
          if (loaded + failed >= toLoad.length) finishUploads(loaded, failed, id);
        };
        el.onerror = function () {
          failed += 1;
          if (loaded + failed >= toLoad.length) finishUploads(loaded, failed, null);
        };
        el.src = dataUri;
      };
      reader.onerror = function () {
        failed += 1;
        if (loaded + failed >= toLoad.length) finishUploads(loaded, failed, null);
      };
      reader.readAsDataURL(file);
    });

    if (!toLoad.length) input.value = "";
  }

  function finishUploads(loaded, failed, lastId) {
    const input = /** @type {HTMLInputElement|null} */ (document.getElementById("file-input"));
    if (input) input.value = "";
    renderImageList();
    if (lastId) selectImage(lastId);
    save();
    if (loaded) {
      showMessage(
        "Uploaded " + loaded + " image(s)" + (failed ? "; " + failed + " skipped" : "") + ".",
        failed ? "warn" : "ok",
      );
    } else if (failed) {
      showMessage("No images uploaded (" + failed + " skipped).", "err");
    }
  }

  function removeImage(id) {
    const img = imageList.find(function (i) {
      return i.id === id;
    });
    if (!img || !img.uploaded) return;
    imageList = imageList.filter(function (i) {
      return i.id !== id;
    });
    delete boxesByImage[id];
    delete imgCache[id];
    if (currentId === id) {
      currentId = imageList.length ? imageList[0].id : null;
      selectedId = null;
      if (currentId) selectImage(currentId);
      else {
        renderImageList();
        clearCanvas();
        renderBoxTable();
        renderReview();
      }
    } else {
      renderImageList();
    }
    save();
  }

  function clearCanvas() {
    const canvas = canvasEl();
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // ---------------------------------------------------------------- image select
  function selectImage(id) {
    if (!id) return;
    currentId = id;
    selectedId = null;
    const img = currentImage();
    const canvas = canvasEl();
    if (canvas && img) {
      canvas.width = img.width;
      canvas.height = img.height;
    }
    document.querySelectorAll(".an-image-card").forEach(function (card) {
      card.classList.toggle("is-active", card.getAttribute("data-image") === id);
    });
    if (img && !imgCache[id]) {
      const el = new Image();
      el.onload = function () {
        imgCache[id] = el;
        fitZoom();
        redraw();
      };
      el.src = img.dataUri;
    } else {
      fitZoom();
    }
    afterChange({ skipHistory: true });
    updateUndoButtons();
  }

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
    const wrap = document.getElementById("an-canvas-wrap");
    if (!canvas) return;
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    if (wrap) {
      wrap.addEventListener(
        "wheel",
        function (ev) {
          if (!ev.ctrlKey && !ev.metaKey) return;
          ev.preventDefault();
          const factor = ev.deltaY < 0 ? ZOOM_STEP : 1 / ZOOM_STEP;
          setZoom(zoom * factor, ev.clientX, ev.clientY);
        },
        { passive: false },
      );
      wrap.addEventListener("pointerdown", onWrapPointerDown);
    }
    document.getElementById("add-box")?.addEventListener("click", onAddBox);
    document.getElementById("clear-image")?.addEventListener("click", onClearImage);
    document.getElementById("undo-btn")?.addEventListener("click", undo);
    document.getElementById("redo-btn")?.addEventListener("click", redo);
    document.getElementById("zoom-in")?.addEventListener("click", function () {
      zoomIn();
    });
    document.getElementById("zoom-out")?.addEventListener("click", function () {
      zoomOut();
    });
    document.getElementById("zoom-label")?.addEventListener("click", zoomTo100);
    document.getElementById("zoom-fit")?.addEventListener("click", fitZoom);
    document.getElementById("export-voc")?.addEventListener("click", onExportVoc);
    document.getElementById("export-coco")?.addEventListener("click", onExportCoco);
    document.getElementById("export-dataset")?.addEventListener("click", onExportDataset);
    document.getElementById("import-coco")?.addEventListener("change", onImportCoco);
    document.getElementById("file-input")?.addEventListener("change", onFileUpload);
    document.getElementById("add-class")?.addEventListener("click", onAddClass);
    document.getElementById("new-class-name")?.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter") {
        ev.preventDefault();
        onAddClass();
      }
    });
    updateUndoButtons();
    updateZoomLabel();
  }

  function onWrapPointerDown(ev) {
    // Middle-click pan from the scroll viewport (works even on empty margins).
    if (ev.button === 1 || (spaceHeld && ev.button === 0)) {
      const wrap = document.getElementById("an-canvas-wrap");
      if (!wrap) return;
      ev.preventDefault();
      wrap.setPointerCapture(ev.pointerId);
      drag = {
        mode: "pan",
        startX: ev.clientX,
        startY: ev.clientY,
        scrollLeft: wrap.scrollLeft,
        scrollTop: wrap.scrollTop,
      };
    }
  }

  function onPointerDown(ev) {
    if (!currentImage()) return;
    const canvas = canvasEl();
    if (!canvas) return;

    // Space+drag or middle-click pans instead of drawing.
    if (ev.button === 1 || (spaceHeld && ev.button === 0)) {
      const wrap = document.getElementById("an-canvas-wrap");
      if (!wrap) return;
      ev.preventDefault();
      canvas.setPointerCapture(ev.pointerId);
      drag = {
        mode: "pan",
        startX: ev.clientX,
        startY: ev.clientY,
        scrollLeft: wrap.scrollLeft,
        scrollTop: wrap.scrollTop,
      };
      return;
    }
    if (ev.button !== 0) return;

    canvas.setPointerCapture(ev.pointerId);
    const p = toImageCoords(ev);
    const boxes = currentBoxes();

    if (selectedId) {
      const sel = findBox(selectedId);
      if (sel) {
        const dir = Lib.handleAt(sel, p.x, p.y, p.displayScale);
        if (dir) {
          drag = {
            mode: "resize",
            dir: dir,
            box: sel,
            startX: p.x,
            startY: p.y,
            orig: { x: sel.x, y: sel.y, w: sel.w, h: sel.h },
            pendingHistory: true,
          };
          return;
        }
      }
    }

    for (let i = boxes.length - 1; i >= 0; i -= 1) {
      if (Lib.contains(boxes[i], p.x, p.y)) {
        selectedId = boxes[i].id;
        drag = {
          mode: "move",
          box: boxes[i],
          startX: p.x,
          startY: p.y,
          orig: { x: boxes[i].x, y: boxes[i].y, w: boxes[i].w, h: boxes[i].h },
          pendingHistory: true,
        };
        afterChange({ skipHistory: true });
        return;
      }
    }

    if (!activeClass) {
      showMessage("Add or select a class before drawing.", "warn");
      return;
    }
    pushHistory();
    const box = Lib.createBox({ x: p.x, y: p.y, w: 0, h: 0, class: activeClass });
    boxes.push(box);
    selectedId = box.id;
    drag = { mode: "draw", box: box, startX: p.x, startY: p.y };
    redraw();
  }

  function onPointerMove(ev) {
    if (drag.mode === "pan") {
      const wrap = document.getElementById("an-canvas-wrap");
      if (!wrap) return;
      wrap.scrollLeft = (drag.scrollLeft || 0) - (ev.clientX - drag.startX);
      wrap.scrollTop = (drag.scrollTop || 0) - (ev.clientY - drag.startY);
      return;
    }
    if (drag.mode === "idle") {
      updateCursor(ev);
      return;
    }
    const p = toImageCoords(ev);
    const img = currentImage();
    if (!img) return;
    if (drag.mode === "draw") {
      const b = Lib.normalize(drag.startX, drag.startY, p.x - drag.startX, p.y - drag.startY);
      drag.box.x = b.x;
      drag.box.y = b.y;
      drag.box.w = b.w;
      drag.box.h = b.h;
    } else if (drag.mode === "move") {
      if (drag.pendingHistory) {
        pushHistory();
        drag.pendingHistory = false;
      }
      drag.box.x = drag.orig.x + (p.x - drag.startX);
      drag.box.y = drag.orig.y + (p.y - drag.startY);
      Lib.clampBox(drag.box, img.width, img.height);
    } else if (drag.mode === "resize") {
      if (drag.pendingHistory) {
        pushHistory();
        drag.pendingHistory = false;
      }
      const r = Lib.resize(
        { x: drag.orig.x, y: drag.orig.y, w: drag.orig.w, h: drag.orig.h },
        drag.dir,
        p.x,
        p.y,
      );
      drag.box.x = r.x;
      drag.box.y = r.y;
      drag.box.w = r.w;
      drag.box.h = r.h;
      Lib.clampBox(drag.box, img.width, img.height);
    }
    redraw();
  }

  function onPointerUp() {
    if (drag.mode === "draw") {
      const img = currentImage();
      if (img) Lib.clampBox(drag.box, img.width, img.height);
      if (drag.box.w * drag.box.h < 4) removeBox(drag.box.id);
    }
    if (drag.mode !== "idle") {
      const wasPan = drag.mode === "pan";
      drag = { mode: "idle", startX: 0, startY: 0 };
      if (!wasPan) afterChange({ skipHistory: true });
    }
  }

  function updateCursor(ev) {
    const canvas = canvasEl();
    if (!canvas) return;
    if (spaceHeld) {
      canvas.style.cursor = "grab";
      return;
    }
    if (!selectedId) {
      canvas.style.cursor = "crosshair";
      return;
    }
    const p = toImageCoords(ev);
    const sel = findBox(selectedId);
    const dir = sel ? Lib.handleAt(sel, p.x, p.y, p.displayScale) : null;
    const cursors = { nw: "nwse-resize", se: "nwse-resize", ne: "nesw-resize", sw: "nesw-resize" };
    canvas.style.cursor = dir
      ? cursors[dir]
      : sel && Lib.contains(sel, p.x, p.y)
        ? "move"
        : "crosshair";
  }

  function onKeyUp(ev) {
    if (ev.code === "Space") {
      spaceHeld = false;
      const canvas = canvasEl();
      if (canvas && drag.mode === "idle") canvas.style.cursor = "crosshair";
    }
  }

  function onKeyDown(ev) {
    const active = document.activeElement;
    const typing =
      active &&
      (active.tagName === "INPUT" || active.tagName === "SELECT" || active.tagName === "TEXTAREA");

    if (ev.code === "Space" && !typing) {
      spaceHeld = true;
      const canvas = canvasEl();
      if (canvas) canvas.style.cursor = "grab";
      ev.preventDefault();
      return;
    }

    if ((ev.ctrlKey || ev.metaKey) && !typing) {
      const key = ev.key.toLowerCase();
      if (key === "z" && !ev.shiftKey) {
        ev.preventDefault();
        undo();
        return;
      }
      if (key === "y" || (key === "z" && ev.shiftKey)) {
        ev.preventDefault();
        redo();
        return;
      }
      if (key === "=" || key === "+") {
        ev.preventDefault();
        zoomIn();
        return;
      }
      if (key === "-" || key === "_") {
        ev.preventDefault();
        zoomOut();
        return;
      }
      if (key === "0") {
        ev.preventDefault();
        fitZoom();
        return;
      }
    }

    if (ev.key === "Delete" || ev.key === "Backspace") {
      if (!typing && selectedId) {
        ev.preventDefault();
        pushHistory();
        removeBox(selectedId);
        selectedId = null;
        afterChange({ skipHistory: true });
      }
    }
  }

  function onAddBox() {
    const img = currentImage();
    if (!img) {
      showMessage("Load or upload an image first.", "err");
      return;
    }
    if (!activeClass) {
      showMessage("Add or select a class first.", "warn");
      return;
    }
    pushHistory();
    const box = Lib.createBox({
      x: img.width / 2 - 40,
      y: img.height / 2 - 30,
      w: Math.min(80, img.width / 4),
      h: Math.min(60, img.height / 4),
      class: activeClass,
    });
    currentBoxes().push(box);
    selectedId = box.id;
    afterChange({ skipHistory: true });
  }

  function onClearImage() {
    if (!currentId) return;
    pushHistory();
    boxesByImage[currentId] = [];
    selectedId = null;
    afterChange({ skipHistory: true });
  }

  function findBox(id) {
    return currentBoxes().find(function (b) {
      return b.id === id;
    });
  }

  function removeBox(id) {
    if (!currentId) return;
    boxesByImage[currentId] = currentBoxes().filter(function (b) {
      return b.id !== id;
    });
  }

  function afterChange(opts) {
    opts = opts || {};
    redraw();
    applyZoom();
    renderBoxTable();
    renderReview();
    renderImageList();
    updateUndoButtons();
    if (!opts.skipHistory) {
      /* history is pushed explicitly before mutations */
    }
    save();
  }

  // ---------------------------------------------------------------- canvas draw
  function redraw() {
    const canvas = canvasEl();
    const img = currentImage();
    if (!canvas || !img) return;
    if (canvas.width !== img.width || canvas.height !== img.height) {
      canvas.width = img.width;
      canvas.height = img.height;
    }
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
    return (
      "rgba(" +
      parseInt(m[1], 16) +
      "," +
      parseInt(m[2], 16) +
      "," +
      parseInt(m[3], 16) +
      "," +
      alpha +
      ")"
    );
  }

  // ---------------------------------------------------------------- box table
  function renderBoxTable() {
    const el = document.getElementById("box-table");
    if (!el) return;
    const boxes = currentBoxes();
    if (!boxes.length) {
      el.innerHTML = '<p class="an-hint">No boxes yet. Drag on the image or use “Add box”.</p>';
      return;
    }
    const options = classNames()
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
        if (
          ev.target.tagName === "INPUT" ||
          ev.target.tagName === "SELECT" ||
          ev.target.tagName === "BUTTON"
        )
          return;
        selectedId = id;
        afterChange({ skipHistory: true });
      });
      rowEl.querySelector('[data-field="class"]').addEventListener("change", function (e) {
        const box = findBox(id);
        if (!box) return;
        pushHistory();
        box.class = e.target.value || null;
        afterChange({ skipHistory: true });
      });
      ["x", "y", "w", "h"].forEach(function (field) {
        rowEl.querySelector('[data-field="' + field + '"]').addEventListener("change", function (e) {
          const box = findBox(id);
          if (!box) return;
          pushHistory();
          box[field] = Number(e.target.value) || 0;
          const img = currentImage();
          if (img) Lib.clampBox(box, img.width, img.height);
          afterChange({ skipHistory: true });
        });
      });
      rowEl.querySelector("[data-del]").addEventListener("click", function () {
        pushHistory();
        removeBox(id);
        if (selectedId === id) selectedId = null;
        afterChange({ skipHistory: true });
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

  // ---------------------------------------------------------------- review
  function renderReview() {
    const el = document.getElementById("review");
    if (!el) return;
    const boxes = currentBoxes();
    const issues = validate(boxes);
    if (!boxes.length) {
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
      ' issue(s) to fix before scaling:</p><ul class="an-issues">' +
      issues
        .map(function (m) {
          return "<li>" + esc(m) + "</li>";
        })
        .join("") +
      "</ul>";
  }

  function validate(boxes) {
    const issues = [];
    const names = classNames();
    boxes.forEach(function (b, i) {
      const tag = "Box #" + (i + 1);
      if (!b.class) issues.push(tag + " has no class assigned.");
      else if (names.indexOf(b.class) === -1) {
        issues.push(tag + ' uses "' + b.class + '", which is not in the class list.');
      }
      if (b.w * b.h < MIN_AREA) issues.push(tag + " is too small (likely an accidental click).");
    });
    return issues;
  }

  // ---------------------------------------------------------------- export / import
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
    const coco = Lib.toCoco(exportImages, boxesByImage, classNames());
    Lib.downloadJson(coco, "annotations-coco.json");
    showMessage("Exported COCO JSON for all images.", "ok");
  }

  function onExportDataset() {
    if (!imageList.length) {
      showMessage("No images to export.", "err");
      return;
    }
    try {
      const exportImages = imageList.map(exportImageObj);
      const coco = Lib.toCoco(exportImages, boxesByImage, classNames());
      const entries = [
        {
          name: "README.txt",
          data:
            "Annotated dataset from the Image annotation tool (Chapter 4).\n" +
            "images/     — source images\n" +
            "annotations/ — PASCAL VOC XML (one file per image)\n" +
            "annotations-coco.json — COCO detection format\n" +
            "classes.json — class list used for this export\n",
        },
        {
          name: "classes.json",
          data: JSON.stringify(
            classes.map(function (c) {
              return { name: c.name, color: c.color };
            }),
            null,
            2,
          ),
        },
        {
          name: "annotations-coco.json",
          data: JSON.stringify(coco, null, 2),
        },
      ];

      imageList.forEach(function (img) {
        entries.push({
          name: "images/" + img.file,
          data: Lib.dataUriToBytes(img.dataUri),
        });
        const xml = Lib.toVocXml(exportImageObj(img), boxesByImage[img.id] || []);
        const stem = img.file.replace(/\.[^.]+$/, "");
        entries.push({
          name: "annotations/" + stem + ".xml",
          data: xml,
        });
      });

      Lib.downloadZip("annotated-dataset.zip", entries);
      showMessage("Downloaded annotated-dataset.zip (images + VOC + COCO).", "ok");
    } catch (err) {
      showMessage(
        "Could not build dataset zip: " + (err instanceof Error ? err.message : String(err)),
        "err",
      );
    }
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
        // Import any COCO categories missing from the class list.
        (coco.categories || []).forEach(function (cat) {
          if (!cat.name || classNames().indexOf(cat.name) !== -1) return;
          classes.push({
            name: sanitizeClassName(cat.name) || cat.name,
            color: nextClassColor(),
            rule: "Imported from COCO",
            custom: true,
          });
        });
        syncClassColor();
        selectedId = null;
        if (currentId) pushHistory();
        renderClassList();
        renderGuide();
        afterChange({ skipHistory: true });
        showMessage("Imported " + restored + " box(es) from COCO.", "ok");
      } catch (err) {
        showMessage(
          "Could not parse COCO JSON: " + (err instanceof Error ? err.message : err),
          "err",
        );
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
