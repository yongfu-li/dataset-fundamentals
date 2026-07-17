#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.50 — One Hot Encode Gender for Churn"
cat <<'EOF'
For churn prediction, one-hot encoding gender avoids implying order between categories. Label encoding is better reserved for truly ordinal fields such as satisfaction ratings from 1 to 5.
EOF
