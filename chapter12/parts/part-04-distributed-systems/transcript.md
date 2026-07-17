# Chapter 12 — Distributed systems overview — transcript

**Clip id:** part-04-distributed-systems
**Estimated duration:** 7 minutes
**Sources:** `author/chapter12.tex` (§12.2.5–12.2.6), `modules/chapter12/example7/`, `modules/chapter12/example8/`, `modules/chapter12/example9/`

## Slide 1 — Chapter 12 — Distributed systems overview

Single-node disks cannot hold petabyte corpora. Distributed systems partition and replicate data across machines. This part introduces distributed characteristics and concrete examples: HDFS, Cassandra, and Kafka for streams.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to list key distributed-system characteristics such as partitioning, replication, and fault tolerance; explain how HDFS illustrates block partitioning and replication; position Cassandra for write-heavy multi-datacenter apps; and describe Kafka as a durable partitioned event log.

## Slide 3 — Why distributed systems

Distributed systems sit at the heart of scalable data management. They enable data to be stored, processed, and queried across multiple machines so large datasets can be handled efficiently. Chapter 9 introduced streaming collection from an acquisition angle; here the focus is storage layout, consistency, and operational trade-offs once data already live in the platform.

## Slide 4 — Key characteristics

Distributed systems aim for high availability, fault tolerance, and horizontal scalability. Core characteristics include data partitioning across nodes; replication for redundancy; consistency models from strong to eventual; coordination among nodes; fault tolerance when components fail; and scaling out by adding nodes without sacrificing performance.

## Slide 5 — Example 12.7 — HDFS Partitioning and Replication

Example 12.7 walks through HDFS blocks as a distributed-file pattern. HDFS splits large files into blocks, often around 128 megabytes, places replicas on multiple nodes, and keeps serving data when a node fails, illustrating partitioning, replication, and horizontal scale. The example 7 module for this chapter summarizes that pattern.

## Slide 6 — Example 12.8 — Cassandra for Multi-Datacenter Writes

Example 12.8 positions Cassandra for write-heavy global apps. Apache Cassandra is a distributed NoSQL store built for high write throughput and multi-datacenter availability when horizontal scale matters more than single-key ACID transactions. The example 8 module for this chapter frames that write-oriented design.

## Slide 7 — Example 12.9 — Kafka for Real-Time Event Streams

Example 12.9 uses Kafka as the streaming backbone. Apache Kafka ingests and buffers event streams with durable, partitioned logs so analytics and services can consume the same feed at scale. The example 9 module for this chapter covers that event-stream role.

## Slide 8 — Patterns that recur

Together, HDFS, Cassandra, and Kafka illustrate partitioning, replication, and streaming patterns that recur throughout later distributed-system topics. File blocks, write-optimized tablet stores, and durable logs are complementary layers rather than competing single answers for every workload.

## Slide 9 — Takeaways

Distributed systems store and process data across nodes with partitioning, replication, coordination, and fault tolerance. HDFS shows block placement and replica recovery. Cassandra targets multi-datacenter write scale. Kafka provides durable partitioned logs for real-time consumers. These patterns prepare the CAP and consistency discussion that follows.

## Slide 10 — Next

The next part covers the CAP theorem, sharding and replication patterns, and when strong versus eventual consistency is appropriate for the workload.
