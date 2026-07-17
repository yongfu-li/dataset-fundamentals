#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.25 — Combining Views for Bias Screening"
cat <<'EOF'
Bias screening by triangulation:
- Heatmap: which features correlate with sensitive attributes
- Bar chart: outcome counts/rates per group
- Scatter plot: joint feature-outcome patterns
Locate the imbalance visually, then confirm with formal tests
EOF
