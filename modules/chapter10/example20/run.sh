#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 10.20 — Over-Reliance in AV Training"
cat <<'EOF'
Over-reliance on synthetic AV data:
- Strong in simulation, weak on unseen jaywalking
- Scenario library gaps become deployment failures
- Augment real data; do not replace it
EOF
