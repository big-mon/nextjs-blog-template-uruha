import styles from "@styles/markdown.module.scss";

const YouTubeNode = ({ node }: { node: any }) => {
  return (
    <div className={styles.youtube}>
      <iframe src={`https://www.youtube.com/embed/${node.value}`}></iframe>
    </div>
  );
};

export default YouTubeNode;
