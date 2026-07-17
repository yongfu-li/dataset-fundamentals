#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.47 — One Hot Encode Color Categories"
cat <<'EOF'
For a "Color" column with categories ["Red", "Blue", "Green"], one-hot encoding creates three binary columns: |c|c|c| Red & Blue & Green \\ 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \\
EOF
