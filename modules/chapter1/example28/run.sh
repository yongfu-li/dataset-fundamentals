#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 1.28 — Banking Transactions Dataset"

cat <<'EOF'
Inputs: transaction attributes (amount, merchant category, location, time since last purchase).
Labels: historical fraud outcomes on past transactions.
Process: train a classifier offline; score new transactions online, in near real time.
Stakes: accuracy/timeliness failures are costly either way (false blocks vs missed fraud).
EOF
