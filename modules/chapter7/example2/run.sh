#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.2 — Gender Shades Project"
cat <<'EOF'
Gender Shades measurement evidence:
- Commercial facial analysis systems were far less accurate on darker-skinned and female faces
- Gap attributed largely to underrepresentation in training data
- Practice rule: report subgroup error rates before deployment, not only overall accuracy
EOF
