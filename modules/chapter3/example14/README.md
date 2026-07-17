# Example 3.14 — Encryption for Medical Record Transfer

**Chapter:** 3  
**Label:** `eg:3.14`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.4.1` — Anonymization and Encryption

## Learning objective

Place TLS encryption in a medical transfer workflow and state what controls must apply after decryption.

## Chapter context

Section 3.4.1 pairs anonymization limits with encryption for exchange. Example 3.14 keeps encryption in its proper lane: necessary but not sufficient for governance.

## What this example shows

TLS keeps intercepted clinic packets unreadable to outsiders, but once an authorized clinician decrypts, misuse controls must come from access policy, audit logs, and minimization—not encryption alone.

## Key terms

- **Encryption in transit** — Protecting payloads on the wire (e.g., TLS between clinics).
- **Insider threat** — Risk from legitimate users after plaintext is available.
- **Audit logging** — Recording who accessed which record and when.

## What you should learn

### From the concept
- Encryption addresses interception, not authorized misuse.
- Clinical exchange needs policy and logging at rest/use.
- PbD duties continue after ciphertext becomes plaintext.

### From the output / result
- `run.sh` splits responsibilities: TLS on the wire, policy after decrypt.

## Contents

| File | Role |
|------|------|
| `install.sh` | No-op installer |
| `run.sh` | Prints the structured takeaway |

## Prerequisites

- OS: Linux, macOS, or Windows (Git Bash / WSL recommended for `.sh`)
- Bash

## Setup

```bash
cd modules/chapter3/example14
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Encryption for medical record transfer:
- TLS (or equivalent) keeps intercepted packets unreadable to outsiders
- Once an authorized clinician decrypts, misuse controls must come from access policy, audit logs, and minimization
Encryption alone is not enough.
```

## How to interpret the result

A vendor demo that stops at ‘AES-256 in transit’ has not answered how clinicians' screens are governed.

## Try it / Reflect

- Draw two boxes—‘in transit’ and ‘at use’—and assign one control to each for EHR exchange.

## Related examples

- `eg:3.12` — PbD minimization before data ever moves.
- `eg:3.22` — Breaches of highly sensitive health identifiers.

## Notes

- Prose-only.
