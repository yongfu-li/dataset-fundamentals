# Example 13.21 — Correcting Scale Errors in Financial Data

**Chapter:** 13  
**Label:** `eg:13.21`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.4.3` — Data Quality Standards for Reproducibility

## Learning objective

Detect and correct scale or unit errors before analysis (e.g., with OpenRefine).

## Chapter context

Section 13.4.3 addresses data quality dimensions—completeness, consistency, and accuracy. In a financial dataset, if an entry mistakenly lists a value in millions instead of thousands, correcting this ensures the data accurately reflects reality. Automated validation to…

## What this example shows

In a financial dataset, if an entry mistakenly lists a value in millions instead of thousands, correcting this ensures the data accurately reflects reality. Automated validation tools such as OpenRefine can help identify and correct such issues.

## What you should learn

### From the concept
- In a financial dataset, if an entry mistakenly lists a value in millions instead of thousands, correcting this ensures the data accurately reflects reality.
- Automated validation tools such as OpenRefine can help identify and correct such issues.

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
cd modules/chapter13/example21
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Accuracy: correct scale/unit errors (e.g., with OpenRefine).
```

## How to interpret the result

The takeaway 'correct scale/unit errors (e.g., with OpenRefine).' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Correcting Scale Errors in Financial Data' is missing from your current project README?

## Related examples

- `eg:13.20` — Previous example in the same section.
- `eg:13.22` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
