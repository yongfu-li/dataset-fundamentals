# Example 7.12 — Labeling Bias in Sentiment Annotation

**Chapter:** 7  
**Label:** `eg:7.21`  
**Source:** `author/chapter7.tex`  
**Section:** `sec:7.2.4` — Label Bias: Subjectivity or Inconsistency During the Labeling Process

## Learning objective

Guard sentiment labels with guidelines and inter-annotator agreement (Chapter 4).

## Chapter context

Section 7.2.4 covers labeling bias from subjective or inconsistent annotation. In sentiment analysis, human annotators may interpret the tone of text differently based on their own cultural or social perspectives, leading to inconsistencies in labeling whethe…

## What this example shows

In sentiment analysis, human annotators may interpret the tone of text differently based on their own cultural or social perspectives, leading to inconsistencies in labeling whether a piece of text is ``positive'' or ``negative''.

## Key terms

- **Label bias** — Subjective or inconsistent labels teach models annotator prejudice.

## What you should learn

### From the concept
- Annotators read tone through their own cultural/social lens
- Inconsistent positive/negative labels teach the model those inconsistencies
- Guard rails: clear guidelines + inter-annotator agreement checks (Chapter 4)

### From the output / result
- `run.sh` prints the structured takeaway below—use it when classifying or mitigating bias.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op or prerequisite check |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter7/example12
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 7.12 — Labeling Bias in Sentiment Annotation
Label bias — sentiment annotation:
- Annotators read tone through their own cultural/social lens
- Inconsistent positive/negative labels teach the model those inconsistencies
- Guard rails: clear guidelines + inter-annotator agreement checks (Chapter 4)
```

## How to interpret the result

The closing bullet—'Guard rails: clear guidelines + inter-annotator agreement checks (Chapter 4)'—is the audit gate: deploy only after this condition is checked for the affected groups.

## Try it / Reflect

- Where does 'Labeling Bias in Sentiment Annotation' appear in a dataset you have worked with?

## Related examples

- `Chapter 4` — Annotation guidelines and IAA.
- `eg:7.22` — Label bias in justice data.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
- Module folder `example12` is **Example 7.12** in the PDF; manuscript label is `eg:7.21`.
