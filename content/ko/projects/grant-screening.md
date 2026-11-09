---
kind: "company"
tier: "more"
order: 5
anonymized: true
title: "공공 지원사업 신청서 AI 심사 플랫폼"
summary: "지원 서류의 AI 분석부터 담당자 검토와 후속 관리까지 지원하는 업무 플랫폼"
period: {"start": "2026-06", "end": "2026-08"}
role: "설계 및 개발"
stack: ["FastAPI", "Next.js 15", "PostgreSQL", "Redis", "Gemini", "Document AI · OCR", "Docker"]
platforms: ["web", "server"]
cover: "/projects/grant-screening/02-cohort.webp"
images: [{"src": "/projects/grant-screening/02-cohort.webp", "alt": "모집 회차별 지원자와 AI·담당자 판정 현황"}, {"src": "/projects/grant-screening/03-ineligible.webp", "alt": "서류 검토: 원본 서류와 AI 자격 심사, 부적격 사유"}, {"src": "/projects/grant-screening/05-masking.webp", "alt": "신분증 개인정보 마스킹 확인: 원본과 마스킹본 비교"}, {"src": "/projects/grant-screening/04-summary.webp", "alt": "보완 요청 흐름: 담당자 메모와 판정 불가 항목"}, {"src": "/projects/grant-screening/01-program.webp", "alt": "사업과 모집 회차 진행률"}, {"src": "/projects/grant-screening/06-companies.webp", "alt": "기업 DB"}]
links: []
metrics: [{"value": "6종 문서 지원", "label": "PDF, MS Office, HWP, 이미지, 텍스트, CSV"}, {"value": "5가지 업무 자동화", "label": "서류 분류, 정보 추출, 서류 요약, 요건 검토, 개인정보 마스킹"}, {"value": "3가지 후속 결정", "label": "적격 확정, 부적격 확정, 보완 요청"}]
code: "EJ201"
status: {"label": "비공개", "tone": "hold"}
---

## 문제

지원사업마다 제출 서류와 자격 요건이 달라, 담당자는 지원서류를 읽고 필요한 정보를 찾아 심사 기준과 대조해야 했습니다.

## 만든 것

사업별로 서류 종류와 심사 기준을 설정하고, 지원자 서류의 업로드부터 검토와 후속 관리까지 처리하는 플랫폼을 만들었습니다. AI가 서류 분류, 정보 추출, 문서 요약, 자격 요건 사전 검토, 개인정보 마스킹을 지원합니다. 담당자는 원본과 요약·자격 검토·마스킹 결과를 확인한 뒤 적격·부적격을 확정하거나 보완을 요청할 수 있습니다.

## 설계에서 고민한 것

- **사업별 설정.** 기본 옵션을 기반으로 사업마다 다른 서류와 추출 항목, 심사 기준을 설정할 수 있도록 구성했습니다. 자주 쓰는 항목은 미리 준비해 토글 스위치로 선택하고, 필요한 항목을 직접 추가할 수 있도록 했습니다.
- **긴 문서 작업 처리.** 분석 작업을 단계별로 나누어 워커에서 처리하고, 진행 상황을 화면에 표시했습니다.
- **AI와 담당자 검토 연결.** AI가 모든 것을 자동으로 처리하는 데에는 위험이 따릅니다. 담당자가 AI의 분석 결과를 확인하고 수정하기 쉽도록 화면을 구성했습니다.
