# Chapter 7 — Mitigating bias in datasets — transcript

**Clip id:** clip-07-mitigating-bias  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter7.tex` (§7.6)

## Slide 1 — Chapter 7 — Mitigating bias in datasets

Once a disparity and a fairness objective are defined, intervention can occur before training, during learning, or after a model produces outputs. These stages correspond to pre-processing, in-processing, and post-processing. The best choice depends on the diagnosed bias, access to the model, governance constraints, and the harms the intervention is intended to reduce.

## Slide 2 — Learning objectives

By the end of this clip, learners should classify mitigation methods by pipeline stage, explain reweighting and feature treatment, describe fairness-constrained learning and adversarial debiasing, compare equalized-odds post-processing with calibration, and select an intervention using evidence rather than convenience.

## Slide 3 — Pre-processing through reweighting

Reweighting changes how strongly training instances influence learning. Underrepresented groups can receive greater weight so that the majority group does not dominate the objective. This approach preserves records while changing their contribution, but extreme weights can increase variance and cannot repair labels or measurements that are fundamentally invalid.

## Slide 4 — Pre-processing through feature treatment

Sensitive or strongly biased features may be removed, transformed, or replaced with less harmful representations. Simple removal is not a guarantee of fairness because names, neighborhoods, schools, and other variables can act as proxies. Feature treatment should be followed by proxy analysis and subgroup evaluation, while sensitive attributes may still be retained securely for auditing.

## Slide 5 — In-processing with fairness constraints

Fairness-constrained learning modifies the training objective by adding a constraint or penalty for disparities such as unequal selection or error rates. The model then optimizes predictive performance and the selected fairness criterion together. This makes the trade-off explicit, but the result depends heavily on the criterion, tolerance, group definitions, and quality of outcome labels.

## Slide 6 — In-processing with adversarial debiasing

Adversarial debiasing trains a predictor alongside an adversary that tries to infer a sensitive attribute from the predictor's representation or output. The predictor is penalized when the adversary succeeds, encouraging less sensitive information to remain. The method can reduce proxy leakage, but it adds training complexity and still requires downstream fairness testing.

## Slide 7 — Post-processing with equalized odds

Equalized-odds post-processing adjusts decisions or thresholds from an already trained model so that error rates become more comparable across groups. It is useful when retraining is impossible, but group-specific adjustments require careful legal, ethical, and operational review. They can also change accuracy and may become unstable when group samples are small.

## Slide 8 — Post-processing with calibration

Calibration adjusts predicted probabilities so that a score has a consistent empirical meaning for each group. It is valuable when scores guide human decisions or resource allocation. Calibration does not guarantee equal selection or error rates, and it can conflict with equalized odds when base rates differ, so the deployment purpose must determine priority.

## Slide 9 — Choosing and validating an intervention

Intervention begins with a diagnosed mechanism and a stated fairness target. Teams should compare a baseline with candidate methods, report group performance and uncertainty, inspect utility costs, test on representative holdout data, document residual harms, and monitor drift after deployment. Mitigation is an iterative control process rather than a one-time repair.

## Slide 10 — Takeaways

Pre-processing changes data, in-processing changes learning, and post-processing changes outputs. Reweighting addresses influence, feature treatment reduces direct or proxy pathways, fairness constraints and adversaries reshape training, and output adjustment targets decision behavior or probability meaning. Every method must be validated against the intended fairness objective.

## Slide 11 — Next

The next clip moves from individual techniques to operating practice. It explains how representative collection, labeling governance, human oversight, validation, audits, and impact assessments make fairness routine rather than reactive.
