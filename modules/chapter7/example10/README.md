# Example 7.10 — Facial Recognition Capture Quality

**Chapter:** 7  
**Label:** `eg:7.16`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.2.2` — Measurement Bias: Errors in Data Collection or Measurement Methods

## Learning objective

Audit capture-quality differences that degrade recognition for some ethnicities or genders.

## Chapter context

Section 7.2.2 covers measurement bias at collection and instrument level. In facial recognition systems, if the cameras used to capture images are of poor quality or the lighting conditions are suboptimal, the resulting data could be biased. Measurement …

## What this example shows

In facial recognition systems, if the cameras used to capture images are of poor quality or the lighting conditions are suboptimal, the resulting data could be biased. Measurement bias might manifest as certain facial features being more difficult to capture accurately, especially for people of certain ethnicities or genders, leading to lower accuracy in these groups.

## What you should learn

### From the concept
- Poor cameras or lighting degrade some faces more than others
- Group-dependent capture error lowers accuracy for affected ethnicities/genders
- Standardize and audit capture conditions per subgroup

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
cd modules/chapter7/example10
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.10 — Facial Recognition Capture Quality
Measurement bias — capture quality:
- Poor cameras or lighting degrade some faces more than others
- Group-dependent capture error lowers accuracy for affected ethnicities/genders
- Standardize and audit capture conditions per subgroup
```

## How to interpret the result

The closing bullet—'Standardize and audit capture conditions per subgroup'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Facial Recognition Capture Quality' appear in a dataset you have worked with?

## Related examples

- `eg:7.15` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example10` is **Example 7.10** in the PDF; manuscript label is `eg:7.16`.
