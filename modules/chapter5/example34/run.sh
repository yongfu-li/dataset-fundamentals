#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.34 — Oversample Fraud Rows"
cat <<'EOF'
Duplicating or oversampling the rare fraud class gives the learner more minority examples per epoch, improving recall even though the raw database remains imbalanced.
EOF
