# Example 13.50 — Environment Drift Breaks Identical Code

**Chapter:** 13  
**Label:** `eg:13.50`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.14.1` — Common Pitfalls in Data and Workflow Management

## Learning objective

Diagnose environment drift and fix it with containers or pinned virtual envs.

## Chapter context

Section 13.14.1 adds object-storage versioning as a backup layer for audit recovery. Code that runs perfectly on one researcher's system may fail or produce different outputs on another system because of discrepancies in installed dependencies or the computational …

## What this example shows

Code that runs perfectly on one researcher's system may fail or produce different outputs on another system because of discrepancies in installed dependencies or the computational environment. Containerization tools such as Docker or virtual environments (for example, conda) encapsulate dependencies so the code runs consistently across machines.

## What you should learn

### From the concept
- Code that runs perfectly on one researcher's system may fail or produce different outputs on another system because of discrepancies in installed dependencies or the computational environment.
- Containerization tools such as Docker or virtual environments (for example, conda) encapsulate dependencies so the code runs consistently across machines.

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
cd modules/chapter13/example50
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Pitfall: environment drift; fix with containers or virtual envs.
```

## How to interpret the result

The takeaway 'environment drift; fix with containers or virtual envs.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- What package version drift have you seen break a notebook rerun?

## Related examples

- `eg:13.1` — Deterministic rerun baseline.
- `eg:13.34` — Docker fix.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
