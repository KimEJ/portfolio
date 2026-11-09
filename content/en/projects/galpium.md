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
metrics: [{"value": "4 material types", "label": "Text, PDF, images, audio"}, {"value": "2 search methods", "label": "Keyword and semantic search"}, {"value": "3 UI languages", "label": "Korean, English, Japanese"}]
code: "EJ101"
status: {"label": "Released v0.0.2", "tone": "go"}
---

## Problem

When you organize notes with an AI, the results end up scattered across chat threads and lose their link to the source material. I wanted my notes to stay on my machine while still letting an AI read and edit the same notes.

## What I built

A macOS app that keeps Markdown pages, original materials, citations, and revision history in one local library. Users can link pages and search their materials by keyword or meaning. An MCP server lets AI clients such as ChatGPT desktop read and edit the same wiki.

## Design decisions

- **Preserving sources and citations.** Original materials are kept separately, and citation footnotes link back to the relevant passage. Image and audio search hits are shown as locations rather than verified quotations.
- **Protecting concurrent edits.** When the app and AI edit the same page, the current revision is checked to prevent either from silently overwriting the other's changes.
- **Local search and resource management.** Keyword and semantic search run on the device. Embedding work runs in a separate worker to reduce memory use when idle.

## Status

v0.0.2 released publicly (Apple silicon only), Apache-2.0.
