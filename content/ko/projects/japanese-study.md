---
kind: "personal"
tier: "more"
order: 9
title: "일본어·BJT 학습 앱"
summary: "한국어 해설과 적응형 배치고사로 일반 일본어와 BJT 유형을 함께 연습하는 학습 앱"
period: {"start": "2026-11"}
role: "1인 개발"
stack: ["Expo", "React Native", "TypeScript", "Node.js", "PostgreSQL"]
platforms: ["web", "ios", "android"]
cover: "/projects/japanese-study/01-home.webp"
images: [{"src": "/projects/japanese-study/01-home.webp", "alt": "홈"}, {"src": "/projects/japanese-study/02-lessons.webp", "alt": "단계별 학습"}, {"src": "/projects/japanese-study/03-bjt.webp", "alt": "BJT 유형 연습"}, {"src": "/projects/japanese-study/04-vocab.webp", "alt": "단어 카드"}]
links: []
metrics: [{"value": "7,742개", "label": "어휘"}, {"value": "434개", "label": "일반 일본어 레슨"}, {"value": "340개", "label": "BJT 유형 연습 문항"}]
code: "EJ205"
status: {"label": "개발 중", "tone": "wait"}
---

## 문제

한국어 해설을 보며 일본어 기초부터 비즈니스 일본어 시험(BJT) 유형까지 한 곳에서 연습할 수 있는 학습 도구가 필요했습니다.

## 만든 것

일반 일본어 레슨과 BJT 유형 연습, 어휘 학습과 오답 복습을 한 앱에 담았습니다. 웹과 iOS·Android에서 화면을 공유하도록 Expo와 React Native로 구성했습니다. 위 콘텐츠 수는 프로젝트의 문제은행 데이터 기준입니다.

## 설계에서 고민한 것

- **수준에 맞는 배치고사.** 답변마다 추측과 실수 가능성을 반영해 수준을 추정하고, 추정의 불확실성을 줄일 다음 문항을 고르도록 했습니다.
- **학습과 복습 연결.** 틀린 문항을 다시 풀고, 어휘 카드는 응답에 따라 다음 복습 시점을 정하도록 구성했습니다.
- **문제은행과 학습 기록 분리.** 콘텐츠는 API로 제공하고 버전별로 캐시하며, 학습 기록은 로그인 없이 기기에 저장합니다.
- **연습 결과의 범위 표시.** 자체 제작한 연습 문항과 참고 점수를 공식 기출이나 실제 시험 결과와 구분했습니다.

## 현재 상태

초기 개발 중입니다.
