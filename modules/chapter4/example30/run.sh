#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.30 — Inconsistent Class Names"
cat <<'EOF'
Inconsistent class names:
- Annotator A: “dog”
- Annotator B: “puppy” for young dogs
- Without a guideline collapsing those strings → training treats distinct categories; evaluation counts false disagreements
Fix with guidelines + audits.
EOF
