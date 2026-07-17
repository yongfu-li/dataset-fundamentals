#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.10 — Simple Random Draw from an Employee Roster"
cat <<'EOF'
Simple random sample when the frame is complete:
- Draw 200 of 2,000 employee IDs uniformly at random
- Equal inclusion probability supports generalization (if response is high)
- Switch to stratification when subgroup visibility is required
EOF
