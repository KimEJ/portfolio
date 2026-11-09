---
kind: "company"
tier: "more"
order: 6
anonymized: true
title: "RAG Knowledge Assistant for a Manufacturer"
summary: "A knowledge service for managing internal rules and forms and answering questions using documents the employee can access"
period: {"start": "2026-08", "end": "2026-10"}
role: "Design and development"
stack: ["Spring Boot 3", "React", "PostgreSQL", "pgvector", "BGE-M3", "Gemini"]
platforms: ["web", "server"]
cover: "/projects/knowledge-assistant/02-answer.webp"
images: [{"src": "/projects/knowledge-assistant/02-answer.webp", "alt": "An answer with cited articles and source documents"}, {"src": "/projects/knowledge-assistant/01-home.webp", "alt": "User home"}, {"src": "/projects/knowledge-assistant/03-knowledge.webp", "alt": "Knowledge library"}]
links: []
metrics: [{"value": "9 file formats", "label": "PDF, HWP, HWPX, DOC, DOCX, XLSX, PPTX, TXT, MD"}, {"value": "3 search methods", "label": "Semantic, full-text, and article or document number search"}, {"value": "2 work areas", "label": "Employee knowledge use and administrator document management"}]
code: "EJ202"
status: {"label": "Demo", "tone": "hold"}
---

## Problem

Employees had to find and read the relevant documents to answer questions about internal rules and forms. The company already had work-support software, but finding and storing documents was inconvenient.

## What I built

I built a service where administrators register documents and manage their permissions and versions, while employees ask questions in natural language and receive answers with sources they can access. Document text is extracted and indexed by article, and answers link back to the source material.

An MCP integration lets external AI tools use authorized documents directly in workflows or add the work knowledge they need.

## Design decisions

- **Natural language and exact-number search.** Semantic and full-text search are combined with a dedicated path for article and document numbers.
- **Permission-aware retrieval.** Search results are filtered by user and access path, so answers use only documents the employee is allowed to access.
