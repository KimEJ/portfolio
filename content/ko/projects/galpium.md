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
metrics: [{"value": "0", "label": "외부 Swift 패키지"}, {"value": "93", "label": "테스트"}, {"value": "3", "label": "UI 언어 (ko·en·ja)"}]
code: "EJ101"
status: {"label": "공개 v0.0.2", "tone": "go"}
---

## 문제

AI와 함께 메모를 정리하면 결과물이 대화창에 흩어지고, 원본 자료와의 연결은 끊깁니다. 노트는 내 컴퓨터에 두되, AI도 같은 노트를 읽고 고칠 수 있었으면 했습니다.

## 만든 것

Markdown 페이지, 원본 자료(PDF·이미지·오디오), 인용을 한 라이브러리에 담는 macOS 앱입니다. MCP stdio 서버를 같이 제공해서 ChatGPT 데스크톱이 사용자와 같은 위키를 읽고 편집할 수 있습니다.

- **GalpiumCore**: 저장소, 인용, 리비전, 검색, MCP 프로토콜
- **GalpiumApp**: SwiftUI와 AppKit/TextKit 편집기
- **GalpiumEmbedder**: 라이브러리마다 하나씩 뜨는 임베딩 워커. 사용자 전용 Unix 소켓으로만 통신

## 설계에서 고민한 것

- **외부 Swift 패키지 0개.** 시스템 SQLite만 써서 빌드와 공급망을 단순하게 유지했습니다.
- **동시 편집 보호.** 앱과 AI가 같은 페이지를 고칠 수 있으므로 모든 쓰기에 `expected_revision`을 요구해 조용한 덮어쓰기를 막았습니다.
- **임베딩 캐시 격리.** 모델·전처리 버전별로 캐시 네임스페이스를 나눠서, 호환되지 않는 벡터가 절대 섞이지 않게 했습니다.
- **메모리 절약.** 인덱싱 큐가 비면 멀티모달 런타임을 내리고, 60초 동안 쓰지 않으면 워커를 종료합니다.
- **인용 검증.** 인용은 원본 해시와 추출 위치로 검증합니다. 이미지·오디오 검색 결과는 인용문이 아니라 위치로 보여줍니다.

## 현재 상태

v0.0.2 공개 릴리스(Apple silicon 전용), Apache-2.0.
