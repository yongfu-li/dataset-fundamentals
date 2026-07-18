#!/usr/bin/env python3
"""Generate scenario trees for Ethical decision tree tool."""
from __future__ import annotations

import json
from pathlib import Path

OUT = Path(__file__).resolve().parent / "scenarios-bundle.js"


def marketing_partners() -> dict:
    return {
        "id": "marketing-partners",
        "title": "Marketing list for 'partners'",
        "summary": "A product team wants to share customer emails with advertising partners.",
        "context": (
            "Your company collected emails at signup 'to send product updates.' "
            "Growth now asks to share the list with advertising partners for lookalike audiences. "
            "No names of partners were in the original notice."
        ),
        "bookAnchors": ["§3.9", "sec:3.9"],
        "teachingFocus": "purpose-consent",
        "start": "purpose",
        "nodes": {
            "purpose": {
                "type": "question",
                "prompt": "Is partner advertising within the purpose subjects were told?",
                "hint": "Purpose limitation: new uses need a fresh, specific basis.",
                "choices": [
                    {
                        "id": "purpose-yes",
                        "label": "Yes — 'product updates' covers partners",
                        "next": "outcome-stop-purpose",
                    },
                    {
                        "id": "purpose-no",
                        "label": "No — partners were not disclosed",
                        "next": "consent",
                    },
                ],
            },
            "consent": {
                "type": "question",
                "prompt": "Can you get a clear, opt-in consent for partner sharing before any transfer?",
                "hint": "Autonomy and informed consent beat buried terms.",
                "choices": [
                    {
                        "id": "consent-yes",
                        "label": "Yes — re-consent with named partners and an easy opt-out",
                        "next": "harm",
                    },
                    {
                        "id": "consent-dark",
                        "label": "Pre-checked box in updated Terms is enough",
                        "next": "outcome-revise-consent",
                    },
                    {
                        "id": "consent-no",
                        "label": "No realistic path to re-consent",
                        "next": "outcome-stop-consent",
                    },
                ],
            },
            "harm": {
                "type": "question",
                "prompt": "Could sharing create meaningful harm (spam, profiling, discrimination) for some customers?",
                "hint": "Non-maleficence and justice ask who bears the downside.",
                "choices": [
                    {
                        "id": "harm-low",
                        "label": "Low residual risk after minimization and contracts",
                        "next": "outcome-proceed",
                    },
                    {
                        "id": "harm-high",
                        "label": "High or uneven risk we cannot mitigate well",
                        "next": "outcome-stop-harm",
                    },
                    {
                        "id": "harm-unknown",
                        "label": "We have not assessed who is harmed",
                        "next": "outcome-revise-impact",
                    },
                ],
            },
            "outcome-stop-purpose": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — purpose creep",
                "rationale": (
                    "Treating partner ads as 'product updates' stretches the original purpose. "
                    "Proceeding without a new lawful/ethical basis fails purpose limitation."
                ),
                "lenses": ["rights-based", "accountability"],
                "nextSteps": [
                    "Rewrite the collection notice for new signups",
                    "Do not transfer the existing list for partner ads",
                ],
            },
            "outcome-revise-consent": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — consent must be informed and freely given",
                "rationale": (
                    "Pre-checked boxes and buried Terms changes are weak autonomy. "
                    "Design an affirmative opt-in that names partners and uses."
                ),
                "lenses": ["autonomy", "transparency"],
                "nextSteps": [
                    "Send a clear re-consent campaign",
                    "Default to no share until opt-in",
                ],
            },
            "outcome-stop-consent": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — no valid consent path",
                "rationale": (
                    "Without a workable re-consent path, partner sharing on this list is not ethically justified."
                ),
                "lenses": ["rights-based", "non-maleficence"],
                "nextSteps": [
                    "Build a new opt-in cohort going forward",
                    "Document the decision not to transfer legacy emails",
                ],
            },
            "outcome-revise-impact": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — finish an impact check first",
                "rationale": (
                    "Utilitarian and justice lenses need evidence about who benefits and who is burdened. "
                    "Pause transfers until a short impact review exists."
                ),
                "lenses": ["utilitarian", "justice"],
                "nextSteps": [
                    "Map stakeholder groups and residual risks",
                    "Return to this tree after the review",
                ],
            },
            "outcome-stop-harm": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — harm outweighs benefit",
                "rationale": (
                    "If residual harm is high or uneven and mitigations are weak, non-maleficence "
                    "and justice support refusing the share."
                ),
                "lenses": ["non-maleficence", "justice"],
                "nextSteps": [
                    "Propose less identifying alternatives (aggregated cohorts)",
                    "Escalate to ethics / privacy review",
                ],
            },
            "outcome-proceed": {
                "type": "outcome",
                "verdict": "proceed",
                "title": "Proceed with safeguards",
                "rationale": (
                    "Purpose is fixed via re-consent, residual harm is low after minimization, "
                    "and contracts limit downstream use. Still keep an audit trail."
                ),
                "lenses": ["utilitarian", "accountability"],
                "nextSteps": [
                    "Minimize fields shared (email hash if possible)",
                    "Log purpose, consent evidence, and retention",
                    "Revisit if partners or uses change",
                ],
            },
        },
    }


def hiring_score() -> dict:
    return {
        "id": "hiring-score",
        "title": "Automated hiring screen",
        "summary": "HR wants a model that ranks applicants using résumé text and a third-party 'risk' score.",
        "context": (
            "A vendor sells a 'workforce reliability' score built from public web and court-adjacent data. "
            "HR proposes using it to auto-reject the bottom 30% of applicants before human review."
        ),
        "bookAnchors": ["§3.9", "sec:3.9", "eg:3.33"],
        "teachingFocus": "fairness-harm",
        "start": "stakeholder",
        "nodes": {
            "stakeholder": {
                "type": "question",
                "prompt": "Have affected people (candidates, recruiters, legal) been involved before launch?",
                "hint": "Virtue and justice stress who sits at the table.",
                "choices": [
                    {
                        "id": "stake-yes",
                        "label": "Yes — review with HR, legal, and candidate advocates",
                        "next": "explain",
                    },
                    {
                        "id": "stake-no",
                        "label": "No — vendor demo only",
                        "next": "outcome-revise-stake",
                    },
                ],
            },
            "explain": {
                "type": "question",
                "prompt": "Can you explain to a rejected candidate what drove the score in plain language?",
                "hint": "Transparency and accountability.",
                "choices": [
                    {
                        "id": "explain-yes",
                        "label": "Yes — features and thresholds are documentable",
                        "next": "bias",
                    },
                    {
                        "id": "explain-no",
                        "label": "No — vendor treats the score as a black box",
                        "next": "outcome-stop-blackbox",
                    },
                ],
            },
            "bias": {
                "type": "question",
                "prompt": "Have you checked whether auto-rejects fall unevenly across protected or vulnerable groups?",
                "hint": "Fairness / justice lens; links to Chapter 7 metrics later.",
                "choices": [
                    {
                        "id": "bias-ok",
                        "label": "Checked — gaps within agreed tolerance; human review remains",
                        "next": "outcome-proceed-hire",
                    },
                    {
                        "id": "bias-bad",
                        "label": "Large gaps or no measurement yet",
                        "next": "outcome-stop-bias",
                    },
                    {
                        "id": "bias-human",
                        "label": "Use as advisory flag only — never auto-reject",
                        "next": "outcome-revise-advisory",
                    },
                ],
            },
            "outcome-revise-stake": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — bring stakeholders in first",
                "rationale": (
                    "Launching a high-stakes screen from a vendor demo alone skips accountability "
                    "and justice. Pause for a structured review."
                ),
                "lenses": ["virtue", "justice"],
                "nextSteps": [
                    "Schedule a cross-functional review",
                    "Document who can override the score",
                ],
            },
            "outcome-stop-blackbox": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — unexplained high-stakes decisions",
                "rationale": (
                    "Rights-based and accountability lenses reject opaque auto-rejection that "
                    "candidates cannot contest."
                ),
                "lenses": ["rights-based", "transparency"],
                "nextSteps": [
                    "Require explainability from the vendor",
                    "Do not auto-reject until contestability exists",
                ],
            },
            "outcome-stop-bias": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — unfair impact unaddressed",
                "rationale": (
                    "Deploying auto-reject with large unmeasured or unmitigated group gaps "
                    "fails fairness and non-maleficence."
                ),
                "lenses": ["justice", "non-maleficence"],
                "nextSteps": [
                    "Run a bias audit before any automation",
                    "Consider the fairness meter tools in Chapter 7",
                ],
            },
            "outcome-revise-advisory": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — advisory use only",
                "rationale": (
                    "Keeping a human in the loop reduces autonomy harms while you learn "
                    "whether the score adds value."
                ),
                "lenses": ["virtue", "utilitarian"],
                "nextSteps": [
                    "Show score as a flag, not a gate",
                    "Log overrides and re-evaluate quarterly",
                ],
            },
            "outcome-proceed-hire": {
                "type": "outcome",
                "verdict": "proceed",
                "title": "Proceed with narrow automation",
                "rationale": (
                    "Stakeholders were consulted, explanations exist, measured gaps are within "
                    "tolerance, and humans remain in the loop for edge cases."
                ),
                "lenses": ["utilitarian", "accountability"],
                "nextSteps": [
                    "Publish a candidate-facing explanation",
                    "Monitor group outcomes and complaint rates",
                    "Keep a kill switch for the auto-reject rule",
                ],
            },
        },
    }


def health_secondary() -> dict:
    return {
        "id": "health-secondary",
        "title": "Health-app secondary research",
        "summary": "A wellness app wants to reuse wearable data for a university research partnership.",
        "context": (
            "Users consented to 'improve the app and personalize tips.' Research affairs proposes "
            "sharing de-identified step and heart-rate streams with a university lab."
        ),
        "bookAnchors": ["§3.9", "sec:3.9"],
        "teachingFocus": "secondary-use",
        "start": "sensitive",
        "nodes": {
            "sensitive": {
                "type": "question",
                "prompt": "Is this data sensitive enough that secondary research needs a fresh ethical review?",
                "hint": "Health-adjacent data often does — even when 'de-identified.'",
                "choices": [
                    {
                        "id": "sens-yes",
                        "label": "Yes — treat as sensitive / special-category adjacent",
                        "next": "deid",
                    },
                    {
                        "id": "sens-no",
                        "label": "No — steps are not really health data",
                        "next": "outcome-revise-sensitive",
                    },
                ],
            },
            "deid": {
                "type": "question",
                "prompt": "Have you checked re-identification risk (quasi-identifiers), not only stripped names?",
                "hint": "Pairs with the de-identification risk checker.",
                "choices": [
                    {
                        "id": "deid-yes",
                        "label": "Yes — k-anonymity / QI review done; residual risk documented",
                        "next": "benefit",
                    },
                    {
                        "id": "deid-no",
                        "label": "We only removed names and emails",
                        "next": "outcome-revise-deid",
                    },
                ],
            },
            "benefit": {
                "type": "question",
                "prompt": "Do expected research benefits and user expectations justify the residual risk?",
                "hint": "Utilitarian vs rights-based trade-off with transparency.",
                "choices": [
                    {
                        "id": "ben-yes",
                        "label": "Yes — with IRB/ethics sign-off and clear user notice",
                        "next": "outcome-proceed-health",
                    },
                    {
                        "id": "ben-optin",
                        "label": "Only if users opt in to research separately",
                        "next": "outcome-revise-optin",
                    },
                    {
                        "id": "ben-no",
                        "label": "Benefits are speculative; users would be surprised",
                        "next": "outcome-stop-health",
                    },
                ],
            },
            "outcome-revise-sensitive": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — do not downplay sensitivity",
                "rationale": (
                    "Wearable physiology often warrants health-grade caution. Reclassify the data "
                    "and restart the review."
                ),
                "lenses": ["non-maleficence", "rights-based"],
                "nextSteps": [
                    "Consult privacy / clinical advisors",
                    "Return to the sensitivity question with that framing",
                ],
            },
            "outcome-revise-deid": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — check quasi-identifiers",
                "rationale": (
                    "Name removal alone is not anonymization. Run a k-anonymity-style check "
                    "before any external share."
                ),
                "lenses": ["accountability", "non-maleficence"],
                "nextSteps": [
                    "Use the De-identification risk checker",
                    "Document residual risk before partnering",
                ],
            },
            "outcome-revise-optin": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — separate research consent",
                "rationale": (
                    "Autonomy is stronger when research is an explicit choice, not buried under "
                    "'improve the app.'"
                ),
                "lenses": ["autonomy", "transparency"],
                "nextSteps": [
                    "Add a research opt-in",
                    "Share only the opted-in cohort",
                ],
            },
            "outcome-stop-health": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — surprise secondary use",
                "rationale": (
                    "If users would reasonably be surprised and benefits are weak, rights-based "
                    "and virtue lenses support refusing the share."
                ),
                "lenses": ["rights-based", "virtue"],
                "nextSteps": [
                    "Keep data internal to product improvement",
                    "Revisit only with a redesigned consent and stronger public benefit case",
                ],
            },
            "outcome-proceed-health": {
                "type": "outcome",
                "verdict": "proceed",
                "title": "Proceed under review",
                "rationale": (
                    "Sensitivity acknowledged, re-identification reviewed, ethics sign-off and "
                    "user notice in place — proceed with monitoring."
                ),
                "lenses": ["utilitarian", "accountability"],
                "nextSteps": [
                    "Execute a data-use agreement with the lab",
                    "Set retention and destruction dates",
                    "Publish a short transparency note for users",
                ],
            },
        },
    }


def justice_risk_score() -> dict:
    """Criminal-justice style scoring — mirrors chapter justice dilemmas."""
    return {
        "id": "justice-risk-score",
        "title": "Pretrial risk score",
        "summary": "A court pilot wants a vendor model that scores 'flight risk' from arrest history and ZIP.",
        "context": (
            "A county pilot proposes using a commercial 'flight risk' score built from prior arrests, "
            "age, and home ZIP to recommend detention vs release. Defense counsel was not in the design room. "
            "Historical arrest data over-represents some neighborhoods."
        ),
        "bookAnchors": ["§3.9", "sec:3.9", "eg:3.33", "eg:3.34"],
        "teachingFocus": "justice-fairness",
        "start": "stakes",
        "nodes": {
            "stakes": {
                "type": "question",
                "prompt": "Does this decision affect liberty in a high-stakes way?",
                "hint": "If yes, rights-based and justice lenses raise the bar for evidence and oversight.",
                "choices": [
                    {
                        "id": "stakes-high",
                        "label": "Yes — detention recommendations affect liberty",
                        "next": "contest",
                    },
                    {
                        "id": "stakes-low",
                        "label": "No — it is only a soft suggestion judges can ignore",
                        "next": "outcome-revise-stakes",
                    },
                ],
            },
            "contest": {
                "type": "question",
                "prompt": "Can the accused see and contest the factors that drove the score?",
                "hint": "Accountability and due process.",
                "choices": [
                    {
                        "id": "contest-yes",
                        "label": "Yes — factors disclosed; human hearing required",
                        "next": "hist-bias",
                    },
                    {
                        "id": "contest-no",
                        "label": "No — proprietary black box; score shown as a number",
                        "next": "outcome-stop-contest",
                    },
                ],
            },
            "hist-bias": {
                "type": "question",
                "prompt": "Have you checked whether the score inherits geographic or group skew from arrest history?",
                "hint": "Justice asks who is burdened when the training data already encodes unequal policing.",
                "choices": [
                    {
                        "id": "bias-mitigated",
                        "label": "Audited; gaps mitigated; overrides logged",
                        "next": "outcome-proceed-justice",
                    },
                    {
                        "id": "bias-unknown",
                        "label": "Not measured — vendor says the model is 'neutral'",
                        "next": "outcome-stop-bias-j",
                    },
                    {
                        "id": "bias-pilot",
                        "label": "Run a shadow pilot only — never bind detention yet",
                        "next": "outcome-revise-pilot",
                    },
                ],
            },
            "outcome-revise-stakes": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — do not downplay liberty stakes",
                "rationale": (
                    "Even 'advisory' scores shape decisions under time pressure. Treat the pilot as "
                    "high-stakes until independent review says otherwise."
                ),
                "lenses": ["rights-based", "virtue"],
                "nextSteps": [
                    "Reclassify as a liberty-affecting system",
                    "Invite defense and community stakeholders before any UI ships",
                ],
            },
            "outcome-stop-contest": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — no meaningful contestability",
                "rationale": (
                    "A proprietary number that cannot be challenged fails rights-based and "
                    "accountability tests for detention recommendations."
                ),
                "lenses": ["rights-based", "accountability"],
                "nextSteps": [
                    "Require factor-level disclosure",
                    "Do not display the score in court until contestability exists",
                ],
            },
            "outcome-stop-bias-j": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — unexamined historical skew",
                "rationale": (
                    "Arrest history is not a neutral mirror of risk. Deploying without an audit "
                    "risks laundering unequal enforcement into 'objective' scores."
                ),
                "lenses": ["justice", "non-maleficence"],
                "nextSteps": [
                    "Commission an independent bias and calibration audit",
                    "Compare outcomes across ZIP and demographic slices",
                ],
            },
            "outcome-revise-pilot": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — shadow mode only",
                "rationale": (
                    "A non-binding shadow pilot can generate evidence without changing liberty "
                    "outcomes until fairness and contestability are proven."
                ),
                "lenses": ["utilitarian", "justice"],
                "nextSteps": [
                    "Log score vs human decisions without showing the score to judges yet",
                    "Publish evaluation criteria before any binding use",
                ],
            },
            "outcome-proceed-justice": {
                "type": "outcome",
                "verdict": "proceed",
                "title": "Proceed with strict safeguards",
                "rationale": (
                    "High stakes acknowledged, contestability exists, skew audited and mitigated, "
                    "and overrides are logged — proceed only with continuous monitoring."
                ),
                "lenses": ["accountability", "justice"],
                "nextSteps": [
                    "Mandate human hearing before detention recommendations finalize",
                    "Public reporting of override rates and group outcomes",
                    "Hard sunset date unless re-authorized",
                ],
            },
        },
    }


def campus_cameras() -> dict:
    """Surveillance / facial analysis at campus scale."""
    return {
        "id": "campus-cameras",
        "title": "Campus facial analysis",
        "summary": "Facilities wants live facial matching on dorm and library cameras 'for safety.'",
        "context": (
            "After a few theft reports, facilities proposes turning existing cameras into a live "
            "facial-matching system against student ID photos. Marketing later asks whether the "
            "same feed can measure 'foot traffic demographics' for vendors."
        ),
        "bookAnchors": ["§3.9", "§3.10", "eg:3.35"],
        "teachingFocus": "surveillance-scale",
        "start": "necessity",
        "nodes": {
            "necessity": {
                "type": "question",
                "prompt": "Have less intrusive options (better lighting, access logs, targeted investigation) been tried first?",
                "hint": "Necessity and proportionality before biometric surveillance.",
                "choices": [
                    {
                        "id": "nec-yes",
                        "label": "Yes — documented why those failed for specific risks",
                        "next": "scope",
                    },
                    {
                        "id": "nec-no",
                        "label": "No — cameras already exist, so matching is 'free'",
                        "next": "outcome-stop-nec",
                    },
                ],
            },
            "scope": {
                "type": "question",
                "prompt": "Is the system limited to narrow safety alerts, or also open to marketing analytics?",
                "hint": "Purpose creep turns safety tools into general surveillance.",
                "choices": [
                    {
                        "id": "scope-narrow",
                        "label": "Safety alerts only — written ban on marketing reuse",
                        "next": "notice",
                    },
                    {
                        "id": "scope-wide",
                        "label": "Safety now; demographics later if useful",
                        "next": "outcome-stop-scope",
                    },
                ],
            },
            "notice": {
                "type": "question",
                "prompt": "Will students and staff get clear notice, retention limits, and a path to challenge false matches?",
                "hint": "Transparency and autonomy at population scale.",
                "choices": [
                    {
                        "id": "notice-yes",
                        "label": "Yes — notice, short retention, human review of matches",
                        "next": "outcome-proceed-campus",
                    },
                    {
                        "id": "notice-weak",
                        "label": "A line in the housing contract is enough",
                        "next": "outcome-revise-notice",
                    },
                ],
            },
            "outcome-stop-nec": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — biometrics without necessity",
                "rationale": (
                    "'Cameras already exist' is not a justification for face matching. "
                    "Rights-based and non-maleficence lenses require necessity first."
                ),
                "lenses": ["rights-based", "non-maleficence"],
                "nextSteps": [
                    "Pilot non-biometric controls",
                    "Reopen only with a written necessity case",
                ],
            },
            "outcome-stop-scope": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — purpose creep into analytics",
                "rationale": (
                    "Leaving the door open to marketing demographics converts a safety claim "
                    "into population surveillance without a matching ethical basis."
                ),
                "lenses": ["purpose-limitation", "justice"],
                "nextSteps": [
                    "Separate safety and analytics proposals",
                    "Reject dual-use without independent review",
                ],
            },
            "outcome-revise-notice": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — meaningful notice and contestability",
                "rationale": (
                    "Buried contract language is weak autonomy. People need to know they are "
                    "biometrically matched and how to challenge errors."
                ),
                "lenses": ["autonomy", "transparency"],
                "nextSteps": [
                    "Publish a plain-language biometric notice",
                    "Require human confirmation before any disciplinary use",
                ],
            },
            "outcome-proceed-campus": {
                "type": "outcome",
                "verdict": "proceed",
                "title": "Proceed with narrow biometric use",
                "rationale": (
                    "Necessity documented, marketing reuse banned, notice and short retention "
                    "in place, humans review matches — proceed with audit logging."
                ),
                "lenses": ["utilitarian", "accountability"],
                "nextSteps": [
                    "Independent accuracy audit across phenotype groups",
                    "Retention measured in days, not years",
                    "Annual renewal vote with student representation",
                ],
            },
        },
    }


def scraped_social() -> dict:
    """Public web scrape for a research/ML dataset."""
    return {
        "id": "scraped-social",
        "title": "Scraped social posts dataset",
        "summary": "A lab wants to scrape public posts to train a toxicity classifier and release the data.",
        "context": (
            "Researchers plan to scrape millions of public social posts, label toxicity with "
            "crowdworkers, and publish the dataset. Posts include usernames and sometimes "
            "photos of minors in the background. The platform ToS discourages bulk scraping."
        ),
        "bookAnchors": ["§3.9", "sec:3.9"],
        "teachingFocus": "public-data-myth",
        "start": "public",
        "nodes": {
            "public": {
                "type": "question",
                "prompt": "Does 'publicly visible' mean ethically free to collect, label, and redistribute?",
                "hint": "Public access ≠ consent for research packaging or model training.",
                "choices": [
                    {
                        "id": "public-yes",
                        "label": "Yes — if it is public, research use is fine",
                        "next": "outcome-stop-public",
                    },
                    {
                        "id": "public-no",
                        "label": "No — still need purpose, minimization, and subject respect",
                        "next": "minors",
                    },
                ],
            },
            "minors": {
                "type": "question",
                "prompt": "Can you reliably exclude content that depicts or is authored by minors?",
                "hint": "Non-maleficence and special protection for children.",
                "choices": [
                    {
                        "id": "minors-yes",
                        "label": "Yes — filters plus manual audit before release",
                        "next": "release",
                    },
                    {
                        "id": "minors-no",
                        "label": "No reliable filter at this scale",
                        "next": "outcome-stop-minors",
                    },
                ],
            },
            "release": {
                "type": "question",
                "prompt": "Will the released dataset keep usernames and raw text that enable harassment or re-identification?",
                "hint": "Publishing can amplify harm beyond the original post context.",
                "choices": [
                    {
                        "id": "release-min",
                        "label": "Minimize — hash IDs, strip handles, gate raw text",
                        "next": "workers",
                    },
                    {
                        "id": "release-raw",
                        "label": "Release raw posts and handles for 'reproducibility'",
                        "next": "outcome-revise-release",
                    },
                ],
            },
            "workers": {
                "type": "question",
                "prompt": "Are crowdworkers paid fairly and protected from prolonged exposure to toxic content?",
                "hint": "Virtue and justice extend to annotators, not only end users.",
                "choices": [
                    {
                        "id": "workers-yes",
                        "label": "Yes — fair pay, rotation, counseling resources",
                        "next": "outcome-proceed-scrape",
                    },
                    {
                        "id": "workers-no",
                        "label": "Lowest bidder; no wellness plan",
                        "next": "outcome-revise-workers",
                    },
                ],
            },
            "outcome-stop-public": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — public ≠ unbound permission",
                "rationale": (
                    "Visibility on a platform does not equal consent to bulk collection, "
                    "toxicity labeling, and redistribution. Rights-based reasoning rejects that leap."
                ),
                "lenses": ["rights-based", "autonomy"],
                "nextSteps": [
                    "Redesign with a clearer lawful/ethical basis",
                    "Prefer platform APIs and permitted research programs where available",
                ],
            },
            "outcome-stop-minors": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — child-safety controls insufficient",
                "rationale": (
                    "If minors cannot be reliably excluded, non-maleficence supports not building "
                    "or releasing the corpus at this scale."
                ),
                "lenses": ["non-maleficence", "justice"],
                "nextSteps": [
                    "Narrow to adult-only sources with age gates",
                    "Document exclusion methods before any scrape",
                ],
            },
            "outcome-revise-release": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — minimize what you publish",
                "rationale": (
                    "Reproducibility does not require dumping handles and raw posts. "
                    "Accountability can use gated access and hashed identifiers."
                ),
                "lenses": ["non-maleficence", "accountability"],
                "nextSteps": [
                    "Strip or hash identifiers",
                    "Use a controlled-access release for sensitive text",
                ],
            },
            "outcome-revise-workers": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — annotator welfare first",
                "rationale": (
                    "Cheap labeling that harms workers fails virtue and justice even if the "
                    "downstream model looks useful."
                ),
                "lenses": ["virtue", "justice"],
                "nextSteps": [
                    "Budget fair pay and wellness supports",
                    "Limit daily exposure to toxic items",
                ],
            },
            "outcome-proceed-scrape": {
                "type": "outcome",
                "verdict": "proceed",
                "title": "Proceed with constrained collection",
                "rationale": (
                    "Public-data myth rejected, minors controlled, release minimized, workers "
                    "protected — proceed with documented limits and review."
                ),
                "lenses": ["utilitarian", "accountability"],
                "nextSteps": [
                    "Publish a datasheet describing consent limits and risks",
                    "Honor deletion/takedown requests where feasible",
                    "Re-check ToS and institutional review before scaling",
                ],
            },
        },
    }


def retention_delete() -> dict:
    """User deletion request vs 'we need the data for ML.'"""
    return {
        "id": "retention-delete",
        "title": "Deletion request vs model training",
        "summary": "A user demands deletion, but the ML team says the rows are already in training sets.",
        "context": (
            "A user exercises a deletion right on their account and uploaded photos. Engineering "
            "can wipe the production database, but last quarter’s training export still contains "
            "their images, and a fine-tuned model may have memorized them."
        ),
        "bookAnchors": ["§3.9", "sec:3.9"],
        "teachingFocus": "retention-rights",
        "start": "scope",
        "nodes": {
            "scope": {
                "type": "question",
                "prompt": "Does 'delete my data' ethically cover backups, training exports, and derived models—not only the live DB?",
                "hint": "Rights-based answers usually say yes where feasible.",
                "choices": [
                    {
                        "id": "scope-full",
                        "label": "Yes — map every store and derived artifact",
                        "next": "feasible",
                    },
                    {
                        "id": "scope-live",
                        "label": "No — production DB wipe is enough",
                        "next": "outcome-revise-scope",
                    },
                ],
            },
            "feasible": {
                "type": "question",
                "prompt": "Can you remove or isolate the user’s rows from training exports within a reasonable time?",
                "hint": "Feasibility affects timeline, not whether the right matters.",
                "choices": [
                    {
                        "id": "feas-yes",
                        "label": "Yes — purge exports and queue model retrain / unlearning",
                        "next": "comms",
                    },
                    {
                        "id": "feas-hard",
                        "label": "Hard — model already shipped; full unlearning is costly",
                        "next": "comms-hard",
                    },
                ],
            },
            "comms": {
                "type": "question",
                "prompt": "Will you tell the user what was deleted, what remains temporarily, and when the rest will be gone?",
                "hint": "Transparency builds trust when process takes time.",
                "choices": [
                    {
                        "id": "comms-yes",
                        "label": "Yes — clear timeline and contact channel",
                        "next": "outcome-proceed-delete",
                    },
                    {
                        "id": "comms-no",
                        "label": "Auto-reply 'deleted' without details",
                        "next": "outcome-revise-comms",
                    },
                ],
            },
            "comms-hard": {
                "type": "question",
                "prompt": "If full model unlearning is delayed, do you still quarantine training copies and stop further fine-tuning on that user?",
                "hint": "Non-maleficence: stop ongoing use even when history is sticky.",
                "choices": [
                    {
                        "id": "hard-yes",
                        "label": "Yes — freeze use; document residual model risk; schedule retrain",
                        "next": "outcome-revise-residual",
                    },
                    {
                        "id": "hard-no",
                        "label": "Keep using the model unchanged; too expensive to retrain",
                        "next": "outcome-stop-ignore",
                    },
                ],
            },
            "outcome-revise-scope": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — deletion is not only the live DB",
                "rationale": (
                    "Leaving training exports untouched after a deletion request fails "
                    "rights-based and accountability expectations."
                ),
                "lenses": ["rights-based", "accountability"],
                "nextSteps": [
                    "Inventory backups, lakes, and training snapshots",
                    "Define deletion SLAs across stores",
                ],
            },
            "outcome-revise-comms": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — honest status beats a blank 'done'",
                "rationale": (
                    "Claiming deletion while artifacts remain misleads the user. Transparency "
                    "requires stating residual copies and timelines."
                ),
                "lenses": ["transparency", "virtue"],
                "nextSteps": [
                    "Template a multi-stage deletion notice",
                    "Track ticket until training artifacts are cleared",
                ],
            },
            "outcome-revise-residual": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — contain residual model risk",
                "rationale": (
                    "When unlearning lags, ethics still requires stopping new training on the "
                    "user and documenting residual memorization risk."
                ),
                "lenses": ["non-maleficence", "accountability"],
                "nextSteps": [
                    "Quarantine affected exports",
                    "Schedule retrain or documented unlearning",
                    "Tell the user what remains and until when",
                ],
            },
            "outcome-stop-ignore": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — ignoring deletion for convenience",
                "rationale": (
                    "Cost alone does not erase the obligation. Continuing unchanged use after a "
                    "valid deletion request fails autonomy and non-maleficence."
                ),
                "lenses": ["rights-based", "non-maleficence"],
                "nextSteps": [
                    "Escalate to privacy leadership",
                    "Do not claim compliance until a real plan exists",
                ],
            },
            "outcome-proceed-delete": {
                "type": "outcome",
                "verdict": "proceed",
                "title": "Proceed with full-lifecycle deletion",
                "rationale": (
                    "Scope covers derived artifacts, purge is feasible, and communication is "
                    "honest — proceed and verify completion."
                ),
                "lenses": ["rights-based", "accountability"],
                "nextSteps": [
                    "Execute purge checklist including training exports",
                    "Retrain or unlearn on schedule",
                    "Close the ticket only after verification",
                ],
            },
        },
    }


def smart_speaker() -> dict:
    return {
        "id": "smart-speaker",
        "title": "Smart speaker always-listening mode",
        "summary": "Product wants longer audio buffers 'to improve wake-word accuracy,' including snippets sent to the cloud.",
        "context": (
            "A smart speaker already streams audio after the wake word. Engineering proposes keeping "
            "a rolling 10-second pre-roll buffer and uploading random clips for model training—even "
            "when the wake word was not detected. Nighttime audio may capture private conversations."
        ),
        "bookAnchors": ["§3.9", "sec:3.9"],
        "teachingFocus": "iot-sensing",
        "start": "expect",
        "nodes": {
            "expect": {
                "type": "question",
                "prompt": "Would a reasonable user expect continuous pre-roll upload without an explicit opt-in?",
                "hint": "Autonomy and transparency for ambient sensing.",
                "choices": [
                    {
                        "id": "expect-no",
                        "label": "No — that exceeds the wake-word bargain",
                        "next": "optin",
                    },
                    {
                        "id": "expect-yes",
                        "label": "Yes — improving the product implies collecting more audio",
                        "next": "outcome-stop-expect",
                    },
                ],
            },
            "optin": {
                "type": "question",
                "prompt": "Can improvement clips be limited to users who opt in, with a mute LED and short retention?",
                "hint": "Minimization and clear signals of recording.",
                "choices": [
                    {
                        "id": "optin-yes",
                        "label": "Yes — opt-in only, visible indicator, days-not-years retention",
                        "next": "sensitive",
                    },
                    {
                        "id": "optin-force",
                        "label": "No — default on for everyone or the feature fails",
                        "next": "outcome-stop-force",
                    },
                ],
            },
            "sensitive": {
                "type": "question",
                "prompt": "Will you filter or exclude likely sensitive contexts (bedrooms at night, medical talk) before training use?",
                "hint": "Non-maleficence for intimate spaces.",
                "choices": [
                    {
                        "id": "sens-filter",
                        "label": "Yes — time/place filters plus human review sample",
                        "next": "outcome-proceed-speaker",
                    },
                    {
                        "id": "sens-none",
                        "label": "No filters — volume matters more than context",
                        "next": "outcome-revise-speaker",
                    },
                ],
            },
            "outcome-stop-expect": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — hidden ambient collection",
                "rationale": (
                    "Stretching 'product improvement' to cover always-on pre-roll uploads "
                    "without user expectation fails autonomy and purpose limitation."
                ),
                "lenses": ["autonomy", "purpose-limitation"],
                "nextSteps": [
                    "Keep uploads tied to confirmed wake-word events",
                    "Revisit only with a distinct, optional program",
                ],
            },
            "outcome-stop-force": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — coerced sensing",
                "rationale": (
                    "Making intimate audio capture the default is not freely given consent. "
                    "Rights-based reasoning rejects forced participation."
                ),
                "lenses": ["rights-based", "non-maleficence"],
                "nextSteps": [
                    "Design an optional contributor program",
                    "Do not gate core product features on ambient upload",
                ],
            },
            "outcome-revise-speaker": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — add context safeguards",
                "rationale": (
                    "Opt-in alone is not enough if bedroom-hour audio is still ingested wholesale. "
                    "Add filters and review before training use."
                ),
                "lenses": ["non-maleficence", "virtue"],
                "nextSteps": [
                    "Exclude quiet hours / private-room profiles by default",
                    "Sample-audit clips before they enter training",
                ],
            },
            "outcome-proceed-speaker": {
                "type": "outcome",
                "verdict": "proceed",
                "title": "Proceed with opt-in sensing",
                "rationale": (
                    "Clear opt-in, visible indicators, short retention, and sensitive-context "
                    "filters make a constrained improvement program defensible."
                ),
                "lenses": ["utilitarian", "accountability"],
                "nextSteps": [
                    "Publish what is uploaded and for how long",
                    "Easy revoke that stops future uploads immediately",
                    "Log access to human-reviewed clips",
                ],
            },
        },
    }


def kids_edu_app() -> dict:
    return {
        "id": "kids-edu-app",
        "title": "Kids' learning app analytics",
        "summary": "An education app for children wants to sell engagement analytics to toy advertisers.",
        "context": (
            "A math app for ages 8–12 collects gameplay timing and mistake patterns 'to personalize lessons.' "
            "Partnerships now proposes selling aggregated-but-fine-grained classroom engagement stats "
            "to toy brands for targeted ads. Parents consented only to educational personalization."
        ),
        "bookAnchors": ["§3.9", "sec:3.9"],
        "teachingFocus": "children-ads",
        "start": "child",
        "nodes": {
            "child": {
                "type": "question",
                "prompt": "Should children's learning data be held to a higher bar than ordinary consumer analytics?",
                "hint": "Special protection and non-maleficence.",
                "choices": [
                    {
                        "id": "child-yes",
                        "label": "Yes — treat as protected educational data",
                        "next": "ads",
                    },
                    {
                        "id": "child-no",
                        "label": "No — engagement metrics are ordinary product analytics",
                        "next": "outcome-stop-child",
                    },
                ],
            },
            "ads": {
                "type": "question",
                "prompt": "Is selling classroom engagement patterns to advertisers compatible with the educational purpose parents were told?",
                "hint": "Purpose limitation and justice for minors.",
                "choices": [
                    {
                        "id": "ads-no",
                        "label": "No — advertising is a new purpose",
                        "next": "alt",
                    },
                    {
                        "id": "ads-yes",
                        "label": "Yes — personalization already implies commercial partners",
                        "next": "outcome-stop-ads",
                    },
                ],
            },
            "alt": {
                "type": "question",
                "prompt": "Can you fund the product without child-directed ad targeting (school licenses, adult-only marketing)?",
                "hint": "Utilitarian alternatives that avoid harming kids.",
                "choices": [
                    {
                        "id": "alt-yes",
                        "label": "Yes — pursue non-ad revenue; keep analytics in-product only",
                        "next": "outcome-proceed-kids",
                    },
                    {
                        "id": "alt-parent",
                        "label": "Only with a separate, explicit parent opt-in for ads",
                        "next": "outcome-revise-kids",
                    },
                ],
            },
            "outcome-stop-child": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — do not normalize child data as ordinary analytics",
                "rationale": (
                    "Downplaying children's data as 'ordinary metrics' fails non-maleficence "
                    "and justice. Raise the protection level before any commercial reuse."
                ),
                "lenses": ["non-maleficence", "justice"],
                "nextSteps": [
                    "Reclassify data as child educational data",
                    "Block ad partnerships until a child-specific review exists",
                ],
            },
            "outcome-stop-ads": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — purpose creep into child advertising",
                "rationale": (
                    "Parents consented to lessons, not toy ads. Stretching personalization to "
                    "cover advertiser sales fails purpose limitation and autonomy."
                ),
                "lenses": ["purpose-limitation", "autonomy"],
                "nextSteps": [
                    "Refuse the advertiser deal",
                    "Audit any existing partner shares involving child metrics",
                ],
            },
            "outcome-revise-kids": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — separate educational and ad consent",
                "rationale": (
                    "If ads are ever considered, they need an affirmative parent opt-in that is "
                    "not bundled with schooling features—and many ethics reviews will still say no."
                ),
                "lenses": ["autonomy", "virtue"],
                "nextSteps": [
                    "Default to no ad sharing",
                    "Prefer school-district contracts over child-directed ads",
                ],
            },
            "outcome-proceed-kids": {
                "type": "outcome",
                "verdict": "proceed",
                "title": "Proceed without child-directed ad sales",
                "rationale": (
                    "Keeping analytics inside the educational purpose and funding without "
                    "targeting kids is the ethically safer path."
                ),
                "lenses": ["non-maleficence", "utilitarian"],
                "nextSteps": [
                    "Document the no-ad-sales policy",
                    "Minimize classroom-level identifiers in internal dashboards",
                    "Annual parent-facing transparency report",
                ],
            },
        },
    }


def insurance_telematics() -> dict:
    return {
        "id": "insurance-telematics",
        "title": "Auto insurance telematics pricing",
        "summary": "An insurer wants phone GPS and hard-brake events to set monthly premiums.",
        "context": (
            "A usage-based insurance program offers a discount for installing a tracking app. "
            "Fine print allows selling 'de-identified driving insights' to city planners and "
            "raising rates after inferred late-night trips through certain ZIP codes."
        ),
        "bookAnchors": ["§3.9", "sec:3.9"],
        "teachingFocus": "pricing-fairness",
        "start": "voluntary",
        "nodes": {
            "voluntary": {
                "type": "question",
                "prompt": "Is enrollment truly voluntary, or does refusing mean a large price penalty that pressures drivers?",
                "hint": "Freely given consent vs coercive defaults.",
                "choices": [
                    {
                        "id": "vol-yes",
                        "label": "Voluntary — comparable non-tracked plan exists",
                        "next": "proxy",
                    },
                    {
                        "id": "vol-no",
                        "label": "Refusing makes coverage unaffordable for many",
                        "next": "outcome-stop-vol",
                    },
                ],
            },
            "proxy": {
                "type": "question",
                "prompt": "Could night trips or ZIP patterns act as proxies that disadvantage certain groups or neighborhoods?",
                "hint": "Justice and fairness in pricing features.",
                "choices": [
                    {
                        "id": "proxy-check",
                        "label": "We will audit proxy effects and ban sensitive geo features",
                        "next": "secondary",
                    },
                    {
                        "id": "proxy-ignore",
                        "label": "Any correlate of risk is fair game",
                        "next": "outcome-stop-proxy",
                    },
                ],
            },
            "secondary": {
                "type": "question",
                "prompt": "Was selling driving insights to third parties disclosed as a separate choice from the discount?",
                "hint": "Purpose bundling undermines autonomy.",
                "choices": [
                    {
                        "id": "sec-split",
                        "label": "Yes — discount tracking ≠ data sale; sale is opt-in",
                        "next": "outcome-proceed-ins",
                    },
                    {
                        "id": "sec-bundle",
                        "label": "Bundled — accepting the discount allows resale",
                        "next": "outcome-revise-ins",
                    },
                ],
            },
            "outcome-stop-vol": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — coercive tracking",
                "rationale": (
                    "If the only affordable plan requires continuous tracking, consent is not "
                    "freely given. Rights-based and justice lenses reject that design."
                ),
                "lenses": ["rights-based", "justice"],
                "nextSteps": [
                    "Offer a genuine non-tracked tier",
                    "Cap the price gap attributable to tracking refusal",
                ],
            },
            "outcome-stop-proxy": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — unfair proxy pricing",
                "rationale": (
                    "'Any correlate' invites discriminatory or neighborhood-based penalties "
                    "dressed up as risk science."
                ),
                "lenses": ["justice", "non-maleficence"],
                "nextSteps": [
                    "Ban features that proxy protected or sensitive attributes",
                    "Run disparate-impact checks before launch",
                ],
            },
            "outcome-revise-ins": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — unbundle discount and resale",
                "rationale": (
                    "Drivers may accept safety discounts without agreeing to commercial resale. "
                    "Split the choices and minimize shared fields."
                ),
                "lenses": ["autonomy", "purpose-limitation"],
                "nextSteps": [
                    "Separate opt-ins for pricing vs third-party insights",
                    "Default resale to off",
                ],
            },
            "outcome-proceed-ins": {
                "type": "outcome",
                "verdict": "proceed",
                "title": "Proceed with constrained telematics",
                "rationale": (
                    "Voluntary enrollment, proxy audits, and unbundled resale make a narrower "
                    "program more defensible—with ongoing monitoring."
                ),
                "lenses": ["utilitarian", "accountability"],
                "nextSteps": [
                    "Publish feature and fairness summaries",
                    "Easy uninstall that stops collection",
                    "Annual proxy-bias review",
                ],
            },
        },
    }


def employee_monitor() -> dict:
    return {
        "id": "employee-monitor",
        "title": "Workplace productivity monitoring",
        "summary": "HR wants keystroke and webcam attention scores for remote staff.",
        "context": (
            "A company proposes always-on keystroke logging and intermittent webcam 'attention' "
            "scoring for remote employees, used in performance reviews. Workers were hired under "
            "policies that mentioned only VPN and device encryption—not continuous surveillance."
        ),
        "bookAnchors": ["§3.9", "sec:3.9"],
        "teachingFocus": "workplace-surveillance",
        "start": "notice",
        "nodes": {
            "notice": {
                "type": "question",
                "prompt": "Were workers clearly told before hire (or via bargained change) that continuous monitoring would score them?",
                "hint": "Transparency and autonomy at work.",
                "choices": [
                    {
                        "id": "notice-no",
                        "label": "No — this is a mid-year surprise policy",
                        "next": "outcome-stop-notice",
                    },
                    {
                        "id": "notice-yes",
                        "label": "Yes — bargained or clearly accepted role terms",
                        "next": "need",
                    },
                ],
            },
            "need": {
                "type": "question",
                "prompt": "Is always-on keystroke/webcam necessary, or would outcome-based metrics and lighter audits suffice?",
                "hint": "Necessity and proportionality.",
                "choices": [
                    {
                        "id": "need-light",
                        "label": "Lighter methods can meet the legitimate aim",
                        "next": "outcome-revise-need",
                    },
                    {
                        "id": "need-heavy",
                        "label": "Managers insist only continuous scores work",
                        "next": "power",
                    },
                ],
            },
            "power": {
                "type": "question",
                "prompt": "Can workers refuse without retaliation, and is there human appeal before scores affect pay?",
                "hint": "Power imbalance undermines 'consent' at work.",
                "choices": [
                    {
                        "id": "power-yes",
                        "label": "Yes — refusal protected; human review before pay impact",
                        "next": "outcome-proceed-emp",
                    },
                    {
                        "id": "power-no",
                        "label": "No — scores auto-feed reviews; refusal is career risk",
                        "next": "outcome-stop-power",
                    },
                ],
            },
            "outcome-stop-notice": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — surprise workplace surveillance",
                "rationale": (
                    "Changing to continuous scoring without clear prior notice fails transparency "
                    "and respect for persons."
                ),
                "lenses": ["transparency", "autonomy"],
                "nextSteps": [
                    "Pause deployment",
                    "Renegotiate policy with worker representation",
                ],
            },
            "outcome-revise-need": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — prefer less intrusive measures",
                "rationale": (
                    "If deliverables and lighter audits work, continuous keystroke/webcam scoring "
                    "is disproportionate."
                ),
                "lenses": ["non-maleficence", "virtue"],
                "nextSteps": [
                    "Pilot outcome-based evaluation",
                    "Limit monitoring to security incidents, not productivity theater",
                ],
            },
            "outcome-stop-power": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — coerced monitoring",
                "rationale": (
                    "When refusal risks pay or career, 'consent' is hollow. Justice and "
                    "rights-based lenses reject automated score-driven punishment."
                ),
                "lenses": ["justice", "rights-based"],
                "nextSteps": [
                    "Remove auto-feed into reviews",
                    "Guarantee non-retaliation for opting out of nonessential monitors",
                ],
            },
            "outcome-proceed-emp": {
                "type": "outcome",
                "verdict": "proceed",
                "title": "Proceed with narrow, contested monitoring",
                "rationale": (
                    "Prior notice, necessity case, protected refusal, and human appeal before "
                    "pay impact make a constrained program more defensible."
                ),
                "lenses": ["accountability", "utilitarian"],
                "nextSteps": [
                    "Minimize collected signals",
                    "Publish what managers can see",
                    "Expire raw logs quickly",
                ],
            },
        },
    }


def cross_border() -> dict:
    return {
        "id": "cross-border",
        "title": "Cross-border user data transfer",
        "summary": "Ops wants to move EU customer records to a cheaper region with weaker privacy law.",
        "context": (
            "A SaaS company serving EU customers proposes replicating personal data to a region "
            "with weaker privacy enforcement to cut storage cost. Marketing also wants local "
            "teams there to run experiments on the full customer table."
        ),
        "bookAnchors": ["§3.9", "§3.10", "sec:3.9"],
        "teachingFocus": "cross-border",
        "start": "basis",
        "nodes": {
            "basis": {
                "type": "question",
                "prompt": "Is there a documented transfer basis (adequate protection, approved clauses, necessity) — or only cost?",
                "hint": "Accountability across jurisdictions.",
                "choices": [
                    {
                        "id": "basis-yes",
                        "label": "Yes — legal/ethical transfer mechanism documented",
                        "next": "minimize",
                    },
                    {
                        "id": "basis-cost",
                        "label": "Mainly cost — we will 'figure out paperwork later'",
                        "next": "outcome-stop-basis",
                    },
                ],
            },
            "minimize": {
                "type": "question",
                "prompt": "Must the full customer table move, or can you transfer minimized / anonymized subsets?",
                "hint": "Data minimization before crossing borders.",
                "choices": [
                    {
                        "id": "min-yes",
                        "label": "Minimize — only fields needed for support replicas",
                        "next": "access",
                    },
                    {
                        "id": "min-no",
                        "label": "Copy everything — experiments might need it",
                        "next": "outcome-revise-min",
                    },
                ],
            },
            "access": {
                "type": "question",
                "prompt": "Will foreign marketing teams get broad query access, or is access role-limited and logged?",
                "hint": "Purpose limitation after transfer.",
                "choices": [
                    {
                        "id": "access-tight",
                        "label": "Role-limited, logged, no ad-hoc marketing pulls",
                        "next": "outcome-proceed-border",
                    },
                    {
                        "id": "access-wide",
                        "label": "Wide access so local growth can move fast",
                        "next": "outcome-revise-access",
                    },
                ],
            },
            "outcome-stop-basis": {
                "type": "outcome",
                "verdict": "stop",
                "title": "Stop — cost is not a transfer basis",
                "rationale": (
                    "Moving personal data to a weaker regime for savings without safeguards "
                    "fails accountability and rights-based duties to customers."
                ),
                "lenses": ["accountability", "rights-based"],
                "nextSteps": [
                    "Keep primary storage in an adequate jurisdiction",
                    "Do not transfer until mechanisms and DPIA-style review exist",
                ],
            },
            "outcome-revise-min": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — minimize before you replicate",
                "rationale": (
                    "'Experiments might need it' is not a reason to export the full table. "
                    "Minimize fields and consider synthetic or aggregated alternatives."
                ),
                "lenses": ["data-minimization", "purpose-limitation"],
                "nextSteps": [
                    "Define a support-only schema for the replica",
                    "Run experiments on anonymized samples where possible",
                ],
            },
            "outcome-revise-access": {
                "type": "outcome",
                "verdict": "revise",
                "title": "Revise — lock down post-transfer access",
                "rationale": (
                    "A lawful transfer can still become unethical if foreign teams freely "
                    "repurpose customer data for growth experiments."
                ),
                "lenses": ["purpose-limitation", "accountability"],
                "nextSteps": [
                    "Separate production support from marketing sandboxes",
                    "Require purpose tickets and access logs",
                ],
            },
            "outcome-proceed-border": {
                "type": "outcome",
                "verdict": "proceed",
                "title": "Proceed with safeguarded transfer",
                "rationale": (
                    "Documented basis, minimized fields, and tight logged access make a "
                    "constrained cross-border replica more defensible."
                ),
                "lenses": ["accountability", "utilitarian"],
                "nextSteps": [
                    "Complete transfer impact documentation",
                    "Encrypt in transit and at rest",
                    "Periodic access reviews",
                ],
            },
        },
    }


def main() -> None:
    scenarios = {
        "marketing-partners": marketing_partners(),
        "hiring-score": hiring_score(),
        "health-secondary": health_secondary(),
        "justice-risk-score": justice_risk_score(),
        "campus-cameras": campus_cameras(),
        "scraped-social": scraped_social(),
        "retention-delete": retention_delete(),
        "smart-speaker": smart_speaker(),
        "kids-edu-app": kids_edu_app(),
        "insurance-telematics": insurance_telematics(),
        "employee-monitor": employee_monitor(),
        "cross-border": cross_border(),
    }
    body = (
        "/* Auto-generated by make_scenarios.py — do not edit by hand. */\n"
        "(function (global) {\n"
        '  "use strict";\n'
        f"  global.EthicalScenarios = {json.dumps(scenarios, indent=2)};\n"
        "})(typeof window !== 'undefined' ? window : globalThis);\n"
    )
    OUT.write_text(body, encoding="utf-8")
    print(f"Wrote {OUT} ({len(scenarios)} scenarios)")


if __name__ == "__main__":
    main()
