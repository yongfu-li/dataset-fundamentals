# Example 9.3 — Manual Weather Observation Inconsistency

**Chapter:** 9  
**Label:** `eg:9.3`  
**Source:** `author/chapter9.tex`  
**Section:** `sec:9.1.1` — Why Traditional Pipelines Hit Limits

## Learning objective

Diagnose reliability risk when human observers interpret the same conditions differently.

## Chapter context

Section 9.1.1 names three limits of traditional pipelines—scalability, reliability, and cost—that motivate crowdsourcing, IoT, and streaming in the rest of the chapter. When collecting data on weather patterns through manual observation, discrepancies may arise due to different observers' interpretations of weather conditions.

## What this example shows

When collecting data on weather patterns through manual observation, discrepancies may arise due to different observers' interpretations of weather conditions.

## What you should learn

### From the concept
- Different observers interpret the same conditions differently
- Drift and inconsistency corrupt cross-site comparisons
- Sensors standardize what humans judge subjectively

### From the output / result
- `run.sh` prints the structured takeaway below—use it as a design checklist.

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
cd modules/chapter9/example3
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Reliability limit — manual observation:
- Different observers interpret the same conditions differently
- Drift and inconsistency corrupt cross-site comparisons
- Sensors standardize what humans judge subjectively
```

## How to interpret the result

The closing bullet—'Sensors standardize what humans judge subjectively'—is the decision gate: if your pipeline cannot deliver that outcome, the advanced method adds complexity without value.

## Try it / Reflect

- List two observer-dependent fields in your domain that sensors could standardize.

## Related examples

- `eg:9.2` — Another traditional pipeline limit.
- `eg:9.13` — Sensors standardize environmental readings.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
