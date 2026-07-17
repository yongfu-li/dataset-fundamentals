# Example 8.32 — Annotating Missing-Value Handling

**Chapter:** 8  
**Label:** `eg:8.32`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.5.2` — Include Provenance Information

## Learning objective

Record why values are missing and how imputation or removal was applied.

## Chapter context

Section 8.5.2 requires provenance plus explicit missing-value handling notes. If a dataset has missing values, annotate why those values are missing or how they were handled (e.g., imputation, removal).

## What this example shows

If a dataset has missing values, annotate why those values are missing or how they were handled (e.g., imputation, removal).

## What you should learn

### From the concept
- Missingness documentation distinguishes why values are absent from what was done about them.
- Imputation and removal change downstream interpretation and must be reproducible.

### From the output / result
- `run.sh` prints the structured documentation/version-control takeaway.

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
cd modules/chapter8/example32
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
- Missingness documentation distinguishes why values are absent from what was done about them.
- Imputation and removal change downstream interpretation and must be reproducible.
```

## How to interpret the result

Imputation and removal change downstream interpretation and must be reproducible. Treat this as a release gate before sharing data or training models.

## Try it / Reflect

- Audit a dataset you maintain: which element of “Annotating Missing-Value Handling” is missing from your README or DVC metadata?

## Related examples

- `eg:8.31` — Previous example in the same section.

## Notes

- Prose-only; run.sh prints operational takeaway.
