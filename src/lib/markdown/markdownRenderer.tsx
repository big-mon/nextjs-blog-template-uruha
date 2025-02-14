import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkTwitter from "./remark-twitter";
import remarkYouTube from "./remark-youtube";
import remarkAmazon from "./remark-amazon";

import HeadingNode from "./HeadingNode";
import ParagraphNode from "./ParagraphNode";
import ListNode from "./ListNode";
import ListItemNode from "./ListItemNode";
import TableNode from "./TableNode";
import CodeNode from "./CodeNode";
import BlockquoteNode from "./BlockquoteNode";
import StrongNode from "./StrongNode";
import EmphasisNode from "./EmphasisNode";
import DeleteNode from "./DeleteNode";
import InlineCodeNode from "./InlineCodeNode";
import ImageNode from "./ImageNode";
import CustomLink from "@components/post/CustomLink";
import ThematicBreakNode from "./ThematicBreakNode";
import HtmlNode from "./HtmlNode";
import TwitterNode from "./TwitterNode";
import YouTubeNode from "./YouTubeNode";

import {
  Root,
  Heading,
  Paragraph,
  List,
  ListItem,
  Table,
  Code,
  Blockquote,
  Text,
  Strong,
  Emphasis,
  Delete,
  InlineCode,
  Image,
  Link,
  Html,
  YouTubeBlock,
  TwitterBlock,
  AmazonBlock,
} from "mdast";
import { MarkdownRendererProps, NodesRendererProps } from "@interfaces/mdast";
import AmazonNode from "./AmazonNode";

/**
 * Markdownテキストを解析してReactコンポーネントを生成する
 */
export const MarkdownRenderer = async ({ children }: MarkdownRendererProps) => {
  // remarkインスタンスを生成しプラグインを適用
  const parseMarkdown = remark()
    .use(remarkBreaks)
    .use(remarkGfm)
    .use(remarkTwitter)
    .use(remarkYouTube)
    .use(remarkAmazon);

  // Markdownテキストを解析し、Markdown Abstract Syntax Treeを生成
  const parsed = parseMarkdown.parse(children);

  // MDASTから最終的な構造を取得
  const mdastRoot = (await parseMarkdown.run(parsed)) as Root;

  // MDASTをReactコンポーネントに変換
  return <NodesRenderer nodes={mdastRoot.children} />;
};

/**
 * MDASTノード配列を対応したReactコンポーネントに変換する
 */
export const NodesRenderer = async ({ nodes }: NodesRendererProps) => {
  const renderedNodes = await Promise.all(
    nodes.map((node, index) => renderNode(node, index)),
  );
  return <>{renderedNodes}</>;
};

/**
 * 指定されたノードをレンダリングする非同期関数。
 *
 * @param node - レンダリングするノード。ノードのタイプに応じて適切なコンポーネントが選択される。
 * @param index - ノードのインデックス。キーとして使用される。
 * @returns レンダリングされたノードのReact要素。
 */
const renderNode = async (node: any, index: number) => {
  const nodeRenderers: { [key: string]: any } = {
    heading: (node: Heading) => <HeadingNode key={index} node={node} />,
    text: (node: Text) => node.value,
    linkReference: (node: Text) => node.value,
    definition: (node: Text) => node.value,
    paragraph: (node: Paragraph) => <ParagraphNode key={index} node={node} />,
    inlineCode: (node: InlineCode) => (
      <InlineCodeNode key={index} node={node} />
    ),
    blockquote: (node: Blockquote) => (
      <BlockquoteNode key={index} node={node} />
    ),
    link: (node: Link) => <CustomLink key={index} node={node} />,
    list: (node: List) => <ListNode key={index} node={node} />,
    listItem: (node: ListItem) => <ListItemNode key={index} node={node} />,
    strong: (node: Strong) => <StrongNode key={index} node={node} />,
    emphasis: (node: Emphasis) => <EmphasisNode key={index} node={node} />,
    break: () => <br key={index} />,
    image: async (node: Image) => <ImageNode key={index} node={node} />,
    code: (node: Code) => <CodeNode key={index} node={node} />,
    delete: (node: Delete) => <DeleteNode key={index} node={node} />,
    table: (node: Table) => <TableNode key={index} node={node} />,
    thematicBreak: () => <ThematicBreakNode key={index} node={node} />,
    html: (node: Html) => <HtmlNode key={index} node={node} />,
    twitter: (node: TwitterBlock) => <TwitterNode key={index} node={node} />,
    youtube: (node: YouTubeBlock) => <YouTubeNode key={index} node={node} />,
    amazon: (node: AmazonBlock) => <AmazonNode key={index} node={node} />,
  };

  const renderer = nodeRenderers[node.type];
  if (renderer) {
    return renderer(node);
  } else {
    return (
      <div key={index}>
        <p style={{ color: "red" }}>Unknown node type: {node.type}</p>
        <pre>{JSON.stringify(node, null, 2)}</pre>
      </div>
    );
  }
};
