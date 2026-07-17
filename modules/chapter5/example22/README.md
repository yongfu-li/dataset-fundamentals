# Example 5.22 — Extra Zero In Blood Pressure

**Chapter:** 5  
**Label:** `eg:5.22`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.5` — Outliers: Definition, Causes, and Handling Techniques

## Learning objective

Flag clinical entry typos that produce implausible vitals before modeling.

## Chapter context

Section 5.2.5 distinguishes entry errors, legitimate extremes, and sensor failures—and transforms such as log, winsorize, and median imputation for skew and spikes. A nurse might enter ``1200/80'' instead of ``120/80'' for blood pressure. That value is far outside plausible clinical range and should be flagged before modeling.

## What this example shows

A nurse might enter ``1200/80'' instead of ``120/80'' for blood pressure. That value is far outside plausible clinical range and should be flagged before modeling.

## What you should learn

### From the concept
- A nurse might enter ``1200/80'' instead of ``120/80'' for blood pressure.
- That value is far outside plausible clinical range and should be flagged before modeling.

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
cd modules/chapter5/example22
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
A nurse might enter "1200/80" instead of "120/80" for blood pressure. That value is far outside plausible clinical range and should be flagged before modeling.
```

## How to interpret the result

That value is far outside plausible clinical range and should be flagged before modeling.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Extra Zero In Blood Pressure” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.23` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
