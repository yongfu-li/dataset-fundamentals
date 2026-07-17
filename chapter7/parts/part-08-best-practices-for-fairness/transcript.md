# Chapter 7 — Best practices for fairness — transcript

**Clip id:** clip-08-best-practices-for-fairness  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter7.tex` (§7.7)

## Slide 1 — Chapter 7 — Best practices for fairness

Fairness is most reliable when it is built into routine data and model governance. A late audit may identify harm after decisions have already affected people. This clip organizes preventive practice around representative collection, labeling quality, human oversight, diverse validation, recurring audits, and impact assessment.

## Slide 2 — Learning objectives

By the end of this clip, learners should be able to plan fairer data collection, write and govern labeling guidelines, explain the value and limits of diverse annotators and human-in-the-loop review, design subgroup validation, and distinguish a technical audit from a broader impact assessment.

## Slide 3 — Representative data collection

Collection should reflect the population, environments, and conditions in which a system will operate. Teams should sample across relevant demographic, geographic, socioeconomic, age, and ability dimensions and use multiple sources when one source offers a narrow view. Representation targets and missing groups should be monitored throughout collection, not only after the dataset is frozen.

## Slide 4 — Clear labeling guidelines

Labeling guidance should define categories, decision rules, edge cases, abstention options, and escalation procedures. Pilot rounds can reveal ambiguity before large-scale annotation begins. Agreement measures identify unstable tasks, but high agreement alone does not prove fairness if all annotators share the same blind spot or the target concept is itself problematic.

## Slide 5 — Diverse annotators and human oversight

Diverse annotators contribute different cultural and experiential perspectives, helping teams recognize assumptions that a homogeneous group may miss. Human-in-the-loop review supports adjudication, correction, and continuous refinement. Diversity should not be treated as a substitute for training, fair working conditions, clear authority, or systematic quality controls.

## Slide 6 — Validation on diverse datasets

Evaluation data should cover the groups and operating conditions the system will encounter. Overall accuracy must be disaggregated into suitable performance and fairness metrics, with sample sizes and uncertainty reported. External or shifted datasets can reveal whether a model that appears fair in development fails when language, equipment, geography, or population composition changes.

## Slide 7 — Regular fairness audits

Audits should occur before release, after retraining or major data changes, and periodically during deployment. They compare subgroup outcomes and errors, inspect drift, review complaints, verify documentation, and assign corrective actions. A useful audit has an owner, a schedule, reproducible evidence, decision thresholds, and a process for escalation.

## Slide 8 — Impact assessments

Impact assessments extend beyond metric checks. They identify affected stakeholders, plausible harms and benefits, severity, reversibility, alternatives, human oversight, appeal routes, and accountability. They also examine how an ostensibly accurate tool may change institutional behavior, such as increasing surveillance or restricting access to essential services.

## Slide 9 — A continuous fairness loop

The practices form a loop: define intended use and affected groups, collect representative data, label with governed procedures, validate disaggregated performance, assess wider impacts, deploy with oversight, monitor outcomes, and correct emerging problems. Documentation connects each stage so later reviewers can understand decisions and limitations.

## Slide 10 — Takeaways

Fairness begins with representative collection and explicit labeling rules. Diverse participation and human oversight improve judgment but require supporting controls. Validation must be disaggregated and realistic, audits must recur as systems change, and impact assessments must connect technical evidence with real-world consequences and accountability.

## Slide 11 — Next

The next clip examines tooling that can make these practices repeatable. It compares AI Fairness 360 and Fairlearn and then follows a case study on reducing gender stereotypes in text representations.
