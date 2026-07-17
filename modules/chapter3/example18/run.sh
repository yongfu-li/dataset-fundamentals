#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.18 — Selection Bias in Healthcare AI System"
cat <<'EOF'
Selection bias in healthcare AI:
- Trained mainly on one demographic slice
- Performance degrades for groups scarce in the training set
- The model never saw a representative sample of patients it will score
EOF
