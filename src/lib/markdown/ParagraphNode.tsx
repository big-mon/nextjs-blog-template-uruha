import cn from "classnames";
import React from "react";
import { Paragraph } from "mdast";
import { NodesRenderer } from "./markdownRenderer";
import styles from "@styles/markdown.module.scss";

const ParagraphNode = ({ node }: { node: Paragraph }) => {
  return (
    <p className={cn(styles.paragraph)}>
      <NodesRenderer nodes={node.children} />
    </p>
  );
};

export default ParagraphNode;
