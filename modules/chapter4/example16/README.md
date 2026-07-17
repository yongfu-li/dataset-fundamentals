# Example 4.16 — Landmarking on Faces

**Chapter:** 4  
**Label:** `eg:4.16`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.2.3` — Image Annotation Techniques

## Learning objective

Mark facial landmarks so alignment and expression models register faces across pose and lighting.

## Chapter context

Example 4.16 develops landmarking in Section 4.2.3—eyes, nose tip, and mouth corners for registration pipelines.

## What this example shows

Annotators mark eyes, nose tip, and mouth corners so alignment and expression models can register faces across poses and lighting.

## Key terms

- **Facial registration** — Warping faces to a canonical coordinate frame using landmarks.
- **Expression modeling** — Using consistent points to compare facial motion.
- **Inter-annotator point variance** — Pixel disagreement on keypoints affecting alignment quality.

## What you should learn

### From the concept
- Landmark order and count must be fixed in the schema.
- Pose extremes stress annotation consistency.
- Automated pre-labels still need human correction on edge poses.

### From the output / result
- `run.sh` lists landmark locations and downstream uses.

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
cd modules/chapter4/example16
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Landmarking on faces:
- Mark eyes, nose tip, mouth corners
- Alignment and expression models register faces across poses and lighting
```

## How to interpret the result

Treat landmark QC like detection QC—measure gold agreement before training identity models.

## Try it / Reflect

- How many missing landmarks make a face sample unusable for your pipeline?

## Related examples

- `eg:4.6` — Landmark motivation in Section 4.1.2.
- `eg:4.14` — Box detection vs point landmarks.
- `eg:4.32` — Separating labeler metrics from detector test scores.

## Notes

- Prose-only.
