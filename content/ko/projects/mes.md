---
kind: "company"
tier: "more"
order: 8
anonymized: true
title: "제조 생산관리 시스템(MES)"
summary: "수주부터 BOM, 작업지시, 출하, 자재 발주까지 잇는 관리 웹과 현장 모바일 화면"
period: {"start": "2026-10"}
role: "설계 및 개발"
stack: ["React 19", "TanStack", "Next.js 16", "Prisma", "PostgreSQL", "Azure Blob"]
platforms: ["web", "server"]
cover: "/projects/mes/02-production.webp"
images: [{"src": "/projects/mes/02-production.webp", "alt": "제작·출고 현황"}, {"src": "/projects/mes/03-order-detail.webp", "alt": "발주 상세와 변경 이력"}, {"src": "/projects/mes/04-field-mobile.webp", "alt": "현장 작업자용 모바일 화면"}]
links: []
metrics: [{"value": "31", "label": "데이터 모델"}, {"value": "~600", "label": "테스트 케이스"}, {"value": "0", "label": "데모용 백엔드 의존"}]
code: "EJ204"
status: {"label": "시연 데모", "tone": "hold"}
---

## 문제

중소 제조사의 생산 관리가 엑셀과 구두 전달로 이뤄지고 있었습니다. 수주, BOM, 작업지시, 출하가 따로 놀아서 누가 언제 무엇을 바꿨는지 추적할 수 없었습니다.

## 만든 것

관리자용 웹과 현장 작업자용 모바일 화면(`/field`), 그리고 Next.js Route Handler와 Prisma로 만든 백엔드입니다.

## 설계에서 고민한 것

- **모든 상태 변화를 이력으로.** 수주, 작업 단계, 출하의 전이를 별도 이력 테이블에 남겨 감사할 수 있게 했습니다.
- **BOM 리비전 스냅샷.** 확정된 BOM을 스냅샷으로 남기고 작업지시와 연결해, 나중에 BOM이 바뀌어도 당시 기준을 알 수 있습니다.
- **오래된 저장은 거절.** 실시간 동기화 대신, 다른 사람이 먼저 고친 데이터를 덮어쓰려 하면 거절하고 최신 값을 보여줍니다.
- **백엔드 없는 데모.** 브라우저 안의 데모 API 전송 계층으로 정적 사이트만으로 시연할 수 있게 했습니다.
