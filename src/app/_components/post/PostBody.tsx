import { MarkdownRenderer } from "@lib/markdown/markdownRenderer";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="mx-auto max-w-3xl px-5 leading-relaxed tracking-wider md:px-0">
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </div>
  );
};

export default PostBody;
