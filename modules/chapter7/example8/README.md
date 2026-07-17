# Example 7.8 — Creditworthiness System

**Chapter:** 7  
**Label:** `eg:7.14`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.2.2` — Measurement Bias: Errors in Data Collection or Measurement Methods

## Learning objective

Recognize measurement bias from systematically misreported income in credit features.

## Chapter context

Section 7.2.2 covers measurement bias at collection and instrument level. If an AI model used to assess creditworthiness relies on data from a survey in which respondents self-report their income, measurement bias could occur if individuals tend to overe…

## What this example shows

If an AI model used to assess creditworthiness relies on data from a survey in which respondents self-report their income, measurement bias could occur if individuals tend to overestimate their income due to social desirability or privacy concerns.

## What you should learn

### From the concept
- Respondents overstate income (social desirability, privacy concerns)
- Systematic error contaminates creditworthiness features at the source
- Validate against external records where possible

### From the output / result
- `run.sh` prints the structured takeaway below—use it when classifying or mitigating bias.

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
cd modules/chapter7/example8
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.8 — Creditworthiness System
Measurement bias — self-reported income:
- Respondents overstate income (social desirability, privacy concerns)
- Systematic error contaminates creditworthiness features at the source
- Validate against external records where possible
```

## How to interpret the result

The closing bullet—'Validate against external records where possible'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Creditworthiness System' appear in a dataset you have worked with?

## Related examples

- `eg:7.15` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example8` is **Example 7.8** in the PDF; manuscript label is `eg:7.14`.
