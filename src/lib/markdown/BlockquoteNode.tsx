import { Blockquote } from "mdast";
import { NodesRenderer } from "./markdownRenderer";
import styles from "@styles/markdown.module.scss";

const BlockquoteNode = ({ node }: { node: Blockquote }) => {
  return (
    <blockquote className={styles.blockquote}>
      <NodesRenderer nodes={node.children} />
    </blockquote>
  );
};

export default BlockquoteNode;
