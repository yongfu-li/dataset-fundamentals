#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 7.9 — Medical Instrument Calibration"
cat <<'EOF'
Measurement bias — instrument calibration:
- Miscalibrated blood-pressure or cholesterol instruments shift all readings systematically
- Biased measurements produce biased conclusions downstream
- Record calibration status as dataset metadata
EOF
