# Example 13.18 — Documenting Clinical Trial Dropouts

**Chapter:** 13  
**Label:** `eg:13.18`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.4.3` — Data Quality Standards for Reproducibility

## Learning objective

Document clinical trial dropouts and their impact on completeness.

## Chapter context

Section 13.4.3 addresses data quality dimensions—completeness, consistency, and accuracy. In clinical trials, if certain participants dropped out of the study, this should be noted in the dataset along with the impact on the analysis.

## What this example shows

In clinical trials, if certain participants dropped out of the study, this should be noted in the dataset along with the impact on the analysis.

## What you should learn

### From the concept
- In clinical trials, if certain participants dropped out of the study, this should be noted in the dataset along with the impact on the analysis.

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
cd modules/chapter13/example18
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Completeness: document dropouts and their effect on analysis.
```

## How to interpret the result

The takeaway 'document dropouts and their effect on analysis.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Documenting Clinical Trial Dropouts' is missing from your current project README?

## Related examples

- `eg:13.19` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
