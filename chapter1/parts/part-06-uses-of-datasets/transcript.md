# Chapter 1 — Uses of datasets — transcript

**Part id:** part-06-uses-of-datasets  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter1.tex` (§1.5), `modules/chapter1/example21/`, `modules/chapter1/example31/`

## Slide 1 — Chapter 1 — Uses of datasets

Earlier parts answered what a dataset is and how to read one responsibly. This part asks where datasets create value in practice, then walks a complete churn workflow.

## Slide 2 — Learning objectives

You should map sectors to typical datasets and goals, recognize the shared lifecycle across domains, and outline the steps in the customer-churn case study.

## Slide 3 — Applications across sectors

Organizations collect records about customers, patients, students, or transactions, organize them, and use them to monitor performance, detect risk, or personalize services. Retail emphasizes purchase and clickstream data; healthcare joins EHRs with wearables; finance scores transactions; education and government use logs and public statistics for intervention and planning.

## Slide 4 — Example 1.21 — Purchase history

Example 1.21 stores one row per order with customer, category, date, and amount. Aggregating by customer reveals repurchase intervals and category preferences that drive segmentation and promotions. The example 21 module walks through the concept.

## Slide 5 — Case study: customer churn

The churn case study stitches the chapter together: assemble behavioral features, explore and clean, train a classifier, and intervene before cancellation. Ranked feature importance highlights which behaviors precede churn; thresholded scores let retention teams act.

## Slide 6 — Example 1.31 — Churn model sketch

Example 1.31 provides a Python sketch of that pipeline. The same structure appears in fraud scoring and demand forecasting—only labels and the cost of errors change. Run the example 31 module when you want to see the code in action.

## Slide 7 — Takeaways

Domain vocabulary changes; the lifecycle does not. Quality and exploration feed every serious application. Churn is the chapter's end-to-end illustration of define, prepare, model, and intervene.

## Slide 8 — Next

Complete the quiz, then finish the chapter with dataset management—versioning, access, and privacy that keep such pipelines trustworthy.
