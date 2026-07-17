#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.6 — Facial Recognition System"
cat <<'EOF'
Sampling bias — facial recognition:
- Training mostly on light-skinned faces starves the model of diverse examples
- Result: systematically worse recognition for darker skin tones
- Remedy is representative collection, not post-hoc tuning alone
EOF
