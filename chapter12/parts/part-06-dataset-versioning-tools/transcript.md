# Chapter 12 — Dataset versioning tools — transcript

**Clip id:** part-06-dataset-versioning-tools
**Estimated duration:** 7 minutes
**Sources:** `author/chapter12.tex` (§12.3.1–12.3.2), `modules/chapter12/example14/`, `modules/chapter12/example15/`, `modules/chapter12/example16/`, `modules/chapter12/example17/`

## Slide 1 — Chapter 12 — Dataset versioning tools

Chapter 8 covered team-scale documentation and Git-oriented version control. At platform scale, versioning must track large binaries and lakehouse tables. This part surveys DVC remotes, Pachyderm, Delta Lake time travel, and Iceberg snapshots.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to distinguish Chapter 8 team versioning from Chapter 12 platform-scale lakehouse and object-store versioning; describe collaborative pinning of training runs to snapshots; and explain DVC remotes, Pachyderm partition recompute, Delta Lake time travel, and Iceberg snapshot rollback through Examples 12.14 through 12.17.

## Slide 3 — Collaborative workflows at scale

At scale, multiple engineers and models share the same raw and feature tables. Without immutable version identifiers, notebooks drift to latest partitions and become unreproducible. Teams pin training runs to explicit dataset revisions or snapshot IDs, branch feature tables for parallel experiments, and record who promoted a candidate version into production—the same discipline as Chapter 8, applied to lakehouse and object-store layouts rather than only Git-tracked files.

## Slide 4 — Example 12.14 — DVC Remotes on Object Storage

For machine-learning projects whose primary assets are still files beside code, DVC and Git LFS patterns from Chapter 8 remain useful. Example 12.14 ties DVC metadata to cloud remotes: a team keeps DVC hash files in Git while the actual training shards live in an S3 or GCS remote, so scalable object storage holds bytes and DVC records which version a run used. The example 14 module for this chapter summarizes that remote pattern.

## Slide 5 — Example 12.15 — Pachyderm Partition Recompute

Pachyderm targets data-driven pipelines with automatic versioning of inputs and outputs. Example 12.15 shows pipeline versioning that recomputes only changed partitions: a new raw partition triggers only downstream stages that depend on that slice rather than rebuilding the entire lake. The example 15 module for this chapter covers that selective recompute idea.

## Slide 6 — Example 12.16 — Delta Lake Time Travel on Object Stores

Delta Lake, Apache Hudi, and Apache Iceberg store incremental changes and point-in-time snapshots on object storage, enabling ACID-style table operations and time travel without duplicating entire datasets. Example 12.16 uses Delta Lake: a transaction log over Parquet files on object storage lets teams time-travel to prior table versions without copying every file. The example 16 module for this chapter frames that time-travel pattern.

## Slide 7 — Example 12.17 — Iceberg Snapshot Rollback

Snapshot-based versioning captures a point-in-time view of a table for rollback and incremental processing across distributed nodes. Example 12.17 rolls back via table snapshots: Apache Iceberg and similar lakehouse formats expose snapshots so operators can point readers at a prior table state after a bad overwrite without restoring an entire warehouse backup. The example 17 module for this chapter summarizes that rollback path.

## Slide 8 — File-level versus table-level versioning

DVC remains the file-and-pipeline companion when code, models, and large files share remotes. Lakehouse formats are the scalable counterpart to file-level DVC commits: they version partitions inside the storage layer. Regulated domains still need an auditable history of which snapshot trained which model, addressable across clusters and regions without copying every petabyte on each commit.

## Slide 9 — Takeaways

Platform-scale versioning extends Chapter 8 discipline to object stores and lakehouse tables. DVC remotes record versions while cloud storage holds bytes. Pachyderm recomputes only changed partitions. Delta Lake and Iceberg provide time travel and snapshot rollback without full warehouse restores. Pin experiments to explicit snapshots rather than latest.

## Slide 10 — Next

The next part covers why versioning matters at scale—rollback and reproducibility benefits—then storage overhead and schema-evolution challenges under concurrency.
