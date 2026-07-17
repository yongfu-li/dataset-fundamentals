# Example 8.22 — Quilt for Genomic Dataset Versions

**Chapter:** 8  
**Label:** `eg:8.22`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.4.7` — Quilt

## Learning objective

Use Quilt to catalog genomic dataset versions with annotations and preprocessing state.

## Chapter context

Section 8.4.7 describes Quilt packages for versioned scientific datasets. A research team uses Quilt to manage a set of genomic datasets, each of which has multiple versions with different annotations and preprocessing steps. Researchers can access the appropriate version f…

## What this example shows

A research team uses Quilt to manage a set of genomic datasets, each of which has multiple versions with different annotations and preprocessing steps. Researchers can access the appropriate version for their analysis and keep track of the dataset's evolution.

## What you should learn

### From the concept
- Quilt catalogs versions together with annotations and preprocessing state.
- Researchers can discover and retrieve the version appropriate to their analysis.

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
cd modules/chapter8/example22
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
- Quilt catalogs versions together with annotations and preprocessing state.
- Researchers can discover and retrieve the version appropriate to their analysis.
```

## How to interpret the result

Researchers can discover and retrieve the version appropriate to their analysis. Treat this as a release gate before sharing data or training models.

## Try it / Reflect

- Audit a dataset you maintain: which element of “Quilt for Genomic Dataset Versions” is missing from your README or DVC metadata?

## Notes

- Prose-only; run.sh prints operational takeaway.
