# Chapter 3 — Core ethical principles — transcript

**Part id:** part-02-core-ethical-principles  
**Estimated duration:** 8 minutes  
**Sources:** `author/chapter3.tex` (§3.2.1), `modules/chapter3/example2/`, `modules/chapter3/example3/`, `modules/chapter3/example6/`

## Slide 1 — Chapter 3 — Core ethical principles

This part turns ethical slogans into operational tests. Five principles recur across AI and data ethics guidelines: non-maleficence, fairness, transparency, accountability, and respect for autonomy. Each pairs with a short scenario you can use during design review.

## Slide 2 — Learning objectives

By the end of this part, you should name the five core principles, state what each demands in practice, and recognize them as design constraints—not post-deployment patches.

## Slide 3 — Five principles overview

Non-maleficence asks teams to prevent privacy breaches, discrimination, and exploitative uses. Fairness requires avoiding systematic disadvantage and monitoring disparities. Transparency means disclosing collection purposes and, where feasible, how consequential decisions are made. Accountability assigns responsibility, monitoring, and remediation. Respect for autonomy centers informed consent and ongoing control.

## Slide 4 — Do no harm

Do no harm requires anticipating harms from collection, processing, and analysis—including discriminatory model errors. Example 3.2 shows a healthcare model trained on data that underrepresents a demographic group, yielding less accurate predictions and misdiagnosis risk for that group. Upholding non-maleficence means auditing subgroup performance and adding safeguards before deployment.

## Slide 5 — Example 3.2 — Healthcare AI system

Example 3.2 is the clinical pattern: skewed training data becomes skewed care. Open the example 2 module for this chapter to walk through the harm pathway. The ethical demand is not surprise after launch but subgroup audits during development.

## Slide 6 — Fairness

Fairness requires that practices and models not systematically disadvantage particular groups. Example 3.3 shows a hiring ranker trained on past hires that favored one demographic in technical roles—the model can reproduce that pattern for new applicants. Treat disparity risk as a design constraint, not a post-deployment discovery.

## Slide 7 — Example 3.3 — Hiring algorithm

Example 3.3 restates the hiring pattern: historical imbalance encodes into automated ranking. Chapter 7 develops metrics and mitigation; here the ethics lesson is to flag the risk before candidates are scored. Try the example 3 module to see how proxy features can reintroduce protected attributes.

## Slide 8 — Transparency and accountability

Transparency builds trust by clarifying what is collected, why, and how automated decisions are produced. Accountability assigns someone who can explain outcomes, respond to incidents, and remediate harm. Example 3.4 applies transparency to credit scoring: declined applicants deserve understandable factors and a path to challenge errors.

## Slide 9 — Respect for autonomy

Respect for autonomy centers informed consent and ongoing control. Example 3.6 shows a health-tracking app that obtains explicit consent, states purposes plainly, and lets users revoke consent or delete history. Autonomy fails when consent is buried in unrelated terms or withdrawal is practically impossible.

## Slide 10 — Example 3.6 — Health-tracking app

Example 3.6 pairs consent user experience with sensitive streams such as activity and heart rate. Open the example 6 module for this chapter to compare strong and weak consent patterns. Section 3.3 later turns autonomy into privacy-management practice.

## Slide 11 — Takeaways

Principles are operational tests for design choices. Non-maleficence and fairness catch harm before deployment. Transparency and accountability make systems answerable. Autonomy requires meaningful consent and control—not checkbox compliance alone.

## Slide 12 — Next

Pause for the quiz, then continue to utility trade-offs, ethical dilemmas when principles conflict, and consequences of neglecting ethics.
