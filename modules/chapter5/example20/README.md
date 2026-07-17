# Example 5.20 — Male Versus M Split Categories

**Chapter:** 5  
**Label:** `eg:5.20`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.4` — Inconsistent Data: Examples and Issues

## Learning objective

Collapse label variants so Male and M are one category before modeling or charting.

## Chapter context

Section 5.2.4 covers inconsistent dates, gender codes, free text, and join keys that block merges until standardized. Treating ``Male'' and ``M'' as separate levels makes bar charts and models report two groups for the same gender, understating each count and distorting downstream metrics.

## What this example shows

Treating ``Male'' and ``M'' as separate levels makes bar charts and models report two groups for the same gender, understating each count and distorting downstream metrics.

## What you should learn

### From the concept
- Treating ``Male'' and ``M'' as separate levels makes bar charts and models report two groups for the same gender, understating each count and distorting downstream metrics.

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
cd modules/chapter5/example20
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Treating "Male" and "M" as separate levels makes bar charts and models report two groups for the same gender, understating each count and distorting downstream metrics.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Male Versus M Split Categories” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.19` — Previous example in the same section.
- `eg:5.21` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
