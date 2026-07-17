# Example 7.7 — Predictive Policing Resource Allocation

**Chapter:** 7  
**Label:** `eg:7.13`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.2.1` — Sampling Bias: Unequal Representation of Groups

## Learning objective

Explain predictive-policing feedback loops when training data reflects where police looked.

## Chapter context

Section 7.2.1 covers sampling bias—who is included or excluded from the dataset. In predictive policing, models trained on data from neighborhoods with higher crime rates may disproportionately allocate resources to these areas, even if crime rates are influenc…

## What this example shows

In predictive policing, models trained on data from neighborhoods with higher crime rates may disproportionately allocate resources to these areas, even if crime rates are influenced by factors like historical policing practices or socioeconomic conditions. This can reinforce existing disparities in law enforcement resource allocation.

## Key terms

- **Sampling bias** — Training data over-represents some groups or contexts.

## What you should learn

### From the concept
- Training data reflects where police looked, not only where crime happened
- Model sends more resources to already over-policed areas
- Feedback loop reinforces existing law-enforcement disparities

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
cd modules/chapter7/example7
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.7 — Predictive Policing Resource Allocation
Sampling bias — predictive policing:
- Training data reflects where police looked, not only where crime happened
- Model sends more resources to already over-policed areas
- Feedback loop reinforces existing law-enforcement disparities
```

## How to interpret the result

The closing bullet—'Feedback loop reinforces existing law-enforcement disparities'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Predictive Policing Resource Allocation' appear in a dataset you have worked with?

## Related examples

- `eg:7.12` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example7` is **Example 7.7** in the PDF; manuscript label is `eg:7.13`.
