#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.6 — Age Variable Description"
cat <<'EOF'
- A useful description states what the value measures and its unit.
- Clear variable meaning prevents silent misinterpretation.
EOF
