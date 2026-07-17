# Example 11.26 — Crowd Objects Expert Pathology

**Chapter:** 11  
**Label:** `eg:11.26`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11.9.4` — Balancing Crowdsourcing and Expert Annotation: Hybrid Approaches

## Learning objective

Match crowd object labeling with expert pathology on rare lesions in one campaign.

## Chapter context

Section 11.9.4 balances crowd and expert work with expertise-matched assignment. Crowd workers tag cars and trees in street scenes, while pathologists label rare lesion types in the same campaign's medical subset.

## What this example shows

Crowd workers tag cars and trees in street scenes, while pathologists label rare lesion types in the same campaign's medical subset.

## Key terms

- **Hybrid pipeline** — Crowds handle routine items; experts own gold sets and hard cases.

## What you should learn

### From the concept
- Cars and trees → crowd
- Rare lesions → pathologists
- One campaign, expertise-matched assignment

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
cd modules/chapter11/example26
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Crowd objects / expert pathology:
- Cars and trees → crowd
- Rare lesions → pathologists
- One campaign, expertise-matched assignment
```

## How to interpret the result

The closing bullet—'One campaign, expertise-matched assignment'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- Where would 'Crowd Objects Expert Pathology' change your current labeling queue?

## Related examples

- `eg:11.25` — Previous example in the same section.
- `eg:11.27` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
