const TwitterNode = ({ node }: { node: any }) => {
  return (
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
  );
};

export default TwitterNode;
