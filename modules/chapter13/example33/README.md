# Example 13.33 — Notebook Scale and Environment Limits

**Chapter:** 13  
**Label:** `eg:13.33`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.7.1` — Jupyter Notebooks for Reproducible Research

## Learning objective

Pair notebooks with version control and containers to overcome scale and environment limits.

## Chapter context

Section 13.7.1 introduces RMarkdown for literate, recompilable analysis reports. Large datasets included in notebooks can become unwieldy, and maintaining consistent environments for running notebooks on different systems can be challenging. Integrating noteboo…

## What this example shows

Large datasets included in notebooks can become unwieldy, and maintaining consistent environments for running notebooks on different systems can be challenging. Integrating notebooks with version control and containers mitigates these risks.

## What you should learn

### From the concept
- Large datasets included in notebooks can become unwieldy, and maintaining consistent environments for running notebooks on different systems can be challenging.
- Integrating notebooks with version control and containers mitigates these risks.

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
cd modules/chapter13/example33
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Notebook limits: pair with version control and containers.
```

## How to interpret the result

The takeaway 'pair with version control and containers.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Notebook Scale and Environment Limits' is missing from your current project README?

## Related examples

- `eg:13.32` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
