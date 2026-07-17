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
    counts: Counter[int] = Counter()
    for cid in customers:
        shard = shard_for_customer(cid, n_shards)
        counts[shard] += 1
        print(f"{cid:<12}{shard:>6}")
    print(f"\nLoad per shard: {dict(sorted(counts.items()))}")

    region_map = {"us-east": 0, "us-west": 1, "eu": 2, "apac": 3}
    print("\nGeography sharding (explicit region -> shard):")
    for region, shard in region_map.items():
        print(f"  {region:<8} -> shard {shard}")
    print()
    print("Each node owns a slice of keys so write load spreads across the cluster.")


if __name__ == "__main__":
    main()
