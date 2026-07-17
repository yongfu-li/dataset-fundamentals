#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.7 — Predictive Policing Resource Allocation"
cat <<'EOF'
Sampling bias — predictive policing:
- Training data reflects where police looked, not only where crime happened
- Model sends more resources to already over-policed areas
- Feedback loop reinforces existing law-enforcement disparities
EOF
