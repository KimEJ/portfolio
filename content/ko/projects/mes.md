---
kind: "company"
tier: "more"
order: 8
anonymized: true
title: "제조 생산관리 시스템(MES)"
summary: "수주부터 BOM, 작업지시, 출하, 자재 발주까지 잇는 관리 웹과 현장 모바일 화면"
period: {"start": "2026-09", "end": "2026-10"}
role: "설계 및 개발"
stack: ["React 19", "TanStack", "Next.js 16", "Prisma", "PostgreSQL", "Azure Blob"]
platforms: ["web", "server"]
cover: "/projects/mes/02-production.webp"
images: [{"src": "/projects/mes/02-production.webp", "alt": "제작·출고 현황"}, {"src": "/projects/mes/03-order-detail.webp", "alt": "발주 상세와 변경 이력"}, {"src": "/projects/mes/04-field-mobile.webp", "alt": "현장 작업자용 모바일 화면"}]
links: []
metrics: [{"value": "5가지 생산 업무", "label": "수주, BOM, 작업지시·제작, 출하, 자재 발주"}, {"value": "2개 업무 환경", "label": "관리자 웹, 현장 작업자용 모바일"}, {"value": "3종 변경 이력", "label": "수주, 작업 단계, 출하"}]
code: "EJ204"
status: {"label": "시연 데모", "tone": "hold"}
---

## 문제

수주 내용이 제작과 출하까지 이어지는 과정에서 작업 기준과 변경 사항을 관계자들이 함께 확인할 수 있어야 했습니다. 특히 작업이 시작된 뒤 사양이 바뀌면, 어떤 기준으로 작업이 진행됐는지 추적할 필요가 있었습니다.

## 만든 것

수주와 BOM을 관리하고, BOM 확정 시 작업지시를 자동으로 발행해 제작·출하와 자재 발주까지 연결하는 생산관리 시스템을 만들었습니다. 관리자는 웹에서 업무 현황을 확인하고, 현장 작업자는 모바일 화면에서 작업지시와 진행 상태를 확인할 수 있습니다.

## 설계에서 고민한 것

- **확정된 작업 기준 보존.** BOM을 확정할 때 내용을 리비전으로 남기고 작업지시와 연결해, 이후 사양이 바뀌어도 확정 이력을 확인할 수 있도록 했습니다.
- **변경 이력 추적.** 수주, 작업 단계, 출하의 주요 변경을 이력으로 남겨 업무 진행 과정을 확인할 수 있도록 했습니다.
- **동시 수정 보호.** 발주 상세를 여러 사용자가 수정할 때 이전 버전으로 저장하면 충돌을 감지하고 최신 값을 확인하게 해, 먼저 반영된 변경을 덮어쓰지 않도록 했습니다.
