#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.4 — Real-Time Warehouse Sensor Stream"
cat <<'EOF'
Real-time collection = high-frequency streams + reliable pipeline:
- Example: temp/humidity every 30s in a cold-chain warehouse
- Must handle volume, missing packets, and clock skew
- Alerts only work if the stream's failure modes are designed in
EOF
