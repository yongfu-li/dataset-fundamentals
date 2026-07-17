# Example 5.54 — Age Income Interaction Feature

**Chapter:** 5  
**Label:** `eg:5.54`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.4.4` — Adding New Features

## Learning objective

Engineer age×income interactions to expose segment effects.

## Chapter context

Section 5.4.4 engineers interactions and polynomial terms to expose nonlinear structure. Multiplying standardized age and income can reveal segments such as high-income younger buyers whose purchase rate differs from either variable alone.

## What this example shows

Multiplying standardized age and income can reveal segments such as high-income younger buyers whose purchase rate differs from either variable alone.

## What you should learn

### From the concept
- Multiplying standardized age and income can reveal segments such as high-income younger buyers whose purchase rate differs from either variable alone.

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
cd modules/chapter5/example54
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Multiplying standardized age and income can reveal segments such as high-income younger buyers whose purchase rate differs from either variable alone.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Age Income Interaction Feature” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.53` — Previous example in the same section.

## Notes

- Prose-only in the manuscript.
