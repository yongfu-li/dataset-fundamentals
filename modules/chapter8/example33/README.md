# Example 8.33 — Descriptive Dataset Commit Message

**Chapter:** 8  
**Label:** `eg:8.33`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.5.3` — Best Practices for Dataset Version Control

## Learning objective

Write a commit message that names the artifact and the cleaning operation.

## Chapter context

Section 8.5.3 best practices for version control commit messages that name methods. Commit Message: ``Added cleaned training dataset with missing values imputed using median.''

## What this example shows

Commit Message: ``Added cleaned training dataset with missing values imputed using median.''

## What you should learn

### From the concept
- A useful message names the changed artifact and the median-imputation operation.
- The reason and method matter more than a vague message such as 'update data'.

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
cd modules/chapter8/example33
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
- A useful message names the changed artifact and the median-imputation operation.
- The reason and method matter more than a vague message such as 'update data'.
```

## How to interpret the result

The reason and method matter more than a vague message such as 'update data'. Treat this as a release gate before sharing data or training models.

## Try it / Reflect

- Audit a dataset you maintain: which element of “Descriptive Dataset Commit Message” is missing from your README or DVC metadata?

## Notes

- Prose-only; run.sh prints operational takeaway.
