---
kind: "company"
tier: "featured"
order: 4
anonymized: true
title: "Edge AI Appliance OS Builder"
summary: "A build system that assembles Jetson OS images from selectable feature modules"
period: {"start": "2026-10"}
role: "Design and development"
stack: ["Python", "NVIDIA Jetson AGX Orin", "systemd", "PostgreSQL 17", "Qdrant", "KVM", "NGINX"]
platforms: ["edge", "server"]
cover: "/projects/ark/01-setup.webp"
images: [{"src": "/projects/ark/01-setup.webp", "alt": "First-boot setup: choose install mode"}, {"src": "/projects/ark/02-features.webp", "alt": "Choosing feature profiles"}]
links: []
metrics: [{"value": "1,905", "label": "tests"}, {"value": "7", "label": "feature profiles"}, {"value": "164", "label": "image checks"}]
code: "EJ104"
status: {"label": "Pre-acceptance", "tone": "wait"}
---

## Problem

We needed an on-premises AI knowledge appliance configured differently for each customer. One customer wants document management and OCR, another wants RAG, a wiki, or developer VMs. Hand-built images kept shipping with a feature missing or a version mismatched.

## What I built

A CLI that defines boards, profiles, and modules declaratively and assembles an OS image through `plan → stage → provision → image`. The Base layer brings PostgreSQL 17, an NGINX gateway, and a manifest that stitches feature UIs together. Features stack on top as profiles: base, documents, wiki, rag, assistant, workshop, full.

## Design decisions

- **A selected feature is never silently dropped.** Every module declares its dependencies, packages, artifacts, and services; a missing asset or hash mismatch stops the build.
- **Optional features cannot take the box down.** If VPN, OAuth, or PKI setup fails, the LAN base still comes up.
- **Commercially licensable.** Replaced a non-commercial reranker with GTE.
- **Existing data is preserved.** On device migration, NVMe data is matched by UUID and kept; nothing is auto-formatted.
- **Fully offline installs.** Every external asset is pinned by SHA256, and encrypted backup and restore use a journal with rollback.

## Status

Source-complete, with hardware acceptance testing next.
