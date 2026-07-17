"""Example 2.7 — fetch a weather-like JSON record (book pattern + offline demo).

The manuscript calls https://api.example.com/weather (illustrative).
By default this module uses a mocked response so the example runs offline.
Set LIVE=1 to attempt a real HTTP call to the book URL (will fail unless you
replace the URL with a working endpoint).
"""

from __future__ import annotations

import json
import os
from typing import Any
from unittest.mock import MagicMock, patch

import requests


def fetch_weather(city: str = "Singapore") -> dict[str, Any]:
    """Request current conditions and return the JSON payload."""
    response = requests.get(
        "https://api.example.com/weather",
        params={"city": city},
        timeout=10,
    )
    response.raise_for_status()
    payload = response.json()
    # Example fields: payload["temp"], payload["humidity"]
    return payload


def _demo_payload() -> dict[str, Any]:
    """Synthetic record shaped like the fields named in the book."""
    return {
        "city": "Singapore",
        "temp": 31.2,
        "humidity": 74,
        "observed_at": "2024-06-01T12:00:00Z",
    }


def main() -> None:
    """Run the book request pattern, mocking the network unless LIVE=1."""
    if os.environ.get("LIVE") == "1":
        payload = fetch_weather("Singapore")
    else:
        mock_resp = MagicMock()
        mock_resp.raise_for_status = MagicMock()
        mock_resp.json.return_value = _demo_payload()
        with patch("requests.get", return_value=mock_resp) as mocked:
            payload = fetch_weather("Singapore")
            print("Offline demo: requests.get was mocked.")
            print("Call args:", mocked.call_args)

    print("Stored row fields:")
    print(json.dumps(payload, indent=2))
    print("temp =", payload.get("temp"))
    print("humidity =", payload.get("humidity"))
    print("observed_at =", payload.get("observed_at"))


if __name__ == "__main__":
    main()
