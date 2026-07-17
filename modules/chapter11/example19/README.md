# Example 11.19 — Diverse Crowd Sentiment Judgments

**Chapter:** 11  
**Label:** `eg:11.19`  
**Source:** `author/chapter11.tex`  
**Section:** `sec:11.9.1` — Overview and Advantages of Crowdsourcing

## Learning objective

Aggregate diverse crowd sentiment raters and flag disagreement for review.

## Chapter context

Section 11.9.1 covers crowdsourcing advantages for annotation scale, cost, and speed. For movie-review sentiment, multiple crowd annotators capture disagreement that a single rater would hide, and aggregation yields a more stable training signal for subjective langu…

## What this example shows

For movie-review sentiment, multiple crowd annotators capture disagreement that a single rater would hide, and aggregation yields a more stable training signal for subjective language.

## What you should learn

### From the concept
- Multiple raters expose disagreement a single rater hides
- Aggregation stabilizes subjective labels
- Disagreement flags hard items for review

### From the output / result
- `run.sh` prints the structured takeaway below—use it when designing query or workforce rules.

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
cd modules/chapter11/example19
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Diverse crowd sentiment:
- Multiple raters expose disagreement a single rater hides
- Aggregation stabilizes subjective labels
- Disagreement flags hard items for review
```

## How to interpret the result

The closing bullet—'Disagreement flags hard items for review'—is the operational gate: if your pipeline skips this check, advanced annotation saves cost on paper but not in production quality.

## Try it / Reflect

- Where would 'Diverse Crowd Sentiment Judgments' change your current labeling queue?

## Related examples

- `eg:11.18` — Previous example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
