# Chapter 7 — Introduction to bias and fairness — transcript

**Clip id:** clip-01-introduction-to-bias-and-fairness  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter7.tex` (§7.1), `modules/chapter7/example1/`, `modules/chapter7/example2/`, `modules/chapter7/example3/`

## Slide 1 — Chapter 7 — Introduction to bias and fairness

Earlier chapters established how datasets are collected, labeled, cleaned, and explored. This chapter adds a necessary question: do the resulting data and systems distribute errors and opportunities justly? The answer affects technical quality, public trust, and whether an organization can defend its decisions.

## Slide 2 — Learning objectives

By the end of this clip, learners should be able to define dataset bias and fairness, explain why subgroup performance matters even when average accuracy appears strong, connect fairness to trust and accountability, and identify policy and governance pressures that make fairness an operational requirement.

## Slide 3 — Dataset bias and fairness

Dataset bias is a systematic error or imbalance that skews training or evaluation data toward particular groups or outcomes. Fairness is the operational goal of selecting, measuring, and documenting criteria so that such skews do not create unjust allocations of error or opportunity. Fairness is therefore a measurable design constraint, not a vague claim that a system has good intentions.

## Slide 4 — Trust and accountability

Trust declines when people cannot determine whether a recommendation, hiring decision, diagnosis, or risk score treats comparable cases consistently. Accountability requires named owners, documented data and metrics, mechanisms for review, and a practical route for correction. Fairness audits and impact assessments make these responsibilities visible throughout design, deployment, and monitoring.

## Slide 5 — Example 7.4 — GDPR & ECOA Policies

Example 7.4 shows that fairness has a policy context. European data protection rules place duties around consequential automated decisions, while United States fair-lending rules prohibit discrimination against protected groups in credit decisions. A technically impressive model can still create legal, financial, and reputational exposure when its data or outcomes produce unjustified disparities.

## Slide 6 — Example 7.6 — Gender Shades Project

Example 7.6 records subgroup evidence from commercial facial analysis systems. Error rates were substantially higher for darker-skinned and female faces than for lighter-skinned and male faces, with underrepresentation in training data identified as an important cause. The practical lesson is to report disaggregated errors before deployment rather than relying on one overall accuracy value.

## Slide 7 — Example 7.9 — OECD AI Principles

Example 7.9 places fairness within a broader governance framework. The OECD principles emphasize transparent, fair, inclusive, and accountable artificial intelligence while seeking to minimize harm. Such principles become useful only when organizations translate them into concrete practices, including representative data, subgroup evaluation, documentation, human oversight, and corrective action.

## Slide 8 — Fairness across the lifecycle

Bias can enter through collection, measurement, historical records, annotation, aggregation, or human assumptions. It can then be amplified during model training and deployment. Fairness work must therefore span the lifecycle: define affected groups and harms, inspect the data, choose suitable metrics, test interventions, document trade-offs, and monitor outcomes after release.

## Slide 9 — Takeaways

Dataset bias describes systematic skew, while fairness describes the criteria and controls used to prevent unjust consequences. Average performance can conceal serious subgroup failures. Trust depends on transparency and consistent treatment, and accountability depends on review, ownership, and correction. Policy principles and legal duties make these concerns part of routine engineering practice.

## Slide 10 — Next

The next clip moves from the general definition to a practical taxonomy. It distinguishes sampling, measurement, historical, label, aggregation, and confirmation bias so that an observed problem can be traced to a specific mechanism.
