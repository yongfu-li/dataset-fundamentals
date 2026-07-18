# Chapter 13 — Collaboration, audits, and outlook — transcript

**Clip id:** part-10-collaboration-audits-outlook
**Estimated duration:** 8 minutes
**Sources:** `author/chapter13.tex` (§13.11–13.16), `modules/chapter13/example47/`, `modules/chapter13/example50/`, `modules/chapter13/example55/`

## Slide 1 — Chapter 13 — Collaboration, audits, and outlook

The chapter closes with team and future practice. This final part covers cloud collaboration, audit trails that link retraining to data versions, common pitfalls such as environment drift, and briefly the climate-modeling case study and future outlook that tie the practices together.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to explain cloud virtual machines for consistent collaborative workflows; recognize environment drift as a common reproducibility pitfall; describe DVC audit links between retraining and data versions; and summarize how climate-scale case studies and future directions reinforce the chapter’s practices.

## Slide 3 — Cloud collaboration for scale

Distributed teams need shared infrastructure for large datasets and scalable computation without breaking reproducibility. Cloud platforms such as Amazon Web Services, Google Cloud, and Microsoft Azure provide elastic compute and storage. Chapter 12 covers storage architectures and platform operations; here the goal is consistent research environments and reliable access so collaborators rerun the same workflow at scale.

## Slide 4 — Example 13.47 — Cloud VMs for Consistent Workflows

Example 13.47 provisions cloud virtual machines so collaborators share the same runtime. Cloud-based VMs can be configured to run specific research workflows, ensuring the environment is consistent across users. Pairing VMs with containers or orchestration further reduces environment-related failures when the same software, dependencies, and data move between local machines, clusters, and the cloud. The example 47 module for this chapter covers that consistent-VM pattern.

## Slide 5 — Example 13.50 — Environment Drift Breaks Identical Code

Even with mature tools, full reproducibility often fails. Example 13.50 shows environment drift as a common pitfall: code that runs perfectly on one researcher’s system may fail or produce different outputs elsewhere because of discrepancies in installed dependencies or the computational environment. Containerization tools such as Docker or virtual environments such as conda encapsulate dependencies so the code runs consistently across machines. The example 50 module for this chapter frames that drift failure mode.

## Slide 6 — Example 13.55 — DVC Links Retraining to Data Versions

Maintaining audit trails is essential for checkable research. Just as code is versioned with Git, datasets and models should be versioned so every analysis links to its inputs. Example 13.55 shows DVC linking retraining runs to data versions: each time a model is retrained with new data, DVC can track the new dataset and updated model parameters, creating an audit trail from data to final model. The example 55 module for this chapter summarizes that retraining audit link.

## Slide 7 — Climate case study and future outlook

Large collaborative programs such as CMIP6 illustrate why these practices matter at climate-modeling scale: petabyte-class datasets, long-running simulations, and multi-institution comparison require versioned data, controlled environments, and transparent sharing if policy-facing outputs are to be independently verified. Looking ahead, reproducibility will continue to depend on FAIR sharing, containers, automated testing, data versioning, and ethical licensing as research becomes more computational and collaborative. The chapter’s tools are not optional polish; they are the infrastructure of trustworthy open science.

## Slide 8 — Takeaways

Cloud VMs and containers help teams share consistent runtimes at scale. Environment drift remains a top failure mode when dependencies are unpinned. Audit trails that link retraining to data versions make published models checkable. Climate-scale collaborations show why FAIR, versioning, and environments must travel together. The chapter closes by tying research-facing reproducibility to the operational foundations built in Chapters 8 and 12.

## Slide 9 — Next

Complete the quiz for this part to finish Chapter 13. Review any weak objectives, then continue to the next chapter in the course sequence when ready.
