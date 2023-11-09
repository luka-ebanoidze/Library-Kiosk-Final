import { useState } from "react";

import Pagination from "../../components/Pagination/Pagination";
import Container from "../../components/Container";
import CategoryCard from "../../components/CategoryCard";
import LinkButton from "../../components/LinkButton";

import { ROUTES_CONFIG } from "../../config/routes";
const { RETURN_BOOK } = ROUTES_CONFIG;

import { instance } from "../../utils/axiosInstance";
import { useQuery } from "react-query";

interface Category {
  id: number;
  category: string;
}

const sharedStyles =
  "bg-primary text-white text-xl py-6 px-20 rounded-3xl text-center border-secondary border-4 hover:bg-white hover:text-secondary font-bold max-sm:px-4 max-sm:py-7 ";

async function fetchData(page: number) {
  const resp = await instance.get(`/categories?_page=${page}&_limit=8`);

  return resp.data;
}
const BorrowBookView = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery(
    ["categories", page],
    () => fetchData(page),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error !</h3>;
  }

  if (!data) {
    return <h3>No Data</h3>;
  }

  const handlePageChange = (page: number): void => {
    setPage(page);
  };

  return (
    <div className="w-full h-full flex flex-col gap-10 items-center py-10">
      <LinkButton path={RETURN_BOOK.path} className={sharedStyles}>
        {RETURN_BOOK.name}
      </LinkButton>
      <div className="w-3/4 min-h-[680px] max-lg:w-full">
        <Container>
          {data.map(({ id, category }: Category) => (
            <CategoryCard key={id} category={category} />
          ))}
        </Container>
      </div>
      <Pagination page={page} setActivePage={handlePageChange} />
    </div>
  );
};

export default BorrowBookView;
