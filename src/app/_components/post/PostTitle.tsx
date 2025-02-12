import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="mt-6 mb-4 text-2xl font-semibold break-words break-keep md:mb-6">
      {children}
    </h1>
  );
};

export default PostTitle;
