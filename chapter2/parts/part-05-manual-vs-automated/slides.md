---
marp: true
title: Chapter 2 — Manual vs automated collection
paginate: true
---

# Chapter 2 — Manual vs automated collection

The same survey can be filled by hand or ingested from a form API

---

## Learning objectives
- Distinguish the method axis from the execution axis
- Error profile
- Recognize when hybrid programs combine both approaches

---

## Method versus execution
- The previous parts chose which method to use, survey, observation, scraping, or API
- This section asks who or what executes it
- The same survey can be filled by hand or ingested from an online form API
- Manual execution suits small, high-precision, or highly contextual tasks
- Automated execution suits large, repetitive, or real-time workloads
- Most production programs sit on a hybrid continuum between the two poles

---

## Manual data collection
- Manual collection relies on human intervention
- It remains appropriate when cases are unique
- Precision and flexibility are strengths
- Even manual campaigns benefit from written protocols so that later analysts can interpret

---

## Example 2.8 — Manual shelf audit in a grocery pilot
- Example 2.8 — hands-on module
- Example 2.8 shows a setting where replacing people with sensors too early would lose the
- A grocer piloting a new layout asks associates to walk each aisle once per hour and record
- Associates can note temporary displays and damaged packaging that a ceiling camera would
- The trade-off is that coverage drops when staffing is thin
- View files: `modules/chapter2/example8/`

---

## Automated data collection
- Analytics platforms that emit event streams
- Once configured
- Privacy governance
- Teams must also filter overload

---

## Example 2.9 — Automated cold-room temperature logging
- Example 2.9 — hands-on module
- Example 2.9 pairs with the shelf-audit case by showing when continuous sensing is the
- The same grocer logs cold-room temperature every minute through wired sensors that write
- No associate could sample that frequently without neglecting other work
- Explore the chapter example module
- View files: `modules/chapter2/example9/`

---

## Takeaways
- Choosing between manual and automated execution is a design decision, not a moral one
- Manual methods fit audits, interviews, and early exploratory studies
- Automated methods fit production monitoring, large web harvests, and streaming analytics
- Mature programs often combine both

---

## Next
- Complete the quiz for this part
- Complete the quiz

