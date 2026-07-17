#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.17 — Bias in AI System"
cat <<'EOF'
Bias in AI systems:
- Trained on biased data → decisions that disproportionately harm underrepresented or historically mistreated groups
- Especially acute in hiring, criminal justice, and healthcare
- Errors change life chances, not only click-through rates
EOF
