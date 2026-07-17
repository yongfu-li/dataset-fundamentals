# Consent & PII scrubber

Browser lab for **Chapter 3** privacy practice: purpose/consent → minimize →
detect identifiers → redact → export an audit log.

**Live path:** `lectures/tools/pii-scrubber/index.html` (after `build_site.py`)

Detection uses **column-role dictionaries + regex/format checks** (no cloud LLM).

## Learning objectives

- Gate a share with purpose, consent, and retention
- Tag sensitive columns and drop unused fields (minimization)
- Find emails, phones, SSN-like IDs, IPs, card-like numbers in cells/notes
- Apply mask / tokenize / suppress policies
- Export `redacted.csv` + `scrub-log.json`

## Workflow

1. **Gate** — purpose + consent + retention
2. **Learn** — `support-tickets` → `customer-table` → `mixed-export`
3. **Roles / minimize** — confirm or drop columns
4. **Scrub** — choose policy; preview; export

## Upload rules

- Formats: CSV, JSON, plain `.txt` (one note per line)
- Max **5,000** rows, **2 MB**

## Book anchors

- §3.3 privacy principles; §3.4 privacy-preserving techniques
- Linked from `part-04-data-privacy-principles` and `part-05-privacy-preserving-techniques`

## QA checklist

- [ ] Support tickets: emails/phones detected in notes
- [ ] Customer table: column roles auto-tagged; drop name/phone
- [ ] Consent gate blocks CSV export until checked
- [ ] scrub-log.json includes purpose, retention, actions
