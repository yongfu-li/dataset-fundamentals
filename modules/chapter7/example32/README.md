# Example 7.32 — Compliance Exposure Under GDPR and CCPA

**Chapter:** 7  
**Label:** `eg:7.42`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.4.3` — Legal Implications: Violations of GDPR, CCPA, or Anti-Discrimination Laws

## Learning objective

Map simultaneous GDPR/CCPA and anti-discrimination compliance exposure.

## Chapter context

Section 7.4.3 covers regulatory and compliance exposure under GDPR, CCPA, and U.S. law. AI systems used in recruitment or credit scoring must comply with anti-discrimination laws that ensure equal treatment for all applicants, regardless of race, gender, or other prot…

## What this example shows

AI systems used in recruitment or credit scoring must comply with anti-discrimination laws that ensure equal treatment for all applicants, regardless of race, gender, or other protected characteristics. Similarly, data privacy regulations like the General Data Protection Regulation (GDPR) in the European Union or the California Consumer Privacy Act (CCPA) require companies to ensure that personal data is processed fairly and transparently . If a dataset used to train an AI model is inherently biased, the model could violate these privacy regulations by making unfair or discriminatory decisions based on biased data.

## What you should learn

### From the concept
- Anti-discrimination law: equal treatment in recruitment, credit, housing
- GDPR / CCPA: personal data must be processed fairly and transparently
- Biased training data can breach both regimes simultaneously

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
cd modules/chapter7/example32
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.32 — Compliance Exposure Under GDPR and CCPA
Compliance exposure:
- Anti-discrimination law: equal treatment in recruitment, credit, housing
- GDPR / CCPA: personal data must be processed fairly and transparently
- Biased training data can breach both regimes simultaneously
```

## How to interpret the result

The closing bullet—'Biased training data can breach both regimes simultaneously'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Compliance Exposure Under GDPR and CCPA' appear in a dataset you have worked with?

## Related examples

- `eg:7.4` — GDPR and ECOA policies.
- `eg:7.43` — GDPR enforcement.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example32` is **Example 7.32** in the PDF; manuscript label is `eg:7.42`.
