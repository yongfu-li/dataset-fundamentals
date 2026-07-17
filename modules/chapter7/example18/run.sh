#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.18 — Multiple Manifestations of Dataset Bias"
cat <<'EOF'
Bias manifests in multiple places:
- Representation: how gender, race, age are distributed
- Process: how data is collected, processed, labeled, aggregated
- Detection must combine metrics AND visualizations, one probe per bias type
EOF
