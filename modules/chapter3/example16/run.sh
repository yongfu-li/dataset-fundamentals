#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.16 — Federated Learning for On-Device Keyboard Prediction"
cat <<'EOF'
Federated learning for on-device keyboard prediction:
- Train locally; send only update summaries for aggregation
- Do not upload raw typed text
- Still need secure aggregation and monitoring so updates do not reconstruct sensitive phrases
EOF
