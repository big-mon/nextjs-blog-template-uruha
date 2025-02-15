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
  return text
    .toLowerCase()
    .normalize("NFD") // 正規化してアクセント記号を分解
    .replace(/[\u0300-\u036f]/g, "") // アクセント記号を削除
    .replace(/\s+/g, "-") // スペースをハイフンに置換
    .replace(/[^\w\-]+/g, ""); // 英数字とハイフン以外を削除
};
