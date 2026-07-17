# Example 2.17b — CIRDC Harvest Stages and Cross-Repository Checks

**Chapter:** 2  
**Label:** `eg:2.17b`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.7.2` — Web Scraping Tools

## Learning objective

Describe an operational scrape-plus-QA loop: index → year-by-year harvest → cross-repository field checks before freeze.

## Chapter context

Still in Section 2.7.2, Example 2.17b zooms from tool choice to pipeline stages. CIRDC-style scholarly metadata harvests show that scraping is incomplete without validation against a second authority.

## What this example shows

A digital-library project builds a publication-number index, crawls year-by-year JSON dumps (titles, DOIs, pages, author IDs), then checks selected fields against a second repository or DOI registry; mismatches trigger re-harvest or manual review before release.

## Key terms

- **Harvest stage** — A sequenced step in a large scrape (index, crawl, validate, freeze).
- **Cross-repository check** — Comparing scraped fields to an independent authority before release.

## What you should learn

### From the concept
- Large scrapes need an index before bulk crawling.
- QA against a second source is part of collection, not optional polish.
- Mismatches must block freeze or trigger re-harvest.

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
cd modules/chapter2/example17b
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Operational scrape = stages + QA, not only a parser:
- Build publication-number index, then year-by-year JSON harvest
- Cross-check fields against a second repository or DOI registry
- Mismatches → re-harvest or manual review before freeze
```

## How to interpret the result

A finished scrape without cross-checks is an unfinished collection process — the section's operational takeaway beyond BeautifulSoup vs Selenium.

## Try it / Reflect

- Which fields would you cross-check first for papers — DOI, title, or page count — and why?

## Related examples

- `eg:2.17` — Parser vs driver choice for catalog-like pages.
- `eg:2.6` — When scraping is the method at all.

## Notes

- Prose-only in the manuscript.
- Label eg:2.17b maps to folder example17b/.
