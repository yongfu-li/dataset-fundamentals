# Example 3.13 — Re-Identification from Location Patterns

**Chapter:** 3  
**Label:** `eg:3.13`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.4.1` — Anonymization and Encryption

## Learning objective

Explain why sparse location histories can be re-identified and name stronger protections than naive anonymization.

## Chapter context

Section 3.4.1 warns that removing direct identifiers does not guarantee anonymity. Example 3.13 is the chapter's canonical re-identification vignette for location-like traces.

## What this example shows

Sparse location histories without names can be joined to public records or social posts to recover identity—stronger protection needs coarser aggregation, differential privacy noise, or keeping raw traces off shared servers.

## Key terms

- **Re-identification** — Linking de-identified records back to individuals via auxiliary data.
- **Quasi-identifiers** — Fields such as location and time that combine to become identifying.
- **Anonymization (limits)** — A risk-reduction goal, not a binary guarantee.

## What you should learn

### From the concept
- Uniqueness in sparse traces is an identity signal.
- Public auxiliary datasets are part of the threat model.
- Release policy must match sensitivity, not only legal labels.

### From the output / result
- `run.sh` states the join attack and three mitigation directions.

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
cd modules/chapter3/example13
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Re-identification from location patterns:
- Sparse location histories without names can still be joined to public records or social posts
- Stronger protection: coarser aggregation, differential privacy noise, or keep raw traces off shared servers
Anonymization is a management goal, not a guarantee.
```

## How to interpret the result

When marketing calls a dataset ‘anonymous’ because names were dropped, Example 3.13 is the counter-slide for your review.

## Try it / Reflect

- Given home/work pings three days a week, what public dataset could confirm identity in your city?

## Related examples

- `eg:3.15` — Formal privacy noise for aggregate releases.
- `eg:3.35` — City-scale surveillance amplifies identification risk.
- `eg:3.14` — Encryption in transit vs re-identification from released aggregates.

## Notes

- Prose-only. Canonical re-identification warning for the chapter.
