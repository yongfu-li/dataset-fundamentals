# Example 8.28 — DVC Pipeline Stages for Training

**Chapter:** 8  
**Label:** `eg:8.28`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.4.12` — Automating Version Control and Live Demonstration

## Learning objective

Read a DVC pipeline definition linking preprocess, train, and evaluate stages with explicit deps and outs.

## Chapter context

Section 8.4.12 automates version control with CI (GitHub Actions) and DVC pipeline stages. In a machine learning project, the typical steps might include: Stage 1: Download raw data from a source. Stage 2: Preprocess the data (e.g., cleaning, normalization). Stage 3: Train a machine learnin…

## What this example shows

In a machine learning project, the typical steps might include: Stage 1: Download raw data from a source. Stage 2: Preprocess the data (e.g., cleaning, normalization). Stage 3: Train a machine learning model. Stage 4: Evaluate the model and store the results. A DVC pipeline file (e.g., dvc.yaml) might look like this: With this configuration, DVC can automatically track which files were used as inputs (dependencies) and which files were generated as outputs (the model and evaluation results). Whenever a change occurs in the data or code, DVC can trigger the appropriate steps in the pipeline, ensuring that the correct versions of the data and models are used, and all results are reproducible.

## What you should learn

### From the artifact / process
- dvc.yaml ---
- data/raw_data.csv
- data/preprocessed_data.csv

### From the output / result
- `run.sh` displays the chapter artifact or runs `main.py`—compare output to the manuscript listing.

## Contents

| File | Role |
|------|------|
| `dvc.yaml` | preprocess → train → evaluate pipeline |
| `install.sh` | Prerequisite check (no global tool install) |
| `run.sh` | Displays artifact or runs demo |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ if `main.py` is present; otherwise Bash only

## Setup

```bash
cd modules/chapter8/example28
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
--- dvc.yaml ---
stages:
  preprocessing:
    cmd: python preprocess.py data/raw_data.csv data/preprocessed_data.csv
    deps:
      - data/raw_data.csv
    outs:
      - data/preprocessed_data.csv
  training:
    cmd: python train_model.py data/preprocessed_data.csv models/model.pkl
    deps:
      - data/preprocessed_data.csv
    outs:
      - models/model.pkl
  evaluating:
    cmd: python evaluate_model.py models/model.pkl
    deps:
      - models/model.pkl
```

## How to interpret the result

Each line or field in the captured output should map to a documentation or version-control obligation from Section 8—if a collaborator cannot answer 'which version and which transform' from this artifact alone, add metadata.

## Try it / Reflect

- Add one missing field to the dvc pipeline stages for training artifact—what downstream user would need it?

## Related examples

- `eg:8.27` — Previous example in the same section.
- `eg:8.29` — Next example in the same section.

## Notes

- Artifact from chapter listing.
