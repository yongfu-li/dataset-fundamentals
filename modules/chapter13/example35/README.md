# Example 13.35 — Separate Containers per Pipeline Stage

**Chapter:** 13  
**Label:** `eg:13.35`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.7.3` — Docker containers

## Learning objective

Orchestrate separate Docker containers per pipeline stage with Compose.

## Chapter context

Section 13.7.3 covers cloud VMs and parallel chunk processing for shared runtime. A data processing pipeline might use a separate container for preprocessing, another for running analysis, and a third for generating reports.

## What this example shows

A data processing pipeline might use a separate container for preprocessing, another for running analysis, and a third for generating reports.

## What you should learn

### From the concept
- A data processing pipeline might use a separate container for preprocessing, another for running analysis, and a third for generating reports.

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
cd modules/chapter13/example35
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Docker Compose: one container per stage, orchestrated together.
```

## How to interpret the result

The takeaway 'one container per stage, orchestrated together.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Separate Containers per Pipeline Stage' is missing from your current project README?

## Related examples

- `eg:13.36` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
