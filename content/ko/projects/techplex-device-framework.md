---
kind: "company"
tier: "archive"
order: 111
title: "단말 제어 프레임워크"
summary: "자체 LTE 모뎀 기반 단말을 제어하는 데스크톱 앱, 서버, 웹"
period: {"start": "2019-01", "end": "2020-06"}
role: "데스크톱·서버·웹"
stack: ["Electron", "Vue", "TypeScript", "Node.js", "AWS"]
platforms: ["desktop", "web", "server"]
cover: "/work/techplex/bike/overview.png"
images: [{"src": "/work/techplex/bike/overview.png", "alt": "시스템 개요"}, {"src": "/work/techplex/bike/app-main.png", "alt": "앱 메인"}, {"src": "/work/techplex/bike/web-main.png", "alt": "웹 메인"}, {"src": "/work/techplex/bike/web-gps.png", "alt": "위치 상세"}]
links: []
code: "EJ911"
status: {"label": "도착", "tone": "go"}
---

## 문제

자체 LTE 모뎀을 사용하는 단말을 현장에서 직접 제어하고, 단말의 상태와 위치를 웹에서도 확인할 수 있어야 했습니다.

## 만든 것

단말을 직접 연결해 상태와 설정을 확인하는 데스크톱 앱과, 단말 상태를 기록·제어하는 서버와 웹을 개발했습니다. 웹에서는 단말 목록과 배터리 상태, 위치를 확인할 수 있도록 구성했습니다.

## 구성

데스크톱 앱은 단말과 시리얼로 연결하고, 단말은 MQTT로 AWS IoT Core와 통신합니다. 서버와 웹을 연결해 단말 정보를 조회합니다.
