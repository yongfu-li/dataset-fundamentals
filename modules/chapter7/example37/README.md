# Example 7.37 — Outcome Fairness in Predictive Policing

**Chapter:** 7  
**Label:** `eg:7.48`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.5.1` — Definitions of Fairness: Procedural Fairness, Outcome Fairness

## Learning objective

Define outcome fairness metrics for predictive policing (parity, equalized odds).

## Chapter context

Section 7.5.1 distinguishes procedural vs outcome fairness in high-stakes domains. In the case of a predictive policing model, outcome fairness would require that the algorithm's predictions (e.g., likelihood of re-offending or future crime) do not disproportiona…

## What this example shows

In the case of a predictive policing model, outcome fairness would require that the algorithm's predictions (e.g., likelihood of re-offending or future crime) do not disproportionately target minority communities or lead to higher incarceration rates for these groups, compared to other demographic groups.

## Key terms

- **Procedural fairness** — Consistent criteria and transparent process for every individual.
- **Outcome fairness** — Equitable results across groups, measured with parity metrics.

## What you should learn

### From the concept
- Predictions must not disproportionately target minority communities
- Measured with demographic parity, equalized odds, and similar metrics
- Complements (and can conflict with) procedural fairness

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
cd modules/chapter7/example37
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.37 — Outcome Fairness in Predictive Policing
Outcome fairness — predictive policing:
- Predictions must not disproportionately target minority communities
- Measured with demographic parity, equalized odds, and similar metrics
- Complements (and can conflict with) procedural fairness
```

## How to interpret the result

The closing bullet—'Complements (and can conflict with) procedural fairness'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Outcome Fairness in Predictive Policing' appear in a dataset you have worked with?

## Related examples

- `eg:7.47` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example37` is **Example 7.37** in the PDF; manuscript label is `eg:7.48`.
