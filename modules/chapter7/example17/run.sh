#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.17 — Confirmation Bias in Predictive Policing"
cat <<'EOF'
Confirmation bias — predictive policing:
- Dataset dominated by over-policed areas encodes the designers' expectations
- Model 'confirms' that certain groups are crime-prone; patrols follow; data worsens
- Self-fulfilling prophecy that must be broken at collection, not just modeling
EOF
