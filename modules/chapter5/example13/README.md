# Example 5.13 — Disk Failure Truncates Sensor File

**Chapter:** 5  
**Label:** `eg:5.13`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.2` — Causes of Missing Data

## Learning objective

Plan recovery when storage corruption deletes trailing sensor segments across a batch.

## Chapter context

Section 5.2.2 lists operational causes of missingness: nonresponse, entry errors, and storage failures—each needs a different audit and remediation path. If a disk failure truncates an IoT log mid-export, the last hour of temperature readings may be absent for every device in that batch. Recovery requires re-ingestion or imputation …

## What this example shows

If a disk failure truncates an IoT log mid-export, the last hour of temperature readings may be absent for every device in that batch. Recovery requires re-ingestion or imputation with explicit audit notes.

## What you should learn

### From the concept
- If a disk failure truncates an IoT log mid-export, the last hour of temperature readings may be absent for every device in that batch.
- Recovery requires re-ingestion or imputation with explicit audit notes.

### From the output / result
- `run.sh` prints the structured takeaway as a cleaning/preprocessing checklist.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op installer |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter5/example13
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
If a disk failure truncates an IoT log mid-export, the last hour of temperature readings may be absent for every device in that batch. Recovery requires re-ingestion or imputation with explicit audit notes.
```

## How to interpret the result

Recovery requires re-ingestion or imputation with explicit audit notes.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Disk Failure Truncates Sensor File” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.12` — Previous example in the same section.

## Notes

- Prose-only in the manuscript.
