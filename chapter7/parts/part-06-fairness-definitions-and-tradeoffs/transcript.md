# Chapter 7 — Fairness definitions and trade-offs — transcript

**Clip id:** clip-06-fairness-definitions-and-tradeoffs  
**Estimated duration:** 8 minutes  
**Sources:** `author/chapter7.tex` (§7.5), `modules/chapter7/example36/`, `modules/chapter7/example37/`, `modules/chapter7/example38/`

## Slide 1 — Chapter 7 — Fairness definitions and trade-offs

Fairness is not one universal statistic. Different definitions protect different values and can recommend different interventions. A responsible system states which harms matter, which groups are compared, and why a selected criterion fits the decision context rather than presenting fairness as a single score.

## Slide 2 — Learning objectives

By the end of this clip, learners should distinguish procedural from outcome fairness, explain why accuracy and fairness can conflict, compare equalized odds with calibration, and connect metric choices to transparency, accountability, and inclusivity.

## Slide 3 — Example 7.47 — Consistent Criteria in Hiring Decisions

Example 7.47 illustrates procedural fairness. Every candidate should be evaluated with consistent, relevant criteria, and the process should be understandable and non-discriminatory. Procedural fairness concerns how a decision is made, including data use, rules, explanations, and opportunities to challenge an error, even before group outcome rates are compared.

## Slide 4 — Example 7.48 — Outcome Fairness in Predictive Policing

Example 7.48 illustrates outcome fairness. A predictive policing system should not disproportionately target minority communities or produce unequal consequences without justification. Outcome fairness compares results across groups, but equal rates alone do not guarantee a sound process. Procedural and outcome evidence should therefore be examined together.

## Slide 5 — Accuracy and fairness trade-offs

An accuracy-maximizing threshold may distribute false positives and false negatives unevenly. Adding a fairness constraint or changing thresholds can reduce that disparity while lowering aggregate accuracy. This is not evidence that fairness is a defect. It reveals that optimization has multiple objectives and that error costs, rights, and social consequences must be stated explicitly.

## Slide 6 — Example 7.50 — Demographic Parity Reducing Loan Default Prediction

Example 7.50 shows a loan system adjusted toward equal approval rates across racial groups. The adjustment may reduce default-prediction accuracy, exposing a trade-off between demographic parity and predictive precision. Learners can inspect the runnable example 38 module for this chapter to compare candidate thresholds and see how fairness and utility change together.

## Slide 7 — Equalized odds

Equalized odds seeks comparable false-positive and true-positive rates across groups, thereby balancing error behavior conditional on the actual outcome. It is especially relevant when both kinds of error carry serious consequences. Achieving it may require group-aware constraints or post-processing, and it can conflict with calibration when underlying outcome rates differ.

## Slide 8 — Calibration

Calibration asks whether a predicted probability has the same empirical meaning across groups. If a system assigns a seventy-percent probability, roughly seventy percent of comparable cases should experience the event in each group. Calibration supports interpretable risk scores, but it does not by itself guarantee equal selection rates or equal error rates.

## Slide 9 — Ethical principles around metrics

Transparency explains the data, criteria, limitations, and trade-offs. Accountability assigns responsibility for audits, complaints, and correction. Inclusivity brings affected groups into design and evaluation, particularly groups that have been underrepresented. These principles prevent metric selection from becoming a purely technical exercise detached from lived consequences.

## Slide 10 — Takeaways

Procedural fairness evaluates the decision process, while outcome fairness evaluates results. Aggregate accuracy can conflict with group fairness because errors and opportunities are distributed, not abstract. Equalized odds compares error rates, calibration compares probability meaning, and no criterion should be selected without transparent, accountable, and inclusive justification.

## Slide 11 — Next

The next clip turns fairness definitions into interventions. It separates changes to data, training, and outputs and explains reweighting, feature treatment, fairness constraints, adversarial debiasing, equalized-odds post-processing, and calibration.
