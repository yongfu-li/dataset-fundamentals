---
marp: true
title: Chapter 9 — Advanced Data Collection Techniques
paginate: true
---

# Chapter 9 — From fundamentals to advanced collection

Chapter 2 covered surveys, sampling, and small-scale collection

---

## Learning objectives
- By the end of this part

---

## Decision focus still anchors advanced pipelines
- Advanced collection is not an excuse to gather everything
- Teams still need the right evidence for a concrete action
- Crowdsourcing, sensors

---

## Example 9.1 — Customer Sentiment Survey for Decisions
- Example 9.1 — hands-on module
- Example 9.1 considers a product team that may still begin with customer-satisfaction
- Once the same questions must be answered continuously across regions, channels
- Advanced methods preserve that decision-making goal at larger scale
- Explore the chapter example module
- View files: `modules/chapter9/example1/`

---

## Why traditional pipelines hit limits
- Traditional collection often fails on three fronts: scalability, reliability, and cost
- Paper and interview workflows grow expensive as samples expand
- Those limits motivate the techniques developed later in this chapter

---

## Example 9.2 — Paper Surveys and Scalability Limits
- Example 9.2 — hands-on module
- Example 9.2 shows how paper surveys fail to scale with sample size
- Distribution, collection
- The lesson is operational: when turnaround and volume matter, manual logistics break first
- Explore the chapter example module
- View files: `modules/chapter9/example2/`

---

## Heterogeneous sources and continuous streams
- Beyond scale and cost
- These sources differ in structure, arrive at high velocity
- Quality assurance therefore depends on declared crawl windows, stable identifiers

---

## Example 9.5 — Wearables as Continuous Health Data Sources
- Example 9.5 — hands-on module
- Example 9.5 shows wearables as continuous health sources that traditional clinic visits
- Fitness trackers and smartwatches stream heart rate, activity
- Explore the chapter example module
- View files: `modules/chapter9/example5/`

---

## Takeaways
- Advanced collection extends Chapter 2 when data grow too large
- Decision focus remains the design goal
- Crowdsourcing, IoT and edge sensing

---

## Next
- Complete the quiz for this part
- The next part defines crowdsourcing and walks use cases from fraud-pattern review and

---

# Chapter 9 — Crowdsourcing use cases

When human judgment must scale beyond a small expert team, crowdsourcing distributes work to a large online community

---

## Learning objectives
- By the end of this part

---

## What crowdsourcing is
- Crowdsourcing obtains input
- It draws on collective intelligence and diverse skills for problems that are too complex
- The approach can lower cost while also tapping creativity, not only routine labor

---

## Types of crowdsourcing tasks
- Common types include crowd voting on ideas or designs
- Dataset projects most often emphasize crowd labor and related labeling workflows

---

## Labeling, research, and fraud review
- Machine learning teams use crowdsourcing to gather labeled images and text quickly
- Market research can sample broad demographics through surveys on the same platforms
- Frequency signals

---

## Example 9.8 — Crowdsourcing Fraud-Pattern Review
- Example 9.8 — hands-on module
- Locations, and frequency
- Applied in near real time
- Explore the chapter example module
- View files: `modules/chapter9/example8/`

---

## Example 9.9 — Netflix Prize Crowdsourced Innovation
- Example 9.9 — hands-on module
- Example 9.9 recalls the Netflix Prize
- Organizations use contests to crowdsource innovation when many external teams can explore
- Explore the chapter example module
- View files: `modules/chapter9/example9/`

---

## Example 9.10 — Microtask Image Tagging on Crowd Platforms
- Example 9.10 — hands-on module
- Distributed to many workers
- Thousands of items can be annotated in hours rather than weeks
- Explore the chapter example module
- View files: `modules/chapter9/example10/`

---

## Takeaways
- Crowdsourcing scales human judgment through online communities and multiple task types
- Dataset work often centers on labeling and microtasking
- Fraud review, open prizes

---

## Next
- Complete the quiz for this part
- The next part moves from use cases to platforms

---

# Chapter 9 — MTurk and other crowd platforms

Use cases need operational platforms

---

## Learning objectives
- By the end of this part

---

## Amazon Mechanical Turk overview
- Amazon Mechanical Turk
- Through a web interface
- The platform is one of the best-known venues for crowd labor in research and industry

---

## HIT workflow: post, complete, review, pay
- Requesters create Human Intelligence Tasks
- Workers browse available tasks and choose which to complete
- After submission, the requester reviews results and pays when the work is satisfactory
- Feedback builds worker reputation and influences access to harder tasks

---

## Example 9.11 — MTurk Product-Description Labeling
- Example 9.11 — hands-on module
- Example 9.11 walks a product-description labeling campaign
- Workers read descriptions and tag categories such as electronics, clothing, or home goods
- Those labels then train recommendation models
- Explore the chapter example module
- View files: `modules/chapter9/example11/`

---

## Prolific for research recruitment
- Prolific targets academic research
- Participants are pre-screened to meet study criteria
- Compared with general microtask markets

---

## CrowdFlower and Clickworker
- CrowdFlower, now Figure Eight, supports annotation, machine learning tasks
- Clickworker, based in Germany, focuses on writing, translation, categorization
- Platform choice should match task type, geography, and quality needs

---

## Choosing a platform
- MTurk remains a common default for flexible microtasks and labeling
- Prolific is often stronger when ethics screening and survey quality matter most
- CrowdFlower and Clickworker emphasize managed annotation workflows or European language
- Teams should align platform features with recruitment criteria, pay norms

---

## Takeaways
- MTurk operationalizes crowdsourcing through Human Intelligence Tasks, review, payment
- Product-description labeling shows how category tags feed downstream models
- Prolific, CrowdFlower

---

## Next
- Complete the quiz for this part
- Ethical obligations around fair pay, privacy, and harmful work conditions

---

# Chapter 9 — Crowdsourcing quality and ethics

Platforms alone do not guarantee usable labels

---

## Learning objectives
- By the end of this part, learners should be able to list major advantages of crowdsourcing

---

## Advantages of crowdsourcing
- Crowdsourcing can be cost-effective by outsourcing units of work without full-time
- Access to thousands of workers supports speed and scale so projects that once took months
- A global talent pool brings diverse perspectives

---

## Challenges: quality, privacy, and labor risk
- Quality control is hard when many individuals contribute
- Sharing sensitive data with third parties raises security, privacy
- Ethically, very low pay and job insecurity create exploitation risks for workers who

---

## Best practices: instructions and validation
- Clear, detailed instructions are critical so workers understand requirements and can
- Validation mechanisms such as gold-standard questions

---

## Best practices: incentives and reputation
- Fair compensation and bonuses for complex or high-quality work motivate better performance
- Reputation systems rate workers based on past quality
- Incentives and reputation filters improve consistency beyond relying on volume alone

---

## Ethical considerations: fair pay and exploitation
- A primary ethical concern is low pay
- The informal nature of microtask work often means no job security
- Precarious conditions can become exploitation when effort and expertise are underpaid

---

## Ethical considerations: privacy and security
- Crowdsourcing tasks may expose sensitive data to many workers
- Organizations need security protocols, training
- Ethical design therefore pairs technical controls with fair labor practices rather than

---

## Takeaways
- Crowdsourcing offers cost, speed, diversity
- Best practices center on clear instructions, gold standards, fair incentives
- Ethical campaigns address fair pay, exploitation risk

---

## Next
- Complete the quiz for this part
- The next part shifts from human microtasks to continuous measurement

---

# Chapter 9 — IoT components and sensing

Crowdsourcing scales human labeling; the Internet of Things scales continuous measurement

---

## Learning objectives
- By the end of this part

---

## What the Internet of Things is
- The Internet of Things is a network of physical devices that connect to the internet and
- Smart-city systems
- Objects collect, share

---

## Core components: devices, connectivity, processing
- At its core, IoT combines things equipped with sensors or actuators
- Devices capture measurements or perform actions
- Networks carry those readings onward
- Processing turns raw streams into decisions for users and automated systems

---

## Example 9.12 — Wearable Health Sensors
- Example 9.12 — hands-on module
- Steps, and sleep
- These endpoints illustrate everyday sensing that produces continuous personal health
- Explore the chapter example module
- View files: `modules/chapter9/example12/`

---

## Example 9.14 — Industrial Machine Monitoring
- Example 9.14 — hands-on module
- Predict maintenance needs
- Industrial IoT therefore links sensing to operational reliability rather than only
- Explore the chapter example module
- View files: `modules/chapter9/example14/`

---

## Connectivity options for IoT transfer
- Devices need reliable links to gateways or cloud services
- Common options include Wi-Fi for home and office devices
- Choice depends on power, range, and bandwidth

---

## Example 9.16 — Soil Sensors for Continuous Agriculture Data
- Example 9.16 — hands-on module
- Example 9.16 highlights soil sensors that support continuous agriculture data
- Farmers collect moisture, temperature
- Explore the chapter example module
- View files: `modules/chapter9/example16/`

---

## Takeaways
- IoT collection rests on sensing devices, connectivity, and edge or cloud processing
- Wearables and industrial monitors show personal and plant-floor endpoints
- Connectivity choices and soil networks illustrate how continuous streams replace sparse

---

## Next
- Complete the quiz for this part
- Local decisions such as thermostats, traffic lights, and logistics rerouting

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

---

# Chapter 9 — IoT security, privacy, and overload

Always-on sensors create always-on risks

---

## Learning objectives
- By the end of this part, learners should be able to explain scalability, security

---

## Challenges: scalability, security, privacy
- As device counts grow
- Many IoT devices ship with minimal security, so each endpoint can be an attack surface
- Sensitive health and behavior data also demand compliance with privacy rules such as GDPR

---

## Security practices for IoT and edge
- Best practices include end-to-end encryption at the device, in transit, and in the cloud
- These controls reduce unauthorized access, tampering

---

## Example 9.20 — Securing Wearable Health Edge Devices
- Example 9.20 — hands-on module
- Example 9.20 highlights wearable health trackers that monitor vital signs in real time
- Securing those edge devices against tampering and ensuring health data reach clinicians
- Explore the chapter example module
- View files: `modules/chapter9/example20/`

---

## Example 9.21 — Smart-City Multi-Source IoT Collection
- Example 9.21 — hands-on module
- Public transit
- Protocols, and governance
- Explore the chapter example module
- View files: `modules/chapter9/example21/`

---

## Protocols and multi-source coordination
- Effective multi-source IoT depends on shared formats and lightweight protocols
- Message Queuing Telemetry Transport suits low-bandwidth messaging
- Standardization helps cities and operators fuse streams without brittle one-off

---

## Ethics: ownership, overload, surveillance
- Who owns device-collected personal data, the individual or the vendor, is often contested
- Millions of devices also create overload: important signals can be lost in volume
- Public and personal tracking raise surveillance concerns

---

## Takeaways
- IoT collection faces scalability, security
- Encryption, authentication, and secure edge devices are baseline controls
- Wearables and smart cities show why ethics, ownership, overload

---

## Next
- Complete the quiz for this part
- The next part turns to big-data characteristics, volume, velocity, variety

---

# Chapter 9 — Big data and streaming

IoT and social platforms produce volume and velocity that traditional databases cannot absorb alone

---

## Learning objectives
- By the end of this part

---

## Defining big data and the Vs
- Big data refers to extremely large, complex datasets beyond conventional processing tools
- Classic dimensions include volume, the sheer size of the corpus

---

## Example 9.23 — Petabyte-Scale Social and Sensor Volume
- Example 9.23 — hands-on module
- Example 9.23 illustrates volume
- At that size
- Explore the chapter example module
- View files: `modules/chapter9/example23/`

---

## Velocity, variety, veracity, and value
- Velocity rises with IoT, social
- Variety spans spreadsheets, JSON, XML, posts, video, and images
- Veracity is hard to assess at scale
- Value reminds teams that collecting volume without extractable insight wastes

---

## Example 9.24 — Noise Filtering in Social Media Streams
- Example 9.24 — hands-on module
- Example 9.24 shows why social streams need filtering
- Collection pipelines therefore include quality gates, not only ingest
- Explore the chapter example module
- View files: `modules/chapter9/example24/`

---

## Streaming data versus batch processing
- Streaming data is generated continuously and must be processed as it arrives
- Streaming systems handle high-throughput flows in motion
- Stock feeds, IoT readings

---

## Example 9.25 — Streaming Stock Sensor and Social Feeds
- Example 9.25 — hands-on module
- Example 9.25 lists common streaming sources
- Distributed systems split large datasets across machines so parallel processing can keep
- Explore the chapter example module
- View files: `modules/chapter9/example25/`

---

## Takeaways
- Big data is defined by volume, velocity, variety, veracity, and value, not size alone
- Social noise filtering protects insight quality
- Social collection at scale

---

## Next
- Complete the quiz for this part
- The next part surveys collection challenges and tooling

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

---

# Chapter 9 — Sentiment case study and big-data outlook

The chapter closes by tying advanced collection to an end-to-end application

---

## Learning objectives
- Emerging trends such as edge and AI-driven analytics

---

## Social platforms as continuous sentiment sources
- Platforms such as Twitter, Facebook
- Those signals can be analyzed for sentiment and related insights when collection

---

## Example 9.28 — Real-Time Twitter Sentiment for Launch Feedback
- Example 9.28 — hands-on module
- Example 9.28 considers a product launch monitored through Twitter streams
- Visualize results on dashboards
- Explore the chapter example module
- View files: `modules/chapter9/example28/`

---

## Distributed file systems and ingestion modes
- Scalable storage
- Ingestion may be batch
- Mode choice follows latency needs

---

## Quality and privacy in big-data environments
- Duplicates that skew analysis
- Cleaning, transformation, and validation are therefore part of collection design
- Privacy requires encryption, access control

---

## Integration with AI and machine learning
- Big data realizes more value when combined with AI and machine learning
- Predictive analytics in healthcare, finance, and retail forecast outcomes or demand
- Recommendation systems at scale use behavior histories to suggest products or media
- Collection pipelines must therefore deliver timely

---

## Emerging trends and outlook
- Emerging directions include quantum computing for faster complex processing as systems
- These trends extend the advanced collection themes of this chapter

---

## Takeaways
- Real-time sentiment analysis shows how streaming collection, distributed transport, NLP
- HDFS-style stores and batch or real-time ingestion land those streams
- Quality, privacy, AI integration

---

## Next
- Complete the quiz for this part
- Complete the quiz for this part to close Chapter 9
