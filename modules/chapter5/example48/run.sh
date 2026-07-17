#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.48 — Label Encode Ordinal Size"
cat <<'EOF'
For a "Size" column with categories ["Small", "Medium", "Large"], label encoding assigns: Small = 0 Medium = 1 Large = 2
EOF
