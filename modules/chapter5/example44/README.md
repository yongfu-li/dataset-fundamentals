# Example 5.44 — Extreme Income Flagged by IQR

**Chapter:** 5  
**Label:** `eg:5.44`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.3.5` — Handling Outliers: Techniques Like Z-Score, IQR, and Winsorization

## Learning objective

Flag or winsorize IQR outliers so one row cannot dominate means.

## Chapter context

Section 5.3.5 applies IQR, z-score, and winsorization to tame outliers without confusing valid extremes with errors. In an annual income column, a \50 million observation may lie beyond the upper fence from the interquartile range. Flagging or winsorizing it prevents one row from dominating mean …

## What this example shows

In an annual income column, a \50 million observation may lie beyond the upper fence from the interquartile range. Flagging or winsorizing it prevents one row from dominating mean income estimates.

## What you should learn

### From the concept
- In an annual income column, a \50 million observation may lie beyond the upper fence from the interquartile range.
- Flagging or winsorizing it prevents one row from dominating mean income estimates.

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
cd modules/chapter5/example44
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
In an annual income column, a \$50 million observation may lie beyond the upper fence from the interquartile range. Flagging or winsorizing it prevents one row from dominating mean income estimates.
```

## How to interpret the result

Flagging or winsorizing it prevents one row from dominating mean income estimates.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Extreme Income Flagged by IQR” appear, and which Chapter 5 remedy would you apply first?

## Notes

- Prose-only in the manuscript.
