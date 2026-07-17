# Chapter 12 — Formats and storage types — transcript

**Clip id:** part-03-formats-and-storage-types
**Estimated duration:** 7 minutes
**Sources:** `author/chapter12.tex` (§12.2.3–12.2.4), `modules/chapter12/example3/`, `modules/chapter12/example4/`, `modules/chapter12/example5/`, `modules/chapter12/example6/`

## Slide 1 — Chapter 12 — Formats and storage types

Choosing a database is only half the storage decision. Columnar formats and object versus block media determine how analytics and low-latency services perform. This part covers Parquet, Avro, ORC, and when object or block storage fits.

## Slide 2 — Learning objectives

By the end of this part, learners should be able to explain why Parquet suits columnar analytics; contrast Avro row encoding with ORC for Hive-style warehouses; distinguish object and block storage models; and apply Examples 12.3 through 12.6 to format and media choices.

## Slide 3 — Why storage formats matter

For efficiently storing large datasets in distributed systems or cloud platforms, formats such as Parquet, Avro, and ORC are widely used. Format choice affects compression, schema evolution, and how much data a query must read from disk or object storage.

## Slide 4 — Example 12.3 — Parquet Columnar Analytics Format

Example 12.3 highlights Parquet for analytical scans. Parquet stores data by column with compression and encoding suited to Spark and Hadoop analytics, so queries read only needed columns and cut input and output. The example 3 module for this chapter summarizes that columnar analytics pattern.

## Slide 5 — Example 12.4 — Avro and ORC for Streams and Hive

Example 12.4 contrasts Avro row encoding with ORC columnar Hive storage. Avro is a row-oriented format common in Kafka-style streaming with schema evolution; ORC is a columnar format optimized for Hive and other read-heavy Hadoop warehouses. The example 4 module for this chapter frames that contrast.

## Slide 6 — Object storage model

Object storage systems, such as Amazon S3 or Google Cloud Storage, treat data as objects in a flat namespace. This model is highly scalable and suitable for unstructured data such as videos, images, and backups. Object storage is optimized for large-scale archiving and retrieval over an HTTP-style API rather than block device semantics.

## Slide 7 — Example 12.5 — Object Storage for Unstructured Archives

Example 12.5 places object storage in large unstructured workloads. Object stores keep objects in a flat namespace with high durability, fitting media, backups, and lakehouse files that grow without block-device provisioning. The example 5 module for this chapter covers that archive pattern.

## Slide 8 — Block storage and Example 12.6

Block storage divides data into blocks and provides low-latency access, as with Amazon Elastic Block Store or Azure block volumes. It is ideal for transactional systems that need fast reads and writes, such as database applications. Example 12.6 shows block volumes attaching low-latency disks to virtual machines running transactional databases that need POSIX-like input and output rather than object get and put semantics. The example 6 module for this chapter summarizes that low-latency database case.

## Slide 9 — Putting formats and media together

In practice, teams place lakehouse files, media, and backups on object storage and attach block volumes only where databases or virtual machines need low-latency block input and output. Columnar formats such as Parquet and ORC sit on object stores for analytics, while Avro often rides streaming buses before landing in lakes or warehouses.

## Slide 10 — Takeaways

Parquet favors columnar analytics with selective column reads. Avro fits streaming with schema evolution; ORC fits read-heavy Hive warehouses. Object storage scales unstructured archives and lakehouse files; block storage serves low-latency transactional databases. Format and media choices should follow query and latency needs, not a single default.

## Slide 11 — Next

The next part introduces distributed systems characteristics and concrete examples: HDFS partitioning and replication, Cassandra for multi-datacenter writes, and Kafka for real-time event streams.
