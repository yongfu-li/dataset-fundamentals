---
marp: true
title: Chapter 2 — Fundamentals of Data Collection
paginate: true
---

# Chapter 2 — Introduction to data collection

Chapter 1 defined what a dataset is

---

## Learning objectives
- Define data collection as a systematic
- Name the three process traits that distinguish rigorous campaigns from ad hoc gathering

---

## What is data collection?
- Hypotheses, or operational decisions can be answered with evidence rather than anecdote
- How sampling choices shape what later analysts can claim

---

## The five-step collection plan
- A practical collection plan usually proceeds through five linked decisions
- Teams first define objectives, research, monitoring, or model training
- They identify sources, such as primary experiments and surveys versus secondary archives
- Next they select methods, execute collection with quality checks

---

## Process traits of effective collection
- Effective collection programs share three process traits
- They are systematic: procedures are specified so another team could reproduce the protocol
- They are objective-oriented
- They are dynamic

---

## Example 2.1 — Collection plan for a retail satisfaction study
- Example 2.1 — hands-on module
- Example 2.1 converts a vague request into a collectable specification
- A retailer wants to know why online shoppers abandon carts
- The plan might specify an objective to identify checkout friction
- Explore the chapter example module
- View files: `modules/chapter2/example1/`

---

## Why collection design matters
- Collection quality constrains everything that follows
- Analysis cannot recover information that was never measured
- When protocols are designed well

---

## Takeaways
- Data collection is systematic and tied to objectives, not opportunistic gathering
- A five-step plan links purpose, sources, methods, execution, and storage
- Clarity about purpose and source comes before tool selection

---

## Next
- Complete the quiz for this part
- Continue to the next part on sources of data, primary, secondary

---

# Chapter 2 — Sources of data

A collection plan starts with purpose; the next decision is where records originate

---

## Learning objectives
- Distinguish primary, secondary
- Real-time source types, summarize the strengths and risks of each
- Explain why source choice and structure choice are orthogonal planning decisions

---

## Where do records come from?
- Chapter 1 classified datasets by structure and temporal behavior
- This section answers a different question: where do the records come from?
- Real-time streams that refresh with little delay
- A source choice and a structure choice are independent

---

## Primary data
- Primary data are measured directly for the present study through surveys
- The team retains control over sampling, wording, and quality checks
- The trade-off is time, cost, and the risk of human bias during interviews or observation

---

## Example 2.2 — Primary collection in a clinical monitoring study
- Example 2.2 — hands-on module
- Example 2.2 shows a primary clinical protocol designed around a recovery question
- A hospital study of post-operative recovery may collect vital signs every four hours from
- The protocol defines devices, recording intervals
- Explore the chapter example module
- View files: `modules/chapter2/example2/`

---

## Secondary data
- Secondary data were previously collected, processed, and published by others
- They are attractive when budgets are tight or when historical coverage matters
- Challenges include schema mismatch, incomplete provenance

---

## Example 2.3 — Secondary census extract for store siting
- Example 2.3 — hands-on module
- Example 2.3 shows a secondary reuse path that looks cheaper until schema mismatch appears
- A retailer considering new store locations downloads a public census extract with
- The download is fast and free
- Explore the chapter example module
- View files: `modules/chapter2/example3/`

---

## Real-time data
- Real-time data are collected and made available with minimal delay
- Such feeds usually produce dynamic datasets
- Clock drift before the stream becomes a trustworthy analytical table

---

## Takeaways
- Primary sources buy relevance and control at the price of cost and time
- Secondary sources buy speed and scale at the price of fit and provenance checks
- Real-time sources buy timeliness at the price of infrastructure and integration discipline
- Match the source class to the decision timeline and the evidence standard the study

---

## Next
- Complete the quiz for this part
- Complete the quiz, then continue to the next part on surveys, observation

---

# Chapter 2 — Surveys, observation, and scraping

Knowing a source type is not enough, you still need an instrument

---

## Learning objectives
- Match surveys, observation
- Scraping to typical research questions, name the main watch-outs for each method
- Explain why instrument and sample planning precede platform choice

---

## Choosing a collection method
- Once source type is chosen, teams select concrete methods
- Surveys and questionnaires gather structured responses from people
- Observation captures behavior in context
- Web scraping extracts content from pages that lack APIs
- Mixed designs combine instruments when no single method answers both the what and the why
- This part focuses on when each method fits; APIs are covered in the next part

---

## Surveys and questionnaires
- Public-opinion work
- Modes include online forms, face-to-face interviews, telephone contact
- Strengths include large sample reach, standardized wording, and quantifiable outputs
- Weaknesses include socially desirable answering, low response rates without incentives

---

## Example 2.5 — Campus Wi-Fi satisfaction survey plan
- Example 2.5 — hands-on module
- Example 2.5 shows a short instrument plan before any survey platform is chosen
- An IT office wants to know which buildings have unreliable Wi-Fi
- Device type, plus an open comment box for locations the closed items miss
- Explore the chapter example module
- View files: `modules/chapter2/example5/`

---

## Observation
- Observation gathers data by watching behavior or events in their natural setting
- Participant observation embeds the researcher in the activity
- Often hard to generalize from small settings
- Teams frequently combine observation with surveys so depth and breadth reinforce each

---

## Web scraping
- Web scraping uses programs to extract text, tables, or media from HTML pages
- It is useful when a site exposes public content but no API
- May trigger anti-bot defenses
- Responsible projects document robots policies, throttle requests

---

## Example 2.6 — Choosing scraping for public course catalogs
- Example 2.6 — hands-on module
- Example 2.6 stays at the decision level
- A research team needs weekly snapshots of publicly listed university course titles and
- They scrape the HTML timetable, store course code and title as structured rows
- Explore the chapter example module
- View files: `modules/chapter2/example6/`

---

## Takeaways
- Surveys fit attitudes and self-report at scale
- Each method carries distinct bias and policy risks
- Design the instrument and sampling plan first

---

## Next
- Complete the quiz for this part
- Complete the quiz

---

# Chapter 2 — APIs for collection

When a provider exposes structured endpoints, APIs are usually preferable to scraping

---

## Learning objectives
- Explain how APIs differ from scraping as a collection method
- Recognize rate limits and authentication as design constraints rather than afterthoughts

---

## What is an API for collection?
- Application Programming Interfaces provide structured access to service data
- Relative to scraping
- The trade-off is usage quotas and incomplete coverage of a site's full content

---

## Request, parse, append
- A typical API collection job follows a short loop
- Append one row per call to a growing store
- Error handling and timeouts belong in the same script so that transient failures do not

---

## Example 2.7 — Fetching a public weather API record
- Example 2.7 — hands-on module
- Example 2.7 shows a minimal request pattern that returns a JSON record suitable for
- Observed time as one row per call
- Rate limits and authentication keys must be handled so that the job remains within the
- View files: `modules/chapter2/example7/`

---

## Example 2.7 — listing

```
import requests

response = requests.get(
    "https://api.example.com/weather",
    params={"city": "Singapore"},
    timeout=10,
)
response.raise_for_status()
payload = response.json()
# Example fields: payload["temp"], payload["humidity"]
```

---

## Rate limits and keys
- API access is governed by contracts, not by page layout
- Providers set rate limits, require keys, and may cap daily volume
- Logging that separates successful rows from throttled calls
- Treating these constraints as part of the protocol prevents loss of access mid-campaign

---

## When APIs beat scraping
- Prefer APIs when a provider exposes them
- Scraping remains a fallback when public content exists but no endpoint is offered
- Each of these methods can still be executed manually or automatically

---

## Takeaways
- APIs trade scraping flexibility for structure and clearer access rules
- A minimal job requests, parses JSON fields, and appends rows
- Rate limits and keys are collection-design decisions, not deployment details

---

## Next
- Complete the quiz for this part
- Complete the quiz

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

---

# Chapter 2 — Probability sampling

Collection instruments gather answers; sampling decides whose answers count for inference

---

## Learning objectives
- Explain why sampling underpins generalization, describe simple random, stratified
- Cluster probability designs
- Match each design to a typical population and logistics profile

---

## Why sampling matters
- Sampling lets researchers learn about a population from a manageable subset of cases
- A well-chosen sample supports generalization
- This part covers three probability designs that appear repeatedly in practice
- Each assumes a usable sampling frame unless noted otherwise

---

## Simple random sampling
- In simple random sampling, each population member has an equal chance of selection
- The method reduces selection bias when a complete frame exists and when the sample is
- Operationally, teams build a complete list, draw units with a random process
- Its practical limits are incomplete frames and non-response

---

## Example 2.10 — Simple random draw from an employee roster
- Example 2.10 — hands-on module
- Example 2.10 shows a clean frame case
- A firm with two thousand employees on a complete human-resources roster wants feedback on
- Analysts draw two hundred employee identifiers uniformly at random and invite those people
- If response is high
- View files: `modules/chapter2/example10/`

---

## Stratified sampling
- Stratified sampling first partitions the population into meaningful subgroups
- The design improves precision when subgroups differ on the outcome of interest and
- Costs include planning complexity and the need for prior knowledge to define strata

---

## Example 2.11 — Stratified sample of cart abandoners
- Example 2.11 — hands-on module
- Example 2.11 mirrors the retail cart-abandonment study from the chapter opener
- Analysts divide recent abandoners into mobile and desktop strata
- The design ensures that device-specific checkout friction is visible even if one device
- Explore the chapter example module
- View files: `modules/chapter2/example11/`

---

## Cluster sampling
- Cluster sampling selects groups of units, schools, clinics, city blocks
- It is attractive when individual frames are unavailable or when travel costs make visiting
- Clusters can be efficient
- Prefer clusters that still reflect population diversity when logistics dominate

---

## Takeaways
- Use random sampling when the population is relatively homogeneous and a complete list
- Use stratified sampling when key subgroups must appear in sufficient numbers
- Use cluster sampling when logistics dominate and entire sites can be visited as units
- Non-probability options for weak frames appear in the next part

---

## Next
- Complete the quiz for this part
- Complete the quiz

---

# Chapter 2 — Additional sampling techniques

Not every study has a complete frame or the budget for probability draws

---

## Learning objectives
- Implement systematic sampling on an ordered frame with awareness of periodicity
- State when each design is defensible versus when generalizable claims are inappropriate

---

## Beyond the three probability designs
- The previous part covered simple random, stratified
- Convenience and snowball sampling
- The decision rule is whether inference to a population is required or whether exploratory

---

## Systematic sampling
- Systematic sampling selects every nth unit from an ordered frame after choosing a random
- If a population of five hundred must yield fifty interviews, the interval is ten
- Administration is often faster than drawing many independent random numbers

---

## Example 2.13 — Systematic draw from a membership directory
- Example 2.13 — hands-on module
- Example 2.13 shows a clean use case and the periodicity trap on the same kind of list
- A professional society wants fifty interview slots from a five-hundred-person alphabetical
- With interval ten and a random start of four, members four, fourteen, twenty-four
- Shuffling before the draw removes that risk
- View files: `modules/chapter2/example13/`

---

## Convenience sampling
- Convenience sampling recruits whoever is easiest to reach
- Inclusion chances are unknown
- Convenience samples buy access at the cost of bias and limited diversity
- They scaffold instrument testing, not population claims

---

## Example 2.14 — Convenience sample on a university campus
- Example 2.14 — hands-on module
- Example 2.14 shows a typical campus intercept study and why its estimates should be
- A researcher surveys the first one hundred students entering the library during exam week
- The design is cheap and fast, but evening commuters, remote students
- Explore the chapter example module
- View files: `modules/chapter2/example14/`

---

## Snowball sampling
- Snowball sampling starts with a few eligible seeds and asks them to refer others who meet
- The sample grows through social ties
- Referrals lower recruitment cost, yet they concentrate homogeneity
- Privacy protections for both participants and referrals are essential

---

## Takeaways
- Use systematic sampling for efficient probability draws on clean lists
- Reserve convenience and snowball designs for exploratory or hard-to-reach settings
- When generalizable claims are required

---

## Next
- Complete the quiz for this part
- Complete the quiz

---

# Chapter 2 — Tools for data collection

Method choices become operational through platforms and libraries

---

## Learning objectives
- Map survey platforms, scraping libraries
- API clients to the methods from earlier parts
- Recognize that platforms cannot fix poor instrument design

---

## Tools implement earlier choices
- The chapter already decided which method fits the question
- This section asks which products and libraries implement that choice
- Official API clients for structured feeds
- Observation remains largely protocol- and people-driven

---

## Survey platforms
- Survey platforms automate instrument design, distribution
- Lightweight tools suit quick internal polls
- Strengths include low technical barriers, automatic tabular exports
- Limits echo the method-level risks

---

## Example 2.16 — Choosing a form builder for the Wi-Fi survey
- Example 2.16 — hands-on module
- Example 2.16 shows a tool choice after the campus Wi-Fi instrument from an earlier example
- Plus a comma-separated export into the same warehouse as ticket logs
- A full-featured survey platform is chosen over a bare email form because branching and
- Explore the chapter example module
- View files: `modules/chapter2/example16/`

---

## Web scraping stacks
- Scraping stacks extract fields from HTML when no API is offered
- Large crawl graphs may use a framework designed for scalable spiders
- At scholarly scale
- Method-level trade-offs

---

## Example 2.17 — Static parser vs browser driver for catalog pages
- Example 2.17 — hands-on module
- Example 2.17 pairs a library choice with the course-catalog harvest from an earlier
- If course titles appear in the initial HTML, a static parser is enough and cheaper to run
- If titles load only after clicking a term filter
- Explore the chapter example module
- View files: `modules/chapter2/example17/`

---

## API clients and schedulers
- API tools are the clients, keys, and schedulers that call endpoints introduced earlier
- Relative to scraping stacks, they usually offer clearer contracts
- Operational polling loops must survive daily quotas
- Survey platforms, scrapers

---

## Takeaways
- Choose tools after methods and instruments are defined
- Survey platforms encode branching and export workflows
- Even with good tools

---

## Next
- Complete the quiz for this part
- How design questions reappear across domains

---

# Chapter 2 — Challenges and case studies

Even good tools fail when quality, bias, or integration are ignored

---

## Learning objectives
- Name recurring collection-time quality, bias
- Integration failures, describe design-level countermeasures
- Recognize how sources, methods, samples
- Tools combine in short domain case studies

---

## Prevention at collection time
- Even well-chosen methods and tools fail when quality
- This section stays at the prevention layer
- Remediation belongs to later chapters on data quality and bias

---

## Data quality issues
- Collection is the first place quality defects appear
- Automated sensors add dropouts and calibration drift
- Prevention begins at the instrument
- After collection, imputation cannot invent information that was never measured

---

## Example 2.19 — Missing fields in a clinic intake table
- Example 2.19 — hands-on module
- Example 2.19 shows how a collection-protocol gap produces a completeness failure
- A clinic intake table arrives with blank diagnosis codes for evening arrivals because the
- Without a documented catch-up process
- Explore the chapter example module
- View files: `modules/chapter2/example19/`

---

## Dealing with bias
- Bias enters when some people or events are systematically more likely to be observed than
- Measurement bias when instruments are poorly calibrated
- Countermeasures are design-level

---

## Scalability and integration
- As campaigns grow, volume and heterogeneity dominate
- IoT and social streams produce continuous arrivals that overwhelm single-server workflows
- At collection time the design responses are modest but decisive
- Without a shared station identifier and clock policy

---

## Case study — social media analytics
- Social platforms emit continuous public text that teams often want for sentiment tracking
- Automated polling tools
- Sampling is often convenience or keyword-gated rather than a probability draw

---

## Example 2.22 — Election-week sentiment collection
- Example 2.22 — hands-on module
- Example 2.22 sketches the capture job for a campaign context
- Engagement counts, and applies bot filters before any hourly aggregate is shown to leaders
- Retention is capped at the campaign window
- Explore the chapter example module
- View files: `modules/chapter2/example22/`

---

## Case studies — climate and healthcare
- Climate and environmental programs combine ground sensors, satellite products
- Calibration schedules before dashboards are promised
- Healthcare collection spans wearables, remote monitoring devices
- Standardized identifiers are engineered alongside the sensors
- Together, these cases return to the chapter's central lesson

---

## Takeaways
- Stop defects at the instrument and protocol, not only in cleaning pipelines
- Document channel exclusions and integration keys before volume peaks
- Domain case studies show the same design questions in social, climate
- Those choices determine whether later chapters inherit a trustworthy dataset

---

## Next
- Complete the quiz for this part
- Complete the quiz to finish Chapter 2
