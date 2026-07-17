#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.29 — Kafka High-Throughput Messaging"
cat <<'EOF'
Kafka messaging:
- High message rates across producers/consumers
- Backbone for fraud detection and live analytics
- Operational bus for pipeline automation
EOF
