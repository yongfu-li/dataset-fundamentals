# Example 5.43 — Normalize Currency Symbols Across Markets

**Chapter:** 5  
**Label:** `eg:5.43`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.3.4` — Common Standardization Techniques

## Learning objective

Convert mixed USD/EUR/GBP amounts to one currency before aggregation.

## Chapter context

Section 5.3.4 standardizes currencies and other cross-market representations before aggregation. International sales files may mix USD, EUR, and GBP symbols in one price column. Converting all amounts to a single currency enables fair comparison and aggregation.

## What this example shows

International sales files may mix USD, EUR, and GBP symbols in one price column. Converting all amounts to a single currency enables fair comparison and aggregation.

## What you should learn

### From the concept
- International sales files may mix USD, EUR, and GBP symbols in one price column.
- Converting all amounts to a single currency enables fair comparison and aggregation.

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
cd modules/chapter5/example43
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
International sales files may mix USD, EUR, and GBP symbols in one price column. Converting all amounts to a single currency enables fair comparison and aggregation.
```

## How to interpret the result

Converting all amounts to a single currency enables fair comparison and aggregation.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Normalize Currency Symbols Across Markets” appear, and which Chapter 5 remedy would you apply first?

## Notes

- Prose-only in the manuscript.
