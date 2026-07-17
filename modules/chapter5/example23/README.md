# Example 5.23 — Valid Extreme Income Observation

**Chapter:** 5  
**Label:** `eg:5.23`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.5` — Outliers: Definition, Causes, and Handling Techniques

## Learning objective

Verify legitimate high-income records instead of auto-dropping extremes.

## Chapter context

Section 5.2.5 distinguishes entry errors, legitimate extremes, and sensor failures—and transforms such as log, winsorize, and median imputation for skew and spikes. A person with a very high income may still be a valid row in an income survey. Analysts should verify the record rather than automatically treating it as a mistake.

## What this example shows

A person with a very high income may still be a valid row in an income survey. Analysts should verify the record rather than automatically treating it as a mistake.

## What you should learn

### From the concept
- A person with a very high income may still be a valid row in an income survey.
- Analysts should verify the record rather than automatically treating it as a mistake.

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
cd modules/chapter5/example23
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
A person with a very high income may still be a valid row in an income survey. Analysts should verify the record rather than automatically treating it as a mistake.
```

## How to interpret the result

Analysts should verify the record rather than automatically treating it as a mistake.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Valid Extreme Income Observation” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.22` — Previous example in the same section.
- `eg:5.24` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
