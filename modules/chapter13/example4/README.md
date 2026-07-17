# Example 13.4 — Publishing Scripts and Notebooks

**Chapter:** 13  
**Label:** `eg:13.4`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.1.2` — Core Principles of Open Science

## Learning objective

Require published scripts and notebooks so others can reconstruct reported results.

## Chapter context

Section 13.1.2 states open-science principles: accessibility, transparency, and collaboration. Researchers might release the scripts or notebooks used to process their data, ensuring others can follow their exact workflow.

## What this example shows

Researchers might release the scripts or notebooks used to process their data, ensuring others can follow their exact workflow.

## What you should learn

### From the concept
- Researchers might release the scripts or notebooks used to process their data, ensuring others can follow their exact workflow.

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
cd modules/chapter13/example4
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Transparency: publish the scripts/notebooks that produced the results.
```

## How to interpret the result

The takeaway 'publish the scripts/notebooks that produced the results.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Publishing Scripts and Notebooks' is missing from your current project README?

## Related examples

- `eg:13.3` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
