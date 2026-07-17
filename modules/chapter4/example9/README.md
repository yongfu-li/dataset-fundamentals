# Example 4.9 — Tokenization on Text

**Chapter:** 4  
**Label:** `eg:4.9`  
**Source:** `author/chapter4.tex`  
**Section:** `sec:4.2.2` — Text Annotation Techniques

## Learning objective

Treat tokenization as the prerequisite split that most text taggers depend on.

## Chapter context

Section 4.2.2 turns from motivational galleries to technique building blocks. Example 4.9 is the first—tokenization before sentiment, NER, or POS.

## What this example shows

The sentence ‘AI is the future’ tokenizes to [AI, is, the, future] as a word-level split prerequisite for downstream taggers.

## Key terms

- **Tokenization** — Splitting text into words, subwords, or characters.
- **Token** — Atomic unit receiving tags in sequence labeling tasks.
- **Subword tokenization** — Finer splits used by many modern NLP models (not shown in the simple example).

## What you should learn

### From the concept
- Taggers assume a fixed token sequence and alignment rules.
- Token boundaries affect NER spans and POS tags.
- Production pipelines document tokenizer choice with the released corpus.

### From the output / result
- `run.sh` prints the simple word split for one sentence.

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
cd modules/chapter4/example9
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Tokenization:
- Sentence: “AI is the future”
- Tokens: [AI, is, the, future]
Prerequisite building block for most text taggers.
```

## How to interpret the result

If training uses BPE tokens but guidelines show word spans, alignment bugs will look like annotator error—fix tokenization in the schema doc.

## Try it / Reflect

- Tokenize ‘don't stop’—does your tokenizer split contractions the way annotators expect?

## Related examples

- `eg:4.13` — POS tags attach to tokens.
- `eg:4.12` — NER spans must align with token boundaries.
- `eg:4.1` — Chapter opener on text span/tag types.

## Notes

- Prose-only.
