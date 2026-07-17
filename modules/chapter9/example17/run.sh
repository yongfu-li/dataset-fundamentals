#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.17 — Smart Thermostat Local Reading"
cat <<'EOF'
Data generation stage:
- A thermostat records room temperature — the raw pipeline input
- Context (device, location, time) must be captured at the source
- Transmission, processing, and storage stages follow
EOF
