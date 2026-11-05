---
kind: "personal"
tier: "more"
order: 9
title: "Japanese and BJT Study App"
summary: "A web, iOS, and Android Japanese study app with Korean explanations and an adaptive placement test"
period: {"start": "2026-11"}
role: "Solo"
stack: ["Expo", "React Native", "TypeScript", "Node.js", "PostgreSQL"]
platforms: ["web", "ios", "android"]
cover: "/projects/japanese-study/01-home.webp"
images: [{"src": "/projects/japanese-study/01-home.webp", "alt": "Home"}, {"src": "/projects/japanese-study/02-lessons.webp", "alt": "Lessons by level"}, {"src": "/projects/japanese-study/03-bjt.webp", "alt": "BJT-style practice"}, {"src": "/projects/japanese-study/04-vocab.webp", "alt": "Vocabulary cards"}]
links: []
metrics: [{"value": "7,742", "label": "vocabulary words"}, {"value": "434", "label": "lessons"}, {"value": "340", "label": "BJT-style items"}]
code: "EJ205"
status: {"label": "In development", "tone": "wait"}
---

## Problem

There were almost no free materials for preparing for the Business Japanese Test (BJT) in Korean.

## What I built

General Japanese lessons, BJT-style practice, wrong-answer review, and 7,742 vocabulary words in one app. A single Expo codebase ships to web, iOS, and Android.

## Design decisions

- **Content lives outside the app.** The question bank moved behind an API, so content fixes do not need a client release. The bank is replaced in one transaction, and only when its hash changes.
- **Adaptive placement.** An IRT-style model with guessing and slip terms picks the next item that should shrink the ability estimate's uncertainty the most.
- **Only honest features.** No fake spaced repetition and no official-score predictions. Questions are original, not official past papers.
- **No login.** Progress stays on the device.

## Status

Early development.
