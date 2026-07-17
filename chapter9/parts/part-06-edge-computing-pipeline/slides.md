---
marp: true
title: Chapter 9 — Edge computing and the IoT pipeline
paginate: true
---

# Chapter 9 — Edge computing and the IoT pipeline

Raw sensor streams overwhelm networks if everything ships to the cloud

---

## Learning objectives
- By the end of this part, learners should be able to outline stages of an IoT data pipeline

---

## Pipeline stages from generation to analytics
- An IoT pipeline typically moves through data generation at the sensor
- Each stage must be designed so volume and delay do not erase the value of continuous

---

## Example 9.17 — Smart Thermostat Local Reading
- Example 9.17 — hands-on module
- Example 9.17 gives a minimal sensing vignette
- That local reading is the generation step before gateway or cloud processing
- Explore the chapter example module
- View files: `modules/chapter9/example17/`

---

## Edge processing in the pipeline
- Edge computing processes data at or near the device
- Doing so reduces load on central servers and shortens delay for real-time decisions
- Transmission may still use Wi-Fi

---

## Benefits: latency, bandwidth, reliability
- Processing closer to the source cuts latency for time-sensitive applications
- Sending only relevant or pre-processed data optimizes bandwidth and cost
- Edge devices can also keep working when connectivity drops
- Together these benefits make continuous IoT collection operationally viable

---

## Example 9.18 — Edge Processing for Traffic Lights
- Example 9.18 — hands-on module
- Example 9.18 shows smart traffic systems that process camera and sensor data at the edge
- Local decisions keep control loops tight
- Explore the chapter example module
- View files: `modules/chapter9/example18/`

---

## Example 9.19 — Real-Time Logistics Rerouting
- Example 9.19 — hands-on module
- Example 9.19 applies IoT tracking to logistics
- Timely sensing plus responsive processing turns location streams into operational
- Explore the chapter example module
- View files: `modules/chapter9/example19/`

---

## Takeaways
- IoT pipelines span generation, transmission, edge and cloud processing, and analytics
- Edge computing improves latency, bandwidth use, and offline resilience
- Thermostats, traffic lights

---

## Next
- Complete the quiz for this part
- The next part covers scalability, security

