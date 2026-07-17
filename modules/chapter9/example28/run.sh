#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.28 — Real-Time Twitter Sentiment for Launch Feedback"
cat <<'EOF'
Real-time sentiment pipeline:
- Collect launch tweets via streaming API
- Kafka/Flume transport; TextBlob/VADER classify sentiment
- Dashboards show public perception minute by minute
EOF
