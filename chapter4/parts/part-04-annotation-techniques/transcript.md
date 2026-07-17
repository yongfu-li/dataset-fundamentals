# Chapter 4 — Annotation techniques — transcript

**Part id:** part-04-annotation-techniques  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter4.tex` (§4.3), `modules/chapter4/example26/`, `modules/chapter4/example27/`, `modules/chapter4/example28/`

## Slide 1 — Chapter 4 — Annotation techniques

Knowing which labels to apply is not enough—you still need a workflow that matches quality and budget. This part contrasts manual, semi-automated, fully automated, and crowdsourced annotation, including active learning queues and majority-vote redundancy.

## Slide 2 — Learning objectives

By the end of this part, you should compare manual, semi-automated, fully automated, and crowdsourced annotation on throughput and risk, summarize the trade-offs in Table 4.2, and describe active learning and majority-vote patterns as practical workflow choices.

## Slide 3 — Technique trade-offs (Table 4.2)

Annotation is labor-intensive, so teams must match technique to quality and budget constraints. Table 4.2 summarizes four approaches. Manual annotation handles ambiguity and domain nuance but offers low throughput and annotator variance. Semi-automated labeling is faster when humans review model proposals but risks over-trusting bad suggestions. Fully automated pipelines scale at low marginal cost yet inherit skew and silent errors. Crowdsourcing enables rapid scale for simple schemas but introduces worker variance and labor ethics concerns. No single technique dominates; production programs often combine several under shared quality-control gates.

## Slide 4 — Manual annotation

Manual annotation assigns labels through trained humans and remains the reference standard when context, ambiguity, or domain expertise matter more than throughput. Humans handle occlusion, sarcasm, and guideline exceptions that automated pre-labelers often miss, but manual throughput is limited and inter-annotator variance must be managed with guidelines and agreement checks.

## Slide 5 — Example 4.26 — Manual sentiment ambiguity

Example 4.26 shows a sentiment edge case. A sentence such as “That was quite a disaster, but at least I got the coffee!” may still be labeled positive from context even though surface words look negative. A brittle keyword rule may miss that tone. Open the example 26 module for this chapter to walk through the ambiguity decision.

## Slide 6 — Semi-automated and active learning

Semi-automated annotation combines human review with model-generated proposals. A pre-trained detector may suggest boxes or entity spans; annotators accept, correct, or reject them. Active learning prioritizes labeling for the most uncertain items so human effort concentrates where it changes the model most.

## Slide 7 — Example 4.27 — Active learning queue for text

Example 4.27 shows a typical queueing pattern. In text classification, ambiguous sentences are queued for human review while high-confidence cases are auto-labeled or skipped, so annotators spend time where the model is most uncertain. Active learning reduces label volume but still requires monitoring for bias introduced during adjudication. Open the example 27 module for this chapter to inspect the queue logic.

## Slide 8 — Fully automated and crowdsourced annotation

Fully automated pipelines label data without per-item human review, which suits scale but raises accuracy and bias risk. Automated labelers inherit training-data skew, so subsets should be spot-checked and fairness metrics applied before release. Crowdsourcing distributes micro-tasks to many workers, often with redundancy and majority vote for quality on simpler schemas.

## Slide 9 — Example 4.28 — Majority vote on crowdsourced sentiment

Example 4.28 shows a simple redundancy pattern. Three workers label the same review as positive, positive, and negative; majority vote yields positive, while gold-item checks and qualification tests limit random or adversarial workers. Crowdsourcing scales quickly but needs gold items, worker qualification, and fair payment practices. Open the example 28 module for this chapter to review the vote pattern.

## Slide 10 — Takeaways

Match technique to ambiguity, throughput, and ethics—not to habit. Table 4.2 pairs each approach with its primary risk. Combine workflows only when shared QC gates keep volume from eroding accuracy.

## Slide 11 — Next

Complete the quiz, then continue to the next part on annotation tools—open-source editors, commercial platforms, and a minimal object-detection workflow.
