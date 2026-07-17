# Example 11.5 — Uncertain Chest X-ray Near Decision Boundary

**Chapter:** 11  
**Label:** `eg:11.5`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11` — ?

## Learning objective

Recognize least-confidence chest X-rays near the abnormal/normal decision boundary.

## Chapter context

Chapter 11 extends Chapter 4 with active learning, weak supervision, self-supervision, and hybrid crowd–expert pipelines. An X-ray scored 0.52 abnormal and 0.48 normal is queued for labeling because the near-tie marks a region of the decision boundary that most needs an expert label.

## What this example shows

An X-ray scored 0.52 abnormal and 0.48 normal is queued for labeling because the near-tie marks a region of the decision boundary that most needs an expert label.

## What you should learn

### From the concept
- 0.52 abnormal / 0.48 normal is a decision-boundary near-tie
- Queue for expert label before trusting the call
- Pair with diversity sampling to avoid only labeling hard cases

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
cd modules/chapter11/example5
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Least-confidence X-ray:
- 0.52 abnormal / 0.48 normal is a decision-boundary near-tie
- Queue for expert label before trusting the call
- Pair with diversity sampling to avoid only labeling hard cases
```

## How to interpret the result

The closing bullet—'Pair with diversity sampling to avoid only labeling hard cases'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- Name one clinical consequence of skipping diversity sampling.

## Related examples

- `eg:11.1` — Near-tie decision boundary.
- `eg:11.6` — Pair with diversity sampling.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
