#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.30 — Codebook for Categorical Labels"
python3 -m json.tool "codebook.json"
