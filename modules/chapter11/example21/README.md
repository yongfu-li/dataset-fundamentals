# Example 11.21 — Radiologist Tumor Annotation

**Chapter:** 11  
**Label:** `eg:11.21`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11.9.2` — Challenges of Crowdsourcing

## Learning objective

Keep subtle tumor annotation on radiologists with split crowd/expert campaigns.

## Chapter context

Section 11.9.2 lists crowdsourcing challenges—quality, ethics, and subjective disagreement. In oncology screening datasets, only trained radiologists correctly mark subtle lesions that non-experts miss, so expert annotation remains the gold path for those frames.

## What this example shows

In oncology screening datasets, only trained radiologists correctly mark subtle lesions that non-experts miss, so expert annotation remains the gold path for those frames.

## What you should learn

### From the concept
- Subtle lesions missed by non-experts
- Experts remain the gold path for those frames
- Split campaigns so crowds never own this schema

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
cd modules/chapter11/example21
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Radiologist tumor annotation:
- Subtle lesions missed by non-experts
- Experts remain the gold path for those frames
- Split campaigns so crowds never own this schema
```

## How to interpret the result

The closing bullet—'Split campaigns so crowds never own this schema'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- Where would 'Radiologist Tumor Annotation' change your current labeling queue?

## Related examples

- `eg:11.20` — Previous example in the same section.
- `eg:11.22` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
