import { Strong } from "mdast";
import { NodesRenderer } from "./markdownRenderer";

const StrongNode = ({ node }: { node: Strong }) => {
  return (
    <strong>
      <NodesRenderer nodes={node.children} />
    </strong>
  );
};

export default StrongNode;
