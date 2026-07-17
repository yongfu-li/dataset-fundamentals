# Example 4.3 — Text Annotation on Named Entities

**Chapter:** 4  
**Label:** `eg:4.3`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.1.2` — Examples of Annotated Data

## Learning objective

Apply a standard NER schema by tagging person and location entities in a factual sentence.

## Chapter context

Example 4.3 pairs with Example 4.2 in the Section 4.1.2 text gallery—moving from document sentiment to span-level entity types.

## What this example shows

In ‘Barack Obama was born in Hawaii’, ‘Barack Obama’ is labeled person and ‘Hawaii’ location under a standard NER schema.

## Key terms

- **Named entity recognition (NER)** — Tagging spans with types such as person, location, organization.
- **Entity span** — Character or token range receiving a single type label.
- **NER schema** — The closed set of entity types and boundary rules annotators follow.

## What you should learn

### From the concept
- NER is span labeling, not document classification.
- Schema choice (BIO, types, nested entities) must be fixed before scale-up.
- Example 4.31 shows organization-span ambiguity when guidelines are weak.

### From the output / result
- `run.sh` shows person/location tags on a biographical sentence.

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
cd modules/chapter4/example3
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Named entities:
- Sentence: “Barack Obama was born in Hawaii”
- “Barack Obama” → person
- “Hawaii” → location
Standard NER schema on factual text.
```

## How to interpret the result

If subsidiaries vs parent brands are unclear in your schema, expect low κ before the full corpus—see Example 4.31.

## Try it / Reflect

- Tag entities in ‘Apple is headquartered in Cupertino’—same schema as Example 4.12.

## Related examples

- `eg:4.12` — Organization and location tags in a corporate sentence.
- `eg:4.31` — Low κ on organization spans triggers guideline revision.
- `eg:4.13` — POS tagging—token-level rather than span-level.

## Notes

- Prose-only.
