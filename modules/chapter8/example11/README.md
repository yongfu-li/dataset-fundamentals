# Example 8.11 — Urban-Only Sampling Note

**Chapter:** 8  
**Label:** `eg:8.11`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.2.7` — Annotations and Notes: Contextual Details About Data Collection or Peculiarities

## Learning objective

Record sampling limitations (urban-only) so users do not overgeneralize.

## Chapter context

Section 8.2.7 adds annotations for sampling limits and known collection defects. The dataset only includes data from urban areas, so it may not be representative of rural populations.

## What this example shows

The dataset only includes data from urban areas, so it may not be representative of rural populations.

## What you should learn

### From the concept
- Urban-only collection is a sampling limitation.
- The dataset must not be assumed representative of rural populations.

### From the output / result
- `run.sh` prints the structured documentation/version-control takeaway.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op or prerequisite check |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter8/example11
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
- Urban-only collection is a sampling limitation.
- The dataset must not be assumed representative of rural populations.
```

## How to interpret the result

The dataset must not be assumed representative of rural populations. Treat this as a release gate before sharing data or training models.

## Try it / Reflect

- Audit a dataset you maintain: which element of “Urban-Only Sampling Note” is missing from your README or DVC metadata?

## Related examples

- `eg:8.12` — Next example in the same section.

## Notes

- Prose-only; run.sh prints operational takeaway.
