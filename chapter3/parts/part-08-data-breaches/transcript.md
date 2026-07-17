# Chapter 3 — Data breaches — transcript

**Part id:** part-08-data-breaches  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter3.tex` (§3.7), `modules/chapter3/example22/`, `modules/chapter3/example23/`, `modules/chapter3/example24/`

## Slide 1 — Chapter 3 — Data breaches

A data breach is unauthorized access to, disclosure of, or destruction of sensitive information. This part defines breaches, lists recurring causes, and walks three landmark incidents as failure-mode patterns—costs and prevention follow in the next part.

## Slide 2 — Learning objectives

By the end of this part, you should define a data breach, name common causes, and distinguish three organizational failure modes illustrated by Equifax, Yahoo, and Target.

## Slide 3 — Understanding data breaches

Causes range from external intrusion and phishing to insider misuse, unpatched software, weak credentials, lost devices, and excessive third-party access. Organizations storing identity, financial, or health attributes face elevated duty of care because stolen datasets enable fraud and long-lived harm. Statute-level notification clocks assume teams can detect and classify incidents quickly.

## Slide 4 — Example 3.22 — Data breach severity range

Example 3.22 states the severity range: a breach might involve a small set of names and emails or a large theft of government identifiers, payment credentials, or health records. Impact scales with sensitivity, volume, dwell time before detection, and how quickly notification and remediation begin. Open the example 22 module for this chapter to review severity factors.

## Slide 5 — Equifax — unpatched internet-facing systems

Example 3.23 describes the 2017 Equifax incident: attackers exploited an unpatched web-application vulnerability and exposed personal data of roughly one hundred forty-seven million individuals. The failure mode is delayed patching and weak monitoring on high-value identity stores. Downstream costs appear in the next part.

## Slide 6 — Example 3.23 — Equifax case study

Example 3.23 is the patching-discipline lesson. Try the example 23 module to trace how known vulnerabilities on internet-facing systems become mass identity exposure. Technical debt on high-sensitivity stores is an ethics issue, not only an IT backlog item.

## Slide 7 — Yahoo — delayed disclosure

Example 3.24 covers Yahoo breaches affecting hundreds of millions of accounts, later revised toward three billion for the 2013 incident, with criticism focused on delayed public disclosure during acquisition negotiations. The failure mode is late accountability to users and markets after compromise at consumer scale.

## Slide 8 — Target — third-party vendor path

Example 3.25 describes attackers using third-party vendor access to reach point-of-sale systems and compromise tens of millions of payment cards. The failure mode is vendor risk and malware on retail networks—not exotic cryptography breaking, but supply-chain entry and insufficient segmentation.

## Slide 9 — Takeaways

Breach risk is organizational as much as cryptographic: patching discipline, vendor oversight, and disclosure timing decide outcomes after intrusion begins. Three patterns recur—unpatched systems, delayed disclosure, and vendor-mediated entry. Prevention controls mapped to each pattern come next.

## Slide 10 — Next

Pause for the quiz, then continue to breach consequences and prevention—financial fallout and controls tied to each failure mode.
