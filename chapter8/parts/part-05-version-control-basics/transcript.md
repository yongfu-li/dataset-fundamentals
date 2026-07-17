# Chapter 8 — Version control basics — transcript

**Clip id:** part-05-version-control-basics  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter8.tex` (§8.4.1–8.4.2), `modules/chapter8/example20/`, `modules/chapter8/example21/`

## Slide 1 — Chapter 8 — Version control basics

Documentation freezes meaning at a point in time; version control tracks how the data itself changes. This part defines dataset version control, contrasts traditional folder naming with automated systems, and introduces Git-based commits alongside DVC for large remote-backed assets.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to define dataset version control and its goals, contrast traditional versus automated approaches, explain when plain Git commits suffice for small tables, and describe how DVC tracks large datasets stored outside Git.

## Slide 3 — What dataset version control provides

Dataset version control tracks and manages evolving releases so changes from cleaning, transformation, or augmentation remain recorded and reversible. It supports knowing what changed and by whom, recovering from mistakes, reproducing prior experiments with exact data, and collaborating without silent overwrites.

## Slide 4 — Traditional versus automated approaches

Traditional practice relies on manual names such as versioned filenames or dated folders. It is simple for tiny projects but lacks granularity, automation, and reliable history. Automated systems such as Git with large-file support and DVC record changes systematically, integrate with code history, and scale better for frequent updates and multi-user work—at the cost of a learning curve.

## Slide 5 — Git for small, text-like datasets

Git is a distributed system designed for source code. Combined with careful file choices, it can track small CSV or schema-like artifacts whose changes sit beside code. Each update becomes a commit with an author and message, forming an auditable timeline for lightweight data assets.

## Slide 6 — Example 8.20 — CSV Dataset Commits in Git

Example 8.20 stores a CSV dataset in a Git repository and creates a new commit whenever rows are added or updated. That pattern works when files stay modest in size and change alongside analysis code. The example 20 module for this chapter restates the commit-on-update habit for small tables.

## Slide 7 — DVC for large remote-backed data

DVC extends Git-centered workflows for large datasets and models. Data files live in local or cloud storage while lightweight references remain in the repository. Collaborators can pull a specific dataset version so training and analysis use the same bytes that earlier experiments recorded.

## Slide 8 — Example 8.21 — DVC Tracking of Cloud-Stored Datasets

Example 8.21 places a large corpus in cloud object storage while DVC tracks versions. Analysts keep history and collaboration benefits without stuffing binaries into Git itself. Open the example 21 module for this chapter to review the remote-backed tracking idea.

## Slide 9 — Takeaways

Version control preserves change history for datasets, not only for code. Manual folder naming does not scale; automated tools do, with some training cost. Git fits small text-like tables; DVC fits large assets whose content belongs in remotes with pointers in the repository.

## Slide 10 — Next

The next part compares additional tools—Quilt and DataHub for package-style and streaming catalogs—and shows when Git LFS is the right layer for large training artifacts.
