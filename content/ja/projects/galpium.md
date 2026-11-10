---
kind: "personal"
tier: "featured"
order: 1
title: "Galpium"
summary: "ChatGPTと一緒に読み書きできる、ローカルファーストのmacOS向け個人Wiki"
period: {"start": "2026-10"}
role: "個人開発：設計・実装・公開"
stack: ["Swift 6", "SwiftUI", "AppKit · TextKit", "SQLite", "MCP", "On-device embeddings"]
platforms: ["macos"]
cover: "/projects/galpium/wiki-page.jpg"
images: [{"src": "/projects/galpium/wiki-page.jpg", "alt": "Wikiページの編集画面"}, {"src": "/projects/galpium/materials.jpg", "alt": "原資料の一覧と引用"}]
links: [{"label": "GitHub", "url": "https://github.com/KimEJ/Galpium"}, {"label": "リリース v0.0.2", "url": "https://github.com/KimEJ/Galpium/releases/tag/v0.0.2"}]
metrics: [{"value": "主な資料4種類", "label": "テキスト、PDF、画像、音声"}, {"value": "2つの検索方式", "label": "キーワード検索、意味検索"}, {"value": "画面表示3言語", "label": "韓国語、英語、日本語"}]
code: "EJ101"
status: {"label": "公開中 v0.0.2", "tone": "go"}
---

## 課題

AIとメモを整理すると、成果物が会話ごとに散らばり、原資料とのつながりも失われがちです。ノートは自分のコンピューターに保存しながら、AIにも同じノートを読み書きしてほしいと考えました。

## 制作したもの

Markdownページ、原資料、引用、更新履歴を一つのローカルライブラリに保管するmacOSアプリです。ページ同士をリンクし、資料をキーワードや意味で検索できます。MCPサーバーを通じて、ChatGPTデスクトップ版などのAIクライアントも同じWikiを読み書きできます。

## 設計で工夫したこと

- **原資料と引用の保存。** 原資料を別に保管し、引用脚注から該当箇所に戻れるようにしました。画像・音声の検索結果は、検証済みの引用文ではなく位置として表示します。
- **アプリとAIによる同時編集の保護。** 同じページを編集する際に既存リビジョンを確認し、互いの変更が気付かないうちに上書きされないようにしました。
- **ローカル検索とリソース管理。** キーワード検索と意味検索を端末内で実行し、検索用埋め込みの処理を別ワーカーに分離することで、未使用時のメモリ使用量を抑えました。

## 現在の状態

v0.0.2を公開中です。Apple silicon専用で、ライセンスはApache-2.0です。
