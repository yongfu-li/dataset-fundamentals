# Example 10.22 — Bias Amplification in Hiring Data

**Chapter:** 10  
**Label:** `eg:10.22`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.7.4` — Bias in Synthetic Data: Amplification of Biases from Training Data

## Learning objective

Audit hiring-data generators for bias amplification in synthetic resumes.

## Chapter context

Chapter 10 covers synthetic data when real data are scarce, sensitive, or imbalanced. Synthetic resumes generated from historically male-dominated hiring data over-represent certain career paths, reinforcing the same hiring skew the organization hoped to remove.

## What this example shows

Synthetic resumes generated from historically male-dominated hiring data over-represent certain career paths, reinforcing the same hiring skew the organization hoped to remove.

## What you should learn

### From the concept
- Historical male-dominated data trains the generator
- Synthetic resumes over-represent the same career paths
- Audit source and synthetic cohorts with Chapter 7 metrics

### From the output / result
- `run.sh` prints the structured takeaway below—use it as a design checklist.

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
cd modules/chapter10/example22
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Bias amplification — hiring:
- Historical male-dominated data trains the generator
- Synthetic resumes over-represent the same career paths
- Audit source and synthetic cohorts with Chapter 7 metrics
```

## How to interpret the result

The closing bullet—'Audit source and synthetic cohorts with Chapter 7 metrics'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- Which demographic slice would you compare in source vs synthetic resumes?

## Related examples

- `eg:10.5` — GAN bias inheritance.
- `Chapter 7` — Bias metrics for audit.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
