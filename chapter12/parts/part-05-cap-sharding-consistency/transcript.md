# Chapter 12 — CAP, sharding, and consistency — transcript

**Clip id:** part-05-cap-sharding-consistency
**Estimated duration:** 7 minutes
**Sources:** `author/chapter12.tex` (§12.2.7–12.2.10), `modules/chapter12/example10/`, `modules/chapter12/example11/`, `modules/chapter12/example13/`

## Slide 1 — Chapter 12 — CAP, sharding, and consistency

Distribution introduces trade-offs among consistency, availability, and partition tolerance. This part covers the CAP theorem, sharding and replication patterns, and when strong versus eventual consistency is appropriate.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to state the CAP theorem and why partitions force a consistency-versus-availability choice; explain sharding and replication for scale and fault tolerance; contrast strong and eventual consistency with Examples 12.11 and 12.13; and relate those choices to workload cost of stale reads versus temporary unavailability.

## Slide 3 — The CAP theorem

The CAP theorem states that a distributed system cannot guarantee consistency, availability, and partition tolerance simultaneously. Consistency means every read returns the most recent write. Availability means every request receives a response even if some nodes are down. Partition tolerance means the system continues when the network splits nodes apart.

## Slide 4 — CP versus AP under partition

Because partitions are unavoidable in real networks, practical datastores sit on a partition-tolerant edge and choose either consistency or availability when a partition occurs. Under partition, CP systems may reject writes until replicas agree, whereas AP systems accept traffic and reconcile later. The choice depends on whether stale reads or temporary unavailability is more costly for the workload.

## Slide 5 — Sharding and Example 12.10

Data sharding partitions data across servers to improve scalability, fault tolerance, and performance. Example 12.10 shows a common sharding key choice: customer tables are often sharded by geography or customer ID so each node owns a slice of keys and write load spreads across the cluster. The example 10 module for this chapter summarizes that keying pattern. Replication duplicates data across nodes or data centers so another replica can take over if one node fails.

## Slide 6 — Example 12.11 — Strong Consistency in Financial Ledgers

Strong consistency guarantees that any read returns the most recent write regardless of which replica is accessed. Example 12.11 requires that guarantee for balances: in payments and ledger systems, strong consistency is preferred so concurrent transfers cannot leave accounts in conflicting states visible to different clients. The example 11 module for this chapter covers that ledger case.

## Slide 7 — Example 12.13 — Eventual Consistency in DynamoDB and Cassandra

Eventual consistency sacrifices immediate agreement for availability and partition tolerance: writes propagate to other nodes, but nodes may temporarily disagree. Example 12.13 lists stores that favor availability under partition. Amazon DynamoDB and Apache Cassandra commonly emphasize availability and partition tolerance with eventual consistency tunable by client read and write quorums. The example 13 module for this chapter frames that availability-first pattern.

## Slide 8 — Choosing a consistency model

For many web and social applications, temporary discrepancies are acceptable and eventual consistency is a useful trade-off. E-commerce platforms, content delivery networks, and social media often favor availability and throughput. Conversely, sensitive financial or health-related data often require strong consistency to prevent critical errors. Design hinges on application needs and the consistency, availability, and scalability trade-offs already surveyed.

## Slide 9 — Takeaways

CAP says partitions force a choice between consistency and availability in practice. Sharding spreads keys; replication preserves availability after failures. Strong consistency fits ledgers and similar integrity-critical work; eventual consistency fits availability-first web and social stores. Match the model to whether stale reads or downtime hurts more.

## Slide 10 — Next

The next part shifts from storage mechanics to dataset versioning at platform scale: DVC remotes on object storage, Pachyderm partition recompute, Delta Lake time travel, and Iceberg snapshots—distinct from Chapter 8 team-scale Git workflows.
