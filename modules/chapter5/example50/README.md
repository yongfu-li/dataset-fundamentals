# Example 5.50 — One Hot Encode Gender for Churn

**Chapter:** 5  
**Label:** `eg:5.50`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.4.2` — Encoding Categorical Data: One-Hot Encoding, Label Encoding, Target Encoding

## Learning objective

Prefer one-hot gender for churn models to avoid false ordinality.

## Chapter context

Section 5.4.2 compares one-hot, label, and target encoding—and when false ordinality or leakage risks appear. For churn prediction, one-hot encoding gender avoids implying order between categories. Label encoding is better reserved for truly ordinal fields such as satisfaction ratings from…

## What this example shows

For churn prediction, one-hot encoding gender avoids implying order between categories. Label encoding is better reserved for truly ordinal fields such as satisfaction ratings from 1 to 5.

## Key terms

- **One-hot encoding** — Binary column per nominal category—no implied order.
- **Target encoding** — Replace category with target statistic—watch train-fold leakage.

## What you should learn

### From the concept
- For churn prediction, one-hot encoding gender avoids implying order between categories.
- Label encoding is better reserved for truly ordinal fields such as satisfaction ratings from 1 to 5.

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
cd modules/chapter5/example50
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
For churn prediction, one-hot encoding gender avoids implying order between categories. Label encoding is better reserved for truly ordinal fields such as satisfaction ratings from 1 to 5.
```

## How to interpret the result

Label encoding is better reserved for truly ordinal fields such as satisfaction ratings from 1 to 5.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “One Hot Encode Gender for Churn” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.49` — Previous example in the same section.

## Notes

- Prose-only in the manuscript.
