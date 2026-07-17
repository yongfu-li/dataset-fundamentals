# Example 4.12 — NER on Sentence

**Chapter:** 4  
**Label:** `eg:4.12`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.2.2` — Text Annotation Techniques

## Learning objective

Tag organization and location entities in a corporate factual sentence under NER.

## Chapter context

Example 4.12 is the Section 4.2.2 NER technique vignette—organization vs location on a business fact.

## What this example shows

In ‘Apple is headquartered in Cupertino’, ‘Apple’ is organization and ‘Cupertino’ location.

## Key terms

- **Organization entity** — Company, agency, or institution span.
- **Location entity** — Geographic place span.
- **Information extraction** — NLP tasks that populate structured fields from text.

## What you should learn

### From the concept
- Brand names can be organizations even when also product names.
- HQ sentences test location vs organization boundary rules.
- Low κ on org spans often means brand/subsidiary ambiguity (Example 4.31).

### From the output / result
- `run.sh` prints org/location tags on the Apple/Cupertino sentence.

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
cd modules/chapter4/example12
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
NER on sentence:
- “Apple is headquartered in Cupertino”
- “Apple” → organization
- “Cupertino” → location
```

## How to interpret the result

Use Example 4.31’s subsidiary guideline problem as a checklist when κ is low on organization tags.

## Try it / Reflect

- Is ‘Amazon’ organization, product, or both in ‘Amazon opened a warehouse in Ohio’?

## Related examples

- `eg:4.3` — Person/location NER in Section 4.1.2.
- `eg:4.31` — Organization-span guideline failure.
- `eg:4.13` — Token-level POS instead of entity spans.

## Notes

- Prose-only.
