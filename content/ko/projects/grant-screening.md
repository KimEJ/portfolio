---
kind: "company"
tier: "more"
order: 5
anonymized: true
title: "공공 지원사업 신청서 AI 심사 플랫폼"
summary: "사업계획서를 읽고 추출, 자격 심사, 개인정보 마스킹까지 처리하는 문서 AI 파이프라인"
period: {"start": "2026-09"}
role: "설계 및 개발"
stack: ["FastAPI", "Next.js 15", "PostgreSQL", "Redis", "Gemini", "Document AI · OCR", "Docker"]
platforms: ["web", "server"]
cover: "/projects/grant-screening/02-cohort.webp"
images: [{"src": "/projects/grant-screening/02-cohort.webp", "alt": "모집 회차별 지원자와 AI·담당자 판정 현황"}, {"src": "/projects/grant-screening/03-ineligible.webp", "alt": "서류 검토: 원본 서류와 AI 자격 심사, 부적격 사유"}, {"src": "/projects/grant-screening/05-masking.webp", "alt": "신분증 개인정보 마스킹 확인: 원본과 마스킹본 비교"}, {"src": "/projects/grant-screening/04-summary.webp", "alt": "보완 요청 흐름: 담당자 메모와 판정 불가 항목"}, {"src": "/projects/grant-screening/01-program.webp", "alt": "사업과 모집 회차 진행률"}, {"src": "/projects/grant-screening/06-companies.webp", "alt": "기업 DB"}]
links: []
metrics: [{"value": "1,945", "label": "테스트"}, {"value": "45", "label": "DB 마이그레이션"}, {"value": "6", "label": "단계 작업 체인"}]
code: "EJ201"
status: {"label": "비공개", "tone": "hold"}
---

## 문제

지역 공공 혁신기관의 담당자들이 지원사업 신청서와 사업계획서 수백 건을 손으로 읽고 자격 요건을 확인하고 있었습니다.

## 만든 것

신청서를 올리면 분류, 추출, 참조 해석, 후처리, 심사, 산출물 생성 순서의 작업 체인이 돌고, 진행 상황은 SSE로 실시간 표시됩니다. 레이아웃 분석은 Document AI와 Vision OCR이 맡고, 얼굴과 개인정보는 자동으로 가립니다.

## 설계에서 고민한 것

- **단계별 작업 분리.** 긴 단일 작업을 단계별 잡으로 쪼개 여러 워커로 확장할 수 있게 했습니다. 문제가 생기면 설정 플래그 하나로 되돌릴 수 있습니다.
- **두 종류의 제한기.** 외부 모델의 호출 빈도·동시성 제한은 Redis 기반으로 두되 실패 시 차단(fail-closed)하고, 메모리를 많이 쓰는 마스킹 작업에는 호스트 단위 가중치 예산을 두었습니다.
- **재시도 대신 명확한 실패.** 자동 재시도를 끄고 타임아웃을 최후의 방어선으로 둬서 같은 문서가 중복 처리되지 않게 했습니다.
- **자격 증명 없이 돌아가는 스텁 모드.** 외부 서비스 키가 없어도 전체 UI와 흐름을 시연할 수 있습니다.
