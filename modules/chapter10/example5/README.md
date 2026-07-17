# Example 10.5 — Demographic Bias in GAN Training Data

**Chapter:** 10  
**Label:** `eg:10.5`  
**Source:** `author/chapter10.tex`  
**Section:** `sec:10.2.2` — Potential Biases

## Learning objective

Recognize how biased GAN training demographics propagate into generated samples.

## Chapter context

Section 10.2.2 warns that generators inherit biases from source training data, with serious consequences in healthcare and hiring. If a dataset used to train a GAN model contains biased demographic representations, the generated synthetic data could perpetuate these biases. In sensitive applications like healt…

## What this example shows

If a dataset used to train a GAN model contains biased demographic representations, the generated synthetic data could perpetuate these biases. In sensitive applications like healthcare or hiring, this could result in skewed or unfair outcomes, reinforcing existing inequalities.

## Key terms

- **Bias inheritance** — Skew in source data reproduced by the synthetic generator.

## What you should learn

### From the concept
- Skewed training demographics flow into generated samples
- Healthcare/hiring outcomes can become unfair
- Audit source and synthetic cohorts together

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
cd modules/chapter10/example5
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Bias inheritance in GANs:
- Skewed training demographics flow into generated samples
- Healthcare/hiring outcomes can become unfair
- Audit source and synthetic cohorts together
```

## How to interpret the result

The closing bullet—'Audit source and synthetic cohorts together'—is the release gate: synthetic data is useful only if it passes this check before training or sharing.

## Try it / Reflect

- Where does 'Demographic Bias in GAN Training Data' apply in your domain—and what would you validate on real data?

## Related examples

- `eg:10.22` — Bias amplification in hiring.
- `Chapter 7` — Fairness metrics for audit.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
