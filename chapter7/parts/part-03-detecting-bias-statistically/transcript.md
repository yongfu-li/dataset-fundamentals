# Chapter 7 — Detecting bias statistically — transcript

**Clip id:** clip-03-detecting-bias-statistically  
**Estimated duration:** 8 minutes  
**Sources:** `author/chapter7.tex` (§7.3.1–7.3.2), `modules/chapter7/example18/`, `modules/chapter7/example19/`, `modules/chapter7/example21/`, `modules/chapter7/example24/`

## Slide 1 — Chapter 7 — Detecting bias statistically

A bias taxonomy identifies possible mechanisms, but an audit needs measurable evidence. Statistical detection begins by defining relevant groups, outcomes, and deployment populations. It then compares representation, distributions, relationships, and decision rates to locate disparities that require explanation or intervention.

## Slide 2 — Learning objectives

By the end of this clip, learners should be able to plan a disaggregated bias screen, compare subgroup distributions, interpret the role of statistical tests, identify proxy relationships with sensitive attributes, and calculate and cautiously interpret a disparate-impact ratio using the eighty-percent rule.

## Slide 3 — Example 7.27 — Multiple Manifestations of Dataset Bias

Example 7.27 establishes why one metric is insufficient. Bias may appear in demographic representation, processing, labels, aggregation, or outcomes. An audit should therefore inspect both inputs and decisions, compare several subgroups, and preserve context about how each variable was created. A flag is evidence for investigation, not a complete causal explanation.

## Slide 4 — Example 7.28 — Distribution Comparison Across Demographics

Example 7.28 compares features such as age, gender, and race across groups and against the intended population. Differences in counts, proportions, ranges, or missingness can reveal underrepresentation and uneven data quality. Learners can inspect the runnable example 19 module for this chapter to see a compact distribution check and its output.

## Slide 5 — Statistical tests and practical significance

Formal tests can assess whether observed distribution differences are unlikely under a stated null hypothesis. A chi-squared test is suitable for categorical counts, while other tests may compare continuous distributions. Statistical significance does not establish harm or practical importance, and very large samples can make small differences significant. Effect size and context remain essential.

## Slide 6 — Example 7.30 — Chi-Squared Test for Gender Distribution

Example 7.30 asks whether gender distribution differs across outcome categories, such as high-performing and low-performing candidates. The test compares observed counts with counts expected under independence. Learners can inspect the runnable example 21 module for this chapter to follow the calculation, assumptions, and interpretation without treating the result as proof of discrimination.

## Slide 7 — Correlations and proxy features

Correlation analysis can reveal features that encode sensitive attributes indirectly. Names, neighborhoods, schools, or purchasing patterns may act as proxies even after race or gender is removed. Correlation is a screening tool rather than a causal verdict, but a strong relationship warrants closer examination of feature necessity, historical context, and subgroup outcomes.

## Slide 8 — Example 7.33 — The 80% Rule in Hiring

Example 7.33 calculates a disparate-impact ratio by dividing one group's selection rate by the comparison group's rate. A ratio below zero point eight is commonly used as a screening threshold for potential adverse impact. Learners can inspect the runnable example 24 module for this chapter to compute the rates and see why the threshold prompts review rather than automatically proving illegality.

## Slide 9 — Building a defensible audit

A defensible statistical audit records the target population, protected or otherwise relevant groups, outcome definitions, sample sizes, uncertainty, and chosen reference group. It reports both absolute rates and relative ratios, checks small groups carefully, and tests multiple plausible explanations. Results should be repeatable and linked to a decision about further analysis or mitigation.

## Slide 10 — Takeaways

Distribution checks reveal representation and data-quality gaps. Statistical tests formalize comparisons but must be paired with effect size and context. Correlation can uncover proxy pathways. Disparate-impact ratios summarize unequal selection rates, and the eighty-percent rule is a screening convention rather than a universal fairness certificate.

## Slide 11 — Next

The next clip makes these findings easier to inspect and communicate. It combines dashboards, heatmaps, bar charts, and scatter plots, then introduces toolkits that support repeatable fairness assessment.
