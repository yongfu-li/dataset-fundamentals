# Example 13.40 — Regression Tests After Cleaning Changes

**Chapter:** 13  
**Label:** `eg:13.40`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.8.1` — Continuous Integration and Testing for Reproducible Workflows

## Learning objective

Regression-test outputs when data-cleaning steps change.

## Chapter context

Section 13.8.1 supports distributed collaboration with coordinated communication channels. If a new data cleaning step is added to the pipeline, regression tests can check whether this change affects the output in unintended ways. CI tools run these tests automatically o…

## What this example shows

If a new data cleaning step is added to the pipeline, regression tests can check whether this change affects the output in unintended ways. CI tools run these tests automatically on each change.

## What you should learn

### From the concept
- If a new data cleaning step is added to the pipeline, regression tests can check whether this change affects the output in unintended ways.
- CI tools run these tests automatically on each change.

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
cd modules/chapter13/example40
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
CI: regression-test outputs when the cleaning step changes.
```

## How to interpret the result

The takeaway 'regression-test outputs when the cleaning step changes.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Regression Tests After Cleaning Changes' is missing from your current project README?

## Related examples

- `eg:13.39` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
