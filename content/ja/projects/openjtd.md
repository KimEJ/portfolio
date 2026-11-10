---
kind: "personal"
tier: "featured"
order: 10
title: "OpenJTD · rjtd"
summary: "日本語ワープロ「一太郎」のJTD文書を読むためのオープンソース形式研究とRustツール"
role: "設計・開発"
stack: ["Rust", "WebAssembly", "CFB/OLE"]
platforms: ["web"]
images: []
links: [{"label": "GitHub · rjtd", "url": "https://github.com/OpenJTD/rjtd"}, {"label": "OpenJTD仕様", "url": "https://github.com/OpenJTD/spec"}]
metrics: [{"value": "文書形式3種類", "label": "JTD、JTT、JTTC"}, {"value": "テキスト中心の出力4種類", "label": "テキスト、Markdown、JSON、PDF"}, {"value": "2つの実行方式", "label": "コマンドラインツール、WebAssembly"}]
code: "EJ105"
status: {"label": "公開・開発中", "tone": "wait"}
---

## 課題

一太郎の文書は独自形式で保存されており、元のソフトウェア以外では内容を読んだり、別の形式で活用したりすることが困難です。文書形式の公開研究と独立した実装を通じて、閲覧と保存を支援したいと考えました。

## 制作したもの

OpenJTDはJTD文書形式の研究・仕様・検証資料を共有するプロジェクトです。その一環として、ファイルコンテナの調査とテキスト抽出を行い、文書モデルをテキスト・Markdown・JSON・テキスト中心のPDFとして出力するRustツール `rjtd` を開発しました。コマンドラインツールとWebAssemblyバインディングも提供します。

## 設計で工夫したこと

- **観察と推測の区別。** 確認できた文書構造と実験的な解釈を区別し、仕様と実装に記録しています。
- **未知の原本データの保持。** 解釈できないデータや元の構造を可能な範囲で保持し、今後の研究に活用できるようにしました。
- **不正な入力への対応。** 破損した文書や想定外の文書に対するパーサーの失敗方法とリソース使用量を考慮しました。

## 現在の状態

ソースコードと形式研究を公開し、開発を続けています。文書レイアウトの完全な再現や構造を保持した編集・保存はまだ完成していません。
