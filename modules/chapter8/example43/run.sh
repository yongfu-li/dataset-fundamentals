#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Running Example 8.43 — DVC Stages in a Sensor Pipeline"
echo "--- dvc.yaml ---"
sed -n '1,80p' "dvc.yaml"
