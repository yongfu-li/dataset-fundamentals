# Example 7.2 — Gender Shades Project

**Chapter:** 7  
**Label:** `eg:7.6`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.1.4` — Real-World Examples of Dataset Bias and Its Consequences

## Learning objective

Interpret Gender Shades evidence: report subgroup error rates, not only overall accuracy.

## Chapter context

Section 7.1.4 introduces U.S. legislative proposals for algorithmic accountability. The Gender Shades evaluations found that several commercial facial analysis systems were substantially less accurate on darker-skinned and female faces than on lighter-skinned and …

## What this example shows

The Gender Shades evaluations found that several commercial facial analysis systems were substantially less accurate on darker-skinned and female faces than on lighter-skinned and male faces, attributing the gap largely to underrepresentation in training data . For dataset practice this is a measurement-bias and sampling-bias checklist item, not only a media story: subgroup error must be reported before deployment.

## What you should learn

### From the concept
- Commercial facial analysis systems were far less accurate on darker-skinned and female faces
- Gap attributed largely to underrepresentation in training data
- Practice rule: report subgroup error rates before deployment, not only overall accuracy

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
cd modules/chapter7/example2
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.2 — Gender Shades Project
Gender Shades measurement evidence:
- Commercial facial analysis systems were far less accurate on darker-skinned and female faces
- Gap attributed largely to underrepresentation in training data
- Practice rule: report subgroup error rates before deployment, not only overall accuracy
```

## How to interpret the result

The closing bullet—'Practice rule: report subgroup error rates before deployment, not only overall accuracy'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Gender Shades Project' appear in a dataset you have worked with?

## Related examples

- `eg:7.12` — Sampling bias in face data.
- `eg:7.16` — Capture-quality measurement bias.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example2` is **Example 7.2** in the PDF; manuscript label is `eg:7.6`.
