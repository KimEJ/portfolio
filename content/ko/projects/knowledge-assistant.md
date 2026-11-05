---
kind: "company"
tier: "more"
order: 6
anonymized: true
title: "제조사 사내 규정 RAG 검색"
summary: "부서·직급 권한을 지키면서 출처와 함께 답하는 사내 규정·서식 검색"
period: {"start": "2026-10"}
role: "설계 및 개발"
stack: ["Spring Boot 3", "React", "PostgreSQL", "pgvector", "BGE-M3", "Gemini"]
platforms: ["web", "server"]
cover: "/projects/knowledge-assistant/02-answer.webp"
images: [{"src": "/projects/knowledge-assistant/02-answer.webp", "alt": "근거 조항과 원문이 함께 붙는 답변"}, {"src": "/projects/knowledge-assistant/01-home.webp", "alt": "사용자 홈"}, {"src": "/projects/knowledge-assistant/03-knowledge.webp", "alt": "지식함"}]
links: []
metrics: [{"value": "RRF", "label": "벡터 + 전문 검색 결합"}, {"value": "1024", "label": "차원 사내 임베딩"}, {"value": "19", "label": "DB 마이그레이션"}]
code: "EJ202"
status: {"label": "시연 데모", "tone": "hold"}
---

## 문제

직원들이 사내 규정과 서식을 자연어로 묻고, 출처가 달린 답을 받아야 했습니다. 단, 각자 권한이 있는 문서만 근거로 써야 했습니다.

## 만든 것

업로드된 문서(PDF, Office, HWP)에서 텍스트를 뽑아 조항 단위로 나누고, LLM으로 검색 보조 정보를 덧붙인 뒤 임베딩해 저장합니다. 사용자용·관리자용 웹과 Spring Boot API로 구성했습니다.

## 설계에서 고민한 것

- **하이브리드 검색.** 벡터 검색만으로는 "제12조" 같은 정확한 조항 번호를 놓쳐서, Postgres 전문 검색과 RRF로 결합하고 조항 번호가 정확히 일치하면 맨 앞에 올렸습니다.
- **문서당 결과 상한.** 문서 하나가 상위 결과를 전부 차지하는 일이 있어 문서별로 개수를 제한했습니다.
- **권한은 검색 쿼리 안에서.** 결과를 받은 뒤 걸러내지 않고, 검색 SQL 자체에서 권한을 확인합니다.
- **질문 유형 라우팅.** "몇 개", "목록" 같은 질문은 유사도 검색으로 답할 수 없어서 별도 경로로 보냅니다.
- **임베딩 교체.** 1536차원 외부 임베딩에서 1024차원 사내 BGE-M3로 옮기면서, 서버 시작 시 기존 문서를 백필하게 했습니다.
