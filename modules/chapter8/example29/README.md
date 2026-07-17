# Example 8.29 — Live Demonstration of DVC Automation

**Chapter:** 8  
**Label:** `eg:8.29`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.4.12` — Automating Version Control and Live Demonstration

## Learning objective

Review the manuscript DVC+Git command sequence for init, add, push, stage creation, and pull.

## Chapter context

Section 8.4.12 automates version control with CI (GitHub Actions) and DVC pipeline stages. During a live demonstration, instructors can showcase how DVC integrates with Git and cloud storage to manage datasets, as well as how version control operations can be automated. : Initialize a Git r…

## What this example shows

During a live demonstration, instructors can showcase how DVC integrates with Git and cloud storage to manage datasets, as well as how version control operations can be automated. : Initialize a Git repository, initialize DVC, and configure remote storage. : Add a dataset to DVC and push it to remote storage. : Define a simple pipeline for preprocessing, model training, and evaluation using DVC. : Demonstrate the automatic tracking of dataset updates and model training when new data or code changes are pushed. Use a CI/CD tool to trigger these actions based on new commits. : Show how multiple team members can collaborate on the same dataset by pulling the correct version using DVC's pull command, ensuring that everyone is working with the same data.

## What you should learn

### From the artifact / process
- workflow.sh ---

### From the output / result
- `run.sh` displays the chapter artifact or runs `main.py`—compare output to the manuscript listing.

## Contents

| File | Role |
|------|------|
| `workflow.sh` | DVC+Git demonstration command sequence |
| `install.sh` | Prerequisite check (no global tool install) |
| `run.sh` | Displays artifact or runs demo |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ if `main.py` is present; otherwise Bash only

## Setup

```bash
cd modules/chapter8/example29
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
--- workflow.sh ---
#!/usr/bin/env bash
# Demonstration commands from the manuscript; review and configure a real remote before use.
git init
dvc init
dvc remote add -d myremote s3://mybucket/datasets
dvc add data/my_dataset.csv
git add data/my_dataset.csv.dvc
git commit -m "Add initial dataset"
dvc push
dvc stage add -n preprocess -d data/raw_data.csv -o data/preprocessed_data.csv python preprocess.py data/raw_data.csv data/preprocessed_data.csv
dvc stage add -n train -d data/preprocessed_data.csv -o models/model.pkl python train_model.py data/preprocessed_data.csv models/model.pkl
git pull
dvc pull
```

## How to interpret the result

Each line or field in the captured output should map to a documentation or version-control obligation from Section 8—if a collaborator cannot answer 'which version and which transform' from this artifact alone, add metadata.

## Try it / Reflect

- Add one missing field to the live demonstration of dvc automation artifact—what downstream user would need it?

## Related examples

- `eg:8.28` — Previous example in the same section.

## Notes

- Inspect the bundled artifact; configure real remotes/tools before production use.
