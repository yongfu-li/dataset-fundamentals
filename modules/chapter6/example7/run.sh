#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 6.7 — Financial Transaction Outlier"
cat <<'EOF'
Financial outlier decision:
- Detect the extreme amount.
- Verify source and domain context.
- Correct if erroneous, exclude only with justification, or retain as the anomaly of interest.
EOF
