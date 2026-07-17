#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.4 — Avro and ORC for Streams and Hive"
cat <<'EOF'
Avro vs ORC:
- Avro: row-oriented, Kafka streams, schema evolution
- ORC: columnar, Hive/Hadoop read-heavy warehouses
- Match format to stream-write vs analytic-read
EOF
