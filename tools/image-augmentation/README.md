# Image augmentation lab

Browser lab for **Chapter 10** — classic **image augmentation** (flip, rotate,
color jitter, crop, noise, blur). No GAN / diffusion training.

**Live path:** `lectures/tools/image-augmentation/index.html` (after `build_site.py`)

Sibling: [`../text-augmentation/`](../text-augmentation/) · label boxes with
[`../image-annotation/`](../image-annotation/).

## Sample scenes

Six drawn teaching photos (PNG data URIs, `file://` safe)—not camera RAW, but
more realistic than flat shape demos:

| Preset | Contents |
|--------|----------|
| `street-day` | Road, car, pedestrian, sign |
| `product-desk` | Packshot on wood desk |
| `warehouse-shelf` | Boxes on racks + forklift |
| `outdoor-path` | Path, hills, tree |
| `storefront` | Shop facade / sidewalk |
| `receipt-scan` | Document scan with stain |

Regenerate:

```bash
cd lectures/tools/image-augmentation/data
python make_images.py
```

## Learning objectives

- See how geometric and photometric transforms create new training *views*
- Compare methods on the same source image
- Export PNG variants + a reproducible recipe
- Remember: do not augment the held-out test set

## Methods

Flip H/V, rotate 90/180, brightness/contrast, grayscale, pixel noise, color jitter,
crop+zoom, box blur, random pipeline (2–3 ops).

## Upload rules

- PNG / JPEG / WebP, max **5 MB**, resized to max **480px** side in-browser

## Export

- `augmented-images.zip` (images/ + recipe + README)
- `augmentation-recipe.json` / `.md`

## Book anchors

- §10.6 / `eg:10.16` computer-vision augmentation spirit
- Distinguish from deep generative synthesis (GANs / LLMs elsewhere in Ch.10)

## QA checklist

- [ ] Presets load; random pipeline shows multiple ops in captions
- [ ] Same seed reproduces the same variants
- [ ] Upload works; ZIP opens with PNGs + recipe
