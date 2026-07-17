#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.8 — Manual Shelf Audit in a Grocery Pilot"
cat <<'EOF'
Manual collection captures context sensors miss:
- Hourly aisle walks record out-of-stocks on a tablet
- Humans note temporary displays and damaged packaging
- Trade-off: richer judgment vs labor cost and limited cadence
EOF
