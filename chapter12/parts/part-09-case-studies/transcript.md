# Chapter 12 — Practical applications and case studies — transcript

**Clip id:** part-09-case-studies
**Estimated duration:** 6 minutes
**Sources:** `author/chapter12.tex` (§12.5), `modules/chapter12/example23/`, `modules/chapter12/example24/`, `modules/chapter12/example25/`

## Slide 1 — Chapter 12 — Practical applications and case studies

Storage theory becomes concrete in production architectures. This part walks scalable patterns for streaming media, real-time analytics pipelines, and healthcare imaging at volume, combining object storage, streaming, and governance ideas from earlier parts.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to describe how global streaming platforms combine object storage, CDNs, and real-time pipelines; outline music-platform analytics that mix SQL, NoSQL, and Spark-style frameworks; and apply object-store patterns to governed healthcare imaging archives using Examples 12.23 through 12.25.

## Slide 3 — From mechanisms to production

Earlier parts assembled storage formats, consistency trade-offs, lakehouse versioning, and platform lineage. The short case sketches below show how those pieces combine in production domains without repeating the tool tutorials already given. The same object-store and streaming patterns recur across media and clinical settings.

## Slide 4 — Example 12.23 — Netflix Scale Streaming Architecture

Example 12.23 sketches Netflix-scale streaming storage needs. Global streaming platforms combine object storage, content delivery networks, and real-time pipelines so viewing events and catalog metadata remain available under heavy concurrent load. Seamless integration of these technologies delivers high performance while keeping storage and egress costs manageable. The example 23 module for this chapter summarizes that architecture sketch.

## Slide 5 — Example 12.24 — Spotify Real-Time Analytics Pipelines

Example 12.24 sketches Spotify-style analytics on listening events. Music platforms stream listening events into cloud storage and real-time analytics so recommendations and charts update without nightly batch-only warehouses. A mix of SQL and NoSQL stores with frameworks such as Apache Spark lets the infrastructure absorb traffic spikes and serve millions of users globally. The example 24 module for this chapter frames that analytics pipeline.

## Slide 6 — Example 12.25 — Healthcare Imaging at Scale

Example 12.25 applies scalable stores to clinical imaging archives. Healthcare imaging vendors store large DICOM archives in object storage with governed access so studies remain durable while analytics run on derived feature tables. Durability and access control matter as much as raw throughput in regulated clinical settings. The example 25 module for this chapter covers that imaging pattern.

## Slide 7 — Shared patterns across domains

Streaming media and music analytics lean on object storage plus real-time buses and mixed database families. Healthcare imaging reuses object storage for large binary archives but adds stronger governance around access. Across all three cases, scale is achieved by composing earlier chapter building blocks rather than inventing a one-off stack.

## Slide 8 — Takeaways

Netflix-style streaming pairs object storage, CDNs, and real-time pipelines under concurrent load. Spotify-style analytics stream events into cloud storage with SQL, NoSQL, and Spark for live recommendations. Healthcare imaging keeps DICOM archives on governed object storage with analytics on derived tables. Production scale is composition of storage, streaming, and governance patterns already covered.

## Slide 9 — Next

The final part surveys emerging trends: serverless compute over object storage, graph and time-series specialty stores, and high-throughput messaging platforms that shape the next generation of scalable pipelines.
