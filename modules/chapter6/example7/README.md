# Example 6.7 — Financial Transaction Outlier

**Chapter:** 6  
**Label:** `eg:6.7`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.1.2` — Key Benefits of EDA

## Learning objective

Decide whether a financial outlier is fraud, entry error, or the analytical focus.

## Chapter context

Section 6.1.2 outlier benefit—Example 6.7 places extreme transaction amounts in domain context before automatic deletion.

## What this example shows

An extremely high transaction may reflect fraud or data-entry error—exclude, correct, or retain as the anomaly focus depending on domain and verification.

## Key terms

- **Outlier (EDA)** — Extreme value flagged for domain review, not automatic removal.
- **Anomaly detection** — Use case where outliers are the positive class of interest.

## What you should learn

### From the concept
- EDA detects extremes; domain knowledge classifies them.
- Fraud analytics may keep outliers; reporting pipelines may cap them.
- Verify source before dropping (Chapter 5 outlier examples).

### From the output / result
- `run.sh` lists detect–verify–decide steps for financial extremes.

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
cd modules/chapter6/example7
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Financial outlier decision:
- Detect the extreme amount.
- Verify source and domain context.
- Correct if erroneous, exclude only with justification, or retain as the anomaly of interest.
```

## How to interpret the result

Example 5.23's valid extreme income is the mirror case—some extremes are real and must be kept.

## Try it / Reflect

- For a $500,000 retail charge, what evidence would you gather before excluding it?

## Related examples

- `eg:5.44` — IQR flagging in Chapter 5.
- `eg:6.2` — Skew from rare large values.
- `eg:6.18` — Variance inflated by extremes.

## Notes

- Prose-only.
