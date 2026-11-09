---
marp: true
title: Chapter 1 — Introduction to Datasets
paginate: true
---

# Chapter 1 — Introduction to Datasets

Welcome to Chapter 1 of the Dataset Fundamentals lecture series

---

## Learning Objectives
- Our primary goals guide this foundational part
- We define an empirical sample using statistical learning theory and joint probability
- We establish the universal orthogonal abstraction of records and attributes across modern
- We analyze the law of data quality cascades where early collection errors compound
- We study real-world failures across healthcare and robotics and test schema enforcement in

---

## The Data-Centric AI Paradigm Shift
- Machine learning research historically focused on a model-centric paradigm with fixed
- Empirical investigations reveal that real-world AI failures stem from dirty data rather
- Data-Centric AI holds the model fixed while systematically auditing and engineering the
- Rigorous data curation delivers significantly greater reliability gains than marginal

---

## Mathematical Foundations of an Empirical Sample
- An empirical dataset is formally defined as a sample drawn from an unobservable joint
- We denote the instance feature space as X and the target label space as Y
- An empirical dataset of sample size N consists of paired observations independently and
- In empirical risk minimization
- Corrupted training distributions cause empirical risk to diverge sharply from true risk

---

## The Attribute Space and Feature Schema
- Each observation vector is decomposed across an attribute schema of distinct measurement
- Continuous metric features capture real-valued physical measurements such as blood
- Discrete count variables record non-negative event totals such as website visits
- Categorical nominal variables represent distinct unordered states such as medical
- Ordinal ranked variables enforce monotonic order across categories
- Enforcing explicit domain invariants prevents silent pipeline corruption across processing

---

## Records versus Attributes: Universal Abstraction
- Structured data universally reduces to two orthogonal dimensions of observations and
- Statistical analysis examines individual sample observations and vertical covariate
- Relational database engines organize structured tuples and typed table columns
- Machine learning pipelines batch observation instances and multi-dimensional feature
- Modern columnar storage layouts arrange horizontal row groups and vertical column chunks

---

## Example 1.1 — Sample CSV Sales Data
- Example 1.1 — hands-on module
- Example 1.1 illustrates the classic tabular archetype using retail purchase records
- Each row represents a single customer purchase event in the store
- Each column defines a typed attribute including transaction date, product name, quantity
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

## Example 1.4 — Housing Prices in JSON
- Example 1.4 — hands-on module
- Tabular rows and columns are not the only medium for dataset representation
- Example 1.4 demonstrates semi-structured data using housing property listings formatted in
- Individual records maintain flexible hierarchical trees with nested dictionaries and
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

## The Law of Data Quality Cascades
- Production machine learning systems execute multi-stage directed processing graphs
- The law of data quality cascades establishes that early collection errors compound
- Hardware telemetry drift or missing sensor readings compound through arbitrary imputation
- Noisy annotations mislead feature representation learning and model optimization
- Even subtle collection artifacts can trigger catastrophic failure during production

---

## Comic: The Perilous Journey of Record 402
- Here we visualize the law of data quality cascades through an illustrated four-panel comic
- In panel one
- In panel two
- In panel three, an exhausted crowd worker mislabels the corrupted record
- By panel four

---

## Real-World Case Studies: When Datasets Fail
- Catastrophic consequences of data quality cascades appear across high-stakes industries
- In clinical ICU sepsis prediction
- In autonomous driving pipelines
- Such temporal misalignment creates ghost obstacles and emergency braking failures in road

---

## Interactive Schema and Quality Laboratory
- Learners can explore data health auditing directly using the in-browser Schema and Quality
- This interactive workbench allows you to stream clean transaction records and inject
- You can observe live health reports detailing completeness, type validation
- Exploring these interactive controls bridges theoretical definitions with practical

---

## Key Takeaways and Foundation Summary
- Four fundamental insights summarize our study of dataset foundations
- A dataset is an empirical sample whose joint probability distribution bounds all
- Records and attributes represent universal orthogonal axes across all data storage formats
- Data quality cascades mean early collection rigor prevents catastrophic downstream model
- Explicit schema validation and real-world failure auditing must precede model training

---

## Next
- Complete the quiz for this part
- Pause here to test your understanding with the formative quiz for this part

