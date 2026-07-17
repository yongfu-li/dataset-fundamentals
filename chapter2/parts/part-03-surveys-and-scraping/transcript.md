# Chapter 2 — Surveys, observation, and scraping — transcript

**Part id:** part-03-surveys-and-scraping  
**Estimated duration:** 7 minutes  
**Sources:** `author/chapter2.tex` (§2.3.1–2.3.3), `modules/chapter2/example5/`, `modules/chapter2/example6/`

## Slide 1 — Chapter 2 — Surveys, observation, and scraping

Knowing a source type is not enough—you still need an instrument. This part covers surveys and questionnaires, field observation, and web scraping when no API exists, including the fragility and policy constraints scraping introduces.

## Slide 2 — Learning objectives

By the end of this part, you should match surveys, observation, and scraping to typical research questions, name the main watch-outs for each method, and explain why instrument and sample planning precede platform choice.

## Slide 3 — Choosing a collection method

Once source type is chosen, teams select concrete methods. Surveys and questionnaires gather structured responses from people. Observation captures behavior in context. Web scraping extracts content from pages that lack APIs. Mixed designs combine instruments when no single method answers both the what and the why. This part focuses on when each method fits; APIs are covered in the next part.

## Slide 4 — Surveys and questionnaires

Surveys remain a workhorse for collecting comparable answers from many respondents in market research, social science, and public-opinion work. Modes include online forms, face-to-face interviews, telephone contact, and postal questionnaires. Strengths include large sample reach, standardized wording, and quantifiable outputs. Weaknesses include socially desirable answering, low response rates without incentives, and shallow coverage of lived experience compared with interviews or observation.

## Slide 5 — Example 2.5 — Campus Wi-Fi satisfaction survey plan

Example 2.5 shows a short instrument plan before any survey platform is chosen. An IT office wants to know which buildings have unreliable Wi-Fi. The plan specifies a five-minute online questionnaire for students and staff, stratified by building, with items on connection failures, peak-hour experience, and device type, plus an open comment box for locations the closed items miss. Open the example 5 module to see how the instrument and sample come before tool choice.

## Slide 6 — Observation

Observation gathers data by watching behavior or events in their natural setting, which is valuable when researchers need context that questionnaires cannot elicit. Participant observation embeds the researcher in the activity; non-participant observation keeps distance for objectivity. Observation yields rich qualitative evidence, but it is time-consuming, vulnerable to observer bias, and often hard to generalize from small settings. Teams frequently combine observation with surveys so depth and breadth reinforce each other.

## Slide 7 — Web scraping

Web scraping uses programs to extract text, tables, or media from HTML pages. It is useful when a site exposes public content but no API, or when many pages must be harvested on a schedule. Scraping scales and automates collection across sites, yet it raises legal and ethical constraints, yields noisy or shifting schemas when page layouts change, and may trigger anti-bot defenses. Responsible projects document robots policies, throttle requests, and prefer APIs when providers offer them.

## Slide 8 — Example 2.6 — Choosing scraping for public course catalogs

Example 2.6 stays at the decision level. A research team needs weekly snapshots of publicly listed university course titles and credit hours where no catalog API exists. They scrape the HTML timetable, store course code and title as structured rows, and re-check selectors after each term because layout changes routinely break the harvest. Try the example 6 module to review why scraping is a methods choice under fragility and policy constraints, not merely a coding exercise.

## Slide 9 — Takeaways

Surveys fit attitudes and self-report at scale; observation fits natural behavior in context; scraping fits public web content without APIs. Each method carries distinct bias and policy risks. Design the instrument and sampling plan first, then select platforms and libraries in a later part.

## Slide 10 — Next

Complete the quiz, then continue to the next part on APIs for collection—when structured endpoints are preferable to scraping.
