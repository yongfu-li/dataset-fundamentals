---
marp: true
title: Chapter 2 — APIs for collection
paginate: true
---

# Chapter 2 — APIs for collection

When a provider exposes structured endpoints, APIs are usually preferable to scraping

---

## Learning objectives
- Explain how APIs differ from scraping as a collection method
- Recognize rate limits and authentication as design constraints rather than afterthoughts

---

## What is an API for collection?
- Application Programming Interfaces provide structured access to service data
- Relative to scraping
- The trade-off is usage quotas and incomplete coverage of a site's full content

---

## Request, parse, append
- A typical API collection job follows a short loop
- Append one row per call to a growing store
- Error handling and timeouts belong in the same script so that transient failures do not

---

## Example 2.7 — Fetching a public weather API record
- Example 2.7 — hands-on module
- Example 2.7 shows a minimal request pattern that returns a JSON record suitable for
- Observed time as one row per call
- Rate limits and authentication keys must be handled so that the job remains within the
- View files: `modules/chapter2/example7/`

---

## Example 2.7 — listing

```
import requests

response = requests.get(
    "https://api.example.com/weather",
    params={"city": "Singapore"},
    timeout=10,
)
response.raise_for_status()
payload = response.json()
# Example fields: payload["temp"], payload["humidity"]
```

---

## Rate limits and keys
- API access is governed by contracts, not by page layout
- Providers set rate limits, require keys, and may cap daily volume
- Logging that separates successful rows from throttled calls
- Treating these constraints as part of the protocol prevents loss of access mid-campaign

---

## When APIs beat scraping
- Prefer APIs when a provider exposes them
- Scraping remains a fallback when public content exists but no endpoint is offered
- Each of these methods can still be executed manually or automatically

---

## Takeaways
- APIs trade scraping flexibility for structure and clearer access rules
- A minimal job requests, parses JSON fields, and appends rows
- Rate limits and keys are collection-design decisions, not deployment details

---

## Next
- Complete the quiz for this part
- Complete the quiz

