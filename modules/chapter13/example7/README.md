# Example 13.7 — Incompatible Bioinformatics Naming Standards

**Chapter:** 13  
**Label:** `eg:13.7`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.1.3` — Key Challenges in Achieving Reproducibility

## Learning objective

Explain how incompatible bioinformatics naming standards block cross-lab comparison.

## Chapter context

Section 13.1.3 lists practical barriers—privacy, missing parameters, and incompatible standards. In bioinformatics, different labs might use different standards for naming genes or describing experimental conditions, making it challenging to integrate and compare datasets from…

## What this example shows

In bioinformatics, different labs might use different standards for naming genes or describing experimental conditions, making it challenging to integrate and compare datasets from multiple studies.

## What you should learn

### From the concept
- In bioinformatics, different labs might use different standards for naming genes or describing experimental conditions, making it challenging to integrate and compare datasets from multiple studies.

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
cd modules/chapter13/example7
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Barrier: incompatible naming standards block cross-lab comparison.
```

## How to interpret the result

The takeaway 'incompatible naming standards block cross-lab comparison.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Incompatible Bioinformatics Naming Standards' is missing from your current project README?

## Related examples

- `eg:13.6` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
