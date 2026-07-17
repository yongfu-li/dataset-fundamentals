# Example 13.36 — Docker Image for ML Training Stack

**Chapter:** 13  
**Label:** `eg:13.36`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.7.3` — Docker containers

## Learning objective

Freeze Python library versions in a Docker image for ML training reproducibility.

## Chapter context

Section 13.7.3 covers cloud VMs and parallel chunk processing for shared runtime. In a machine learning project, a Docker image can bundle dependencies for a training script. Specific library versions, such as TensorFlow, NumPy, and pandas, can be fixed in the c…

## What this example shows

In a machine learning project, a Docker image can bundle dependencies for a training script. Specific library versions, such as TensorFlow, NumPy, and pandas, can be fixed in the container.

## What you should learn

### From the concept
- In a machine learning project, a Docker image can bundle dependencies for a training script.
- Specific library versions, such as TensorFlow, NumPy, and pandas, can be fixed in the container.

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
cd modules/chapter13/example36
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Docker: freeze Python library versions for ML training.
```

## How to interpret the result

The takeaway 'freeze Python library versions for ML training.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Docker Image for ML Training Stack' is missing from your current project README?

## Related examples

- `eg:13.35` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
