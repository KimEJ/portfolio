---
kind: "company"
tier: "more"
order: 7
anonymized: true
title: "After-Sales and ERP Integration Platform"
summary: "Collects after-sales and delivery data from a live ERP into a separate database for viewing and analysis"
period: {"start": "2026-09", "end": "2026-10"}
role: "Design and development"
stack: ["Python", "FastAPI", "PostgreSQL", "SQL Server", "Docker", "Azure"]
platforms: ["web", "server"]
cover: "/projects/erp-integration/03-erp-sync.webp"
images: [{"src": "/projects/erp-integration/03-erp-sync.webp", "alt": "One-way ERP sync status"}, {"src": "/projects/erp-integration/01-dashboard.webp", "alt": "Role-based dashboard"}, {"src": "/projects/erp-integration/02-kpi.webp", "alt": "KPIs across five areas"}]
links: []
metrics: [{"value": "27 tables", "label": "configured ERP integration targets"}, {"value": "5 min", "label": "shortest configured sync interval"}, {"value": "5 levels", "label": "user permissions"}]
code: "EJ203"
status: {"label": "Demo", "tone": "hold"}
---

## Problem

After-sales and delivery data lived in a production ERP. Using it for analysis and operational screens required a way to retrieve it without changing the existing ERP.

## What I built

I built a platform that reads ERP data into a separate integrated database and lets staff view after-sales history, delivery information, and synchronization status. Depending on each table, the loader uses watermarks to collect changes or takes a full snapshot. The FastAPI service and web interface are configured for deployment on Azure with Docker Compose.

## Design decisions

- **Reducing impact on the ERP.** Read-only access and table-specific schedules limit load on the existing ERP. Full loads are configured to run outside business hours by default.
- **Reflecting deletions and changes.** For tables checked by key reconciliation, rows missing from the source are marked as deleted. Deletion marking stops if the number of keys drops enough to suggest a query problem. Staff can also review load history and synchronization status.
- **Controlling access to personal data.** Personal data is excluded from collection by default and can be encrypted during ingestion when required and configured. A separate API checks permission and records access to unmasked values; two-factor authentication can be enabled for privileged accounts.
- **Separating permissions by role.** Delivery drivers see schedules for their assigned vehicles, while staff access their assigned work areas. Executives can view activity across work areas without personal data; department heads and administrators must provide a reason to view unmasked personal data, and access is recorded.
