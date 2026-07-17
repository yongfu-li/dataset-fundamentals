# Example 3.33 — User Data Collection for Marketing

**Chapter:** 3  
**Label:** `eg:3.33`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.9.2` — Practical Ethical Decision-Making Examples

## Learning objective

Apply utilitarian, rights-based, virtue, and justice lenses to expanding marketing collection under a vague notice.

## Chapter context

Section 3.9.2 runs multi-lens analysis on practical scenarios. Example 3.33 ties back to the collection dilemma in Example 3.9.

## What this example shows

An app with vague notice wants richer ads personalization—utilitarianism stresses engagement; rights-based ethics demands purpose-specific consent; virtue ethics stresses transparent disclosure; justice asks whether opaque collection burdens less literate users.

## Key terms

- **Four-lens analysis** — Structured review through utilitarian, rights, virtue, and justice frames.
- **Vague notice** — Privacy text that does not specify events collected for ads.
- **Literacy burden** — Unequal ability to parse notices—justice concern.

## What you should learn

### From the concept
- Same feature looks different through each ethical lens.
- Engagement metrics alone do not settle collection ethics.
- Opaque UX shifts burden to the least empowered users.

### From the output / result
- `run.sh` summarizes all four lens takeaways for marketing expansion.

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
cd modules/chapter3/example33
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Four lenses — marketing collection:
- Utilitarian: engagement gains from personalized ads
- Rights-based: clearer, purpose-specific consent and easy refusal
- Virtue: transparent disclosure
- Justice: whether opaque collection burdens users with less literacy or fewer alternatives
Related to Example 3.9.
```

## How to interpret the result

Use as a workshop template whenever product proposes ‘slightly broader’ logging.

## Try it / Reflect

- Score one proposed log expansion 1–5 on each lens—where is the lowest score?

## Related examples

- `eg:3.9` — Platform collection dilemma without four-lens detail.
- `eg:3.1` — Stakeholder collision including monetization.
- `eg:3.34` — Four lenses on criminal-justice AI.

## Notes

- Prose-only.
