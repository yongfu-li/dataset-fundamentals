#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 3.36 — Healthcare Prediction Privacy"
cat <<'EOF'
Healthcare prediction privacy:
- Models ingest genetic or detailed clinical histories
- Exposure risk if outputs, embeddings, or poorly de-identified releases leak
- Even when the goal is population health improvement
- Clinical scores must still preserve clinician judgment, informed consent, and patient values
EOF
