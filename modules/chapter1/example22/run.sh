#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 1.22 — Wearable Devices Dataset"

cat <<'EOF'
Wearable sensors emit continuous time-series data: heart rate, activity, sleep.
This differs from episodic EHR rows captured only at clinic visits (Example 1.2).
Goal: flag abnormal trends between visits, before an acute event occurs.
Complements static clinical tables rather than replacing them.
EOF
