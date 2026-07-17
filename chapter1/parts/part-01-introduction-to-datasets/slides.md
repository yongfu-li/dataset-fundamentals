---
marp: true
title: Chapter 1 — Introduction to datasets
paginate: true
---

# Chapter 1 — Introduction to datasets

This part opens Chapter 1 by answering a deceptively simple question: what counts as a dataset?

---

## Learning objectives
- Define a dataset as curated for analysis, not raw event streams
- Distinguish records from attributes (shared vocabulary)
- Same idea in CSV tables and nested JSON

---

## What is a dataset?
- A dataset is a curated collection of data
- Has scope, structure, and documentation
- The dataset is the basic unit for ML, statistics, and BI

---

## Records and attributes
- Each record is one observation; each attribute describes it
- The sales CSV uses Date, Product, Quantity, and Price as attributes
- The same mapping appears in healthcare and sensor examples later in the section

---

## Example 1.1 — Sample CSV sales data
- Example 1.1 — hands-on module
- First concrete anchor: a small CSV of retail sales
- Each row is one sale; columns detail product, date, quantity, and price
- Explore the chapter example module
- View files: `modules/chapter1/example1/`

---

## Example 1.1 — listing

```
Date,Product,Quantity,Price,Total
2024-01-01,Apple,3,0.5,1.5
2024-01-01,Banana,2,0.3,0.6
2024-01-02,Orange,5,0.7,3.5
2024-01-02,Grapes,1,2.0,2.0
2024-01-03,Mango,4,1.5,6.0
2024-01-04,Apple,2,0.5,1.0
```

---

## Example 1.4 — Housing prices in JSON
- Example 1.4 — hands-on module
- Example 1.4 JSON listings with nested fields (flexible schema)
- The form changes; the objective stays the same: meaningful, analyzable data
- Explore the chapter example module
- View files: `modules/chapter1/example4/`

---

## Example 1.4 — listing

```
[
  {
    "House_ID": 101,
    "Location": "New York",
    "Square_Footage": 2000,
    "Bedrooms": 3,
    "Proximity_to_Schools": "0.5 miles",
    "Price": 850000
  },
  {
    "House_ID": 102,
    "Location": "Los Angeles",
    "Square_Footage": 1800,
    "Bedrooms": 4,
    "Proximity_to_Schools": "1.2 miles",
    "Price": 720000
  },
  {
    "House_ID": 103,
    "Location": "Chicago",
    "Square_Footage": 2200,
    "Bedrooms": 3,
    "Proximity_to_Schools": "0.8 miles",
    "Price": 650000
  },
  {
    "House_ID": 104,
    "Location": "San Francisco",
    "Square_Footage": 1500,
    "Bedrooms": 2,
    "Proximity_to_Schools": "0.3 miles",
    "Price": 950000
  }
]
```

---

## Takeaways
- A dataset is prepared for a purpose
- Records and attributes are the shared vocabulary
- Formats and modalities vary widely, but the goal of interpretable, usable data does not

---

## Next
- Complete the quiz for this part
- Continue to the next part on types of datasets, structured, unstructured

