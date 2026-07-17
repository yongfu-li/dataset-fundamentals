# Example 5.56 — Polynomial Feature Expansion

**Chapter:** 5  
**Label:** `eg:5.56`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.4.6` — Data Transformation: Log and Polynomial Transformations

## Learning objective

Expand features with powers for nonlinear regression while staying linear in parameters.

## Chapter context

Section 5.4.6 applies log and polynomial transforms while models remain linear in parameters. Transforming feature X into X^2 or X^3 lets regression models fit nonlinear trends while remaining linear in the parameters.

## What this example shows

Transforming feature X into X^2 or X^3 lets regression models fit nonlinear trends while remaining linear in the parameters.

## What you should learn

### From the concept
- Transforming feature X into X^2 or X^3 lets regression models fit nonlinear trends while remaining linear in the parameters.

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
cd modules/chapter5/example56
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Transforming feature $X$ into $X^2$ or $X^3$ lets regression models fit nonlinear trends while remaining linear in the parameters.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Polynomial Feature Expansion” appear, and which Chapter 5 remedy would you apply first?

## Notes

- Prose-only in the manuscript.
