# Example 12.10 — Sharding by Geography or Customer ID

**Chapter:** 12  
**Label:** `eg:12.10`  
**Source:** `author/chapter12.tex`  
**Section:** `sec:12.2.8` — Data Sharding and Replication

## Learning objective

Demonstrate hash and geography sharding to spread write load across nodes.

## Chapter context

Section 12.2.8 introduces horizontal sharding to spread keys across cluster nodes. Customer tables are often sharded by geography or customer ID so each node owns a slice of keys and write load spreads across the cluster.

## What this example shows

Customer tables are often sharded by geography or customer ID so each node owns a slice of keys and write load spreads across the cluster.

## Key terms

- **Sharding** — Splitting keys across nodes so write/read load spreads horizontally.

## What you should learn

### From the code / process
- Hash customer_id with MD5 and mod n_shards for stable shard assignment.
- Compare load counts per shard—imbalance suggests more shards or better keys.
- Geography sharding maps explicit regions (us-east, eu) to shard IDs.

### From the output / result
- Inspect shard assignments and load counts—each node should own a predictable key slice.

## Contents

| File | Role |
|------|------|
| `main.py` | Hash and geography sharding demonstration |
| `install.sh` | Checks that `python3` is available |
| `run.sh` | Runs `python3 main.py` |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+ (standard library only)

## Setup

```bash
cd modules/chapter12/example10
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Hash sharding by customer_id across 4 nodes:

customer_id  shard
c_1001           2
c_1002           3
c_2044           3
c_3110           0
c_4500           2
c_4501           3

Load per shard: {0: 1, 2: 2, 3: 3}

Geography sharding (explicit region -> shard):
  us-east  -> shard 0
  us-west  -> shard 1
  eu       -> shard 2
  apac     -> shard 3

Each node owns a slice of keys so write load spreads across the cluster.
```

## How to interpret the result

Stable hashing keeps each customer on one node; geography sharding colocates regional traffic—pick the key that matches your query and compliance pattern.

## Try it / Reflect

- Which shard gets customer_id c_9999 under hash mod 4?

## Related examples

- `eg:12.8` — Horizontal scale pattern.
- `eg:12.7` — HDFS partitioning.

## Notes

- Standard-library Python sharding demo; MD5 used for stable teaching hashes only.
