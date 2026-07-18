# Chapter 10 — Correlation, bootstrapping, and regression — transcript

**Clip id:** part-04-correlation-bootstrapping-regression
**Estimated duration:** 7 minutes
**Sources:** `author/chapter10.tex` (§10.3.2–10.3.4), `modules/chapter10/example8/`, `modules/chapter10/example9/`, `modules/chapter10/example10/`

## Slide 1 — Chapter 10 — Correlation, bootstrapping, and regression

Univariate sampling ignores relationships between variables. This part covers joint distributions that preserve dependencies, bootstrapping from small real samples, and regression-based projection for structured synthetic rows.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to explain why multivariate modeling matters for realistic tabular synthesis; describe bootstrapping with replacement from small samples; and outline regression-based generation of dependent variables from predictors.

## Slide 3 — Correlations and dependencies

Real datasets rarely treat columns as independent. Income and age co-vary; asset returns co-move; vitals correlate across visits. Useful synthetic tabular data must replicate these joint relationships, not just marginal histograms. Multivariate distributions and copulas model dependence structures, including nonlinear ties that simple pairwise correlation misses.

## Slide 4 — Example 10.8 — Income-Age Joint Distribution

Example 10.8 preserves correlations between income and age. Analysts model the joint distribution so synthetic rows keep segment-level relationships—such as higher income in certain age bands—rather than sampling each column independently. The example 8 module for this chapter demonstrates correlated draws in Python.

## Slide 5 — Copulas for complex dependence

Copulas separate marginal behavior from dependence structure, which helps when variables have non-linear or time-varying relationships—as in financial markets. After fitting dependence, new synthetic rows are sampled from the joint model or copula, yielding data suitable for predictive modeling and stress testing.

## Slide 6 — Bootstrapping from small samples

Bootstrapping resamples an original dataset with replacement to create larger synthetic sets that reflect observed variability. Some real rows repeat; others are omitted. Repeating the process yields multiple bootstrap datasets for training or uncertainty estimation when collection produced only a small real sample.

## Slide 7 — Example 10.9 — Bootstrapping Purchase Histories

Example 10.9 bootstraps a small customer purchase-history sample into a larger training set that preserves observed purchase patterns. This supports model training when raw logs are limited. The example 9 module for this chapter runs resampling with replacement on a tiny purchase table.

## Slide 8 — Regression-based synthetic data

Regression models fit relationships between predictors and an outcome, then generate synthetic outcomes by sampling predictor values and applying the fitted equation—including error terms for simple linear or richer multi-predictor forms. Economics, healthcare, and social science often use this when domain theory guides variable relationships.

## Slide 9 — Example 10.10 — Regression-Based GDP Projection

Example 10.10 generates synthetic GDP growth from macro predictors such as interest rates, inflation, and government spending. The regression preserves structured relationships among indicators rather than independent column draws. The example 10 module for this chapter implements projection from fitted coefficients.

## Slide 10 — Takeaways

Realistic tabular synthesis requires joint structure, not independent marginals. Bootstrapping expands small real samples while preserving variability; regression projects outcomes from known predictor relationships. Statistical methods set the foundation before generative adversarial networks learn complex structure from data.

## Slide 11 — Next

The next part explains generator and discriminator roles, adversarial training, loss functions, and convergence challenges that affect synthetic realism in generative adversarial networks.
