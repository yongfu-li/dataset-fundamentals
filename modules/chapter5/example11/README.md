# Example 5.11 — Nonresponse Skips Sensitive Questions

**Chapter:** 5  
**Label:** `eg:5.11`  
**Source:** `author/chapter5.tex`  
**Section:** `sec:5.2.2` — Causes of Missing Data

## Learning objective

Distinguish deliberate survey nonresponse from random missingness in health or finance forms.

## Chapter context

Section 5.2.2 lists operational causes of missingness: nonresponse, entry errors, and storage failures—each needs a different audit and remediation path. In a health survey, respondents may skip questions about debt or mental health while answering other items. Those blank answers reflect deliberate nonresponse rather than a random …

## What this example shows

In a health survey, respondents may skip questions about debt or mental health while answering other items. Those blank answers reflect deliberate nonresponse rather than a random system glitch.

## What you should learn

### From the concept
- In a health survey, respondents may skip questions about debt or mental health while answering other items.
- Those blank answers reflect deliberate nonresponse rather than a random system glitch.

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
cd modules/chapter5/example11
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
In a health survey, respondents may skip questions about debt or mental health while answering other items. Those blank answers reflect deliberate nonresponse rather than a random system glitch.
```

## How to interpret the result

Those blank answers reflect deliberate nonresponse rather than a random system glitch.

## Try it / Reflect

- Open a dataset you work with: where would a defect like “Nonresponse Skips Sensitive Questions” appear, and which Chapter 5 remedy would you apply first?

## Related examples

- `eg:5.12` — Next example in the same section.

## Notes

- Prose-only in the manuscript.
