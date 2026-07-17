# Example 1.22 — Wearable Devices Dataset

**Chapter:** 1  
**Label:** `eg:1.22`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.5.1` — Applications of Datasets

## Learning objective

Contrast episodic clinical records with continuous wearable time-series, and explain why remote monitoring needs the latter.

## Chapter context

Section 1.5.1's healthcare application pairs electronic health records with wearable sensor streams: EHRs capture a visit; wearables capture everything between visits, adding a dynamic-data dimension the format survey introduced earlier.

## What this example shows

A conceptual wearable dataset (no listing in the book) for remote patient monitoring: continuous heart rate, activity, and sleep measurements.

## Key terms

- **Continuous / dynamic data** — data captured as an ongoing stream rather than a single snapshot per subject — here, heart rate/activity/sleep between clinic visits.

## What you should learn

### From the concept
- Record type: timestamped physiological measurements, not a single static row per patient.
- Goal: flag abnormal trends before an acute event, not after.
- Complements static tables like Example 1.2 rather than replacing them.

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
cd modules/chapter1/example22
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Wearable sensors emit continuous time-series data: heart rate, activity, sleep.
This differs from episodic EHR rows captured only at clinic visits (Example 1.2).
Goal: flag abnormal trends between visits, before an acute event occurs.
Complements static clinical tables rather than replacing them.
```

## How to interpret the result

Ask whether a healthcare dataset is episodic, continuous, or both — the format, storage cadence, and quality checks (e.g., timeliness) differ for each.

## Try it / Reflect

- Name one quality dimension (accuracy, completeness, consistency, timeliness) that matters more for continuous wearable streams than for a once-a-visit EHR row, and explain why.

## Related examples

- `eg:1.2` — the episodic clinical record this contrasts with.
- `eg:1.21`, `eg:1.28` — the other Section 1.5.1 application sketches.

## Notes

- Prose-only in the manuscript.
