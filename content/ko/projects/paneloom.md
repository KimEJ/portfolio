---
kind: "personal"
tier: "featured"
order: 3
title: "Paneloom"
summary: "합성 페르소나 패널로 제품 설문을 미리 돌려보는 로컬 macOS 워크벤치"
period: {"start": "2026-10"}
role: "1인 개발"
stack: ["Python (stdlib)", "SQLite", "llama.cpp", "Swift · WKWebView", "HTML/CSS/JS"]
platforms: ["macos"]
cover: "/projects/paneloom/01-results.webp"
images: [{"src": "/projects/paneloom/01-results.webp", "alt": "완료된 설문 결과: 가격 수용·사용 의향·인물별 응답"}]
links: [{"label": "GitHub", "url": "https://github.com/KimEJ/persona-lab"}]
metrics: [{"value": "1만 명", "label": "일본 합성 페르소나 데이터"}, {"value": "최대 5개", "label": "같은 표본으로 상품 비교"}, {"value": "9개", "label": "기본 평가·의향·가격 평가 항목"}]
code: "EJ103"
status: {"label": "공개 v0.8.1", "tone": "go"}
---

## 문제

실제 패널 조사를 진행하기 전에 상품 설명과 질문, 가격대 설정을 살펴보고 비교할 수 있는 도구가 필요했습니다. 상품 문서와 설문 결과는 외부 서비스로 보내지 않고 로컬에서 다루고자 했습니다.

## 만든 것

일본 합성 페르소나 1만 명(NVIDIA Nemotron-Personas-Japan) 중 조건에 맞는 표본을 추출하고 로컬 모델로 상품 설문을 실행하는 macOS 앱입니다. 같은 표본으로 최대 5개 상품을 비교하고, 사용 의향과 지불 의향 가격대의 분포를 확인합니다. 결과와 실행 조건은 HTML·PDF·CSV 등의 보고서로 내보낼 수 있습니다.

## 설계에서 고민한 것

- **비교 조건 유지.** 설문 시작 시 표본과 상품 조건을 고정해 같은 인물의 응답을 비교하고, 당시 실행 조건을 결과와 함께 확인할 수 있도록 했습니다.
- **단계별 저장과 재개.** 기본 평가 7문항, 사용 의향, 최대 지불 의향 가격대 평가를 진행하며 단계마다 결과를 저장합니다. 중단 후 이어서 실행할 수 있고 원본 모델 호출도 보존합니다.
- **가격 판단과 계산 분리.** 모델에는 판매가를 전달하지 않고 지불 의향 가격대를 고르게 합니다. 가격 수용 여부는 사용 의향과 판매조건을 바탕으로 코드에서 계산하며, 판단이 어려운 경우는 별도로 남깁니다.
- **결과 혼합 방지.** 기존 실행은 원래 질문 계약에 맞춰 재개하고, 런타임 오류 수정 전 결과는 보존하되 새 결과와 섞어 재개하지 않습니다.

## 한계

실제 소비자 반응을 예측한다고 검증된 도구가 아닙니다. 설문 설계를 점검하기 위한 프로토타입을 v0.8.1로 공개했습니다.

<small>페르소나 데이터: NVIDIA Nemotron-Personas-Japan (CC BY 4.0)</small>
