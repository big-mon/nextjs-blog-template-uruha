import { Code } from "mdast";
import styles from "@styles/markdown.module.scss";

const CodeNode = ({ node }: { node: Code }) => {
  return (
    <div
      className={styles.codeblock}
      dangerouslySetInnerHTML={{ __html: node.value }}
    />
  );
};

export default CodeNode;
