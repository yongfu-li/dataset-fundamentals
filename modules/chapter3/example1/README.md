# Example 3.1 — Stakeholders in a Wellness App Launch

**Chapter:** 3  
**Label:** `eg:3.1`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.1.2` — Overview of Data Work Processes and Stakeholders

## Learning objective

Map colliding stakeholder interests in one wellness-app data decision and name what each role optimizes for.

## Chapter context

Chapter 3 opens by treating ethics as a lifecycle-wide coordination problem. Section 3.1.2 names practitioners, leaders, policymakers, and data subjects; Example 3.1 compresses that roster into a single product launch where no role can unilaterally resolve the trade-offs.

## What this example shows

Product wants finer tracking; legal wants clearer consent; executives want partner sharing; users want control over heart-rate history—ethical design must negotiate utility, consent, and minimization together.

## Key terms

- **Stakeholder map** — The set of roles—product, legal, executives, users—each with legitimate but conflicting data interests.
- **Data subject** — The person whose data is collected; here, wellness-app users with rights to control sensitive health streams.
- **Minimization** — Collecting only what is needed for stated purposes, not everything partners might find valuable.

## What you should learn

### From the concept
- Ethics is negotiated across roles, not delegated to a single engineer or lawyer.
- Utility, consent, and revenue pressure can collide in one feature decision.
- Users are central stakeholders with control expectations, not passive data sources.

### From the output / result
- `run.sh` prints the four-way stakeholder collision as a design-review checklist.

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
cd modules/chapter3/example1
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Wellness app launch — stakeholder collision:
- Product: finer activity tracking for better recommendations
- Legal: clearer consent flow
- Executives: partner sharing to fund the app
- Users: control over heart-rate history
Ethical design must negotiate utility, consent, and minimization together.
```

## How to interpret the result

If your spec only optimizes model accuracy or partner revenue, you have not finished the ethics work—Section 3.9.3 returns to stakeholder involvement as an explicit decision process.

## Try it / Reflect

- For a fitness app you know, list one ask from product, legal, monetization, and users on the same screen—where do they conflict?

## Related examples

- `eg:3.6` — Autonomy and consent UX for a similar health-tracking product.
- `eg:3.9` — Platform collection dilemma when engagement goals clash with user control.
- `eg:3.33` — Four ethical lenses applied to marketing collection.

## Notes

- Prose-only in the manuscript. Returns in Section 3.9.3 (stakeholder involvement).
