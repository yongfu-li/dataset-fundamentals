#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.13 — Re-Identification from Location Patterns"
cat <<'EOF'
Re-identification from location patterns:
- Sparse location histories without names can still be joined to public records or social posts
- Stronger protection: coarser aggregation, differential privacy noise, or keep raw traces off shared servers
Anonymization is a management goal, not a guarantee.
EOF
