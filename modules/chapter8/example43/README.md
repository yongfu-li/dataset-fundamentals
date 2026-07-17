# Example 8.43 — DVC Stages in a Sensor Pipeline

**Chapter:** 8  
**Label:** `eg:8.43`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.7.1` — Automating Documentation Updates

## Learning objective

Read a DVC pipeline definition linking preprocess, train, and evaluate stages with explicit deps and outs.

## Chapter context

Section 8.7.1 covers automated doc updates, lineage, privacy processing, and emerging audit ideas. Consider a data pipeline that pulls raw sensor data, cleans it, and uses it for model training. By incorporating DVC in the pipeline, every transformation or modification is versioned and linked to sp…

## What this example shows

Consider a data pipeline that pulls raw sensor data, cleans it, and uses it for model training. By incorporating DVC in the pipeline, every transformation or modification is versioned and linked to specific models:

## What you should learn

### From the artifact / process
- dvc.yaml ---
- name: ingest_data
- sensor_data/raw_data.csv

### From the output / result
- `run.sh` displays the chapter artifact or runs `main.py`—compare output to the manuscript listing.

## Contents

| File | Role |
|------|------|
| `dvc.yaml` | Sensor ingest → clean → train stages |
| `install.sh` | Prerequisite check (no global tool install) |
| `run.sh` | Displays artifact or runs demo |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ if `main.py` is present; otherwise Bash only

## Setup

```bash
cd modules/chapter8/example43
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
--- dvc.yaml ---
version: "v1.0"
stages:
  - name: ingest_data
    cmd: python ingest_data.py
    deps:
      - sensor_data/raw_data.csv
  - name: clean_data
    cmd: python clean_data.py
    deps:
      - sensor_data/raw_data.csv
  - name: train_model
    cmd: python train_model.py
    deps:
      - cleaned_data.csv
```

## How to interpret the result

Each line or field in the captured output should map to a documentation or version-control obligation from Section 8—if a collaborator cannot answer 'which version and which transform' from this artifact alone, add metadata.

## Try it / Reflect

- Add one missing field to the dvc stages in a sensor pipeline artifact—what downstream user would need it?

## Related examples

- `eg:8.42` — Previous example in the same section.
- `eg:8.44` — Next example in the same section.

## Notes

- Artifact from chapter listing.
