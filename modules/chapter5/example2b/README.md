# Example 5.2b — Unifying Intrusion Features Before Model Training

**Chapter:** 5  
**Label:** `eg:5.2b`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.1.1` — Importance of Data Cleaning and Preprocessing

## Learning objective

Describe cross-dataset schema unification before training intrusion detectors on merged corpora.

## Chapter context

Section 5.1.1 argues that label and feature quality bound model performance before architecture choices. Cleaning defects in targets or unused columns show up immediately in supervised pipelines. A security team that wants to compare detectors across CIC-style and UNSW-style releases first rebuilds each corpus into a shared table of flow statistics, payload-derived fields, …

## What this example shows

A security team that wants to compare detectors across CIC-style and UNSW-style releases first rebuilds each corpus into a shared table of flow statistics, payload-derived fields, and short history windows. Only after that schema passes consistency checks (identical column names, units, and label taxonomies) do they train a single model family and report cross-dataset scores .

## What you should learn

### From the concept
- A security team that wants to compare detectors across CIC-style and UNSW-style releases first rebuilds each corpus into a shared table of flow statistics, payload-derived fields, and short history windows.
- Only after that schema passes consistency checks (identical column names, units, and label taxonomies) do they train a single model family and report cross-dataset scores .

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
cd modules/chapter5/example2b
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
UM-NIDS-style cross-dataset standardization:
- Rebuild CIC-style and UNSW-style releases into one shared flow-statistics table
- Align payload-derived fields and short history windows
- Pass consistency checks: identical column names, units, label taxonomies
Only then train one model family and report cross-dataset scores.
```

## How to interpret the result

Use this takeaway as a gate in your cleaning checklist before preprocessing or model fitting—Chapter 6 EDA assumes these defects are already understood.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Unifying Intrusion Features” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.2` — Column drops for efficiency after schema alignment.
- `eg:5.19` — Join-key standardization across sources.

## Notes

- Prose-only in the manuscript.
