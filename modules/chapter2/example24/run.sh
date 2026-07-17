#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 2.24 — Remote Monitoring for Chronic Heart Disease"
cat <<'EOF'
Healthcare remote monitoring = stream + safeguards:
- Wearables stream heart rate and activity to a dashboard
- Nurses act on anomalies only if encryption, access control, and consent exist
- Standardized identifiers keep care-team joins unambiguous
EOF
