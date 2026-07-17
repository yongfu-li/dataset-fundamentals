# Chapter 10 — Statistical distributions and simulation — transcript

**Clip id:** part-03-statistical-distributions-and-simulation
**Estimated duration:** 7 minutes
**Sources:** `author/chapter10.tex` (§10.3.1), `modules/chapter10/example6/`, `modules/chapter10/example7/`

## Slide 1 — Chapter 10 — Statistical distributions and simulation

Before deep generative models, teams synthesized data with explicit statistical assumptions. This part introduces distribution modeling, normal-distribution sampling sketches, and Monte Carlo simulation for uncertain outcomes such as asset returns.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to describe distribution-fitting workflows for parametric sampling; explain when Monte Carlo simulation is appropriate; and connect both methods to privacy-preserving and benchmark-oriented synthetic releases.

## Slide 3 — Statistical methods overview

Statistical synthesis uses mathematical models to simulate data that shares properties with real records while limiting exposure of individual rows. Common tools include distribution fitting, Monte Carlo draws, bootstrapping, and regression—each preserving structure under stated assumptions. The main challenge is matching correlations and trends, not just marginal distributions.

## Slide 4 — Data distribution modeling

Distribution modeling fits a known law—normal, exponential, Poisson, or others—to observed data, then samples new points from that law. Analysts first characterize the real dataset, estimate parameters such as mean and standard deviation, and draw synthetic values from the same family. This works when the assumed distribution matches the domain.

## Slide 5 — Example 10.6 — Normal-Distribution Sampling Sketch

Example 10.6 sketches sampling from a fitted normal distribution. If real values follow a mean of fifty and standard deviation of ten, synthetic points are drawn from a normal with the same parameters. The example 6 module for this chapter runs this sketch in Python and compares sample moments to the targets.

## Slide 6 — Monte Carlo simulation

Monte Carlo methods repeat random sampling and simulation when the underlying process is complex or the distribution is unknown. Many draws are averaged or aggregated to estimate outcomes under uncertainty. Finance, engineering, and risk analysis use this approach to stress portfolios, systems, and scenarios that closed-form models cannot capture cleanly.

## Slide 7 — Example 10.7 — Monte Carlo Asset-Return Simulation

Example 10.7 applies Monte Carlo simulation to financial returns. Synthetic return paths incorporate risk factors and market conditions, letting analysts explore outcome distributions without relying on a single historical trace. The example 7 module for this chapter demonstrates randomized draw-based simulation for asset returns.

## Slide 8 — Controlled simulation benchmarks

Some releases—such as device-model sweeps—are synthetic by construction: every point comes from a specified simulator and parameter grid. Quality assurance then documents settings and reproducibility rather than detecting missing field packets after collection. That differs from privacy-motivated tabular synthesis but still produces shareable reference distributions.

## Slide 9 — Takeaways

Parametric sampling copies moments from fitted laws; Monte Carlo handles complex uncertainty through repeated simulation. Both require explicit assumptions and validation against real benchmarks. Univariate methods ignore variable relationships, which the next part addresses through correlation modeling, bootstrapping, and regression.

## Slide 10 — Next

The next part covers joint distributions that preserve dependencies between variables, bootstrapping from small real samples, and regression-based projection for structured synthetic rows.
