# Example 4.32 — Annotator Audit Versus Model Test

**Chapter:** 4  
**Label:** `eg:4.32`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.5.3` — Quality Control Metrics Against Gold Labels

## Learning objective

Separate annotator precision/recall against gold labels from model test metrics on the released corpus.

## Chapter context

Section 4.5.3 on QC metrics—Example 4.32 clarifies that labeler audit scores answer a different question than detector evaluation on a test split.

## What this example shows

On a held-out review batch, an annotator's box labels achieve precision 0.92 and recall 0.81 against gold—those figures evaluate the labeler, not the detector trained later; model test metrics answer a different question.

## Key terms

- **Gold set** — Expert-adjudicated reference labels for QC audits.
- **Annotator audit** — Measuring labeler P/R against gold on a review batch.
- **Model evaluation** — Scoring a trained detector on a held-out test split—downstream of annotation QC.

## What you should learn

### From the concept
- Good labelers ≠ good models automatically.
- Report annotation QC and model metrics separately in documentation.
- Low recall in labeling becomes false negatives in training data.

### From the output / result
- `run.sh` prints example P/R for the labeler and warns against conflating with model test scores.

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
cd modules/chapter4/example32
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Annotator audit vs model test:
- Held-out review batch: precision 0.92, recall 0.81 against gold set
- Those figures evaluate the labeler
- Detector metrics on a test split answer a different question
Do not confuse annotation QC with model evaluation.
```

## How to interpret the result

In dataset datasheets, include both IAA/audit stats and baseline model numbers—Example 4.32 defines the distinction.

## Try it / Reflect

- For your last project, did you report annotator agreement, gold audit, or only final model F1?

## Related examples

- `eg:4.31` — IAA before scale—complementary to gold audit.
- `eg:4.14` — Box labels whose quality drives detector training.
- `eg:4.5` — Clinical settings where label recall has safety weight.

## Notes

- Prose-only.
