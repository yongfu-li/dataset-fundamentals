#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.63 — Convert Currencies Before Modeling"
cat <<'EOF'
If revenue is recorded in dollars, euros, and pounds, convert every amount to one reference currency before training or comparing features across regions.
EOF
