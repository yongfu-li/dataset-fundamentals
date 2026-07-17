# Example 8.24 — Git LFS for Large Training Artifacts

**Chapter:** 8  
**Label:** `eg:8.24`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.4.10` — Tools for Dataset Version Control

## Learning objective

Configure Git LFS pointer rules for large CSV/binary artifacts via .gitattributes.

## Chapter context

Section 8.4.10 surveys Git LFS, DVC, and Quilt for large or multi-experiment versioning. A machine learning project where models and training datasets are large files. Git LFS can track the evolution of the dataset and model files without making the Git repository too large.

## What this example shows

A machine learning project where models and training datasets are large files. Git LFS can track the evolution of the dataset and model files without making the Git repository too large.

## What you should learn

### From the artifact / process
- .gitattributes.example ---

### From the output / result
- `run.sh` displays the chapter artifact or runs `main.py`—compare output to the manuscript listing.

## Contents

| File | Role |
|------|------|
| `.gitattributes.example` | Git LFS pointer rules for large files |
| `install.sh` | Prerequisite check (no global tool install) |
| `run.sh` | Displays artifact or runs demo |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ if `main.py` is present; otherwise Bash only

## Setup

```bash
cd modules/chapter8/example24
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
--- .gitattributes.example ---
*.csv filter=lfs diff=lfs merge=lfs -text
*.bin filter=lfs diff=lfs merge=lfs -text
```

## How to interpret the result

Each line or field in the captured output should map to a documentation or version-control obligation from Section 8—if a collaborator cannot answer 'which version and which transform' from this artifact alone, add metadata.

## Try it / Reflect

- Add one missing field to the git lfs for large training artifacts artifact—what downstream user would need it?

## Related examples

- `eg:8.25` — Next example in the same section.

## Notes

- Artifact from chapter listing.
