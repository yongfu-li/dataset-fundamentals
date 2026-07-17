#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 1.15 — E-Commerce Dataset"

cat <<'EOF'
Looking at data before modeling can surface patterns a model would otherwise miss.
Example: an e-commerce sales log may show a seasonal spike around holidays.
That pattern should shape which features get engineered (e.g., days-to-holiday).
See Examples 1.16 and 1.20 for the concrete EDA steps (head, describe, missingness, histogram).
EOF
