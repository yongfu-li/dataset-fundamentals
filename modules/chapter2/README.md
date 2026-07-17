# Chapter 2 — Runnable Examples

Extracted from `author/chapter2.tex` (*Fundamentals of Data Collection*).

Every module's `README.md` follows the enriched pedagogical template from the
`book-examples` skill: learning objective, chapter context, key terms, decomposed
"what you should learn" bullets, real captured output under *Expected output*,
interpretation, a *Try it / Reflect* prompt, and *Related examples* cross-links —
so a reader can learn the concept from the README alone, without the book.

| Module | Label | Title | Type | Runnable |
|--------|-------|-------|------|----------|
| [example1](example1/) | `eg:2.1` | Collection Plan for a Retail Satisfaction Study | conceptual | partial |
| [example2](example2/) | `eg:2.2` | Primary Collection in a Clinical Monitoring Study | conceptual | partial |
| [example3](example3/) | `eg:2.3` | Secondary Census Extract for Store Siting | conceptual | partial |
| [example4](example4/) | `eg:2.4` | Real-Time Warehouse Sensor Stream | conceptual | partial |
| [example5](example5/) | `eg:2.5` | Campus Wi-Fi Satisfaction Survey Plan | conceptual | partial |
| [example6](example6/) | `eg:2.6` | Choosing Scraping for Public Course Catalogs | conceptual | partial |
| [example7](example7/) | `eg:2.7` | Fetching a Public Weather API Record | code | yes |
| [example8](example8/) | `eg:2.8` | Manual Shelf Audit in a Grocery Pilot | conceptual | partial |
| [example9](example9/) | `eg:2.9` | Automated Cold-Room Temperature Logging | conceptual | partial |
| [example10](example10/) | `eg:2.10` | Simple Random Draw from an Employee Roster | conceptual | partial |
| [example11](example11/) | `eg:2.11` | Stratified Sample of Cart Abandoners | conceptual | partial |
| [example12](example12/) | `eg:2.12` | Cluster Sample of Neighborhood Clinics | conceptual | partial |
| [example13](example13/) | `eg:2.13` | Systematic Draw from a Membership Directory | conceptual | partial |
| [example14](example14/) | `eg:2.14` | Convenience Sample on a University Campus | conceptual | partial |
| [example15](example15/) | `eg:2.15` | Snowball Recruitment for Gig-Worker Interviews | conceptual | partial |
| [example16](example16/) | `eg:2.16` | Choosing a Form Builder for the Wi-Fi Survey | conceptual | partial |
| [example17](example17/) | `eg:2.17` | Static Parser vs Browser Driver for Catalog Pages | conceptual | partial |
| [example17b](example17b/) | `eg:2.17b` | CIRDC Harvest Stages and Cross-Repository Checks | conceptual | partial |
| [example18](example18/) | `eg:2.18` | API-Driven Brand Mention Log | conceptual | partial |
| [example19](example19/) | `eg:2.19` | Missing Fields in a Clinic Intake Table | data | yes |
| [example20](example20/) | `eg:2.20` | Mobile-Only Poll Coverage Gap | conceptual | partial |
| [example21](example21/) | `eg:2.21` | Traffic and Air-Quality Feeds Without a Shared Key | conceptual | partial |
| [example22](example22/) | `eg:2.22` | Election-Week Sentiment Collection | conceptual | partial |
| [example23](example23/) | `eg:2.23` | Soil-Moisture Network for Irrigation Planning | conceptual | partial |
| [example24](example24/) | `eg:2.24` | Remote Monitoring for Chronic Heart Disease | conceptual | partial |

## Quick start

```bash
cd modules/chapter2/example1
bash install.sh
bash run.sh
```

Code example with dependencies: `example7` (`requests`; offline mock by default).
Illustrative CSV: `example19`.
