#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.17 — Transcription on Customer Service Call"
cat <<'EOF'
Call transcription:
- Listen to customer-service call
- Produce time-aligned transcript
Training target for automatic speech recognition.
EOF
