# Annotation tool

Browser-based bounding-box labeling for Chapter 4 (Section 4.4.4, `eg:4.29`).
Draw boxes on sample or **uploaded** images, manage classes, review labels, and
download an annotated dataset (images + PASCAL VOC XML + COCO JSON).

**Live path:** `lectures/tools/annotation/index.html` (after `build_site.py`)

## Learning objectives

- Draw, move, resize, and delete bounding boxes
- **Undo / redo** (toolbar or Ctrl+Z / Ctrl+Y)
- **Zoom / pan** for large uploads (toolbar, Ctrl+wheel, Space+drag, Fit)
- Upload your own PNG / JPEG / WebP images
- Add and remove custom classes
- Read a pre-scale **review gate** (missing class, off-vocabulary labels, tiny boxes)
- Download an annotated dataset ZIP, or export VOC / COCO separately
- Re-import a COCO file to resume work

## Sample images

Three synthetic detection scenes ship as base64 PNG data URIs (works under `file://`):

| Image | Contents |
|-------|----------|
| `street-01` | One car, one person, one sign (warm-up) |
| `street-02` | Two cars, one person |
| `street-03` | One car, two people, two signs (denser) |

Default classes: **car**, **person**, **sign**. You can add/remove classes freely.

## Upload rules

- Formats: PNG, JPEG, WebP
- Max **5 MB** per image, up to **30** images total
- Uploaded images can be removed; sample scenes stay

## Download annotated dataset

**Download annotated dataset (.zip)** builds:

```
annotated-dataset.zip
  README.txt
  classes.json
  annotations-coco.json
  images/<filename>
  annotations/<stem>.xml
```

Also available: per-image VOC XML, all-images COCO JSON, and COCO import.

Work autosaves to `localStorage` (`anntool:v2`), including uploaded images when quota allows.

## Regenerate sample images

```bash
cd lectures/tools/annotation/data
python make_images.py
```

## Regenerate site page

```bash
python .cursor/skills/book-slides/scripts/build_site.py lectures/ --chapter 4
```

## Library modules (`lib/`)

| File | Role |
|------|------|
| `boxes.js` | Box model, hit-testing, resize, IoU |
| `voc.js` | PASCAL VOC XML serializer |
| `coco.js` | COCO JSON serializer + importer |
| `export.js` | Downloads + STORE-method ZIP builder |

## Manual QA checklist

- [ ] UI renders under `file://` and a static server
- [ ] Upload a PNG/JPEG; canvas matches its size; draw boxes
- [ ] Undo / redo restore prior boxes; Ctrl+Z / Ctrl+Y work
- [ ] Zoom in/out / Fit; Ctrl+wheel zooms toward cursor; Space+drag pans
- [ ] Add a custom class; assign it; remove a class (clears labels with confirm)
- [ ] Review flags missing class / tiny box
- [ ] ZIP contains images + VOC + COCO and opens in a zip tool
- [ ] COCO export → import round-trip restores boxes
