#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.22 — Election-Week Sentiment Collection"
cat <<'EOF'
Social collection needs API + filters + retention:
- Stream candidate mentions via official API
- Store text, timestamps, engagement; apply bot filters first
- Cap retention under policy before leaders see aggregates
EOF
