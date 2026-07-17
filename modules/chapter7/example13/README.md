# Example 7.13 — Labeling Bias in Predictive Justice Data

**Chapter:** 7  
**Label:** `eg:7.22`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.2.4` — Label Bias: Subjectivity or Inconsistency During the Labeling Process

## Learning objective

Audit subjective justice labels whose provenance may encode annotator bias.

## Chapter context

Section 7.2.4 covers labeling bias from subjective or inconsistent annotation. In the case of a dataset used to train an algorithm for predicting criminal behavior, if labels are applied inconsistently (e.g., based on the subjective judgment of the annotator)…

## What this example shows

In the case of a dataset used to train an algorithm for predicting criminal behavior, if labels are applied inconsistently (e.g., based on the subjective judgment of the annotator), certain groups may be unfairly labeled as more dangerous or criminal than others, even though there is no objective basis for the label. This would introduce label bias, affecting the model's predictions.

## Key terms

- **Label bias** — Subjective or inconsistent labels teach models annotator prejudice.

## What you should learn

### From the concept
- Subjective, inconsistent labels can mark some groups as more dangerous without objective basis
- The model learns the annotators' bias as if it were ground truth
- Label provenance and criteria must be documented and audited

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
cd modules/chapter7/example13
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.13 — Labeling Bias in Predictive Justice Data
Label bias — predictive justice:
- Subjective, inconsistent labels can mark some groups as more dangerous without objective basis
- The model learns the annotators' bias as if it were ground truth
- Label provenance and criteria must be documented and audited
```

## How to interpret the result

The closing bullet—'Label provenance and criteria must be documented and audited'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Labeling Bias in Predictive Justice Data' appear in a dataset you have worked with?

## Related examples

- `eg:7.21` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example13` is **Example 7.13** in the PDF; manuscript label is `eg:7.22`.
