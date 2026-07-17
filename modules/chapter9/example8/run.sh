#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.8 — Crowdsourcing Fraud-Pattern Review"
cat <<'EOF'
Crowd-scale fraud review:
- Millions of transactions scored on amount, location, frequency
- Human judgment supplements rules on ambiguous patterns
- Real-time flagging prevents impact before it reaches customers
EOF
