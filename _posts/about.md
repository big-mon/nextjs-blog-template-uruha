---
title: Uruhaへようこそ
description: Next.js向けブログテンプレートの紹介
slug: about
date: "2025-01-01T00:00:00"
author:
  name: Mon
  picture: /assets/blog/authors/tim.jpeg
coverImage: /illust/fr2hbemgc6vjlxuk0syu
category: Other
tags: []
---

# Uruha とは

UruhaはNext.js向けに作成されたブログテンプレートです。Next.jsの特色である高速化機能をそのままに、TypeScriptを使用、Markdownによる記事管理を特徴とした無料のテンプレートです。

以下にMarkdownで記載した表現がどのような外観となるかを列挙します。

# ヘッダー

```md
# h1

テキストテキストテキストテキストテキスト

## h2

テキストテキストテキストテキストテキスト

### h3

テキストテキストテキストテキストテキスト

#### h4

テキストテキストテキストテキストテキスト

##### h5

テキストテキストテキストテキストテキスト

###### h6

テキストテキストテキストテキストテキスト
```

# h1

テキストテキストテキストテキストテキスト

## h2

テキストテキストテキストテキストテキスト

### h3

テキストテキストテキストテキストテキスト

#### h4

テキストテキストテキストテキストテキスト

##### h5

テキストテキストテキストテキストテキスト

###### h6

テキストテキストテキストテキストテキスト

# 文字の装飾

```md
**強調**された文字列
*イタリック調*の文字列
~取り消し~された文字列
```

**強調**された文字列
*イタリック調*の文字列
~取り消し~された文字列

# テーブル

```md
| th          | th          |          th |     th      |
| ----------- | :---------- | ----------: | :---------: |
| sample text | sample text | sample text | sample text |
| a           | b           |           c |      d      |
| a           | b           |           c |      d      |
```

| th          | th          |          th |     th      |
| ----------- | :---------- | ----------: | :---------: |
| sample text | sample text | sample text | sample text |
| a           | b           |           c |      d      |
| a           | b           |           c |      d      |

# リスト

```md
- item
  - item
  - item
  1. item

1. item
   - item
```

- item
  - item
  - item
  1. item

1. item
   - item

# リンクした文字列

```md
[リンクテキスト(内部)](/)
[リンクテキスト(外部)](https://example.com/)

[この書き方はできません][1]

[1]: https://example.com/
```

[リンクテキスト(内部)](/)
[リンクテキスト(外部)](https://example.com/)

[この書き方はできません][1]

[1]: https://example.com/

# 画像

```md
![alt](/illust/oajmdfvac2ydbyrudcwo)
![altテキスト](/illust/ar6fbsinlkhklveegkta "画像の説明")
![photo](/photo/dgmplxtjcfop3h3rqfde)
```

![alt](/illust/oajmdfvac2ydbyrudcwo)
![altテキスト](/illust/ar6fbsinlkhklveegkta "画像の説明")
![photo](/photo/dgmplxtjcfop3h3rqfde)

# 引用

```md
> 引用テキスト
> 引用テキスト
>
> 引用テキスト
> 引用テキスト
```

> 引用テキスト
> 引用テキスト
>
> 引用テキスト
> 引用テキスト

# コード

````md
文章中の`コード`です。

```js
let x = "sample text";
```
````

文章中の`コード`です。

```js
let x = "sample text";
```

# YouTube 埋め込み

````md
```youtube
pL2KaGdSd5o
```
````

```youtube
pL2KaGdSd5o
```

# Twitter 埋め込み

````md
```twitter
1720659377525510570
```
````

```twitter
1720659377525510570
```

# Amazon 埋め込み

````md
```amazon:4046840102
パルパネルは再び世界を救えるのか
```
````

```amazon:4046840102
パルパネルは再び世界を救えるのか
```

# 直接埋め込まれた HTML

```md
<ul>
  <li>item</li>
  <li>item</li>
</ul>
```

<ul>
  <li>item</li>
  <li>item</li>
</ul>

自身の記述した Markdown のみを読み込むことを前提としているため、Markdown を HTML に変換する際のサニタイズ処理を行っていません。Markdown の作者を信用していない場合はサニタイズ処理を追加してください。

# 区切り線

```md
---
```

---

以上です。
