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
links: []
metrics: [{"value": "628", "label": "선택 가능한 역"}, {"value": "96", "label": "UI 테스트"}, {"value": "5", "label": "지원 언어"}]
code: "EJ102"
status: {"label": "개발 중", "tone": "wait"}
---

## 문제

집중하거나 쉬고 싶을 때 타이머 앱은 너무 건조합니다. 출발역과 도착역을 고르면 종이 승차권이 나오고, 열차에 타서 창밖을 보다 보면 시간이 지나 있는 경험을 만들고 싶었습니다.

## 만든 것

역 선택, 승차권 발급, 탑승, 주행, 도착까지 이어지는 iPhone·iPad 앱입니다. 승강장, 차창 풍경, 환승 장면은 Metal로 렌더링하고, 진행 상황은 잠금 화면 Live Activity와 위젯으로 보여줍니다. 경로·여정·저장 로직은 로컬 Swift 패키지(HitoekiCore)로 분리했습니다.

## 설계에서 고민한 것

- **지도 데이터를 통째로 받지 않음.** 일본 국토지리원 PMTiles는 HTTP Range 요청으로 필요한 타일만 읽습니다. 캐시된 타일은 URL, ETag, 길이가 모두 같을 때만 재사용합니다.
- **지도 라이브러리 없이 직접 구현.** 2D 지도와 Metal 뷰가 공유하는 로더 하나에 캐시 상한을 정했습니다(2D 래스터 24 MiB, Metal 벡터 48 MiB, 디스크 64 MiB).
- **없는 데이터를 지어내지 않음.** 건물 높이 정보가 없으면 임의로 만들지 않습니다. 실제 운임이나 일련번호처럼 보이는 값도 넣지 않았습니다.
- **완주한 여정만 기록.** 중간에 그만둔 여정은 기록에 남지 않습니다.

## 현재 상태

개발 중이며 App Store에는 아직 제출하지 않았습니다.

<small>지도: 국토지리원(GSI) 타일 · 지형: PLATEAU (CC BY 4.0)</small>
