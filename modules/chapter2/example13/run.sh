#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.13 — Systematic Draw from a Membership Directory"
cat <<'EOF'
Systematic sample: random start + every k-th unit:
- Example: k=10, start=4 → members 4, 14, 24, … from 500
- Watch for periodicity in the ordered frame (e.g., chapter blocks)
- Alphabetical order is usually safer than cyclic groupings
EOF
