# Example 13.6 — Missing Hyperparameters Block Replication

**Chapter:** 13  
**Label:** `eg:13.6`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.1.3` — Key Challenges in Achieving Reproducibility

## Learning objective

Identify undocumented hyperparameters and preprocessing as replication blockers.

## Chapter context

Section 13.1.3 lists practical barriers—privacy, missing parameters, and incompatible standards. A researcher might describe a machine learning model in their paper without providing the hyperparameters or data preprocessing steps, making it impossible for others to replicate …

## What this example shows

A researcher might describe a machine learning model in their paper without providing the hyperparameters or data preprocessing steps, making it impossible for others to replicate their experiment.

## What you should learn

### From the concept
- A researcher might describe a machine learning model in their paper without providing the hyperparameters or data preprocessing steps, making it impossible for others to replicate their experiment.

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
cd modules/chapter13/example6
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Barrier: undocumented hyperparameters/preprocessing prevent replication.
```

## How to interpret the result

The takeaway 'undocumented hyperparameters/preprocessing prevent replication.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Missing Hyperparameters Block Replication' is missing from your current project README?

## Related examples

- `eg:13.52` — Undocumented methods.
- `eg:13.9` — Full process documentation.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
