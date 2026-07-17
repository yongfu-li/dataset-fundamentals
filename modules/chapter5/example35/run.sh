#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.35 — Higher Loss Weight on Minority Class"
cat <<'EOF'
Setting class weights so misclassifying a fraud transaction costs more than misclassifying a legitimate one pushes the decision boundary toward catching minority cases.
EOF
