#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.9 — Automated Cold-Room Temperature Logging"
cat <<'EOF'
Automate when humans cannot hit the required cadence:
- Cold-room temperature logged every minute by wired sensors
- Still need alert thresholds and missing-reading policy
- Coexists with manual aisle audits (Example 2.8)
EOF
