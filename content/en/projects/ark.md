---
kind: "company"
tier: "featured"
order: 4
anonymized: true
title: "Edge AI Appliance OS Builder"
summary: "A build system that assembles Jetson OS images from selectable feature modules"
period: {"start": "2026-01", "end": "2026-10"}
role: "Design and development"
stack: ["Python", "NVIDIA Jetson AGX Orin", "systemd", "PostgreSQL 17", "Qdrant", "KVM", "NGINX"]
platforms: ["edge", "server"]
cover: "/projects/ark/01-setup.webp"
images: [{"src": "/projects/ark/01-setup.webp", "alt": "First-boot setup: choose install mode"}, {"src": "/projects/ark/02-features.webp", "alt": "Choosing feature profiles"}]
links: []
metrics: [{"value": "7", "label": "feature profiles"}, {"value": "3", "label": "initial setup paths"}, {"value": "4 languages", "label": "supported in portal and admin screens"}]
code: "EJ104"
status: {"label": "Pre-acceptance", "tone": "wait"}
---

## Problem

Customers needed different combinations of document management, OCR, RAG, a wiki, and developer VMs on an on-premises AI appliance. Manually building an image for each configuration made it difficult to manage features, dependencies, and versions consistently.

## What I built

A system that assembles Jetson OS images from feature modules and lets users select the features they need in a web setup after installation. It combines document management, search, a wiki, external AI connections, VPN, and a developer workspace on a common base. Initial setup supports a fresh installation, use of existing data, or restoration from a compatible backup.

## Design decisions

- **Managing feature combinations and dependencies.** Boards, profiles, and modules are declared with their required dependencies. The build stops when a required asset is missing or fails verification rather than silently omitting a selected feature.
- **Separating base access from optional features.** VPN and certificate setup are tracked separately from basic LAN web access so their status can be checked independently if setup fails.
- **Protecting existing data.** Initial setup checks NVMe identity and data layout without automatically formatting the drive. Backup restoration also checks device and image compatibility.
- **Choosing an installation method.** Online setup downloads pinned assets, while the preloaded approach includes the necessary assets in the image.

## Status

Image installation and access to the initial setup page were confirmed on actual hardware. Individual features and acceptance testing still require further verification.
