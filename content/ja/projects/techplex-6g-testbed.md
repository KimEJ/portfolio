---
kind: "company"
tier: "archive"
order: 113
title: "6G基地局テストシステム"
summary: "外部の6G基地局をテストベッドで試験・監視するデスクトップアプリ"
period: {"start": "2021-04", "end": "2022-07"}
role: "デスクトップアプリ開発"
stack: ["Electron", "Vue", "TypeScript"]
platforms: ["desktop"]
cover: "/work/techplex/6G/overview.png"
images: [{"src": "/work/techplex/6G/overview.png", "alt": "システム概要"}, {"src": "/work/techplex/6G/InterfaceCheck.png", "alt": "インターフェース点検"}, {"src": "/work/techplex/6G/FileSend.png", "alt": "ファイル転送試験"}, {"src": "/work/techplex/6G/RXTX.png", "alt": "送受信速度試験"}]
links: []
code: "EJ913"
status: {"label": "到着", "tone": "go"}
---

## 課題

協力会社の6G基地局をテストベッドで試験する際、インターフェースとデータの送受信状況を確認できるツールが必要でした。

## 開発したもの

テストベッドで試験を実行し、結果を確認するElectronデスクトップアプリを開発しました。インターフェースの点検、ファイル転送試験、送受信速度試験を画面で確認できます。

## 構成

デスクトップアプリがTCPでサーバーに接続し、サーバーがテストベッドと通信する構成です。
