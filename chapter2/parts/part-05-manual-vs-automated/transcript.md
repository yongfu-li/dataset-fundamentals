# Chapter 2 — Manual vs automated collection — transcript

**Part id:** part-05-manual-vs-automated  
**Estimated duration:** 6 minutes  
**Sources:** `author/chapter2.tex` (§2.4), `modules/chapter2/example8/`, `modules/chapter2/example9/`

## Slide 1 — Chapter 2 — Manual vs automated collection

The same survey can be filled by hand or ingested from a form API. This part separates which method you use from who or what executes it, comparing manual precision with automated scale.

## Slide 2 — Learning objectives

By the end of this part, you should distinguish the method axis from the execution axis, contrast manual and automated collection on scale, cost, and error profile, and recognize when hybrid programs combine both approaches.

## Slide 3 — Method versus execution

The previous parts chose which method to use—survey, observation, scraping, or API. This section asks who or what executes it. The same survey can be filled by hand or ingested from an online form API; the same observation protocol can be a field notebook or a camera feed. Manual execution suits small, high-precision, or highly contextual tasks. Automated execution suits large, repetitive, or real-time workloads. Most production programs sit on a hybrid continuum between the two poles.

## Slide 4 — Manual data collection

Manual collection relies on human intervention: paper or digital forms, field notes, or keyboard entry into spreadsheets and databases. It remains appropriate when cases are unique, volumes are modest, or contextual judgment matters more than throughput. Precision and flexibility are strengths; time cost, fatigue-induced error, and poor scalability are the recurring limits. Even manual campaigns benefit from written protocols so that later analysts can interpret how each field was produced.

## Slide 5 — Example 2.8 — Manual shelf audit in a grocery pilot

Example 2.8 shows a setting where replacing people with sensors too early would lose the judgment the study needs. A grocer piloting a new layout asks associates to walk each aisle once per hour and record out-of-stock stock-keeping units on a tablet form. Associates can note temporary displays and damaged packaging that a ceiling camera would misclassify. The trade-off is that coverage drops when staffing is thin. Open the example 8 module to compare situational awareness against scale.

## Slide 6 — Automated data collection

Automated collection uses software and devices to capture data with minimal ongoing human effort: IoT sensors, scheduled scrapers, API pollers, and analytics platforms that emit event streams. Once configured, these systems can run continuously and feed the real-time sources discussed earlier. Automation scales and reduces some classes of human error, but it shifts cost into setup, maintenance, and privacy governance. Teams must also filter overload: a sensor that records every second can bury the rare event that matters unless retention and alerting rules are designed carefully.

## Slide 7 — Example 2.9 — Automated cold-room temperature logging

Example 2.9 pairs with the shelf-audit case by showing when continuous sensing is the better fit. The same grocer logs cold-room temperature every minute through wired sensors that write to a central store. No associate could sample that frequently without neglecting other work, but the pipeline still needs alert thresholds and missing-packet checks before the stream is trusted. Try the example 9 module to see how automation trades human throughput for infrastructure discipline.

## Slide 8 — Takeaways

Choosing between manual and automated execution is a design decision, not a moral one. Manual methods fit audits, interviews, and early exploratory studies. Automated methods fit production monitoring, large web harvests, and streaming analytics. Mature programs often combine both: humans write protocols and review edge cases, while automation gathers the bulk stream.

## Slide 9 — Next

Complete the quiz, then continue to the next part on probability sampling—how designs decide whose answers count for inference.
