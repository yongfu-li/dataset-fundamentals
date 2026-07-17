#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 6.12 — Discrete Count Variables"
cat <<'EOF'
Discrete counts:
- Number of children
- Items purchased
- Cars in a parking lot
These take distinct whole-number values because they are counted.
EOF
