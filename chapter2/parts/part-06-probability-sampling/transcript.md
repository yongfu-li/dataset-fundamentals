# Chapter 2 — Probability sampling — transcript

**Part id:** part-06-probability-sampling  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter2.tex` (§2.5), `modules/chapter2/example10/`, `modules/chapter2/example11/`

## Slide 1 — Chapter 2 — Probability sampling

Collection instruments gather answers; sampling decides whose answers count for inference. This part introduces simple random, stratified, and cluster designs and when each fits a usable frame.

## Slide 2 — Learning objectives

By the end of this part, you should explain why sampling underpins generalization, describe simple random, stratified, and cluster probability designs, and match each design to a typical population and logistics profile.

## Slide 3 — Why sampling matters

Sampling lets researchers learn about a population from a manageable subset of cases. A well-chosen sample supports generalization; a poorly chosen one quietly embeds bias into every downstream model and report. This part covers three probability designs that appear repeatedly in practice: simple random, stratified, and cluster sampling. Each assumes a usable sampling frame unless noted otherwise.

## Slide 4 — Simple random sampling

In simple random sampling, each population member has an equal chance of selection. The method reduces selection bias when a complete frame exists and when the sample is large enough to support the desired margin of error. Operationally, teams build a complete list, draw units with a random process, and invite participation. Its practical limits are incomplete frames and non-response: people who ignore invitations may differ systematically from those who answer.

## Slide 5 — Example 2.10 — Simple random draw from an employee roster

Example 2.10 shows a clean frame case. A firm with two thousand employees on a complete human-resources roster wants feedback on a new benefits portal. Analysts draw two hundred employee identifiers uniformly at random and invite those people by email. If response is high, portal satisfaction can be generalized to the workforce, but non-respondents may still differ from respondents. Open the example 10 module to review the draw mechanics.

## Slide 6 — Stratified sampling

Stratified sampling first partitions the population into meaningful subgroups—strata such as age bands, regions, or device classes—then draws a random sample within each stratum. The design improves precision when subgroups differ on the outcome of interest and guarantees representation of smaller but important segments. Costs include planning complexity and the need for prior knowledge to define strata correctly.

## Slide 7 — Example 2.11 — Stratified sample of cart abandoners

Example 2.11 mirrors the retail cart-abandonment study from the chapter opener. Analysts divide recent abandoners into mobile and desktop strata, then draw random samples of equal size from each. The design ensures that device-specific checkout friction is visible even if one device class is rarer in the population. Try the example 11 module to see how stratification protects rare segments.

## Slide 8 — Cluster sampling

Cluster sampling selects groups of units—schools, clinics, city blocks—and then observes all or some members inside chosen clusters. It is attractive when individual frames are unavailable or when travel costs make visiting scattered individuals impractical. Clusters can be efficient, yet they often reduce precision when units inside a cluster are similar. Prefer clusters that still reflect population diversity when logistics dominate.

## Slide 9 — Takeaways

Use random sampling when the population is relatively homogeneous and a complete list exists. Use stratified sampling when key subgroups must appear in sufficient numbers. Use cluster sampling when logistics dominate and entire sites can be visited as units. Non-probability options for weak frames appear in the next part.

## Slide 10 — Next

Complete the quiz, then continue to the next part on additional sampling techniques—systematic draws and non-probability designs when access, not inference, is the binding constraint.
