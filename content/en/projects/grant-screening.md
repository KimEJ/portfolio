---
kind: "company"
tier: "more"
order: 5
anonymized: true
title: "AI Screening Platform for Public Grant Applications"
summary: "A document-AI pipeline that reads business plans, extracts data, screens eligibility, and masks personal data"
period: {"start": "2026-09"}
role: "Design and development"
stack: ["FastAPI", "Next.js 15", "PostgreSQL", "Redis", "Gemini", "Document AI · OCR", "Docker"]
platforms: ["web", "server"]
cover: "/projects/grant-screening/02-cohort.webp"
images: [{"src": "/projects/grant-screening/02-cohort.webp", "alt": "Applicants with AI and reviewer verdicts per intake"}, {"src": "/projects/grant-screening/03-ineligible.webp", "alt": "Document review: source file, AI eligibility checks, and the failed rule"}, {"src": "/projects/grant-screening/05-masking.webp", "alt": "PII masking review on an ID card: original vs. masked"}, {"src": "/projects/grant-screening/04-summary.webp", "alt": "Supplement request: reviewer note and an undecidable check"}, {"src": "/projects/grant-screening/01-program.webp", "alt": "Program and intake progress"}, {"src": "/projects/grant-screening/06-companies.webp", "alt": "Company database"}]
links: []
metrics: [{"value": "1,945", "label": "tests"}, {"value": "45", "label": "DB migrations"}, {"value": "6", "label": "-stage job chain"}]
code: "EJ201"
status: {"label": "Private", "tone": "hold"}
---

## Problem

Staff at a regional public innovation center were reading hundreds of grant applications and business plans by hand to check eligibility.

## What I built

An uploaded application runs through a job chain (classify, extract, resolve references, post-process, screen, generate artifacts), with live progress over SSE. Document AI and Vision OCR handle layout, and faces and personal data are masked automatically.

## Design decisions

- **Stage-split jobs.** One long in-process run became staged jobs that scale across workers, behind a flag that can roll it back.
- **Two limiters.** A Redis limiter caps external-model rate and concurrency and fails closed; a host-local weighted budget keeps memory-heavy masking jobs from piling up.
- **Fail clearly instead of retrying.** Automatic retries are off and the timeout is the last line of defense, so no document is processed twice.
- **A stub mode with no credentials.** The full UI and flow can be demoed without any external service keys.
