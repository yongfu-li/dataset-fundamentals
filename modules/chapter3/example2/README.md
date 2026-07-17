# Example 3.2 — Healthcare AI System

**Chapter:** 3  
**Label:** `eg:3.2`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.2.1` — Core Ethical Principles in Data Work

## Learning objective

Apply the non-maleficence principle to a clinical model whose training data underrepresents a patient subgroup.

## Chapter context

Section 3.2.1 pairs five core principles with short vignettes. Example 3.2 is the clinical face of *do no harm*: skewed training distributions can translate into unequal error and misdiagnosis risk at deployment.

## What this example shows

A healthcare model trained on data that underrepresents a demographic group yields less accurate predictions for that group; non-maleficence demands subgroup audits, better representation, and pre-deployment safeguards.

## Key terms

- **Non-maleficence** — The duty to prevent foreseeable harm from data collection, processing, and model use.
- **Subgroup audit** — Measuring model performance separately by demographic or clinical slice before release.
- **Representation gap** — When training data does not reflect the population the model will score in production.

## What you should learn

### From the concept
- Average accuracy can hide harm concentrated on underrepresented groups.
- Harm prevention belongs in design and validation, not only post-incident review.
- Clinical AI errors can change diagnoses, not just rankings or ads.

### From the output / result
- `run.sh` summarizes the audit-and-safeguard response the principle requires.

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
cd modules/chapter3/example2
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Healthcare AI — do no harm:
- Underrepresented group in training → less accurate predictions → misdiagnosis risk
- Uphold non-maleficence: audit performance by subgroup, improve representation, add safeguards before deployment
```

## How to interpret the result

Example 3.18 later names the same pattern as selection bias; Chapter 7 develops metrics and mitigation pipelines rather than stopping at the principle.

## Try it / Reflect

- Name one sensitive subgroup your domain cares about and one metric you would report separately for that group before launch.

## Related examples

- `eg:3.18` — Selection bias when one demographic dominates the training set.
- `eg:3.17` — General statement of bias risk across high-stakes domains.
- `eg:3.10` — Personal harm when contact or identity data is misused.

## Notes

- Prose-only. Pairs with Chapter 7 fairness work.
