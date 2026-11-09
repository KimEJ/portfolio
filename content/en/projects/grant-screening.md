---
kind: "company"
tier: "more"
order: 5
anonymized: true
title: "AI Screening Platform for Public Grant Applications"
summary: "A platform supporting the workflow from AI analysis of application documents to reviewer decisions and follow-up"
period: {"start": "2026-06", "end": "2026-08"}
role: "Design and development"
stack: ["FastAPI", "Next.js 15", "PostgreSQL", "Redis", "Gemini", "Document AI · OCR", "Docker"]
platforms: ["web", "server"]
cover: "/projects/grant-screening/02-cohort.webp"
images: [{"src": "/projects/grant-screening/02-cohort.webp", "alt": "Applicants with AI and reviewer verdicts per intake"}, {"src": "/projects/grant-screening/03-ineligible.webp", "alt": "Document review: source file, AI eligibility checks, and the failed rule"}, {"src": "/projects/grant-screening/05-masking.webp", "alt": "PII masking review on an ID card: original vs. masked"}, {"src": "/projects/grant-screening/04-summary.webp", "alt": "Supplement request: reviewer note and an undecidable check"}, {"src": "/projects/grant-screening/01-program.webp", "alt": "Program and intake progress"}, {"src": "/projects/grant-screening/06-companies.webp", "alt": "Company database"}]
links: []
metrics: [{"value": "6 document types", "label": "PDF, MS Office, HWP, images, text, CSV"}, {"value": "5 automated tasks", "label": "Document classification, extraction, summarization, eligibility review, privacy masking"}, {"value": "3 follow-up decisions", "label": "Confirm eligibility, confirm ineligibility, request additional information"}]
code: "EJ201"
status: {"label": "Private", "tone": "hold"}
---

## Problem

Each grant program has different document and eligibility requirements. Staff had to read the submissions, find the relevant information, and check it against the screening criteria.

## What I built

I built a platform where staff can configure document types and screening criteria for each program and manage the workflow from document upload through review and follow-up. AI assists with document classification, information extraction, summarization, preliminary eligibility checks, and personal data masking. Reviewers can examine the source documents alongside the summaries, eligibility checks, and masking results, then confirm eligibility, confirm ineligibility, or request additional information.

## Design decisions

- **Program-specific settings.** Document types, extraction fields, and screening criteria can be configured for each program. Frequently used items are provided as options that staff can toggle on, and additional items can be added as needed.
- **Long-running document processing.** Analysis is divided into stages handled by workers, with progress shown in the interface.
- **AI-assisted human review.** Automating every decision with AI carries risks, so the interface makes it easy for reviewers to inspect and correct the analysis.
