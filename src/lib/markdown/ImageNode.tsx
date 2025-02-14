import { Image } from "mdast";
import CustomImage from "@components/post/CustomImage";
import { getCloudinaryBlurredSrc } from "@lib/cloudinary";

const ImageNode = async ({ node }: { node: Image }) => {
  const imageBlurUrl = await getCloudinaryBlurredSrc(node.url);
  return (
    <CustomImage
      src={node.url}
      alt={node.alt ?? undefined}
      title={node.title ?? undefined}
      blurredSrc={imageBlurUrl}
    />
  );
};

export default ImageNode;
