# Example 4.1 — Text Dataset

**Chapter:** 4  
**Label:** `eg:4.1`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.1.1` — What is Data Annotation?

## Learning objective

Define data annotation as attaching task-defined labels so supervised models can learn input–output mappings.

## Chapter context

Chapter 4 opens with the claim that label quality often bounds accuracy more tightly than architecture alone. Example 4.1 is the compact text vignette for what ‘annotation’ means before modality galleries in Section 4.1.2.

## What this example shows

In an NLP corpus, tokens or spans may be tagged with parts of speech, sentiment, or named-entity types so a supervised model can learn those categories from examples.

## Key terms

- **Data annotation** — Attaching labels, tags, or structured metadata to raw records for supervised learning.
- **Supervised learning** — Training that requires paired inputs and task-defined outputs.
- **Label schema** — The set of categories or structures annotators must apply consistently.

## What you should learn

### From the concept
- Without reliable labels, learners cannot associate inputs with intended outputs.
- Annotation quality caps what even strong models can achieve on holdout data.
- Bad labels can encode demographic skew—Chapters 3 and 7 develop fairness implications.

### From the output / result
- `run.sh` states the annotation definition and the architecture-vs-labels ceiling.

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
cd modules/chapter4/example1
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Text dataset — what annotation is:
- Tokens or spans tagged with parts of speech, sentiment, or named-entity types
- Supervised model learns those categories from labeled examples
Label quality often bounds achievable accuracy more tightly than model architecture alone.
```

## How to interpret the result

Before choosing LabelImg or a crowd platform, confirm the label schema and QC plan—Example 4.1 is the ‘why labels matter’ anchor for the whole chapter.

## Try it / Reflect

- Name one label type your domain needs (span, box, row class) and one failure mode if labels are inconsistent.

## Related examples

- `eg:4.2` — Document-level sentiment on short feedback.
- `eg:4.30` — How inconsistent strings split the training signal.
- `eg:4.31` — When low agreement should stop scale-up.

## Notes

- Prose-only. Motivational preview; techniques deepen in Section 4.2.
