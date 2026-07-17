# Example 3.32 — Model Testing for Bias

**Chapter:** 3  
**Label:** `eg:3.32`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.9.1` — Models for Ethical Decision-Making

## Learning objective

Apply a justice lens by auditing hiring rankers for subgroup harm before launch—even when cost savings are large.

## Chapter context

Example 3.32 closes the four Section 3.9.1 lens set with distributive justice on the hiring pattern from Examples 3.3 and 3.19.

## What this example shows

Before deploying automated hiring ranking, audit subgroup error rates and adverse impact; delay launch if disparities cannot be justified and mitigated—even when the tool would cut recruiting cost.

## Key terms

- **Justice (ethical lens)** — Fair distribution of benefits and burdens across groups.
- **Adverse impact** — Disproportionate exclusion rates for protected groups.
- **Launch gate** — Explicit hold when fairness audits fail acceptance criteria.

## What you should learn

### From the concept
- Cost savings do not override distributive fairness duties.
- Pre-deployment audits are justice obligations, not nice-to-haves.
- Connects principles in 3.3 to operational tests in Chapter 7.

### From the output / result
- `run.sh` states audit-delay rule despite recruiting savings.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op installer |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter3/example32
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Justice lens — model testing for bias:
- Before deploying automated hiring ranking: audit subgroup error rates and adverse impact
- Delay launch if disparities cannot be justified and mitigated
- Even when the tool would cut recruiting cost
```

## How to interpret the result

If your org has no launch gate tied to subgroup metrics, Example 3.32 defines the minimum bar.

## Try it / Reflect

- Define one adverse-impact ratio threshold that would block your current hiring ranker.

## Related examples

- `eg:3.3` — Fairness principle on historical hires.
- `eg:3.19` — Proxy bias mechanism.
- `eg:3.21` — Automated hiring rankers case study.

## Notes

- Prose-only.
