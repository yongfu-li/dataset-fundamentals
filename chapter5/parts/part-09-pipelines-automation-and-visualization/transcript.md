# Chapter 5 — Pipelines, automation, and visualization — transcript

**Part id:** part-09-pipelines-automation-and-visualization  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter5.tex` (§5.5.4–5.5.10), `modules/chapter5/example58/`, `modules/chapter5/example74/`

## Slide 1 — Chapter 5 — Pipelines, automation, and visualization

Single-notebook scripts do not scale across teams. This part introduces sklearn pipelines, automated feature engineering, AutoML preprocessing hooks, visualization for defect detection, and a brief R tidyverse contrast.

## Slide 2 — Learning objectives

By the end of this part, you should explain why pipelines prevent leakage, name Featuretools-style automation benefits, use box plots and heatmaps as cleaning diagnostics, and contrast dplyr/tidyr with pandas.

## Slide 3 — R: dplyr and tidyr

In R workflows, dplyr filters and selects columns while tidyr reshapes long and wide tables. Example 5.58 shows filter and select patterns analogous to pandas. Teams standardized on Python may still encounter R extracts—know that the verbs differ but the cleaning goals match.

## Slide 4 — sklearn pipelines

Pipelines chain imputers, scalers, encoders, and estimators so each cross-validation fold fits preprocessing only on training folds. This prevents statistics computed on validation data from leaking into features. Serialize pipelines with the model for consistent deployment preprocessing.

## Slide 5 — Automation: Featuretools and AutoML

Featuretools performs deep feature synthesis on relational tables—Example 5.74 on transactions. AutoML platforms wrap search over imputers, encoders, and model families. Automation accelerates baselines but still requires domain review to drop leaky or nonsense columns.

## Slide 6 — Example 5.74 — Deep feature synthesis on transactions

Example 5.74 shows automated aggregates across related tables. Open the example 74 module for this chapter to inspect generated features before modeling. Automated does not mean correct—validate cardinality and leakage.

## Slide 7 — Visualization for cleaning

Box plots expose outlier tails; heatmaps of missingness reveal column-wise patterns; histograms show skew before log transforms. Visual checks complement rule-based flags from earlier parts and align with exploratory practice in Chapter 6.

## Slide 8 — Takeaways

Pipelines encode reproducible preprocessing. Automation proposes features; humans curate them. Visual diagnostics catch defects rules miss.

## Slide 9 — Next

Pause for the quiz, then continue to challenges, best practices, and governance habits.
