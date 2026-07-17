#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 10.5 — Demographic Bias in GAN Training Data"
cat <<'EOF'
Bias inheritance in GANs:
- Skewed training demographics flow into generated samples
- Healthcare/hiring outcomes can become unfair
- Audit source and synthetic cohorts together
EOF
