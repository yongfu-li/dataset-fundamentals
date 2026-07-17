#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.6 — Diversity Sampling Across Review Clusters"
cat <<'EOF'
Diversity sampling:
- Draw reviews from multiple clusters, not only uncertain extremes
- Include subtle/mixed sentiment so the model generalizes
- Counters uncertainty-only skew toward hard cases
EOF
