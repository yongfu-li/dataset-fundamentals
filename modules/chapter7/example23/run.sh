#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.23 — Proxy Correlation via Name Features"
cat <<'EOF'
Proxy features:
- Names (and zip codes, schools) correlate with race/ethnicity
- Models inherit bias through proxies even with sensitive columns removed
- Screen features via correlation analysis before training
EOF
