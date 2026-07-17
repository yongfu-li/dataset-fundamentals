# Example 6.8 — City Name Inconsistency

**Chapter:** 6  
**Label:** `eg:6.8`  
**Source:** `author/chapter6.tex`  
**Section:** `sec:6.1.2` — Key Benefits of EDA

## Learning objective

Resolve geographic label variants (NY vs New York City) before frequency or join analysis.

## Chapter context

Section 6.1.2 inconsistency benefit—Example 6.8 is the city-name collision found in EDA and fixed in Chapter 5 standardization.

## What this example shows

One row lists 'NY' while another lists 'New York City' for the same geography—frequency tables and joins fail until mapped to one canonical label.

## Key terms

- **Canonical category** — Single approved string per real-world entity.
- **Frequency table** — EDA tool that reveals duplicate labels for the same concept.

## What you should learn

### From the concept
- Categorical EDA starts with value counts, not modeling.
- Alias variants split counts and distort maps.
- Document mapping rules before aggregation (Chapter 5 eg:5.20).

### From the output / result
- `run.sh` walks frequency-table discovery and canonical mapping.

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
cd modules/chapter6/example8
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
City-name consistency check:
- Frequency table reveals NY / New York / New York City.
- Confirm that they mean the same geography.
- Map them to one documented canonical category before analysis.
```

## How to interpret the result

If your bar chart shows both NY and New York City as separate bars, Example 6.8 applies—fix labels before interpreting geography.

## Try it / Reflect

- List three city aliases in your data that should collapse to one label.

## Related examples

- `eg:5.20` — Male vs M split in Chapter 5.
- `eg:5.21` — Free-text city normalization effort.
- `eg:6.13` — Nominal categories in theory.

## Notes

- Prose-only.
