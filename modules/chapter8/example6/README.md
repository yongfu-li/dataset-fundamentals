# Example 8.6 — Age Variable Description

**Chapter:** 8  
**Label:** `eg:8.6`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.2.4` — Data Dictionary: Describes Each Variable in the Dataset

## Learning objective

Write a precise data-dictionary description for a numeric age variable with units.

## Chapter context

Section 8.2.4 defines data dictionaries: per-variable description, type, allowed values, and units. For a variable called age, the description might be ``The age of the individual in years''.

## What this example shows

For a variable called age, the description might be ``The age of the individual in years''.

## Key terms

- **Data dictionary** — Table of variables with type, description, allowed values, and units.
- **Allowed values** — Controlled vocabulary or range statement enabling validation.

## What you should learn

### From the concept
- A useful description states what the value measures and its unit.
- Clear variable meaning prevents silent misinterpretation.

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
cd modules/chapter8/example6
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
- A useful description states what the value measures and its unit.
- Clear variable meaning prevents silent misinterpretation.
```

## How to interpret the result

Clear variable meaning prevents silent misinterpretation. Treat this as a release gate before sharing data or training models.

## Try it / Reflect

- Audit a dataset you maintain: which element of “Age Variable Description” is missing from your README or DVC metadata?

## Related examples

- `eg:8.7` — Next example in the same section.

## Notes

- Prose-only; run.sh prints operational takeaway.
