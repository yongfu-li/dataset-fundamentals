# Example 5.4 — Missing Contact Fields

**Chapter:** 5  
**Label:** `eg:5.4`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.1.2` — Key Definitions: Data Cleaning vs Data Preprocessing

## Learning objective

Choose task-appropriate handling when contact fields are missing (impute, exclude, or retain for other uses).

## Chapter context

Section 5.1.2 separates cleaning (fix errors) from preprocessing (reshape for algorithms). The vignettes preview duplicates, missing fields, dates, scaling, and encoding. A customer table may omit email for some rows. Depending on the task, analysts impute a sentinel, request completion, or exclude those rows from email campaigns while retaining the…

## What this example shows

A customer table may omit email for some rows. Depending on the task, analysts impute a sentinel, request completion, or exclude those rows from email campaigns while retaining them for other analyses.

## What you should learn

### From the concept
- A customer table may omit email for some rows.
- Depending on the task, analysts impute a sentinel, request completion, or exclude those rows from email campaigns while retaining them for other analyses.

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
cd modules/chapter5/example4
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
A customer table may omit email for some rows. Depending on the task, analysts impute a sentinel, request completion, or exclude those rows from email campaigns while retaining them for other analyses.
```

## How to interpret the result

Depending on the task, analysts impute a sentinel, request completion, or exclude those rows from email campaigns while retaining them for other analyses.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Missing Contact Fields” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.3` — Previous example in the same section.
- `eg:5.5` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
