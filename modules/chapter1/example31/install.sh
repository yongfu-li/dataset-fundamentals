#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
command -v python3 >/dev/null 2>&1 || { echo "python3 is required" >&2; exit 1; }
python3 - <<'PY'
import importlib.util
import subprocess
import sys

deps = [
    ("pandas", "pandas"),
    ("numpy", "numpy"),
    ("sklearn", "scikit-learn"),
]
missing = [pkg for mod, pkg in deps if importlib.util.find_spec(mod) is None]
if missing:
    print("Installing:", ", ".join(missing))
    subprocess.check_call([sys.executable, "-m", "pip", "install", "--user", "-q", *missing])
print("Dependencies ready:", ", ".join(m for m, _ in deps))
PY
