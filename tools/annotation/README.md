# Annotation mini-lab

Browser-based bounding-box labeling lab for Chapter 4 (Section 4.4.4, `eg:4.29`).
Draw boxes on synthetic street scenes, assign classes, review, and export
PASCAL VOC XML or COCO JSON — no install, no LabelImg required.

**Live path:** `lectures/tools/annotation/index.html` (after `build_site.py`)

## Learning objectives

- Draw, move, resize, and delete bounding boxes on sample images
- Assign classes from a fixed guideline vocabulary (schema discipline)
- Read a pre-scale **review gate** that flags missing/typo classes and tiny boxes (mirrors `eg:4.30`)
- Export detection labels in both PASCAL VOC XML and COCO JSON
- Re-import a COCO file to resume work

## Sample images

Three synthetic detection scenes are bundled as base64 PNG data URIs so the lab
works under `file://` and static hosting alike:

| Image | Contents |
|-------|----------|
| `street-01` | One car, one person, one sign (warm-up) |
| `street-02` | Two cars, one person |
| `street-03` | One car, two people, two signs (denser) |

Classes come from `data/guidelines.js`: **car**, **person**, **sign**. Each scene
also stores hidden ground-truth boxes (`truth`) for a possible future gold-set
audit feature; v1 does not reveal them.

## Interactions

- **Draw:** drag on the canvas to create a box with the active class.
- **Select / move:** click a box, then drag inside it.
- **Resize:** drag a corner handle of the selected box.
- **Delete:** press `Delete`/`Backspace`, or use the row `✕` button.
- **Keyboard path:** the box table under the canvas exposes class + numeric
  `x/y/w/h` fields for every box, so labeling is possible without drawing
  (accessibility fallback).

## Export / import

- **Export VOC (this image):** downloads `<image-id>.xml` (1-based inclusive
  pixel indices, LabelImg-compatible).
- **Export COCO (all):** downloads `annotations-coco.json` covering every image.
- **Import COCO:** restores boxes from a previously exported COCO file, matched
  by `file_name` (`<image-id>.png`).

Work autosaves to `localStorage` (`annlab:v1`) per browser.

## Regenerate sample images

```bash
cd lectures/tools/annotation/data
python make_images.py     # rewrites images-bundle.js (needs Pillow)
```

## Regenerate site page

```bash
python .cursor/skills/book-slides/scripts/build_site.py lectures/ --chapter 4
```

This refreshes `tools/annotation/index.html`, the tools hub, and the Chapter 4
"Try it" link; it does **not** overwrite `annotation.js`, `lib/`, `data/`, or
`annotation.css`.

## Library modules (`lib/`)

| File | Role |
|------|------|
| `boxes.js` | Box model, normalize/clamp, hit-testing, resize geometry, IoU |
| `voc.js` | PASCAL VOC XML serializer |
| `coco.js` | COCO JSON serializer + importer |
| `export.js` | Client-side download helpers |

All are classic (non-module) scripts attaching to `window.AnnLib`, and presets
are embedded in `data/*.js`, so the tool works under `file://` as well as
GitHub Pages.

## Manual QA checklist

- [ ] Open via `file://` or a static server — the lab UI renders (not a blank page)
- [ ] Each preset image renders on the canvas
- [ ] Draw, move, resize, delete all work; label follows the box
- [ ] Switching class chips recolors and reassigns the selected box
- [ ] Review flags a box with no class, an off-vocabulary class, and a tiny box
- [ ] VOC export opens as valid XML; COCO export opens as valid JSON
- [ ] Import COCO restores the same boxes (round-trip)
