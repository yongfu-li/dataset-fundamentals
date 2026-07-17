# Example 3.30 — Recommendation Algorithm

**Chapter:** 3  
**Label:** `eg:3.30`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.9.1` — Models for Ethical Decision-Making

## Learning objective

Apply a rights-based frame when stricter privacy limits reduce advertising yield on recommendations.

## Chapter context

Example 3.30 contrasts Example 3.29: meaningful consent and minimization as duties even when they cut targeting precision.

## What this example shows

A product team may choose stricter purpose limits and on-device processing for recommendations even when that reduces advertising yield—consent and minimization are duties, not optional costs.

## Key terms

- **Rights-based ethics** — Framework treating privacy and consent as obligations owed to persons.
- **Purpose limits** — Restricting processing to specified, agreed uses.
- **On-device processing** — Keeping inference local to honor minimization and control.

## What you should learn

### From the concept
- Revenue loss does not automatically veto privacy duties.
- Rights-based design may deliberately reduce targeting precision.
- Pairs with PbD and autonomy examples in Section 3.3.

### From the output / result
- `run.sh` contrasts ad yield with purpose limits and on-device processing.

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
cd modules/chapter3/example30
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Rights-based lens — recommendation algorithm:
- Stricter purpose limits and on-device processing
- Even when that reduces advertising yield
- Meaningful consent and minimization treated as duties, not optional costs
```

## How to interpret the result

When product metrics only track CTR, Example 3.30 reframes ‘cost’ as compliance with duty.

## Try it / Reflect

- Name one recommendation feature you would ship on-device only—what ad metric would drop?

## Related examples

- `eg:3.29` — Utilitarian counter-argument on secondary use.
- `eg:3.12` — Privacy by Design defaults.
- `eg:3.16` — On-device learning pattern.

## Notes

- Prose-only.
