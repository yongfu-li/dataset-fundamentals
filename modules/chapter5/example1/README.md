# Example 5.1 — Missing Target Values in Classification

**Chapter:** 5  
**Label:** `eg:5.1`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.1.1` — Importance of Data Cleaning and Preprocessing

## Learning objective

Explain why blank classification labels break supervised learning and skew decision boundaries.

## Chapter context

Section 5.1.1 argues that label and feature quality bound model performance before architecture choices. Cleaning defects in targets or unused columns show up immediately in supervised pipelines. If a fraud-detection table leaves the fraud/not-fraud field blank for many rows, supervised training either drops those rows or invents labels, both of which can bias decision boun…

## What this example shows

If a fraud-detection table leaves the fraud/not-fraud field blank for many rows, supervised training either drops those rows or invents labels, both of which can bias decision boundaries.

## What you should learn

### From the concept
- If a fraud-detection table leaves the fraud/not-fraud field blank for many rows, supervised training either drops those rows or invents labels, both of which can bias decision boundaries.

### From the output / result
- `run.sh` prints the structured takeaway as a cleaning/preprocessing checklist.

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
cd modules/chapter5/example1
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
If a fraud-detection table leaves the fraud/not-fraud field blank for many rows, supervised training either drops those rows or invents labels, both of which can bias decision boundaries.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Missing Target Values in Classification” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.37` — Listwise deletion when targets or features are missing.
- `eg:5.62` — Rare-class metrics when labels exist but are imbalanced.

## Notes

- Prose-only in the manuscript.
