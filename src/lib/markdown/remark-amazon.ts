import { visit } from "unist-util-visit";
import { Plugin } from "unified";

const remarkAmazon: Plugin = () => {
  return (tree) => {
    visit(tree, "code", (node: any, index, parent) => {
      if (node.lang && node.lang.startsWith("amazon:")) {
        const amazonId = node.lang.split(":")[1];
        const amazonNode = {
          type: "amazon",
          value: node.value,
          asin: amazonId,
        };
        parent.children.splice(index, 1, amazonNode);
      }
    });
  };
};

export default remarkAmazon;

declare module "mdast" {
  export interface AmazonBlock extends Resource {
    type: "amazon";
    value: string;
    asin: string;
  }

  interface RootContentMap {
    amazon: AmazonBlock;
  }
}
