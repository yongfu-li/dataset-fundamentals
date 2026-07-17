#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.15 — Markdown Documentation Outline"
echo "--- DATASET.md ---"
sed -n '1,80p' "DATASET.md"
