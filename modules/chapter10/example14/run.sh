#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 10.14 — Synthetic Fraud Transaction Patterns"
cat <<'EOF'
Synthetic fraud patterns:
- Card-not-present sequences with odd categories and velocity spikes
- More positives than scarce historical fraud labels
- Evaluate lift on real held-out fraud, not synthetic-only scores
EOF
