# Example 4.25 — Labeling Outliers in Transactions

**Chapter:** 4  
**Label:** `eg:4.25`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.2.6` — Tabular Data Annotation

## Learning objective

Flag unusual payment transactions as suspect positives for fraud models under human review.

## Chapter context

Example 4.25 complements Example 4.24—rare positive fraud labels on outlier rows rather than broad customer-value bands.

## What this example shows

Unusual payment rows (amount, location, velocity outliers) are flagged suspect so a fraud model can learn rare positive cases under human review.

## Key terms

- **Outlier flag** — Human label marking a row as anomalous or fraudulent.
- **Rare-event labeling** — Scarce positives requiring careful review workflows.
- **Velocity feature** — Transaction rate or timing pattern used in fraud rules.

## What you should learn

### From the concept
- Fraud labels are imbalanced—QC focuses on false positives in review.
- Human review is part of the labeling pipeline, not post-hoc.
- Connects to ethics and bias when outliers correlate with geography or merchant type.

### From the output / result
- `run.sh` lists outlier dimensions and suspect flags for fraud training.

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
cd modules/chapter4/example25
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Outlier transaction labels:
- Flag unusual payment rows (amount, location, velocity)
- Suspect positives for fraud models under human review
Rare-event labeling, not customer-value bands.
```

## How to interpret the result

Majority vote crowds (Example 4.28) rarely suit fraud—expert review and gold sets (Example 4.32) are typical.

## Try it / Reflect

- What evidence would make you reverse a ‘suspect’ label during adjudication?

## Related examples

- `eg:4.24` — Common row categorization vs rare fraud flags.
- `eg:4.32` — Gold-set precision/recall for labelers.
- `eg:4.27` — Active learning to prioritize uncertain transaction reviews.

## Notes

- Prose-only.
