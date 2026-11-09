---
kind: "company"
tier: "more"
order: 8
anonymized: true
title: "Manufacturing Execution System"
summary: "Admin web and a shop-floor mobile view from order to BOM, work order, shipping, and purchasing"
period: {"start": "2026-09", "end": "2026-10"}
role: "Design and development"
stack: ["React 19", "TanStack", "Next.js 16", "Prisma", "PostgreSQL", "Azure Blob"]
platforms: ["web", "server"]
cover: "/projects/mes/02-production.webp"
images: [{"src": "/projects/mes/02-production.webp", "alt": "Production and shipping status"}, {"src": "/projects/mes/03-order-detail.webp", "alt": "Order detail with change history"}, {"src": "/projects/mes/04-field-mobile.webp", "alt": "Shop-floor mobile view"}]
links: []
metrics: [{"value": "5 production tasks", "label": "Orders, BOM, work orders and production, shipping, material purchasing"}, {"value": "2 work environments", "label": "Administrator web and shop-floor mobile"}, {"value": "3 change histories", "label": "Orders, work stages, shipping"}]
code: "EJ204"
status: {"label": "Demo", "tone": "hold"}
---

## Problem

As customer orders moved through production and shipping, everyone involved needed to see the work specifications and changes. If specifications changed after work began, they also needed to trace which specifications had been used.

## What I built

I built a production management system that manages customer orders and BOMs, automatically issues work orders when a BOM is confirmed, and connects production and shipping with material purchasing. Administrators can review operations on the web, while shop-floor workers can check work orders and progress on mobile.

## Design decisions

- **Preserving confirmed specifications.** Confirmed BOMs are saved as revisions and linked to work orders, so their history remains available when specifications change.
- **Tracking changes.** Major changes to orders, work stages, and shipping are recorded so staff can follow progress.
- **Protecting concurrent edits.** When multiple users edit order details, a save based on an older version triggers a conflict and prompts the user to review the latest values instead of overwriting an earlier change.
