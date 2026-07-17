#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 6.3 — Missing Feature Bias Risk"
cat <<'EOF'
Missing-feature risk:
- Detect and quantify the missing value.
- Check whether missingness clusters by group or condition.
- Document it and choose a justified repair; silent omission can bias results.
EOF
