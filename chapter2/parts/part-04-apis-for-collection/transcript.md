# Chapter 2 — APIs for collection — transcript

**Part id:** part-04-apis-for-collection  
**Estimated duration:** 6 minutes  
**Sources:** `author/chapter2.tex` (§2.3.4), `modules/chapter2/example7/`

## Slide 1 — Chapter 2 — APIs for collection

When a provider exposes structured endpoints, APIs are usually preferable to scraping. This part shows how a programmatic weather request becomes one appendable row and why rate limits and keys are part of the collection design.

## Slide 2 — Learning objectives

By the end of this part, you should explain how APIs differ from scraping as a collection method, describe a minimal request-and-store pattern for JSON feeds, and recognize rate limits and authentication as design constraints rather than afterthoughts.

## Slide 3 — What is an API for collection?

Application Programming Interfaces provide structured access to service data, often as JSON or XML payloads that integrate cleanly into pipelines. Relative to scraping, APIs are usually more reliable and explicitly intended for programmatic use, including near-real-time feeds for finance, weather, or social platforms. The trade-off is usage quotas and incomplete coverage of a site's full content.

## Slide 4 — Request, parse, append

A typical API collection job follows a short loop. Authenticate if required, issue a request with explicit parameters such as city or date range, parse the structured response fields, and append one row per call to a growing store. Error handling and timeouts belong in the same script so that transient failures do not corrupt the table silently.

## Slide 5 — Example 2.7 — Fetching a public weather API record

Example 2.7 shows a minimal request pattern that returns a JSON record suitable for appending to a collection table. A collection job can request the current conditions for a city and store fields such as temperature, humidity, and observed time as one row per call. Rate limits and authentication keys must be handled so that the job remains within the provider's terms. Open the example 7 module to inspect the Python listing and sample payload fields.

## Slide 6 — Rate limits and keys

API access is governed by contracts, not by page layout. Providers set rate limits, require keys, and may cap daily volume. Collection design must include backoff when quotas are reached, secure storage of credentials, and logging that separates successful rows from throttled calls. Treating these constraints as part of the protocol prevents loss of access mid-campaign.

## Slide 7 — When APIs beat scraping

Prefer APIs when a provider exposes them: schemas are clearer, access rules are documented, and pipelines are less brittle than HTML selectors. Scraping remains a fallback when public content exists but no endpoint is offered, subject to the policy constraints covered in the previous part. Each of these methods can still be executed manually or automatically; that axis is the subject of the next part.

## Slide 8 — Takeaways

APIs trade scraping flexibility for structure and clearer access rules. A minimal job requests, parses JSON fields, and appends rows. Rate limits and keys are collection-design decisions, not deployment details.

## Slide 9 — Next

Complete the quiz, then continue to the next part on manual versus automated collection—who or what executes the same method.
