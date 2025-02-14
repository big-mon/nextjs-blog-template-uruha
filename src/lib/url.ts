/**
 * 指定されたURLが外部リンクかどうかを判定
 *
 * @param url - 判定するURL文字列
 * @returns URLが外部リンクの場合はtrue、それ以外の場合はfalse
 */
export const isExternalLink = (url: string) => {
  return url.startsWith("http");
};
