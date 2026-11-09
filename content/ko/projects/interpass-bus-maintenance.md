---
kind: "company"
tier: "archive"
order: 101
title: "버스 유지보수 업무 관리 시스템"
summary: "종이로 하던 버스 단말 유지보수와 재고 관리를 디지털로"
period: {"start": "2022-08", "end": "2023-08"}
role: "백엔드·웹"
stack: ["NestJS", "GraphQL", "MySQL", "Vue", "Vuetify"]
platforms: ["web", "server"]
cover: "/work/interpass/bus-erp/overview.png"
images: [{"src": "/work/interpass/bus-erp/overview.png", "alt": "시스템 개요"}, {"src": "/work/interpass/bus-erp/dashboard.png", "alt": "대시보드"}, {"src": "/work/interpass/bus-erp/service.png", "alt": "업무 관리"}, {"src": "/work/interpass/bus-erp/ledger.png", "alt": "원장"}, {"src": "/work/interpass/bus-erp/live.png", "alt": "실시간 현황"}, {"src": "/work/interpass/bus-erp/syscode.png", "alt": "시스템 코드 관리"}]
links: []
code: "EJ901"
status: {"label": "도착", "tone": "go"}
---

## 문제

버스 단말 유지보수와 재고를 아날로그 방식으로 관리하고 있어, 접수 직원과 현장 직원이 업무와 단말 정보를 함께 확인할 수 있는 시스템이 필요했습니다.

## 만든 것

유지보수 접수·처리 현황과 운수사·차량·단말기 원장, 재고를 관리하는 웹 시스템을 만들었습니다. 담당자는 접수 상태와 장비 유형 등으로 업무를 조회하고, 대시보드에서 처리 현황을 확인할 수 있습니다.

백엔드와 관리 웹을 담당했으며, GraphQL API로 접수 직원용 웹과 현장 직원용 화면이 업무 데이터를 이용하도록 구성했습니다.
