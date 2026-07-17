# Example 3.31 — Handling Incomplete or Biased Data

**Chapter:** 3  
**Label:** `eg:3.31`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.9.1` — Models for Ethical Decision-Making

## Learning objective

Apply virtue ethics when documenting incomplete or biased data—refuse to oversell certainty internally.

## Chapter context

Example 3.31 is the virtue-ethics vignette in Section 3.9.1: professional character and honest documentation when data limits are known.

## What this example shows

Finding systematic gaps or label bias, a practitioner discloses limits in documentation and refuses to present point estimates as definitive—even if a cleaner story would sell better internally.

## Key terms

- **Virtue ethics** — Focus on character traits—honesty, humility—in professional judgment.
- **Documentation honesty** — Recording known gaps instead of silent omission.
- **Internal pressure** — Incentives to hide uncertainty for faster approval.

## What you should learn

### From the concept
- Scientific integrity is an ethics obligation in data work.
- Point estimates without caveats can mislead decision-makers.
- Virtue lens complements utilitarian ROI arguments.

### From the output / result
- `run.sh` lists disclose-refuse behavior under label bias.

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
cd modules/chapter3/example31
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Virtue ethics — incomplete or biased data:
- Find systematic gaps or label bias
- Disclose those limits in documentation
- Refuse to present point estimates as definitive
even if a cleaner story would be easier to sell internally
```

## How to interpret the result

Example 3.32 adds the justice lens on deployment; together they cover pre-release honesty and gatekeeping.

## Try it / Reflect

- Add three bullet caveats to a model card you have seen—what would leadership dislike that you should still include?

## Related examples

- `eg:3.32` — Justice lens: delay biased hiring deployment.
- `eg:3.18` — Selection bias you must document.
- `eg:3.29` — Utilitarian pressure to hide uncertainty for aggregate gain.

## Notes

- Prose-only.
