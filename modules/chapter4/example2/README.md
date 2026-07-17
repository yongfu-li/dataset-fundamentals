# Example 4.2 — Text Annotation on Customer Feedback

**Chapter:** 4  
**Label:** `eg:4.2`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.1.2` — Examples of Annotated Data

## Learning objective

Recognize document-level sentiment labels on short customer feedback as a basic text-annotation pattern.

## Chapter context

Section 4.1.2 walks modality-by-modality through annotated-data examples. Example 4.2 is the simplest text case—polarity on survey sentences—before entity tagging in Example 4.3.

## What this example shows

In a customer feedback survey, ‘The service was excellent’ may be labeled positive while ‘The product was disappointing’ may be labeled negative.

## Key terms

- **Document-level sentiment** — One polarity label for an entire short text unit.
- **Polarity** — Positive vs negative (sometimes neutral) classification target.
- **Text annotation** — Labeling linguistic meaning or structure for NLP tasks.

## What you should learn

### From the concept
- Sentiment is a common entry-level NLP annotation task.
- Even two-sentence examples imply a guideline for edge cases (sarcasm, mixed tone).
- Section 4.2.2 returns with tagging techniques and aspect-level extensions.

### From the output / result
- `run.sh` prints the two-sentence polarity mapping.

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
cd modules/chapter4/example2
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Customer feedback sentiment:
- “The service was excellent” → positive
- “The product was disappointing” → negative
Simple document-level polarity labels for NLP training.
```

## How to interpret the result

Example 4.26 later shows why these simple pairs are not enough for ambiguous tone—plan guidelines before scaling.

## Try it / Reflect

- Label three real app reviews positive/negative—where would two annotators disagree?

## Related examples

- `eg:4.10` — Same polarity task with exclamation-heavy phrasing.
- `eg:4.26` — Ambiguous tone that keyword rules miss.
- `eg:4.28` — Crowd redundancy on sentiment labels.

## Notes

- Prose-only.
