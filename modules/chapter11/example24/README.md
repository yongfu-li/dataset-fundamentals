# Example 11.24 — Geospatial Experts for Satellite Features

**Chapter:** 11  
**Label:** `eg:11.24`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11.9.2` — Challenges of Crowdsourcing

## Learning objective

Engage geospatial experts to catch sensor artifacts crowds may mislabel.

## Chapter context

Section 11.9.2 lists crowdsourcing challenges—quality, ethics, and subjective disagreement. Satellite imagery for land-cover maps benefits from geospatial analysts who recognize sensor artifacts and seasonal confounds that general crowd workers treat as ground truth.

## What this example shows

Satellite imagery for land-cover maps benefits from geospatial analysts who recognize sensor artifacts and seasonal confounds that general crowd workers treat as ground truth.

## What you should learn

### From the concept
- Recognize sensor artifacts and seasonal confounds
- Crowds may treat artifacts as ground truth
- Expert maps keep land-cover labels trustworthy

### From the output / result
- `run.sh` prints the structured takeaway below—use it when designing query or workforce rules.

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
cd modules/chapter11/example24
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Geospatial experts:
- Recognize sensor artifacts and seasonal confounds
- Crowds may treat artifacts as ground truth
- Expert maps keep land-cover labels trustworthy
```

## How to interpret the result

The closing bullet—'Expert maps keep land-cover labels trustworthy'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- Where would 'Geospatial Experts for Satellite Features' change your current labeling queue?

## Related examples

- `eg:11.23` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
