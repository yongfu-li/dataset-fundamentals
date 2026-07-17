#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 6.9 — Geography and Purchase Frequency"
cat <<'EOF'
Geography–purchase cue:
Observation: frequent purchasers cluster in one region.
Hypothesis: location is associated with purchase frequency.
Next: check coverage/confounders and test the association formally.
EOF
