#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.11 — Entrenched Societal Biases in Historical Records"
cat <<'EOF'
Historical bias:
- Data faithfully records a discriminatory past (judicial, hiring, lending records)
- Models trained on it project past inequities into new decisions
- Accuracy of collection does not equal fairness of content
EOF
