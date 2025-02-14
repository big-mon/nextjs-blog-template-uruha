import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkTwitter from "./remark-twitter";
import remarkYouTube from "./remark-youtube";
import CustomImage from "@components/post/CustomImage";
import CustomLink from "@components/post/CustomLink";
import HeadingNode from "./headingNode";
import ListNode from "./listNode";
import ListItemNode from "./listItemNode";
import TableNode from "./tableNode";
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
} from "mdast";
import { MarkdownRendererProps, NodesRendererProps } from "@interfaces/mdast";
import { getCloudinaryBlurredSrc } from "@lib/cloudinary";
import styles from "@styles/markdown.module.scss";

/**
 * Markdownテキストを解析してReactコンポーネントを生成する
 */
export const MarkdownRenderer = async ({ children }: MarkdownRendererProps) => {
  // remarkインスタンスを生成しプラグインを適用
  const parseMarkdown = remark()
    .use(remarkBreaks)
    .use(remarkGfm)
    .use(remarkTwitter)
    .use(remarkYouTube);

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
 *
 * ノードのタイプに応じて、以下のようなコンポーネントが使用される:
 * - heading: HeadingNodeコンポーネント
 * - text, linkReference, definition: テキスト値
 * - paragraph: <p>タグ内にNodesRendererコンポーネント
 * - inlineCode: <code>タグ
 * - blockquote: <blockquote>タグ内にNodesRendererコンポーネント
 * - link: CustomLinkコンポーネント
 * - list: ListNodeコンポーネント
 * - listItem: ListItemNodeコンポーネント
 * - strong: <strong>タグ内にNodesRendererコンポーネント
 * - emphasis: <em>タグ内にNodesRendererコンポーネント
 * - break: <br>タグ
 * - image: 非同期でCustomImageコンポーネント
 * - code: <div>タグ内に危険なHTML
 * - delete: <del>タグ内にNodesRendererコンポーネント
 * - table: <div>タグ内にTableNodeコンポーネント
 * - thematicBreak: <hr>タグ
 * - html: <div>タグ内に危険なHTML
 * - twitter: Twitter埋め込み
 * - youtube: YouTube埋め込み
 *
 * 未知のノードタイプの場合、エラーメッセージとノードのJSON表現を表示する。
 */
const renderNode = async (node: any, index: number) => {
  const nodeRenderers: { [key: string]: any } = {
    // headingノードをHeadingNodeコンポーネントに変換
    heading: (node: Heading) => <HeadingNode key={index} node={node} />,

    // textノードをそのままテキスト値として返す
    text: (node: Text) => node.value,

    // linkReferenceノードをそのままテキスト値として返す
    linkReference: (node: Text) => node.value,

    // definitionノードをそのままテキスト値として返す
    definition: (node: Text) => node.value,

    // paragraphノードを<p>タグ内にNodesRendererコンポーネントとして変換
    paragraph: (node: Paragraph) => (
      <p className={styles.paragraph}>
        <NodesRenderer nodes={node.children} />
      </p>
    ),

    // inlineCodeノードを<code>タグに変換
    inlineCode: (node: InlineCode) => <code>{node.value}</code>,

    // blockquoteノードを<blockquote>タグ内にNodesRendererコンポーネントとして変換
    blockquote: (node: Blockquote) => (
      <blockquote className={styles.blockquote}>
        <NodesRenderer nodes={node.children} />
      </blockquote>
    ),

    // linkノードをCustomLinkコンポーネントに変換
    link: (node: Link) => <CustomLink key={index} node={node} />,

    // listノードをListNodeコンポーネントに変換
    list: (node: List) => <ListNode key={index} node={node} />,

    // listItemノードをListItemNodeコンポーネントに変換
    listItem: (node: ListItem) => <ListItemNode key={index} node={node} />,

    // strongノードを<strong>タグ内にNodesRendererコンポーネントとして変換
    strong: (node: Strong) => (
      <strong>
        <NodesRenderer nodes={node.children} />
      </strong>
    ),

    // emphasisノードを<em>タグ内にNodesRendererコンポーネントとして変換
    emphasis: (node: Emphasis) => (
      <em>
        <NodesRenderer nodes={node.children} />
      </em>
    ),

    // breakノードを<br>タグに変換
    break: () => <br />,

    // imageノードを非同期でCustomImageコンポーネントに変換
    image: async (node: Image) => {
      const imageBlurUrl = await getCloudinaryBlurredSrc(node.url);
      return (
        <CustomImage
          src={node.url}
          alt={node.alt ?? undefined}
          title={node.title ?? undefined}
          blurredSrc={imageBlurUrl}
        />
      );
    },

    // codeノードを<div>タグ内に危険なHTMLとして変換
    code: (node: Code) => (
      <div
        className={styles.codeblock}
        dangerouslySetInnerHTML={{ __html: node.value }}
      />
    ),

    // deleteノードを<del>タグ内にNodesRendererコンポーネントとして変換
    delete: (node: Delete) => (
      <del>
        <NodesRenderer nodes={node.children} />
      </del>
    ),

    // tableノードを<div>タグ内にTableNodeコンポーネントとして変換
    table: (node: Table) => (
      <div className={styles.table}>
        <TableNode key={index} node={node} />
      </div>
    ),

    // thematicBreakノードを<hr>タグに変換
    thematicBreak: () => <hr className={styles.line} />,

    // htmlノードを<div>タグ内に危険なHTMLとして変換
    html: (node: Html) => (
      <div
        className={styles.box}
        key={index}
        dangerouslySetInnerHTML={{ __html: node.value }}
      />
    ),

    // twitterノードをTwitter埋め込みとして変換
    twitter: (node: any) => (
      <div className="twitter-embed">
        <blockquote className="twitter-tweet">
          <a
            href={`https://twitter.com/user/status/${node.value}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter: {node.value}
          </a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" />
      </div>
    ),

    // youtubeノードをYouTube埋め込みとして変換
    youtube: (node: any) => (
      <div className={styles.youtube}>
        <iframe src={`https://www.youtube.com/embed/${node.value}`}></iframe>
      </div>
    ),
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
