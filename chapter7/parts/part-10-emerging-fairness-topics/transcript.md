# Chapter 7 — Emerging fairness topics — transcript

**Clip id:** clip-10-emerging-fairness-topics  
**Estimated duration:** 6 minutes  
**Sources:** `author/chapter7.tex` (§7.9)

## Slide 1 — Chapter 7 — Emerging fairness topics

Fairness challenges evolve as models become generative, training becomes decentralized, and regulation becomes more specific. The technical settings change, but the central questions remain: whose data is represented, whose outcomes are measured, which harms matter, who can inspect the system, and who is responsible for correction.

## Slide 2 — Learning objectives

By the end of this clip, learners should identify distinctive fairness risks in generative and federated learning, outline suitable monitoring and mitigation approaches, explain how regulation shapes deployment obligations, and connect future methods with the lifecycle practices developed throughout the chapter.

## Slide 3 — Bias in generative AI

Generative systems learn associations from large web-scale corpora that contain stereotypes, exclusions, and uneven representation. A text-to-image model may repeatedly depict leaders or doctors from one demographic group, while a language model may generate demeaning or exclusionary descriptions. Open-ended outputs make fairness evaluation broader than checking one fixed classification label.

## Slide 4 — Evaluating and mitigating generative bias

Evaluation should use diverse prompts, repeated samples, intersectional groups, and both quantitative and human review. Mitigation can include better data curation, balanced augmentation, filtering, representation debiasing, training constraints, and deployment safeguards. Because interventions can shift or conceal harms, generated outputs must be monitored over time and across languages and cultures.

## Slide 5 — Fairness in federated learning

Federated learning trains across decentralized devices or organizations without centralizing raw records. Privacy benefits do not guarantee fairness. Participants may contribute very different amounts and distributions of data, connectivity can determine who influences training, and a global model may work well for common urban users while failing for smaller rural or clinical populations.

## Slide 6 — Fairness-aware federation

Possible responses include group-aware sampling, robust aggregation, personalized models, explicit fairness objectives, and reporting performance for each participating population. Teams must also examine which clients are repeatedly excluded and whether privacy protections limit subgroup auditing. The objective should balance global utility with acceptable performance for less represented participants.

## Slide 7 — Regulation and deployment

Privacy, anti-discrimination, consumer protection, and artificial-intelligence-specific rules increasingly require documentation, transparency, bias testing, human oversight, and routes for appeal in high-risk settings. Compliance should be built into system design through data records, impact assessments, audit trails, assigned responsibility, and deployment controls rather than assembled after a complaint.

## Slide 8 — Future directions

Bias-aware datasets, causal methods, fairness-aware optimization, explainability, and participatory evaluation can strengthen future systems. Their value depends on clear problem definitions and real-world validation. More complex algorithms do not remove the need for representative data, stakeholder input, understandable evidence, and ongoing monitoring.

## Slide 9 — Takeaways

Generative systems expand fairness evaluation to open-ended content and intersectional representation. Federated systems introduce uneven participation and local performance concerns. Regulation makes documentation, testing, oversight, and accountability deployment requirements. Across all settings, fairness remains a lifecycle practice rather than a one-time metric.

## Slide 10 — Next

This chapter has moved from bias definitions through diagnosis, impacts, fairness criteria, mitigation, operating practice, and emerging challenges. The next stage of the book carries this fairness lens into later modeling and governance decisions, where dataset choices continue to shape performance, risk, and accountability.
