# Example 3.12 — Privacy by Design in a Health App

**Chapter:** 3  
**Label:** `eg:3.12`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.3.2` — Key Concepts: Informed Consent, Anonymization, Privacy by Design

## Learning objective

Apply Privacy by Design defaults so a health app collects only what it needs and exposes control before partner sync.

## Chapter context

Privacy by Design (PbD) asks teams to embed minimization and user control before launch. Example 3.12 pairs with Example 3.6 on the same product class but emphasizes architecture and defaults.

## What this example shows

An activity/heart-rate app should not demand financial fields speculatively, should default to local retention where feasible, and must expose sharing and deletion controls before any partner sync.

## Key terms

- **Privacy by Design** — Building minimization, security, and user control into product architecture by default.
- **Local retention** — Keeping raw streams on device until the user opts into cloud/partner sync.
- **Speculative collection** — Gathering fields ‘just in case’ without a current purpose.

## What you should learn

### From the concept
- PbD is proactive—privacy is not a post-launch patch.
- Partner features should not precede user-visible controls.
- Minimization reduces downstream breach and re-identification risk.

### From the output / result
- `run.sh` lists PbD defaults: no speculative fields, local-first, controls before sync.

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
cd modules/chapter3/example12
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Privacy by Design in a health app:
- Do not demand financial fields “just in case”
- Default to local retention where feasible
- Clear sharing and deletion controls before any partner sync is enabled
Privacy is designed in, not bolted on after launch.
```

## How to interpret the result

Examples 3.13–3.16 show what happens when raw traces leave the device without strong PETs—PbD is the first line of defense.

## Try it / Reflect

- Audit one feature request: which fields are ‘nice to have’ for partners but unnecessary for core wellness scoring?

## Related examples

- `eg:3.6` — Consent flows before collecting health streams.
- `eg:3.13` — Re-identification when raw location-like traces are shared.
- `eg:3.41` — Future control models including self-sovereign identity.

## Notes

- Prose-only.
