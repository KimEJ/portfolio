---
kind: "personal"
tier: "more"
order: 9
title: "Japanese and BJT Study App"
summary: "A study app for general Japanese and BJT-style practice with Korean explanations and adaptive placement"
period: {"start": "2026-11"}
role: "Solo"
stack: ["Expo", "React Native", "TypeScript", "Node.js", "PostgreSQL"]
platforms: ["web", "ios", "android"]
cover: "/projects/japanese-study/01-home.webp"
images: [{"src": "/projects/japanese-study/01-home.webp", "alt": "Home"}, {"src": "/projects/japanese-study/02-lessons.webp", "alt": "Lessons by level"}, {"src": "/projects/japanese-study/03-bjt.webp", "alt": "BJT-style practice"}, {"src": "/projects/japanese-study/04-vocab.webp", "alt": "Vocabulary cards"}]
links: []
metrics: [{"value": "7,742", "label": "vocabulary words"}, {"value": "434", "label": "general Japanese lessons"}, {"value": "340", "label": "BJT-style practice questions"}]
code: "EJ205"
status: {"label": "In development", "tone": "wait"}
---

## Problem

I needed a learning tool that combines Korean explanations with practice from basic Japanese through Business Japanese Test (BJT) question types.

## What I built

The app brings together general Japanese lessons, BJT-style practice, vocabulary study, and review of incorrect answers. Expo and React Native share the interface across web, iOS, and Android. The content counts above are based on the project's question-bank data.

## Design decisions

- **Adaptive placement.** Each answer updates an ability estimate that accounts for guesses and mistakes, then the app selects a question intended to reduce uncertainty.
- **Connecting study and review.** Learners can retry incorrect questions, while vocabulary cards schedule the next review based on their response.
- **Separating content from progress.** The question bank is served by an API and cached by version; study history stays on the device without a login.
- **Clarifying practice results.** Original practice questions and reference scores are distinguished from official past papers and actual exam results.

## Status

Early development.
