#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.76 — Prefer Interpretable Credit Features"
cat <<'EOF'
A credit model built on "total debt" and "credit utilization" is easier to explain to applicants and regulators than one trained on hundreds of opaque transaction aggregates.
EOF
