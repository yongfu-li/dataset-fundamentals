# Example 7.11 — Entrenched Societal Biases in Historical Records

**Chapter:** 7  
**Label:** `eg:7.17`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.2.3` — Historical Bias: Bias Inherited from Past Societal or Systemic Inequities

## Learning objective

Explain historical bias: accurate records of a discriminatory past still harm future decisions.

## Chapter context

Section 7.2.3 covers historical bias embedded in faithfully recorded past inequities. Historical bias may occur when datasets reflect entrenched societal biases, such as racial, gender, or class-based discrimination, which continue to affect decision-making today.

## What this example shows

Historical bias may occur when datasets reflect entrenched societal biases, such as racial, gender, or class-based discrimination, which continue to affect decision-making today.

## What you should learn

### From the concept
- Data faithfully records a discriminatory past (judicial, hiring, lending records)
- Models trained on it project past inequities into new decisions
- Accuracy of collection does not equal fairness of content

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
cd modules/chapter7/example11
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.11 — Entrenched Societal Biases in Historical Records
Historical bias:
- Data faithfully records a discriminatory past (judicial, hiring, lending records)
- Models trained on it project past inequities into new decisions
- Accuracy of collection does not equal fairness of content
```

## How to interpret the result

The closing bullet—'Accuracy of collection does not equal fairness of content'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Entrenched Societal Biases in Historical Records' appear in a dataset you have worked with?

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example11` is **Example 7.11** in the PDF; manuscript label is `eg:7.17`.
