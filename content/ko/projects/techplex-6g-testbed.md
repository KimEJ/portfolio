---
kind: "company"
tier: "archive"
order: 113
title: "6G 기지국 테스트 시스템"
summary: "외부 6G 기지국을 테스트베드에서 시험·모니터링하는 데스크톱 앱"
period: {"start": "2021-04", "end": "2022-07"}
role: "데스크톱 앱"
stack: ["Electron", "Vue", "TypeScript"]
platforms: ["desktop"]
cover: "/work/techplex/6G/overview.png"
images: [{"src": "/work/techplex/6G/overview.png", "alt": "시스템 개요"}, {"src": "/work/techplex/6G/InterfaceCheck.png", "alt": "인터페이스 점검"}, {"src": "/work/techplex/6G/FileSend.png", "alt": "파일 전송 시험"}, {"src": "/work/techplex/6G/RXTX.png", "alt": "송수신 속도 시험"}]
links: []
code: "EJ913"
status: {"label": "도착", "tone": "go"}
---

## 문제

협력사의 6G 기지국을 테스트베드에서 시험할 때 인터페이스와 데이터 송수신 상태를 확인할 수 있는 도구가 필요했습니다.

## 만든 것

테스트베드 시험을 실행하고 결과를 확인하는 Electron 데스크톱 프로그램을 만들었습니다. 인터페이스 점검, 파일 전송 시험, 송수신 속도 시험을 화면에서 확인할 수 있도록 구성했습니다.

## 구성

데스크톱 앱이 TCP로 서버와 연결되고, 서버가 테스트베드와 통신하는 구조입니다.
