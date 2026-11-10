---
kind: "company"
tier: "more"
order: 6
anonymized: true
title: "製造業向け社内規程RAG検索"
summary: "社内規程や書式を管理し、閲覧権限のある文書を根拠に質問へ回答するナレッジ検索サービス"
period: {"start": "2026-08", "end": "2026-10"}
role: "設計・開発"
stack: ["Spring Boot 3", "React", "PostgreSQL", "pgvector", "BGE-M3", "Gemini"]
platforms: ["web", "server"]
cover: "/projects/knowledge-assistant/02-answer.webp"
images: [{"src": "/projects/knowledge-assistant/02-answer.webp", "alt": "根拠となる条項と原文を添えた回答"}, {"src": "/projects/knowledge-assistant/01-home.webp", "alt": "ユーザーホーム"}, {"src": "/projects/knowledge-assistant/03-knowledge.webp", "alt": "ナレッジ一覧"}]
links: []
metrics: [{"value": "9種類のファイル登録", "label": "PDF、HWP、HWPX、DOC、DOCX、XLSX、PPTX、TXT、MD"}, {"value": "3つの検索方式を組み合わせ", "label": "意味検索、全文検索、条項・文書番号検索"}, {"value": "2つの業務領域", "label": "従業員による知識の活用と管理者による文書管理"}]
code: "EJ202"
status: {"label": "デモ", "tone": "hold"}
---

## 課題

従業員が社内規程や書式を探す際、関連文書を自分で探して内容を確認する必要がありました。既存の業務支援ソフトウェアはありましたが、文書の検索や保存に不便がありました。

## 開発したもの

管理者が規程文書を登録し、権限とバージョンを管理することで、従業員が自然言語で質問し、閲覧可能な文書の根拠とともに回答を得られるサービスを開発しました。文書からテキストを抽出して条項単位で索引を作成し、回答から原文を参照できるようにしています。

また、MCPを通じて外部AIツールと連携し、閲覧を許可された文書を業務に活用したり、必要な業務知識を追加したりできるようにしました。

## 設計上の工夫

- **自然言語と正確な番号による検索。** 意味検索と全文検索を組み合わせ、条項番号・文書番号を直接検索する経路を追加しました。
- **権限を考慮した検索。** 検索時にユーザーや経路ごとの文書閲覧権限で絞り込み、アクセス可能な文書だけを回答の根拠として使うようにしました。
