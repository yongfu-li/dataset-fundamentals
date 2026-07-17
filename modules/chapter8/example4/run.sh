#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.4 — Transaction Dataset Version History"
cat <<'EOF'
- Semantic labels communicate the scale of change.
- A reversible history supports troubleshooting, concurrent work, and exact reruns.
EOF
