import { SectionTitle } from "./SectionTitle";

type Props = {
  type: "all" | "category";
  category?: string;
};

export const ArticleList = ({ type, category }: Props) => {
  const label =
    type === "all" ? "Latest Articles" : category || "Default Category";

  return (
    <section>
      <SectionTitle title={label} />
    </section>
  );
};
