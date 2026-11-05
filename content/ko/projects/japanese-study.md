---
kind: "personal"
tier: "more"
order: 9
title: "일본어·BJT 학습 앱"
summary: "한국어 해설과 적응형 배치고사가 있는 웹·iOS·Android 일본어 학습 앱"
period: {"start": "2026-11"}
role: "1인 개발"
stack: ["Expo", "React Native", "TypeScript", "Node.js", "PostgreSQL"]
platforms: ["web", "ios", "android"]
cover: "/projects/japanese-study/01-home.webp"
images: [{"src": "/projects/japanese-study/01-home.webp", "alt": "홈"}, {"src": "/projects/japanese-study/02-lessons.webp", "alt": "단계별 학습"}, {"src": "/projects/japanese-study/03-bjt.webp", "alt": "BJT 유형 연습"}, {"src": "/projects/japanese-study/04-vocab.webp", "alt": "단어 카드"}]
links: []
metrics: [{"value": "7,742", "label": "어휘"}, {"value": "434", "label": "레슨"}, {"value": "340", "label": "BJT 유형 문항"}]
code: "EJ205"
status: {"label": "개발 중", "tone": "wait"}
---

## 문제

비즈니스 일본어 시험(BJT)을 한국어로 준비할 수 있는 무료 자료가 거의 없었습니다.

## 만든 것

일반 일본어 레슨, BJT 유형 연습 문제, 오답 복습, 7,742개 어휘를 한 앱에 담았습니다. Expo 하나로 웹, iOS, Android를 같이 냅니다.

## 설계에서 고민한 것

- **콘텐츠를 앱 밖으로.** 문제은행을 API로 분리해서 콘텐츠를 고칠 때 앱을 다시 배포하지 않아도 됩니다. 문제은행은 해시가 바뀔 때만 한 트랜잭션으로 교체합니다.
- **적응형 배치고사.** 추측과 실수 확률을 반영한 IRT 방식 모델로, 다음 문항은 실력 추정의 불확실성을 가장 많이 줄일 것으로 고릅니다.
- **정직한 기능만.** 흉내만 낸 간격 반복이나 공식 점수 예측은 넣지 않았습니다. 문항은 직접 만든 것이며 공식 기출이 아닙니다.
- **로그인 없음.** 학습 기록은 기기에만 저장합니다.

## 현재 상태

초기 개발 중입니다.
