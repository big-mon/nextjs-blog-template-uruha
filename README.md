# nextjs-blog-template-uruha

Next.js 15をベースとし、記事をMarkdown記法で書かれたファイルで管理するブログ用のテンプレートです。

このテンプレートは[Blog Starter Kit](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)を参考に作成し、MarkdownをHTML変換する際に不便な点である拡張性の低さを補う大幅な変更や、Cloudinaryを使用した柔軟な画像加工の要素を取り込んでいます。

Markdownファイルをブログ記事のデータソースとしたStatic Site Generation (SSG)を採用しています。ブログとしての運用時は記事を追加したり更新する際に`/_posts`配下のファイルを変更していきます。

ブログ記事のMarkdownは`remark-gfm`と`remark-breaks`を用いて基本的な解釈を行った後、本テンプレートで新たに作り込んだプラグインによりYouTube動画やX(Twitter)やAmazonアフィリエイトの埋め込みに対応しています。Markdownの変換とHTMLタグの読み替えの詳細は`/src/lib/markdown/markdownRenderer.tsx`を参照してください。

## Demo

[https://nextjs-blog-template-uruha.vercel.app/](https://nextjs-blog-template-uruha.vercel.app/)

Markdown記法と実際に出力されるレイアウトの確認は`Uruhaへようこそ`という記事を確認してください。

# Setting

- ブログ名などの固定項目は`/src/lib/constants.ts`にて変更する必要があります。
- 画像クラウドサービスであるCloudinaryを本テンプレートは採用しているため、`.env.xxx`もしくはビルド時の環境変数にて`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`で参照するクラウド名を記載する必要があります。
- 画像クラウドサービスであるCloudinaryが提供する名前付き変換機能を使用しているため、`/src/lib/cloudinary.ts`にて`namedTransformations`に自身の環境向けの変換名へ変更する必要があります。

# Notes

主な特徴を列挙します。

- Markdown
- Tailwind
- Cloudinary
- YouTube
- X(Twitter)
- Amazon
- Pagination
- Category
- Tags
- OGP
- Responsive
- ProgressBar
- ToC(Table of Contents)
