---
marp: true
title: Chapter 2 — Tools for data collection
paginate: true
---

# Chapter 2 — Tools for data collection

Method choices become operational through platforms and libraries

---

## Learning objectives
- Map survey platforms, scraping libraries
- API clients to the methods from earlier parts
- Recognize that platforms cannot fix poor instrument design

---

## Tools implement earlier choices
- The chapter already decided which method fits the question
- This section asks which products and libraries implement that choice
- Official API clients for structured feeds
- Observation remains largely protocol- and people-driven

---

## Survey platforms
- Survey platforms automate instrument design, distribution
- Lightweight tools suit quick internal polls
- Strengths include low technical barriers, automatic tabular exports
- Limits echo the method-level risks

---

## Example 2.16 — Choosing a form builder for the Wi-Fi survey
- Example 2.16 — hands-on module
- Example 2.16 shows a tool choice after the campus Wi-Fi instrument from an earlier example
- Plus a comma-separated export into the same warehouse as ticket logs
- A full-featured survey platform is chosen over a bare email form because branching and
- Explore the chapter example module
- View files: `modules/chapter2/example16/`

---

## Web scraping stacks
- Scraping stacks extract fields from HTML when no API is offered
- Large crawl graphs may use a framework designed for scalable spiders
- At scholarly scale
- Method-level trade-offs

---

## Example 2.17 — Static parser vs browser driver for catalog pages
- Example 2.17 — hands-on module
- Example 2.17 pairs a library choice with the course-catalog harvest from an earlier
- If course titles appear in the initial HTML, a static parser is enough and cheaper to run
- If titles load only after clicking a term filter
- Explore the chapter example module
- View files: `modules/chapter2/example17/`

---

## API clients and schedulers
- API tools are the clients, keys, and schedulers that call endpoints introduced earlier
- Relative to scraping stacks, they usually offer clearer contracts
- Operational polling loops must survive daily quotas
- Survey platforms, scrapers

---

## Takeaways
- Choose tools after methods and instruments are defined
- Survey platforms encode branching and export workflows
- Even with good tools

---

## Next
- Complete the quiz for this part
- How design questions reappear across domains

