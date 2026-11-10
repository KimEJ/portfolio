---
kind: "company"
tier: "more"
order: 5
anonymized: true
title: "公的支援事業の申請書類AI審査プラットフォーム"
summary: "申請書類のAI分析から担当者による確認、その後の対応までを支援する業務プラットフォーム"
period: {"start": "2026-06", "end": "2026-08"}
role: "設計・開発"
stack: ["FastAPI", "Next.js 15", "PostgreSQL", "Redis", "Gemini", "Document AI · OCR", "Docker"]
platforms: ["web", "server"]
cover: "/projects/grant-screening/02-cohort.webp"
images: [{"src": "/projects/grant-screening/02-cohort.webp", "alt": "募集回ごとの応募者とAI・担当者の判定状況"}, {"src": "/projects/grant-screening/03-ineligible.webp", "alt": "書類確認：原本とAIによる資格審査、不適格の理由"}, {"src": "/projects/grant-screening/05-masking.webp", "alt": "身分証の個人情報マスキング：原本とマスキング後の比較"}, {"src": "/projects/grant-screening/04-summary.webp", "alt": "書類の補完依頼：担当者のメモと判定不能な項目"}, {"src": "/projects/grant-screening/01-program.webp", "alt": "事業と募集回の進捗"}, {"src": "/projects/grant-screening/06-companies.webp", "alt": "企業データベース"}]
links: []
metrics: [{"value": "6種類の書類形式", "label": "PDF、MS Office、HWP、画像、テキスト、CSV"}, {"value": "5つの業務を自動化", "label": "書類分類、情報抽出、書類要約、要件確認、個人情報のマスキング"}, {"value": "3つの判断", "label": "適格確定、不適格確定、補完依頼"}]
code: "EJ201"
status: {"label": "非公開", "tone": "hold"}
---

## 課題

支援事業ごとに提出書類や資格要件が異なるため、担当者は申請書類を読み、必要な情報を探して審査基準と照合する必要がありました。

## 開発したもの

事業ごとに書類の種類と審査基準を設定し、申請書類のアップロードから確認、その後の管理までを行うプラットフォームを開発しました。AIが書類分類、情報抽出、文書要約、資格要件の事前確認、個人情報のマスキングを支援します。担当者は原本と要約・資格確認・マスキングの結果を確認したうえで、適格・不適格を確定するか、書類の補完を依頼できます。

## 設計上の工夫

- **事業ごとの設定。** 基本オプションを基に、事業ごとに異なる書類、抽出項目、審査基準を設定できるようにしました。よく使う項目はあらかじめ用意してトグルで選択でき、必要な項目を追加することもできます。
- **時間のかかる文書処理。** 分析処理を段階ごとに分けてワーカーで実行し、進捗を画面に表示しました。
- **AIと担当者による確認の連携。** すべてをAIで自動処理することにはリスクがあるため、担当者がAIの分析結果を確認・修正しやすい画面を構成しました。
