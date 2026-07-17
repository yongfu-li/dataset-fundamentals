# Example 3.41 — Self-Sovereign Identity

**Chapter:** 3  
**Label:** `eg:3.41`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.10.4` — Future Directions in Ethics and Privacy

## Learning objective

Describe self-sovereign identity as user-held credentials without a single intermediary owning the identity graph.

## Chapter context

Section 3.10.4 sketches future directions—PETs from Section 3.4, PbD from Section 3.3, and stronger individual control models including SSI.

## What this example shows

Self-sovereign identity lets people hold and present credentials without one intermediary owning the entire identity graph—aligning with stronger individual control over personal data alongside PETs and Privacy by Design.

## Key terms

- **Self-sovereign identity (SSI)** — User-controlled credential presentation without centralized identity brokers.
- **Identity graph** — A provider's unified map of who you are across services.
- **Verifiable credential** — Cryptographically attestable claim presented selectively by the user.

## What you should learn

### From the concept
- Future privacy practice combines PETs, governance, and user control.
- SSI reduces lock-in to platforms that monetize identity.
- Design trends reinforce Examples 3.12, 3.15, and 3.16.

### From the output / result
- `run.sh` summarizes SSI control benefits and PET alignment.

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
cd modules/chapter3/example41
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Self-sovereign identity:
- People hold and present credentials
- Without a single intermediary owning the identity graph
- Aligns with stronger individual control over personal data
(Future direction alongside PETs and Privacy by Design)
```

## How to interpret the result

SSI is directional, not a silver bullet—threat models for wallet loss and coercion still matter.

## Try it / Reflect

- Which login flows in your life would improve if you presented minimal credentials instead of full profile sync?

## Related examples

- `eg:3.12` — Privacy by Design and user control defaults.
- `eg:3.15` — Differential privacy in aggregate analytics.
- `eg:3.16` — Federated learning for on-device data.

## Notes

- Prose-only. Future direction alongside PETs and PbD.
