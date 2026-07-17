# Example 2.6 — Choosing Scraping for Public Course Catalogs

**Chapter:** 2  
**Label:** `eg:2.6`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.3.3` — Web Scraping

## Learning objective

Decide when scraping is justified: public pages, no API, and a need for repeated structured snapshots.

## Chapter context

Section 2.3.3 presents web scraping as a method when providers expose HTML but not APIs. The course-catalog case is the chapter's running scrape scenario (later revisited in 2.17).

## What this example shows

A research team needs weekly snapshots of publicly listed university course titles and credit hours with no catalog API; they scrape the HTML timetable and store course code and title as structured rows.

## Key terms

- **Web scraping** — Programmatic extraction of structured fields from HTML pages.

## What you should learn

### From the concept
- Scraping is appropriate when the data are public and no API exists.
- Store structured fields (code, title, credits), not raw HTML dumps alone.
- Policy, throttle rates, and selector maintenance belong in the collection plan.

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
cd modules/chapter2/example6
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Choose scraping when pages are public and no API exists:
- Example: weekly university course titles and credit hours
- Store structured rows (code, title), not only raw HTML
- Plan for policy, throttling, and selector maintenance
```

## How to interpret the result

Scraping is a method choice with ongoing maintenance — if an API appears later, prefer it (see Section 2.7.3).

## Try it / Reflect

- If titles load only after a JavaScript filter click, which tool from Example 2.17 do you need?

## Related examples

- `eg:2.17` — Static parser vs browser driver for the same catalogs.
- `eg:2.17b` — Operational harvest stages and cross-repository QA.

## Notes

- Prose-only in the manuscript.
