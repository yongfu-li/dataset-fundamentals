# Example 8.27 — GitHub Actions Dataset Update Pipeline

**Chapter:** 8  
**Label:** `eg:8.27`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.4.12` — Automating Version Control and Live Demonstration

## Learning objective

Inspect a GitHub Actions workflow that preprocesses data, commits DVC metadata, and pushes to remote storage.

## Chapter context

Section 8.4.12 automates version control with CI (GitHub Actions) and DVC pipeline stages. Imagine you are working on a machine learning model, and every time you commit new code to a Git repository, you want the following steps to occur: Run preprocessing on a new dataset. Add the updated …

## What this example shows

Imagine you are working on a machine learning model, and every time you commit new code to a Git repository, you want the following steps to occur: Run preprocessing on a new dataset. Add the updated dataset to DVC. Push the dataset to a remote cloud storage service. Trigger model training using the new dataset version. This workflow could be automated using GitHub Actions, with a YAML configuration file that defines the steps to execute: Every time a new dataset is added or updated, the CI/CD pipeline automatically stages the changes, commits them, and pushes the dataset to a cloud storage backend. The same pipeline can be used to trigger training or testing processes for machine learning models, keeping the entire workflow automated and reproducible.

## What you should learn

### From the artifact / process
- dataset-update.yml ---
- name: Checkout code
- name: Set up Python

### From the output / result
- `run.sh` displays the chapter artifact or runs `main.py`—compare output to the manuscript listing.

## Contents

| File | Role |
|------|------|
| `dataset-update.yml` | GitHub Actions DVC update workflow |
| `install.sh` | Prerequisite check (no global tool install) |
| `run.sh` | Displays artifact or runs demo |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ if `main.py` is present; otherwise Bash only

## Setup

```bash
cd modules/chapter8/example27
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
--- dataset-update.yml ---
name: Dataset Update Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  update-dataset:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: "3.8"
      - name: Install dependencies
        run: |
          pip install dvc
          pip install -r requirements.txt
      - name: Execute data preprocessing
        run: python preprocess_data.py
      - name: Add new data to DVC
        run: |
          dvc add data/my_updated_data.csv
          git add data/my_updated_data.csv.dvc
          git commit -m "Updated dataset"
      - name: Push data to DVC remote storage
        run: dvc push
```

## How to interpret the result

Each line or field in the captured output should map to a documentation or version-control obligation from Section 8—if a collaborator cannot answer 'which version and which transform' from this artifact alone, add metadata.

## Try it / Reflect

- Add one missing field to the github actions dataset update pipeline artifact—what downstream user would need it?

## Related examples

- `eg:8.28` — DVC pipeline YAML.
- `eg:8.29` — Live DVC workflow commands.

## Notes

- Inspect the bundled artifact; configure real remotes/tools before production use.
