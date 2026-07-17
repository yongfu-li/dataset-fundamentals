# Example 5.12 — Typo Leaves Blank Entry Field

**Chapter:** 5  
**Label:** `eg:5.12`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.2` — Causes of Missing Data

## Learning objective

Trace how validation failures after typos create NA that look like missingness but are entry errors.

## Chapter context

Section 5.2.2 lists operational causes of missingness: nonresponse, entry errors, and storage failures—each needs a different audit and remediation path. A clerk might mistype a ZIP code, fail validation, and leave the field blank when saving the form. The resulting NA is a human entry error rather than intentional nonresponse.

## What this example shows

A clerk might mistype a ZIP code, fail validation, and leave the field blank when saving the form. The resulting NA is a human entry error rather than intentional nonresponse.

## What you should learn

### From the concept
- A clerk might mistype a ZIP code, fail validation, and leave the field blank when saving the form.
- The resulting NA is a human entry error rather than intentional nonresponse.

### From the output / result
- `run.sh` prints the structured takeaway as a cleaning/preprocessing checklist.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op installer |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter5/example12
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
A clerk might mistype a ZIP code, fail validation, and leave the field blank when saving the form. The resulting NA is a human entry error rather than intentional nonresponse.
```

## How to interpret the result

The resulting NA is a human entry error rather than intentional nonresponse.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Typo Leaves Blank Entry Field” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.11` — Previous example in the same section.
- `eg:5.13` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
