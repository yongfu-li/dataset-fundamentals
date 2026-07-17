#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.25 — Streaming Stock Sensor and Social Feeds"
cat <<'EOF'
Streaming sources:
- Stock feeds, IoT sensors, social updates arrive continuously
- Kafka/Spark-style systems process data as it arrives
- Batch processing adds lag these use cases cannot afford
EOF
