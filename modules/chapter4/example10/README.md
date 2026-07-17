# Example 4.10 — Sentiment Tagging on Text

**Chapter:** 4  
**Label:** `eg:4.10`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.2.2` — Text Annotation Techniques

## Learning objective

Assign document-level polarity labels to short promotional or complaint sentences.

## Chapter context

Example 4.10 is the Section 4.2.2 sentiment technique vignette—paired with aspect-based tags in Example 4.11.

## What this example shows

‘I love this product!’ is labeled positive; ‘This service is awful’ is labeled negative—polarity labels for classification training.

## Key terms

- **Sentiment tagging** — Assigning polarity or fine-grained affect to text.
- **Training polarity** — Discrete label used as supervised classification target.
- **Document-level label** — One sentiment decision per short unit.

## What you should learn

### From the concept
- Clear positive/negative pairs still need neutral and mixed-tone rules.
- Exclamation and intensifiers do not always determine polarity.
- Example 4.26 is the deliberate ambiguity counterexample.

### From the output / result
- `run.sh` maps two sentences to positive/negative.

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
cd modules/chapter4/example10
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Sentiment tagging:
- “I love this product!” → positive
- “This service is awful” → negative
Polarity labels for classification training.
```

## How to interpret the result

Before crowdsourcing thousands of reviews, pilot Example 4.26-style edge cases and measure κ (Example 4.31).

## Try it / Reflect

- Label ‘Not bad at all’—positive, neutral, or negative under your guideline?

## Related examples

- `eg:4.2` — Survey feedback polarity in Section 4.1.2.
- `eg:4.11` — Aspect-level tags beyond document polarity.
- `eg:4.26` — Ambiguous tone requiring human judgment.

## Notes

- Prose-only.
