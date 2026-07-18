# Chapter 12 — Data lineage tracking — transcript

**Clip id:** part-08-data-lineage-tracking
**Estimated duration:** 7 minutes
**Sources:** `author/chapter12.tex` (§12.4), `modules/chapter12/example19/`, `modules/chapter12/example20/`, `modules/chapter12/example21/`, `modules/chapter12/example22/`

## Slide 1 — Chapter 12 — Data lineage tracking

Versioning records what changed; lineage records how data moved and transformed. This part defines provenance at platform scale, metadata and automated capture techniques, visualization for debugging, and cross-platform lineage gaps.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to define data lineage and why it matters for compliance and debugging; describe metadata management and automated capture with Examples 12.19 and 12.20; recognize catalog tools such as Apache Atlas and Amundsen; and explain cross-platform lineage gaps with Example 12.22.

## Slide 3 — Definition and importance

Data lineage tracks where data came from, how it was transformed, and which systems consume it. At scale, the same questions apply across dozens of pipelines rather than a single notebook: origin, transforms and aggregations, and downstream dependents. Chapter 8 covers provenance as documentation for individual datasets; Chapter 13 returns to research reproducibility. Here the focus is enterprise metadata platforms that capture table and stream movement across warehouses, lakes, and engines.

## Slide 4 — Compliance and debugging

Regulated industries need lineage evidence for regimes such as GDPR and HIPAA. Large platforms also use lineage to debug broken dashboards by walking upstream transforms. Operational gains include proving which jobs touched regulated tables and coordinating ownership so parallel teams do not silently overwrite shared feature tables.

## Slide 5 — Example 12.19 — Lineage Metadata on Schema and Steps

Metadata is central to lineage: it describes source, format, transformations, and usage. Example 12.19 lists fields that feed lineage views. Lineage catalogs record schema versions, transform job IDs, and update timestamps so operators can reconstruct how a table was produced. The example 19 module for this chapter summarizes those metadata fields.

## Slide 6 — Example 12.20 — Automated Lineage Capture on Model Runs

Automated tracking systems monitor pipelines and capture lineage without manual input. Example 12.20 captures lineage when a training job starts: an automated tracker records the input table version, feature job ID, and model artifact URI so later audits can reconstruct the run. The example 20 module for this chapter covers that capture pattern.

## Slide 7 — Tools and Example 12.21

Apache Atlas is an open-source metadata and governance tool for lineage, cataloging, and security, with strong Hadoop ecosystem integration and lineage visualization. Amundsen, developed at Lyft, emphasizes data discovery and integrates with Airflow and dbt for pipeline lineage. Example 12.21 uses lineage graphs to find a bad filter step: a lineage UI can show how a cohort table was filtered and joined so analysts locate which transform introduced an empty partition. The example 21 module for this chapter frames that debugging use case.

## Slide 8 — Example 12.22 — Cross-Platform Lineage Gaps

The distinctive platform-scale challenge is cross-system coverage. Organizations mix cloud storage, Spark, Hadoop, Kafka, and machine-learning platforms; connectors that omit a hop create gaps. Example 12.22 shows lineage breaking across boundaries: data may land in object storage, transform in Spark, then train in an ML platform; without connectors, lineage stops at each boundary and audits cannot walk the full path. The example 22 module for this chapter summarizes that gap risk.

## Slide 9 — Takeaways

Lineage answers origin, transform, and dependency questions across pipelines. Metadata and automated capture keep records current; Atlas and Amundsen illustrate enterprise catalogs. Visualization helps debug empty partitions and broken dashboards. Cross-platform gaps remain the hard problem when connectors stop at system boundaries. Distinguish Chapter 8 per-dataset provenance from Chapter 12 platform catalogs.

## Slide 10 — Next

The next part applies storage, streaming, and governance patterns in short case studies: Netflix-scale streaming, Spotify-style real-time analytics, and healthcare imaging archives.
