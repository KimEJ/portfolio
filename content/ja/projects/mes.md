---
kind: "company"
tier: "more"
order: 8
anonymized: true
title: "製造実行システム（MES）"
summary: "受注からBOM、作業指示、出荷、資材発注までをつなぐ管理Webと現場向けモバイル画面"
period: {"start": "2026-09", "end": "2026-10"}
role: "設計・開発"
stack: ["React 19", "TanStack", "Next.js 16", "Prisma", "PostgreSQL", "Azure Blob"]
platforms: ["web", "server"]
cover: "/projects/mes/02-production.webp"
images: [{"src": "/projects/mes/02-production.webp", "alt": "製作・出荷状況"}, {"src": "/projects/mes/03-order-detail.webp", "alt": "発注詳細と変更履歴"}, {"src": "/projects/mes/04-field-mobile.webp", "alt": "現場作業者向けモバイル画面"}]
links: []
metrics: [{"value": "5つの生産業務", "label": "受注、BOM、作業指示・製作、出荷、資材発注"}, {"value": "2つの利用環境", "label": "管理者向けWeb、現場作業者向けモバイル"}, {"value": "3種類の変更履歴", "label": "受注、作業工程、出荷"}]
code: "EJ204"
status: {"label": "デモ", "tone": "hold"}
---

## 課題

受注内容が製作・出荷につながる過程で、作業の基準と変更内容を関係者が共有できる必要がありました。特に作業開始後に仕様が変わった場合、どの基準で作業を進めたかを追跡する必要がありました。

## 開発したもの

受注とBOMを管理し、BOMの確定時に作業指示を自動発行して、製作・出荷と資材発注までをつなぐ生産管理システムを開発しました。管理者はWebで業務状況を確認し、現場作業者はモバイル画面で作業指示と進捗を確認できます。

## 設計上の工夫

- **確定した作業基準の保存。** BOMの確定時に内容をリビジョンとして保存し、作業指示と関連付けることで、後から仕様が変わっても確定履歴を確認できるようにしました。
- **変更履歴の追跡。** 受注、作業工程、出荷の主な変更を履歴に残し、業務の進行を確認できるようにしました。
- **同時編集の保護。** 複数のユーザーが発注詳細を編集する際、古いバージョンで保存しようとすると競合を検出して最新の値を確認できるようにし、先に反映された変更の上書きを防ぎました。
