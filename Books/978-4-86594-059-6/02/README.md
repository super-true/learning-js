# 第２章　なぜ関数型プログラミングなのか

### 参照透過性を保証する

次のような場面で参照透過性を喪失しました

- 値の参照透過性を破壊する可変なデータ
- 変数の参照透過性を破壊する代入操作
- 関数の参照透過性を破壊する副作用

## 2.2　関数型プログラミングの利点

1. コードのモジュール性が高まる
2. コードのテストを容易にする
3. コードの正しさを証明できる

### 高いモジュール性

#### 部品の独立性

#### 部品の汎用性

#### 部品を組み合わせる

### テストが容易である

### コードの正しさを証明できる

#### 証明で正しさを検証する
等式による推論は、コードの証明を可能にします。

#### プロパティテストで正しさを検証する
プロパティテストは大量のテストケースを自動的に生成し、それらのテストケースについてコードが一定の性質を保っているかどうかを確認します。

