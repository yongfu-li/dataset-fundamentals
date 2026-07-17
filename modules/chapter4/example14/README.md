# Example 4.14 — Bounding Boxes for Detection

**Chapter:** 4  
**Label:** `eg:4.14`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.2.3` — Image Annotation Techniques

## Learning objective

Specify axis-aligned detection boxes with per-instance class labels for driving corpora.

## Chapter context

Section 4.2.3 states the image technique view of the same detection pattern introduced in Example 4.4—boxes for cars, people, and signs.

## What this example shows

In a self-driving corpus, axis-aligned boxes enclose cars, people, and road signs with a class label on each instance—the primary format for many detection datasets.

## Key terms

- **Axis-aligned box** — Rectangle with edges parallel to image axes.
- **Instance label** — One class per detected object instance.
- **Detection corpus** — Image set with box annotations for object detection training.

## What you should learn

### From the concept
- Box tightness and occlusion rules belong in written guidelines.
- Class inventories must match export checks before scale-up.
- Example 4.29 walks a minimal LabelImg path to produce these exports.

### From the output / result
- `run.sh` lists box geometry and class labels for detection.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op installer |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter4/example14
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Bounding boxes for detection:
- Axis-aligned rectangles around cars, people, road signs
- Class label on each instance
Primary format for many object-detection corpora.
```

## How to interpret the result

Run Example 4.29’s export review on 10 images before labeling 10,000—Example 4.30 shows naming drift destroys signal.

## Try it / Reflect

- Define ‘tight box’ vs ‘loose box’ with one positive and one negative image example.

## Related examples

- `eg:4.4` — Driving-scene motivation example.
- `eg:4.29` — LabelImg box workflow and VOC export.
- `eg:4.30` — Class-name inconsistency failure mode.

## Notes

- Prose-only.
