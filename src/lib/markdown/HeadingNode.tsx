import cn from "classnames";
import { Heading, Text, Parent } from "mdast";
import { NodesRenderer } from "./markdownRenderer";
import { simplifyText } from "@lib/url";
import styles from "@styles/markdown.module.scss";

/**
 * 指定された深さに基づいて適切なHTMLのHeadingタグをレンダリング
 *
 * @param {HeadingNodeProps} props - コンポーネントのプロパティ
 * @param {Object} props.node - マークダウンのヘッディングノード
 * @param {number} props.node.depth - ヘッディングの深さ(1から6の範囲)
 * @param {Array<Text | Parent>} props.node.children - ヘッディングノードの子要素
 *
 * @returns {JSX.Element} 指定された深さに基づいて適切なHTMLヘッディングタグを含むJSX要素
 */
const HeadingNode = ({ node }: { node: Heading }) => {
  const Component = (
    {
      1: "h2",
      2: "h3",
      3: "h4",
      4: "h5",
      5: "h6",
      6: "p",
    } as const
  )[node.depth];

  const childrenText = (function getChildrenText(
    children: (Text | Parent)[],
  ): string {
    return children.reduce((acc, child) => {
      if ("value" in child) {
        return acc + (child as Text).value;
      }
      if ("children" in child) {
        return acc + getChildrenText(child.children as (Text | Parent)[]);
      }
      return acc;
    }, "");
  })(node.children as (Text | Parent)[]);

  return (
    <Component id={simplifyText(childrenText)} className={cn(styles.heading)}>
      <NodesRenderer nodes={node.children} />
    </Component>
  );
};

export default HeadingNode;
