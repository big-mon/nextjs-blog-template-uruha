import { ListItem, Paragraph } from "mdast";
import { NodesRenderer } from "./markdownRenderer";
import { randomUUID } from "crypto";

interface ListItemNodeProps {
  node: ListItem;
}

const ListItemNode = ({ node }: ListItemNodeProps) => {
  if (node.children.length === 1 && node.children[0].type === "paragraph") {
    return (
      <li key={randomUUID()}>
        <NodesRenderer
          nodes={(node.children[0] as Paragraph).children}
          key={randomUUID()}
        />
      </li>
    );
  }

  return (
    <li key={randomUUID()}>
      <NodesRenderer nodes={node.children} key={randomUUID()} />
    </li>
  );
};

export default ListItemNode;
