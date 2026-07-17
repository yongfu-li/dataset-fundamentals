# Example 2.7 — Fetching a Public Weather API Record

**Chapter:** 2  
**Label:** `eg:2.7`  
**Source:** `author/chapter2.tex`  
**Section:** `sec:2.3.4` — APIs

## Learning objective

Execute a minimal API collection pattern: HTTP GET → JSON → one row of fields, with timeout and status checks.

## Chapter context

Section 2.3.4 presents APIs as structured programmatic access with clearer contracts than scraping. Example 2.7 is the minimal request; Example 2.18 later adds operational polling and quotas.

## What this example shows

A Python `requests.get` for city weather with timeout and `raise_for_status()`, then reading `temp`, `humidity`, and `observed_at` as one appendable monitoring row.

## Key terms

- **API** — A contractual interface for programmatic data access, often returning JSON.
- **Rate limit** — Provider cap on how many requests you may send in a window.

## What you should learn

### From the code / process
- `requests.get(url, params=..., timeout=10)` is the request skeleton.
- `raise_for_status()` fails fast on HTTP errors before parsing.
- `response.json()` yields a dict; select fields as one collection row.
- Production jobs must also handle auth keys and rate limits (book prose).

### From the output / result
- `run.sh` prints the takeaway or data/code output below; use it as a checklist for similar collection designs.

## Contents

| File | Role |
|------|------|
| `main.py` | Book request pattern + offline mock wrapper |
| `requirements.txt` | requests |
| `install.sh` | Import-checked pip --user install |
| `run.sh` | Runs main.py |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Python 3.10+; requests (installed by install.sh)

## Setup

```bash
cd modules/chapter2/example7
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Running Example 2.7 — Fetching a Public Weather API Record
Offline demo: requests.get was mocked.
Call args: call('https://api.example.com/weather', params={'city': 'Singapore'}, timeout=10)
Stored row fields:
{
  "city": "Singapore",
  "temp": 31.2,
  "humidity": 74,
  "observed_at": "2024-06-01T12:00:00Z"
}
temp = 31.2
humidity = 74
observed_at = 2024-06-01T12:00:00Z
```

## How to interpret the result

Treat each successful call as one row in a growing weather table — the chapter's API method in miniature; scale it with backoff in Example 2.18.

## Try it / Reflect

- Add a print of `response.status_code` before `json()` — what would you log on a 429?

## Related examples

- `eg:2.18` — Operational polling loop that backs off at quota.
- `eg:2.6` — Scraping when no API exists.

## Notes

- Book URL is illustrative; default run mocks HTTP.
- Set LIVE=1 only with a real endpoint.
- install.sh uses import-checked pip --user (no local venv).
