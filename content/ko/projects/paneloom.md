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
links: []
metrics: [{"value": "10,000", "label": "합성 페르소나"}, {"value": "198", "label": "백엔드 테스트"}, {"value": "0", "label": "외부 Python 의존성"}]
code: "EJ103"
status: {"label": "프로토타입", "tone": "hold"}
---

## 문제

제품 설문을 실제 패널에 돌리기 전에, 설문 문항과 가격대 설정이 말이 되는지 싸고 빠르게 확인해볼 방법이 필요했습니다. 데이터가 밖으로 나가지 않도록 전부 로컬에서 돌아가야 했습니다.

## 만든 것

일본 합성 페르소나 1만 명(NVIDIA Nemotron-Personas-Japan) 중에서 표본을 뽑아 로컬 LLM에게 설문을 시키는 macOS 앱입니다. 백엔드는 Python 표준 라이브러리와 SQLite만 쓰고, 화면은 WKWebView에 띄운 로컬 웹 UI입니다. 결과는 HTML, PDF, CSV 보고서로 내보냅니다.

## 설계에서 고민한 것

- **단계별 저장과 재개.** 기본 문항 7개, 사용 의향, 최대 지불 의향 순으로 묻고 단계마다 결과를 저장합니다. 중간에 끊겨도 이어서 돌릴 수 있고, 원본 모델 호출도 그대로 남깁니다.
- **계산은 코드가 함.** 모델은 가격대만 고르고, 수용률 계산은 코드가 합니다.
- **앵커링 방지.** 자동 가격대 탐색에서는 판매가를 모델에게 보여주지 않습니다. 범위 조정은 코드가 하고, 라운드 간 응답이 모순되면 표시합니다.
- **버전 고정.** 예전 실행은 원래 계약대로만 재개하고, 버그 수정 전 결과와 수정 후 결과를 섞지 않습니다.

## 한계

실제 소비자 반응을 예측한다고 검증된 도구가 아닙니다. 설문 설계를 점검하기 위한 프로토타입이며 공개 배포 전입니다.

<small>페르소나 데이터: NVIDIA Nemotron-Personas-Japan (CC BY 4.0)</small>
