#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.26 — Equifax Breach Costs"
cat <<'EOF'
Equifax breach costs:
- Following Example 3.23’s unpatched-system failure
- Hundreds of millions of dollars in settlements, remediation, and related costs
- Delayed patching of high-value identity stores becomes a balance-sheet event
EOF
