# Example 13.43 — knitr and ggplot2 in RMarkdown

**Chapter:** 13  
**Label:** `eg:13.43`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.8.2` — Automating Workflow Documentation

## Learning objective

Combine knitr execution with ggplot2 visuals inside RMarkdown workflows.

## Chapter context

Chapter 13 synthesizes reproducibility, FAIR sharing, open workflows, and audit practices. The knitr package executes the embedded code in the RMarkdown document, while ggplot2 can generate high-quality visualizations.

## What this example shows

The knitr package executes the embedded code in the RMarkdown document, while ggplot2 can generate high-quality visualizations.

## What you should learn

### From the concept
- The knitr package executes the embedded code in the RMarkdown document, while ggplot2 can generate high-quality visualizations.

### From the output / result
- `run.sh` prints the structured takeaway below—use it in reproducibility and open-science reviews.

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
cd modules/chapter13/example43
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
RMarkdown: knitr executes code; ggplot2 renders visuals.
```

## How to interpret the result

The takeaway 'knitr executes code; ggplot2 renders visuals.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'knitr and ggplot2 in RMarkdown' is missing from your current project README?

## Related examples

- `eg:13.42` — Previous example in the same section.
- `eg:13.44` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
