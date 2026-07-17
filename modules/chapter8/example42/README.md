# Example 8.42 — Sphinx Data-Dictionary Generation

**Chapter:** 8  
**Label:** `eg:8.42`  
**Source:** `author/chapter8.tex`  
**Section:** `sec:8.7.1` — Automating Documentation Updates

## Learning objective

Run the Sphinx-style data-dictionary generator and read field descriptions it emits.

## Chapter context

Section 8.7.1 covers automated doc updates, lineage, privacy processing, and emerging audit ideas. Using Sphinx, the following code can be used to auto-generate a data dictionary:

## What this example shows

Using Sphinx, the following code can be used to auto-generate a data dictionary:

## What you should learn

### From the artifact / process
- Using Sphinx, the following code can be used to auto-generate a data dictionary:
- Inspect the artifact fields and tie each to a documentation or versioning duty.

### From the output / result
- `run.sh` displays the chapter artifact or runs `main.py`—compare output to the manuscript listing.

## Contents

| File | Role |
|------|------|
| `main.py` | Generates Sphinx-style field descriptions |
| `install.sh` | Prerequisite check (no global tool install) |
| `run.sh` | Displays artifact or runs demo |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ (stdlib only)

## Setup

```bash
cd modules/chapter8/example42
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
age: Age of the individual in years
gender: Self-described gender category
purchase_amount: Total amount spent by the customer in the month (USD)
```

## How to interpret the result

Each line or field in the captured output should map to a documentation or version-control obligation from Section 8—if a collaborator cannot answer 'which version and which transform' from this artifact alone, add metadata.

## Try it / Reflect

- Add one missing field to the sphinx data-dictionary generation artifact—what downstream user would need it?

## Related examples

- `eg:8.8` — JSON dictionary entry.
- `eg:8.19` — CSV dictionary in template.

## Notes

- Artifact from chapter listing.
