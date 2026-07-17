#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.28 — Majority Vote on Crowdsourced Sentiment"
cat <<'EOF'
Crowdsourced majority vote:
- Three labels: positive, positive, negative → majority = positive
- Gold-item checks and qualification tests limit random or adversarial workers
Scales simple schemas; still needs QC and fair labor practices.
EOF
