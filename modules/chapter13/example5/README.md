# Example 13.5 — HIPAA Limits on Clinical Data Sharing

**Chapter:** 13  
**Label:** `eg:13.5`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.1.3` — Key Challenges in Achieving Reproducibility

## Learning objective

Recognize HIPAA and privacy law as barriers mitigated by de-identification—not ignored.

## Chapter context

Section 13.1.3 lists practical barriers—privacy, missing parameters, and incompatible standards. Clinical research often involves sensitive patient data that cannot be shared openly due to privacy laws like HIPAA. Open science therefore pairs sharing goals with de-identificati…

## What this example shows

Clinical research often involves sensitive patient data that cannot be shared openly due to privacy laws like HIPAA. Open science therefore pairs sharing goals with de-identification and anonymization so data can be released safely and ethically (Chapter~ ).

## What you should learn

### From the concept
- Clinical research often involves sensitive patient data that cannot be shared openly due to privacy laws like HIPAA.
- Open science therefore pairs sharing goals with de-identification and anonymization so data can be released safely and ethically (Chapter~ ).

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
cd modules/chapter13/example5
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Barrier: privacy law restricts sharing; mitigate with de-identification.
```

## How to interpret the result

The takeaway 'privacy law restricts sharing; mitigate with de-identification.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'HIPAA Limits on Clinical Data Sharing' is missing from your current project README?

## Related examples

- `eg:13.6` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
