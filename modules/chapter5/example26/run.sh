#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.26 — Log Income Compresses Right Tail"
cat <<'EOF'
Applying a log transform to annual income compresses the long right tail so means, regressions, and scatter plots are less dominated by a few very large values.
EOF
