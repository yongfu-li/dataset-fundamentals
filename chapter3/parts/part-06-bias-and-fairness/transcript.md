# Chapter 3 — Bias and fairness — transcript

**Part id:** part-06-bias-and-fairness  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter3.tex` (§3.5), `modules/chapter3/example17/`, `modules/chapter3/example18/`, `modules/chapter3/example20/`

## Slide 1 — Chapter 3 — Bias and fairness

Bias and fairness connect ethical principles to model outcomes once systems affect hiring, credit, healthcare, or public safety. This part gives a chapter-level overview; Chapter 7 is the authoritative home for taxonomies, metrics, tools, and mitigation pipelines.

## Slide 2 — Learning objectives

By the end of this part, you should define bias in data work, distinguish selection from algorithmic bias, recognize two landmark case pointers, and list five mitigation habits at the ethics-chapter level.

## Slide 3 — What bias means here

Bias means systematic deviations in collection, labeling, analysis, or modeling that yield unfair or inaccurate outcomes for some groups. Data are not neutral mirrors—they reflect institutions and power relations that already discriminate. Example 3.17 states the general risk: systems trained on biased data can disproportionately harm underrepresented or historically mistreated groups.

## Slide 4 — Example 3.17 — Bias in AI system

Example 3.17 highlights domains where errors change life chances—hiring, criminal justice, and healthcare—not only click-through rates. Open the example 17 module for this chapter to map harm pathways. Fairness was already a design constraint in Section 3.2; here we connect it to data and models.

## Slide 5 — Selection bias

Selection bias arises when training data are not representative of the population that will be scored, so error concentrates on underrepresented groups. Collection design in Chapter 2 is often where skew begins. Example 3.18 shows a diagnostic model trained mainly on one demographic slice—performance degrades for groups scarce in training.

## Slide 6 — Example 3.18 — Selection bias in healthcare AI

Example 3.18 relates to the non-maleficence vignette in Example 3.2: the model never saw a representative sample of the patients it will score. Try the example 18 module to review representation gaps before deployment.

## Slide 7 — Algorithmic bias

Algorithmic bias arises from model design even when sampling looks balanced—features, objectives, and thresholds can still allocate error unevenly. Example 3.19 restates hiring rankers that reproduce gender or racial patterns via proxies even when protected attributes are omitted.

## Slide 8 — Case study pointer — COMPAS

Example 3.20 points to COMPAS recidivism tools: disparate error rates across racial groups under common thresholds, reflecting disparities already present in historical justice data. The ethics lesson matches Example 3.8—overall accuracy is not a fairness certificate. Chapter 7 develops detection and impact analysis for this case.

## Slide 9 — Mitigation checklist

Addressing bias requires better data, explicit fairness criteria, and continuous monitoring—not a single algorithmic patch. At this chapter's level: improve representation at collection and labeling time; audit subgroup error before release; choose and document a fairness criterion; apply mitigation matched to the failure mode; and include diverse review of requirements and features.

## Slide 10 — Takeaways

Fairness work is continuous governance after the principles in Section 3.2—not a one-time training fix. Selection and algorithmic bias are frequent entry points. Landmark cases illustrate mechanisms; Chapter 7 supplies measurement once you choose which fairness claim to defend.

## Slide 11 — Next

Pause for the quiz, then continue to real-world privacy laws—GDPR, HIPAA, CCPA, and selected other regimes.
