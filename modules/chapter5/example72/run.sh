#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.72 — Rolling Window for Streaming Prices"
cat <<'EOF'
In a live trading feed, preprocessing may use only the most recent ten minutes of quotes to compute volatility features before each prediction.
EOF
