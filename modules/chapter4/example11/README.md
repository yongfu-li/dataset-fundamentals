# Example 4.11 — Aspect-Based Review Tags

**Chapter:** 4  
**Label:** `eg:4.11`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.2.2` — Text Annotation Techniques

## Learning objective

Combine sentence-level sentiment with span-level product-attribute tags for aspect-based analysis.

## Chapter context

Example 4.11 extends Example 4.10 beyond document polarity—multiple label granularities on one review corpus.

## What this example shows

A product-review corpus may receive sentence-level sentiment plus span-level attribute tags (battery life, packaging) for aspect-based sentiment analysis.

## Key terms

- **Aspect-based sentiment** — Polarity tied to product facets, not only whole documents.
- **Attribute span** — Text span labeled with a product aspect category.
- **Multi-granularity labeling** — Document, sentence, and span labels on the same source text.

## What you should learn

### From the concept
- Richer schemas increase guideline and QC burden.
- Aspect tags enable finer-grained product analytics than headline polarity.
- Span boundaries must be defined for overlapping opinions.

### From the output / result
- `run.sh` lists sentence sentiment plus attribute spans.

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
cd modules/chapter4/example11
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Aspect-based review tags:
- Sentence-level sentiment labels
- Plus span-level product-attribute tags (e.g., battery life, packaging)
Supports aspect-based sentiment analysis beyond document polarity.
```

## How to interpret the result

If you only crowdsource document polarity, you cannot recover aspect-level insight later—design granularity up front.

## Try it / Reflect

- In ‘Battery dies fast but the screen is gorgeous’, which spans get which aspect labels?

## Related examples

- `eg:4.10` — Document polarity only.
- `eg:4.12` — Span labeling for entities instead of aspects.
- `eg:4.28` — Crowd scaling for simpler sentiment before adding aspects.

## Notes

- Prose-only.
