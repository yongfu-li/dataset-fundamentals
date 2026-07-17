# Example 2.17 — Static Parser vs Browser Driver for Catalog Pages

**Chapter:** 2  
**Label:** `eg:2.17`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.7.2` — Web Scraping Tools

## Learning objective

Choose a static HTML parser when content is in the initial markup, and a browser driver when content appears only after interaction.

## Chapter context

Section 2.7.2 pairs tool choice with the course-catalog harvest from Example 2.6. BeautifulSoup vs Selenium is the practical fork: cost and anti-bot risk rise with browser automation.

## What this example shows

If course titles appear in the initial HTML, BeautifulSoup (or equivalent) is enough; if titles load only after clicking a term filter, the team switches to Selenium, accepting slower jobs and higher anti-bot risk.

## Key terms

- **Static parser** — Library that extracts from downloaded HTML without executing page scripts.
- **Browser driver** — Automates a real browser so dynamically loaded content becomes visible.

## What you should learn

### From the concept
- Prefer the cheapest tool that sees the fields you need.
- Dynamic pages force browser drivers and higher failure rates.
- Document selectors and the reason for the tool switch.

### From the output / result
- `run.sh` prints the takeaway or data/code output below; use it as a checklist for similar collection designs.

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
cd modules/chapter2/example17
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Scrape tooling follows how the page loads:
- Titles in initial HTML → static parser (e.g., BeautifulSoup)
- Titles after clicks/filters → browser driver (e.g., Selenium)
- Drivers are slower and more likely to hit anti-bot blocks
```

## How to interpret the result

Tool escalation is evidence about the page, not a preference — start static, move to a driver only when fields are absent from initial HTML.

## Try it / Reflect

- View page source vs rendered DOM: if the title string appears only in the latter, you need a driver.

## Related examples

- `eg:2.6` — Why scrape the catalogs at all.
- `eg:2.17b` — Harvest stages and cross-repository QA after scraping.

## Notes

- Prose-only in the manuscript.
