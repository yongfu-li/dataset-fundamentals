#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.13 — Eventual Consistency in DynamoDB and Cassandra"
cat <<'EOF'
Eventual consistency:
- DynamoDB/Cassandra favor availability under partition
- Consistency is eventual; quorums tune strength
- Right for high-availability web/social, not ledgers
EOF
