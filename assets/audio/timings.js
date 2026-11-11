window.LESSON_TIMINGS = {
  "ch5_p1_solo": {
    "duration": 528.984,
    "slides": [
      {
        "id": "s1",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "Welcome to Chapter 5, Lesson 1. Data cleaning is not an ad-hoc collection of regex substitutions, heuristic scripts, or manual spreadsheet edits; it is the formal engineering discipline of restoring statistical fidelity to corrupted state spaces. Rooted in Fellegi and Holt's edit theory and total survey error modeling, clean data pipelines establish the mathematical boundaries between noise and true generative signal.",
            "dock": "main",
            "start": 0.0,
            "end": 26.76
          },
          {
            "speaker": "Dr. Nova",
            "text": "In this masterclass, we formalize the four foundational pillars of data cleaning: the ISO/IEC 25012 multidimensional quality framework, the mathematics of attenuation bias in machine learning models, Thomas Redman's error propagation in relational joins, and the 1-10-100 economic cost cascade rule.",
            "dock": "main",
            "start": 26.76,
            "end": 48.672
          }
        ]
      },
      {
        "id": "s2",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "Modern enterprise data architectures formalize quality through the international standard ISO/IEC 25012, defining quality across six orthogonal dimensions: Completeness, Syntactic Validity, Plausibility, Relational Consistency, Uniqueness, and Currency.",
            "dock": "main",
            "start": 48.672,
            "end": 67.416
          },
          {
            "speaker": "Dr. Nova",
            "text": "The composite Data Quality Index, or DQI, is formulated as a normalized weighted convex combination of dimensional scores Q sub j, where weights sum to one and each metric is evaluated against strict production acceptance thresholds.",
            "dock": "main",
            "start": 67.416,
            "end": 82.416
          }
        ]
      },
      {
        "id": "s3",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "To operationalize ISO/IEC 25012, enterprise data architectures implement a sequential multi-stage quality gate pipeline. Raw ingested records must survive each orthogonal verification barrier before entering the production gold corpus.",
            "dock": "main",
            "start": 82.416,
            "end": 99.576
          },
          {
            "speaker": "Dr. Nova",
            "text": "Records failing any barrier are immediately diverted into an automated quarantine stream with full provenance lineage, preventing dirty batches from poisoning analytical feature stores or downstream retraining pipelines.",
            "dock": "main",
            "start": 99.576,
            "end": 112.56
          }
        ]
      },
      {
        "id": "s4",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "A widespread misconception in machine learning is that random measurement noise in input features cancels out during model training. In reality, classical additive noise induces systematic attenuation bias, permanently flattening learned regression slopes toward zero.",
            "dock": "main",
            "start": 112.56,
            "end": 128.832
          },
          {
            "speaker": "Dr. Nova",
            "text": "When continuous feature X is contaminated with zero-mean noise U with variance sigma-u squared, the ordinary least squares slope estimator converges to the true slope multiplied by the reliability ratio lambda, equal to sigma-x squared divided by sigma-x squared plus sigma-u squared.",
            "dock": "main",
            "start": 128.832,
            "end": 145.656
          }
        ]
      },
      {
        "id": "s5",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "Thomas Redman formalized how data defects compound non-linearly across enterprise relational architectures. When multiple tables are joined on primary and foreign keys, the defect probability of the joined tuple escalates rapidly.",
            "dock": "main",
            "start": 145.656,
            "end": 160.464
          },
          {
            "speaker": "Dr. Nova",
            "text": "The probability that a joined tuple is clean equals the joint product of each individual table's clean rate. Consequently, joining three tables with minor three, four, and five percent defect rates produces a joined table with an eleven point five percent corruption rate.",
            "dock": "main",
            "start": 160.464,
            "end": 177.384
          }
        ]
      },
      {
        "id": "s6",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "Welcome to the ISO/IEC 25012 Quality Gate Studio. Before you is a contaminated batch of enterprise transaction records displaying missing amounts, negative currency values, invalid country ISO codes, and duplicated primary keys.",
            "dock": "sim",
            "start": 177.384,
            "end": 194.712
          },
          {
            "speaker": "Dr. Nova",
            "text": "Use the remediation controls to impute missing fields, enforce range constraints, and deduplicate entities. Observe how each remediation action dynamically recalculates dimensional scores and drives the composite DQI toward production certification.",
            "dock": "sim",
            "start": 194.712,
            "end": 210.72
          }
        ]
      },
      {
        "id": "s7",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "Time for our first active checkpoint. Consider an algorithmic trading firm forecasting default risk Y from volatility feature X with true slope beta-one equal to 4.0. Due to network latency, measurement noise variance is twice the variance of the true signal.",
            "dock": "checkpoint",
            "start": 210.72,
            "end": 228.048
          },
          {
            "speaker": "Dr. Nova",
            "text": "Calculate the exact attenuated slope beta-hat that the production model will learn, and evaluate how this affects margin capital allocation.",
            "dock": "checkpoint",
            "start": 228.048,
            "end": 236.808
          }
        ]
      },
      {
        "id": "s8",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "The economic impact of data defects follows an exponential cost cascade governed by the 1-10-100 rule. Every dollar invested in schema validation at ingestion prevents ten dollars of warehouse ETL batch rework and over one hundred dollars of production failure.",
            "dock": "main",
            "start": 236.808,
            "end": 254.352
          },
          {
            "speaker": "Dr. Nova",
            "text": "When data defects escape into production, the costs multiply into model mispredictions, regulatory compliance penalties, customer churn, and emergency engineering war rooms.",
            "dock": "main",
            "start": 254.352,
            "end": 266.088
          }
        ]
      },
      {
        "id": "s9",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "On September 23, 1999, NASA lost the 327.6 million dollar Mars Climate Orbiter spacecraft as it attempted orbital insertion. The root cause was a fundamental data quality failure: unit metadata inconsistency.",
            "dock": "main",
            "start": 266.088,
            "end": 282.792
          },
          {
            "speaker": "Dr. Nova",
            "text": "Ground station software computed thruster impulse in Imperial pound-force-seconds, while spacecraft navigation algorithms expected Metric Newton-seconds. Without serialization unit validation, the unflagged 4.45-times discrepancy caused the probe to plunge fatally into Mars's upper atmosphere.",
            "dock": "main",
            "start": 282.792,
            "end": 302.496
          }
        ]
      },
      {
        "id": "s10",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "In 2022, credit reporting giant Equifax suffered a major technology malfunction where stale cached code and timestamp currency failure caused credit score inaccuracies for hundreds of thousands of consumers over a three-week window.",
            "dock": "main",
            "start": 302.496,
            "end": 316.608
          },
          {
            "speaker": "Dr. Nova",
            "text": "In contrast, Amazon addressed large-scale data lake defects by developing Deequ, an open-source verification framework that computes unit test assertions over distributed Apache Spark datasets, preventing thousands of silent daily pipeline breakages.",
            "dock": "main",
            "start": 316.608,
            "end": 332.376
          }
        ]
      },
      {
        "id": "s11",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "In modern streaming AI architectures, data value is not static; it decays exponentially over time. We formalize this temporal degradation using the exponential currency model, where timeliness Q sub t equals e to the negative lambda delta t.",
            "dock": "main",
            "start": 332.376,
            "end": 348.744
          },
          {
            "speaker": "Dr. Nova",
            "text": "In fraud detection systems, customer geolocation has a high decay parameter. A network batch propagation delay of just forty-five seconds destroys nearly ninety percent of the location signal, requiring high-throughput streaming engines like Kafka or Flink.",
            "dock": "main",
            "start": 348.744,
            "end": 364.872
          }
        ]
      },
      {
        "id": "s12",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "Welcome to the Attenuation Bias and Cost Cascade Workbench. In this interactive simulation, you can dynamically manipulate true feature variance, measurement noise variance, and the true population slope.",
            "dock": "sim",
            "start": 364.872,
            "end": 378.264
          },
          {
            "speaker": "Dr. Nova",
            "text": "Notice how increasing noise variance immediately depresses the reliability ratio lambda, visibly flattening the red attenuated regression line away from the green true generative slope. Toggle to the Cost Cascade tab to simulate economic defect escape scenarios.",
            "dock": "sim",
            "start": 378.264,
            "end": 394.512
          }
        ]
      },
      {
        "id": "s13",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "Time for our second active checkpoint. An enterprise data analytics team joins four tables in an e-commerce star schema: Fact Orders with two percent defect rate, Customers with three percent, Products with two percent, and Promotions with four percent defect rate.",
            "dock": "checkpoint",
            "start": 394.512,
            "end": 411.288
          },
          {
            "speaker": "Dr. Nova",
            "text": "Calculate the exact probability that an analyst query returns a corrupted join tuple, and evaluate whether isolated table cleanliness guarantees warehouse accuracy.",
            "dock": "checkpoint",
            "start": 411.288,
            "end": 421.608
          }
        ]
      },
      {
        "id": "s14",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "Engineering teams navigate three distinct cleaning paradigms: upstream schema validation gates, batch warehouse ETL cleaning, and active model-in-the-loop cleaning such as ActiveClean.",
            "dock": "main",
            "start": 421.608,
            "end": 433.224
          },
          {
            "speaker": "Dr. Nova",
            "text": "ActiveClean, formulated by Krishnan and colleagues, prioritizes cleaning records that exert the highest gradient contribution on model loss. Balancing upstream prevention with selective iterative cleaning achieves the Pareto optimum of accuracy and compute cost.",
            "dock": "main",
            "start": 433.224,
            "end": 449.568
          }
        ]
      },
      {
        "id": "s15",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "To bridge theoretical mathematical formalisms into production software, we implement our data cleaning foundation engine in Python using Pydantic V2. This module validates dimensional weights, evaluates OLS attenuation bias, calculates compound join corruption, and computes 1-10-100 economic impact.",
            "dock": "main",
            "start": 449.568,
            "end": 470.616
          },
          {
            "speaker": "Dr. Nova",
            "text": "Notice how field validators strictly enforce normalized convex combination weights summing to one, and unit tests verify mathematical bounds with tight tolerance assertions.",
            "dock": "main",
            "start": 470.616,
            "end": 481.416
          }
        ]
      },
      {
        "id": "s16",
        "turns": [
          {
            "speaker": "Dr. Nova",
            "text": "To conclude Lesson 5.1, internalize the Four Golden Rules of Systematic Data Cleaning: First, measurement noise does not average out—it attenuates learned feature weights. Second, Redman's law compounds defect rates across relational joins. Third, upstream schema prevention provides a hundred-fold return over downstream fixing. Fourth, quality requires multidimensional ISO/IEC 25012 verification.",
            "dock": "main",
            "start": 481.416,
            "end": 510.528
          },
          {
            "speaker": "Dr. Nova",
            "text": "In Lesson 5.2, we dive deep into Missing Data: exploring Donald Rubin's foundational taxonomy of MCAR, MAR, and MNAR missingness mechanisms, Little's statistical test, and Multivariate Imputation by Chained Equations. See you in Lesson 5.2!",
            "dock": "main",
            "start": 510.528,
            "end": 528.984
          }
        ]
      }
    ]
  },
  "ch5_p1_duo": {
    "duration": 620.64,
    "slides": [
      {
        "id": "s1",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "Dr. Nova, in everyday data science, practitioners often just drop missing rows with dropna and run a few ad-hoc regex substitutions. Why do we need formal mathematical theory for data cleaning?",
            "dock": "main",
            "start": 0.0,
            "end": 12.168
          },
          {
            "speaker": "Dr. Nova",
            "text": "Because naive fixes often destroy statistical signal, Kaito! Dropping rows can introduce catastrophic survival bias, while uncleaned measurement noise systematically attenuates regression coefficients and model weights toward zero.",
            "dock": "main",
            "start": 12.168,
            "end": 27.072
          },
          {
            "speaker": "Kaito",
            "text": "So dirty data doesn't just reduce accuracy—it actively distorts the model's understanding of feature importance?",
            "dock": "main",
            "start": 27.072,
            "end": 34.128
          },
          {
            "speaker": "Dr. Nova",
            "text": "Precisely. And across multi-table relational joins, even minor defect rates compound exponentially into double-digit warehouse corruption. Formal pipelines are essential.",
            "dock": "main",
            "start": 34.128,
            "end": 46.68
          }
        ]
      },
      {
        "id": "s2",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "Looking at these six dimensions, engineering teams frequently obsess over completeness—making sure there are zero nulls—while completely ignoring consistency or timeliness.",
            "dock": "main",
            "start": 46.68,
            "end": 56.496
          },
          {
            "speaker": "Dr. Nova",
            "text": "That is a classic anti-pattern, Kaito. A dataset can be 100% complete and valid syntactically, yet contain fatal semantic contradictions—like a three-year-old customer marked as married, or stale credit scores from six months ago.",
            "dock": "main",
            "start": 56.496,
            "end": 72.072
          },
          {
            "speaker": "Kaito",
            "text": "And the composite DQI combines them all with convex weights, establishing an automated production deployment gate!",
            "dock": "main",
            "start": 72.072,
            "end": 79.224
          },
          {
            "speaker": "Dr. Nova",
            "text": "Exactly. A pipeline that only checks nulls is blind to ninety percent of real-world operational failure modes.",
            "dock": "main",
            "start": 79.224,
            "end": 87.096
          }
        ]
      },
      {
        "id": "s3",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "Dr. Nova, why order the gates sequentially? Does the order of checks really matter from an engineering standpoint?",
            "dock": "main",
            "start": 87.096,
            "end": 95.136
          },
          {
            "speaker": "Dr. Nova",
            "text": "Computational efficiency dictates the order, Kaito! Inexpensive syntactic checks—null checks, regexes, and type validations—execute first at sub-millisecond cost. Expensive relational joins, cross-column constraint evaluations, and fuzzy deduplication run only on records that pass the syntactic filters.",
            "dock": "main",
            "start": 95.136,
            "end": 117.24
          },
          {
            "speaker": "Kaito",
            "text": "That saves massive compute on invalid payloads and isolates defect root causes cleanly in the quarantine stream!",
            "dock": "main",
            "start": 117.24,
            "end": 124.008
          },
          {
            "speaker": "Dr. Nova",
            "text": "Exactly. Filtering dirty records early preserves GPU cluster budgets and prevents corrupt batches from triggering downstream ETL cascading crashes.",
            "dock": "main",
            "start": 124.008,
            "end": 134.472
          }
        ]
      },
      {
        "id": "s4",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "Wait, Dr. Nova! In linear regression, doesn't zero-mean noise average out in expectation across large training datasets?",
            "dock": "main",
            "start": 134.472,
            "end": 143.328
          },
          {
            "speaker": "Dr. Nova",
            "text": "Noise in the target variable Y averages out into the residual variance without biasing the slope, Kaito. But noise in the feature X appears in the denominator—the feature variance—inflating it and systematically compressing the learned slope toward zero!",
            "dock": "main",
            "start": 143.328,
            "end": 158.88
          },
          {
            "speaker": "Kaito",
            "text": "And in a multivariate model with correlated features, that noise covariance matrix can even flip the mathematical sign of a feature's coefficient entirely!",
            "dock": "main",
            "start": 158.88,
            "end": 167.928
          },
          {
            "speaker": "Dr. Nova",
            "text": "Precisely. If your sensor noise is twice the true signal variance, your algorithmic trading engine perceives only one-third of the true market risk. That is why denoising is mandatory before training.",
            "dock": "main",
            "start": 167.928,
            "end": 181.296
          }
        ]
      },
      {
        "id": "s5",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "Every database team I talk to claims their individual tables are 96% accurate or better. They assume their corporate data warehouse must be in fantastic shape!",
            "dock": "main",
            "start": 181.296,
            "end": 191.832
          },
          {
            "speaker": "Dr. Nova",
            "text": "That is the relational illusion, Kaito! When an analyst runs a star-schema query joining four or five tables, those tiny defect probabilities compound exponentially. More than one in every ten rows delivered to dashboards is corrupted.",
            "dock": "main",
            "start": 191.832,
            "end": 207.768
          },
          {
            "speaker": "Kaito",
            "text": "Which proves why data cleaning must occur before relational joins at the ingestion tier, not after joining!",
            "dock": "main",
            "start": 207.768,
            "end": 213.96
          },
          {
            "speaker": "Dr. Nova",
            "text": "Exactly. Cleaning dirty tables after an inner join is like trying to un-bake a cake. You must clean the ingredients before they combine.",
            "dock": "main",
            "start": 213.96,
            "end": 223.872
          }
        ]
      },
      {
        "id": "s6",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "Dr. Nova, look at Record 104—the customer age is 4, but marital status is 'Married'! And Record 102 has an amount of negative 45 dollars.",
            "dock": "sim",
            "start": 223.872,
            "end": 234.768
          },
          {
            "speaker": "Dr. Nova",
            "text": "Those are direct violations of syntactic validity and relational consistency, Kaito. Right now, the composite DQI is failing at 0.79. Let's trigger the remediation pipelines and watch the quality gate clear the batch.",
            "dock": "sim",
            "start": 234.768,
            "end": 251.184
          },
          {
            "speaker": "Kaito",
            "text": "When we impute nulls, fix negative amounts, and drop the duplicate record, the composite DQI climbs past 0.95 into PASSED status!",
            "dock": "sim",
            "start": 251.184,
            "end": 260.064
          },
          {
            "speaker": "Dr. Nova",
            "text": "And that single gate prevented four corrupted records from poisoning our downstream feature store.",
            "dock": "sim",
            "start": 260.064,
            "end": 266.088
          }
        ]
      },
      {
        "id": "s7",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "Dr. Nova, if measurement noise variance is twice the feature variance, how does that alter the model's perception of risk?",
            "dock": "checkpoint",
            "start": 266.088,
            "end": 273.312
          },
          {
            "speaker": "Dr. Nova",
            "text": "Let's test our learners, Kaito. True slope is 4.0, but sigma-u squared equals 2 sigma-x squared. What slope will the model learn, and what catastrophe might result?",
            "dock": "checkpoint",
            "start": 273.312,
            "end": 285.984
          }
        ]
      },
      {
        "id": "s8",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "Executives often push back against spending engineering cycles on upstream data validation, asking why we can't just store everything in a raw data lake and fix it later.",
            "dock": "main",
            "start": 285.984,
            "end": 295.728
          },
          {
            "speaker": "Dr. Nova",
            "text": "Because 'fixing it later' is a financial disaster, Kaito! Catching a defective record at the API gateway costs one dollar. Letting that record corrupt a credit underwriting decision in production costs one hundred dollars or more in regulatory fines and chargebacks.",
            "dock": "main",
            "start": 295.728,
            "end": 313.056
          },
          {
            "speaker": "Kaito",
            "text": "The 1-10-100 rule provides the exact economic justification data teams need to enforce strict gateway validation!",
            "dock": "main",
            "start": 313.056,
            "end": 321.024
          },
          {
            "speaker": "Dr. Nova",
            "text": "Exactly. Upstream data quality engineering is not an administrative burden—it is one of the highest-ROI investments in the entire software engineering stack.",
            "dock": "main",
            "start": 321.024,
            "end": 331.656
          }
        ]
      },
      {
        "id": "s9",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "A three-hundred-million-dollar spacecraft was lost because of a simple unit mismatch between pound-seconds and Newton-seconds?",
            "dock": "main",
            "start": 331.656,
            "end": 338.904
          },
          {
            "speaker": "Dr. Nova",
            "text": "Exactly, Kaito. The numbers themselves looked completely plausible on both ends—they were just standard floating-point numbers. But because the serialization contract lacked explicit unit typing, the error propagated silently through navigation equations.",
            "dock": "main",
            "start": 338.904,
            "end": 356.088
          },
          {
            "speaker": "Kaito",
            "text": "Strong typing with Pydantic or schema registries like Protobuf would have caught that error at compile time or ingestion!",
            "dock": "main",
            "start": 356.088,
            "end": 363.024
          },
          {
            "speaker": "Dr. Nova",
            "text": "Indeed. A single schema validation check costing virtually nothing would have saved one of the most ambitious space exploration missions of that decade.",
            "dock": "main",
            "start": 363.024,
            "end": 372.768
          }
        ]
      },
      {
        "id": "s10",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "The Equifax incident proves that even if all your records are formatted cleanly, a breakdown in cache currency or timestamps can instantly produce dirty output.",
            "dock": "main",
            "start": 372.768,
            "end": 381.744
          },
          {
            "speaker": "Dr. Nova",
            "text": "Indeed, Kaito. Timeliness is an active quality dimension. And Amazon Deequ proved that unit testing belongs in production data pipelines just as much as in application code.",
            "dock": "main",
            "start": 381.744,
            "end": 394.224
          },
          {
            "speaker": "Kaito",
            "text": "Automated verification gates prevent silent schema and distribution drift before downstream consumers ever see the data!",
            "dock": "main",
            "start": 394.224,
            "end": 401.592
          },
          {
            "speaker": "Dr. Nova",
            "text": "Exactly. Declarative constraints like hasCompleteness and isNonNegative catch anomalies before they reach production inference models.",
            "dock": "main",
            "start": 401.592,
            "end": 410.64
          }
        ]
      },
      {
        "id": "s11",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "So if our fraud pipeline takes 45 seconds to buffer and ingest transactions, our geolocation feature is essentially useless?",
            "dock": "main",
            "start": 410.64,
            "end": 418.584
          },
          {
            "speaker": "Dr. Nova",
            "text": "Exactly, Kaito. By the time the model evaluates the location ping, the fraudster has already moved or completed the next transaction. Timeliness decay turns clean data into useless noise.",
            "dock": "main",
            "start": 418.584,
            "end": 432.456
          },
          {
            "speaker": "Kaito",
            "text": "To keep timeliness above 80%, our end-to-end ingestion latency must remain under 4.5 seconds!",
            "dock": "main",
            "start": 432.456,
            "end": 439.368
          },
          {
            "speaker": "Dr. Nova",
            "text": "Which is why real-time streaming infrastructure with low micro-second latency is non-negotiable for high-velocity fraud engines.",
            "dock": "main",
            "start": 439.368,
            "end": 446.904
          }
        ]
      },
      {
        "id": "s12",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "Dr. Nova, look at the canvas! When I dial noise variance up to 80, the green true slope stays at 2.5, but the red dashed line collapses to 1.25—a 50% loss in feature sensitivity!",
            "dock": "sim",
            "start": 446.904,
            "end": 460.032
          },
          {
            "speaker": "Dr. Nova",
            "text": "That is the visual proof of attenuation bias, Kaito. And on Tab B, notice how allowing just 10% of defects to reach production multiplies total cleanup costs by more than twelve times!",
            "dock": "sim",
            "start": 460.032,
            "end": 472.584
          },
          {
            "speaker": "Kaito",
            "text": "This lab visually demonstrates both the statistical danger and the financial peril of uncleaned data.",
            "dock": "sim",
            "start": 472.584,
            "end": 478.776
          },
          {
            "speaker": "Dr. Nova",
            "text": "Precisely. Math and economics point to the exact same conclusion: enforce quality at the earliest ingestion boundary.",
            "dock": "sim",
            "start": 478.776,
            "end": 487.704
          }
        ]
      },
      {
        "id": "s13",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "Dr. Nova, four tables with defect rates of two, three, two, and four percent. Does the join error equal the maximum rate of four percent, or does it compound?",
            "dock": "checkpoint",
            "start": 487.704,
            "end": 498.552
          },
          {
            "speaker": "Dr. Nova",
            "text": "Let's put the question to our learners, Kaito. Apply Thomas Redman's compound join formula to calculate the exact joined defect probability.",
            "dock": "checkpoint",
            "start": 498.552,
            "end": 508.392
          }
        ]
      },
      {
        "id": "s14",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "ActiveClean is fascinating—it actually inspects the machine learning model's loss gradients to tell human annotators which specific rows need cleaning first!",
            "dock": "main",
            "start": 508.392,
            "end": 517.176
          },
          {
            "speaker": "Dr. Nova",
            "text": "Yes, Kaito! Instead of blindly paying engineers to clean a hundred million rows, ActiveClean cleans the five percent that actually move the model's decision boundary, reducing cleaning costs by up to eighty percent.",
            "dock": "main",
            "start": 517.176,
            "end": 531.624
          },
          {
            "speaker": "Kaito",
            "text": "Combined with strict ingestion schema validation, that forms a complete end-to-end data quality strategy!",
            "dock": "main",
            "start": 531.624,
            "end": 538.2
          },
          {
            "speaker": "Dr. Nova",
            "text": "Precisely. Schema validation stops obvious corruption at the front door, while gradient-aware cleaning polishes the nuanced boundary cases during model training.",
            "dock": "main",
            "start": 538.2,
            "end": 548.976
          }
        ]
      },
      {
        "id": "s15",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "Having Pydantic V2 validate that the composite quality weights sum to exactly 1.0 prevents silent configuration drift in CI/CD pipelines.",
            "dock": "main",
            "start": 548.976,
            "end": 558.528
          },
          {
            "speaker": "Dr. Nova",
            "text": "And our automated test suite asserts that the reliability ratio and Redman join calculations match theoretical values to five decimal places before any ETL code merges to main!",
            "dock": "main",
            "start": 558.528,
            "end": 569.856
          },
          {
            "speaker": "Kaito",
            "text": "Mathematical rigor combined with type safety turns data cleaning from guesswork into solid software engineering.",
            "dock": "main",
            "start": 569.856,
            "end": 576.672
          },
          {
            "speaker": "Dr. Nova",
            "text": "Precisely. That is the hallmark of modern data engineering.",
            "dock": "main",
            "start": 576.672,
            "end": 581.712
          }
        ]
      },
      {
        "id": "s16",
        "turns": [
          {
            "speaker": "Kaito",
            "text": "This was a masterclass in data quality, Dr. Nova. Treating data cleaning as a rigorous mathematical discipline completely changes how we design AI ingestion pipelines.",
            "dock": "main",
            "start": 581.712,
            "end": 592.92
          },
          {
            "speaker": "Dr. Nova",
            "text": "It does, Kaito. And now that we have established quality dimensions, attenuation bias, and error propagation, we are ready to tackle one of the most pervasive real-world corruptions: missing data in Lesson 5.2!",
            "dock": "main",
            "start": 592.92,
            "end": 607.632
          },
          {
            "speaker": "Kaito",
            "text": "Donald Rubin's taxonomy of MCAR, MAR, and MNAR mechanisms, plus Little's test and MICE imputation algorithms!",
            "dock": "main",
            "start": 607.632,
            "end": 615.504
          },
          {
            "speaker": "Dr. Nova",
            "text": "Exactly. Let's move forward into Lesson 5.2!",
            "dock": "main",
            "start": 615.504,
            "end": 620.64
          }
        ]
      }
    ]
  },
  "ch4_p6_solo": {
    "duration": 560.496
  },
  "ch4_p6_duo": {
    "duration": 616.608
  },
  "ch3_p3_solo": {
    "duration": 528.048,
    "sentences": [
      {
        "slideIndex": 0,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Welcome to Track 3, Lesson 3.3 of Dataset Fundamentals: The Utility-Privacy Frontier, Pareto Dilemmas, and Externalities. In data engineering, analytical utility and privacy protection exist in unavoidable mathematical tension.",
        "dock": "main",
        "start": 0.0,
        "end": 16.92
      },
      {
        "slideIndex": 0,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "The most mathematically useful dataset is raw, unredacted microdata with continuous coordinates and exact clinical codes. The only perfectly private dataset is pure white noise. Today, we formalize the Pareto trade-off curve, Differential Privacy guarantees, Kaldor-Hicks social externalities, and Helen Nissenbaum's Contextual Integrity.",
        "dock": "main",
        "start": 16.92,
        "end": 39.36
      },
      {
        "slideIndex": 1,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Let raw empirical dataset D be transformed by sanitization mechanism M of D. The data architect formulates a constrained multi-objective optimization problem: maximize analytical utility U subject to privacy risk R remaining bounded by epsilon.",
        "dock": "main",
        "start": 39.36,
        "end": 55.848
      },
      {
        "slideIndex": 1,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "Notice how global sensitivity Delta f dictates this frontier. For a counting query, Delta f equals 1. For a sum query over salary, Delta f equals the entire salary range. Higher sensitivity directly forces higher perturbation to preserve privacy.",
        "dock": "main",
        "start": 55.848,
        "end": 74.256
      },
      {
        "slideIndex": 2,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "A mechanism M star belongs to the Pareto frontier if and only if no alternative M prime exists that strictly improves utility without increasing disclosure risk. Any sanitization pipeline operating below the frontier is strictly dominated.",
        "dock": "main",
        "start": 74.256,
        "end": 89.232
      },
      {
        "slideIndex": 2,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "In production, naive heuristic masking and unsalted MD5 hashing are prime examples of architecturally defective mechanisms. They degrade downstream data utility by 30 percent while providing near zero real-world privacy protection against auxiliary linkage attacks.",
        "dock": "main",
        "start": 89.232,
        "end": 106.488
      },
      {
        "slideIndex": 3,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Under Cynthia Dwork's foundational formulation, a mechanism provides epsilon-Differential Privacy if for any two neighboring datasets D1 and D2 differing by a single record, the probability ratio of any output S is bounded by e to the epsilon.",
        "dock": "main",
        "start": 106.488,
        "end": 121.752
      },
      {
        "slideIndex": 3,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "To sanitize a numeric query f, the Laplace Mechanism injects zero-mean noise drawn from a Laplace distribution scaled to Delta f over epsilon. The expected Mean Squared Error scales inversely with epsilon squared: two times Delta f squared over epsilon squared.",
        "dock": "main",
        "start": 121.752,
        "end": 138.6
      },
      {
        "slideIndex": 4,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "When data harvesting generates systemic societal harms, such as dynamic price discrimination or surveillance capitalism, we evaluate net welfare using the Kaldor-Hicks criterion: beneficiary utility minus subject loss minus unpriced negative externalities.",
        "dock": "main",
        "start": 138.6,
        "end": 154.944
      },
      {
        "slideIndex": 4,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "Furthermore, institutional decision-makers exhibit risk aversion modeled by the Arrow-Pratt certainty equivalent. Expected utility is penalized by half alpha times the variance of disclosure risk, modeling the severe cost of GDPR fines and catastrophic reputational collapse.",
        "dock": "main",
        "start": 154.944,
        "end": 172.56
      },
      {
        "slideIndex": 5,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Welcome to the Pareto Utility-Privacy Laboratory! In the simulator below, tune the privacy budget epsilon from 0.02 to 5.0, adjust query sensitivity Delta f, and inspect the real-time SVG Pareto frontier curve.",
        "dock": "sim",
        "start": 172.56,
        "end": 188.808
      },
      {
        "slideIndex": 5,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "Click Preset 1 for raw microdata, Preset 2 for optimal Differential Privacy at epsilon equals 1.0, and Preset 4 to see how excessive noise destroys query utility. Notice how the published query and relative error adapt dynamically.",
        "dock": "sim",
        "start": 188.808,
        "end": 204.936
      },
      {
        "slideIndex": 6,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Time for Active Recall Checkpoint 1! The US Census Bureau adopted Differential Privacy with epsilon approximately 19.6 for the 2020 decennial census, sparking fierce pushback from rural town leaders and civil rights lawyers.",
        "dock": "checkpoint",
        "start": 204.936,
        "end": 220.368
      },
      {
        "slideIndex": 6,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "Select the correct mathematical and engineering diagnosis below to demonstrate your mastery of relative error scaling in the Laplace Mechanism.",
        "dock": "checkpoint",
        "start": 220.368,
        "end": 228.96
      },
      {
        "slideIndex": 7,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "An engineering dilemma arises when a system must arbitrate between legitimate, competing normative values where no single choice is harm-free. We classify these into three archetypes.",
        "dock": "main",
        "start": 228.96,
        "end": 240.624
      },
      {
        "slideIndex": 7,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "Dilemma 1 pits Public Health Surveillance against Civil Autonomy. Dilemma 2 pits Institutional Accuracy against Demographic Error Parity. And Dilemma 3 pits Platform Engagement Optimization against Mental Health Externalities.",
        "dock": "main",
        "start": 240.624,
        "end": 255.96
      },
      {
        "slideIndex": 8,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Table 3.2 maps how ethical philosophies evaluate each dilemma. Consequentialists evaluate the aggregate outcome—lives saved or total profit. Deontologists evaluate rights, duties, and whether individuals are treated as mere means to an end.",
        "dock": "main",
        "start": 255.96,
        "end": 272.88
      },
      {
        "slideIndex": 8,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "Notice the third column: the engineering resolution! For contact tracing, we don't surrender to mass surveillance—we engineer decentralized Bluetooth tokens. For recidivism, we calibrate explicit error parity thresholds.",
        "dock": "main",
        "start": 272.88,
        "end": 288.288
      },
      {
        "slideIndex": 9,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "In 2018, US Census Bureau internal researchers proved a sobering vulnerability: by linking published aggregate census tables with commercial credit rolls and voter registries, an adversary could reconstruct individual microdata for over 52 million Americans.",
        "dock": "main",
        "start": 288.288,
        "end": 305.232
      },
      {
        "slideIndex": 9,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "To prevent reconstruction, the Bureau implemented the Disclosure Avoidance System with epsilon approximately 19.6. But rural leaders sued, demonstrating that noise distorted voting age population counts in small precincts, threatening Voting Rights Act redistricting compliance.",
        "dock": "main",
        "start": 305.232,
        "end": 322.896
      },
      {
        "slideIndex": 10,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "In 2020, governments deploying automated contact tracing faced a critical architectural crossroads. Centralized architectures in Singapore and South Korea uploaded continuous GPS trails and social contact graphs to state health department databases.",
        "dock": "main",
        "start": 322.896,
        "end": 339.36
      },
      {
        "slideIndex": 10,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "The inevitable occurred: function creep. In Singapore, police formally accessed TraceTogether contact logs for murder investigations, violating public privacy pledges. Meanwhile, the decentralized GAEN Bluetooth architecture proved that local cryptographic matching provided equivalent health tracking with zero centralized surveillance risk.",
        "dock": "main",
        "start": 339.36,
        "end": 361.272
      },
      {
        "slideIndex": 11,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Welcome to Interactive Lab 2: The Kaldor-Hicks Social Welfare and Externalities Workbench. Here you can quantify how producer surplus, consumer surplus loss, and unpriced third-party externalities interact.",
        "dock": "sim",
        "start": 361.272,
        "end": 375.192
      },
      {
        "slideIndex": 11,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "Try the dynamic pricing preset, the ad-tech behavioral monetization preset, and the ethical privacy-preserving sharing preset. Notice how unpriced data externalities can drag total social net benefit into severe negative territory.",
        "dock": "sim",
        "start": 375.192,
        "end": 390.264
      },
      {
        "slideIndex": 12,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Checkpoint 2 tests your understanding of data externalities! In 2018, law enforcement identified the Golden State Killer through GEDmatch, even though the suspect never submitted DNA. In that same year, Strava's global heatmap exfiltrated secret US military bases.",
        "dock": "checkpoint",
        "start": 390.264,
        "end": 409.2
      },
      {
        "slideIndex": 12,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "Analyze both incidents and select the underlying engineering mechanism that explains how individual uploads compromise non-consenting third parties.",
        "dock": "checkpoint",
        "start": 409.2,
        "end": 418.248
      },
      {
        "slideIndex": 13,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "In November 2017, Strava published an interactive global data visualization displaying 3 trillion GPS coordinates from 27 million users. Strava believed that massive aggregation eliminated individual privacy risk.",
        "dock": "main",
        "start": 418.248,
        "end": 433.848
      },
      {
        "slideIndex": 13,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "They failed to account for spatial context. In conflict zones like Syria, Somalia, and Afghanistan, local civilians do not jog with GPS watches. Military personnel on secret forward operating bases did. The high-contrast heat trails traced guard towers, patrol paths, and supply airstrips.",
        "dock": "main",
        "start": 433.848,
        "end": 455.04
      },
      {
        "slideIndex": 14,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Here is our production Python implementation: pareto frontier auditor dot py. It uses Pydantic V2 to define MechanismCandidate schemas and executes automated non-dominance checks across candidate sanitization pipelines.",
        "dock": "main",
        "start": 455.04,
        "end": 469.968
      },
      {
        "slideIndex": 14,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "Notice how the LaplacePrivacyEngine executes calibrated Differential Privacy queries and validates that empirical Monte Carlo MSE over ten thousand trials matches the theoretical prediction of two times Delta f squared over epsilon squared within ten percent.",
        "dock": "main",
        "start": 469.968,
        "end": 485.664
      },
      {
        "slideIndex": 15,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Let us summarize the five core engineering takeaways from Lesson 3.3. First: Privacy and utility are mathematically opposed; you cannot maximize both without finding the optimal Pareto operating point. Second: Eliminate sub-optimal pipelines that destroy data utility while failing to stop re-identification.",
        "dock": "main",
        "start": 485.664,
        "end": 506.376
      },
      {
        "slideIndex": 15,
        "turnIndex": 1,
        "speaker": "Dr. Nova",
        "text": "Third: Internalize unpriced negative externalities using the Kaldor-Hicks framework. Fourth: Use Differential Privacy as a provable mathematical bound holding against all auxiliary data. And fifth: Enforce Helen Nissenbaum's Contextual Integrity. Up next is Lesson 3.4: Data Privacy Principles!",
        "dock": "main",
        "start": 506.376,
        "end": 528.048
      }
    ]
  },
  "ch3_p3_duo": {
    "duration": 739.9920000000001,
    "sentences": [
      {
        "slideIndex": 0,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Welcome to Lesson 3.3, Kaito! Today we explore the inescapable mathematical trade-off between analytical utility and individual privacy.",
        "dock": "main",
        "start": 0.0,
        "end": 10.416
      },
      {
        "slideIndex": 0,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "Dr. Nova, product managers always promise our users 100 percent data utility and 100 percent zero-risk anonymity. Is that actually achievable with modern cryptography?",
        "dock": "main",
        "start": 10.416,
        "end": 22.56
      },
      {
        "slideIndex": 0,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "Never! That claim violates fundamental information theory. A dataset with zero privacy risk is literally pure random noise, providing zero analytical value. Every production data system must choose an exact operating point along the Pareto frontier.",
        "dock": "main",
        "start": 22.56,
        "end": 40.392
      },
      {
        "slideIndex": 0,
        "turnIndex": 3,
        "speaker": "Kaito",
        "text": "So our goal isn't eliminating tension—it's eliminating architectural waste and finding the Pareto-optimal operating point where privacy loss is provably bounded!",
        "dock": "main",
        "start": 40.392,
        "end": 49.728
      },
      {
        "slideIndex": 1,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Look at the three operating points on our board, Kaito. Point A is raw microdata, Point B is a tuned differential privacy mechanism, and Point C is excessive perturbation.",
        "dock": "main",
        "start": 49.728,
        "end": 60.84
      },
      {
        "slideIndex": 1,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "Point A is what data scientists ask for because their gradient boosted trees get 99 percent accuracy! But in production, Point A is a legal nightmare waiting for a Sweeney linkage breach.",
        "dock": "main",
        "start": 60.84,
        "end": 72.288
      },
      {
        "slideIndex": 1,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "Exactly. And if compliance officers panic, they force Point C—adding so much noise that the dataset becomes useless. Ethical engineering lives at Point B: maximizing utility while enforcing provable risk bounds.",
        "dock": "main",
        "start": 72.288,
        "end": 87.576
      },
      {
        "slideIndex": 1,
        "turnIndex": 3,
        "speaker": "Kaito",
        "text": "And the key knob is global sensitivity Delta f! If our query has high sensitivity, we must inject substantially more noise to maintain the exact same privacy budget.",
        "dock": "main",
        "start": 87.576,
        "end": 98.688
      },
      {
        "slideIndex": 2,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Look closely at the formula for Pareto non-dominance, Kaito. If pipeline M prime achieves both higher utility and lower risk than pipeline M, what does that say about M?",
        "dock": "main",
        "start": 98.688,
        "end": 109.872
      },
      {
        "slideIndex": 2,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "It means pipeline M is strictly dominated! It is literally defective code that harms both the user and the company.",
        "dock": "main",
        "start": 109.872,
        "end": 118.008
      },
      {
        "slideIndex": 2,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "Exactly. Last year an engineering team hashed phone numbers with unsalted SHA-256. It broke analytical substring searches, yet took an attacker four seconds to invert with a precomputed rainbow table. Lower utility and zero privacy!",
        "dock": "main",
        "start": 118.008,
        "end": 135.912
      },
      {
        "slideIndex": 2,
        "turnIndex": 3,
        "speaker": "Kaito",
        "text": "Our automated CI/CD auditor should instantly flag and reject any sanitization candidate that is dominated by an existing differential privacy mechanism!",
        "dock": "main",
        "start": 135.912,
        "end": 145.68
      },
      {
        "slideIndex": 3,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Notice the mathematical beauty of Dwork's theorem, Kaito. It makes zero assumptions about what auxiliary databases an attacker might possess in the future.",
        "dock": "main",
        "start": 145.68,
        "end": 155.568
      },
      {
        "slideIndex": 3,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "Because it guarantees that whether my data is included or completely deleted, the probability of any model output changes by at most e to the epsilon!",
        "dock": "main",
        "start": 155.568,
        "end": 164.352
      },
      {
        "slideIndex": 3,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "Precisely. But look at the MSE formula: two times Delta f squared over epsilon squared. If your budget epsilon is set too low—say 0.01—the error variance blows up exponentially, destroying query utility.",
        "dock": "main",
        "start": 164.352,
        "end": 180.768
      },
      {
        "slideIndex": 3,
        "turnIndex": 3,
        "speaker": "Kaito",
        "text": "And if epsilon is set to 20, the noise is microscopic, but your privacy guarantee weakens because e to the 20 is nearly 500 million! Finding the right epsilon is the true engineering craft.",
        "dock": "main",
        "start": 180.768,
        "end": 193.32
      },
      {
        "slideIndex": 4,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Notice the term X external in the Kaldor-Hicks formula, Kaito. That term explains why ad-tech business models often feel predatory.",
        "dock": "main",
        "start": 193.32,
        "end": 202.656
      },
      {
        "slideIndex": 4,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "Because the platform gets the advertising revenue, but users and their contacts suffer the unpriced privacy erosion, dynamic price discrimination, and psychological manipulation!",
        "dock": "main",
        "start": 202.656,
        "end": 213.192
      },
      {
        "slideIndex": 4,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "Precisely. If an engineering pipeline creates 10 million dollars in corporate profit but imposes 15 million dollars in societal externalities, Kaldor-Hicks social net benefit is negative. True engineering maturity requires internalizing those externalities.",
        "dock": "main",
        "start": 213.192,
        "end": 230.856
      },
      {
        "slideIndex": 4,
        "turnIndex": 3,
        "speaker": "Kaito",
        "text": "And the Arrow-Pratt certainty equivalent shows why compliance officers are so conservative: the variance of privacy risk carries a severe quadratic penalty under GDPR!",
        "dock": "main",
        "start": 230.856,
        "end": 240.912
      },
      {
        "slideIndex": 5,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Kaito, let's test our Laplace simulator! Right now, under Preset 2 with epsilon equals 1.0, our analytical utility is 94 percent with robust privacy protection.",
        "dock": "sim",
        "start": 240.912,
        "end": 253.8
      },
      {
        "slideIndex": 5,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "Let me click Preset 1 for Raw Microdata! Wow—utility jumps to 99 percent, but look at the red warning badge: Re-ID Leakage Risk spikes to 0.95! The yellow operating point moves all the way to the top right danger zone.",
        "dock": "sim",
        "start": 253.8,
        "end": 269.64
      },
      {
        "slideIndex": 5,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "Now click Preset 4 for Over-Noise at epsilon equals 0.02. Privacy protection is almost 100 percent, but the relative query error explodes past 400 percent! That is why we must balance trade-offs mathematically.",
        "dock": "sim",
        "start": 269.64,
        "end": 286.224
      },
      {
        "slideIndex": 5,
        "turnIndex": 3,
        "speaker": "Kaito",
        "text": "And increasing sensitivity Delta f shifts the entire curve downward! That's why query design and bounded clamping are just as critical as choosing epsilon.",
        "dock": "sim",
        "start": 286.224,
        "end": 296.208
      },
      {
        "slideIndex": 6,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Kaito, here is Checkpoint 1! Why did small rural communities sue the US Census Bureau over Differential Privacy, when major metropolitan areas barely noticed any change?",
        "dock": "checkpoint",
        "start": 296.208,
        "end": 307.704
      },
      {
        "slideIndex": 6,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "Let's analyze the math: Laplace noise variance is two times Delta f over epsilon squared—which depends only on sensitivity, not on the population size of the district!",
        "dock": "checkpoint",
        "start": 307.704,
        "end": 317.856
      },
      {
        "slideIndex": 6,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "Exactly. Let's see if you can select the precise engineering answer among the choices below!",
        "dock": "checkpoint",
        "start": 317.856,
        "end": 324.504
      },
      {
        "slideIndex": 7,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Notice why these three dilemmas are so dangerous, Kaito: both sides have compelling moral arguments!",
        "dock": "main",
        "start": 324.504,
        "end": 331.224
      },
      {
        "slideIndex": 7,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "Right! In Dilemma 1, public health officials genuinely want to save lives during a viral pandemic. But civil libertarians rightly fear building a permanent location tracking apparatus that outlasts the disease.",
        "dock": "main",
        "start": 331.224,
        "end": 345.36
      },
      {
        "slideIndex": 7,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "And in Dilemma 3, product managers claim they are merely giving users what they click on, while ignoring that algorithms exploit neurological vulnerabilities for unpriced corporate profit.",
        "dock": "main",
        "start": 345.36,
        "end": 356.904
      },
      {
        "slideIndex": 7,
        "turnIndex": 3,
        "speaker": "Kaito",
        "text": "To resolve these dilemmas, we need to compare how Consequentialist and Deontological moral frameworks analyze each engineering choice!",
        "dock": "main",
        "start": 356.904,
        "end": 364.776
      },
      {
        "slideIndex": 8,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Notice how Table 3.2 resolves the deadlock, Kaito. Philosophers often debate Consequentialism versus Deontology for centuries. But engineers must ship code on Monday morning!",
        "dock": "main",
        "start": 364.776,
        "end": 377.568
      },
      {
        "slideIndex": 8,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "That's why the Engineering Resolution column is so empowering! In the COVID-19 pandemic, governments thought they had to choose between letting people die or tracking everyone's GPS coordinates.",
        "dock": "main",
        "start": 377.568,
        "end": 389.472
      },
      {
        "slideIndex": 8,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "Until cryptographers at Apple, Google, and European universities created GAEN: exchanging ephemeral cryptographic beacons that match exposures locally on your phone without sending any location data to the government.",
        "dock": "main",
        "start": 389.472,
        "end": 403.056
      },
      {
        "slideIndex": 8,
        "turnIndex": 3,
        "speaker": "Kaito",
        "text": "That shifted the Pareto frontier outward! It achieved 80 percent of the epidemiological benefit while completely eliminating the dragnet surveillance risk.",
        "dock": "main",
        "start": 403.056,
        "end": 413.28
      },
      {
        "slideIndex": 9,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Kaito, many critics thought the Census Bureau was paranoid for adopting Differential Privacy. But what did their internal attack prove?",
        "dock": "main",
        "start": 413.28,
        "end": 422.112
      },
      {
        "slideIndex": 9,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "It proved that traditional de-identification techniques—like table cell suppression and data swapping—are completely broken against modern linear programming reconstruction! Fifty-two million people's raw records were exfiltrated from public tables.",
        "dock": "main",
        "start": 422.112,
        "end": 436.704
      },
      {
        "slideIndex": 9,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "Exactly. Yet rural demographers had a legitimate grievance: a small reservation of 120 people could see its count swing to 95 or 145, altering legislative redistricting and federal grant allocation.",
        "dock": "main",
        "start": 436.704,
        "end": 452.088
      },
      {
        "slideIndex": 9,
        "turnIndex": 3,
        "speaker": "Kaito",
        "text": "So the solution wasn't deleting Differential Privacy—it was hierarchically allocating the epsilon budget so high-stakes legal attributes received lower noise!",
        "dock": "main",
        "start": 452.088,
        "end": 461.352
      },
      {
        "slideIndex": 10,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Notice the tragic lesson of Singapore's TraceTogether app, Kaito. The government promised users their data would only be used for COVID-19 contact tracing.",
        "dock": "main",
        "start": 461.352,
        "end": 471.744
      },
      {
        "slideIndex": 10,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "And less than a year later, the police used existing criminal procedural codes to subpoena the data for a murder case! Once data exists in a central database, function creep is almost inevitable.",
        "dock": "main",
        "start": 471.744,
        "end": 484.128
      },
      {
        "slideIndex": 10,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "That is the core rule of privacy engineering: Policy promises do not protect data; architecture protects data! If you don't store the centralized coordinates, no subpoena or hacker can ever exfiltrate them.",
        "dock": "main",
        "start": 484.128,
        "end": 497.448
      },
      {
        "slideIndex": 10,
        "turnIndex": 3,
        "speaker": "Kaito",
        "text": "Decentralized architectures like GAEN eliminate the single point of failure and prove that ethical engineering and public safety can coexist!",
        "dock": "main",
        "start": 497.448,
        "end": 505.8
      },
      {
        "slideIndex": 11,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Kaito, let's explore our Kaldor-Hicks Workbench below! Notice the three presets: Airline Dynamic Pricing, Ad-Tech Behavioral Profiling, and Ethical Differential Privacy Sharing.",
        "dock": "sim",
        "start": 505.8,
        "end": 517.848
      },
      {
        "slideIndex": 11,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "Let me select Airline Dynamic Pricing! Producer profit rises by 45 thousand dollars, but consumer surplus drops by 35 thousand, and unpriced negative externalities—like lost trust and defensive VPN costs—add another 25 thousand!",
        "dock": "sim",
        "start": 517.848,
        "end": 533.256
      },
      {
        "slideIndex": 11,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "Resulting in a net social welfare loss of minus 15 thousand dollars! The corporate earnings call celebrates record margins, while society absorbs a deadweight loss. That is why ethical regulation intervenes.",
        "dock": "sim",
        "start": 533.256,
        "end": 547.608
      },
      {
        "slideIndex": 11,
        "turnIndex": 3,
        "speaker": "Kaito",
        "text": "Now toggle to Ethical Differential Privacy Sharing: producer value is 30 thousand, consumer loss is near zero, and externalities drop to 2 thousand, giving a robust positive net benefit of plus 28 thousand!",
        "dock": "sim",
        "start": 547.608,
        "end": 560.376
      },
      {
        "slideIndex": 12,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Kaito, here is our second checkpoint! Why does one user uploading their DNA or running route destroy the privacy of hundreds of other people who never used the platform?",
        "dock": "checkpoint",
        "start": 560.376,
        "end": 570.768
      },
      {
        "slideIndex": 12,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "Because data isn't an isolated commodity! We share 50 percent of our DNA with siblings, and 12.5 percent with first cousins. When merely two percent of a population tests their DNA, they form a genealogical net spanning 90 percent of society!",
        "dock": "checkpoint",
        "start": 570.768,
        "end": 587.592
      },
      {
        "slideIndex": 12,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "Exactly. Let's see if you can identify the exact answer diagnosing both the GEDmatch linkage and the Strava military exfiltration!",
        "dock": "checkpoint",
        "start": 587.592,
        "end": 596.856
      },
      {
        "slideIndex": 13,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Look at Strava's mistake, Kaito. Their engineers assumed that because they aggregated 3 trillion data points, no individual could ever be exposed.",
        "dock": "main",
        "start": 596.856,
        "end": 606.912
      },
      {
        "slideIndex": 13,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "They forgot that base rate matters! In downtown Manhattan, a million runners create a blurry cloud. But in Helmand province in Afghanistan, the only people running five miles in a neat circle at 6:00 AM are foreign soldiers stationed at a secret base!",
        "dock": "main",
        "start": 606.912,
        "end": 622.584
      },
      {
        "slideIndex": 13,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "And that directly violates Helen Nissenbaum's transmission principles. Athletes surrendered telemetry to track their cardio workouts, not to publish an open-source targeting map for hostile adversaries.",
        "dock": "main",
        "start": 622.584,
        "end": 635.304
      },
      {
        "slideIndex": 13,
        "turnIndex": 3,
        "speaker": "Kaito",
        "text": "Contextual integrity reminds us that privacy is violated the moment data crosses boundaries without respecting the governing social norm!",
        "dock": "main",
        "start": 635.304,
        "end": 643.272
      },
      {
        "slideIndex": 14,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Take a look at the identify pareto frontier method in our script, Kaito. It iterates across every candidate sanitization mechanism and eliminates any that are strictly dominated.",
        "dock": "main",
        "start": 643.272,
        "end": 654.504
      },
      {
        "slideIndex": 14,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "And it flags candidate 3—Suboptimal Naive Masking—because it has both worse utility and higher disclosure risk than our Laplace mechanism! That means our CI/CD pipeline blocks deployment automatically.",
        "dock": "main",
        "start": 654.504,
        "end": 667.656
      },
      {
        "slideIndex": 14,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "Furthermore, the test suite runs ten thousand Monte Carlo query simulations to verify that empirical variance matches theoretical MSE within statistical tolerances. That is how we ensure mathematical theory translates into production reliability.",
        "dock": "main",
        "start": 667.656,
        "end": 683.712
      },
      {
        "slideIndex": 14,
        "turnIndex": 3,
        "speaker": "Kaito",
        "text": "Type-safe Pydantic contracts combined with Monte Carlo verification give our engineering teams total confidence before shipping!",
        "dock": "main",
        "start": 683.712,
        "end": 691.224
      },
      {
        "slideIndex": 15,
        "turnIndex": 0,
        "speaker": "Dr. Nova",
        "text": "Outstanding work today, Kaito! You've mastered the mathematics of the Pareto frontier, Differential Privacy noise calibration, Kaldor-Hicks externalities, and Contextual Integrity.",
        "dock": "main",
        "start": 691.224,
        "end": 703.728
      },
      {
        "slideIndex": 15,
        "turnIndex": 1,
        "speaker": "Kaito",
        "text": "Thank you, Dr. Nova! I now understand why naive masking is a dangerous trap, how the 2020 Census solved database reconstruction, and how GAEN achieved decentralized privacy.",
        "dock": "main",
        "start": 703.728,
        "end": 715.848
      },
      {
        "slideIndex": 15,
        "turnIndex": 2,
        "speaker": "Dr. Nova",
        "text": "In our next lecture—Lesson 3.4: Data Privacy Principles—we dive deep into tabular anonymization algorithms: k-anonymity, l-diversity, t-closeness, and production differential privacy engines!",
        "dock": "main",
        "start": 715.848,
        "end": 729.96
      },
      {
        "slideIndex": 15,
        "turnIndex": 3,
        "speaker": "Kaito",
        "text": "I can't wait to turn these theoretical guarantees into concrete anonymization code in Lesson 3.4! Let's build ethical systems that protect everyone.",
        "dock": "main",
        "start": 729.96,
        "end": 739.992
      }
    ]
  },
  "ch2_p5_solo": {
    "duration": 714.144,
    "sentences": [
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Dr. Nova",
        "text": "Welcome to Lesson 2.5 of Dataset Fundamentals: Execution Paradigms: Manual Auditing, Automated Sensing, and Hybrid Pipelines. In dataset acquisition, engineering teams must navigate a fundamental tension between two extremes: pure manual human auditing, which provides deep cognitive nuance but is bounded by cognitive fatigue and high costs, and pure automated sensing, which offers massive throughput at near-zero marginal cost but is vulnerable to calibration drift and out-of-distribution hallucinations.",
        "start": 0.0,
        "end": 32.447,
        "words": [
          {
            "w": "Welcome",
            "t": 0.0
          },
          {
            "w": "to",
            "t": 0.477
          },
          {
            "w": "Lesson",
            "t": 0.954
          },
          {
            "w": "2.5",
            "t": 1.431
          },
          {
            "w": "of",
            "t": 1.909
          },
          {
            "w": "Dataset",
            "t": 2.386
          },
          {
            "w": "Fundamentals:",
            "t": 2.863
          },
          {
            "w": "Execution",
            "t": 3.34
          },
          {
            "w": "Paradigms:",
            "t": 3.817
          },
          {
            "w": "Manual",
            "t": 4.294
          },
          {
            "w": "Auditing,",
            "t": 4.772
          },
          {
            "w": "Automated",
            "t": 5.249
          },
          {
            "w": "Sensing,",
            "t": 5.726
          },
          {
            "w": "and",
            "t": 6.203
          },
          {
            "w": "Hybrid",
            "t": 6.68
          },
          {
            "w": "Pipelines.",
            "t": 7.157
          },
          {
            "w": "In",
            "t": 7.635
          },
          {
            "w": "dataset",
            "t": 8.112
          },
          {
            "w": "acquisition,",
            "t": 8.589
          },
          {
            "w": "engineering",
            "t": 9.066
          },
          {
            "w": "teams",
            "t": 9.543
          },
          {
            "w": "must",
            "t": 10.02
          },
          {
            "w": "navigate",
            "t": 10.498
          },
          {
            "w": "a",
            "t": 10.975
          },
          {
            "w": "fundamental",
            "t": 11.452
          },
          {
            "w": "tension",
            "t": 11.929
          },
          {
            "w": "between",
            "t": 12.406
          },
          {
            "w": "two",
            "t": 12.883
          },
          {
            "w": "extremes:",
            "t": 13.361
          },
          {
            "w": "pure",
            "t": 13.838
          },
          {
            "w": "manual",
            "t": 14.315
          },
          {
            "w": "human",
            "t": 14.792
          },
          {
            "w": "auditing,",
            "t": 15.269
          },
          {
            "w": "which",
            "t": 15.746
          },
          {
            "w": "provides",
            "t": 16.224
          },
          {
            "w": "deep",
            "t": 16.701
          },
          {
            "w": "cognitive",
            "t": 17.178
          },
          {
            "w": "nuance",
            "t": 17.655
          },
          {
            "w": "but",
            "t": 18.132
          },
          {
            "w": "is",
            "t": 18.609
          },
          {
            "w": "bounded",
            "t": 19.086
          },
          {
            "w": "by",
            "t": 19.564
          },
          {
            "w": "cognitive",
            "t": 20.041
          },
          {
            "w": "fatigue",
            "t": 20.518
          },
          {
            "w": "and",
            "t": 20.995
          },
          {
            "w": "high",
            "t": 21.472
          },
          {
            "w": "costs,",
            "t": 21.949
          },
          {
            "w": "and",
            "t": 22.427
          },
          {
            "w": "pure",
            "t": 22.904
          },
          {
            "w": "automated",
            "t": 23.381
          },
          {
            "w": "sensing,",
            "t": 23.858
          },
          {
            "w": "which",
            "t": 24.335
          },
          {
            "w": "offers",
            "t": 24.812
          },
          {
            "w": "massive",
            "t": 25.29
          },
          {
            "w": "throughput",
            "t": 25.767
          },
          {
            "w": "at",
            "t": 26.244
          },
          {
            "w": "near-zero",
            "t": 26.721
          },
          {
            "w": "marginal",
            "t": 27.198
          },
          {
            "w": "cost",
            "t": 27.675
          },
          {
            "w": "but",
            "t": 28.153
          },
          {
            "w": "is",
            "t": 28.63
          },
          {
            "w": "vulnerable",
            "t": 29.107
          },
          {
            "w": "to",
            "t": 29.584
          },
          {
            "w": "calibration",
            "t": 30.061
          },
          {
            "w": "drift",
            "t": 30.538
          },
          {
            "w": "and",
            "t": 31.016
          },
          {
            "w": "out-of-distribution",
            "t": 31.493
          },
          {
            "w": "hallucinations.",
            "t": 31.97
          }
        ]
      },
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Dr. Nova",
        "text": "In this masterclass, we formulate the mathematical error profiles of both paradigms, derive the cost-optimal Human-in-the-Loop triaging policy, and master Fleiss' Generalized Kappa to enforce strict multi-annotator consensus.",
        "start": 32.447,
        "end": 46.818,
        "words": [
          {
            "w": "In",
            "t": 32.447
          },
          {
            "w": "this",
            "t": 32.96
          },
          {
            "w": "masterclass,",
            "t": 33.474
          },
          {
            "w": "we",
            "t": 33.987
          },
          {
            "w": "formulate",
            "t": 34.5
          },
          {
            "w": "the",
            "t": 35.013
          },
          {
            "w": "mathematical",
            "t": 35.526
          },
          {
            "w": "error",
            "t": 36.04
          },
          {
            "w": "profiles",
            "t": 36.553
          },
          {
            "w": "of",
            "t": 37.066
          },
          {
            "w": "both",
            "t": 37.58
          },
          {
            "w": "paradigms,",
            "t": 38.093
          },
          {
            "w": "derive",
            "t": 38.606
          },
          {
            "w": "the",
            "t": 39.119
          },
          {
            "w": "cost-optimal",
            "t": 39.633
          },
          {
            "w": "Human-in-the-Loop",
            "t": 40.146
          },
          {
            "w": "triaging",
            "t": 40.659
          },
          {
            "w": "policy,",
            "t": 41.172
          },
          {
            "w": "and",
            "t": 41.686
          },
          {
            "w": "master",
            "t": 42.199
          },
          {
            "w": "Fleiss'",
            "t": 42.712
          },
          {
            "w": "Generalized",
            "t": 43.225
          },
          {
            "w": "Kappa",
            "t": 43.739
          },
          {
            "w": "to",
            "t": 44.252
          },
          {
            "w": "enforce",
            "t": 44.765
          },
          {
            "w": "strict",
            "t": 45.278
          },
          {
            "w": "multi-annotator",
            "t": 45.791
          },
          {
            "w": "consensus.",
            "t": 46.305
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Dr. Nova",
        "text": "Let us examine the architecture of a production Human-in-the-Loop ingestion system. Raw data streams from physical sensors, IoT telemetry, or web scrapers enter an automated machine learning classifier. The classifier outputs both a prediction and a calibrated uncertainty metric U of x.",
        "start": 46.818,
        "end": 65.149,
        "words": [
          {
            "w": "Let",
            "t": 46.818
          },
          {
            "w": "us",
            "t": 47.254
          },
          {
            "w": "examine",
            "t": 47.691
          },
          {
            "w": "the",
            "t": 48.127
          },
          {
            "w": "architecture",
            "t": 48.564
          },
          {
            "w": "of",
            "t": 49.0
          },
          {
            "w": "a",
            "t": 49.437
          },
          {
            "w": "production",
            "t": 49.873
          },
          {
            "w": "Human-in-the-Loop",
            "t": 50.31
          },
          {
            "w": "ingestion",
            "t": 50.746
          },
          {
            "w": "system.",
            "t": 51.183
          },
          {
            "w": "Raw",
            "t": 51.619
          },
          {
            "w": "data",
            "t": 52.055
          },
          {
            "w": "streams",
            "t": 52.492
          },
          {
            "w": "from",
            "t": 52.928
          },
          {
            "w": "physical",
            "t": 53.365
          },
          {
            "w": "sensors,",
            "t": 53.801
          },
          {
            "w": "IoT",
            "t": 54.238
          },
          {
            "w": "telemetry,",
            "t": 54.674
          },
          {
            "w": "or",
            "t": 55.111
          },
          {
            "w": "web",
            "t": 55.547
          },
          {
            "w": "scrapers",
            "t": 55.983
          },
          {
            "w": "enter",
            "t": 56.42
          },
          {
            "w": "an",
            "t": 56.856
          },
          {
            "w": "automated",
            "t": 57.293
          },
          {
            "w": "machine",
            "t": 57.729
          },
          {
            "w": "learning",
            "t": 58.166
          },
          {
            "w": "classifier.",
            "t": 58.602
          },
          {
            "w": "The",
            "t": 59.039
          },
          {
            "w": "classifier",
            "t": 59.475
          },
          {
            "w": "outputs",
            "t": 59.912
          },
          {
            "w": "both",
            "t": 60.348
          },
          {
            "w": "a",
            "t": 60.784
          },
          {
            "w": "prediction",
            "t": 61.221
          },
          {
            "w": "and",
            "t": 61.657
          },
          {
            "w": "a",
            "t": 62.094
          },
          {
            "w": "calibrated",
            "t": 62.53
          },
          {
            "w": "uncertainty",
            "t": 62.967
          },
          {
            "w": "metric",
            "t": 63.403
          },
          {
            "w": "U",
            "t": 63.84
          },
          {
            "w": "of",
            "t": 64.276
          },
          {
            "w": "x.",
            "t": 64.713
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Dr. Nova",
        "text": "This metric passes into a confidence decision gate. If uncertainty is below our optimal threshold tau-star, the record is auto-accepted directly into our Delta Lakehouse at near-zero cost. However, if uncertainty exceeds tau-star, the record is routed into a priority manual review queue where human experts verify the label under Fleiss' Kappa consensus protocols. Finally, expert corrections flow back into an active learning loop to retrain and improve the automated classifier.",
        "start": 65.149,
        "end": 95.871,
        "words": [
          {
            "w": "This",
            "t": 65.149
          },
          {
            "w": "metric",
            "t": 65.582
          },
          {
            "w": "passes",
            "t": 66.014
          },
          {
            "w": "into",
            "t": 66.447
          },
          {
            "w": "a",
            "t": 66.88
          },
          {
            "w": "confidence",
            "t": 67.313
          },
          {
            "w": "decision",
            "t": 67.745
          },
          {
            "w": "gate.",
            "t": 68.178
          },
          {
            "w": "If",
            "t": 68.611
          },
          {
            "w": "uncertainty",
            "t": 69.043
          },
          {
            "w": "is",
            "t": 69.476
          },
          {
            "w": "below",
            "t": 69.909
          },
          {
            "w": "our",
            "t": 70.341
          },
          {
            "w": "optimal",
            "t": 70.774
          },
          {
            "w": "threshold",
            "t": 71.207
          },
          {
            "w": "tau-star,",
            "t": 71.64
          },
          {
            "w": "the",
            "t": 72.072
          },
          {
            "w": "record",
            "t": 72.505
          },
          {
            "w": "is",
            "t": 72.938
          },
          {
            "w": "auto-accepted",
            "t": 73.37
          },
          {
            "w": "directly",
            "t": 73.803
          },
          {
            "w": "into",
            "t": 74.236
          },
          {
            "w": "our",
            "t": 74.668
          },
          {
            "w": "Delta",
            "t": 75.101
          },
          {
            "w": "Lakehouse",
            "t": 75.534
          },
          {
            "w": "at",
            "t": 75.967
          },
          {
            "w": "near-zero",
            "t": 76.399
          },
          {
            "w": "cost.",
            "t": 76.832
          },
          {
            "w": "However,",
            "t": 77.265
          },
          {
            "w": "if",
            "t": 77.697
          },
          {
            "w": "uncertainty",
            "t": 78.13
          },
          {
            "w": "exceeds",
            "t": 78.563
          },
          {
            "w": "tau-star,",
            "t": 78.996
          },
          {
            "w": "the",
            "t": 79.428
          },
          {
            "w": "record",
            "t": 79.861
          },
          {
            "w": "is",
            "t": 80.294
          },
          {
            "w": "routed",
            "t": 80.726
          },
          {
            "w": "into",
            "t": 81.159
          },
          {
            "w": "a",
            "t": 81.592
          },
          {
            "w": "priority",
            "t": 82.024
          },
          {
            "w": "manual",
            "t": 82.457
          },
          {
            "w": "review",
            "t": 82.89
          },
          {
            "w": "queue",
            "t": 83.323
          },
          {
            "w": "where",
            "t": 83.755
          },
          {
            "w": "human",
            "t": 84.188
          },
          {
            "w": "experts",
            "t": 84.621
          },
          {
            "w": "verify",
            "t": 85.053
          },
          {
            "w": "the",
            "t": 85.486
          },
          {
            "w": "label",
            "t": 85.919
          },
          {
            "w": "under",
            "t": 86.352
          },
          {
            "w": "Fleiss'",
            "t": 86.784
          },
          {
            "w": "Kappa",
            "t": 87.217
          },
          {
            "w": "consensus",
            "t": 87.65
          },
          {
            "w": "protocols.",
            "t": 88.082
          },
          {
            "w": "Finally,",
            "t": 88.515
          },
          {
            "w": "expert",
            "t": 88.948
          },
          {
            "w": "corrections",
            "t": 89.38
          },
          {
            "w": "flow",
            "t": 89.813
          },
          {
            "w": "back",
            "t": 90.246
          },
          {
            "w": "into",
            "t": 90.679
          },
          {
            "w": "an",
            "t": 91.111
          },
          {
            "w": "active",
            "t": 91.544
          },
          {
            "w": "learning",
            "t": 91.977
          },
          {
            "w": "loop",
            "t": 92.409
          },
          {
            "w": "to",
            "t": 92.842
          },
          {
            "w": "retrain",
            "t": 93.275
          },
          {
            "w": "and",
            "t": 93.707
          },
          {
            "w": "improve",
            "t": 94.14
          },
          {
            "w": "the",
            "t": 94.573
          },
          {
            "w": "automated",
            "t": 95.006
          },
          {
            "w": "classifier.",
            "t": 95.438
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Dr. Nova",
        "text": "While human annotators excel at common-sense reasoning, human biological systems are constrained by cognitive fatigue. In reliability engineering and ergonomics, cognitive failure rates over continuous shift duration t are modeled using the Weibull hazard distribution.",
        "start": 95.871,
        "end": 113.052,
        "words": [
          {
            "w": "While",
            "t": 95.871
          },
          {
            "w": "human",
            "t": 96.362
          },
          {
            "w": "annotators",
            "t": 96.853
          },
          {
            "w": "excel",
            "t": 97.344
          },
          {
            "w": "at",
            "t": 97.835
          },
          {
            "w": "common-sense",
            "t": 98.325
          },
          {
            "w": "reasoning,",
            "t": 98.816
          },
          {
            "w": "human",
            "t": 99.307
          },
          {
            "w": "biological",
            "t": 99.798
          },
          {
            "w": "systems",
            "t": 100.289
          },
          {
            "w": "are",
            "t": 100.78
          },
          {
            "w": "constrained",
            "t": 101.271
          },
          {
            "w": "by",
            "t": 101.762
          },
          {
            "w": "cognitive",
            "t": 102.253
          },
          {
            "w": "fatigue.",
            "t": 102.743
          },
          {
            "w": "In",
            "t": 103.234
          },
          {
            "w": "reliability",
            "t": 103.725
          },
          {
            "w": "engineering",
            "t": 104.216
          },
          {
            "w": "and",
            "t": 104.707
          },
          {
            "w": "ergonomics,",
            "t": 105.198
          },
          {
            "w": "cognitive",
            "t": 105.689
          },
          {
            "w": "failure",
            "t": 106.18
          },
          {
            "w": "rates",
            "t": 106.67
          },
          {
            "w": "over",
            "t": 107.161
          },
          {
            "w": "continuous",
            "t": 107.652
          },
          {
            "w": "shift",
            "t": 108.143
          },
          {
            "w": "duration",
            "t": 108.634
          },
          {
            "w": "t",
            "t": 109.125
          },
          {
            "w": "are",
            "t": 109.616
          },
          {
            "w": "modeled",
            "t": 110.107
          },
          {
            "w": "using",
            "t": 110.598
          },
          {
            "w": "the",
            "t": 111.088
          },
          {
            "w": "Weibull",
            "t": 111.579
          },
          {
            "w": "hazard",
            "t": 112.07
          },
          {
            "w": "distribution.",
            "t": 112.561
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Dr. Nova",
        "text": "With shape parameter k strictly greater than one, the hazard rate lambda-h of t increases monotonically over time, representing cognitive exhaustion. The cumulative probability of manual transcription error after continuous shift duration t is given by one minus exponential of negative t over lambda raised to the power of k. In production pipelines, shift durations must be capped at four hours to keep error rates inside the safe five percent operating envelope.",
        "start": 113.052,
        "end": 142.752,
        "words": [
          {
            "w": "With",
            "t": 113.052
          },
          {
            "w": "shape",
            "t": 113.465
          },
          {
            "w": "parameter",
            "t": 113.877
          },
          {
            "w": "k",
            "t": 114.29
          },
          {
            "w": "strictly",
            "t": 114.702
          },
          {
            "w": "greater",
            "t": 115.115
          },
          {
            "w": "than",
            "t": 115.527
          },
          {
            "w": "one,",
            "t": 115.94
          },
          {
            "w": "the",
            "t": 116.352
          },
          {
            "w": "hazard",
            "t": 116.765
          },
          {
            "w": "rate",
            "t": 117.177
          },
          {
            "w": "lambda-h",
            "t": 117.59
          },
          {
            "w": "of",
            "t": 118.002
          },
          {
            "w": "t",
            "t": 118.415
          },
          {
            "w": "increases",
            "t": 118.827
          },
          {
            "w": "monotonically",
            "t": 119.24
          },
          {
            "w": "over",
            "t": 119.652
          },
          {
            "w": "time,",
            "t": 120.065
          },
          {
            "w": "representing",
            "t": 120.477
          },
          {
            "w": "cognitive",
            "t": 120.89
          },
          {
            "w": "exhaustion.",
            "t": 121.302
          },
          {
            "w": "The",
            "t": 121.715
          },
          {
            "w": "cumulative",
            "t": 122.127
          },
          {
            "w": "probability",
            "t": 122.54
          },
          {
            "w": "of",
            "t": 122.952
          },
          {
            "w": "manual",
            "t": 123.365
          },
          {
            "w": "transcription",
            "t": 123.777
          },
          {
            "w": "error",
            "t": 124.19
          },
          {
            "w": "after",
            "t": 124.602
          },
          {
            "w": "continuous",
            "t": 125.015
          },
          {
            "w": "shift",
            "t": 125.427
          },
          {
            "w": "duration",
            "t": 125.84
          },
          {
            "w": "t",
            "t": 126.252
          },
          {
            "w": "is",
            "t": 126.665
          },
          {
            "w": "given",
            "t": 127.077
          },
          {
            "w": "by",
            "t": 127.49
          },
          {
            "w": "one",
            "t": 127.902
          },
          {
            "w": "minus",
            "t": 128.315
          },
          {
            "w": "exponential",
            "t": 128.727
          },
          {
            "w": "of",
            "t": 129.139
          },
          {
            "w": "negative",
            "t": 129.552
          },
          {
            "w": "t",
            "t": 129.965
          },
          {
            "w": "over",
            "t": 130.377
          },
          {
            "w": "lambda",
            "t": 130.79
          },
          {
            "w": "raised",
            "t": 131.202
          },
          {
            "w": "to",
            "t": 131.615
          },
          {
            "w": "the",
            "t": 132.027
          },
          {
            "w": "power",
            "t": 132.44
          },
          {
            "w": "of",
            "t": 132.852
          },
          {
            "w": "k.",
            "t": 133.264
          },
          {
            "w": "In",
            "t": 133.677
          },
          {
            "w": "production",
            "t": 134.09
          },
          {
            "w": "pipelines,",
            "t": 134.502
          },
          {
            "w": "shift",
            "t": 134.915
          },
          {
            "w": "durations",
            "t": 135.327
          },
          {
            "w": "must",
            "t": 135.74
          },
          {
            "w": "be",
            "t": 136.152
          },
          {
            "w": "capped",
            "t": 136.565
          },
          {
            "w": "at",
            "t": 136.977
          },
          {
            "w": "four",
            "t": 137.389
          },
          {
            "w": "hours",
            "t": 137.802
          },
          {
            "w": "to",
            "t": 138.215
          },
          {
            "w": "keep",
            "t": 138.627
          },
          {
            "w": "error",
            "t": 139.04
          },
          {
            "w": "rates",
            "t": 139.452
          },
          {
            "w": "inside",
            "t": 139.865
          },
          {
            "w": "the",
            "t": 140.277
          },
          {
            "w": "safe",
            "t": 140.69
          },
          {
            "w": "five",
            "t": 141.102
          },
          {
            "w": "percent",
            "t": 141.514
          },
          {
            "w": "operating",
            "t": 141.927
          },
          {
            "w": "envelope.",
            "t": 142.34
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Dr. Nova",
        "text": "Automated physical sensors and machine learning models do not experience biological cognitive fatigue, but they possess their own vulnerability: physical calibration drift and statistical blindspots. A physical sensor's reading S of t over time degrades according to Brownian motion with deterministic drift: S of t equals S zero plus mu drift times t plus sigma noise times W of t, where W of t is a standard Wiener process.",
        "start": 142.752,
        "end": 169.897,
        "words": [
          {
            "w": "Automated",
            "t": 142.752
          },
          {
            "w": "physical",
            "t": 143.145
          },
          {
            "w": "sensors",
            "t": 143.539
          },
          {
            "w": "and",
            "t": 143.932
          },
          {
            "w": "machine",
            "t": 144.326
          },
          {
            "w": "learning",
            "t": 144.719
          },
          {
            "w": "models",
            "t": 145.112
          },
          {
            "w": "do",
            "t": 145.506
          },
          {
            "w": "not",
            "t": 145.899
          },
          {
            "w": "experience",
            "t": 146.293
          },
          {
            "w": "biological",
            "t": 146.686
          },
          {
            "w": "cognitive",
            "t": 147.079
          },
          {
            "w": "fatigue,",
            "t": 147.473
          },
          {
            "w": "but",
            "t": 147.866
          },
          {
            "w": "they",
            "t": 148.26
          },
          {
            "w": "possess",
            "t": 148.653
          },
          {
            "w": "their",
            "t": 149.046
          },
          {
            "w": "own",
            "t": 149.44
          },
          {
            "w": "vulnerability:",
            "t": 149.833
          },
          {
            "w": "physical",
            "t": 150.227
          },
          {
            "w": "calibration",
            "t": 150.62
          },
          {
            "w": "drift",
            "t": 151.014
          },
          {
            "w": "and",
            "t": 151.407
          },
          {
            "w": "statistical",
            "t": 151.8
          },
          {
            "w": "blindspots.",
            "t": 152.194
          },
          {
            "w": "A",
            "t": 152.587
          },
          {
            "w": "physical",
            "t": 152.981
          },
          {
            "w": "sensor's",
            "t": 153.374
          },
          {
            "w": "reading",
            "t": 153.767
          },
          {
            "w": "S",
            "t": 154.161
          },
          {
            "w": "of",
            "t": 154.554
          },
          {
            "w": "t",
            "t": 154.948
          },
          {
            "w": "over",
            "t": 155.341
          },
          {
            "w": "time",
            "t": 155.734
          },
          {
            "w": "degrades",
            "t": 156.128
          },
          {
            "w": "according",
            "t": 156.521
          },
          {
            "w": "to",
            "t": 156.915
          },
          {
            "w": "Brownian",
            "t": 157.308
          },
          {
            "w": "motion",
            "t": 157.701
          },
          {
            "w": "with",
            "t": 158.095
          },
          {
            "w": "deterministic",
            "t": 158.488
          },
          {
            "w": "drift:",
            "t": 158.882
          },
          {
            "w": "S",
            "t": 159.275
          },
          {
            "w": "of",
            "t": 159.668
          },
          {
            "w": "t",
            "t": 160.062
          },
          {
            "w": "equals",
            "t": 160.455
          },
          {
            "w": "S",
            "t": 160.849
          },
          {
            "w": "zero",
            "t": 161.242
          },
          {
            "w": "plus",
            "t": 161.635
          },
          {
            "w": "mu",
            "t": 162.029
          },
          {
            "w": "drift",
            "t": 162.422
          },
          {
            "w": "times",
            "t": 162.816
          },
          {
            "w": "t",
            "t": 163.209
          },
          {
            "w": "plus",
            "t": 163.603
          },
          {
            "w": "sigma",
            "t": 163.996
          },
          {
            "w": "noise",
            "t": 164.389
          },
          {
            "w": "times",
            "t": 164.783
          },
          {
            "w": "W",
            "t": 165.176
          },
          {
            "w": "of",
            "t": 165.57
          },
          {
            "w": "t,",
            "t": 165.963
          },
          {
            "w": "where",
            "t": 166.356
          },
          {
            "w": "W",
            "t": 166.75
          },
          {
            "w": "of",
            "t": 167.143
          },
          {
            "w": "t",
            "t": 167.537
          },
          {
            "w": "is",
            "t": 167.93
          },
          {
            "w": "a",
            "t": 168.323
          },
          {
            "w": "standard",
            "t": 168.717
          },
          {
            "w": "Wiener",
            "t": 169.11
          },
          {
            "w": "process.",
            "t": 169.504
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Dr. Nova",
        "text": "Electrochemical membranes foul, optical lenses accumulate dust, and thermal coefficients fluctuate. In software models, heuristics and neural networks operate with near-zero latency, but encounter catastrophic blindspots when faced with out-of-distribution inputs, outputting highly confident but incorrect predictions.",
        "start": 169.897,
        "end": 190.272,
        "words": [
          {
            "w": "Electrochemical",
            "t": 169.897
          },
          {
            "w": "membranes",
            "t": 170.448
          },
          {
            "w": "foul,",
            "t": 170.998
          },
          {
            "w": "optical",
            "t": 171.549
          },
          {
            "w": "lenses",
            "t": 172.1
          },
          {
            "w": "accumulate",
            "t": 172.65
          },
          {
            "w": "dust,",
            "t": 173.201
          },
          {
            "w": "and",
            "t": 173.752
          },
          {
            "w": "thermal",
            "t": 174.302
          },
          {
            "w": "coefficients",
            "t": 174.853
          },
          {
            "w": "fluctuate.",
            "t": 175.404
          },
          {
            "w": "In",
            "t": 175.954
          },
          {
            "w": "software",
            "t": 176.505
          },
          {
            "w": "models,",
            "t": 177.056
          },
          {
            "w": "heuristics",
            "t": 177.606
          },
          {
            "w": "and",
            "t": 178.157
          },
          {
            "w": "neural",
            "t": 178.708
          },
          {
            "w": "networks",
            "t": 179.258
          },
          {
            "w": "operate",
            "t": 179.809
          },
          {
            "w": "with",
            "t": 180.36
          },
          {
            "w": "near-zero",
            "t": 180.911
          },
          {
            "w": "latency,",
            "t": 181.461
          },
          {
            "w": "but",
            "t": 182.012
          },
          {
            "w": "encounter",
            "t": 182.563
          },
          {
            "w": "catastrophic",
            "t": 183.113
          },
          {
            "w": "blindspots",
            "t": 183.664
          },
          {
            "w": "when",
            "t": 184.215
          },
          {
            "w": "faced",
            "t": 184.765
          },
          {
            "w": "with",
            "t": 185.316
          },
          {
            "w": "out-of-distribution",
            "t": 185.867
          },
          {
            "w": "inputs,",
            "t": 186.417
          },
          {
            "w": "outputting",
            "t": 186.968
          },
          {
            "w": "highly",
            "t": 187.519
          },
          {
            "w": "confident",
            "t": 188.069
          },
          {
            "w": "but",
            "t": 188.62
          },
          {
            "w": "incorrect",
            "t": 189.171
          },
          {
            "w": "predictions.",
            "t": 189.721
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Dr. Nova",
        "text": "We now derive the core mathematical theorem of Human-in-the-Loop triaging. Let C-a denote the marginal cost of automated classification, typically fractions of a cent. Let C-m denote the cost of expert human manual review, around one to two dollars. And let L-error denote the financial loss or penalty of allowing an incorrect record into production.",
        "start": 190.272,
        "end": 212.691,
        "words": [
          {
            "w": "We",
            "t": 190.272
          },
          {
            "w": "now",
            "t": 190.68
          },
          {
            "w": "derive",
            "t": 191.087
          },
          {
            "w": "the",
            "t": 191.495
          },
          {
            "w": "core",
            "t": 191.902
          },
          {
            "w": "mathematical",
            "t": 192.31
          },
          {
            "w": "theorem",
            "t": 192.718
          },
          {
            "w": "of",
            "t": 193.125
          },
          {
            "w": "Human-in-the-Loop",
            "t": 193.533
          },
          {
            "w": "triaging.",
            "t": 193.941
          },
          {
            "w": "Let",
            "t": 194.348
          },
          {
            "w": "C-a",
            "t": 194.756
          },
          {
            "w": "denote",
            "t": 195.163
          },
          {
            "w": "the",
            "t": 195.571
          },
          {
            "w": "marginal",
            "t": 195.979
          },
          {
            "w": "cost",
            "t": 196.386
          },
          {
            "w": "of",
            "t": 196.794
          },
          {
            "w": "automated",
            "t": 197.202
          },
          {
            "w": "classification,",
            "t": 197.609
          },
          {
            "w": "typically",
            "t": 198.017
          },
          {
            "w": "fractions",
            "t": 198.424
          },
          {
            "w": "of",
            "t": 198.832
          },
          {
            "w": "a",
            "t": 199.24
          },
          {
            "w": "cent.",
            "t": 199.647
          },
          {
            "w": "Let",
            "t": 200.055
          },
          {
            "w": "C-m",
            "t": 200.462
          },
          {
            "w": "denote",
            "t": 200.87
          },
          {
            "w": "the",
            "t": 201.278
          },
          {
            "w": "cost",
            "t": 201.685
          },
          {
            "w": "of",
            "t": 202.093
          },
          {
            "w": "expert",
            "t": 202.501
          },
          {
            "w": "human",
            "t": 202.908
          },
          {
            "w": "manual",
            "t": 203.316
          },
          {
            "w": "review,",
            "t": 203.723
          },
          {
            "w": "around",
            "t": 204.131
          },
          {
            "w": "one",
            "t": 204.539
          },
          {
            "w": "to",
            "t": 204.946
          },
          {
            "w": "two",
            "t": 205.354
          },
          {
            "w": "dollars.",
            "t": 205.761
          },
          {
            "w": "And",
            "t": 206.169
          },
          {
            "w": "let",
            "t": 206.577
          },
          {
            "w": "L-error",
            "t": 206.984
          },
          {
            "w": "denote",
            "t": 207.392
          },
          {
            "w": "the",
            "t": 207.8
          },
          {
            "w": "financial",
            "t": 208.207
          },
          {
            "w": "loss",
            "t": 208.615
          },
          {
            "w": "or",
            "t": 209.022
          },
          {
            "w": "penalty",
            "t": 209.43
          },
          {
            "w": "of",
            "t": 209.838
          },
          {
            "w": "allowing",
            "t": 210.245
          },
          {
            "w": "an",
            "t": 210.653
          },
          {
            "w": "incorrect",
            "t": 211.061
          },
          {
            "w": "record",
            "t": 211.468
          },
          {
            "w": "into",
            "t": 211.876
          },
          {
            "w": "production.",
            "t": 212.283
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Dr. Nova",
        "text": "For an item x with model uncertainty U of x, if we accept the automated prediction, our expected penalty is U of x times L-error. If we route it to manual review, our cost is C-m. Therefore, an item should be routed to human review if and only if U of x times L-error exceeds C-m. Dividing through by L-error yields the optimal threshold: tau-star equals C-m divided by L-error. This simple, elegant ratio minimizes expected total acquisition cost.",
        "start": 212.691,
        "end": 241.305,
        "words": [
          {
            "w": "For",
            "t": 212.691
          },
          {
            "w": "an",
            "t": 213.053
          },
          {
            "w": "item",
            "t": 213.415
          },
          {
            "w": "x",
            "t": 213.778
          },
          {
            "w": "with",
            "t": 214.14
          },
          {
            "w": "model",
            "t": 214.502
          },
          {
            "w": "uncertainty",
            "t": 214.864
          },
          {
            "w": "U",
            "t": 215.226
          },
          {
            "w": "of",
            "t": 215.589
          },
          {
            "w": "x,",
            "t": 215.951
          },
          {
            "w": "if",
            "t": 216.313
          },
          {
            "w": "we",
            "t": 216.675
          },
          {
            "w": "accept",
            "t": 217.037
          },
          {
            "w": "the",
            "t": 217.4
          },
          {
            "w": "automated",
            "t": 217.762
          },
          {
            "w": "prediction,",
            "t": 218.124
          },
          {
            "w": "our",
            "t": 218.486
          },
          {
            "w": "expected",
            "t": 218.848
          },
          {
            "w": "penalty",
            "t": 219.211
          },
          {
            "w": "is",
            "t": 219.573
          },
          {
            "w": "U",
            "t": 219.935
          },
          {
            "w": "of",
            "t": 220.297
          },
          {
            "w": "x",
            "t": 220.659
          },
          {
            "w": "times",
            "t": 221.022
          },
          {
            "w": "L-error.",
            "t": 221.384
          },
          {
            "w": "If",
            "t": 221.746
          },
          {
            "w": "we",
            "t": 222.108
          },
          {
            "w": "route",
            "t": 222.47
          },
          {
            "w": "it",
            "t": 222.833
          },
          {
            "w": "to",
            "t": 223.195
          },
          {
            "w": "manual",
            "t": 223.557
          },
          {
            "w": "review,",
            "t": 223.919
          },
          {
            "w": "our",
            "t": 224.281
          },
          {
            "w": "cost",
            "t": 224.644
          },
          {
            "w": "is",
            "t": 225.006
          },
          {
            "w": "C-m.",
            "t": 225.368
          },
          {
            "w": "Therefore,",
            "t": 225.73
          },
          {
            "w": "an",
            "t": 226.092
          },
          {
            "w": "item",
            "t": 226.455
          },
          {
            "w": "should",
            "t": 226.817
          },
          {
            "w": "be",
            "t": 227.179
          },
          {
            "w": "routed",
            "t": 227.541
          },
          {
            "w": "to",
            "t": 227.904
          },
          {
            "w": "human",
            "t": 228.266
          },
          {
            "w": "review",
            "t": 228.628
          },
          {
            "w": "if",
            "t": 228.99
          },
          {
            "w": "and",
            "t": 229.352
          },
          {
            "w": "only",
            "t": 229.715
          },
          {
            "w": "if",
            "t": 230.077
          },
          {
            "w": "U",
            "t": 230.439
          },
          {
            "w": "of",
            "t": 230.801
          },
          {
            "w": "x",
            "t": 231.163
          },
          {
            "w": "times",
            "t": 231.526
          },
          {
            "w": "L-error",
            "t": 231.888
          },
          {
            "w": "exceeds",
            "t": 232.25
          },
          {
            "w": "C-m.",
            "t": 232.612
          },
          {
            "w": "Dividing",
            "t": 232.974
          },
          {
            "w": "through",
            "t": 233.337
          },
          {
            "w": "by",
            "t": 233.699
          },
          {
            "w": "L-error",
            "t": 234.061
          },
          {
            "w": "yields",
            "t": 234.423
          },
          {
            "w": "the",
            "t": 234.785
          },
          {
            "w": "optimal",
            "t": 235.148
          },
          {
            "w": "threshold:",
            "t": 235.51
          },
          {
            "w": "tau-star",
            "t": 235.872
          },
          {
            "w": "equals",
            "t": 236.234
          },
          {
            "w": "C-m",
            "t": 236.596
          },
          {
            "w": "divided",
            "t": 236.959
          },
          {
            "w": "by",
            "t": 237.321
          },
          {
            "w": "L-error.",
            "t": 237.683
          },
          {
            "w": "This",
            "t": 238.045
          },
          {
            "w": "simple,",
            "t": 238.407
          },
          {
            "w": "elegant",
            "t": 238.77
          },
          {
            "w": "ratio",
            "t": 239.132
          },
          {
            "w": "minimizes",
            "t": 239.494
          },
          {
            "w": "expected",
            "t": 239.856
          },
          {
            "w": "total",
            "t": 240.218
          },
          {
            "w": "acquisition",
            "t": 240.581
          },
          {
            "w": "cost.",
            "t": 240.943
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Dr. Nova",
        "text": "Welcome to our first interactive lab of Lesson 2.5: The Cost-Optimal Human-in-the-Loop Triaging Simulator. On this slide, you can directly manipulate batch volume N, automated inference cost C-a, expert manual review cost C-m, and downstream error penalty L-error.",
        "start": 241.305,
        "end": 258.167,
        "words": [
          {
            "w": "Welcome",
            "t": 241.305
          },
          {
            "w": "to",
            "t": 241.749
          },
          {
            "w": "our",
            "t": 242.192
          },
          {
            "w": "first",
            "t": 242.636
          },
          {
            "w": "interactive",
            "t": 243.08
          },
          {
            "w": "lab",
            "t": 243.524
          },
          {
            "w": "of",
            "t": 243.967
          },
          {
            "w": "Lesson",
            "t": 244.411
          },
          {
            "w": "2.5:",
            "t": 244.855
          },
          {
            "w": "The",
            "t": 245.299
          },
          {
            "w": "Cost-Optimal",
            "t": 245.742
          },
          {
            "w": "Human-in-the-Loop",
            "t": 246.186
          },
          {
            "w": "Triaging",
            "t": 246.63
          },
          {
            "w": "Simulator.",
            "t": 247.074
          },
          {
            "w": "On",
            "t": 247.517
          },
          {
            "w": "this",
            "t": 247.961
          },
          {
            "w": "slide,",
            "t": 248.405
          },
          {
            "w": "you",
            "t": 248.849
          },
          {
            "w": "can",
            "t": 249.292
          },
          {
            "w": "directly",
            "t": 249.736
          },
          {
            "w": "manipulate",
            "t": 250.18
          },
          {
            "w": "batch",
            "t": 250.623
          },
          {
            "w": "volume",
            "t": 251.067
          },
          {
            "w": "N,",
            "t": 251.511
          },
          {
            "w": "automated",
            "t": 251.955
          },
          {
            "w": "inference",
            "t": 252.398
          },
          {
            "w": "cost",
            "t": 252.842
          },
          {
            "w": "C-a,",
            "t": 253.286
          },
          {
            "w": "expert",
            "t": 253.73
          },
          {
            "w": "manual",
            "t": 254.173
          },
          {
            "w": "review",
            "t": 254.617
          },
          {
            "w": "cost",
            "t": 255.061
          },
          {
            "w": "C-m,",
            "t": 255.505
          },
          {
            "w": "and",
            "t": 255.948
          },
          {
            "w": "downstream",
            "t": 256.392
          },
          {
            "w": "error",
            "t": 256.836
          },
          {
            "w": "penalty",
            "t": 257.28
          },
          {
            "w": "L-error.",
            "t": 257.723
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Dr. Nova",
        "text": "Notice how adjusting L-error dynamically recalculates tau-star. Observe how the queue status, automated acceptance rate, and cost reduction percentage update in real time, demonstrating how mathematical triaging achieves over seventy to eighty percent cost savings compared to brute-force manual review.",
        "start": 258.167,
        "end": 277.52,
        "words": [
          {
            "w": "Notice",
            "t": 258.167
          },
          {
            "w": "how",
            "t": 258.651
          },
          {
            "w": "adjusting",
            "t": 259.135
          },
          {
            "w": "L-error",
            "t": 259.618
          },
          {
            "w": "dynamically",
            "t": 260.102
          },
          {
            "w": "recalculates",
            "t": 260.586
          },
          {
            "w": "tau-star.",
            "t": 261.07
          },
          {
            "w": "Observe",
            "t": 261.554
          },
          {
            "w": "how",
            "t": 262.038
          },
          {
            "w": "the",
            "t": 262.521
          },
          {
            "w": "queue",
            "t": 263.005
          },
          {
            "w": "status,",
            "t": 263.489
          },
          {
            "w": "automated",
            "t": 263.973
          },
          {
            "w": "acceptance",
            "t": 264.457
          },
          {
            "w": "rate,",
            "t": 264.941
          },
          {
            "w": "and",
            "t": 265.424
          },
          {
            "w": "cost",
            "t": 265.908
          },
          {
            "w": "reduction",
            "t": 266.392
          },
          {
            "w": "percentage",
            "t": 266.876
          },
          {
            "w": "update",
            "t": 267.36
          },
          {
            "w": "in",
            "t": 267.843
          },
          {
            "w": "real",
            "t": 268.327
          },
          {
            "w": "time,",
            "t": 268.811
          },
          {
            "w": "demonstrating",
            "t": 269.295
          },
          {
            "w": "how",
            "t": 269.779
          },
          {
            "w": "mathematical",
            "t": 270.263
          },
          {
            "w": "triaging",
            "t": 270.746
          },
          {
            "w": "achieves",
            "t": 271.23
          },
          {
            "w": "over",
            "t": 271.714
          },
          {
            "w": "seventy",
            "t": 272.198
          },
          {
            "w": "to",
            "t": 272.682
          },
          {
            "w": "eighty",
            "t": 273.166
          },
          {
            "w": "percent",
            "t": 273.649
          },
          {
            "w": "cost",
            "t": 274.133
          },
          {
            "w": "savings",
            "t": 274.617
          },
          {
            "w": "compared",
            "t": 275.101
          },
          {
            "w": "to",
            "t": 275.585
          },
          {
            "w": "brute-force",
            "t": 276.069
          },
          {
            "w": "manual",
            "t": 276.552
          },
          {
            "w": "review.",
            "t": 277.036
          }
        ]
      },
      {
        "slide": 7,
        "slideId": "s7",
        "speaker": "Dr. Nova",
        "text": "Let us consolidate your understanding with Active Checkpoint 1. In a medical document ingestion pipeline, automated OCR and entity extraction costs one cent per record. An expert physician audit costs three dollars per record. A severe diagnostic billing error incurs a loss of one hundred and fifty dollars.",
        "start": 277.52,
        "end": 297.192,
        "words": [
          {
            "w": "Let",
            "t": 277.52
          },
          {
            "w": "us",
            "t": 277.93
          },
          {
            "w": "consolidate",
            "t": 278.34
          },
          {
            "w": "your",
            "t": 278.75
          },
          {
            "w": "understanding",
            "t": 279.159
          },
          {
            "w": "with",
            "t": 279.569
          },
          {
            "w": "Active",
            "t": 279.979
          },
          {
            "w": "Checkpoint",
            "t": 280.389
          },
          {
            "w": "1.",
            "t": 280.799
          },
          {
            "w": "In",
            "t": 281.208
          },
          {
            "w": "a",
            "t": 281.618
          },
          {
            "w": "medical",
            "t": 282.028
          },
          {
            "w": "document",
            "t": 282.438
          },
          {
            "w": "ingestion",
            "t": 282.848
          },
          {
            "w": "pipeline,",
            "t": 283.258
          },
          {
            "w": "automated",
            "t": 283.668
          },
          {
            "w": "OCR",
            "t": 284.077
          },
          {
            "w": "and",
            "t": 284.487
          },
          {
            "w": "entity",
            "t": 284.897
          },
          {
            "w": "extraction",
            "t": 285.307
          },
          {
            "w": "costs",
            "t": 285.717
          },
          {
            "w": "one",
            "t": 286.126
          },
          {
            "w": "cent",
            "t": 286.536
          },
          {
            "w": "per",
            "t": 286.946
          },
          {
            "w": "record.",
            "t": 287.356
          },
          {
            "w": "An",
            "t": 287.766
          },
          {
            "w": "expert",
            "t": 288.176
          },
          {
            "w": "physician",
            "t": 288.586
          },
          {
            "w": "audit",
            "t": 288.995
          },
          {
            "w": "costs",
            "t": 289.405
          },
          {
            "w": "three",
            "t": 289.815
          },
          {
            "w": "dollars",
            "t": 290.225
          },
          {
            "w": "per",
            "t": 290.635
          },
          {
            "w": "record.",
            "t": 291.044
          },
          {
            "w": "A",
            "t": 291.454
          },
          {
            "w": "severe",
            "t": 291.864
          },
          {
            "w": "diagnostic",
            "t": 292.274
          },
          {
            "w": "billing",
            "t": 292.684
          },
          {
            "w": "error",
            "t": 293.094
          },
          {
            "w": "incurs",
            "t": 293.504
          },
          {
            "w": "a",
            "t": 293.913
          },
          {
            "w": "loss",
            "t": 294.323
          },
          {
            "w": "of",
            "t": 294.733
          },
          {
            "w": "one",
            "t": 295.143
          },
          {
            "w": "hundred",
            "t": 295.553
          },
          {
            "w": "and",
            "t": 295.962
          },
          {
            "w": "fifty",
            "t": 296.372
          },
          {
            "w": "dollars.",
            "t": 296.782
          }
        ]
      },
      {
        "slide": 7,
        "slideId": "s7",
        "speaker": "Dr. Nova",
        "text": "Calculate the exact optimal uncertainty routing threshold tau-star below which records should be ingested automatically without human intervention.",
        "start": 297.192,
        "end": 306.581,
        "words": [
          {
            "w": "Calculate",
            "t": 297.192
          },
          {
            "w": "the",
            "t": 297.714
          },
          {
            "w": "exact",
            "t": 298.235
          },
          {
            "w": "optimal",
            "t": 298.757
          },
          {
            "w": "uncertainty",
            "t": 299.278
          },
          {
            "w": "routing",
            "t": 299.8
          },
          {
            "w": "threshold",
            "t": 300.322
          },
          {
            "w": "tau-star",
            "t": 300.843
          },
          {
            "w": "below",
            "t": 301.365
          },
          {
            "w": "which",
            "t": 301.887
          },
          {
            "w": "records",
            "t": 302.408
          },
          {
            "w": "should",
            "t": 302.93
          },
          {
            "w": "be",
            "t": 303.451
          },
          {
            "w": "ingested",
            "t": 303.973
          },
          {
            "w": "automatically",
            "t": 304.495
          },
          {
            "w": "without",
            "t": 305.016
          },
          {
            "w": "human",
            "t": 305.538
          },
          {
            "w": "intervention.",
            "t": 306.059
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Dr. Nova",
        "text": "When data items are routed to manual review, relying on a single human annotator risks encoding individual bias or fatigue. Production pipelines require multiple annotators per item. But how do we prove that annotators genuinely agree, rather than concurring by sheer random luck?",
        "start": 306.581,
        "end": 324.465,
        "words": [
          {
            "w": "When",
            "t": 306.581
          },
          {
            "w": "data",
            "t": 306.997
          },
          {
            "w": "items",
            "t": 307.413
          },
          {
            "w": "are",
            "t": 307.829
          },
          {
            "w": "routed",
            "t": 308.245
          },
          {
            "w": "to",
            "t": 308.661
          },
          {
            "w": "manual",
            "t": 309.076
          },
          {
            "w": "review,",
            "t": 309.492
          },
          {
            "w": "relying",
            "t": 309.908
          },
          {
            "w": "on",
            "t": 310.324
          },
          {
            "w": "a",
            "t": 310.74
          },
          {
            "w": "single",
            "t": 311.156
          },
          {
            "w": "human",
            "t": 311.572
          },
          {
            "w": "annotator",
            "t": 311.988
          },
          {
            "w": "risks",
            "t": 312.404
          },
          {
            "w": "encoding",
            "t": 312.82
          },
          {
            "w": "individual",
            "t": 313.236
          },
          {
            "w": "bias",
            "t": 313.651
          },
          {
            "w": "or",
            "t": 314.067
          },
          {
            "w": "fatigue.",
            "t": 314.483
          },
          {
            "w": "Production",
            "t": 314.899
          },
          {
            "w": "pipelines",
            "t": 315.315
          },
          {
            "w": "require",
            "t": 315.731
          },
          {
            "w": "multiple",
            "t": 316.147
          },
          {
            "w": "annotators",
            "t": 316.563
          },
          {
            "w": "per",
            "t": 316.979
          },
          {
            "w": "item.",
            "t": 317.395
          },
          {
            "w": "But",
            "t": 317.81
          },
          {
            "w": "how",
            "t": 318.226
          },
          {
            "w": "do",
            "t": 318.642
          },
          {
            "w": "we",
            "t": 319.058
          },
          {
            "w": "prove",
            "t": 319.474
          },
          {
            "w": "that",
            "t": 319.89
          },
          {
            "w": "annotators",
            "t": 320.306
          },
          {
            "w": "genuinely",
            "t": 320.722
          },
          {
            "w": "agree,",
            "t": 321.138
          },
          {
            "w": "rather",
            "t": 321.554
          },
          {
            "w": "than",
            "t": 321.97
          },
          {
            "w": "concurring",
            "t": 322.385
          },
          {
            "w": "by",
            "t": 322.801
          },
          {
            "w": "sheer",
            "t": 323.217
          },
          {
            "w": "random",
            "t": 323.633
          },
          {
            "w": "luck?",
            "t": 324.049
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Dr. Nova",
        "text": "In 1971, Joseph Fleiss formulated Generalized Kappa. Unlike raw percentage agreement, Fleiss' Kappa explicitly subtracts the agreement expected by pure random chance, P-sub-e. Kappa equals P-bar minus P-sub-e divided by one minus P-sub-e. On the standard Landis and Koch benchmark, a Kappa below zero point four indicates unacceptably poor consensus, zero point four to zero point six is moderate, and zero point six one to zero point eight represents substantial reliability.",
        "start": 324.465,
        "end": 354.868,
        "words": [
          {
            "w": "In",
            "t": 324.465
          },
          {
            "w": "1971,",
            "t": 324.893
          },
          {
            "w": "Joseph",
            "t": 325.321
          },
          {
            "w": "Fleiss",
            "t": 325.75
          },
          {
            "w": "formulated",
            "t": 326.178
          },
          {
            "w": "Generalized",
            "t": 326.606
          },
          {
            "w": "Kappa.",
            "t": 327.034
          },
          {
            "w": "Unlike",
            "t": 327.462
          },
          {
            "w": "raw",
            "t": 327.891
          },
          {
            "w": "percentage",
            "t": 328.319
          },
          {
            "w": "agreement,",
            "t": 328.747
          },
          {
            "w": "Fleiss'",
            "t": 329.175
          },
          {
            "w": "Kappa",
            "t": 329.604
          },
          {
            "w": "explicitly",
            "t": 330.032
          },
          {
            "w": "subtracts",
            "t": 330.46
          },
          {
            "w": "the",
            "t": 330.888
          },
          {
            "w": "agreement",
            "t": 331.316
          },
          {
            "w": "expected",
            "t": 331.745
          },
          {
            "w": "by",
            "t": 332.173
          },
          {
            "w": "pure",
            "t": 332.601
          },
          {
            "w": "random",
            "t": 333.029
          },
          {
            "w": "chance,",
            "t": 333.457
          },
          {
            "w": "P-sub-e.",
            "t": 333.886
          },
          {
            "w": "Kappa",
            "t": 334.314
          },
          {
            "w": "equals",
            "t": 334.742
          },
          {
            "w": "P-bar",
            "t": 335.17
          },
          {
            "w": "minus",
            "t": 335.598
          },
          {
            "w": "P-sub-e",
            "t": 336.027
          },
          {
            "w": "divided",
            "t": 336.455
          },
          {
            "w": "by",
            "t": 336.883
          },
          {
            "w": "one",
            "t": 337.311
          },
          {
            "w": "minus",
            "t": 337.74
          },
          {
            "w": "P-sub-e.",
            "t": 338.168
          },
          {
            "w": "On",
            "t": 338.596
          },
          {
            "w": "the",
            "t": 339.024
          },
          {
            "w": "standard",
            "t": 339.452
          },
          {
            "w": "Landis",
            "t": 339.881
          },
          {
            "w": "and",
            "t": 340.309
          },
          {
            "w": "Koch",
            "t": 340.737
          },
          {
            "w": "benchmark,",
            "t": 341.165
          },
          {
            "w": "a",
            "t": 341.593
          },
          {
            "w": "Kappa",
            "t": 342.022
          },
          {
            "w": "below",
            "t": 342.45
          },
          {
            "w": "zero",
            "t": 342.878
          },
          {
            "w": "point",
            "t": 343.306
          },
          {
            "w": "four",
            "t": 343.735
          },
          {
            "w": "indicates",
            "t": 344.163
          },
          {
            "w": "unacceptably",
            "t": 344.591
          },
          {
            "w": "poor",
            "t": 345.019
          },
          {
            "w": "consensus,",
            "t": 345.447
          },
          {
            "w": "zero",
            "t": 345.876
          },
          {
            "w": "point",
            "t": 346.304
          },
          {
            "w": "four",
            "t": 346.732
          },
          {
            "w": "to",
            "t": 347.16
          },
          {
            "w": "zero",
            "t": 347.588
          },
          {
            "w": "point",
            "t": 348.017
          },
          {
            "w": "six",
            "t": 348.445
          },
          {
            "w": "is",
            "t": 348.873
          },
          {
            "w": "moderate,",
            "t": 349.301
          },
          {
            "w": "and",
            "t": 349.729
          },
          {
            "w": "zero",
            "t": 350.158
          },
          {
            "w": "point",
            "t": 350.586
          },
          {
            "w": "six",
            "t": 351.014
          },
          {
            "w": "one",
            "t": 351.442
          },
          {
            "w": "to",
            "t": 351.871
          },
          {
            "w": "zero",
            "t": 352.299
          },
          {
            "w": "point",
            "t": 352.727
          },
          {
            "w": "eight",
            "t": 353.155
          },
          {
            "w": "represents",
            "t": 353.583
          },
          {
            "w": "substantial",
            "t": 354.012
          },
          {
            "w": "reliability.",
            "t": 354.44
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Dr. Nova",
        "text": "To guarantee that human annotations remain trustworthy over time, production pipelines deploy two statistical safeguards: Synthetic Gold Traps and Dawid-Skene Probabilistic Weighting.",
        "start": 354.868,
        "end": 366.556,
        "words": [
          {
            "w": "To",
            "t": 354.868
          },
          {
            "w": "guarantee",
            "t": 355.399
          },
          {
            "w": "that",
            "t": 355.931
          },
          {
            "w": "human",
            "t": 356.462
          },
          {
            "w": "annotations",
            "t": 356.993
          },
          {
            "w": "remain",
            "t": 357.524
          },
          {
            "w": "trustworthy",
            "t": 358.056
          },
          {
            "w": "over",
            "t": 358.587
          },
          {
            "w": "time,",
            "t": 359.118
          },
          {
            "w": "production",
            "t": 359.649
          },
          {
            "w": "pipelines",
            "t": 360.181
          },
          {
            "w": "deploy",
            "t": 360.712
          },
          {
            "w": "two",
            "t": 361.243
          },
          {
            "w": "statistical",
            "t": 361.775
          },
          {
            "w": "safeguards:",
            "t": 362.306
          },
          {
            "w": "Synthetic",
            "t": 362.837
          },
          {
            "w": "Gold",
            "t": 363.368
          },
          {
            "w": "Traps",
            "t": 363.9
          },
          {
            "w": "and",
            "t": 364.431
          },
          {
            "w": "Dawid-Skene",
            "t": 364.962
          },
          {
            "w": "Probabilistic",
            "t": 365.493
          },
          {
            "w": "Weighting.",
            "t": 366.025
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Dr. Nova",
        "text": "By inserting five to ten percent pre-validated, unannounced gold standard items into the annotator stream, we can estimate each individual rater's true accuracy in real time. If an annotator's accuracy dips below random chance, they are flagged for fatigue or low effort. Furthermore, instead of taking a naive majority vote where all human opinions count equally, the Dawid-Skene generative model simultaneously infers the true ground-truth label while calculating an individual confusion matrix for every rater, upweighting calibrated experts and downweighting noisy annotators.",
        "start": 366.556,
        "end": 403.601,
        "words": [
          {
            "w": "By",
            "t": 366.556
          },
          {
            "w": "inserting",
            "t": 367.008
          },
          {
            "w": "five",
            "t": 367.46
          },
          {
            "w": "to",
            "t": 367.911
          },
          {
            "w": "ten",
            "t": 368.363
          },
          {
            "w": "percent",
            "t": 368.815
          },
          {
            "w": "pre-validated,",
            "t": 369.267
          },
          {
            "w": "unannounced",
            "t": 369.718
          },
          {
            "w": "gold",
            "t": 370.17
          },
          {
            "w": "standard",
            "t": 370.622
          },
          {
            "w": "items",
            "t": 371.074
          },
          {
            "w": "into",
            "t": 371.525
          },
          {
            "w": "the",
            "t": 371.977
          },
          {
            "w": "annotator",
            "t": 372.429
          },
          {
            "w": "stream,",
            "t": 372.881
          },
          {
            "w": "we",
            "t": 373.333
          },
          {
            "w": "can",
            "t": 373.784
          },
          {
            "w": "estimate",
            "t": 374.236
          },
          {
            "w": "each",
            "t": 374.688
          },
          {
            "w": "individual",
            "t": 375.14
          },
          {
            "w": "rater's",
            "t": 375.591
          },
          {
            "w": "true",
            "t": 376.043
          },
          {
            "w": "accuracy",
            "t": 376.495
          },
          {
            "w": "in",
            "t": 376.947
          },
          {
            "w": "real",
            "t": 377.398
          },
          {
            "w": "time.",
            "t": 377.85
          },
          {
            "w": "If",
            "t": 378.302
          },
          {
            "w": "an",
            "t": 378.754
          },
          {
            "w": "annotator's",
            "t": 379.206
          },
          {
            "w": "accuracy",
            "t": 379.657
          },
          {
            "w": "dips",
            "t": 380.109
          },
          {
            "w": "below",
            "t": 380.561
          },
          {
            "w": "random",
            "t": 381.013
          },
          {
            "w": "chance,",
            "t": 381.464
          },
          {
            "w": "they",
            "t": 381.916
          },
          {
            "w": "are",
            "t": 382.368
          },
          {
            "w": "flagged",
            "t": 382.82
          },
          {
            "w": "for",
            "t": 383.271
          },
          {
            "w": "fatigue",
            "t": 383.723
          },
          {
            "w": "or",
            "t": 384.175
          },
          {
            "w": "low",
            "t": 384.627
          },
          {
            "w": "effort.",
            "t": 385.078
          },
          {
            "w": "Furthermore,",
            "t": 385.53
          },
          {
            "w": "instead",
            "t": 385.982
          },
          {
            "w": "of",
            "t": 386.434
          },
          {
            "w": "taking",
            "t": 386.886
          },
          {
            "w": "a",
            "t": 387.337
          },
          {
            "w": "naive",
            "t": 387.789
          },
          {
            "w": "majority",
            "t": 388.241
          },
          {
            "w": "vote",
            "t": 388.693
          },
          {
            "w": "where",
            "t": 389.144
          },
          {
            "w": "all",
            "t": 389.596
          },
          {
            "w": "human",
            "t": 390.048
          },
          {
            "w": "opinions",
            "t": 390.5
          },
          {
            "w": "count",
            "t": 390.951
          },
          {
            "w": "equally,",
            "t": 391.403
          },
          {
            "w": "the",
            "t": 391.855
          },
          {
            "w": "Dawid-Skene",
            "t": 392.307
          },
          {
            "w": "generative",
            "t": 392.759
          },
          {
            "w": "model",
            "t": 393.21
          },
          {
            "w": "simultaneously",
            "t": 393.662
          },
          {
            "w": "infers",
            "t": 394.114
          },
          {
            "w": "the",
            "t": 394.566
          },
          {
            "w": "true",
            "t": 395.017
          },
          {
            "w": "ground-truth",
            "t": 395.469
          },
          {
            "w": "label",
            "t": 395.921
          },
          {
            "w": "while",
            "t": 396.373
          },
          {
            "w": "calculating",
            "t": 396.824
          },
          {
            "w": "an",
            "t": 397.276
          },
          {
            "w": "individual",
            "t": 397.728
          },
          {
            "w": "confusion",
            "t": 398.18
          },
          {
            "w": "matrix",
            "t": 398.632
          },
          {
            "w": "for",
            "t": 399.083
          },
          {
            "w": "every",
            "t": 399.535
          },
          {
            "w": "rater,",
            "t": 399.987
          },
          {
            "w": "upweighting",
            "t": 400.439
          },
          {
            "w": "calibrated",
            "t": 400.89
          },
          {
            "w": "experts",
            "t": 401.342
          },
          {
            "w": "and",
            "t": 401.794
          },
          {
            "w": "downweighting",
            "t": 402.246
          },
          {
            "w": "noisy",
            "t": 402.697
          },
          {
            "w": "annotators.",
            "t": 403.149
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Dr. Nova",
        "text": "Here is our comprehensive architectural trade-off matrix comparing Pure Manual Auditing, Pure Automated Sensing, and Hybrid Human-in-the-Loop pipelines across five operational dimensions.",
        "start": 403.601,
        "end": 415.545,
        "words": [
          {
            "w": "Here",
            "t": 403.601
          },
          {
            "w": "is",
            "t": 404.144
          },
          {
            "w": "our",
            "t": 404.687
          },
          {
            "w": "comprehensive",
            "t": 405.23
          },
          {
            "w": "architectural",
            "t": 405.773
          },
          {
            "w": "trade-off",
            "t": 406.316
          },
          {
            "w": "matrix",
            "t": 406.858
          },
          {
            "w": "comparing",
            "t": 407.401
          },
          {
            "w": "Pure",
            "t": 407.944
          },
          {
            "w": "Manual",
            "t": 408.487
          },
          {
            "w": "Auditing,",
            "t": 409.03
          },
          {
            "w": "Pure",
            "t": 409.573
          },
          {
            "w": "Automated",
            "t": 410.116
          },
          {
            "w": "Sensing,",
            "t": 410.659
          },
          {
            "w": "and",
            "t": 411.202
          },
          {
            "w": "Hybrid",
            "t": 411.745
          },
          {
            "w": "Human-in-the-Loop",
            "t": 412.288
          },
          {
            "w": "pipelines",
            "t": 412.83
          },
          {
            "w": "across",
            "t": 413.373
          },
          {
            "w": "five",
            "t": 413.916
          },
          {
            "w": "operational",
            "t": 414.459
          },
          {
            "w": "dimensions.",
            "t": 415.002
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Dr. Nova",
        "text": "Notice that Pure Manual achieves high contextual nuance, but maxes out at fifty to two hundred items per hour at an expensive unit cost of fifty cents to two dollars. Pure Automated sensing delivers millions of records per hour for fractions of a penny, but carries zero edge-case resilience and is vulnerable to silent sensor drift. The Hybrid Human-in-the-Loop paradigm dynamically balances both: automated throughput handles ninety percent of volume, while targeted human escalation resolves catastrophic edge cases.",
        "start": 415.545,
        "end": 448.694,
        "words": [
          {
            "w": "Notice",
            "t": 415.545
          },
          {
            "w": "that",
            "t": 415.97
          },
          {
            "w": "Pure",
            "t": 416.395
          },
          {
            "w": "Manual",
            "t": 416.82
          },
          {
            "w": "achieves",
            "t": 417.245
          },
          {
            "w": "high",
            "t": 417.67
          },
          {
            "w": "contextual",
            "t": 418.095
          },
          {
            "w": "nuance,",
            "t": 418.52
          },
          {
            "w": "but",
            "t": 418.945
          },
          {
            "w": "maxes",
            "t": 419.37
          },
          {
            "w": "out",
            "t": 419.795
          },
          {
            "w": "at",
            "t": 420.22
          },
          {
            "w": "fifty",
            "t": 420.645
          },
          {
            "w": "to",
            "t": 421.07
          },
          {
            "w": "two",
            "t": 421.495
          },
          {
            "w": "hundred",
            "t": 421.92
          },
          {
            "w": "items",
            "t": 422.345
          },
          {
            "w": "per",
            "t": 422.77
          },
          {
            "w": "hour",
            "t": 423.195
          },
          {
            "w": "at",
            "t": 423.62
          },
          {
            "w": "an",
            "t": 424.045
          },
          {
            "w": "expensive",
            "t": 424.47
          },
          {
            "w": "unit",
            "t": 424.895
          },
          {
            "w": "cost",
            "t": 425.32
          },
          {
            "w": "of",
            "t": 425.745
          },
          {
            "w": "fifty",
            "t": 426.17
          },
          {
            "w": "cents",
            "t": 426.595
          },
          {
            "w": "to",
            "t": 427.02
          },
          {
            "w": "two",
            "t": 427.445
          },
          {
            "w": "dollars.",
            "t": 427.87
          },
          {
            "w": "Pure",
            "t": 428.295
          },
          {
            "w": "Automated",
            "t": 428.72
          },
          {
            "w": "sensing",
            "t": 429.145
          },
          {
            "w": "delivers",
            "t": 429.57
          },
          {
            "w": "millions",
            "t": 429.995
          },
          {
            "w": "of",
            "t": 430.42
          },
          {
            "w": "records",
            "t": 430.845
          },
          {
            "w": "per",
            "t": 431.27
          },
          {
            "w": "hour",
            "t": 431.695
          },
          {
            "w": "for",
            "t": 432.12
          },
          {
            "w": "fractions",
            "t": 432.544
          },
          {
            "w": "of",
            "t": 432.969
          },
          {
            "w": "a",
            "t": 433.394
          },
          {
            "w": "penny,",
            "t": 433.819
          },
          {
            "w": "but",
            "t": 434.244
          },
          {
            "w": "carries",
            "t": 434.669
          },
          {
            "w": "zero",
            "t": 435.094
          },
          {
            "w": "edge-case",
            "t": 435.519
          },
          {
            "w": "resilience",
            "t": 435.944
          },
          {
            "w": "and",
            "t": 436.369
          },
          {
            "w": "is",
            "t": 436.794
          },
          {
            "w": "vulnerable",
            "t": 437.219
          },
          {
            "w": "to",
            "t": 437.644
          },
          {
            "w": "silent",
            "t": 438.069
          },
          {
            "w": "sensor",
            "t": 438.494
          },
          {
            "w": "drift.",
            "t": 438.919
          },
          {
            "w": "The",
            "t": 439.344
          },
          {
            "w": "Hybrid",
            "t": 439.769
          },
          {
            "w": "Human-in-the-Loop",
            "t": 440.194
          },
          {
            "w": "paradigm",
            "t": 440.619
          },
          {
            "w": "dynamically",
            "t": 441.044
          },
          {
            "w": "balances",
            "t": 441.469
          },
          {
            "w": "both:",
            "t": 441.894
          },
          {
            "w": "automated",
            "t": 442.319
          },
          {
            "w": "throughput",
            "t": 442.744
          },
          {
            "w": "handles",
            "t": 443.169
          },
          {
            "w": "ninety",
            "t": 443.594
          },
          {
            "w": "percent",
            "t": 444.019
          },
          {
            "w": "of",
            "t": 444.444
          },
          {
            "w": "volume,",
            "t": 444.869
          },
          {
            "w": "while",
            "t": 445.294
          },
          {
            "w": "targeted",
            "t": 445.719
          },
          {
            "w": "human",
            "t": 446.144
          },
          {
            "w": "escalation",
            "t": 446.569
          },
          {
            "w": "resolves",
            "t": 446.994
          },
          {
            "w": "catastrophic",
            "t": 447.419
          },
          {
            "w": "edge",
            "t": 447.844
          },
          {
            "w": "cases.",
            "t": 448.269
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Dr. Nova",
        "text": "A Human-in-the-Loop pipeline is not merely a filter; it is an active learning engine. In this architectural flowchart, high-volume sensor and web streams pass through our optimal uncertainty gate.",
        "start": 448.694,
        "end": 461.213,
        "words": [
          {
            "w": "A",
            "t": 448.694
          },
          {
            "w": "Human-in-the-Loop",
            "t": 449.126
          },
          {
            "w": "pipeline",
            "t": 449.557
          },
          {
            "w": "is",
            "t": 449.989
          },
          {
            "w": "not",
            "t": 450.421
          },
          {
            "w": "merely",
            "t": 450.852
          },
          {
            "w": "a",
            "t": 451.284
          },
          {
            "w": "filter;",
            "t": 451.716
          },
          {
            "w": "it",
            "t": 452.148
          },
          {
            "w": "is",
            "t": 452.579
          },
          {
            "w": "an",
            "t": 453.011
          },
          {
            "w": "active",
            "t": 453.443
          },
          {
            "w": "learning",
            "t": 453.874
          },
          {
            "w": "engine.",
            "t": 454.306
          },
          {
            "w": "In",
            "t": 454.738
          },
          {
            "w": "this",
            "t": 455.169
          },
          {
            "w": "architectural",
            "t": 455.601
          },
          {
            "w": "flowchart,",
            "t": 456.033
          },
          {
            "w": "high-volume",
            "t": 456.464
          },
          {
            "w": "sensor",
            "t": 456.896
          },
          {
            "w": "and",
            "t": 457.328
          },
          {
            "w": "web",
            "t": 457.759
          },
          {
            "w": "streams",
            "t": 458.191
          },
          {
            "w": "pass",
            "t": 458.623
          },
          {
            "w": "through",
            "t": 459.055
          },
          {
            "w": "our",
            "t": 459.486
          },
          {
            "w": "optimal",
            "t": 459.918
          },
          {
            "w": "uncertainty",
            "t": 460.35
          },
          {
            "w": "gate.",
            "t": 460.781
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Dr. Nova",
        "text": "Records with low uncertainty flow into Delta Lake silver tables. However, records flagged with high uncertainty or detected drift are routed into a high-loss exemplar buffer. Calibrated human annotators verify these records under Fleiss' Kappa consensus protocols. Once resolved, these verified edge cases do two things: they enter the gold dataset, and they trigger an active learning retraining cycle, fine-tuning model weights and reducing future uncertainty on similar edge cases.",
        "start": 461.213,
        "end": 492.127,
        "words": [
          {
            "w": "Records",
            "t": 461.213
          },
          {
            "w": "with",
            "t": 461.655
          },
          {
            "w": "low",
            "t": 462.096
          },
          {
            "w": "uncertainty",
            "t": 462.538
          },
          {
            "w": "flow",
            "t": 462.98
          },
          {
            "w": "into",
            "t": 463.421
          },
          {
            "w": "Delta",
            "t": 463.863
          },
          {
            "w": "Lake",
            "t": 464.304
          },
          {
            "w": "silver",
            "t": 464.746
          },
          {
            "w": "tables.",
            "t": 465.188
          },
          {
            "w": "However,",
            "t": 465.629
          },
          {
            "w": "records",
            "t": 466.071
          },
          {
            "w": "flagged",
            "t": 466.513
          },
          {
            "w": "with",
            "t": 466.954
          },
          {
            "w": "high",
            "t": 467.396
          },
          {
            "w": "uncertainty",
            "t": 467.837
          },
          {
            "w": "or",
            "t": 468.279
          },
          {
            "w": "detected",
            "t": 468.721
          },
          {
            "w": "drift",
            "t": 469.162
          },
          {
            "w": "are",
            "t": 469.604
          },
          {
            "w": "routed",
            "t": 470.046
          },
          {
            "w": "into",
            "t": 470.487
          },
          {
            "w": "a",
            "t": 470.929
          },
          {
            "w": "high-loss",
            "t": 471.37
          },
          {
            "w": "exemplar",
            "t": 471.812
          },
          {
            "w": "buffer.",
            "t": 472.254
          },
          {
            "w": "Calibrated",
            "t": 472.695
          },
          {
            "w": "human",
            "t": 473.137
          },
          {
            "w": "annotators",
            "t": 473.579
          },
          {
            "w": "verify",
            "t": 474.02
          },
          {
            "w": "these",
            "t": 474.462
          },
          {
            "w": "records",
            "t": 474.903
          },
          {
            "w": "under",
            "t": 475.345
          },
          {
            "w": "Fleiss'",
            "t": 475.787
          },
          {
            "w": "Kappa",
            "t": 476.228
          },
          {
            "w": "consensus",
            "t": 476.67
          },
          {
            "w": "protocols.",
            "t": 477.112
          },
          {
            "w": "Once",
            "t": 477.553
          },
          {
            "w": "resolved,",
            "t": 477.995
          },
          {
            "w": "these",
            "t": 478.437
          },
          {
            "w": "verified",
            "t": 478.878
          },
          {
            "w": "edge",
            "t": 479.32
          },
          {
            "w": "cases",
            "t": 479.761
          },
          {
            "w": "do",
            "t": 480.203
          },
          {
            "w": "two",
            "t": 480.645
          },
          {
            "w": "things:",
            "t": 481.086
          },
          {
            "w": "they",
            "t": 481.528
          },
          {
            "w": "enter",
            "t": 481.97
          },
          {
            "w": "the",
            "t": 482.411
          },
          {
            "w": "gold",
            "t": 482.853
          },
          {
            "w": "dataset,",
            "t": 483.294
          },
          {
            "w": "and",
            "t": 483.736
          },
          {
            "w": "they",
            "t": 484.178
          },
          {
            "w": "trigger",
            "t": 484.619
          },
          {
            "w": "an",
            "t": 485.061
          },
          {
            "w": "active",
            "t": 485.503
          },
          {
            "w": "learning",
            "t": 485.944
          },
          {
            "w": "retraining",
            "t": 486.386
          },
          {
            "w": "cycle,",
            "t": 486.827
          },
          {
            "w": "fine-tuning",
            "t": 487.269
          },
          {
            "w": "model",
            "t": 487.711
          },
          {
            "w": "weights",
            "t": 488.152
          },
          {
            "w": "and",
            "t": 488.594
          },
          {
            "w": "reducing",
            "t": 489.036
          },
          {
            "w": "future",
            "t": 489.477
          },
          {
            "w": "uncertainty",
            "t": 489.919
          },
          {
            "w": "on",
            "t": 490.36
          },
          {
            "w": "similar",
            "t": 490.802
          },
          {
            "w": "edge",
            "t": 491.244
          },
          {
            "w": "cases.",
            "t": 491.685
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Dr. Nova",
        "text": "Welcome to our second interactive lab of Lesson 2.5: The Fleiss' Kappa and Cognitive Fatigue Simulator. This workbench features two interactive models.",
        "start": 492.127,
        "end": 501.772,
        "words": [
          {
            "w": "Welcome",
            "t": 492.127
          },
          {
            "w": "to",
            "t": 492.565
          },
          {
            "w": "our",
            "t": 493.004
          },
          {
            "w": "second",
            "t": 493.442
          },
          {
            "w": "interactive",
            "t": 493.881
          },
          {
            "w": "lab",
            "t": 494.319
          },
          {
            "w": "of",
            "t": 494.757
          },
          {
            "w": "Lesson",
            "t": 495.196
          },
          {
            "w": "2.5:",
            "t": 495.634
          },
          {
            "w": "The",
            "t": 496.073
          },
          {
            "w": "Fleiss'",
            "t": 496.511
          },
          {
            "w": "Kappa",
            "t": 496.95
          },
          {
            "w": "and",
            "t": 497.388
          },
          {
            "w": "Cognitive",
            "t": 497.826
          },
          {
            "w": "Fatigue",
            "t": 498.265
          },
          {
            "w": "Simulator.",
            "t": 498.703
          },
          {
            "w": "This",
            "t": 499.142
          },
          {
            "w": "workbench",
            "t": 499.58
          },
          {
            "w": "features",
            "t": 500.018
          },
          {
            "w": "two",
            "t": 500.457
          },
          {
            "w": "interactive",
            "t": 500.895
          },
          {
            "w": "models.",
            "t": 501.334
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Dr. Nova",
        "text": "In the left panel, adjust observed agreement P-bar and chance agreement P-sub-e to see how Fleiss' Kappa strips away the illusion of random concurrence, dynamically updating the Landis-Koch reliability badge. In the right panel, explore the Weibull fatigue curve by dragging the continuous shift slider past four hours, observing the exponential surge in human error probability that mandates strict shift rotations.",
        "start": 501.772,
        "end": 528.342,
        "words": [
          {
            "w": "In",
            "t": 501.772
          },
          {
            "w": "the",
            "t": 502.208
          },
          {
            "w": "left",
            "t": 502.643
          },
          {
            "w": "panel,",
            "t": 503.079
          },
          {
            "w": "adjust",
            "t": 503.514
          },
          {
            "w": "observed",
            "t": 503.95
          },
          {
            "w": "agreement",
            "t": 504.385
          },
          {
            "w": "P-bar",
            "t": 504.821
          },
          {
            "w": "and",
            "t": 505.257
          },
          {
            "w": "chance",
            "t": 505.692
          },
          {
            "w": "agreement",
            "t": 506.128
          },
          {
            "w": "P-sub-e",
            "t": 506.563
          },
          {
            "w": "to",
            "t": 506.999
          },
          {
            "w": "see",
            "t": 507.434
          },
          {
            "w": "how",
            "t": 507.87
          },
          {
            "w": "Fleiss'",
            "t": 508.306
          },
          {
            "w": "Kappa",
            "t": 508.741
          },
          {
            "w": "strips",
            "t": 509.177
          },
          {
            "w": "away",
            "t": 509.612
          },
          {
            "w": "the",
            "t": 510.048
          },
          {
            "w": "illusion",
            "t": 510.483
          },
          {
            "w": "of",
            "t": 510.919
          },
          {
            "w": "random",
            "t": 511.355
          },
          {
            "w": "concurrence,",
            "t": 511.79
          },
          {
            "w": "dynamically",
            "t": 512.226
          },
          {
            "w": "updating",
            "t": 512.661
          },
          {
            "w": "the",
            "t": 513.097
          },
          {
            "w": "Landis-Koch",
            "t": 513.532
          },
          {
            "w": "reliability",
            "t": 513.968
          },
          {
            "w": "badge.",
            "t": 514.404
          },
          {
            "w": "In",
            "t": 514.839
          },
          {
            "w": "the",
            "t": 515.275
          },
          {
            "w": "right",
            "t": 515.71
          },
          {
            "w": "panel,",
            "t": 516.146
          },
          {
            "w": "explore",
            "t": 516.582
          },
          {
            "w": "the",
            "t": 517.017
          },
          {
            "w": "Weibull",
            "t": 517.453
          },
          {
            "w": "fatigue",
            "t": 517.888
          },
          {
            "w": "curve",
            "t": 518.324
          },
          {
            "w": "by",
            "t": 518.759
          },
          {
            "w": "dragging",
            "t": 519.195
          },
          {
            "w": "the",
            "t": 519.631
          },
          {
            "w": "continuous",
            "t": 520.066
          },
          {
            "w": "shift",
            "t": 520.502
          },
          {
            "w": "slider",
            "t": 520.937
          },
          {
            "w": "past",
            "t": 521.373
          },
          {
            "w": "four",
            "t": 521.808
          },
          {
            "w": "hours,",
            "t": 522.244
          },
          {
            "w": "observing",
            "t": 522.68
          },
          {
            "w": "the",
            "t": 523.115
          },
          {
            "w": "exponential",
            "t": 523.551
          },
          {
            "w": "surge",
            "t": 523.986
          },
          {
            "w": "in",
            "t": 524.422
          },
          {
            "w": "human",
            "t": 524.857
          },
          {
            "w": "error",
            "t": 525.293
          },
          {
            "w": "probability",
            "t": 525.729
          },
          {
            "w": "that",
            "t": 526.164
          },
          {
            "w": "mandates",
            "t": 526.6
          },
          {
            "w": "strict",
            "t": 527.035
          },
          {
            "w": "shift",
            "t": 527.471
          },
          {
            "w": "rotations.",
            "t": 527.906
          }
        ]
      },
      {
        "slide": 13,
        "slideId": "s13",
        "speaker": "Dr. Nova",
        "text": "Time for Active Checkpoint 2. Three medical annotators independently categorize one hundred radiology images into normal versus abnormal. The observed pairwise agreement is eighty-five percent, and the agreement expected purely by random chance is fifty percent.",
        "start": 528.342,
        "end": 545.076,
        "words": [
          {
            "w": "Time",
            "t": 528.342
          },
          {
            "w": "for",
            "t": 528.807
          },
          {
            "w": "Active",
            "t": 529.272
          },
          {
            "w": "Checkpoint",
            "t": 529.736
          },
          {
            "w": "2.",
            "t": 530.201
          },
          {
            "w": "Three",
            "t": 530.666
          },
          {
            "w": "medical",
            "t": 531.131
          },
          {
            "w": "annotators",
            "t": 531.596
          },
          {
            "w": "independently",
            "t": 532.061
          },
          {
            "w": "categorize",
            "t": 532.525
          },
          {
            "w": "one",
            "t": 532.99
          },
          {
            "w": "hundred",
            "t": 533.455
          },
          {
            "w": "radiology",
            "t": 533.92
          },
          {
            "w": "images",
            "t": 534.385
          },
          {
            "w": "into",
            "t": 534.85
          },
          {
            "w": "normal",
            "t": 535.314
          },
          {
            "w": "versus",
            "t": 535.779
          },
          {
            "w": "abnormal.",
            "t": 536.244
          },
          {
            "w": "The",
            "t": 536.709
          },
          {
            "w": "observed",
            "t": 537.174
          },
          {
            "w": "pairwise",
            "t": 537.639
          },
          {
            "w": "agreement",
            "t": 538.104
          },
          {
            "w": "is",
            "t": 538.568
          },
          {
            "w": "eighty-five",
            "t": 539.033
          },
          {
            "w": "percent,",
            "t": 539.498
          },
          {
            "w": "and",
            "t": 539.963
          },
          {
            "w": "the",
            "t": 540.428
          },
          {
            "w": "agreement",
            "t": 540.893
          },
          {
            "w": "expected",
            "t": 541.357
          },
          {
            "w": "purely",
            "t": 541.822
          },
          {
            "w": "by",
            "t": 542.287
          },
          {
            "w": "random",
            "t": 542.752
          },
          {
            "w": "chance",
            "t": 543.217
          },
          {
            "w": "is",
            "t": 543.682
          },
          {
            "w": "fifty",
            "t": 544.146
          },
          {
            "w": "percent.",
            "t": 544.611
          }
        ]
      },
      {
        "slide": 13,
        "slideId": "s13",
        "speaker": "Dr. Nova",
        "text": "Calculate Fleiss' Kappa and determine the operational interpretation of the result according to Landis and Koch benchmarks.",
        "start": 545.076,
        "end": 552.932,
        "words": [
          {
            "w": "Calculate",
            "t": 545.076
          },
          {
            "w": "Fleiss'",
            "t": 545.538
          },
          {
            "w": "Kappa",
            "t": 546.0
          },
          {
            "w": "and",
            "t": 546.462
          },
          {
            "w": "determine",
            "t": 546.924
          },
          {
            "w": "the",
            "t": 547.387
          },
          {
            "w": "operational",
            "t": 547.849
          },
          {
            "w": "interpretation",
            "t": 548.311
          },
          {
            "w": "of",
            "t": 548.773
          },
          {
            "w": "the",
            "t": 549.235
          },
          {
            "w": "result",
            "t": 549.697
          },
          {
            "w": "according",
            "t": 550.159
          },
          {
            "w": "to",
            "t": 550.621
          },
          {
            "w": "Landis",
            "t": 551.084
          },
          {
            "w": "and",
            "t": 551.546
          },
          {
            "w": "Koch",
            "t": 552.008
          },
          {
            "w": "benchmarks.",
            "t": 552.47
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Dr. Nova",
        "text": "Let us examine an empirical case study from retail computer vision. A major supermarket chain deployed autonomous robotic camera carts across two hundred and fifty stores to audit forty thousand shelf products daily.",
        "start": 552.932,
        "end": 566.728,
        "words": [
          {
            "w": "Let",
            "t": 552.932
          },
          {
            "w": "us",
            "t": 553.35
          },
          {
            "w": "examine",
            "t": 553.768
          },
          {
            "w": "an",
            "t": 554.186
          },
          {
            "w": "empirical",
            "t": 554.604
          },
          {
            "w": "case",
            "t": 555.022
          },
          {
            "w": "study",
            "t": 555.44
          },
          {
            "w": "from",
            "t": 555.858
          },
          {
            "w": "retail",
            "t": 556.276
          },
          {
            "w": "computer",
            "t": 556.695
          },
          {
            "w": "vision.",
            "t": 557.113
          },
          {
            "w": "A",
            "t": 557.531
          },
          {
            "w": "major",
            "t": 557.949
          },
          {
            "w": "supermarket",
            "t": 558.367
          },
          {
            "w": "chain",
            "t": 558.785
          },
          {
            "w": "deployed",
            "t": 559.203
          },
          {
            "w": "autonomous",
            "t": 559.621
          },
          {
            "w": "robotic",
            "t": 560.039
          },
          {
            "w": "camera",
            "t": 560.457
          },
          {
            "w": "carts",
            "t": 560.875
          },
          {
            "w": "across",
            "t": 561.293
          },
          {
            "w": "two",
            "t": 561.711
          },
          {
            "w": "hundred",
            "t": 562.129
          },
          {
            "w": "and",
            "t": 562.547
          },
          {
            "w": "fifty",
            "t": 562.965
          },
          {
            "w": "stores",
            "t": 563.384
          },
          {
            "w": "to",
            "t": 563.802
          },
          {
            "w": "audit",
            "t": 564.22
          },
          {
            "w": "forty",
            "t": 564.638
          },
          {
            "w": "thousand",
            "t": 565.056
          },
          {
            "w": "shelf",
            "t": 565.474
          },
          {
            "w": "products",
            "t": 565.892
          },
          {
            "w": "daily.",
            "t": 566.31
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Dr. Nova",
        "text": "The pure computer vision models achieved ninety-seven point one percent precision on standard cardboard boxes, but failed completely on reflective foil pouches, crumpled potato chip bags, and damaged barcodes, triggering one point eight million dollars in annual out-of-stock losses. Auditing all forty thousand items manually across two hundred and fifty stores would have required eight hundred full-time store associates, costing twenty-eight million dollars in annual wages. By implementing our cost-optimal triaging policy tau-star equals C-m over L-error, the robotic carts processed ninety-four percent of items autonomously. The six percent most ambiguous edge cases were automatically dispatched to mobile handheld terminals of on-duty store associates. This preserved ninety-nine point eight percent inventory accuracy while slashing manual labor demands by ninety-four percent.",
        "start": 566.728,
        "end": 623.446,
        "words": [
          {
            "w": "The",
            "t": 566.728
          },
          {
            "w": "pure",
            "t": 567.201
          },
          {
            "w": "computer",
            "t": 567.673
          },
          {
            "w": "vision",
            "t": 568.146
          },
          {
            "w": "models",
            "t": 568.619
          },
          {
            "w": "achieved",
            "t": 569.091
          },
          {
            "w": "ninety-seven",
            "t": 569.564
          },
          {
            "w": "point",
            "t": 570.037
          },
          {
            "w": "one",
            "t": 570.509
          },
          {
            "w": "percent",
            "t": 570.982
          },
          {
            "w": "precision",
            "t": 571.454
          },
          {
            "w": "on",
            "t": 571.927
          },
          {
            "w": "standard",
            "t": 572.4
          },
          {
            "w": "cardboard",
            "t": 572.872
          },
          {
            "w": "boxes,",
            "t": 573.345
          },
          {
            "w": "but",
            "t": 573.818
          },
          {
            "w": "failed",
            "t": 574.29
          },
          {
            "w": "completely",
            "t": 574.763
          },
          {
            "w": "on",
            "t": 575.236
          },
          {
            "w": "reflective",
            "t": 575.708
          },
          {
            "w": "foil",
            "t": 576.181
          },
          {
            "w": "pouches,",
            "t": 576.654
          },
          {
            "w": "crumpled",
            "t": 577.126
          },
          {
            "w": "potato",
            "t": 577.599
          },
          {
            "w": "chip",
            "t": 578.072
          },
          {
            "w": "bags,",
            "t": 578.544
          },
          {
            "w": "and",
            "t": 579.017
          },
          {
            "w": "damaged",
            "t": 579.49
          },
          {
            "w": "barcodes,",
            "t": 579.962
          },
          {
            "w": "triggering",
            "t": 580.435
          },
          {
            "w": "one",
            "t": 580.908
          },
          {
            "w": "point",
            "t": 581.38
          },
          {
            "w": "eight",
            "t": 581.853
          },
          {
            "w": "million",
            "t": 582.325
          },
          {
            "w": "dollars",
            "t": 582.798
          },
          {
            "w": "in",
            "t": 583.271
          },
          {
            "w": "annual",
            "t": 583.743
          },
          {
            "w": "out-of-stock",
            "t": 584.216
          },
          {
            "w": "losses.",
            "t": 584.689
          },
          {
            "w": "Auditing",
            "t": 585.161
          },
          {
            "w": "all",
            "t": 585.634
          },
          {
            "w": "forty",
            "t": 586.107
          },
          {
            "w": "thousand",
            "t": 586.579
          },
          {
            "w": "items",
            "t": 587.052
          },
          {
            "w": "manually",
            "t": 587.525
          },
          {
            "w": "across",
            "t": 587.997
          },
          {
            "w": "two",
            "t": 588.47
          },
          {
            "w": "hundred",
            "t": 588.943
          },
          {
            "w": "and",
            "t": 589.415
          },
          {
            "w": "fifty",
            "t": 589.888
          },
          {
            "w": "stores",
            "t": 590.361
          },
          {
            "w": "would",
            "t": 590.833
          },
          {
            "w": "have",
            "t": 591.306
          },
          {
            "w": "required",
            "t": 591.778
          },
          {
            "w": "eight",
            "t": 592.251
          },
          {
            "w": "hundred",
            "t": 592.724
          },
          {
            "w": "full-time",
            "t": 593.196
          },
          {
            "w": "store",
            "t": 593.669
          },
          {
            "w": "associates,",
            "t": 594.142
          },
          {
            "w": "costing",
            "t": 594.614
          },
          {
            "w": "twenty-eight",
            "t": 595.087
          },
          {
            "w": "million",
            "t": 595.56
          },
          {
            "w": "dollars",
            "t": 596.032
          },
          {
            "w": "in",
            "t": 596.505
          },
          {
            "w": "annual",
            "t": 596.978
          },
          {
            "w": "wages.",
            "t": 597.45
          },
          {
            "w": "By",
            "t": 597.923
          },
          {
            "w": "implementing",
            "t": 598.396
          },
          {
            "w": "our",
            "t": 598.868
          },
          {
            "w": "cost-optimal",
            "t": 599.341
          },
          {
            "w": "triaging",
            "t": 599.813
          },
          {
            "w": "policy",
            "t": 600.286
          },
          {
            "w": "tau-star",
            "t": 600.759
          },
          {
            "w": "equals",
            "t": 601.231
          },
          {
            "w": "C-m",
            "t": 601.704
          },
          {
            "w": "over",
            "t": 602.177
          },
          {
            "w": "L-error,",
            "t": 602.649
          },
          {
            "w": "the",
            "t": 603.122
          },
          {
            "w": "robotic",
            "t": 603.595
          },
          {
            "w": "carts",
            "t": 604.067
          },
          {
            "w": "processed",
            "t": 604.54
          },
          {
            "w": "ninety-four",
            "t": 605.013
          },
          {
            "w": "percent",
            "t": 605.485
          },
          {
            "w": "of",
            "t": 605.958
          },
          {
            "w": "items",
            "t": 606.431
          },
          {
            "w": "autonomously.",
            "t": 606.903
          },
          {
            "w": "The",
            "t": 607.376
          },
          {
            "w": "six",
            "t": 607.849
          },
          {
            "w": "percent",
            "t": 608.321
          },
          {
            "w": "most",
            "t": 608.794
          },
          {
            "w": "ambiguous",
            "t": 609.266
          },
          {
            "w": "edge",
            "t": 609.739
          },
          {
            "w": "cases",
            "t": 610.212
          },
          {
            "w": "were",
            "t": 610.684
          },
          {
            "w": "automatically",
            "t": 611.157
          },
          {
            "w": "dispatched",
            "t": 611.63
          },
          {
            "w": "to",
            "t": 612.102
          },
          {
            "w": "mobile",
            "t": 612.575
          },
          {
            "w": "handheld",
            "t": 613.048
          },
          {
            "w": "terminals",
            "t": 613.52
          },
          {
            "w": "of",
            "t": 613.993
          },
          {
            "w": "on-duty",
            "t": 614.466
          },
          {
            "w": "store",
            "t": 614.938
          },
          {
            "w": "associates.",
            "t": 615.411
          },
          {
            "w": "This",
            "t": 615.884
          },
          {
            "w": "preserved",
            "t": 616.356
          },
          {
            "w": "ninety-nine",
            "t": 616.829
          },
          {
            "w": "point",
            "t": 617.302
          },
          {
            "w": "eight",
            "t": 617.774
          },
          {
            "w": "percent",
            "t": 618.247
          },
          {
            "w": "inventory",
            "t": 618.72
          },
          {
            "w": "accuracy",
            "t": 619.192
          },
          {
            "w": "while",
            "t": 619.665
          },
          {
            "w": "slashing",
            "t": 620.137
          },
          {
            "w": "manual",
            "t": 620.61
          },
          {
            "w": "labor",
            "t": 621.083
          },
          {
            "w": "demands",
            "t": 621.555
          },
          {
            "w": "by",
            "t": 622.028
          },
          {
            "w": "ninety-four",
            "t": 622.501
          },
          {
            "w": "percent.",
            "t": 622.973
          }
        ]
      },
      {
        "slide": 15,
        "slideId": "s15",
        "speaker": "Dr. Nova",
        "text": "Here is the production Python implementation of our cost-optimal triaging engine, directly aligned with the monograph script. The simulate_hitl_triaging function computes optimal tau as cost_manual divided by cost_error.",
        "start": 623.446,
        "end": 637.498,
        "words": [
          {
            "w": "Here",
            "t": 623.446
          },
          {
            "w": "is",
            "t": 623.948
          },
          {
            "w": "the",
            "t": 624.45
          },
          {
            "w": "production",
            "t": 624.952
          },
          {
            "w": "Python",
            "t": 625.453
          },
          {
            "w": "implementation",
            "t": 625.955
          },
          {
            "w": "of",
            "t": 626.457
          },
          {
            "w": "our",
            "t": 626.959
          },
          {
            "w": "cost-optimal",
            "t": 627.461
          },
          {
            "w": "triaging",
            "t": 627.963
          },
          {
            "w": "engine,",
            "t": 628.465
          },
          {
            "w": "directly",
            "t": 628.966
          },
          {
            "w": "aligned",
            "t": 629.468
          },
          {
            "w": "with",
            "t": 629.97
          },
          {
            "w": "the",
            "t": 630.472
          },
          {
            "w": "monograph",
            "t": 630.974
          },
          {
            "w": "script.",
            "t": 631.476
          },
          {
            "w": "The",
            "t": 631.978
          },
          {
            "w": "simulate_hitl_triaging",
            "t": 632.479
          },
          {
            "w": "function",
            "t": 632.981
          },
          {
            "w": "computes",
            "t": 633.483
          },
          {
            "w": "optimal",
            "t": 633.985
          },
          {
            "w": "tau",
            "t": 634.487
          },
          {
            "w": "as",
            "t": 634.989
          },
          {
            "w": "cost_manual",
            "t": 635.491
          },
          {
            "w": "divided",
            "t": 635.992
          },
          {
            "w": "by",
            "t": 636.494
          },
          {
            "w": "cost_error.",
            "t": 636.996
          }
        ]
      },
      {
        "slide": 15,
        "slideId": "s15",
        "speaker": "Dr. Nova",
        "text": "It models model uncertainties using a Beta distribution skewed towards high confidence. It partitions items into automated acceptance and manual review queues, calculates total system cost including automated compute, manual review labor, and expected error penalties, and verifies assertions: confirming that the threshold matches our mathematical derivation and that total cost savings exceed seventy percent over pure manual curation.",
        "start": 637.498,
        "end": 665.41,
        "words": [
          {
            "w": "It",
            "t": 637.498
          },
          {
            "w": "models",
            "t": 637.971
          },
          {
            "w": "model",
            "t": 638.444
          },
          {
            "w": "uncertainties",
            "t": 638.917
          },
          {
            "w": "using",
            "t": 639.39
          },
          {
            "w": "a",
            "t": 639.863
          },
          {
            "w": "Beta",
            "t": 640.337
          },
          {
            "w": "distribution",
            "t": 640.81
          },
          {
            "w": "skewed",
            "t": 641.283
          },
          {
            "w": "towards",
            "t": 641.756
          },
          {
            "w": "high",
            "t": 642.229
          },
          {
            "w": "confidence.",
            "t": 642.702
          },
          {
            "w": "It",
            "t": 643.175
          },
          {
            "w": "partitions",
            "t": 643.648
          },
          {
            "w": "items",
            "t": 644.121
          },
          {
            "w": "into",
            "t": 644.594
          },
          {
            "w": "automated",
            "t": 645.067
          },
          {
            "w": "acceptance",
            "t": 645.54
          },
          {
            "w": "and",
            "t": 646.014
          },
          {
            "w": "manual",
            "t": 646.487
          },
          {
            "w": "review",
            "t": 646.96
          },
          {
            "w": "queues,",
            "t": 647.433
          },
          {
            "w": "calculates",
            "t": 647.906
          },
          {
            "w": "total",
            "t": 648.379
          },
          {
            "w": "system",
            "t": 648.852
          },
          {
            "w": "cost",
            "t": 649.325
          },
          {
            "w": "including",
            "t": 649.798
          },
          {
            "w": "automated",
            "t": 650.271
          },
          {
            "w": "compute,",
            "t": 650.744
          },
          {
            "w": "manual",
            "t": 651.217
          },
          {
            "w": "review",
            "t": 651.691
          },
          {
            "w": "labor,",
            "t": 652.164
          },
          {
            "w": "and",
            "t": 652.637
          },
          {
            "w": "expected",
            "t": 653.11
          },
          {
            "w": "error",
            "t": 653.583
          },
          {
            "w": "penalties,",
            "t": 654.056
          },
          {
            "w": "and",
            "t": 654.529
          },
          {
            "w": "verifies",
            "t": 655.002
          },
          {
            "w": "assertions:",
            "t": 655.475
          },
          {
            "w": "confirming",
            "t": 655.948
          },
          {
            "w": "that",
            "t": 656.421
          },
          {
            "w": "the",
            "t": 656.894
          },
          {
            "w": "threshold",
            "t": 657.368
          },
          {
            "w": "matches",
            "t": 657.841
          },
          {
            "w": "our",
            "t": 658.314
          },
          {
            "w": "mathematical",
            "t": 658.787
          },
          {
            "w": "derivation",
            "t": 659.26
          },
          {
            "w": "and",
            "t": 659.733
          },
          {
            "w": "that",
            "t": 660.206
          },
          {
            "w": "total",
            "t": 660.679
          },
          {
            "w": "cost",
            "t": 661.152
          },
          {
            "w": "savings",
            "t": 661.625
          },
          {
            "w": "exceed",
            "t": 662.098
          },
          {
            "w": "seventy",
            "t": 662.571
          },
          {
            "w": "percent",
            "t": 663.045
          },
          {
            "w": "over",
            "t": 663.518
          },
          {
            "w": "pure",
            "t": 663.991
          },
          {
            "w": "manual",
            "t": 664.464
          },
          {
            "w": "curation.",
            "t": 664.937
          }
        ]
      },
      {
        "slide": 16,
        "slideId": "s16",
        "speaker": "Dr. Nova",
        "text": "To conclude Lesson 2.5, let us synthesize the Four Golden Rules of Ingestion Execution Paradigms. First, always quantify the asymmetric error loss ratio: never guess a routing threshold, calculate tau-star equals C-m divided by L-error. Second, bound human cognitive fatigue by enforcing four-hour shift caps guided by the Weibull hazard model.",
        "start": 665.41,
        "end": 687.382,
        "words": [
          {
            "w": "To",
            "t": 665.41
          },
          {
            "w": "conclude",
            "t": 665.841
          },
          {
            "w": "Lesson",
            "t": 666.272
          },
          {
            "w": "2.5,",
            "t": 666.702
          },
          {
            "w": "let",
            "t": 667.133
          },
          {
            "w": "us",
            "t": 667.564
          },
          {
            "w": "synthesize",
            "t": 667.995
          },
          {
            "w": "the",
            "t": 668.426
          },
          {
            "w": "Four",
            "t": 668.857
          },
          {
            "w": "Golden",
            "t": 669.287
          },
          {
            "w": "Rules",
            "t": 669.718
          },
          {
            "w": "of",
            "t": 670.149
          },
          {
            "w": "Ingestion",
            "t": 670.58
          },
          {
            "w": "Execution",
            "t": 671.011
          },
          {
            "w": "Paradigms.",
            "t": 671.442
          },
          {
            "w": "First,",
            "t": 671.872
          },
          {
            "w": "always",
            "t": 672.303
          },
          {
            "w": "quantify",
            "t": 672.734
          },
          {
            "w": "the",
            "t": 673.165
          },
          {
            "w": "asymmetric",
            "t": 673.596
          },
          {
            "w": "error",
            "t": 674.026
          },
          {
            "w": "loss",
            "t": 674.457
          },
          {
            "w": "ratio:",
            "t": 674.888
          },
          {
            "w": "never",
            "t": 675.319
          },
          {
            "w": "guess",
            "t": 675.75
          },
          {
            "w": "a",
            "t": 676.181
          },
          {
            "w": "routing",
            "t": 676.611
          },
          {
            "w": "threshold,",
            "t": 677.042
          },
          {
            "w": "calculate",
            "t": 677.473
          },
          {
            "w": "tau-star",
            "t": 677.904
          },
          {
            "w": "equals",
            "t": 678.335
          },
          {
            "w": "C-m",
            "t": 678.766
          },
          {
            "w": "divided",
            "t": 679.196
          },
          {
            "w": "by",
            "t": 679.627
          },
          {
            "w": "L-error.",
            "t": 680.058
          },
          {
            "w": "Second,",
            "t": 680.489
          },
          {
            "w": "bound",
            "t": 680.92
          },
          {
            "w": "human",
            "t": 681.35
          },
          {
            "w": "cognitive",
            "t": 681.781
          },
          {
            "w": "fatigue",
            "t": 682.212
          },
          {
            "w": "by",
            "t": 682.643
          },
          {
            "w": "enforcing",
            "t": 683.074
          },
          {
            "w": "four-hour",
            "t": 683.505
          },
          {
            "w": "shift",
            "t": 683.935
          },
          {
            "w": "caps",
            "t": 684.366
          },
          {
            "w": "guided",
            "t": 684.797
          },
          {
            "w": "by",
            "t": 685.228
          },
          {
            "w": "the",
            "t": 685.659
          },
          {
            "w": "Weibull",
            "t": 686.09
          },
          {
            "w": "hazard",
            "t": 686.52
          },
          {
            "w": "model.",
            "t": 686.951
          }
        ]
      },
      {
        "slide": 16,
        "slideId": "s16",
        "speaker": "Dr. Nova",
        "text": "Third, verify human annotators with Fleiss' Generalized Kappa, requiring Kappa of at least zero point seven zero and deploying blind synthetic gold traps. And fourth, close the loop with continuous active learning, feeding human corrections back to retrain models and shrink future uncertainty. With these execution foundations mastered, we are prepared for Lesson 2.6, where we will derive Probability Sampling Theory.",
        "start": 687.382,
        "end": 714.144,
        "words": [
          {
            "w": "Third,",
            "t": 687.382
          },
          {
            "w": "verify",
            "t": 687.821
          },
          {
            "w": "human",
            "t": 688.259
          },
          {
            "w": "annotators",
            "t": 688.698
          },
          {
            "w": "with",
            "t": 689.137
          },
          {
            "w": "Fleiss'",
            "t": 689.576
          },
          {
            "w": "Generalized",
            "t": 690.014
          },
          {
            "w": "Kappa,",
            "t": 690.453
          },
          {
            "w": "requiring",
            "t": 690.892
          },
          {
            "w": "Kappa",
            "t": 691.33
          },
          {
            "w": "of",
            "t": 691.769
          },
          {
            "w": "at",
            "t": 692.208
          },
          {
            "w": "least",
            "t": 692.647
          },
          {
            "w": "zero",
            "t": 693.085
          },
          {
            "w": "point",
            "t": 693.524
          },
          {
            "w": "seven",
            "t": 693.963
          },
          {
            "w": "zero",
            "t": 694.402
          },
          {
            "w": "and",
            "t": 694.84
          },
          {
            "w": "deploying",
            "t": 695.279
          },
          {
            "w": "blind",
            "t": 695.718
          },
          {
            "w": "synthetic",
            "t": 696.156
          },
          {
            "w": "gold",
            "t": 696.595
          },
          {
            "w": "traps.",
            "t": 697.034
          },
          {
            "w": "And",
            "t": 697.473
          },
          {
            "w": "fourth,",
            "t": 697.911
          },
          {
            "w": "close",
            "t": 698.35
          },
          {
            "w": "the",
            "t": 698.789
          },
          {
            "w": "loop",
            "t": 699.227
          },
          {
            "w": "with",
            "t": 699.666
          },
          {
            "w": "continuous",
            "t": 700.105
          },
          {
            "w": "active",
            "t": 700.544
          },
          {
            "w": "learning,",
            "t": 700.982
          },
          {
            "w": "feeding",
            "t": 701.421
          },
          {
            "w": "human",
            "t": 701.86
          },
          {
            "w": "corrections",
            "t": 702.299
          },
          {
            "w": "back",
            "t": 702.737
          },
          {
            "w": "to",
            "t": 703.176
          },
          {
            "w": "retrain",
            "t": 703.615
          },
          {
            "w": "models",
            "t": 704.053
          },
          {
            "w": "and",
            "t": 704.492
          },
          {
            "w": "shrink",
            "t": 704.931
          },
          {
            "w": "future",
            "t": 705.37
          },
          {
            "w": "uncertainty.",
            "t": 705.808
          },
          {
            "w": "With",
            "t": 706.247
          },
          {
            "w": "these",
            "t": 706.686
          },
          {
            "w": "execution",
            "t": 707.124
          },
          {
            "w": "foundations",
            "t": 707.563
          },
          {
            "w": "mastered,",
            "t": 708.002
          },
          {
            "w": "we",
            "t": 708.441
          },
          {
            "w": "are",
            "t": 708.879
          },
          {
            "w": "prepared",
            "t": 709.318
          },
          {
            "w": "for",
            "t": 709.757
          },
          {
            "w": "Lesson",
            "t": 710.196
          },
          {
            "w": "2.6,",
            "t": 710.634
          },
          {
            "w": "where",
            "t": 711.073
          },
          {
            "w": "we",
            "t": 711.512
          },
          {
            "w": "will",
            "t": 711.95
          },
          {
            "w": "derive",
            "t": 712.389
          },
          {
            "w": "Probability",
            "t": 712.828
          },
          {
            "w": "Sampling",
            "t": 713.267
          },
          {
            "w": "Theory.",
            "t": 713.705
          }
        ]
      }
    ]
  },
  "ch2_p5_duo": {
    "duration": 733.128,
    "sentences": [
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Kaito",
        "text": "Dr. Nova, if modern computer vision models and automated scrapers can process millions of data records per hour for practically zero marginal cost, why would any modern engineering team still hire human annotators? Isn't manual data curation obsolete?",
        "start": 0.0,
        "end": 16.234,
        "words": [
          {
            "w": "Dr.",
            "t": 0.0
          },
          {
            "w": "Nova,",
            "t": 0.427
          },
          {
            "w": "if",
            "t": 0.854
          },
          {
            "w": "modern",
            "t": 1.282
          },
          {
            "w": "computer",
            "t": 1.709
          },
          {
            "w": "vision",
            "t": 2.136
          },
          {
            "w": "models",
            "t": 2.563
          },
          {
            "w": "and",
            "t": 2.99
          },
          {
            "w": "automated",
            "t": 3.418
          },
          {
            "w": "scrapers",
            "t": 3.845
          },
          {
            "w": "can",
            "t": 4.272
          },
          {
            "w": "process",
            "t": 4.699
          },
          {
            "w": "millions",
            "t": 5.127
          },
          {
            "w": "of",
            "t": 5.554
          },
          {
            "w": "data",
            "t": 5.981
          },
          {
            "w": "records",
            "t": 6.408
          },
          {
            "w": "per",
            "t": 6.835
          },
          {
            "w": "hour",
            "t": 7.263
          },
          {
            "w": "for",
            "t": 7.69
          },
          {
            "w": "practically",
            "t": 8.117
          },
          {
            "w": "zero",
            "t": 8.544
          },
          {
            "w": "marginal",
            "t": 8.971
          },
          {
            "w": "cost,",
            "t": 9.399
          },
          {
            "w": "why",
            "t": 9.826
          },
          {
            "w": "would",
            "t": 10.253
          },
          {
            "w": "any",
            "t": 10.68
          },
          {
            "w": "modern",
            "t": 11.107
          },
          {
            "w": "engineering",
            "t": 11.535
          },
          {
            "w": "team",
            "t": 11.962
          },
          {
            "w": "still",
            "t": 12.389
          },
          {
            "w": "hire",
            "t": 12.816
          },
          {
            "w": "human",
            "t": 13.244
          },
          {
            "w": "annotators?",
            "t": 13.671
          },
          {
            "w": "Isn't",
            "t": 14.098
          },
          {
            "w": "manual",
            "t": 14.525
          },
          {
            "w": "data",
            "t": 14.952
          },
          {
            "w": "curation",
            "t": 15.38
          },
          {
            "w": "obsolete?",
            "t": 15.807
          }
        ]
      },
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Dr. Nova",
        "text": "It is tempting to think so, Kaito! But automated models suffer from blind edge cases and out-of-distribution hallucinations. If a model encounters reflective grocery packaging or rare medical pathologies, it can fail with extreme confidence. In high-stakes environments, the financial or clinical penalty of an uncorrected error dwarfs the cost of human verification.",
        "start": 16.234,
        "end": 39.971,
        "words": [
          {
            "w": "It",
            "t": 16.234
          },
          {
            "w": "is",
            "t": 16.682
          },
          {
            "w": "tempting",
            "t": 17.13
          },
          {
            "w": "to",
            "t": 17.578
          },
          {
            "w": "think",
            "t": 18.025
          },
          {
            "w": "so,",
            "t": 18.473
          },
          {
            "w": "Kaito!",
            "t": 18.921
          },
          {
            "w": "But",
            "t": 19.369
          },
          {
            "w": "automated",
            "t": 19.817
          },
          {
            "w": "models",
            "t": 20.265
          },
          {
            "w": "suffer",
            "t": 20.713
          },
          {
            "w": "from",
            "t": 21.161
          },
          {
            "w": "blind",
            "t": 21.608
          },
          {
            "w": "edge",
            "t": 22.056
          },
          {
            "w": "cases",
            "t": 22.504
          },
          {
            "w": "and",
            "t": 22.952
          },
          {
            "w": "out-of-distribution",
            "t": 23.4
          },
          {
            "w": "hallucinations.",
            "t": 23.848
          },
          {
            "w": "If",
            "t": 24.296
          },
          {
            "w": "a",
            "t": 24.743
          },
          {
            "w": "model",
            "t": 25.191
          },
          {
            "w": "encounters",
            "t": 25.639
          },
          {
            "w": "reflective",
            "t": 26.087
          },
          {
            "w": "grocery",
            "t": 26.535
          },
          {
            "w": "packaging",
            "t": 26.983
          },
          {
            "w": "or",
            "t": 27.431
          },
          {
            "w": "rare",
            "t": 27.879
          },
          {
            "w": "medical",
            "t": 28.326
          },
          {
            "w": "pathologies,",
            "t": 28.774
          },
          {
            "w": "it",
            "t": 29.222
          },
          {
            "w": "can",
            "t": 29.67
          },
          {
            "w": "fail",
            "t": 30.118
          },
          {
            "w": "with",
            "t": 30.566
          },
          {
            "w": "extreme",
            "t": 31.014
          },
          {
            "w": "confidence.",
            "t": 31.462
          },
          {
            "w": "In",
            "t": 31.909
          },
          {
            "w": "high-stakes",
            "t": 32.357
          },
          {
            "w": "environments,",
            "t": 32.805
          },
          {
            "w": "the",
            "t": 33.253
          },
          {
            "w": "financial",
            "t": 33.701
          },
          {
            "w": "or",
            "t": 34.149
          },
          {
            "w": "clinical",
            "t": 34.597
          },
          {
            "w": "penalty",
            "t": 35.044
          },
          {
            "w": "of",
            "t": 35.492
          },
          {
            "w": "an",
            "t": 35.94
          },
          {
            "w": "uncorrected",
            "t": 36.388
          },
          {
            "w": "error",
            "t": 36.836
          },
          {
            "w": "dwarfs",
            "t": 37.284
          },
          {
            "w": "the",
            "t": 37.732
          },
          {
            "w": "cost",
            "t": 38.18
          },
          {
            "w": "of",
            "t": 38.627
          },
          {
            "w": "human",
            "t": 39.075
          },
          {
            "w": "verification.",
            "t": 39.523
          }
        ]
      },
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Kaito",
        "text": "So we cannot rely entirely on automated models. But auditing every single item manually would cost millions of dollars and takes weeks!",
        "start": 39.971,
        "end": 48.703,
        "words": [
          {
            "w": "So",
            "t": 39.971
          },
          {
            "w": "we",
            "t": 40.368
          },
          {
            "w": "cannot",
            "t": 40.765
          },
          {
            "w": "rely",
            "t": 41.162
          },
          {
            "w": "entirely",
            "t": 41.559
          },
          {
            "w": "on",
            "t": 41.956
          },
          {
            "w": "automated",
            "t": 42.352
          },
          {
            "w": "models.",
            "t": 42.749
          },
          {
            "w": "But",
            "t": 43.146
          },
          {
            "w": "auditing",
            "t": 43.543
          },
          {
            "w": "every",
            "t": 43.94
          },
          {
            "w": "single",
            "t": 44.337
          },
          {
            "w": "item",
            "t": 44.734
          },
          {
            "w": "manually",
            "t": 45.131
          },
          {
            "w": "would",
            "t": 45.528
          },
          {
            "w": "cost",
            "t": 45.925
          },
          {
            "w": "millions",
            "t": 46.322
          },
          {
            "w": "of",
            "t": 46.718
          },
          {
            "w": "dollars",
            "t": 47.115
          },
          {
            "w": "and",
            "t": 47.512
          },
          {
            "w": "takes",
            "t": 47.909
          },
          {
            "w": "weeks!",
            "t": 48.306
          }
        ]
      },
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Dr. Nova",
        "text": "Exactly. That is why modern production pipelines employ a Human-in-the-Loop triaging architecture. We use predictive uncertainty to route routine data automatically, while dispatching ambiguous edge cases to calibrated human experts.",
        "start": 48.703,
        "end": 63.773,
        "words": [
          {
            "w": "Exactly.",
            "t": 48.703
          },
          {
            "w": "That",
            "t": 49.205
          },
          {
            "w": "is",
            "t": 49.708
          },
          {
            "w": "why",
            "t": 50.21
          },
          {
            "w": "modern",
            "t": 50.712
          },
          {
            "w": "production",
            "t": 51.215
          },
          {
            "w": "pipelines",
            "t": 51.717
          },
          {
            "w": "employ",
            "t": 52.219
          },
          {
            "w": "a",
            "t": 52.722
          },
          {
            "w": "Human-in-the-Loop",
            "t": 53.224
          },
          {
            "w": "triaging",
            "t": 53.726
          },
          {
            "w": "architecture.",
            "t": 54.229
          },
          {
            "w": "We",
            "t": 54.731
          },
          {
            "w": "use",
            "t": 55.233
          },
          {
            "w": "predictive",
            "t": 55.736
          },
          {
            "w": "uncertainty",
            "t": 56.238
          },
          {
            "w": "to",
            "t": 56.74
          },
          {
            "w": "route",
            "t": 57.243
          },
          {
            "w": "routine",
            "t": 57.745
          },
          {
            "w": "data",
            "t": 58.247
          },
          {
            "w": "automatically,",
            "t": 58.75
          },
          {
            "w": "while",
            "t": 59.252
          },
          {
            "w": "dispatching",
            "t": 59.754
          },
          {
            "w": "ambiguous",
            "t": 60.257
          },
          {
            "w": "edge",
            "t": 60.759
          },
          {
            "w": "cases",
            "t": 61.261
          },
          {
            "w": "to",
            "t": 61.764
          },
          {
            "w": "calibrated",
            "t": 62.266
          },
          {
            "w": "human",
            "t": 62.768
          },
          {
            "w": "experts.",
            "t": 63.271
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Kaito",
        "text": "Looking at this flowchart, Dr. Nova: if thousands of sensor readings arrive every second, what stops the human review queue from backing up into an enormous, unmanageable bottleneck?",
        "start": 63.773,
        "end": 75.544,
        "words": [
          {
            "w": "Looking",
            "t": 63.773
          },
          {
            "w": "at",
            "t": 64.193
          },
          {
            "w": "this",
            "t": 64.614
          },
          {
            "w": "flowchart,",
            "t": 65.034
          },
          {
            "w": "Dr.",
            "t": 65.455
          },
          {
            "w": "Nova:",
            "t": 65.875
          },
          {
            "w": "if",
            "t": 66.295
          },
          {
            "w": "thousands",
            "t": 66.716
          },
          {
            "w": "of",
            "t": 67.136
          },
          {
            "w": "sensor",
            "t": 67.557
          },
          {
            "w": "readings",
            "t": 67.977
          },
          {
            "w": "arrive",
            "t": 68.397
          },
          {
            "w": "every",
            "t": 68.818
          },
          {
            "w": "second,",
            "t": 69.238
          },
          {
            "w": "what",
            "t": 69.659
          },
          {
            "w": "stops",
            "t": 70.079
          },
          {
            "w": "the",
            "t": 70.499
          },
          {
            "w": "human",
            "t": 70.92
          },
          {
            "w": "review",
            "t": 71.34
          },
          {
            "w": "queue",
            "t": 71.76
          },
          {
            "w": "from",
            "t": 72.181
          },
          {
            "w": "backing",
            "t": 72.601
          },
          {
            "w": "up",
            "t": 73.022
          },
          {
            "w": "into",
            "t": 73.442
          },
          {
            "w": "an",
            "t": 73.862
          },
          {
            "w": "enormous,",
            "t": 74.283
          },
          {
            "w": "unmanageable",
            "t": 74.703
          },
          {
            "w": "bottleneck?",
            "t": 75.124
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Dr. Nova",
        "text": "That is the beauty of calibrating the uncertainty gate, Kaito! Under our optimal threshold tau-star, ninety to ninety-five percent of routine data satisfies U of x less than or equal to tau-star and streams directly into storage without waiting.",
        "start": 75.544,
        "end": 91.39,
        "words": [
          {
            "w": "That",
            "t": 75.544
          },
          {
            "w": "is",
            "t": 75.95
          },
          {
            "w": "the",
            "t": 76.357
          },
          {
            "w": "beauty",
            "t": 76.763
          },
          {
            "w": "of",
            "t": 77.169
          },
          {
            "w": "calibrating",
            "t": 77.576
          },
          {
            "w": "the",
            "t": 77.982
          },
          {
            "w": "uncertainty",
            "t": 78.388
          },
          {
            "w": "gate,",
            "t": 78.794
          },
          {
            "w": "Kaito!",
            "t": 79.201
          },
          {
            "w": "Under",
            "t": 79.607
          },
          {
            "w": "our",
            "t": 80.013
          },
          {
            "w": "optimal",
            "t": 80.42
          },
          {
            "w": "threshold",
            "t": 80.826
          },
          {
            "w": "tau-star,",
            "t": 81.232
          },
          {
            "w": "ninety",
            "t": 81.639
          },
          {
            "w": "to",
            "t": 82.045
          },
          {
            "w": "ninety-five",
            "t": 82.451
          },
          {
            "w": "percent",
            "t": 82.858
          },
          {
            "w": "of",
            "t": 83.264
          },
          {
            "w": "routine",
            "t": 83.67
          },
          {
            "w": "data",
            "t": 84.076
          },
          {
            "w": "satisfies",
            "t": 84.483
          },
          {
            "w": "U",
            "t": 84.889
          },
          {
            "w": "of",
            "t": 85.295
          },
          {
            "w": "x",
            "t": 85.702
          },
          {
            "w": "less",
            "t": 86.108
          },
          {
            "w": "than",
            "t": 86.514
          },
          {
            "w": "or",
            "t": 86.921
          },
          {
            "w": "equal",
            "t": 87.327
          },
          {
            "w": "to",
            "t": 87.733
          },
          {
            "w": "tau-star",
            "t": 88.14
          },
          {
            "w": "and",
            "t": 88.546
          },
          {
            "w": "streams",
            "t": 88.952
          },
          {
            "w": "directly",
            "t": 89.358
          },
          {
            "w": "into",
            "t": 89.765
          },
          {
            "w": "storage",
            "t": 90.171
          },
          {
            "w": "without",
            "t": 90.577
          },
          {
            "w": "waiting.",
            "t": 90.984
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Kaito",
        "text": "And the expert review queue only receives the top five to ten percent of ambiguous edge cases where the automated model lacks confidence!",
        "start": 91.39,
        "end": 100.251,
        "words": [
          {
            "w": "And",
            "t": 91.39
          },
          {
            "w": "the",
            "t": 91.775
          },
          {
            "w": "expert",
            "t": 92.161
          },
          {
            "w": "review",
            "t": 92.546
          },
          {
            "w": "queue",
            "t": 92.931
          },
          {
            "w": "only",
            "t": 93.316
          },
          {
            "w": "receives",
            "t": 93.702
          },
          {
            "w": "the",
            "t": 94.087
          },
          {
            "w": "top",
            "t": 94.472
          },
          {
            "w": "five",
            "t": 94.857
          },
          {
            "w": "to",
            "t": 95.243
          },
          {
            "w": "ten",
            "t": 95.628
          },
          {
            "w": "percent",
            "t": 96.013
          },
          {
            "w": "of",
            "t": 96.398
          },
          {
            "w": "ambiguous",
            "t": 96.784
          },
          {
            "w": "edge",
            "t": 97.169
          },
          {
            "w": "cases",
            "t": 97.554
          },
          {
            "w": "where",
            "t": 97.939
          },
          {
            "w": "the",
            "t": 98.325
          },
          {
            "w": "automated",
            "t": 98.71
          },
          {
            "w": "model",
            "t": 99.095
          },
          {
            "w": "lacks",
            "t": 99.48
          },
          {
            "w": "confidence!",
            "t": 99.866
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Dr. Nova",
        "text": "Precisely. And notice the dashed arrow at the bottom: those difficult examples verified by human consensus are fed back into active learning, continuously expanding the automated model's competence boundary over time.",
        "start": 100.251,
        "end": 114.286,
        "words": [
          {
            "w": "Precisely.",
            "t": 100.251
          },
          {
            "w": "And",
            "t": 100.704
          },
          {
            "w": "notice",
            "t": 101.156
          },
          {
            "w": "the",
            "t": 101.609
          },
          {
            "w": "dashed",
            "t": 102.062
          },
          {
            "w": "arrow",
            "t": 102.515
          },
          {
            "w": "at",
            "t": 102.967
          },
          {
            "w": "the",
            "t": 103.42
          },
          {
            "w": "bottom:",
            "t": 103.873
          },
          {
            "w": "those",
            "t": 104.326
          },
          {
            "w": "difficult",
            "t": 104.778
          },
          {
            "w": "examples",
            "t": 105.231
          },
          {
            "w": "verified",
            "t": 105.684
          },
          {
            "w": "by",
            "t": 106.137
          },
          {
            "w": "human",
            "t": 106.589
          },
          {
            "w": "consensus",
            "t": 107.042
          },
          {
            "w": "are",
            "t": 107.495
          },
          {
            "w": "fed",
            "t": 107.948
          },
          {
            "w": "back",
            "t": 108.4
          },
          {
            "w": "into",
            "t": 108.853
          },
          {
            "w": "active",
            "t": 109.306
          },
          {
            "w": "learning,",
            "t": 109.759
          },
          {
            "w": "continuously",
            "t": 110.211
          },
          {
            "w": "expanding",
            "t": 110.664
          },
          {
            "w": "the",
            "t": 111.117
          },
          {
            "w": "automated",
            "t": 111.57
          },
          {
            "w": "model's",
            "t": 112.022
          },
          {
            "w": "competence",
            "t": 112.475
          },
          {
            "w": "boundary",
            "t": 112.928
          },
          {
            "w": "over",
            "t": 113.381
          },
          {
            "w": "time.",
            "t": 113.833
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Kaito",
        "text": "Dr. Nova, looking at this Weibull equation: why is the shape parameter k greater than one so critical? Doesn't human accuracy just stay relatively constant throughout the working day?",
        "start": 114.286,
        "end": 126.122,
        "words": [
          {
            "w": "Dr.",
            "t": 114.286
          },
          {
            "w": "Nova,",
            "t": 114.694
          },
          {
            "w": "looking",
            "t": 115.102
          },
          {
            "w": "at",
            "t": 115.51
          },
          {
            "w": "this",
            "t": 115.919
          },
          {
            "w": "Weibull",
            "t": 116.327
          },
          {
            "w": "equation:",
            "t": 116.735
          },
          {
            "w": "why",
            "t": 117.143
          },
          {
            "w": "is",
            "t": 117.551
          },
          {
            "w": "the",
            "t": 117.959
          },
          {
            "w": "shape",
            "t": 118.367
          },
          {
            "w": "parameter",
            "t": 118.776
          },
          {
            "w": "k",
            "t": 119.184
          },
          {
            "w": "greater",
            "t": 119.592
          },
          {
            "w": "than",
            "t": 120.0
          },
          {
            "w": "one",
            "t": 120.408
          },
          {
            "w": "so",
            "t": 120.816
          },
          {
            "w": "critical?",
            "t": 121.224
          },
          {
            "w": "Doesn't",
            "t": 121.632
          },
          {
            "w": "human",
            "t": 122.041
          },
          {
            "w": "accuracy",
            "t": 122.449
          },
          {
            "w": "just",
            "t": 122.857
          },
          {
            "w": "stay",
            "t": 123.265
          },
          {
            "w": "relatively",
            "t": 123.673
          },
          {
            "w": "constant",
            "t": 124.081
          },
          {
            "w": "throughout",
            "t": 124.489
          },
          {
            "w": "the",
            "t": 124.898
          },
          {
            "w": "working",
            "t": 125.306
          },
          {
            "w": "day?",
            "t": 125.714
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Dr. Nova",
        "text": "Not at all, Kaito! If k were equal to one, errors would occur at a purely memoryless, constant rate. But human neurobiology suffers from cognitive depletion. With k around one point eight, after four continuous hours of auditing text or inspecting bounding boxes, mental focus rapidly collapses.",
        "start": 126.122,
        "end": 145.202,
        "words": [
          {
            "w": "Not",
            "t": 126.122
          },
          {
            "w": "at",
            "t": 126.528
          },
          {
            "w": "all,",
            "t": 126.934
          },
          {
            "w": "Kaito!",
            "t": 127.34
          },
          {
            "w": "If",
            "t": 127.746
          },
          {
            "w": "k",
            "t": 128.152
          },
          {
            "w": "were",
            "t": 128.558
          },
          {
            "w": "equal",
            "t": 128.964
          },
          {
            "w": "to",
            "t": 129.37
          },
          {
            "w": "one,",
            "t": 129.776
          },
          {
            "w": "errors",
            "t": 130.182
          },
          {
            "w": "would",
            "t": 130.588
          },
          {
            "w": "occur",
            "t": 130.993
          },
          {
            "w": "at",
            "t": 131.399
          },
          {
            "w": "a",
            "t": 131.805
          },
          {
            "w": "purely",
            "t": 132.211
          },
          {
            "w": "memoryless,",
            "t": 132.617
          },
          {
            "w": "constant",
            "t": 133.023
          },
          {
            "w": "rate.",
            "t": 133.429
          },
          {
            "w": "But",
            "t": 133.835
          },
          {
            "w": "human",
            "t": 134.241
          },
          {
            "w": "neurobiology",
            "t": 134.647
          },
          {
            "w": "suffers",
            "t": 135.053
          },
          {
            "w": "from",
            "t": 135.459
          },
          {
            "w": "cognitive",
            "t": 135.865
          },
          {
            "w": "depletion.",
            "t": 136.271
          },
          {
            "w": "With",
            "t": 136.677
          },
          {
            "w": "k",
            "t": 137.083
          },
          {
            "w": "around",
            "t": 137.489
          },
          {
            "w": "one",
            "t": 137.895
          },
          {
            "w": "point",
            "t": 138.301
          },
          {
            "w": "eight,",
            "t": 138.707
          },
          {
            "w": "after",
            "t": 139.113
          },
          {
            "w": "four",
            "t": 139.519
          },
          {
            "w": "continuous",
            "t": 139.925
          },
          {
            "w": "hours",
            "t": 140.331
          },
          {
            "w": "of",
            "t": 140.736
          },
          {
            "w": "auditing",
            "t": 141.142
          },
          {
            "w": "text",
            "t": 141.548
          },
          {
            "w": "or",
            "t": 141.954
          },
          {
            "w": "inspecting",
            "t": 142.36
          },
          {
            "w": "bounding",
            "t": 142.766
          },
          {
            "w": "boxes,",
            "t": 143.172
          },
          {
            "w": "mental",
            "t": 143.578
          },
          {
            "w": "focus",
            "t": 143.984
          },
          {
            "w": "rapidly",
            "t": 144.39
          },
          {
            "w": "collapses.",
            "t": 144.796
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Kaito",
        "text": "Looking at the numbers on the right: at hour two, error rates are under two percent. But by hour eight, cumulative error probability surges past twenty-eight percent! That means nearly a third of all annotations created during overtime shifts are corrupt!",
        "start": 145.202,
        "end": 161.695,
        "words": [
          {
            "w": "Looking",
            "t": 145.202
          },
          {
            "w": "at",
            "t": 145.604
          },
          {
            "w": "the",
            "t": 146.007
          },
          {
            "w": "numbers",
            "t": 146.409
          },
          {
            "w": "on",
            "t": 146.811
          },
          {
            "w": "the",
            "t": 147.213
          },
          {
            "w": "right:",
            "t": 147.616
          },
          {
            "w": "at",
            "t": 148.018
          },
          {
            "w": "hour",
            "t": 148.42
          },
          {
            "w": "two,",
            "t": 148.822
          },
          {
            "w": "error",
            "t": 149.225
          },
          {
            "w": "rates",
            "t": 149.627
          },
          {
            "w": "are",
            "t": 150.029
          },
          {
            "w": "under",
            "t": 150.431
          },
          {
            "w": "two",
            "t": 150.834
          },
          {
            "w": "percent.",
            "t": 151.236
          },
          {
            "w": "But",
            "t": 151.638
          },
          {
            "w": "by",
            "t": 152.041
          },
          {
            "w": "hour",
            "t": 152.443
          },
          {
            "w": "eight,",
            "t": 152.845
          },
          {
            "w": "cumulative",
            "t": 153.247
          },
          {
            "w": "error",
            "t": 153.65
          },
          {
            "w": "probability",
            "t": 154.052
          },
          {
            "w": "surges",
            "t": 154.454
          },
          {
            "w": "past",
            "t": 154.856
          },
          {
            "w": "twenty-eight",
            "t": 155.259
          },
          {
            "w": "percent!",
            "t": 155.661
          },
          {
            "w": "That",
            "t": 156.063
          },
          {
            "w": "means",
            "t": 156.466
          },
          {
            "w": "nearly",
            "t": 156.868
          },
          {
            "w": "a",
            "t": 157.27
          },
          {
            "w": "third",
            "t": 157.672
          },
          {
            "w": "of",
            "t": 158.075
          },
          {
            "w": "all",
            "t": 158.477
          },
          {
            "w": "annotations",
            "t": 158.879
          },
          {
            "w": "created",
            "t": 159.281
          },
          {
            "w": "during",
            "t": 159.684
          },
          {
            "w": "overtime",
            "t": 160.086
          },
          {
            "w": "shifts",
            "t": 160.488
          },
          {
            "w": "are",
            "t": 160.89
          },
          {
            "w": "corrupt!",
            "t": 161.293
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Dr. Nova",
        "text": "Exactly. That is why production data annotation facilities enforce mandatory four-hour shift caps and rotate workers across different modalities.",
        "start": 161.695,
        "end": 171.073,
        "words": [
          {
            "w": "Exactly.",
            "t": 161.695
          },
          {
            "w": "That",
            "t": 162.189
          },
          {
            "w": "is",
            "t": 162.682
          },
          {
            "w": "why",
            "t": 163.176
          },
          {
            "w": "production",
            "t": 163.669
          },
          {
            "w": "data",
            "t": 164.163
          },
          {
            "w": "annotation",
            "t": 164.656
          },
          {
            "w": "facilities",
            "t": 165.15
          },
          {
            "w": "enforce",
            "t": 165.644
          },
          {
            "w": "mandatory",
            "t": 166.137
          },
          {
            "w": "four-hour",
            "t": 166.631
          },
          {
            "w": "shift",
            "t": 167.124
          },
          {
            "w": "caps",
            "t": 167.618
          },
          {
            "w": "and",
            "t": 168.112
          },
          {
            "w": "rotate",
            "t": 168.605
          },
          {
            "w": "workers",
            "t": 169.099
          },
          {
            "w": "across",
            "t": 169.592
          },
          {
            "w": "different",
            "t": 170.086
          },
          {
            "w": "modalities.",
            "t": 170.579
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Kaito",
        "text": "Dr. Nova, physical sensor drift makes intuitive sense: a temperature or air quality sensor slowly gets clogged or worn down over months. But what about modern deep learning vision systems? Why do they fail on simple edge cases?",
        "start": 171.073,
        "end": 185.755,
        "words": [
          {
            "w": "Dr.",
            "t": 171.073
          },
          {
            "w": "Nova,",
            "t": 171.459
          },
          {
            "w": "physical",
            "t": 171.846
          },
          {
            "w": "sensor",
            "t": 172.232
          },
          {
            "w": "drift",
            "t": 172.618
          },
          {
            "w": "makes",
            "t": 173.005
          },
          {
            "w": "intuitive",
            "t": 173.391
          },
          {
            "w": "sense:",
            "t": 173.778
          },
          {
            "w": "a",
            "t": 174.164
          },
          {
            "w": "temperature",
            "t": 174.55
          },
          {
            "w": "or",
            "t": 174.937
          },
          {
            "w": "air",
            "t": 175.323
          },
          {
            "w": "quality",
            "t": 175.709
          },
          {
            "w": "sensor",
            "t": 176.096
          },
          {
            "w": "slowly",
            "t": 176.482
          },
          {
            "w": "gets",
            "t": 176.869
          },
          {
            "w": "clogged",
            "t": 177.255
          },
          {
            "w": "or",
            "t": 177.641
          },
          {
            "w": "worn",
            "t": 178.028
          },
          {
            "w": "down",
            "t": 178.414
          },
          {
            "w": "over",
            "t": 178.8
          },
          {
            "w": "months.",
            "t": 179.187
          },
          {
            "w": "But",
            "t": 179.573
          },
          {
            "w": "what",
            "t": 179.959
          },
          {
            "w": "about",
            "t": 180.346
          },
          {
            "w": "modern",
            "t": 180.732
          },
          {
            "w": "deep",
            "t": 181.119
          },
          {
            "w": "learning",
            "t": 181.505
          },
          {
            "w": "vision",
            "t": 181.891
          },
          {
            "w": "systems?",
            "t": 182.278
          },
          {
            "w": "Why",
            "t": 182.664
          },
          {
            "w": "do",
            "t": 183.05
          },
          {
            "w": "they",
            "t": 183.437
          },
          {
            "w": "fail",
            "t": 183.823
          },
          {
            "w": "on",
            "t": 184.21
          },
          {
            "w": "simple",
            "t": 184.596
          },
          {
            "w": "edge",
            "t": 184.982
          },
          {
            "w": "cases?",
            "t": 185.369
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Dr. Nova",
        "text": "Because neural networks learn statistical correlations within their training distribution, Kaito. If an autonomous supermarket cart encounters a product packaged in reflective foil under direct fluorescent lighting, the model might see glares that mimic an entirely different barcode, outputting a ninety-nine percent confident misclassification!",
        "start": 185.755,
        "end": 208.134,
        "words": [
          {
            "w": "Because",
            "t": 185.755
          },
          {
            "w": "neural",
            "t": 186.264
          },
          {
            "w": "networks",
            "t": 186.772
          },
          {
            "w": "learn",
            "t": 187.281
          },
          {
            "w": "statistical",
            "t": 187.789
          },
          {
            "w": "correlations",
            "t": 188.298
          },
          {
            "w": "within",
            "t": 188.807
          },
          {
            "w": "their",
            "t": 189.315
          },
          {
            "w": "training",
            "t": 189.824
          },
          {
            "w": "distribution,",
            "t": 190.333
          },
          {
            "w": "Kaito.",
            "t": 190.841
          },
          {
            "w": "If",
            "t": 191.35
          },
          {
            "w": "an",
            "t": 191.858
          },
          {
            "w": "autonomous",
            "t": 192.367
          },
          {
            "w": "supermarket",
            "t": 192.876
          },
          {
            "w": "cart",
            "t": 193.384
          },
          {
            "w": "encounters",
            "t": 193.893
          },
          {
            "w": "a",
            "t": 194.401
          },
          {
            "w": "product",
            "t": 194.91
          },
          {
            "w": "packaged",
            "t": 195.419
          },
          {
            "w": "in",
            "t": 195.927
          },
          {
            "w": "reflective",
            "t": 196.436
          },
          {
            "w": "foil",
            "t": 196.944
          },
          {
            "w": "under",
            "t": 197.453
          },
          {
            "w": "direct",
            "t": 197.962
          },
          {
            "w": "fluorescent",
            "t": 198.47
          },
          {
            "w": "lighting,",
            "t": 198.979
          },
          {
            "w": "the",
            "t": 199.488
          },
          {
            "w": "model",
            "t": 199.996
          },
          {
            "w": "might",
            "t": 200.505
          },
          {
            "w": "see",
            "t": 201.013
          },
          {
            "w": "glares",
            "t": 201.522
          },
          {
            "w": "that",
            "t": 202.031
          },
          {
            "w": "mimic",
            "t": 202.539
          },
          {
            "w": "an",
            "t": 203.048
          },
          {
            "w": "entirely",
            "t": 203.556
          },
          {
            "w": "different",
            "t": 204.065
          },
          {
            "w": "barcode,",
            "t": 204.574
          },
          {
            "w": "outputting",
            "t": 205.082
          },
          {
            "w": "a",
            "t": 205.591
          },
          {
            "w": "ninety-nine",
            "t": 206.1
          },
          {
            "w": "percent",
            "t": 206.608
          },
          {
            "w": "confident",
            "t": 207.117
          },
          {
            "w": "misclassification!",
            "t": 207.625
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Kaito",
        "text": "And because there is no human sanity-checking the output, that misclassification flows directly into ordering databases, causing eighteen thousand dollars in lost revenue!",
        "start": 208.134,
        "end": 219.194,
        "words": [
          {
            "w": "And",
            "t": 208.134
          },
          {
            "w": "because",
            "t": 208.615
          },
          {
            "w": "there",
            "t": 209.096
          },
          {
            "w": "is",
            "t": 209.577
          },
          {
            "w": "no",
            "t": 210.057
          },
          {
            "w": "human",
            "t": 210.538
          },
          {
            "w": "sanity-checking",
            "t": 211.019
          },
          {
            "w": "the",
            "t": 211.5
          },
          {
            "w": "output,",
            "t": 211.981
          },
          {
            "w": "that",
            "t": 212.462
          },
          {
            "w": "misclassification",
            "t": 212.943
          },
          {
            "w": "flows",
            "t": 213.424
          },
          {
            "w": "directly",
            "t": 213.904
          },
          {
            "w": "into",
            "t": 214.385
          },
          {
            "w": "ordering",
            "t": 214.866
          },
          {
            "w": "databases,",
            "t": 215.347
          },
          {
            "w": "causing",
            "t": 215.828
          },
          {
            "w": "eighteen",
            "t": 216.309
          },
          {
            "w": "thousand",
            "t": 216.79
          },
          {
            "w": "dollars",
            "t": 217.271
          },
          {
            "w": "in",
            "t": 217.751
          },
          {
            "w": "lost",
            "t": 218.232
          },
          {
            "w": "revenue!",
            "t": 218.713
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Dr. Nova",
        "text": "Precisely. The machine is fast and cheap, but lacks semantic awareness. Now, let us formulate how to combine human cognition with machine scale mathematically.",
        "start": 219.194,
        "end": 229.478,
        "words": [
          {
            "w": "Precisely.",
            "t": 219.194
          },
          {
            "w": "The",
            "t": 219.623
          },
          {
            "w": "machine",
            "t": 220.051
          },
          {
            "w": "is",
            "t": 220.48
          },
          {
            "w": "fast",
            "t": 220.908
          },
          {
            "w": "and",
            "t": 221.337
          },
          {
            "w": "cheap,",
            "t": 221.765
          },
          {
            "w": "but",
            "t": 222.194
          },
          {
            "w": "lacks",
            "t": 222.622
          },
          {
            "w": "semantic",
            "t": 223.05
          },
          {
            "w": "awareness.",
            "t": 223.479
          },
          {
            "w": "Now,",
            "t": 223.907
          },
          {
            "w": "let",
            "t": 224.336
          },
          {
            "w": "us",
            "t": 224.764
          },
          {
            "w": "formulate",
            "t": 225.193
          },
          {
            "w": "how",
            "t": 225.621
          },
          {
            "w": "to",
            "t": 226.05
          },
          {
            "w": "combine",
            "t": 226.478
          },
          {
            "w": "human",
            "t": 226.907
          },
          {
            "w": "cognition",
            "t": 227.335
          },
          {
            "w": "with",
            "t": 227.764
          },
          {
            "w": "machine",
            "t": 228.192
          },
          {
            "w": "scale",
            "t": 228.621
          },
          {
            "w": "mathematically.",
            "t": 229.049
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Kaito",
        "text": "Dr. Nova, this threshold formula tau-star equals C-m divided by L-error is remarkably intuitive! If reviewing a medical claim costs one dollar and twenty cents, and an uncorrected mistake fines the hospital one hundred and twenty dollars, the ratio is exactly one percent.",
        "start": 229.478,
        "end": 247.07,
        "words": [
          {
            "w": "Dr.",
            "t": 229.478
          },
          {
            "w": "Nova,",
            "t": 229.887
          },
          {
            "w": "this",
            "t": 230.296
          },
          {
            "w": "threshold",
            "t": 230.705
          },
          {
            "w": "formula",
            "t": 231.114
          },
          {
            "w": "tau-star",
            "t": 231.524
          },
          {
            "w": "equals",
            "t": 231.933
          },
          {
            "w": "C-m",
            "t": 232.342
          },
          {
            "w": "divided",
            "t": 232.751
          },
          {
            "w": "by",
            "t": 233.16
          },
          {
            "w": "L-error",
            "t": 233.569
          },
          {
            "w": "is",
            "t": 233.978
          },
          {
            "w": "remarkably",
            "t": 234.387
          },
          {
            "w": "intuitive!",
            "t": 234.797
          },
          {
            "w": "If",
            "t": 235.206
          },
          {
            "w": "reviewing",
            "t": 235.615
          },
          {
            "w": "a",
            "t": 236.024
          },
          {
            "w": "medical",
            "t": 236.433
          },
          {
            "w": "claim",
            "t": 236.842
          },
          {
            "w": "costs",
            "t": 237.251
          },
          {
            "w": "one",
            "t": 237.66
          },
          {
            "w": "dollar",
            "t": 238.069
          },
          {
            "w": "and",
            "t": 238.479
          },
          {
            "w": "twenty",
            "t": 238.888
          },
          {
            "w": "cents,",
            "t": 239.297
          },
          {
            "w": "and",
            "t": 239.706
          },
          {
            "w": "an",
            "t": 240.115
          },
          {
            "w": "uncorrected",
            "t": 240.524
          },
          {
            "w": "mistake",
            "t": 240.933
          },
          {
            "w": "fines",
            "t": 241.342
          },
          {
            "w": "the",
            "t": 241.751
          },
          {
            "w": "hospital",
            "t": 242.161
          },
          {
            "w": "one",
            "t": 242.57
          },
          {
            "w": "hundred",
            "t": 242.979
          },
          {
            "w": "and",
            "t": 243.388
          },
          {
            "w": "twenty",
            "t": 243.797
          },
          {
            "w": "dollars,",
            "t": 244.206
          },
          {
            "w": "the",
            "t": 244.615
          },
          {
            "w": "ratio",
            "t": 245.024
          },
          {
            "w": "is",
            "t": 245.434
          },
          {
            "w": "exactly",
            "t": 245.843
          },
          {
            "w": "one",
            "t": 246.252
          },
          {
            "w": "percent.",
            "t": 246.661
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Dr. Nova",
        "text": "Exactly, Kaito! If the model is ninety-nine percent sure, you auto-accept. But if there is even a one percent chance of error, spending one dollar and twenty cents to prevent an expected loss of more than one dollar and twenty cents is the economically rational decision.",
        "start": 247.07,
        "end": 264.598,
        "words": [
          {
            "w": "Exactly,",
            "t": 247.07
          },
          {
            "w": "Kaito!",
            "t": 247.451
          },
          {
            "w": "If",
            "t": 247.832
          },
          {
            "w": "the",
            "t": 248.213
          },
          {
            "w": "model",
            "t": 248.594
          },
          {
            "w": "is",
            "t": 248.975
          },
          {
            "w": "ninety-nine",
            "t": 249.356
          },
          {
            "w": "percent",
            "t": 249.737
          },
          {
            "w": "sure,",
            "t": 250.118
          },
          {
            "w": "you",
            "t": 250.499
          },
          {
            "w": "auto-accept.",
            "t": 250.88
          },
          {
            "w": "But",
            "t": 251.261
          },
          {
            "w": "if",
            "t": 251.643
          },
          {
            "w": "there",
            "t": 252.024
          },
          {
            "w": "is",
            "t": 252.405
          },
          {
            "w": "even",
            "t": 252.786
          },
          {
            "w": "a",
            "t": 253.167
          },
          {
            "w": "one",
            "t": 253.548
          },
          {
            "w": "percent",
            "t": 253.929
          },
          {
            "w": "chance",
            "t": 254.31
          },
          {
            "w": "of",
            "t": 254.691
          },
          {
            "w": "error,",
            "t": 255.072
          },
          {
            "w": "spending",
            "t": 255.453
          },
          {
            "w": "one",
            "t": 255.834
          },
          {
            "w": "dollar",
            "t": 256.215
          },
          {
            "w": "and",
            "t": 256.596
          },
          {
            "w": "twenty",
            "t": 256.977
          },
          {
            "w": "cents",
            "t": 257.358
          },
          {
            "w": "to",
            "t": 257.739
          },
          {
            "w": "prevent",
            "t": 258.12
          },
          {
            "w": "an",
            "t": 258.501
          },
          {
            "w": "expected",
            "t": 258.882
          },
          {
            "w": "loss",
            "t": 259.263
          },
          {
            "w": "of",
            "t": 259.644
          },
          {
            "w": "more",
            "t": 260.025
          },
          {
            "w": "than",
            "t": 260.407
          },
          {
            "w": "one",
            "t": 260.788
          },
          {
            "w": "dollar",
            "t": 261.169
          },
          {
            "w": "and",
            "t": 261.55
          },
          {
            "w": "twenty",
            "t": 261.931
          },
          {
            "w": "cents",
            "t": 262.312
          },
          {
            "w": "is",
            "t": 262.693
          },
          {
            "w": "the",
            "t": 263.074
          },
          {
            "w": "economically",
            "t": 263.455
          },
          {
            "w": "rational",
            "t": 263.836
          },
          {
            "w": "decision.",
            "t": 264.217
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Kaito",
        "text": "And what if downstream error costs are practically zero, like tagging casual photos or building song playlists?",
        "start": 264.598,
        "end": 271.777,
        "words": [
          {
            "w": "And",
            "t": 264.598
          },
          {
            "w": "what",
            "t": 265.02
          },
          {
            "w": "if",
            "t": 265.443
          },
          {
            "w": "downstream",
            "t": 265.865
          },
          {
            "w": "error",
            "t": 266.287
          },
          {
            "w": "costs",
            "t": 266.709
          },
          {
            "w": "are",
            "t": 267.132
          },
          {
            "w": "practically",
            "t": 267.554
          },
          {
            "w": "zero,",
            "t": 267.976
          },
          {
            "w": "like",
            "t": 268.399
          },
          {
            "w": "tagging",
            "t": 268.821
          },
          {
            "w": "casual",
            "t": 269.243
          },
          {
            "w": "photos",
            "t": 269.666
          },
          {
            "w": "or",
            "t": 270.088
          },
          {
            "w": "building",
            "t": 270.51
          },
          {
            "w": "song",
            "t": 270.932
          },
          {
            "w": "playlists?",
            "t": 271.355
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Dr. Nova",
        "text": "Then L-error is tiny, making tau-star greater than one. Since model uncertainty U of x is always bounded between zero and one, the gate automatically accepts one hundred percent of the records without wasting a single dollar on manual review.",
        "start": 271.777,
        "end": 287.429,
        "words": [
          {
            "w": "Then",
            "t": 271.777
          },
          {
            "w": "L-error",
            "t": 272.168
          },
          {
            "w": "is",
            "t": 272.56
          },
          {
            "w": "tiny,",
            "t": 272.951
          },
          {
            "w": "making",
            "t": 273.342
          },
          {
            "w": "tau-star",
            "t": 273.733
          },
          {
            "w": "greater",
            "t": 274.125
          },
          {
            "w": "than",
            "t": 274.516
          },
          {
            "w": "one.",
            "t": 274.907
          },
          {
            "w": "Since",
            "t": 275.299
          },
          {
            "w": "model",
            "t": 275.69
          },
          {
            "w": "uncertainty",
            "t": 276.081
          },
          {
            "w": "U",
            "t": 276.473
          },
          {
            "w": "of",
            "t": 276.864
          },
          {
            "w": "x",
            "t": 277.255
          },
          {
            "w": "is",
            "t": 277.647
          },
          {
            "w": "always",
            "t": 278.038
          },
          {
            "w": "bounded",
            "t": 278.429
          },
          {
            "w": "between",
            "t": 278.82
          },
          {
            "w": "zero",
            "t": 279.212
          },
          {
            "w": "and",
            "t": 279.603
          },
          {
            "w": "one,",
            "t": 279.994
          },
          {
            "w": "the",
            "t": 280.386
          },
          {
            "w": "gate",
            "t": 280.777
          },
          {
            "w": "automatically",
            "t": 281.168
          },
          {
            "w": "accepts",
            "t": 281.559
          },
          {
            "w": "one",
            "t": 281.951
          },
          {
            "w": "hundred",
            "t": 282.342
          },
          {
            "w": "percent",
            "t": 282.733
          },
          {
            "w": "of",
            "t": 283.125
          },
          {
            "w": "the",
            "t": 283.516
          },
          {
            "w": "records",
            "t": 283.907
          },
          {
            "w": "without",
            "t": 284.299
          },
          {
            "w": "wasting",
            "t": 284.69
          },
          {
            "w": "a",
            "t": 285.081
          },
          {
            "w": "single",
            "t": 285.472
          },
          {
            "w": "dollar",
            "t": 285.864
          },
          {
            "w": "on",
            "t": 286.255
          },
          {
            "w": "manual",
            "t": 286.646
          },
          {
            "w": "review.",
            "t": 287.038
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Kaito",
        "text": "Dr. Nova, look at the simulator below! When I increase the error penalty from twenty-five dollars to seventy-five dollars, the optimal threshold tau-star immediately drops from zero point zero four eight down to zero point zero one six!",
        "start": 287.429,
        "end": 302.693,
        "words": [
          {
            "w": "Dr.",
            "t": 287.429
          },
          {
            "w": "Nova,",
            "t": 287.831
          },
          {
            "w": "look",
            "t": 288.232
          },
          {
            "w": "at",
            "t": 288.634
          },
          {
            "w": "the",
            "t": 289.036
          },
          {
            "w": "simulator",
            "t": 289.437
          },
          {
            "w": "below!",
            "t": 289.839
          },
          {
            "w": "When",
            "t": 290.241
          },
          {
            "w": "I",
            "t": 290.642
          },
          {
            "w": "increase",
            "t": 291.044
          },
          {
            "w": "the",
            "t": 291.446
          },
          {
            "w": "error",
            "t": 291.848
          },
          {
            "w": "penalty",
            "t": 292.249
          },
          {
            "w": "from",
            "t": 292.651
          },
          {
            "w": "twenty-five",
            "t": 293.053
          },
          {
            "w": "dollars",
            "t": 293.454
          },
          {
            "w": "to",
            "t": 293.856
          },
          {
            "w": "seventy-five",
            "t": 294.258
          },
          {
            "w": "dollars,",
            "t": 294.659
          },
          {
            "w": "the",
            "t": 295.061
          },
          {
            "w": "optimal",
            "t": 295.463
          },
          {
            "w": "threshold",
            "t": 295.864
          },
          {
            "w": "tau-star",
            "t": 296.266
          },
          {
            "w": "immediately",
            "t": 296.668
          },
          {
            "w": "drops",
            "t": 297.069
          },
          {
            "w": "from",
            "t": 297.471
          },
          {
            "w": "zero",
            "t": 297.873
          },
          {
            "w": "point",
            "t": 298.274
          },
          {
            "w": "zero",
            "t": 298.676
          },
          {
            "w": "four",
            "t": 299.078
          },
          {
            "w": "eight",
            "t": 299.48
          },
          {
            "w": "down",
            "t": 299.881
          },
          {
            "w": "to",
            "t": 300.283
          },
          {
            "w": "zero",
            "t": 300.685
          },
          {
            "w": "point",
            "t": 301.086
          },
          {
            "w": "zero",
            "t": 301.488
          },
          {
            "w": "one",
            "t": 301.89
          },
          {
            "w": "six!",
            "t": 302.291
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Dr. Nova",
        "text": "Exactly as predicted by the calculus, Kaito! As the consequence of an error grows more severe, the system becomes more cautious, routing fifteen percent of the borderline records to human review instead of just five percent.",
        "start": 302.693,
        "end": 317.181,
        "words": [
          {
            "w": "Exactly",
            "t": 302.693
          },
          {
            "w": "as",
            "t": 303.095
          },
          {
            "w": "predicted",
            "t": 303.498
          },
          {
            "w": "by",
            "t": 303.9
          },
          {
            "w": "the",
            "t": 304.303
          },
          {
            "w": "calculus,",
            "t": 304.705
          },
          {
            "w": "Kaito!",
            "t": 305.108
          },
          {
            "w": "As",
            "t": 305.51
          },
          {
            "w": "the",
            "t": 305.913
          },
          {
            "w": "consequence",
            "t": 306.315
          },
          {
            "w": "of",
            "t": 306.717
          },
          {
            "w": "an",
            "t": 307.12
          },
          {
            "w": "error",
            "t": 307.522
          },
          {
            "w": "grows",
            "t": 307.925
          },
          {
            "w": "more",
            "t": 308.327
          },
          {
            "w": "severe,",
            "t": 308.73
          },
          {
            "w": "the",
            "t": 309.132
          },
          {
            "w": "system",
            "t": 309.535
          },
          {
            "w": "becomes",
            "t": 309.937
          },
          {
            "w": "more",
            "t": 310.339
          },
          {
            "w": "cautious,",
            "t": 310.742
          },
          {
            "w": "routing",
            "t": 311.144
          },
          {
            "w": "fifteen",
            "t": 311.547
          },
          {
            "w": "percent",
            "t": 311.949
          },
          {
            "w": "of",
            "t": 312.352
          },
          {
            "w": "the",
            "t": 312.754
          },
          {
            "w": "borderline",
            "t": 313.157
          },
          {
            "w": "records",
            "t": 313.559
          },
          {
            "w": "to",
            "t": 313.961
          },
          {
            "w": "human",
            "t": 314.364
          },
          {
            "w": "review",
            "t": 314.766
          },
          {
            "w": "instead",
            "t": 315.169
          },
          {
            "w": "of",
            "t": 315.571
          },
          {
            "w": "just",
            "t": 315.974
          },
          {
            "w": "five",
            "t": 316.376
          },
          {
            "w": "percent.",
            "t": 316.779
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Kaito",
        "text": "And even with fifteen percent routed to humans at one dollar and twenty cents per item, our total HITL cost is still over seventy-five percent cheaper than auditing all ten thousand items manually!",
        "start": 317.181,
        "end": 329.923,
        "words": [
          {
            "w": "And",
            "t": 317.181
          },
          {
            "w": "even",
            "t": 317.567
          },
          {
            "w": "with",
            "t": 317.953
          },
          {
            "w": "fifteen",
            "t": 318.339
          },
          {
            "w": "percent",
            "t": 318.725
          },
          {
            "w": "routed",
            "t": 319.112
          },
          {
            "w": "to",
            "t": 319.498
          },
          {
            "w": "humans",
            "t": 319.884
          },
          {
            "w": "at",
            "t": 320.27
          },
          {
            "w": "one",
            "t": 320.656
          },
          {
            "w": "dollar",
            "t": 321.042
          },
          {
            "w": "and",
            "t": 321.428
          },
          {
            "w": "twenty",
            "t": 321.814
          },
          {
            "w": "cents",
            "t": 322.201
          },
          {
            "w": "per",
            "t": 322.587
          },
          {
            "w": "item,",
            "t": 322.973
          },
          {
            "w": "our",
            "t": 323.359
          },
          {
            "w": "total",
            "t": 323.745
          },
          {
            "w": "HITL",
            "t": 324.131
          },
          {
            "w": "cost",
            "t": 324.517
          },
          {
            "w": "is",
            "t": 324.903
          },
          {
            "w": "still",
            "t": 325.29
          },
          {
            "w": "over",
            "t": 325.676
          },
          {
            "w": "seventy-five",
            "t": 326.062
          },
          {
            "w": "percent",
            "t": 326.448
          },
          {
            "w": "cheaper",
            "t": 326.834
          },
          {
            "w": "than",
            "t": 327.22
          },
          {
            "w": "auditing",
            "t": 327.606
          },
          {
            "w": "all",
            "t": 327.992
          },
          {
            "w": "ten",
            "t": 328.379
          },
          {
            "w": "thousand",
            "t": 328.765
          },
          {
            "w": "items",
            "t": 329.151
          },
          {
            "w": "manually!",
            "t": 329.537
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Dr. Nova",
        "text": "That is the power of cost-optimal triaging: deterministic safety without prohibitive labor costs.",
        "start": 329.923,
        "end": 336.197,
        "words": [
          {
            "w": "That",
            "t": 329.923
          },
          {
            "w": "is",
            "t": 330.406
          },
          {
            "w": "the",
            "t": 330.888
          },
          {
            "w": "power",
            "t": 331.371
          },
          {
            "w": "of",
            "t": 331.853
          },
          {
            "w": "cost-optimal",
            "t": 332.336
          },
          {
            "w": "triaging:",
            "t": 332.819
          },
          {
            "w": "deterministic",
            "t": 333.301
          },
          {
            "w": "safety",
            "t": 333.784
          },
          {
            "w": "without",
            "t": 334.267
          },
          {
            "w": "prohibitive",
            "t": 334.749
          },
          {
            "w": "labor",
            "t": 335.232
          },
          {
            "w": "costs.",
            "t": 335.714
          }
        ]
      },
      {
        "slide": 7,
        "slideId": "s7",
        "speaker": "Kaito",
        "text": "Checkpoint time! Here is the setup: a healthcare system ingests clinical records. Machine OCR costs one cent per record. A specialist physician audit costs three dollars. An undetected diagnostic billing error costs one hundred and fifty dollars.",
        "start": 336.197,
        "end": 352.108,
        "words": [
          {
            "w": "Checkpoint",
            "t": 336.197
          },
          {
            "w": "time!",
            "t": 336.627
          },
          {
            "w": "Here",
            "t": 337.057
          },
          {
            "w": "is",
            "t": 337.487
          },
          {
            "w": "the",
            "t": 337.917
          },
          {
            "w": "setup:",
            "t": 338.347
          },
          {
            "w": "a",
            "t": 338.777
          },
          {
            "w": "healthcare",
            "t": 339.207
          },
          {
            "w": "system",
            "t": 339.637
          },
          {
            "w": "ingests",
            "t": 340.067
          },
          {
            "w": "clinical",
            "t": 340.497
          },
          {
            "w": "records.",
            "t": 340.927
          },
          {
            "w": "Machine",
            "t": 341.357
          },
          {
            "w": "OCR",
            "t": 341.787
          },
          {
            "w": "costs",
            "t": 342.217
          },
          {
            "w": "one",
            "t": 342.647
          },
          {
            "w": "cent",
            "t": 343.077
          },
          {
            "w": "per",
            "t": 343.507
          },
          {
            "w": "record.",
            "t": 343.937
          },
          {
            "w": "A",
            "t": 344.368
          },
          {
            "w": "specialist",
            "t": 344.798
          },
          {
            "w": "physician",
            "t": 345.228
          },
          {
            "w": "audit",
            "t": 345.658
          },
          {
            "w": "costs",
            "t": 346.088
          },
          {
            "w": "three",
            "t": 346.518
          },
          {
            "w": "dollars.",
            "t": 346.948
          },
          {
            "w": "An",
            "t": 347.378
          },
          {
            "w": "undetected",
            "t": 347.808
          },
          {
            "w": "diagnostic",
            "t": 348.238
          },
          {
            "w": "billing",
            "t": 348.668
          },
          {
            "w": "error",
            "t": 349.098
          },
          {
            "w": "costs",
            "t": 349.528
          },
          {
            "w": "one",
            "t": 349.958
          },
          {
            "w": "hundred",
            "t": 350.388
          },
          {
            "w": "and",
            "t": 350.818
          },
          {
            "w": "fifty",
            "t": 351.248
          },
          {
            "w": "dollars.",
            "t": 351.678
          }
        ]
      },
      {
        "slide": 7,
        "slideId": "s7",
        "speaker": "Dr. Nova",
        "text": "Apply our optimal routing theorem to find the exact threshold tau-star. Select your answer below to verify your calculation!",
        "start": 352.108,
        "end": 360.128,
        "words": [
          {
            "w": "Apply",
            "t": 352.108
          },
          {
            "w": "our",
            "t": 352.53
          },
          {
            "w": "optimal",
            "t": 352.952
          },
          {
            "w": "routing",
            "t": 353.374
          },
          {
            "w": "theorem",
            "t": 353.796
          },
          {
            "w": "to",
            "t": 354.219
          },
          {
            "w": "find",
            "t": 354.641
          },
          {
            "w": "the",
            "t": 355.063
          },
          {
            "w": "exact",
            "t": 355.485
          },
          {
            "w": "threshold",
            "t": 355.907
          },
          {
            "w": "tau-star.",
            "t": 356.329
          },
          {
            "w": "Select",
            "t": 356.751
          },
          {
            "w": "your",
            "t": 357.173
          },
          {
            "w": "answer",
            "t": 357.595
          },
          {
            "w": "below",
            "t": 358.017
          },
          {
            "w": "to",
            "t": 358.44
          },
          {
            "w": "verify",
            "t": 358.862
          },
          {
            "w": "your",
            "t": 359.284
          },
          {
            "w": "calculation!",
            "t": 359.706
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Kaito",
        "text": "Dr. Nova, why do we need this complicated Fleiss' Kappa equation? If two annotators agree ninety percent of the time, isn't ninety percent agreement good enough for a dataset?",
        "start": 360.128,
        "end": 371.447,
        "words": [
          {
            "w": "Dr.",
            "t": 360.128
          },
          {
            "w": "Nova,",
            "t": 360.518
          },
          {
            "w": "why",
            "t": 360.909
          },
          {
            "w": "do",
            "t": 361.299
          },
          {
            "w": "we",
            "t": 361.689
          },
          {
            "w": "need",
            "t": 362.08
          },
          {
            "w": "this",
            "t": 362.47
          },
          {
            "w": "complicated",
            "t": 362.86
          },
          {
            "w": "Fleiss'",
            "t": 363.25
          },
          {
            "w": "Kappa",
            "t": 363.641
          },
          {
            "w": "equation?",
            "t": 364.031
          },
          {
            "w": "If",
            "t": 364.421
          },
          {
            "w": "two",
            "t": 364.812
          },
          {
            "w": "annotators",
            "t": 365.202
          },
          {
            "w": "agree",
            "t": 365.592
          },
          {
            "w": "ninety",
            "t": 365.983
          },
          {
            "w": "percent",
            "t": 366.373
          },
          {
            "w": "of",
            "t": 366.763
          },
          {
            "w": "the",
            "t": 367.154
          },
          {
            "w": "time,",
            "t": 367.544
          },
          {
            "w": "isn't",
            "t": 367.934
          },
          {
            "w": "ninety",
            "t": 368.325
          },
          {
            "w": "percent",
            "t": 368.715
          },
          {
            "w": "agreement",
            "t": 369.105
          },
          {
            "w": "good",
            "t": 369.495
          },
          {
            "w": "enough",
            "t": 369.886
          },
          {
            "w": "for",
            "t": 370.276
          },
          {
            "w": "a",
            "t": 370.666
          },
          {
            "w": "dataset?",
            "t": 371.057
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Dr. Nova",
        "text": "Not when the dataset is imbalanced, Kaito! Consider cancer screening where ninety-five percent of scans are benign. If two annotators fall asleep and label every single image benign without looking, their raw agreement is over ninety percent!",
        "start": 371.447,
        "end": 387.099,
        "words": [
          {
            "w": "Not",
            "t": 371.447
          },
          {
            "w": "when",
            "t": 371.87
          },
          {
            "w": "the",
            "t": 372.293
          },
          {
            "w": "dataset",
            "t": 372.716
          },
          {
            "w": "is",
            "t": 373.139
          },
          {
            "w": "imbalanced,",
            "t": 373.562
          },
          {
            "w": "Kaito!",
            "t": 373.985
          },
          {
            "w": "Consider",
            "t": 374.408
          },
          {
            "w": "cancer",
            "t": 374.831
          },
          {
            "w": "screening",
            "t": 375.254
          },
          {
            "w": "where",
            "t": 375.677
          },
          {
            "w": "ninety-five",
            "t": 376.1
          },
          {
            "w": "percent",
            "t": 376.523
          },
          {
            "w": "of",
            "t": 376.946
          },
          {
            "w": "scans",
            "t": 377.369
          },
          {
            "w": "are",
            "t": 377.792
          },
          {
            "w": "benign.",
            "t": 378.215
          },
          {
            "w": "If",
            "t": 378.638
          },
          {
            "w": "two",
            "t": 379.061
          },
          {
            "w": "annotators",
            "t": 379.485
          },
          {
            "w": "fall",
            "t": 379.908
          },
          {
            "w": "asleep",
            "t": 380.331
          },
          {
            "w": "and",
            "t": 380.754
          },
          {
            "w": "label",
            "t": 381.177
          },
          {
            "w": "every",
            "t": 381.6
          },
          {
            "w": "single",
            "t": 382.023
          },
          {
            "w": "image",
            "t": 382.446
          },
          {
            "w": "benign",
            "t": 382.869
          },
          {
            "w": "without",
            "t": 383.292
          },
          {
            "w": "looking,",
            "t": 383.715
          },
          {
            "w": "their",
            "t": 384.138
          },
          {
            "w": "raw",
            "t": 384.561
          },
          {
            "w": "agreement",
            "t": 384.984
          },
          {
            "w": "is",
            "t": 385.407
          },
          {
            "w": "over",
            "t": 385.83
          },
          {
            "w": "ninety",
            "t": 386.253
          },
          {
            "w": "percent!",
            "t": 386.676
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Kaito",
        "text": "Oh! Because ninety-five percent times ninety-five percent is ninety point twenty-five percent! They achieved ninety percent agreement purely by guessing the dominant class!",
        "start": 387.099,
        "end": 398.224,
        "words": [
          {
            "w": "Oh!",
            "t": 387.099
          },
          {
            "w": "Because",
            "t": 387.583
          },
          {
            "w": "ninety-five",
            "t": 388.066
          },
          {
            "w": "percent",
            "t": 388.55
          },
          {
            "w": "times",
            "t": 389.034
          },
          {
            "w": "ninety-five",
            "t": 389.517
          },
          {
            "w": "percent",
            "t": 390.001
          },
          {
            "w": "is",
            "t": 390.485
          },
          {
            "w": "ninety",
            "t": 390.969
          },
          {
            "w": "point",
            "t": 391.452
          },
          {
            "w": "twenty-five",
            "t": 391.936
          },
          {
            "w": "percent!",
            "t": 392.42
          },
          {
            "w": "They",
            "t": 392.903
          },
          {
            "w": "achieved",
            "t": 393.387
          },
          {
            "w": "ninety",
            "t": 393.871
          },
          {
            "w": "percent",
            "t": 394.354
          },
          {
            "w": "agreement",
            "t": 394.838
          },
          {
            "w": "purely",
            "t": 395.322
          },
          {
            "w": "by",
            "t": 395.806
          },
          {
            "w": "guessing",
            "t": 396.289
          },
          {
            "w": "the",
            "t": 396.773
          },
          {
            "w": "dominant",
            "t": 397.257
          },
          {
            "w": "class!",
            "t": 397.74
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Dr. Nova",
        "text": "Exactly. Fleiss' Kappa subtracts that expected chance agreement from both the numerator and the denominator. For those sleeping annotators, Kappa becomes zero point zero zero, exposing the lack of true consensus.",
        "start": 398.224,
        "end": 411.936,
        "words": [
          {
            "w": "Exactly.",
            "t": 398.224
          },
          {
            "w": "Fleiss'",
            "t": 398.666
          },
          {
            "w": "Kappa",
            "t": 399.109
          },
          {
            "w": "subtracts",
            "t": 399.551
          },
          {
            "w": "that",
            "t": 399.993
          },
          {
            "w": "expected",
            "t": 400.436
          },
          {
            "w": "chance",
            "t": 400.878
          },
          {
            "w": "agreement",
            "t": 401.32
          },
          {
            "w": "from",
            "t": 401.763
          },
          {
            "w": "both",
            "t": 402.205
          },
          {
            "w": "the",
            "t": 402.647
          },
          {
            "w": "numerator",
            "t": 403.09
          },
          {
            "w": "and",
            "t": 403.532
          },
          {
            "w": "the",
            "t": 403.974
          },
          {
            "w": "denominator.",
            "t": 404.417
          },
          {
            "w": "For",
            "t": 404.859
          },
          {
            "w": "those",
            "t": 405.301
          },
          {
            "w": "sleeping",
            "t": 405.743
          },
          {
            "w": "annotators,",
            "t": 406.186
          },
          {
            "w": "Kappa",
            "t": 406.628
          },
          {
            "w": "becomes",
            "t": 407.07
          },
          {
            "w": "zero",
            "t": 407.513
          },
          {
            "w": "point",
            "t": 407.955
          },
          {
            "w": "zero",
            "t": 408.397
          },
          {
            "w": "zero,",
            "t": 408.84
          },
          {
            "w": "exposing",
            "t": 409.282
          },
          {
            "w": "the",
            "t": 409.724
          },
          {
            "w": "lack",
            "t": 410.167
          },
          {
            "w": "of",
            "t": 410.609
          },
          {
            "w": "true",
            "t": 411.051
          },
          {
            "w": "consensus.",
            "t": 411.494
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Kaito",
        "text": "Dr. Nova, in crowdsourcing platforms, teams often assign five workers to an image and take the simple majority vote. What is wrong with naive democracy in data annotation?",
        "start": 411.936,
        "end": 422.996,
        "words": [
          {
            "w": "Dr.",
            "t": 411.936
          },
          {
            "w": "Nova,",
            "t": 412.331
          },
          {
            "w": "in",
            "t": 412.726
          },
          {
            "w": "crowdsourcing",
            "t": 413.121
          },
          {
            "w": "platforms,",
            "t": 413.516
          },
          {
            "w": "teams",
            "t": 413.911
          },
          {
            "w": "often",
            "t": 414.306
          },
          {
            "w": "assign",
            "t": 414.701
          },
          {
            "w": "five",
            "t": 415.096
          },
          {
            "w": "workers",
            "t": 415.491
          },
          {
            "w": "to",
            "t": 415.886
          },
          {
            "w": "an",
            "t": 416.281
          },
          {
            "w": "image",
            "t": 416.676
          },
          {
            "w": "and",
            "t": 417.071
          },
          {
            "w": "take",
            "t": 417.466
          },
          {
            "w": "the",
            "t": 417.861
          },
          {
            "w": "simple",
            "t": 418.256
          },
          {
            "w": "majority",
            "t": 418.651
          },
          {
            "w": "vote.",
            "t": 419.046
          },
          {
            "w": "What",
            "t": 419.441
          },
          {
            "w": "is",
            "t": 419.836
          },
          {
            "w": "wrong",
            "t": 420.231
          },
          {
            "w": "with",
            "t": 420.626
          },
          {
            "w": "naive",
            "t": 421.021
          },
          {
            "w": "democracy",
            "t": 421.416
          },
          {
            "w": "in",
            "t": 421.811
          },
          {
            "w": "data",
            "t": 422.206
          },
          {
            "w": "annotation?",
            "t": 422.601
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Dr. Nova",
        "text": "Everything, Kaito! What if three rushed annotators casually select the default label, while two meticulous experts spot a subtle tumor? In naive majority voting, the noise of the careless majority overrides expert signal!",
        "start": 422.996,
        "end": 437.29,
        "words": [
          {
            "w": "Everything,",
            "t": 422.996
          },
          {
            "w": "Kaito!",
            "t": 423.429
          },
          {
            "w": "What",
            "t": 423.862
          },
          {
            "w": "if",
            "t": 424.295
          },
          {
            "w": "three",
            "t": 424.729
          },
          {
            "w": "rushed",
            "t": 425.162
          },
          {
            "w": "annotators",
            "t": 425.595
          },
          {
            "w": "casually",
            "t": 426.028
          },
          {
            "w": "select",
            "t": 426.461
          },
          {
            "w": "the",
            "t": 426.894
          },
          {
            "w": "default",
            "t": 427.328
          },
          {
            "w": "label,",
            "t": 427.761
          },
          {
            "w": "while",
            "t": 428.194
          },
          {
            "w": "two",
            "t": 428.627
          },
          {
            "w": "meticulous",
            "t": 429.06
          },
          {
            "w": "experts",
            "t": 429.493
          },
          {
            "w": "spot",
            "t": 429.926
          },
          {
            "w": "a",
            "t": 430.36
          },
          {
            "w": "subtle",
            "t": 430.793
          },
          {
            "w": "tumor?",
            "t": 431.226
          },
          {
            "w": "In",
            "t": 431.659
          },
          {
            "w": "naive",
            "t": 432.092
          },
          {
            "w": "majority",
            "t": 432.525
          },
          {
            "w": "voting,",
            "t": 432.958
          },
          {
            "w": "the",
            "t": 433.392
          },
          {
            "w": "noise",
            "t": 433.825
          },
          {
            "w": "of",
            "t": 434.258
          },
          {
            "w": "the",
            "t": 434.691
          },
          {
            "w": "careless",
            "t": 435.124
          },
          {
            "w": "majority",
            "t": 435.557
          },
          {
            "w": "overrides",
            "t": 435.991
          },
          {
            "w": "expert",
            "t": 436.424
          },
          {
            "w": "signal!",
            "t": 436.857
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Kaito",
        "text": "That is terrifying for healthcare and self-driving cars. So Dawid-Skene models the confusion matrix of each worker, discovering that those two experts are ninety-nine percent reliable on gold traps, allowing their vote to override the three fatigued workers!",
        "start": 437.29,
        "end": 453.977,
        "words": [
          {
            "w": "That",
            "t": 437.29
          },
          {
            "w": "is",
            "t": 437.729
          },
          {
            "w": "terrifying",
            "t": 438.168
          },
          {
            "w": "for",
            "t": 438.607
          },
          {
            "w": "healthcare",
            "t": 439.047
          },
          {
            "w": "and",
            "t": 439.486
          },
          {
            "w": "self-driving",
            "t": 439.925
          },
          {
            "w": "cars.",
            "t": 440.364
          },
          {
            "w": "So",
            "t": 440.803
          },
          {
            "w": "Dawid-Skene",
            "t": 441.242
          },
          {
            "w": "models",
            "t": 441.681
          },
          {
            "w": "the",
            "t": 442.12
          },
          {
            "w": "confusion",
            "t": 442.56
          },
          {
            "w": "matrix",
            "t": 442.999
          },
          {
            "w": "of",
            "t": 443.438
          },
          {
            "w": "each",
            "t": 443.877
          },
          {
            "w": "worker,",
            "t": 444.316
          },
          {
            "w": "discovering",
            "t": 444.755
          },
          {
            "w": "that",
            "t": 445.194
          },
          {
            "w": "those",
            "t": 445.634
          },
          {
            "w": "two",
            "t": 446.073
          },
          {
            "w": "experts",
            "t": 446.512
          },
          {
            "w": "are",
            "t": 446.951
          },
          {
            "w": "ninety-nine",
            "t": 447.39
          },
          {
            "w": "percent",
            "t": 447.829
          },
          {
            "w": "reliable",
            "t": 448.268
          },
          {
            "w": "on",
            "t": 448.707
          },
          {
            "w": "gold",
            "t": 449.147
          },
          {
            "w": "traps,",
            "t": 449.586
          },
          {
            "w": "allowing",
            "t": 450.025
          },
          {
            "w": "their",
            "t": 450.464
          },
          {
            "w": "vote",
            "t": 450.903
          },
          {
            "w": "to",
            "t": 451.342
          },
          {
            "w": "override",
            "t": 451.781
          },
          {
            "w": "the",
            "t": 452.22
          },
          {
            "w": "three",
            "t": 452.66
          },
          {
            "w": "fatigued",
            "t": 453.099
          },
          {
            "w": "workers!",
            "t": 453.538
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Dr. Nova",
        "text": "Exactly. Probabilistic truth inference turns noisy crowds into high-precision annotation engines.",
        "start": 453.977,
        "end": 460.251,
        "words": [
          {
            "w": "Exactly.",
            "t": 453.977
          },
          {
            "w": "Probabilistic",
            "t": 454.547
          },
          {
            "w": "truth",
            "t": 455.118
          },
          {
            "w": "inference",
            "t": 455.688
          },
          {
            "w": "turns",
            "t": 456.258
          },
          {
            "w": "noisy",
            "t": 456.829
          },
          {
            "w": "crowds",
            "t": 457.399
          },
          {
            "w": "into",
            "t": 457.97
          },
          {
            "w": "high-precision",
            "t": 458.54
          },
          {
            "w": "annotation",
            "t": 459.11
          },
          {
            "w": "engines.",
            "t": 459.681
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Kaito",
        "text": "Dr. Nova, looking at the unit cost row: pure manual review costs between five hundred and two thousand dollars per thousand items. But hybrid HITL drops that to twenty to eighty dollars per thousand!",
        "start": 460.251,
        "end": 473.122,
        "words": [
          {
            "w": "Dr.",
            "t": 460.251
          },
          {
            "w": "Nova,",
            "t": 460.63
          },
          {
            "w": "looking",
            "t": 461.008
          },
          {
            "w": "at",
            "t": 461.387
          },
          {
            "w": "the",
            "t": 461.765
          },
          {
            "w": "unit",
            "t": 462.144
          },
          {
            "w": "cost",
            "t": 462.522
          },
          {
            "w": "row:",
            "t": 462.901
          },
          {
            "w": "pure",
            "t": 463.279
          },
          {
            "w": "manual",
            "t": 463.658
          },
          {
            "w": "review",
            "t": 464.037
          },
          {
            "w": "costs",
            "t": 464.415
          },
          {
            "w": "between",
            "t": 464.794
          },
          {
            "w": "five",
            "t": 465.172
          },
          {
            "w": "hundred",
            "t": 465.551
          },
          {
            "w": "and",
            "t": 465.929
          },
          {
            "w": "two",
            "t": 466.308
          },
          {
            "w": "thousand",
            "t": 466.687
          },
          {
            "w": "dollars",
            "t": 467.065
          },
          {
            "w": "per",
            "t": 467.444
          },
          {
            "w": "thousand",
            "t": 467.822
          },
          {
            "w": "items.",
            "t": 468.201
          },
          {
            "w": "But",
            "t": 468.579
          },
          {
            "w": "hybrid",
            "t": 468.958
          },
          {
            "w": "HITL",
            "t": 469.336
          },
          {
            "w": "drops",
            "t": 469.715
          },
          {
            "w": "that",
            "t": 470.094
          },
          {
            "w": "to",
            "t": 470.472
          },
          {
            "w": "twenty",
            "t": 470.851
          },
          {
            "w": "to",
            "t": 471.229
          },
          {
            "w": "eighty",
            "t": 471.608
          },
          {
            "w": "dollars",
            "t": 471.986
          },
          {
            "w": "per",
            "t": 472.365
          },
          {
            "w": "thousand!",
            "t": 472.743
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Dr. Nova",
        "text": "That is a ninety-five percent cost reduction, Kaito! And notice the edge-case resilience row: pure automation has zero protection against unmodeled distribution shifts. But hybrid HITL flags those exact out-of-distribution instances and hands them to humans.",
        "start": 473.122,
        "end": 489.809,
        "words": [
          {
            "w": "That",
            "t": 473.122
          },
          {
            "w": "is",
            "t": 473.586
          },
          {
            "w": "a",
            "t": 474.049
          },
          {
            "w": "ninety-five",
            "t": 474.513
          },
          {
            "w": "percent",
            "t": 474.976
          },
          {
            "w": "cost",
            "t": 475.44
          },
          {
            "w": "reduction,",
            "t": 475.903
          },
          {
            "w": "Kaito!",
            "t": 476.367
          },
          {
            "w": "And",
            "t": 476.83
          },
          {
            "w": "notice",
            "t": 477.294
          },
          {
            "w": "the",
            "t": 477.757
          },
          {
            "w": "edge-case",
            "t": 478.221
          },
          {
            "w": "resilience",
            "t": 478.684
          },
          {
            "w": "row:",
            "t": 479.148
          },
          {
            "w": "pure",
            "t": 479.611
          },
          {
            "w": "automation",
            "t": 480.075
          },
          {
            "w": "has",
            "t": 480.538
          },
          {
            "w": "zero",
            "t": 481.002
          },
          {
            "w": "protection",
            "t": 481.466
          },
          {
            "w": "against",
            "t": 481.929
          },
          {
            "w": "unmodeled",
            "t": 482.393
          },
          {
            "w": "distribution",
            "t": 482.856
          },
          {
            "w": "shifts.",
            "t": 483.32
          },
          {
            "w": "But",
            "t": 483.783
          },
          {
            "w": "hybrid",
            "t": 484.247
          },
          {
            "w": "HITL",
            "t": 484.71
          },
          {
            "w": "flags",
            "t": 485.174
          },
          {
            "w": "those",
            "t": 485.637
          },
          {
            "w": "exact",
            "t": 486.101
          },
          {
            "w": "out-of-distribution",
            "t": 486.564
          },
          {
            "w": "instances",
            "t": 487.028
          },
          {
            "w": "and",
            "t": 487.491
          },
          {
            "w": "hands",
            "t": 487.955
          },
          {
            "w": "them",
            "t": 488.418
          },
          {
            "w": "to",
            "t": 488.882
          },
          {
            "w": "humans.",
            "t": 489.345
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Kaito",
        "text": "So we get ninety-five percent of the speed and cost efficiency of pure machines, while retaining the full common-sense reasoning and safety of human experts!",
        "start": 489.809,
        "end": 499.963,
        "words": [
          {
            "w": "So",
            "t": 489.809
          },
          {
            "w": "we",
            "t": 490.215
          },
          {
            "w": "get",
            "t": 490.621
          },
          {
            "w": "ninety-five",
            "t": 491.027
          },
          {
            "w": "percent",
            "t": 491.434
          },
          {
            "w": "of",
            "t": 491.84
          },
          {
            "w": "the",
            "t": 492.246
          },
          {
            "w": "speed",
            "t": 492.652
          },
          {
            "w": "and",
            "t": 493.058
          },
          {
            "w": "cost",
            "t": 493.464
          },
          {
            "w": "efficiency",
            "t": 493.871
          },
          {
            "w": "of",
            "t": 494.277
          },
          {
            "w": "pure",
            "t": 494.683
          },
          {
            "w": "machines,",
            "t": 495.089
          },
          {
            "w": "while",
            "t": 495.495
          },
          {
            "w": "retaining",
            "t": 495.901
          },
          {
            "w": "the",
            "t": 496.308
          },
          {
            "w": "full",
            "t": 496.714
          },
          {
            "w": "common-sense",
            "t": 497.12
          },
          {
            "w": "reasoning",
            "t": 497.526
          },
          {
            "w": "and",
            "t": 497.932
          },
          {
            "w": "safety",
            "t": 498.338
          },
          {
            "w": "of",
            "t": 498.745
          },
          {
            "w": "human",
            "t": 499.151
          },
          {
            "w": "experts!",
            "t": 499.557
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Dr. Nova",
        "text": "Exactly. Now let us see how production systems feed those human insights back into automated retraining.",
        "start": 499.963,
        "end": 506.69,
        "words": [
          {
            "w": "Exactly.",
            "t": 499.963
          },
          {
            "w": "Now",
            "t": 500.383
          },
          {
            "w": "let",
            "t": 500.804
          },
          {
            "w": "us",
            "t": 501.224
          },
          {
            "w": "see",
            "t": 501.645
          },
          {
            "w": "how",
            "t": 502.065
          },
          {
            "w": "production",
            "t": 502.486
          },
          {
            "w": "systems",
            "t": 502.906
          },
          {
            "w": "feed",
            "t": 503.327
          },
          {
            "w": "those",
            "t": 503.747
          },
          {
            "w": "human",
            "t": 504.167
          },
          {
            "w": "insights",
            "t": 504.588
          },
          {
            "w": "back",
            "t": 505.008
          },
          {
            "w": "into",
            "t": 505.429
          },
          {
            "w": "automated",
            "t": 505.849
          },
          {
            "w": "retraining.",
            "t": 506.27
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Kaito",
        "text": "Dr. Nova, this feedback loop is brilliant! When human annotators resolve high-uncertainty records, those verified labels don't just sit in a spreadsheet—they are immediately used to retrain the triage classifier!",
        "start": 506.69,
        "end": 520.402,
        "words": [
          {
            "w": "Dr.",
            "t": 506.69
          },
          {
            "w": "Nova,",
            "t": 507.147
          },
          {
            "w": "this",
            "t": 507.604
          },
          {
            "w": "feedback",
            "t": 508.061
          },
          {
            "w": "loop",
            "t": 508.518
          },
          {
            "w": "is",
            "t": 508.975
          },
          {
            "w": "brilliant!",
            "t": 509.432
          },
          {
            "w": "When",
            "t": 509.889
          },
          {
            "w": "human",
            "t": 510.347
          },
          {
            "w": "annotators",
            "t": 510.804
          },
          {
            "w": "resolve",
            "t": 511.261
          },
          {
            "w": "high-uncertainty",
            "t": 511.718
          },
          {
            "w": "records,",
            "t": 512.175
          },
          {
            "w": "those",
            "t": 512.632
          },
          {
            "w": "verified",
            "t": 513.089
          },
          {
            "w": "labels",
            "t": 513.546
          },
          {
            "w": "don't",
            "t": 514.003
          },
          {
            "w": "just",
            "t": 514.46
          },
          {
            "w": "sit",
            "t": 514.917
          },
          {
            "w": "in",
            "t": 515.374
          },
          {
            "w": "a",
            "t": 515.831
          },
          {
            "w": "spreadsheet—they",
            "t": 516.288
          },
          {
            "w": "are",
            "t": 516.745
          },
          {
            "w": "immediately",
            "t": 517.203
          },
          {
            "w": "used",
            "t": 517.66
          },
          {
            "w": "to",
            "t": 518.117
          },
          {
            "w": "retrain",
            "t": 518.574
          },
          {
            "w": "the",
            "t": 519.031
          },
          {
            "w": "triage",
            "t": 519.488
          },
          {
            "w": "classifier!",
            "t": 519.945
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Dr. Nova",
        "text": "That is the concept of Active Learning, Kaito! In standard passive learning, models are trained on random samples. Here, humans spend their valuable cognitive energy exclusively on the most informative edge cases that the model currently finds confusing.",
        "start": 520.402,
        "end": 536.83,
        "words": [
          {
            "w": "That",
            "t": 520.402
          },
          {
            "w": "is",
            "t": 520.834
          },
          {
            "w": "the",
            "t": 521.267
          },
          {
            "w": "concept",
            "t": 521.699
          },
          {
            "w": "of",
            "t": 522.131
          },
          {
            "w": "Active",
            "t": 522.564
          },
          {
            "w": "Learning,",
            "t": 522.996
          },
          {
            "w": "Kaito!",
            "t": 523.428
          },
          {
            "w": "In",
            "t": 523.861
          },
          {
            "w": "standard",
            "t": 524.293
          },
          {
            "w": "passive",
            "t": 524.725
          },
          {
            "w": "learning,",
            "t": 525.157
          },
          {
            "w": "models",
            "t": 525.59
          },
          {
            "w": "are",
            "t": 526.022
          },
          {
            "w": "trained",
            "t": 526.454
          },
          {
            "w": "on",
            "t": 526.887
          },
          {
            "w": "random",
            "t": 527.319
          },
          {
            "w": "samples.",
            "t": 527.751
          },
          {
            "w": "Here,",
            "t": 528.184
          },
          {
            "w": "humans",
            "t": 528.616
          },
          {
            "w": "spend",
            "t": 529.048
          },
          {
            "w": "their",
            "t": 529.481
          },
          {
            "w": "valuable",
            "t": 529.913
          },
          {
            "w": "cognitive",
            "t": 530.345
          },
          {
            "w": "energy",
            "t": 530.778
          },
          {
            "w": "exclusively",
            "t": 531.21
          },
          {
            "w": "on",
            "t": 531.642
          },
          {
            "w": "the",
            "t": 532.075
          },
          {
            "w": "most",
            "t": 532.507
          },
          {
            "w": "informative",
            "t": 532.939
          },
          {
            "w": "edge",
            "t": 533.371
          },
          {
            "w": "cases",
            "t": 533.804
          },
          {
            "w": "that",
            "t": 534.236
          },
          {
            "w": "the",
            "t": 534.668
          },
          {
            "w": "model",
            "t": 535.101
          },
          {
            "w": "currently",
            "t": 535.533
          },
          {
            "w": "finds",
            "t": 535.965
          },
          {
            "w": "confusing.",
            "t": 536.398
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Kaito",
        "text": "Which means next month, when similar edge cases arrive, the updated model will handle them autonomously with high confidence!",
        "start": 536.83,
        "end": 544.915,
        "words": [
          {
            "w": "Which",
            "t": 536.83
          },
          {
            "w": "means",
            "t": 537.256
          },
          {
            "w": "next",
            "t": 537.681
          },
          {
            "w": "month,",
            "t": 538.107
          },
          {
            "w": "when",
            "t": 538.532
          },
          {
            "w": "similar",
            "t": 538.958
          },
          {
            "w": "edge",
            "t": 539.383
          },
          {
            "w": "cases",
            "t": 539.809
          },
          {
            "w": "arrive,",
            "t": 540.234
          },
          {
            "w": "the",
            "t": 540.66
          },
          {
            "w": "updated",
            "t": 541.085
          },
          {
            "w": "model",
            "t": 541.511
          },
          {
            "w": "will",
            "t": 541.936
          },
          {
            "w": "handle",
            "t": 542.362
          },
          {
            "w": "them",
            "t": 542.787
          },
          {
            "w": "autonomously",
            "t": 543.213
          },
          {
            "w": "with",
            "t": 543.638
          },
          {
            "w": "high",
            "t": 544.064
          },
          {
            "w": "confidence!",
            "t": 544.489
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Dr. Nova",
        "text": "Precisely. The human queue shrinks over time, driving long-term acquisition costs even lower.",
        "start": 544.915,
        "end": 550.93,
        "words": [
          {
            "w": "Precisely.",
            "t": 544.915
          },
          {
            "w": "The",
            "t": 545.378
          },
          {
            "w": "human",
            "t": 545.84
          },
          {
            "w": "queue",
            "t": 546.303
          },
          {
            "w": "shrinks",
            "t": 546.766
          },
          {
            "w": "over",
            "t": 547.228
          },
          {
            "w": "time,",
            "t": 547.691
          },
          {
            "w": "driving",
            "t": 548.154
          },
          {
            "w": "long-term",
            "t": 548.617
          },
          {
            "w": "acquisition",
            "t": 549.079
          },
          {
            "w": "costs",
            "t": 549.542
          },
          {
            "w": "even",
            "t": 550.005
          },
          {
            "w": "lower.",
            "t": 550.467
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Kaito",
        "text": "Dr. Nova, look at the right panel on this simulator! Up to hour three, the predicted error rate is only around three percent. But once I drag the shift slider to eight hours, the error curve goes almost vertical, reaching over twenty-eight percent!",
        "start": 550.93,
        "end": 566.97,
        "words": [
          {
            "w": "Dr.",
            "t": 550.93
          },
          {
            "w": "Nova,",
            "t": 551.303
          },
          {
            "w": "look",
            "t": 551.676
          },
          {
            "w": "at",
            "t": 552.049
          },
          {
            "w": "the",
            "t": 552.422
          },
          {
            "w": "right",
            "t": 552.795
          },
          {
            "w": "panel",
            "t": 553.168
          },
          {
            "w": "on",
            "t": 553.541
          },
          {
            "w": "this",
            "t": 553.914
          },
          {
            "w": "simulator!",
            "t": 554.287
          },
          {
            "w": "Up",
            "t": 554.66
          },
          {
            "w": "to",
            "t": 555.033
          },
          {
            "w": "hour",
            "t": 555.406
          },
          {
            "w": "three,",
            "t": 555.779
          },
          {
            "w": "the",
            "t": 556.152
          },
          {
            "w": "predicted",
            "t": 556.525
          },
          {
            "w": "error",
            "t": 556.898
          },
          {
            "w": "rate",
            "t": 557.271
          },
          {
            "w": "is",
            "t": 557.644
          },
          {
            "w": "only",
            "t": 558.017
          },
          {
            "w": "around",
            "t": 558.39
          },
          {
            "w": "three",
            "t": 558.763
          },
          {
            "w": "percent.",
            "t": 559.137
          },
          {
            "w": "But",
            "t": 559.51
          },
          {
            "w": "once",
            "t": 559.883
          },
          {
            "w": "I",
            "t": 560.256
          },
          {
            "w": "drag",
            "t": 560.629
          },
          {
            "w": "the",
            "t": 561.002
          },
          {
            "w": "shift",
            "t": 561.375
          },
          {
            "w": "slider",
            "t": 561.748
          },
          {
            "w": "to",
            "t": 562.121
          },
          {
            "w": "eight",
            "t": 562.494
          },
          {
            "w": "hours,",
            "t": 562.867
          },
          {
            "w": "the",
            "t": 563.24
          },
          {
            "w": "error",
            "t": 563.613
          },
          {
            "w": "curve",
            "t": 563.986
          },
          {
            "w": "goes",
            "t": 564.359
          },
          {
            "w": "almost",
            "t": 564.732
          },
          {
            "w": "vertical,",
            "t": 565.105
          },
          {
            "w": "reaching",
            "t": 565.478
          },
          {
            "w": "over",
            "t": 565.851
          },
          {
            "w": "twenty-eight",
            "t": 566.224
          },
          {
            "w": "percent!",
            "t": 566.597
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Dr. Nova",
        "text": "That is the exponential penalty of the Weibull shape parameter k equals one point eight, Kaito! Notice the red warning badge that flashes: mandatory rotation break required. No matter how experienced an annotator is, continuous focus collapses.",
        "start": 566.97,
        "end": 582.751,
        "words": [
          {
            "w": "That",
            "t": 566.97
          },
          {
            "w": "is",
            "t": 567.397
          },
          {
            "w": "the",
            "t": 567.823
          },
          {
            "w": "exponential",
            "t": 568.25
          },
          {
            "w": "penalty",
            "t": 568.676
          },
          {
            "w": "of",
            "t": 569.103
          },
          {
            "w": "the",
            "t": 569.529
          },
          {
            "w": "Weibull",
            "t": 569.956
          },
          {
            "w": "shape",
            "t": 570.382
          },
          {
            "w": "parameter",
            "t": 570.809
          },
          {
            "w": "k",
            "t": 571.235
          },
          {
            "w": "equals",
            "t": 571.662
          },
          {
            "w": "one",
            "t": 572.088
          },
          {
            "w": "point",
            "t": 572.515
          },
          {
            "w": "eight,",
            "t": 572.941
          },
          {
            "w": "Kaito!",
            "t": 573.368
          },
          {
            "w": "Notice",
            "t": 573.794
          },
          {
            "w": "the",
            "t": 574.221
          },
          {
            "w": "red",
            "t": 574.647
          },
          {
            "w": "warning",
            "t": 575.074
          },
          {
            "w": "badge",
            "t": 575.5
          },
          {
            "w": "that",
            "t": 575.927
          },
          {
            "w": "flashes:",
            "t": 576.353
          },
          {
            "w": "mandatory",
            "t": 576.78
          },
          {
            "w": "rotation",
            "t": 577.206
          },
          {
            "w": "break",
            "t": 577.633
          },
          {
            "w": "required.",
            "t": 578.059
          },
          {
            "w": "No",
            "t": 578.486
          },
          {
            "w": "matter",
            "t": 578.912
          },
          {
            "w": "how",
            "t": 579.339
          },
          {
            "w": "experienced",
            "t": 579.765
          },
          {
            "w": "an",
            "t": 580.192
          },
          {
            "w": "annotator",
            "t": 580.618
          },
          {
            "w": "is,",
            "t": 581.045
          },
          {
            "w": "continuous",
            "t": 581.471
          },
          {
            "w": "focus",
            "t": 581.898
          },
          {
            "w": "collapses.",
            "t": 582.324
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Kaito",
        "text": "And on the left panel, when I set observed agreement to eighty-five percent and chance agreement to fifty percent, Kappa shows exactly zero point seven zero: Substantial Agreement!",
        "start": 582.751,
        "end": 594.393,
        "words": [
          {
            "w": "And",
            "t": 582.751
          },
          {
            "w": "on",
            "t": 583.167
          },
          {
            "w": "the",
            "t": 583.583
          },
          {
            "w": "left",
            "t": 583.998
          },
          {
            "w": "panel,",
            "t": 584.414
          },
          {
            "w": "when",
            "t": 584.83
          },
          {
            "w": "I",
            "t": 585.246
          },
          {
            "w": "set",
            "t": 585.661
          },
          {
            "w": "observed",
            "t": 586.077
          },
          {
            "w": "agreement",
            "t": 586.493
          },
          {
            "w": "to",
            "t": 586.909
          },
          {
            "w": "eighty-five",
            "t": 587.325
          },
          {
            "w": "percent",
            "t": 587.74
          },
          {
            "w": "and",
            "t": 588.156
          },
          {
            "w": "chance",
            "t": 588.572
          },
          {
            "w": "agreement",
            "t": 588.988
          },
          {
            "w": "to",
            "t": 589.404
          },
          {
            "w": "fifty",
            "t": 589.819
          },
          {
            "w": "percent,",
            "t": 590.235
          },
          {
            "w": "Kappa",
            "t": 590.651
          },
          {
            "w": "shows",
            "t": 591.067
          },
          {
            "w": "exactly",
            "t": 591.483
          },
          {
            "w": "zero",
            "t": 591.898
          },
          {
            "w": "point",
            "t": 592.314
          },
          {
            "w": "seven",
            "t": 592.73
          },
          {
            "w": "zero:",
            "t": 593.146
          },
          {
            "w": "Substantial",
            "t": 593.561
          },
          {
            "w": "Agreement!",
            "t": 593.977
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Dr. Nova",
        "text": "Exactly. Let us put that calculation to the test in our final checkpoint!",
        "start": 594.393,
        "end": 599.115,
        "words": [
          {
            "w": "Exactly.",
            "t": 594.393
          },
          {
            "w": "Let",
            "t": 594.756
          },
          {
            "w": "us",
            "t": 595.119
          },
          {
            "w": "put",
            "t": 595.483
          },
          {
            "w": "that",
            "t": 595.846
          },
          {
            "w": "calculation",
            "t": 596.209
          },
          {
            "w": "to",
            "t": 596.572
          },
          {
            "w": "the",
            "t": 596.936
          },
          {
            "w": "test",
            "t": 597.299
          },
          {
            "w": "in",
            "t": 597.662
          },
          {
            "w": "our",
            "t": 598.025
          },
          {
            "w": "final",
            "t": 598.389
          },
          {
            "w": "checkpoint!",
            "t": 598.752
          }
        ]
      },
      {
        "slide": 13,
        "slideId": "s13",
        "speaker": "Kaito",
        "text": "Checkpoint 2 challenge! Three radiologists review one hundred chest X-rays. Their raw observed agreement is eighty-five percent, and the expected chance agreement is fifty percent.",
        "start": 599.115,
        "end": 610.757,
        "words": [
          {
            "w": "Checkpoint",
            "t": 599.115
          },
          {
            "w": "2",
            "t": 599.581
          },
          {
            "w": "challenge!",
            "t": 600.046
          },
          {
            "w": "Three",
            "t": 600.512
          },
          {
            "w": "radiologists",
            "t": 600.978
          },
          {
            "w": "review",
            "t": 601.443
          },
          {
            "w": "one",
            "t": 601.909
          },
          {
            "w": "hundred",
            "t": 602.375
          },
          {
            "w": "chest",
            "t": 602.84
          },
          {
            "w": "X-rays.",
            "t": 603.306
          },
          {
            "w": "Their",
            "t": 603.772
          },
          {
            "w": "raw",
            "t": 604.237
          },
          {
            "w": "observed",
            "t": 604.703
          },
          {
            "w": "agreement",
            "t": 605.169
          },
          {
            "w": "is",
            "t": 605.635
          },
          {
            "w": "eighty-five",
            "t": 606.1
          },
          {
            "w": "percent,",
            "t": 606.566
          },
          {
            "w": "and",
            "t": 607.032
          },
          {
            "w": "the",
            "t": 607.497
          },
          {
            "w": "expected",
            "t": 607.963
          },
          {
            "w": "chance",
            "t": 608.429
          },
          {
            "w": "agreement",
            "t": 608.894
          },
          {
            "w": "is",
            "t": 609.36
          },
          {
            "w": "fifty",
            "t": 609.826
          },
          {
            "w": "percent.",
            "t": 610.291
          }
        ]
      },
      {
        "slide": 13,
        "slideId": "s13",
        "speaker": "Dr. Nova",
        "text": "Calculate Fleiss' Kappa and evaluate whether this annotation pipeline meets the benchmark for production medical training. Click your answer below!",
        "start": 610.757,
        "end": 620.265,
        "words": [
          {
            "w": "Calculate",
            "t": 610.757
          },
          {
            "w": "Fleiss'",
            "t": 611.232
          },
          {
            "w": "Kappa",
            "t": 611.708
          },
          {
            "w": "and",
            "t": 612.183
          },
          {
            "w": "evaluate",
            "t": 612.659
          },
          {
            "w": "whether",
            "t": 613.134
          },
          {
            "w": "this",
            "t": 613.609
          },
          {
            "w": "annotation",
            "t": 614.085
          },
          {
            "w": "pipeline",
            "t": 614.56
          },
          {
            "w": "meets",
            "t": 615.036
          },
          {
            "w": "the",
            "t": 615.511
          },
          {
            "w": "benchmark",
            "t": 615.986
          },
          {
            "w": "for",
            "t": 616.462
          },
          {
            "w": "production",
            "t": 616.937
          },
          {
            "w": "medical",
            "t": 617.413
          },
          {
            "w": "training.",
            "t": 617.888
          },
          {
            "w": "Click",
            "t": 618.363
          },
          {
            "w": "your",
            "t": 618.839
          },
          {
            "w": "answer",
            "t": 619.314
          },
          {
            "w": "below!",
            "t": 619.79
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Kaito",
        "text": "Dr. Nova, this supermarket case study demonstrates the exact trade-off we discussed! When the robot scanned cereal boxes, it was ninety-nine percent confident. But shiny metallic coffee bags blinded the computer vision camera!",
        "start": 620.265,
        "end": 634.882,
        "words": [
          {
            "w": "Dr.",
            "t": 620.265
          },
          {
            "w": "Nova,",
            "t": 620.708
          },
          {
            "w": "this",
            "t": 621.151
          },
          {
            "w": "supermarket",
            "t": 621.594
          },
          {
            "w": "case",
            "t": 622.037
          },
          {
            "w": "study",
            "t": 622.48
          },
          {
            "w": "demonstrates",
            "t": 622.923
          },
          {
            "w": "the",
            "t": 623.366
          },
          {
            "w": "exact",
            "t": 623.809
          },
          {
            "w": "trade-off",
            "t": 624.251
          },
          {
            "w": "we",
            "t": 624.694
          },
          {
            "w": "discussed!",
            "t": 625.137
          },
          {
            "w": "When",
            "t": 625.58
          },
          {
            "w": "the",
            "t": 626.023
          },
          {
            "w": "robot",
            "t": 626.466
          },
          {
            "w": "scanned",
            "t": 626.909
          },
          {
            "w": "cereal",
            "t": 627.352
          },
          {
            "w": "boxes,",
            "t": 627.795
          },
          {
            "w": "it",
            "t": 628.238
          },
          {
            "w": "was",
            "t": 628.681
          },
          {
            "w": "ninety-nine",
            "t": 629.124
          },
          {
            "w": "percent",
            "t": 629.567
          },
          {
            "w": "confident.",
            "t": 630.01
          },
          {
            "w": "But",
            "t": 630.453
          },
          {
            "w": "shiny",
            "t": 630.896
          },
          {
            "w": "metallic",
            "t": 631.338
          },
          {
            "w": "coffee",
            "t": 631.781
          },
          {
            "w": "bags",
            "t": 632.224
          },
          {
            "w": "blinded",
            "t": 632.667
          },
          {
            "w": "the",
            "t": 633.11
          },
          {
            "w": "computer",
            "t": 633.553
          },
          {
            "w": "vision",
            "t": 633.996
          },
          {
            "w": "camera!",
            "t": 634.439
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Dr. Nova",
        "text": "Exactly. And rather than abandoning the robotics project or spending twenty-eight million dollars hiring eight hundred manual auditors, the engineering team let mathematics do the heavy lifting.",
        "start": 634.882,
        "end": 647.43,
        "words": [
          {
            "w": "Exactly.",
            "t": 634.882
          },
          {
            "w": "And",
            "t": 635.347
          },
          {
            "w": "rather",
            "t": 635.811
          },
          {
            "w": "than",
            "t": 636.276
          },
          {
            "w": "abandoning",
            "t": 636.741
          },
          {
            "w": "the",
            "t": 637.206
          },
          {
            "w": "robotics",
            "t": 637.67
          },
          {
            "w": "project",
            "t": 638.135
          },
          {
            "w": "or",
            "t": 638.6
          },
          {
            "w": "spending",
            "t": 639.065
          },
          {
            "w": "twenty-eight",
            "t": 639.529
          },
          {
            "w": "million",
            "t": 639.994
          },
          {
            "w": "dollars",
            "t": 640.459
          },
          {
            "w": "hiring",
            "t": 640.924
          },
          {
            "w": "eight",
            "t": 641.388
          },
          {
            "w": "hundred",
            "t": 641.853
          },
          {
            "w": "manual",
            "t": 642.318
          },
          {
            "w": "auditors,",
            "t": 642.783
          },
          {
            "w": "the",
            "t": 643.247
          },
          {
            "w": "engineering",
            "t": 643.712
          },
          {
            "w": "team",
            "t": 644.177
          },
          {
            "w": "let",
            "t": 644.642
          },
          {
            "w": "mathematics",
            "t": 645.106
          },
          {
            "w": "do",
            "t": 645.571
          },
          {
            "w": "the",
            "t": 646.036
          },
          {
            "w": "heavy",
            "t": 646.501
          },
          {
            "w": "lifting.",
            "t": 646.965
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Kaito",
        "text": "The robot handled ninety-four percent of the easy items autonomously, and routed only the six percent difficult items to mobile phones of store employees who were already in the aisles!",
        "start": 647.43,
        "end": 659.395,
        "words": [
          {
            "w": "The",
            "t": 647.43
          },
          {
            "w": "robot",
            "t": 647.829
          },
          {
            "w": "handled",
            "t": 648.228
          },
          {
            "w": "ninety-four",
            "t": 648.626
          },
          {
            "w": "percent",
            "t": 649.025
          },
          {
            "w": "of",
            "t": 649.424
          },
          {
            "w": "the",
            "t": 649.823
          },
          {
            "w": "easy",
            "t": 650.222
          },
          {
            "w": "items",
            "t": 650.621
          },
          {
            "w": "autonomously,",
            "t": 651.019
          },
          {
            "w": "and",
            "t": 651.418
          },
          {
            "w": "routed",
            "t": 651.817
          },
          {
            "w": "only",
            "t": 652.216
          },
          {
            "w": "the",
            "t": 652.615
          },
          {
            "w": "six",
            "t": 653.014
          },
          {
            "w": "percent",
            "t": 653.412
          },
          {
            "w": "difficult",
            "t": 653.811
          },
          {
            "w": "items",
            "t": 654.21
          },
          {
            "w": "to",
            "t": 654.609
          },
          {
            "w": "mobile",
            "t": 655.008
          },
          {
            "w": "phones",
            "t": 655.407
          },
          {
            "w": "of",
            "t": 655.805
          },
          {
            "w": "store",
            "t": 656.204
          },
          {
            "w": "employees",
            "t": 656.603
          },
          {
            "w": "who",
            "t": 657.002
          },
          {
            "w": "were",
            "t": 657.401
          },
          {
            "w": "already",
            "t": 657.8
          },
          {
            "w": "in",
            "t": 658.198
          },
          {
            "w": "the",
            "t": 658.597
          },
          {
            "w": "aisles!",
            "t": 658.996
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Dr. Nova",
        "text": "Precisely. They saved twenty-six million dollars while raising ground-truth inventory accuracy to ninety-nine point eight percent.",
        "start": 659.395,
        "end": 667.803,
        "words": [
          {
            "w": "Precisely.",
            "t": 659.395
          },
          {
            "w": "They",
            "t": 659.92
          },
          {
            "w": "saved",
            "t": 660.446
          },
          {
            "w": "twenty-six",
            "t": 660.971
          },
          {
            "w": "million",
            "t": 661.497
          },
          {
            "w": "dollars",
            "t": 662.023
          },
          {
            "w": "while",
            "t": 662.548
          },
          {
            "w": "raising",
            "t": 663.073
          },
          {
            "w": "ground-truth",
            "t": 663.599
          },
          {
            "w": "inventory",
            "t": 664.125
          },
          {
            "w": "accuracy",
            "t": 664.65
          },
          {
            "w": "to",
            "t": 665.175
          },
          {
            "w": "ninety-nine",
            "t": 665.701
          },
          {
            "w": "point",
            "t": 666.226
          },
          {
            "w": "eight",
            "t": 666.752
          },
          {
            "w": "percent.",
            "t": 667.278
          }
        ]
      },
      {
        "slide": 15,
        "slideId": "s15",
        "speaker": "Kaito",
        "text": "Dr. Nova, look at how concise this vectorized NumPy implementation is! A single line partitions all ten thousand records into automated acceptance and manual review queues.",
        "start": 667.803,
        "end": 678.928,
        "words": [
          {
            "w": "Dr.",
            "t": 667.803
          },
          {
            "w": "Nova,",
            "t": 668.231
          },
          {
            "w": "look",
            "t": 668.659
          },
          {
            "w": "at",
            "t": 669.087
          },
          {
            "w": "how",
            "t": 669.515
          },
          {
            "w": "concise",
            "t": 669.942
          },
          {
            "w": "this",
            "t": 670.37
          },
          {
            "w": "vectorized",
            "t": 670.798
          },
          {
            "w": "NumPy",
            "t": 671.226
          },
          {
            "w": "implementation",
            "t": 671.654
          },
          {
            "w": "is!",
            "t": 672.082
          },
          {
            "w": "A",
            "t": 672.51
          },
          {
            "w": "single",
            "t": 672.938
          },
          {
            "w": "line",
            "t": 673.365
          },
          {
            "w": "partitions",
            "t": 673.793
          },
          {
            "w": "all",
            "t": 674.221
          },
          {
            "w": "ten",
            "t": 674.649
          },
          {
            "w": "thousand",
            "t": 675.077
          },
          {
            "w": "records",
            "t": 675.505
          },
          {
            "w": "into",
            "t": 675.933
          },
          {
            "w": "automated",
            "t": 676.361
          },
          {
            "w": "acceptance",
            "t": 676.789
          },
          {
            "w": "and",
            "t": 677.216
          },
          {
            "w": "manual",
            "t": 677.644
          },
          {
            "w": "review",
            "t": 678.072
          },
          {
            "w": "queues.",
            "t": 678.5
          }
        ]
      },
      {
        "slide": 15,
        "slideId": "s15",
        "speaker": "Dr. Nova",
        "text": "Yes, Kaito! And notice the assertion on line twenty-four: assert savings_pct greater than seventy percent. In production dataset infrastructure, you should always assert both the mathematical correctness of your decision thresholds and the economic viability of your pipeline before ingesting live data.",
        "start": 678.928,
        "end": 698.526,
        "words": [
          {
            "w": "Yes,",
            "t": 678.928
          },
          {
            "w": "Kaito!",
            "t": 679.395
          },
          {
            "w": "And",
            "t": 679.861
          },
          {
            "w": "notice",
            "t": 680.328
          },
          {
            "w": "the",
            "t": 680.794
          },
          {
            "w": "assertion",
            "t": 681.261
          },
          {
            "w": "on",
            "t": 681.728
          },
          {
            "w": "line",
            "t": 682.194
          },
          {
            "w": "twenty-four:",
            "t": 682.661
          },
          {
            "w": "assert",
            "t": 683.128
          },
          {
            "w": "savings_pct",
            "t": 683.594
          },
          {
            "w": "greater",
            "t": 684.061
          },
          {
            "w": "than",
            "t": 684.527
          },
          {
            "w": "seventy",
            "t": 684.994
          },
          {
            "w": "percent.",
            "t": 685.461
          },
          {
            "w": "In",
            "t": 685.927
          },
          {
            "w": "production",
            "t": 686.394
          },
          {
            "w": "dataset",
            "t": 686.861
          },
          {
            "w": "infrastructure,",
            "t": 687.327
          },
          {
            "w": "you",
            "t": 687.794
          },
          {
            "w": "should",
            "t": 688.26
          },
          {
            "w": "always",
            "t": 688.727
          },
          {
            "w": "assert",
            "t": 689.194
          },
          {
            "w": "both",
            "t": 689.66
          },
          {
            "w": "the",
            "t": 690.127
          },
          {
            "w": "mathematical",
            "t": 690.593
          },
          {
            "w": "correctness",
            "t": 691.06
          },
          {
            "w": "of",
            "t": 691.527
          },
          {
            "w": "your",
            "t": 691.993
          },
          {
            "w": "decision",
            "t": 692.46
          },
          {
            "w": "thresholds",
            "t": 692.927
          },
          {
            "w": "and",
            "t": 693.393
          },
          {
            "w": "the",
            "t": 693.86
          },
          {
            "w": "economic",
            "t": 694.326
          },
          {
            "w": "viability",
            "t": 694.793
          },
          {
            "w": "of",
            "t": 695.26
          },
          {
            "w": "your",
            "t": 695.726
          },
          {
            "w": "pipeline",
            "t": 696.193
          },
          {
            "w": "before",
            "t": 696.66
          },
          {
            "w": "ingesting",
            "t": 697.126
          },
          {
            "w": "live",
            "t": 697.593
          },
          {
            "w": "data.",
            "t": 698.059
          }
        ]
      },
      {
        "slide": 16,
        "slideId": "s16",
        "speaker": "Kaito",
        "text": "What an incredible masterclass, Dr. Nova! I used to think data ingestion was either all human manual work or completely autonomous. Now I see that hybrid Human-in-the-Loop engineering delivers the throughput of machines with the semantic safety of human cognition.",
        "start": 698.526,
        "end": 715.601,
        "words": [
          {
            "w": "What",
            "t": 698.526
          },
          {
            "w": "an",
            "t": 698.953
          },
          {
            "w": "incredible",
            "t": 699.38
          },
          {
            "w": "masterclass,",
            "t": 699.807
          },
          {
            "w": "Dr.",
            "t": 700.233
          },
          {
            "w": "Nova!",
            "t": 700.66
          },
          {
            "w": "I",
            "t": 701.087
          },
          {
            "w": "used",
            "t": 701.514
          },
          {
            "w": "to",
            "t": 701.941
          },
          {
            "w": "think",
            "t": 702.368
          },
          {
            "w": "data",
            "t": 702.795
          },
          {
            "w": "ingestion",
            "t": 703.222
          },
          {
            "w": "was",
            "t": 703.649
          },
          {
            "w": "either",
            "t": 704.075
          },
          {
            "w": "all",
            "t": 704.502
          },
          {
            "w": "human",
            "t": 704.929
          },
          {
            "w": "manual",
            "t": 705.356
          },
          {
            "w": "work",
            "t": 705.783
          },
          {
            "w": "or",
            "t": 706.21
          },
          {
            "w": "completely",
            "t": 706.637
          },
          {
            "w": "autonomous.",
            "t": 707.063
          },
          {
            "w": "Now",
            "t": 707.49
          },
          {
            "w": "I",
            "t": 707.917
          },
          {
            "w": "see",
            "t": 708.344
          },
          {
            "w": "that",
            "t": 708.771
          },
          {
            "w": "hybrid",
            "t": 709.198
          },
          {
            "w": "Human-in-the-Loop",
            "t": 709.625
          },
          {
            "w": "engineering",
            "t": 710.052
          },
          {
            "w": "delivers",
            "t": 710.478
          },
          {
            "w": "the",
            "t": 710.905
          },
          {
            "w": "throughput",
            "t": 711.332
          },
          {
            "w": "of",
            "t": 711.759
          },
          {
            "w": "machines",
            "t": 712.186
          },
          {
            "w": "with",
            "t": 712.613
          },
          {
            "w": "the",
            "t": 713.04
          },
          {
            "w": "semantic",
            "t": 713.467
          },
          {
            "w": "safety",
            "t": 713.894
          },
          {
            "w": "of",
            "t": 714.32
          },
          {
            "w": "human",
            "t": 714.747
          },
          {
            "w": "cognition.",
            "t": 715.174
          }
        ]
      },
      {
        "slide": 16,
        "slideId": "s16",
        "speaker": "Dr. Nova",
        "text": "And by grounding that architecture in the calculus of tau-star equals C-m over L-error, Weibull fatigue limits, and Fleiss' Kappa consensus, your pipelines become mathematically resilient. Excellent work, Kaito! In Lesson 2.6, we will explore Probability Sampling Theory.",
        "start": 715.601,
        "end": 733.128,
        "words": [
          {
            "w": "And",
            "t": 715.601
          },
          {
            "w": "by",
            "t": 716.062
          },
          {
            "w": "grounding",
            "t": 716.523
          },
          {
            "w": "that",
            "t": 716.985
          },
          {
            "w": "architecture",
            "t": 717.446
          },
          {
            "w": "in",
            "t": 717.907
          },
          {
            "w": "the",
            "t": 718.368
          },
          {
            "w": "calculus",
            "t": 718.83
          },
          {
            "w": "of",
            "t": 719.291
          },
          {
            "w": "tau-star",
            "t": 719.752
          },
          {
            "w": "equals",
            "t": 720.213
          },
          {
            "w": "C-m",
            "t": 720.675
          },
          {
            "w": "over",
            "t": 721.136
          },
          {
            "w": "L-error,",
            "t": 721.597
          },
          {
            "w": "Weibull",
            "t": 722.058
          },
          {
            "w": "fatigue",
            "t": 722.52
          },
          {
            "w": "limits,",
            "t": 722.981
          },
          {
            "w": "and",
            "t": 723.442
          },
          {
            "w": "Fleiss'",
            "t": 723.903
          },
          {
            "w": "Kappa",
            "t": 724.365
          },
          {
            "w": "consensus,",
            "t": 724.826
          },
          {
            "w": "your",
            "t": 725.287
          },
          {
            "w": "pipelines",
            "t": 725.748
          },
          {
            "w": "become",
            "t": 726.209
          },
          {
            "w": "mathematically",
            "t": 726.671
          },
          {
            "w": "resilient.",
            "t": 727.132
          },
          {
            "w": "Excellent",
            "t": 727.593
          },
          {
            "w": "work,",
            "t": 728.054
          },
          {
            "w": "Kaito!",
            "t": 728.516
          },
          {
            "w": "In",
            "t": 728.977
          },
          {
            "w": "Lesson",
            "t": 729.438
          },
          {
            "w": "2.6,",
            "t": 729.899
          },
          {
            "w": "we",
            "t": 730.361
          },
          {
            "w": "will",
            "t": 730.822
          },
          {
            "w": "explore",
            "t": 731.283
          },
          {
            "w": "Probability",
            "t": 731.744
          },
          {
            "w": "Sampling",
            "t": 732.206
          },
          {
            "w": "Theory.",
            "t": 732.667
          }
        ]
      }
    ]
  },
  "ch6_p1_solo": {
    "duration": 723.028,
    "sentences": [
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Dr. Nova",
        "text": "Welcome to Track 6, Lesson 6.1 of Dataset Fundamentals: Introduction to Exploratory Data Analysis, Foundations, Epistemology, and Residual Auditing. While earlier tracks established data collection, governance, and annotation, Track 6 addresses the foundational detective work of empirical science: unlocking the true geometry, distributional structure, and hidden pathologies of raw data before any model is trained.",
        "start": 0.0,
        "end": 27.36,
        "words": [
          {
            "w": "Welcome",
            "t": 0.0
          },
          {
            "w": "to",
            "t": 0.497
          },
          {
            "w": "Track",
            "t": 0.995
          },
          {
            "w": "6,",
            "t": 1.492
          },
          {
            "w": "Lesson",
            "t": 1.99
          },
          {
            "w": "6.1",
            "t": 2.487
          },
          {
            "w": "of",
            "t": 2.985
          },
          {
            "w": "Dataset",
            "t": 3.482
          },
          {
            "w": "Fundamentals:",
            "t": 3.98
          },
          {
            "w": "Introduction",
            "t": 4.477
          },
          {
            "w": "to",
            "t": 4.975
          },
          {
            "w": "Exploratory",
            "t": 5.472
          },
          {
            "w": "Data",
            "t": 5.969
          },
          {
            "w": "Analysis,",
            "t": 6.467
          },
          {
            "w": "Foundations,",
            "t": 6.964
          },
          {
            "w": "Epistemology,",
            "t": 7.462
          },
          {
            "w": "and",
            "t": 7.959
          },
          {
            "w": "Residual",
            "t": 8.457
          },
          {
            "w": "Auditing.",
            "t": 8.954
          },
          {
            "w": "While",
            "t": 9.452
          },
          {
            "w": "earlier",
            "t": 9.949
          },
          {
            "w": "tracks",
            "t": 10.447
          },
          {
            "w": "established",
            "t": 10.944
          },
          {
            "w": "data",
            "t": 11.441
          },
          {
            "w": "collection,",
            "t": 11.939
          },
          {
            "w": "governance,",
            "t": 12.436
          },
          {
            "w": "and",
            "t": 12.934
          },
          {
            "w": "annotation,",
            "t": 13.431
          },
          {
            "w": "Track",
            "t": 13.929
          },
          {
            "w": "6",
            "t": 14.426
          },
          {
            "w": "addresses",
            "t": 14.924
          },
          {
            "w": "the",
            "t": 15.421
          },
          {
            "w": "foundational",
            "t": 15.919
          },
          {
            "w": "detective",
            "t": 16.416
          },
          {
            "w": "work",
            "t": 16.913
          },
          {
            "w": "of",
            "t": 17.411
          },
          {
            "w": "empirical",
            "t": 17.908
          },
          {
            "w": "science:",
            "t": 18.406
          },
          {
            "w": "unlocking",
            "t": 18.903
          },
          {
            "w": "the",
            "t": 19.401
          },
          {
            "w": "true",
            "t": 19.898
          },
          {
            "w": "geometry,",
            "t": 20.396
          },
          {
            "w": "distributional",
            "t": 20.893
          },
          {
            "w": "structure,",
            "t": 21.391
          },
          {
            "w": "and",
            "t": 21.888
          },
          {
            "w": "hidden",
            "t": 22.385
          },
          {
            "w": "pathologies",
            "t": 22.883
          },
          {
            "w": "of",
            "t": 23.38
          },
          {
            "w": "raw",
            "t": 23.878
          },
          {
            "w": "data",
            "t": 24.375
          },
          {
            "w": "before",
            "t": 24.873
          },
          {
            "w": "any",
            "t": 25.37
          },
          {
            "w": "model",
            "t": 25.868
          },
          {
            "w": "is",
            "t": 26.365
          },
          {
            "w": "trained.",
            "t": 26.863
          }
        ]
      },
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Dr. Nova",
        "text": "Pioneered by John Tukey, exploratory analysis is the rigorous antidote to premature modeling. Today, we formalize the mathematical divide between exploratory discovery and confirmatory testing, derive Tukey's additive decomposition Data equals Fit plus Residual, prove the breakdown point advantage of Theil-Sen regression over ordinary least squares, examine Anscombe's quartet, and establish production diagnostic profilers verified under Pydantic V2.",
        "start": 27.71,
        "end": 56.15,
        "words": [
          {
            "w": "Pioneered",
            "t": 27.71
          },
          {
            "w": "by",
            "t": 28.2
          },
          {
            "w": "John",
            "t": 28.691
          },
          {
            "w": "Tukey,",
            "t": 29.181
          },
          {
            "w": "exploratory",
            "t": 29.671
          },
          {
            "w": "analysis",
            "t": 30.162
          },
          {
            "w": "is",
            "t": 30.652
          },
          {
            "w": "the",
            "t": 31.142
          },
          {
            "w": "rigorous",
            "t": 31.633
          },
          {
            "w": "antidote",
            "t": 32.123
          },
          {
            "w": "to",
            "t": 32.613
          },
          {
            "w": "premature",
            "t": 33.104
          },
          {
            "w": "modeling.",
            "t": 33.594
          },
          {
            "w": "Today,",
            "t": 34.084
          },
          {
            "w": "we",
            "t": 34.575
          },
          {
            "w": "formalize",
            "t": 35.065
          },
          {
            "w": "the",
            "t": 35.556
          },
          {
            "w": "mathematical",
            "t": 36.046
          },
          {
            "w": "divide",
            "t": 36.536
          },
          {
            "w": "between",
            "t": 37.027
          },
          {
            "w": "exploratory",
            "t": 37.517
          },
          {
            "w": "discovery",
            "t": 38.007
          },
          {
            "w": "and",
            "t": 38.498
          },
          {
            "w": "confirmatory",
            "t": 38.988
          },
          {
            "w": "testing,",
            "t": 39.478
          },
          {
            "w": "derive",
            "t": 39.969
          },
          {
            "w": "Tukey's",
            "t": 40.459
          },
          {
            "w": "additive",
            "t": 40.949
          },
          {
            "w": "decomposition",
            "t": 41.44
          },
          {
            "w": "Data",
            "t": 41.93
          },
          {
            "w": "equals",
            "t": 42.42
          },
          {
            "w": "Fit",
            "t": 42.911
          },
          {
            "w": "plus",
            "t": 43.401
          },
          {
            "w": "Residual,",
            "t": 43.891
          },
          {
            "w": "prove",
            "t": 44.382
          },
          {
            "w": "the",
            "t": 44.872
          },
          {
            "w": "breakdown",
            "t": 45.362
          },
          {
            "w": "point",
            "t": 45.853
          },
          {
            "w": "advantage",
            "t": 46.343
          },
          {
            "w": "of",
            "t": 46.833
          },
          {
            "w": "Theil-Sen",
            "t": 47.324
          },
          {
            "w": "regression",
            "t": 47.814
          },
          {
            "w": "over",
            "t": 48.304
          },
          {
            "w": "ordinary",
            "t": 48.795
          },
          {
            "w": "least",
            "t": 49.285
          },
          {
            "w": "squares,",
            "t": 49.776
          },
          {
            "w": "examine",
            "t": 50.266
          },
          {
            "w": "Anscombe's",
            "t": 50.756
          },
          {
            "w": "quartet,",
            "t": 51.247
          },
          {
            "w": "and",
            "t": 51.737
          },
          {
            "w": "establish",
            "t": 52.227
          },
          {
            "w": "production",
            "t": 52.718
          },
          {
            "w": "diagnostic",
            "t": 53.208
          },
          {
            "w": "profilers",
            "t": 53.698
          },
          {
            "w": "verified",
            "t": 54.189
          },
          {
            "w": "under",
            "t": 54.679
          },
          {
            "w": "Pydantic",
            "t": 55.169
          },
          {
            "w": "V2.",
            "t": 55.66
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Dr. Nova",
        "text": "In his seminal 1977 treatise, John Tukey established the essential metaphor of statistical science: Exploratory Data Analysis acts as the detective, gathering clues and exposing latent structure without prejudice, while Confirmatory Data Analysis acts as the judge, delivering a formal verdict based on strict pre-registered evidentiary standards.",
        "start": 56.9,
        "end": 78.884,
        "words": [
          {
            "w": "In",
            "t": 56.9
          },
          {
            "w": "his",
            "t": 57.368
          },
          {
            "w": "seminal",
            "t": 57.835
          },
          {
            "w": "1977",
            "t": 58.303
          },
          {
            "w": "treatise,",
            "t": 58.771
          },
          {
            "w": "John",
            "t": 59.239
          },
          {
            "w": "Tukey",
            "t": 59.706
          },
          {
            "w": "established",
            "t": 60.174
          },
          {
            "w": "the",
            "t": 60.642
          },
          {
            "w": "essential",
            "t": 61.11
          },
          {
            "w": "metaphor",
            "t": 61.577
          },
          {
            "w": "of",
            "t": 62.045
          },
          {
            "w": "statistical",
            "t": 62.513
          },
          {
            "w": "science:",
            "t": 62.981
          },
          {
            "w": "Exploratory",
            "t": 63.448
          },
          {
            "w": "Data",
            "t": 63.916
          },
          {
            "w": "Analysis",
            "t": 64.384
          },
          {
            "w": "acts",
            "t": 64.852
          },
          {
            "w": "as",
            "t": 65.319
          },
          {
            "w": "the",
            "t": 65.787
          },
          {
            "w": "detective,",
            "t": 66.255
          },
          {
            "w": "gathering",
            "t": 66.723
          },
          {
            "w": "clues",
            "t": 67.19
          },
          {
            "w": "and",
            "t": 67.658
          },
          {
            "w": "exposing",
            "t": 68.126
          },
          {
            "w": "latent",
            "t": 68.594
          },
          {
            "w": "structure",
            "t": 69.061
          },
          {
            "w": "without",
            "t": 69.529
          },
          {
            "w": "prejudice,",
            "t": 69.997
          },
          {
            "w": "while",
            "t": 70.465
          },
          {
            "w": "Confirmatory",
            "t": 70.932
          },
          {
            "w": "Data",
            "t": 71.4
          },
          {
            "w": "Analysis",
            "t": 71.868
          },
          {
            "w": "acts",
            "t": 72.336
          },
          {
            "w": "as",
            "t": 72.803
          },
          {
            "w": "the",
            "t": 73.271
          },
          {
            "w": "judge,",
            "t": 73.739
          },
          {
            "w": "delivering",
            "t": 74.207
          },
          {
            "w": "a",
            "t": 74.674
          },
          {
            "w": "formal",
            "t": 75.142
          },
          {
            "w": "verdict",
            "t": 75.61
          },
          {
            "w": "based",
            "t": 76.078
          },
          {
            "w": "on",
            "t": 76.545
          },
          {
            "w": "strict",
            "t": 77.013
          },
          {
            "w": "pre-registered",
            "t": 77.481
          },
          {
            "w": "evidentiary",
            "t": 77.949
          },
          {
            "w": "standards.",
            "t": 78.416
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Dr. Nova",
        "text": "When you skip the detective work and proceed directly to trial, you commit what David Donoho calls the fundamental error of post-selection inference. EDA prioritizes graphical perception, resistant order statistics, and residual diagnostics to formulate testable invariants. Only once invariants are discovered can confirmatory analysis rigorously evaluate hypothesis significance.",
        "start": 79.234,
        "end": 103.282,
        "words": [
          {
            "w": "When",
            "t": 79.234
          },
          {
            "w": "you",
            "t": 79.725
          },
          {
            "w": "skip",
            "t": 80.216
          },
          {
            "w": "the",
            "t": 80.706
          },
          {
            "w": "detective",
            "t": 81.197
          },
          {
            "w": "work",
            "t": 81.688
          },
          {
            "w": "and",
            "t": 82.179
          },
          {
            "w": "proceed",
            "t": 82.669
          },
          {
            "w": "directly",
            "t": 83.16
          },
          {
            "w": "to",
            "t": 83.651
          },
          {
            "w": "trial,",
            "t": 84.142
          },
          {
            "w": "you",
            "t": 84.633
          },
          {
            "w": "commit",
            "t": 85.123
          },
          {
            "w": "what",
            "t": 85.614
          },
          {
            "w": "David",
            "t": 86.105
          },
          {
            "w": "Donoho",
            "t": 86.596
          },
          {
            "w": "calls",
            "t": 87.086
          },
          {
            "w": "the",
            "t": 87.577
          },
          {
            "w": "fundamental",
            "t": 88.068
          },
          {
            "w": "error",
            "t": 88.559
          },
          {
            "w": "of",
            "t": 89.05
          },
          {
            "w": "post-selection",
            "t": 89.54
          },
          {
            "w": "inference.",
            "t": 90.031
          },
          {
            "w": "EDA",
            "t": 90.522
          },
          {
            "w": "prioritizes",
            "t": 91.013
          },
          {
            "w": "graphical",
            "t": 91.503
          },
          {
            "w": "perception,",
            "t": 91.994
          },
          {
            "w": "resistant",
            "t": 92.485
          },
          {
            "w": "order",
            "t": 92.976
          },
          {
            "w": "statistics,",
            "t": 93.466
          },
          {
            "w": "and",
            "t": 93.957
          },
          {
            "w": "residual",
            "t": 94.448
          },
          {
            "w": "diagnostics",
            "t": 94.939
          },
          {
            "w": "to",
            "t": 95.43
          },
          {
            "w": "formulate",
            "t": 95.92
          },
          {
            "w": "testable",
            "t": 96.411
          },
          {
            "w": "invariants.",
            "t": 96.902
          },
          {
            "w": "Only",
            "t": 97.393
          },
          {
            "w": "once",
            "t": 97.883
          },
          {
            "w": "invariants",
            "t": 98.374
          },
          {
            "w": "are",
            "t": 98.865
          },
          {
            "w": "discovered",
            "t": 99.356
          },
          {
            "w": "can",
            "t": 99.847
          },
          {
            "w": "confirmatory",
            "t": 100.337
          },
          {
            "w": "analysis",
            "t": 100.828
          },
          {
            "w": "rigorously",
            "t": 101.319
          },
          {
            "w": "evaluate",
            "t": 101.81
          },
          {
            "w": "hypothesis",
            "t": 102.3
          },
          {
            "w": "significance.",
            "t": 102.791
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Dr. Nova",
        "text": "To systematically contrast these paradigms, examine Table 6.1. EDA asks: what patterns, mechanisms, and physical laws operate in this dataset? In contrast, CDA asks: does the empirical evidence allow us to reject our pre-specified null hypothesis?",
        "start": 104.032,
        "end": 122.68,
        "words": [
          {
            "w": "To",
            "t": 104.032
          },
          {
            "w": "systematically",
            "t": 104.55
          },
          {
            "w": "contrast",
            "t": 105.068
          },
          {
            "w": "these",
            "t": 105.586
          },
          {
            "w": "paradigms,",
            "t": 106.104
          },
          {
            "w": "examine",
            "t": 106.622
          },
          {
            "w": "Table",
            "t": 107.14
          },
          {
            "w": "6.1.",
            "t": 107.658
          },
          {
            "w": "EDA",
            "t": 108.176
          },
          {
            "w": "asks:",
            "t": 108.694
          },
          {
            "w": "what",
            "t": 109.212
          },
          {
            "w": "patterns,",
            "t": 109.73
          },
          {
            "w": "mechanisms,",
            "t": 110.248
          },
          {
            "w": "and",
            "t": 110.766
          },
          {
            "w": "physical",
            "t": 111.284
          },
          {
            "w": "laws",
            "t": 111.802
          },
          {
            "w": "operate",
            "t": 112.32
          },
          {
            "w": "in",
            "t": 112.838
          },
          {
            "w": "this",
            "t": 113.356
          },
          {
            "w": "dataset?",
            "t": 113.874
          },
          {
            "w": "In",
            "t": 114.392
          },
          {
            "w": "contrast,",
            "t": 114.91
          },
          {
            "w": "CDA",
            "t": 115.428
          },
          {
            "w": "asks:",
            "t": 115.946
          },
          {
            "w": "does",
            "t": 116.464
          },
          {
            "w": "the",
            "t": 116.982
          },
          {
            "w": "empirical",
            "t": 117.5
          },
          {
            "w": "evidence",
            "t": 118.018
          },
          {
            "w": "allow",
            "t": 118.536
          },
          {
            "w": "us",
            "t": 119.054
          },
          {
            "w": "to",
            "t": 119.572
          },
          {
            "w": "reject",
            "t": 120.09
          },
          {
            "w": "our",
            "t": 120.608
          },
          {
            "w": "pre-specified",
            "t": 121.126
          },
          {
            "w": "null",
            "t": 121.644
          },
          {
            "w": "hypothesis?",
            "t": 122.162
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Dr. Nova",
        "text": "Notice the mathematical mindset: EDA relies on non-parametric, high breakdown-point order statistics like median and median absolute deviation, resisting data corruption. CDA relies on parametric likelihoods and asymptotic standard errors. The chief risk of EDA is apophenia—hallucinating noise as genuine signal—while the risk of CDA is mis-specification error.",
        "start": 123.03,
        "end": 147.534,
        "words": [
          {
            "w": "Notice",
            "t": 123.03
          },
          {
            "w": "the",
            "t": 123.54
          },
          {
            "w": "mathematical",
            "t": 124.051
          },
          {
            "w": "mindset:",
            "t": 124.561
          },
          {
            "w": "EDA",
            "t": 125.072
          },
          {
            "w": "relies",
            "t": 125.582
          },
          {
            "w": "on",
            "t": 126.093
          },
          {
            "w": "non-parametric,",
            "t": 126.603
          },
          {
            "w": "high",
            "t": 127.114
          },
          {
            "w": "breakdown-point",
            "t": 127.624
          },
          {
            "w": "order",
            "t": 128.135
          },
          {
            "w": "statistics",
            "t": 128.645
          },
          {
            "w": "like",
            "t": 129.156
          },
          {
            "w": "median",
            "t": 129.667
          },
          {
            "w": "and",
            "t": 130.177
          },
          {
            "w": "median",
            "t": 130.688
          },
          {
            "w": "absolute",
            "t": 131.198
          },
          {
            "w": "deviation,",
            "t": 131.709
          },
          {
            "w": "resisting",
            "t": 132.219
          },
          {
            "w": "data",
            "t": 132.73
          },
          {
            "w": "corruption.",
            "t": 133.24
          },
          {
            "w": "CDA",
            "t": 133.75
          },
          {
            "w": "relies",
            "t": 134.261
          },
          {
            "w": "on",
            "t": 134.772
          },
          {
            "w": "parametric",
            "t": 135.282
          },
          {
            "w": "likelihoods",
            "t": 135.792
          },
          {
            "w": "and",
            "t": 136.303
          },
          {
            "w": "asymptotic",
            "t": 136.814
          },
          {
            "w": "standard",
            "t": 137.324
          },
          {
            "w": "errors.",
            "t": 137.834
          },
          {
            "w": "The",
            "t": 138.345
          },
          {
            "w": "chief",
            "t": 138.856
          },
          {
            "w": "risk",
            "t": 139.366
          },
          {
            "w": "of",
            "t": 139.876
          },
          {
            "w": "EDA",
            "t": 140.387
          },
          {
            "w": "is",
            "t": 140.898
          },
          {
            "w": "apophenia—hallucinating",
            "t": 141.408
          },
          {
            "w": "noise",
            "t": 141.918
          },
          {
            "w": "as",
            "t": 142.429
          },
          {
            "w": "genuine",
            "t": 142.94
          },
          {
            "w": "signal—while",
            "t": 143.45
          },
          {
            "w": "the",
            "t": 143.96
          },
          {
            "w": "risk",
            "t": 144.471
          },
          {
            "w": "of",
            "t": 144.982
          },
          {
            "w": "CDA",
            "t": 145.492
          },
          {
            "w": "is",
            "t": 146.002
          },
          {
            "w": "mis-specification",
            "t": 146.513
          },
          {
            "w": "error.",
            "t": 147.024
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Dr. Nova",
        "text": "The single mathematical equation that unifies all exploratory data analysis is John Tukey's additive identity: Data equals Fit plus Residual. In vector notation, y equals y-hat plus e.",
        "start": 148.284,
        "end": 161.268,
        "words": [
          {
            "w": "The",
            "t": 148.284
          },
          {
            "w": "single",
            "t": 148.748
          },
          {
            "w": "mathematical",
            "t": 149.211
          },
          {
            "w": "equation",
            "t": 149.675
          },
          {
            "w": "that",
            "t": 150.139
          },
          {
            "w": "unifies",
            "t": 150.603
          },
          {
            "w": "all",
            "t": 151.066
          },
          {
            "w": "exploratory",
            "t": 151.53
          },
          {
            "w": "data",
            "t": 151.994
          },
          {
            "w": "analysis",
            "t": 152.457
          },
          {
            "w": "is",
            "t": 152.921
          },
          {
            "w": "John",
            "t": 153.385
          },
          {
            "w": "Tukey's",
            "t": 153.849
          },
          {
            "w": "additive",
            "t": 154.312
          },
          {
            "w": "identity:",
            "t": 154.776
          },
          {
            "w": "Data",
            "t": 155.24
          },
          {
            "w": "equals",
            "t": 155.703
          },
          {
            "w": "Fit",
            "t": 156.167
          },
          {
            "w": "plus",
            "t": 156.631
          },
          {
            "w": "Residual.",
            "t": 157.095
          },
          {
            "w": "In",
            "t": 157.558
          },
          {
            "w": "vector",
            "t": 158.022
          },
          {
            "w": "notation,",
            "t": 158.486
          },
          {
            "w": "y",
            "t": 158.949
          },
          {
            "w": "equals",
            "t": 159.413
          },
          {
            "w": "y-hat",
            "t": 159.877
          },
          {
            "w": "plus",
            "t": 160.341
          },
          {
            "w": "e.",
            "t": 160.804
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Dr. Nova",
        "text": "Here, y-hat is the smooth, low-dimensional structured signal—the 'fit'—such as a median polish, regression spline, or cluster prototype. The residual vector e represents the roughness: measurement noise, sensor discrepancy, and unmodeled anomalies. The goal of EDA is not merely fitting y-hat, but rigorously auditing the residual vector e to determine whether it is pure white noise.",
        "start": 161.618,
        "end": 186.17,
        "words": [
          {
            "w": "Here,",
            "t": 161.618
          },
          {
            "w": "y-hat",
            "t": 162.056
          },
          {
            "w": "is",
            "t": 162.495
          },
          {
            "w": "the",
            "t": 162.933
          },
          {
            "w": "smooth,",
            "t": 163.372
          },
          {
            "w": "low-dimensional",
            "t": 163.81
          },
          {
            "w": "structured",
            "t": 164.249
          },
          {
            "w": "signal—the",
            "t": 164.687
          },
          {
            "w": "'fit'—such",
            "t": 165.125
          },
          {
            "w": "as",
            "t": 165.564
          },
          {
            "w": "a",
            "t": 166.002
          },
          {
            "w": "median",
            "t": 166.441
          },
          {
            "w": "polish,",
            "t": 166.879
          },
          {
            "w": "regression",
            "t": 167.318
          },
          {
            "w": "spline,",
            "t": 167.756
          },
          {
            "w": "or",
            "t": 168.194
          },
          {
            "w": "cluster",
            "t": 168.633
          },
          {
            "w": "prototype.",
            "t": 169.071
          },
          {
            "w": "The",
            "t": 169.51
          },
          {
            "w": "residual",
            "t": 169.948
          },
          {
            "w": "vector",
            "t": 170.387
          },
          {
            "w": "e",
            "t": 170.825
          },
          {
            "w": "represents",
            "t": 171.263
          },
          {
            "w": "the",
            "t": 171.702
          },
          {
            "w": "roughness:",
            "t": 172.14
          },
          {
            "w": "measurement",
            "t": 172.579
          },
          {
            "w": "noise,",
            "t": 173.017
          },
          {
            "w": "sensor",
            "t": 173.456
          },
          {
            "w": "discrepancy,",
            "t": 173.894
          },
          {
            "w": "and",
            "t": 174.332
          },
          {
            "w": "unmodeled",
            "t": 174.771
          },
          {
            "w": "anomalies.",
            "t": 175.209
          },
          {
            "w": "The",
            "t": 175.648
          },
          {
            "w": "goal",
            "t": 176.086
          },
          {
            "w": "of",
            "t": 176.525
          },
          {
            "w": "EDA",
            "t": 176.963
          },
          {
            "w": "is",
            "t": 177.401
          },
          {
            "w": "not",
            "t": 177.84
          },
          {
            "w": "merely",
            "t": 178.278
          },
          {
            "w": "fitting",
            "t": 178.717
          },
          {
            "w": "y-hat,",
            "t": 179.155
          },
          {
            "w": "but",
            "t": 179.594
          },
          {
            "w": "rigorously",
            "t": 180.032
          },
          {
            "w": "auditing",
            "t": 180.47
          },
          {
            "w": "the",
            "t": 180.909
          },
          {
            "w": "residual",
            "t": 181.347
          },
          {
            "w": "vector",
            "t": 181.786
          },
          {
            "w": "e",
            "t": 182.224
          },
          {
            "w": "to",
            "t": 182.663
          },
          {
            "w": "determine",
            "t": 183.101
          },
          {
            "w": "whether",
            "t": 183.539
          },
          {
            "w": "it",
            "t": 183.978
          },
          {
            "w": "is",
            "t": 184.416
          },
          {
            "w": "pure",
            "t": 184.855
          },
          {
            "w": "white",
            "t": 185.293
          },
          {
            "w": "noise.",
            "t": 185.732
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Dr. Nova",
        "text": "When auditing the residual vector e, an exploratory engineer looks for four distinct geometric signatures. In an optimal model, residuals are homoscedastic white noise: independent, identically distributed zero-mean Gaussian fluctuations with constant variance across the entire domain.",
        "start": 186.92,
        "end": 204.92,
        "words": [
          {
            "w": "When",
            "t": 186.92
          },
          {
            "w": "auditing",
            "t": 187.406
          },
          {
            "w": "the",
            "t": 187.893
          },
          {
            "w": "residual",
            "t": 188.379
          },
          {
            "w": "vector",
            "t": 188.866
          },
          {
            "w": "e,",
            "t": 189.352
          },
          {
            "w": "an",
            "t": 189.839
          },
          {
            "w": "exploratory",
            "t": 190.325
          },
          {
            "w": "engineer",
            "t": 190.812
          },
          {
            "w": "looks",
            "t": 191.298
          },
          {
            "w": "for",
            "t": 191.785
          },
          {
            "w": "four",
            "t": 192.271
          },
          {
            "w": "distinct",
            "t": 192.758
          },
          {
            "w": "geometric",
            "t": 193.244
          },
          {
            "w": "signatures.",
            "t": 193.731
          },
          {
            "w": "In",
            "t": 194.217
          },
          {
            "w": "an",
            "t": 194.704
          },
          {
            "w": "optimal",
            "t": 195.19
          },
          {
            "w": "model,",
            "t": 195.677
          },
          {
            "w": "residuals",
            "t": 196.163
          },
          {
            "w": "are",
            "t": 196.65
          },
          {
            "w": "homoscedastic",
            "t": 197.136
          },
          {
            "w": "white",
            "t": 197.623
          },
          {
            "w": "noise:",
            "t": 198.109
          },
          {
            "w": "independent,",
            "t": 198.596
          },
          {
            "w": "identically",
            "t": 199.082
          },
          {
            "w": "distributed",
            "t": 199.569
          },
          {
            "w": "zero-mean",
            "t": 200.055
          },
          {
            "w": "Gaussian",
            "t": 200.542
          },
          {
            "w": "fluctuations",
            "t": 201.028
          },
          {
            "w": "with",
            "t": 201.515
          },
          {
            "w": "constant",
            "t": 202.001
          },
          {
            "w": "variance",
            "t": 202.488
          },
          {
            "w": "across",
            "t": 202.974
          },
          {
            "w": "the",
            "t": 203.461
          },
          {
            "w": "entire",
            "t": 203.947
          },
          {
            "w": "domain.",
            "t": 204.434
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Dr. Nova",
        "text": "If residuals display a U-shape, the model has omitted non-linear polynomial or interaction terms. If residuals form an expanding funnel, the variance scales with the magnitude of y, demanding a logarithmic or Box-Cox power transform. And if the residual histogram shows twin peaks, an omitted categorical confounder has split the dataset into two unmodeled regimes.",
        "start": 205.27,
        "end": 228.382,
        "words": [
          {
            "w": "If",
            "t": 205.27
          },
          {
            "w": "residuals",
            "t": 205.69
          },
          {
            "w": "display",
            "t": 206.11
          },
          {
            "w": "a",
            "t": 206.531
          },
          {
            "w": "U-shape,",
            "t": 206.951
          },
          {
            "w": "the",
            "t": 207.371
          },
          {
            "w": "model",
            "t": 207.791
          },
          {
            "w": "has",
            "t": 208.212
          },
          {
            "w": "omitted",
            "t": 208.632
          },
          {
            "w": "non-linear",
            "t": 209.052
          },
          {
            "w": "polynomial",
            "t": 209.472
          },
          {
            "w": "or",
            "t": 209.892
          },
          {
            "w": "interaction",
            "t": 210.313
          },
          {
            "w": "terms.",
            "t": 210.733
          },
          {
            "w": "If",
            "t": 211.153
          },
          {
            "w": "residuals",
            "t": 211.573
          },
          {
            "w": "form",
            "t": 211.993
          },
          {
            "w": "an",
            "t": 212.414
          },
          {
            "w": "expanding",
            "t": 212.834
          },
          {
            "w": "funnel,",
            "t": 213.254
          },
          {
            "w": "the",
            "t": 213.674
          },
          {
            "w": "variance",
            "t": 214.095
          },
          {
            "w": "scales",
            "t": 214.515
          },
          {
            "w": "with",
            "t": 214.935
          },
          {
            "w": "the",
            "t": 215.355
          },
          {
            "w": "magnitude",
            "t": 215.775
          },
          {
            "w": "of",
            "t": 216.196
          },
          {
            "w": "y,",
            "t": 216.616
          },
          {
            "w": "demanding",
            "t": 217.036
          },
          {
            "w": "a",
            "t": 217.456
          },
          {
            "w": "logarithmic",
            "t": 217.877
          },
          {
            "w": "or",
            "t": 218.297
          },
          {
            "w": "Box-Cox",
            "t": 218.717
          },
          {
            "w": "power",
            "t": 219.137
          },
          {
            "w": "transform.",
            "t": 219.557
          },
          {
            "w": "And",
            "t": 219.978
          },
          {
            "w": "if",
            "t": 220.398
          },
          {
            "w": "the",
            "t": 220.818
          },
          {
            "w": "residual",
            "t": 221.238
          },
          {
            "w": "histogram",
            "t": 221.659
          },
          {
            "w": "shows",
            "t": 222.079
          },
          {
            "w": "twin",
            "t": 222.499
          },
          {
            "w": "peaks,",
            "t": 222.919
          },
          {
            "w": "an",
            "t": 223.339
          },
          {
            "w": "omitted",
            "t": 223.76
          },
          {
            "w": "categorical",
            "t": 224.18
          },
          {
            "w": "confounder",
            "t": 224.6
          },
          {
            "w": "has",
            "t": 225.02
          },
          {
            "w": "split",
            "t": 225.44
          },
          {
            "w": "the",
            "t": 225.861
          },
          {
            "w": "dataset",
            "t": 226.281
          },
          {
            "w": "into",
            "t": 226.701
          },
          {
            "w": "two",
            "t": 227.121
          },
          {
            "w": "unmodeled",
            "t": 227.542
          },
          {
            "w": "regimes.",
            "t": 227.962
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Dr. Nova",
        "text": "Welcome to our first interactive lab! In the simulator directly below our speaker stage, you can explore Francis Anscombe's four classic synthetic datasets from 1973. Notice that all four datasets share identical summary statistics: mean of x is 9.0, mean of y is 7.5, and Pearson r is 0.816.",
        "start": 229.132,
        "end": 251.764,
        "words": [
          {
            "w": "Welcome",
            "t": 229.132
          },
          {
            "w": "to",
            "t": 229.594
          },
          {
            "w": "our",
            "t": 230.056
          },
          {
            "w": "first",
            "t": 230.518
          },
          {
            "w": "interactive",
            "t": 230.98
          },
          {
            "w": "lab!",
            "t": 231.441
          },
          {
            "w": "In",
            "t": 231.903
          },
          {
            "w": "the",
            "t": 232.365
          },
          {
            "w": "simulator",
            "t": 232.827
          },
          {
            "w": "directly",
            "t": 233.289
          },
          {
            "w": "below",
            "t": 233.751
          },
          {
            "w": "our",
            "t": 234.213
          },
          {
            "w": "speaker",
            "t": 234.675
          },
          {
            "w": "stage,",
            "t": 235.136
          },
          {
            "w": "you",
            "t": 235.598
          },
          {
            "w": "can",
            "t": 236.06
          },
          {
            "w": "explore",
            "t": 236.522
          },
          {
            "w": "Francis",
            "t": 236.984
          },
          {
            "w": "Anscombe's",
            "t": 237.446
          },
          {
            "w": "four",
            "t": 237.908
          },
          {
            "w": "classic",
            "t": 238.37
          },
          {
            "w": "synthetic",
            "t": 238.831
          },
          {
            "w": "datasets",
            "t": 239.293
          },
          {
            "w": "from",
            "t": 239.755
          },
          {
            "w": "1973.",
            "t": 240.217
          },
          {
            "w": "Notice",
            "t": 240.679
          },
          {
            "w": "that",
            "t": 241.141
          },
          {
            "w": "all",
            "t": 241.603
          },
          {
            "w": "four",
            "t": 242.065
          },
          {
            "w": "datasets",
            "t": 242.526
          },
          {
            "w": "share",
            "t": 242.988
          },
          {
            "w": "identical",
            "t": 243.45
          },
          {
            "w": "summary",
            "t": 243.912
          },
          {
            "w": "statistics:",
            "t": 244.374
          },
          {
            "w": "mean",
            "t": 244.836
          },
          {
            "w": "of",
            "t": 245.298
          },
          {
            "w": "x",
            "t": 245.76
          },
          {
            "w": "is",
            "t": 246.221
          },
          {
            "w": "9.0,",
            "t": 246.683
          },
          {
            "w": "mean",
            "t": 247.145
          },
          {
            "w": "of",
            "t": 247.607
          },
          {
            "w": "y",
            "t": 248.069
          },
          {
            "w": "is",
            "t": 248.531
          },
          {
            "w": "7.5,",
            "t": 248.993
          },
          {
            "w": "and",
            "t": 249.455
          },
          {
            "w": "Pearson",
            "t": 249.916
          },
          {
            "w": "r",
            "t": 250.378
          },
          {
            "w": "is",
            "t": 250.84
          },
          {
            "w": "0.816.",
            "t": 251.302
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Dr. Nova",
        "text": "Toggle between Datasets 1, 2, 3, and 4. Observe the upper scatter canvas with the dashed red Ordinary Least Squares line and solid green Theil-Sen robust line. Look at the lower residual canvas: Dataset 2 displays severe parabolic curvature, Dataset 3 reveals a vertical outlier, and Dataset 4 exposes a high-leverage point. Try switching datasets now!",
        "start": 252.114,
        "end": 277.026,
        "words": [
          {
            "w": "Toggle",
            "t": 252.114
          },
          {
            "w": "between",
            "t": 252.559
          },
          {
            "w": "Datasets",
            "t": 253.004
          },
          {
            "w": "1,",
            "t": 253.449
          },
          {
            "w": "2,",
            "t": 253.893
          },
          {
            "w": "3,",
            "t": 254.338
          },
          {
            "w": "and",
            "t": 254.783
          },
          {
            "w": "4.",
            "t": 255.228
          },
          {
            "w": "Observe",
            "t": 255.673
          },
          {
            "w": "the",
            "t": 256.118
          },
          {
            "w": "upper",
            "t": 256.563
          },
          {
            "w": "scatter",
            "t": 257.007
          },
          {
            "w": "canvas",
            "t": 257.452
          },
          {
            "w": "with",
            "t": 257.897
          },
          {
            "w": "the",
            "t": 258.342
          },
          {
            "w": "dashed",
            "t": 258.787
          },
          {
            "w": "red",
            "t": 259.232
          },
          {
            "w": "Ordinary",
            "t": 259.677
          },
          {
            "w": "Least",
            "t": 260.121
          },
          {
            "w": "Squares",
            "t": 260.566
          },
          {
            "w": "line",
            "t": 261.011
          },
          {
            "w": "and",
            "t": 261.456
          },
          {
            "w": "solid",
            "t": 261.901
          },
          {
            "w": "green",
            "t": 262.346
          },
          {
            "w": "Theil-Sen",
            "t": 262.791
          },
          {
            "w": "robust",
            "t": 263.235
          },
          {
            "w": "line.",
            "t": 263.68
          },
          {
            "w": "Look",
            "t": 264.125
          },
          {
            "w": "at",
            "t": 264.57
          },
          {
            "w": "the",
            "t": 265.015
          },
          {
            "w": "lower",
            "t": 265.46
          },
          {
            "w": "residual",
            "t": 265.905
          },
          {
            "w": "canvas:",
            "t": 266.349
          },
          {
            "w": "Dataset",
            "t": 266.794
          },
          {
            "w": "2",
            "t": 267.239
          },
          {
            "w": "displays",
            "t": 267.684
          },
          {
            "w": "severe",
            "t": 268.129
          },
          {
            "w": "parabolic",
            "t": 268.574
          },
          {
            "w": "curvature,",
            "t": 269.019
          },
          {
            "w": "Dataset",
            "t": 269.463
          },
          {
            "w": "3",
            "t": 269.908
          },
          {
            "w": "reveals",
            "t": 270.353
          },
          {
            "w": "a",
            "t": 270.798
          },
          {
            "w": "vertical",
            "t": 271.243
          },
          {
            "w": "outlier,",
            "t": 271.688
          },
          {
            "w": "and",
            "t": 272.133
          },
          {
            "w": "Dataset",
            "t": 272.577
          },
          {
            "w": "4",
            "t": 273.022
          },
          {
            "w": "exposes",
            "t": 273.467
          },
          {
            "w": "a",
            "t": 273.912
          },
          {
            "w": "high-leverage",
            "t": 274.357
          },
          {
            "w": "point.",
            "t": 274.802
          },
          {
            "w": "Try",
            "t": 275.247
          },
          {
            "w": "switching",
            "t": 275.691
          },
          {
            "w": "datasets",
            "t": 276.136
          },
          {
            "w": "now!",
            "t": 276.581
          }
        ]
      },
      {
        "slide": 7,
        "slideId": "s7",
        "speaker": "Dr. Nova",
        "text": "Time for our first active checkpoint! In linear regression modeling, why does Ordinary Least Squares have a finite-sample breakdown point of zero percent, whereas the Theil-Sen estimator achieves approximately twenty-nine point three percent? What mathematical mechanism governs this distinction? Select Option A, B, or C above me!",
        "start": 277.776,
        "end": 299.016,
        "words": [
          {
            "w": "Time",
            "t": 277.776
          },
          {
            "w": "for",
            "t": 278.228
          },
          {
            "w": "our",
            "t": 278.68
          },
          {
            "w": "first",
            "t": 279.132
          },
          {
            "w": "active",
            "t": 279.584
          },
          {
            "w": "checkpoint!",
            "t": 280.036
          },
          {
            "w": "In",
            "t": 280.487
          },
          {
            "w": "linear",
            "t": 280.939
          },
          {
            "w": "regression",
            "t": 281.391
          },
          {
            "w": "modeling,",
            "t": 281.843
          },
          {
            "w": "why",
            "t": 282.295
          },
          {
            "w": "does",
            "t": 282.747
          },
          {
            "w": "Ordinary",
            "t": 283.199
          },
          {
            "w": "Least",
            "t": 283.651
          },
          {
            "w": "Squares",
            "t": 284.103
          },
          {
            "w": "have",
            "t": 284.555
          },
          {
            "w": "a",
            "t": 285.007
          },
          {
            "w": "finite-sample",
            "t": 285.459
          },
          {
            "w": "breakdown",
            "t": 285.91
          },
          {
            "w": "point",
            "t": 286.362
          },
          {
            "w": "of",
            "t": 286.814
          },
          {
            "w": "zero",
            "t": 287.266
          },
          {
            "w": "percent,",
            "t": 287.718
          },
          {
            "w": "whereas",
            "t": 288.17
          },
          {
            "w": "the",
            "t": 288.622
          },
          {
            "w": "Theil-Sen",
            "t": 289.074
          },
          {
            "w": "estimator",
            "t": 289.526
          },
          {
            "w": "achieves",
            "t": 289.978
          },
          {
            "w": "approximately",
            "t": 290.43
          },
          {
            "w": "twenty-nine",
            "t": 290.882
          },
          {
            "w": "point",
            "t": 291.333
          },
          {
            "w": "three",
            "t": 291.785
          },
          {
            "w": "percent?",
            "t": 292.237
          },
          {
            "w": "What",
            "t": 292.689
          },
          {
            "w": "mathematical",
            "t": 293.141
          },
          {
            "w": "mechanism",
            "t": 293.593
          },
          {
            "w": "governs",
            "t": 294.045
          },
          {
            "w": "this",
            "t": 294.497
          },
          {
            "w": "distinction?",
            "t": 294.949
          },
          {
            "w": "Select",
            "t": 295.401
          },
          {
            "w": "Option",
            "t": 295.853
          },
          {
            "w": "A,",
            "t": 296.305
          },
          {
            "w": "B,",
            "t": 296.756
          },
          {
            "w": "or",
            "t": 297.208
          },
          {
            "w": "C",
            "t": 297.66
          },
          {
            "w": "above",
            "t": 298.112
          },
          {
            "w": "me!",
            "t": 298.564
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Dr. Nova",
        "text": "Let us formalize the mathematics behind Checkpoint 1. Ordinary Least Squares minimizes the sum of squared residuals. Because squared penalties amplify distant points quadratically, a single point moved to extreme leverage can tilt the fitted slope to any arbitrary angle.",
        "start": 299.766,
        "end": 316.758,
        "words": [
          {
            "w": "Let",
            "t": 299.766
          },
          {
            "w": "us",
            "t": 300.191
          },
          {
            "w": "formalize",
            "t": 300.616
          },
          {
            "w": "the",
            "t": 301.04
          },
          {
            "w": "mathematics",
            "t": 301.465
          },
          {
            "w": "behind",
            "t": 301.89
          },
          {
            "w": "Checkpoint",
            "t": 302.315
          },
          {
            "w": "1.",
            "t": 302.74
          },
          {
            "w": "Ordinary",
            "t": 303.164
          },
          {
            "w": "Least",
            "t": 303.589
          },
          {
            "w": "Squares",
            "t": 304.014
          },
          {
            "w": "minimizes",
            "t": 304.439
          },
          {
            "w": "the",
            "t": 304.864
          },
          {
            "w": "sum",
            "t": 305.288
          },
          {
            "w": "of",
            "t": 305.713
          },
          {
            "w": "squared",
            "t": 306.138
          },
          {
            "w": "residuals.",
            "t": 306.563
          },
          {
            "w": "Because",
            "t": 306.988
          },
          {
            "w": "squared",
            "t": 307.412
          },
          {
            "w": "penalties",
            "t": 307.837
          },
          {
            "w": "amplify",
            "t": 308.262
          },
          {
            "w": "distant",
            "t": 308.687
          },
          {
            "w": "points",
            "t": 309.112
          },
          {
            "w": "quadratically,",
            "t": 309.536
          },
          {
            "w": "a",
            "t": 309.961
          },
          {
            "w": "single",
            "t": 310.386
          },
          {
            "w": "point",
            "t": 310.811
          },
          {
            "w": "moved",
            "t": 311.236
          },
          {
            "w": "to",
            "t": 311.66
          },
          {
            "w": "extreme",
            "t": 312.085
          },
          {
            "w": "leverage",
            "t": 312.51
          },
          {
            "w": "can",
            "t": 312.935
          },
          {
            "w": "tilt",
            "t": 313.36
          },
          {
            "w": "the",
            "t": 313.784
          },
          {
            "w": "fitted",
            "t": 314.209
          },
          {
            "w": "slope",
            "t": 314.634
          },
          {
            "w": "to",
            "t": 315.059
          },
          {
            "w": "any",
            "t": 315.484
          },
          {
            "w": "arbitrary",
            "t": 315.908
          },
          {
            "w": "angle.",
            "t": 316.333
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Dr. Nova",
        "text": "In contrast, Henri Theil and Pranab Sen formulated a non-parametric estimator: compute the slope between every unique pair of points in the dataset, and take the median. Because corrupting m observations can only corrupt at most m times n pairs out of n-choose-2 total pairs, the breakdown point is one minus one over the square root of two, or approximately 29.3 percent. Nearly thirty percent of your data can be corrupted without ruining the fitted line.",
        "start": 317.108,
        "end": 345.452,
        "words": [
          {
            "w": "In",
            "t": 317.108
          },
          {
            "w": "contrast,",
            "t": 317.481
          },
          {
            "w": "Henri",
            "t": 317.854
          },
          {
            "w": "Theil",
            "t": 318.227
          },
          {
            "w": "and",
            "t": 318.6
          },
          {
            "w": "Pranab",
            "t": 318.973
          },
          {
            "w": "Sen",
            "t": 319.346
          },
          {
            "w": "formulated",
            "t": 319.719
          },
          {
            "w": "a",
            "t": 320.092
          },
          {
            "w": "non-parametric",
            "t": 320.465
          },
          {
            "w": "estimator:",
            "t": 320.837
          },
          {
            "w": "compute",
            "t": 321.21
          },
          {
            "w": "the",
            "t": 321.583
          },
          {
            "w": "slope",
            "t": 321.956
          },
          {
            "w": "between",
            "t": 322.329
          },
          {
            "w": "every",
            "t": 322.702
          },
          {
            "w": "unique",
            "t": 323.075
          },
          {
            "w": "pair",
            "t": 323.448
          },
          {
            "w": "of",
            "t": 323.821
          },
          {
            "w": "points",
            "t": 324.194
          },
          {
            "w": "in",
            "t": 324.567
          },
          {
            "w": "the",
            "t": 324.94
          },
          {
            "w": "dataset,",
            "t": 325.313
          },
          {
            "w": "and",
            "t": 325.686
          },
          {
            "w": "take",
            "t": 326.059
          },
          {
            "w": "the",
            "t": 326.432
          },
          {
            "w": "median.",
            "t": 326.805
          },
          {
            "w": "Because",
            "t": 327.178
          },
          {
            "w": "corrupting",
            "t": 327.551
          },
          {
            "w": "m",
            "t": 327.923
          },
          {
            "w": "observations",
            "t": 328.296
          },
          {
            "w": "can",
            "t": 328.669
          },
          {
            "w": "only",
            "t": 329.042
          },
          {
            "w": "corrupt",
            "t": 329.415
          },
          {
            "w": "at",
            "t": 329.788
          },
          {
            "w": "most",
            "t": 330.161
          },
          {
            "w": "m",
            "t": 330.534
          },
          {
            "w": "times",
            "t": 330.907
          },
          {
            "w": "n",
            "t": 331.28
          },
          {
            "w": "pairs",
            "t": 331.653
          },
          {
            "w": "out",
            "t": 332.026
          },
          {
            "w": "of",
            "t": 332.399
          },
          {
            "w": "n-choose-2",
            "t": 332.772
          },
          {
            "w": "total",
            "t": 333.145
          },
          {
            "w": "pairs,",
            "t": 333.518
          },
          {
            "w": "the",
            "t": 333.891
          },
          {
            "w": "breakdown",
            "t": 334.264
          },
          {
            "w": "point",
            "t": 334.637
          },
          {
            "w": "is",
            "t": 335.009
          },
          {
            "w": "one",
            "t": 335.382
          },
          {
            "w": "minus",
            "t": 335.755
          },
          {
            "w": "one",
            "t": 336.128
          },
          {
            "w": "over",
            "t": 336.501
          },
          {
            "w": "the",
            "t": 336.874
          },
          {
            "w": "square",
            "t": 337.247
          },
          {
            "w": "root",
            "t": 337.62
          },
          {
            "w": "of",
            "t": 337.993
          },
          {
            "w": "two,",
            "t": 338.366
          },
          {
            "w": "or",
            "t": 338.739
          },
          {
            "w": "approximately",
            "t": 339.112
          },
          {
            "w": "29.3",
            "t": 339.485
          },
          {
            "w": "percent.",
            "t": 339.858
          },
          {
            "w": "Nearly",
            "t": 340.231
          },
          {
            "w": "thirty",
            "t": 340.604
          },
          {
            "w": "percent",
            "t": 340.977
          },
          {
            "w": "of",
            "t": 341.35
          },
          {
            "w": "your",
            "t": 341.723
          },
          {
            "w": "data",
            "t": 342.095
          },
          {
            "w": "can",
            "t": 342.468
          },
          {
            "w": "be",
            "t": 342.841
          },
          {
            "w": "corrupted",
            "t": 343.214
          },
          {
            "w": "without",
            "t": 343.587
          },
          {
            "w": "ruining",
            "t": 343.96
          },
          {
            "w": "the",
            "t": 344.333
          },
          {
            "w": "fitted",
            "t": 344.706
          },
          {
            "w": "line.",
            "t": 345.079
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Dr. Nova",
        "text": "Before applying parametric algorithms that assume Gaussian distributions, exploratory profiling requires formal moment testing. Many engineers rely on visual inspection or univariate skewness alone, but D'Agostino and Pearson combined skewness and kurtosis into a rigorous omnibus test.",
        "start": 346.202,
        "end": 364.418,
        "words": [
          {
            "w": "Before",
            "t": 346.202
          },
          {
            "w": "applying",
            "t": 346.694
          },
          {
            "w": "parametric",
            "t": 347.187
          },
          {
            "w": "algorithms",
            "t": 347.679
          },
          {
            "w": "that",
            "t": 348.171
          },
          {
            "w": "assume",
            "t": 348.664
          },
          {
            "w": "Gaussian",
            "t": 349.156
          },
          {
            "w": "distributions,",
            "t": 349.648
          },
          {
            "w": "exploratory",
            "t": 350.141
          },
          {
            "w": "profiling",
            "t": 350.633
          },
          {
            "w": "requires",
            "t": 351.125
          },
          {
            "w": "formal",
            "t": 351.618
          },
          {
            "w": "moment",
            "t": 352.11
          },
          {
            "w": "testing.",
            "t": 352.602
          },
          {
            "w": "Many",
            "t": 353.095
          },
          {
            "w": "engineers",
            "t": 353.587
          },
          {
            "w": "rely",
            "t": 354.079
          },
          {
            "w": "on",
            "t": 354.572
          },
          {
            "w": "visual",
            "t": 355.064
          },
          {
            "w": "inspection",
            "t": 355.556
          },
          {
            "w": "or",
            "t": 356.048
          },
          {
            "w": "univariate",
            "t": 356.541
          },
          {
            "w": "skewness",
            "t": 357.033
          },
          {
            "w": "alone,",
            "t": 357.525
          },
          {
            "w": "but",
            "t": 358.018
          },
          {
            "w": "D'Agostino",
            "t": 358.51
          },
          {
            "w": "and",
            "t": 359.002
          },
          {
            "w": "Pearson",
            "t": 359.495
          },
          {
            "w": "combined",
            "t": 359.987
          },
          {
            "w": "skewness",
            "t": 360.479
          },
          {
            "w": "and",
            "t": 360.972
          },
          {
            "w": "kurtosis",
            "t": 361.464
          },
          {
            "w": "into",
            "t": 361.956
          },
          {
            "w": "a",
            "t": 362.449
          },
          {
            "w": "rigorous",
            "t": 362.941
          },
          {
            "w": "omnibus",
            "t": 363.433
          },
          {
            "w": "test.",
            "t": 363.926
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Dr. Nova",
        "text": "Standardized sample skewness square-root b-1 and kurtosis b-2 are transformed into standard normal deviates Z-1 and Z-2. The sum of their squares forms the omnibus test statistic K-squared, which is asymptotically distributed as chi-squared with two degrees of freedom. If K-squared exceeds 5.991, the Gaussian assumption is rejected at alpha equals 0.05.",
        "start": 364.768,
        "end": 389.464,
        "words": [
          {
            "w": "Standardized",
            "t": 364.768
          },
          {
            "w": "sample",
            "t": 365.243
          },
          {
            "w": "skewness",
            "t": 365.718
          },
          {
            "w": "square-root",
            "t": 366.193
          },
          {
            "w": "b-1",
            "t": 366.668
          },
          {
            "w": "and",
            "t": 367.143
          },
          {
            "w": "kurtosis",
            "t": 367.618
          },
          {
            "w": "b-2",
            "t": 368.092
          },
          {
            "w": "are",
            "t": 368.567
          },
          {
            "w": "transformed",
            "t": 369.042
          },
          {
            "w": "into",
            "t": 369.517
          },
          {
            "w": "standard",
            "t": 369.992
          },
          {
            "w": "normal",
            "t": 370.467
          },
          {
            "w": "deviates",
            "t": 370.942
          },
          {
            "w": "Z-1",
            "t": 371.417
          },
          {
            "w": "and",
            "t": 371.892
          },
          {
            "w": "Z-2.",
            "t": 372.367
          },
          {
            "w": "The",
            "t": 372.842
          },
          {
            "w": "sum",
            "t": 373.317
          },
          {
            "w": "of",
            "t": 373.792
          },
          {
            "w": "their",
            "t": 374.266
          },
          {
            "w": "squares",
            "t": 374.741
          },
          {
            "w": "forms",
            "t": 375.216
          },
          {
            "w": "the",
            "t": 375.691
          },
          {
            "w": "omnibus",
            "t": 376.166
          },
          {
            "w": "test",
            "t": 376.641
          },
          {
            "w": "statistic",
            "t": 377.116
          },
          {
            "w": "K-squared,",
            "t": 377.591
          },
          {
            "w": "which",
            "t": 378.066
          },
          {
            "w": "is",
            "t": 378.541
          },
          {
            "w": "asymptotically",
            "t": 379.016
          },
          {
            "w": "distributed",
            "t": 379.491
          },
          {
            "w": "as",
            "t": 379.966
          },
          {
            "w": "chi-squared",
            "t": 380.44
          },
          {
            "w": "with",
            "t": 380.915
          },
          {
            "w": "two",
            "t": 381.39
          },
          {
            "w": "degrees",
            "t": 381.865
          },
          {
            "w": "of",
            "t": 382.34
          },
          {
            "w": "freedom.",
            "t": 382.815
          },
          {
            "w": "If",
            "t": 383.29
          },
          {
            "w": "K-squared",
            "t": 383.765
          },
          {
            "w": "exceeds",
            "t": 384.24
          },
          {
            "w": "5.991,",
            "t": 384.715
          },
          {
            "w": "the",
            "t": 385.19
          },
          {
            "w": "Gaussian",
            "t": 385.665
          },
          {
            "w": "assumption",
            "t": 386.14
          },
          {
            "w": "is",
            "t": 386.614
          },
          {
            "w": "rejected",
            "t": 387.089
          },
          {
            "w": "at",
            "t": 387.564
          },
          {
            "w": "alpha",
            "t": 388.039
          },
          {
            "w": "equals",
            "t": 388.514
          },
          {
            "w": "0.05.",
            "t": 388.989
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Dr. Nova",
        "text": "Just as the sample mean is fragile under outliers, the sample standard deviation s has a catastrophic breakdown point of zero percent. A single sensor glitch or decimal misplacement can inflate standard deviation by orders of magnitude.",
        "start": 390.214,
        "end": 404.998,
        "words": [
          {
            "w": "Just",
            "t": 390.214
          },
          {
            "w": "as",
            "t": 390.614
          },
          {
            "w": "the",
            "t": 391.013
          },
          {
            "w": "sample",
            "t": 391.413
          },
          {
            "w": "mean",
            "t": 391.812
          },
          {
            "w": "is",
            "t": 392.212
          },
          {
            "w": "fragile",
            "t": 392.611
          },
          {
            "w": "under",
            "t": 393.011
          },
          {
            "w": "outliers,",
            "t": 393.411
          },
          {
            "w": "the",
            "t": 393.81
          },
          {
            "w": "sample",
            "t": 394.21
          },
          {
            "w": "standard",
            "t": 394.609
          },
          {
            "w": "deviation",
            "t": 395.009
          },
          {
            "w": "s",
            "t": 395.408
          },
          {
            "w": "has",
            "t": 395.808
          },
          {
            "w": "a",
            "t": 396.208
          },
          {
            "w": "catastrophic",
            "t": 396.607
          },
          {
            "w": "breakdown",
            "t": 397.007
          },
          {
            "w": "point",
            "t": 397.406
          },
          {
            "w": "of",
            "t": 397.806
          },
          {
            "w": "zero",
            "t": 398.205
          },
          {
            "w": "percent.",
            "t": 398.605
          },
          {
            "w": "A",
            "t": 399.004
          },
          {
            "w": "single",
            "t": 399.404
          },
          {
            "w": "sensor",
            "t": 399.804
          },
          {
            "w": "glitch",
            "t": 400.203
          },
          {
            "w": "or",
            "t": 400.603
          },
          {
            "w": "decimal",
            "t": 401.002
          },
          {
            "w": "misplacement",
            "t": 401.402
          },
          {
            "w": "can",
            "t": 401.801
          },
          {
            "w": "inflate",
            "t": 402.201
          },
          {
            "w": "standard",
            "t": 402.601
          },
          {
            "w": "deviation",
            "t": 403.0
          },
          {
            "w": "by",
            "t": 403.4
          },
          {
            "w": "orders",
            "t": 403.799
          },
          {
            "w": "of",
            "t": 404.199
          },
          {
            "w": "magnitude.",
            "t": 404.598
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Dr. Nova",
        "text": "For robust scale estimation, John Tukey and Peter Rousseeuw championed the Median Absolute Deviation, or MAD. We take the median of the absolute differences from the sample median. To convert MAD into an asymptotically unbiased estimator of standard deviation under Gaussian distributions, we divide by the seventy-fifth percentile of the standard normal distribution, yielding the constant 1.4826. MAD achieves the theoretical maximum breakdown point of fifty percent.",
        "start": 405.348,
        "end": 435.756,
        "words": [
          {
            "w": "For",
            "t": 405.348
          },
          {
            "w": "robust",
            "t": 405.802
          },
          {
            "w": "scale",
            "t": 406.256
          },
          {
            "w": "estimation,",
            "t": 406.71
          },
          {
            "w": "John",
            "t": 407.163
          },
          {
            "w": "Tukey",
            "t": 407.617
          },
          {
            "w": "and",
            "t": 408.071
          },
          {
            "w": "Peter",
            "t": 408.525
          },
          {
            "w": "Rousseeuw",
            "t": 408.979
          },
          {
            "w": "championed",
            "t": 409.433
          },
          {
            "w": "the",
            "t": 409.887
          },
          {
            "w": "Median",
            "t": 410.34
          },
          {
            "w": "Absolute",
            "t": 410.794
          },
          {
            "w": "Deviation,",
            "t": 411.248
          },
          {
            "w": "or",
            "t": 411.702
          },
          {
            "w": "MAD.",
            "t": 412.156
          },
          {
            "w": "We",
            "t": 412.61
          },
          {
            "w": "take",
            "t": 413.063
          },
          {
            "w": "the",
            "t": 413.517
          },
          {
            "w": "median",
            "t": 413.971
          },
          {
            "w": "of",
            "t": 414.425
          },
          {
            "w": "the",
            "t": 414.879
          },
          {
            "w": "absolute",
            "t": 415.333
          },
          {
            "w": "differences",
            "t": 415.787
          },
          {
            "w": "from",
            "t": 416.24
          },
          {
            "w": "the",
            "t": 416.694
          },
          {
            "w": "sample",
            "t": 417.148
          },
          {
            "w": "median.",
            "t": 417.602
          },
          {
            "w": "To",
            "t": 418.056
          },
          {
            "w": "convert",
            "t": 418.51
          },
          {
            "w": "MAD",
            "t": 418.964
          },
          {
            "w": "into",
            "t": 419.417
          },
          {
            "w": "an",
            "t": 419.871
          },
          {
            "w": "asymptotically",
            "t": 420.325
          },
          {
            "w": "unbiased",
            "t": 420.779
          },
          {
            "w": "estimator",
            "t": 421.233
          },
          {
            "w": "of",
            "t": 421.687
          },
          {
            "w": "standard",
            "t": 422.14
          },
          {
            "w": "deviation",
            "t": 422.594
          },
          {
            "w": "under",
            "t": 423.048
          },
          {
            "w": "Gaussian",
            "t": 423.502
          },
          {
            "w": "distributions,",
            "t": 423.956
          },
          {
            "w": "we",
            "t": 424.41
          },
          {
            "w": "divide",
            "t": 424.864
          },
          {
            "w": "by",
            "t": 425.317
          },
          {
            "w": "the",
            "t": 425.771
          },
          {
            "w": "seventy-fifth",
            "t": 426.225
          },
          {
            "w": "percentile",
            "t": 426.679
          },
          {
            "w": "of",
            "t": 427.133
          },
          {
            "w": "the",
            "t": 427.587
          },
          {
            "w": "standard",
            "t": 428.041
          },
          {
            "w": "normal",
            "t": 428.494
          },
          {
            "w": "distribution,",
            "t": 428.948
          },
          {
            "w": "yielding",
            "t": 429.402
          },
          {
            "w": "the",
            "t": 429.856
          },
          {
            "w": "constant",
            "t": 430.31
          },
          {
            "w": "1.4826.",
            "t": 430.764
          },
          {
            "w": "MAD",
            "t": 431.217
          },
          {
            "w": "achieves",
            "t": 431.671
          },
          {
            "w": "the",
            "t": 432.125
          },
          {
            "w": "theoretical",
            "t": 432.579
          },
          {
            "w": "maximum",
            "t": 433.033
          },
          {
            "w": "breakdown",
            "t": 433.487
          },
          {
            "w": "point",
            "t": 433.941
          },
          {
            "w": "of",
            "t": 434.394
          },
          {
            "w": "fifty",
            "t": 434.848
          },
          {
            "w": "percent.",
            "t": 435.302
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Dr. Nova",
        "text": "In 1973, Francis Anscombe constructed four synthetic datasets to demonstrate that numerical summary statistics are fundamentally blind to non-linear geometries and structural outliers. Every single first and second joint moment across all four datasets is identical to two decimal places.",
        "start": 436.506,
        "end": 455.01,
        "words": [
          {
            "w": "In",
            "t": 436.506
          },
          {
            "w": "1973,",
            "t": 436.969
          },
          {
            "w": "Francis",
            "t": 437.431
          },
          {
            "w": "Anscombe",
            "t": 437.894
          },
          {
            "w": "constructed",
            "t": 438.356
          },
          {
            "w": "four",
            "t": 438.819
          },
          {
            "w": "synthetic",
            "t": 439.282
          },
          {
            "w": "datasets",
            "t": 439.744
          },
          {
            "w": "to",
            "t": 440.207
          },
          {
            "w": "demonstrate",
            "t": 440.669
          },
          {
            "w": "that",
            "t": 441.132
          },
          {
            "w": "numerical",
            "t": 441.595
          },
          {
            "w": "summary",
            "t": 442.057
          },
          {
            "w": "statistics",
            "t": 442.52
          },
          {
            "w": "are",
            "t": 442.982
          },
          {
            "w": "fundamentally",
            "t": 443.445
          },
          {
            "w": "blind",
            "t": 443.908
          },
          {
            "w": "to",
            "t": 444.37
          },
          {
            "w": "non-linear",
            "t": 444.833
          },
          {
            "w": "geometries",
            "t": 445.295
          },
          {
            "w": "and",
            "t": 445.758
          },
          {
            "w": "structural",
            "t": 446.221
          },
          {
            "w": "outliers.",
            "t": 446.683
          },
          {
            "w": "Every",
            "t": 447.146
          },
          {
            "w": "single",
            "t": 447.608
          },
          {
            "w": "first",
            "t": 448.071
          },
          {
            "w": "and",
            "t": 448.534
          },
          {
            "w": "second",
            "t": 448.996
          },
          {
            "w": "joint",
            "t": 449.459
          },
          {
            "w": "moment",
            "t": 449.921
          },
          {
            "w": "across",
            "t": 450.384
          },
          {
            "w": "all",
            "t": 450.847
          },
          {
            "w": "four",
            "t": 451.309
          },
          {
            "w": "datasets",
            "t": 451.772
          },
          {
            "w": "is",
            "t": 452.234
          },
          {
            "w": "identical",
            "t": 452.697
          },
          {
            "w": "to",
            "t": 453.16
          },
          {
            "w": "two",
            "t": 453.622
          },
          {
            "w": "decimal",
            "t": 454.085
          },
          {
            "w": "places.",
            "t": 454.547
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Dr. Nova",
        "text": "The sample mean of x is 9.0, sample mean of y is 7.5, sample variance of x is 11.0, sample variance of y is 4.12, Pearson correlation is 0.816, and the linear regression line is y-hat equals 3.0 plus 0.5x with an R-squared of 0.67. If you only look at an automated metrics table, you would conclude all four datasets represent identical phenomena. But visual inspection or residual analysis exposes that only Dataset 1 is a clean linear trend.",
        "start": 455.36,
        "end": 490.184,
        "words": [
          {
            "w": "The",
            "t": 455.36
          },
          {
            "w": "sample",
            "t": 455.801
          },
          {
            "w": "mean",
            "t": 456.242
          },
          {
            "w": "of",
            "t": 456.682
          },
          {
            "w": "x",
            "t": 457.123
          },
          {
            "w": "is",
            "t": 457.564
          },
          {
            "w": "9.0,",
            "t": 458.005
          },
          {
            "w": "sample",
            "t": 458.446
          },
          {
            "w": "mean",
            "t": 458.886
          },
          {
            "w": "of",
            "t": 459.327
          },
          {
            "w": "y",
            "t": 459.768
          },
          {
            "w": "is",
            "t": 460.209
          },
          {
            "w": "7.5,",
            "t": 460.65
          },
          {
            "w": "sample",
            "t": 461.091
          },
          {
            "w": "variance",
            "t": 461.531
          },
          {
            "w": "of",
            "t": 461.972
          },
          {
            "w": "x",
            "t": 462.413
          },
          {
            "w": "is",
            "t": 462.854
          },
          {
            "w": "11.0,",
            "t": 463.295
          },
          {
            "w": "sample",
            "t": 463.735
          },
          {
            "w": "variance",
            "t": 464.176
          },
          {
            "w": "of",
            "t": 464.617
          },
          {
            "w": "y",
            "t": 465.058
          },
          {
            "w": "is",
            "t": 465.499
          },
          {
            "w": "4.12,",
            "t": 465.939
          },
          {
            "w": "Pearson",
            "t": 466.38
          },
          {
            "w": "correlation",
            "t": 466.821
          },
          {
            "w": "is",
            "t": 467.262
          },
          {
            "w": "0.816,",
            "t": 467.703
          },
          {
            "w": "and",
            "t": 468.143
          },
          {
            "w": "the",
            "t": 468.584
          },
          {
            "w": "linear",
            "t": 469.025
          },
          {
            "w": "regression",
            "t": 469.466
          },
          {
            "w": "line",
            "t": 469.907
          },
          {
            "w": "is",
            "t": 470.348
          },
          {
            "w": "y-hat",
            "t": 470.788
          },
          {
            "w": "equals",
            "t": 471.229
          },
          {
            "w": "3.0",
            "t": 471.67
          },
          {
            "w": "plus",
            "t": 472.111
          },
          {
            "w": "0.5x",
            "t": 472.552
          },
          {
            "w": "with",
            "t": 472.992
          },
          {
            "w": "an",
            "t": 473.433
          },
          {
            "w": "R-squared",
            "t": 473.874
          },
          {
            "w": "of",
            "t": 474.315
          },
          {
            "w": "0.67.",
            "t": 474.756
          },
          {
            "w": "If",
            "t": 475.196
          },
          {
            "w": "you",
            "t": 475.637
          },
          {
            "w": "only",
            "t": 476.078
          },
          {
            "w": "look",
            "t": 476.519
          },
          {
            "w": "at",
            "t": 476.96
          },
          {
            "w": "an",
            "t": 477.401
          },
          {
            "w": "automated",
            "t": 477.841
          },
          {
            "w": "metrics",
            "t": 478.282
          },
          {
            "w": "table,",
            "t": 478.723
          },
          {
            "w": "you",
            "t": 479.164
          },
          {
            "w": "would",
            "t": 479.605
          },
          {
            "w": "conclude",
            "t": 480.045
          },
          {
            "w": "all",
            "t": 480.486
          },
          {
            "w": "four",
            "t": 480.927
          },
          {
            "w": "datasets",
            "t": 481.368
          },
          {
            "w": "represent",
            "t": 481.809
          },
          {
            "w": "identical",
            "t": 482.249
          },
          {
            "w": "phenomena.",
            "t": 482.69
          },
          {
            "w": "But",
            "t": 483.131
          },
          {
            "w": "visual",
            "t": 483.572
          },
          {
            "w": "inspection",
            "t": 484.013
          },
          {
            "w": "or",
            "t": 484.453
          },
          {
            "w": "residual",
            "t": 484.894
          },
          {
            "w": "analysis",
            "t": 485.335
          },
          {
            "w": "exposes",
            "t": 485.776
          },
          {
            "w": "that",
            "t": 486.217
          },
          {
            "w": "only",
            "t": 486.658
          },
          {
            "w": "Dataset",
            "t": 487.098
          },
          {
            "w": "1",
            "t": 487.539
          },
          {
            "w": "is",
            "t": 487.98
          },
          {
            "w": "a",
            "t": 488.421
          },
          {
            "w": "clean",
            "t": 488.862
          },
          {
            "w": "linear",
            "t": 489.302
          },
          {
            "w": "trend.",
            "t": 489.743
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Dr. Nova",
        "text": "Welcome to our second interactive laboratory: Tukey's Data equals Fit plus Residual Decomposition Workbench. In the simulator directly below our stage, you can manipulate a non-linear signal contaminated by noise and extreme impulse spike outliers.",
        "start": 490.934,
        "end": 506.558,
        "words": [
          {
            "w": "Welcome",
            "t": 490.934
          },
          {
            "w": "to",
            "t": 491.38
          },
          {
            "w": "our",
            "t": 491.827
          },
          {
            "w": "second",
            "t": 492.273
          },
          {
            "w": "interactive",
            "t": 492.72
          },
          {
            "w": "laboratory:",
            "t": 493.166
          },
          {
            "w": "Tukey's",
            "t": 493.612
          },
          {
            "w": "Data",
            "t": 494.059
          },
          {
            "w": "equals",
            "t": 494.505
          },
          {
            "w": "Fit",
            "t": 494.952
          },
          {
            "w": "plus",
            "t": 495.398
          },
          {
            "w": "Residual",
            "t": 495.844
          },
          {
            "w": "Decomposition",
            "t": 496.291
          },
          {
            "w": "Workbench.",
            "t": 496.737
          },
          {
            "w": "In",
            "t": 497.184
          },
          {
            "w": "the",
            "t": 497.63
          },
          {
            "w": "simulator",
            "t": 498.076
          },
          {
            "w": "directly",
            "t": 498.523
          },
          {
            "w": "below",
            "t": 498.969
          },
          {
            "w": "our",
            "t": 499.416
          },
          {
            "w": "stage,",
            "t": 499.862
          },
          {
            "w": "you",
            "t": 500.308
          },
          {
            "w": "can",
            "t": 500.755
          },
          {
            "w": "manipulate",
            "t": 501.201
          },
          {
            "w": "a",
            "t": 501.648
          },
          {
            "w": "non-linear",
            "t": 502.094
          },
          {
            "w": "signal",
            "t": 502.54
          },
          {
            "w": "contaminated",
            "t": 502.987
          },
          {
            "w": "by",
            "t": 503.433
          },
          {
            "w": "noise",
            "t": 503.88
          },
          {
            "w": "and",
            "t": 504.326
          },
          {
            "w": "extreme",
            "t": 504.772
          },
          {
            "w": "impulse",
            "t": 505.219
          },
          {
            "w": "spike",
            "t": 505.665
          },
          {
            "w": "outliers.",
            "t": 506.112
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Dr. Nova",
        "text": "Adjust the moving median smoother window width k from 3 to 21, and inject up to 6 impulse spike outliers. Notice how the moving median smoother resists the spikes, preserving the smooth signal, while the extracted residuals capture the spikes cleanly. Watch the residual variance and Durbin-Watson autocorrelation gauge update in real time!",
        "start": 506.908,
        "end": 528.148,
        "words": [
          {
            "w": "Adjust",
            "t": 506.908
          },
          {
            "w": "the",
            "t": 507.309
          },
          {
            "w": "moving",
            "t": 507.71
          },
          {
            "w": "median",
            "t": 508.11
          },
          {
            "w": "smoother",
            "t": 508.511
          },
          {
            "w": "window",
            "t": 508.912
          },
          {
            "w": "width",
            "t": 509.313
          },
          {
            "w": "k",
            "t": 509.713
          },
          {
            "w": "from",
            "t": 510.114
          },
          {
            "w": "3",
            "t": 510.515
          },
          {
            "w": "to",
            "t": 510.916
          },
          {
            "w": "21,",
            "t": 511.316
          },
          {
            "w": "and",
            "t": 511.717
          },
          {
            "w": "inject",
            "t": 512.118
          },
          {
            "w": "up",
            "t": 512.519
          },
          {
            "w": "to",
            "t": 512.919
          },
          {
            "w": "6",
            "t": 513.32
          },
          {
            "w": "impulse",
            "t": 513.721
          },
          {
            "w": "spike",
            "t": 514.122
          },
          {
            "w": "outliers.",
            "t": 514.522
          },
          {
            "w": "Notice",
            "t": 514.923
          },
          {
            "w": "how",
            "t": 515.324
          },
          {
            "w": "the",
            "t": 515.725
          },
          {
            "w": "moving",
            "t": 516.125
          },
          {
            "w": "median",
            "t": 516.526
          },
          {
            "w": "smoother",
            "t": 516.927
          },
          {
            "w": "resists",
            "t": 517.328
          },
          {
            "w": "the",
            "t": 517.728
          },
          {
            "w": "spikes,",
            "t": 518.129
          },
          {
            "w": "preserving",
            "t": 518.53
          },
          {
            "w": "the",
            "t": 518.931
          },
          {
            "w": "smooth",
            "t": 519.331
          },
          {
            "w": "signal,",
            "t": 519.732
          },
          {
            "w": "while",
            "t": 520.133
          },
          {
            "w": "the",
            "t": 520.534
          },
          {
            "w": "extracted",
            "t": 520.934
          },
          {
            "w": "residuals",
            "t": 521.335
          },
          {
            "w": "capture",
            "t": 521.736
          },
          {
            "w": "the",
            "t": 522.137
          },
          {
            "w": "spikes",
            "t": 522.537
          },
          {
            "w": "cleanly.",
            "t": 522.938
          },
          {
            "w": "Watch",
            "t": 523.339
          },
          {
            "w": "the",
            "t": 523.74
          },
          {
            "w": "residual",
            "t": 524.14
          },
          {
            "w": "variance",
            "t": 524.541
          },
          {
            "w": "and",
            "t": 524.942
          },
          {
            "w": "Durbin-Watson",
            "t": 525.343
          },
          {
            "w": "autocorrelation",
            "t": 525.743
          },
          {
            "w": "gauge",
            "t": 526.144
          },
          {
            "w": "update",
            "t": 526.545
          },
          {
            "w": "in",
            "t": 526.946
          },
          {
            "w": "real",
            "t": 527.346
          },
          {
            "w": "time!",
            "t": 527.747
          }
        ]
      },
      {
        "slide": 13,
        "slideId": "s13",
        "speaker": "Dr. Nova",
        "text": "Here is our second active checkpoint: An analyst performs extensive exploratory plotting across eighty covariates without pre-registration, discovers variable X-42 correlates with customer conversion at p equals 0.012, and claims a statistically validated causal driver. What statistical pathology is this, what is the true false discovery probability, and what is the proper defense protocol? Select Option A, B, or C above me!",
        "start": 528.898,
        "end": 557.578,
        "words": [
          {
            "w": "Here",
            "t": 528.898
          },
          {
            "w": "is",
            "t": 529.361
          },
          {
            "w": "our",
            "t": 529.823
          },
          {
            "w": "second",
            "t": 530.286
          },
          {
            "w": "active",
            "t": 530.748
          },
          {
            "w": "checkpoint:",
            "t": 531.211
          },
          {
            "w": "An",
            "t": 531.673
          },
          {
            "w": "analyst",
            "t": 532.136
          },
          {
            "w": "performs",
            "t": 532.599
          },
          {
            "w": "extensive",
            "t": 533.061
          },
          {
            "w": "exploratory",
            "t": 533.524
          },
          {
            "w": "plotting",
            "t": 533.986
          },
          {
            "w": "across",
            "t": 534.449
          },
          {
            "w": "eighty",
            "t": 534.912
          },
          {
            "w": "covariates",
            "t": 535.374
          },
          {
            "w": "without",
            "t": 535.837
          },
          {
            "w": "pre-registration,",
            "t": 536.299
          },
          {
            "w": "discovers",
            "t": 536.762
          },
          {
            "w": "variable",
            "t": 537.224
          },
          {
            "w": "X-42",
            "t": 537.687
          },
          {
            "w": "correlates",
            "t": 538.15
          },
          {
            "w": "with",
            "t": 538.612
          },
          {
            "w": "customer",
            "t": 539.075
          },
          {
            "w": "conversion",
            "t": 539.537
          },
          {
            "w": "at",
            "t": 540.0
          },
          {
            "w": "p",
            "t": 540.463
          },
          {
            "w": "equals",
            "t": 540.925
          },
          {
            "w": "0.012,",
            "t": 541.388
          },
          {
            "w": "and",
            "t": 541.85
          },
          {
            "w": "claims",
            "t": 542.313
          },
          {
            "w": "a",
            "t": 542.775
          },
          {
            "w": "statistically",
            "t": 543.238
          },
          {
            "w": "validated",
            "t": 543.701
          },
          {
            "w": "causal",
            "t": 544.163
          },
          {
            "w": "driver.",
            "t": 544.626
          },
          {
            "w": "What",
            "t": 545.088
          },
          {
            "w": "statistical",
            "t": 545.551
          },
          {
            "w": "pathology",
            "t": 546.013
          },
          {
            "w": "is",
            "t": 546.476
          },
          {
            "w": "this,",
            "t": 546.939
          },
          {
            "w": "what",
            "t": 547.401
          },
          {
            "w": "is",
            "t": 547.864
          },
          {
            "w": "the",
            "t": 548.326
          },
          {
            "w": "true",
            "t": 548.789
          },
          {
            "w": "false",
            "t": 549.252
          },
          {
            "w": "discovery",
            "t": 549.714
          },
          {
            "w": "probability,",
            "t": 550.177
          },
          {
            "w": "and",
            "t": 550.639
          },
          {
            "w": "what",
            "t": 551.102
          },
          {
            "w": "is",
            "t": 551.564
          },
          {
            "w": "the",
            "t": 552.027
          },
          {
            "w": "proper",
            "t": 552.49
          },
          {
            "w": "defense",
            "t": 552.952
          },
          {
            "w": "protocol?",
            "t": 553.415
          },
          {
            "w": "Select",
            "t": 553.877
          },
          {
            "w": "Option",
            "t": 554.34
          },
          {
            "w": "A,",
            "t": 554.803
          },
          {
            "w": "B,",
            "t": 555.265
          },
          {
            "w": "or",
            "t": 555.728
          },
          {
            "w": "C",
            "t": 556.19
          },
          {
            "w": "above",
            "t": 556.653
          },
          {
            "w": "me!",
            "t": 557.115
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Dr. Nova",
        "text": "Exploratory analysis and data cleaning form an inseparable dynamical feedback loop. You do not clean data in a vacuum; you use EDA to discover what is broken, design an appropriate transformation, execute the pipeline, and then immediately re-run EDA on the residuals to verify that your cleaning did not distort the signal.",
        "start": 558.328,
        "end": 577.792,
        "words": [
          {
            "w": "Exploratory",
            "t": 558.328
          },
          {
            "w": "analysis",
            "t": 558.702
          },
          {
            "w": "and",
            "t": 559.077
          },
          {
            "w": "data",
            "t": 559.451
          },
          {
            "w": "cleaning",
            "t": 559.825
          },
          {
            "w": "form",
            "t": 560.2
          },
          {
            "w": "an",
            "t": 560.574
          },
          {
            "w": "inseparable",
            "t": 560.948
          },
          {
            "w": "dynamical",
            "t": 561.322
          },
          {
            "w": "feedback",
            "t": 561.697
          },
          {
            "w": "loop.",
            "t": 562.071
          },
          {
            "w": "You",
            "t": 562.445
          },
          {
            "w": "do",
            "t": 562.82
          },
          {
            "w": "not",
            "t": 563.194
          },
          {
            "w": "clean",
            "t": 563.568
          },
          {
            "w": "data",
            "t": 563.943
          },
          {
            "w": "in",
            "t": 564.317
          },
          {
            "w": "a",
            "t": 564.691
          },
          {
            "w": "vacuum;",
            "t": 565.066
          },
          {
            "w": "you",
            "t": 565.44
          },
          {
            "w": "use",
            "t": 565.814
          },
          {
            "w": "EDA",
            "t": 566.188
          },
          {
            "w": "to",
            "t": 566.563
          },
          {
            "w": "discover",
            "t": 566.937
          },
          {
            "w": "what",
            "t": 567.311
          },
          {
            "w": "is",
            "t": 567.686
          },
          {
            "w": "broken,",
            "t": 568.06
          },
          {
            "w": "design",
            "t": 568.434
          },
          {
            "w": "an",
            "t": 568.809
          },
          {
            "w": "appropriate",
            "t": 569.183
          },
          {
            "w": "transformation,",
            "t": 569.557
          },
          {
            "w": "execute",
            "t": 569.932
          },
          {
            "w": "the",
            "t": 570.306
          },
          {
            "w": "pipeline,",
            "t": 570.68
          },
          {
            "w": "and",
            "t": 571.054
          },
          {
            "w": "then",
            "t": 571.429
          },
          {
            "w": "immediately",
            "t": 571.803
          },
          {
            "w": "re-run",
            "t": 572.177
          },
          {
            "w": "EDA",
            "t": 572.552
          },
          {
            "w": "on",
            "t": 572.926
          },
          {
            "w": "the",
            "t": 573.3
          },
          {
            "w": "residuals",
            "t": 573.675
          },
          {
            "w": "to",
            "t": 574.049
          },
          {
            "w": "verify",
            "t": 574.423
          },
          {
            "w": "that",
            "t": 574.798
          },
          {
            "w": "your",
            "t": 575.172
          },
          {
            "w": "cleaning",
            "t": 575.546
          },
          {
            "w": "did",
            "t": 575.92
          },
          {
            "w": "not",
            "t": 576.295
          },
          {
            "w": "distort",
            "t": 576.669
          },
          {
            "w": "the",
            "t": 577.043
          },
          {
            "w": "signal.",
            "t": 577.418
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Dr. Nova",
        "text": "In Stage 1, moment screening uncovers clipping, missingness regimes, and outliers. In Stage 2, covariate conditioning determines whether an extreme value is a corrupted glitch or a valid rare event. In Stage 3, the pipeline executes transforms like deduplication or power transforms. In Stage 4, residual auditing guarantees the transformed dataset exhibits clean white noise residuals before modeling.",
        "start": 578.142,
        "end": 605.142,
        "words": [
          {
            "w": "In",
            "t": 578.142
          },
          {
            "w": "Stage",
            "t": 578.608
          },
          {
            "w": "1,",
            "t": 579.073
          },
          {
            "w": "moment",
            "t": 579.539
          },
          {
            "w": "screening",
            "t": 580.004
          },
          {
            "w": "uncovers",
            "t": 580.47
          },
          {
            "w": "clipping,",
            "t": 580.935
          },
          {
            "w": "missingness",
            "t": 581.401
          },
          {
            "w": "regimes,",
            "t": 581.866
          },
          {
            "w": "and",
            "t": 582.332
          },
          {
            "w": "outliers.",
            "t": 582.797
          },
          {
            "w": "In",
            "t": 583.263
          },
          {
            "w": "Stage",
            "t": 583.728
          },
          {
            "w": "2,",
            "t": 584.194
          },
          {
            "w": "covariate",
            "t": 584.659
          },
          {
            "w": "conditioning",
            "t": 585.125
          },
          {
            "w": "determines",
            "t": 585.59
          },
          {
            "w": "whether",
            "t": 586.056
          },
          {
            "w": "an",
            "t": 586.521
          },
          {
            "w": "extreme",
            "t": 586.987
          },
          {
            "w": "value",
            "t": 587.452
          },
          {
            "w": "is",
            "t": 587.918
          },
          {
            "w": "a",
            "t": 588.383
          },
          {
            "w": "corrupted",
            "t": 588.849
          },
          {
            "w": "glitch",
            "t": 589.314
          },
          {
            "w": "or",
            "t": 589.78
          },
          {
            "w": "a",
            "t": 590.245
          },
          {
            "w": "valid",
            "t": 590.711
          },
          {
            "w": "rare",
            "t": 591.176
          },
          {
            "w": "event.",
            "t": 591.642
          },
          {
            "w": "In",
            "t": 592.108
          },
          {
            "w": "Stage",
            "t": 592.573
          },
          {
            "w": "3,",
            "t": 593.039
          },
          {
            "w": "the",
            "t": 593.504
          },
          {
            "w": "pipeline",
            "t": 593.97
          },
          {
            "w": "executes",
            "t": 594.435
          },
          {
            "w": "transforms",
            "t": 594.901
          },
          {
            "w": "like",
            "t": 595.366
          },
          {
            "w": "deduplication",
            "t": 595.832
          },
          {
            "w": "or",
            "t": 596.297
          },
          {
            "w": "power",
            "t": 596.763
          },
          {
            "w": "transforms.",
            "t": 597.228
          },
          {
            "w": "In",
            "t": 597.694
          },
          {
            "w": "Stage",
            "t": 598.159
          },
          {
            "w": "4,",
            "t": 598.625
          },
          {
            "w": "residual",
            "t": 599.09
          },
          {
            "w": "auditing",
            "t": 599.556
          },
          {
            "w": "guarantees",
            "t": 600.021
          },
          {
            "w": "the",
            "t": 600.487
          },
          {
            "w": "transformed",
            "t": 600.952
          },
          {
            "w": "dataset",
            "t": 601.418
          },
          {
            "w": "exhibits",
            "t": 601.883
          },
          {
            "w": "clean",
            "t": 602.349
          },
          {
            "w": "white",
            "t": 602.814
          },
          {
            "w": "noise",
            "t": 603.28
          },
          {
            "w": "residuals",
            "t": 603.745
          },
          {
            "w": "before",
            "t": 604.211
          },
          {
            "w": "modeling.",
            "t": 604.676
          }
        ]
      },
      {
        "slide": 15,
        "slideId": "s15",
        "speaker": "Dr. Nova",
        "text": "To appreciate the real-world power of exploratory data analysis, consider two landmark cases separated by 170 years. In 1854, Dr. John Snow rejected the prevailing miasma theory of airborne contagion during the London cholera epidemic. By plotting deaths as spatial tick marks on a street map along with public water pump locations, he exposed that mortality clustered exclusively around the Broad Street pump. Removing the pump handle halted the epidemic—a historic victory of model-free spatial EDA.",
        "start": 605.892,
        "end": 638.796,
        "words": [
          {
            "w": "To",
            "t": 605.892
          },
          {
            "w": "appreciate",
            "t": 606.325
          },
          {
            "w": "the",
            "t": 606.758
          },
          {
            "w": "real-world",
            "t": 607.191
          },
          {
            "w": "power",
            "t": 607.624
          },
          {
            "w": "of",
            "t": 608.057
          },
          {
            "w": "exploratory",
            "t": 608.49
          },
          {
            "w": "data",
            "t": 608.923
          },
          {
            "w": "analysis,",
            "t": 609.356
          },
          {
            "w": "consider",
            "t": 609.789
          },
          {
            "w": "two",
            "t": 610.221
          },
          {
            "w": "landmark",
            "t": 610.654
          },
          {
            "w": "cases",
            "t": 611.087
          },
          {
            "w": "separated",
            "t": 611.52
          },
          {
            "w": "by",
            "t": 611.953
          },
          {
            "w": "170",
            "t": 612.386
          },
          {
            "w": "years.",
            "t": 612.819
          },
          {
            "w": "In",
            "t": 613.252
          },
          {
            "w": "1854,",
            "t": 613.685
          },
          {
            "w": "Dr.",
            "t": 614.118
          },
          {
            "w": "John",
            "t": 614.551
          },
          {
            "w": "Snow",
            "t": 614.984
          },
          {
            "w": "rejected",
            "t": 615.417
          },
          {
            "w": "the",
            "t": 615.85
          },
          {
            "w": "prevailing",
            "t": 616.283
          },
          {
            "w": "miasma",
            "t": 616.716
          },
          {
            "w": "theory",
            "t": 617.149
          },
          {
            "w": "of",
            "t": 617.582
          },
          {
            "w": "airborne",
            "t": 618.015
          },
          {
            "w": "contagion",
            "t": 618.447
          },
          {
            "w": "during",
            "t": 618.88
          },
          {
            "w": "the",
            "t": 619.313
          },
          {
            "w": "London",
            "t": 619.746
          },
          {
            "w": "cholera",
            "t": 620.179
          },
          {
            "w": "epidemic.",
            "t": 620.612
          },
          {
            "w": "By",
            "t": 621.045
          },
          {
            "w": "plotting",
            "t": 621.478
          },
          {
            "w": "deaths",
            "t": 621.911
          },
          {
            "w": "as",
            "t": 622.344
          },
          {
            "w": "spatial",
            "t": 622.777
          },
          {
            "w": "tick",
            "t": 623.21
          },
          {
            "w": "marks",
            "t": 623.643
          },
          {
            "w": "on",
            "t": 624.076
          },
          {
            "w": "a",
            "t": 624.509
          },
          {
            "w": "street",
            "t": 624.942
          },
          {
            "w": "map",
            "t": 625.375
          },
          {
            "w": "along",
            "t": 625.808
          },
          {
            "w": "with",
            "t": 626.241
          },
          {
            "w": "public",
            "t": 626.673
          },
          {
            "w": "water",
            "t": 627.106
          },
          {
            "w": "pump",
            "t": 627.539
          },
          {
            "w": "locations,",
            "t": 627.972
          },
          {
            "w": "he",
            "t": 628.405
          },
          {
            "w": "exposed",
            "t": 628.838
          },
          {
            "w": "that",
            "t": 629.271
          },
          {
            "w": "mortality",
            "t": 629.704
          },
          {
            "w": "clustered",
            "t": 630.137
          },
          {
            "w": "exclusively",
            "t": 630.57
          },
          {
            "w": "around",
            "t": 631.003
          },
          {
            "w": "the",
            "t": 631.436
          },
          {
            "w": "Broad",
            "t": 631.869
          },
          {
            "w": "Street",
            "t": 632.302
          },
          {
            "w": "pump.",
            "t": 632.735
          },
          {
            "w": "Removing",
            "t": 633.168
          },
          {
            "w": "the",
            "t": 633.601
          },
          {
            "w": "pump",
            "t": 634.034
          },
          {
            "w": "handle",
            "t": 634.467
          },
          {
            "w": "halted",
            "t": 634.899
          },
          {
            "w": "the",
            "t": 635.332
          },
          {
            "w": "epidemic—a",
            "t": 635.765
          },
          {
            "w": "historic",
            "t": 636.198
          },
          {
            "w": "victory",
            "t": 636.631
          },
          {
            "w": "of",
            "t": 637.064
          },
          {
            "w": "model-free",
            "t": 637.497
          },
          {
            "w": "spatial",
            "t": 637.93
          },
          {
            "w": "EDA.",
            "t": 638.363
          }
        ]
      },
      {
        "slide": 15,
        "slideId": "s15",
        "speaker": "Dr. Nova",
        "text": "Now examine a modern cloud engineering example. An infrastructure team monitored customer API gateways where aggregate dashboards reported a healthy mean latency of 24.1 milliseconds. But exploratory quantile heatmaps revealed a severe bimodal subpopulation: ninety-nine percent of requests resolved in 12 milliseconds, but one percent routed to a thread-starved container pool stalled at 2,410 milliseconds! Summary statistics had masked the degradation completely.",
        "start": 639.146,
        "end": 670.25,
        "words": [
          {
            "w": "Now",
            "t": 639.146
          },
          {
            "w": "examine",
            "t": 639.648
          },
          {
            "w": "a",
            "t": 640.149
          },
          {
            "w": "modern",
            "t": 640.651
          },
          {
            "w": "cloud",
            "t": 641.153
          },
          {
            "w": "engineering",
            "t": 641.654
          },
          {
            "w": "example.",
            "t": 642.156
          },
          {
            "w": "An",
            "t": 642.658
          },
          {
            "w": "infrastructure",
            "t": 643.159
          },
          {
            "w": "team",
            "t": 643.661
          },
          {
            "w": "monitored",
            "t": 644.163
          },
          {
            "w": "customer",
            "t": 644.664
          },
          {
            "w": "API",
            "t": 645.166
          },
          {
            "w": "gateways",
            "t": 645.668
          },
          {
            "w": "where",
            "t": 646.169
          },
          {
            "w": "aggregate",
            "t": 646.671
          },
          {
            "w": "dashboards",
            "t": 647.173
          },
          {
            "w": "reported",
            "t": 647.675
          },
          {
            "w": "a",
            "t": 648.176
          },
          {
            "w": "healthy",
            "t": 648.678
          },
          {
            "w": "mean",
            "t": 649.18
          },
          {
            "w": "latency",
            "t": 649.681
          },
          {
            "w": "of",
            "t": 650.183
          },
          {
            "w": "24.1",
            "t": 650.685
          },
          {
            "w": "milliseconds.",
            "t": 651.186
          },
          {
            "w": "But",
            "t": 651.688
          },
          {
            "w": "exploratory",
            "t": 652.19
          },
          {
            "w": "quantile",
            "t": 652.691
          },
          {
            "w": "heatmaps",
            "t": 653.193
          },
          {
            "w": "revealed",
            "t": 653.695
          },
          {
            "w": "a",
            "t": 654.196
          },
          {
            "w": "severe",
            "t": 654.698
          },
          {
            "w": "bimodal",
            "t": 655.2
          },
          {
            "w": "subpopulation:",
            "t": 655.701
          },
          {
            "w": "ninety-nine",
            "t": 656.203
          },
          {
            "w": "percent",
            "t": 656.705
          },
          {
            "w": "of",
            "t": 657.206
          },
          {
            "w": "requests",
            "t": 657.708
          },
          {
            "w": "resolved",
            "t": 658.21
          },
          {
            "w": "in",
            "t": 658.711
          },
          {
            "w": "12",
            "t": 659.213
          },
          {
            "w": "milliseconds,",
            "t": 659.715
          },
          {
            "w": "but",
            "t": 660.216
          },
          {
            "w": "one",
            "t": 660.718
          },
          {
            "w": "percent",
            "t": 661.22
          },
          {
            "w": "routed",
            "t": 661.721
          },
          {
            "w": "to",
            "t": 662.223
          },
          {
            "w": "a",
            "t": 662.725
          },
          {
            "w": "thread-starved",
            "t": 663.227
          },
          {
            "w": "container",
            "t": 663.728
          },
          {
            "w": "pool",
            "t": 664.23
          },
          {
            "w": "stalled",
            "t": 664.732
          },
          {
            "w": "at",
            "t": 665.233
          },
          {
            "w": "2,410",
            "t": 665.735
          },
          {
            "w": "milliseconds!",
            "t": 666.237
          },
          {
            "w": "Summary",
            "t": 666.738
          },
          {
            "w": "statistics",
            "t": 667.24
          },
          {
            "w": "had",
            "t": 667.742
          },
          {
            "w": "masked",
            "t": 668.243
          },
          {
            "w": "the",
            "t": 668.745
          },
          {
            "w": "degradation",
            "t": 669.247
          },
          {
            "w": "completely.",
            "t": 669.748
          }
        ]
      },
      {
        "slide": 16,
        "slideId": "s16",
        "speaker": "Dr. Nova",
        "text": "To close Lesson 6.1, we synthesize these mathematical and empirical principles into automated production code. Using Pydantic V2, our diagnostic profiler automatically computes parametric moments, median absolute deviation, D'Agostino normality tests, and Theil-Sen decomposition on every incoming dataset partition.",
        "start": 671.0,
        "end": 692.624,
        "words": [
          {
            "w": "To",
            "t": 671.0
          },
          {
            "w": "close",
            "t": 671.554
          },
          {
            "w": "Lesson",
            "t": 672.109
          },
          {
            "w": "6.1,",
            "t": 672.663
          },
          {
            "w": "we",
            "t": 673.218
          },
          {
            "w": "synthesize",
            "t": 673.772
          },
          {
            "w": "these",
            "t": 674.327
          },
          {
            "w": "mathematical",
            "t": 674.881
          },
          {
            "w": "and",
            "t": 675.436
          },
          {
            "w": "empirical",
            "t": 675.99
          },
          {
            "w": "principles",
            "t": 676.545
          },
          {
            "w": "into",
            "t": 677.099
          },
          {
            "w": "automated",
            "t": 677.654
          },
          {
            "w": "production",
            "t": 678.208
          },
          {
            "w": "code.",
            "t": 678.762
          },
          {
            "w": "Using",
            "t": 679.317
          },
          {
            "w": "Pydantic",
            "t": 679.871
          },
          {
            "w": "V2,",
            "t": 680.426
          },
          {
            "w": "our",
            "t": 680.98
          },
          {
            "w": "diagnostic",
            "t": 681.535
          },
          {
            "w": "profiler",
            "t": 682.089
          },
          {
            "w": "automatically",
            "t": 682.644
          },
          {
            "w": "computes",
            "t": 683.198
          },
          {
            "w": "parametric",
            "t": 683.753
          },
          {
            "w": "moments,",
            "t": 684.307
          },
          {
            "w": "median",
            "t": 684.862
          },
          {
            "w": "absolute",
            "t": 685.416
          },
          {
            "w": "deviation,",
            "t": 685.97
          },
          {
            "w": "D'Agostino",
            "t": 686.525
          },
          {
            "w": "normality",
            "t": 687.079
          },
          {
            "w": "tests,",
            "t": 687.634
          },
          {
            "w": "and",
            "t": 688.188
          },
          {
            "w": "Theil-Sen",
            "t": 688.743
          },
          {
            "w": "decomposition",
            "t": 689.297
          },
          {
            "w": "on",
            "t": 689.852
          },
          {
            "w": "every",
            "t": 690.406
          },
          {
            "w": "incoming",
            "t": 690.961
          },
          {
            "w": "dataset",
            "t": 691.515
          },
          {
            "w": "partition.",
            "t": 692.07
          }
        ]
      },
      {
        "slide": 16,
        "slideId": "s16",
        "speaker": "Dr. Nova",
        "text": "Remember the Four Cardinal Invariants of Exploratory Data Analysis: First, Data equals Fit plus Residual. Second, resistant order statistics protect against leverage corruption. Third, identical summary moments can conceal non-linear geometry. And fourth, always separate exploratory discovery from confirmatory holdout testing. In Lesson 6.2, we delve deep into data types, scales of measurement, and resistant central tendency.",
        "start": 692.974,
        "end": 722.278,
        "words": [
          {
            "w": "Remember",
            "t": 692.974
          },
          {
            "w": "the",
            "t": 693.488
          },
          {
            "w": "Four",
            "t": 694.002
          },
          {
            "w": "Cardinal",
            "t": 694.516
          },
          {
            "w": "Invariants",
            "t": 695.03
          },
          {
            "w": "of",
            "t": 695.545
          },
          {
            "w": "Exploratory",
            "t": 696.059
          },
          {
            "w": "Data",
            "t": 696.573
          },
          {
            "w": "Analysis:",
            "t": 697.087
          },
          {
            "w": "First,",
            "t": 697.601
          },
          {
            "w": "Data",
            "t": 698.115
          },
          {
            "w": "equals",
            "t": 698.629
          },
          {
            "w": "Fit",
            "t": 699.143
          },
          {
            "w": "plus",
            "t": 699.657
          },
          {
            "w": "Residual.",
            "t": 700.171
          },
          {
            "w": "Second,",
            "t": 700.686
          },
          {
            "w": "resistant",
            "t": 701.2
          },
          {
            "w": "order",
            "t": 701.714
          },
          {
            "w": "statistics",
            "t": 702.228
          },
          {
            "w": "protect",
            "t": 702.742
          },
          {
            "w": "against",
            "t": 703.256
          },
          {
            "w": "leverage",
            "t": 703.77
          },
          {
            "w": "corruption.",
            "t": 704.284
          },
          {
            "w": "Third,",
            "t": 704.798
          },
          {
            "w": "identical",
            "t": 705.313
          },
          {
            "w": "summary",
            "t": 705.827
          },
          {
            "w": "moments",
            "t": 706.341
          },
          {
            "w": "can",
            "t": 706.855
          },
          {
            "w": "conceal",
            "t": 707.369
          },
          {
            "w": "non-linear",
            "t": 707.883
          },
          {
            "w": "geometry.",
            "t": 708.397
          },
          {
            "w": "And",
            "t": 708.911
          },
          {
            "w": "fourth,",
            "t": 709.425
          },
          {
            "w": "always",
            "t": 709.939
          },
          {
            "w": "separate",
            "t": 710.454
          },
          {
            "w": "exploratory",
            "t": 710.968
          },
          {
            "w": "discovery",
            "t": 711.482
          },
          {
            "w": "from",
            "t": 711.996
          },
          {
            "w": "confirmatory",
            "t": 712.51
          },
          {
            "w": "holdout",
            "t": 713.024
          },
          {
            "w": "testing.",
            "t": 713.538
          },
          {
            "w": "In",
            "t": 714.052
          },
          {
            "w": "Lesson",
            "t": 714.566
          },
          {
            "w": "6.2,",
            "t": 715.081
          },
          {
            "w": "we",
            "t": 715.595
          },
          {
            "w": "delve",
            "t": 716.109
          },
          {
            "w": "deep",
            "t": 716.623
          },
          {
            "w": "into",
            "t": 717.137
          },
          {
            "w": "data",
            "t": 717.651
          },
          {
            "w": "types,",
            "t": 718.165
          },
          {
            "w": "scales",
            "t": 718.679
          },
          {
            "w": "of",
            "t": 719.193
          },
          {
            "w": "measurement,",
            "t": 719.707
          },
          {
            "w": "and",
            "t": 720.222
          },
          {
            "w": "resistant",
            "t": 720.736
          },
          {
            "w": "central",
            "t": 721.25
          },
          {
            "w": "tendency.",
            "t": 721.764
          }
        ]
      }
    ]
  },
  "ch6_p1_duo": {
    "duration": 743.762,
    "sentences": [
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Dr. Nova",
        "text": "Welcome to Track 6, Kaito! Today we dive into the core epistemology of data science: Exploratory Data Analysis. Too many practitioners immediately feed raw feature tensors into gradient-boosted trees or deep neural networks without looking at the data.",
        "start": 0.0,
        "end": 16.704,
        "words": [
          {
            "w": "Welcome",
            "t": 0.0
          },
          {
            "w": "to",
            "t": 0.44
          },
          {
            "w": "Track",
            "t": 0.879
          },
          {
            "w": "6,",
            "t": 1.319
          },
          {
            "w": "Kaito!",
            "t": 1.758
          },
          {
            "w": "Today",
            "t": 2.198
          },
          {
            "w": "we",
            "t": 2.637
          },
          {
            "w": "dive",
            "t": 3.077
          },
          {
            "w": "into",
            "t": 3.517
          },
          {
            "w": "the",
            "t": 3.956
          },
          {
            "w": "core",
            "t": 4.396
          },
          {
            "w": "epistemology",
            "t": 4.835
          },
          {
            "w": "of",
            "t": 5.275
          },
          {
            "w": "data",
            "t": 5.715
          },
          {
            "w": "science:",
            "t": 6.154
          },
          {
            "w": "Exploratory",
            "t": 6.594
          },
          {
            "w": "Data",
            "t": 7.033
          },
          {
            "w": "Analysis.",
            "t": 7.473
          },
          {
            "w": "Too",
            "t": 7.912
          },
          {
            "w": "many",
            "t": 8.352
          },
          {
            "w": "practitioners",
            "t": 8.792
          },
          {
            "w": "immediately",
            "t": 9.231
          },
          {
            "w": "feed",
            "t": 9.671
          },
          {
            "w": "raw",
            "t": 10.11
          },
          {
            "w": "feature",
            "t": 10.55
          },
          {
            "w": "tensors",
            "t": 10.989
          },
          {
            "w": "into",
            "t": 11.429
          },
          {
            "w": "gradient-boosted",
            "t": 11.869
          },
          {
            "w": "trees",
            "t": 12.308
          },
          {
            "w": "or",
            "t": 12.748
          },
          {
            "w": "deep",
            "t": 13.187
          },
          {
            "w": "neural",
            "t": 13.627
          },
          {
            "w": "networks",
            "t": 14.067
          },
          {
            "w": "without",
            "t": 14.506
          },
          {
            "w": "looking",
            "t": 14.946
          },
          {
            "w": "at",
            "t": 15.385
          },
          {
            "w": "the",
            "t": 15.825
          },
          {
            "w": "data.",
            "t": 16.264
          }
        ]
      },
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Kaito",
        "text": "I admit, Dr. Nova! In modern deep learning, we often assume high-capacity neural networks will automatically discover any underlying latent distributions or feature interactions on their own.",
        "start": 17.054,
        "end": 28.934,
        "words": [
          {
            "w": "I",
            "t": 17.054
          },
          {
            "w": "admit,",
            "t": 17.494
          },
          {
            "w": "Dr.",
            "t": 17.934
          },
          {
            "w": "Nova!",
            "t": 18.374
          },
          {
            "w": "In",
            "t": 18.814
          },
          {
            "w": "modern",
            "t": 19.254
          },
          {
            "w": "deep",
            "t": 19.694
          },
          {
            "w": "learning,",
            "t": 20.134
          },
          {
            "w": "we",
            "t": 20.574
          },
          {
            "w": "often",
            "t": 21.014
          },
          {
            "w": "assume",
            "t": 21.454
          },
          {
            "w": "high-capacity",
            "t": 21.894
          },
          {
            "w": "neural",
            "t": 22.334
          },
          {
            "w": "networks",
            "t": 22.774
          },
          {
            "w": "will",
            "t": 23.214
          },
          {
            "w": "automatically",
            "t": 23.654
          },
          {
            "w": "discover",
            "t": 24.094
          },
          {
            "w": "any",
            "t": 24.534
          },
          {
            "w": "underlying",
            "t": 24.974
          },
          {
            "w": "latent",
            "t": 25.414
          },
          {
            "w": "distributions",
            "t": 25.854
          },
          {
            "w": "or",
            "t": 26.294
          },
          {
            "w": "feature",
            "t": 26.734
          },
          {
            "w": "interactions",
            "t": 27.174
          },
          {
            "w": "on",
            "t": 27.614
          },
          {
            "w": "their",
            "t": 28.054
          },
          {
            "w": "own.",
            "t": 28.494
          }
        ]
      },
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Dr. Nova",
        "text": "That assumption is precisely why production deployments silently fail! If your features harbor catastrophic leverage outliers, bimodal latency distributions, or non-linear residual curvature, neural models will overfit spurious artifacts with supreme confidence. John Tukey taught us that an approximate answer to the right problem is worth vastly more than an exact answer to the wrong one.",
        "start": 29.284,
        "end": 52.756,
        "words": [
          {
            "w": "That",
            "t": 29.284
          },
          {
            "w": "assumption",
            "t": 29.703
          },
          {
            "w": "is",
            "t": 30.122
          },
          {
            "w": "precisely",
            "t": 30.541
          },
          {
            "w": "why",
            "t": 30.961
          },
          {
            "w": "production",
            "t": 31.38
          },
          {
            "w": "deployments",
            "t": 31.799
          },
          {
            "w": "silently",
            "t": 32.218
          },
          {
            "w": "fail!",
            "t": 32.637
          },
          {
            "w": "If",
            "t": 33.056
          },
          {
            "w": "your",
            "t": 33.475
          },
          {
            "w": "features",
            "t": 33.895
          },
          {
            "w": "harbor",
            "t": 34.314
          },
          {
            "w": "catastrophic",
            "t": 34.733
          },
          {
            "w": "leverage",
            "t": 35.152
          },
          {
            "w": "outliers,",
            "t": 35.571
          },
          {
            "w": "bimodal",
            "t": 35.99
          },
          {
            "w": "latency",
            "t": 36.409
          },
          {
            "w": "distributions,",
            "t": 36.829
          },
          {
            "w": "or",
            "t": 37.248
          },
          {
            "w": "non-linear",
            "t": 37.667
          },
          {
            "w": "residual",
            "t": 38.086
          },
          {
            "w": "curvature,",
            "t": 38.505
          },
          {
            "w": "neural",
            "t": 38.924
          },
          {
            "w": "models",
            "t": 39.343
          },
          {
            "w": "will",
            "t": 39.763
          },
          {
            "w": "overfit",
            "t": 40.182
          },
          {
            "w": "spurious",
            "t": 40.601
          },
          {
            "w": "artifacts",
            "t": 41.02
          },
          {
            "w": "with",
            "t": 41.439
          },
          {
            "w": "supreme",
            "t": 41.858
          },
          {
            "w": "confidence.",
            "t": 42.277
          },
          {
            "w": "John",
            "t": 42.697
          },
          {
            "w": "Tukey",
            "t": 43.116
          },
          {
            "w": "taught",
            "t": 43.535
          },
          {
            "w": "us",
            "t": 43.954
          },
          {
            "w": "that",
            "t": 44.373
          },
          {
            "w": "an",
            "t": 44.792
          },
          {
            "w": "approximate",
            "t": 45.211
          },
          {
            "w": "answer",
            "t": 45.631
          },
          {
            "w": "to",
            "t": 46.05
          },
          {
            "w": "the",
            "t": 46.469
          },
          {
            "w": "right",
            "t": 46.888
          },
          {
            "w": "problem",
            "t": 47.307
          },
          {
            "w": "is",
            "t": 47.726
          },
          {
            "w": "worth",
            "t": 48.145
          },
          {
            "w": "vastly",
            "t": 48.565
          },
          {
            "w": "more",
            "t": 48.984
          },
          {
            "w": "than",
            "t": 49.403
          },
          {
            "w": "an",
            "t": 49.822
          },
          {
            "w": "exact",
            "t": 50.241
          },
          {
            "w": "answer",
            "t": 50.66
          },
          {
            "w": "to",
            "t": 51.079
          },
          {
            "w": "the",
            "t": 51.499
          },
          {
            "w": "wrong",
            "t": 51.918
          },
          {
            "w": "one.",
            "t": 52.337
          }
        ]
      },
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Kaito",
        "text": "So EDA is our primary line of defense—auditing the data before we ever write an objective loss function!",
        "start": 53.106,
        "end": 59.538,
        "words": [
          {
            "w": "So",
            "t": 53.106
          },
          {
            "w": "EDA",
            "t": 53.463
          },
          {
            "w": "is",
            "t": 53.821
          },
          {
            "w": "our",
            "t": 54.178
          },
          {
            "w": "primary",
            "t": 54.535
          },
          {
            "w": "line",
            "t": 54.893
          },
          {
            "w": "of",
            "t": 55.25
          },
          {
            "w": "defense—auditing",
            "t": 55.607
          },
          {
            "w": "the",
            "t": 55.965
          },
          {
            "w": "data",
            "t": 56.322
          },
          {
            "w": "before",
            "t": 56.679
          },
          {
            "w": "we",
            "t": 57.037
          },
          {
            "w": "ever",
            "t": 57.394
          },
          {
            "w": "write",
            "t": 57.751
          },
          {
            "w": "an",
            "t": 58.109
          },
          {
            "w": "objective",
            "t": 58.466
          },
          {
            "w": "loss",
            "t": 58.823
          },
          {
            "w": "function!",
            "t": 59.181
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Kaito",
        "text": "Dr. Nova, why do we need this rigid separation between the detective and the judge? If I plot my training set and notice that feature 42 correlates with user churn, why can't I just calculate the p-value right there and publish it?",
        "start": 60.288,
        "end": 73.584,
        "words": [
          {
            "w": "Dr.",
            "t": 60.288
          },
          {
            "w": "Nova,",
            "t": 60.605
          },
          {
            "w": "why",
            "t": 60.921
          },
          {
            "w": "do",
            "t": 61.238
          },
          {
            "w": "we",
            "t": 61.554
          },
          {
            "w": "need",
            "t": 61.871
          },
          {
            "w": "this",
            "t": 62.187
          },
          {
            "w": "rigid",
            "t": 62.504
          },
          {
            "w": "separation",
            "t": 62.821
          },
          {
            "w": "between",
            "t": 63.137
          },
          {
            "w": "the",
            "t": 63.454
          },
          {
            "w": "detective",
            "t": 63.77
          },
          {
            "w": "and",
            "t": 64.087
          },
          {
            "w": "the",
            "t": 64.403
          },
          {
            "w": "judge?",
            "t": 64.72
          },
          {
            "w": "If",
            "t": 65.037
          },
          {
            "w": "I",
            "t": 65.353
          },
          {
            "w": "plot",
            "t": 65.67
          },
          {
            "w": "my",
            "t": 65.986
          },
          {
            "w": "training",
            "t": 66.303
          },
          {
            "w": "set",
            "t": 66.619
          },
          {
            "w": "and",
            "t": 66.936
          },
          {
            "w": "notice",
            "t": 67.253
          },
          {
            "w": "that",
            "t": 67.569
          },
          {
            "w": "feature",
            "t": 67.886
          },
          {
            "w": "42",
            "t": 68.202
          },
          {
            "w": "correlates",
            "t": 68.519
          },
          {
            "w": "with",
            "t": 68.835
          },
          {
            "w": "user",
            "t": 69.152
          },
          {
            "w": "churn,",
            "t": 69.469
          },
          {
            "w": "why",
            "t": 69.785
          },
          {
            "w": "can't",
            "t": 70.102
          },
          {
            "w": "I",
            "t": 70.418
          },
          {
            "w": "just",
            "t": 70.735
          },
          {
            "w": "calculate",
            "t": 71.051
          },
          {
            "w": "the",
            "t": 71.368
          },
          {
            "w": "p-value",
            "t": 71.685
          },
          {
            "w": "right",
            "t": 72.001
          },
          {
            "w": "there",
            "t": 72.318
          },
          {
            "w": "and",
            "t": 72.634
          },
          {
            "w": "publish",
            "t": 72.951
          },
          {
            "w": "it?",
            "t": 73.267
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Dr. Nova",
        "text": "Because that destroys the mathematical validity of your p-value! If you search through eighty noisy features until you spot a correlation, you have traversed what Andrew Gelman calls the Garden of Forking Paths. The nominal five percent significance threshold is completely demolished by researcher degrees of freedom.",
        "start": 73.934,
        "end": 92.198,
        "words": [
          {
            "w": "Because",
            "t": 73.934
          },
          {
            "w": "that",
            "t": 74.323
          },
          {
            "w": "destroys",
            "t": 74.711
          },
          {
            "w": "the",
            "t": 75.1
          },
          {
            "w": "mathematical",
            "t": 75.488
          },
          {
            "w": "validity",
            "t": 75.877
          },
          {
            "w": "of",
            "t": 76.266
          },
          {
            "w": "your",
            "t": 76.654
          },
          {
            "w": "p-value!",
            "t": 77.043
          },
          {
            "w": "If",
            "t": 77.431
          },
          {
            "w": "you",
            "t": 77.82
          },
          {
            "w": "search",
            "t": 78.209
          },
          {
            "w": "through",
            "t": 78.597
          },
          {
            "w": "eighty",
            "t": 78.986
          },
          {
            "w": "noisy",
            "t": 79.374
          },
          {
            "w": "features",
            "t": 79.763
          },
          {
            "w": "until",
            "t": 80.152
          },
          {
            "w": "you",
            "t": 80.54
          },
          {
            "w": "spot",
            "t": 80.929
          },
          {
            "w": "a",
            "t": 81.317
          },
          {
            "w": "correlation,",
            "t": 81.706
          },
          {
            "w": "you",
            "t": 82.095
          },
          {
            "w": "have",
            "t": 82.483
          },
          {
            "w": "traversed",
            "t": 82.872
          },
          {
            "w": "what",
            "t": 83.26
          },
          {
            "w": "Andrew",
            "t": 83.649
          },
          {
            "w": "Gelman",
            "t": 84.037
          },
          {
            "w": "calls",
            "t": 84.426
          },
          {
            "w": "the",
            "t": 84.815
          },
          {
            "w": "Garden",
            "t": 85.203
          },
          {
            "w": "of",
            "t": 85.592
          },
          {
            "w": "Forking",
            "t": 85.98
          },
          {
            "w": "Paths.",
            "t": 86.369
          },
          {
            "w": "The",
            "t": 86.758
          },
          {
            "w": "nominal",
            "t": 87.146
          },
          {
            "w": "five",
            "t": 87.535
          },
          {
            "w": "percent",
            "t": 87.923
          },
          {
            "w": "significance",
            "t": 88.312
          },
          {
            "w": "threshold",
            "t": 88.701
          },
          {
            "w": "is",
            "t": 89.089
          },
          {
            "w": "completely",
            "t": 89.478
          },
          {
            "w": "demolished",
            "t": 89.866
          },
          {
            "w": "by",
            "t": 90.255
          },
          {
            "w": "researcher",
            "t": 90.644
          },
          {
            "w": "degrees",
            "t": 91.032
          },
          {
            "w": "of",
            "t": 91.421
          },
          {
            "w": "freedom.",
            "t": 91.809
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Kaito",
        "text": "So if I test eighty independent noise variables, the probability of finding at least one false positive at alpha equals 0.05 is over ninety-eight percent!",
        "start": 92.548,
        "end": 101.908,
        "words": [
          {
            "w": "So",
            "t": 92.548
          },
          {
            "w": "if",
            "t": 92.922
          },
          {
            "w": "I",
            "t": 93.297
          },
          {
            "w": "test",
            "t": 93.671
          },
          {
            "w": "eighty",
            "t": 94.046
          },
          {
            "w": "independent",
            "t": 94.42
          },
          {
            "w": "noise",
            "t": 94.794
          },
          {
            "w": "variables,",
            "t": 95.169
          },
          {
            "w": "the",
            "t": 95.543
          },
          {
            "w": "probability",
            "t": 95.918
          },
          {
            "w": "of",
            "t": 96.292
          },
          {
            "w": "finding",
            "t": 96.666
          },
          {
            "w": "at",
            "t": 97.041
          },
          {
            "w": "least",
            "t": 97.415
          },
          {
            "w": "one",
            "t": 97.79
          },
          {
            "w": "false",
            "t": 98.164
          },
          {
            "w": "positive",
            "t": 98.538
          },
          {
            "w": "at",
            "t": 98.913
          },
          {
            "w": "alpha",
            "t": 99.287
          },
          {
            "w": "equals",
            "t": 99.662
          },
          {
            "w": "0.05",
            "t": 100.036
          },
          {
            "w": "is",
            "t": 100.41
          },
          {
            "w": "over",
            "t": 100.785
          },
          {
            "w": "ninety-eight",
            "t": 101.159
          },
          {
            "w": "percent!",
            "t": 101.534
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Dr. Nova",
        "text": "Exactly. EDA discovers the candidates freely on an exploratory split. Confirmatory testing requires a frozen holdout split to render an untainted statistical verdict.",
        "start": 102.258,
        "end": 114.426,
        "words": [
          {
            "w": "Exactly.",
            "t": 102.258
          },
          {
            "w": "EDA",
            "t": 102.787
          },
          {
            "w": "discovers",
            "t": 103.316
          },
          {
            "w": "the",
            "t": 103.845
          },
          {
            "w": "candidates",
            "t": 104.374
          },
          {
            "w": "freely",
            "t": 104.903
          },
          {
            "w": "on",
            "t": 105.432
          },
          {
            "w": "an",
            "t": 105.961
          },
          {
            "w": "exploratory",
            "t": 106.49
          },
          {
            "w": "split.",
            "t": 107.019
          },
          {
            "w": "Confirmatory",
            "t": 107.548
          },
          {
            "w": "testing",
            "t": 108.077
          },
          {
            "w": "requires",
            "t": 108.607
          },
          {
            "w": "a",
            "t": 109.136
          },
          {
            "w": "frozen",
            "t": 109.665
          },
          {
            "w": "holdout",
            "t": 110.194
          },
          {
            "w": "split",
            "t": 110.723
          },
          {
            "w": "to",
            "t": 111.252
          },
          {
            "w": "render",
            "t": 111.781
          },
          {
            "w": "an",
            "t": 112.31
          },
          {
            "w": "untainted",
            "t": 112.839
          },
          {
            "w": "statistical",
            "t": 113.368
          },
          {
            "w": "verdict.",
            "t": 113.897
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Kaito",
        "text": "Looking at Table 6.1, the biggest threat in EDA is 'cognitive apophenia'. What does that mean in an applied engineering workflow?",
        "start": 115.176,
        "end": 124.152,
        "words": [
          {
            "w": "Looking",
            "t": 115.176
          },
          {
            "w": "at",
            "t": 115.603
          },
          {
            "w": "Table",
            "t": 116.031
          },
          {
            "w": "6.1,",
            "t": 116.458
          },
          {
            "w": "the",
            "t": 116.886
          },
          {
            "w": "biggest",
            "t": 117.313
          },
          {
            "w": "threat",
            "t": 117.741
          },
          {
            "w": "in",
            "t": 118.168
          },
          {
            "w": "EDA",
            "t": 118.595
          },
          {
            "w": "is",
            "t": 119.023
          },
          {
            "w": "'cognitive",
            "t": 119.45
          },
          {
            "w": "apophenia'.",
            "t": 119.878
          },
          {
            "w": "What",
            "t": 120.305
          },
          {
            "w": "does",
            "t": 120.733
          },
          {
            "w": "that",
            "t": 121.16
          },
          {
            "w": "mean",
            "t": 121.587
          },
          {
            "w": "in",
            "t": 122.015
          },
          {
            "w": "an",
            "t": 122.442
          },
          {
            "w": "applied",
            "t": 122.87
          },
          {
            "w": "engineering",
            "t": 123.297
          },
          {
            "w": "workflow?",
            "t": 123.725
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Dr. Nova",
        "text": "Apophenia is the human brain's evolutionary tendency to perceive meaningful patterns in purely random noise. If you stare at twenty scatter plots of independent Gaussian white noise long enough, you will eventually convince yourself that three points form an emerging exponential trend!",
        "start": 124.502,
        "end": 141.062,
        "words": [
          {
            "w": "Apophenia",
            "t": 124.502
          },
          {
            "w": "is",
            "t": 124.896
          },
          {
            "w": "the",
            "t": 125.291
          },
          {
            "w": "human",
            "t": 125.685
          },
          {
            "w": "brain's",
            "t": 126.079
          },
          {
            "w": "evolutionary",
            "t": 126.473
          },
          {
            "w": "tendency",
            "t": 126.868
          },
          {
            "w": "to",
            "t": 127.262
          },
          {
            "w": "perceive",
            "t": 127.656
          },
          {
            "w": "meaningful",
            "t": 128.051
          },
          {
            "w": "patterns",
            "t": 128.445
          },
          {
            "w": "in",
            "t": 128.839
          },
          {
            "w": "purely",
            "t": 129.233
          },
          {
            "w": "random",
            "t": 129.628
          },
          {
            "w": "noise.",
            "t": 130.022
          },
          {
            "w": "If",
            "t": 130.416
          },
          {
            "w": "you",
            "t": 130.811
          },
          {
            "w": "stare",
            "t": 131.205
          },
          {
            "w": "at",
            "t": 131.599
          },
          {
            "w": "twenty",
            "t": 131.993
          },
          {
            "w": "scatter",
            "t": 132.388
          },
          {
            "w": "plots",
            "t": 132.782
          },
          {
            "w": "of",
            "t": 133.176
          },
          {
            "w": "independent",
            "t": 133.571
          },
          {
            "w": "Gaussian",
            "t": 133.965
          },
          {
            "w": "white",
            "t": 134.359
          },
          {
            "w": "noise",
            "t": 134.753
          },
          {
            "w": "long",
            "t": 135.148
          },
          {
            "w": "enough,",
            "t": 135.542
          },
          {
            "w": "you",
            "t": 135.936
          },
          {
            "w": "will",
            "t": 136.331
          },
          {
            "w": "eventually",
            "t": 136.725
          },
          {
            "w": "convince",
            "t": 137.119
          },
          {
            "w": "yourself",
            "t": 137.513
          },
          {
            "w": "that",
            "t": 137.908
          },
          {
            "w": "three",
            "t": 138.302
          },
          {
            "w": "points",
            "t": 138.696
          },
          {
            "w": "form",
            "t": 139.091
          },
          {
            "w": "an",
            "t": 139.485
          },
          {
            "w": "emerging",
            "t": 139.879
          },
          {
            "w": "exponential",
            "t": 140.273
          },
          {
            "w": "trend!",
            "t": 140.668
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Kaito",
        "text": "And the CDA risk is the opposite: fitting a linear regression without checking if the underlying physical phenomenon is quadratic or multimodal!",
        "start": 141.412,
        "end": 150.004,
        "words": [
          {
            "w": "And",
            "t": 141.412
          },
          {
            "w": "the",
            "t": 141.803
          },
          {
            "w": "CDA",
            "t": 142.193
          },
          {
            "w": "risk",
            "t": 142.584
          },
          {
            "w": "is",
            "t": 142.974
          },
          {
            "w": "the",
            "t": 143.365
          },
          {
            "w": "opposite:",
            "t": 143.755
          },
          {
            "w": "fitting",
            "t": 144.146
          },
          {
            "w": "a",
            "t": 144.536
          },
          {
            "w": "linear",
            "t": 144.927
          },
          {
            "w": "regression",
            "t": 145.317
          },
          {
            "w": "without",
            "t": 145.708
          },
          {
            "w": "checking",
            "t": 146.099
          },
          {
            "w": "if",
            "t": 146.489
          },
          {
            "w": "the",
            "t": 146.88
          },
          {
            "w": "underlying",
            "t": 147.27
          },
          {
            "w": "physical",
            "t": 147.661
          },
          {
            "w": "phenomenon",
            "t": 148.051
          },
          {
            "w": "is",
            "t": 148.442
          },
          {
            "w": "quadratic",
            "t": 148.832
          },
          {
            "w": "or",
            "t": 149.223
          },
          {
            "w": "multimodal!",
            "t": 149.613
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Dr. Nova",
        "text": "Spot on. That is why the two methods are symbiotic: EDA generates hypotheses while guarding against model blindness, and CDA tests those hypotheses against pre-registered holdouts.",
        "start": 150.354,
        "end": 162.786,
        "words": [
          {
            "w": "Spot",
            "t": 150.354
          },
          {
            "w": "on.",
            "t": 150.832
          },
          {
            "w": "That",
            "t": 151.31
          },
          {
            "w": "is",
            "t": 151.788
          },
          {
            "w": "why",
            "t": 152.267
          },
          {
            "w": "the",
            "t": 152.745
          },
          {
            "w": "two",
            "t": 153.223
          },
          {
            "w": "methods",
            "t": 153.701
          },
          {
            "w": "are",
            "t": 154.179
          },
          {
            "w": "symbiotic:",
            "t": 154.657
          },
          {
            "w": "EDA",
            "t": 155.136
          },
          {
            "w": "generates",
            "t": 155.614
          },
          {
            "w": "hypotheses",
            "t": 156.092
          },
          {
            "w": "while",
            "t": 156.57
          },
          {
            "w": "guarding",
            "t": 157.048
          },
          {
            "w": "against",
            "t": 157.526
          },
          {
            "w": "model",
            "t": 158.004
          },
          {
            "w": "blindness,",
            "t": 158.483
          },
          {
            "w": "and",
            "t": 158.961
          },
          {
            "w": "CDA",
            "t": 159.439
          },
          {
            "w": "tests",
            "t": 159.917
          },
          {
            "w": "those",
            "t": 160.395
          },
          {
            "w": "hypotheses",
            "t": 160.873
          },
          {
            "w": "against",
            "t": 161.352
          },
          {
            "w": "pre-registered",
            "t": 161.83
          },
          {
            "w": "holdouts.",
            "t": 162.308
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Kaito",
        "text": "Dr. Nova, why do statisticians focus so obsessively on the residuals rather than the predictions? If our model has a high R-squared of 0.90, doesn't that guarantee our fit is accurate?",
        "start": 163.536,
        "end": 175.632,
        "words": [
          {
            "w": "Dr.",
            "t": 163.536
          },
          {
            "w": "Nova,",
            "t": 163.926
          },
          {
            "w": "why",
            "t": 164.316
          },
          {
            "w": "do",
            "t": 164.707
          },
          {
            "w": "statisticians",
            "t": 165.097
          },
          {
            "w": "focus",
            "t": 165.487
          },
          {
            "w": "so",
            "t": 165.877
          },
          {
            "w": "obsessively",
            "t": 166.267
          },
          {
            "w": "on",
            "t": 166.658
          },
          {
            "w": "the",
            "t": 167.048
          },
          {
            "w": "residuals",
            "t": 167.438
          },
          {
            "w": "rather",
            "t": 167.828
          },
          {
            "w": "than",
            "t": 168.218
          },
          {
            "w": "the",
            "t": 168.609
          },
          {
            "w": "predictions?",
            "t": 168.999
          },
          {
            "w": "If",
            "t": 169.389
          },
          {
            "w": "our",
            "t": 169.779
          },
          {
            "w": "model",
            "t": 170.169
          },
          {
            "w": "has",
            "t": 170.559
          },
          {
            "w": "a",
            "t": 170.95
          },
          {
            "w": "high",
            "t": 171.34
          },
          {
            "w": "R-squared",
            "t": 171.73
          },
          {
            "w": "of",
            "t": 172.12
          },
          {
            "w": "0.90,",
            "t": 172.51
          },
          {
            "w": "doesn't",
            "t": 172.901
          },
          {
            "w": "that",
            "t": 173.291
          },
          {
            "w": "guarantee",
            "t": 173.681
          },
          {
            "w": "our",
            "t": 174.071
          },
          {
            "w": "fit",
            "t": 174.461
          },
          {
            "w": "is",
            "t": 174.852
          },
          {
            "w": "accurate?",
            "t": 175.242
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Dr. Nova",
        "text": "Absolutely not, Kaito! High R-squared can be completely misleading. A linear fit to a quadratic curve can easily achieve an R-squared of 0.90 if the domain is wide enough. But when you plot the residuals e against x, the linear predictions cancel out and the systematic parabolic curvature stands exposed in plain sight!",
        "start": 175.982,
        "end": 197.726,
        "words": [
          {
            "w": "Absolutely",
            "t": 175.982
          },
          {
            "w": "not,",
            "t": 176.392
          },
          {
            "w": "Kaito!",
            "t": 176.803
          },
          {
            "w": "High",
            "t": 177.213
          },
          {
            "w": "R-squared",
            "t": 177.623
          },
          {
            "w": "can",
            "t": 178.033
          },
          {
            "w": "be",
            "t": 178.444
          },
          {
            "w": "completely",
            "t": 178.854
          },
          {
            "w": "misleading.",
            "t": 179.264
          },
          {
            "w": "A",
            "t": 179.674
          },
          {
            "w": "linear",
            "t": 180.085
          },
          {
            "w": "fit",
            "t": 180.495
          },
          {
            "w": "to",
            "t": 180.905
          },
          {
            "w": "a",
            "t": 181.315
          },
          {
            "w": "quadratic",
            "t": 181.726
          },
          {
            "w": "curve",
            "t": 182.136
          },
          {
            "w": "can",
            "t": 182.546
          },
          {
            "w": "easily",
            "t": 182.956
          },
          {
            "w": "achieve",
            "t": 183.367
          },
          {
            "w": "an",
            "t": 183.777
          },
          {
            "w": "R-squared",
            "t": 184.187
          },
          {
            "w": "of",
            "t": 184.598
          },
          {
            "w": "0.90",
            "t": 185.008
          },
          {
            "w": "if",
            "t": 185.418
          },
          {
            "w": "the",
            "t": 185.828
          },
          {
            "w": "domain",
            "t": 186.239
          },
          {
            "w": "is",
            "t": 186.649
          },
          {
            "w": "wide",
            "t": 187.059
          },
          {
            "w": "enough.",
            "t": 187.469
          },
          {
            "w": "But",
            "t": 187.88
          },
          {
            "w": "when",
            "t": 188.29
          },
          {
            "w": "you",
            "t": 188.7
          },
          {
            "w": "plot",
            "t": 189.11
          },
          {
            "w": "the",
            "t": 189.521
          },
          {
            "w": "residuals",
            "t": 189.931
          },
          {
            "w": "e",
            "t": 190.341
          },
          {
            "w": "against",
            "t": 190.752
          },
          {
            "w": "x,",
            "t": 191.162
          },
          {
            "w": "the",
            "t": 191.572
          },
          {
            "w": "linear",
            "t": 191.982
          },
          {
            "w": "predictions",
            "t": 192.393
          },
          {
            "w": "cancel",
            "t": 192.803
          },
          {
            "w": "out",
            "t": 193.213
          },
          {
            "w": "and",
            "t": 193.623
          },
          {
            "w": "the",
            "t": 194.034
          },
          {
            "w": "systematic",
            "t": 194.444
          },
          {
            "w": "parabolic",
            "t": 194.854
          },
          {
            "w": "curvature",
            "t": 195.264
          },
          {
            "w": "stands",
            "t": 195.675
          },
          {
            "w": "exposed",
            "t": 196.085
          },
          {
            "w": "in",
            "t": 196.495
          },
          {
            "w": "plain",
            "t": 196.905
          },
          {
            "w": "sight!",
            "t": 197.316
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Kaito",
        "text": "So residuals strip away the gross signal to let us inspect the error structure under a microscope!",
        "start": 198.076,
        "end": 204.148,
        "words": [
          {
            "w": "So",
            "t": 198.076
          },
          {
            "w": "residuals",
            "t": 198.433
          },
          {
            "w": "strip",
            "t": 198.79
          },
          {
            "w": "away",
            "t": 199.148
          },
          {
            "w": "the",
            "t": 199.505
          },
          {
            "w": "gross",
            "t": 199.862
          },
          {
            "w": "signal",
            "t": 200.219
          },
          {
            "w": "to",
            "t": 200.576
          },
          {
            "w": "let",
            "t": 200.933
          },
          {
            "w": "us",
            "t": 201.291
          },
          {
            "w": "inspect",
            "t": 201.648
          },
          {
            "w": "the",
            "t": 202.005
          },
          {
            "w": "error",
            "t": 202.362
          },
          {
            "w": "structure",
            "t": 202.719
          },
          {
            "w": "under",
            "t": 203.076
          },
          {
            "w": "a",
            "t": 203.434
          },
          {
            "w": "microscope!",
            "t": 203.791
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Dr. Nova",
        "text": "Precisely. If your residuals display any identifiable geometry—curvature, funnel shapes, or multiple modes—your model has left valuable signal uncaptured on the table.",
        "start": 204.498,
        "end": 216.45,
        "words": [
          {
            "w": "Precisely.",
            "t": 204.498
          },
          {
            "w": "If",
            "t": 205.041
          },
          {
            "w": "your",
            "t": 205.585
          },
          {
            "w": "residuals",
            "t": 206.128
          },
          {
            "w": "display",
            "t": 206.671
          },
          {
            "w": "any",
            "t": 207.214
          },
          {
            "w": "identifiable",
            "t": 207.758
          },
          {
            "w": "geometry—curvature,",
            "t": 208.301
          },
          {
            "w": "funnel",
            "t": 208.844
          },
          {
            "w": "shapes,",
            "t": 209.387
          },
          {
            "w": "or",
            "t": 209.931
          },
          {
            "w": "multiple",
            "t": 210.474
          },
          {
            "w": "modes—your",
            "t": 211.017
          },
          {
            "w": "model",
            "t": 211.561
          },
          {
            "w": "has",
            "t": 212.104
          },
          {
            "w": "left",
            "t": 212.647
          },
          {
            "w": "valuable",
            "t": 213.19
          },
          {
            "w": "signal",
            "t": 213.734
          },
          {
            "w": "uncaptured",
            "t": 214.277
          },
          {
            "w": "on",
            "t": 214.82
          },
          {
            "w": "the",
            "t": 215.363
          },
          {
            "w": "table.",
            "t": 215.907
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Kaito",
        "text": "Dr. Nova, I frequently see that expanding funnel shape when predicting financial transaction volumes or server network egress! Why does variance explode at higher scales?",
        "start": 217.2,
        "end": 227.904,
        "words": [
          {
            "w": "Dr.",
            "t": 217.2
          },
          {
            "w": "Nova,",
            "t": 217.628
          },
          {
            "w": "I",
            "t": 218.056
          },
          {
            "w": "frequently",
            "t": 218.484
          },
          {
            "w": "see",
            "t": 218.913
          },
          {
            "w": "that",
            "t": 219.341
          },
          {
            "w": "expanding",
            "t": 219.769
          },
          {
            "w": "funnel",
            "t": 220.197
          },
          {
            "w": "shape",
            "t": 220.625
          },
          {
            "w": "when",
            "t": 221.053
          },
          {
            "w": "predicting",
            "t": 221.482
          },
          {
            "w": "financial",
            "t": 221.91
          },
          {
            "w": "transaction",
            "t": 222.338
          },
          {
            "w": "volumes",
            "t": 222.766
          },
          {
            "w": "or",
            "t": 223.194
          },
          {
            "w": "server",
            "t": 223.622
          },
          {
            "w": "network",
            "t": 224.051
          },
          {
            "w": "egress!",
            "t": 224.479
          },
          {
            "w": "Why",
            "t": 224.907
          },
          {
            "w": "does",
            "t": 225.335
          },
          {
            "w": "variance",
            "t": 225.763
          },
          {
            "w": "explode",
            "t": 226.191
          },
          {
            "w": "at",
            "t": 226.62
          },
          {
            "w": "higher",
            "t": 227.048
          },
          {
            "w": "scales?",
            "t": 227.476
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Dr. Nova",
        "text": "Because physical noise in multiplicative processes is proportional to scale, Kaito! A ten percent fluctuation on a hundred-dollar account is ten dollars, but on a million-dollar account it is a hundred thousand dollars. When you fit linear models without stabilizing variance, the massive points dominate your loss function.",
        "start": 228.254,
        "end": 247.79,
        "words": [
          {
            "w": "Because",
            "t": 228.254
          },
          {
            "w": "physical",
            "t": 228.661
          },
          {
            "w": "noise",
            "t": 229.068
          },
          {
            "w": "in",
            "t": 229.475
          },
          {
            "w": "multiplicative",
            "t": 229.882
          },
          {
            "w": "processes",
            "t": 230.289
          },
          {
            "w": "is",
            "t": 230.696
          },
          {
            "w": "proportional",
            "t": 231.103
          },
          {
            "w": "to",
            "t": 231.51
          },
          {
            "w": "scale,",
            "t": 231.917
          },
          {
            "w": "Kaito!",
            "t": 232.324
          },
          {
            "w": "A",
            "t": 232.731
          },
          {
            "w": "ten",
            "t": 233.138
          },
          {
            "w": "percent",
            "t": 233.545
          },
          {
            "w": "fluctuation",
            "t": 233.952
          },
          {
            "w": "on",
            "t": 234.359
          },
          {
            "w": "a",
            "t": 234.766
          },
          {
            "w": "hundred-dollar",
            "t": 235.173
          },
          {
            "w": "account",
            "t": 235.58
          },
          {
            "w": "is",
            "t": 235.987
          },
          {
            "w": "ten",
            "t": 236.394
          },
          {
            "w": "dollars,",
            "t": 236.801
          },
          {
            "w": "but",
            "t": 237.208
          },
          {
            "w": "on",
            "t": 237.615
          },
          {
            "w": "a",
            "t": 238.022
          },
          {
            "w": "million-dollar",
            "t": 238.429
          },
          {
            "w": "account",
            "t": 238.836
          },
          {
            "w": "it",
            "t": 239.243
          },
          {
            "w": "is",
            "t": 239.65
          },
          {
            "w": "a",
            "t": 240.057
          },
          {
            "w": "hundred",
            "t": 240.464
          },
          {
            "w": "thousand",
            "t": 240.871
          },
          {
            "w": "dollars.",
            "t": 241.278
          },
          {
            "w": "When",
            "t": 241.685
          },
          {
            "w": "you",
            "t": 242.092
          },
          {
            "w": "fit",
            "t": 242.499
          },
          {
            "w": "linear",
            "t": 242.906
          },
          {
            "w": "models",
            "t": 243.313
          },
          {
            "w": "without",
            "t": 243.72
          },
          {
            "w": "stabilizing",
            "t": 244.127
          },
          {
            "w": "variance,",
            "t": 244.534
          },
          {
            "w": "the",
            "t": 244.941
          },
          {
            "w": "massive",
            "t": 245.348
          },
          {
            "w": "points",
            "t": 245.755
          },
          {
            "w": "dominate",
            "t": 246.162
          },
          {
            "w": "your",
            "t": 246.569
          },
          {
            "w": "loss",
            "t": 246.976
          },
          {
            "w": "function.",
            "t": 247.383
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Kaito",
        "text": "And applying a natural log transform compresses that multiplicative scale into additive homoscedastic noise!",
        "start": 248.14,
        "end": 254.716,
        "words": [
          {
            "w": "And",
            "t": 248.14
          },
          {
            "w": "applying",
            "t": 248.61
          },
          {
            "w": "a",
            "t": 249.079
          },
          {
            "w": "natural",
            "t": 249.549
          },
          {
            "w": "log",
            "t": 250.019
          },
          {
            "w": "transform",
            "t": 250.489
          },
          {
            "w": "compresses",
            "t": 250.958
          },
          {
            "w": "that",
            "t": 251.428
          },
          {
            "w": "multiplicative",
            "t": 251.898
          },
          {
            "w": "scale",
            "t": 252.367
          },
          {
            "w": "into",
            "t": 252.837
          },
          {
            "w": "additive",
            "t": 253.307
          },
          {
            "w": "homoscedastic",
            "t": 253.777
          },
          {
            "w": "noise!",
            "t": 254.246
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Dr. Nova",
        "text": "Exactly. And if you see twin peaks at plus or minus fifteen, never assume your model needs more training epochs. It needs a categorical feature like weekend versus weekday to split the two sub-populations.",
        "start": 255.066,
        "end": 268.746,
        "words": [
          {
            "w": "Exactly.",
            "t": 255.066
          },
          {
            "w": "And",
            "t": 255.468
          },
          {
            "w": "if",
            "t": 255.871
          },
          {
            "w": "you",
            "t": 256.273
          },
          {
            "w": "see",
            "t": 256.675
          },
          {
            "w": "twin",
            "t": 257.078
          },
          {
            "w": "peaks",
            "t": 257.48
          },
          {
            "w": "at",
            "t": 257.882
          },
          {
            "w": "plus",
            "t": 258.285
          },
          {
            "w": "or",
            "t": 258.687
          },
          {
            "w": "minus",
            "t": 259.09
          },
          {
            "w": "fifteen,",
            "t": 259.492
          },
          {
            "w": "never",
            "t": 259.894
          },
          {
            "w": "assume",
            "t": 260.297
          },
          {
            "w": "your",
            "t": 260.699
          },
          {
            "w": "model",
            "t": 261.101
          },
          {
            "w": "needs",
            "t": 261.504
          },
          {
            "w": "more",
            "t": 261.906
          },
          {
            "w": "training",
            "t": 262.308
          },
          {
            "w": "epochs.",
            "t": 262.711
          },
          {
            "w": "It",
            "t": 263.113
          },
          {
            "w": "needs",
            "t": 263.515
          },
          {
            "w": "a",
            "t": 263.918
          },
          {
            "w": "categorical",
            "t": 264.32
          },
          {
            "w": "feature",
            "t": 264.722
          },
          {
            "w": "like",
            "t": 265.125
          },
          {
            "w": "weekend",
            "t": 265.527
          },
          {
            "w": "versus",
            "t": 265.93
          },
          {
            "w": "weekday",
            "t": 266.332
          },
          {
            "w": "to",
            "t": 266.734
          },
          {
            "w": "split",
            "t": 267.137
          },
          {
            "w": "the",
            "t": 267.539
          },
          {
            "w": "two",
            "t": 267.941
          },
          {
            "w": "sub-populations.",
            "t": 268.344
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Kaito",
        "text": "Dr. Nova, our speaker stage has traveled down to dock inside the Anscombe Studio! Look at the dataset selector right below us!",
        "start": 269.496,
        "end": 278.064,
        "words": [
          {
            "w": "Dr.",
            "t": 269.496
          },
          {
            "w": "Nova,",
            "t": 269.885
          },
          {
            "w": "our",
            "t": 270.275
          },
          {
            "w": "speaker",
            "t": 270.664
          },
          {
            "w": "stage",
            "t": 271.054
          },
          {
            "w": "has",
            "t": 271.443
          },
          {
            "w": "traveled",
            "t": 271.833
          },
          {
            "w": "down",
            "t": 272.222
          },
          {
            "w": "to",
            "t": 272.612
          },
          {
            "w": "dock",
            "t": 273.001
          },
          {
            "w": "inside",
            "t": 273.391
          },
          {
            "w": "the",
            "t": 273.78
          },
          {
            "w": "Anscombe",
            "t": 274.169
          },
          {
            "w": "Studio!",
            "t": 274.559
          },
          {
            "w": "Look",
            "t": 274.948
          },
          {
            "w": "at",
            "t": 275.338
          },
          {
            "w": "the",
            "t": 275.727
          },
          {
            "w": "dataset",
            "t": 276.117
          },
          {
            "w": "selector",
            "t": 276.506
          },
          {
            "w": "right",
            "t": 276.896
          },
          {
            "w": "below",
            "t": 277.285
          },
          {
            "w": "us!",
            "t": 277.675
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Dr. Nova",
        "text": "Select Dataset 2, Kaito! Notice that even though the Pearson correlation is 0.816 and OLS fits a straight line with slope 0.500, the lower residual canvas shows a smooth, deterministic parabolic arc!",
        "start": 278.414,
        "end": 294.446,
        "words": [
          {
            "w": "Select",
            "t": 278.414
          },
          {
            "w": "Dataset",
            "t": 278.915
          },
          {
            "w": "2,",
            "t": 279.416
          },
          {
            "w": "Kaito!",
            "t": 279.917
          },
          {
            "w": "Notice",
            "t": 280.418
          },
          {
            "w": "that",
            "t": 280.919
          },
          {
            "w": "even",
            "t": 281.42
          },
          {
            "w": "though",
            "t": 281.921
          },
          {
            "w": "the",
            "t": 282.422
          },
          {
            "w": "Pearson",
            "t": 282.923
          },
          {
            "w": "correlation",
            "t": 283.424
          },
          {
            "w": "is",
            "t": 283.925
          },
          {
            "w": "0.816",
            "t": 284.426
          },
          {
            "w": "and",
            "t": 284.927
          },
          {
            "w": "OLS",
            "t": 285.428
          },
          {
            "w": "fits",
            "t": 285.929
          },
          {
            "w": "a",
            "t": 286.43
          },
          {
            "w": "straight",
            "t": 286.931
          },
          {
            "w": "line",
            "t": 287.432
          },
          {
            "w": "with",
            "t": 287.933
          },
          {
            "w": "slope",
            "t": 288.434
          },
          {
            "w": "0.500,",
            "t": 288.935
          },
          {
            "w": "the",
            "t": 289.436
          },
          {
            "w": "lower",
            "t": 289.937
          },
          {
            "w": "residual",
            "t": 290.438
          },
          {
            "w": "canvas",
            "t": 290.939
          },
          {
            "w": "shows",
            "t": 291.44
          },
          {
            "w": "a",
            "t": 291.941
          },
          {
            "w": "smooth,",
            "t": 292.442
          },
          {
            "w": "deterministic",
            "t": 292.943
          },
          {
            "w": "parabolic",
            "t": 293.444
          },
          {
            "w": "arc!",
            "t": 293.945
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Kaito",
        "text": "And on Dataset 3, the green Theil-Sen line ignores the single vertical outlier and recovers the true slope of 0.346, while the red OLS line gets dragged up by almost fifty percent!",
        "start": 294.796,
        "end": 305.716,
        "words": [
          {
            "w": "And",
            "t": 294.796
          },
          {
            "w": "on",
            "t": 295.137
          },
          {
            "w": "Dataset",
            "t": 295.478
          },
          {
            "w": "3,",
            "t": 295.82
          },
          {
            "w": "the",
            "t": 296.161
          },
          {
            "w": "green",
            "t": 296.502
          },
          {
            "w": "Theil-Sen",
            "t": 296.844
          },
          {
            "w": "line",
            "t": 297.185
          },
          {
            "w": "ignores",
            "t": 297.526
          },
          {
            "w": "the",
            "t": 297.867
          },
          {
            "w": "single",
            "t": 298.209
          },
          {
            "w": "vertical",
            "t": 298.55
          },
          {
            "w": "outlier",
            "t": 298.891
          },
          {
            "w": "and",
            "t": 299.232
          },
          {
            "w": "recovers",
            "t": 299.573
          },
          {
            "w": "the",
            "t": 299.915
          },
          {
            "w": "true",
            "t": 300.256
          },
          {
            "w": "slope",
            "t": 300.597
          },
          {
            "w": "of",
            "t": 300.938
          },
          {
            "w": "0.346,",
            "t": 301.28
          },
          {
            "w": "while",
            "t": 301.621
          },
          {
            "w": "the",
            "t": 301.962
          },
          {
            "w": "red",
            "t": 302.303
          },
          {
            "w": "OLS",
            "t": 302.645
          },
          {
            "w": "line",
            "t": 302.986
          },
          {
            "w": "gets",
            "t": 303.327
          },
          {
            "w": "dragged",
            "t": 303.668
          },
          {
            "w": "up",
            "t": 304.01
          },
          {
            "w": "by",
            "t": 304.351
          },
          {
            "w": "almost",
            "t": 304.692
          },
          {
            "w": "fifty",
            "t": 305.034
          },
          {
            "w": "percent!",
            "t": 305.375
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Dr. Nova",
        "text": "That is the power of resistant order statistics. Let our learners explore all four datasets directly below us.",
        "start": 306.066,
        "end": 313.77,
        "words": [
          {
            "w": "That",
            "t": 306.066
          },
          {
            "w": "is",
            "t": 306.494
          },
          {
            "w": "the",
            "t": 306.922
          },
          {
            "w": "power",
            "t": 307.35
          },
          {
            "w": "of",
            "t": 307.778
          },
          {
            "w": "resistant",
            "t": 308.206
          },
          {
            "w": "order",
            "t": 308.634
          },
          {
            "w": "statistics.",
            "t": 309.062
          },
          {
            "w": "Let",
            "t": 309.49
          },
          {
            "w": "our",
            "t": 309.918
          },
          {
            "w": "learners",
            "t": 310.346
          },
          {
            "w": "explore",
            "t": 310.774
          },
          {
            "w": "all",
            "t": 311.202
          },
          {
            "w": "four",
            "t": 311.63
          },
          {
            "w": "datasets",
            "t": 312.058
          },
          {
            "w": "directly",
            "t": 312.486
          },
          {
            "w": "below",
            "t": 312.914
          },
          {
            "w": "us.",
            "t": 313.342
          }
        ]
      },
      {
        "slide": 7,
        "slideId": "s7",
        "speaker": "Kaito",
        "text": "A zero percent breakdown point versus twenty-nine point three percent! That sounds like a massive operational difference for sensor telemetry!",
        "start": 314.52,
        "end": 323.4,
        "words": [
          {
            "w": "A",
            "t": 314.52
          },
          {
            "w": "zero",
            "t": 314.964
          },
          {
            "w": "percent",
            "t": 315.408
          },
          {
            "w": "breakdown",
            "t": 315.852
          },
          {
            "w": "point",
            "t": 316.296
          },
          {
            "w": "versus",
            "t": 316.74
          },
          {
            "w": "twenty-nine",
            "t": 317.184
          },
          {
            "w": "point",
            "t": 317.628
          },
          {
            "w": "three",
            "t": 318.072
          },
          {
            "w": "percent!",
            "t": 318.516
          },
          {
            "w": "That",
            "t": 318.96
          },
          {
            "w": "sounds",
            "t": 319.404
          },
          {
            "w": "like",
            "t": 319.848
          },
          {
            "w": "a",
            "t": 320.292
          },
          {
            "w": "massive",
            "t": 320.736
          },
          {
            "w": "operational",
            "t": 321.18
          },
          {
            "w": "difference",
            "t": 321.624
          },
          {
            "w": "for",
            "t": 322.068
          },
          {
            "w": "sensor",
            "t": 322.512
          },
          {
            "w": "telemetry!",
            "t": 322.956
          }
        ]
      },
      {
        "slide": 7,
        "slideId": "s7",
        "speaker": "Dr. Nova",
        "text": "It is critical, Kaito. Remember the difference between minimizing squared residuals versus computing the median of pairwise slopes. Review our three options above me and select the correct mathematical mechanism!",
        "start": 323.75,
        "end": 337.598,
        "words": [
          {
            "w": "It",
            "t": 323.75
          },
          {
            "w": "is",
            "t": 324.212
          },
          {
            "w": "critical,",
            "t": 324.673
          },
          {
            "w": "Kaito.",
            "t": 325.135
          },
          {
            "w": "Remember",
            "t": 325.596
          },
          {
            "w": "the",
            "t": 326.058
          },
          {
            "w": "difference",
            "t": 326.52
          },
          {
            "w": "between",
            "t": 326.981
          },
          {
            "w": "minimizing",
            "t": 327.443
          },
          {
            "w": "squared",
            "t": 327.904
          },
          {
            "w": "residuals",
            "t": 328.366
          },
          {
            "w": "versus",
            "t": 328.828
          },
          {
            "w": "computing",
            "t": 329.289
          },
          {
            "w": "the",
            "t": 329.751
          },
          {
            "w": "median",
            "t": 330.212
          },
          {
            "w": "of",
            "t": 330.674
          },
          {
            "w": "pairwise",
            "t": 331.136
          },
          {
            "w": "slopes.",
            "t": 331.597
          },
          {
            "w": "Review",
            "t": 332.059
          },
          {
            "w": "our",
            "t": 332.52
          },
          {
            "w": "three",
            "t": 332.982
          },
          {
            "w": "options",
            "t": 333.444
          },
          {
            "w": "above",
            "t": 333.905
          },
          {
            "w": "me",
            "t": 334.367
          },
          {
            "w": "and",
            "t": 334.828
          },
          {
            "w": "select",
            "t": 335.29
          },
          {
            "w": "the",
            "t": 335.752
          },
          {
            "w": "correct",
            "t": 336.213
          },
          {
            "w": "mathematical",
            "t": 336.675
          },
          {
            "w": "mechanism!",
            "t": 337.136
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Kaito",
        "text": "Dr. Nova, why can't a single crazy leverage point corrupt Theil-Sen? If I place a point at x equals one thousand and y equals minus one million, doesn't that affect the slopes?",
        "start": 338.348,
        "end": 349.124,
        "words": [
          {
            "w": "Dr.",
            "t": 338.348
          },
          {
            "w": "Nova,",
            "t": 338.685
          },
          {
            "w": "why",
            "t": 339.022
          },
          {
            "w": "can't",
            "t": 339.358
          },
          {
            "w": "a",
            "t": 339.695
          },
          {
            "w": "single",
            "t": 340.032
          },
          {
            "w": "crazy",
            "t": 340.369
          },
          {
            "w": "leverage",
            "t": 340.705
          },
          {
            "w": "point",
            "t": 341.042
          },
          {
            "w": "corrupt",
            "t": 341.379
          },
          {
            "w": "Theil-Sen?",
            "t": 341.716
          },
          {
            "w": "If",
            "t": 342.052
          },
          {
            "w": "I",
            "t": 342.389
          },
          {
            "w": "place",
            "t": 342.726
          },
          {
            "w": "a",
            "t": 343.062
          },
          {
            "w": "point",
            "t": 343.399
          },
          {
            "w": "at",
            "t": 343.736
          },
          {
            "w": "x",
            "t": 344.073
          },
          {
            "w": "equals",
            "t": 344.41
          },
          {
            "w": "one",
            "t": 344.746
          },
          {
            "w": "thousand",
            "t": 345.083
          },
          {
            "w": "and",
            "t": 345.42
          },
          {
            "w": "y",
            "t": 345.757
          },
          {
            "w": "equals",
            "t": 346.093
          },
          {
            "w": "minus",
            "t": 346.43
          },
          {
            "w": "one",
            "t": 346.767
          },
          {
            "w": "million,",
            "t": 347.103
          },
          {
            "w": "doesn't",
            "t": 347.44
          },
          {
            "w": "that",
            "t": 347.777
          },
          {
            "w": "affect",
            "t": 348.114
          },
          {
            "w": "the",
            "t": 348.451
          },
          {
            "w": "slopes?",
            "t": 348.787
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Dr. Nova",
        "text": "It affects only n minus 1 pairwise slopes connected directly to that corrupted point, Kaito! But the other n-minus-one-choose-two pairs connecting clean data points remain completely untouched. In a dataset of one hundred observations, there are 4,950 pairwise slopes. One outlier corrupts only 99 pairs—just two percent of the total!",
        "start": 349.474,
        "end": 372.754,
        "words": [
          {
            "w": "It",
            "t": 349.474
          },
          {
            "w": "affects",
            "t": 349.94
          },
          {
            "w": "only",
            "t": 350.405
          },
          {
            "w": "n",
            "t": 350.871
          },
          {
            "w": "minus",
            "t": 351.336
          },
          {
            "w": "1",
            "t": 351.802
          },
          {
            "w": "pairwise",
            "t": 352.268
          },
          {
            "w": "slopes",
            "t": 352.733
          },
          {
            "w": "connected",
            "t": 353.199
          },
          {
            "w": "directly",
            "t": 353.664
          },
          {
            "w": "to",
            "t": 354.13
          },
          {
            "w": "that",
            "t": 354.596
          },
          {
            "w": "corrupted",
            "t": 355.061
          },
          {
            "w": "point,",
            "t": 355.527
          },
          {
            "w": "Kaito!",
            "t": 355.992
          },
          {
            "w": "But",
            "t": 356.458
          },
          {
            "w": "the",
            "t": 356.924
          },
          {
            "w": "other",
            "t": 357.389
          },
          {
            "w": "n-minus-one-choose-two",
            "t": 357.855
          },
          {
            "w": "pairs",
            "t": 358.32
          },
          {
            "w": "connecting",
            "t": 358.786
          },
          {
            "w": "clean",
            "t": 359.252
          },
          {
            "w": "data",
            "t": 359.717
          },
          {
            "w": "points",
            "t": 360.183
          },
          {
            "w": "remain",
            "t": 360.648
          },
          {
            "w": "completely",
            "t": 361.114
          },
          {
            "w": "untouched.",
            "t": 361.58
          },
          {
            "w": "In",
            "t": 362.045
          },
          {
            "w": "a",
            "t": 362.511
          },
          {
            "w": "dataset",
            "t": 362.976
          },
          {
            "w": "of",
            "t": 363.442
          },
          {
            "w": "one",
            "t": 363.908
          },
          {
            "w": "hundred",
            "t": 364.373
          },
          {
            "w": "observations,",
            "t": 364.839
          },
          {
            "w": "there",
            "t": 365.304
          },
          {
            "w": "are",
            "t": 365.77
          },
          {
            "w": "4,950",
            "t": 366.236
          },
          {
            "w": "pairwise",
            "t": 366.701
          },
          {
            "w": "slopes.",
            "t": 367.167
          },
          {
            "w": "One",
            "t": 367.632
          },
          {
            "w": "outlier",
            "t": 368.098
          },
          {
            "w": "corrupts",
            "t": 368.564
          },
          {
            "w": "only",
            "t": 369.029
          },
          {
            "w": "99",
            "t": 369.495
          },
          {
            "w": "pairs—just",
            "t": 369.96
          },
          {
            "w": "two",
            "t": 370.426
          },
          {
            "w": "percent",
            "t": 370.892
          },
          {
            "w": "of",
            "t": 371.357
          },
          {
            "w": "the",
            "t": 371.823
          },
          {
            "w": "total!",
            "t": 372.288
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Kaito",
        "text": "And the median of 4,950 slopes easily filters out those 99 corrupted slopes!",
        "start": 373.104,
        "end": 379.512,
        "words": [
          {
            "w": "And",
            "t": 373.104
          },
          {
            "w": "the",
            "t": 373.597
          },
          {
            "w": "median",
            "t": 374.09
          },
          {
            "w": "of",
            "t": 374.583
          },
          {
            "w": "4,950",
            "t": 375.076
          },
          {
            "w": "slopes",
            "t": 375.569
          },
          {
            "w": "easily",
            "t": 376.062
          },
          {
            "w": "filters",
            "t": 376.554
          },
          {
            "w": "out",
            "t": 377.047
          },
          {
            "w": "those",
            "t": 377.54
          },
          {
            "w": "99",
            "t": 378.033
          },
          {
            "w": "corrupted",
            "t": 378.526
          },
          {
            "w": "slopes!",
            "t": 379.019
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Dr. Nova",
        "text": "Precisely. That is why Theil-Sen achieves a 29.3% breakdown point, while OLS completely capitulates.",
        "start": 379.862,
        "end": 388.67,
        "words": [
          {
            "w": "Precisely.",
            "t": 379.862
          },
          {
            "w": "That",
            "t": 380.491
          },
          {
            "w": "is",
            "t": 381.12
          },
          {
            "w": "why",
            "t": 381.749
          },
          {
            "w": "Theil-Sen",
            "t": 382.379
          },
          {
            "w": "achieves",
            "t": 383.008
          },
          {
            "w": "a",
            "t": 383.637
          },
          {
            "w": "29.3%",
            "t": 384.266
          },
          {
            "w": "breakdown",
            "t": 384.895
          },
          {
            "w": "point,",
            "t": 385.524
          },
          {
            "w": "while",
            "t": 386.153
          },
          {
            "w": "OLS",
            "t": 386.783
          },
          {
            "w": "completely",
            "t": 387.412
          },
          {
            "w": "capitulates.",
            "t": 388.041
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Kaito",
        "text": "Dr. Nova, why does the D'Agostino test need both skewness and kurtosis? If a distribution is symmetric with zero skewness, isn't it normal?",
        "start": 389.42,
        "end": 399.02,
        "words": [
          {
            "w": "Dr.",
            "t": 389.42
          },
          {
            "w": "Nova,",
            "t": 389.837
          },
          {
            "w": "why",
            "t": 390.255
          },
          {
            "w": "does",
            "t": 390.672
          },
          {
            "w": "the",
            "t": 391.09
          },
          {
            "w": "D'Agostino",
            "t": 391.507
          },
          {
            "w": "test",
            "t": 391.924
          },
          {
            "w": "need",
            "t": 392.342
          },
          {
            "w": "both",
            "t": 392.759
          },
          {
            "w": "skewness",
            "t": 393.177
          },
          {
            "w": "and",
            "t": 393.594
          },
          {
            "w": "kurtosis?",
            "t": 394.011
          },
          {
            "w": "If",
            "t": 394.429
          },
          {
            "w": "a",
            "t": 394.846
          },
          {
            "w": "distribution",
            "t": 395.263
          },
          {
            "w": "is",
            "t": 395.681
          },
          {
            "w": "symmetric",
            "t": 396.098
          },
          {
            "w": "with",
            "t": 396.516
          },
          {
            "w": "zero",
            "t": 396.933
          },
          {
            "w": "skewness,",
            "t": 397.35
          },
          {
            "w": "isn't",
            "t": 397.768
          },
          {
            "w": "it",
            "t": 398.185
          },
          {
            "w": "normal?",
            "t": 398.603
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Dr. Nova",
        "text": "Not at all, Kaito! A Student's t-distribution with three degrees of freedom is perfectly symmetric with skewness zero, but it has massive heavy tails! Standard z-score scaling assumes thin exponential tails and will fail when extreme samples hit.",
        "start": 399.37,
        "end": 415.45,
        "words": [
          {
            "w": "Not",
            "t": 399.37
          },
          {
            "w": "at",
            "t": 399.793
          },
          {
            "w": "all,",
            "t": 400.216
          },
          {
            "w": "Kaito!",
            "t": 400.639
          },
          {
            "w": "A",
            "t": 401.063
          },
          {
            "w": "Student's",
            "t": 401.486
          },
          {
            "w": "t-distribution",
            "t": 401.909
          },
          {
            "w": "with",
            "t": 402.332
          },
          {
            "w": "three",
            "t": 402.755
          },
          {
            "w": "degrees",
            "t": 403.178
          },
          {
            "w": "of",
            "t": 403.602
          },
          {
            "w": "freedom",
            "t": 404.025
          },
          {
            "w": "is",
            "t": 404.448
          },
          {
            "w": "perfectly",
            "t": 404.871
          },
          {
            "w": "symmetric",
            "t": 405.294
          },
          {
            "w": "with",
            "t": 405.717
          },
          {
            "w": "skewness",
            "t": 406.141
          },
          {
            "w": "zero,",
            "t": 406.564
          },
          {
            "w": "but",
            "t": 406.987
          },
          {
            "w": "it",
            "t": 407.41
          },
          {
            "w": "has",
            "t": 407.833
          },
          {
            "w": "massive",
            "t": 408.256
          },
          {
            "w": "heavy",
            "t": 408.679
          },
          {
            "w": "tails!",
            "t": 409.103
          },
          {
            "w": "Standard",
            "t": 409.526
          },
          {
            "w": "z-score",
            "t": 409.949
          },
          {
            "w": "scaling",
            "t": 410.372
          },
          {
            "w": "assumes",
            "t": 410.795
          },
          {
            "w": "thin",
            "t": 411.218
          },
          {
            "w": "exponential",
            "t": 411.642
          },
          {
            "w": "tails",
            "t": 412.065
          },
          {
            "w": "and",
            "t": 412.488
          },
          {
            "w": "will",
            "t": 412.911
          },
          {
            "w": "fail",
            "t": 413.334
          },
          {
            "w": "when",
            "t": 413.757
          },
          {
            "w": "extreme",
            "t": 414.181
          },
          {
            "w": "samples",
            "t": 414.604
          },
          {
            "w": "hit.",
            "t": 415.027
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Kaito",
        "text": "And the kurtosis term b-2 catches those heavy tails immediately!",
        "start": 415.8,
        "end": 420.144,
        "words": [
          {
            "w": "And",
            "t": 415.8
          },
          {
            "w": "the",
            "t": 416.234
          },
          {
            "w": "kurtosis",
            "t": 416.669
          },
          {
            "w": "term",
            "t": 417.103
          },
          {
            "w": "b-2",
            "t": 417.538
          },
          {
            "w": "catches",
            "t": 417.972
          },
          {
            "w": "those",
            "t": 418.406
          },
          {
            "w": "heavy",
            "t": 418.841
          },
          {
            "w": "tails",
            "t": 419.275
          },
          {
            "w": "immediately!",
            "t": 419.71
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Dr. Nova",
        "text": "Exactly. Combining Z-1 and Z-2 into K-squared gives you an omnibus test that catches asymmetric skew and fat tails simultaneously.",
        "start": 420.494,
        "end": 430.478,
        "words": [
          {
            "w": "Exactly.",
            "t": 420.494
          },
          {
            "w": "Combining",
            "t": 420.993
          },
          {
            "w": "Z-1",
            "t": 421.492
          },
          {
            "w": "and",
            "t": 421.992
          },
          {
            "w": "Z-2",
            "t": 422.491
          },
          {
            "w": "into",
            "t": 422.99
          },
          {
            "w": "K-squared",
            "t": 423.489
          },
          {
            "w": "gives",
            "t": 423.988
          },
          {
            "w": "you",
            "t": 424.488
          },
          {
            "w": "an",
            "t": 424.987
          },
          {
            "w": "omnibus",
            "t": 425.486
          },
          {
            "w": "test",
            "t": 425.985
          },
          {
            "w": "that",
            "t": 426.484
          },
          {
            "w": "catches",
            "t": 426.984
          },
          {
            "w": "asymmetric",
            "t": 427.483
          },
          {
            "w": "skew",
            "t": 427.982
          },
          {
            "w": "and",
            "t": 428.481
          },
          {
            "w": "fat",
            "t": 428.98
          },
          {
            "w": "tails",
            "t": 429.48
          },
          {
            "w": "simultaneously.",
            "t": 429.979
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Kaito",
        "text": "Dr. Nova, where does that magic multiplier 1.4826 come from? Why not just use the raw median absolute deviation?",
        "start": 431.228,
        "end": 440.3,
        "words": [
          {
            "w": "Dr.",
            "t": 431.228
          },
          {
            "w": "Nova,",
            "t": 431.705
          },
          {
            "w": "where",
            "t": 432.183
          },
          {
            "w": "does",
            "t": 432.66
          },
          {
            "w": "that",
            "t": 433.138
          },
          {
            "w": "magic",
            "t": 433.615
          },
          {
            "w": "multiplier",
            "t": 434.093
          },
          {
            "w": "1.4826",
            "t": 434.57
          },
          {
            "w": "come",
            "t": 435.048
          },
          {
            "w": "from?",
            "t": 435.525
          },
          {
            "w": "Why",
            "t": 436.003
          },
          {
            "w": "not",
            "t": 436.48
          },
          {
            "w": "just",
            "t": 436.958
          },
          {
            "w": "use",
            "t": 437.435
          },
          {
            "w": "the",
            "t": 437.913
          },
          {
            "w": "raw",
            "t": 438.39
          },
          {
            "w": "median",
            "t": 438.868
          },
          {
            "w": "absolute",
            "t": 439.345
          },
          {
            "w": "deviation?",
            "t": 439.823
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Dr. Nova",
        "text": "Because for a clean standard normal distribution N(0, 1), the median distance from zero is 0.6745, which is the 75th percentile! One divided by 0.6745 is approximately 1.4826. By multiplying raw MAD by 1.4826, sigma-hat-MAD equals the true standard deviation on Gaussian data, while retaining a fifty percent breakdown point against outliers!",
        "start": 440.65,
        "end": 469.09,
        "words": [
          {
            "w": "Because",
            "t": 440.65
          },
          {
            "w": "for",
            "t": 441.197
          },
          {
            "w": "a",
            "t": 441.744
          },
          {
            "w": "clean",
            "t": 442.291
          },
          {
            "w": "standard",
            "t": 442.838
          },
          {
            "w": "normal",
            "t": 443.385
          },
          {
            "w": "distribution",
            "t": 443.932
          },
          {
            "w": "N(0,",
            "t": 444.478
          },
          {
            "w": "1),",
            "t": 445.025
          },
          {
            "w": "the",
            "t": 445.572
          },
          {
            "w": "median",
            "t": 446.119
          },
          {
            "w": "distance",
            "t": 446.666
          },
          {
            "w": "from",
            "t": 447.213
          },
          {
            "w": "zero",
            "t": 447.76
          },
          {
            "w": "is",
            "t": 448.307
          },
          {
            "w": "0.6745,",
            "t": 448.854
          },
          {
            "w": "which",
            "t": 449.401
          },
          {
            "w": "is",
            "t": 449.948
          },
          {
            "w": "the",
            "t": 450.495
          },
          {
            "w": "75th",
            "t": 451.042
          },
          {
            "w": "percentile!",
            "t": 451.588
          },
          {
            "w": "One",
            "t": 452.135
          },
          {
            "w": "divided",
            "t": 452.682
          },
          {
            "w": "by",
            "t": 453.229
          },
          {
            "w": "0.6745",
            "t": 453.776
          },
          {
            "w": "is",
            "t": 454.323
          },
          {
            "w": "approximately",
            "t": 454.87
          },
          {
            "w": "1.4826.",
            "t": 455.417
          },
          {
            "w": "By",
            "t": 455.964
          },
          {
            "w": "multiplying",
            "t": 456.511
          },
          {
            "w": "raw",
            "t": 457.058
          },
          {
            "w": "MAD",
            "t": 457.605
          },
          {
            "w": "by",
            "t": 458.152
          },
          {
            "w": "1.4826,",
            "t": 458.698
          },
          {
            "w": "sigma-hat-MAD",
            "t": 459.245
          },
          {
            "w": "equals",
            "t": 459.792
          },
          {
            "w": "the",
            "t": 460.339
          },
          {
            "w": "true",
            "t": 460.886
          },
          {
            "w": "standard",
            "t": 461.433
          },
          {
            "w": "deviation",
            "t": 461.98
          },
          {
            "w": "on",
            "t": 462.527
          },
          {
            "w": "Gaussian",
            "t": 463.074
          },
          {
            "w": "data,",
            "t": 463.621
          },
          {
            "w": "while",
            "t": 464.168
          },
          {
            "w": "retaining",
            "t": 464.715
          },
          {
            "w": "a",
            "t": 465.262
          },
          {
            "w": "fifty",
            "t": 465.808
          },
          {
            "w": "percent",
            "t": 466.355
          },
          {
            "w": "breakdown",
            "t": 466.902
          },
          {
            "w": "point",
            "t": 467.449
          },
          {
            "w": "against",
            "t": 467.996
          },
          {
            "w": "outliers!",
            "t": 468.543
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Kaito",
        "text": "So if forty percent of my sensor readings are corrupted by zero-volt shorts, sigma-hat-MAD will still report the true standard deviation of the physical process!",
        "start": 469.44,
        "end": 478.488,
        "words": [
          {
            "w": "So",
            "t": 469.44
          },
          {
            "w": "if",
            "t": 469.802
          },
          {
            "w": "forty",
            "t": 470.164
          },
          {
            "w": "percent",
            "t": 470.526
          },
          {
            "w": "of",
            "t": 470.888
          },
          {
            "w": "my",
            "t": 471.25
          },
          {
            "w": "sensor",
            "t": 471.612
          },
          {
            "w": "readings",
            "t": 471.973
          },
          {
            "w": "are",
            "t": 472.335
          },
          {
            "w": "corrupted",
            "t": 472.697
          },
          {
            "w": "by",
            "t": 473.059
          },
          {
            "w": "zero-volt",
            "t": 473.421
          },
          {
            "w": "shorts,",
            "t": 473.783
          },
          {
            "w": "sigma-hat-MAD",
            "t": 474.145
          },
          {
            "w": "will",
            "t": 474.507
          },
          {
            "w": "still",
            "t": 474.869
          },
          {
            "w": "report",
            "t": 475.231
          },
          {
            "w": "the",
            "t": 475.593
          },
          {
            "w": "true",
            "t": 475.955
          },
          {
            "w": "standard",
            "t": 476.316
          },
          {
            "w": "deviation",
            "t": 476.678
          },
          {
            "w": "of",
            "t": 477.04
          },
          {
            "w": "the",
            "t": 477.402
          },
          {
            "w": "physical",
            "t": 477.764
          },
          {
            "w": "process!",
            "t": 478.126
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Dr. Nova",
        "text": "Exactly. That is the essence of resistant statistics: estimating true physical parameters despite heavy contamination.",
        "start": 478.838,
        "end": 487.334,
        "words": [
          {
            "w": "Exactly.",
            "t": 478.838
          },
          {
            "w": "That",
            "t": 479.404
          },
          {
            "w": "is",
            "t": 479.971
          },
          {
            "w": "the",
            "t": 480.537
          },
          {
            "w": "essence",
            "t": 481.104
          },
          {
            "w": "of",
            "t": 481.67
          },
          {
            "w": "resistant",
            "t": 482.236
          },
          {
            "w": "statistics:",
            "t": 482.803
          },
          {
            "w": "estimating",
            "t": 483.369
          },
          {
            "w": "true",
            "t": 483.936
          },
          {
            "w": "physical",
            "t": 484.502
          },
          {
            "w": "parameters",
            "t": 485.068
          },
          {
            "w": "despite",
            "t": 485.635
          },
          {
            "w": "heavy",
            "t": 486.201
          },
          {
            "w": "contamination.",
            "t": 486.768
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Kaito",
        "text": "Dr. Nova, this Anscombe example is terrifying! If an automated ML pipeline only evaluated mean, standard deviation, and Pearson correlation, it would see zero difference between Dataset 1 and Dataset 2!",
        "start": 488.084,
        "end": 501.524,
        "words": [
          {
            "w": "Dr.",
            "t": 488.084
          },
          {
            "w": "Nova,",
            "t": 488.518
          },
          {
            "w": "this",
            "t": 488.951
          },
          {
            "w": "Anscombe",
            "t": 489.385
          },
          {
            "w": "example",
            "t": 489.818
          },
          {
            "w": "is",
            "t": 490.252
          },
          {
            "w": "terrifying!",
            "t": 490.685
          },
          {
            "w": "If",
            "t": 491.119
          },
          {
            "w": "an",
            "t": 491.552
          },
          {
            "w": "automated",
            "t": 491.986
          },
          {
            "w": "ML",
            "t": 492.419
          },
          {
            "w": "pipeline",
            "t": 492.853
          },
          {
            "w": "only",
            "t": 493.287
          },
          {
            "w": "evaluated",
            "t": 493.72
          },
          {
            "w": "mean,",
            "t": 494.154
          },
          {
            "w": "standard",
            "t": 494.587
          },
          {
            "w": "deviation,",
            "t": 495.021
          },
          {
            "w": "and",
            "t": 495.454
          },
          {
            "w": "Pearson",
            "t": 495.888
          },
          {
            "w": "correlation,",
            "t": 496.321
          },
          {
            "w": "it",
            "t": 496.755
          },
          {
            "w": "would",
            "t": 497.189
          },
          {
            "w": "see",
            "t": 497.622
          },
          {
            "w": "zero",
            "t": 498.056
          },
          {
            "w": "difference",
            "t": 498.489
          },
          {
            "w": "between",
            "t": 498.923
          },
          {
            "w": "Dataset",
            "t": 499.356
          },
          {
            "w": "1",
            "t": 499.79
          },
          {
            "w": "and",
            "t": 500.223
          },
          {
            "w": "Dataset",
            "t": 500.657
          },
          {
            "w": "2!",
            "t": 501.09
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Dr. Nova",
        "text": "Exactly. And if you deployed that linear model on Dataset 2 to predict at x equals 18, the model predicts y-hat equals 12.0, whereas the true physical parabola yields minus 2.4! That is an error of 14.4 units—a 120% error on a model with an R-squared of 0.67!",
        "start": 501.874,
        "end": 523.522,
        "words": [
          {
            "w": "Exactly.",
            "t": 501.874
          },
          {
            "w": "And",
            "t": 502.325
          },
          {
            "w": "if",
            "t": 502.776
          },
          {
            "w": "you",
            "t": 503.227
          },
          {
            "w": "deployed",
            "t": 503.678
          },
          {
            "w": "that",
            "t": 504.129
          },
          {
            "w": "linear",
            "t": 504.58
          },
          {
            "w": "model",
            "t": 505.031
          },
          {
            "w": "on",
            "t": 505.482
          },
          {
            "w": "Dataset",
            "t": 505.933
          },
          {
            "w": "2",
            "t": 506.384
          },
          {
            "w": "to",
            "t": 506.835
          },
          {
            "w": "predict",
            "t": 507.286
          },
          {
            "w": "at",
            "t": 507.737
          },
          {
            "w": "x",
            "t": 508.188
          },
          {
            "w": "equals",
            "t": 508.639
          },
          {
            "w": "18,",
            "t": 509.09
          },
          {
            "w": "the",
            "t": 509.541
          },
          {
            "w": "model",
            "t": 509.992
          },
          {
            "w": "predicts",
            "t": 510.443
          },
          {
            "w": "y-hat",
            "t": 510.894
          },
          {
            "w": "equals",
            "t": 511.345
          },
          {
            "w": "12.0,",
            "t": 511.796
          },
          {
            "w": "whereas",
            "t": 512.247
          },
          {
            "w": "the",
            "t": 512.698
          },
          {
            "w": "true",
            "t": 513.149
          },
          {
            "w": "physical",
            "t": 513.6
          },
          {
            "w": "parabola",
            "t": 514.051
          },
          {
            "w": "yields",
            "t": 514.502
          },
          {
            "w": "minus",
            "t": 514.953
          },
          {
            "w": "2.4!",
            "t": 515.404
          },
          {
            "w": "That",
            "t": 515.855
          },
          {
            "w": "is",
            "t": 516.306
          },
          {
            "w": "an",
            "t": 516.757
          },
          {
            "w": "error",
            "t": 517.208
          },
          {
            "w": "of",
            "t": 517.659
          },
          {
            "w": "14.4",
            "t": 518.11
          },
          {
            "w": "units—a",
            "t": 518.561
          },
          {
            "w": "120%",
            "t": 519.012
          },
          {
            "w": "error",
            "t": 519.463
          },
          {
            "w": "on",
            "t": 519.914
          },
          {
            "w": "a",
            "t": 520.365
          },
          {
            "w": "model",
            "t": 520.816
          },
          {
            "w": "with",
            "t": 521.267
          },
          {
            "w": "an",
            "t": 521.718
          },
          {
            "w": "R-squared",
            "t": 522.169
          },
          {
            "w": "of",
            "t": 522.62
          },
          {
            "w": "0.67!",
            "t": 523.071
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Kaito",
        "text": "And plotting the data or the residuals instantly diagnoses the quadratic curvature before deployment!",
        "start": 523.872,
        "end": 529.944,
        "words": [
          {
            "w": "And",
            "t": 523.872
          },
          {
            "w": "plotting",
            "t": 524.306
          },
          {
            "w": "the",
            "t": 524.739
          },
          {
            "w": "data",
            "t": 525.173
          },
          {
            "w": "or",
            "t": 525.607
          },
          {
            "w": "the",
            "t": 526.041
          },
          {
            "w": "residuals",
            "t": 526.474
          },
          {
            "w": "instantly",
            "t": 526.908
          },
          {
            "w": "diagnoses",
            "t": 527.342
          },
          {
            "w": "the",
            "t": 527.775
          },
          {
            "w": "quadratic",
            "t": 528.209
          },
          {
            "w": "curvature",
            "t": 528.643
          },
          {
            "w": "before",
            "t": 529.077
          },
          {
            "w": "deployment!",
            "t": 529.51
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Dr. Nova",
        "text": "Never deploy a model without looking at the residual geometry. Summary statistics summarize; they do not diagnose.",
        "start": 530.294,
        "end": 538.334,
        "words": [
          {
            "w": "Never",
            "t": 530.294
          },
          {
            "w": "deploy",
            "t": 530.767
          },
          {
            "w": "a",
            "t": 531.24
          },
          {
            "w": "model",
            "t": 531.713
          },
          {
            "w": "without",
            "t": 532.186
          },
          {
            "w": "looking",
            "t": 532.659
          },
          {
            "w": "at",
            "t": 533.132
          },
          {
            "w": "the",
            "t": 533.605
          },
          {
            "w": "residual",
            "t": 534.078
          },
          {
            "w": "geometry.",
            "t": 534.55
          },
          {
            "w": "Summary",
            "t": 535.023
          },
          {
            "w": "statistics",
            "t": 535.496
          },
          {
            "w": "summarize;",
            "t": 535.969
          },
          {
            "w": "they",
            "t": 536.442
          },
          {
            "w": "do",
            "t": 536.915
          },
          {
            "w": "not",
            "t": 537.388
          },
          {
            "w": "diagnose.",
            "t": 537.861
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Kaito",
        "text": "Dr. Nova, our speaker stage has traveled down to dock inside the Tukey Decomposition Workbench! Look at the smoother window slider right below us!",
        "start": 539.084,
        "end": 548.444,
        "words": [
          {
            "w": "Dr.",
            "t": 539.084
          },
          {
            "w": "Nova,",
            "t": 539.474
          },
          {
            "w": "our",
            "t": 539.864
          },
          {
            "w": "speaker",
            "t": 540.254
          },
          {
            "w": "stage",
            "t": 540.644
          },
          {
            "w": "has",
            "t": 541.034
          },
          {
            "w": "traveled",
            "t": 541.424
          },
          {
            "w": "down",
            "t": 541.814
          },
          {
            "w": "to",
            "t": 542.204
          },
          {
            "w": "dock",
            "t": 542.594
          },
          {
            "w": "inside",
            "t": 542.984
          },
          {
            "w": "the",
            "t": 543.374
          },
          {
            "w": "Tukey",
            "t": 543.764
          },
          {
            "w": "Decomposition",
            "t": 544.154
          },
          {
            "w": "Workbench!",
            "t": 544.544
          },
          {
            "w": "Look",
            "t": 544.934
          },
          {
            "w": "at",
            "t": 545.324
          },
          {
            "w": "the",
            "t": 545.714
          },
          {
            "w": "smoother",
            "t": 546.104
          },
          {
            "w": "window",
            "t": 546.494
          },
          {
            "w": "slider",
            "t": 546.884
          },
          {
            "w": "right",
            "t": 547.274
          },
          {
            "w": "below",
            "t": 547.664
          },
          {
            "w": "us!",
            "t": 548.054
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Dr. Nova",
        "text": "Drag the outlier slider to inject four impulse spikes, Kaito! Watch the upper canvas: because we use a moving median rather than a moving average, the blue fit curve doesn't flinch at all!",
        "start": 548.794,
        "end": 560.77,
        "words": [
          {
            "w": "Drag",
            "t": 548.794
          },
          {
            "w": "the",
            "t": 549.157
          },
          {
            "w": "outlier",
            "t": 549.52
          },
          {
            "w": "slider",
            "t": 549.883
          },
          {
            "w": "to",
            "t": 550.246
          },
          {
            "w": "inject",
            "t": 550.609
          },
          {
            "w": "four",
            "t": 550.971
          },
          {
            "w": "impulse",
            "t": 551.334
          },
          {
            "w": "spikes,",
            "t": 551.697
          },
          {
            "w": "Kaito!",
            "t": 552.06
          },
          {
            "w": "Watch",
            "t": 552.423
          },
          {
            "w": "the",
            "t": 552.786
          },
          {
            "w": "upper",
            "t": 553.149
          },
          {
            "w": "canvas:",
            "t": 553.512
          },
          {
            "w": "because",
            "t": 553.875
          },
          {
            "w": "we",
            "t": 554.238
          },
          {
            "w": "use",
            "t": 554.601
          },
          {
            "w": "a",
            "t": 554.963
          },
          {
            "w": "moving",
            "t": 555.326
          },
          {
            "w": "median",
            "t": 555.689
          },
          {
            "w": "rather",
            "t": 556.052
          },
          {
            "w": "than",
            "t": 556.415
          },
          {
            "w": "a",
            "t": 556.778
          },
          {
            "w": "moving",
            "t": 557.141
          },
          {
            "w": "average,",
            "t": 557.504
          },
          {
            "w": "the",
            "t": 557.867
          },
          {
            "w": "blue",
            "t": 558.23
          },
          {
            "w": "fit",
            "t": 558.593
          },
          {
            "w": "curve",
            "t": 558.955
          },
          {
            "w": "doesn't",
            "t": 559.318
          },
          {
            "w": "flinch",
            "t": 559.681
          },
          {
            "w": "at",
            "t": 560.044
          },
          {
            "w": "all!",
            "t": 560.407
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Kaito",
        "text": "And the lower residual canvas captures every single spike as an isolated red stem while the rest of the residuals stay tight around zero! Maximum decomposition error is exact zero!",
        "start": 561.12,
        "end": 572.64,
        "words": [
          {
            "w": "And",
            "t": 561.12
          },
          {
            "w": "the",
            "t": 561.504
          },
          {
            "w": "lower",
            "t": 561.888
          },
          {
            "w": "residual",
            "t": 562.272
          },
          {
            "w": "canvas",
            "t": 562.656
          },
          {
            "w": "captures",
            "t": 563.04
          },
          {
            "w": "every",
            "t": 563.424
          },
          {
            "w": "single",
            "t": 563.808
          },
          {
            "w": "spike",
            "t": 564.192
          },
          {
            "w": "as",
            "t": 564.576
          },
          {
            "w": "an",
            "t": 564.96
          },
          {
            "w": "isolated",
            "t": 565.344
          },
          {
            "w": "red",
            "t": 565.728
          },
          {
            "w": "stem",
            "t": 566.112
          },
          {
            "w": "while",
            "t": 566.496
          },
          {
            "w": "the",
            "t": 566.88
          },
          {
            "w": "rest",
            "t": 567.264
          },
          {
            "w": "of",
            "t": 567.648
          },
          {
            "w": "the",
            "t": 568.032
          },
          {
            "w": "residuals",
            "t": 568.416
          },
          {
            "w": "stay",
            "t": 568.8
          },
          {
            "w": "tight",
            "t": 569.184
          },
          {
            "w": "around",
            "t": 569.568
          },
          {
            "w": "zero!",
            "t": 569.952
          },
          {
            "w": "Maximum",
            "t": 570.336
          },
          {
            "w": "decomposition",
            "t": 570.72
          },
          {
            "w": "error",
            "t": 571.104
          },
          {
            "w": "is",
            "t": 571.488
          },
          {
            "w": "exact",
            "t": 571.872
          },
          {
            "w": "zero!",
            "t": 572.256
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Dr. Nova",
        "text": "That is Tukey's identity in action: Data equals Fit plus Residual. Let our learners experiment with window bandwidth and outlier shocks directly below us.",
        "start": 572.99,
        "end": 583.19,
        "words": [
          {
            "w": "That",
            "t": 572.99
          },
          {
            "w": "is",
            "t": 573.415
          },
          {
            "w": "Tukey's",
            "t": 573.84
          },
          {
            "w": "identity",
            "t": 574.265
          },
          {
            "w": "in",
            "t": 574.69
          },
          {
            "w": "action:",
            "t": 575.115
          },
          {
            "w": "Data",
            "t": 575.54
          },
          {
            "w": "equals",
            "t": 575.965
          },
          {
            "w": "Fit",
            "t": 576.39
          },
          {
            "w": "plus",
            "t": 576.815
          },
          {
            "w": "Residual.",
            "t": 577.24
          },
          {
            "w": "Let",
            "t": 577.665
          },
          {
            "w": "our",
            "t": 578.09
          },
          {
            "w": "learners",
            "t": 578.515
          },
          {
            "w": "experiment",
            "t": 578.94
          },
          {
            "w": "with",
            "t": 579.365
          },
          {
            "w": "window",
            "t": 579.79
          },
          {
            "w": "bandwidth",
            "t": 580.215
          },
          {
            "w": "and",
            "t": 580.64
          },
          {
            "w": "outlier",
            "t": 581.065
          },
          {
            "w": "shocks",
            "t": 581.49
          },
          {
            "w": "directly",
            "t": 581.915
          },
          {
            "w": "below",
            "t": 582.34
          },
          {
            "w": "us.",
            "t": 582.765
          }
        ]
      },
      {
        "slide": 13,
        "slideId": "s13",
        "speaker": "Kaito",
        "text": "Eighty candidate features and a p-value of 0.012! That sounds convincing to an executive, but we know the probability of finding a false positive is massive!",
        "start": 583.94,
        "end": 594.74,
        "words": [
          {
            "w": "Eighty",
            "t": 583.94
          },
          {
            "w": "candidate",
            "t": 584.355
          },
          {
            "w": "features",
            "t": 584.771
          },
          {
            "w": "and",
            "t": 585.186
          },
          {
            "w": "a",
            "t": 585.602
          },
          {
            "w": "p-value",
            "t": 586.017
          },
          {
            "w": "of",
            "t": 586.432
          },
          {
            "w": "0.012!",
            "t": 586.848
          },
          {
            "w": "That",
            "t": 587.263
          },
          {
            "w": "sounds",
            "t": 587.678
          },
          {
            "w": "convincing",
            "t": 588.094
          },
          {
            "w": "to",
            "t": 588.509
          },
          {
            "w": "an",
            "t": 588.925
          },
          {
            "w": "executive,",
            "t": 589.34
          },
          {
            "w": "but",
            "t": 589.755
          },
          {
            "w": "we",
            "t": 590.171
          },
          {
            "w": "know",
            "t": 590.586
          },
          {
            "w": "the",
            "t": 591.002
          },
          {
            "w": "probability",
            "t": 591.417
          },
          {
            "w": "of",
            "t": 591.832
          },
          {
            "w": "finding",
            "t": 592.248
          },
          {
            "w": "a",
            "t": 592.663
          },
          {
            "w": "false",
            "t": 593.078
          },
          {
            "w": "positive",
            "t": 593.494
          },
          {
            "w": "is",
            "t": 593.909
          },
          {
            "w": "massive!",
            "t": 594.325
          }
        ]
      },
      {
        "slide": 13,
        "slideId": "s13",
        "speaker": "Dr. Nova",
        "text": "Exactly, Kaito. Remember our Gelman and Loken derivation: 1 minus 0.95 to the 80th power. Review our three options above me and select the rigorous architectural resolution!",
        "start": 595.09,
        "end": 608.818,
        "words": [
          {
            "w": "Exactly,",
            "t": 595.09
          },
          {
            "w": "Kaito.",
            "t": 595.598
          },
          {
            "w": "Remember",
            "t": 596.107
          },
          {
            "w": "our",
            "t": 596.615
          },
          {
            "w": "Gelman",
            "t": 597.124
          },
          {
            "w": "and",
            "t": 597.632
          },
          {
            "w": "Loken",
            "t": 598.141
          },
          {
            "w": "derivation:",
            "t": 598.649
          },
          {
            "w": "1",
            "t": 599.158
          },
          {
            "w": "minus",
            "t": 599.666
          },
          {
            "w": "0.95",
            "t": 600.174
          },
          {
            "w": "to",
            "t": 600.683
          },
          {
            "w": "the",
            "t": 601.191
          },
          {
            "w": "80th",
            "t": 601.7
          },
          {
            "w": "power.",
            "t": 602.208
          },
          {
            "w": "Review",
            "t": 602.717
          },
          {
            "w": "our",
            "t": 603.225
          },
          {
            "w": "three",
            "t": 603.734
          },
          {
            "w": "options",
            "t": 604.242
          },
          {
            "w": "above",
            "t": 604.75
          },
          {
            "w": "me",
            "t": 605.259
          },
          {
            "w": "and",
            "t": 605.767
          },
          {
            "w": "select",
            "t": 606.276
          },
          {
            "w": "the",
            "t": 606.784
          },
          {
            "w": "rigorous",
            "t": 607.293
          },
          {
            "w": "architectural",
            "t": 607.801
          },
          {
            "w": "resolution!",
            "t": 608.31
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Kaito",
        "text": "Dr. Nova, I once worked on a team where the automated data pipeline automatically dropped every row with values greater than three standard deviations from the mean. Isn't that standard practice?",
        "start": 609.568,
        "end": 621.04,
        "words": [
          {
            "w": "Dr.",
            "t": 609.568
          },
          {
            "w": "Nova,",
            "t": 609.938
          },
          {
            "w": "I",
            "t": 610.308
          },
          {
            "w": "once",
            "t": 610.678
          },
          {
            "w": "worked",
            "t": 611.048
          },
          {
            "w": "on",
            "t": 611.418
          },
          {
            "w": "a",
            "t": 611.788
          },
          {
            "w": "team",
            "t": 612.158
          },
          {
            "w": "where",
            "t": 612.529
          },
          {
            "w": "the",
            "t": 612.899
          },
          {
            "w": "automated",
            "t": 613.269
          },
          {
            "w": "data",
            "t": 613.639
          },
          {
            "w": "pipeline",
            "t": 614.009
          },
          {
            "w": "automatically",
            "t": 614.379
          },
          {
            "w": "dropped",
            "t": 614.749
          },
          {
            "w": "every",
            "t": 615.119
          },
          {
            "w": "row",
            "t": 615.489
          },
          {
            "w": "with",
            "t": 615.859
          },
          {
            "w": "values",
            "t": 616.229
          },
          {
            "w": "greater",
            "t": 616.599
          },
          {
            "w": "than",
            "t": 616.969
          },
          {
            "w": "three",
            "t": 617.339
          },
          {
            "w": "standard",
            "t": 617.709
          },
          {
            "w": "deviations",
            "t": 618.079
          },
          {
            "w": "from",
            "t": 618.45
          },
          {
            "w": "the",
            "t": 618.82
          },
          {
            "w": "mean.",
            "t": 619.19
          },
          {
            "w": "Isn't",
            "t": 619.56
          },
          {
            "w": "that",
            "t": 619.93
          },
          {
            "w": "standard",
            "t": 620.3
          },
          {
            "w": "practice?",
            "t": 620.67
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Dr. Nova",
        "text": "That is one of the most destructive antipatterns in data engineering, Kaito! In financial fraud detection or rare disease diagnosis, the three-sigma outliers ARE the entire phenomenon of interest! If you clip them without exploratory investigation, your model will be trained on a sanitized fantasy world where fraud never occurs.",
        "start": 621.39,
        "end": 641.694,
        "words": [
          {
            "w": "That",
            "t": 621.39
          },
          {
            "w": "is",
            "t": 621.796
          },
          {
            "w": "one",
            "t": 622.202
          },
          {
            "w": "of",
            "t": 622.608
          },
          {
            "w": "the",
            "t": 623.014
          },
          {
            "w": "most",
            "t": 623.42
          },
          {
            "w": "destructive",
            "t": 623.826
          },
          {
            "w": "antipatterns",
            "t": 624.233
          },
          {
            "w": "in",
            "t": 624.639
          },
          {
            "w": "data",
            "t": 625.045
          },
          {
            "w": "engineering,",
            "t": 625.451
          },
          {
            "w": "Kaito!",
            "t": 625.857
          },
          {
            "w": "In",
            "t": 626.263
          },
          {
            "w": "financial",
            "t": 626.669
          },
          {
            "w": "fraud",
            "t": 627.075
          },
          {
            "w": "detection",
            "t": 627.481
          },
          {
            "w": "or",
            "t": 627.887
          },
          {
            "w": "rare",
            "t": 628.293
          },
          {
            "w": "disease",
            "t": 628.699
          },
          {
            "w": "diagnosis,",
            "t": 629.106
          },
          {
            "w": "the",
            "t": 629.512
          },
          {
            "w": "three-sigma",
            "t": 629.918
          },
          {
            "w": "outliers",
            "t": 630.324
          },
          {
            "w": "ARE",
            "t": 630.73
          },
          {
            "w": "the",
            "t": 631.136
          },
          {
            "w": "entire",
            "t": 631.542
          },
          {
            "w": "phenomenon",
            "t": 631.948
          },
          {
            "w": "of",
            "t": 632.354
          },
          {
            "w": "interest!",
            "t": 632.76
          },
          {
            "w": "If",
            "t": 633.166
          },
          {
            "w": "you",
            "t": 633.572
          },
          {
            "w": "clip",
            "t": 633.978
          },
          {
            "w": "them",
            "t": 634.385
          },
          {
            "w": "without",
            "t": 634.791
          },
          {
            "w": "exploratory",
            "t": 635.197
          },
          {
            "w": "investigation,",
            "t": 635.603
          },
          {
            "w": "your",
            "t": 636.009
          },
          {
            "w": "model",
            "t": 636.415
          },
          {
            "w": "will",
            "t": 636.821
          },
          {
            "w": "be",
            "t": 637.227
          },
          {
            "w": "trained",
            "t": 637.633
          },
          {
            "w": "on",
            "t": 638.039
          },
          {
            "w": "a",
            "t": 638.445
          },
          {
            "w": "sanitized",
            "t": 638.851
          },
          {
            "w": "fantasy",
            "t": 639.258
          },
          {
            "w": "world",
            "t": 639.664
          },
          {
            "w": "where",
            "t": 640.07
          },
          {
            "w": "fraud",
            "t": 640.476
          },
          {
            "w": "never",
            "t": 640.882
          },
          {
            "w": "occurs.",
            "t": 641.288
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Kaito",
        "text": "So EDA is what tells us whether an outlier is a transmission bug to be pruned or a multi-million dollar fraud event to be learned!",
        "start": 642.044,
        "end": 649.412,
        "words": [
          {
            "w": "So",
            "t": 642.044
          },
          {
            "w": "EDA",
            "t": 642.339
          },
          {
            "w": "is",
            "t": 642.633
          },
          {
            "w": "what",
            "t": 642.928
          },
          {
            "w": "tells",
            "t": 643.223
          },
          {
            "w": "us",
            "t": 643.518
          },
          {
            "w": "whether",
            "t": 643.812
          },
          {
            "w": "an",
            "t": 644.107
          },
          {
            "w": "outlier",
            "t": 644.402
          },
          {
            "w": "is",
            "t": 644.696
          },
          {
            "w": "a",
            "t": 644.991
          },
          {
            "w": "transmission",
            "t": 645.286
          },
          {
            "w": "bug",
            "t": 645.581
          },
          {
            "w": "to",
            "t": 645.875
          },
          {
            "w": "be",
            "t": 646.17
          },
          {
            "w": "pruned",
            "t": 646.465
          },
          {
            "w": "or",
            "t": 646.76
          },
          {
            "w": "a",
            "t": 647.054
          },
          {
            "w": "multi-million",
            "t": 647.349
          },
          {
            "w": "dollar",
            "t": 647.644
          },
          {
            "w": "fraud",
            "t": 647.938
          },
          {
            "w": "event",
            "t": 648.233
          },
          {
            "w": "to",
            "t": 648.528
          },
          {
            "w": "be",
            "t": 648.823
          },
          {
            "w": "learned!",
            "t": 649.117
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Dr. Nova",
        "text": "Precisely. The residual audit gate ensures that every transformation preserves authentic physical signal.",
        "start": 649.762,
        "end": 657.106,
        "words": [
          {
            "w": "Precisely.",
            "t": 649.762
          },
          {
            "w": "The",
            "t": 650.327
          },
          {
            "w": "residual",
            "t": 650.892
          },
          {
            "w": "audit",
            "t": 651.457
          },
          {
            "w": "gate",
            "t": 652.022
          },
          {
            "w": "ensures",
            "t": 652.587
          },
          {
            "w": "that",
            "t": 653.152
          },
          {
            "w": "every",
            "t": 653.716
          },
          {
            "w": "transformation",
            "t": 654.281
          },
          {
            "w": "preserves",
            "t": 654.846
          },
          {
            "w": "authentic",
            "t": 655.411
          },
          {
            "w": "physical",
            "t": 655.976
          },
          {
            "w": "signal.",
            "t": 656.541
          }
        ]
      },
      {
        "slide": 15,
        "slideId": "s15",
        "speaker": "Kaito",
        "text": "Dr. Nova, that datacenter latency table is mind-blowing! The aggregate mean was 24 milliseconds, which looked well within the team's 50-millisecond Service Level Objective!",
        "start": 657.856,
        "end": 669.088,
        "words": [
          {
            "w": "Dr.",
            "t": 657.856
          },
          {
            "w": "Nova,",
            "t": 658.324
          },
          {
            "w": "that",
            "t": 658.792
          },
          {
            "w": "datacenter",
            "t": 659.26
          },
          {
            "w": "latency",
            "t": 659.728
          },
          {
            "w": "table",
            "t": 660.196
          },
          {
            "w": "is",
            "t": 660.664
          },
          {
            "w": "mind-blowing!",
            "t": 661.132
          },
          {
            "w": "The",
            "t": 661.6
          },
          {
            "w": "aggregate",
            "t": 662.068
          },
          {
            "w": "mean",
            "t": 662.536
          },
          {
            "w": "was",
            "t": 663.004
          },
          {
            "w": "24",
            "t": 663.472
          },
          {
            "w": "milliseconds,",
            "t": 663.94
          },
          {
            "w": "which",
            "t": 664.408
          },
          {
            "w": "looked",
            "t": 664.876
          },
          {
            "w": "well",
            "t": 665.344
          },
          {
            "w": "within",
            "t": 665.812
          },
          {
            "w": "the",
            "t": 666.28
          },
          {
            "w": "team's",
            "t": 666.748
          },
          {
            "w": "50-millisecond",
            "t": 667.216
          },
          {
            "w": "Service",
            "t": 667.684
          },
          {
            "w": "Level",
            "t": 668.152
          },
          {
            "w": "Objective!",
            "t": 668.62
          }
        ]
      },
      {
        "slide": 15,
        "slideId": "s15",
        "speaker": "Dr. Nova",
        "text": "Yes, but for that one percent of enterprise customers routed to container pool number three, their requests were taking nearly two and a half seconds! Their applications were timing out and crashing, while the executive dashboard showed green status lights across the board.",
        "start": 669.438,
        "end": 685.71,
        "words": [
          {
            "w": "Yes,",
            "t": 669.438
          },
          {
            "w": "but",
            "t": 669.816
          },
          {
            "w": "for",
            "t": 670.195
          },
          {
            "w": "that",
            "t": 670.573
          },
          {
            "w": "one",
            "t": 670.952
          },
          {
            "w": "percent",
            "t": 671.33
          },
          {
            "w": "of",
            "t": 671.709
          },
          {
            "w": "enterprise",
            "t": 672.087
          },
          {
            "w": "customers",
            "t": 672.465
          },
          {
            "w": "routed",
            "t": 672.844
          },
          {
            "w": "to",
            "t": 673.222
          },
          {
            "w": "container",
            "t": 673.601
          },
          {
            "w": "pool",
            "t": 673.979
          },
          {
            "w": "number",
            "t": 674.357
          },
          {
            "w": "three,",
            "t": 674.736
          },
          {
            "w": "their",
            "t": 675.114
          },
          {
            "w": "requests",
            "t": 675.493
          },
          {
            "w": "were",
            "t": 675.871
          },
          {
            "w": "taking",
            "t": 676.25
          },
          {
            "w": "nearly",
            "t": 676.628
          },
          {
            "w": "two",
            "t": 677.006
          },
          {
            "w": "and",
            "t": 677.385
          },
          {
            "w": "a",
            "t": 677.763
          },
          {
            "w": "half",
            "t": 678.142
          },
          {
            "w": "seconds!",
            "t": 678.52
          },
          {
            "w": "Their",
            "t": 678.898
          },
          {
            "w": "applications",
            "t": 679.277
          },
          {
            "w": "were",
            "t": 679.655
          },
          {
            "w": "timing",
            "t": 680.034
          },
          {
            "w": "out",
            "t": 680.412
          },
          {
            "w": "and",
            "t": 680.791
          },
          {
            "w": "crashing,",
            "t": 681.169
          },
          {
            "w": "while",
            "t": 681.547
          },
          {
            "w": "the",
            "t": 681.926
          },
          {
            "w": "executive",
            "t": 682.304
          },
          {
            "w": "dashboard",
            "t": 682.683
          },
          {
            "w": "showed",
            "t": 683.061
          },
          {
            "w": "green",
            "t": 683.439
          },
          {
            "w": "status",
            "t": 683.818
          },
          {
            "w": "lights",
            "t": 684.196
          },
          {
            "w": "across",
            "t": 684.575
          },
          {
            "w": "the",
            "t": 684.953
          },
          {
            "w": "board.",
            "t": 685.332
          }
        ]
      },
      {
        "slide": 15,
        "slideId": "s15",
        "speaker": "Kaito",
        "text": "And the moment they generated a quantile heatmap of the response distribution, the twin modal peaks at 12 milliseconds and 2,400 milliseconds jumped right out!",
        "start": 686.06,
        "end": 695.564,
        "words": [
          {
            "w": "And",
            "t": 686.06
          },
          {
            "w": "the",
            "t": 686.44
          },
          {
            "w": "moment",
            "t": 686.82
          },
          {
            "w": "they",
            "t": 687.2
          },
          {
            "w": "generated",
            "t": 687.581
          },
          {
            "w": "a",
            "t": 687.961
          },
          {
            "w": "quantile",
            "t": 688.341
          },
          {
            "w": "heatmap",
            "t": 688.721
          },
          {
            "w": "of",
            "t": 689.101
          },
          {
            "w": "the",
            "t": 689.481
          },
          {
            "w": "response",
            "t": 689.862
          },
          {
            "w": "distribution,",
            "t": 690.242
          },
          {
            "w": "the",
            "t": 690.622
          },
          {
            "w": "twin",
            "t": 691.002
          },
          {
            "w": "modal",
            "t": 691.382
          },
          {
            "w": "peaks",
            "t": 691.762
          },
          {
            "w": "at",
            "t": 692.143
          },
          {
            "w": "12",
            "t": 692.523
          },
          {
            "w": "milliseconds",
            "t": 692.903
          },
          {
            "w": "and",
            "t": 693.283
          },
          {
            "w": "2,400",
            "t": 693.663
          },
          {
            "w": "milliseconds",
            "t": 694.043
          },
          {
            "w": "jumped",
            "t": 694.424
          },
          {
            "w": "right",
            "t": 694.804
          },
          {
            "w": "out!",
            "t": 695.184
          }
        ]
      },
      {
        "slide": 15,
        "slideId": "s15",
        "speaker": "Dr. Nova",
        "text": "Never summarize before you visualize. Quantiles and residual scatter plots reveal the operational reality that means conceal.",
        "start": 695.914,
        "end": 704.434,
        "words": [
          {
            "w": "Never",
            "t": 695.914
          },
          {
            "w": "summarize",
            "t": 696.415
          },
          {
            "w": "before",
            "t": 696.916
          },
          {
            "w": "you",
            "t": 697.418
          },
          {
            "w": "visualize.",
            "t": 697.919
          },
          {
            "w": "Quantiles",
            "t": 698.42
          },
          {
            "w": "and",
            "t": 698.921
          },
          {
            "w": "residual",
            "t": 699.422
          },
          {
            "w": "scatter",
            "t": 699.923
          },
          {
            "w": "plots",
            "t": 700.425
          },
          {
            "w": "reveal",
            "t": 700.926
          },
          {
            "w": "the",
            "t": 701.427
          },
          {
            "w": "operational",
            "t": 701.928
          },
          {
            "w": "reality",
            "t": 702.429
          },
          {
            "w": "that",
            "t": 702.93
          },
          {
            "w": "means",
            "t": 703.432
          },
          {
            "w": "conceal.",
            "t": 703.933
          }
        ]
      },
      {
        "slide": 16,
        "slideId": "s16",
        "speaker": "Kaito",
        "text": "What an incredible journey through Lesson 6.1, Dr. Nova! From Tukey's decomposition to Anscombe's quartet, I see why exploratory analysis is the true foundation of data engineering.",
        "start": 705.184,
        "end": 717.232,
        "words": [
          {
            "w": "What",
            "t": 705.184
          },
          {
            "w": "an",
            "t": 705.63
          },
          {
            "w": "incredible",
            "t": 706.076
          },
          {
            "w": "journey",
            "t": 706.523
          },
          {
            "w": "through",
            "t": 706.969
          },
          {
            "w": "Lesson",
            "t": 707.415
          },
          {
            "w": "6.1,",
            "t": 707.861
          },
          {
            "w": "Dr.",
            "t": 708.308
          },
          {
            "w": "Nova!",
            "t": 708.754
          },
          {
            "w": "From",
            "t": 709.2
          },
          {
            "w": "Tukey's",
            "t": 709.646
          },
          {
            "w": "decomposition",
            "t": 710.092
          },
          {
            "w": "to",
            "t": 710.539
          },
          {
            "w": "Anscombe's",
            "t": 710.985
          },
          {
            "w": "quartet,",
            "t": 711.431
          },
          {
            "w": "I",
            "t": 711.877
          },
          {
            "w": "see",
            "t": 712.324
          },
          {
            "w": "why",
            "t": 712.77
          },
          {
            "w": "exploratory",
            "t": 713.216
          },
          {
            "w": "analysis",
            "t": 713.662
          },
          {
            "w": "is",
            "t": 714.108
          },
          {
            "w": "the",
            "t": 714.555
          },
          {
            "w": "true",
            "t": 715.001
          },
          {
            "w": "foundation",
            "t": 715.447
          },
          {
            "w": "of",
            "t": 715.893
          },
          {
            "w": "data",
            "t": 716.34
          },
          {
            "w": "engineering.",
            "t": 716.786
          }
        ]
      },
      {
        "slide": 16,
        "slideId": "s16",
        "speaker": "Dr. Nova",
        "text": "Indeed, Kaito. Remember: models are easy to fit, but understanding data requires skepticism, resistant statistics, and careful residual auditing. In Lesson 6.2, we examine data measurement scales and resistant central tendency.",
        "start": 717.582,
        "end": 734.502,
        "words": [
          {
            "w": "Indeed,",
            "t": 717.582
          },
          {
            "w": "Kaito.",
            "t": 718.128
          },
          {
            "w": "Remember:",
            "t": 718.674
          },
          {
            "w": "models",
            "t": 719.219
          },
          {
            "w": "are",
            "t": 719.765
          },
          {
            "w": "easy",
            "t": 720.311
          },
          {
            "w": "to",
            "t": 720.857
          },
          {
            "w": "fit,",
            "t": 721.403
          },
          {
            "w": "but",
            "t": 721.948
          },
          {
            "w": "understanding",
            "t": 722.494
          },
          {
            "w": "data",
            "t": 723.04
          },
          {
            "w": "requires",
            "t": 723.586
          },
          {
            "w": "skepticism,",
            "t": 724.132
          },
          {
            "w": "resistant",
            "t": 724.677
          },
          {
            "w": "statistics,",
            "t": 725.223
          },
          {
            "w": "and",
            "t": 725.769
          },
          {
            "w": "careful",
            "t": 726.315
          },
          {
            "w": "residual",
            "t": 726.861
          },
          {
            "w": "auditing.",
            "t": 727.407
          },
          {
            "w": "In",
            "t": 727.952
          },
          {
            "w": "Lesson",
            "t": 728.498
          },
          {
            "w": "6.2,",
            "t": 729.044
          },
          {
            "w": "we",
            "t": 729.59
          },
          {
            "w": "examine",
            "t": 730.136
          },
          {
            "w": "data",
            "t": 730.681
          },
          {
            "w": "measurement",
            "t": 731.227
          },
          {
            "w": "scales",
            "t": 731.773
          },
          {
            "w": "and",
            "t": 732.319
          },
          {
            "w": "resistant",
            "t": 732.865
          },
          {
            "w": "central",
            "t": 733.41
          },
          {
            "w": "tendency.",
            "t": 733.956
          }
        ]
      },
      {
        "slide": 16,
        "slideId": "s16",
        "speaker": "Kaito",
        "text": "Ready when you are, Dr. Nova! Let us continue building production datasets that stand on solid mathematical ground!",
        "start": 734.852,
        "end": 743.012,
        "words": [
          {
            "w": "Ready",
            "t": 734.852
          },
          {
            "w": "when",
            "t": 735.305
          },
          {
            "w": "you",
            "t": 735.759
          },
          {
            "w": "are,",
            "t": 736.212
          },
          {
            "w": "Dr.",
            "t": 736.665
          },
          {
            "w": "Nova!",
            "t": 737.119
          },
          {
            "w": "Let",
            "t": 737.572
          },
          {
            "w": "us",
            "t": 738.025
          },
          {
            "w": "continue",
            "t": 738.479
          },
          {
            "w": "building",
            "t": 738.932
          },
          {
            "w": "production",
            "t": 739.385
          },
          {
            "w": "datasets",
            "t": 739.839
          },
          {
            "w": "that",
            "t": 740.292
          },
          {
            "w": "stand",
            "t": 740.745
          },
          {
            "w": "on",
            "t": 741.199
          },
          {
            "w": "solid",
            "t": 741.652
          },
          {
            "w": "mathematical",
            "t": 742.105
          },
          {
            "w": "ground!",
            "t": 742.559
          }
        ]
      }
    ]
  },
  "ch2_p6_solo": {
    "duration": 934.128,
    "sentences": [
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Dr. Nova",
        "text": "Welcome to Lesson 2.6 of Dataset Fundamentals: Probability Sampling Theory: Simple Random, Stratified, and Cluster Derivations. In machine learning and data engineering, practitioners often fall into the trap of convenience sampling, scraping whatever records are readily accessible or querying the first thousand rows from a database table. However, non-probability draws systematically distort empirical risk minimization, rendering validation metrics illusory. To guarantee mathematically unbiased estimators, dataset collection must satisfy the formal requirements of probability sampling, where every element in the target population has a strictly positive, known inclusion probability pi-sub-i. In this masterclass, we derive the foundational Horvitz-Thompson estimator, prove why Neyman optimal allocation minimizes stratified variance, and quantify how cluster sampling inflates standard errors via Kish's design effect.",
        "start": 0.0,
        "end": 63.701,
        "words": [
          {
            "w": "Welcome",
            "t": 0.0
          },
          {
            "w": "to",
            "t": 0.54
          },
          {
            "w": "Lesson",
            "t": 1.08
          },
          {
            "w": "2.6",
            "t": 1.62
          },
          {
            "w": "of",
            "t": 2.159
          },
          {
            "w": "Dataset",
            "t": 2.699
          },
          {
            "w": "Fundamentals:",
            "t": 3.239
          },
          {
            "w": "Probability",
            "t": 3.779
          },
          {
            "w": "Sampling",
            "t": 4.319
          },
          {
            "w": "Theory:",
            "t": 4.859
          },
          {
            "w": "Simple",
            "t": 5.398
          },
          {
            "w": "Random,",
            "t": 5.938
          },
          {
            "w": "Stratified,",
            "t": 6.478
          },
          {
            "w": "and",
            "t": 7.018
          },
          {
            "w": "Cluster",
            "t": 7.558
          },
          {
            "w": "Derivations.",
            "t": 8.098
          },
          {
            "w": "In",
            "t": 8.637
          },
          {
            "w": "machine",
            "t": 9.177
          },
          {
            "w": "learning",
            "t": 9.717
          },
          {
            "w": "and",
            "t": 10.257
          },
          {
            "w": "data",
            "t": 10.797
          },
          {
            "w": "engineering,",
            "t": 11.337
          },
          {
            "w": "practitioners",
            "t": 11.876
          },
          {
            "w": "often",
            "t": 12.416
          },
          {
            "w": "fall",
            "t": 12.956
          },
          {
            "w": "into",
            "t": 13.496
          },
          {
            "w": "the",
            "t": 14.036
          },
          {
            "w": "trap",
            "t": 14.576
          },
          {
            "w": "of",
            "t": 15.115
          },
          {
            "w": "convenience",
            "t": 15.655
          },
          {
            "w": "sampling,",
            "t": 16.195
          },
          {
            "w": "scraping",
            "t": 16.735
          },
          {
            "w": "whatever",
            "t": 17.275
          },
          {
            "w": "records",
            "t": 17.815
          },
          {
            "w": "are",
            "t": 18.355
          },
          {
            "w": "readily",
            "t": 18.894
          },
          {
            "w": "accessible",
            "t": 19.434
          },
          {
            "w": "or",
            "t": 19.974
          },
          {
            "w": "querying",
            "t": 20.514
          },
          {
            "w": "the",
            "t": 21.054
          },
          {
            "w": "first",
            "t": 21.594
          },
          {
            "w": "thousand",
            "t": 22.133
          },
          {
            "w": "rows",
            "t": 22.673
          },
          {
            "w": "from",
            "t": 23.213
          },
          {
            "w": "a",
            "t": 23.753
          },
          {
            "w": "database",
            "t": 24.293
          },
          {
            "w": "table.",
            "t": 24.833
          },
          {
            "w": "However,",
            "t": 25.372
          },
          {
            "w": "non-probability",
            "t": 25.912
          },
          {
            "w": "draws",
            "t": 26.452
          },
          {
            "w": "systematically",
            "t": 26.992
          },
          {
            "w": "distort",
            "t": 27.532
          },
          {
            "w": "empirical",
            "t": 28.072
          },
          {
            "w": "risk",
            "t": 28.611
          },
          {
            "w": "minimization,",
            "t": 29.151
          },
          {
            "w": "rendering",
            "t": 29.691
          },
          {
            "w": "validation",
            "t": 30.231
          },
          {
            "w": "metrics",
            "t": 30.771
          },
          {
            "w": "illusory.",
            "t": 31.311
          },
          {
            "w": "To",
            "t": 31.85
          },
          {
            "w": "guarantee",
            "t": 32.39
          },
          {
            "w": "mathematically",
            "t": 32.93
          },
          {
            "w": "unbiased",
            "t": 33.47
          },
          {
            "w": "estimators,",
            "t": 34.01
          },
          {
            "w": "dataset",
            "t": 34.55
          },
          {
            "w": "collection",
            "t": 35.09
          },
          {
            "w": "must",
            "t": 35.629
          },
          {
            "w": "satisfy",
            "t": 36.169
          },
          {
            "w": "the",
            "t": 36.709
          },
          {
            "w": "formal",
            "t": 37.249
          },
          {
            "w": "requirements",
            "t": 37.789
          },
          {
            "w": "of",
            "t": 38.329
          },
          {
            "w": "probability",
            "t": 38.868
          },
          {
            "w": "sampling,",
            "t": 39.408
          },
          {
            "w": "where",
            "t": 39.948
          },
          {
            "w": "every",
            "t": 40.488
          },
          {
            "w": "element",
            "t": 41.028
          },
          {
            "w": "in",
            "t": 41.568
          },
          {
            "w": "the",
            "t": 42.107
          },
          {
            "w": "target",
            "t": 42.647
          },
          {
            "w": "population",
            "t": 43.187
          },
          {
            "w": "has",
            "t": 43.727
          },
          {
            "w": "a",
            "t": 44.267
          },
          {
            "w": "strictly",
            "t": 44.807
          },
          {
            "w": "positive,",
            "t": 45.346
          },
          {
            "w": "known",
            "t": 45.886
          },
          {
            "w": "inclusion",
            "t": 46.426
          },
          {
            "w": "probability",
            "t": 46.966
          },
          {
            "w": "pi-sub-i.",
            "t": 47.506
          },
          {
            "w": "In",
            "t": 48.046
          },
          {
            "w": "this",
            "t": 48.586
          },
          {
            "w": "masterclass,",
            "t": 49.125
          },
          {
            "w": "we",
            "t": 49.665
          },
          {
            "w": "derive",
            "t": 50.205
          },
          {
            "w": "the",
            "t": 50.745
          },
          {
            "w": "foundational",
            "t": 51.285
          },
          {
            "w": "Horvitz-Thompson",
            "t": 51.825
          },
          {
            "w": "estimator,",
            "t": 52.364
          },
          {
            "w": "prove",
            "t": 52.904
          },
          {
            "w": "why",
            "t": 53.444
          },
          {
            "w": "Neyman",
            "t": 53.984
          },
          {
            "w": "optimal",
            "t": 54.524
          },
          {
            "w": "allocation",
            "t": 55.064
          },
          {
            "w": "minimizes",
            "t": 55.603
          },
          {
            "w": "stratified",
            "t": 56.143
          },
          {
            "w": "variance,",
            "t": 56.683
          },
          {
            "w": "and",
            "t": 57.223
          },
          {
            "w": "quantify",
            "t": 57.763
          },
          {
            "w": "how",
            "t": 58.303
          },
          {
            "w": "cluster",
            "t": 58.842
          },
          {
            "w": "sampling",
            "t": 59.382
          },
          {
            "w": "inflates",
            "t": 59.922
          },
          {
            "w": "standard",
            "t": 60.462
          },
          {
            "w": "errors",
            "t": 61.002
          },
          {
            "w": "via",
            "t": 61.542
          },
          {
            "w": "Kish's",
            "t": 62.081
          },
          {
            "w": "design",
            "t": 62.621
          },
          {
            "w": "effect.",
            "t": 63.161
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Dr. Nova",
        "text": "Before diving into derivations, let us establish the architectural decision framework that dictates which probability sampling design to deploy. The primary fork asks whether a complete individual sampling frame exists. If an exhaustive list of all units in population U is available, we evaluate whether population subgroups exhibit high variance or require guaranteed minimum representation. If subgroups are heterogeneous, we select Stratified Random Sampling and apply Neyman optimal allocation. If the population is homogeneous, Simple Random Sampling with Cochran sample size determination is mathematically optimal. Conversely, if an individual frame is missing or field collection is geographically constrained, we check for natural clusters. If accessible, we deploy Cluster Sampling with strict intra-class correlation auditing; if not, we must resort to multi-stage designs or explicitly caveat non-probability draws.",
        "start": 63.701,
        "end": 127.334,
        "words": [
          {
            "w": "Before",
            "t": 63.701
          },
          {
            "w": "diving",
            "t": 64.202
          },
          {
            "w": "into",
            "t": 64.703
          },
          {
            "w": "derivations,",
            "t": 65.204
          },
          {
            "w": "let",
            "t": 65.705
          },
          {
            "w": "us",
            "t": 66.206
          },
          {
            "w": "establish",
            "t": 66.707
          },
          {
            "w": "the",
            "t": 67.208
          },
          {
            "w": "architectural",
            "t": 67.709
          },
          {
            "w": "decision",
            "t": 68.21
          },
          {
            "w": "framework",
            "t": 68.711
          },
          {
            "w": "that",
            "t": 69.213
          },
          {
            "w": "dictates",
            "t": 69.714
          },
          {
            "w": "which",
            "t": 70.215
          },
          {
            "w": "probability",
            "t": 70.716
          },
          {
            "w": "sampling",
            "t": 71.217
          },
          {
            "w": "design",
            "t": 71.718
          },
          {
            "w": "to",
            "t": 72.219
          },
          {
            "w": "deploy.",
            "t": 72.72
          },
          {
            "w": "The",
            "t": 73.221
          },
          {
            "w": "primary",
            "t": 73.722
          },
          {
            "w": "fork",
            "t": 74.223
          },
          {
            "w": "asks",
            "t": 74.724
          },
          {
            "w": "whether",
            "t": 75.225
          },
          {
            "w": "a",
            "t": 75.726
          },
          {
            "w": "complete",
            "t": 76.227
          },
          {
            "w": "individual",
            "t": 76.728
          },
          {
            "w": "sampling",
            "t": 77.229
          },
          {
            "w": "frame",
            "t": 77.73
          },
          {
            "w": "exists.",
            "t": 78.231
          },
          {
            "w": "If",
            "t": 78.732
          },
          {
            "w": "an",
            "t": 79.233
          },
          {
            "w": "exhaustive",
            "t": 79.735
          },
          {
            "w": "list",
            "t": 80.236
          },
          {
            "w": "of",
            "t": 80.737
          },
          {
            "w": "all",
            "t": 81.238
          },
          {
            "w": "units",
            "t": 81.739
          },
          {
            "w": "in",
            "t": 82.24
          },
          {
            "w": "population",
            "t": 82.741
          },
          {
            "w": "U",
            "t": 83.242
          },
          {
            "w": "is",
            "t": 83.743
          },
          {
            "w": "available,",
            "t": 84.244
          },
          {
            "w": "we",
            "t": 84.745
          },
          {
            "w": "evaluate",
            "t": 85.246
          },
          {
            "w": "whether",
            "t": 85.747
          },
          {
            "w": "population",
            "t": 86.248
          },
          {
            "w": "subgroups",
            "t": 86.749
          },
          {
            "w": "exhibit",
            "t": 87.25
          },
          {
            "w": "high",
            "t": 87.751
          },
          {
            "w": "variance",
            "t": 88.252
          },
          {
            "w": "or",
            "t": 88.753
          },
          {
            "w": "require",
            "t": 89.254
          },
          {
            "w": "guaranteed",
            "t": 89.755
          },
          {
            "w": "minimum",
            "t": 90.257
          },
          {
            "w": "representation.",
            "t": 90.758
          },
          {
            "w": "If",
            "t": 91.259
          },
          {
            "w": "subgroups",
            "t": 91.76
          },
          {
            "w": "are",
            "t": 92.261
          },
          {
            "w": "heterogeneous,",
            "t": 92.762
          },
          {
            "w": "we",
            "t": 93.263
          },
          {
            "w": "select",
            "t": 93.764
          },
          {
            "w": "Stratified",
            "t": 94.265
          },
          {
            "w": "Random",
            "t": 94.766
          },
          {
            "w": "Sampling",
            "t": 95.267
          },
          {
            "w": "and",
            "t": 95.768
          },
          {
            "w": "apply",
            "t": 96.269
          },
          {
            "w": "Neyman",
            "t": 96.77
          },
          {
            "w": "optimal",
            "t": 97.271
          },
          {
            "w": "allocation.",
            "t": 97.772
          },
          {
            "w": "If",
            "t": 98.273
          },
          {
            "w": "the",
            "t": 98.774
          },
          {
            "w": "population",
            "t": 99.275
          },
          {
            "w": "is",
            "t": 99.776
          },
          {
            "w": "homogeneous,",
            "t": 100.277
          },
          {
            "w": "Simple",
            "t": 100.778
          },
          {
            "w": "Random",
            "t": 101.28
          },
          {
            "w": "Sampling",
            "t": 101.781
          },
          {
            "w": "with",
            "t": 102.282
          },
          {
            "w": "Cochran",
            "t": 102.783
          },
          {
            "w": "sample",
            "t": 103.284
          },
          {
            "w": "size",
            "t": 103.785
          },
          {
            "w": "determination",
            "t": 104.286
          },
          {
            "w": "is",
            "t": 104.787
          },
          {
            "w": "mathematically",
            "t": 105.288
          },
          {
            "w": "optimal.",
            "t": 105.789
          },
          {
            "w": "Conversely,",
            "t": 106.29
          },
          {
            "w": "if",
            "t": 106.791
          },
          {
            "w": "an",
            "t": 107.292
          },
          {
            "w": "individual",
            "t": 107.793
          },
          {
            "w": "frame",
            "t": 108.294
          },
          {
            "w": "is",
            "t": 108.795
          },
          {
            "w": "missing",
            "t": 109.296
          },
          {
            "w": "or",
            "t": 109.797
          },
          {
            "w": "field",
            "t": 110.298
          },
          {
            "w": "collection",
            "t": 110.799
          },
          {
            "w": "is",
            "t": 111.3
          },
          {
            "w": "geographically",
            "t": 111.802
          },
          {
            "w": "constrained,",
            "t": 112.303
          },
          {
            "w": "we",
            "t": 112.804
          },
          {
            "w": "check",
            "t": 113.305
          },
          {
            "w": "for",
            "t": 113.806
          },
          {
            "w": "natural",
            "t": 114.307
          },
          {
            "w": "clusters.",
            "t": 114.808
          },
          {
            "w": "If",
            "t": 115.309
          },
          {
            "w": "accessible,",
            "t": 115.81
          },
          {
            "w": "we",
            "t": 116.311
          },
          {
            "w": "deploy",
            "t": 116.812
          },
          {
            "w": "Cluster",
            "t": 117.313
          },
          {
            "w": "Sampling",
            "t": 117.814
          },
          {
            "w": "with",
            "t": 118.315
          },
          {
            "w": "strict",
            "t": 118.816
          },
          {
            "w": "intra-class",
            "t": 119.317
          },
          {
            "w": "correlation",
            "t": 119.818
          },
          {
            "w": "auditing;",
            "t": 120.319
          },
          {
            "w": "if",
            "t": 120.82
          },
          {
            "w": "not,",
            "t": 121.321
          },
          {
            "w": "we",
            "t": 121.822
          },
          {
            "w": "must",
            "t": 122.324
          },
          {
            "w": "resort",
            "t": 122.825
          },
          {
            "w": "to",
            "t": 123.326
          },
          {
            "w": "multi-stage",
            "t": 123.827
          },
          {
            "w": "designs",
            "t": 124.328
          },
          {
            "w": "or",
            "t": 124.829
          },
          {
            "w": "explicitly",
            "t": 125.33
          },
          {
            "w": "caveat",
            "t": 125.831
          },
          {
            "w": "non-probability",
            "t": 126.332
          },
          {
            "w": "draws.",
            "t": 126.833
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Dr. Nova",
        "text": "Let us formalize the mathematics of probability sampling. Consider a finite population U of N elements. A sampling design assigns a probability P of S to every subset S of U. The first-order inclusion probability pi-sub-i is the sum of probabilities of all subsets containing unit i. In 1952, Daniel Horvitz and Donovan Thompson formulated the universal unbiased estimator of the population total Y. Each observed value y-sub-i is weighted inversely by its inclusion probability pi-sub-i. Taking the expectation of Y-hat Horvitz-Thompson, we substitute the inclusion indicator variable I-sub-i, whose expectation is exactly pi-sub-i. The pi-sub-i terms cancel out algebraically, yielding the true population total Y. This proves strict unbiasedness. Crucially, if any unit has pi-sub-i equal to zero, that expectation fails, inducing irrecoverable selection bias.",
        "start": 127.334,
        "end": 186.51,
        "words": [
          {
            "w": "Let",
            "t": 127.334
          },
          {
            "w": "us",
            "t": 127.804
          },
          {
            "w": "formalize",
            "t": 128.273
          },
          {
            "w": "the",
            "t": 128.743
          },
          {
            "w": "mathematics",
            "t": 129.213
          },
          {
            "w": "of",
            "t": 129.682
          },
          {
            "w": "probability",
            "t": 130.152
          },
          {
            "w": "sampling.",
            "t": 130.622
          },
          {
            "w": "Consider",
            "t": 131.091
          },
          {
            "w": "a",
            "t": 131.561
          },
          {
            "w": "finite",
            "t": 132.031
          },
          {
            "w": "population",
            "t": 132.5
          },
          {
            "w": "U",
            "t": 132.97
          },
          {
            "w": "of",
            "t": 133.439
          },
          {
            "w": "N",
            "t": 133.909
          },
          {
            "w": "elements.",
            "t": 134.379
          },
          {
            "w": "A",
            "t": 134.848
          },
          {
            "w": "sampling",
            "t": 135.318
          },
          {
            "w": "design",
            "t": 135.788
          },
          {
            "w": "assigns",
            "t": 136.257
          },
          {
            "w": "a",
            "t": 136.727
          },
          {
            "w": "probability",
            "t": 137.197
          },
          {
            "w": "P",
            "t": 137.666
          },
          {
            "w": "of",
            "t": 138.136
          },
          {
            "w": "S",
            "t": 138.606
          },
          {
            "w": "to",
            "t": 139.075
          },
          {
            "w": "every",
            "t": 139.545
          },
          {
            "w": "subset",
            "t": 140.015
          },
          {
            "w": "S",
            "t": 140.484
          },
          {
            "w": "of",
            "t": 140.954
          },
          {
            "w": "U.",
            "t": 141.424
          },
          {
            "w": "The",
            "t": 141.893
          },
          {
            "w": "first-order",
            "t": 142.363
          },
          {
            "w": "inclusion",
            "t": 142.832
          },
          {
            "w": "probability",
            "t": 143.302
          },
          {
            "w": "pi-sub-i",
            "t": 143.772
          },
          {
            "w": "is",
            "t": 144.241
          },
          {
            "w": "the",
            "t": 144.711
          },
          {
            "w": "sum",
            "t": 145.181
          },
          {
            "w": "of",
            "t": 145.65
          },
          {
            "w": "probabilities",
            "t": 146.12
          },
          {
            "w": "of",
            "t": 146.59
          },
          {
            "w": "all",
            "t": 147.059
          },
          {
            "w": "subsets",
            "t": 147.529
          },
          {
            "w": "containing",
            "t": 147.999
          },
          {
            "w": "unit",
            "t": 148.468
          },
          {
            "w": "i.",
            "t": 148.938
          },
          {
            "w": "In",
            "t": 149.408
          },
          {
            "w": "1952,",
            "t": 149.877
          },
          {
            "w": "Daniel",
            "t": 150.347
          },
          {
            "w": "Horvitz",
            "t": 150.817
          },
          {
            "w": "and",
            "t": 151.286
          },
          {
            "w": "Donovan",
            "t": 151.756
          },
          {
            "w": "Thompson",
            "t": 152.225
          },
          {
            "w": "formulated",
            "t": 152.695
          },
          {
            "w": "the",
            "t": 153.165
          },
          {
            "w": "universal",
            "t": 153.634
          },
          {
            "w": "unbiased",
            "t": 154.104
          },
          {
            "w": "estimator",
            "t": 154.574
          },
          {
            "w": "of",
            "t": 155.043
          },
          {
            "w": "the",
            "t": 155.513
          },
          {
            "w": "population",
            "t": 155.983
          },
          {
            "w": "total",
            "t": 156.452
          },
          {
            "w": "Y.",
            "t": 156.922
          },
          {
            "w": "Each",
            "t": 157.392
          },
          {
            "w": "observed",
            "t": 157.861
          },
          {
            "w": "value",
            "t": 158.331
          },
          {
            "w": "y-sub-i",
            "t": 158.801
          },
          {
            "w": "is",
            "t": 159.27
          },
          {
            "w": "weighted",
            "t": 159.74
          },
          {
            "w": "inversely",
            "t": 160.21
          },
          {
            "w": "by",
            "t": 160.679
          },
          {
            "w": "its",
            "t": 161.149
          },
          {
            "w": "inclusion",
            "t": 161.619
          },
          {
            "w": "probability",
            "t": 162.088
          },
          {
            "w": "pi-sub-i.",
            "t": 162.558
          },
          {
            "w": "Taking",
            "t": 163.027
          },
          {
            "w": "the",
            "t": 163.497
          },
          {
            "w": "expectation",
            "t": 163.967
          },
          {
            "w": "of",
            "t": 164.436
          },
          {
            "w": "Y-hat",
            "t": 164.906
          },
          {
            "w": "Horvitz-Thompson,",
            "t": 165.376
          },
          {
            "w": "we",
            "t": 165.845
          },
          {
            "w": "substitute",
            "t": 166.315
          },
          {
            "w": "the",
            "t": 166.785
          },
          {
            "w": "inclusion",
            "t": 167.254
          },
          {
            "w": "indicator",
            "t": 167.724
          },
          {
            "w": "variable",
            "t": 168.194
          },
          {
            "w": "I-sub-i,",
            "t": 168.663
          },
          {
            "w": "whose",
            "t": 169.133
          },
          {
            "w": "expectation",
            "t": 169.603
          },
          {
            "w": "is",
            "t": 170.072
          },
          {
            "w": "exactly",
            "t": 170.542
          },
          {
            "w": "pi-sub-i.",
            "t": 171.012
          },
          {
            "w": "The",
            "t": 171.481
          },
          {
            "w": "pi-sub-i",
            "t": 171.951
          },
          {
            "w": "terms",
            "t": 172.42
          },
          {
            "w": "cancel",
            "t": 172.89
          },
          {
            "w": "out",
            "t": 173.36
          },
          {
            "w": "algebraically,",
            "t": 173.829
          },
          {
            "w": "yielding",
            "t": 174.299
          },
          {
            "w": "the",
            "t": 174.769
          },
          {
            "w": "true",
            "t": 175.238
          },
          {
            "w": "population",
            "t": 175.708
          },
          {
            "w": "total",
            "t": 176.178
          },
          {
            "w": "Y.",
            "t": 176.647
          },
          {
            "w": "This",
            "t": 177.117
          },
          {
            "w": "proves",
            "t": 177.587
          },
          {
            "w": "strict",
            "t": 178.056
          },
          {
            "w": "unbiasedness.",
            "t": 178.526
          },
          {
            "w": "Crucially,",
            "t": 178.996
          },
          {
            "w": "if",
            "t": 179.465
          },
          {
            "w": "any",
            "t": 179.935
          },
          {
            "w": "unit",
            "t": 180.405
          },
          {
            "w": "has",
            "t": 180.874
          },
          {
            "w": "pi-sub-i",
            "t": 181.344
          },
          {
            "w": "equal",
            "t": 181.813
          },
          {
            "w": "to",
            "t": 182.283
          },
          {
            "w": "zero,",
            "t": 182.753
          },
          {
            "w": "that",
            "t": 183.222
          },
          {
            "w": "expectation",
            "t": 183.692
          },
          {
            "w": "fails,",
            "t": 184.162
          },
          {
            "w": "inducing",
            "t": 184.631
          },
          {
            "w": "irrecoverable",
            "t": 185.101
          },
          {
            "w": "selection",
            "t": 185.571
          },
          {
            "w": "bias.",
            "t": 186.04
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Dr. Nova",
        "text": "Let us examine Simple Random Sampling without Replacement, or SRSWOR. In SRSWOR, every distinct subset of size n has equal selection probability, meaning inclusion probability pi-sub-i equals n divided by N for every unit. The variance of the sample mean y-bar is S squared over n, multiplied by the Finite Population Correction factor, one minus n over N. When the sampling fraction f equals n over N is less than five percent, the FPC factor is practically one and can be omitted. To determine the necessary sample size n-zero to achieve a desired margin of error e at confidence level one minus alpha, William Cochran derived the classic formula: Z squared times p times one minus p, divided by e squared. When target population N is finite, we adjust n-zero using Cochran's finite population adjustment formula.",
        "start": 186.51,
        "end": 242.394,
        "words": [
          {
            "w": "Let",
            "t": 186.51
          },
          {
            "w": "us",
            "t": 186.921
          },
          {
            "w": "examine",
            "t": 187.332
          },
          {
            "w": "Simple",
            "t": 187.743
          },
          {
            "w": "Random",
            "t": 188.154
          },
          {
            "w": "Sampling",
            "t": 188.565
          },
          {
            "w": "without",
            "t": 188.975
          },
          {
            "w": "Replacement,",
            "t": 189.386
          },
          {
            "w": "or",
            "t": 189.797
          },
          {
            "w": "SRSWOR.",
            "t": 190.208
          },
          {
            "w": "In",
            "t": 190.619
          },
          {
            "w": "SRSWOR,",
            "t": 191.03
          },
          {
            "w": "every",
            "t": 191.441
          },
          {
            "w": "distinct",
            "t": 191.852
          },
          {
            "w": "subset",
            "t": 192.263
          },
          {
            "w": "of",
            "t": 192.674
          },
          {
            "w": "size",
            "t": 193.085
          },
          {
            "w": "n",
            "t": 193.495
          },
          {
            "w": "has",
            "t": 193.906
          },
          {
            "w": "equal",
            "t": 194.317
          },
          {
            "w": "selection",
            "t": 194.728
          },
          {
            "w": "probability,",
            "t": 195.139
          },
          {
            "w": "meaning",
            "t": 195.55
          },
          {
            "w": "inclusion",
            "t": 195.961
          },
          {
            "w": "probability",
            "t": 196.372
          },
          {
            "w": "pi-sub-i",
            "t": 196.783
          },
          {
            "w": "equals",
            "t": 197.194
          },
          {
            "w": "n",
            "t": 197.605
          },
          {
            "w": "divided",
            "t": 198.016
          },
          {
            "w": "by",
            "t": 198.426
          },
          {
            "w": "N",
            "t": 198.837
          },
          {
            "w": "for",
            "t": 199.248
          },
          {
            "w": "every",
            "t": 199.659
          },
          {
            "w": "unit.",
            "t": 200.07
          },
          {
            "w": "The",
            "t": 200.481
          },
          {
            "w": "variance",
            "t": 200.892
          },
          {
            "w": "of",
            "t": 201.303
          },
          {
            "w": "the",
            "t": 201.714
          },
          {
            "w": "sample",
            "t": 202.125
          },
          {
            "w": "mean",
            "t": 202.536
          },
          {
            "w": "y-bar",
            "t": 202.946
          },
          {
            "w": "is",
            "t": 203.357
          },
          {
            "w": "S",
            "t": 203.768
          },
          {
            "w": "squared",
            "t": 204.179
          },
          {
            "w": "over",
            "t": 204.59
          },
          {
            "w": "n,",
            "t": 205.001
          },
          {
            "w": "multiplied",
            "t": 205.412
          },
          {
            "w": "by",
            "t": 205.823
          },
          {
            "w": "the",
            "t": 206.234
          },
          {
            "w": "Finite",
            "t": 206.645
          },
          {
            "w": "Population",
            "t": 207.056
          },
          {
            "w": "Correction",
            "t": 207.466
          },
          {
            "w": "factor,",
            "t": 207.877
          },
          {
            "w": "one",
            "t": 208.288
          },
          {
            "w": "minus",
            "t": 208.699
          },
          {
            "w": "n",
            "t": 209.11
          },
          {
            "w": "over",
            "t": 209.521
          },
          {
            "w": "N.",
            "t": 209.932
          },
          {
            "w": "When",
            "t": 210.343
          },
          {
            "w": "the",
            "t": 210.754
          },
          {
            "w": "sampling",
            "t": 211.165
          },
          {
            "w": "fraction",
            "t": 211.576
          },
          {
            "w": "f",
            "t": 211.987
          },
          {
            "w": "equals",
            "t": 212.397
          },
          {
            "w": "n",
            "t": 212.808
          },
          {
            "w": "over",
            "t": 213.219
          },
          {
            "w": "N",
            "t": 213.63
          },
          {
            "w": "is",
            "t": 214.041
          },
          {
            "w": "less",
            "t": 214.452
          },
          {
            "w": "than",
            "t": 214.863
          },
          {
            "w": "five",
            "t": 215.274
          },
          {
            "w": "percent,",
            "t": 215.685
          },
          {
            "w": "the",
            "t": 216.096
          },
          {
            "w": "FPC",
            "t": 216.507
          },
          {
            "w": "factor",
            "t": 216.917
          },
          {
            "w": "is",
            "t": 217.328
          },
          {
            "w": "practically",
            "t": 217.739
          },
          {
            "w": "one",
            "t": 218.15
          },
          {
            "w": "and",
            "t": 218.561
          },
          {
            "w": "can",
            "t": 218.972
          },
          {
            "w": "be",
            "t": 219.383
          },
          {
            "w": "omitted.",
            "t": 219.794
          },
          {
            "w": "To",
            "t": 220.205
          },
          {
            "w": "determine",
            "t": 220.616
          },
          {
            "w": "the",
            "t": 221.027
          },
          {
            "w": "necessary",
            "t": 221.438
          },
          {
            "w": "sample",
            "t": 221.848
          },
          {
            "w": "size",
            "t": 222.259
          },
          {
            "w": "n-zero",
            "t": 222.67
          },
          {
            "w": "to",
            "t": 223.081
          },
          {
            "w": "achieve",
            "t": 223.492
          },
          {
            "w": "a",
            "t": 223.903
          },
          {
            "w": "desired",
            "t": 224.314
          },
          {
            "w": "margin",
            "t": 224.725
          },
          {
            "w": "of",
            "t": 225.136
          },
          {
            "w": "error",
            "t": 225.547
          },
          {
            "w": "e",
            "t": 225.958
          },
          {
            "w": "at",
            "t": 226.368
          },
          {
            "w": "confidence",
            "t": 226.779
          },
          {
            "w": "level",
            "t": 227.19
          },
          {
            "w": "one",
            "t": 227.601
          },
          {
            "w": "minus",
            "t": 228.012
          },
          {
            "w": "alpha,",
            "t": 228.423
          },
          {
            "w": "William",
            "t": 228.834
          },
          {
            "w": "Cochran",
            "t": 229.245
          },
          {
            "w": "derived",
            "t": 229.656
          },
          {
            "w": "the",
            "t": 230.067
          },
          {
            "w": "classic",
            "t": 230.478
          },
          {
            "w": "formula:",
            "t": 230.888
          },
          {
            "w": "Z",
            "t": 231.299
          },
          {
            "w": "squared",
            "t": 231.71
          },
          {
            "w": "times",
            "t": 232.121
          },
          {
            "w": "p",
            "t": 232.532
          },
          {
            "w": "times",
            "t": 232.943
          },
          {
            "w": "one",
            "t": 233.354
          },
          {
            "w": "minus",
            "t": 233.765
          },
          {
            "w": "p,",
            "t": 234.176
          },
          {
            "w": "divided",
            "t": 234.587
          },
          {
            "w": "by",
            "t": 234.998
          },
          {
            "w": "e",
            "t": 235.409
          },
          {
            "w": "squared.",
            "t": 235.819
          },
          {
            "w": "When",
            "t": 236.23
          },
          {
            "w": "target",
            "t": 236.641
          },
          {
            "w": "population",
            "t": 237.052
          },
          {
            "w": "N",
            "t": 237.463
          },
          {
            "w": "is",
            "t": 237.874
          },
          {
            "w": "finite,",
            "t": 238.285
          },
          {
            "w": "we",
            "t": 238.696
          },
          {
            "w": "adjust",
            "t": 239.107
          },
          {
            "w": "n-zero",
            "t": 239.518
          },
          {
            "w": "using",
            "t": 239.929
          },
          {
            "w": "Cochran's",
            "t": 240.339
          },
          {
            "w": "finite",
            "t": 240.75
          },
          {
            "w": "population",
            "t": 241.161
          },
          {
            "w": "adjustment",
            "t": 241.572
          },
          {
            "w": "formula.",
            "t": 241.983
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Dr. Nova",
        "text": "When a population is heterogeneous across subgroups but internally homogeneous within them, Stratified Random Sampling provides dramatic precision gains over SRS. We partition population U into H mutually exclusive strata, drawing independent random samples n-sub-h from each stratum. The stratified sample mean y-bar stratified is the stratum-weight W-sub-h sum of stratum sample means. The estimator variance depends solely on within-stratum variances S-sub-h squared. Because between-strata variance is completely eliminated from the estimator, stratified sampling is mathematically guaranteed to never have higher variance than simple random sampling. The variance reduction achieved is directly proportional to the squared differences between stratum means.",
        "start": 242.394,
        "end": 294.644,
        "words": [
          {
            "w": "When",
            "t": 242.394
          },
          {
            "w": "a",
            "t": 242.917
          },
          {
            "w": "population",
            "t": 243.439
          },
          {
            "w": "is",
            "t": 243.962
          },
          {
            "w": "heterogeneous",
            "t": 244.484
          },
          {
            "w": "across",
            "t": 245.007
          },
          {
            "w": "subgroups",
            "t": 245.529
          },
          {
            "w": "but",
            "t": 246.052
          },
          {
            "w": "internally",
            "t": 246.574
          },
          {
            "w": "homogeneous",
            "t": 247.096
          },
          {
            "w": "within",
            "t": 247.619
          },
          {
            "w": "them,",
            "t": 248.142
          },
          {
            "w": "Stratified",
            "t": 248.664
          },
          {
            "w": "Random",
            "t": 249.186
          },
          {
            "w": "Sampling",
            "t": 249.709
          },
          {
            "w": "provides",
            "t": 250.232
          },
          {
            "w": "dramatic",
            "t": 250.754
          },
          {
            "w": "precision",
            "t": 251.276
          },
          {
            "w": "gains",
            "t": 251.799
          },
          {
            "w": "over",
            "t": 252.322
          },
          {
            "w": "SRS.",
            "t": 252.844
          },
          {
            "w": "We",
            "t": 253.367
          },
          {
            "w": "partition",
            "t": 253.889
          },
          {
            "w": "population",
            "t": 254.411
          },
          {
            "w": "U",
            "t": 254.934
          },
          {
            "w": "into",
            "t": 255.457
          },
          {
            "w": "H",
            "t": 255.979
          },
          {
            "w": "mutually",
            "t": 256.502
          },
          {
            "w": "exclusive",
            "t": 257.024
          },
          {
            "w": "strata,",
            "t": 257.546
          },
          {
            "w": "drawing",
            "t": 258.069
          },
          {
            "w": "independent",
            "t": 258.591
          },
          {
            "w": "random",
            "t": 259.114
          },
          {
            "w": "samples",
            "t": 259.637
          },
          {
            "w": "n-sub-h",
            "t": 260.159
          },
          {
            "w": "from",
            "t": 260.682
          },
          {
            "w": "each",
            "t": 261.204
          },
          {
            "w": "stratum.",
            "t": 261.726
          },
          {
            "w": "The",
            "t": 262.249
          },
          {
            "w": "stratified",
            "t": 262.772
          },
          {
            "w": "sample",
            "t": 263.294
          },
          {
            "w": "mean",
            "t": 263.817
          },
          {
            "w": "y-bar",
            "t": 264.339
          },
          {
            "w": "stratified",
            "t": 264.861
          },
          {
            "w": "is",
            "t": 265.384
          },
          {
            "w": "the",
            "t": 265.906
          },
          {
            "w": "stratum-weight",
            "t": 266.429
          },
          {
            "w": "W-sub-h",
            "t": 266.952
          },
          {
            "w": "sum",
            "t": 267.474
          },
          {
            "w": "of",
            "t": 267.997
          },
          {
            "w": "stratum",
            "t": 268.519
          },
          {
            "w": "sample",
            "t": 269.041
          },
          {
            "w": "means.",
            "t": 269.564
          },
          {
            "w": "The",
            "t": 270.087
          },
          {
            "w": "estimator",
            "t": 270.609
          },
          {
            "w": "variance",
            "t": 271.132
          },
          {
            "w": "depends",
            "t": 271.654
          },
          {
            "w": "solely",
            "t": 272.177
          },
          {
            "w": "on",
            "t": 272.699
          },
          {
            "w": "within-stratum",
            "t": 273.221
          },
          {
            "w": "variances",
            "t": 273.744
          },
          {
            "w": "S-sub-h",
            "t": 274.267
          },
          {
            "w": "squared.",
            "t": 274.789
          },
          {
            "w": "Because",
            "t": 275.312
          },
          {
            "w": "between-strata",
            "t": 275.834
          },
          {
            "w": "variance",
            "t": 276.356
          },
          {
            "w": "is",
            "t": 276.879
          },
          {
            "w": "completely",
            "t": 277.401
          },
          {
            "w": "eliminated",
            "t": 277.924
          },
          {
            "w": "from",
            "t": 278.447
          },
          {
            "w": "the",
            "t": 278.969
          },
          {
            "w": "estimator,",
            "t": 279.491
          },
          {
            "w": "stratified",
            "t": 280.014
          },
          {
            "w": "sampling",
            "t": 280.536
          },
          {
            "w": "is",
            "t": 281.059
          },
          {
            "w": "mathematically",
            "t": 281.582
          },
          {
            "w": "guaranteed",
            "t": 282.104
          },
          {
            "w": "to",
            "t": 282.627
          },
          {
            "w": "never",
            "t": 283.149
          },
          {
            "w": "have",
            "t": 283.671
          },
          {
            "w": "higher",
            "t": 284.194
          },
          {
            "w": "variance",
            "t": 284.716
          },
          {
            "w": "than",
            "t": 285.239
          },
          {
            "w": "simple",
            "t": 285.762
          },
          {
            "w": "random",
            "t": 286.284
          },
          {
            "w": "sampling.",
            "t": 286.807
          },
          {
            "w": "The",
            "t": 287.329
          },
          {
            "w": "variance",
            "t": 287.851
          },
          {
            "w": "reduction",
            "t": 288.374
          },
          {
            "w": "achieved",
            "t": 288.897
          },
          {
            "w": "is",
            "t": 289.419
          },
          {
            "w": "directly",
            "t": 289.942
          },
          {
            "w": "proportional",
            "t": 290.464
          },
          {
            "w": "to",
            "t": 290.986
          },
          {
            "w": "the",
            "t": 291.509
          },
          {
            "w": "squared",
            "t": 292.031
          },
          {
            "w": "differences",
            "t": 292.554
          },
          {
            "w": "between",
            "t": 293.077
          },
          {
            "w": "stratum",
            "t": 293.599
          },
          {
            "w": "means.",
            "t": 294.122
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Dr. Nova",
        "text": "Welcome to our first interactive lab: The Neyman Optimal Allocation Workbench. Here you can manipulate the standard deviations S-sub-h for three distinct strata: Urban, Suburban, and Rural. Notice what happens when you adjust the Rural stratum's standard deviation from 12 up to 42. In proportional allocation, Rural receives only ten percent of the sample because it represents ten percent of the population. But under Jerzy Neyman's optimal allocation, the system dynamically reallocates samples toward Rural because its high internal variance contributes disproportionately to total estimator error. Compare the estimator variances on the display card: Neyman allocation achieves a substantial variance reduction over proportional allocation, delivering higher statistical precision without increasing total sample size.",
        "start": 294.644,
        "end": 351.077,
        "words": [
          {
            "w": "Welcome",
            "t": 294.644
          },
          {
            "w": "to",
            "t": 295.143
          },
          {
            "w": "our",
            "t": 295.643
          },
          {
            "w": "first",
            "t": 296.142
          },
          {
            "w": "interactive",
            "t": 296.642
          },
          {
            "w": "lab:",
            "t": 297.141
          },
          {
            "w": "The",
            "t": 297.64
          },
          {
            "w": "Neyman",
            "t": 298.14
          },
          {
            "w": "Optimal",
            "t": 298.639
          },
          {
            "w": "Allocation",
            "t": 299.139
          },
          {
            "w": "Workbench.",
            "t": 299.638
          },
          {
            "w": "Here",
            "t": 300.137
          },
          {
            "w": "you",
            "t": 300.637
          },
          {
            "w": "can",
            "t": 301.136
          },
          {
            "w": "manipulate",
            "t": 301.636
          },
          {
            "w": "the",
            "t": 302.135
          },
          {
            "w": "standard",
            "t": 302.635
          },
          {
            "w": "deviations",
            "t": 303.134
          },
          {
            "w": "S-sub-h",
            "t": 303.633
          },
          {
            "w": "for",
            "t": 304.133
          },
          {
            "w": "three",
            "t": 304.632
          },
          {
            "w": "distinct",
            "t": 305.132
          },
          {
            "w": "strata:",
            "t": 305.631
          },
          {
            "w": "Urban,",
            "t": 306.13
          },
          {
            "w": "Suburban,",
            "t": 306.63
          },
          {
            "w": "and",
            "t": 307.129
          },
          {
            "w": "Rural.",
            "t": 307.629
          },
          {
            "w": "Notice",
            "t": 308.128
          },
          {
            "w": "what",
            "t": 308.627
          },
          {
            "w": "happens",
            "t": 309.127
          },
          {
            "w": "when",
            "t": 309.626
          },
          {
            "w": "you",
            "t": 310.126
          },
          {
            "w": "adjust",
            "t": 310.625
          },
          {
            "w": "the",
            "t": 311.124
          },
          {
            "w": "Rural",
            "t": 311.624
          },
          {
            "w": "stratum's",
            "t": 312.123
          },
          {
            "w": "standard",
            "t": 312.623
          },
          {
            "w": "deviation",
            "t": 313.122
          },
          {
            "w": "from",
            "t": 313.621
          },
          {
            "w": "12",
            "t": 314.121
          },
          {
            "w": "up",
            "t": 314.62
          },
          {
            "w": "to",
            "t": 315.12
          },
          {
            "w": "42.",
            "t": 315.619
          },
          {
            "w": "In",
            "t": 316.119
          },
          {
            "w": "proportional",
            "t": 316.618
          },
          {
            "w": "allocation,",
            "t": 317.117
          },
          {
            "w": "Rural",
            "t": 317.617
          },
          {
            "w": "receives",
            "t": 318.116
          },
          {
            "w": "only",
            "t": 318.616
          },
          {
            "w": "ten",
            "t": 319.115
          },
          {
            "w": "percent",
            "t": 319.614
          },
          {
            "w": "of",
            "t": 320.114
          },
          {
            "w": "the",
            "t": 320.613
          },
          {
            "w": "sample",
            "t": 321.113
          },
          {
            "w": "because",
            "t": 321.612
          },
          {
            "w": "it",
            "t": 322.111
          },
          {
            "w": "represents",
            "t": 322.611
          },
          {
            "w": "ten",
            "t": 323.11
          },
          {
            "w": "percent",
            "t": 323.61
          },
          {
            "w": "of",
            "t": 324.109
          },
          {
            "w": "the",
            "t": 324.608
          },
          {
            "w": "population.",
            "t": 325.108
          },
          {
            "w": "But",
            "t": 325.607
          },
          {
            "w": "under",
            "t": 326.107
          },
          {
            "w": "Jerzy",
            "t": 326.606
          },
          {
            "w": "Neyman's",
            "t": 327.105
          },
          {
            "w": "optimal",
            "t": 327.605
          },
          {
            "w": "allocation,",
            "t": 328.104
          },
          {
            "w": "the",
            "t": 328.604
          },
          {
            "w": "system",
            "t": 329.103
          },
          {
            "w": "dynamically",
            "t": 329.602
          },
          {
            "w": "reallocates",
            "t": 330.102
          },
          {
            "w": "samples",
            "t": 330.601
          },
          {
            "w": "toward",
            "t": 331.101
          },
          {
            "w": "Rural",
            "t": 331.6
          },
          {
            "w": "because",
            "t": 332.1
          },
          {
            "w": "its",
            "t": 332.599
          },
          {
            "w": "high",
            "t": 333.098
          },
          {
            "w": "internal",
            "t": 333.598
          },
          {
            "w": "variance",
            "t": 334.097
          },
          {
            "w": "contributes",
            "t": 334.597
          },
          {
            "w": "disproportionately",
            "t": 335.096
          },
          {
            "w": "to",
            "t": 335.595
          },
          {
            "w": "total",
            "t": 336.095
          },
          {
            "w": "estimator",
            "t": 336.594
          },
          {
            "w": "error.",
            "t": 337.094
          },
          {
            "w": "Compare",
            "t": 337.593
          },
          {
            "w": "the",
            "t": 338.092
          },
          {
            "w": "estimator",
            "t": 338.592
          },
          {
            "w": "variances",
            "t": 339.091
          },
          {
            "w": "on",
            "t": 339.591
          },
          {
            "w": "the",
            "t": 340.09
          },
          {
            "w": "display",
            "t": 340.589
          },
          {
            "w": "card:",
            "t": 341.089
          },
          {
            "w": "Neyman",
            "t": 341.588
          },
          {
            "w": "allocation",
            "t": 342.088
          },
          {
            "w": "achieves",
            "t": 342.587
          },
          {
            "w": "a",
            "t": 343.086
          },
          {
            "w": "substantial",
            "t": 343.586
          },
          {
            "w": "variance",
            "t": 344.085
          },
          {
            "w": "reduction",
            "t": 344.585
          },
          {
            "w": "over",
            "t": 345.084
          },
          {
            "w": "proportional",
            "t": 345.584
          },
          {
            "w": "allocation,",
            "t": 346.083
          },
          {
            "w": "delivering",
            "t": 346.582
          },
          {
            "w": "higher",
            "t": 347.082
          },
          {
            "w": "statistical",
            "t": 347.581
          },
          {
            "w": "precision",
            "t": 348.081
          },
          {
            "w": "without",
            "t": 348.58
          },
          {
            "w": "increasing",
            "t": 349.079
          },
          {
            "w": "total",
            "t": 349.579
          },
          {
            "w": "sample",
            "t": 350.078
          },
          {
            "w": "size.",
            "t": 350.578
          }
        ]
      },
      {
        "slide": 7,
        "slideId": "s7",
        "speaker": "Dr. Nova",
        "text": "Time for Active Checkpoint 1. Under what mathematical condition is the Horvitz-Thompson estimator guaranteed to be strictly unbiased for the true population total Y? Option A: Only when all inclusion probabilities are uniform across all elements. Option B: Strictly when every unit in the target population has a strictly positive selection probability, pi-sub-i greater than zero. Option C: When the finite population correction factor is strictly less than five percent. Or Option D: Only when the sample is partitioned into at least five mutually exclusive strata. Select your answer.",
        "start": 351.077,
        "end": 391.328,
        "words": [
          {
            "w": "Time",
            "t": 351.077
          },
          {
            "w": "for",
            "t": 351.529
          },
          {
            "w": "Active",
            "t": 351.982
          },
          {
            "w": "Checkpoint",
            "t": 352.434
          },
          {
            "w": "1.",
            "t": 352.886
          },
          {
            "w": "Under",
            "t": 353.338
          },
          {
            "w": "what",
            "t": 353.791
          },
          {
            "w": "mathematical",
            "t": 354.243
          },
          {
            "w": "condition",
            "t": 354.695
          },
          {
            "w": "is",
            "t": 355.147
          },
          {
            "w": "the",
            "t": 355.6
          },
          {
            "w": "Horvitz-Thompson",
            "t": 356.052
          },
          {
            "w": "estimator",
            "t": 356.504
          },
          {
            "w": "guaranteed",
            "t": 356.956
          },
          {
            "w": "to",
            "t": 357.409
          },
          {
            "w": "be",
            "t": 357.861
          },
          {
            "w": "strictly",
            "t": 358.313
          },
          {
            "w": "unbiased",
            "t": 358.765
          },
          {
            "w": "for",
            "t": 359.218
          },
          {
            "w": "the",
            "t": 359.67
          },
          {
            "w": "true",
            "t": 360.122
          },
          {
            "w": "population",
            "t": 360.574
          },
          {
            "w": "total",
            "t": 361.027
          },
          {
            "w": "Y?",
            "t": 361.479
          },
          {
            "w": "Option",
            "t": 361.931
          },
          {
            "w": "A:",
            "t": 362.383
          },
          {
            "w": "Only",
            "t": 362.836
          },
          {
            "w": "when",
            "t": 363.288
          },
          {
            "w": "all",
            "t": 363.74
          },
          {
            "w": "inclusion",
            "t": 364.192
          },
          {
            "w": "probabilities",
            "t": 364.645
          },
          {
            "w": "are",
            "t": 365.097
          },
          {
            "w": "uniform",
            "t": 365.549
          },
          {
            "w": "across",
            "t": 366.002
          },
          {
            "w": "all",
            "t": 366.454
          },
          {
            "w": "elements.",
            "t": 366.906
          },
          {
            "w": "Option",
            "t": 367.358
          },
          {
            "w": "B:",
            "t": 367.811
          },
          {
            "w": "Strictly",
            "t": 368.263
          },
          {
            "w": "when",
            "t": 368.715
          },
          {
            "w": "every",
            "t": 369.167
          },
          {
            "w": "unit",
            "t": 369.62
          },
          {
            "w": "in",
            "t": 370.072
          },
          {
            "w": "the",
            "t": 370.524
          },
          {
            "w": "target",
            "t": 370.976
          },
          {
            "w": "population",
            "t": 371.429
          },
          {
            "w": "has",
            "t": 371.881
          },
          {
            "w": "a",
            "t": 372.333
          },
          {
            "w": "strictly",
            "t": 372.785
          },
          {
            "w": "positive",
            "t": 373.238
          },
          {
            "w": "selection",
            "t": 373.69
          },
          {
            "w": "probability,",
            "t": 374.142
          },
          {
            "w": "pi-sub-i",
            "t": 374.594
          },
          {
            "w": "greater",
            "t": 375.047
          },
          {
            "w": "than",
            "t": 375.499
          },
          {
            "w": "zero.",
            "t": 375.951
          },
          {
            "w": "Option",
            "t": 376.403
          },
          {
            "w": "C:",
            "t": 376.856
          },
          {
            "w": "When",
            "t": 377.308
          },
          {
            "w": "the",
            "t": 377.76
          },
          {
            "w": "finite",
            "t": 378.213
          },
          {
            "w": "population",
            "t": 378.665
          },
          {
            "w": "correction",
            "t": 379.117
          },
          {
            "w": "factor",
            "t": 379.569
          },
          {
            "w": "is",
            "t": 380.022
          },
          {
            "w": "strictly",
            "t": 380.474
          },
          {
            "w": "less",
            "t": 380.926
          },
          {
            "w": "than",
            "t": 381.378
          },
          {
            "w": "five",
            "t": 381.831
          },
          {
            "w": "percent.",
            "t": 382.283
          },
          {
            "w": "Or",
            "t": 382.735
          },
          {
            "w": "Option",
            "t": 383.187
          },
          {
            "w": "D:",
            "t": 383.64
          },
          {
            "w": "Only",
            "t": 384.092
          },
          {
            "w": "when",
            "t": 384.544
          },
          {
            "w": "the",
            "t": 384.996
          },
          {
            "w": "sample",
            "t": 385.449
          },
          {
            "w": "is",
            "t": 385.901
          },
          {
            "w": "partitioned",
            "t": 386.353
          },
          {
            "w": "into",
            "t": 386.805
          },
          {
            "w": "at",
            "t": 387.258
          },
          {
            "w": "least",
            "t": 387.71
          },
          {
            "w": "five",
            "t": 388.162
          },
          {
            "w": "mutually",
            "t": 388.614
          },
          {
            "w": "exclusive",
            "t": 389.067
          },
          {
            "w": "strata.",
            "t": 389.519
          },
          {
            "w": "Select",
            "t": 389.971
          },
          {
            "w": "your",
            "t": 390.423
          },
          {
            "w": "answer.",
            "t": 390.876
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Dr. Nova",
        "text": "Now let us systematically compare the three major stratified allocation strategies. First, Proportional Allocation sets n-sub-h equal to total sample n times the population share W-sub-h. It is computationally simple and guarantees self-weighting samples where every unit has equal inclusion probability, but it ignores differences in stratum variances. Second, Neyman Optimal Allocation sets n-sub-h proportional to N-sub-h times S-sub-h. It mathematically minimizes estimator variance for a fixed sample size, making it ideal when observation variances differ across strata. Third, Tschuprow-Neyman Cost-Optimal Allocation incorporates unit sampling costs c-sub-h, setting n-sub-h proportional to N-sub-h times S-sub-h divided by the square root of c-sub-h. This minimizes estimation variance for a fixed overall financial budget, allocating more samples to strata that are large and variable, but fewer to strata that are prohibitively expensive to sample.",
        "start": 391.328,
        "end": 457.087,
        "words": [
          {
            "w": "Now",
            "t": 391.328
          },
          {
            "w": "let",
            "t": 391.83
          },
          {
            "w": "us",
            "t": 392.332
          },
          {
            "w": "systematically",
            "t": 392.834
          },
          {
            "w": "compare",
            "t": 393.336
          },
          {
            "w": "the",
            "t": 393.838
          },
          {
            "w": "three",
            "t": 394.34
          },
          {
            "w": "major",
            "t": 394.842
          },
          {
            "w": "stratified",
            "t": 395.344
          },
          {
            "w": "allocation",
            "t": 395.846
          },
          {
            "w": "strategies.",
            "t": 396.348
          },
          {
            "w": "First,",
            "t": 396.85
          },
          {
            "w": "Proportional",
            "t": 397.352
          },
          {
            "w": "Allocation",
            "t": 397.854
          },
          {
            "w": "sets",
            "t": 398.356
          },
          {
            "w": "n-sub-h",
            "t": 398.858
          },
          {
            "w": "equal",
            "t": 399.36
          },
          {
            "w": "to",
            "t": 399.862
          },
          {
            "w": "total",
            "t": 400.364
          },
          {
            "w": "sample",
            "t": 400.866
          },
          {
            "w": "n",
            "t": 401.368
          },
          {
            "w": "times",
            "t": 401.87
          },
          {
            "w": "the",
            "t": 402.371
          },
          {
            "w": "population",
            "t": 402.873
          },
          {
            "w": "share",
            "t": 403.375
          },
          {
            "w": "W-sub-h.",
            "t": 403.877
          },
          {
            "w": "It",
            "t": 404.379
          },
          {
            "w": "is",
            "t": 404.881
          },
          {
            "w": "computationally",
            "t": 405.383
          },
          {
            "w": "simple",
            "t": 405.885
          },
          {
            "w": "and",
            "t": 406.387
          },
          {
            "w": "guarantees",
            "t": 406.889
          },
          {
            "w": "self-weighting",
            "t": 407.391
          },
          {
            "w": "samples",
            "t": 407.893
          },
          {
            "w": "where",
            "t": 408.395
          },
          {
            "w": "every",
            "t": 408.897
          },
          {
            "w": "unit",
            "t": 409.399
          },
          {
            "w": "has",
            "t": 409.901
          },
          {
            "w": "equal",
            "t": 410.403
          },
          {
            "w": "inclusion",
            "t": 410.905
          },
          {
            "w": "probability,",
            "t": 411.407
          },
          {
            "w": "but",
            "t": 411.909
          },
          {
            "w": "it",
            "t": 412.411
          },
          {
            "w": "ignores",
            "t": 412.913
          },
          {
            "w": "differences",
            "t": 413.415
          },
          {
            "w": "in",
            "t": 413.917
          },
          {
            "w": "stratum",
            "t": 414.419
          },
          {
            "w": "variances.",
            "t": 414.921
          },
          {
            "w": "Second,",
            "t": 415.423
          },
          {
            "w": "Neyman",
            "t": 415.925
          },
          {
            "w": "Optimal",
            "t": 416.427
          },
          {
            "w": "Allocation",
            "t": 416.929
          },
          {
            "w": "sets",
            "t": 417.431
          },
          {
            "w": "n-sub-h",
            "t": 417.933
          },
          {
            "w": "proportional",
            "t": 418.435
          },
          {
            "w": "to",
            "t": 418.937
          },
          {
            "w": "N-sub-h",
            "t": 419.439
          },
          {
            "w": "times",
            "t": 419.941
          },
          {
            "w": "S-sub-h.",
            "t": 420.443
          },
          {
            "w": "It",
            "t": 420.945
          },
          {
            "w": "mathematically",
            "t": 421.447
          },
          {
            "w": "minimizes",
            "t": 421.949
          },
          {
            "w": "estimator",
            "t": 422.451
          },
          {
            "w": "variance",
            "t": 422.953
          },
          {
            "w": "for",
            "t": 423.455
          },
          {
            "w": "a",
            "t": 423.957
          },
          {
            "w": "fixed",
            "t": 424.458
          },
          {
            "w": "sample",
            "t": 424.96
          },
          {
            "w": "size,",
            "t": 425.462
          },
          {
            "w": "making",
            "t": 425.964
          },
          {
            "w": "it",
            "t": 426.466
          },
          {
            "w": "ideal",
            "t": 426.968
          },
          {
            "w": "when",
            "t": 427.47
          },
          {
            "w": "observation",
            "t": 427.972
          },
          {
            "w": "variances",
            "t": 428.474
          },
          {
            "w": "differ",
            "t": 428.976
          },
          {
            "w": "across",
            "t": 429.478
          },
          {
            "w": "strata.",
            "t": 429.98
          },
          {
            "w": "Third,",
            "t": 430.482
          },
          {
            "w": "Tschuprow-Neyman",
            "t": 430.984
          },
          {
            "w": "Cost-Optimal",
            "t": 431.486
          },
          {
            "w": "Allocation",
            "t": 431.988
          },
          {
            "w": "incorporates",
            "t": 432.49
          },
          {
            "w": "unit",
            "t": 432.992
          },
          {
            "w": "sampling",
            "t": 433.494
          },
          {
            "w": "costs",
            "t": 433.996
          },
          {
            "w": "c-sub-h,",
            "t": 434.498
          },
          {
            "w": "setting",
            "t": 435.0
          },
          {
            "w": "n-sub-h",
            "t": 435.502
          },
          {
            "w": "proportional",
            "t": 436.004
          },
          {
            "w": "to",
            "t": 436.506
          },
          {
            "w": "N-sub-h",
            "t": 437.008
          },
          {
            "w": "times",
            "t": 437.51
          },
          {
            "w": "S-sub-h",
            "t": 438.012
          },
          {
            "w": "divided",
            "t": 438.514
          },
          {
            "w": "by",
            "t": 439.016
          },
          {
            "w": "the",
            "t": 439.518
          },
          {
            "w": "square",
            "t": 440.02
          },
          {
            "w": "root",
            "t": 440.522
          },
          {
            "w": "of",
            "t": 441.024
          },
          {
            "w": "c-sub-h.",
            "t": 441.526
          },
          {
            "w": "This",
            "t": 442.028
          },
          {
            "w": "minimizes",
            "t": 442.53
          },
          {
            "w": "estimation",
            "t": 443.032
          },
          {
            "w": "variance",
            "t": 443.534
          },
          {
            "w": "for",
            "t": 444.036
          },
          {
            "w": "a",
            "t": 444.538
          },
          {
            "w": "fixed",
            "t": 445.04
          },
          {
            "w": "overall",
            "t": 445.542
          },
          {
            "w": "financial",
            "t": 446.044
          },
          {
            "w": "budget,",
            "t": 446.545
          },
          {
            "w": "allocating",
            "t": 447.047
          },
          {
            "w": "more",
            "t": 447.549
          },
          {
            "w": "samples",
            "t": 448.051
          },
          {
            "w": "to",
            "t": 448.553
          },
          {
            "w": "strata",
            "t": 449.055
          },
          {
            "w": "that",
            "t": 449.557
          },
          {
            "w": "are",
            "t": 450.059
          },
          {
            "w": "large",
            "t": 450.561
          },
          {
            "w": "and",
            "t": 451.063
          },
          {
            "w": "variable,",
            "t": 451.565
          },
          {
            "w": "but",
            "t": 452.067
          },
          {
            "w": "fewer",
            "t": 452.569
          },
          {
            "w": "to",
            "t": 453.071
          },
          {
            "w": "strata",
            "t": 453.573
          },
          {
            "w": "that",
            "t": 454.075
          },
          {
            "w": "are",
            "t": 454.577
          },
          {
            "w": "prohibitively",
            "t": 455.079
          },
          {
            "w": "expensive",
            "t": 455.581
          },
          {
            "w": "to",
            "t": 456.083
          },
          {
            "w": "sample.",
            "t": 456.585
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Dr. Nova",
        "text": "When individual sampling frames do not exist or units are geographically dispersed across vast territories, Simple Random Sampling becomes logistically impossible. Consider inspecting hospital medical records, classroom learning outcomes, or IoT smart meters. Obtaining a global roster of every patient or student is often impossible due to privacy and administrative barriers. Cluster Sampling solves this operational bottleneck by partitioning population U into K primary sampling units, or clusters. Instead of drawing individuals directly, we randomly select k clusters. In single-stage cluster sampling, we inspect every element within the chosen clusters. In two-stage cluster sampling, we draw a secondary random sample of m units within each selected cluster. While cluster sampling slashes field collection and travel costs by orders of magnitude, it introduces a severe statistical trade-off: units within the same cluster are correlated, which inflates estimator variance.",
        "start": 457.087,
        "end": 524.491,
        "words": [
          {
            "w": "When",
            "t": 457.087
          },
          {
            "w": "individual",
            "t": 457.579
          },
          {
            "w": "sampling",
            "t": 458.071
          },
          {
            "w": "frames",
            "t": 458.563
          },
          {
            "w": "do",
            "t": 459.055
          },
          {
            "w": "not",
            "t": 459.547
          },
          {
            "w": "exist",
            "t": 460.039
          },
          {
            "w": "or",
            "t": 460.531
          },
          {
            "w": "units",
            "t": 461.023
          },
          {
            "w": "are",
            "t": 461.515
          },
          {
            "w": "geographically",
            "t": 462.007
          },
          {
            "w": "dispersed",
            "t": 462.499
          },
          {
            "w": "across",
            "t": 462.991
          },
          {
            "w": "vast",
            "t": 463.483
          },
          {
            "w": "territories,",
            "t": 463.975
          },
          {
            "w": "Simple",
            "t": 464.467
          },
          {
            "w": "Random",
            "t": 464.959
          },
          {
            "w": "Sampling",
            "t": 465.451
          },
          {
            "w": "becomes",
            "t": 465.943
          },
          {
            "w": "logistically",
            "t": 466.435
          },
          {
            "w": "impossible.",
            "t": 466.927
          },
          {
            "w": "Consider",
            "t": 467.419
          },
          {
            "w": "inspecting",
            "t": 467.911
          },
          {
            "w": "hospital",
            "t": 468.403
          },
          {
            "w": "medical",
            "t": 468.895
          },
          {
            "w": "records,",
            "t": 469.387
          },
          {
            "w": "classroom",
            "t": 469.879
          },
          {
            "w": "learning",
            "t": 470.371
          },
          {
            "w": "outcomes,",
            "t": 470.863
          },
          {
            "w": "or",
            "t": 471.355
          },
          {
            "w": "IoT",
            "t": 471.847
          },
          {
            "w": "smart",
            "t": 472.339
          },
          {
            "w": "meters.",
            "t": 472.831
          },
          {
            "w": "Obtaining",
            "t": 473.323
          },
          {
            "w": "a",
            "t": 473.815
          },
          {
            "w": "global",
            "t": 474.307
          },
          {
            "w": "roster",
            "t": 474.799
          },
          {
            "w": "of",
            "t": 475.291
          },
          {
            "w": "every",
            "t": 475.783
          },
          {
            "w": "patient",
            "t": 476.275
          },
          {
            "w": "or",
            "t": 476.767
          },
          {
            "w": "student",
            "t": 477.259
          },
          {
            "w": "is",
            "t": 477.751
          },
          {
            "w": "often",
            "t": 478.243
          },
          {
            "w": "impossible",
            "t": 478.735
          },
          {
            "w": "due",
            "t": 479.227
          },
          {
            "w": "to",
            "t": 479.719
          },
          {
            "w": "privacy",
            "t": 480.211
          },
          {
            "w": "and",
            "t": 480.703
          },
          {
            "w": "administrative",
            "t": 481.195
          },
          {
            "w": "barriers.",
            "t": 481.687
          },
          {
            "w": "Cluster",
            "t": 482.179
          },
          {
            "w": "Sampling",
            "t": 482.671
          },
          {
            "w": "solves",
            "t": 483.163
          },
          {
            "w": "this",
            "t": 483.655
          },
          {
            "w": "operational",
            "t": 484.147
          },
          {
            "w": "bottleneck",
            "t": 484.639
          },
          {
            "w": "by",
            "t": 485.131
          },
          {
            "w": "partitioning",
            "t": 485.623
          },
          {
            "w": "population",
            "t": 486.115
          },
          {
            "w": "U",
            "t": 486.607
          },
          {
            "w": "into",
            "t": 487.099
          },
          {
            "w": "K",
            "t": 487.591
          },
          {
            "w": "primary",
            "t": 488.083
          },
          {
            "w": "sampling",
            "t": 488.575
          },
          {
            "w": "units,",
            "t": 489.067
          },
          {
            "w": "or",
            "t": 489.559
          },
          {
            "w": "clusters.",
            "t": 490.051
          },
          {
            "w": "Instead",
            "t": 490.543
          },
          {
            "w": "of",
            "t": 491.035
          },
          {
            "w": "drawing",
            "t": 491.527
          },
          {
            "w": "individuals",
            "t": 492.019
          },
          {
            "w": "directly,",
            "t": 492.511
          },
          {
            "w": "we",
            "t": 493.003
          },
          {
            "w": "randomly",
            "t": 493.495
          },
          {
            "w": "select",
            "t": 493.987
          },
          {
            "w": "k",
            "t": 494.479
          },
          {
            "w": "clusters.",
            "t": 494.971
          },
          {
            "w": "In",
            "t": 495.463
          },
          {
            "w": "single-stage",
            "t": 495.955
          },
          {
            "w": "cluster",
            "t": 496.447
          },
          {
            "w": "sampling,",
            "t": 496.939
          },
          {
            "w": "we",
            "t": 497.431
          },
          {
            "w": "inspect",
            "t": 497.923
          },
          {
            "w": "every",
            "t": 498.415
          },
          {
            "w": "element",
            "t": 498.907
          },
          {
            "w": "within",
            "t": 499.399
          },
          {
            "w": "the",
            "t": 499.891
          },
          {
            "w": "chosen",
            "t": 500.383
          },
          {
            "w": "clusters.",
            "t": 500.875
          },
          {
            "w": "In",
            "t": 501.367
          },
          {
            "w": "two-stage",
            "t": 501.859
          },
          {
            "w": "cluster",
            "t": 502.351
          },
          {
            "w": "sampling,",
            "t": 502.843
          },
          {
            "w": "we",
            "t": 503.335
          },
          {
            "w": "draw",
            "t": 503.827
          },
          {
            "w": "a",
            "t": 504.319
          },
          {
            "w": "secondary",
            "t": 504.811
          },
          {
            "w": "random",
            "t": 505.303
          },
          {
            "w": "sample",
            "t": 505.795
          },
          {
            "w": "of",
            "t": 506.287
          },
          {
            "w": "m",
            "t": 506.779
          },
          {
            "w": "units",
            "t": 507.271
          },
          {
            "w": "within",
            "t": 507.763
          },
          {
            "w": "each",
            "t": 508.255
          },
          {
            "w": "selected",
            "t": 508.747
          },
          {
            "w": "cluster.",
            "t": 509.239
          },
          {
            "w": "While",
            "t": 509.731
          },
          {
            "w": "cluster",
            "t": 510.223
          },
          {
            "w": "sampling",
            "t": 510.715
          },
          {
            "w": "slashes",
            "t": 511.207
          },
          {
            "w": "field",
            "t": 511.699
          },
          {
            "w": "collection",
            "t": 512.191
          },
          {
            "w": "and",
            "t": 512.683
          },
          {
            "w": "travel",
            "t": 513.175
          },
          {
            "w": "costs",
            "t": 513.667
          },
          {
            "w": "by",
            "t": 514.159
          },
          {
            "w": "orders",
            "t": 514.651
          },
          {
            "w": "of",
            "t": 515.143
          },
          {
            "w": "magnitude,",
            "t": 515.635
          },
          {
            "w": "it",
            "t": 516.127
          },
          {
            "w": "introduces",
            "t": 516.619
          },
          {
            "w": "a",
            "t": 517.111
          },
          {
            "w": "severe",
            "t": 517.603
          },
          {
            "w": "statistical",
            "t": 518.095
          },
          {
            "w": "trade-off:",
            "t": 518.587
          },
          {
            "w": "units",
            "t": 519.079
          },
          {
            "w": "within",
            "t": 519.571
          },
          {
            "w": "the",
            "t": 520.063
          },
          {
            "w": "same",
            "t": 520.555
          },
          {
            "w": "cluster",
            "t": 521.047
          },
          {
            "w": "are",
            "t": 521.539
          },
          {
            "w": "correlated,",
            "t": 522.031
          },
          {
            "w": "which",
            "t": 522.523
          },
          {
            "w": "inflates",
            "t": 523.015
          },
          {
            "w": "estimator",
            "t": 523.507
          },
          {
            "w": "variance.",
            "t": 523.999
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Dr. Nova",
        "text": "To quantify the statistical penalty of cluster sampling, we must understand the Intra-Class Correlation Coefficient, denoted by rho. When a population is clustered, total variance decomposes into two components: between-cluster variance sigma-between squared, and within-cluster variance sigma-within squared. The intra-class correlation rho is defined as between-cluster variance divided by total variance. If clusters are identical to one another in their internal distributions, sigma-between is zero and rho equals zero; in that rare case, cluster sampling performs identically to simple random sampling. However, if units within each cluster are identical to one another, within-cluster variance is zero and rho equals one. In machine learning datasets, rho is almost always positive, typically ranging from zero point zero two to zero point two five. Even small values of rho cause dramatic variance inflation when average cluster size m is large.",
        "start": 524.491,
        "end": 589.838,
        "words": [
          {
            "w": "To",
            "t": 524.491
          },
          {
            "w": "quantify",
            "t": 524.968
          },
          {
            "w": "the",
            "t": 525.445
          },
          {
            "w": "statistical",
            "t": 525.922
          },
          {
            "w": "penalty",
            "t": 526.399
          },
          {
            "w": "of",
            "t": 526.876
          },
          {
            "w": "cluster",
            "t": 527.353
          },
          {
            "w": "sampling,",
            "t": 527.83
          },
          {
            "w": "we",
            "t": 528.307
          },
          {
            "w": "must",
            "t": 528.784
          },
          {
            "w": "understand",
            "t": 529.261
          },
          {
            "w": "the",
            "t": 529.738
          },
          {
            "w": "Intra-Class",
            "t": 530.215
          },
          {
            "w": "Correlation",
            "t": 530.692
          },
          {
            "w": "Coefficient,",
            "t": 531.169
          },
          {
            "w": "denoted",
            "t": 531.646
          },
          {
            "w": "by",
            "t": 532.123
          },
          {
            "w": "rho.",
            "t": 532.6
          },
          {
            "w": "When",
            "t": 533.077
          },
          {
            "w": "a",
            "t": 533.554
          },
          {
            "w": "population",
            "t": 534.031
          },
          {
            "w": "is",
            "t": 534.508
          },
          {
            "w": "clustered,",
            "t": 534.985
          },
          {
            "w": "total",
            "t": 535.462
          },
          {
            "w": "variance",
            "t": 535.939
          },
          {
            "w": "decomposes",
            "t": 536.416
          },
          {
            "w": "into",
            "t": 536.893
          },
          {
            "w": "two",
            "t": 537.37
          },
          {
            "w": "components:",
            "t": 537.847
          },
          {
            "w": "between-cluster",
            "t": 538.324
          },
          {
            "w": "variance",
            "t": 538.801
          },
          {
            "w": "sigma-between",
            "t": 539.278
          },
          {
            "w": "squared,",
            "t": 539.755
          },
          {
            "w": "and",
            "t": 540.232
          },
          {
            "w": "within-cluster",
            "t": 540.709
          },
          {
            "w": "variance",
            "t": 541.185
          },
          {
            "w": "sigma-within",
            "t": 541.662
          },
          {
            "w": "squared.",
            "t": 542.139
          },
          {
            "w": "The",
            "t": 542.616
          },
          {
            "w": "intra-class",
            "t": 543.093
          },
          {
            "w": "correlation",
            "t": 543.57
          },
          {
            "w": "rho",
            "t": 544.047
          },
          {
            "w": "is",
            "t": 544.524
          },
          {
            "w": "defined",
            "t": 545.001
          },
          {
            "w": "as",
            "t": 545.478
          },
          {
            "w": "between-cluster",
            "t": 545.955
          },
          {
            "w": "variance",
            "t": 546.432
          },
          {
            "w": "divided",
            "t": 546.909
          },
          {
            "w": "by",
            "t": 547.386
          },
          {
            "w": "total",
            "t": 547.863
          },
          {
            "w": "variance.",
            "t": 548.34
          },
          {
            "w": "If",
            "t": 548.817
          },
          {
            "w": "clusters",
            "t": 549.294
          },
          {
            "w": "are",
            "t": 549.771
          },
          {
            "w": "identical",
            "t": 550.248
          },
          {
            "w": "to",
            "t": 550.725
          },
          {
            "w": "one",
            "t": 551.202
          },
          {
            "w": "another",
            "t": 551.679
          },
          {
            "w": "in",
            "t": 552.156
          },
          {
            "w": "their",
            "t": 552.633
          },
          {
            "w": "internal",
            "t": 553.11
          },
          {
            "w": "distributions,",
            "t": 553.587
          },
          {
            "w": "sigma-between",
            "t": 554.064
          },
          {
            "w": "is",
            "t": 554.541
          },
          {
            "w": "zero",
            "t": 555.018
          },
          {
            "w": "and",
            "t": 555.495
          },
          {
            "w": "rho",
            "t": 555.972
          },
          {
            "w": "equals",
            "t": 556.449
          },
          {
            "w": "zero;",
            "t": 556.926
          },
          {
            "w": "in",
            "t": 557.403
          },
          {
            "w": "that",
            "t": 557.88
          },
          {
            "w": "rare",
            "t": 558.357
          },
          {
            "w": "case,",
            "t": 558.834
          },
          {
            "w": "cluster",
            "t": 559.311
          },
          {
            "w": "sampling",
            "t": 559.788
          },
          {
            "w": "performs",
            "t": 560.265
          },
          {
            "w": "identically",
            "t": 560.742
          },
          {
            "w": "to",
            "t": 561.219
          },
          {
            "w": "simple",
            "t": 561.696
          },
          {
            "w": "random",
            "t": 562.173
          },
          {
            "w": "sampling.",
            "t": 562.65
          },
          {
            "w": "However,",
            "t": 563.127
          },
          {
            "w": "if",
            "t": 563.604
          },
          {
            "w": "units",
            "t": 564.081
          },
          {
            "w": "within",
            "t": 564.558
          },
          {
            "w": "each",
            "t": 565.035
          },
          {
            "w": "cluster",
            "t": 565.512
          },
          {
            "w": "are",
            "t": 565.989
          },
          {
            "w": "identical",
            "t": 566.466
          },
          {
            "w": "to",
            "t": 566.943
          },
          {
            "w": "one",
            "t": 567.42
          },
          {
            "w": "another,",
            "t": 567.897
          },
          {
            "w": "within-cluster",
            "t": 568.374
          },
          {
            "w": "variance",
            "t": 568.851
          },
          {
            "w": "is",
            "t": 569.328
          },
          {
            "w": "zero",
            "t": 569.805
          },
          {
            "w": "and",
            "t": 570.282
          },
          {
            "w": "rho",
            "t": 570.759
          },
          {
            "w": "equals",
            "t": 571.236
          },
          {
            "w": "one.",
            "t": 571.713
          },
          {
            "w": "In",
            "t": 572.19
          },
          {
            "w": "machine",
            "t": 572.667
          },
          {
            "w": "learning",
            "t": 573.144
          },
          {
            "w": "datasets,",
            "t": 573.62
          },
          {
            "w": "rho",
            "t": 574.097
          },
          {
            "w": "is",
            "t": 574.574
          },
          {
            "w": "almost",
            "t": 575.051
          },
          {
            "w": "always",
            "t": 575.528
          },
          {
            "w": "positive,",
            "t": 576.005
          },
          {
            "w": "typically",
            "t": 576.482
          },
          {
            "w": "ranging",
            "t": 576.959
          },
          {
            "w": "from",
            "t": 577.436
          },
          {
            "w": "zero",
            "t": 577.913
          },
          {
            "w": "point",
            "t": 578.39
          },
          {
            "w": "zero",
            "t": 578.867
          },
          {
            "w": "two",
            "t": 579.344
          },
          {
            "w": "to",
            "t": 579.821
          },
          {
            "w": "zero",
            "t": 580.298
          },
          {
            "w": "point",
            "t": 580.775
          },
          {
            "w": "two",
            "t": 581.252
          },
          {
            "w": "five.",
            "t": 581.729
          },
          {
            "w": "Even",
            "t": 582.206
          },
          {
            "w": "small",
            "t": 582.683
          },
          {
            "w": "values",
            "t": 583.16
          },
          {
            "w": "of",
            "t": 583.637
          },
          {
            "w": "rho",
            "t": 584.114
          },
          {
            "w": "cause",
            "t": 584.591
          },
          {
            "w": "dramatic",
            "t": 585.068
          },
          {
            "w": "variance",
            "t": 585.545
          },
          {
            "w": "inflation",
            "t": 586.022
          },
          {
            "w": "when",
            "t": 586.499
          },
          {
            "w": "average",
            "t": 586.976
          },
          {
            "w": "cluster",
            "t": 587.453
          },
          {
            "w": "size",
            "t": 587.93
          },
          {
            "w": "m",
            "t": 588.407
          },
          {
            "w": "is",
            "t": 588.884
          },
          {
            "w": "large.",
            "t": 589.361
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Dr. Nova",
        "text": "In 1965, Leslie Kish formalized the exact metric to translate clustered observations into independent statistical equivalents: the Design Effect, or Deff. Deff is defined as the ratio of the variance of an estimator under the actual complex cluster design to the variance under simple random sampling of the same size. Kish derived the celebrated formula: Deff equals one plus m minus one times rho, where m is average cluster size and rho is intra-class correlation. When Deff exceeds one, estimation variance is inflated by that factor. To determine the true informational content of your dataset, we divide raw sample size n by Deff, yielding the Effective Sample Size n-effective. For example, if a team samples 1,000 students across 10 schools with m equals 100 and rho equals 0.10, Deff is 10.9. That 1,000 student dataset carries the statistical precision of only 92 independent observations.",
        "start": 589.838,
        "end": 651.482,
        "words": [
          {
            "w": "In",
            "t": 589.838
          },
          {
            "w": "1965,",
            "t": 590.266
          },
          {
            "w": "Leslie",
            "t": 590.694
          },
          {
            "w": "Kish",
            "t": 591.122
          },
          {
            "w": "formalized",
            "t": 591.55
          },
          {
            "w": "the",
            "t": 591.978
          },
          {
            "w": "exact",
            "t": 592.406
          },
          {
            "w": "metric",
            "t": 592.835
          },
          {
            "w": "to",
            "t": 593.263
          },
          {
            "w": "translate",
            "t": 593.691
          },
          {
            "w": "clustered",
            "t": 594.119
          },
          {
            "w": "observations",
            "t": 594.547
          },
          {
            "w": "into",
            "t": 594.975
          },
          {
            "w": "independent",
            "t": 595.403
          },
          {
            "w": "statistical",
            "t": 595.831
          },
          {
            "w": "equivalents:",
            "t": 596.259
          },
          {
            "w": "the",
            "t": 596.687
          },
          {
            "w": "Design",
            "t": 597.115
          },
          {
            "w": "Effect,",
            "t": 597.543
          },
          {
            "w": "or",
            "t": 597.972
          },
          {
            "w": "Deff.",
            "t": 598.4
          },
          {
            "w": "Deff",
            "t": 598.828
          },
          {
            "w": "is",
            "t": 599.256
          },
          {
            "w": "defined",
            "t": 599.684
          },
          {
            "w": "as",
            "t": 600.112
          },
          {
            "w": "the",
            "t": 600.54
          },
          {
            "w": "ratio",
            "t": 600.968
          },
          {
            "w": "of",
            "t": 601.396
          },
          {
            "w": "the",
            "t": 601.824
          },
          {
            "w": "variance",
            "t": 602.252
          },
          {
            "w": "of",
            "t": 602.68
          },
          {
            "w": "an",
            "t": 603.109
          },
          {
            "w": "estimator",
            "t": 603.537
          },
          {
            "w": "under",
            "t": 603.965
          },
          {
            "w": "the",
            "t": 604.393
          },
          {
            "w": "actual",
            "t": 604.821
          },
          {
            "w": "complex",
            "t": 605.249
          },
          {
            "w": "cluster",
            "t": 605.677
          },
          {
            "w": "design",
            "t": 606.105
          },
          {
            "w": "to",
            "t": 606.533
          },
          {
            "w": "the",
            "t": 606.961
          },
          {
            "w": "variance",
            "t": 607.389
          },
          {
            "w": "under",
            "t": 607.817
          },
          {
            "w": "simple",
            "t": 608.246
          },
          {
            "w": "random",
            "t": 608.674
          },
          {
            "w": "sampling",
            "t": 609.102
          },
          {
            "w": "of",
            "t": 609.53
          },
          {
            "w": "the",
            "t": 609.958
          },
          {
            "w": "same",
            "t": 610.386
          },
          {
            "w": "size.",
            "t": 610.814
          },
          {
            "w": "Kish",
            "t": 611.242
          },
          {
            "w": "derived",
            "t": 611.67
          },
          {
            "w": "the",
            "t": 612.098
          },
          {
            "w": "celebrated",
            "t": 612.526
          },
          {
            "w": "formula:",
            "t": 612.954
          },
          {
            "w": "Deff",
            "t": 613.383
          },
          {
            "w": "equals",
            "t": 613.811
          },
          {
            "w": "one",
            "t": 614.239
          },
          {
            "w": "plus",
            "t": 614.667
          },
          {
            "w": "m",
            "t": 615.095
          },
          {
            "w": "minus",
            "t": 615.523
          },
          {
            "w": "one",
            "t": 615.951
          },
          {
            "w": "times",
            "t": 616.379
          },
          {
            "w": "rho,",
            "t": 616.807
          },
          {
            "w": "where",
            "t": 617.235
          },
          {
            "w": "m",
            "t": 617.663
          },
          {
            "w": "is",
            "t": 618.091
          },
          {
            "w": "average",
            "t": 618.52
          },
          {
            "w": "cluster",
            "t": 618.948
          },
          {
            "w": "size",
            "t": 619.376
          },
          {
            "w": "and",
            "t": 619.804
          },
          {
            "w": "rho",
            "t": 620.232
          },
          {
            "w": "is",
            "t": 620.66
          },
          {
            "w": "intra-class",
            "t": 621.088
          },
          {
            "w": "correlation.",
            "t": 621.516
          },
          {
            "w": "When",
            "t": 621.944
          },
          {
            "w": "Deff",
            "t": 622.372
          },
          {
            "w": "exceeds",
            "t": 622.8
          },
          {
            "w": "one,",
            "t": 623.228
          },
          {
            "w": "estimation",
            "t": 623.657
          },
          {
            "w": "variance",
            "t": 624.085
          },
          {
            "w": "is",
            "t": 624.513
          },
          {
            "w": "inflated",
            "t": 624.941
          },
          {
            "w": "by",
            "t": 625.369
          },
          {
            "w": "that",
            "t": 625.797
          },
          {
            "w": "factor.",
            "t": 626.225
          },
          {
            "w": "To",
            "t": 626.653
          },
          {
            "w": "determine",
            "t": 627.081
          },
          {
            "w": "the",
            "t": 627.509
          },
          {
            "w": "true",
            "t": 627.937
          },
          {
            "w": "informational",
            "t": 628.365
          },
          {
            "w": "content",
            "t": 628.794
          },
          {
            "w": "of",
            "t": 629.222
          },
          {
            "w": "your",
            "t": 629.65
          },
          {
            "w": "dataset,",
            "t": 630.078
          },
          {
            "w": "we",
            "t": 630.506
          },
          {
            "w": "divide",
            "t": 630.934
          },
          {
            "w": "raw",
            "t": 631.362
          },
          {
            "w": "sample",
            "t": 631.79
          },
          {
            "w": "size",
            "t": 632.218
          },
          {
            "w": "n",
            "t": 632.646
          },
          {
            "w": "by",
            "t": 633.074
          },
          {
            "w": "Deff,",
            "t": 633.502
          },
          {
            "w": "yielding",
            "t": 633.931
          },
          {
            "w": "the",
            "t": 634.359
          },
          {
            "w": "Effective",
            "t": 634.787
          },
          {
            "w": "Sample",
            "t": 635.215
          },
          {
            "w": "Size",
            "t": 635.643
          },
          {
            "w": "n-effective.",
            "t": 636.071
          },
          {
            "w": "For",
            "t": 636.499
          },
          {
            "w": "example,",
            "t": 636.927
          },
          {
            "w": "if",
            "t": 637.355
          },
          {
            "w": "a",
            "t": 637.783
          },
          {
            "w": "team",
            "t": 638.211
          },
          {
            "w": "samples",
            "t": 638.639
          },
          {
            "w": "1,000",
            "t": 639.068
          },
          {
            "w": "students",
            "t": 639.496
          },
          {
            "w": "across",
            "t": 639.924
          },
          {
            "w": "10",
            "t": 640.352
          },
          {
            "w": "schools",
            "t": 640.78
          },
          {
            "w": "with",
            "t": 641.208
          },
          {
            "w": "m",
            "t": 641.636
          },
          {
            "w": "equals",
            "t": 642.064
          },
          {
            "w": "100",
            "t": 642.492
          },
          {
            "w": "and",
            "t": 642.92
          },
          {
            "w": "rho",
            "t": 643.348
          },
          {
            "w": "equals",
            "t": 643.776
          },
          {
            "w": "0.10,",
            "t": 644.205
          },
          {
            "w": "Deff",
            "t": 644.633
          },
          {
            "w": "is",
            "t": 645.061
          },
          {
            "w": "10.9.",
            "t": 645.489
          },
          {
            "w": "That",
            "t": 645.917
          },
          {
            "w": "1,000",
            "t": 646.345
          },
          {
            "w": "student",
            "t": 646.773
          },
          {
            "w": "dataset",
            "t": 647.201
          },
          {
            "w": "carries",
            "t": 647.629
          },
          {
            "w": "the",
            "t": 648.057
          },
          {
            "w": "statistical",
            "t": 648.485
          },
          {
            "w": "precision",
            "t": 648.913
          },
          {
            "w": "of",
            "t": 649.342
          },
          {
            "w": "only",
            "t": 649.77
          },
          {
            "w": "92",
            "t": 650.198
          },
          {
            "w": "independent",
            "t": 650.626
          },
          {
            "w": "observations.",
            "t": 651.054
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Dr. Nova",
        "text": "Welcome to our second interactive lab: The Cluster Sampling and Kish's Design Effect Simulator. On this slide, you can dynamically adjust cluster size m, total sample size n, and intra-class correlation rho. Try dragging the cluster size slider m from 5 up to 50, while keeping rho fixed at 0.15. Notice how the Design Effect Deff skyrockets from 1.6 up to 8.35! Observe the effective sample size card: your 1,000 collected observations shrink to only 120 effective independent data points, representing an 88% loss of information. This demonstrates why survey statisticians always recommend sampling smaller clusters across more locations rather than large clusters in few locations.",
        "start": 651.482,
        "end": 698.384,
        "words": [
          {
            "w": "Welcome",
            "t": 651.482
          },
          {
            "w": "to",
            "t": 651.924
          },
          {
            "w": "our",
            "t": 652.367
          },
          {
            "w": "second",
            "t": 652.809
          },
          {
            "w": "interactive",
            "t": 653.252
          },
          {
            "w": "lab:",
            "t": 653.694
          },
          {
            "w": "The",
            "t": 654.137
          },
          {
            "w": "Cluster",
            "t": 654.579
          },
          {
            "w": "Sampling",
            "t": 655.022
          },
          {
            "w": "and",
            "t": 655.464
          },
          {
            "w": "Kish's",
            "t": 655.907
          },
          {
            "w": "Design",
            "t": 656.349
          },
          {
            "w": "Effect",
            "t": 656.792
          },
          {
            "w": "Simulator.",
            "t": 657.234
          },
          {
            "w": "On",
            "t": 657.677
          },
          {
            "w": "this",
            "t": 658.119
          },
          {
            "w": "slide,",
            "t": 658.562
          },
          {
            "w": "you",
            "t": 659.004
          },
          {
            "w": "can",
            "t": 659.446
          },
          {
            "w": "dynamically",
            "t": 659.889
          },
          {
            "w": "adjust",
            "t": 660.331
          },
          {
            "w": "cluster",
            "t": 660.774
          },
          {
            "w": "size",
            "t": 661.216
          },
          {
            "w": "m,",
            "t": 661.659
          },
          {
            "w": "total",
            "t": 662.101
          },
          {
            "w": "sample",
            "t": 662.544
          },
          {
            "w": "size",
            "t": 662.986
          },
          {
            "w": "n,",
            "t": 663.429
          },
          {
            "w": "and",
            "t": 663.871
          },
          {
            "w": "intra-class",
            "t": 664.314
          },
          {
            "w": "correlation",
            "t": 664.756
          },
          {
            "w": "rho.",
            "t": 665.199
          },
          {
            "w": "Try",
            "t": 665.641
          },
          {
            "w": "dragging",
            "t": 666.084
          },
          {
            "w": "the",
            "t": 666.526
          },
          {
            "w": "cluster",
            "t": 666.969
          },
          {
            "w": "size",
            "t": 667.411
          },
          {
            "w": "slider",
            "t": 667.853
          },
          {
            "w": "m",
            "t": 668.296
          },
          {
            "w": "from",
            "t": 668.738
          },
          {
            "w": "5",
            "t": 669.181
          },
          {
            "w": "up",
            "t": 669.623
          },
          {
            "w": "to",
            "t": 670.066
          },
          {
            "w": "50,",
            "t": 670.508
          },
          {
            "w": "while",
            "t": 670.951
          },
          {
            "w": "keeping",
            "t": 671.393
          },
          {
            "w": "rho",
            "t": 671.836
          },
          {
            "w": "fixed",
            "t": 672.278
          },
          {
            "w": "at",
            "t": 672.721
          },
          {
            "w": "0.15.",
            "t": 673.163
          },
          {
            "w": "Notice",
            "t": 673.606
          },
          {
            "w": "how",
            "t": 674.048
          },
          {
            "w": "the",
            "t": 674.491
          },
          {
            "w": "Design",
            "t": 674.933
          },
          {
            "w": "Effect",
            "t": 675.375
          },
          {
            "w": "Deff",
            "t": 675.818
          },
          {
            "w": "skyrockets",
            "t": 676.26
          },
          {
            "w": "from",
            "t": 676.703
          },
          {
            "w": "1.6",
            "t": 677.145
          },
          {
            "w": "up",
            "t": 677.588
          },
          {
            "w": "to",
            "t": 678.03
          },
          {
            "w": "8.35!",
            "t": 678.473
          },
          {
            "w": "Observe",
            "t": 678.915
          },
          {
            "w": "the",
            "t": 679.358
          },
          {
            "w": "effective",
            "t": 679.8
          },
          {
            "w": "sample",
            "t": 680.243
          },
          {
            "w": "size",
            "t": 680.685
          },
          {
            "w": "card:",
            "t": 681.128
          },
          {
            "w": "your",
            "t": 681.57
          },
          {
            "w": "1,000",
            "t": 682.013
          },
          {
            "w": "collected",
            "t": 682.455
          },
          {
            "w": "observations",
            "t": 682.897
          },
          {
            "w": "shrink",
            "t": 683.34
          },
          {
            "w": "to",
            "t": 683.782
          },
          {
            "w": "only",
            "t": 684.225
          },
          {
            "w": "120",
            "t": 684.667
          },
          {
            "w": "effective",
            "t": 685.11
          },
          {
            "w": "independent",
            "t": 685.552
          },
          {
            "w": "data",
            "t": 685.995
          },
          {
            "w": "points,",
            "t": 686.437
          },
          {
            "w": "representing",
            "t": 686.88
          },
          {
            "w": "an",
            "t": 687.322
          },
          {
            "w": "88%",
            "t": 687.765
          },
          {
            "w": "loss",
            "t": 688.207
          },
          {
            "w": "of",
            "t": 688.65
          },
          {
            "w": "information.",
            "t": 689.092
          },
          {
            "w": "This",
            "t": 689.535
          },
          {
            "w": "demonstrates",
            "t": 689.977
          },
          {
            "w": "why",
            "t": 690.42
          },
          {
            "w": "survey",
            "t": 690.862
          },
          {
            "w": "statisticians",
            "t": 691.304
          },
          {
            "w": "always",
            "t": 691.747
          },
          {
            "w": "recommend",
            "t": 692.189
          },
          {
            "w": "sampling",
            "t": 692.632
          },
          {
            "w": "smaller",
            "t": 693.074
          },
          {
            "w": "clusters",
            "t": 693.517
          },
          {
            "w": "across",
            "t": 693.959
          },
          {
            "w": "more",
            "t": 694.402
          },
          {
            "w": "locations",
            "t": 694.844
          },
          {
            "w": "rather",
            "t": 695.287
          },
          {
            "w": "than",
            "t": 695.729
          },
          {
            "w": "large",
            "t": 696.172
          },
          {
            "w": "clusters",
            "t": 696.614
          },
          {
            "w": "in",
            "t": 697.057
          },
          {
            "w": "few",
            "t": 697.499
          },
          {
            "w": "locations.",
            "t": 697.942
          }
        ]
      },
      {
        "slide": 13,
        "slideId": "s13",
        "speaker": "Dr. Nova",
        "text": "Time for Active Checkpoint 2. A market research team samples 50 retail stores and interviews 20 customers per store, so m equals 20. The intra-cluster correlation coefficient for purchasing habits is rho equals 0.15. Calculate the Design Effect Deff and the effective sample size n-effective if the total interviewed sample is n equals 1,000. Option A: Deff equals 1.15, n-effective is 870. Option B: Deff equals 2.85, n-effective is 351. Option C: Deff equals 3.85, n-effective is 260. Or Option D: Deff equals 4.00, n-effective is 250. Choose your answer.",
        "start": 698.384,
        "end": 736.577,
        "words": [
          {
            "w": "Time",
            "t": 698.384
          },
          {
            "w": "for",
            "t": 698.808
          },
          {
            "w": "Active",
            "t": 699.233
          },
          {
            "w": "Checkpoint",
            "t": 699.657
          },
          {
            "w": "2.",
            "t": 700.081
          },
          {
            "w": "A",
            "t": 700.506
          },
          {
            "w": "market",
            "t": 700.93
          },
          {
            "w": "research",
            "t": 701.355
          },
          {
            "w": "team",
            "t": 701.779
          },
          {
            "w": "samples",
            "t": 702.203
          },
          {
            "w": "50",
            "t": 702.628
          },
          {
            "w": "retail",
            "t": 703.052
          },
          {
            "w": "stores",
            "t": 703.476
          },
          {
            "w": "and",
            "t": 703.901
          },
          {
            "w": "interviews",
            "t": 704.325
          },
          {
            "w": "20",
            "t": 704.75
          },
          {
            "w": "customers",
            "t": 705.174
          },
          {
            "w": "per",
            "t": 705.598
          },
          {
            "w": "store,",
            "t": 706.023
          },
          {
            "w": "so",
            "t": 706.447
          },
          {
            "w": "m",
            "t": 706.871
          },
          {
            "w": "equals",
            "t": 707.296
          },
          {
            "w": "20.",
            "t": 707.72
          },
          {
            "w": "The",
            "t": 708.144
          },
          {
            "w": "intra-cluster",
            "t": 708.569
          },
          {
            "w": "correlation",
            "t": 708.993
          },
          {
            "w": "coefficient",
            "t": 709.418
          },
          {
            "w": "for",
            "t": 709.842
          },
          {
            "w": "purchasing",
            "t": 710.266
          },
          {
            "w": "habits",
            "t": 710.691
          },
          {
            "w": "is",
            "t": 711.115
          },
          {
            "w": "rho",
            "t": 711.539
          },
          {
            "w": "equals",
            "t": 711.964
          },
          {
            "w": "0.15.",
            "t": 712.388
          },
          {
            "w": "Calculate",
            "t": 712.812
          },
          {
            "w": "the",
            "t": 713.237
          },
          {
            "w": "Design",
            "t": 713.661
          },
          {
            "w": "Effect",
            "t": 714.086
          },
          {
            "w": "Deff",
            "t": 714.51
          },
          {
            "w": "and",
            "t": 714.934
          },
          {
            "w": "the",
            "t": 715.359
          },
          {
            "w": "effective",
            "t": 715.783
          },
          {
            "w": "sample",
            "t": 716.207
          },
          {
            "w": "size",
            "t": 716.632
          },
          {
            "w": "n-effective",
            "t": 717.056
          },
          {
            "w": "if",
            "t": 717.481
          },
          {
            "w": "the",
            "t": 717.905
          },
          {
            "w": "total",
            "t": 718.329
          },
          {
            "w": "interviewed",
            "t": 718.754
          },
          {
            "w": "sample",
            "t": 719.178
          },
          {
            "w": "is",
            "t": 719.602
          },
          {
            "w": "n",
            "t": 720.027
          },
          {
            "w": "equals",
            "t": 720.451
          },
          {
            "w": "1,000.",
            "t": 720.875
          },
          {
            "w": "Option",
            "t": 721.3
          },
          {
            "w": "A:",
            "t": 721.724
          },
          {
            "w": "Deff",
            "t": 722.149
          },
          {
            "w": "equals",
            "t": 722.573
          },
          {
            "w": "1.15,",
            "t": 722.997
          },
          {
            "w": "n-effective",
            "t": 723.422
          },
          {
            "w": "is",
            "t": 723.846
          },
          {
            "w": "870.",
            "t": 724.27
          },
          {
            "w": "Option",
            "t": 724.695
          },
          {
            "w": "B:",
            "t": 725.119
          },
          {
            "w": "Deff",
            "t": 725.543
          },
          {
            "w": "equals",
            "t": 725.968
          },
          {
            "w": "2.85,",
            "t": 726.392
          },
          {
            "w": "n-effective",
            "t": 726.817
          },
          {
            "w": "is",
            "t": 727.241
          },
          {
            "w": "351.",
            "t": 727.665
          },
          {
            "w": "Option",
            "t": 728.09
          },
          {
            "w": "C:",
            "t": 728.514
          },
          {
            "w": "Deff",
            "t": 728.938
          },
          {
            "w": "equals",
            "t": 729.363
          },
          {
            "w": "3.85,",
            "t": 729.787
          },
          {
            "w": "n-effective",
            "t": 730.212
          },
          {
            "w": "is",
            "t": 730.636
          },
          {
            "w": "260.",
            "t": 731.06
          },
          {
            "w": "Or",
            "t": 731.485
          },
          {
            "w": "Option",
            "t": 731.909
          },
          {
            "w": "D:",
            "t": 732.333
          },
          {
            "w": "Deff",
            "t": 732.758
          },
          {
            "w": "equals",
            "t": 733.182
          },
          {
            "w": "4.00,",
            "t": 733.606
          },
          {
            "w": "n-effective",
            "t": 734.031
          },
          {
            "w": "is",
            "t": 734.455
          },
          {
            "w": "250.",
            "t": 734.88
          },
          {
            "w": "Choose",
            "t": 735.304
          },
          {
            "w": "your",
            "t": 735.728
          },
          {
            "w": "answer.",
            "t": 736.153
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Dr. Nova",
        "text": "Let us examine a real-world engineering case study: a National Household Health Survey spanning one hundred thousand households. The mission is to estimate national hypertension prevalence. Under Simple Random Sampling of 2,000 households across the country, enumerator travel and scheduling costs totaled 180,000 dollars, delivering a standard error of 1.12%. Under Stratified Sampling with Neyman Allocation by urban, suburban, and rural risk tiers, the collection cost was 185,000 dollars, but the standard error dropped to 0.78%, achieving a 51.5% reduction in estimation variance. Finally, under a Two-Stage Cluster design selecting 100 clinics with 20 patients each, travel costs collapsed by 75% down to 45,000 dollars. However, an intra-class correlation of 0.10 induced a Design Effect of 2.9, shrinking the effective sample size to 690 and widening the standard error to 1.91%. This case study proves how probability theory guides production trade-offs between financial cost and statistical precision.",
        "start": 736.577,
        "end": 805.97,
        "words": [
          {
            "w": "Let",
            "t": 736.577
          },
          {
            "w": "us",
            "t": 737.049
          },
          {
            "w": "examine",
            "t": 737.521
          },
          {
            "w": "a",
            "t": 737.993
          },
          {
            "w": "real-world",
            "t": 738.465
          },
          {
            "w": "engineering",
            "t": 738.937
          },
          {
            "w": "case",
            "t": 739.409
          },
          {
            "w": "study:",
            "t": 739.881
          },
          {
            "w": "a",
            "t": 740.353
          },
          {
            "w": "National",
            "t": 740.826
          },
          {
            "w": "Household",
            "t": 741.298
          },
          {
            "w": "Health",
            "t": 741.77
          },
          {
            "w": "Survey",
            "t": 742.242
          },
          {
            "w": "spanning",
            "t": 742.714
          },
          {
            "w": "one",
            "t": 743.186
          },
          {
            "w": "hundred",
            "t": 743.658
          },
          {
            "w": "thousand",
            "t": 744.13
          },
          {
            "w": "households.",
            "t": 744.602
          },
          {
            "w": "The",
            "t": 745.074
          },
          {
            "w": "mission",
            "t": 745.546
          },
          {
            "w": "is",
            "t": 746.018
          },
          {
            "w": "to",
            "t": 746.49
          },
          {
            "w": "estimate",
            "t": 746.962
          },
          {
            "w": "national",
            "t": 747.434
          },
          {
            "w": "hypertension",
            "t": 747.906
          },
          {
            "w": "prevalence.",
            "t": 748.379
          },
          {
            "w": "Under",
            "t": 748.851
          },
          {
            "w": "Simple",
            "t": 749.323
          },
          {
            "w": "Random",
            "t": 749.795
          },
          {
            "w": "Sampling",
            "t": 750.267
          },
          {
            "w": "of",
            "t": 750.739
          },
          {
            "w": "2,000",
            "t": 751.211
          },
          {
            "w": "households",
            "t": 751.683
          },
          {
            "w": "across",
            "t": 752.155
          },
          {
            "w": "the",
            "t": 752.627
          },
          {
            "w": "country,",
            "t": 753.099
          },
          {
            "w": "enumerator",
            "t": 753.571
          },
          {
            "w": "travel",
            "t": 754.043
          },
          {
            "w": "and",
            "t": 754.515
          },
          {
            "w": "scheduling",
            "t": 754.987
          },
          {
            "w": "costs",
            "t": 755.459
          },
          {
            "w": "totaled",
            "t": 755.932
          },
          {
            "w": "180,000",
            "t": 756.404
          },
          {
            "w": "dollars,",
            "t": 756.876
          },
          {
            "w": "delivering",
            "t": 757.348
          },
          {
            "w": "a",
            "t": 757.82
          },
          {
            "w": "standard",
            "t": 758.292
          },
          {
            "w": "error",
            "t": 758.764
          },
          {
            "w": "of",
            "t": 759.236
          },
          {
            "w": "1.12%.",
            "t": 759.708
          },
          {
            "w": "Under",
            "t": 760.18
          },
          {
            "w": "Stratified",
            "t": 760.652
          },
          {
            "w": "Sampling",
            "t": 761.124
          },
          {
            "w": "with",
            "t": 761.596
          },
          {
            "w": "Neyman",
            "t": 762.068
          },
          {
            "w": "Allocation",
            "t": 762.54
          },
          {
            "w": "by",
            "t": 763.012
          },
          {
            "w": "urban,",
            "t": 763.484
          },
          {
            "w": "suburban,",
            "t": 763.957
          },
          {
            "w": "and",
            "t": 764.429
          },
          {
            "w": "rural",
            "t": 764.901
          },
          {
            "w": "risk",
            "t": 765.373
          },
          {
            "w": "tiers,",
            "t": 765.845
          },
          {
            "w": "the",
            "t": 766.317
          },
          {
            "w": "collection",
            "t": 766.789
          },
          {
            "w": "cost",
            "t": 767.261
          },
          {
            "w": "was",
            "t": 767.733
          },
          {
            "w": "185,000",
            "t": 768.205
          },
          {
            "w": "dollars,",
            "t": 768.677
          },
          {
            "w": "but",
            "t": 769.149
          },
          {
            "w": "the",
            "t": 769.621
          },
          {
            "w": "standard",
            "t": 770.093
          },
          {
            "w": "error",
            "t": 770.565
          },
          {
            "w": "dropped",
            "t": 771.037
          },
          {
            "w": "to",
            "t": 771.51
          },
          {
            "w": "0.78%,",
            "t": 771.982
          },
          {
            "w": "achieving",
            "t": 772.454
          },
          {
            "w": "a",
            "t": 772.926
          },
          {
            "w": "51.5%",
            "t": 773.398
          },
          {
            "w": "reduction",
            "t": 773.87
          },
          {
            "w": "in",
            "t": 774.342
          },
          {
            "w": "estimation",
            "t": 774.814
          },
          {
            "w": "variance.",
            "t": 775.286
          },
          {
            "w": "Finally,",
            "t": 775.758
          },
          {
            "w": "under",
            "t": 776.23
          },
          {
            "w": "a",
            "t": 776.702
          },
          {
            "w": "Two-Stage",
            "t": 777.174
          },
          {
            "w": "Cluster",
            "t": 777.646
          },
          {
            "w": "design",
            "t": 778.118
          },
          {
            "w": "selecting",
            "t": 778.59
          },
          {
            "w": "100",
            "t": 779.063
          },
          {
            "w": "clinics",
            "t": 779.535
          },
          {
            "w": "with",
            "t": 780.007
          },
          {
            "w": "20",
            "t": 780.479
          },
          {
            "w": "patients",
            "t": 780.951
          },
          {
            "w": "each,",
            "t": 781.423
          },
          {
            "w": "travel",
            "t": 781.895
          },
          {
            "w": "costs",
            "t": 782.367
          },
          {
            "w": "collapsed",
            "t": 782.839
          },
          {
            "w": "by",
            "t": 783.311
          },
          {
            "w": "75%",
            "t": 783.783
          },
          {
            "w": "down",
            "t": 784.255
          },
          {
            "w": "to",
            "t": 784.727
          },
          {
            "w": "45,000",
            "t": 785.199
          },
          {
            "w": "dollars.",
            "t": 785.671
          },
          {
            "w": "However,",
            "t": 786.143
          },
          {
            "w": "an",
            "t": 786.615
          },
          {
            "w": "intra-class",
            "t": 787.088
          },
          {
            "w": "correlation",
            "t": 787.56
          },
          {
            "w": "of",
            "t": 788.032
          },
          {
            "w": "0.10",
            "t": 788.504
          },
          {
            "w": "induced",
            "t": 788.976
          },
          {
            "w": "a",
            "t": 789.448
          },
          {
            "w": "Design",
            "t": 789.92
          },
          {
            "w": "Effect",
            "t": 790.392
          },
          {
            "w": "of",
            "t": 790.864
          },
          {
            "w": "2.9,",
            "t": 791.336
          },
          {
            "w": "shrinking",
            "t": 791.808
          },
          {
            "w": "the",
            "t": 792.28
          },
          {
            "w": "effective",
            "t": 792.752
          },
          {
            "w": "sample",
            "t": 793.224
          },
          {
            "w": "size",
            "t": 793.696
          },
          {
            "w": "to",
            "t": 794.168
          },
          {
            "w": "690",
            "t": 794.641
          },
          {
            "w": "and",
            "t": 795.113
          },
          {
            "w": "widening",
            "t": 795.585
          },
          {
            "w": "the",
            "t": 796.057
          },
          {
            "w": "standard",
            "t": 796.529
          },
          {
            "w": "error",
            "t": 797.001
          },
          {
            "w": "to",
            "t": 797.473
          },
          {
            "w": "1.91%.",
            "t": 797.945
          },
          {
            "w": "This",
            "t": 798.417
          },
          {
            "w": "case",
            "t": 798.889
          },
          {
            "w": "study",
            "t": 799.361
          },
          {
            "w": "proves",
            "t": 799.833
          },
          {
            "w": "how",
            "t": 800.305
          },
          {
            "w": "probability",
            "t": 800.777
          },
          {
            "w": "theory",
            "t": 801.249
          },
          {
            "w": "guides",
            "t": 801.721
          },
          {
            "w": "production",
            "t": 802.194
          },
          {
            "w": "trade-offs",
            "t": 802.666
          },
          {
            "w": "between",
            "t": 803.138
          },
          {
            "w": "financial",
            "t": 803.61
          },
          {
            "w": "cost",
            "t": 804.082
          },
          {
            "w": "and",
            "t": 804.554
          },
          {
            "w": "statistical",
            "t": 805.026
          },
          {
            "w": "precision.",
            "t": 805.498
          }
        ]
      },
      {
        "slide": 15,
        "slideId": "s15",
        "speaker": "Dr. Nova",
        "text": "Here is our production Python implementation: the ProbabilitySamplingEngine class. It implements two core static methods. First, neyman-underscore-allocation takes dictionaries of stratum sizes and standard deviations, along with total sample size n. It computes the numerator N-sub-h times S-sub-h, sums the weights, and allocates optimal sample quotas rounded to the nearest integer. Second, horvitz-underscore-thompson-underscore-total accepts lists of sampled values and their corresponding inclusion probabilities pi-sub-i. It computes the dot product of sample values and reciprocal inclusion probabilities, returning the mathematically unbiased population total. The accompanying automated test suite verifies that high-variance strata receive boosted sample allocations and proves that Horvitz-Thompson correctly recovers a population total of 500 from ten uniform samples with inclusion probability zero point one.",
        "start": 805.97,
        "end": 869.26,
        "words": [
          {
            "w": "Here",
            "t": 805.97
          },
          {
            "w": "is",
            "t": 806.516
          },
          {
            "w": "our",
            "t": 807.061
          },
          {
            "w": "production",
            "t": 807.607
          },
          {
            "w": "Python",
            "t": 808.152
          },
          {
            "w": "implementation:",
            "t": 808.698
          },
          {
            "w": "the",
            "t": 809.244
          },
          {
            "w": "ProbabilitySamplingEngine",
            "t": 809.789
          },
          {
            "w": "class.",
            "t": 810.335
          },
          {
            "w": "It",
            "t": 810.88
          },
          {
            "w": "implements",
            "t": 811.426
          },
          {
            "w": "two",
            "t": 811.972
          },
          {
            "w": "core",
            "t": 812.517
          },
          {
            "w": "static",
            "t": 813.063
          },
          {
            "w": "methods.",
            "t": 813.608
          },
          {
            "w": "First,",
            "t": 814.154
          },
          {
            "w": "neyman-underscore-allocation",
            "t": 814.7
          },
          {
            "w": "takes",
            "t": 815.245
          },
          {
            "w": "dictionaries",
            "t": 815.791
          },
          {
            "w": "of",
            "t": 816.336
          },
          {
            "w": "stratum",
            "t": 816.882
          },
          {
            "w": "sizes",
            "t": 817.428
          },
          {
            "w": "and",
            "t": 817.973
          },
          {
            "w": "standard",
            "t": 818.519
          },
          {
            "w": "deviations,",
            "t": 819.064
          },
          {
            "w": "along",
            "t": 819.61
          },
          {
            "w": "with",
            "t": 820.156
          },
          {
            "w": "total",
            "t": 820.701
          },
          {
            "w": "sample",
            "t": 821.247
          },
          {
            "w": "size",
            "t": 821.793
          },
          {
            "w": "n.",
            "t": 822.338
          },
          {
            "w": "It",
            "t": 822.884
          },
          {
            "w": "computes",
            "t": 823.429
          },
          {
            "w": "the",
            "t": 823.975
          },
          {
            "w": "numerator",
            "t": 824.521
          },
          {
            "w": "N-sub-h",
            "t": 825.066
          },
          {
            "w": "times",
            "t": 825.612
          },
          {
            "w": "S-sub-h,",
            "t": 826.157
          },
          {
            "w": "sums",
            "t": 826.703
          },
          {
            "w": "the",
            "t": 827.249
          },
          {
            "w": "weights,",
            "t": 827.794
          },
          {
            "w": "and",
            "t": 828.34
          },
          {
            "w": "allocates",
            "t": 828.885
          },
          {
            "w": "optimal",
            "t": 829.431
          },
          {
            "w": "sample",
            "t": 829.977
          },
          {
            "w": "quotas",
            "t": 830.522
          },
          {
            "w": "rounded",
            "t": 831.068
          },
          {
            "w": "to",
            "t": 831.613
          },
          {
            "w": "the",
            "t": 832.159
          },
          {
            "w": "nearest",
            "t": 832.705
          },
          {
            "w": "integer.",
            "t": 833.25
          },
          {
            "w": "Second,",
            "t": 833.796
          },
          {
            "w": "horvitz-underscore-thompson-underscore-total",
            "t": 834.341
          },
          {
            "w": "accepts",
            "t": 834.887
          },
          {
            "w": "lists",
            "t": 835.433
          },
          {
            "w": "of",
            "t": 835.978
          },
          {
            "w": "sampled",
            "t": 836.524
          },
          {
            "w": "values",
            "t": 837.069
          },
          {
            "w": "and",
            "t": 837.615
          },
          {
            "w": "their",
            "t": 838.161
          },
          {
            "w": "corresponding",
            "t": 838.706
          },
          {
            "w": "inclusion",
            "t": 839.252
          },
          {
            "w": "probabilities",
            "t": 839.797
          },
          {
            "w": "pi-sub-i.",
            "t": 840.343
          },
          {
            "w": "It",
            "t": 840.889
          },
          {
            "w": "computes",
            "t": 841.434
          },
          {
            "w": "the",
            "t": 841.98
          },
          {
            "w": "dot",
            "t": 842.525
          },
          {
            "w": "product",
            "t": 843.071
          },
          {
            "w": "of",
            "t": 843.617
          },
          {
            "w": "sample",
            "t": 844.162
          },
          {
            "w": "values",
            "t": 844.708
          },
          {
            "w": "and",
            "t": 845.253
          },
          {
            "w": "reciprocal",
            "t": 845.799
          },
          {
            "w": "inclusion",
            "t": 846.345
          },
          {
            "w": "probabilities,",
            "t": 846.89
          },
          {
            "w": "returning",
            "t": 847.436
          },
          {
            "w": "the",
            "t": 847.981
          },
          {
            "w": "mathematically",
            "t": 848.527
          },
          {
            "w": "unbiased",
            "t": 849.073
          },
          {
            "w": "population",
            "t": 849.618
          },
          {
            "w": "total.",
            "t": 850.164
          },
          {
            "w": "The",
            "t": 850.709
          },
          {
            "w": "accompanying",
            "t": 851.255
          },
          {
            "w": "automated",
            "t": 851.801
          },
          {
            "w": "test",
            "t": 852.346
          },
          {
            "w": "suite",
            "t": 852.892
          },
          {
            "w": "verifies",
            "t": 853.438
          },
          {
            "w": "that",
            "t": 853.983
          },
          {
            "w": "high-variance",
            "t": 854.529
          },
          {
            "w": "strata",
            "t": 855.074
          },
          {
            "w": "receive",
            "t": 855.62
          },
          {
            "w": "boosted",
            "t": 856.166
          },
          {
            "w": "sample",
            "t": 856.711
          },
          {
            "w": "allocations",
            "t": 857.257
          },
          {
            "w": "and",
            "t": 857.802
          },
          {
            "w": "proves",
            "t": 858.348
          },
          {
            "w": "that",
            "t": 858.894
          },
          {
            "w": "Horvitz-Thompson",
            "t": 859.439
          },
          {
            "w": "correctly",
            "t": 859.985
          },
          {
            "w": "recovers",
            "t": 860.53
          },
          {
            "w": "a",
            "t": 861.076
          },
          {
            "w": "population",
            "t": 861.622
          },
          {
            "w": "total",
            "t": 862.167
          },
          {
            "w": "of",
            "t": 862.713
          },
          {
            "w": "500",
            "t": 863.258
          },
          {
            "w": "from",
            "t": 863.804
          },
          {
            "w": "ten",
            "t": 864.35
          },
          {
            "w": "uniform",
            "t": 864.895
          },
          {
            "w": "samples",
            "t": 865.441
          },
          {
            "w": "with",
            "t": 865.986
          },
          {
            "w": "inclusion",
            "t": 866.532
          },
          {
            "w": "probability",
            "t": 867.078
          },
          {
            "w": "zero",
            "t": 867.623
          },
          {
            "w": "point",
            "t": 868.169
          },
          {
            "w": "one.",
            "t": 868.714
          }
        ]
      },
      {
        "slide": 16,
        "slideId": "s16",
        "speaker": "Dr. Nova",
        "text": "Congratulations on completing Lesson 2.6. Let us synthesize our four golden engineering rules. Rule 1: Always enforce strictly positive inclusion probabilities, pi-sub-i greater than zero. Non-probability draws cause irrecoverable under-coverage bias that no machine learning loss function can repair. Rule 2: In stratified designs, exploit subgroup variance disparities using Neyman optimal allocation, allocating larger sample fractions to high-variance strata. Rule 3: In cluster sampling, always calculate Leslie Kish's design effect Deff and report effective sample size n-effective to prevent artificially narrow confidence intervals. Rule 4: Balance frame accessibility against field collection logistics, using clustering when individual frames are absent and leveraging cost savings to oversample. In our next lesson, Lesson 2.7, we expand into Advanced Sampling Paradigms: Active Learning, Importance Sampling, and Hard Negative Mining.",
        "start": 869.26,
        "end": 934.128,
        "words": [
          {
            "w": "Congratulations",
            "t": 869.26
          },
          {
            "w": "on",
            "t": 869.779
          },
          {
            "w": "completing",
            "t": 870.298
          },
          {
            "w": "Lesson",
            "t": 870.817
          },
          {
            "w": "2.6.",
            "t": 871.336
          },
          {
            "w": "Let",
            "t": 871.855
          },
          {
            "w": "us",
            "t": 872.374
          },
          {
            "w": "synthesize",
            "t": 872.893
          },
          {
            "w": "our",
            "t": 873.412
          },
          {
            "w": "four",
            "t": 873.93
          },
          {
            "w": "golden",
            "t": 874.449
          },
          {
            "w": "engineering",
            "t": 874.968
          },
          {
            "w": "rules.",
            "t": 875.487
          },
          {
            "w": "Rule",
            "t": 876.006
          },
          {
            "w": "1:",
            "t": 876.525
          },
          {
            "w": "Always",
            "t": 877.044
          },
          {
            "w": "enforce",
            "t": 877.563
          },
          {
            "w": "strictly",
            "t": 878.082
          },
          {
            "w": "positive",
            "t": 878.601
          },
          {
            "w": "inclusion",
            "t": 879.12
          },
          {
            "w": "probabilities,",
            "t": 879.639
          },
          {
            "w": "pi-sub-i",
            "t": 880.158
          },
          {
            "w": "greater",
            "t": 880.677
          },
          {
            "w": "than",
            "t": 881.196
          },
          {
            "w": "zero.",
            "t": 881.715
          },
          {
            "w": "Non-probability",
            "t": 882.234
          },
          {
            "w": "draws",
            "t": 882.753
          },
          {
            "w": "cause",
            "t": 883.271
          },
          {
            "w": "irrecoverable",
            "t": 883.79
          },
          {
            "w": "under-coverage",
            "t": 884.309
          },
          {
            "w": "bias",
            "t": 884.828
          },
          {
            "w": "that",
            "t": 885.347
          },
          {
            "w": "no",
            "t": 885.866
          },
          {
            "w": "machine",
            "t": 886.385
          },
          {
            "w": "learning",
            "t": 886.904
          },
          {
            "w": "loss",
            "t": 887.423
          },
          {
            "w": "function",
            "t": 887.942
          },
          {
            "w": "can",
            "t": 888.461
          },
          {
            "w": "repair.",
            "t": 888.98
          },
          {
            "w": "Rule",
            "t": 889.499
          },
          {
            "w": "2:",
            "t": 890.018
          },
          {
            "w": "In",
            "t": 890.537
          },
          {
            "w": "stratified",
            "t": 891.056
          },
          {
            "w": "designs,",
            "t": 891.575
          },
          {
            "w": "exploit",
            "t": 892.094
          },
          {
            "w": "subgroup",
            "t": 892.612
          },
          {
            "w": "variance",
            "t": 893.131
          },
          {
            "w": "disparities",
            "t": 893.65
          },
          {
            "w": "using",
            "t": 894.169
          },
          {
            "w": "Neyman",
            "t": 894.688
          },
          {
            "w": "optimal",
            "t": 895.207
          },
          {
            "w": "allocation,",
            "t": 895.726
          },
          {
            "w": "allocating",
            "t": 896.245
          },
          {
            "w": "larger",
            "t": 896.764
          },
          {
            "w": "sample",
            "t": 897.283
          },
          {
            "w": "fractions",
            "t": 897.802
          },
          {
            "w": "to",
            "t": 898.321
          },
          {
            "w": "high-variance",
            "t": 898.84
          },
          {
            "w": "strata.",
            "t": 899.359
          },
          {
            "w": "Rule",
            "t": 899.878
          },
          {
            "w": "3:",
            "t": 900.397
          },
          {
            "w": "In",
            "t": 900.916
          },
          {
            "w": "cluster",
            "t": 901.435
          },
          {
            "w": "sampling,",
            "t": 901.953
          },
          {
            "w": "always",
            "t": 902.472
          },
          {
            "w": "calculate",
            "t": 902.991
          },
          {
            "w": "Leslie",
            "t": 903.51
          },
          {
            "w": "Kish's",
            "t": 904.029
          },
          {
            "w": "design",
            "t": 904.548
          },
          {
            "w": "effect",
            "t": 905.067
          },
          {
            "w": "Deff",
            "t": 905.586
          },
          {
            "w": "and",
            "t": 906.105
          },
          {
            "w": "report",
            "t": 906.624
          },
          {
            "w": "effective",
            "t": 907.143
          },
          {
            "w": "sample",
            "t": 907.662
          },
          {
            "w": "size",
            "t": 908.181
          },
          {
            "w": "n-effective",
            "t": 908.7
          },
          {
            "w": "to",
            "t": 909.219
          },
          {
            "w": "prevent",
            "t": 909.738
          },
          {
            "w": "artificially",
            "t": 910.257
          },
          {
            "w": "narrow",
            "t": 910.776
          },
          {
            "w": "confidence",
            "t": 911.294
          },
          {
            "w": "intervals.",
            "t": 911.813
          },
          {
            "w": "Rule",
            "t": 912.332
          },
          {
            "w": "4:",
            "t": 912.851
          },
          {
            "w": "Balance",
            "t": 913.37
          },
          {
            "w": "frame",
            "t": 913.889
          },
          {
            "w": "accessibility",
            "t": 914.408
          },
          {
            "w": "against",
            "t": 914.927
          },
          {
            "w": "field",
            "t": 915.446
          },
          {
            "w": "collection",
            "t": 915.965
          },
          {
            "w": "logistics,",
            "t": 916.484
          },
          {
            "w": "using",
            "t": 917.003
          },
          {
            "w": "clustering",
            "t": 917.522
          },
          {
            "w": "when",
            "t": 918.041
          },
          {
            "w": "individual",
            "t": 918.56
          },
          {
            "w": "frames",
            "t": 919.079
          },
          {
            "w": "are",
            "t": 919.598
          },
          {
            "w": "absent",
            "t": 920.117
          },
          {
            "w": "and",
            "t": 920.635
          },
          {
            "w": "leveraging",
            "t": 921.154
          },
          {
            "w": "cost",
            "t": 921.673
          },
          {
            "w": "savings",
            "t": 922.192
          },
          {
            "w": "to",
            "t": 922.711
          },
          {
            "w": "oversample.",
            "t": 923.23
          },
          {
            "w": "In",
            "t": 923.749
          },
          {
            "w": "our",
            "t": 924.268
          },
          {
            "w": "next",
            "t": 924.787
          },
          {
            "w": "lesson,",
            "t": 925.306
          },
          {
            "w": "Lesson",
            "t": 925.825
          },
          {
            "w": "2.7,",
            "t": 926.344
          },
          {
            "w": "we",
            "t": 926.863
          },
          {
            "w": "expand",
            "t": 927.382
          },
          {
            "w": "into",
            "t": 927.901
          },
          {
            "w": "Advanced",
            "t": 928.42
          },
          {
            "w": "Sampling",
            "t": 928.939
          },
          {
            "w": "Paradigms:",
            "t": 929.458
          },
          {
            "w": "Active",
            "t": 929.976
          },
          {
            "w": "Learning,",
            "t": 930.495
          },
          {
            "w": "Importance",
            "t": 931.014
          },
          {
            "w": "Sampling,",
            "t": 931.533
          },
          {
            "w": "and",
            "t": 932.052
          },
          {
            "w": "Hard",
            "t": 932.571
          },
          {
            "w": "Negative",
            "t": 933.09
          },
          {
            "w": "Mining.",
            "t": 933.609
          }
        ]
      }
    ]
  },
  "ch2_p6_duo": {
    "duration": 554.928,
    "sentences": [
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Dr. Nova",
        "text": "Welcome back to Dataset Fundamentals. Today we tackle Lesson 2.6: Probability Sampling Theory: Simple Random, Stratified, and Cluster Derivations. In machine learning, practitioners frequently draw training datasets opportunistically, whatever logs are easiest to extract. But as Jerzy Neyman proved in 1934, non-probability draws systematically destroy empirical generalizability.",
        "start": 0.0,
        "end": 25.197,
        "words": [
          {
            "w": "Welcome",
            "t": 0.0
          },
          {
            "w": "back",
            "t": 0.536
          },
          {
            "w": "to",
            "t": 1.072
          },
          {
            "w": "Dataset",
            "t": 1.608
          },
          {
            "w": "Fundamentals.",
            "t": 2.144
          },
          {
            "w": "Today",
            "t": 2.681
          },
          {
            "w": "we",
            "t": 3.217
          },
          {
            "w": "tackle",
            "t": 3.753
          },
          {
            "w": "Lesson",
            "t": 4.289
          },
          {
            "w": "2.6:",
            "t": 4.825
          },
          {
            "w": "Probability",
            "t": 5.361
          },
          {
            "w": "Sampling",
            "t": 5.897
          },
          {
            "w": "Theory:",
            "t": 6.433
          },
          {
            "w": "Simple",
            "t": 6.969
          },
          {
            "w": "Random,",
            "t": 7.505
          },
          {
            "w": "Stratified,",
            "t": 8.042
          },
          {
            "w": "and",
            "t": 8.578
          },
          {
            "w": "Cluster",
            "t": 9.114
          },
          {
            "w": "Derivations.",
            "t": 9.65
          },
          {
            "w": "In",
            "t": 10.186
          },
          {
            "w": "machine",
            "t": 10.722
          },
          {
            "w": "learning,",
            "t": 11.258
          },
          {
            "w": "practitioners",
            "t": 11.794
          },
          {
            "w": "frequently",
            "t": 12.33
          },
          {
            "w": "draw",
            "t": 12.867
          },
          {
            "w": "training",
            "t": 13.403
          },
          {
            "w": "datasets",
            "t": 13.939
          },
          {
            "w": "opportunistically,",
            "t": 14.475
          },
          {
            "w": "whatever",
            "t": 15.011
          },
          {
            "w": "logs",
            "t": 15.547
          },
          {
            "w": "are",
            "t": 16.083
          },
          {
            "w": "easiest",
            "t": 16.619
          },
          {
            "w": "to",
            "t": 17.155
          },
          {
            "w": "extract.",
            "t": 17.692
          },
          {
            "w": "But",
            "t": 18.228
          },
          {
            "w": "as",
            "t": 18.764
          },
          {
            "w": "Jerzy",
            "t": 19.3
          },
          {
            "w": "Neyman",
            "t": 19.836
          },
          {
            "w": "proved",
            "t": 20.372
          },
          {
            "w": "in",
            "t": 20.908
          },
          {
            "w": "1934,",
            "t": 21.444
          },
          {
            "w": "non-probability",
            "t": 21.98
          },
          {
            "w": "draws",
            "t": 22.516
          },
          {
            "w": "systematically",
            "t": 23.053
          },
          {
            "w": "destroy",
            "t": 23.589
          },
          {
            "w": "empirical",
            "t": 24.125
          },
          {
            "w": "generalizability.",
            "t": 24.661
          }
        ]
      },
      {
        "slide": 1,
        "slideId": "s1",
        "speaker": "Kaito",
        "text": "That hits home, Dr. Nova! In production, engineers often confuse stratified sampling with cluster sampling. We think we are reducing variance, when in reality positive intra-cluster correlation is silently inflating our true standard errors by a factor of three or four. Today we will build the exact mathematical tools to catch and solve that.",
        "start": 25.197,
        "end": 47.947,
        "words": [
          {
            "w": "That",
            "t": 25.197
          },
          {
            "w": "hits",
            "t": 25.618
          },
          {
            "w": "home,",
            "t": 26.04
          },
          {
            "w": "Dr.",
            "t": 26.461
          },
          {
            "w": "Nova!",
            "t": 26.882
          },
          {
            "w": "In",
            "t": 27.303
          },
          {
            "w": "production,",
            "t": 27.725
          },
          {
            "w": "engineers",
            "t": 28.146
          },
          {
            "w": "often",
            "t": 28.567
          },
          {
            "w": "confuse",
            "t": 28.989
          },
          {
            "w": "stratified",
            "t": 29.41
          },
          {
            "w": "sampling",
            "t": 29.831
          },
          {
            "w": "with",
            "t": 30.253
          },
          {
            "w": "cluster",
            "t": 30.674
          },
          {
            "w": "sampling.",
            "t": 31.095
          },
          {
            "w": "We",
            "t": 31.516
          },
          {
            "w": "think",
            "t": 31.938
          },
          {
            "w": "we",
            "t": 32.359
          },
          {
            "w": "are",
            "t": 32.78
          },
          {
            "w": "reducing",
            "t": 33.202
          },
          {
            "w": "variance,",
            "t": 33.623
          },
          {
            "w": "when",
            "t": 34.044
          },
          {
            "w": "in",
            "t": 34.466
          },
          {
            "w": "reality",
            "t": 34.887
          },
          {
            "w": "positive",
            "t": 35.308
          },
          {
            "w": "intra-cluster",
            "t": 35.729
          },
          {
            "w": "correlation",
            "t": 36.151
          },
          {
            "w": "is",
            "t": 36.572
          },
          {
            "w": "silently",
            "t": 36.993
          },
          {
            "w": "inflating",
            "t": 37.415
          },
          {
            "w": "our",
            "t": 37.836
          },
          {
            "w": "true",
            "t": 38.257
          },
          {
            "w": "standard",
            "t": 38.678
          },
          {
            "w": "errors",
            "t": 39.1
          },
          {
            "w": "by",
            "t": 39.521
          },
          {
            "w": "a",
            "t": 39.942
          },
          {
            "w": "factor",
            "t": 40.364
          },
          {
            "w": "of",
            "t": 40.785
          },
          {
            "w": "three",
            "t": 41.206
          },
          {
            "w": "or",
            "t": 41.628
          },
          {
            "w": "four.",
            "t": 42.049
          },
          {
            "w": "Today",
            "t": 42.47
          },
          {
            "w": "we",
            "t": 42.891
          },
          {
            "w": "will",
            "t": 43.313
          },
          {
            "w": "build",
            "t": 43.734
          },
          {
            "w": "the",
            "t": 44.155
          },
          {
            "w": "exact",
            "t": 44.577
          },
          {
            "w": "mathematical",
            "t": 44.998
          },
          {
            "w": "tools",
            "t": 45.419
          },
          {
            "w": "to",
            "t": 45.841
          },
          {
            "w": "catch",
            "t": 46.262
          },
          {
            "w": "and",
            "t": 46.683
          },
          {
            "w": "solve",
            "t": 47.104
          },
          {
            "w": "that.",
            "t": 47.526
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Dr. Nova",
        "text": "Notice the primary branching gate in our flowchart: do we have a complete individual sampling frame? If our data engineering team has an exhaustive database table of all user IDs, we evaluate subgroup heterogeneity. If mobile users have much higher variance than desktop users, stratified sampling eliminates between-strata differences from our estimator variance.",
        "start": 47.947,
        "end": 72.02,
        "words": [
          {
            "w": "Notice",
            "t": 47.947
          },
          {
            "w": "the",
            "t": 48.401
          },
          {
            "w": "primary",
            "t": 48.855
          },
          {
            "w": "branching",
            "t": 49.31
          },
          {
            "w": "gate",
            "t": 49.764
          },
          {
            "w": "in",
            "t": 50.218
          },
          {
            "w": "our",
            "t": 50.672
          },
          {
            "w": "flowchart:",
            "t": 51.126
          },
          {
            "w": "do",
            "t": 51.581
          },
          {
            "w": "we",
            "t": 52.035
          },
          {
            "w": "have",
            "t": 52.489
          },
          {
            "w": "a",
            "t": 52.943
          },
          {
            "w": "complete",
            "t": 53.397
          },
          {
            "w": "individual",
            "t": 53.852
          },
          {
            "w": "sampling",
            "t": 54.306
          },
          {
            "w": "frame?",
            "t": 54.76
          },
          {
            "w": "If",
            "t": 55.214
          },
          {
            "w": "our",
            "t": 55.669
          },
          {
            "w": "data",
            "t": 56.123
          },
          {
            "w": "engineering",
            "t": 56.577
          },
          {
            "w": "team",
            "t": 57.031
          },
          {
            "w": "has",
            "t": 57.485
          },
          {
            "w": "an",
            "t": 57.94
          },
          {
            "w": "exhaustive",
            "t": 58.394
          },
          {
            "w": "database",
            "t": 58.848
          },
          {
            "w": "table",
            "t": 59.302
          },
          {
            "w": "of",
            "t": 59.756
          },
          {
            "w": "all",
            "t": 60.211
          },
          {
            "w": "user",
            "t": 60.665
          },
          {
            "w": "IDs,",
            "t": 61.119
          },
          {
            "w": "we",
            "t": 61.573
          },
          {
            "w": "evaluate",
            "t": 62.027
          },
          {
            "w": "subgroup",
            "t": 62.482
          },
          {
            "w": "heterogeneity.",
            "t": 62.936
          },
          {
            "w": "If",
            "t": 63.39
          },
          {
            "w": "mobile",
            "t": 63.844
          },
          {
            "w": "users",
            "t": 64.298
          },
          {
            "w": "have",
            "t": 64.753
          },
          {
            "w": "much",
            "t": 65.207
          },
          {
            "w": "higher",
            "t": 65.661
          },
          {
            "w": "variance",
            "t": 66.115
          },
          {
            "w": "than",
            "t": 66.57
          },
          {
            "w": "desktop",
            "t": 67.024
          },
          {
            "w": "users,",
            "t": 67.478
          },
          {
            "w": "stratified",
            "t": 67.932
          },
          {
            "w": "sampling",
            "t": 68.386
          },
          {
            "w": "eliminates",
            "t": 68.841
          },
          {
            "w": "between-strata",
            "t": 69.295
          },
          {
            "w": "differences",
            "t": 69.749
          },
          {
            "w": "from",
            "t": 70.203
          },
          {
            "w": "our",
            "t": 70.657
          },
          {
            "w": "estimator",
            "t": 71.112
          },
          {
            "w": "variance.",
            "t": 71.566
          }
        ]
      },
      {
        "slide": 2,
        "slideId": "s2",
        "speaker": "Kaito",
        "text": "Exactly. But if we are auditing hospital EHR systems across the country, we cannot randomly sample five patients in hospital A, two patients in hospital B, and three in hospital C. The travel and security authorization costs would be catastrophic! We must cluster hospitals, which saves budget but penalizes our effective sample size through positive intra-cluster correlation.",
        "start": 72.02,
        "end": 96.952,
        "words": [
          {
            "w": "Exactly.",
            "t": 72.02
          },
          {
            "w": "But",
            "t": 72.457
          },
          {
            "w": "if",
            "t": 72.895
          },
          {
            "w": "we",
            "t": 73.332
          },
          {
            "w": "are",
            "t": 73.77
          },
          {
            "w": "auditing",
            "t": 74.207
          },
          {
            "w": "hospital",
            "t": 74.644
          },
          {
            "w": "EHR",
            "t": 75.082
          },
          {
            "w": "systems",
            "t": 75.519
          },
          {
            "w": "across",
            "t": 75.957
          },
          {
            "w": "the",
            "t": 76.394
          },
          {
            "w": "country,",
            "t": 76.831
          },
          {
            "w": "we",
            "t": 77.269
          },
          {
            "w": "cannot",
            "t": 77.706
          },
          {
            "w": "randomly",
            "t": 78.144
          },
          {
            "w": "sample",
            "t": 78.581
          },
          {
            "w": "five",
            "t": 79.018
          },
          {
            "w": "patients",
            "t": 79.456
          },
          {
            "w": "in",
            "t": 79.893
          },
          {
            "w": "hospital",
            "t": 80.331
          },
          {
            "w": "A,",
            "t": 80.768
          },
          {
            "w": "two",
            "t": 81.205
          },
          {
            "w": "patients",
            "t": 81.643
          },
          {
            "w": "in",
            "t": 82.08
          },
          {
            "w": "hospital",
            "t": 82.518
          },
          {
            "w": "B,",
            "t": 82.955
          },
          {
            "w": "and",
            "t": 83.392
          },
          {
            "w": "three",
            "t": 83.83
          },
          {
            "w": "in",
            "t": 84.267
          },
          {
            "w": "hospital",
            "t": 84.705
          },
          {
            "w": "C.",
            "t": 85.142
          },
          {
            "w": "The",
            "t": 85.58
          },
          {
            "w": "travel",
            "t": 86.017
          },
          {
            "w": "and",
            "t": 86.454
          },
          {
            "w": "security",
            "t": 86.892
          },
          {
            "w": "authorization",
            "t": 87.329
          },
          {
            "w": "costs",
            "t": 87.767
          },
          {
            "w": "would",
            "t": 88.204
          },
          {
            "w": "be",
            "t": 88.641
          },
          {
            "w": "catastrophic!",
            "t": 89.079
          },
          {
            "w": "We",
            "t": 89.516
          },
          {
            "w": "must",
            "t": 89.954
          },
          {
            "w": "cluster",
            "t": 90.391
          },
          {
            "w": "hospitals,",
            "t": 90.828
          },
          {
            "w": "which",
            "t": 91.266
          },
          {
            "w": "saves",
            "t": 91.703
          },
          {
            "w": "budget",
            "t": 92.141
          },
          {
            "w": "but",
            "t": 92.578
          },
          {
            "w": "penalizes",
            "t": 93.015
          },
          {
            "w": "our",
            "t": 93.453
          },
          {
            "w": "effective",
            "t": 93.89
          },
          {
            "w": "sample",
            "t": 94.328
          },
          {
            "w": "size",
            "t": 94.765
          },
          {
            "w": "through",
            "t": 95.202
          },
          {
            "w": "positive",
            "t": 95.64
          },
          {
            "w": "intra-cluster",
            "t": 96.077
          },
          {
            "w": "correlation.",
            "t": 96.515
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Dr. Nova",
        "text": "Notice how elegant Horvitz and Thompson's proof is: we represent the sample selection as an indicator variable I-sub-i. Because expectation is linear, the expected value of I-sub-i is exactly pi-sub-i, which neatly cancels out the denominator. The result is strictly equal to the true population total Y, with zero bias.",
        "start": 96.952,
        "end": 118.115,
        "words": [
          {
            "w": "Notice",
            "t": 96.952
          },
          {
            "w": "how",
            "t": 97.375
          },
          {
            "w": "elegant",
            "t": 97.799
          },
          {
            "w": "Horvitz",
            "t": 98.222
          },
          {
            "w": "and",
            "t": 98.645
          },
          {
            "w": "Thompson's",
            "t": 99.068
          },
          {
            "w": "proof",
            "t": 99.492
          },
          {
            "w": "is:",
            "t": 99.915
          },
          {
            "w": "we",
            "t": 100.338
          },
          {
            "w": "represent",
            "t": 100.761
          },
          {
            "w": "the",
            "t": 101.185
          },
          {
            "w": "sample",
            "t": 101.608
          },
          {
            "w": "selection",
            "t": 102.031
          },
          {
            "w": "as",
            "t": 102.454
          },
          {
            "w": "an",
            "t": 102.878
          },
          {
            "w": "indicator",
            "t": 103.301
          },
          {
            "w": "variable",
            "t": 103.724
          },
          {
            "w": "I-sub-i.",
            "t": 104.147
          },
          {
            "w": "Because",
            "t": 104.571
          },
          {
            "w": "expectation",
            "t": 104.994
          },
          {
            "w": "is",
            "t": 105.417
          },
          {
            "w": "linear,",
            "t": 105.84
          },
          {
            "w": "the",
            "t": 106.264
          },
          {
            "w": "expected",
            "t": 106.687
          },
          {
            "w": "value",
            "t": 107.11
          },
          {
            "w": "of",
            "t": 107.534
          },
          {
            "w": "I-sub-i",
            "t": 107.957
          },
          {
            "w": "is",
            "t": 108.38
          },
          {
            "w": "exactly",
            "t": 108.803
          },
          {
            "w": "pi-sub-i,",
            "t": 109.227
          },
          {
            "w": "which",
            "t": 109.65
          },
          {
            "w": "neatly",
            "t": 110.073
          },
          {
            "w": "cancels",
            "t": 110.496
          },
          {
            "w": "out",
            "t": 110.92
          },
          {
            "w": "the",
            "t": 111.343
          },
          {
            "w": "denominator.",
            "t": 111.766
          },
          {
            "w": "The",
            "t": 112.189
          },
          {
            "w": "result",
            "t": 112.613
          },
          {
            "w": "is",
            "t": 113.036
          },
          {
            "w": "strictly",
            "t": 113.459
          },
          {
            "w": "equal",
            "t": 113.882
          },
          {
            "w": "to",
            "t": 114.306
          },
          {
            "w": "the",
            "t": 114.729
          },
          {
            "w": "true",
            "t": 115.152
          },
          {
            "w": "population",
            "t": 115.575
          },
          {
            "w": "total",
            "t": 115.999
          },
          {
            "w": "Y,",
            "t": 116.422
          },
          {
            "w": "with",
            "t": 116.845
          },
          {
            "w": "zero",
            "t": 117.268
          },
          {
            "w": "bias.",
            "t": 117.692
          }
        ]
      },
      {
        "slide": 3,
        "slideId": "s3",
        "speaker": "Kaito",
        "text": "And this proof exposes the fundamental flaw of web scraping datasets: if you collect data by scraping social media comments, anyone without an account has an inclusion probability of exactly zero. You cannot calculate pi-sub-i, and your training dataset suffers permanent, unquantifiable representation bias!",
        "start": 118.115,
        "end": 138.484,
        "words": [
          {
            "w": "And",
            "t": 118.115
          },
          {
            "w": "this",
            "t": 118.578
          },
          {
            "w": "proof",
            "t": 119.041
          },
          {
            "w": "exposes",
            "t": 119.504
          },
          {
            "w": "the",
            "t": 119.967
          },
          {
            "w": "fundamental",
            "t": 120.43
          },
          {
            "w": "flaw",
            "t": 120.893
          },
          {
            "w": "of",
            "t": 121.356
          },
          {
            "w": "web",
            "t": 121.818
          },
          {
            "w": "scraping",
            "t": 122.281
          },
          {
            "w": "datasets:",
            "t": 122.744
          },
          {
            "w": "if",
            "t": 123.207
          },
          {
            "w": "you",
            "t": 123.67
          },
          {
            "w": "collect",
            "t": 124.133
          },
          {
            "w": "data",
            "t": 124.596
          },
          {
            "w": "by",
            "t": 125.059
          },
          {
            "w": "scraping",
            "t": 125.522
          },
          {
            "w": "social",
            "t": 125.985
          },
          {
            "w": "media",
            "t": 126.448
          },
          {
            "w": "comments,",
            "t": 126.911
          },
          {
            "w": "anyone",
            "t": 127.374
          },
          {
            "w": "without",
            "t": 127.837
          },
          {
            "w": "an",
            "t": 128.299
          },
          {
            "w": "account",
            "t": 128.762
          },
          {
            "w": "has",
            "t": 129.225
          },
          {
            "w": "an",
            "t": 129.688
          },
          {
            "w": "inclusion",
            "t": 130.151
          },
          {
            "w": "probability",
            "t": 130.614
          },
          {
            "w": "of",
            "t": 131.077
          },
          {
            "w": "exactly",
            "t": 131.54
          },
          {
            "w": "zero.",
            "t": 132.003
          },
          {
            "w": "You",
            "t": 132.466
          },
          {
            "w": "cannot",
            "t": 132.929
          },
          {
            "w": "calculate",
            "t": 133.392
          },
          {
            "w": "pi-sub-i,",
            "t": 133.855
          },
          {
            "w": "and",
            "t": 134.318
          },
          {
            "w": "your",
            "t": 134.781
          },
          {
            "w": "training",
            "t": 135.243
          },
          {
            "w": "dataset",
            "t": 135.706
          },
          {
            "w": "suffers",
            "t": 136.169
          },
          {
            "w": "permanent,",
            "t": 136.632
          },
          {
            "w": "unquantifiable",
            "t": 137.095
          },
          {
            "w": "representation",
            "t": 137.558
          },
          {
            "w": "bias!",
            "t": 138.021
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Dr. Nova",
        "text": "The Finite Population Correction is a critical concept when auditing finite corporate databases. If you inspect one thousand records from a table of ten thousand rows, your sampling fraction is ten percent. That means the FPC factor is zero point nine zero, yielding a ten percent reduction in the variance of your estimate.",
        "start": 138.484,
        "end": 159.911,
        "words": [
          {
            "w": "The",
            "t": 138.484
          },
          {
            "w": "Finite",
            "t": 138.888
          },
          {
            "w": "Population",
            "t": 139.293
          },
          {
            "w": "Correction",
            "t": 139.697
          },
          {
            "w": "is",
            "t": 140.101
          },
          {
            "w": "a",
            "t": 140.505
          },
          {
            "w": "critical",
            "t": 140.91
          },
          {
            "w": "concept",
            "t": 141.314
          },
          {
            "w": "when",
            "t": 141.718
          },
          {
            "w": "auditing",
            "t": 142.123
          },
          {
            "w": "finite",
            "t": 142.527
          },
          {
            "w": "corporate",
            "t": 142.931
          },
          {
            "w": "databases.",
            "t": 143.335
          },
          {
            "w": "If",
            "t": 143.74
          },
          {
            "w": "you",
            "t": 144.144
          },
          {
            "w": "inspect",
            "t": 144.548
          },
          {
            "w": "one",
            "t": 144.953
          },
          {
            "w": "thousand",
            "t": 145.357
          },
          {
            "w": "records",
            "t": 145.761
          },
          {
            "w": "from",
            "t": 146.165
          },
          {
            "w": "a",
            "t": 146.57
          },
          {
            "w": "table",
            "t": 146.974
          },
          {
            "w": "of",
            "t": 147.378
          },
          {
            "w": "ten",
            "t": 147.783
          },
          {
            "w": "thousand",
            "t": 148.187
          },
          {
            "w": "rows,",
            "t": 148.591
          },
          {
            "w": "your",
            "t": 148.995
          },
          {
            "w": "sampling",
            "t": 149.4
          },
          {
            "w": "fraction",
            "t": 149.804
          },
          {
            "w": "is",
            "t": 150.208
          },
          {
            "w": "ten",
            "t": 150.612
          },
          {
            "w": "percent.",
            "t": 151.017
          },
          {
            "w": "That",
            "t": 151.421
          },
          {
            "w": "means",
            "t": 151.825
          },
          {
            "w": "the",
            "t": 152.23
          },
          {
            "w": "FPC",
            "t": 152.634
          },
          {
            "w": "factor",
            "t": 153.038
          },
          {
            "w": "is",
            "t": 153.442
          },
          {
            "w": "zero",
            "t": 153.847
          },
          {
            "w": "point",
            "t": 154.251
          },
          {
            "w": "nine",
            "t": 154.655
          },
          {
            "w": "zero,",
            "t": 155.06
          },
          {
            "w": "yielding",
            "t": 155.464
          },
          {
            "w": "a",
            "t": 155.868
          },
          {
            "w": "ten",
            "t": 156.272
          },
          {
            "w": "percent",
            "t": 156.677
          },
          {
            "w": "reduction",
            "t": 157.081
          },
          {
            "w": "in",
            "t": 157.485
          },
          {
            "w": "the",
            "t": 157.89
          },
          {
            "w": "variance",
            "t": 158.294
          },
          {
            "w": "of",
            "t": 158.698
          },
          {
            "w": "your",
            "t": 159.102
          },
          {
            "w": "estimate.",
            "t": 159.507
          }
        ]
      },
      {
        "slide": 4,
        "slideId": "s4",
        "speaker": "Kaito",
        "text": "And Cochran's formula is every ML engineer's secret weapon for model validation! If your product manager asks how many test annotations are needed for a three percent confidence band, you plug in Z equals 1.96, assume maximum entropy p equals 0.5, and hand them the exact answer: 1,067 records.",
        "start": 159.911,
        "end": 179.354,
        "words": [
          {
            "w": "And",
            "t": 159.911
          },
          {
            "w": "Cochran's",
            "t": 160.308
          },
          {
            "w": "formula",
            "t": 160.705
          },
          {
            "w": "is",
            "t": 161.101
          },
          {
            "w": "every",
            "t": 161.498
          },
          {
            "w": "ML",
            "t": 161.895
          },
          {
            "w": "engineer's",
            "t": 162.292
          },
          {
            "w": "secret",
            "t": 162.689
          },
          {
            "w": "weapon",
            "t": 163.085
          },
          {
            "w": "for",
            "t": 163.482
          },
          {
            "w": "model",
            "t": 163.879
          },
          {
            "w": "validation!",
            "t": 164.276
          },
          {
            "w": "If",
            "t": 164.673
          },
          {
            "w": "your",
            "t": 165.069
          },
          {
            "w": "product",
            "t": 165.466
          },
          {
            "w": "manager",
            "t": 165.863
          },
          {
            "w": "asks",
            "t": 166.26
          },
          {
            "w": "how",
            "t": 166.657
          },
          {
            "w": "many",
            "t": 167.053
          },
          {
            "w": "test",
            "t": 167.45
          },
          {
            "w": "annotations",
            "t": 167.847
          },
          {
            "w": "are",
            "t": 168.244
          },
          {
            "w": "needed",
            "t": 168.641
          },
          {
            "w": "for",
            "t": 169.037
          },
          {
            "w": "a",
            "t": 169.434
          },
          {
            "w": "three",
            "t": 169.831
          },
          {
            "w": "percent",
            "t": 170.228
          },
          {
            "w": "confidence",
            "t": 170.624
          },
          {
            "w": "band,",
            "t": 171.021
          },
          {
            "w": "you",
            "t": 171.418
          },
          {
            "w": "plug",
            "t": 171.815
          },
          {
            "w": "in",
            "t": 172.212
          },
          {
            "w": "Z",
            "t": 172.608
          },
          {
            "w": "equals",
            "t": 173.005
          },
          {
            "w": "1.96,",
            "t": 173.402
          },
          {
            "w": "assume",
            "t": 173.799
          },
          {
            "w": "maximum",
            "t": 174.196
          },
          {
            "w": "entropy",
            "t": 174.592
          },
          {
            "w": "p",
            "t": 174.989
          },
          {
            "w": "equals",
            "t": 175.386
          },
          {
            "w": "0.5,",
            "t": 175.783
          },
          {
            "w": "and",
            "t": 176.18
          },
          {
            "w": "hand",
            "t": 176.576
          },
          {
            "w": "them",
            "t": 176.973
          },
          {
            "w": "the",
            "t": 177.37
          },
          {
            "w": "exact",
            "t": 177.767
          },
          {
            "w": "answer:",
            "t": 178.164
          },
          {
            "w": "1,067",
            "t": 178.56
          },
          {
            "w": "records.",
            "t": 178.957
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Dr. Nova",
        "text": "Think about what happens in simple random sampling: through bad luck of the draw, your sample might over-represent high-spending power users and under-represent casual users. That chance imbalance is what drives up the variance of your estimator.",
        "start": 179.354,
        "end": 195.623,
        "words": [
          {
            "w": "Think",
            "t": 179.354
          },
          {
            "w": "about",
            "t": 179.794
          },
          {
            "w": "what",
            "t": 180.233
          },
          {
            "w": "happens",
            "t": 180.673
          },
          {
            "w": "in",
            "t": 181.113
          },
          {
            "w": "simple",
            "t": 181.553
          },
          {
            "w": "random",
            "t": 181.992
          },
          {
            "w": "sampling:",
            "t": 182.432
          },
          {
            "w": "through",
            "t": 182.872
          },
          {
            "w": "bad",
            "t": 183.311
          },
          {
            "w": "luck",
            "t": 183.751
          },
          {
            "w": "of",
            "t": 184.191
          },
          {
            "w": "the",
            "t": 184.63
          },
          {
            "w": "draw,",
            "t": 185.07
          },
          {
            "w": "your",
            "t": 185.51
          },
          {
            "w": "sample",
            "t": 185.95
          },
          {
            "w": "might",
            "t": 186.389
          },
          {
            "w": "over-represent",
            "t": 186.829
          },
          {
            "w": "high-spending",
            "t": 187.269
          },
          {
            "w": "power",
            "t": 187.708
          },
          {
            "w": "users",
            "t": 188.148
          },
          {
            "w": "and",
            "t": 188.588
          },
          {
            "w": "under-represent",
            "t": 189.027
          },
          {
            "w": "casual",
            "t": 189.467
          },
          {
            "w": "users.",
            "t": 189.907
          },
          {
            "w": "That",
            "t": 190.347
          },
          {
            "w": "chance",
            "t": 190.786
          },
          {
            "w": "imbalance",
            "t": 191.226
          },
          {
            "w": "is",
            "t": 191.666
          },
          {
            "w": "what",
            "t": 192.105
          },
          {
            "w": "drives",
            "t": 192.545
          },
          {
            "w": "up",
            "t": 192.985
          },
          {
            "w": "the",
            "t": 193.424
          },
          {
            "w": "variance",
            "t": 193.864
          },
          {
            "w": "of",
            "t": 194.304
          },
          {
            "w": "your",
            "t": 194.744
          },
          {
            "w": "estimator.",
            "t": 195.183
          }
        ]
      },
      {
        "slide": 5,
        "slideId": "s5",
        "speaker": "Kaito",
        "text": "Right! Stratified sampling fixes that by setting explicit quotas. If power users represent ten percent of our database, we lock down exactly ten percent of our sample. Between-group variance vanishes from our error bars!",
        "start": 195.623,
        "end": 210.172,
        "words": [
          {
            "w": "Right!",
            "t": 195.623
          },
          {
            "w": "Stratified",
            "t": 196.051
          },
          {
            "w": "sampling",
            "t": 196.479
          },
          {
            "w": "fixes",
            "t": 196.907
          },
          {
            "w": "that",
            "t": 197.335
          },
          {
            "w": "by",
            "t": 197.763
          },
          {
            "w": "setting",
            "t": 198.19
          },
          {
            "w": "explicit",
            "t": 198.618
          },
          {
            "w": "quotas.",
            "t": 199.046
          },
          {
            "w": "If",
            "t": 199.474
          },
          {
            "w": "power",
            "t": 199.902
          },
          {
            "w": "users",
            "t": 200.33
          },
          {
            "w": "represent",
            "t": 200.758
          },
          {
            "w": "ten",
            "t": 201.186
          },
          {
            "w": "percent",
            "t": 201.614
          },
          {
            "w": "of",
            "t": 202.042
          },
          {
            "w": "our",
            "t": 202.47
          },
          {
            "w": "database,",
            "t": 202.897
          },
          {
            "w": "we",
            "t": 203.325
          },
          {
            "w": "lock",
            "t": 203.753
          },
          {
            "w": "down",
            "t": 204.181
          },
          {
            "w": "exactly",
            "t": 204.609
          },
          {
            "w": "ten",
            "t": 205.037
          },
          {
            "w": "percent",
            "t": 205.465
          },
          {
            "w": "of",
            "t": 205.893
          },
          {
            "w": "our",
            "t": 206.321
          },
          {
            "w": "sample.",
            "t": 206.749
          },
          {
            "w": "Between-group",
            "t": 207.177
          },
          {
            "w": "variance",
            "t": 207.605
          },
          {
            "w": "vanishes",
            "t": 208.032
          },
          {
            "w": "from",
            "t": 208.46
          },
          {
            "w": "our",
            "t": 208.888
          },
          {
            "w": "error",
            "t": 209.316
          },
          {
            "w": "bars!",
            "t": 209.744
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Dr. Nova",
        "text": "Try moving the standard deviation slider for Stratum 3, the Rural group. Watch how the Neyman allocation automatically shifts sample budget away from the low-variance Urban stratum and into Rural.",
        "start": 210.172,
        "end": 223.134,
        "words": [
          {
            "w": "Try",
            "t": 210.172
          },
          {
            "w": "moving",
            "t": 210.604
          },
          {
            "w": "the",
            "t": 211.036
          },
          {
            "w": "standard",
            "t": 211.468
          },
          {
            "w": "deviation",
            "t": 211.9
          },
          {
            "w": "slider",
            "t": 212.332
          },
          {
            "w": "for",
            "t": 212.764
          },
          {
            "w": "Stratum",
            "t": 213.196
          },
          {
            "w": "3,",
            "t": 213.629
          },
          {
            "w": "the",
            "t": 214.061
          },
          {
            "w": "Rural",
            "t": 214.493
          },
          {
            "w": "group.",
            "t": 214.925
          },
          {
            "w": "Watch",
            "t": 215.357
          },
          {
            "w": "how",
            "t": 215.789
          },
          {
            "w": "the",
            "t": 216.221
          },
          {
            "w": "Neyman",
            "t": 216.653
          },
          {
            "w": "allocation",
            "t": 217.085
          },
          {
            "w": "automatically",
            "t": 217.517
          },
          {
            "w": "shifts",
            "t": 217.949
          },
          {
            "w": "sample",
            "t": 218.381
          },
          {
            "w": "budget",
            "t": 218.813
          },
          {
            "w": "away",
            "t": 219.245
          },
          {
            "w": "from",
            "t": 219.677
          },
          {
            "w": "the",
            "t": 220.11
          },
          {
            "w": "low-variance",
            "t": 220.542
          },
          {
            "w": "Urban",
            "t": 220.974
          },
          {
            "w": "stratum",
            "t": 221.406
          },
          {
            "w": "and",
            "t": 221.838
          },
          {
            "w": "into",
            "t": 222.27
          },
          {
            "w": "Rural.",
            "t": 222.702
          }
        ]
      },
      {
        "slide": 6,
        "slideId": "s6",
        "speaker": "Kaito",
        "text": "Look at the variance reduction percentage at the bottom! In proportional allocation, Rural only got 100 samples because it makes up ten percent of the population. But because its variance is huge, Neyman bumps it up to 212 samples, cutting total estimator variance by twenty percent!",
        "start": 223.134,
        "end": 241.85,
        "words": [
          {
            "w": "Look",
            "t": 223.134
          },
          {
            "w": "at",
            "t": 223.541
          },
          {
            "w": "the",
            "t": 223.948
          },
          {
            "w": "variance",
            "t": 224.355
          },
          {
            "w": "reduction",
            "t": 224.761
          },
          {
            "w": "percentage",
            "t": 225.168
          },
          {
            "w": "at",
            "t": 225.575
          },
          {
            "w": "the",
            "t": 225.982
          },
          {
            "w": "bottom!",
            "t": 226.389
          },
          {
            "w": "In",
            "t": 226.796
          },
          {
            "w": "proportional",
            "t": 227.203
          },
          {
            "w": "allocation,",
            "t": 227.61
          },
          {
            "w": "Rural",
            "t": 228.016
          },
          {
            "w": "only",
            "t": 228.423
          },
          {
            "w": "got",
            "t": 228.83
          },
          {
            "w": "100",
            "t": 229.237
          },
          {
            "w": "samples",
            "t": 229.644
          },
          {
            "w": "because",
            "t": 230.051
          },
          {
            "w": "it",
            "t": 230.458
          },
          {
            "w": "makes",
            "t": 230.865
          },
          {
            "w": "up",
            "t": 231.271
          },
          {
            "w": "ten",
            "t": 231.678
          },
          {
            "w": "percent",
            "t": 232.085
          },
          {
            "w": "of",
            "t": 232.492
          },
          {
            "w": "the",
            "t": 232.899
          },
          {
            "w": "population.",
            "t": 233.306
          },
          {
            "w": "But",
            "t": 233.713
          },
          {
            "w": "because",
            "t": 234.119
          },
          {
            "w": "its",
            "t": 234.526
          },
          {
            "w": "variance",
            "t": 234.933
          },
          {
            "w": "is",
            "t": 235.34
          },
          {
            "w": "huge,",
            "t": 235.747
          },
          {
            "w": "Neyman",
            "t": 236.154
          },
          {
            "w": "bumps",
            "t": 236.561
          },
          {
            "w": "it",
            "t": 236.968
          },
          {
            "w": "up",
            "t": 237.374
          },
          {
            "w": "to",
            "t": 237.781
          },
          {
            "w": "212",
            "t": 238.188
          },
          {
            "w": "samples,",
            "t": 238.595
          },
          {
            "w": "cutting",
            "t": 239.002
          },
          {
            "w": "total",
            "t": 239.409
          },
          {
            "w": "estimator",
            "t": 239.816
          },
          {
            "w": "variance",
            "t": 240.223
          },
          {
            "w": "by",
            "t": 240.629
          },
          {
            "w": "twenty",
            "t": 241.036
          },
          {
            "w": "percent!",
            "t": 241.443
          }
        ]
      },
      {
        "slide": 7,
        "slideId": "s7",
        "speaker": "Dr. Nova",
        "text": "Active Checkpoint 1! Remember our proof from Slide 3. What mathematical condition guarantees that the Horvitz-Thompson estimator has zero expectation bias?",
        "start": 241.85,
        "end": 252.101,
        "words": [
          {
            "w": "Active",
            "t": 241.85
          },
          {
            "w": "Checkpoint",
            "t": 242.338
          },
          {
            "w": "1!",
            "t": 242.826
          },
          {
            "w": "Remember",
            "t": 243.314
          },
          {
            "w": "our",
            "t": 243.803
          },
          {
            "w": "proof",
            "t": 244.291
          },
          {
            "w": "from",
            "t": 244.779
          },
          {
            "w": "Slide",
            "t": 245.267
          },
          {
            "w": "3.",
            "t": 245.755
          },
          {
            "w": "What",
            "t": 246.243
          },
          {
            "w": "mathematical",
            "t": 246.731
          },
          {
            "w": "condition",
            "t": 247.22
          },
          {
            "w": "guarantees",
            "t": 247.708
          },
          {
            "w": "that",
            "t": 248.196
          },
          {
            "w": "the",
            "t": 248.684
          },
          {
            "w": "Horvitz-Thompson",
            "t": 249.172
          },
          {
            "w": "estimator",
            "t": 249.66
          },
          {
            "w": "has",
            "t": 250.148
          },
          {
            "w": "zero",
            "t": 250.637
          },
          {
            "w": "expectation",
            "t": 251.125
          },
          {
            "w": "bias?",
            "t": 251.613
          }
        ]
      },
      {
        "slide": 7,
        "slideId": "s7",
        "speaker": "Kaito",
        "text": "Think about what happens if any unit has pi-sub-i equal to zero: can you divide by zero, or reconstruct their missing contribution? Pick the correct option above!",
        "start": 252.101,
        "end": 262.815,
        "words": [
          {
            "w": "Think",
            "t": 252.101
          },
          {
            "w": "about",
            "t": 252.498
          },
          {
            "w": "what",
            "t": 252.895
          },
          {
            "w": "happens",
            "t": 253.291
          },
          {
            "w": "if",
            "t": 253.688
          },
          {
            "w": "any",
            "t": 254.085
          },
          {
            "w": "unit",
            "t": 254.482
          },
          {
            "w": "has",
            "t": 254.879
          },
          {
            "w": "pi-sub-i",
            "t": 255.276
          },
          {
            "w": "equal",
            "t": 255.672
          },
          {
            "w": "to",
            "t": 256.069
          },
          {
            "w": "zero:",
            "t": 256.466
          },
          {
            "w": "can",
            "t": 256.863
          },
          {
            "w": "you",
            "t": 257.26
          },
          {
            "w": "divide",
            "t": 257.656
          },
          {
            "w": "by",
            "t": 258.053
          },
          {
            "w": "zero,",
            "t": 258.45
          },
          {
            "w": "or",
            "t": 258.847
          },
          {
            "w": "reconstruct",
            "t": 259.244
          },
          {
            "w": "their",
            "t": 259.64
          },
          {
            "w": "missing",
            "t": 260.037
          },
          {
            "w": "contribution?",
            "t": 260.434
          },
          {
            "w": "Pick",
            "t": 260.831
          },
          {
            "w": "the",
            "t": 261.228
          },
          {
            "w": "correct",
            "t": 261.625
          },
          {
            "w": "option",
            "t": 262.021
          },
          {
            "w": "above!",
            "t": 262.418
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Dr. Nova",
        "text": "Notice the mathematical elegance of the Tschuprow-Neyman cost formula: the sampling cost appears under a square root in the denominator. That means even if human expert verification costs four times more than automated logging, you only reduce the expert stratum allocation by a factor of two, not four.",
        "start": 262.815,
        "end": 282.854,
        "words": [
          {
            "w": "Notice",
            "t": 262.815
          },
          {
            "w": "the",
            "t": 263.232
          },
          {
            "w": "mathematical",
            "t": 263.65
          },
          {
            "w": "elegance",
            "t": 264.067
          },
          {
            "w": "of",
            "t": 264.485
          },
          {
            "w": "the",
            "t": 264.902
          },
          {
            "w": "Tschuprow-Neyman",
            "t": 265.32
          },
          {
            "w": "cost",
            "t": 265.737
          },
          {
            "w": "formula:",
            "t": 266.155
          },
          {
            "w": "the",
            "t": 266.572
          },
          {
            "w": "sampling",
            "t": 266.99
          },
          {
            "w": "cost",
            "t": 267.407
          },
          {
            "w": "appears",
            "t": 267.825
          },
          {
            "w": "under",
            "t": 268.242
          },
          {
            "w": "a",
            "t": 268.66
          },
          {
            "w": "square",
            "t": 269.077
          },
          {
            "w": "root",
            "t": 269.495
          },
          {
            "w": "in",
            "t": 269.912
          },
          {
            "w": "the",
            "t": 270.33
          },
          {
            "w": "denominator.",
            "t": 270.747
          },
          {
            "w": "That",
            "t": 271.165
          },
          {
            "w": "means",
            "t": 271.582
          },
          {
            "w": "even",
            "t": 272.0
          },
          {
            "w": "if",
            "t": 272.417
          },
          {
            "w": "human",
            "t": 272.834
          },
          {
            "w": "expert",
            "t": 273.252
          },
          {
            "w": "verification",
            "t": 273.669
          },
          {
            "w": "costs",
            "t": 274.087
          },
          {
            "w": "four",
            "t": 274.504
          },
          {
            "w": "times",
            "t": 274.922
          },
          {
            "w": "more",
            "t": 275.339
          },
          {
            "w": "than",
            "t": 275.757
          },
          {
            "w": "automated",
            "t": 276.174
          },
          {
            "w": "logging,",
            "t": 276.592
          },
          {
            "w": "you",
            "t": 277.009
          },
          {
            "w": "only",
            "t": 277.427
          },
          {
            "w": "reduce",
            "t": 277.844
          },
          {
            "w": "the",
            "t": 278.262
          },
          {
            "w": "expert",
            "t": 278.679
          },
          {
            "w": "stratum",
            "t": 279.097
          },
          {
            "w": "allocation",
            "t": 279.514
          },
          {
            "w": "by",
            "t": 279.932
          },
          {
            "w": "a",
            "t": 280.349
          },
          {
            "w": "factor",
            "t": 280.767
          },
          {
            "w": "of",
            "t": 281.184
          },
          {
            "w": "two,",
            "t": 281.602
          },
          {
            "w": "not",
            "t": 282.019
          },
          {
            "w": "four.",
            "t": 282.437
          }
        ]
      },
      {
        "slide": 8,
        "slideId": "s8",
        "speaker": "Kaito",
        "text": "That square root dampening is brilliant. It ensures that expensive but highly volatile sub-populations are never starved of sample size, protecting your global model from blindness in high-stakes domains!",
        "start": 282.854,
        "end": 296.345,
        "words": [
          {
            "w": "That",
            "t": 282.854
          },
          {
            "w": "square",
            "t": 283.319
          },
          {
            "w": "root",
            "t": 283.784
          },
          {
            "w": "dampening",
            "t": 284.25
          },
          {
            "w": "is",
            "t": 284.715
          },
          {
            "w": "brilliant.",
            "t": 285.18
          },
          {
            "w": "It",
            "t": 285.645
          },
          {
            "w": "ensures",
            "t": 286.11
          },
          {
            "w": "that",
            "t": 286.576
          },
          {
            "w": "expensive",
            "t": 287.041
          },
          {
            "w": "but",
            "t": 287.506
          },
          {
            "w": "highly",
            "t": 287.971
          },
          {
            "w": "volatile",
            "t": 288.436
          },
          {
            "w": "sub-populations",
            "t": 288.902
          },
          {
            "w": "are",
            "t": 289.367
          },
          {
            "w": "never",
            "t": 289.832
          },
          {
            "w": "starved",
            "t": 290.297
          },
          {
            "w": "of",
            "t": 290.763
          },
          {
            "w": "sample",
            "t": 291.228
          },
          {
            "w": "size,",
            "t": 291.693
          },
          {
            "w": "protecting",
            "t": 292.158
          },
          {
            "w": "your",
            "t": 292.623
          },
          {
            "w": "global",
            "t": 293.089
          },
          {
            "w": "model",
            "t": 293.554
          },
          {
            "w": "from",
            "t": 294.019
          },
          {
            "w": "blindness",
            "t": 294.484
          },
          {
            "w": "in",
            "t": 294.949
          },
          {
            "w": "high-stakes",
            "t": 295.415
          },
          {
            "w": "domains!",
            "t": 295.88
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Dr. Nova",
        "text": "Engineers often ask why anyone would use cluster sampling if it inflates variance. The answer is simple: physical reality. If you are deploying LiDAR test vehicles or sending field auditors to interview hospital patients, traveling to hundreds of disparate locations would bankrupt your data collection budget.",
        "start": 296.345,
        "end": 316.846,
        "words": [
          {
            "w": "Engineers",
            "t": 296.345
          },
          {
            "w": "often",
            "t": 296.791
          },
          {
            "w": "ask",
            "t": 297.236
          },
          {
            "w": "why",
            "t": 297.682
          },
          {
            "w": "anyone",
            "t": 298.128
          },
          {
            "w": "would",
            "t": 298.573
          },
          {
            "w": "use",
            "t": 299.019
          },
          {
            "w": "cluster",
            "t": 299.465
          },
          {
            "w": "sampling",
            "t": 299.91
          },
          {
            "w": "if",
            "t": 300.356
          },
          {
            "w": "it",
            "t": 300.802
          },
          {
            "w": "inflates",
            "t": 301.247
          },
          {
            "w": "variance.",
            "t": 301.693
          },
          {
            "w": "The",
            "t": 302.139
          },
          {
            "w": "answer",
            "t": 302.584
          },
          {
            "w": "is",
            "t": 303.03
          },
          {
            "w": "simple:",
            "t": 303.476
          },
          {
            "w": "physical",
            "t": 303.921
          },
          {
            "w": "reality.",
            "t": 304.367
          },
          {
            "w": "If",
            "t": 304.813
          },
          {
            "w": "you",
            "t": 305.258
          },
          {
            "w": "are",
            "t": 305.704
          },
          {
            "w": "deploying",
            "t": 306.15
          },
          {
            "w": "LiDAR",
            "t": 306.596
          },
          {
            "w": "test",
            "t": 307.041
          },
          {
            "w": "vehicles",
            "t": 307.487
          },
          {
            "w": "or",
            "t": 307.933
          },
          {
            "w": "sending",
            "t": 308.378
          },
          {
            "w": "field",
            "t": 308.824
          },
          {
            "w": "auditors",
            "t": 309.27
          },
          {
            "w": "to",
            "t": 309.715
          },
          {
            "w": "interview",
            "t": 310.161
          },
          {
            "w": "hospital",
            "t": 310.607
          },
          {
            "w": "patients,",
            "t": 311.052
          },
          {
            "w": "traveling",
            "t": 311.498
          },
          {
            "w": "to",
            "t": 311.944
          },
          {
            "w": "hundreds",
            "t": 312.389
          },
          {
            "w": "of",
            "t": 312.835
          },
          {
            "w": "disparate",
            "t": 313.281
          },
          {
            "w": "locations",
            "t": 313.726
          },
          {
            "w": "would",
            "t": 314.172
          },
          {
            "w": "bankrupt",
            "t": 314.618
          },
          {
            "w": "your",
            "t": 315.063
          },
          {
            "w": "data",
            "t": 315.509
          },
          {
            "w": "collection",
            "t": 315.955
          },
          {
            "w": "budget.",
            "t": 316.4
          }
        ]
      },
      {
        "slide": 9,
        "slideId": "s9",
        "speaker": "Kaito",
        "text": "Exactly. You bundle observations into clusters to survive your budget constraints. But you must pay the statistical correlation tax! Because data points within the same cluster resemble each other, you get diminishing statistical returns from each additional observation.",
        "start": 316.846,
        "end": 334.768,
        "words": [
          {
            "w": "Exactly.",
            "t": 316.846
          },
          {
            "w": "You",
            "t": 317.318
          },
          {
            "w": "bundle",
            "t": 317.789
          },
          {
            "w": "observations",
            "t": 318.261
          },
          {
            "w": "into",
            "t": 318.733
          },
          {
            "w": "clusters",
            "t": 319.204
          },
          {
            "w": "to",
            "t": 319.676
          },
          {
            "w": "survive",
            "t": 320.147
          },
          {
            "w": "your",
            "t": 320.619
          },
          {
            "w": "budget",
            "t": 321.091
          },
          {
            "w": "constraints.",
            "t": 321.562
          },
          {
            "w": "But",
            "t": 322.034
          },
          {
            "w": "you",
            "t": 322.506
          },
          {
            "w": "must",
            "t": 322.977
          },
          {
            "w": "pay",
            "t": 323.449
          },
          {
            "w": "the",
            "t": 323.92
          },
          {
            "w": "statistical",
            "t": 324.392
          },
          {
            "w": "correlation",
            "t": 324.864
          },
          {
            "w": "tax!",
            "t": 325.335
          },
          {
            "w": "Because",
            "t": 325.807
          },
          {
            "w": "data",
            "t": 326.279
          },
          {
            "w": "points",
            "t": 326.75
          },
          {
            "w": "within",
            "t": 327.222
          },
          {
            "w": "the",
            "t": 327.694
          },
          {
            "w": "same",
            "t": 328.165
          },
          {
            "w": "cluster",
            "t": 328.637
          },
          {
            "w": "resemble",
            "t": 329.108
          },
          {
            "w": "each",
            "t": 329.58
          },
          {
            "w": "other,",
            "t": 330.052
          },
          {
            "w": "you",
            "t": 330.523
          },
          {
            "w": "get",
            "t": 330.995
          },
          {
            "w": "diminishing",
            "t": 331.467
          },
          {
            "w": "statistical",
            "t": 331.938
          },
          {
            "w": "returns",
            "t": 332.41
          },
          {
            "w": "from",
            "t": 332.881
          },
          {
            "w": "each",
            "t": 333.353
          },
          {
            "w": "additional",
            "t": 333.825
          },
          {
            "w": "observation.",
            "t": 334.296
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Dr. Nova",
        "text": "Notice the numerator and denominator in the definition of rho: between-cluster variance divided by total variance. If patients within a hospital have almost identical outcomes due to standardized clinical protocols, within-cluster variance shrinks, driving rho higher.",
        "start": 334.768,
        "end": 352.492,
        "words": [
          {
            "w": "Notice",
            "t": 334.768
          },
          {
            "w": "the",
            "t": 335.26
          },
          {
            "w": "numerator",
            "t": 335.753
          },
          {
            "w": "and",
            "t": 336.245
          },
          {
            "w": "denominator",
            "t": 336.737
          },
          {
            "w": "in",
            "t": 337.23
          },
          {
            "w": "the",
            "t": 337.722
          },
          {
            "w": "definition",
            "t": 338.214
          },
          {
            "w": "of",
            "t": 338.707
          },
          {
            "w": "rho:",
            "t": 339.199
          },
          {
            "w": "between-cluster",
            "t": 339.691
          },
          {
            "w": "variance",
            "t": 340.184
          },
          {
            "w": "divided",
            "t": 340.676
          },
          {
            "w": "by",
            "t": 341.168
          },
          {
            "w": "total",
            "t": 341.661
          },
          {
            "w": "variance.",
            "t": 342.153
          },
          {
            "w": "If",
            "t": 342.645
          },
          {
            "w": "patients",
            "t": 343.138
          },
          {
            "w": "within",
            "t": 343.63
          },
          {
            "w": "a",
            "t": 344.122
          },
          {
            "w": "hospital",
            "t": 344.615
          },
          {
            "w": "have",
            "t": 345.107
          },
          {
            "w": "almost",
            "t": 345.599
          },
          {
            "w": "identical",
            "t": 346.092
          },
          {
            "w": "outcomes",
            "t": 346.584
          },
          {
            "w": "due",
            "t": 347.076
          },
          {
            "w": "to",
            "t": 347.569
          },
          {
            "w": "standardized",
            "t": 348.061
          },
          {
            "w": "clinical",
            "t": 348.553
          },
          {
            "w": "protocols,",
            "t": 349.046
          },
          {
            "w": "within-cluster",
            "t": 349.538
          },
          {
            "w": "variance",
            "t": 350.03
          },
          {
            "w": "shrinks,",
            "t": 350.523
          },
          {
            "w": "driving",
            "t": 351.015
          },
          {
            "w": "rho",
            "t": 351.507
          },
          {
            "w": "higher.",
            "t": 352.0
          }
        ]
      },
      {
        "slide": 10,
        "slideId": "s10",
        "speaker": "Kaito",
        "text": "And the kicker is the multiplier: in Kish's formulation, rho is multiplied by m minus one. If your cluster size m is large, say 100 IoT smart meters per neighborhood, a modest rho of 0.10 multiplies your estimation variance by a factor of nearly eleven!",
        "start": 352.492,
        "end": 369.224,
        "words": [
          {
            "w": "And",
            "t": 352.492
          },
          {
            "w": "the",
            "t": 352.864
          },
          {
            "w": "kicker",
            "t": 353.236
          },
          {
            "w": "is",
            "t": 353.607
          },
          {
            "w": "the",
            "t": 353.979
          },
          {
            "w": "multiplier:",
            "t": 354.351
          },
          {
            "w": "in",
            "t": 354.723
          },
          {
            "w": "Kish's",
            "t": 355.095
          },
          {
            "w": "formulation,",
            "t": 355.467
          },
          {
            "w": "rho",
            "t": 355.838
          },
          {
            "w": "is",
            "t": 356.21
          },
          {
            "w": "multiplied",
            "t": 356.582
          },
          {
            "w": "by",
            "t": 356.954
          },
          {
            "w": "m",
            "t": 357.326
          },
          {
            "w": "minus",
            "t": 357.698
          },
          {
            "w": "one.",
            "t": 358.069
          },
          {
            "w": "If",
            "t": 358.441
          },
          {
            "w": "your",
            "t": 358.813
          },
          {
            "w": "cluster",
            "t": 359.185
          },
          {
            "w": "size",
            "t": 359.557
          },
          {
            "w": "m",
            "t": 359.928
          },
          {
            "w": "is",
            "t": 360.3
          },
          {
            "w": "large,",
            "t": 360.672
          },
          {
            "w": "say",
            "t": 361.044
          },
          {
            "w": "100",
            "t": 361.416
          },
          {
            "w": "IoT",
            "t": 361.788
          },
          {
            "w": "smart",
            "t": 362.159
          },
          {
            "w": "meters",
            "t": 362.531
          },
          {
            "w": "per",
            "t": 362.903
          },
          {
            "w": "neighborhood,",
            "t": 363.275
          },
          {
            "w": "a",
            "t": 363.647
          },
          {
            "w": "modest",
            "t": 364.018
          },
          {
            "w": "rho",
            "t": 364.39
          },
          {
            "w": "of",
            "t": 364.762
          },
          {
            "w": "0.10",
            "t": 365.134
          },
          {
            "w": "multiplies",
            "t": 365.506
          },
          {
            "w": "your",
            "t": 365.878
          },
          {
            "w": "estimation",
            "t": 366.249
          },
          {
            "w": "variance",
            "t": 366.621
          },
          {
            "w": "by",
            "t": 366.993
          },
          {
            "w": "a",
            "t": 367.365
          },
          {
            "w": "factor",
            "t": 367.737
          },
          {
            "w": "of",
            "t": 368.109
          },
          {
            "w": "nearly",
            "t": 368.48
          },
          {
            "w": "eleven!",
            "t": 368.852
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Dr. Nova",
        "text": "Leslie Kish's design effect formula is one of the most practical equations in empirical statistics. When Deff is equal to 4, your confidence interval is twice as wide as standard software will report if it assumes simple random sampling.",
        "start": 369.224,
        "end": 384.898,
        "words": [
          {
            "w": "Leslie",
            "t": 369.224
          },
          {
            "w": "Kish's",
            "t": 369.626
          },
          {
            "w": "design",
            "t": 370.028
          },
          {
            "w": "effect",
            "t": 370.43
          },
          {
            "w": "formula",
            "t": 370.832
          },
          {
            "w": "is",
            "t": 371.233
          },
          {
            "w": "one",
            "t": 371.635
          },
          {
            "w": "of",
            "t": 372.037
          },
          {
            "w": "the",
            "t": 372.439
          },
          {
            "w": "most",
            "t": 372.841
          },
          {
            "w": "practical",
            "t": 373.243
          },
          {
            "w": "equations",
            "t": 373.645
          },
          {
            "w": "in",
            "t": 374.047
          },
          {
            "w": "empirical",
            "t": 374.449
          },
          {
            "w": "statistics.",
            "t": 374.851
          },
          {
            "w": "When",
            "t": 375.252
          },
          {
            "w": "Deff",
            "t": 375.654
          },
          {
            "w": "is",
            "t": 376.056
          },
          {
            "w": "equal",
            "t": 376.458
          },
          {
            "w": "to",
            "t": 376.86
          },
          {
            "w": "4,",
            "t": 377.262
          },
          {
            "w": "your",
            "t": 377.664
          },
          {
            "w": "confidence",
            "t": 378.066
          },
          {
            "w": "interval",
            "t": 378.468
          },
          {
            "w": "is",
            "t": 378.87
          },
          {
            "w": "twice",
            "t": 379.271
          },
          {
            "w": "as",
            "t": 379.673
          },
          {
            "w": "wide",
            "t": 380.075
          },
          {
            "w": "as",
            "t": 380.477
          },
          {
            "w": "standard",
            "t": 380.879
          },
          {
            "w": "software",
            "t": 381.281
          },
          {
            "w": "will",
            "t": 381.683
          },
          {
            "w": "report",
            "t": 382.085
          },
          {
            "w": "if",
            "t": 382.487
          },
          {
            "w": "it",
            "t": 382.889
          },
          {
            "w": "assumes",
            "t": 383.29
          },
          {
            "w": "simple",
            "t": 383.692
          },
          {
            "w": "random",
            "t": 384.094
          },
          {
            "w": "sampling.",
            "t": 384.496
          }
        ]
      },
      {
        "slide": 11,
        "slideId": "s11",
        "speaker": "Kaito",
        "text": "And the effective sample size n-effective shows the real story: you paid to collect 1,000 observations, but you only received 250 observations worth of independent statistical signal! Let us test this in the interactive simulator.",
        "start": 384.898,
        "end": 400.109,
        "words": [
          {
            "w": "And",
            "t": 384.898
          },
          {
            "w": "the",
            "t": 385.333
          },
          {
            "w": "effective",
            "t": 385.767
          },
          {
            "w": "sample",
            "t": 386.202
          },
          {
            "w": "size",
            "t": 386.636
          },
          {
            "w": "n-effective",
            "t": 387.071
          },
          {
            "w": "shows",
            "t": 387.506
          },
          {
            "w": "the",
            "t": 387.94
          },
          {
            "w": "real",
            "t": 388.375
          },
          {
            "w": "story:",
            "t": 388.809
          },
          {
            "w": "you",
            "t": 389.244
          },
          {
            "w": "paid",
            "t": 389.679
          },
          {
            "w": "to",
            "t": 390.113
          },
          {
            "w": "collect",
            "t": 390.548
          },
          {
            "w": "1,000",
            "t": 390.982
          },
          {
            "w": "observations,",
            "t": 391.417
          },
          {
            "w": "but",
            "t": 391.852
          },
          {
            "w": "you",
            "t": 392.286
          },
          {
            "w": "only",
            "t": 392.721
          },
          {
            "w": "received",
            "t": 393.155
          },
          {
            "w": "250",
            "t": 393.59
          },
          {
            "w": "observations",
            "t": 394.025
          },
          {
            "w": "worth",
            "t": 394.459
          },
          {
            "w": "of",
            "t": 394.894
          },
          {
            "w": "independent",
            "t": 395.328
          },
          {
            "w": "statistical",
            "t": 395.763
          },
          {
            "w": "signal!",
            "t": 396.198
          },
          {
            "w": "Let",
            "t": 396.632
          },
          {
            "w": "us",
            "t": 397.067
          },
          {
            "w": "test",
            "t": 397.501
          },
          {
            "w": "this",
            "t": 397.936
          },
          {
            "w": "in",
            "t": 398.371
          },
          {
            "w": "the",
            "t": 398.805
          },
          {
            "w": "interactive",
            "t": 399.24
          },
          {
            "w": "simulator.",
            "t": 399.674
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Dr. Nova",
        "text": "Try moving the cluster size slider m up to 50 or 60. Watch how rapidly the Design Effect multiplies and how your effective sample size collapses.",
        "start": 400.109,
        "end": 409.698,
        "words": [
          {
            "w": "Try",
            "t": 400.109
          },
          {
            "w": "moving",
            "t": 400.478
          },
          {
            "w": "the",
            "t": 400.847
          },
          {
            "w": "cluster",
            "t": 401.215
          },
          {
            "w": "size",
            "t": 401.584
          },
          {
            "w": "slider",
            "t": 401.953
          },
          {
            "w": "m",
            "t": 402.322
          },
          {
            "w": "up",
            "t": 402.691
          },
          {
            "w": "to",
            "t": 403.059
          },
          {
            "w": "50",
            "t": 403.428
          },
          {
            "w": "or",
            "t": 403.797
          },
          {
            "w": "60.",
            "t": 404.166
          },
          {
            "w": "Watch",
            "t": 404.535
          },
          {
            "w": "how",
            "t": 404.904
          },
          {
            "w": "rapidly",
            "t": 405.272
          },
          {
            "w": "the",
            "t": 405.641
          },
          {
            "w": "Design",
            "t": 406.01
          },
          {
            "w": "Effect",
            "t": 406.379
          },
          {
            "w": "multiplies",
            "t": 406.748
          },
          {
            "w": "and",
            "t": 407.116
          },
          {
            "w": "how",
            "t": 407.485
          },
          {
            "w": "your",
            "t": 407.854
          },
          {
            "w": "effective",
            "t": 408.223
          },
          {
            "w": "sample",
            "t": 408.592
          },
          {
            "w": "size",
            "t": 408.96
          },
          {
            "w": "collapses.",
            "t": 409.329
          }
        ]
      },
      {
        "slide": 12,
        "slideId": "s12",
        "speaker": "Kaito",
        "text": "Look at that information loss gauge: seventy-four percent at m equals 20! That is why survey designers prioritize visiting more clusters with fewer people per cluster. It directly drives down Deff and preserves statistical power!",
        "start": 409.698,
        "end": 424.843,
        "words": [
          {
            "w": "Look",
            "t": 409.698
          },
          {
            "w": "at",
            "t": 410.131
          },
          {
            "w": "that",
            "t": 410.563
          },
          {
            "w": "information",
            "t": 410.996
          },
          {
            "w": "loss",
            "t": 411.429
          },
          {
            "w": "gauge:",
            "t": 411.862
          },
          {
            "w": "seventy-four",
            "t": 412.294
          },
          {
            "w": "percent",
            "t": 412.727
          },
          {
            "w": "at",
            "t": 413.16
          },
          {
            "w": "m",
            "t": 413.592
          },
          {
            "w": "equals",
            "t": 414.025
          },
          {
            "w": "20!",
            "t": 414.458
          },
          {
            "w": "That",
            "t": 414.891
          },
          {
            "w": "is",
            "t": 415.323
          },
          {
            "w": "why",
            "t": 415.756
          },
          {
            "w": "survey",
            "t": 416.189
          },
          {
            "w": "designers",
            "t": 416.621
          },
          {
            "w": "prioritize",
            "t": 417.054
          },
          {
            "w": "visiting",
            "t": 417.487
          },
          {
            "w": "more",
            "t": 417.92
          },
          {
            "w": "clusters",
            "t": 418.352
          },
          {
            "w": "with",
            "t": 418.785
          },
          {
            "w": "fewer",
            "t": 419.218
          },
          {
            "w": "people",
            "t": 419.65
          },
          {
            "w": "per",
            "t": 420.083
          },
          {
            "w": "cluster.",
            "t": 420.516
          },
          {
            "w": "It",
            "t": 420.949
          },
          {
            "w": "directly",
            "t": 421.381
          },
          {
            "w": "drives",
            "t": 421.814
          },
          {
            "w": "down",
            "t": 422.247
          },
          {
            "w": "Deff",
            "t": 422.679
          },
          {
            "w": "and",
            "t": 423.112
          },
          {
            "w": "preserves",
            "t": 423.545
          },
          {
            "w": "statistical",
            "t": 423.978
          },
          {
            "w": "power!",
            "t": 424.41
          }
        ]
      },
      {
        "slide": 13,
        "slideId": "s13",
        "speaker": "Dr. Nova",
        "text": "Active Checkpoint 2! Apply Leslie Kish's formula: 1 plus m minus 1 times rho. Cluster size m is 20, and rho is 0.15. What is the calculated Deff and the effective sample size?",
        "start": 424.843,
        "end": 436.416,
        "words": [
          {
            "w": "Active",
            "t": 424.843
          },
          {
            "w": "Checkpoint",
            "t": 425.194
          },
          {
            "w": "2!",
            "t": 425.544
          },
          {
            "w": "Apply",
            "t": 425.895
          },
          {
            "w": "Leslie",
            "t": 426.246
          },
          {
            "w": "Kish's",
            "t": 426.596
          },
          {
            "w": "formula:",
            "t": 426.947
          },
          {
            "w": "1",
            "t": 427.298
          },
          {
            "w": "plus",
            "t": 427.649
          },
          {
            "w": "m",
            "t": 427.999
          },
          {
            "w": "minus",
            "t": 428.35
          },
          {
            "w": "1",
            "t": 428.701
          },
          {
            "w": "times",
            "t": 429.051
          },
          {
            "w": "rho.",
            "t": 429.402
          },
          {
            "w": "Cluster",
            "t": 429.753
          },
          {
            "w": "size",
            "t": 430.103
          },
          {
            "w": "m",
            "t": 430.454
          },
          {
            "w": "is",
            "t": 430.805
          },
          {
            "w": "20,",
            "t": 431.156
          },
          {
            "w": "and",
            "t": 431.506
          },
          {
            "w": "rho",
            "t": 431.857
          },
          {
            "w": "is",
            "t": 432.208
          },
          {
            "w": "0.15.",
            "t": 432.558
          },
          {
            "w": "What",
            "t": 432.909
          },
          {
            "w": "is",
            "t": 433.26
          },
          {
            "w": "the",
            "t": 433.61
          },
          {
            "w": "calculated",
            "t": 433.961
          },
          {
            "w": "Deff",
            "t": 434.312
          },
          {
            "w": "and",
            "t": 434.663
          },
          {
            "w": "the",
            "t": 435.013
          },
          {
            "w": "effective",
            "t": 435.364
          },
          {
            "w": "sample",
            "t": 435.715
          },
          {
            "w": "size?",
            "t": 436.065
          }
        ]
      },
      {
        "slide": 13,
        "slideId": "s13",
        "speaker": "Kaito",
        "text": "Do the math carefully: 20 minus 1 is 19. Multiply 19 by 0.15, and don't forget to add 1! Then divide 1,000 by your Deff. Select your answer above!",
        "start": 436.416,
        "end": 446.072,
        "words": [
          {
            "w": "Do",
            "t": 436.416
          },
          {
            "w": "the",
            "t": 436.749
          },
          {
            "w": "math",
            "t": 437.082
          },
          {
            "w": "carefully:",
            "t": 437.415
          },
          {
            "w": "20",
            "t": 437.748
          },
          {
            "w": "minus",
            "t": 438.081
          },
          {
            "w": "1",
            "t": 438.414
          },
          {
            "w": "is",
            "t": 438.747
          },
          {
            "w": "19.",
            "t": 439.08
          },
          {
            "w": "Multiply",
            "t": 439.413
          },
          {
            "w": "19",
            "t": 439.746
          },
          {
            "w": "by",
            "t": 440.079
          },
          {
            "w": "0.15,",
            "t": 440.412
          },
          {
            "w": "and",
            "t": 440.745
          },
          {
            "w": "don't",
            "t": 441.078
          },
          {
            "w": "forget",
            "t": 441.41
          },
          {
            "w": "to",
            "t": 441.743
          },
          {
            "w": "add",
            "t": 442.076
          },
          {
            "w": "1!",
            "t": 442.409
          },
          {
            "w": "Then",
            "t": 442.742
          },
          {
            "w": "divide",
            "t": 443.075
          },
          {
            "w": "1,000",
            "t": 443.408
          },
          {
            "w": "by",
            "t": 443.741
          },
          {
            "w": "your",
            "t": 444.074
          },
          {
            "w": "Deff.",
            "t": 444.407
          },
          {
            "w": "Select",
            "t": 444.74
          },
          {
            "w": "your",
            "t": 445.073
          },
          {
            "w": "answer",
            "t": 445.406
          },
          {
            "w": "above!",
            "t": 445.739
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Dr. Nova",
        "text": "Look closely at the stratified Neyman row: at nearly the exact same financial cost as simple random sampling, the standard error dropped from 1.12% down to 0.78%. In terms of variance, that is equivalent to doubling our sample size for free!",
        "start": 446.072,
        "end": 462.01,
        "words": [
          {
            "w": "Look",
            "t": 446.072
          },
          {
            "w": "closely",
            "t": 446.461
          },
          {
            "w": "at",
            "t": 446.849
          },
          {
            "w": "the",
            "t": 447.238
          },
          {
            "w": "stratified",
            "t": 447.627
          },
          {
            "w": "Neyman",
            "t": 448.016
          },
          {
            "w": "row:",
            "t": 448.404
          },
          {
            "w": "at",
            "t": 448.793
          },
          {
            "w": "nearly",
            "t": 449.182
          },
          {
            "w": "the",
            "t": 449.571
          },
          {
            "w": "exact",
            "t": 449.959
          },
          {
            "w": "same",
            "t": 450.348
          },
          {
            "w": "financial",
            "t": 450.737
          },
          {
            "w": "cost",
            "t": 451.126
          },
          {
            "w": "as",
            "t": 451.514
          },
          {
            "w": "simple",
            "t": 451.903
          },
          {
            "w": "random",
            "t": 452.292
          },
          {
            "w": "sampling,",
            "t": 452.68
          },
          {
            "w": "the",
            "t": 453.069
          },
          {
            "w": "standard",
            "t": 453.458
          },
          {
            "w": "error",
            "t": 453.847
          },
          {
            "w": "dropped",
            "t": 454.235
          },
          {
            "w": "from",
            "t": 454.624
          },
          {
            "w": "1.12%",
            "t": 455.013
          },
          {
            "w": "down",
            "t": 455.402
          },
          {
            "w": "to",
            "t": 455.79
          },
          {
            "w": "0.78%.",
            "t": 456.179
          },
          {
            "w": "In",
            "t": 456.568
          },
          {
            "w": "terms",
            "t": 456.956
          },
          {
            "w": "of",
            "t": 457.345
          },
          {
            "w": "variance,",
            "t": 457.734
          },
          {
            "w": "that",
            "t": 458.123
          },
          {
            "w": "is",
            "t": 458.511
          },
          {
            "w": "equivalent",
            "t": 458.9
          },
          {
            "w": "to",
            "t": 459.289
          },
          {
            "w": "doubling",
            "t": 459.678
          },
          {
            "w": "our",
            "t": 460.066
          },
          {
            "w": "sample",
            "t": 460.455
          },
          {
            "w": "size",
            "t": 460.844
          },
          {
            "w": "for",
            "t": 461.233
          },
          {
            "w": "free!",
            "t": 461.621
          }
        ]
      },
      {
        "slide": 14,
        "slideId": "s14",
        "speaker": "Kaito",
        "text": "And look at the cluster sampling row: yes, the standard error grew to 1.91%, but the cost plummeted from 180,000 dollars down to 45,000 dollars. Because field collection was seventy-five percent cheaper, the team could easily double the number of clusters to drive the error down, while still pocketing immense cost savings!",
        "start": 462.01,
        "end": 483.437,
        "words": [
          {
            "w": "And",
            "t": 462.01
          },
          {
            "w": "look",
            "t": 462.422
          },
          {
            "w": "at",
            "t": 462.834
          },
          {
            "w": "the",
            "t": 463.246
          },
          {
            "w": "cluster",
            "t": 463.658
          },
          {
            "w": "sampling",
            "t": 464.07
          },
          {
            "w": "row:",
            "t": 464.482
          },
          {
            "w": "yes,",
            "t": 464.894
          },
          {
            "w": "the",
            "t": 465.306
          },
          {
            "w": "standard",
            "t": 465.719
          },
          {
            "w": "error",
            "t": 466.131
          },
          {
            "w": "grew",
            "t": 466.543
          },
          {
            "w": "to",
            "t": 466.955
          },
          {
            "w": "1.91%,",
            "t": 467.367
          },
          {
            "w": "but",
            "t": 467.779
          },
          {
            "w": "the",
            "t": 468.191
          },
          {
            "w": "cost",
            "t": 468.603
          },
          {
            "w": "plummeted",
            "t": 469.015
          },
          {
            "w": "from",
            "t": 469.427
          },
          {
            "w": "180,000",
            "t": 469.839
          },
          {
            "w": "dollars",
            "t": 470.251
          },
          {
            "w": "down",
            "t": 470.663
          },
          {
            "w": "to",
            "t": 471.075
          },
          {
            "w": "45,000",
            "t": 471.487
          },
          {
            "w": "dollars.",
            "t": 471.899
          },
          {
            "w": "Because",
            "t": 472.311
          },
          {
            "w": "field",
            "t": 472.724
          },
          {
            "w": "collection",
            "t": 473.136
          },
          {
            "w": "was",
            "t": 473.548
          },
          {
            "w": "seventy-five",
            "t": 473.96
          },
          {
            "w": "percent",
            "t": 474.372
          },
          {
            "w": "cheaper,",
            "t": 474.784
          },
          {
            "w": "the",
            "t": 475.196
          },
          {
            "w": "team",
            "t": 475.608
          },
          {
            "w": "could",
            "t": 476.02
          },
          {
            "w": "easily",
            "t": 476.432
          },
          {
            "w": "double",
            "t": 476.844
          },
          {
            "w": "the",
            "t": 477.256
          },
          {
            "w": "number",
            "t": 477.668
          },
          {
            "w": "of",
            "t": 478.08
          },
          {
            "w": "clusters",
            "t": 478.492
          },
          {
            "w": "to",
            "t": 478.904
          },
          {
            "w": "drive",
            "t": 479.316
          },
          {
            "w": "the",
            "t": 479.728
          },
          {
            "w": "error",
            "t": 480.141
          },
          {
            "w": "down,",
            "t": 480.553
          },
          {
            "w": "while",
            "t": 480.965
          },
          {
            "w": "still",
            "t": 481.377
          },
          {
            "w": "pocketing",
            "t": 481.789
          },
          {
            "w": "immense",
            "t": 482.201
          },
          {
            "w": "cost",
            "t": 482.613
          },
          {
            "w": "savings!",
            "t": 483.025
          }
        ]
      },
      {
        "slide": 15,
        "slideId": "s15",
        "speaker": "Dr. Nova",
        "text": "Notice how simple and elegant the horvitz-underscore-thompson method is: with NumPy, we compute the inverse-probability weighted sum in a single vectorized call. This operates in microseconds even across large datasets.",
        "start": 483.437,
        "end": 497.92,
        "words": [
          {
            "w": "Notice",
            "t": 483.437
          },
          {
            "w": "how",
            "t": 483.92
          },
          {
            "w": "simple",
            "t": 484.403
          },
          {
            "w": "and",
            "t": 484.885
          },
          {
            "w": "elegant",
            "t": 485.368
          },
          {
            "w": "the",
            "t": 485.851
          },
          {
            "w": "horvitz-underscore-thompson",
            "t": 486.334
          },
          {
            "w": "method",
            "t": 486.816
          },
          {
            "w": "is:",
            "t": 487.299
          },
          {
            "w": "with",
            "t": 487.782
          },
          {
            "w": "NumPy,",
            "t": 488.265
          },
          {
            "w": "we",
            "t": 488.747
          },
          {
            "w": "compute",
            "t": 489.23
          },
          {
            "w": "the",
            "t": 489.713
          },
          {
            "w": "inverse-probability",
            "t": 490.196
          },
          {
            "w": "weighted",
            "t": 490.678
          },
          {
            "w": "sum",
            "t": 491.161
          },
          {
            "w": "in",
            "t": 491.644
          },
          {
            "w": "a",
            "t": 492.127
          },
          {
            "w": "single",
            "t": 492.61
          },
          {
            "w": "vectorized",
            "t": 493.092
          },
          {
            "w": "call.",
            "t": 493.575
          },
          {
            "w": "This",
            "t": 494.058
          },
          {
            "w": "operates",
            "t": 494.541
          },
          {
            "w": "in",
            "t": 495.023
          },
          {
            "w": "microseconds",
            "t": 495.506
          },
          {
            "w": "even",
            "t": 495.989
          },
          {
            "w": "across",
            "t": 496.472
          },
          {
            "w": "large",
            "t": 496.954
          },
          {
            "w": "datasets.",
            "t": 497.437
          }
        ]
      },
      {
        "slide": 15,
        "slideId": "s15",
        "speaker": "Kaito",
        "text": "And in the neyman-underscore-allocation method, notice that max(1, ...) guard! That ensures that even a very small stratum never receives zero samples, which preserves our non-zero inclusion probability invariant for all strata!",
        "start": 497.92,
        "end": 512.998,
        "words": [
          {
            "w": "And",
            "t": 497.92
          },
          {
            "w": "in",
            "t": 498.391
          },
          {
            "w": "the",
            "t": 498.862
          },
          {
            "w": "neyman-underscore-allocation",
            "t": 499.334
          },
          {
            "w": "method,",
            "t": 499.805
          },
          {
            "w": "notice",
            "t": 500.276
          },
          {
            "w": "that",
            "t": 500.747
          },
          {
            "w": "max(1,",
            "t": 501.218
          },
          {
            "w": "...)",
            "t": 501.69
          },
          {
            "w": "guard!",
            "t": 502.161
          },
          {
            "w": "That",
            "t": 502.632
          },
          {
            "w": "ensures",
            "t": 503.103
          },
          {
            "w": "that",
            "t": 503.574
          },
          {
            "w": "even",
            "t": 504.045
          },
          {
            "w": "a",
            "t": 504.517
          },
          {
            "w": "very",
            "t": 504.988
          },
          {
            "w": "small",
            "t": 505.459
          },
          {
            "w": "stratum",
            "t": 505.93
          },
          {
            "w": "never",
            "t": 506.401
          },
          {
            "w": "receives",
            "t": 506.873
          },
          {
            "w": "zero",
            "t": 507.344
          },
          {
            "w": "samples,",
            "t": 507.815
          },
          {
            "w": "which",
            "t": 508.286
          },
          {
            "w": "preserves",
            "t": 508.757
          },
          {
            "w": "our",
            "t": 509.229
          },
          {
            "w": "non-zero",
            "t": 509.7
          },
          {
            "w": "inclusion",
            "t": 510.171
          },
          {
            "w": "probability",
            "t": 510.642
          },
          {
            "w": "invariant",
            "t": 511.113
          },
          {
            "w": "for",
            "t": 511.584
          },
          {
            "w": "all",
            "t": 512.056
          },
          {
            "w": "strata!",
            "t": 512.527
          }
        ]
      },
      {
        "slide": 16,
        "slideId": "s16",
        "speaker": "Dr. Nova",
        "text": "What an insightful exploration of sampling theory! We have proven that probability sampling is the mathematical bedrock of empirical data science. When inclusion probabilities are strictly positive and known, Horvitz-Thompson estimation guarantees unbiased generalization.",
        "start": 512.998,
        "end": 530.986,
        "words": [
          {
            "w": "What",
            "t": 512.998
          },
          {
            "w": "an",
            "t": 513.527
          },
          {
            "w": "insightful",
            "t": 514.056
          },
          {
            "w": "exploration",
            "t": 514.585
          },
          {
            "w": "of",
            "t": 515.114
          },
          {
            "w": "sampling",
            "t": 515.643
          },
          {
            "w": "theory!",
            "t": 516.172
          },
          {
            "w": "We",
            "t": 516.701
          },
          {
            "w": "have",
            "t": 517.23
          },
          {
            "w": "proven",
            "t": 517.76
          },
          {
            "w": "that",
            "t": 518.289
          },
          {
            "w": "probability",
            "t": 518.818
          },
          {
            "w": "sampling",
            "t": 519.347
          },
          {
            "w": "is",
            "t": 519.876
          },
          {
            "w": "the",
            "t": 520.405
          },
          {
            "w": "mathematical",
            "t": 520.934
          },
          {
            "w": "bedrock",
            "t": 521.463
          },
          {
            "w": "of",
            "t": 521.992
          },
          {
            "w": "empirical",
            "t": 522.521
          },
          {
            "w": "data",
            "t": 523.05
          },
          {
            "w": "science.",
            "t": 523.579
          },
          {
            "w": "When",
            "t": 524.108
          },
          {
            "w": "inclusion",
            "t": 524.637
          },
          {
            "w": "probabilities",
            "t": 525.166
          },
          {
            "w": "are",
            "t": 525.695
          },
          {
            "w": "strictly",
            "t": 526.224
          },
          {
            "w": "positive",
            "t": 526.754
          },
          {
            "w": "and",
            "t": 527.283
          },
          {
            "w": "known,",
            "t": 527.812
          },
          {
            "w": "Horvitz-Thompson",
            "t": 528.341
          },
          {
            "w": "estimation",
            "t": 528.87
          },
          {
            "w": "guarantees",
            "t": 529.399
          },
          {
            "w": "unbiased",
            "t": 529.928
          },
          {
            "w": "generalization.",
            "t": 530.457
          }
        ]
      },
      {
        "slide": 16,
        "slideId": "s16",
        "speaker": "Kaito",
        "text": "And we mastered the two big tools of production design: Neyman allocation to crush estimation variance when subgroups are diverse, and Kish's design effect to honestly audit the cost of cluster sampling. In Lesson 2.7, we will take these foundations into modern machine learning with active sampling, importance sampling, and hard negative mining. See you there!",
        "start": 530.986,
        "end": 554.928,
        "words": [
          {
            "w": "And",
            "t": 530.986
          },
          {
            "w": "we",
            "t": 531.414
          },
          {
            "w": "mastered",
            "t": 531.841
          },
          {
            "w": "the",
            "t": 532.269
          },
          {
            "w": "two",
            "t": 532.696
          },
          {
            "w": "big",
            "t": 533.124
          },
          {
            "w": "tools",
            "t": 533.551
          },
          {
            "w": "of",
            "t": 533.979
          },
          {
            "w": "production",
            "t": 534.406
          },
          {
            "w": "design:",
            "t": 534.834
          },
          {
            "w": "Neyman",
            "t": 535.261
          },
          {
            "w": "allocation",
            "t": 535.689
          },
          {
            "w": "to",
            "t": 536.116
          },
          {
            "w": "crush",
            "t": 536.544
          },
          {
            "w": "estimation",
            "t": 536.971
          },
          {
            "w": "variance",
            "t": 537.399
          },
          {
            "w": "when",
            "t": 537.827
          },
          {
            "w": "subgroups",
            "t": 538.254
          },
          {
            "w": "are",
            "t": 538.682
          },
          {
            "w": "diverse,",
            "t": 539.109
          },
          {
            "w": "and",
            "t": 539.537
          },
          {
            "w": "Kish's",
            "t": 539.964
          },
          {
            "w": "design",
            "t": 540.392
          },
          {
            "w": "effect",
            "t": 540.819
          },
          {
            "w": "to",
            "t": 541.247
          },
          {
            "w": "honestly",
            "t": 541.674
          },
          {
            "w": "audit",
            "t": 542.102
          },
          {
            "w": "the",
            "t": 542.529
          },
          {
            "w": "cost",
            "t": 542.957
          },
          {
            "w": "of",
            "t": 543.385
          },
          {
            "w": "cluster",
            "t": 543.812
          },
          {
            "w": "sampling.",
            "t": 544.24
          },
          {
            "w": "In",
            "t": 544.667
          },
          {
            "w": "Lesson",
            "t": 545.095
          },
          {
            "w": "2.7,",
            "t": 545.522
          },
          {
            "w": "we",
            "t": 545.95
          },
          {
            "w": "will",
            "t": 546.377
          },
          {
            "w": "take",
            "t": 546.805
          },
          {
            "w": "these",
            "t": 547.232
          },
          {
            "w": "foundations",
            "t": 547.66
          },
          {
            "w": "into",
            "t": 548.087
          },
          {
            "w": "modern",
            "t": 548.515
          },
          {
            "w": "machine",
            "t": 548.942
          },
          {
            "w": "learning",
            "t": 549.37
          },
          {
            "w": "with",
            "t": 549.798
          },
          {
            "w": "active",
            "t": 550.225
          },
          {
            "w": "sampling,",
            "t": 550.653
          },
          {
            "w": "importance",
            "t": 551.08
          },
          {
            "w": "sampling,",
            "t": 551.508
          },
          {
            "w": "and",
            "t": 551.935
          },
          {
            "w": "hard",
            "t": 552.363
          },
          {
            "w": "negative",
            "t": 552.79
          },
          {
            "w": "mining.",
            "t": 553.218
          },
          {
            "w": "See",
            "t": 553.645
          },
          {
            "w": "you",
            "t": 554.073
          },
          {
            "w": "there!",
            "t": 554.5
          }
        ]
      }
    ]
  }
};
