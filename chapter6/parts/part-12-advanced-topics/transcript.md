# Chapter 6 — Advanced topics and future directions — transcript

**Part id:** part-12-advanced-topics  
**Estimated duration:** 6 minutes  
**Sources:** `author/chapter6.tex` (§6.10)

## Slide 1 — Chapter 6 — Advanced topics and future directions

Notebook EDA on static CSVs is the baseline; large and streaming datasets push new tooling and pipeline integration.

## Slide 2 — Learning objectives

By the end of this part, you should name trends in automated EDA, outline challenges for streaming exploration, and describe how EDA hooks into ML pipelines.

## Slide 3 — Automated EDA tools

Report generators and AutoML front-ends accelerate first passes on wide tables. They help triage columns and missingness but require human review for domain validity, leakage, and fairness implications connected to Chapter 7.

## Slide 4 — EDA in big data and streaming

Batch assumptions fail when data never stops arriving. Sliding windows, online summaries, and sampled visualizations replace full-table scans. Latency and consistency constraints mirror Chapter 5 streaming preprocessing themes.

## Slide 5 — Integration with ML pipelines

Exploration informs feature stores, train-validation splits, and monitoring baselines. Documented EDA artifacts become regression tests when production data drifts—summary stats and plot templates detect shift early.

## Slide 6 — Looking ahead

Chapter 7 deepens bias and fairness analysis once exploration reveals segment disparities. Strong EDA logs make later modeling and auditing more trustworthy.

## Slide 7 — Takeaways

Automation scales the first pass; humans keep domain judgment. Streaming and pipeline integration extend EDA beyond one-off notebooks.

## Slide 8 — Next

Pause for the quiz. You have completed the Chapter 6 learning path—return to the chapter landing page for the full deck or browse module examples.
