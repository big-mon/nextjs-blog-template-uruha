"use client";

import cn from "classnames";
import { CldImage } from "next-cloudinary";

type Props = {
  title: string;
  src: string;
  size: "large" | "small";
  blurredSrc: string;
  className?: string;
};

const imageConfig = {
  large: {
    width: 628,
    height: 353,
    class: "object-cover",
    priority: true,
  },
  small: {
    width: 405,
    height: 228,
    class: "w-full object-cover aspect-w-2 aspect-h-1",
    priority: false,
  },
};

const CoverImage = ({
  title,
  src,
  size,
  blurredSrc,
  className = "",
}: Props) => {
  const config = imageConfig[size];

  return (
    <CldImage
      src={src}
      width={config.width}
      height={config.height}
      alt={`Cover Image for ${title}`}
      className={cn(config.class, className)}
      placeholder="blur"
      blurDataURL={blurredSrc}
      priority={config.priority}
    />
  );
};

export default CoverImage;
