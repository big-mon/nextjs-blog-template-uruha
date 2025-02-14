"use client";

import cn from "classnames";
import { CldImage } from "next-cloudinary";
import { getCloudinaryImageUrl } from "@lib/cloudinary";

type Props = {
  src: string;
  alt?: string;
  title?: string;
  blurredSrc: string;
};

const CustomImage = ({ src, alt = "", title = "", blurredSrc }: Props) => {
  const imageUrl = getCloudinaryImageUrl(src, "post");

  return (
    <span className="relative block">
      <a href={imageUrl} target="_blank" rel="noopener noreferrer">
        <CldImage
          src={src}
          alt={alt}
          width={672}
          height={378}
          placeholder="blur"
          blurDataURL={blurredSrc}
          namedTransformations={["post"]}
          className={cn("mx-auto")}
        />
      </a>
      {title === "" ? null : (
        <span className={cn("text-neutral/80 block text-center")}>{title}</span>
      )}
    </span>
  );
};

export default CustomImage;
