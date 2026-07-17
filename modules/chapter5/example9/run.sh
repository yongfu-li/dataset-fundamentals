#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.9 — MAR Income Nonresponse Pattern"
cat <<'EOF'
If lower-income participants are less likely to report income but the missingness does not depend on the unreported value itself, the pattern is missing at random (MAR). Multiple imputation or models that condition on observed covariates are often appropriate.
EOF
