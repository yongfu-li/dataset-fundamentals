# Example 13.11 — Unpinned Dataset Versions Break Replication

**Chapter:** 13  
**Label:** `eg:13.11`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.3.1` — Dataset Versioning: Concepts and Tools

## Learning objective

Pin and archive the exact dataset version cited in a publication.

## Chapter context

Section 13.3.1 covers findability and accessibility through repositories, metadata, and version pins. A researcher updates a dataset after publication to fix errors or add records from an ongoing study. If the version used in the original paper was never identified and archived, th…

## What this example shows

A researcher updates a dataset after publication to fix errors or add records from an ongoing study. If the version used in the original paper was never identified and archived, the exact conditions of the published analysis can no longer be reconstructed, and replication attempts silently compare against different data.

## What you should learn

### From the concept
- A researcher updates a dataset after publication to fix errors or add records from an ongoing study.
- If the version used in the original paper was never identified and archived, the exact conditions of the published analysis can no longer be reconstructed, and replication attempts silently compare against different data.

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
cd modules/chapter13/example11
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Pin and archive the exact dataset version used in a publication.
```

## How to interpret the result

The takeaway 'Pin and archive the exact dataset version used in a publication.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- What DOI or commit hash would you cite for the dataset in your paper?

## Related examples

- `eg:13.55` — DVC pins data for retraining.
- `Chapter 8` — Version control discipline.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
