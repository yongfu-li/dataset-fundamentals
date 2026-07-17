#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.7 — Utility--Privacy Tension in Personal Predictions"
cat <<'EOF'
Utility–privacy tension:
- Scoring health risk or creditworthiness can improve service allocation
- Underlying histories are sensitive
- Without minimization, access control, and purpose limits, the same features that raise utility become levers for harm
EOF
