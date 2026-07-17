# Example 1.6 — Textual Social Media Dataset

**Chapter:** 1  
**Label:** `eg:1.6`  
**Source:** `author/chapter1.tex`  
**Section:** `sec:1.1.3` — The Versatility of Datasets

## Learning objective

Recognize free text as a legitimate dataset attribute in its own right, wrapped in a table alongside category and sentiment labels.

## Chapter context

Section 1.1.3 pairs geospatial data with textual data to make the same versatility point from another angle: the row/column definition still applies, but now one attribute is unstructured language rather than a number or short code.

## What this example shows

Five labeled posts/reviews spanning Review, News, Social Media, and Chatbot categories, each with free-text content and a Positive/Negative/Neutral sentiment tag.

## Key terms

- **Unstructured attribute** — a field, like free text, that has no fixed internal schema even though it sits inside a structured table.

## What you should learn

### From the data / input
- `Text` is the unstructured payload; `Category` and `Sentiment` are structured labels/metadata riding alongside it.
- Quoted fields containing commas (e.g., the review sentences) still parse correctly in CSV once quoting is applied.
- Four different source types share one schema — proof that heterogeneous text sources can be normalized into one table.

### From the output / result
- Five rows print with visibly different sentiment values (Positive/Negative/Neutral) — read each pair as one supervised NLP example (text in, label out).

## Contents

| File | Role |
|------|------|
| `data.csv` | Text + sentiment sample |
| `install.sh` | No-op installer |
| `run.sh` | Prints the CSV |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Any shell that can run `cat`

## Setup

```bash
cd modules/chapter1/example6
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 1.6 — Textual Social Media Dataset
---- data.csv ----
ID,Category,Text,Sentiment
1,Review,"The product quality is excellent and exceeded my expectations.",Positive
2,Review,"Delivery was late and customer service was unhelpful.",Negative
3,News,"Stock markets saw a significant rise amid economic recovery.",Neutral
4,Social Media,"Loving the new features in this app! Great job!",Positive
5,Chatbot,"I need help with my order, it hasn't arrived yet.",Neutral
```

## How to interpret the result

The lesson is format versatility with a twist: the wrapper is still tabular (rows and columns), but the interesting content is language, which is why NLP pipelines still start from something that looks like a CSV.

## Try it / Reflect

- Group the rows by `Category` and check whether the sentiment distribution differs by source — a first EDA question for this kind of dataset.

## Related examples

- `eg:1.5` — the other versatility example, for spatial geometry instead of text.
- `eg:1.7` — a JSON record that also mixes structured fields with a free-text `comments` field.

## Notes

- Synthetic sample data from the book manuscript.
