# Chapter 2 — Tools for data collection — transcript

**Part id:** part-08-tools-for-collection  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter2.tex` (§2.7), `modules/chapter2/example16/`, `modules/chapter2/example17/`

## Slide 1 — Chapter 2 — Tools for data collection

Method choices become operational through platforms and libraries. This part maps survey form builders, scraping stacks, and API clients to the instruments already introduced—and stresses that tools encode workflow, not research design.

## Slide 2 — Learning objectives

By the end of this part, you should map survey platforms, scraping libraries, and API clients to the methods from earlier parts, justify tool choices using workflow requirements rather than brand familiarity, and recognize that platforms cannot fix poor instrument design.

## Slide 3 — Tools implement earlier choices

The chapter already decided which method fits the question. This section asks which products and libraries implement that choice. Modern collection stacks typically combine survey platforms for human responses, scraping libraries for web content without APIs, and official API clients for structured feeds. Observation remains largely protocol- and people-driven; sensor tooling is deferred to later chapters on streaming architectures.

## Slide 4 — Survey platforms

Survey platforms automate instrument design, distribution, and response storage once the questionnaire plan exists. Lightweight tools suit quick internal polls; conversational layouts emphasize engagement; full-featured platforms add branding, branching logic, and richer analytics. Strengths include low technical barriers, automatic tabular exports, and reusable templates. Limits echo the method-level risks: voluntary response bias, fatigue on long instruments, and poor item design that no platform can fix.

## Slide 5 — Example 2.16 — Choosing a form builder for the Wi-Fi survey

Example 2.16 shows a tool choice after the campus Wi-Fi instrument from an earlier example. The IT office needs branching so that only respondents who report failures see location follow-ups, plus a comma-separated export into the same warehouse as ticket logs. A full-featured survey platform is chosen over a bare email form because branching and export matter more than layout polish for this study. Open the example 16 module to compare requirements against platform capabilities.

## Slide 6 — Web scraping stacks

Scraping stacks extract fields from HTML when no API is offered. Large crawl graphs may use a framework designed for scalable spiders; static pages parse well with a lightweight HTML library; browser drivers are needed when content appears only after interaction. At scholarly scale, staged pipelines with cross-repository validation separate research-grade harvests from brittle personal scripts. Method-level trade-offs—fragility, robots policies, terms of service—remain those of scraping as a method.

## Slide 7 — Example 2.17 — Static parser vs browser driver for catalog pages

Example 2.17 pairs a library choice with the course-catalog harvest from an earlier example. If course titles appear in the initial HTML, a static parser is enough and cheaper to run. If titles load only after clicking a term filter, the team switches to a browser driver, accepting slower jobs and a higher chance of anti-bot blocks. Try the example 17 module to decide which stack fits a given page behavior.

## Slide 8 — API clients and schedulers

API tools are the clients, keys, and schedulers that call endpoints introduced earlier. Relative to scraping stacks, they usually offer clearer contracts: authenticate, respect rate limits, parse JSON or XML fields, and append rows to a growing store. Operational polling loops must survive daily quotas—backing off when limits are reached rather than retrying aggressively. Survey platforms, scrapers, and API clients are implementations of earlier method choices, not substitutes for them.

## Slide 9 — Takeaways

Choose tools after methods and instruments are defined. Survey platforms encode branching and export workflows; scraping stacks match page behavior; API clients encode authentication and quota discipline. Even with good tools, collection still fails when quality, bias, or integration are ignored—topics for the final part.

## Slide 10 — Next

Complete the quiz, then continue to the final part on challenges and case studies—quality defects, channel bias, and how design questions reappear across domains.
