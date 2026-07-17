# Example 4.31 — Low Kappa Triggers Guideline Revision

**Chapter:** 4  
**Label:** `eg:4.31`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.5.2` — Inter-Annotator Agreement

## Learning objective

Treat low Cohen's κ on an NER pilot as a stop signal to revise guidelines and retrain—not as noise to ignore.

## Chapter context

Section 4.5.2 on inter-annotator agreement—Example 4.31 shows κ ≈ 0.35 on organization spans when subsidiary rules are unclear.

## What this example shows

On an NER pilot, two annotators reach κ ≈ 0.35 on organization spans because guidelines are unclear on subsidiaries vs parent brands—the team revises examples and retrains before full corpus labeling.

## Key terms

- **Inter-annotator agreement (IAA)** — Consistency among annotators on the same items.
- **Cohen's κ** — Chance-corrected agreement for two raters on nominal labels.
- **Calibration round** — Pilot labeling plus guideline fixes before production scale.

## What you should learn

### From the concept
- Low κ often means ambiguous schema, not ‘bad annotators.’
- Revise positive/negative examples, then re-pilot.
- Table 4.4 lists κ, Fleiss, and Krippendorff's α for different designs.

### From the output / result
- `run.sh` states κ ≈ 0.35, cause, and revise/retrain action.

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
cd modules/chapter4/example31
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Low kappa → guideline revision:
- NER pilot: κ ≈ 0.35 on organization spans
- Cause: unclear guideline on subsidiaries vs parent brands
- Action: revise examples, re-train annotators, then label the full corpus
Low IAA should stop scale-up, not be ignored.
```

## How to interpret the result

Scaling with κ ≈ 0.35 bakes noise into the training signal—Example 4.31 demands a pause.

## Try it / Reflect

- Draft one positive and one negative example for ‘Is Acme Labs a separate organization tag?’

## Related examples

- `eg:4.12` — Organization tags that triggered the ambiguity.
- `eg:4.3` — NER schema introduced in Section 4.1.2.
- `eg:4.30` — Synonym errors vs genuine guideline ambiguity.

## Notes

- Prose-only.
