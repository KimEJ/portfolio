---
kind: "personal"
tier: "featured"
order: 10
title: "OpenJTD · rjtd"
summary: "Open-source format research and Rust tools for reading Ichitaro JTD documents"
role: "Design and development"
stack: ["Rust", "WebAssembly", "CFB/OLE"]
platforms: ["web"]
images: []
links: [{"label": "GitHub · rjtd", "url": "https://github.com/OpenJTD/rjtd"}, {"label": "OpenJTD specification", "url": "https://github.com/OpenJTD/spec"}]
metrics: [{"value": "3 document formats", "label": "JTD, JTT, JTTC"}, {"value": "4 text-oriented exports", "label": "Text, Markdown, JSON, PDF"}, {"value": "2 interfaces", "label": "Command-line tools, WebAssembly"}]
code: "EJ105"
status: {"label": "Public · In development", "tone": "wait"}
---

## Problem

Ichitaro documents use proprietary formats that are difficult to read or reuse outside the original software. I wanted to support access and preservation through public format research and an independent implementation.

## What I built

OpenJTD is a project for sharing JTD format research, specifications, and validation materials. As part of that work, I developed `rjtd`, a Rust toolset for inspecting file containers, extracting text, and exporting a document model as text, Markdown, JSON, or text-oriented PDF. It also provides command-line tools and WebAssembly bindings.

## Design decisions

- **Separate observations from hypotheses.** Confirmed document structures and experimental interpretations are distinguished in the specification and implementation.
- **Preserve unknown source data.** Uninterpreted data and original structures are retained where possible for future research.
- **Handle malformed inputs.** The parser considers failure behavior and resource usage when documents are damaged or unexpected.

## Status

The source and format research are public and development continues. Faithful reproduction of document layouts and structure-preserving editing and saving remain incomplete.
