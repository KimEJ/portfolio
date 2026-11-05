---
kind: "company"
tier: "more"
order: 8
anonymized: true
title: "Manufacturing Execution System"
summary: "Admin web and a shop-floor mobile view from order to BOM, work order, shipping, and purchasing"
period: {"start": "2026-10"}
role: "Design and development"
stack: ["React 19", "TanStack", "Next.js 16", "Prisma", "PostgreSQL", "Azure Blob"]
platforms: ["web", "server"]
cover: "/projects/mes/02-production.webp"
images: [{"src": "/projects/mes/02-production.webp", "alt": "Production and shipping status"}, {"src": "/projects/mes/03-order-detail.webp", "alt": "Order detail with change history"}, {"src": "/projects/mes/04-field-mobile.webp", "alt": "Shop-floor mobile view"}]
links: []
metrics: [{"value": "31", "label": "data models"}, {"value": "~600", "label": "test cases"}, {"value": "0", "label": "backend needed for demo"}]
code: "EJ204"
status: {"label": "Demo", "tone": "hold"}
---

## Problem

A small manufacturer ran production on spreadsheets and word of mouth. Orders, BOMs, work orders, and shipping lived apart, so nobody could trace who changed what, or when.

## What I built

An admin web app, a mobile view for shop-floor workers (`/field`), and a backend built on Next.js Route Handlers and Prisma.

## Design decisions

- **Every transition is history.** Order, work-stage, and shipping transitions are written to dedicated history tables for audit.
- **BOM revision snapshots.** Committed BOMs are snapshotted and tied to work orders, so the BOM in force at the time is always known.
- **Stale saves are rejected.** Instead of live sync, a save that would overwrite someone else's newer change is rejected and the latest values are shown.
- **A demo with no backend.** An in-browser demo API transport lets the whole app run as a static site.
