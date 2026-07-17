# Example 5.62 — Rare Fraud Class Distorts Accuracy

**Chapter:** 5  
**Label:** `eg:5.62`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.6.1` — Challenges in Data Cleaning and Preprocessing

## Learning objective

Choose precision/recall or PR-AUC over accuracy on rare fraud.

## Chapter context

Section 5.6.1 discusses challenges such as misleading accuracy on rare fraud and inherited automated-label skew. When fraudulent transactions are a tiny fraction of all events, a majority-class classifier can report high accuracy while failing to detect almost every fraud case.

## What this example shows

When fraudulent transactions are a tiny fraction of all events, a majority-class classifier can report high accuracy while failing to detect almost every fraud case.

## What you should learn

### From the concept
- When fraudulent transactions are a tiny fraction of all events, a majority-class classifier can report high accuracy while failing to detect almost every fraud case.

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
cd modules/chapter5/example62
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
When fraudulent transactions are a tiny fraction of all events, a majority-class classifier can report high accuracy while failing to detect almost every fraud case.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Rare Fraud Class Distorts Accuracy” appear, and which Chapter 5 remedy would you apply first?

## Notes

- Prose-only in the manuscript.
