# Example 5.49 — Target Encode City by Mean Price

**Chapter:** 5  
**Label:** `eg:5.49`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.4.2` — Encoding Categorical Data: One-Hot Encoding, Label Encoding, Target Encoding

## Learning objective

Replace high-cardinality city with training-fold mean price (with leakage caution).

## Chapter context

Section 5.4.2 compares one-hot, label, and target encoding—and when false ordinality or leakage risks appear. If a dataset has a ``City'' column and target ``House Price'', target encoding replaces each city with the average price observed for that city in the training fold.

## What this example shows

If a dataset has a ``City'' column and target ``House Price'', target encoding replaces each city with the average price observed for that city in the training fold.

## Key terms

- **One-hot encoding** — Binary column per nominal category—no implied order.
- **Target encoding** — Replace category with target statistic—watch train-fold leakage.

## What you should learn

### From the concept
- If a dataset has a ``City'' column and target ``House Price'', target encoding replaces each city with the average price observed for that city in the training fold.

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
cd modules/chapter5/example49
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
If a dataset has a "City" column and target "House Price", target encoding replaces each city with the average price observed for that city in the training fold.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Target Encode City by Mean Price” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.48` — Previous example in the same section.
- `eg:5.50` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
