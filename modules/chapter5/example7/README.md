# Example 5.7 — Encoding a Color Category

**Chapter:** 5  
**Label:** `eg:5.7`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.1.2` — Key Definitions: Data Cleaning vs Data Preprocessing

## Learning objective

Map nominal color categories to numeric columns before linear models or neural nets can consume them.

## Chapter context

Section 5.1.2 separates cleaning (fix errors) from preprocessing (reshape for algorithms). The vignettes preview duplicates, missing fields, dates, scaling, and encoding. A field with values red, blue, and green must be mapped to numeric columns (for example, one-hot indicators) before most linear models or neural networks can consume it.

## What this example shows

A field with values red, blue, and green must be mapped to numeric columns (for example, one-hot indicators) before most linear models or neural networks can consume it.

## What you should learn

### From the concept
- A field with values red, blue, and green must be mapped to numeric columns (for example, one-hot indicators) before most linear models or neural networks can consume it.

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
cd modules/chapter5/example7
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
A color field with values red, blue, and green must be mapped to numeric columns (for example, one-hot indicators) before most linear models or neural networks can consume it.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Encoding a Color Category” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.47` — One-hot color encoding technique.
- `eg:5.61` — OneHotEncoder in scikit-learn.

## Notes

- Prose-only in the manuscript.
