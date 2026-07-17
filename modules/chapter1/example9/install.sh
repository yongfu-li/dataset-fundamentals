#!/usr/bin/env bash
# Import-checked pip --user install (robust on /mnt mounts).
set -euo pipefail
cd "$(dirname "$0")"
command -v python3 >/dev/null 2>&1 || { echo "python3 is required" >&2; exit 1; }
python3 - <<'PY'
import importlib.util
import subprocess
import sys

deps = [
    ("h5py", "h5py"),
    ("numpy", "numpy"),
]
missing = [pkg for mod, pkg in deps if importlib.util.find_spec(mod) is None]
if missing:
    print("Installing:", ", ".join(missing))
    subprocess.check_call([sys.executable, "-m", "pip", "install", "--user", "-q", *missing])
print("Dependencies ready:", ", ".join(m for m, _ in deps))
PY
