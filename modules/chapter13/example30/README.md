# Example 13.30 — Genomics Pipeline Runs in Fixed Order

**Chapter:** 13  
**Label:** `eg:13.30`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.6.3` — Ethical Considerations in Open Science

## Learning objective

Enforce fixed step order in genomics pipelines across runs.

## Chapter context

Section 13.6.3 applies CI/CD to test preprocessing, training, and cross-environment consistency. In genomics, a workflow might automate data quality control, sequencing, annotation, and statistical analysis, ensuring that all steps are executed in the same order every time.

## What this example shows

In genomics, a workflow might automate data quality control, sequencing, annotation, and statistical analysis, ensuring that all steps are executed in the same order every time.

## What you should learn

### From the concept
- In genomics, a workflow might automate data quality control, sequencing, annotation, and statistical analysis, ensuring that all steps are executed in the same order every time.

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
cd modules/chapter13/example30
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Pipelines: enforce a fixed step order across runs.
```

## How to interpret the result

The takeaway 'enforce a fixed step order across runs.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Genomics Pipeline Runs in Fixed Order' is missing from your current project README?

## Related examples

- `eg:13.29` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
