#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.21 — Traffic and Air-Quality Feeds Without a Shared Key"
cat <<'EOF'
Integration needs shared keys at collection time:
- Traffic and air-quality feeds from separate vendors
- Without station_id + clock policy, block-level joins fail
- "Integrated" dashboards require contracts, not hope
EOF
