import { getCldImageUrl } from "next-cloudinary";

/**
 * Cloudinaryから画像のURLを取得
 *
 * @param publicId - Cloudinary内の画像のパブリックID
 * @param namedTransformations - 使用する変換の名前
 * @returns 画像のURL
 */
export function getCloudinaryImageUrl(
  publicId: string,
  namedTransformations: "hero" | "post" | "ogp" | "blur",
) {
  return getCldImageUrl({
    src: publicId.slice(1),
    namedTransformations: namedTransformations,
  });
}

/**
 * Cloudinaryから画像のぼかしバージョンを取得し、データURLを返却
 *
 * @param publicId - Cloudinary内の画像のパブリックID
 * @returns ぼかし画像を含むデータURLを解決するPromise
 */
export async function getCloudinaryBlurredSrc(publicId: string) {
  const imageBlurUrl = getCloudinaryImageUrl(publicId, "blur");
  const response = await fetch(imageBlurUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  const dataUrl = `data:${response.type};base64,${base64}`;
  return dataUrl;
}
