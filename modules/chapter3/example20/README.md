# Example 3.20 — COMPAS Risk Scores

**Chapter:** 3  
**Label:** `eg:3.20`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.5.3` — Case Studies on Bias

## Learning objective

Interpret COMPAS-style recidivism scores where overall accuracy masks disparate error rates across racial groups.

## Chapter context

Section 3.5.3 case studies ground abstract principles. Example 3.20 on COMPAS ties back to the dilemma in Example 3.8 and forward to Chapter 7 metrics.

## What this example shows

Tools such as COMPAS exhibit disparate error rates across racial groups under common thresholds, reflecting disparities already in historical justice data—overall accuracy is not a fairness certificate.

## Key terms

- **COMPAS** — A widely studied recidivism risk-scoring tool in U.S. courts.
- **Disparate error rates** — Different false-positive/false-negative burdens by group.
- **Fairness certificate fallacy** — Treating headline accuracy as proof of equitable impact.

## What you should learn

### From the concept
- Threshold choice distributes harm unequally.
- Justice data imports structural inequality.
- Case studies motivate measurement in Chapter 7.

### From the output / result
- `run.sh` states disparate errors and rejects accuracy-as-fairness.

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
cd modules/chapter3/example20
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
COMPAS risk scores:
- Disparate error rates across racial groups under common thresholds
- Reflect disparities already present in historical justice data
- Overall accuracy is not a fairness certificate
```

## How to interpret the result

When stakeholders cite AUC alone for a justice model, Example 3.20 is the rebuttal vignette.

## Try it / Reflect

- For a binary risk score, who bears false positives vs false negatives in your use case—and by group?

## Related examples

- `eg:3.8` — Ethical dilemma sketch for the same domain.
- `eg:3.34` — Four lenses on criminal-justice AI.
- `eg:3.32` — Justice lens: delay launch if disparities persist.

## Notes

- Prose-only. Chapter 7 develops metrics and mitigation.
