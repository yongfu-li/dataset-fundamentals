#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.20 — Securing Wearable Health Edge Devices"
cat <<'EOF'
Securing health wearables:
- Vital signs are sensitive data: encrypt end-to-end
- Secure boot and encrypted storage on the edge device
- HIPAA/GDPR duties travel with the data
EOF
