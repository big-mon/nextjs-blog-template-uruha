import Link from "next/link";
import ArrowIcon from "@components/icon/arrow";

type Props = {
  urlPrefix: string;
  currentPage: number;
  totalPage: number;
};

const Pagination = ({ urlPrefix, currentPage, totalPage }: Props) => {
  const hasPrev = currentPage > 1;
  const hasNext = totalPage > currentPage;

  return (
    <div className="mx-auto mt-6 flex justify-center">
      {hasPrev && (
        <Link
          href={urlPrefix + (Number(currentPage) - 1)}
          className="mr-3 inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-700"
        >
          <span className="mr-2 -scale-x-100">
            <ArrowIcon />
          </span>
          Previous
        </Link>
      )}

      {hasNext && (
        <Link
          href={urlPrefix + (Number(currentPage) + 1)}
          className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-700"
        >
          Next
          <span className="ml-2">
            <ArrowIcon />
          </span>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
