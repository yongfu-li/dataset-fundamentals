# Chapter 13 — Reproducibility and open science — transcript

**Clip id:** part-01-reproducibility-and-open-science
**Estimated duration:** 7 minutes
**Sources:** `author/chapter13.tex` (§13.1.1–13.1.2), `modules/chapter13/example1/`, `modules/chapter13/example2/`, `modules/chapter13/example3/`, `modules/chapter13/example4/`

## Slide 1 — Chapter 13 — Reproducibility and open science

Chapters 8 and 12 covered operational documentation, versioning, storage, and lineage. This chapter turns those assets toward research-facing reproducibility and open science. This opening part defines reproducibility versus replicability and the core principles of open sharing.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to distinguish reproducibility from replicability; state accessibility, transparency, and collaboration as open-science principles; recognize open repositories such as the Open Science Framework and Zenodo; and explain why publishing scripts and notebooks supports transparent reuse.

## Slide 3 — Reproducibility versus replicability

Reproducibility and replicability are often used interchangeably, but they mean different things. Reproducibility is obtaining the same results from the same dataset when the same computational methods are applied. Replicability is obtaining consistent findings when the research is conducted independently, often with a new dataset or under different conditions. Both matter: reproducibility checks that a published computational path is faithful, while replicability tests whether the finding holds under new data or independent conditions.

## Slide 4 — Example 13.1 — Same Data and Methods Yield Identical Results

Example 13.1 illustrates methods reproducibility. If a researcher publishes a study using a dataset and a specific analytical technique, other researchers should be able to use the exact same dataset and method to obtain identical results. That identity is a measure of transparency and robustness in the scientific process. The example 1 module for this chapter demonstrates how fixing a seed and transform can make processed results match by hash.

## Slide 5 — Example 13.2 — Replication with New Climate Data

Example 13.2 contrasts replicability. A climate model may be replicated by a different team using a new set of environmental data to see whether the original findings hold under a different context or dataset. Replicability can thus be seen as an extension of reproducibility, testing generalizability across conditions or data sources. The example 2 module for this chapter frames that independent-team check.

## Slide 6 — Core principles of open science

Open science seeks to make research and data publicly accessible, transparent, and collaborative. Accessibility means research outputs—datasets, software, and methods—are available beyond journal articles alone. Transparency means making processes visible: which data were used, which methods were applied, and how analyses were conducted. Collaboration means sharing knowledge and resources across disciplines and institutions so complex problems can be tackled jointly.

## Slide 7 — Example 13.3 — OSF and Zenodo for Open Sharing

Example 13.3 names widely used platforms for open sharing. The Open Science Framework and Zenodo provide places where researchers can share datasets, code, and preprints with the global community. Accessibility is not only about publishing a paper; it includes providing the tools and data that underpin the findings. The example 3 module for this chapter summarizes that repository pattern.

## Slide 8 — Example 13.4 — Publishing Scripts and Notebooks

Example 13.4 shows transparency through released analysis assets. Researchers may release the scripts or notebooks used to process their data so others can follow the exact workflow. Transparency also encourages accountability through disclosure of conflicts of interest, funding sources, and methodological limitations. The example 4 module for this chapter covers publishing executable analysis artifacts.

## Slide 9 — Takeaways

Reproducibility checks the same data and methods; replicability tests findings with new data or independent teams. Open science rests on accessibility, transparency, and collaboration. Repositories such as the Open Science Framework and Zenodo support open sharing of data, code, and preprints. Publishing scripts and notebooks makes workflows checkable by others. This chapter’s focus is research-facing practice, building on—but not repeating—Chapter 8 and Chapter 12 operations.

## Slide 10 — Next

The next part covers barriers that still block reproducible work: privacy limits, missing hyperparameters, incompatible naming standards, and why reproducibility standards matter for high-stakes decisions.
