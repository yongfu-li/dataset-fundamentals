#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.39 — Mean Impute Missing Age"
cat <<'EOF'
Filling missing age with the mean age of observed respondents is quick but shrinks variance and ignores relationships with income, education, or outcome variables.
EOF
