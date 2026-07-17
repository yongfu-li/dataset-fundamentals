# Example 5.21 — Weeks Normalizing Free Text Cities

**Chapter:** 5  
**Label:** `eg:5.21`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.4` — Inconsistent Data: Examples and Issues

## Learning objective

Estimate effort to normalize free-text city fields before geographic joins.

## Chapter context

Section 5.2.4 covers inconsistent dates, gender codes, free text, and join keys that block merges until standardized. Free-text city fields such as ``NYC,'' ``New York,'' and ``new york'' may require weeks of mapping rules before geographic analysis or joins to census tables are reliable.

## What this example shows

Free-text city fields such as ``NYC,'' ``New York,'' and ``new york'' may require weeks of mapping rules before geographic analysis or joins to census tables are reliable.

## What you should learn

### From the concept
- Free-text city fields such as ``NYC,'' ``New York,'' and ``new york'' may require weeks of mapping rules before geographic analysis or joins to census tables are reliable.

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
cd modules/chapter5/example21
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Free-text city fields such as "NYC," "New York," and "new york" may require weeks of mapping rules before geographic analysis or joins to census tables are reliable.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Weeks Normalizing Free Text Cities” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.20` — Previous example in the same section.

## Notes

- Prose-only in the manuscript.
