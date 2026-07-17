# Chapter 3 — Data privacy principles — transcript

**Part id:** part-04-data-privacy-principles  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter3.tex` (§3.3), `modules/chapter3/example11/`, `modules/chapter3/example12/`

## Slide 1 — Chapter 3 — Data privacy principles

Privacy as a right becomes privacy as practice through agreements, representations, and design defaults. This part operationalizes informed consent, anonymization, and Privacy by Design, then previews GDPR and HIPAA as enforceable anchors.

## Slide 2 — Learning objectives

By the end of this part, you should define data privacy in pipeline terms, contrast three core privacy-management concepts, and read GDPR versus HIPAA as planning maps—not compliance manuals.

## Slide 3 — From rights to management practice

Section 3.1 defined privacy as individuals' control over personal data. This section asks which agreements and defaults make that control enforceable. Personal data includes names and addresses but also behavioral logs, health and location streams, and biometrics. Ethics still decides whether a use should proceed; privacy principles constrain how permitted uses are implemented.

## Slide 4 — Three core concepts

Informed consent requires freely given, specific, informed agreement—with a real withdrawal path. Anonymization reduces linkability for secondary use, but re-identification via auxiliary data remains a failure mode. Privacy by Design embeds protections into architecture from the start rather than bolting privacy on after launch.

## Slide 5 — Informed consent in healthcare

Informed consent is the operational counterpart of respect for autonomy. Example 3.11 shows a clinic that wants to reuse treatment records for research: care consent must be separated from research consent, secondary uses explained plainly, and refusal must not affect treatment. Bundling research into a general intake form fails the standard.

## Slide 6 — Example 3.11 — Consent for healthcare data uses

Example 3.11 is the clinical consent bar. Open the example 11 module for this chapter to compare bundled versus purpose-specific consent flows. Section 3.4 later develops technical controls when de-identification alone is insufficient.

## Slide 7 — Privacy by Design

Privacy by Design means minimization, protective defaults, and user controls before partner sharing is enabled. Example 3.12 shows a health app that should not demand financial fields just in case, should default to local retention where feasible, and should expose clear sharing and deletion controls before any partner sync.

## Slide 8 — Example 3.12 — Privacy by Design in a health app

Example 3.12 pairs with the autonomy vignette in Example 3.6 but focuses on architecture defaults. Try the example 12 module to review minimization and control patterns. Consent, de-identification, and design-time safeguards work together—none substitutes for the others.

## Slide 9 — GDPR and HIPAA as anchors

The GDPR governs personal data of people in the EU and EEA with extraterritorial reach for targeting or monitoring. It emphasizes lawfulness, purpose limitation, minimization, accountability, and data-subject rights. HIPAA concentrates parallel duties on protected health information held by US covered entities and business associates. Section 3.6 expands scope, rights, and penalties.

## Slide 10 — Takeaways

Privacy management is more than notices. Consent must be meaningful; anonymization is a goal, not a guarantee; Privacy by Design belongs in architecture. GDPR and HIPAA illustrate how principles become enforceable duties.

## Slide 11 — Next

Pause for the quiz, then continue to privacy-preserving techniques—anonymization, encryption, differential privacy, and federated learning.
