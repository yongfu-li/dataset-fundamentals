#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.77 — Fair Encoding of Clinical Features"
cat <<'EOF'
Before predicting readmission, encoding age into clinically meaningful bands and documenting blood-pressure scaling helps clinicians audit predictions across diverse patient groups.
EOF
