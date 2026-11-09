---
kind: "personal"
tier: "featured"
order: 2
title: "Hitoeki"
summary: "종이 승차권 한 장으로 떠나는 일본 철도 가상 여행 iOS 앱"
period: {"start": "2026-10"}
role: "기획, 설계, 구현"
stack: ["Swift", "SwiftUI", "Metal", "ActivityKit", "WidgetKit", "PMTiles", "PLATEAU"]
platforms: ["ios"]
images: []
links: [{"label": "TestFlight", "url": "https://testflight.apple.com/join/fRBQEEaN"}]
metrics: [{"value": "628개 역 선택 항목", "label": "현재 발권에서 선택 가능"}, {"value": "2가지 승차 방식", "label": "목적지 발권, IKA 자유승차"}, {"value": "5개 화면 언어", "label": "한국어, 영어, 일본어, 중국어 간체·번체"}]
code: "EJ102"
status: {"label": "TestFlight 베타", "tone": "go"}
---

## 문제

집중하거나 쉬고 싶을 때 타이머 앱은 너무 건조합니다. 출발역과 도착역을 고르면 종이 승차권이 나오고, 열차에 타서 창밖을 보다 보면 시간이 지나 있는 경험을 만들고 싶었습니다.

## 만든 것

역 선택, 승차권 발급, 탑승, 주행, 도착까지 이어지는 iPhone·iPad 앱입니다. 목적지를 정해 승차권을 발급하거나 IKA 자유승차에서 열차와 내릴 역을 선택할 수 있습니다. 승강장, 차창 풍경, 환승 장면은 Metal로 렌더링하고, 진행 상황은 잠금 화면 Live Activity와 위젯으로 보여줍니다.

## 설계에서 고민한 것

- **여정에 맞는 화면 구성.** 예약과 경로 확인은 2D 지도로 보여주고, 승강장과 주행·환승은 Metal 장면으로 구성해 승차 경험을 이어갑니다.
- **필요한 지도 데이터만 읽기.** 일본 국토지리원 PMTiles에서 필요한 타일을 HTTP Range 요청으로 읽고 캐시해, 전체 지도 데이터를 미리 받지 않도록 했습니다.
- **실제 정보와 가상 경험 구분.** 건물 높이가 없는 자료에는 값을 임의로 만들지 않고, 실제 운임이나 예약 서비스로 오해할 정보를 넣지 않았습니다. IKA는 가상의 승차 방식이며 실제 결제 기능은 없습니다.
- **완주한 여정만 기록.** 중간에 그만둔 여정은 기록에 남지 않습니다.

## 현재 상태

TestFlight를 통해 베타 버전을 배포하고 있습니다.

<small>지도: 국토지리원(GSI) 타일 · 지형: PLATEAU (CC BY 4.0)</small>
