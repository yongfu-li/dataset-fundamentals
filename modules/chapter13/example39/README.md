# Example 13.39 — CI Retests Model Training After Updates

**Chapter:** 13  
**Label:** `eg:13.39`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.8.1` — Continuous Integration and Testing for Reproducible Workflows

## Learning objective

Fail CI when retraining metrics diverge from accepted baselines.

## Chapter context

Section 13.8.1 supports distributed collaboration with coordinated communication channels. In a machine learning project, the CI system can test whether model training produces the same results each time. This holds even as the code or the dataset is updated. If a model …

## What this example shows

In a machine learning project, the CI system can test whether model training produces the same results each time. This holds even as the code or the dataset is updated. If a model produces divergent metrics, the pipeline fails before results are published.

## What you should learn

### From the concept
- In a machine learning project, the CI system can test whether model training produces the same results each time.
- This holds even as the code or the dataset is updated.

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
cd modules/chapter13/example39
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
CI: fail the pipeline when retraining metrics diverge.
```

## How to interpret the result

The takeaway 'fail the pipeline when retraining metrics diverge.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'CI Retests Model Training After Updates' is missing from your current project README?

## Related examples

- `eg:13.38` — Previous example in the same section.
- `eg:13.40` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
