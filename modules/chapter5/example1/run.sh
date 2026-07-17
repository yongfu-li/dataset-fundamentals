#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.1 — Missing Target Values in Classification"
cat <<'EOF'
If a fraud-detection table leaves the fraud/not-fraud field blank for many rows, supervised training either drops those rows or invents labels, both of which can bias decision boundaries.
EOF
