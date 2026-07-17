---
marp: true
title: Chapter 3 — Ethics and Privacy in Data Work
paginate: true
---

# Chapter 3 — Introduction to ethics and privacy

Chapter 2 asked how records enter a dataset

---

## Learning objectives
- Distinguish ethics from privacy, name stakeholders affected across the dataset lifecycle
- Explain why compliance alone does not guarantee ethical practice

---

## Why ethics and privacy matter now
- Data-driven systems shape decisions in healthcare, finance, marketing, and government
- As collection and use scale
- Misuse can enable identity theft, fraud, discrimination

---

## Defining ethics and privacy
- In data work, ethics refers to principles that guide how data are collected, used, shared
- Privacy denotes individuals' rights to control personal data
- Ethics asks whether a use should proceed

---

## Ethics versus privacy at a glance
- Ethics focuses on who is harmed or helped and whether uses are fair and accountable
- Privacy focuses on meaningful consent and individual control
- A team can be legally compliant yet ethically weak if uses are opaque or discriminatory

---

## Lifecycle and stakeholders
- Documentation
- Stakeholders include practitioners, leaders, policymakers
- No single role owns the full obligation

---

## Example 3.1 — Stakeholders in a wellness app launch
- Example 3.1 — hands-on module
- Example 3.1 compresses those roles into one product decision
- Product wants finer activity tracking
- Ethical design must negotiate utility, consent, and minimization together
- Explore the chapter example module
- View files: `modules/chapter3/example1/`

---

## Takeaways
- Ethics and privacy are distinct but mutually reinforcing
- Obligations span the full dataset lifecycle, not only deployment
- Ethical data work is coordinated across roles, utility, consent

---

## Next
- Complete the quiz for this part
- Continue to the next part on core ethical principles

---

# Chapter 3 — Core ethical principles

This part turns ethical slogans into operational tests

---

## Learning objectives
- Name the five core principles, state what each demands in practice
- Recognize them as design constraints, not post-deployment patches

---

## Five principles overview
- Non-maleficence asks teams to prevent privacy breaches, discrimination
- Fairness requires avoiding systematic disadvantage and monitoring disparities
- Transparency means disclosing collection purposes and
- Accountability assigns responsibility, monitoring, and remediation
- Respect for autonomy centers informed consent and ongoing control

---

## Do no harm
- Do no harm requires anticipating harms from collection, processing
- Yielding less accurate predictions and misdiagnosis risk for that group
- Upholding non-maleficence means auditing subgroup performance and adding safeguards before

---

## Example 3.2 — Healthcare AI system
- Example 3.2 — hands-on module
- The clinical pattern: skewed training data becomes skewed care
- Explore the chapter example module
- View files: `modules/chapter3/example2/`

---

## Fairness
- Fairness requires that practices and models not systematically disadvantage particular
- The model can reproduce that pattern for new applicants
- Treat disparity risk as a design constraint, not a post-deployment discovery

---

## Example 3.3 — Hiring algorithm
- Example 3.3 — hands-on module
- Example 3.3 restates the hiring pattern
- Chapter 7 develops metrics and mitigation
- Explore the chapter example module
- View files: `modules/chapter3/example3/`

---

## Transparency and accountability
- Transparency builds trust by clarifying what is collected, why
- Accountability assigns someone who can explain outcomes, respond to incidents
- Example 3.4 applies transparency to credit scoring

---

## Respect for autonomy
- Respect for autonomy centers informed consent and ongoing control
- Lets users revoke consent or delete history
- Autonomy fails when consent is buried in unrelated terms or withdrawal is practically

---

## Example 3.6 — Health-tracking app
- Example 3.6 — hands-on module
- Example 3.6 pairs consent user experience with sensitive streams such as activity and
- Explore the chapter example module
- View files: `modules/chapter3/example6/`

---

## Takeaways
- Principles are operational tests for design choices
- Non-maleficence and fairness catch harm before deployment
- Transparency and accountability make systems answerable
- Autonomy requires meaningful consent and control, not checkbox compliance alone

---

## Next
- Complete the quiz for this part
- Continue to utility trade-offs, ethical dilemmas when principles conflict

---

# Chapter 3 — Utility, dilemmas, and consequences

Many projects create value only by using personal information

---

## Learning objectives
- Explain the utility–privacy tension, describe two ethical dilemma patterns
- List consequences of ignoring ethics for people and organizations

---

## Balancing utility and privacy
- Personalized care
- Treat statutes as floors rather than ceilings
- The ethical task is deciding whether proposed utility warrants the privacy burden at all

---

## Example 3.7 — Utility–privacy tension in personal predictions
- Example 3.7 — hands-on module
- Example 3.7 states the trade-off in prediction settings
- Models that score health risk or creditworthiness can improve service allocation
- Without minimization, access control
- Explore the chapter example module
- View files: `modules/chapter3/example7/`

---

## Ethical dilemmas in practice
- Dilemmas arise when principles conflict or no option is clearly harm-free
- Example 3.8 sketches criminal-justice risk scores
- Example 3.9 returns to platform collection

---

## Example 3.8 — Dilemma in criminal justice risk scores
- Example 3.8 — hands-on module
- The justice-system conflict previewed again in the bias section and Chapter 7
- More data alone does not dissolve the conflict
- Explore the chapter example module
- View files: `modules/chapter3/example8/`

---

## Consequences of neglecting ethics
- Ignoring ethics produces privacy violations, discrimination, eroded trust
- Example 3.10 shows personal exposure after unauthorized use or leakage, fraud, harassment

---

## Example 3.10 — Misuse of personal data
- Example 3.10 — hands-on module
- Example 3.10 connects ethical neglect to breach economics developed later in the chapter
- Organizations also face fines, litigation
- Ethical practice is both a moral and a sustainability requirement
- View files: `modules/chapter3/example10/`

---

## Takeaways
- Utility and privacy trade off by design, not by accident
- Dilemmas need structured decision procedures, not silent defaults
- Neglecting ethics harms people first and balance sheets second

---

## Next
- Complete the quiz for this part
- Continue to data privacy principles, consent, anonymization

---

# Chapter 3 — Data privacy principles

Privacy as a right becomes privacy as practice through agreements, representations, and design defaults

---

## Learning objectives
- Define data privacy in pipeline terms, contrast three core privacy-management concepts
- Read GDPR versus HIPAA as planning maps, not compliance manuals

---

## From rights to management practice
- Section 3.1 defined privacy as individuals' control over personal data
- This section asks which agreements and defaults make that control enforceable
- Personal data includes names and addresses but also behavioral logs
- Ethics still decides whether a use should proceed

---

## Three core concepts
- Informed consent requires freely given
- Anonymization reduces linkability for secondary use
- Privacy by Design embeds protections into architecture from the start rather than bolting

---

## Informed consent in healthcare
- Informed consent is the operational counterpart of respect for autonomy
- Example 3.11 shows a clinic that wants to reuse treatment records for research
- Bundling research into a general intake form fails the standard

---

## Example 3.11 — Consent for healthcare data uses
- Example 3.11 — hands-on module
- The clinical consent bar
- Explore the chapter example module
- View files: `modules/chapter3/example11/`

---

## Privacy by Design
- Privacy by Design means minimization, protective defaults
- Should expose clear sharing and deletion controls before any partner sync

---

## Example 3.12 — Privacy by Design in a health app
- Example 3.12 — hands-on module
- Example 3.12 pairs with the autonomy vignette in Example 3.6 but focuses on architecture
- Explore the chapter example module
- View files: `modules/chapter3/example12/`

---

## GDPR and HIPAA as anchors
- The GDPR governs personal data of people in the EU and EEA with extraterritorial reach for
- It emphasizes lawfulness, purpose limitation, minimization, accountability
- HIPAA concentrates parallel duties on protected health information held by US covered
- Section 3.6 expands scope, rights, and penalties

---

## Takeaways
- Privacy management is more than notices
- Consent must be meaningful
- GDPR and HIPAA illustrate how principles become enforceable duties

---

## Next
- Complete the quiz for this part
- Continue to privacy-preserving techniques, anonymization, encryption, differential privacy

---

# Chapter 3 — Privacy-preserving techniques

Teams often need useful analysis while reducing exposure of personal records

---

## Learning objectives
- Place four techniques on a protection map, state the main caveat for each
- Explain how they stack with consent and purpose limits

---

## Techniques at a glance
- Anonymization and de-identification reduce linkability in shared tables
- Encryption protects confidentiality in transit and at rest
- Differential privacy limits how much any single record can change an aggregate release
- Federated learning trains models where raw data stay on devices or silos

---

## Anonymization and re-identification risk
- Coarsening rare combinations
- The canonical warning
- Stronger protection usually requires coarser aggregation

---

## Example 3.13 — Re-identification from location patterns
- Example 3.13 — hands-on module
- Example 3.13 shows why anonymization is a management goal, not a guarantee
- Explore the chapter example module
- View files: `modules/chapter3/example13/`

---

## Encryption limits
- Encryption keeps intercepted packets unreadable
- Minimization, not from encryption alone
- Example 3.14 makes that limit explicit for medical messaging

---

## Differential privacy
- Differential privacy limits what an adversary learns about any individual from aggregate
- The standing trade-off is privacy budget versus accuracy
- Example 3.15 shows product telemetry released under a differential-privacy mechanism so

---

## Example 3.15 — Differential privacy for product telemetry
- Example 3.15 — hands-on module
- Example 3.15 depends on correct noise calibration and on not publishing too many
- Explore the chapter example module
- View files: `modules/chapter3/example15/`

---

## Federated learning
- Federated learning reduces central pools of raw text or sensor data by training locally
- Example 3.16 shows on-device keyboard prediction

---

## Example 3.16 — Federated learning for on-device keyboard prediction
- Example 3.16 — hands-on module
- Example 3.16 illustrates when raw centralization is unacceptable
- Explore the chapter example module
- View files: `modules/chapter3/example16/`

---

## Takeaways
- Choose controls to match the threat
- Stack techniques where needed
- Technical PETs implement privacy principles, they do not replace them

---

## Next
- Complete the quiz for this part
- Continue to bias and fairness, how ethical principles connect to model outcomes

---

# Chapter 3 — Bias and fairness

Bias and fairness connect ethical principles to model outcomes once systems affect hiring

---

## Learning objectives
- Define bias in data work
- List five mitigation habits at the ethics-chapter level

---

## What bias means here
- Bias means systematic deviations in collection
- Data are not neutral mirrors
- Example 3.17 states the general risk

---

## Example 3.17 — Bias in AI system
- Example 3.17 — hands-on module
- Example 3.17 highlights domains where errors change life chances, hiring, criminal justice
- Explore the chapter example module
- View files: `modules/chapter3/example17/`

---

## Selection bias
- So error concentrates on underrepresented groups
- Collection design in Chapter 2 is often where skew begins
- Example 3.18 shows a diagnostic model trained mainly on one demographic slice

---

## Example 3.18 — Selection bias in healthcare AI
- Example 3.18 — hands-on module
- Example 3.18 relates to the non-maleficence vignette in Example 3.2
- Explore the chapter example module
- View files: `modules/chapter3/example18/`

---

## Algorithmic bias
- Thresholds can still allocate error unevenly
- Example 3.19 restates hiring rankers that reproduce gender or racial patterns via proxies

---

## Case study pointer — COMPAS
- Example 3.20 points to COMPAS recidivism tools
- The ethics lesson matches Example 3.8, overall accuracy is not a fairness certificate
- Chapter 7 develops detection and impact analysis for this case

---

## Mitigation checklist
- Addressing bias requires better data, explicit fairness criteria
- At this chapter's level

---

## Takeaways
- Fairness work is continuous governance after the principles in Section 3.2
- Selection and algorithmic bias are frequent entry points
- Landmark cases illustrate mechanisms

---

## Next
- Complete the quiz for this part
- Continue to real-world privacy laws, GDPR, HIPAA, CCPA, and selected other regimes

---

# Chapter 3 — Real-world privacy laws

Privacy statutes turn principles into enforceable duties for controllers and processors

---

## Learning objectives
- Summarize scope and principle highlights for GDPR, HIPAA
- CCPA/CPRA, name data-subject or patient rights teams must honor
- Recognize why global products need jurisdiction maps

---

## From principles to enforceable duties
- Section 3.3 previewed GDPR and HIPAA at principle level
- Details change with amendments, treat the text as a planning map for data teams

---

## GDPR essentials
- Or monitor, those people
- Accountability with documented controls
- Data-subject rights include access, rectification, erasure, restriction, portability

---

## HIPAA essentials
- HIPAA is a US federal framework for protected health information held by covered entities
- The Privacy Rule limits uses and disclosures
- Rehearsing notification workflows

---

## CCPA and CPRA
- To non-discrimination for exercising rights
- Relative to GDPR

---

## Other notable laws
- COPPA requires verifiable parental consent before collecting personal information from
- Brazil's LGPD and China's PIPL echo GDPR-style themes while remaining distinct enforcement
- Global products need maps of which residents are in scope, where data may be stored

---

## Example 3.28 — GDPR fine ceiling
- Example 3.28 — hands-on module
- Example 3.28 illustrates regulatory exposure
- Explore the chapter example module
- View files: `modules/chapter3/example28/`

---

## Takeaways
- Statutes encode rights catalogs and accountability regimes, not merely privacy policies
- GDPR, HIPAA, and CCPA/CPRA overlap in themes but differ in scope and posture
- Multistate and multinational operators often adopt the strictest baseline they face while

---

## Next
- Complete the quiz for this part
- Continue to data breaches, definitions, causes, and three landmark failure modes

---

# Chapter 3 — Data breaches

A data breach is unauthorized access to, disclosure of, or destruction of sensitive information

---

## Learning objectives
- Define a data breach, name common causes
- Distinguish three organizational failure modes illustrated by Equifax, Yahoo
- Target

---

## Understanding data breaches
- Excessive third-party access
- Organizations storing identity
- Statute-level notification clocks assume teams can detect and classify incidents quickly

---

## Example 3.22 — Data breach severity range
- Example 3.22 — hands-on module
- Example 3.22 states the severity range
- Impact scales with sensitivity, volume, dwell time before detection
- Explore the chapter example module
- View files: `modules/chapter3/example22/`

---

## Equifax — unpatched internet-facing systems
- Example 3.23 describes the 2017 Equifax incident
- The failure mode is delayed patching and weak monitoring on high-value identity stores
- Downstream costs appear in the next part

---

## Example 3.23 — Equifax case study
- Example 3.23 — hands-on module
- The patching-discipline lesson
- Explore the chapter example module
- View files: `modules/chapter3/example23/`

---

## Yahoo — delayed disclosure
- Example 3.24 covers Yahoo breaches affecting hundreds of millions of accounts
- The failure mode is late accountability to users and markets after compromise at consumer

---

## Target — third-party vendor path
- Example 3.25 describes attackers using third-party vendor access to reach point-of-sale
- The failure mode is vendor risk and malware on retail networks

---

## Takeaways
- Breach risk is organizational as much as cryptographic
- Three patterns recur, unpatched systems, delayed disclosure, and vendor-mediated entry
- Prevention controls mapped to each pattern come next

---

## Next
- Complete the quiz for this part
- Continue to breach consequences and prevention

---

# Chapter 3 — Breach consequences and prevention

Breach consequences span finance, reputation, regulation, and individual fraud risk

---

## Learning objectives
- List major consequence categories for organizations and individuals
- Match prevention controls to unpatched systems, delayed disclosure
- Vendor entry

---

## Consequences for organizations
- Financial losses include investigation, notification, credit monitoring, litigation
- Regulatory penalties can reach GDPR ceilings illustrated in Example 3.28
- Reputational damage and operational downtime while systems are rebuilt extend harm beyond

---

## Example 3.26 — Equifax breach costs
- Example 3.26 — hands-on module
- Example 3.26 attaches hundreds of millions of dollars in settlements, remediation
- Delayed patching on high-value identity stores becomes a balance-sheet event
- Explore the chapter example module
- View files: `modules/chapter3/example26/`

---

## Example 3.27 — Yahoo breach and acquisition impact
- Example 3.27 — hands-on module
- Example 3.27 discusses governance and cybersecurity oversight failures that coincided with
- Explore the chapter example module
- View files: `modules/chapter3/example27/`

---

## Consequences for individuals
- Individuals whose identifiers leak may face identity theft and fraud for years
- Organizations may suffer operational paralysis while forensic work continues
- Prevention therefore protects people first and enterprise value second

---

## Prevention mapped to failure modes
- Timely patching and monitoring address unpatched internet-facing systems
- Rehearsed detection, escalation, and disclosure address delayed accountability
- Vendor risk reviews and least-privilege third-party access address supply-chain entry
- Data minimization

---

## No single control is sufficient
- Equifax, Yahoo, and Target each failed at a different layer of the stack
- Prevention should map to failure modes from Section 3.7, not only to a generic checklist
- Chapter 1 already named encryption and access control as management practices

---

## Takeaways
- Breaches are balance-sheet and governance events, not only IT incidents
- Map controls to known failure patterns
- Minimization ensures stolen stores contain less that can be abused

---

## Next
- Complete the quiz for this part
- Continue to ethical decision-making, structured lenses for conflicts among principles

---

# Chapter 3 — Ethical decision-making

When utility, rights, fairness

---

## Learning objectives
- Describe utilitarian, rights-based, virtue
- Justice reasoning
- Explain why stakeholder review belongs before locking thresholds or sharing defaults

---

## Four lenses for data work
- It formalizes the utility–privacy tension from Section 3.2
- Rights-based reasoning holds that autonomy, privacy
- Virtue ethics asks what an honest, fair
- Justice reasoning inspects whether burdens fall disproportionately on already

---

## Example 3.29 — Healthcare prediction
- Example 3.29 — hands-on module
- Even when individuals did not consent to research reuse
- Which is why rights-based checks are needed in parallel
- Explore the chapter example module
- View files: `modules/chapter3/example29/`

---

## Rights, virtue, and justice vignettes
- Duties rather than optional costs
- Virtue ethics may require disclosing systematic label gaps rather than selling cleaner
- Justice reasoning may delay hiring ranker launch until subgroup audits show disparities

---

## Example 3.33 — User data collection for marketing
- Example 3.33 — hands-on module
- Example 3.33 applies all four lenses to marketing collection under a vague notice
- Utilitarian views emphasize engagement gains
- Explore the chapter example module
- View files: `modules/chapter3/example33/`

---

## Example 3.34 — AI in criminal justice
- Example 3.34 — hands-on module
- Example 3.34 returns to recidivism and hotspot conflicts from earlier in the chapter
- A model may improve average institutional metrics while concentrating harm on already
- Justice criteria that inspect subgroup harms, not citywide averages alone
- View files: `modules/chapter3/example34/`

---

## Stakeholder involvement
- Section 3.1 and Example 3.1 named practitioners, leaders, policymakers, and data subjects
- Decision-making adds a process requirement
- Document who was consulted, which lens prevailed

---

## Takeaways
- No single lens dissolves every conflict, teams should apply several deliberately
- Stakeholder review surfaces residual risks a single product owner may miss
- Accountability requires a record of the choice, not only the shipped feature

---

## Next
- Complete the quiz for this part
- Continue to the final part on emerging trends, AI surveillance, global regulation friction

---

# Chapter 3 — Emerging trends and challenges

AI scale, fragmented global rules, and new privacy-enhancing tools continue to reshape ethics and privacy practice

---

## Learning objectives
- Describe AI-scale privacy risks, name two global regulation friction patterns
- Identify near-term directions including privacy-enhancing technologies and stronger

---

## AI and privacy concerns
- Large-scale sensing and prediction create surveillance capacity that traditional
- Example 3.35 focuses on facial analysis at city scale

---

## Example 3.35 — Surveillance and facial analysis
- Example 3.35 — hands-on module
- Example 3.35 connects technical accuracy gaps to civil-liberties risk
- Explore the chapter example module
- View files: `modules/chapter3/example35/`

---

## Ethics debates in deployed AI
- How much human control must remain in high-stakes loops
- Example 3.37 illustrates autonomous vehicle liability

---

## Global privacy regulation challenges
- Cross-border products confront overlapping rules rather than a single global code
- Request-handling workflows
- Localization mandates and transfer restrictions

---

## Example 3.38 — Conflicting privacy regimes
- Example 3.38 — hands-on module
- The operational cost of running multiple statutory programs in one product
- Explore the chapter example module
- View files: `modules/chapter3/example38/`

---

## Future directions
- Privacy by Design defaults
- Example 3.41 sketches self-sovereign identity proposals that let people hold and present

---

## Example 3.41 — Self-sovereign identity
- Example 3.41 — hands-on module
- Example 3.41 aligns with stronger individual control over personal data
- Explore the chapter example module
- View files: `modules/chapter3/example41/`

---

## Looking ahead
- Emerging tensions
- Chapter 7 deepens bias measurement and mitigation
- Chapter 4 turns to annotation

---

## Takeaways
- AI scale outpaces notice-only governance
- Global products need jurisdiction maps and transfer plans
- PETs and design defaults are mainstream, the adoption gap is organizational

---

## Next
- Complete the quiz for this part
- Pause for the quiz
