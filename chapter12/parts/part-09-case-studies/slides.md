---
marp: true
title: Chapter 12 — Practical applications and case studies
paginate: true
---

# Chapter 12 — Practical applications and case studies

Storage theory becomes concrete in production architectures

---

## Learning objectives
- By the end of this part

---

## From mechanisms to production
- Earlier parts assembled storage formats, consistency trade-offs, lakehouse versioning
- The short case sketches below show how those pieces combine in production domains without
- The same object-store and streaming patterns recur across media and clinical settings

---

## Example 12.23 — Netflix Scale Streaming Architecture
- Example 12.23 — hands-on module
- Example 12.23 sketches Netflix-scale streaming storage needs
- Global streaming platforms combine object storage, content delivery networks
- Seamless integration of these technologies delivers high performance while keeping storage
- Explore the chapter example module
- View files: `modules/chapter12/example23/`

---

## Example 12.24 — Spotify Real-Time Analytics Pipelines
- Example 12.24 — hands-on module
- Example 12.24 sketches Spotify-style analytics on listening events
- Music platforms stream listening events into cloud storage and real-time analytics so
- A mix of SQL and NoSQL stores with frameworks such as Apache Spark lets the infrastructure
- Explore the chapter example module
- View files: `modules/chapter12/example24/`

---

## Example 12.25 — Healthcare Imaging at Scale
- Example 12.25 — hands-on module
- Example 12.25 applies scalable stores to clinical imaging archives
- Healthcare imaging vendors store large DICOM archives in object storage with governed
- Durability and access control matter as much as raw throughput in regulated clinical
- Explore the chapter example module
- View files: `modules/chapter12/example25/`

---

## Shared patterns across domains
- Streaming media and music analytics lean on object storage plus real-time buses and mixed
- Healthcare imaging reuses object storage for large binary archives but adds stronger
- Across all three cases

---

## Takeaways
- Netflix-style streaming pairs object storage, CDNs
- Spotify-style analytics stream events into cloud storage with SQL, NoSQL
- Healthcare imaging keeps DICOM archives on governed object storage with analytics on
- Production scale is composition of storage, streaming

---

## Next
- Complete the quiz for this part
- The final part surveys emerging trends

