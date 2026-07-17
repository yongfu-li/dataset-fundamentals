# Chapter 6 — Multivariate visualization — transcript

**Part id:** part-05-multivariate-visualization  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter6.tex` (§6.3.4–6.3.5), `modules/chapter6/example9/`

## Slide 1 — Chapter 6 — Multivariate visualization

When more than two features matter, pair plots, heatmaps, parallel coordinates, PCA, and t-SNE help you see structure—each with interpretive limits.

## Slide 2 — Learning objectives

By the end of this part, you should explain pair plots and parallel-coordinate uses, describe PCA as a variance-maximizing projection, and state cautions for t-SNE cluster views.

## Slide 3 — Heatmaps and pair plots

Heatmaps color-code matrix values—default for correlation tables. Pair plots show every pairwise scatter for continuous features, giving a quick tour of age, income, spend, and frequency together.

## Slide 4 — Parallel coordinates

Each variable is a vertical axis; each row is a polyline across axes. Useful for finding similar customer profiles in moderate dimensions—color by category to separate product mixes.

## Slide 5 — Principal component analysis

PCA builds orthogonal components capturing successive maximum variance directions. Plotting the first two or three components can reveal clusters invisible in raw feature space. PCA is linear; nonlinear structure may need other tools.

## Slide 6 — t-SNE embeddings

t-SNE emphasizes local neighborhoods in two or three dimensions—helpful for cluster discovery after optional PCA pre-reduction on large tables. Interpret distances between distant clusters cautiously; t-SNE is primarily a local structure tool.

## Slide 7 — Example 6.9 — Geography and purchase frequency

Example 6.9 links geography to purchase hypotheses—multivariate views help test whether regional segments differ once several features are viewed together. Open the example 9 module for this chapter to explore grouped and reduced views.

## Slide 8 — Takeaways

Escalate plot complexity only when the question requires it. PCA and t-SNE are exploratory projections, not replacements for domain validation. Pair plots remain the honest first multivariate screen.

## Slide 9 — Next

Pause for the quiz, then continue to detecting data issues during EDA.
