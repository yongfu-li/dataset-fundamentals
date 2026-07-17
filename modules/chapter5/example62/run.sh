#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.62 — Rare Fraud Class Distorts Accuracy"
cat <<'EOF'
When fraudulent transactions are a tiny fraction of all events, a majority-class classifier can report high accuracy while failing to detect almost every fraud case.
EOF
