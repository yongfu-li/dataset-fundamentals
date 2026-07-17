# Example 13.41 — RMarkdown Public Health Analysis Report

**Chapter:** 13  
**Label:** `eg:13.41`  
**Source:** `author/chapter13.tex`  
**Section:** `sec:13.8.2` — Automating Workflow Documentation

## Learning objective

Compile RMarkdown reports so code and narrative stay synchronized.

## Chapter context

Chapter 13 synthesizes reproducibility, FAIR sharing, open workflows, and audit practices. A researcher analyzing a public health dataset might use RMarkdown to load data, clean it, conduct statistical analyses, and generate visualizations. As the report is compiled, cod…

## What this example shows

A researcher analyzing a public health dataset might use RMarkdown to load data, clean it, conduct statistical analyses, and generate visualizations. As the report is compiled, code and narrative stay synchronized.

## What you should learn

### From the concept
- A researcher analyzing a public health dataset might use RMarkdown to load data, clean it, conduct statistical analyses, and generate visualizations.
- As the report is compiled, code and narrative stay synchronized.

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
cd modules/chapter13/example41
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
RMarkdown: recompile to keep code and narrative in sync.
```

## How to interpret the result

The takeaway 'recompile to keep code and narrative in sync.' is the release gate: open-science claims fail if this condition is not met before publication or sharing.

## Try it / Reflect

- Which part of 'RMarkdown Public Health Analysis Report' is missing from your current project README?

## Related examples

- `eg:13.42` — Next example in the same section.

## Notes

- Prose-only manuscript example; no code listing in the chapter.
