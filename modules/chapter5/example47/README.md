# Example 5.47 — One Hot Encode Color Categories

**Chapter:** 5  
**Label:** `eg:5.47`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.4.2` — Encoding Categorical Data: One-Hot Encoding, Label Encoding, Target Encoding

## Learning objective

Build binary indicator columns for nominal color categories.

## Chapter context

Section 5.4.2 compares one-hot, label, and target encoding—and when false ordinality or leakage risks appear. For a ``Color'' column with categories [``Red'', ``Blue'', ``Green''], one-hot encoding creates three binary columns: |c|c|c| Red & Blue & Green \\ 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 …

## What this example shows

For a ``Color'' column with categories [``Red'', ``Blue'', ``Green''], one-hot encoding creates three binary columns: |c|c|c| Red & Blue & Green \\ 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\

## Key terms

- **One-hot encoding** — Binary column per nominal category—no implied order.
- **Target encoding** — Replace category with target statistic—watch train-fold leakage.

## What you should learn

### From the concept
- For a ``Color'' column with categories [``Red'', ``Blue'', ``Green''], one-hot encoding creates three binary columns: |c|c|c| Red & Blue & Green \\ 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\

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
cd modules/chapter5/example47
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
For a "Color" column with categories ["Red", "Blue", "Green"], one-hot encoding creates three binary columns: |c|c|c| Red & Blue & Green \\ 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “One Hot Encode Color Categories” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.48` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
