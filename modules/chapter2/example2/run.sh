#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.2 — Primary Collection in a Clinical Monitoring Study"
cat <<'EOF'
Primary data = first-hand, protocol-governed collection:
- Here: vitals every 4h + nurse pain scores for post-op recovery
- Protocol fixes devices, intervals, and inclusion criteria
- Trade-off: control and freshness vs effort and ethics overhead
EOF
