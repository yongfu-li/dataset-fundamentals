# Example 10.14 — Synthetic Fraud Transaction Patterns

**Chapter:** 10  
**Label:** `eg:10.14`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.6.3` — Synthetic Data in Finance: Fraud Detection, Trading Simulations

## Learning objective

Generate synthetic fraud patterns and require real held-out fraud evaluation.

## Chapter context

Section 10.6.3 uses synthetic AV and vision data for edge cases and augmentation. A payments provider synthesizes card-not-present fraud sequences with unusual merchant categories and velocity spikes, giving its detector more positive examples than appear in his…

## What this example shows

A payments provider synthesizes card-not-present fraud sequences with unusual merchant categories and velocity spikes, giving its detector more positive examples than appear in historical logs.

## What you should learn

### From the concept
- Card-not-present sequences with odd categories and velocity spikes
- More positives than scarce historical fraud labels
- Evaluate lift on real held-out fraud, not synthetic-only scores

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
cd modules/chapter10/example14
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Synthetic fraud patterns:
- Card-not-present sequences with odd categories and velocity spikes
- More positives than scarce historical fraud labels
- Evaluate lift on real held-out fraud, not synthetic-only scores
```

## How to interpret the result

The closing bullet—'Evaluate lift on real held-out fraud, not synthetic-only scores'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- Which fraud pattern would you hold out from synthesis for real evaluation?

## Related examples

- `eg:10.19` — Require real held-out evaluation.
- `Chapter 7` — Fairness on fraud models.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
