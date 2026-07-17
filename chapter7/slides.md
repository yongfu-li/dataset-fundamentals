---
marp: true
title: Chapter 7 — Dataset Bias and Fairness
paginate: true
---

# Chapter 7 — Introduction to bias and fairness

Earlier chapters established how datasets are collected, labeled, cleaned, and explored

---

## Learning objectives
- Identify policy and governance pressures that make fairness an operational requirement

---

## Dataset bias and fairness
- Dataset bias is a systematic error or imbalance that skews training or evaluation data
- Fairness is the operational goal of selecting, measuring
- Fairness is therefore a measurable design constraint

---

## Trust and accountability
- Trust declines when people cannot determine whether a recommendation
- Accountability requires named owners, documented data and metrics, mechanisms for review
- Deployment, and monitoring

---

## Example 7.4 — GDPR & ECOA Policies
- Example 7.4 — hands-on module
- Example 7.4 shows that fairness has a policy context
- European data protection rules place duties around consequential automated decisions
- A technically impressive model can still create legal, financial
- View files: `modules/chapter7/example4/`

---

## Example 7.6 — Gender Shades Project
- Example 7.6 — hands-on module
- Example 7.6 records subgroup evidence from commercial facial analysis systems
- With underrepresentation in training data identified as an important cause
- The practical lesson is to report disaggregated errors before deployment rather than
- View files: `modules/chapter7/example6/`

---

## Example 7.9 — OECD AI Principles
- Example 7.9 — hands-on module
- Example 7.9 places fairness within a broader governance framework
- The OECD principles emphasize transparent, fair, inclusive
- Corrective action
- View files: `modules/chapter7/example9/`

---

## Fairness across the lifecycle
- Bias can enter through collection
- It can then be amplified during model training and deployment
- Fairness work must therefore span the lifecycle

---

## Takeaways
- Dataset bias describes systematic skew
- Average performance can conceal serious subgroup failures
- Trust depends on transparency and consistent treatment
- Policy principles and legal duties make these concerns part of routine engineering

---

## Next
- Complete the quiz for this part
- The next clip moves from the general definition to a practical taxonomy

---

# Chapter 7 — Types of dataset bias

Bias is easier to detect and mitigate when its mechanism is named precisely

---

## Learning objectives
- By the end of this clip

---

## Sampling and measurement bias
- Sampling bias occurs when collected records do not represent the population or conditions
- Measurement bias occurs when instruments
- Sampling changes who or what is observed

---

## Example 7.12 — Facial Recognition System
- Example 7.12 — hands-on module
- Example 7.12 illustrates sampling bias
- A facial recognition dataset dominated by light-skinned faces gives a model too little
- Performance can therefore vary sharply across groups
- Adding more images from the already dominant group increases dataset size without
- View files: `modules/chapter7/example12/`

---

## Example 7.14 — Creditworthiness System
- Example 7.14 — hands-on module
- Example 7.14 illustrates measurement bias through self-reported income
- Respondents may overstate or withhold information because of privacy concerns or social
- The resulting values are not merely noisy if the error follows a systematic pattern across
- Audit work must examine how a variable was produced
- View files: `modules/chapter7/example14/`

---

## Example 7.17 — Entrenched Societal Biases in Historical Records
- Example 7.17 — hands-on module
- Example 7.17 shows historical bias
- Hiring, lending, judicial
- A model can reproduce those patterns even when collection and measurement are technically
- Historical data describes what happened
- View files: `modules/chapter7/example17/`

---

## Example 7.21 — Labeling Bias in Sentiment Annotation
- Example 7.21 — hands-on module
- Example 7.21 shows label bias
- Annotators may interpret tone differently because of cultural background
- If these disagreements systematically affect some dialects or groups
- View files: `modules/chapter7/example21/`

---

## Example 7.21 — listing

```
"""Example 7.21 — chi-squared test of gender distribution across performance categories."""

from __future__ import annotations


def main() -> None:
    """Run a 2x2 chi-squared test on gender vs performance category."""
    # Observed contingency table: rows = gender, cols = (high, low) performers.
    observed: dict[str, tuple[int, int]] = {"Male": (90, 210), "Female": (30, 170)}

    row_totals = {g: sum(cells) for g, cells in observed.items()}
    col_totals = (
        sum(cells[0] for cells in observed.values()),
        sum(cells[1] for cells in observed.values()),
    )
    grand = sum(row_totals.values())

    print(f"{'Gender':<8}{'High':>6}{'Low':>6}{'Total':>7}")
    for gender, (high, low) in observed.items():
        print(f"{gender:<8}{high:>6}{low:>6}{row_totals[gender]:>7}")
```

---

## Aggregation and confirmation bias
- Aggregation bias appears when diverse subgroups are treated as homogeneous and important
- Confirmation bias appears when data is selected or interpreted to support an existing
- One masks variation through pooling; the other narrows evidence through expectation

---

## Diagnosing overlapping mechanisms
- A single system may combine several mechanisms
- Encourage confirmation of an assumed crime pattern
- Analyst decisions rather than assigning one convenient label

---

## Takeaways
- Label bias concerns target construction
- Aggregation bias hides subgroup differences
- Precise diagnosis guides intervention and prevents the mistaken assumption that more data

---

## Next
- Complete the quiz for this part
- The next clip turns this taxonomy into measurable evidence

---

# Chapter 7 — Detecting bias statistically

A bias taxonomy identifies possible mechanisms, but an audit needs measurable evidence

---

## Learning objectives
- Calculate and cautiously interpret a disparate-impact ratio using the eighty-percent rule

---

## Example 7.27 — Multiple Manifestations of Dataset Bias
- Example 7.27 — hands-on module
- Example 7.27 establishes why one metric is insufficient
- Bias may appear in demographic representation
- An audit should therefore inspect both inputs and decisions, compare several subgroups
- View files: `modules/chapter7/example27/`

---

## Example 7.27 — listing

```
"""Example 7.27 — bar chart of favorable predictions by demographic group (ASCII)."""

from __future__ import annotations


def main() -> None:
    """Draw an ASCII bar chart of selection rates per subgroup."""
    selection_rate: dict[str, float] = {
        "Group A": 0.42,
        "Group B": 0.35,
        "Group C": 0.19,
        "Group D": 0.15,
    }

    print("Selection rate by demographic subgroup (each # = 2 percentage points):\n")
    for group, rate in selection_rate.items():
        bar = "#" * round(rate * 50)
        print(f"{group:<9}{rate:>6.1%}  {bar}")

    spread = max(selection_rate.values()) - min(selection_rate.values())
```

---

## Example 7.28 — Distribution Comparison Across Demographics
- Example 7.28 — hands-on module
- Example 7.28 compares features such as age, gender
- Differences in counts
- Explore the chapter example module
- View files: `modules/chapter7/example28/`

---

## Statistical tests and practical significance
- Formal tests can assess whether observed distribution differences are unlikely under a
- A chi-squared test is suitable for categorical counts
- Statistical significance does not establish harm or practical importance
- Effect size and context remain essential

---

## Example 7.30 — Chi-Squared Test for Gender Distribution
- Example 7.30 — hands-on module
- Example 7.30 asks whether gender distribution differs across outcome categories
- The test compares observed counts with counts expected under independence
- Explore the chapter example module
- View files: `modules/chapter7/example30/`

---

## Correlations and proxy features
- Correlation analysis can reveal features that encode sensitive attributes indirectly
- Names, neighborhoods, schools, or purchasing patterns may act as proxies even after race
- Subgroup outcomes

---

## Example 7.33 — The 80% Rule in Hiring
- Example 7.33 — hands-on module
- Example 7.33 calculates a disparate-impact ratio by dividing one group's selection rate by
- A ratio below zero point eight is commonly used as a screening threshold for potential
- Explore the chapter example module
- View files: `modules/chapter7/example33/`

---

## Building a defensible audit
- Chosen reference group
- It reports both absolute rates and relative ratios, checks small groups carefully
- Results should be repeatable and linked to a decision about further analysis or mitigation

---

## Takeaways
- Distribution checks reveal representation and data-quality gaps
- Statistical tests formalize comparisons but must be paired with effect size and context
- Correlation can uncover proxy pathways
- Disparate-impact ratios summarize unequal selection rates

---

## Next
- Complete the quiz for this part
- The next clip makes these findings easier to inspect and communicate

---

# Chapter 7 — Bias visualization and tools

Statistical summaries identify disparities

---

## Learning objectives
- By the end of this clip

---

## Example 7.34 — Combining Views for Bias Screening
- Example 7.34 — hands-on module
- Example 7.34 combines a correlation heatmap, approval bars by race
- No single view answers the fairness question
- Together they show where imbalance is concentrated and which formal tests should follow
- A dashboard should organize this sequence rather than display unrelated charts
- View files: `modules/chapter7/example34/`

---

## Heatmaps and dashboards
- Heatmaps compactly display correlations or a matrix of subgroup metrics
- They can expose proxy relationships and clusters of uneven error
- Dashboards add filters, reference rates, sample sizes

---

## Example 7.36 — Bar Chart of Predictions by Demographic Group
- Example 7.36 — hands-on module
- Example 7.36 uses bars to compare predictions or selection rates across demographic groups
- Rates are usually more informative than raw counts when group sizes differ
- Explore the chapter example module
- View files: `modules/chapter7/example36/`

---

## Example 7.37 — Income-Race Scatter Plot
- Example 7.37 — hands-on module
- Example 7.37 uses a scatter plot to inspect how income values and group membership align
- Clustering or separation can suggest historical or measurement patterns
- Faceting, transparency, and clear annotations often produce a more honest comparison
- View files: `modules/chapter7/example37/`

---

## AI Fairness 360
- IBM AI Fairness 360 provides datasets, fairness metrics
- It supports measures such as demographic parity and equal opportunity and offers methods
- Its breadth is useful when teams need to compare several definitions and interventions

---

## Fairlearn
- Fairlearn supports disaggregated model assessment and fairness-aware mitigation in the
- Its metric framing approach reports performance by sensitive group
- The toolkit does not choose the ethically appropriate metric

---

## Takeaways
- Dashboards connect these views with context
- Visual differences are screening evidence rather than causal conclusions
- AI Fairness 360 and Fairlearn make metrics and interventions repeatable

---

## Next
- Complete the quiz for this part
- The next clip examines why these disparities matter

---

# Chapter 7 — Impacts of dataset bias

Bias detection is not merely a technical quality exercise

---

## Learning objectives
- By the end of this clip

---

## Example 7.38 — Inequitable Treatment in Credit and Justice Decisions
- Example 7.38 — hands-on module
- Example 7.38 illustrates the ethical impact of unequal treatment
- While biased justice data may produce unfair risk assessments
- Such errors affect opportunities and liberty
- View files: `modules/chapter7/example38/`

---

## Example 7.38 — listing

```
"""Example 7.38 — enforcing demographic parity on loan approvals and its accuracy cost."""

from __future__ import annotations

Applicant = tuple[str, float, int]  # (group, score, actually_repays)


def approve(data: list[Applicant], thresholds: dict[str, float]) -> tuple[float, dict[str, float], float]:
    """Return (accuracy, approval rate per group, default rate among approved)."""
    correct = 0
    approved: dict[str, int] = {"A": 0, "B": 0}
    counts: dict[str, int] = {"A": 0, "B": 0}
    approved_total = 0
    approved_defaults = 0
    for group, score, repays in data:
        counts[group] += 1
        decision = 1 if score >= thresholds[group] else 0
        approved[group] += decision
        if decision == repays:
            correct += 1
```

---

## Example 7.40 — Amplification of Policing and Hiring Disparities
- Example 7.40 — hands-on module
- Example 7.40 shows social amplification
- Which then directs still more policing there
- Historical hiring patterns can similarly teach a ranking system to favor men
- Repeated automated decisions scale and reinforce the pattern
- View files: `modules/chapter7/example40/`

---

## Example 7.42 — Compliance Exposure Under GDPR and CCPA
- Example 7.42 — hands-on module
- Example 7.42 connects unfair outcomes with legal and regulatory exposure
- Recruitment and credit systems must comply with anti-discrimination duties
- Organizations need more than a claim of neutral intent
- View files: `modules/chapter7/example42/`

---

## Example 7.45 — Financial Penalties from Biased Hiring and Credit Systems
- Example 7.45 — hands-on module
- Example 7.45 presents the business consequences
- Lasting reputational damage
- Fairness investment can therefore reduce risk and protect market legitimacy
- Delayed mitigation is often more expensive because deployed decisions and public harms are
- View files: `modules/chapter7/example45/`

---

## The COMPAS bridge
- Recidivism risk assessment provides a bridge across all four dimensions
- Weaken institutional legitimacy
- Overall accuracy does not settle these issues because false positives and false negatives

---

## From impact to accountability
- Monitoring after deployment
- Impact assessments should ask who can be harmed, how severe and reversible the harm is
- These questions connect technical metrics to organizational responsibility

---

## Takeaways
- Ethical impacts concern justice and individual treatment
- Social impacts concern stereotypes, feedback loops, and unequal access
- Legal impacts concern rights, discrimination, privacy, and explainability
- Business impacts include cost, reputation, and legitimacy
- A single disparity can cross all four dimensions, especially in consequential decisions

---

## Next
- Complete the quiz for this part
- The next clip asks what fairness should mean in measurable terms

---

# Chapter 7 — Fairness definitions and trade-offs

Fairness is not one universal statistic

---

## Learning objectives
- Connect metric choices to transparency, accountability, and inclusivity

---

## Example 7.47 — Consistent Criteria in Hiring Decisions
- Example 7.47 — hands-on module
- Example 7.47 illustrates procedural fairness
- Every candidate should be evaluated with consistent, relevant criteria
- Opportunities to challenge an error, even before group outcome rates are compared
- View files: `modules/chapter7/example47/`

---

## Example 7.48 — Outcome Fairness in Predictive Policing
- Example 7.48 — hands-on module
- Example 7.48 illustrates outcome fairness
- A predictive policing system should not disproportionately target minority communities or
- Outcome fairness compares results across groups
- Procedural and outcome evidence should therefore be examined together
- View files: `modules/chapter7/example48/`

---

## Accuracy and fairness trade-offs
- An accuracy-maximizing threshold may distribute false positives and false negatives
- Adding a fairness constraint or changing thresholds can reduce that disparity while
- This is not evidence that fairness is a defect
- It reveals that optimization has multiple objectives and that error costs, rights

---

## Example 7.50 — Demographic Parity Reducing Loan Default Prediction
- Example 7.50 — hands-on module
- Example 7.50 shows a loan system adjusted toward equal approval rates across racial groups
- The adjustment may reduce default-prediction accuracy
- Explore the chapter example module
- View files: `modules/chapter7/example50/`

---

## Equalized odds
- Equalized odds seeks comparable false-positive and true-positive rates across groups
- It is especially relevant when both kinds of error carry serious consequences
- Achieving it may require group-aware constraints or post-processing

---

## Calibration
- Calibration asks whether a predicted probability has the same empirical meaning across
- If a system assigns a seventy-percent probability
- Calibration supports interpretable risk scores

---

## Ethical principles around metrics
- Transparency explains the data, criteria, limitations, and trade-offs
- Accountability assigns responsibility for audits, complaints, and correction
- Inclusivity brings affected groups into design and evaluation
- These principles prevent metric selection from becoming a purely technical exercise

---

## Takeaways
- Procedural fairness evaluates the decision process
- Not abstract
- Equalized odds compares error rates, calibration compares probability meaning

---

## Next
- Complete the quiz for this part
- The next clip turns fairness definitions into interventions

---

# Chapter 7 — Mitigating bias in datasets

Once a disparity and a fairness objective are defined

---

## Learning objectives
- Select an intervention using evidence rather than convenience

---

## Pre-processing through reweighting
- Reweighting changes how strongly training instances influence learning
- Underrepresented groups can receive greater weight so that the majority group does not
- This approach preserves records while changing their contribution

---

## Pre-processing through feature treatment
- Sensitive or strongly biased features may be removed
- Simple removal is not a guarantee of fairness because names, neighborhoods, schools
- Feature treatment should be followed by proxy analysis and subgroup evaluation

---

## In-processing with fairness constraints
- Fairness-constrained learning modifies the training objective by adding a constraint or
- The model then optimizes predictive performance and the selected fairness criterion
- Quality of outcome labels

---

## In-processing with adversarial debiasing
- Adversarial debiasing trains a predictor alongside an adversary that tries to infer a
- The predictor is penalized when the adversary succeeds
- The method can reduce proxy leakage

---

## Post-processing with equalized odds
- Equalized-odds post-processing adjusts decisions or thresholds from an already trained
- Operational review
- They can also change accuracy and may become unstable when group samples are small

---

## Post-processing with calibration
- Calibration adjusts predicted probabilities so that a score has a consistent empirical
- It is valuable when scores guide human decisions or resource allocation
- Calibration does not guarantee equal selection or error rates

---

## Choosing and validating an intervention
- Intervention begins with a diagnosed mechanism and a stated fairness target
- Monitor drift after deployment
- Mitigation is an iterative control process rather than a one-time repair

---

## Takeaways
- Pre-processing changes data, in-processing changes learning
- Output adjustment targets decision behavior or probability meaning
- Every method must be validated against the intended fairness objective

---

## Next
- Complete the quiz for this part
- The next clip moves from individual techniques to operating practice

---

# Chapter 7 — Best practices for fairness

Fairness is most reliable when it is built into routine data and model governance

---

## Learning objectives
- Distinguish a technical audit from a broader impact assessment

---

## Representative data collection
- Collection should reflect the population, environments
- Teams should sample across relevant demographic, geographic, socioeconomic, age
- Representation targets and missing groups should be monitored throughout collection

---

## Clear labeling guidelines
- Labeling guidance should define categories, decision rules, edge cases, abstention options
- Pilot rounds can reveal ambiguity before large-scale annotation begins
- Agreement measures identify unstable tasks

---

## Diverse annotators and human oversight
- Diverse annotators contribute different cultural and experiential perspectives
- Human-in-the-loop review supports adjudication, correction, and continuous refinement
- Diversity should not be treated as a substitute for training

---

## Validation on diverse datasets
- Evaluation data should cover the groups and operating conditions the system will encounter
- Overall accuracy must be disaggregated into suitable performance and fairness metrics
- Equipment, geography, or population composition changes

---

## Regular fairness audits
- Audits should occur before release, after retraining or major data changes
- Assign corrective actions
- A useful audit has an owner, a schedule, reproducible evidence, decision thresholds

---

## Impact assessments
- Impact assessments extend beyond metric checks
- Accountability
- They also examine how an ostensibly accurate tool may change institutional behavior

---

## A continuous fairness loop
- The practices form a loop
- Documentation connects each stage so later reviewers can understand decisions and

---

## Takeaways
- Fairness begins with representative collection and explicit labeling rules
- Diverse participation and human oversight improve judgment but require supporting controls
- Validation must be disaggregated and realistic, audits must recur as systems change

---

## Next
- Complete the quiz for this part
- The next clip examines tooling that can make these practices repeatable

---

# Chapter 7 — Fairness toolkits and case study

Fairness toolkits help teams compute disaggregated metrics, compare mitigation strategies

---

## Learning objectives
- By the end of this clip

---

## IBM AI Fairness 360
- Mitigation algorithms
- Its methods span pre-processing, in-processing
- This breadth supports experimentation across several fairness definitions

---

## Microsoft Fairlearn
- Fairlearn emphasizes disaggregated assessment and fairness-aware mitigation within common
- Grouped metric reporting exposes performance gaps that an average conceals
- It is particularly convenient when models already use the scikit-learn ecosystem

---

## Using tools responsibly
- A defensible workflow first states the decision context, affected groups, harms, labels
- The toolkit then computes evidence and tests candidate interventions
- Teams must report uncertainty, utility changes, and unresolved harms
- Default settings and benchmark datasets are starting points

---

## Case study — Gender bias in text data
- Large text corpora can associate occupations and social roles with gender stereotypes
- Models learn these associations and may reproduce them in generation

---

## Debiasing representations
- One mitigation strategy identifies a gender direction in a word-embedding space and
- Data balancing and fairness-aware training provide alternatives
- Any intervention must distinguish harmful stereotypes from legitimate linguistic

---

## Evaluating the outcome
- Realistic prompts
- Human review by affected communities can identify harms that a numeric score misses
- Because language and usage evolve

---

## Takeaways
- AI Fairness 360 provides broad metrics and interventions across pipeline stages
- Toolkits make analysis repeatable but cannot choose the ethical objective
- Text debiasing requires both representation-level tests and downstream

---

## Next
- Complete the quiz for this part
- Deployment governance

---

# Chapter 7 — Emerging fairness topics

Fairness challenges evolve as models become generative, training becomes decentralized

---

## Learning objectives
- Connect future methods with the lifecycle practices developed throughout the chapter

---

## Bias in generative AI
- Uneven representation
- A text-to-image model may repeatedly depict leaders or doctors from one demographic group
- Open-ended outputs make fairness evaluation broader than checking one fixed classification

---

## Evaluating and mitigating generative bias
- Evaluation should use diverse prompts, repeated samples, intersectional groups
- Deployment safeguards
- Because interventions can shift or conceal harms

---

## Fairness in federated learning
- Federated learning trains across decentralized devices or organizations without
- Privacy benefits do not guarantee fairness
- Participants may contribute very different amounts and distributions of data

---

## Fairness-aware federation
- Reporting performance for each participating population
- Teams must also examine which clients are repeatedly excluded and whether privacy
- The objective should balance global utility with acceptable performance for less

---

## Regulation and deployment
- Privacy, anti-discrimination, consumer protection
- Deployment controls rather than assembled after a complaint

---

## Future directions
- Bias-aware datasets, causal methods, fairness-aware optimization, explainability
- Their value depends on clear problem definitions and real-world validation
- Ongoing monitoring

---

## Takeaways
- Generative systems expand fairness evaluation to open-ended content and intersectional
- Federated systems introduce uneven participation and local performance concerns
- Regulation makes documentation, testing, oversight
- Across all settings, fairness remains a lifecycle practice rather than a one-time metric

---

## Next
- Complete the quiz for this part
- Emerging challenges
