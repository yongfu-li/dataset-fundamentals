#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 9.15 — IoT Connectivity Options"
cat <<'EOF'
IoT connectivity options:
- Wi-Fi for powered home/office devices
- BLE for wearables; cellular for long-range mobility
- LPWAN for small, infrequent payloads across fields
EOF
