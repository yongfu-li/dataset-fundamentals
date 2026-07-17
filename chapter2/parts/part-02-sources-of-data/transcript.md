# Chapter 2 — Sources of data — transcript

**Part id:** part-02-sources-of-data  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter2.tex` (§2.2), `modules/chapter2/example2/`, `modules/chapter2/example3/`

## Slide 1 — Chapter 2 — Sources of data

A collection plan starts with purpose; the next decision is where records originate. This part contrasts primary data measured for the current study, secondary archives reused from others, and real-time streams that keep refreshing.

## Slide 2 — Learning objectives

By the end of this part, you should distinguish primary, secondary, and real-time source types, summarize the strengths and risks of each, and explain why source choice and structure choice are orthogonal planning decisions.

## Slide 3 — Where do records come from?

Chapter 1 classified datasets by structure and temporal behavior. This section answers a different question: where do the records come from? It helps to distinguish primary data collected for the current objective, secondary data reused from prior studies or agencies, and real-time streams that refresh with little delay. A source choice and a structure choice are independent: a primary survey can yield a structured table, and a secondary archive can hold unstructured text.

## Slide 4 — Primary data

Primary data are measured directly for the present study through surveys, experiments, interviews, or observation. Because the instrument is designed around the question at hand, primary data are often more relevant than reused extracts, and the team retains control over sampling, wording, and quality checks. The trade-off is time, cost, and the risk of human bias during interviews or observation.

## Slide 5 — Example 2.2 — Primary collection in a clinical monitoring study

Example 2.2 shows a primary clinical protocol designed around a recovery question. A hospital study of post-operative recovery may collect vital signs every four hours from bedside monitors and nurse-entered pain scores. The protocol defines devices, recording intervals, and inclusion criteria so that another ward could reproduce the same table structure. Open the example 2 module to review how primary collection buys relevance and control.

## Slide 6 — Secondary data

Secondary data were previously collected, processed, and published by others: academic papers, government reports, statistical agencies, or open repositories. They are attractive when budgets are tight or when historical coverage matters, because the expensive fieldwork has already been paid for. Challenges include schema mismatch, incomplete provenance, and biases from the original purpose that travel silently into the new analysis.

## Slide 7 — Example 2.3 — Secondary census extract for store siting

Example 2.3 shows a secondary reuse path that looks cheaper until schema mismatch appears. A retailer considering new store locations downloads a public census extract with neighborhood income and age distributions. The download is fast and free, but the age bins and geographic units do not match the retailer's catchment polygons, so analysts must re-aggregate before the table answers the siting question. Try the example 3 module to see how secondary data shifts cost from fieldwork to curation.

## Slide 8 — Real-time data

Real-time data are collected and made available with minimal delay, often through IoT sensors, streaming APIs, or social and analytics feeds. Such feeds usually produce dynamic datasets: records keep arriving, so latency, ordering, and retention become first-class design constraints. They enable immediate action in monitoring and alerting, but the pipeline must handle volume, missing packets, and clock drift before the stream becomes a trustworthy analytical table.

## Slide 9 — Takeaways

Primary sources buy relevance and control at the price of cost and time. Secondary sources buy speed and scale at the price of fit and provenance checks. Real-time sources buy timeliness at the price of infrastructure and integration discipline. Match the source class to the decision timeline and the evidence standard the study requires.

## Slide 10 — Next

Complete the quiz, then continue to the next part on surveys, observation, and web scraping—the instruments that turn a source choice into measurable records.
