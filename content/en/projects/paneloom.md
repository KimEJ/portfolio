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
links: []
metrics: [{"value": "10,000", "label": "synthetic personas"}, {"value": "198", "label": "backend tests"}, {"value": "0", "label": "third-party Python deps"}]
code: "EJ103"
status: {"label": "Prototype", "tone": "hold"}
---

## Problem

Before sending a product survey to a real panel, I wanted a cheap, fast way to check whether the questions and price bands even make sense. It had to run entirely on-device so no data leaves the machine.

## What I built

A macOS app that samples from 10,000 Japanese synthetic personas (NVIDIA Nemotron-Personas-Japan) and has a local LLM answer the survey. The backend is Python's standard library plus SQLite, and the UI is a local web app inside a WKWebView. Results export to HTML, PDF, and CSV.

## Design decisions

- **Staged and resumable.** It asks seven base items, then usage intent, then maximum willingness to pay, saving after each stage. Interrupted runs resume, and every raw model call is kept.
- **Code does the math.** The model only picks a price band; acceptance rates are computed in code.
- **No anchoring.** Automatic price-range search never shows the model the sales price. Code adjusts the range, and contradictions between rounds are flagged.
- **Pinned versions.** Old runs resume only under their original contract, and results from before a fix are never mixed with results from after it.

## Limits

This tool is not validated for predicting real consumer behavior. It is a prototype for checking survey design and has not been publicly released.

<small>Persona data: NVIDIA Nemotron-Personas-Japan (CC BY 4.0)</small>
