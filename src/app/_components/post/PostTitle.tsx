import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-3xl leading-normal font-semibold break-words">
      {children}
    </h1>
  );
};

export default PostTitle;
