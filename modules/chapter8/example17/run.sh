#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.17 — Schema.org Dataset Vocabulary"
python3 -m json.tool "metadata.jsonld"
