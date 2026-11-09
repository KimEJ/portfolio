---
kind: "company"
tier: "more"
order: 6
anonymized: true
title: "제조사 사내 규정 RAG 검색"
summary: "사내 규정과 서식을 관리하고, 권한에 맞는 문서를 근거로 질문에 답하는 지식 검색 서비스"
period: {"start": "2026-08", "end": "2026-10"}
role: "설계 및 개발"
stack: ["Spring Boot 3", "React", "PostgreSQL", "pgvector", "BGE-M3", "Gemini"]
platforms: ["web", "server"]
cover: "/projects/knowledge-assistant/02-answer.webp"
images: [{"src": "/projects/knowledge-assistant/02-answer.webp", "alt": "근거 조항과 원문이 함께 붙는 답변"}, {"src": "/projects/knowledge-assistant/01-home.webp", "alt": "사용자 홈"}, {"src": "/projects/knowledge-assistant/03-knowledge.webp", "alt": "지식함"}]
links: []
metrics: [{"value": "9종 파일 등록", "label": "PDF, HWP, HWPX, DOC, DOCX, XLSX, PPTX, TXT, MD"}, {"value": "3가지 검색 혼합", "label": "의미 검색, 전문 검색, 조항·문서 번호 검색"}, {"value": "2개 업무 영역", "label": "임직원의 지식 활용과 관리자의 문서 관리"}]
code: "EJ202"
status: {"label": "시연 데모", "tone": "hold"}
---

## 문제

직원이 사내 규정이나 서식을 찾으려면 관련 문서를 직접 찾아 내용을 확인해야 합니다.
물론 기존에도 업무 지원 소프트웨어가 있었으나, 문서를 찾거나 저장하는 데 불편함이 있었습니다.

## 만든 것

관리자가 규정 문서를 등록하고 권한과 버전을 관리하면, 직원이 자연어로 질문해 접근 가능한 문서의 근거와 함께 답변을 받는 서비스를 만들었습니다. 문서는 텍스트를 추출해 조항 단위로 색인하고, 답변에 원문 출처를 연결합니다.
또, MCP로 외부 AI 툴과 연동하여 허가된 문서를 직접 업무에 활용하거나, 필요한 업무 지식을 추가할 수 있게 구현했습니다.

## 설계에서 고민한 것

- **자연어와 정확한 번호 검색.** 의미 검색과 전문 검색을 결합하고, 조항·문서 번호를 직접 찾는 경로를 추가했습니다.
- **권한을 반영한 검색.** 검색 단계에서 사용자별·경로별 문서 열람 권한으로 필터링해, 접근 가능한 문서만 답변의 근거로 사용하도록 했습니다.
