# Example 4.21 — Frame-by-Frame Labeling on Video

**Chapter:** 4  
**Label:** `eg:4.21`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.2.5` — Video Annotation Techniques

## Learning objective

Label surveillance video frames with object classes to support detection and multi-object tracking.

## Chapter context

Section 4.2.5 covers video techniques—Example 4.21 is frame-level class labels (person, car, bicycle) before track+activity Example 4.22 and clip activities in 4.23.

## What this example shows

In surveillance video, frames may receive labels such as person, car, or bicycle for detection and multi-object tracking.

## Key terms

- **Frame-level labeling** — Assigning classes per video frame independently or with track IDs.
- **Multi-object tracking (MOT)** — Following object identities across frames.
- **Surveillance schema** — Class inventory tuned to security analytics.

## What you should learn

### From the concept
- Video detection needs consistency across frames, not only per-image boxes.
- Tracking annotations link boxes through time.
- Example 4.8 motivates driving video; 4.21 is a surveillance technique view.

### From the output / result
- `run.sh` lists frame classes for detection/tracking.

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
cd modules/chapter4/example21
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Frame-by-frame video labeling:
- Surveillance frames labeled person, car, or bicycle
- Supports detection and multi-object tracking
```

## How to interpret the result

Decide early whether you need tracks or independent frame boxes—retrofitting IDs is expensive.

## Try it / Reflect

- When a car leaves the frame, does its track end or pause for re-entry?

## Related examples

- `eg:4.8` — Driving video motivation.
- `eg:4.22` — Tracks plus warehouse activity labels.
- `eg:4.23` — Clip-level activity distinct from frame objects.

## Notes

- Prose-only.
