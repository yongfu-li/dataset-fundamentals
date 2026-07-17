#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.23 — Activity Recognition on Video"
cat <<'EOF'
Activity recognition:
- Sports clip labeled “pass”, “shot”, or “foul” over a time interval
- Even when individual players already have per-frame boxes
Clip-level behavior schema.
EOF
