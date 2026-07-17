# Example 4.23 — Activity Recognition on Video

**Chapter:** 4  
**Label:** `eg:4.23`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.2.5` — Video Annotation Techniques

## Learning objective

Assign clip-level activity labels (pass, shot, foul) distinct from per-frame player boxes in sports video.

## Chapter context

Example 4.23 highlights activity recognition over an interval—even when players already have per-frame detections.

## What this example shows

A sports clip may be labeled ‘pass’, ‘shot’, or ‘foul’ over a time interval even when individual players already have per-frame boxes—clip-level behavior schema.

## Key terms

- **Activity recognition** — Classifying behaviors over temporal segments.
- **Clip-level label** — Tag attached to a time range, not a single frame.
- **Behavior schema** — Defined set of actions (pass, shot, foul) with boundary rules.

## What you should learn

### From the concept
- Activities are orthogonal to object detection labels.
- Interval boundaries (when foul starts/ends) need guidelines.
- Sports and surveillance both use activities with different class sets.

### From the output / result
- `run.sh` contrasts clip activities with existing per-frame boxes.

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
cd modules/chapter4/example23
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Activity recognition:
- Sports clip labeled “pass”, “shot”, or “foul” over a time interval
- Even when individual players already have per-frame boxes
Clip-level behavior schema.
```

## How to interpret the result

If annotators only box players, you still cannot train foul detectors—add activity passes to the guideline.

## Try it / Reflect

- Does a foul label start at contact, whistle, or replay cue—pick one for your schema.

## Related examples

- `eg:4.22` — Warehouse activity plus tracks.
- `eg:4.21` — Frame-level object classes.
- `eg:4.8` — Driving video—objects and road context over time.

## Notes

- Prose-only.
