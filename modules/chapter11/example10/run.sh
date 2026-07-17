#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.10 — Active Learning for Driving Perception"
cat <<'EOF'
Driving perception AL:
- Query occluded/weather-degraded frames
- Skip labeling every easy fleet frame
- Learn rare hard cases first
EOF
