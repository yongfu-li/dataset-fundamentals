#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 5.42 — Near Duplicate Customer Names"
cat <<'EOF'
The same customer may appear as "John Smith" and "John A. Smith." Fuzzy matching and deduplication ensure each person is counted once in retention and lifetime-value metrics.
EOF
