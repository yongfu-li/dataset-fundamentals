# Example 5.19 — Customer ID Formats Block Join

**Chapter:** 5  
**Label:** `eg:5.19`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.4` — Inconsistent Data: Examples and Issues

## Learning objective

Normalize join keys when one table uses integers and another uses prefixed strings.

## Chapter context

Section 5.2.4 covers inconsistent dates, gender codes, free text, and join keys that block merges until standardized. If one table stores customer IDs as integers and another prefixes them with ``CUST-'', a join on the raw fields fails silently or drops valid matches until formats are standardized…

## What this example shows

If one table stores customer IDs as integers and another prefixes them with ``CUST-'', a join on the raw fields fails silently or drops valid matches until formats are standardized.

## What you should learn

### From the concept
- If one table stores customer IDs as integers and another prefixes them with ``CUST-'', a join on the raw fields fails silently or drops valid matches until formats are standardized.

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
cd modules/chapter5/example19
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
If one table stores customer IDs as integers and another prefixes them with "CUST-", a join on the raw fields fails silently or drops valid matches until formats are standardized.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Customer ID Formats Block Join” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.18` — Previous example in the same section.
- `eg:5.20` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
