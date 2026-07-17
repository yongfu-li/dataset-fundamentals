#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.41 — Auto-Generated Training Metadata"
python3 -m json.tool "training_metadata.json"
