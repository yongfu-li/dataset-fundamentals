---
marp: true
title: Chapter 6 — Multivariate visualization
paginate: true
---

# Chapter 6 — Multivariate visualization

When more than two features matter, pair plots, heatmaps, parallel coordinates, PCA

---

## Learning objectives
- Explain pair plots and parallel-coordinate uses
- State cautions for t-SNE cluster views

---

## Heatmaps and pair plots
- Heatmaps color-code matrix values, default for correlation tables
- Frequency together

---

## Parallel coordinates
- Each variable is a vertical axis; each row is a polyline across axes
- Useful for finding similar customer profiles in moderate dimensions

---

## Principal component analysis
- PCA builds orthogonal components capturing successive maximum variance directions
- Plotting the first two or three components can reveal clusters invisible in raw feature
- PCA is linear; nonlinear structure may need other tools

---

## t-SNE embeddings
- T-SNE emphasizes local neighborhoods in two or three dimensions
- Interpret distances between distant clusters cautiously

---

## Example 6.9 — Geography and purchase frequency
- Example 6.9 — hands-on module
- Example 6.9 links geography to purchase hypotheses
- Explore the chapter example module
- View files: `modules/chapter6/example9/`

---

## Takeaways
- Escalate plot complexity only when the question requires it
- PCA and t-SNE are exploratory projections, not replacements for domain validation
- Pair plots remain the honest first multivariate screen

---

## Next
- Complete the quiz for this part
- Continue to detecting data issues during EDA

