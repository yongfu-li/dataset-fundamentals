# Chapter 6 — Case studies in EDA — transcript

**Part id:** part-11-case-studies  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter6.tex` (§6.9), `modules/chapter6/example5/`, `modules/chapter6/example7/`

## Slide 1 — Chapter 6 — Case studies in EDA

Domain narratives show how summaries, plots, and quality checks combine. This part tours retail, healthcare, fraud, e-commerce segmentation, and climate monitoring.

## Slide 2 — Learning objectives

By the end of this part, you should outline EDA steps for retail segmentation and clinical outcome tables and identify exploration priorities in fraud and climate settings.

## Slide 3 — Retail sales analysis

E-commerce segmentation faces missing age or frequency fields, inconsistent product capitalization, and mixed currencies. EDA profiles missingness, standardizes text and currency, scales spend features, then supports clustering for targeted campaigns.

## Slide 4 — Healthcare data analysis

Clinical records mix labs, history, and outcomes with missing vitals, outlier readings, and inconsistent smoker labels. Box plots and IQR screens flag vitals; categorical standardization and scaling precede outcome models.

## Slide 5 — Fraud detection

Transaction EDA emphasizes extreme amounts, rare positive class counts, and time patterns. Example 6.7 places outliers in a financial setting—explore class imbalance before trusting accuracy. Open the example 7 module for fraud-oriented summaries.

## Slide 6 — E-commerce segmentation and climate

Customer segmentation repeats retail motifs—RFM-style features, geography, and product mix. Climate monitoring stresses temporal plots, missing sensors, and distribution shifts across regions or seasons.

## Slide 7 — Example 6.5 — Sales and weather hypothesis

Example 6.5 shows how exploratory correlation can suggest seasonal hypotheses worth later testing. Try the example 5 module to connect domain questions with plot choices.

## Slide 8 — Takeaways

Case studies share a pattern: profile, visualize, detect issues, clean, re-explore. Domain dictates which defects and relationships matter most.

## Slide 9 — Next

Pause for the quiz, then continue to advanced topics and future directions.
