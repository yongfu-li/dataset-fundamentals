#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.51 — Equal Width Age Bins"
cat <<'EOF'
If "Age" ranges from 18 to 80 and is split into four equal-width bins, each bin spans 15 years: Bin 1: 18-33 Bin 2: 34-49 Bin 3: 50-65 Bin 4: 66-80
EOF
