#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.25 — Labeling Outliers in Transactions"
cat <<'EOF'
Outlier transaction labels:
- Flag unusual payment rows (amount, location, velocity)
- Suspect positives for fraud models under human review
Rare-event labeling, not customer-value bands.
EOF
