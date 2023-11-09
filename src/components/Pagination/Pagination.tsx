import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { ICON_SIZE } from "./lib/constats";

interface PaginationProps {
  total?: number;
  limit?: number;
  page?: number;
  setActivePage: (page: number) => void;
}

const Pagination = ({
  setActivePage,
  page = 1,
  total = 12,
  limit = 8,
}: PaginationProps): React.ReactElement => {
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pages.push(i);
  }

  const handlePreviousPage = (): void => {
    if (page === 1) {
      return;
    }

    setActivePage(page - 1);
  };

  const handleNextPage = (): void => {
    if (page === pages.length) {
      return;
    }

    setActivePage(page + 1);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 m-5">
      <AiOutlineArrowLeft
        size={ICON_SIZE}
        onClick={handlePreviousPage}
        style={{
          cursor: "pointer",
          color: page === 1 ? "gray" : "black",
        }}
      />
      {pages.map((index: number) => (
        <div
          key={index}
          className={`w-12 h-12 max-lg:w-9 max-lg:h-9 text-white flex justify-center items-center ${
            index === page ? "bg-green" : "bg-secondary"
          } hover:cursor-pointer`}
          onClick={() => setActivePage(index)}
        >
          {index}
        </div>
      ))}
      <AiOutlineArrowRight
        size={ICON_SIZE}
        onClick={handleNextPage}
        style={{
          cursor: "pointer",
          color: page === pages.length ? "gray" : "black",
        }}
      />
    </div>
  );
};

export default Pagination;
