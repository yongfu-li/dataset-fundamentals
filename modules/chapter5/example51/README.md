# Example 5.51 — Equal Width Age Bins

**Chapter:** 5  
**Label:** `eg:5.51`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.4.3` — Binning: Grouping Numerical Data into Bins

## Learning objective

Create equal-width age bins and interpret boundary choices.

## Chapter context

Section 5.4.3 covers equal-width vs equal-frequency binning for numeric features. If ``Age'' ranges from 18 to 80 and is split into four equal-width bins, each bin spans 15 years: Bin 1: 18-33 Bin 2: 34-49 Bin 3: 50-65 Bin 4: 66-80

## What this example shows

If ``Age'' ranges from 18 to 80 and is split into four equal-width bins, each bin spans 15 years: Bin 1: 18-33 Bin 2: 34-49 Bin 3: 50-65 Bin 4: 66-80

## What you should learn

### From the concept
- If ``Age'' ranges from 18 to 80 and is split into four equal-width bins, each bin spans 15 years: Bin 1: 18-33 Bin 2: 34-49 Bin 3: 50-65 Bin 4: 66-80

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
cd modules/chapter5/example51
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
If "Age" ranges from 18 to 80 and is split into four equal-width bins, each bin spans 15 years: Bin 1: 18-33 Bin 2: 34-49 Bin 3: 50-65 Bin 4: 66-80
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Equal Width Age Bins” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.52` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
