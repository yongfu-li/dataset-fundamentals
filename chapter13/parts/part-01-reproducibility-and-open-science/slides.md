---
marp: true
title: Chapter 13 — Reproducibility and open science
paginate: true
---

# Chapter 13 — Reproducibility and open science

Chapters 8 and 12 covered operational documentation, versioning, storage, and lineage

---

## Learning objectives
- By the end of this part

---

## Reproducibility versus replicability
- Reproducibility and replicability are often used interchangeably
- Reproducibility is obtaining the same results from the same dataset when the same
- Often with a new dataset or under different conditions
- Both matter: reproducibility checks that a published computational path is faithful

---

## Example 13.1 — Same Data and Methods Yield Identical Results
- Example 13.1 — hands-on module
- Example 13.1 illustrates methods reproducibility
- If a researcher publishes a study using a dataset and a specific analytical technique
- That identity is a measure of transparency and robustness in the scientific process
- View files: `modules/chapter13/example1/`

---

## Example 13.1 — listing

```
"""Example 13.1 — same data and methods yield identical results.

Demonstrates computational (methods) reproducibility with the standard library:
a seeded pipeline produces a byte-identical result across runs, while changing
the seed or a step breaks that guarantee.
"""

from __future__ import annotations

import hashlib
import random
import statistics


def analysis(seed: int, transform: str = "zscore") -> str:
    """Run a small deterministic 'analysis' and return a hash of its result.

    Args:
        seed: Random seed fixing the synthetic dataset and any sampling.
        transform: Processing step applied to the data ('zscore' or 'minmax').
```

---

## Example 13.2 — Replication with New Climate Data
- Example 13.2 — hands-on module
- Example 13.2 contrasts replicability
- A climate model may be replicated by a different team using a new set of environmental
- Replicability can thus be seen as an extension of reproducibility
- Explore the chapter example module
- View files: `modules/chapter13/example2/`

---

## Core principles of open science
- Open science seeks to make research and data publicly accessible, transparent
- Accessibility means research outputs, datasets, software
- Transparency means making processes visible
- Collaboration means sharing knowledge and resources across disciplines and institutions so

---

## Example 13.3 — OSF and Zenodo for Open Sharing
- Example 13.3 — hands-on module
- Example 13.3 names widely used platforms for open sharing
- Preprints with the global community
- Accessibility is not only about publishing a paper
- Explore the chapter example module
- View files: `modules/chapter13/example3/`

---

## Example 13.4 — Publishing Scripts and Notebooks
- Example 13.4 — hands-on module
- Example 13.4 shows transparency through released analysis assets
- Researchers may release the scripts or notebooks used to process their data so others can
- Methodological limitations
- Explore the chapter example module
- View files: `modules/chapter13/example4/`

---

## Takeaways
- Reproducibility checks the same data and methods
- Open science rests on accessibility, transparency, and collaboration
- Repositories such as the Open Science Framework and Zenodo support open sharing of data
- Publishing scripts and notebooks makes workflows checkable by others
- This chapter’s focus is research-facing practice

---

## Next
- Complete the quiz for this part
- The next part covers barriers that still block reproducible work

