# Example 7.30 — Amplification of Policing and Hiring Disparities

**Chapter:** 7  
**Label:** `eg:7.40`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.4.2` — Social Implications: Perpetuation of Stereotypes, Amplification of Societal Inequities

## Learning objective

Describe amplification feedback loops in policing and hiring at scale.

## Chapter context

Section 7.4.2 explains how deployed bias amplifies existing societal disparities. In predictive policing, biased data reflecting over-policing in minority communities can lead to even more intense policing in those areas, further reinforcing racial disparities. …

## What this example shows

In predictive policing, biased data reflecting over-policing in minority communities can lead to even more intense policing in those areas, further reinforcing racial disparities. Similarly, biased hiring algorithms that favor male candidates over female candidates can contribute to ongoing gender inequality in the workplace. By amplifying existing biases, AI models can inadvertently perpetuate stereotypes about race, gender, or socioeconomic status, making it even harder for disadvantaged groups to break free from systemic discrimination.

## What you should learn

### From the concept
- Over-policing data -> more policing of the same communities (feedback loop)
- Male-favoring hiring models deepen workplace gender gaps
- Bias at scale turns historical disparity into compounding disadvantage

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
cd modules/chapter7/example30
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.30 — Amplification of Policing and Hiring Disparities
Amplification of inequities:
- Over-policing data -> more policing of the same communities (feedback loop)
- Male-favoring hiring models deepen workplace gender gaps
- Bias at scale turns historical disparity into compounding disadvantage
```

## How to interpret the result

The closing bullet—'Bias at scale turns historical disparity into compounding disadvantage'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Amplification of Policing and Hiring Disparities' appear in a dataset you have worked with?

## Related examples

- `eg:7.41` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example30` is **Example 7.30** in the PDF; manuscript label is `eg:7.40`.
