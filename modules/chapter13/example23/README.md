# Example 13.23 — Document Instrument Limitations

**Chapter:** 13  
**Label:** `eg:13.23`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.4.3` — Data Quality Standards for Reproducibility

## Learning objective

Document instrument limitations and known error sources in metadata.

## Chapter context

Section 13.4.3 addresses data quality dimensions—completeness, consistency, and accuracy. If data is collected using different instruments or methods, researchers should document the limitations of each tool. This provides context for interpreting measurement error. Thi…

## What this example shows

If data is collected using different instruments or methods, researchers should document the limitations of each tool. This provides context for interpreting measurement error. This is particularly important in high-precision domains such as genomics or sensor-based environmental monitoring.

## What you should learn

### From the concept
- If data is collected using different instruments or methods, researchers should document the limitations of each tool.
- This provides context for interpreting measurement error.

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
cd modules/chapter13/example23
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Accuracy: document instrument limitations and error sources.
```

## How to interpret the result

The takeaway 'document instrument limitations and error sources.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'Document Instrument Limitations' is missing from your current project README?

## Related examples

- `eg:13.22` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
