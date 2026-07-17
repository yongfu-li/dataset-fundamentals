# Example 7.31 — Recruitment Algorithm Perpetuating Gender Gaps

**Chapter:** 7  
**Label:** `eg:7.41`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.4.2` — Social Implications: Perpetuation of Stereotypes, Amplification of Societal Inequities

## Learning objective

Show how recruitment models perpetuate gender gaps encoded in historical hiring data.

## Chapter context

Section 7.4.2 explains how deployed bias amplifies existing societal disparities. A recruitment algorithm trained on historical hiring data may reflect biases that have historically excluded women from high-paying technical roles. If this biased model is then us…

## What this example shows

A recruitment algorithm trained on historical hiring data may reflect biases that have historically excluded women from high-paying technical roles. If this biased model is then used to evaluate job candidates, it may continue to perpetuate the underrepresentation of women in technology fields, thereby perpetuating gender inequality in the workplace.

## What you should learn

### From the concept
- Historical data encodes women's past exclusion from technical roles
- The model learns exclusion as a hiring signal and repeats it
- Mitigate at the data level: re-weighting, biased-feature removal (Section 7.6.1)

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
cd modules/chapter7/example31
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.31 — Recruitment Algorithm Perpetuating Gender Gaps
Recruitment perpetuating gender gaps:
- Historical data encodes women's past exclusion from technical roles
- The model learns exclusion as a hiring signal and repeats it
- Mitigate at the data level: re-weighting, biased-feature removal (Section 7.6.1)
```

## How to interpret the result

The closing bullet—'Mitigate at the data level: re-weighting, biased-feature removal (Section 7.6.1)'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Recruitment Algorithm Perpetuating Gender Gaps' appear in a dataset you have worked with?

## Related examples

- `eg:7.40` — Amplification of gender gaps.
- `eg:7.33` — 80% rule screening.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example31` is **Example 7.31** in the PDF; manuscript label is `eg:7.41`.
