# Chapter 5 — Advanced topics — transcript

**Part id:** part-12-advanced-topics  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter5.tex` (§5.9), `modules/chapter5/example70/`, `modules/chapter5/example72/`, `modules/chapter5/example75/`

## Slide 1 — Chapter 5 — Advanced topics

Batch CSV cleaning is the baseline; production systems add streaming velocity, automated synthesis, and explainability requirements. This final part previews advanced imputation, real-time preprocessing, pipelines at scale, and cleaning for interpretable models.

## Slide 2 — Learning objectives

By the end of this part, you should contrast Bayesian and deep imputation, describe sliding-window streaming preprocessing, and explain how documentation supports explainable AI.

## Slide 3 — Advanced imputation

Bayesian imputation models missing values with uncertainty—Example 5.70 combines vitals and clinical priors for blood pressure gaps. Autoencoder imputation—Example 5.71—learns nonlinear reconstructions for retail baskets. Both beat naive means when patterns are complex but need more data and compute.

## Slide 4 — Example 5.70 — Bayesian imputation with clinical priors

Example 5.70 is the uncertainty-aware clinical case. Open the example 70 module for this chapter to see why intervals matter for regulated decisions. Deep methods require guardrails against overfitting sparse tables.

## Slide 5 — Real-time and streaming preprocessing

Streaming finance, IoT, and vitals demand low-latency transforms. Challenges include latency, arriving corruption, and scale. Sliding windows—Example 5.72 on prices—and online scalers update statistics on recent data only. Batch assumptions fail when data never stops.

## Slide 6 — Example 5.72 — Rolling window for streaming prices

Example 5.72 maintains a rolling feature window for aggregates. Try the example 72 module to contrast batch and streaming normalization. Real-time vital sign preprocessing appears in Example 5.73 with similar constraints.

## Slide 7 — Automated pipelines and explainability

Automated pipelines orchestrate cleaning stages across storage systems. For explainable AI, document imputation and encoding so auditors can trace inputs—Examples 5.75 and 5.76 prefer interpretable credit features and fair clinical encodings over opaque high-dimensional expansions.

## Slide 8 — Example 5.75 — Document imputation for auditable models

Example 5.75 ties preprocessing logs to model cards. Open the example 75 module for this chapter to review metadata fields regulators expect. Cleaning choices are part of the model story, not a hidden notebook.

## Slide 9 — Looking ahead

Chapter 6 continues with exploration that detects many defects this chapter repairs. Chapter 7 connects preprocessing to fairness. Strong cleaning documentation makes both downstream chapters more trustworthy.

## Slide 10 — Takeaways

Advanced methods extend—not replace—core taxonomy and tools. Streaming and explainability impose new constraints on familiar transforms. Document every stage for production and audit.

## Slide 11 — Next

Pause for the quiz. You have completed the Chapter 5 learning path—return to the chapter landing page for the full deck or browse module examples.
