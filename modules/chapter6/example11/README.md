# Example 6.11 — Continuous Sales Totals

**Chapter:** 6  
**Label:** `eg:6.11`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.2.1` — Types of Data

## Learning objective

Treat monetary sales totals as continuous and inspect center, spread, skew, and outliers.

## Chapter context

Example 6.11 pairs with 6.10—annual sales amounts such as $1,234,567.89 are continuous within a monetary range.

## What this example shows

Sales ledger amounts are continuous because they can take any value in a range—EDA inspects center, spread, skew, and outliers.

## Key terms

- **Monetary continuous** — Dollar amounts on a ratio scale.
- **Right skew** — Common in revenue data with a few very large values.

## What you should learn

### From the concept
- Money is continuous, not discrete counts.
- Skew and outliers are expected—mean alone misleads.
- Log transforms (Chapter 5) often follow skew checks (Example 6.2).

### From the output / result
- `run.sh` states continuous monetary type and EDA focus areas.

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
cd modules/chapter6/example11
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Continuous sales total:
$1,234,567.89 is a measured monetary amount within a range.
For EDA, treat sales totals as continuous and inspect center, spread, skew, and outliers.
```

## How to interpret the result

Before comparing regional sales means, check skew and currency consistency (Chapter 5 eg:5.43).

## Try it / Reflect

- Would you report mean or median total sales for a chain with a few flagship stores?

## Related examples

- `eg:6.10` — General continuous measures.
- `eg:6.2` — Skew informs summary choice.
- `eg:6.7` — Outlier decisions on large amounts.

## Notes

- Prose-only.
