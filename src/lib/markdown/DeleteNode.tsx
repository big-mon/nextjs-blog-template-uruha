import { Delete } from "mdast";
import { NodesRenderer } from "./markdownRenderer";

const DeleteNode = ({ node }: { node: Delete }) => {
  return (
    <del>
      <NodesRenderer nodes={node.children} />
    </del>
  );
};

export default DeleteNode;
