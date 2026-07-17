#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.8 — Purchase Amount Data-Dictionary Entry"
python3 -m json.tool "data_dictionary.json"
