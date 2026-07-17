#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 12.11 — Strong Consistency in Financial Ledgers"
cat <<'EOF'
Strong consistency — ledgers:
- Concurrent transfers must not leave conflicting balances
- Prefer consistency over availability under partition
- Correctness first for payments
EOF
