# Example 7.33 — GDPR Enforcement Against Discriminatory AI

**Chapter:** 7  
**Label:** `eg:7.43`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.4.3` — Legal Implications: Violations of GDPR, CCPA, or Anti-Discrimination Laws

## Learning objective

Cite GDPR enforcement risk when automated systems discriminate.

## Chapter context

Section 7.4.3 covers regulatory and compliance exposure under GDPR, CCPA, and U.S. law. Regulators have used the EU's General Data Protection Regulation (GDPR) to impose fines on organizations whose automated systems were found to be discriminatory or biased . These l…

## What this example shows

Regulators have used the EU's General Data Protection Regulation (GDPR) to impose fines on organizations whose automated systems were found to be discriminatory or biased . These legal frameworks reflect the increasing awareness of the legal responsibility companies have to ensure their AI models are fair and non-discriminatory.

## What you should learn

### From the concept
- Regulators have fined organizations for discriminatory automated systems
- Deployers bear legal responsibility for fairness
- Bias audits double as compliance evidence

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
cd modules/chapter7/example33
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.33 — GDPR Enforcement Against Discriminatory AI
GDPR enforcement:
- Regulators have fined organizations for discriminatory automated systems
- Deployers bear legal responsibility for fairness
- Bias audits double as compliance evidence
```

## How to interpret the result

The closing bullet—'Bias audits double as compliance evidence'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'GDPR Enforcement Against Discriminatory AI' appear in a dataset you have worked with?

## Related examples

- `eg:7.42` — Previous example in the same section.
- `eg:7.44` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example33` is **Example 7.33** in the PDF; manuscript label is `eg:7.43`.
