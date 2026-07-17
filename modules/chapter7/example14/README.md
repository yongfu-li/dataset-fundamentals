# Example 7.14 — Aggregate Bias in Healthcare

**Chapter:** 7  
**Label:** `eg:7.23`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.2.5` — Aggregation Bias: Generalizing Findings Across Diverse Subgroups

## Learning objective

Detect healthcare aggregation bias when pooled models mask subgroup treatment needs.

## Chapter context

Section 7.2.5 covers aggregation bias when pooled models hide subgroup structure. In healthcare, if a model trained on aggregate data from multiple demographic groups (e.g., different age groups, genders, or ethnicities) does not account for the different health…

## What this example shows

In healthcare, if a model trained on aggregate data from multiple demographic groups (e.g., different age groups, genders, or ethnicities) does not account for the different healthcare needs or responses to treatment within each subgroup, the model may not perform well for all individuals . This could lead to suboptimal or even harmful treatment recommendations for specific groups.

## What you should learn

### From the concept
- Pooling demographic groups masks different needs and treatment responses
- Average-fit models can recommend poorly for specific subgroups
- Evaluate (and possibly model) per subgroup

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
cd modules/chapter7/example14
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.14 — Aggregate Bias in Healthcare
Aggregation bias — healthcare:
- Pooling demographic groups masks different needs and treatment responses
- Average-fit models can recommend poorly for specific subgroups
- Evaluate (and possibly model) per subgroup
```

## How to interpret the result

The closing bullet—'Evaluate (and possibly model) per subgroup'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Aggregate Bias in Healthcare' appear in a dataset you have worked with?

## Related examples

- `eg:7.24` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example14` is **Example 7.14** in the PDF; manuscript label is `eg:7.23`.
