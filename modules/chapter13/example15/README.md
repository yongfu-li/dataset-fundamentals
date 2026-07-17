# Example 13.15 — Community File Formats for Reuse

**Chapter:** 13  
**Label:** `eg:13.15`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.4.2` — Applying FAIR Principles to Datasets

## Learning objective

Choose community file formats (CSV, JSON, HDF5, NetCDF) to maximize reuse.

## Chapter context

Section 13.4.2 covers reusability: community formats and links to external references. Prefer community formats such as CSV or JSON for tabular data, HDF5 for large arrays, or NetCDF for climate data. These formats are widely supported by analysis tools and software.

## What this example shows

Prefer community formats such as CSV or JSON for tabular data, HDF5 for large arrays, or NetCDF for climate data. These formats are widely supported by analysis tools and software.

## What you should learn

### From the concept
- Prefer community formats such as CSV or JSON for tabular data, HDF5 for large arrays, or NetCDF for climate data.
- These formats are widely supported by analysis tools and software.

### From the output / result
- `run.sh` prints the structured takeaway below—use it in reproducibility and open-science reviews.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op or prerequisite check |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter13/example15
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Reusable: pick community formats (CSV, JSON, HDF5, NetCDF).
```

## How to interpret the result

The takeaway 'pick community formats (CSV, JSON, HDF5, NetCDF).' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Community File Formats for Reuse' is missing from your current project README?

## Related examples

- `eg:13.16` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
