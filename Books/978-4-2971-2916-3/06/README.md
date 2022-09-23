# 6. アプリケーション開発2 〜実装〜
## 6.1 アプリケーションアーキテクチャと全体の実装の流れ

1. APIクライアントの実装
2. コンポーネント実装の準備
3. Atomic Designによるコンポーネント設計
4. Atomsの実装
5. Moleculesの実装
6. Organismsの実装
7. Templateの実装
8. ページ設計と実装
9. コンポーネントのユニットテスト

## 6.2 APIクライアントの実装

- `src/util`以下に`fetch`をラップして使いやすくする `fetcher`関数を作成
- APIクライアントを、`src/services/auto`以下に、関数ごとにファイルを分割して実装
- アプリケーションで使用されるデータの型を定義

### 6.2.1 `fetcher`関数