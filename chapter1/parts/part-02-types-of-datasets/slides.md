---
marp: true
title: Chapter 1 — Types of Datasets
paginate: true
---

# Chapter 1 — Types of Datasets

Welcome to Part 2 of Chapter 1

---

## Learning Objectives
- Normal form. We examine temporal dynamics
- We analyze the late arrival problem with event-time watermarks and simulate streaming

---

## The Two Fundamental Classification Axes
- Every dataset encountered in data science is categorized across two orthogonal dimensions
- The structural dimension evaluates how rigidly data conforms to a predefined schema
- The temporal dimension governs how observations evolve over physical time
- Selecting an organizational archetype dictates ingestion throughput and downstream storage
- Structural organization directly influences how vulnerable a dataset is to schema drift

---

## Mathematical Formalization of Structured Relations
- A structured dataset is defined as an empirical relation over a fixed schema signature
- Each attribute draws values strictly from a defined algebraic state domain
- Structured relations satisfy relational invariance through strict column type homogeneity
- Every relation adheres to first normal form
- Tabular structured datasets are optimized for analytical aggregations and relational join

---

## Semi-Structured Hierarchical Trees
- Semi-structured datasets relax global schema requirements while remaining fully
- Records are formalized as rooted, labeled, directed attributed trees
- Vertices represent structured objects, variable-length arrays, or scalar leaf values
- Edge labels define attribute keys such as order identifiers and customer records
- Formats such as JSON and Protocol Buffers enable schema evolution without breaking

---

## Unstructured Multimodal Manifolds
- Unstructured data lacks a uniform relational schema or coordinate grid
- Modalities such as raw natural language, audio recordings
- Extracting meaning requires deep neural representation encoders that map high-dimensional
- These dense embeddings then become the structured feature inputs for downstream

---

## Temporal Dynamics: Static Snapshots versus Dynamic Streams
- The temporal dimension separates static historical extracts from continuous dynamic event
- Static datasets represent frozen temporal snapshots over a bounded time window
- Benchmark corpora like ImageNet and historical census dumps are immutable references for
- Dynamic datasets arrive as unbounded continuous event streams governed by time-varying
- Real-time telemetry, IoT sensors

---

## The Late Arrival Problem and Event-Time Watermarks
- Dynamic streaming pipelines face the fundamental challenge of out-of-order data arrival
- Network partitions and mobile disconnections mean processing time rarely matches true
- Stream processors implement event-time watermarks to define when a temporal window can be
- Watermarks establish a monotonic timestamp threshold that balances aggregation
- Handling late-arriving records is essential for avoiding corrupted temporal state

---

## Example 1.7 — Semi-Structured Dataset in JSON
- Example 1.7 — hands-on module
- Example 1.7 demonstrates semi-structured data using an e-commerce order payload formatted
- The record combines rigid relational keys such as order identifier and customer identifier
- This hybrid architecture shows how modern web applications store complex transactions
- View files: `modules/chapter1/example7/`

---

## Example 1.7 — listing

```
{
    "order_id": "12345",
    "customer_id": "1",
    "products": [
        {"product_name": "Shoes", "quantity": 2},
        {"product_name": "Jacket", "quantity": 1}
    ],
    "comments": "Fast shipping, excellent quality!"
}
```

---

## Industry Case Study: Multimodal Ingestion and Limit Order Books
- Production enterprises encounter both structural and temporal challenges simultaneously
- Unstructured product imagery
- In financial exchanges
- Trading engines maintain deterministic state transitions by serializing rapid order

---

## In-Browser Taxonomy and Streaming Simulator
- Learners can explore these dynamics directly using the in-browser Taxonomy and Streaming
- The interactive workbench allows you to stream simulated events through tumbling time
- You can observe how network latency induces out-of-order event arrivals and adjust
- Watching records get accepted or rejected clarifies streaming trade-offs between latency

---

## Key Takeaways and Architectural Trade-offs
- To summarize our taxonomy of datasets, remember four architectural principles
- Structural organization and temporal dynamics are orthogonal design decisions
- Structured tabular relations guarantee atomic integrity and optimal query performance
- Semi-structured trees enable flexible schema evolution at the cost of parsing overhead
- Dynamic streams require event-time watermarking to guarantee accurate windowed analytics

---

## Next
- Complete the quiz for this part
- Pause here to complete the formative quiz for this part

