# 掃除のさとう Release 1.0.2

東大阪市を拠点に大阪府内を中心に対応するハウスクリーニング専門店「掃除のさとう」の公式ホームページです。

## 公開ファイル

- `index.html`：ページ本体
- `style.css`：デザイン、スマホ表示、固定CTA
- `script.js`：メニュー開閉、スクロール表示アニメーション
- `assets/`：ロゴ、写真、サービス画像

## GitHub Pagesで公開する手順

1. GitHubで新しいリポジトリを作成します。
2. このフォルダ内のファイル一式を、リポジトリ直下へアップロードします。
3. GitHubの `Settings` → `Pages` を開きます。
4. `Build and deployment` の `Source` を `Deploy from a branch` にします。
5. `Branch` は `main`、フォルダは `/ (root)` を選んで保存します。
6. 数分後、GitHub PagesのURLが表示されます。

## 更新時によく触る場所

- 電話番号：`index.html` 内の `08097424373`
- メールアドレス：`index.html` 内の `norisatou0@gmail.com`
- Googleフォーム：フォーム公開URLができたら、`index.html` の問い合わせボタンをフォームURLへ差し替え
- 料金：`index.html` の `PRICE` セクション
- 写真：`assets/` 内の画像を同じファイル名で差し替え

## Release 1.0.2の内容

- サービス写真のカード表示を最適化
- サービス写真を人が写らない実写調画像へ統一
- 公開向けのOGP、SNS共有、構造化データを追加
- JavaScript無効時や古いブラウザでも内容が見えるよう改善
- スマホメニューと固定CTAのアクセシビリティを改善
- 事業情報セクションを追加
- お客様の声を引用元に依存しない安全な表現へ調整
- GitHub Pages公開用のREADMEを整備
