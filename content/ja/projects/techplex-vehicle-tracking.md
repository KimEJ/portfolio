---
kind: "company"
tier: "archive"
order: 112
title: "車両運行記録システム"
summary: "車載端末が収集した運行記録を保存・可視化"
period: {"start": "2020-01", "end": "2021-03"}
role: "サーバー・Web開発"
stack: ["Node.js", "MongoDB", "Docker", "Vue", "TypeScript"]
platforms: ["web", "server"]
cover: "/work/techplex/car-tracking/overview.png"
images: [{"src": "/work/techplex/car-tracking/overview.png", "alt": "システム概要"}, {"src": "/work/techplex/car-tracking/main.png", "alt": "メイン画面"}, {"src": "/work/techplex/car-tracking/detail.png", "alt": "運行記録"}]
links: []
code: "EJ912"
status: {"label": "到着", "tone": "go"}
---

## 課題

車載端末が収集した運行記録を受け取り、走行経路や時間帯ごとの状態を確認できる画面が必要でした。

## 開発したもの

車載端末から送られる運行記録を受信するサーバーと、記録を照会するWeb画面を開発しました。日付や車両などから運行記録を検索し、走行経路を地図上に、運行履歴や速度・距離を表とグラフで表示します。

## 構成

端末がMQTTで送信した記録をサーバーで受信・保存し、Webで照会する構成です。
