# Example 5.37 — Listwise Deletion Drops Any NA

**Chapter:** 5  
**Label:** `eg:5.37`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.3.1` — Handling Missing Data: Deletion and Imputation Methods

## Learning objective

Assess row loss from listwise deletion on sparse multi-column surveys.

## Chapter context

Section 5.3.1 compares deletion strategies and imputation (mean, hot deck, median) with their variance and bias trade-offs. Listwise deletion removes every row with a missing value in any column. It is simple but can discard most of a sparse survey when many fields are optional.

## What this example shows

Listwise deletion removes every row with a missing value in any column. It is simple but can discard most of a sparse survey when many fields are optional.

## What you should learn

### From the concept
- Listwise deletion removes every row with a missing value in any column.
- It is simple but can discard most of a sparse survey when many fields are optional.

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
cd modules/chapter5/example37
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Listwise deletion removes every row with a missing value in any column. It is simple but can discard most of a sparse survey when many fields are optional.
```

## How to interpret the result

It is simple but can discard most of a sparse survey when many fields are optional.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Listwise Deletion Drops Any NA” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.38` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
