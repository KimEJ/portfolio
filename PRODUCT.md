# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: technical interviewers and engineering leads evaluating Eojin Kim (김어진) for a backend or AI-platform role. They read case studies to judge design decisions and depth, usually on a laptop, often after seeing a resume.

Secondary: recruiters skimming for years, stack, and headline results; prospective freelance clients (Korean or global) checking whether he can solve their problem.

## Product Purpose

Personal portfolio and branding site. It proves that he builds AI services and the operational platforms around them, and that he designs for deployment, monitoring, and failure. Success: a technical reader finishes at least one case study and sends an email (kimuj5090@gmail.com).

## Positioning

A backend engineer (8 years) whose path runs from IoT device management, to an operations platform for about 100,000 taxi and bus terminals, to RAG and document-AI services. Outside work he builds native macOS/iOS apps and on-device AI tools. The claim: he cares about what surrounds the model (data flow, access control, failure behavior, operations), not just calling an LLM.

## Operating Context

Visitors arrive from a resume link, GitHub, or a direct share. ko is the default locale and en is required; ja may be added later. Static site (Nuxt 4 + Nuxt Content, `nuxi generate`), deployed on Vercel.

## Capabilities and Constraints

- Content lives in `content/{ko,en}/` (projects, career, profile) and is generated from `.omc/drafts/gen_content.py`.
- Project tiers: featured (Galpium, Hitoeki, Paneloom, Edge AI OS builder), more (four anonymized client deliveries and a Japanese study app), archive (2018–2024 work and small personal sites).
- Client/company work is anonymized: no client names; screenshots carry fictional data only.
- Hitoeki currently has no screenshots. The design must handle projects without images gracefully.
- Never publish phone, address, salary, or birth year.

## Brand Commitments

Name: 김어진 / Eojin Kim. Headline (from resume): "AI 서비스와 운영 플랫폼을 만드는 백엔드 개발자". No photo.

## Evidence on Hand

- Screenshots: `public/projects/<slug>/*.webp` (desktop 1600×1000; mobile 780×1688 for japanese-study and mes field view), Galpium JPGs, and legacy screenshots under `public/work/**` and `public/project-ss/**`.
- Real metrics are in each project's frontmatter (test counts, table counts, and so on), sourced from the repos.
- No testimonials, no company logos, no traffic or revenue numbers. Do not fabricate any.

## Product Principles

1. Decisions over decoration: every project shows why something was built a certain way.
2. Honest status: unreleased, prototype, and anonymized are stated plainly.
3. Readable depth: a lead can get the gist in 30 seconds and the detail in 5 minutes.
4. One clear action: email.

## Accessibility & Inclusion

WCAG 2.2 AA. Korean and English typography both need first-class treatment. Respect reduced motion.
