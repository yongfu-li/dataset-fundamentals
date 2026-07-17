# Example 5.69 — Encoding Tradeoffs Ordinal Versus Nominal

**Chapter:** 5  
**Label:** `eg:5.69`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.8.4` — Encoding Activity: Choosing Between One-Hot and Label Encoding

## Learning objective

Contrast one-hot vs label encoding costs for nominal vs ordinal fields.

## Chapter context

Section 5.8.4 lab contrasts label vs one-hot encoding on ordinal vs nominal fields. One-hot encoding avoids false order among nominal categories but expands dimensionality, whereas label encoding is compact but can imply ordinality where none exists.

## What this example shows

One-hot encoding avoids false order among nominal categories but expands dimensionality, whereas label encoding is compact but can imply ordinality where none exists.

## What you should learn

### From the concept
- One-hot encoding avoids false order among nominal categories but expands dimensionality, whereas label encoding is compact but can imply ordinality where none exists.

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
cd modules/chapter5/example69
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
One-hot encoding avoids false order among nominal categories but expands dimensionality, whereas label encoding is compact but can imply ordinality where none exists.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Encoding Tradeoffs Ordinal Versus Nominal” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.68` — Previous example in the same section.

## Notes

- Prose-only in the manuscript.
