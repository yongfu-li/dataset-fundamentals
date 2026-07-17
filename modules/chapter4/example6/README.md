# Example 4.6 — Image Annotation for Facial Landmarks

**Chapter:** 4  
**Label:** `eg:4.6`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.1.2` — Examples of Annotated Data

## Learning objective

Explain facial landmark annotation for pose alignment and identity models.

## Chapter context

Landmarking is the third image format in Section 4.1.2 after boxes and masks—keypoints rather than regions.

## What this example shows

Annotators mark keypoints such as eye corners, nose tip, and mouth landmarks so pose and identity models can align faces across images.

## Key terms

- **Landmark / keypoint** — A fixed semantic point on an object (e.g., eye corner).
- **Face alignment** — Registering faces to a canonical pose using landmarks.
- **Landmarking** — Collecting ordered keypoints per instance.

## What you should learn

### From the concept
- Landmarks enable alignment under pose and lighting change.
- Point consistency across annotators matters as much as box tightness.
- Example 4.16 develops the same technique in Section 4.2.3.

### From the output / result
- `run.sh` lists key facial points and their downstream uses.

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
cd modules/chapter4/example6
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Facial landmarks:
- Mark keypoints: eye corners, nose tip, mouth landmarks
- Enables pose and identity models to align faces across images
```

## How to interpret the result

Automated face pipelines fail on underrepresented phenotypes when landmarks are trained on narrow cohorts—connect to Chapter 7 fairness checks.

## Try it / Reflect

- How many landmarks would you require minimum for a smile-detection vs face-verification task?

## Related examples

- `eg:4.16` — Landmark technique subsection example.
- `eg:4.5` — Denser region labels vs sparse points.
- `eg:4.14` — Box detection as an alternative image label format.

## Notes

- Prose-only.
