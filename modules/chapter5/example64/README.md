# Example 5.64 — Retail Purchase Record Schema

**Chapter:** 5  
**Label:** `eg:5.64`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.8.1` — Spot the Issue: Identifying Data Issues in a Sample Dataset

## Learning objective

Spot missing prices and duplicate rows in a practice retail table.

## Chapter context

Section 5.8.1 is a practice exercise: read a retail schema and spot typical defects before coding fixes. A practice dataset may list customer ID, product name, purchase date, price, and payment method, with typical defects such as missing prices and duplicate transactions.

## What this example shows

A practice dataset may list customer ID, product name, purchase date, price, and payment method, with typical defects such as missing prices and duplicate transactions.

## What you should learn

### From the concept
- A practice dataset may list customer ID, product name, purchase date, price, and payment method, with typical defects such as missing prices and duplicate transactions.

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
cd modules/chapter5/example64
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
A practice dataset may list customer ID, product name, purchase date, price, and payment method, with typical defects such as missing prices and duplicate transactions.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Retail Purchase Record Schema” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.65` — Fix defects spotted in the practice schema.
- `eg:5.3` — Duplicate transactions in retail data.

## Notes

- Prose-only in the manuscript.
