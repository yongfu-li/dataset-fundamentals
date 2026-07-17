# Chapter 9 — From fundamentals to advanced collection — transcript

**Clip id:** part-01-from-fundamentals-to-advanced  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter9.tex` (§9.1), `modules/chapter9/example1/`, `modules/chapter9/example2/`, `modules/chapter9/example5/`

## Slide 1 — Chapter 9 — From fundamentals to advanced collection

Chapter 2 covered surveys, sampling, and small-scale collection. This chapter asks what changes when evidence must arrive continuously, from many devices, or at volumes no spreadsheet can hold. Advanced techniques—crowdsourcing, Internet of Things sensing, and streaming pipelines—extend decision-focused design rather than replace it.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to explain when traditional collection pipelines hit scale, reliability, and cost limits; state why heterogeneous sources demand continuous rather than one-shot collection; and connect advanced methods to the same decision-making purpose that anchors smaller surveys.

## Slide 3 — Decision focus still anchors advanced pipelines

Advanced collection is not an excuse to gather everything. Teams still need the right evidence for a concrete action. Crowdsourcing, sensors, and streams exist so that purpose can survive larger scale, higher velocity, and more diverse formats without losing the link between measurement and decision.

## Slide 4 — Example 9.1 — Customer Sentiment Survey for Decisions

Example 9.1 considers a product team that may still begin with customer-satisfaction surveys. Once the same questions must be answered continuously across regions, channels, and product lines, survey logistics alone cannot keep up. Advanced methods preserve that decision-making goal at larger scale. Open the example 1 module for this chapter to review the scenario takeaways.

## Slide 5 — Why traditional pipelines hit limits

Traditional collection often fails on three fronts: scalability, reliability, and cost. Paper and interview workflows grow expensive as samples expand; human observers introduce inconsistency; and longitudinal studies multiply travel and personnel costs. Those limits motivate the techniques developed later in this chapter.

## Slide 6 — Example 9.2 — Paper Surveys and Scalability Limits

Example 9.2 shows how paper surveys fail to scale with sample size. Distribution, collection, and processing become exponentially harder as more respondents are added. The lesson is operational: when turnaround and volume matter, manual logistics break first. The example 2 module for this chapter summarizes the same scalability rationale.

## Slide 7 — Heterogeneous sources and continuous streams

Beyond scale and cost, modern projects must ingest sensors, social feeds, web analytics, enterprise logs, and multimedia. These sources differ in structure, arrive at high velocity, and often require continuous rather than one-shot collection. Quality assurance therefore depends on declared crawl windows, stable identifiers, and refresh practices that keep longitudinal work comparable.

## Slide 8 — Example 9.5 — Wearables as Continuous Health Data Sources

Example 9.5 shows wearables as continuous health sources that traditional clinic visits and paper records cannot match. Fitness trackers and smartwatches stream heart rate, activity, and sleep at a temporal resolution periodic visits cannot provide. The example 5 module for this chapter frames that continuous-sensing contrast.

## Slide 9 — Takeaways

Advanced collection extends Chapter 2 when data grow too large, too fast, or too heterogeneous for surveys and small databases alone. Decision focus remains the design goal. Crowdsourcing, IoT and edge sensing, and big-data streaming pipelines address scale, reliability, cost, variety, and timely processing.

## Slide 10 — Next

The next part defines crowdsourcing and walks use cases from fraud-pattern review and innovation contests to microtask image tagging on crowd platforms.
