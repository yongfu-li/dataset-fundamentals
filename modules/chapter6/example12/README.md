# Example 6.12 — Discrete Count Variables

**Chapter:** 6  
**Label:** `eg:6.12`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.2.1` — Types of Data

## Learning objective

Distinguish discrete count variables (children, items purchased) from continuous measures.

## Chapter context

Section 6.2.1—Example 6.12 gives whole-number count illustrations after continuous examples.

## What this example shows

Children in a family, items purchased, or cars in a lot are discrete—counted in whole numbers, not measured on a fractional scale.

## Key terms

- **Discrete variable** — Countable whole-number outcomes.
- **Count data** — Often modeled with Poisson or negative binomial methods later.

## What you should learn

### From the concept
- Counts cannot take 2.5 children—histogram bins differ from continuous.
- Means of counts are allowed; interpretation differs from continuous averages.
- Do not apply continuous-only transforms without checking support.

### From the output / result
- `run.sh` lists three discrete count examples.

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
cd modules/chapter6/example12
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Discrete counts:
- Number of children
- Items purchased
- Cars in a parking lot
These take distinct whole-number values because they are counted.
```

## How to interpret the result

If your 'items purchased' column has decimals, that is a data-quality flag (Chapter 5), not discrete structure.

## Try it / Reflect

- Name one discrete count and one continuous measure in a retail dataset.

## Related examples

- `eg:6.10` — Continuous contrast.
- `eg:6.13` — Nominal categories—not counts.
- `eg:6.15` — Mean still applies to numeric counts but interpretation differs.

## Notes

- Prose-only.
