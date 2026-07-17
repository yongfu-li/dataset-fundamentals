#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.5 — Wearables as Continuous Health Data Sources"
cat <<'EOF'
Wearables as continuous sources:
- Heart rate, activity, and sleep streamed continuously
- Temporal resolution no periodic clinic visit can match
- Requires streaming-capable pipelines, not form processing
EOF
