#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 10.18 — GDPR-Compliant Synthetic Patients"
cat <<'EOF'
GDPR-aware synthetic sharing:
- Synthetic cohorts for external benchmarking
- Identifiable EU records stay with the controller
- Residual identifiability — not the word 'synthetic' — sets the legal regime
EOF
