---
kind: "personal"
tier: "featured"
order: 1
title: "Galpium"
summary: "ChatGPT가 함께 읽고 쓰는, 로컬 우선 macOS 개인 위키"
period: {"start": "2026-10"}
role: "1인 개발: 설계, 구현, 배포"
stack: ["Swift 6", "SwiftUI", "AppKit · TextKit", "SQLite", "MCP", "On-device embeddings"]
platforms: ["macos"]
cover: "/projects/galpium/wiki-page.jpg"
images: [{"src": "/projects/galpium/wiki-page.jpg", "alt": "위키 페이지 편집 화면"}, {"src": "/projects/galpium/materials.jpg", "alt": "원본 자료 목록과 인용"}]
links: [{"label": "GitHub", "url": "https://github.com/KimEJ/Galpium"}, {"label": "Release v0.0.2", "url": "https://github.com/KimEJ/Galpium/releases/tag/v0.0.2"}]
metrics: [{"value": "4가지 주요 자료", "label": "텍스트, PDF, 이미지, 오디오"}, {"value": "2가지 검색 방식", "label": "키워드 검색, 의미 검색"}, {"value": "3개 화면 언어", "label": "한국어, 영어, 일본어"}]
code: "EJ101"
status: {"label": "공개 v0.0.2", "tone": "go"}
---

## 문제

AI와 함께 메모를 정리하면 결과물이 대화창에 흩어지고, 원본 자료와의 연결은 끊깁니다. 노트는 내 컴퓨터에 두되, AI도 같은 노트를 읽고 고칠 수 있었으면 했습니다.

## 만든 것

Markdown 페이지와 원본 자료, 인용과 수정 이력을 한 로컬 라이브러리에 보관하는 macOS 앱입니다. 사용자는 페이지를 연결하고 자료를 키워드나 의미로 검색할 수 있습니다. MCP 서버를 통해 ChatGPT 데스크톱 등 AI 클라이언트도 같은 위키를 읽고 편집할 수 있습니다.

## 설계에서 고민한 것

- **원본과 인용 보존.** 원본 자료를 따로 보관하고 인용 각주에서 해당 구절로 돌아갈 수 있게 했습니다. 이미지·오디오 검색 결과는 검증된 인용문이 아닌 위치로 보여줍니다.
- **앱과 AI의 동시 편집 보호.** 같은 페이지를 함께 수정할 때 기존 리비전을 확인해 다른 쪽의 변경을 조용히 덮어쓰지 않도록 했습니다.
- **로컬 검색과 자원 관리.** 기기에서 키워드·의미 검색을 수행하고, 검색용 임베딩 작업을 별도 워커로 분리해 사용하지 않을 때 메모리 점유를 줄였습니다.

## 현재 상태

v0.0.2 공개 릴리스(Apple silicon 전용), Apache-2.0.
