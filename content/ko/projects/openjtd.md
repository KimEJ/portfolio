---
kind: "personal"
tier: "featured"
order: 10
title: "OpenJTD · rjtd"
summary: "일본어 워드프로세서 이치타로의 JTD 문서를 읽기 위한 오픈소스 형식 연구와 Rust 도구"
role: "설계 및 개발"
stack: ["Rust", "WebAssembly", "CFB/OLE"]
platforms: ["web"]
images: []
links: [{"label": "GitHub · rjtd", "url": "https://github.com/OpenJTD/rjtd"}, {"label": "OpenJTD 명세", "url": "https://github.com/OpenJTD/spec"}]
metrics: [{"value": "3종 문서 형식", "label": "JTD, JTT, JTTC"}, {"value": "4종 텍스트 출력", "label": "텍스트, Markdown, JSON, PDF"}, {"value": "2가지 실행 방식", "label": "명령줄 도구, WebAssembly"}]
code: "EJ105"
status: {"label": "공개 · 개발 중", "tone": "wait"}
---

## 문제

이치타로 문서는 전용 형식에 저장되어 있어 원본 프로그램 밖에서 내용을 읽거나 다른 형식으로 활용하기 어렵습니다. 문서 형식에 대한 공개 연구와 독립적인 구현을 통해 읽기와 보존을 지원하고자 했습니다.

## 만든 것

OpenJTD는 JTD 문서 형식의 연구·명세·검증 자료를 공유하는 프로젝트입니다. 그 안에서 Rust 도구인 `rjtd`를 개발해 파일 컨테이너를 조사하고 텍스트를 추출하며, 문서 모델을 텍스트·Markdown·JSON·텍스트 중심 PDF로 내보낼 수 있도록 했습니다. 명령줄 도구와 WebAssembly 바인딩도 제공합니다.

## 설계에서 고민한 것

- **관찰과 추측 구분.** 확인한 문서 구조와 실험적인 해석을 구분해 명세와 구현에 기록합니다.
- **알 수 없는 원본 보존.** 해석하지 못한 데이터와 원본 구조를 가능한 범위에서 유지해 후속 연구에 활용할 수 있도록 했습니다.
- **비정상 입력 처리.** 손상되거나 예상과 다른 문서를 다룰 때 파서가 실패하는 방식과 자원 사용을 고려했습니다.

## 현재 상태

소스와 형식 연구를 공개하고 계속 개발 중입니다. 문서 배치의 완전한 재현과 구조를 보존하는 편집·저장은 아직 완성되지 않았습니다.
