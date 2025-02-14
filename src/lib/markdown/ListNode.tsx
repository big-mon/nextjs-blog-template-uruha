import cn from "classnames";
import { List } from "mdast";
import { NodesRenderer } from "./markdownRenderer";
import styles from "@styles/markdown.module.scss";
import { randomUUID } from "crypto";

interface ListNodeProps {
  node: List;
}

const ListNode = ({ node }: ListNodeProps) => {
  return node.ordered ? (
    <ol className={cn(styles.list)} key={randomUUID()}>
      <NodesRenderer nodes={node.children} key={randomUUID()} />
    </ol>
  ) : (
    <ul className={cn(styles.list)} key={randomUUID()}>
      <NodesRenderer nodes={node.children} key={randomUUID()} />
    </ul>
  );
};

export default ListNode;
