---
marp: true
title: Chapter 12 — Scalable Data Management
paginate: true
---

# Chapter 12 — Introduction to scalable data management

Chapters 9 through 11 covered advanced collection, synthetic companions, and annotation at scale

---

## Learning objectives
- By the end of this part, learners should be able to define scalable data management

---

## What scalable data management means
- Scalable data management is the ability to handle growing volume, variety
- As datasets grow
- The goal is to design storage, processing

---

## Principle: elasticity
- Elasticity means the system can expand and contract resources depending on the workload
- This is especially useful in cloud environments
- Elastic designs avoid permanently over-provisioning for peak load

---

## Principles: efficiency and resilience
- Efficiency means optimizing storage, compute
- Resilience means remaining available and fault-tolerant as the system scales
- Together with elasticity

---

## Challenges: storage and retrieval
- Traditional databases and file systems often struggle to store petabytes or exabytes
- Distributed storage is needed so data is evenly placed, backed up
- Retrieval also grows harder

---

## Challenges: performance and cost
- Systems must handle high request rates with low latency while scaling
- Network latency and consistency become central concerns in cloud and distributed settings
- Scaling also raises operational cost

---

## Core components of the platform
- Fault tolerance
- Query processing often uses parallel and distributed databases that split work across
- Data lineage tracks origin, transforms, and use so pipelines stay auditable and debuggable

---

## Takeaways
- Scalable data management keeps volume, variety
- Elasticity, efficiency, and resilience are the guiding principles
- Storage, retrieval, performance, and cost challenges motivate distributed designs
- Storage, query processing, and lineage form the core component stack this chapter develops

---

## Next
- Complete the quiz for this part
- The next part surveys database families and cloud storage

---

# Chapter 12 — Databases and cloud storage

Principles alone do not pick a store

---

## Learning objectives
- By the end of this part

---

## Choosing databases and storage
- In large-scale data management
- The choice depends on use case, data type, and performance requirements
- Broadly, systems fall into databases for structured and unstructured data and storage

---

## Relational databases
- Atomicity, consistency, isolation, and durability
- Enterprise resource planning

---

## NoSQL databases
- NoSQL stores such as MongoDB, Cassandra
- Models include key-value, document, and graph forms
- Big-data analytics

---

## Example 12.1 — NoSQL for Web Mobile and IoT
- Example 12.1 — hands-on module
- Example 12.1 lists typical NoSQL application patterns
- NoSQL stores fit real-time social and messaging apps, semi-structured logs for analytics
- Explore the chapter example module
- View files: `modules/chapter12/example1/`

---

## SQL versus NoSQL trade-offs
- The chapter comparison table contrasts data model, scaling, consistency, transactions
- SQL systems favor tables, often vertical scale first, strong consistency with ACID
- High-volume semi-structured or rapidly changing data

---

## Example 12.2 — Cloud Storage Across AWS GCP Azure
- Example 12.2 — hands-on module
- Example 12.2 summarizes managed storage and database options from major clouds
- Amazon Web Services pairs S3 object storage with RDS and DynamoDB
- Explore the chapter example module
- View files: `modules/chapter12/example2/`

---

## Takeaways
- Relational stores fit structured transactional work with strong consistency
- Web, mobile, and Internet of Things streams often prefer NoSQL when schemas evolve quickly
- Major clouds package object storage with managed SQL and NoSQL services so teams reduce

---

## Next
- Complete the quiz for this part
- The next part covers storage formats and media types

---

# Chapter 12 — Formats and storage types

Choosing a database is only half the storage decision

---

## Learning objectives
- By the end of this part

---

## Why storage formats matter
- ORC are widely used
- Format choice affects compression, schema evolution

---

## Example 12.3 — Parquet Columnar Analytics Format
- Example 12.3 — hands-on module
- Example 12.3 highlights Parquet for analytical scans
- So queries read only needed columns and cut input and output
- Explore the chapter example module
- View files: `modules/chapter12/example3/`

---

## Example 12.4 — Avro and ORC for Streams and Hive
- Example 12.4 — hands-on module
- Example 12.4 contrasts Avro row encoding with ORC columnar Hive storage
- Avro is a row-oriented format common in Kafka-style streaming with schema evolution
- Explore the chapter example module
- View files: `modules/chapter12/example4/`

---

## Object storage model
- Object storage systems
- This model is highly scalable and suitable for unstructured data such as videos, images
- Object storage is optimized for large-scale archiving and retrieval over an HTTP-style API

---

## Example 12.5 — Object Storage for Unstructured Archives
- Example 12.5 — hands-on module
- Example 12.5 places object storage in large unstructured workloads
- Lakehouse files that grow without block-device provisioning
- Explore the chapter example module
- View files: `modules/chapter12/example5/`

---

## Block storage and Example 12.6
- Example 12.6 — hands-on module
- Block storage divides data into blocks and provides low-latency access
- It is ideal for transactional systems that need fast reads and writes
- Example 12.6 shows block volumes attaching low-latency disks to virtual machines running
- Explore the chapter example module
- View files: `modules/chapter12/example6/`

---

## Putting formats and media together
- In practice, teams place lakehouse files, media
- Columnar formats such as Parquet and ORC sit on object stores for analytics

---

## Takeaways
- Parquet favors columnar analytics with selective column reads
- Avro fits streaming with schema evolution; ORC fits read-heavy Hive warehouses
- Object storage scales unstructured archives and lakehouse files
- Format and media choices should follow query and latency needs, not a single default

---

## Next
- Complete the quiz for this part
- The next part introduces distributed systems characteristics and concrete examples

---

# Chapter 12 — Distributed systems overview

Single-node disks cannot hold petabyte corpora

---

## Learning objectives
- By the end of this part

---

## Why distributed systems
- Distributed systems sit at the heart of scalable data management
- They enable data to be stored, processed
- Chapter 9 introduced streaming collection from an acquisition angle

---

## Key characteristics
- Distributed systems aim for high availability, fault tolerance, and horizontal scalability
- Core characteristics include data partitioning across nodes

---

## Example 12.7 — HDFS Partitioning and Replication
- Example 12.7 — hands-on module
- Example 12.7 walks through HDFS blocks as a distributed-file pattern
- HDFS splits large files into blocks
- Explore the chapter example module
- View files: `modules/chapter12/example7/`

---

## Example 12.8 — Cassandra for Multi-Datacenter Writes
- Example 12.8 — hands-on module
- Example 12.8 positions Cassandra for write-heavy global apps
- Apache Cassandra is a distributed NoSQL store built for high write throughput and
- Explore the chapter example module
- View files: `modules/chapter12/example8/`

---

## Example 12.9 — Kafka for Real-Time Event Streams
- Example 12.9 — hands-on module
- Example 12.9 uses Kafka as the streaming backbone
- Apache Kafka ingests and buffers event streams with durable
- Explore the chapter example module
- View files: `modules/chapter12/example9/`

---

## Patterns that recur
- Together, HDFS, Cassandra
- File blocks, write-optimized tablet stores

---

## Takeaways
- Fault tolerance
- HDFS shows block placement and replica recovery
- Cassandra targets multi-datacenter write scale
- Kafka provides durable partitioned logs for real-time consumers
- These patterns prepare the CAP and consistency discussion that follows

---

## Next
- Complete the quiz for this part
- The next part covers the CAP theorem, sharding and replication patterns

---

# Chapter 12 — CAP, sharding, and consistency

Distribution introduces trade-offs among consistency, availability, and partition tolerance

---

## Learning objectives
- By the end of this part

---

## The CAP theorem
- Partition tolerance simultaneously
- Consistency means every read returns the most recent write
- Availability means every request receives a response even if some nodes are down
- Partition tolerance means the system continues when the network splits nodes apart

---

## CP versus AP under partition
- Because partitions are unavoidable in real networks
- Under partition
- The choice depends on whether stale reads or temporary unavailability is more costly for

---

## Sharding and Example 12.10
- Example 12.10 — hands-on module
- Data sharding partitions data across servers to improve scalability, fault tolerance
- Example 12.10 shows a common sharding key choice
- Explore the chapter example module
- View files: `modules/chapter12/example10/`

---

## Example 12.10 — listing

```
"""Example 12.10 — shard customer keys by geography or customer ID."""

from __future__ import annotations

import hashlib
from collections import Counter


def shard_for_customer(customer_id: str, n_shards: int) -> int:
    """Return a stable shard index for a customer ID."""
    digest = hashlib.md5(customer_id.encode("utf-8")).hexdigest()
    return int(digest, 16) % n_shards


def main() -> None:
    """Show ID hashing and region mapping as two common sharding keys."""
    n_shards = 4
    customers = ["c_1001", "c_1002", "c_2044", "c_3110", "c_4500", "c_4501"]
    print(f"Hash sharding by customer_id across {n_shards} nodes:\n")
    print(f"{'customer_id':<12}{'shard':>6}")
```

---

## Example 12.11 — Strong Consistency in Financial Ledgers
- Example 12.11 — hands-on module
- Strong consistency guarantees that any read returns the most recent write regardless of
- Example 12.11 requires that guarantee for balances
- Explore the chapter example module
- View files: `modules/chapter12/example11/`

---

## Example 12.13 — Eventual Consistency in DynamoDB and Cassandra
- Example 12.13 — hands-on module
- Writes propagate to other nodes, but nodes may temporarily disagree
- Example 12.13 lists stores that favor availability under partition
- Amazon DynamoDB and Apache Cassandra commonly emphasize availability and partition
- Explore the chapter example module
- View files: `modules/chapter12/example13/`

---

## Choosing a consistency model
- For many web and social applications
- E-commerce platforms, content delivery networks
- Conversely, sensitive financial or health-related data often require strong consistency to
- Design hinges on application needs and the consistency, availability

---

## Takeaways
- CAP says partitions force a choice between consistency and availability in practice
- Sharding spreads keys; replication preserves availability after failures
- Strong consistency fits ledgers and similar integrity-critical work
- Match the model to whether stale reads or downtime hurts more

---

## Next
- Complete the quiz for this part
- The next part shifts from storage mechanics to dataset versioning at platform scale

---

# Chapter 12 — Dataset versioning tools

Chapter 8 covered team-scale documentation and Git-oriented version control

---

## Learning objectives
- Iceberg snapshot rollback through Examples 12.14 through 12.17

---

## Collaborative workflows at scale
- At scale, multiple engineers and models share the same raw and feature tables
- Without immutable version identifiers
- Teams pin training runs to explicit dataset revisions or snapshot IDs

---

## Example 12.14 — DVC Remotes on Object Storage
- Example 12.14 — hands-on module
- For machine-learning projects whose primary assets are still files beside code
- Example 12.14 ties DVC metadata to cloud remotes
- Explore the chapter example module
- View files: `modules/chapter12/example14/`

---

## Example 12.15 — Pachyderm Partition Recompute
- Example 12.15 — hands-on module
- Pachyderm targets data-driven pipelines with automatic versioning of inputs and outputs
- Example 12.15 shows pipeline versioning that recomputes only changed partitions
- Explore the chapter example module
- View files: `modules/chapter12/example15/`

---

## Example 12.16 — Delta Lake Time Travel on Object Stores
- Example 12.16 — hands-on module
- Delta Lake, Apache Hudi
- Example 12.16 uses Delta Lake
- Explore the chapter example module
- View files: `modules/chapter12/example16/`

---

## Example 12.17 — Iceberg Snapshot Rollback
- Example 12.17 — hands-on module
- Snapshot-based versioning captures a point-in-time view of a table for rollback and
- Example 12.17 rolls back via table snapshots
- Explore the chapter example module
- View files: `modules/chapter12/example17/`

---

## File-level versus table-level versioning
- DVC remains the file-and-pipeline companion when code, models
- Lakehouse formats are the scalable counterpart to file-level DVC commits
- Regulated domains still need an auditable history of which snapshot trained which model

---

## Takeaways
- Platform-scale versioning extends Chapter 8 discipline to object stores and lakehouse
- DVC remotes record versions while cloud storage holds bytes
- Pachyderm recomputes only changed partitions
- Delta Lake and Iceberg provide time travel and snapshot rollback without full warehouse
- Pin experiments to explicit snapshots rather than latest

---

## Next
- Complete the quiz for this part
- The next part covers why versioning matters at scale

---

# Chapter 12 — Versioning benefits and challenges

Tools only help if teams understand why versioning matters and where it fails

---

## Learning objectives
- By the end of this part

---

## Benefits at platform scale
- Reproducibility and audit benefits of versioning are developed in Chapters 8 and 13
- At scale, the distinctive gains are different

---

## Example 12.18 — Rollback After Corrupt Preprocessing
- Example 12.18 — hands-on module
- Example 12.18 shows why rollback matters when a transform corrupts shared data
- If a preprocessing job corrupts a shared feature table
- Explore the chapter example module
- View files: `modules/chapter12/example18/`

---

## Challenge: storage overhead
- General versioning discipline
- At lakehouse and object-store scale, storage overhead dominates
- Full copies of petabyte tables are rarely affordable
- Delta and snapshot formats keep costs manageable by storing diffs

---

## Challenge: schema evolution under concurrency
- Adding columns or changing types while readers and writers share a table requires
- Lakehouse formats such as Delta Lake, Hudi

---

## Discipline still matters
- Agreement on when a schema break is a new table
- Versioning succeeds when engineering practice and lakehouse primitives reinforce each

---

## Takeaways
- At scale, versioning enables snapshot pinning, partition rollback
- Example 12.18 shows rollback after corrupt preprocessing instead of a full rebuild
- Storage overhead and concurrent schema change remain the main challenges
- Chapter 8 still governs team hygiene; Chapter 12 governs lakehouse cost and concurrency

---

## Next
- Complete the quiz for this part
- The next part turns from what changed to how data moved

---

# Chapter 12 — Data lineage tracking

Versioning records what changed; lineage records how data moved and transformed

---

## Learning objectives
- By the end of this part

---

## Definition and importance
- Data lineage tracks where data came from, how it was transformed
- Origin, transforms and aggregations, and downstream dependents
- Chapter 8 covers provenance as documentation for individual datasets
- Lakes, and engines

---

## Compliance and debugging
- Regulated industries need lineage evidence for regimes such as GDPR and HIPAA
- Large platforms also use lineage to debug broken dashboards by walking upstream transforms
- Operational gains include proving which jobs touched regulated tables and coordinating

---

## Example 12.19 — Lineage Metadata on Schema and Steps
- Example 12.19 — hands-on module
- Metadata is central to lineage: it describes source, format, transformations, and usage
- Example 12.19 lists fields that feed lineage views
- Lineage catalogs record schema versions, transform job IDs
- Explore the chapter example module
- View files: `modules/chapter12/example19/`

---

## Example 12.20 — Automated Lineage Capture on Model Runs
- Example 12.20 — hands-on module
- Automated tracking systems monitor pipelines and capture lineage without manual input
- Example 12.20 captures lineage when a training job starts
- Explore the chapter example module
- View files: `modules/chapter12/example20/`

---

## Tools and Example 12.21
- Example 12.21 — hands-on module
- Apache Atlas is an open-source metadata and governance tool for lineage, cataloging
- Amundsen, developed at Lyft, emphasizes data discovery and integrates with Airflow and dbt
- Example 12.21 uses lineage graphs to find a bad filter step
- Explore the chapter example module
- View files: `modules/chapter12/example21/`

---

## Example 12.22 — Cross-Platform Lineage Gaps
- Example 12.22 — hands-on module
- The distinctive platform-scale challenge is cross-system coverage
- Organizations mix cloud storage, Spark, Hadoop, Kafka, and machine-learning platforms
- Example 12.22 shows lineage breaking across boundaries
- Explore the chapter example module
- View files: `modules/chapter12/example22/`

---

## Takeaways
- Lineage answers origin, transform, and dependency questions across pipelines
- Metadata and automated capture keep records current
- Visualization helps debug empty partitions and broken dashboards
- Cross-platform gaps remain the hard problem when connectors stop at system boundaries
- Distinguish Chapter 8 per-dataset provenance from Chapter 12 platform catalogs

---

## Next
- Complete the quiz for this part
- The next part applies storage, streaming, and governance patterns in short case studies

---

# Chapter 12 — Practical applications and case studies

Storage theory becomes concrete in production architectures

---

## Learning objectives
- By the end of this part

---

## From mechanisms to production
- Earlier parts assembled storage formats, consistency trade-offs, lakehouse versioning
- The short case sketches below show how those pieces combine in production domains without
- The same object-store and streaming patterns recur across media and clinical settings

---

## Example 12.23 — Netflix Scale Streaming Architecture
- Example 12.23 — hands-on module
- Example 12.23 sketches Netflix-scale streaming storage needs
- Global streaming platforms combine object storage, content delivery networks
- Seamless integration of these technologies delivers high performance while keeping storage
- Explore the chapter example module
- View files: `modules/chapter12/example23/`

---

## Example 12.24 — Spotify Real-Time Analytics Pipelines
- Example 12.24 — hands-on module
- Example 12.24 sketches Spotify-style analytics on listening events
- Music platforms stream listening events into cloud storage and real-time analytics so
- A mix of SQL and NoSQL stores with frameworks such as Apache Spark lets the infrastructure
- Explore the chapter example module
- View files: `modules/chapter12/example24/`

---

## Example 12.25 — Healthcare Imaging at Scale
- Example 12.25 — hands-on module
- Example 12.25 applies scalable stores to clinical imaging archives
- Healthcare imaging vendors store large DICOM archives in object storage with governed
- Durability and access control matter as much as raw throughput in regulated clinical
- Explore the chapter example module
- View files: `modules/chapter12/example25/`

---

## Shared patterns across domains
- Streaming media and music analytics lean on object storage plus real-time buses and mixed
- Healthcare imaging reuses object storage for large binary archives but adds stronger
- Across all three cases

---

## Takeaways
- Netflix-style streaming pairs object storage, CDNs
- Spotify-style analytics stream events into cloud storage with SQL, NoSQL
- Healthcare imaging keeps DICOM archives on governed object storage with analytics on
- Production scale is composition of storage, streaming

---

## Next
- Complete the quiz for this part
- The final part surveys emerging trends

---

# Chapter 12 — Emerging trends

The chapter closes by looking ahead

---

## Learning objectives
- By the end of this part

---

## Directions still shifting operations
- Section 12.2 already covered cloud object stores, SQL versus NoSQL trade-offs
- Automated pipelines that keep storage and analytics synchronized

---

## Example 12.26 — Serverless Compute Over Object Storage
- Example 12.26 — hands-on module
- Beyond managed buckets themselves
- Example 12.26 pairs S3-class storage with serverless compute
- Explore the chapter example module
- View files: `modules/chapter12/example26/`

---

## Example 12.27 — Neo4j for Relationship-Heavy Graphs
- Example 12.27 — hands-on module
- Horizontal NoSQL stores remain important
- Example 12.27 places graph databases in network-style apps
- Graph databases such as Neo4j fit social graphs and fraud rings where multi-hop
- Explore the chapter example module
- View files: `modules/chapter12/example27/`

---

## Example 12.28 — InfluxDB for Timestamped Metrics
- Example 12.28 — hands-on module
- Example 12.28 places time-series stores in monitoring workloads
- Time-series databases such as InfluxDB store high-rate sensor and market ticks for
- Purpose-built engines avoid forcing every metric into a general document or relational
- Explore the chapter example module
- View files: `modules/chapter12/example28/`

---

## Example 12.29 — Kafka High-Throughput Messaging
- Example 12.29 — hands-on module
- Chapter 9 covers streaming collection
- Example 12.29 returns to Kafka in the pipeline-automation context
- Explore the chapter example module
- View files: `modules/chapter12/example29/`

---

## Looking ahead to Chapter 13
- Scalable management provides the storage, consistency, versioning
- Chapter 13 turns to reproducibility and open science
- Emerging tools matter only when they still expose addressable versions and auditable

---

## Takeaways
- Serverless compute scales independently of durable object storage
- Neo4j and InfluxDB illustrate purpose-built graph and time-series engines
- Kafka remains a high-throughput messaging backbone for live pipelines
- Trends build on earlier foundations rather than replacing CAP, formats, versioning
- Chapter 13 consumes the managed assets this chapter prepares

---

## Next
- Complete the quiz for this part
- Complete the quiz for this part to finish Chapter 12
