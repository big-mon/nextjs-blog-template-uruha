import { ThematicBreak } from "mdast";
import styles from "@styles/markdown.module.scss";

const ThematicBreakNode = ({ node }: { node: ThematicBreak }) => {
  return <hr className={styles.line} />;
};

export default ThematicBreakNode;
