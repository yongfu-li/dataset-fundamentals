#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.10 — MNAR Income Self-Censoring"
cat <<'EOF'
If people with very high incomes are less likely to disclose them, missingness depends on the unobserved value itself (MNAR). Standard deletion or mean imputation can understate income and require specialized correction.
EOF
