# Example 13.20 — Satellite Data Versus Ground Truth

**Chapter:** 13  
**Label:** `eg:13.20`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.4.3` — Data Quality Standards for Reproducibility

## Learning objective

Validate satellite observations against ground-truth measurements.

## Chapter context

Section 13.4.3 addresses data quality dimensions—completeness, consistency, and accuracy. In geographic studies, cross-referencing satellite data with ground-truth measurements helps ensure the accuracy of the dataset.

## What this example shows

In geographic studies, cross-referencing satellite data with ground-truth measurements helps ensure the accuracy of the dataset.

## What you should learn

### From the concept
- In geographic studies, cross-referencing satellite data with ground-truth measurements helps ensure the accuracy of the dataset.

### From the output / result
- `run.sh` prints the structured takeaway below—use it in reproducibility and open-science reviews.

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
cd modules/chapter13/example20
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Accuracy: cross-check satellite data against ground truth.
```

## How to interpret the result

The takeaway 'cross-check satellite data against ground truth.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Satellite Data Versus Ground Truth' is missing from your current project README?

## Related examples

- `eg:13.19` — Previous example in the same section.
- `eg:13.21` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
