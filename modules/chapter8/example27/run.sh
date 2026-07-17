#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.27 — GitHub Actions Dataset Update Pipeline"
echo "--- dataset-update.yml ---"
sed -n '1,80p' "dataset-update.yml"
