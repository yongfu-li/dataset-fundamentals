# Example 8.9 — Medical Condition Codebook

**Chapter:** 8  
**Label:** `eg:8.9`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.2.5` — Codebooks: Maps Codes to Categorical Values

## Learning objective

Use a CSV codebook to map numeric disease codes to condition names.

## Chapter context

Section 8.2.5 introduces codebooks that map numeric codes to categorical labels (common in clinical data). A dataset on medical conditions might use numerical codes to represent different diseases. The codebook would map each code to its corresponding disease name:

## What this example shows

A dataset on medical conditions might use numerical codes to represent different diseases. The codebook would map each code to its corresponding disease name:

## What you should learn

### From the artifact / process
- codebook.csv ---

### From the output / result
- `run.sh` displays the chapter artifact or runs `main.py`—compare output to the manuscript listing.

## Contents

| File | Role |
|------|------|
| `codebook.csv` | Disease code → name mapping |
| `install.sh` | Prerequisite check (no global tool install) |
| `run.sh` | Displays artifact or runs demo |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ if `main.py` is present; otherwise Bash only

## Setup

```bash
cd modules/chapter8/example9
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
--- codebook.csv ---
Code,Disease Name
1,Hypertension
2,Diabetes
3,Asthma
4,Chronic Obstructive Pulmonary Disease (COPD)
```

## How to interpret the result

Each line or field in the captured output should map to a documentation or version-control obligation from Section 8—if a collaborator cannot answer 'which version and which transform' from this artifact alone, add metadata.

## Try it / Reflect

- Add one missing field to the medical condition codebook artifact—what downstream user would need it?

## Related examples

- `eg:8.30` — JSON codebook for categorical labels.
- `eg:8.7` — Allowed values in dictionary form.

## Notes

- Artifact from chapter listing.
