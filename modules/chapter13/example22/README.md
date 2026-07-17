# Example 13.22 — Climate Data Versus Weather Station Records

**Chapter:** 13  
**Label:** `eg:13.22`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.4.3` — Data Quality Standards for Reproducibility

## Learning objective

Cross-check climate model outputs against established weather-station records.

## Chapter context

Section 13.4.3 addresses data quality dimensions—completeness, consistency, and accuracy. Climate data may be cross-checked with historical temperature records from established weather stations to verify that the dataset reflects realistic patterns.

## What this example shows

Climate data may be cross-checked with historical temperature records from established weather stations to verify that the dataset reflects realistic patterns.

## What you should learn

### From the concept
- Climate data may be cross-checked with historical temperature records from established weather stations to verify that the dataset reflects realistic patterns.

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
cd modules/chapter13/example22
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Accuracy: validate against established benchmark records.
```

## How to interpret the result

The takeaway 'validate against established benchmark records.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Climate Data Versus Weather Station Records' is missing from your current project README?

## Related examples

- `eg:13.21` — Previous example in the same section.
- `eg:13.23` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
