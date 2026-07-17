# Example 7.1 — GDPR & ECOA Policies

**Chapter:** 7  
**Label:** `eg:7.4`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.1.2` — Importance of Addressing Bias and Fairness in AI

## Learning objective

Connect GDPR and ECOA to fairness obligations when automated decisions use biased data.

## Chapter context

Section 7.1.2 frames fairness as a legal and ethical requirement, not only a modeling metric. The European Union's General Data Protection Regulation (GDPR) mandates that automated decisions should not be based on biased data, especially when they significantly affect indiv…

## What this example shows

The European Union's General Data Protection Regulation (GDPR) mandates that automated decisions should not be based on biased data, especially when they significantly affect individuals . Similarly, in the United States, the Equal Credit Opportunity Act (ECOA) and the Fair Lending Act impose rules to ensure that lending decisions are not biased against certain groups based on race, gender, or other protected characteristics. Failing to comply with these laws could result in legal action, fines, and significant reputational damage for companies.

## What you should learn

### From the concept
- GDPR: automated decisions must not be based on biased data when they significantly affect individuals
- ECOA / Fair Lending Act: lending decisions must not be biased by race, gender, or other protected traits
- Non-compliance risks legal action, fines, and significant reputational damage

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
cd modules/chapter7/example1
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.1 — GDPR & ECOA Policies
Fairness as a legal requirement:
- GDPR: automated decisions must not be based on biased data when they significantly affect individuals
- ECOA / Fair Lending Act: lending decisions must not be biased by race, gender, or other protected traits
- Non-compliance risks legal action, fines, and significant reputational damage
```

## How to interpret the result

The closing bullet—'Non-compliance risks legal action, fines, and significant reputational damage'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'GDPR & ECOA Policies' appear in a dataset you have worked with?

## Related examples

- `eg:7.42` — Compliance exposure.
- `Chapter 3` — Privacy and GDPR foundations.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example1` is **Example 7.1** in the PDF; manuscript label is `eg:7.4`.
