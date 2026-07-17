#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 10.4 — Face-Recognition Validation Gap"
cat <<'EOF'
Validation gap — synthetic faces:
- Looks realistic but may miss lighting and occlusion variation
- Models then fail on real-world nuisance factors
- Validate on real held-out images, not synthetic-only tests
EOF
