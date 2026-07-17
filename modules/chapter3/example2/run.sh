#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.2 — Healthcare AI System"
cat <<'EOF'
Healthcare AI — do no harm:
- Underrepresented group in training → less accurate predictions → misdiagnosis risk
- Uphold non-maleficence: audit performance by subgroup, improve representation, add safeguards before deployment
EOF
