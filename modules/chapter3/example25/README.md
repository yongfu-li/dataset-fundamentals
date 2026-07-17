# Example 3.25 — Target (2013): Third-Party Vendor Path

**Chapter:** 3  
**Label:** `eg:3.25`  
**Source:** `author/chapter3.tex`  
**Section:** `sec:3.7.2` — Case Studies of Major Breaches

## Learning objective

Trace the Target (2013) breach through third-party vendor access to point-of-sale systems.

## Chapter context

The third major breach case in Section 3.7.2 highlights supply-chain entry rather than unpatched public apps—vendor risk connects to least-privilege design in Section 3.8.2.

## What this example shows

Attackers used third-party vendor access to reach POS systems and compromise tens of millions of payment cards—failure mode: vendor risk and malware on retail networks.

## Key terms

- **Vendor path** — Compromise via supplier credentials or remote support tools.
- **POS malware** — Skimming payment cards at checkout systems.
- **Third-party risk** — Security dependence on vendors with network access.

## What you should learn

### From the concept
- Your attack surface includes vendors' laptops and VPNs.
- Payment card data demands network segmentation.
- Retail breaches trigger card-brand and consumer litigation chains.

### From the output / result
- `run.sh` describes vendor→POS path and failure mode.

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
cd modules/chapter3/example25
bash install.sh
```

## Run

```bash
bash run.sh
```

## Expected output

```
Target (2013):
- Third-party vendor access → point-of-sale systems
- Tens of millions of payment cards compromised
- Failure mode: vendor risk and malware on retail networks
Prevention: vendor reviews and least-privilege third-party access.
```

## How to interpret the result

Section 3.8.2 lists vendor reviews and least privilege as prevention—pair with this case when onboarding suppliers.

## Try it / Reflect

- List every vendor with VPN access to production—what could each reach?

## Related examples

- `eg:3.22` — Payment credential sensitivity in breach taxonomy.
- `eg:3.23` — Contrasting failure mode: direct internet-facing app.
- `eg:3.5` — Accountability and notification after card data exposure.

## Notes

- Prose-only. Prevention in Section 3.8.2.
