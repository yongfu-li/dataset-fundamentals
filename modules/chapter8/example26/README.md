# Example 8.26 — Quilt for Multi-Experiment Dataset Sharing

**Chapter:** 8  
**Label:** `eg:8.26`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.4.10` — Tools for Dataset Version Control

## Learning objective

Share multi-experiment datasets across teams with Quilt version pins.

## Chapter context

Section 8.4.10 surveys Git LFS, DVC, and Quilt for large or multi-experiment versioning. A research team working on multiple datasets from different experiments can use Quilt to manage, version, and share these datasets across a distributed team, ensuring that everyone works with the corr…

## What this example shows

A research team working on multiple datasets from different experiments can use Quilt to manage, version, and share these datasets across a distributed team, ensuring that everyone works with the correct version.

## What you should learn

### From the concept
- Quilt packages and catalogs datasets for distributed collaboration.
- Versioned access prevents experiments from silently using different data.

### From the output / result
- `run.sh` prints the structured documentation/version-control takeaway.

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
cd modules/chapter8/example26
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
- Quilt packages and catalogs datasets for distributed collaboration.
- Versioned access prevents experiments from silently using different data.
```

## How to interpret the result

Versioned access prevents experiments from silently using different data. Treat this as a release gate before sharing data or training models.

## Try it / Reflect

- Audit a dataset you maintain: which element of “Quilt for Multi-Experiment Dataset Sharing” is missing from your README or DVC metadata?

## Related examples

- `eg:8.25` — Previous example in the same section.

## Notes

- Prose-only; run.sh prints operational takeaway.
