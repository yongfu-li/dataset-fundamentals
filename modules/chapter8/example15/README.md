# Example 8.15 — Markdown Documentation Outline

**Chapter:** 8  
**Label:** `eg:8.15`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.3.8` — Text-Based Documentation

## Learning objective

Apply the chapter Markdown documentation outline (overview, TOC, dictionary, variables).

## Chapter context

Section 8.3.8 shows text-based Markdown outlines for human-readable dataset docs. A Markdown-based documentation might include sections like the dataset's overview, a table of contents, a data dictionary, and a description of each variable.

## What this example shows

A Markdown-based documentation might include sections like the dataset's overview, a table of contents, a data dictionary, and a description of each variable.

## What you should learn

### From the artifact / process
- DATASET.md ---
- [Data dictionary](#data-dictionary)
- [Variables](#variables)

### From the output / result
- `run.sh` displays the chapter artifact or runs `main.py`—compare output to the manuscript listing.

## Contents

| File | Role |
|------|------|
| `DATASET.md` | Markdown documentation outline |
| `install.sh` | Prerequisite check (no global tool install) |
| `run.sh` | Displays artifact or runs demo |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ if `main.py` is present; otherwise Bash only

## Setup

```bash
cd modules/chapter8/example15
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
--- DATASET.md ---
# Dataset documentation

## Overview
Describe the dataset's purpose, intended users, and excluded uses.

## Table of contents
- [Data dictionary](#data-dictionary)
- [Variables](#variables)

## Data dictionary
List each variable's name, type, description, allowed values, and units.

## Variables
Explain domain-specific interpretation and known caveats for each variable.
```

## How to interpret the result

Each line or field in the captured output should map to a documentation or version-control obligation from Section 8—if a collaborator cannot answer 'which version and which transform' from this artifact alone, add metadata.

## Try it / Reflect

- Add one missing field to the markdown documentation outline artifact—what downstream user would need it?

## Related examples

- `eg:8.19` — Filled retail template.
- `eg:8.1` — Why documentation matters for collaborators.

## Notes

- Artifact from chapter listing.
