#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.31 — Recruitment Algorithm Perpetuating Gender Gaps"
cat <<'EOF'
Recruitment perpetuating gender gaps:
- Historical data encodes women's past exclusion from technical roles
- The model learns exclusion as a hiring signal and repeats it
- Mitigate at the data level: re-weighting, biased-feature removal (Section 7.6.1)
EOF
