# Example 5.74 — Deep Feature Synthesis on Transactions

**Chapter:** 5  
**Label:** `eg:5.74`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.9.4` — Deep Feature Synthesis with Featuretools

## Learning objective

Generate aggregate customer features from raw transaction tables with DFS.

## Chapter context

Section 5.9.4 introduces automated feature synthesis from transaction logs. Featuretools deep feature synthesis can add customer-level fields such as total spend, average days between orders, and time since last purchase from raw transaction tables.

## What this example shows

Featuretools deep feature synthesis can add customer-level fields such as total spend, average days between orders, and time since last purchase from raw transaction tables.

## What you should learn

### From the concept
- Featuretools deep feature synthesis can add customer-level fields such as total spend, average days between orders, and time since last purchase from raw transaction tables.

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
cd modules/chapter5/example74
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Featuretools deep feature synthesis can add customer-level fields such as total spend, average days between orders, and time since last purchase from raw transaction tables.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Deep Feature Synthesis on Transactions” appear, and which Chapter 5 remedy would you apply first?

## Notes

- Prose-only in the manuscript.
