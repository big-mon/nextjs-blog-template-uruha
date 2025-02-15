/**
 * 指定されたURLが外部リンクかどうかを判定
 *
 * @param url - 判定するURL文字列
 * @returns URLが外部リンクの場合はtrue、それ以外の場合はfalse
 */
export const isExternalLink = (url: string) => {
  return url.startsWith("http");
};

/**
 * 文字列を簡略化してURLフレンドリーな形式に変換します。
 *
 * @param text - 変換する文字列
 * @returns 簡略化された文字列
 */
export const simplifyText = (text: string) => {
  // 1. 文字列を小文字に変換
  let str = text.toLowerCase();

  // 2. アクセント記号や特殊文字を削除
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // 3. スペースとスラッシュを削除
  str = str.replace(/[\s\/]+/g, ""); // \s は空白文字（スペース、タブ、改行など）

  // 4. 日本語範囲外以外の文字をハイフンに変換
  str = str.replace(/[^\u0000-\u007F\u3040-\u30FF\u4E00-\u9FFF]+/g, "-");

  // 5. 先頭と末尾のハイフンを削除
  str = str.replace(/^[\-]+|[\-]+$/g, "");

  return str;
};
