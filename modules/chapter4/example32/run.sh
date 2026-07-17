#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 4.32 — Annotator Audit Versus Model Test"
cat <<'EOF'
Annotator audit vs model test:
- Held-out review batch: precision 0.92, recall 0.81 against gold set
- Those figures evaluate the labeler
- Detector metrics on a test split answer a different question
Do not confuse annotation QC with model evaluation.
EOF
