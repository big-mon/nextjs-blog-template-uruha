import { InlineCode } from "mdast";

const InlineCodeNode = ({ node }: { node: InlineCode }) => {
  return <code>{node.value}</code>;
};

export default InlineCodeNode;
