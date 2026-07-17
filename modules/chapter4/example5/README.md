# Example 4.5 — Image Annotation for Medical Images

**Chapter:** 4  
**Label:** `eg:4.5`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.1.2` — Examples of Annotated Data

## Learning objective

Contrast medical segmentation with coarse boxes by outlining tumors or organs at pixel precision.

## Chapter context

Example 4.5 illustrates clinical annotation where boundary accuracy matters for diagnosis support—not just object presence.

## What this example shows

Semantic or instance segmentation outlines tumors or organs so models learn precise boundaries rather than coarse boxes alone.

## Key terms

- **Semantic segmentation** — Pixel-level class assignment across the image.
- **Instance segmentation** — Separating individual object instances at pixel precision.
- **Clinical gold labels** — Expert-reviewed outlines where boundary error has patient-safety implications.

## What you should learn

### From the concept
- Medical imaging often needs contours, not boxes alone.
- Segmentation annotation is slower and needs domain experts.
- Example 4.15 repeats the technique view in Section 4.2.3.

### From the output / result
- `run.sh` emphasizes pixel-level tumor/organ boundaries vs boxes.

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
cd modules/chapter4/example5
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Medical image annotation:
- Outline tumors or organs (semantic/instance segmentation)
- Models learn precise boundaries, not only coarse boxes
Clinical gold labels usually need expert review.
```

## How to interpret the result

A slack boundary in a lesion mask teaches the wrong decision surface—treat clinical QC as governance, not polish.

## Try it / Reflect

- When would a box be acceptable vs a required mask for a lung nodule task?

## Related examples

- `eg:4.15` — Tumor contour technique example.
- `eg:4.32` — Gold-set precision/recall for annotator audit.
- `eg:4.7` — Expert audio labeling parallel in clinical domains.

## Notes

- Prose-only. Expert review expected for clinical gold.
