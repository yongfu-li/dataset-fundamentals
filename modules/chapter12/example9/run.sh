#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.9 — Kafka for Real-Time Event Streams"
cat <<'EOF'
Kafka streams:
- Durable, partitioned event logs
- Many consumers share one feed at scale
- Backbone for real-time analytics and services
EOF
