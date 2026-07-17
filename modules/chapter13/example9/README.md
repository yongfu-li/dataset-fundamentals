# Example 13.9 — Undocumented Methodology Blocks Replication

**Chapter:** 13  
**Label:** `eg:13.9`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.1.5` — Foundations of Dataset Documentation and Versioning

## Learning objective

State that full process documentation is required for independent replication.

## Chapter context

Section 13.1.5 requires documentation detailed enough to reconstruct the full analytical process. In a medical study, if the methodology for collecting patient data is unclear, another researcher cannot evaluate the reliability of the findings or replicate the study. A 2016 sur…

## What this example shows

In a medical study, if the methodology for collecting patient data is unclear, another researcher cannot evaluate the reliability of the findings or replicate the study. A 2016 survey in found that a majority of researchers had failed to reproduce published experiments, with inadequate documentation of methods and data among the leading causes .

## What you should learn

### From the concept
- In a medical study, if the methodology for collecting patient data is unclear, another researcher cannot evaluate the reliability of the findings or replicate the study.
- A 2016 survey in found that a majority of researchers had failed to reproduce published experiments, with inadequate documentation of methods and data among the leading causes .

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
cd modules/chapter13/example9
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Documentation must let others reconstruct the full process.
```

## How to interpret the result

The takeaway 'Documentation must let others reconstruct the full process.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Undocumented Methodology Blocks Replication' is missing from your current project README?

## Related examples

- `eg:13.10` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
