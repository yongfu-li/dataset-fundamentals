#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.30 — Hybrid Quality Control Pattern"
cat <<'EOF'
Hybrid QC pattern:
- Experts review a fixed percent of crowd labels weekly
- Systematic errors trigger guideline updates
- Next batch ships only after the fix
EOF
