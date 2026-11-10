---
kind: "company"
tier: "archive"
order: 101
title: "バス保守業務管理システム"
summary: "紙で管理していたバス端末の保守業務と在庫をデジタル化"
period: {"start": "2022-08", "end": "2023-08"}
role: "バックエンド・Web開発"
stack: ["NestJS", "GraphQL", "MySQL", "Vue", "Vuetify"]
platforms: ["web", "server"]
cover: "/work/interpass/bus-erp/overview.png"
images: [{"src": "/work/interpass/bus-erp/overview.png", "alt": "システム概要"}, {"src": "/work/interpass/bus-erp/dashboard.png", "alt": "ダッシュボード"}, {"src": "/work/interpass/bus-erp/service.png", "alt": "業務管理"}, {"src": "/work/interpass/bus-erp/ledger.png", "alt": "台帳"}, {"src": "/work/interpass/bus-erp/live.png", "alt": "リアルタイム状況"}, {"src": "/work/interpass/bus-erp/syscode.png", "alt": "システムコード管理"}]
links: []
code: "EJ901"
status: {"label": "到着", "tone": "go"}
---

## 課題

バス端末の保守業務と在庫をアナログで管理していたため、受付担当者と現場担当者が業務や端末の情報を共有できるシステムが必要でした。

## 開発したもの

保守の受付・対応状況、運行会社・車両・端末の台帳、在庫を管理するWebシステムを開発しました。担当者は受付状況や機器の種類などから業務を検索し、ダッシュボードで対応状況を確認できます。

バックエンドと管理Web画面を担当し、受付担当者用Web画面と現場担当者用画面がGraphQL APIを通じて業務データを利用できるようにしました。
