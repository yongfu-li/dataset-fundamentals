# Example 3.11 — Consent for Healthcare Data Uses

**Chapter:** 3  
**Label:** `eg:3.11`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.3.2` — Key Concepts: Informed Consent, Anonymization, Privacy by Design

## Learning objective

Separate clinical-care consent from research reuse and preserve treatment access when patients refuse research.

## Chapter context

Section 3.3.2 defines informed consent as the operational counterpart to autonomy (Example 3.6). Example 3.11 raises the bar when a clinic wants secondary research use of treatment records.

## What this example shows

A clinic reusing treatment records for research must split care from research consent, explain secondary uses plainly, and allow refusal without affecting treatment—bundling research into general intake fails informed consent.

## Key terms

- **Secondary use** — Processing data for a purpose beyond the original care relationship.
- **Research consent** — Separate agreement for non-treatment analysis of clinical records.
- **Treatment firewall** — Guarantee that research refusal cannot alter clinical care.

## What you should learn

### From the concept
- Healthcare has overlapping but distinct legal and ethical bases for care vs research.
- Plain language and granular choice beat generic hospital forms.
- Consent failures are design failures in intake workflows.

### From the output / result
- `run.sh` prints the three-part consent bar for clinical research reuse.

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
cd modules/chapter3/example11
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Consent for healthcare data uses:
- Separate care consent from research consent
- Explain secondary uses in plain language
- Allow refusal without affecting treatment
Bundling research into a general intake form fails informed consent.
```

## How to interpret the result

If research is buried in admission paperwork, you have documented compliance theater—not respect for autonomy.

## Try it / Reflect

- Rewrite a two-sentence research opt-in that a stressed ER patient could actually parse.

## Related examples

- `eg:3.6` — Autonomy UX for consumer health apps.
- `eg:3.29` — Utilitarian push for broad secondary use without individual consent.

## Notes

- Prose-only.
