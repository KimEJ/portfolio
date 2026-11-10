---
kind: "personal"
tier: "more"
order: 9
title: "日本語・BJT学習アプリ"
summary: "韓国語の解説と適応型のプレイスメントテストを備え、一般日本語とBJT形式の問題を一緒に練習できるアプリ"
period: {"start": "2026-11"}
role: "個人開発"
stack: ["Expo", "React Native", "TypeScript", "Node.js", "PostgreSQL"]
platforms: ["web", "ios", "android"]
cover: "/projects/japanese-study/01-home.webp"
images: [{"src": "/projects/japanese-study/01-home.webp", "alt": "ホーム"}, {"src": "/projects/japanese-study/02-lessons.webp", "alt": "段階別レッスン"}, {"src": "/projects/japanese-study/03-bjt.webp", "alt": "BJT形式の練習"}, {"src": "/projects/japanese-study/04-vocab.webp", "alt": "単語カード"}]
links: []
metrics: [{"value": "7,742語", "label": "収録語彙"}, {"value": "434レッスン", "label": "一般日本語レッスン"}, {"value": "340問", "label": "BJT形式の練習問題"}]
code: "EJ205"
status: {"label": "開発中", "tone": "wait"}
---

## 課題

韓国語の解説を見ながら、日本語の基礎からBJTビジネス日本語能力テスト形式の問題までを一か所で練習できる学習ツールが必要でした。

## 開発したもの

一般日本語のレッスン、BJT形式の練習、語彙学習、間違えた問題の復習を一つのアプリにまとめました。ExpoとReact Nativeを用い、Web・iOS・Androidで画面を共有できるよう構成しています。上記のコンテンツ数は、プロジェクトの問題バンクに基づきます。

## 設計上の工夫

- **レベルに合ったプレイスメントテスト。** 回答ごとに推測やうっかりミスの可能性を考慮してレベルを推定し、推定の不確実性を減らす次の問題を選ぶようにしました。
- **学習と復習の連携。** 間違えた問題を解き直せるようにし、単語カードは回答に応じて次の復習時期を決める構成にしました。
- **問題バンクと学習記録の分離。** コンテンツはAPIで提供してバージョンごとにキャッシュし、学習記録はログインなしで端末に保存します。
- **練習結果の範囲を明示。** 自作の練習問題と参考スコアを、公式の過去問題や実際の試験結果と区別しています。

## 現在の状態

開発初期段階です。
