---
kind: "personal"
tier: "featured"
order: 1
title: "Galpium"
summary: "A local-first macOS wiki that ChatGPT can read and edit with you"
period: {"start": "2026-10"}
role: "Solo: design, build, release"
stack: ["Swift 6", "SwiftUI", "AppKit · TextKit", "SQLite", "MCP", "On-device embeddings"]
platforms: ["macos"]
cover: "/projects/galpium/wiki-page.jpg"
images: [{"src": "/projects/galpium/wiki-page.jpg", "alt": "Wiki page editor"}, {"src": "/projects/galpium/materials.jpg", "alt": "Source materials and citations"}]
links: [{"label": "GitHub", "url": "https://github.com/KimEJ/Galpium"}, {"label": "Release v0.0.2", "url": "https://github.com/KimEJ/Galpium/releases/tag/v0.0.2"}]
metrics: [{"value": "0", "label": "third-party Swift packages"}, {"value": "93", "label": "tests"}, {"value": "3", "label": "UI languages (ko·en·ja)"}]
code: "EJ101"
status: {"label": "Released v0.0.2", "tone": "go"}
---

## Problem

When you organize notes with an AI, the results end up scattered across chat threads and lose their link to the source material. I wanted my notes to stay on my machine while still letting an AI read and edit the same notes.

## What I built

A macOS app that keeps Markdown pages, original materials (PDF, image, audio), and citations in one library. It ships an MCP stdio server so ChatGPT desktop can read and edit the same wiki the user does.

- **GalpiumCore**: storage, citations, revisions, retrieval, MCP protocol
- **GalpiumApp**: SwiftUI with an AppKit/TextKit editor
- **GalpiumEmbedder**: one embedding worker per library, reachable only over a user-only Unix socket

## Design decisions

- **Zero third-party Swift packages.** System SQLite only, which keeps the build and supply chain simple.
- **No silent overwrites.** The app and the AI can edit the same page, so every write must carry an `expected_revision`.
- **Isolated embedding caches.** The cache is namespaced by model and preprocessing version, so incompatible vectors never mix.
- **Memory discipline.** The multimodal runtime unloads once the index queue drains, and the worker exits after 60 seconds idle.
- **Verifiable citations.** Citations are checked against the source hash and extraction location. Image and audio hits are shown as locations, not quotes.

## Status

v0.0.2 released publicly (Apple silicon only), Apache-2.0.
