#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.22 — Warehouse Tracks and Activity"
cat <<'EOF'
Warehouse tracks and activity:
- Person tracks across frames
- Activity label: “picking” or “idle”
Operations analytics needs both tracking and clip-level behavior.
EOF
