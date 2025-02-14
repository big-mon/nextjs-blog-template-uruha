import cn from "classnames";
import { Table, TableRow, TableCell } from "mdast";
import { NodesRenderer } from "./markdownRenderer";
import styles from "@styles/markdown.module.scss";

interface TableNodeProps {
  node: Table;
}

const TableNode = ({ node }: TableNodeProps) => {
  const [headRow, ...bodyRows] = node.children as TableRow[];
  return (
    <div className={styles.table}>
      <table className={cn(styles.table)}>
        <thead>
          <tr>
            {headRow.children.map((cell, index) => (
              <th key={index} className={styles[node.align?.[index] ?? "left"]}>
                <NodesRenderer nodes={(cell as TableCell).children} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, index) => (
            <tr key={index}>
              {row.children.map((cell, index) => (
                <td
                  key={index}
                  className={cn(styles[node.align?.[index] ?? "left"])}
                >
                  <NodesRenderer nodes={(cell as TableCell).children} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableNode;
