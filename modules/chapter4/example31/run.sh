#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.31 — Low Kappa Triggers Guideline Revision"
cat <<'EOF'
Low kappa → guideline revision:
- NER pilot: κ ≈ 0.35 on organization spans
- Cause: unclear guideline on subsidiaries vs parent brands
- Action: revise examples, re-train annotators, then label the full corpus
Low IAA should stop scale-up, not be ignored.
EOF
