---
kind: "company"
tier: "more"
order: 7
anonymized: true
title: "제조사 A/S·ERP 연동 플랫폼"
summary: "운영 중인 ERP를 건드리지 않고 A/S·출고 데이터를 통합 DB로 복제해 분석에 연결"
period: {"start": "2026-10"}
role: "설계 및 개발"
stack: ["Python", "FastAPI", "PostgreSQL", "SQL Server", "Docker", "Azure"]
platforms: ["web", "server"]
cover: "/projects/erp-integration/03-erp-sync.webp"
images: [{"src": "/projects/erp-integration/03-erp-sync.webp", "alt": "ERP 단방향 연동 현황"}, {"src": "/projects/erp-integration/01-dashboard.webp", "alt": "역할별 통합 대시보드"}, {"src": "/projects/erp-integration/02-kpi.webp", "alt": "5개 영역 KPI"}]
links: []
metrics: [{"value": "27", "label": "동기화 테이블"}, {"value": "5분", "label": "최소 동기화 주기"}, {"value": "5", "label": "권한 레벨"}]
code: "EJ203"
status: {"label": "시연 데모", "tone": "hold"}
---

## 문제

A/S와 출고 데이터는 운영 중인 ERP에 있었고, 품질 분석을 하려면 이 데이터를 꺼내야 했습니다. ERP는 절대 느려지거나 바뀌면 안 됐습니다.

## 만든 것

SSH 터널 너머의 ERP(SQL Server)에서 테이블별 워터마크로 변경분을 읽어 PostgreSQL 미러 테이블에 적재하는 로더, 그리고 그 위의 FastAPI와 웹 화면입니다. Azure VM에서 Docker Compose로 운영합니다.

## 설계에서 고민한 것

- **ERP는 읽기 전용.** SELECT만 허용하도록 코드에서 강제하고, 잠금 없이 읽어 운영 ERP에 부담을 주지 않습니다.
- **물리 삭제 없음.** ERP에는 삭제 플래그가 없어서 매일 키 차이를 비교해 삭제 표시만 합니다. ERP 키가 미러의 절반 아래로 줄면 사고로 보고 중단합니다.
- **등급별 주기.** 테이블마다 5분, 15분, 30분, 하루 주기로 나눴고, 전체 적재는 업무 외 시간(19시~07시)에만 돌립니다.
- **개인정보는 처음부터 제외.** 개인정보 컬럼은 SELECT 단계에서 빼고, 설정 검사로 다시 확인합니다. 열람이 필요하면 감사 로그가 남는 별도 API를 거치고, 상위 권한에는 TOTP를 요구합니다.
