# Example 8.7 — Gender Allowed Values

**Chapter:** 8  
**Label:** `eg:8.7`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.2.4` — Data Dictionary: Describes Each Variable in the Dataset

## Learning objective

Define an explicit allowed-values list for a gender categorical field.

## Chapter context

Section 8.2.4 defines data dictionaries: per-variable description, type, allowed values, and units. For a variable called gender, allowed values might include ``male'', ``female'', and ``others''.

## What this example shows

For a variable called gender, allowed values might include ``male'', ``female'', and ``others''.

## Key terms

- **Data dictionary** — Table of variables with type, description, allowed values, and units.
- **Allowed values** — Controlled vocabulary or range statement enabling validation.

## What you should learn

### From the concept
- Categorical fields need an explicit controlled vocabulary.
- Allowed values enable validation and consistent analysis.

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
cd modules/chapter8/example7
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
- Categorical fields need an explicit controlled vocabulary.
- Allowed values enable validation and consistent analysis.
```

## How to interpret the result

Allowed values enable validation and consistent analysis. Treat this as a release gate before sharing data or training models.

## Try it / Reflect

- Audit a dataset you maintain: which element of “Gender Allowed Values” is missing from your README or DVC metadata?

## Related examples

- `eg:8.6` — Previous example in the same section.
- `eg:8.8` — Next example in the same section.

## Notes

- Prose-only; run.sh prints operational takeaway.
