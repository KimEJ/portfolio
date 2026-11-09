---
kind: "company"
tier: "more"
order: 7
anonymized: true
title: "제조사 A/S·ERP 연동 플랫폼"
summary: "운영 ERP의 A/S·배송 데이터를 별도 통합 DB로 수집해 조회와 분석에 연결"
period: {"start": "2026-09", "end": "2026-10"}
role: "설계 및 개발"
stack: ["Python", "FastAPI", "PostgreSQL", "SQL Server", "Docker", "Azure"]
platforms: ["web", "server"]
cover: "/projects/erp-integration/03-erp-sync.webp"
images: [{"src": "/projects/erp-integration/03-erp-sync.webp", "alt": "ERP 단방향 연동 현황"}, {"src": "/projects/erp-integration/01-dashboard.webp", "alt": "역할별 통합 대시보드"}, {"src": "/projects/erp-integration/02-kpi.webp", "alt": "5개 영역 KPI"}]
links: []
metrics: [{"value": "27개", "label": "설정된 ERP 연동 대상 테이블"}, {"value": "5분", "label": "최단 설정 동기화 주기"}, {"value": "5단계", "label": "사용자 권한"}]
code: "EJ203"
status: {"label": "시연 데모", "tone": "hold"}
---

## 문제

A/S와 배송 관련 데이터가 운영 ERP에 있어, 이를 분석과 업무 화면에 활용하려면 기존 ERP를 변경하지 않고 데이터를 가져올 방법이 필요했습니다.

## 만든 것

ERP 데이터를 읽기 전용으로 수집해 별도 통합 DB에 반영하고, A/S 이력과 배송 정보, 연동 상태를 조회할 수 있는 플랫폼을 만들었습니다. 테이블별 특성에 따라 워터마크를 이용해 변경분을 가져오거나 전체 스냅샷을 수집합니다. FastAPI와 웹 화면을 구성하고 Azure 환경에 Docker Compose로 배포할 수 있도록 했습니다.

## 설계에서 고민한 것

- **기존 ERP 영향 최소화.** 읽기 전용 접근과 테이블별 주기 설정으로 운영 ERP의 부담을 줄이고, 전체 적재는 기본적으로 업무 외 시간에 실행하도록 했습니다.
- **삭제와 변경 반영.** 키 대조 대상은 원본에서 사라진 데이터를 삭제 표시로 남기고, 조회 이상이 의심될 만큼 키가 줄어들면 삭제 표시를 중단합니다. 적재 이력과 연동 상태도 확인할 수 있도록 했습니다.
- **개인정보 접근 제어.** 개인정보는 기본 수집 대상에서 제외하고, 필요한 경우 설정에 따라 암호화해 적재하도록 했습니다. 원문 열람은 별도 API에서 권한을 확인하고 감사 로그에 남기며, 고권한 계정에는 2단계 인증을 적용할 수 있도록 했습니다.
- **업무별 권한 분리.** 배송 기사는 본인에게 배정된 차량의 일정만, 실무자는 담당 업무만 볼 수 있도록 접근 범위를 나눴습니다. 경영진은 여러 업무의 현황을 조회하되 개인정보는 숨기고, 부서장과 관리자의 개인정보 원문 열람에는 사유 입력과 감사 기록을 적용했습니다.
