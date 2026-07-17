#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 6.5 — Sales and Weather Hypothesis"
cat <<'EOF'
Sales–weather EDA:
Observation: sales performance varies with weather.
Hypothesis: seasonal conditions influence customer behavior.
Next: test on suitable data and account for confounders; correlation alone is not confirmation.
EOF
