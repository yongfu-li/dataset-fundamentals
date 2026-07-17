# Example 5.3 — Duplicate Retail Transactions

**Chapter:** 5  
**Label:** `eg:5.3`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.1.2` — Key Definitions: Data Cleaning vs Data Preprocessing

## Learning objective

Recognize how duplicate order rows inflate revenue KPIs until deduplicated or merged.

## Chapter context

Section 5.1.2 separates cleaning (fix errors) from preprocessing (reshape for algorithms). The vignettes preview duplicates, missing fields, dates, scaling, and encoding. In a retail sales extract, the same order ID may appear twice after a system retry. Counting both rows inflates revenue and customer frequency until duplicates are removed or merge…

## What this example shows

In a retail sales extract, the same order ID may appear twice after a system retry. Counting both rows inflates revenue and customer frequency until duplicates are removed or merged.

## What you should learn

### From the concept
- In a retail sales extract, the same order ID may appear twice after a system retry.
- Counting both rows inflates revenue and customer frequency until duplicates are removed or merged.

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
cd modules/chapter5/example3
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
In a retail sales extract, the same order ID may appear twice after a system retry. Counting both rows inflates revenue and customer frequency until duplicates are removed or merged.
```

## How to interpret the result

Counting both rows inflates revenue and customer frequency until duplicates are removed or merged.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Duplicate Retail Transactions” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.14` — Duplicate grain at customer vs order level.
- `eg:5.57` — pandas drop_duplicates in code.

## Notes

- Prose-only in the manuscript.
