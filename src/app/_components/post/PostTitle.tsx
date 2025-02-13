import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-3xl font-semibold break-words break-keep">
      {children}
    </h1>
  );
};

export default PostTitle;
