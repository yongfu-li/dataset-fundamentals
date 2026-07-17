---
marp: true
title: Chapter 9 — Big-data tools, lakes, and warehouses
paginate: true
---

# Chapter 9 — Big-data tools, lakes, and warehouses

Streaming needs a landing place

---

## Learning objectives
- By the end of this part, learners should be able to list integration, storage, quality

---

## Collection challenges at big-data scale
- Big data arrives from social, sensors, databases
- Traditional relational stores struggle with volume and variety
- Quality drifts under velocity

---

## Tools: Flume and NiFi
- Often into real-time analytics paths
- Apache NiFi automates data flow between systems
- These tools address movement and integration when custom scripts do not scale

---

## Data lakes for raw, mixed sources
- A data lake is a centralized repository that stores vast raw data in native formats
- Lakes suit text, video, and social feeds when analysts need flexible access later
- Weak schema discipline

---

## Example 9.26 — Retail Data Lake for Mixed Sources
- Example 9.26 — hands-on module
- Example 9.26 places customer interaction logs, social content
- Analysts later apply machine learning to uncover behavior trends from that mixed corpus
- Explore the chapter example module
- View files: `modules/chapter9/example26/`

---

## Data warehouses for structured BI
- A data warehouse stores cleaned
- Tables support business intelligence tools and historical analysis
- Warehouses excel at governed reporting but are less suited to the full variety and

---

## Example 9.27 — Financial Data Warehouse for Structured BI
- Example 9.27 — hands-on module
- Example 9.27 shows a financial institution storing transactions, balances
- Structured BI needs consistency that lakes alone may not provide
- Explore the chapter example module
- View files: `modules/chapter9/example27/`

---

## Takeaways
- Big-data collection faces integration, storage, quality
- Lakes land mixed raw sources for flexible analytics
- Retail lakes and financial warehouses illustrate complementary storage patterns

---

## Next
- Complete the quiz for this part
- Emerging trends that prepare later storage and modeling chapters

