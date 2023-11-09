import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { instance } from "../../utils/axiosInstance";
import { Item } from "../../types/book.types";

import Container from "../../components/Container";
import BookCard from "../../components/BookCard";
import Pagination from "../../components/Pagination";

async function fetchData(page: number, category: string | undefined) {
  const resp = await instance.get(
    `/books?category=${category}&_page=${page}&_limit=9`
  );

  return resp.data;
}

export default function BooksView() {
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery(
    [page, category],
    () => fetchData(page, category),
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
    <div className="w-full h-full flex flex-col items-center justify-between gap-20 pt-20">
      <Container>
        {data.map((book: Item) => (
          <BookCard key={book.id} book={book} showOnHover />
        ))}
      </Container>
      <Pagination page={page} setActivePage={handlePageChange} />
    </div>
  );
}
