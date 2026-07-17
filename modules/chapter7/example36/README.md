# Example 7.36 — Consistent Criteria in Hiring Decisions

**Chapter:** 7  
**Label:** `eg:7.47`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.5.1` — Definitions of Fairness: Procedural Fairness, Outcome Fairness

## Learning objective

Define procedural fairness: consistent criteria and transparent data use in hiring.

## Chapter context

Section 7.5.1 distinguishes procedural vs outcome fairness in high-stakes domains. In a hiring system, procedural fairness would mean that all candidates, regardless of gender or race, are evaluated based on the same criteria, and these criteria are applied consi…

## What this example shows

In a hiring system, procedural fairness would mean that all candidates, regardless of gender or race, are evaluated based on the same criteria, and these criteria are applied consistently throughout the hiring process. It would also involve transparency around how the system works, allowing candidates to understand how their data is used and how decisions are made.

## Key terms

- **Procedural fairness** — Consistent criteria and transparent process for every individual.
- **Outcome fairness** — Equitable results across groups, measured with parity metrics.

## What you should learn

### From the concept
- Same criteria for every candidate, applied consistently
- Transparent about how data is used and decisions are made
- A fair process is necessary but not sufficient: outcomes still need checking

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
cd modules/chapter7/example36
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.36 — Consistent Criteria in Hiring Decisions
Procedural fairness — hiring:
- Same criteria for every candidate, applied consistently
- Transparent about how data is used and decisions are made
- A fair process is necessary but not sufficient: outcomes still need checking
```

## How to interpret the result

The closing bullet—'A fair process is necessary but not sufficient: outcomes still need checking'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Consistent Criteria in Hiring Decisions' appear in a dataset you have worked with?

## Related examples

- `eg:7.48` — Outcome fairness contrast.
- `eg:7.33` — Disparate impact metrics.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example36` is **Example 7.36** in the PDF; manuscript label is `eg:7.47`.
