# Example 4.26 — Manual Sentiment Ambiguity

**Chapter:** 4  
**Label:** `eg:4.26`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.3.1` — Manual Annotation

## Learning objective

Justify human sentiment labels when surface wording misleads brittle keyword rules.

## Chapter context

Section 4.3.1 positions manual annotation as the reference when ambiguity and domain nuance dominate—Example 4.26 is the sentiment edge case.

## What this example shows

A sentence like ‘That was quite a disaster, but at least I got the coffee!’ may be labeled positive from context even though surface words look negative—humans catch tone keyword rules miss.

## Key terms

- **Manual annotation** — Labels assigned by trained humans without full automation.
- **Ambiguous tone** — Sentiment not determined by single negative/positive lexicon hits.
- **Inter-annotator variance** — Disagreement managed with guidelines and IAA (Section 4.5.2).

## What you should learn

### From the concept
- Manual throughput is lower but handles sarcasm and contrast clauses.
- Guidelines need worked examples for mixed-valence sentences.
- IAA checks quantify when the schema is still ambiguous.

### From the output / result
- `run.sh` walks the disaster/coffee sentence and human-vs-rule contrast.

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
cd modules/chapter4/example26
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Manual sentiment ambiguity:
- Sentence: “That was quite a disaster, but at least I got the coffee!”
- Surface words look negative; context may still warrant positive
- Brittle keyword rules miss this; trained humans catch it
Manage inter-annotator variance with guidelines and IAA.
```

## How to interpret the result

If κ is low on sentiment pilots, revise guidelines (Example 4.31) before crowdsourcing (Example 4.28).

## Try it / Reflect

- Write a one-sentence guideline rule for ‘complaint + silver lining’ constructions.

## Related examples

- `eg:4.10` — Simple polarity sentences.
- `eg:4.28` — Crowd majority vote—works poorly without clear edge rules.
- `eg:4.31` — Low κ triggers guideline revision.

## Notes

- Prose-only.
