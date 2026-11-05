---
kind: "company"
tier: "more"
order: 6
anonymized: true
title: "RAG Knowledge Assistant for a Manufacturer"
summary: "Answers questions about internal rules and forms with citations while enforcing department and role access"
period: {"start": "2026-10"}
role: "Design and development"
stack: ["Spring Boot 3", "React", "PostgreSQL", "pgvector", "BGE-M3", "Gemini"]
platforms: ["web", "server"]
cover: "/projects/knowledge-assistant/02-answer.webp"
images: [{"src": "/projects/knowledge-assistant/02-answer.webp", "alt": "An answer with cited articles and source documents"}, {"src": "/projects/knowledge-assistant/01-home.webp", "alt": "User home"}, {"src": "/projects/knowledge-assistant/03-knowledge.webp", "alt": "Knowledge library"}]
links: []
metrics: [{"value": "RRF", "label": "vector + full-text fusion"}, {"value": "1024", "label": "-dim in-house embeddings"}, {"value": "19", "label": "DB migrations"}]
code: "EJ202"
status: {"label": "Demo", "tone": "hold"}
---

## Problem

Employees needed to ask about internal rules and forms in plain language and get answers with sources, using only documents they are allowed to see.

## What I built

Uploaded documents (PDF, Office, HWP) are extracted, chunked along article boundaries, enriched with LLM-generated search aids, embedded, and stored. It has user and admin web apps backed by Spring Boot APIs.

## Design decisions

- **Hybrid retrieval.** Vector search alone missed exact article numbers like "Article 12", so it is fused with Postgres full-text search through RRF, and exact article hits are placed first.
- **Per-document cap.** One document once took every top slot, so results are capped per document.
- **Access control inside the query.** Permissions are checked in the retrieval SQL itself, not filtered afterwards.
- **Question routing.** Count and list questions cannot be answered by similarity search, so they take a separate path.
- **Embedding migration.** Moved from 1536-dim external embeddings to 1024-dim in-house BGE-M3, with a backfill at startup.
