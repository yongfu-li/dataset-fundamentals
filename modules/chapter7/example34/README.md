# Example 7.34 — U.S. Regulatory Exposure for Biased AI

**Chapter:** 7  
**Label:** `eg:7.44`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.4.3` — Legal Implications: Violations of GDPR, CCPA, or Anti-Discrimination Laws

## Learning objective

List U.S. regulatory exposure: class actions and EEOC/DOJ investigations.

## Chapter context

Section 7.4.3 covers regulatory and compliance exposure under GDPR, CCPA, and U.S. law. In the U.S., companies deploying biased AI systems could face class action lawsuits or investigations from bodies like the Equal Employment Opportunity Commission (EEOC) or the Dep…

## What this example shows

In the U.S., companies deploying biased AI systems could face class action lawsuits or investigations from bodies like the Equal Employment Opportunity Commission (EEOC) or the Department of Justice (DOJ).

## What you should learn

### From the concept
- Class-action lawsuits over biased AI decisions
- EEOC and DOJ investigations for employment and civil-rights violations
- Disparate-impact metrics are the evidence both sides will use

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
cd modules/chapter7/example34
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.34 — U.S. Regulatory Exposure for Biased AI
U.S. regulatory exposure:
- Class-action lawsuits over biased AI decisions
- EEOC and DOJ investigations for employment and civil-rights violations
- Disparate-impact metrics are the evidence both sides will use
```

## How to interpret the result

The closing bullet—'Disparate-impact metrics are the evidence both sides will use'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'U.S. Regulatory Exposure for Biased AI' appear in a dataset you have worked with?

## Related examples

- `eg:7.43` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example34` is **Example 7.34** in the PDF; manuscript label is `eg:7.44`.
