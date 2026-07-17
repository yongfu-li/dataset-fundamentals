#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.19 — Retail Transaction Documentation Template"
echo "--- DATASET.md ---"
sed -n '1,80p' "DATASET.md"
echo "--- data_dictionary.csv ---"
sed -n '1,80p' "data_dictionary.csv"
