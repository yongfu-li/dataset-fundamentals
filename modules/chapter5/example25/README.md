# Example 5.25 — Drop Typo Age 250

**Chapter:** 5  
**Label:** `eg:5.25`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.5` — Outliers: Definition, Causes, and Handling Techniques

## Learning objective

Correct or drop clear entry-error ages (e.g., 250) rather than treating as real.

## Chapter context

Section 5.2.5 distinguishes entry errors, legitimate extremes, and sensor failures—and transforms such as log, winsorize, and median imputation for skew and spikes. If a registration form stores age as 250 years, dropping or correcting that row is preferable to letting a linear model treat it as a real observation.

## What this example shows

If a registration form stores age as 250 years, dropping or correcting that row is preferable to letting a linear model treat it as a real observation.

## What you should learn

### From the concept
- If a registration form stores age as 250 years, dropping or correcting that row is preferable to letting a linear model treat it as a real observation.

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
cd modules/chapter5/example25
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
If a registration form stores age as 250 years, dropping or correcting that row is preferable to letting a linear model treat it as a real observation.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Drop Typo Age 250” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.24` — Previous example in the same section.
- `eg:5.26` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
