import { Html } from "mdast";
import { NodesRenderer } from "./markdownRenderer";
import styles from "@styles/markdown.module.scss";

const HtmlNode = ({ node }: { node: Html }) => {
  return (
    <div
      className={styles.box}
      dangerouslySetInnerHTML={{ __html: node.value }}
    />
  );
};

export default HtmlNode;
