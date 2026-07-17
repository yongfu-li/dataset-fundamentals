#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.37 — Outcome Fairness in Predictive Policing"
cat <<'EOF'
Outcome fairness — predictive policing:
- Predictions must not disproportionately target minority communities
- Measured with demographic parity, equalized odds, and similar metrics
- Complements (and can conflict with) procedural fairness
EOF
