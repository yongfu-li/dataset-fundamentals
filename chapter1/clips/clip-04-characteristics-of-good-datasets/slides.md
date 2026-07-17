---
marp: true
title: Chapter 1 — Characteristics of good datasets
paginate: true
---

# Chapter 1 — Characteristics of good datasets

Knowing a file's type and format is not enough

---

## Learning objectives
- Consistency, and explain why metadata and documentation make a dataset reusable

---

## Five quality dimensions
- Table 1.6 in the chapter lists accuracy, completeness, consistency, relevance
- None stands alone
- Still on-question

---

## Example 1.11 — Incorrect transaction
- Example 1.11 — hands-on module
- Example 1.11 shows a ledger where one transaction likely contains an extra zero
- That single accuracy error changes monthly revenue by an order of magnitude and can
- Explore the chapter example module
- View files: `modules/chapter1/example11/`

---

## Example 1.11 — listing

```
Txn_ID,Date,Account,Amount,Type
T001,2024-03-01,Revenue,1500.00,Credit
T002,2024-03-02,Revenue,15000.00,Credit
T003,2024-03-03,Refund,50.00,Debit
```

---

## Completeness and consistency
- Completeness failures
- Consistency failures
- Later chapters develop systematic repair; here the goal is recognition

---

## Metadata and documentation
- Metadata records schema, units, provenance, and related context
- Example 1.14 illustrates metadata for a weather dataset
- Without these, even accurate tables become hard to trust outside the original team
- The example 14 module shows what good metadata looks like in practice

---

## Takeaways
- Quality is multi-dimensional and task-relative
- Learn to spot accuracy errors, missing fields

---

## Next
- Complete the quiz for this clip
- Complete the quiz

