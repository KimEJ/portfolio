---
kind: "company"
tier: "more"
order: 7
anonymized: true
title: "After-Sales and ERP Integration Platform"
summary: "Mirrors after-sales and delivery data out of a live ERP, without disturbing it, for analysis"
period: {"start": "2026-10"}
role: "Design and development"
stack: ["Python", "FastAPI", "PostgreSQL", "SQL Server", "Docker", "Azure"]
platforms: ["web", "server"]
cover: "/projects/erp-integration/03-erp-sync.webp"
images: [{"src": "/projects/erp-integration/03-erp-sync.webp", "alt": "One-way ERP sync status"}, {"src": "/projects/erp-integration/01-dashboard.webp", "alt": "Role-based dashboard"}, {"src": "/projects/erp-integration/02-kpi.webp", "alt": "KPIs across five areas"}]
links: []
metrics: [{"value": "27", "label": "mirrored tables"}, {"value": "5 min", "label": "fastest sync tier"}, {"value": "5", "label": "role levels"}]
code: "EJ203"
status: {"label": "Demo", "tone": "hold"}
---

## Problem

After-sales and delivery data lived in a production ERP, and quality analysis needed it out. The ERP could not slow down or change.

## What I built

A loader that reads changes from the ERP (SQL Server, behind an SSH tunnel) with per-table watermarks and writes them into PostgreSQL mirror tables, plus a FastAPI service and web UI on top. It runs with Docker Compose on an Azure VM.

## Design decisions

- **The ERP is read-only.** SELECT-only access is enforced in code, and reads take no locks, so the production ERP feels nothing.
- **No physical deletes.** The ERP has no delete flag, so a daily key diff marks rows as deleted. If ERP keys drop below half of the mirror, the job treats it as an incident and aborts.
- **Tiered intervals.** Tables sync every 5, 15, or 30 minutes or once a day; full loads run only off-hours (19:00–07:00).
- **Personal data excluded at the source.** PII columns are dropped at SELECT time and double-checked by a config check. Revealing them goes through an audited endpoint, and higher roles require TOTP.
