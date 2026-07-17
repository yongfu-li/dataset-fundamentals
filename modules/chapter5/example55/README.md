# Example 5.55 — Engineer Price Per Square Foot

**Chapter:** 5  
**Label:** `eg:5.55`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.4.5` — Dimensionality Reduction and Feature Selection

## Learning objective

Derive ratio features that normalize price by size for fair comparisons.

## Chapter context

Section 5.4.5 derives ratio features such as price per square foot for fair comparisons across sizes. Dividing list price by square footage yields price per square foot, a normalized metric that compares homes of different sizes more fairly than raw price alone.

## What this example shows

Dividing list price by square footage yields price per square foot, a normalized metric that compares homes of different sizes more fairly than raw price alone.

## What you should learn

### From the concept
- Dividing list price by square footage yields price per square foot, a normalized metric that compares homes of different sizes more fairly than raw price alone.

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
cd modules/chapter5/example55
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Dividing list price by square footage yields price per square foot, a normalized metric that compares homes of different sizes more fairly than raw price alone.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Engineer Price Per Square Foot” appear, and which Chapter 5 remedy would you apply first?

## Notes

- Prose-only in the manuscript.
