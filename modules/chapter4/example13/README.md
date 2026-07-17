# Example 4.13 — Part-of-Speech Tagging

**Chapter:** 4  
**Label:** `eg:4.13`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.2.2` — Text Annotation Techniques

## Learning objective

Apply part-of-speech tags to individual tokens in a short English sentence.

## Chapter context

Example 4.13 completes the core text technique set in Section 4.2.2—POS after tokenization, sentiment, NER, and aspects.

## What this example shows

In ‘The quick fox jumps’, ‘quick’ is tagged adjective and ‘jumps’ verb—illustrating token-level grammatical labels.

## Key terms

- **Part-of-speech (POS) tagging** — Assigning grammatical categories to each token.
- **Adjective / verb tags** — Examples of open-class POS labels in English.
- **Sequence labeling** — Per-token label sequence aligned to tokenization.

## What you should learn

### From the concept
- POS is a building block for parsing and some downstream NLP.
- Tagset choice (Penn Treebank, UD) must be documented with exports.
- POS errors propagate to syntactic features used in later pipelines.

### From the output / result
- `run.sh` shows adjective and verb tags on sample tokens.

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
cd modules/chapter4/example13
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Part-of-speech tagging:
- “The quick fox jumps”
- “quick” → adjective
- “jumps” → verb
```

## How to interpret the result

POS is less subjective than sentiment but still needs tagset training—do not assume annotators share linguistics background.

## Try it / Reflect

- Tag POS on ‘The quick fox jumps over the lazy dog’—where do determiners and nouns fall?

## Related examples

- `eg:4.9` — Tokenization prerequisite.
- `eg:4.12` — Span NER vs token POS granularity.
- `eg:4.1` — POS listed among introductory text label types.

## Notes

- Prose-only.
