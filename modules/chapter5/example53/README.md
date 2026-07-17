# Example 5.53 — Add Squared Feature Term

**Chapter:** 5  
**Label:** `eg:5.53`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.4.4` — Adding New Features

## Learning objective

Add polynomial terms so linear models capture curvature.

## Chapter context

Section 5.4.4 engineers interactions and polynomial terms to expose nonlinear structure. If feature X has a quadratic relationship with the target, adding X^2 lets a linear model capture curvature that a single linear term cannot represent.

## What this example shows

If feature X has a quadratic relationship with the target, adding X^2 lets a linear model capture curvature that a single linear term cannot represent.

## What you should learn

### From the concept
- If feature X has a quadratic relationship with the target, adding X^2 lets a linear model capture curvature that a single linear term cannot represent.

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
cd modules/chapter5/example53
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
If feature $X$ has a quadratic relationship with the target, adding $X^2$ lets a linear model capture curvature that a single linear term cannot represent.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Add Squared Feature Term” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.54` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
