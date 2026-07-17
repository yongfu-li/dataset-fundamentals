# Example 7.16 — Confirmation Bias in Research

**Chapter:** 7  
**Label:** `eg:7.25`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.2.6` — Confirmation Bias: Selecting Data That Aligns with Preconceived Notions

## Learning objective

Avoid confirmation bias by defining inclusion criteria before inspecting outcomes.

## Chapter context

Section 7.2.6 covers confirmation bias and self-fulfilling data collection loops. If a researcher believes that a particular feature (e.g., education level) strongly correlates with income and selects only data that supports this belief, the model will likely ov…

## What this example shows

If a researcher believes that a particular feature (e.g., education level) strongly correlates with income and selects only data that supports this belief, the model will likely overemphasize the importance of this feature, while missing other potentially more significant factors.

## What you should learn

### From the concept
- Selecting only data that supports a favored hypothesis (education -> income)
- The model overweights the favored feature and misses stronger factors
- Fix: define inclusion criteria before looking at outcomes

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
cd modules/chapter7/example16
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.16 — Confirmation Bias in Research
Confirmation bias — research:
- Selecting only data that supports a favored hypothesis (education -> income)
- The model overweights the favored feature and misses stronger factors
- Fix: define inclusion criteria before looking at outcomes
```

## How to interpret the result

The closing bullet—'Fix: define inclusion criteria before looking at outcomes'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Confirmation Bias in Research' appear in a dataset you have worked with?

## Related examples

- `eg:7.26` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example16` is **Example 7.16** in the PDF; manuscript label is `eg:7.25`.
