---
kind: "personal"
tier: "featured"
order: 3
title: "Paneloom"
summary: "A local macOS workbench that runs product surveys on a synthetic persona panel"
period: {"start": "2026-10"}
role: "Solo"
stack: ["Python (stdlib)", "SQLite", "llama.cpp", "Swift · WKWebView", "HTML/CSS/JS"]
platforms: ["macos"]
cover: "/projects/paneloom/01-results.webp"
images: [{"src": "/projects/paneloom/01-results.webp", "alt": "Completed survey: price acceptance, usage intent, per-persona answers"}]
links: [{"label": "GitHub", "url": "https://github.com/KimEJ/persona-lab"}]
metrics: [{"value": "10,000 personas", "label": "Japanese synthetic persona dataset"}, {"value": "Up to 5 products", "label": "Compared using the same sample"}, {"value": "9 questions", "label": "Core evaluation, usage intent, and price assessment"}]
code: "EJ103"
status: {"label": "Released v0.8.1", "tone": "go"}
---

## Problem

Before running a survey with a real panel, I wanted a way to review and compare product descriptions, questions, and price ranges. Product documents and survey results needed to stay local rather than being sent to an external service.

## What I built

A macOS app that selects a matching sample from 10,000 Japanese synthetic personas (NVIDIA Nemotron-Personas-Japan) and runs product surveys with a local model. It compares up to five products using the same sample and shows distributions of usage intent and willingness-to-pay ranges. Results and run settings can be exported as reports in HTML, PDF, and CSV, among other formats.

## Design decisions

- **Consistent comparison conditions.** Each run fixes the sample and product settings at the start so the same personas' responses can be compared and the settings reviewed alongside the results.
- **Staged and resumable.** The app saves after each stage: seven core questions, usage intent, and a maximum willingness-to-pay range. Interrupted runs can resume, and raw model calls are preserved.
- **Separating price judgment from calculation.** The model selects a willingness-to-pay range without receiving the sales price. Code calculates price acceptance from usage intent and sales terms, keeping indeterminate cases separate.
- **Preventing mixed results.** Existing runs resume under their original question contract. Results produced before a runtime fix are preserved but not mixed with new results on resume.

## Limits

This tool is not validated for predicting real consumer behavior. Version 0.8.1 is publicly available as a prototype for checking survey design.

<small>Persona data: NVIDIA Nemotron-Personas-Japan (CC BY 4.0)</small>
