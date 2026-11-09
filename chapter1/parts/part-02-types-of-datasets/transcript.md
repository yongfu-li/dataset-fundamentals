# Chapter 1 — Types of datasets — transcript

**Part id:** part-02-types-of-datasets  
**Estimated duration:** 8 minutes  
**Sources:** `author/chapter1.tex` (§1.2.1–1.2.4), `modules/chapter1/example7/`, `docs/track1-introduction-to-datasets/02-types-of-datasets.md`

## Slide 1 — Chapter 1 — Types of Datasets

Welcome to Part 2 of Chapter 1. Having defined records and attributes, we now establish how datasets are systematically classified. We examine structural taxonomies and temporal dynamics that govern data storage, query efficiency, and machine learning pipelines.

## Slide 2 — Learning Objectives

Four primary learning goals guide this part. We classify datasets across the structural dimension into structured, semi-structured, and unstructured archetypes. We formalize relational tables mathematically through attribute domains and first normal form. We examine temporal dynamics, contrasting static historical snapshots with dynamic streaming event queues. Finally, we analyze the late arrival problem with event-time watermarks and simulate streaming windows in our interactive workbench.

## Slide 3 — The Two Fundamental Classification Axes

Every dataset encountered in data science is categorized across two orthogonal dimensions. The structural dimension evaluates how rigidly data conforms to a predefined schema. The temporal dimension governs how observations evolve over physical time. Selecting an organizational archetype dictates ingestion throughput and downstream storage footprints. Structural organization directly influences how vulnerable a dataset is to schema drift and covariate shift.

## Slide 4 — Mathematical Formalization of Structured Relations

A structured dataset is defined as an empirical relation over a fixed schema signature. Each attribute draws values strictly from a defined algebraic state domain. Structured relations satisfy relational invariance through strict column type homogeneity. Every relation adheres to first normal form, ensuring all attribute cells contain atomic values rather than unindexed arrays. Tabular structured datasets are optimized for analytical aggregations and relational join operations.

## Slide 5 — Semi-Structured Hierarchical Trees

Semi-structured datasets relax global schema requirements while remaining fully self-describing. Records are formalized as rooted, labeled, directed attributed trees. Vertices represent structured objects, variable-length arrays, or scalar leaf values. Edge labels define attribute keys such as order identifiers and customer records. Formats such as JSON and Protocol Buffers enable schema evolution without breaking downstream readers.

## Slide 6 — Unstructured Multimodal Manifolds

Unstructured data lacks a uniform relational schema or coordinate grid. Modalities such as raw natural language, audio recordings, and medical imaging represent continuous physical signals. Extracting meaning requires deep neural representation encoders that map high-dimensional raw inputs into dense continuous vector embeddings. These dense embeddings then become the structured feature inputs for downstream classification and search.

## Slide 7 — Temporal Dynamics: Static Snapshots versus Dynamic Streams

The temporal dimension separates static historical extracts from continuous dynamic event streams. Static datasets represent frozen temporal snapshots over a bounded time window. Benchmark corpora like ImageNet and historical census dumps are immutable references for reproducibility. Dynamic datasets arrive as unbounded continuous event streams governed by time-varying arrival rates. Real-time telemetry, IoT sensors, and financial tick data require sliding or tumbling window aggregations.

## Slide 8 — The Late Arrival Problem and Event-Time Watermarks

Dynamic streaming pipelines face the fundamental challenge of out-of-order data arrival. Network partitions and mobile disconnections mean processing time rarely matches true event occurrence time. Stream processors implement event-time watermarks to define when a temporal window can be safely closed. Watermarks establish a monotonic timestamp threshold that balances aggregation completeness against real-time latency. Handling late-arriving records is essential for avoiding corrupted temporal state.

## Slide 9 — Example 1.7 — Semi-Structured Dataset in JSON

Example 1.7 demonstrates semi-structured data using an e-commerce order payload formatted in JSON. The record combines rigid relational keys such as order identifier and customer identifier with flexible product lists and free-text customer reviews. This hybrid architecture shows how modern web applications store complex transactions without rigid multi-table joins. You can inspect and modify this payload in the example 7 module.

## Slide 10 — Industry Case Study: Multimodal Ingestion and Limit Order Books

Production enterprises encounter both structural and temporal challenges simultaneously. In e-commerce platforms like Shopify, product catalogs combine tabular inventory prices, semi-structured metadata tags, and unstructured product imagery. In financial exchanges, high-frequency limit order books process millions of dynamic microsecond ticks. Trading engines maintain deterministic state transitions by serializing rapid order submissions into immutable audit logs.

## Slide 11 — In-Browser Taxonomy and Streaming Simulator

Learners can explore these dynamics directly using the in-browser Taxonomy and Streaming Simulator. The interactive workbench allows you to stream simulated events through tumbling time windows. You can observe how network latency induces out-of-order event arrivals and adjust watermark thresholds. Watching records get accepted or rejected clarifies streaming trade-offs between latency and completeness.

## Slide 12 — Key Takeaways and Architectural Trade-offs

To summarize our taxonomy of datasets, remember four architectural principles. Structural organization and temporal dynamics are orthogonal design decisions. Structured tabular relations guarantee atomic integrity and optimal query performance. Semi-structured trees enable flexible schema evolution at the cost of parsing overhead. Dynamic streams require event-time watermarking to guarantee accurate windowed analytics.

## Slide 13 — Next Steps

Pause here to complete the formative quiz for this part. When ready, proceed to Part 3 to explore dataset storage formats and low-level serialization architectures.
