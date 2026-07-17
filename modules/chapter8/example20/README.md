# Example 8.20 — CSV Dataset Commits in Git

**Chapter:** 8  
**Label:** `eg:8.20`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.4.5` — Git-based Version Control

## Learning objective

Commit meaningful CSV updates in Git with descriptive messages.

## Chapter context

Section 8.4.5 covers Git commits for small CSV/text dataset updates aligned with code. A dataset in CSV format is stored in a Git repository, and each time the dataset is updated (e.g., adding new rows of data), a new commit is made.

## What this example shows

A dataset in CSV format is stored in a Git repository, and each time the dataset is updated (e.g., adding new rows of data), a new commit is made.

## What you should learn

### From the concept
- Commit each meaningful CSV update with a reason.
- Git history is appropriate for small text-like data and keeps code/data changes aligned.

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
cd modules/chapter8/example20
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
- Commit each meaningful CSV update with a reason.
- Git history is appropriate for small text-like data and keeps code/data changes aligned.
```

## How to interpret the result

Git history is appropriate for small text-like data and keeps code/data changes aligned. Treat this as a release gate before sharing data or training models.

## Try it / Reflect

- Audit a dataset you maintain: which element of “CSV Dataset Commits in Git” is missing from your README or DVC metadata?

## Related examples

- `eg:8.33` — Commit message best practice.
- `eg:8.34` — When CSV in Git is not enough.

## Notes

- Prose-only; run.sh prints operational takeaway.
