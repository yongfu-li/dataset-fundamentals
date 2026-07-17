#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.24 — Spotify Real-Time Analytics Pipelines"
cat <<'EOF'
Spotify-style analytics:
- Stream listening events to cloud storage/analytics
- Recommendations update without nightly-only warehouses
- SQL + NoSQL + Spark absorb traffic spikes
EOF
