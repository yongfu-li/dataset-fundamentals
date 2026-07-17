# Chapter 12 — Runnable Examples

Extracted from `author/chapter12.tex` (*Scalable Data Management*).

Every module's `README.md` follows the enriched pedagogical template from the
`book-examples` skill: learning objective, chapter context, key terms (where
applicable), decomposed "what you should learn" bullets, real captured output
under *Expected output*, interpretation, a *Try it / Reflect* prompt, and
*Related examples* cross-links — so a reader can learn the concept from the
README alone, without the book.

The manuscript has no code listings. Examples 12.1–12.9 and 12.11–12.30 are
**conceptual** modules covering scalable storage, CAP/consistency, lakehouse
versioning, lineage, and case studies. Example 12.10 is a **code** module with
a standard-library Python demo of hash and geography sharding.

| Module | Label | Title | Type | Runnable |
|--------|-------|-------|------|----------|
| [example1](example1/) | `eg:12.1` | NoSQL for Web Mobile and IoT | conceptual | partial |
| [example2](example2/) | `eg:12.2` | Cloud Storage Across AWS GCP Azure | conceptual | partial |
| [example3](example3/) | `eg:12.3` | Parquet Columnar Analytics Format | conceptual | partial |
| [example4](example4/) | `eg:12.4` | Avro and ORC for Streams and Hive | conceptual | partial |
| [example5](example5/) | `eg:12.5` | Object Storage for Unstructured Archives | conceptual | partial |
| [example6](example6/) | `eg:12.6` | Block Storage for Low-Latency Databases | conceptual | partial |
| [example7](example7/) | `eg:12.7` | HDFS Partitioning and Replication | conceptual | partial |
| [example8](example8/) | `eg:12.8` | Cassandra for Multi-Datacenter Writes | conceptual | partial |
| [example9](example9/) | `eg:12.9` | Kafka for Real-Time Event Streams | conceptual | partial |
| [example10](example10/) | `eg:12.10` | Sharding by Geography or Customer ID | runnable (Python) | yes |
| [example11](example11/) | `eg:12.11` | Strong Consistency in Financial Ledgers | conceptual | partial |
| [example12](example12/) | `eg:12.12` | Spanner and CockroachDB Strong Consistency | conceptual | partial |
| [example13](example13/) | `eg:12.13` | Eventual Consistency in DynamoDB and Cassandra | conceptual | partial |
| [example14](example14/) | `eg:12.14` | DVC Remotes on Object Storage | conceptual | partial |
| [example15](example15/) | `eg:12.15` | Pachyderm Partition Recompute | conceptual | partial |
| [example16](example16/) | `eg:12.16` | Delta Lake Time Travel on Object Stores | conceptual | partial |
| [example17](example17/) | `eg:12.17` | Iceberg Snapshot Rollback | conceptual | partial |
| [example18](example18/) | `eg:12.18` | Rollback After Corrupt Preprocessing | conceptual | partial |
| [example19](example19/) | `eg:12.19` | Lineage Metadata on Schema and Steps | conceptual | partial |
| [example20](example20/) | `eg:12.20` | Automated Lineage Capture on Model Runs | conceptual | partial |
| [example21](example21/) | `eg:12.21` | Visualizing Transform Chains for Debug | conceptual | partial |
| [example22](example22/) | `eg:12.22` | Cross-Platform Lineage Gaps | conceptual | partial |
| [example23](example23/) | `eg:12.23` | Netflix Scale Streaming Architecture | conceptual | partial |
| [example24](example24/) | `eg:12.24` | Spotify Real-Time Analytics Pipelines | conceptual | partial |
| [example25](example25/) | `eg:12.25` | Healthcare Imaging at Scale | conceptual | partial |
| [example26](example26/) | `eg:12.26` | Serverless Compute Over Object Storage | conceptual | partial |
| [example27](example27/) | `eg:12.27` | Neo4j for Relationship-Heavy Graphs | conceptual | partial |
| [example28](example28/) | `eg:12.28` | InfluxDB for Timestamped Metrics | conceptual | partial |
| [example29](example29/) | `eg:12.29` | Kafka High-Throughput Messaging | conceptual | partial |
| [example30](example30/) | `eg:12.30` | NiFi Visual Dataflow Automation | conceptual | partial |

## Quick start

```bash
cd modules/chapter12/example10
bash install.sh
bash run.sh
```
