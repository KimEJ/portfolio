---
kind: "company"
tier: "archive"
order: 111
title: "端末制御フレームワーク"
summary: "自社LTEモデムを搭載した端末を制御するデスクトップアプリ・サーバー・Web"
period: {"start": "2019-01", "end": "2020-06"}
role: "デスクトップ・サーバー・Web開発"
stack: ["Electron", "Vue", "TypeScript", "Node.js", "AWS"]
platforms: ["desktop", "web", "server"]
cover: "/work/techplex/bike/overview.png"
images: [{"src": "/work/techplex/bike/overview.png", "alt": "システム概要"}, {"src": "/work/techplex/bike/app-main.png", "alt": "アプリのメイン画面"}, {"src": "/work/techplex/bike/web-main.png", "alt": "Webのメイン画面"}, {"src": "/work/techplex/bike/web-gps.png", "alt": "位置の詳細"}]
links: []
code: "EJ911"
status: {"label": "到着", "tone": "go"}
---

## 課題

自社LTEモデムを使用する端末を現場で直接制御し、端末の状態や位置をWebからも確認できる必要がありました。

## 開発したもの

端末を直接接続して状態や設定を確認するデスクトップアプリと、端末の状態を記録・制御するサーバーおよびWeb画面を開発しました。Webでは端末一覧、バッテリーの状態、位置を確認できます。

## 構成

デスクトップアプリは端末とシリアル接続し、端末はMQTTでAWS IoT Coreと通信します。サーバーとWebを連携させて端末情報を照会する構成です。
