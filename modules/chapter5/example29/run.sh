#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.29 — Irrelevant Color and Pet Features"
cat <<'EOF'
In a dataset predicting customer churn, columns like "favorite color" or "pet type" are unlikely to relate to churn. They add noise and distract feature selection from useful predictors.
EOF
