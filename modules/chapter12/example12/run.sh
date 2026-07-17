#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.12 — Spanner and CockroachDB Strong Consistency"
cat <<'EOF'
Spanner / CockroachDB:
- Strongly consistent distributed SQL
- Consensus protocols across regions
- Trade latency for global consistency
EOF
