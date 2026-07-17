# Example 10.4 — Face-Recognition Validation Gap

**Chapter:** 10  
**Label:** `eg:10.4`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.2.1` — Validation and Generalization

## Learning objective

Diagnose validation gaps when synthetic faces omit lighting and occlusion variation.

## Chapter context

Section 10.2.1 covers validation and generalization—synthetic data must represent real phenomena and survive real-world deployment conditions. Synthetic images generated for training a facial recognition system might look similar to real faces but might lack the natural variation that occurs in actual images, such as ligh…

## What this example shows

Synthetic images generated for training a facial recognition system might look similar to real faces but might lack the natural variation that occurs in actual images, such as lighting changes or occlusions.

## What you should learn

### From the concept
- Looks realistic but may miss lighting and occlusion variation
- Models then fail on real-world nuisance factors
- Validate on real held-out images, not synthetic-only tests

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
cd modules/chapter10/example4
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Validation gap — synthetic faces:
- Looks realistic but may miss lighting and occlusion variation
- Models then fail on real-world nuisance factors
- Validate on real held-out images, not synthetic-only tests
```

## How to interpret the result

The closing bullet—'Validate on real held-out images, not synthetic-only tests'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- Name one nuisance factor your synthetic validation set might omit.

## Related examples

- `eg:10.16` — Vision augmentation for generalization.
- `eg:10.20` — Real-world deployment gap.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
