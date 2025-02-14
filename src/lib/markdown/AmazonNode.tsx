import cn from "classnames";
import { AMAZON_AFFILIATE } from "@lib/constants";

interface AmazonBlock {
  node: {
    value: string;
    asin: string;
  };
}

const AmazonNode = ({ node }: AmazonBlock) => {
  const generateAffiliateLink = (asin: string) => {
    const affiliateId = AMAZON_AFFILIATE;
    return `https://www.amazon.co.jp/gp/product/${asin}?tag=${affiliateId}`;
  };

  const generateImageUrl = (asin: string) =>
    `https://images-na.ssl-images-amazon.com/images/P/${asin}.09.MZZZZZZZ`;

  const title = node.value;

  return (
    <div
      className={cn(
        "grid grid-cols-10 gap-6",
        "border-neutral/20 my-8 border px-2 py-4",
      )}
    >
      <a
        href={generateAffiliateLink(node.asin)}
        rel="noreferrer noopener external nofollow"
        target="_blank"
        className={cn("col-span-3")}
      >
        <img
          src={generateImageUrl(node.asin)}
          alt={title}
          className={cn("mx-auto")}
        />
      </a>
      <div className={cn("col-span-7")}>
        <a
          href={generateAffiliateLink(node.asin)}
          rel="noreferrer noopener external nofollow"
          target="_blank"
          className={cn(
            "hover:text-tertiary text-primary font-semibold break-words",
            "mb-4 inline-block",
          )}
        >
          {title}
        </a>
        <a
          href={generateAffiliateLink(node.asin)}
          rel="noreferrer noopener external nofollow"
          target="_blank"
          className={cn()}
        >
          <button
            className={cn(
              "block rounded-md bg-amber-400 duration-300 hover:bg-amber-500",
              "cursor-pointer px-3 py-2 text-center text-xs font-medium",
            )}
          >
            Amazonで見る
          </button>
        </a>
      </div>
    </div>
  );
};

export default AmazonNode;
