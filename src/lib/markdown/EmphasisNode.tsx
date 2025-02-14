import { Emphasis } from "mdast";
import { NodesRenderer } from "./markdownRenderer";

const EmphasisNode = ({ node }: { node: Emphasis }) => {
  return (
    <em>
      <NodesRenderer nodes={node.children} />
    </em>
  );
};

export default EmphasisNode;
