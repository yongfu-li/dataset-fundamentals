#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.19 — Real-Time Logistics Rerouting"
cat <<'EOF'
Real-time logistics rerouting:
- Trucks tracked live; routes changed on current traffic
- Value measured in fuel and delivery-time savings
- Each vehicle is a continuous stream to manage
EOF
