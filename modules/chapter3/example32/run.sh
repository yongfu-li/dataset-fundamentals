#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.32 — Model Testing for Bias"
cat <<'EOF'
Justice lens — model testing for bias:
- Before deploying automated hiring ranking: audit subgroup error rates and adverse impact
- Delay launch if disparities cannot be justified and mitigated
- Even when the tool would cut recruiting cost
EOF
