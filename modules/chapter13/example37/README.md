# Example 13.37 — CI Checks Preprocessing and Inputs

**Chapter:** 13  
**Label:** `eg:13.37`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.8.1` — Continuous Integration and Testing for Reproducible Workflows

## Learning objective

Automate CI checks on preprocessing, dependencies, and input formats.

## Chapter context

Section 13.8.1 supports distributed collaboration with coordinated communication channels. In a data analysis pipeline, a CI tool might run unit tests on preprocessing code. It can check that required libraries are installed correctly. It can also validate that input dat…

## What this example shows

In a data analysis pipeline, a CI tool might run unit tests on preprocessing code. It can check that required libraries are installed correctly. It can also validate that input datasets are correctly formatted.

## What you should learn

### From the concept
- In a data analysis pipeline, a CI tool might run unit tests on preprocessing code.
- It can check that required libraries are installed correctly.

### From the output / result
- `run.sh` prints the structured takeaway below—use it in reproducibility and open-science reviews.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op or prerequisite check |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter13/example37
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
CI: auto-test preprocessing, dependencies, and input formats.
```

## How to interpret the result

The takeaway 'auto-test preprocessing, dependencies, and input formats.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'CI Checks Preprocessing and Inputs' is missing from your current project README?

## Related examples

- `eg:13.38` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
