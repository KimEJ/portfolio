---
kind: "company"
tier: "featured"
order: 4
anonymized: true
title: "엣지 AI 어플라이언스 OS 빌더"
summary: "필요한 기능만 골라 Jetson 장비용 OS 이미지를 조립하는 빌드 시스템"
period: {"start": "2026-10"}
role: "설계 및 개발"
stack: ["Python", "NVIDIA Jetson AGX Orin", "systemd", "PostgreSQL 17", "Qdrant", "KVM", "NGINX"]
platforms: ["edge", "server"]
cover: "/projects/ark/01-setup.webp"
images: [{"src": "/projects/ark/01-setup.webp", "alt": "첫 부팅 설정: 설치 방식 선택"}, {"src": "/projects/ark/02-features.webp", "alt": "기능 프로파일 선택"}]
links: []
metrics: [{"value": "1,905", "label": "테스트"}, {"value": "7", "label": "기능 프로파일"}, {"value": "164", "label": "이미지 검증 항목"}]
code: "EJ104"
status: {"label": "인수 테스트 전", "tone": "wait"}
---

## 문제

사내망에서만 쓰는 AI 지식 장비를 고객마다 다르게 구성해야 했습니다. 문서 관리, OCR, RAG, 위키, 개발용 VM처럼 필요한 기능이 고객마다 달라서, 이미지를 손으로 만들면 빠지는 기능이나 맞지 않는 버전이 생겼습니다.

## 만든 것

보드, 프로파일, 모듈을 선언적으로 정의하고 `plan → stage → provision → image` 순서로 OS 이미지를 조립하는 CLI입니다. 기본(Base) 계층에는 PostgreSQL 17, NGINX 게이트웨이, 기능별 UI를 묶는 매니페스트가 들어가고, 기능은 프로파일 단위로 얹습니다(base, documents, wiki, rag, assistant, workshop, full).

## 설계에서 고민한 것

- **선택한 기능은 절대 조용히 빠지지 않음.** 모듈은 의존성, 패키지, 산출물, 서비스를 모두 선언해야 하고, 자산이 없거나 해시가 다르면 빌드를 중단합니다.
- **부가 기능 장애가 장비를 멈추지 않음.** VPN, OAuth, PKI 설정이 실패해도 사내망 기본 기능은 뜨도록 했습니다.
- **상용 가능한 라이선스.** 비상업 라이선스 리랭커를 GTE로 교체했습니다.
- **기존 데이터 보존.** 장비를 옮길 때 NVMe 데이터를 UUID로 식별해 유지하고, 자동 포맷은 하지 않습니다.
- **오프라인 설치.** 모든 외부 자산을 SHA256으로 고정하고, 암호화 백업·복원에는 저널과 롤백을 둡니다.

## 현재 상태

소스는 완성됐고, 실제 장비에서의 인수 테스트를 앞두고 있습니다.
