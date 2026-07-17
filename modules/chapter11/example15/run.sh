#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

echo "Running Example 11.15 — Contrastive Pretraining Then Fine-Tune"
cat <<'EOF'
Contrastive pretrain → fine-tune:
- Learn representations from unlabeled data first
- Fine-tune on a small labeled set
- Cuts early dependence on expensive annotations
EOF
