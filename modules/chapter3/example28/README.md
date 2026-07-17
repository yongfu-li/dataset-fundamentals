# Example 3.28 — GDPR Fine Ceiling

**Chapter:** 3  
**Label:** `eg:3.28`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.8.1` — Consequences of Data Breaches

## Learning objective

State the GDPR administrative fine ceiling and use it as a planning signal for security investment.

## Chapter context

Section 3.8.1 cites regulatory penalty exposure under GDPR (detailed in Section 3.6). Example 3.28 makes the ceiling concrete for risk planning.

## What this example shows

Supervisory authorities may impose fines up to €20 million or 4% of worldwide annual turnover (whichever is higher) for serious personal-data infringements including inadequate security.

## Key terms

- **GDPR administrative fine** — Regulator-imposed penalty for serious infringements.
- **Turnover cap** — Percentage-of-revenue alternative to fixed euro ceiling.
- **Planning signal** — Using statutory maxima to frame security and compliance budgets.

## What you should learn

### From the concept
- Regulatory maxima anchor executive risk conversations.
- Inadequate security is an explicit infringement category.
- Fines complement private litigation and remediation costs.

### From the output / result
- `run.sh` prints the €20M / 4% ceiling framing.

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
cd modules/chapter3/example28
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
GDPR fine ceiling:
- Up to €20 million or 4% of worldwide annual turnover (whichever is higher)
- For serious infringements of personal-data protections, including inadequate security
Treat as a planning signal for accountability and security investment.
```

## How to interpret the result

Not every breach hits the cap—but Examples 3.26–3.27 show why treating fines as impossible is naive.

## Try it / Reflect

- Which is larger for your organization: €20M or 4% of turnover?

## Related examples

- `eg:3.38` — Operating GDPR workflows alongside other regimes.
- `eg:3.26` — Private settlement costs on top of regulatory fines.
- `eg:3.5` — Accountability duties that fines enforce.

## Notes

- Prose-only. Statute detail in Section 3.6.
