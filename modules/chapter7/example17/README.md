# Example 7.17 — Confirmation Bias in Predictive Policing

**Chapter:** 7  
**Label:** `eg:7.26`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.2.6` — Confirmation Bias: Selecting Data That Aligns with Preconceived Notions

## Learning objective

Break predictive-policing confirmation loops at collection, not only at modeling.

## Chapter context

Section 7.2.6 covers confirmation bias and self-fulfilling data collection loops. In predictive policing, if an algorithm is designed based on historical crime data, and the dataset includes more information from high-crime areas with large minority populations,…

## What this example shows

In predictive policing, if an algorithm is designed based on historical crime data, and the dataset includes more information from high-crime areas with large minority populations, the model may overfit to the belief that certain racial or ethnic groups are more likely to commit crimes, even if that is not the case. This creates a self-fulfilling prophecy that further targets these groups, exacerbating existing disparities.

## What you should learn

### From the concept
- Dataset dominated by over-policed areas encodes the designers' expectations
- Model 'confirms' that certain groups are crime-prone; patrols follow; data worsens
- Self-fulfilling prophecy that must be broken at collection, not just modeling

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
cd modules/chapter7/example17
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.17 — Confirmation Bias in Predictive Policing
Confirmation bias — predictive policing:
- Dataset dominated by over-policed areas encodes the designers' expectations
- Model 'confirms' that certain groups are crime-prone; patrols follow; data worsens
- Self-fulfilling prophecy that must be broken at collection, not just modeling
```

## How to interpret the result

The closing bullet—'Self-fulfilling prophecy that must be broken at collection, not just modeling'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Confirmation Bias in Predictive Policing' appear in a dataset you have worked with?

## Related examples

- `eg:7.25` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example17` is **Example 7.17** in the PDF; manuscript label is `eg:7.26`.
