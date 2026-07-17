# Example 3.4 — Credit Scoring Algorithm

**Chapter:** 3  
**Label:** `eg:3.4`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.2.1` — Core Ethical Principles in Data Work

## Learning objective

Specify what transparency requires when an automated credit decision declines an applicant.

## Chapter context

Transparency and accountability are paired in Section 3.2.1: people affected by consequential scores need intelligible explanations and paths to challenge errors, not only accurate averages.

## What this example shows

On decline, applicants should receive understandable main factors, documentation of the system's purpose, and a path to challenge errors—opacity fails transparency even when the model is accurate on average.

## Key terms

- **Transparency** — Disclosing collection purposes and, where feasible, how consequential automated decisions are produced.
- **Explainability (operational)** — Factors a affected person can understand and contest, not only internal SHAP plots.
- **Right to challenge** — A documented process to dispute errors in automated decisions.

## What you should learn

### From the concept
- Accuracy on average does not satisfy transparency obligations.
- Credit and lending decisions are archetypal consequential automation.
- Explanation duties often intersect with GDPR-style accountability (Section 3.6).

### From the output / result
- `run.sh` lists the three transparency deliverables on decline.

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
cd modules/chapter3/example4
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Credit scoring — transparency:
- On decline: understandable main factors, purpose documentation, path to challenge errors
- Opacity that blocks explanation fails transparency even if the model is accurate on average
```

## How to interpret the result

When your team can score but cannot explain or contest outcomes, you have a governance gap that regulators and customers will treat as a product defect.

## Try it / Reflect

- Draft three sentences a declined applicant should receive: purpose, top factors, and how to appeal—without mentioning model architecture.

## Related examples

- `eg:3.5` — Accountability after incidents, including remediation paths.
- `eg:3.28` — Regulatory penalty exposure when protections are inadequate.

## Notes

- Prose-only.
