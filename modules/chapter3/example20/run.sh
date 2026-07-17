#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.20 — COMPAS Risk Scores"
cat <<'EOF'
COMPAS risk scores:
- Disparate error rates across racial groups under common thresholds
- Reflect disparities already present in historical justice data
- Overall accuracy is not a fairness certificate
EOF
