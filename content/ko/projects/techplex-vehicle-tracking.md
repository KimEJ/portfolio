---
kind: "company"
tier: "archive"
order: 112
title: "차량 운행 기록 시스템"
summary: "차량 단말이 수집한 운행 기록을 저장·시각화"
period: {"start": "2020-01", "end": "2021-03"}
role: "서버·웹"
stack: ["Node.js", "MongoDB", "Docker", "Vue", "TypeScript"]
platforms: ["web", "server"]
cover: "/work/techplex/car-tracking/overview.png"
images: [{"src": "/work/techplex/car-tracking/overview.png", "alt": "시스템 개요"}, {"src": "/work/techplex/car-tracking/main.png", "alt": "메인"}, {"src": "/work/techplex/car-tracking/detail.png", "alt": "운행 기록"}]
links: []
code: "EJ912"
status: {"label": "도착", "tone": "go"}
---

## 문제

차량 단말이 수집한 운행 기록을 받아, 운행 경로와 시간대별 상태를 확인할 수 있는 화면이 필요했습니다.

## 만든 것

차량 단말이 보내는 운행 기록을 받는 서버와 이를 조회하는 웹을 만들었습니다. 날짜와 차량 등을 기준으로 운행 기록을 찾고, 경로는 지도에, 운행 내역과 속도·거리는 표와 그래프로 확인할 수 있도록 했습니다.

## 구성

단말이 MQTT로 전송한 기록을 서버에서 받아 저장하고, 웹에서 조회하는 구조로 구성했습니다.
