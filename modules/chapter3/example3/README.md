# Example 3.3 — Hiring Algorithm

**Chapter:** 3  
**Label:** `eg:3.3`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.2.1` — Core Ethical Principles in Data Work

## Learning objective

Treat hiring-model fairness risk as a design constraint when training on historical hire patterns.

## Chapter context

Fairness is the second principle in Table 3.2. Example 3.3 states the hiring pattern that Section 3.5 and Chapter 7 analyze with audits and metrics; here the emphasis is on catching the risk before deployment.

## What this example shows

A ranking model trained on past hires that favored one demographic in technical roles can reproduce that pattern for new applicants—the ethical demand is to treat that risk as a design constraint.

## Key terms

- **Historical bias** — Past decisions encoded in training labels that models can learn and amplify.
- **Fairness (principle)** — Avoid systematically disadvantaging groups in automated decisions.
- **Design constraint** — A requirement fixed during model design, not discovered only after launch.

## What you should learn

### From the concept
- Past hiring is a label source; it is not neutral ground truth.
- Fairness review belongs in the training objective and evaluation plan.
- The chapter previews deeper bias work in Section 3.5 and Chapter 7.

### From the output / result
- `run.sh` states the hiring-pattern failure mode and the design-constraint response.

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
cd modules/chapter3/example3
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Hiring algorithm — fairness:
- Trained on past hires that favored one demographic in technical roles
- Can reproduce that pattern for new applicants
- Treat the risk as a design constraint, not a post-deployment surprise
```

## How to interpret the result

Examples 3.19, 3.21, and 3.32 revisit the same hiring thread with algorithmic bias, case-study detail, and justice-lens testing—use them together when planning recruiting ML.

## Try it / Reflect

- If protected attributes are removed from features, what proxy fields in résumés might still carry demographic signal?

## Related examples

- `eg:3.19` — Algorithmic bias via proxies when protected attributes are dropped.
- `eg:3.21` — Automated hiring rankers case study.
- `eg:3.32` — Justice lens: delay launch when subgroup disparities persist.

## Notes

- Prose-only. Chapter 7 develops audits and mitigation.
