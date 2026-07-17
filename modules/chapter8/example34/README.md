# Example 8.34 — Large Binary Files Beyond Plain Git

**Chapter:** 8  
**Label:** `eg:8.34`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.5.9` — Addressing Common Challenges

## Learning objective

Choose Git LFS or DVC when plain Git is inefficient for large binaries.

## Chapter context

Section 8.5.9 addresses challenges (large files, conflicts, reproducibility, access) via case studies. Git is inefficient when dealing with large binary files. Git LFS and DVC offer solutions by storing large files outside the Git repository and maintaining metadata for version control. : Use Git LFS o…

## What this example shows

Git is inefficient when dealing with large binary files. Git LFS and DVC offer solutions by storing large files outside the Git repository and maintaining metadata for version control. : Use Git LFS or DVC to store large data files externally and only track their metadata within Git. This minimizes the size of your repository and improves performance.

## What you should learn

### From the concept
- Large binary history makes plain Git repositories slow and oversized.
- Git LFS or DVC stores bytes externally while Git tracks stable metadata.

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
cd modules/chapter8/example34
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
- Large binary history makes plain Git repositories slow and oversized.
- Git LFS or DVC stores bytes externally while Git tracks stable metadata.
```

## How to interpret the result

Git LFS or DVC stores bytes externally while Git tracks stable metadata. Treat this as a release gate before sharing data or training models.

## Try it / Reflect

- Audit a dataset you maintain: which element of “Large Binary Files Beyond Plain Git” is missing from your README or DVC metadata?

## Related examples

- `eg:8.35` — Next example in the same section.

## Notes

- Prose-only; run.sh prints operational takeaway.
